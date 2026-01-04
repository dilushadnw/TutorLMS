<template>
  <q-page class="bg-white flex flex-center">
    <div class="column items-center q-pa-lg" style="max-width: 400px; width: 100%">
      <div class="q-mb-xl text-center">
        <q-avatar
          size="56px"
          color="black"
          text-color="white"
          icon="school"
          class="q-mb-md shadow-5"
        />
        <h1 class="text-h4 text-weight-bold q-mb-xs">Welcome Back</h1>
        <p class="text-grey-7">Log in to continue your learning journey.</p>
      </div>

      <q-form @submit="handleLogin" class="full-width q-gutter-y-md">
        <q-input
          v-model="email"
          label="Email Address"
          outlined
          dense
          bg-color="grey-1"
          color="black"
          :rules="[
            (val) => !!val || 'Email is required',
            (val) => /.+@.+\..+/.test(val) || 'Valid email required',
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="email" color="grey-6" />
          </template>
        </q-input>

        <q-input
          v-model="password"
          label="Password"
          type="password"
          outlined
          dense
          bg-color="grey-1"
          color="black"
          :rules="[(val) => !!val || 'Password is required']"
        >
          <template v-slot:prepend>
            <q-icon name="lock" color="grey-6" />
          </template>
        </q-input>

        <div class="row justify-between items-center q-my-sm">
          <q-checkbox v-model="rememberMe" label="Remember me" size="sm" color="black" dense />
          <q-btn flat no-caps label="Forgot password?" color="grey-7" size="sm" />
        </div>

        <q-btn
          type="submit"
          unelevated
          rounded
          color="black"
          text-color="white"
          size="lg"
          label="Log in"
          no-caps
          class="full-width shadow-3"
          :loading="loading"
        />
      </q-form>

      <div class="q-mt-lg text-grey-8">
        Don't have an account?
        <router-link
          to="/register"
          class="text-black text-weight-bold"
          style="text-decoration: none"
          >Sign up</router-link
        >
      </div>

      <q-btn flat no-caps color="grey-7" label="Back to Home" to="/" class="q-mt-md" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from 'boot/supabase'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const router = useRouter()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const loading = ref(false)

const handleLogin = async () => {
  loading.value = true
  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    if (error) throw error

    $q.notify({
      color: 'positive',
      position: 'top',
      message: 'Login successful!',
      icon: 'check_circle',
    })

    // HARDCODED ADMIN CHECK (As requested)
    if (email.value === 'dilusha@gmail.com') {
      router.push('/admin')
    } else {
      router.push('/dashboard')
    }
  } catch (error) {
    console.error('Login error:', error)
    $q.notify({
      color: 'negative',
      position: 'top',
      message: error.message || 'Error logging in',
      icon: 'error',
    })
  } finally {
    loading.value = false
  }
}
</script>
