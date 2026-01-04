<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-2">
    <!-- Admin Header -->
    <q-header class="bg-black text-white shadow-1">
      <q-toolbar class="q-py-sm">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold flex items-center">
          <q-icon name="admin_panel_settings" class="q-mr-sm" size="md" color="white" />
          TutorLMS Admin
        </q-toolbar-title>

        <q-space />

        <!-- Admin User Menu -->
        <div class="row items-center q-gutter-x-sm">
          <q-btn round flat icon="notifications" color="white">
            <!-- Admin notifications -->
          </q-btn>
          <q-separator vertical inset color="grey-8" />
          <q-btn flat no-caps class="q-ml-sm">
            <q-avatar size="32px" color="white" text-color="black" class="text-weight-bold">
              A
            </q-avatar>
            <div class="q-ml-sm text-subtitle2 gt-xs">Admin</div>
            <q-menu>
              <q-list style="min-width: 150px">
                <q-item clickable v-close-popup @click="handleLogout">
                  <q-item-section class="text-negative">Log out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Admin Sidebar -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-white">
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item-label header class="text-weight-bold text-uppercase q-mb-sm"
            >Admin Controls</q-item-label
          >

          <q-item clickable v-ripple exact to="/admin" active-class="bg-black text-white">
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>Overview</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/admin/students">
            <q-item-section avatar>
              <q-icon name="people" />
            </q-item-section>
            <q-item-section>Students</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/admin/classes">
            <q-item-section avatar>
              <q-icon name="class" />
            </q-item-section>
            <q-item-section>Manage Classes</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/admin/payments">
            <q-item-section avatar>
              <q-icon name="payments" />
            </q-item-section>
            <q-item-section>Revenue</q-item-section>
          </q-item>

          <q-separator class="q-my-md" />
          <q-item clickable v-ripple to="/admin/settings">
            <q-item-section avatar>
              <q-icon name="settings_applications" />
            </q-item-section>
            <q-item-section>System Settings</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- Page Content -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from 'boot/supabase'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const router = useRouter()
const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

async function handleLogout() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    $q.notify({
      color: 'negative',
      message: 'Error logging out',
      icon: 'error',
    })
  } else {
    router.push('/login')
  }
}
</script>
