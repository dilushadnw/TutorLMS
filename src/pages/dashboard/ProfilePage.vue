<template>
  <q-page class="q-pa-lg">
    <div class="row q-col-gutter-lg justify-center">
      <!-- Profile Card -->
      <div class="col-12 col-md-4">
        <q-card flat class="bg-white rounded-lg q-pa-lg shadow-1 text-center h-full">
          <q-avatar
            size="100px"
            color="grey-3"
            text-color="grey-8"
            icon="person"
            class="q-mb-md relative-position"
          >
            <q-badge
              floating
              color="black"
              rounded
              icon="edit"
              class="cursor-pointer"
              style="bottom: 0; right: 0; top: auto"
            />
          </q-avatar>
          <div class="text-h5 text-weight-bold">{{ profile.full_name || 'Loading...' }}</div>
          <div class="text-grey-7 q-mb-md">{{ userEmail }}</div>

          <q-chip outline color="primary" label="Student" class="q-mb-lg" />

          <q-separator class="q-my-md" />

          <div class="row justify-between text-left q-px-sm">
            <div class="text-grey-7">Joined</div>
            <div class="text-weight-medium">Jan 2026</div>
          </div>
        </q-card>
      </div>

      <!-- Edit Details -->
      <div class="col-12 col-md-8">
        <q-card flat class="bg-white rounded-lg q-pa-lg shadow-1 h-full">
          <div class="text-h6 text-weight-bold q-mb-lg">Personal Information</div>

          <q-form @submit="updateProfile" class="q-gutter-y-md">
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <q-input outlined v-model="profile.full_name" label="Full Name" dense />
              </div>
              <div class="col-12 col-md-6">
                <q-input outlined v-model="form.phone" label="Phone Number" dense type="tel" />
              </div>
              <div class="col-12">
                <q-input
                  outlined
                  v-model="form.bio"
                  label="Bio"
                  dense
                  type="textarea"
                  rows="3"
                  hint="Tell us a little about yourself"
                />
              </div>
            </div>

            <div class="text-right q-mt-lg">
              <q-btn flat label="Cancel" color="grey-7" class="q-mr-sm" />
              <q-btn
                unelevated
                color="black"
                label="Save Changes"
                type="submit"
                :loading="saving"
              />
            </div>
          </q-form>

          <q-separator class="q-my-xl" />

          <div class="text-h6 text-weight-bold q-mb-md text-negative">Danger Zone</div>
          <p class="text-grey-7">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <q-btn outline color="negative" label="Delete Account" no-caps />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from 'boot/supabase'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const saving = ref(false)
const userEmail = ref('')

const profile = ref({
  full_name: '',
  // other fields would come from a 'profiles' table usually,
  // but for now we might be relying on auth metadata or a separate table we haven't created yet.
  // I will assume we are just managing auth metadata for name for now, or prepare for a table.
})

const form = ref({
  phone: '',
  bio: '',
})

onMounted(async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (user) {
    userEmail.value = user.email
    // Get metadata
    profile.value.full_name = user.user_metadata.full_name || ''

    // Ideally we fetch extra data from a 'profiles' table here
  }
})

const updateProfile = async () => {
  saving.value = true
  try {
    // Update auth metadata
    const { error } = await supabase.auth.updateUser({
      data: { full_name: profile.value.full_name },
    })

    if (error) throw error

    // Here we would also update the 'profiles' table for phone/bio

    $q.notify({
      color: 'positive',
      message: 'Profile updated successfully',
      icon: 'check',
    })
  } catch (error) {
    $q.notify({
      color: 'negative',
      message: error.message,
      icon: 'error',
    })
  } finally {
    saving.value = false
  }
}
</script>

<style scoped>
.rounded-lg {
  border-radius: 16px;
}
</style>
