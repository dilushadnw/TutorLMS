import { createClient } from '@supabase/supabase-js'
import { boot } from 'quasar/wrappers'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or Key is missing! Check .env file and restart server.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export default boot(({ app }) => {
  app.config.globalProperties.$supabase = supabase
})
