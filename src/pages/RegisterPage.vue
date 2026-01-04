<template>
  <q-page class="bg-white flex flex-center">
    <div class="column items-center q-pa-lg" style="max-width: 400px; width: 100%">
      <div class="q-mb-xl text-center">
        <q-avatar
          size="56px"
          color="black"
          text-color="white"
          icon="person_add"
          class="q-mb-md shadow-5"
        />
        <h1 class="text-h4 text-weight-bold q-mb-xs">Create Account</h1>
        <p class="text-grey-7">Join TutorLMS today.</p>
      </div>

      <q-form @submit="handleRegister" class="full-width q-gutter-y-md">
        <!-- Name Field -->
        <q-input
          v-model="name"
          label="Full Name"
          outlined
          dense
          bg-color="grey-1"
          color="black"
          :rules="[(val) => !!val || 'Name is required']"
        >
          <template v-slot:prepend>
            <q-icon name="person" color="grey-6" />
          </template>
        </q-input>

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
          :rules="[
            (val) => !!val || 'Password is required',
            (val) => val.length >= 6 || 'Min 6 characters',
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="lock" color="grey-6" />
          </template>
        </q-input>

        <q-btn
          type="submit"
          unelevated
          rounded
          color="black"
          text-color="white"
          size="lg"
          label="Sign Up"
          no-caps
          class="full-width shadow-3"
          :loading="loading"
        />
      </q-form>

      <div class="q-mt-lg text-grey-8">
        Already have an account?
        <router-link to="/login" class="text-black text-weight-bold" style="text-decoration: none"
          >Log in</router-link
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

const name = ref('')
const email = ref('')
const password = ref('')
const loading = ref(false)

const handleRegister = async () => {
  loading.value = true
  console.log('Attempting registration...')
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          full_name: name.value,
        },
      },
    })

    if (error) throw error

    // Create Profile Record manually if trigger fails/doesn't exist (Client-side fallback)
    if (data.user) {
      await supabase.from('profiles').insert({
        id: data.user.id,
        email: email.value,
        full_name: name.value,
        role: 'student',
      })
    }

    console.log('Registration successful:', data)
    $q.notify({
      color: 'positive',
      position: 'top',
      message: 'Registration successful! Please check your email.',
      icon: 'check_circle',
    })
    router.push('/dashboard')
  } catch (error) {
    console.error('Registration error:', error)
    $q.notify({
      color: 'negative',
      position: 'top',
      message: error.message || 'Error creating account. Please try again.',
      icon: 'error',
    })
  } finally {
    loading.value = false
  }
}
</script>
