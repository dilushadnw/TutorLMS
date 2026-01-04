<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-2">
    <!-- Header -->
    <q-header class="bg-white text-black shadow-1">
      <q-toolbar class="q-py-sm">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold flex items-center">
          <q-icon name="school" class="q-mr-sm" size="md" color="primary" />
          TutorLMS
        </q-toolbar-title>

        <q-space />

        <!-- User Menu -->
        <div class="row items-center q-gutter-x-sm">
          <q-btn round flat icon="notifications" color="grey-8">
            <q-badge floating color="red" rounded size="sm" />
          </q-btn>
          <q-separator vertical inset />
          <q-btn flat no-caps class="q-ml-sm">
            <q-avatar size="32px" color="primary" text-color="white" class="text-weight-bold">
              U
            </q-avatar>
            <div class="q-ml-sm text-subtitle2 gt-xs">User</div>
            <q-menu>
              <q-list style="min-width: 150px">
                <q-item clickable v-close-popup to="/dashboard/profile">
                  <q-item-section>Profile</q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="handleLogout">
                  <q-item-section class="text-negative">Log out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Sidebar -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-white">
      <q-scroll-area class="fit">
        <q-list padding class="text-grey-8">
          <q-item-label header class="text-weight-bold text-uppercase q-mb-sm">Menu</q-item-label>

          <q-item
            clickable
            v-ripple
            exact
            to="/dashboard"
            active-class="bg-grey-2 text-primary text-weight-bold"
          >
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
            <q-item-section>Dashboard</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/dashboard/classes">
            <q-item-section avatar>
              <q-icon name="videocam" />
            </q-item-section>
            <q-item-section>My Classes</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/dashboard/recordings">
            <q-item-section avatar>
              <q-icon name="smart_display" />
            </q-item-section>
            <q-item-section>Recordings</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/dashboard/payments">
            <q-item-section avatar>
              <q-icon name="receipt_long" />
            </q-item-section>
            <q-item-section>Payments</q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item clickable v-ripple to="/dashboard/settings">
            <q-item-section avatar>
              <q-icon name="settings" />
            </q-item-section>
            <q-item-section>Settings</q-item-section>
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
