<template>
  <q-page class="q-pa-lg">
    <div class="row items-center justify-between q-mb-lg">
      <div>
        <h1 class="text-h4 text-weight-bold q-my-none">User Management</h1>
        <p class="text-grey-7 q-mt-sm">Manage students, tutors, and admins.</p>
      </div>
      <q-btn unelevated color="black" icon="add" label="Add User" @click="openAddUserDialog" />
    </div>

    <!-- Users Table -->
    <q-card flat class="bg-white rounded-lg shadow-1">
      <q-table :rows="users" :columns="columns" row-key="id" :loading="loading" flat bordered>
        <!-- Role Column -->
        <template v-slot:body-cell-role="props">
          <q-td :props="props">
            <q-chip
              :color="getRoleColor(props.row.role)"
              text-color="white"
              dense
              class="text-weight-bold"
            >
              {{ props.row.role.toUpperCase() }}
            </q-chip>
          </q-td>
        </template>

        <!-- Actions Column -->
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="text-right">
            <q-btn flat round color="grey-7" icon="edit" size="sm" @click="editUser(props.row)" />
            <q-btn
              flat
              round
              color="negative"
              icon="delete"
              size="sm"
              @click="confirmDelete(props.row)"
            />
          </q-td>
        </template>
      </q-table>
    </q-card>

    <!-- Add/Edit User Dialog -->
    <q-dialog v-model="dialogOpen">
      <q-card style="min-width: 400px; border-radius: 12px">
        <q-card-section>
          <div class="text-h6 text-weight-bold">{{ isEditing ? 'Edit User' : 'Add New User' }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none q-gutter-y-md">
          <q-input outlined v-model="form.full_name" label="Full Name" dense />
          <q-input outlined v-model="form.email" label="Email Address" dense :disable="isEditing" />
          <q-select
            outlined
            v-model="form.role"
            :options="['student', 'tutor', 'admin']"
            label="Role"
            dense
          />
        </q-card-section>

        <q-card-actions align="right" class="q-pa-md">
          <q-btn flat label="Cancel" color="grey-7" v-close-popup />
          <q-btn
            unelevated
            color="black"
            :label="isEditing ? 'Save Changes' : 'Add User'"
            @click="saveUser"
            :loading="saving"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Delete Confirmation -->
    <q-dialog v-model="deleteDialogOpen">
      <q-card style="border-radius: 12px">
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="red-1" text-color="negative" />
          <span class="q-ml-sm text-weight-medium">Are you sure you want to delete this user?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="grey-7" v-close-popup />
          <q-btn flat label="Delete" color="negative" @click="deleteUser" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from 'boot/supabase'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const users = ref([])
const loading = ref(false)
const saving = ref(false)

const dialogOpen = ref(false)
const deleteDialogOpen = ref(false)
const isEditing = ref(false)
const selectedUser = ref(null)

const form = ref({
  full_name: '',
  email: '',
  role: 'student',
})

const columns = [
  {
    name: 'full_name',
    required: true,
    label: 'Name',
    align: 'left',
    field: 'full_name',
    sortable: true,
  },
  { name: 'email', align: 'left', label: 'Email', field: 'email', sortable: true },
  { name: 'role', align: 'center', label: 'Role', field: 'role', sortable: true },
  {
    name: 'created_at',
    align: 'right',
    label: 'Joined Date',
    field: (row) => new Date(row.created_at).toLocaleDateString(),
    sortable: true,
  },
  { name: 'actions', align: 'right', label: 'Actions' },
]

const getRoleColor = (role) => {
  switch (role) {
    case 'admin':
      return 'red-8'
    case 'tutor':
      return 'purple-8'
    default:
      return 'green-7'
  }
}

onMounted(() => {
  fetchUsers()
})

const fetchUsers = async () => {
  loading.value = true
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching users:', error)
    $q.notify({ color: 'negative', message: 'Failed to load users', icon: 'error' })
  } else {
    users.value = data
  }
  loading.value = false
}

const openAddUserDialog = () => {
  isEditing.value = false
  form.value = { full_name: '', email: '', role: 'student' }
  dialogOpen.value = true
}

const editUser = (user) => {
  isEditing.value = true
  selectedUser.value = user
  form.value = { ...user }
  dialogOpen.value = true
}

const confirmDelete = (user) => {
  selectedUser.value = user
  deleteDialogOpen.value = true
}

const saveUser = async () => {
  saving.value = true
  try {
    if (isEditing.value) {
      // Update existing
      const { error } = await supabase
        .from('profiles')
        .update({ full_name: form.value.full_name, role: form.value.role })
        .eq('id', selectedUser.value.id)

      if (error) throw error
      $q.notify({ color: 'positive', message: 'User updated successfully' })
    } else {
      // Add new (Create placeholder profile)
      // Note: This does NOT create a Supabase Auth User (requires Backend/Admin API)
      // We are just adding a record to profiles for record keeping or pre-approval.
      // Ideally, we'd call an Edge Function here.
      // For this demo, we insert into profiles and assume user will sign up later (matching email?).
      // OR we just simulate it.

      const { error } = await supabase.from('profiles').insert({
        // Mock ID since we don't have auth user yet.
        // Real implementation requires Admin API.
        // We'll generate a random UUID for the profile placeholder.
        // But 'id' references auth.users... so this will FAIL foreign key constraint unless we drop it or have a user.
        // Constraint: "id uuid references auth.users".
        // FIX: We cannot insert a non-existent auth user ID.
        // Workaround for UI Demo:
        // We tell the user "Invite Sent" (mock).
        // But user asked to "Add User".
        // Since we can't create Auth users client-side without their password,
        // we will show a notification explained that limitation or just log it.
      })

      // Actually, let's just create a row using a randomly generated UUID *IF* we remove the FG constraint?
      // No, let's respect the DB.
      // We will throw an error/notification saying "Direct User Creation requires Admin API. Please ask user to Register."
      // OR we can't implement "Add" fully client-side.

      throw new Error(
        'Direct creation not supported in this demo. Please ask users to Sign Up via the Register page.',
      )
    }

    dialogOpen.value = false
    fetchUsers()
  } catch (error) {
    $q.notify({ color: 'negative', message: error.message, icon: 'error' })
  } finally {
    saving.value = false
  }
}

const deleteUser = async () => {
  const { error } = await supabase.from('profiles').delete().eq('id', selectedUser.value.id)
  if (error) {
    $q.notify({ color: 'negative', message: 'Error deleting user', icon: 'error' })
  } else {
    $q.notify({ color: 'positive', message: 'User deleted', icon: 'check' })
    fetchUsers()
  }
  deleteDialogOpen.value = false
}
</script>
