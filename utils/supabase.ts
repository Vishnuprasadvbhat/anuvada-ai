// import { AppState } from 'react-native'
// import 'react-native-url-polyfill/auto'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { createClient, processLock } from '@supabase/supabase-js'

// const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL
// const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY
// if (!supabaseUrl || !supabaseKey) {
//   throw new Error('Supabase URL and Key must be defined in environment variables')
// }
// if (typeof supabaseUrl !== 'string' || typeof supabaseKey !== 'string') {
//   throw new Error('Supabase URL and Key must be strings')
// }

// export const supabase = createClient(
//   supabaseUrl,
//   supabaseKey,
//   {
//     auth: {
//       storage: AsyncStorage,
//       autoRefreshToken: true,
//       persistSession: true,
//       detectSessionInUrl: false,
//       lock: processLock,
//     },
//   })
        

// AppState.addEventListener('change', (state) => {
//   if (state === 'active') {
//     supabase.auth.startAutoRefresh()
//   } else {
//     supabase.auth.stopAutoRefresh()
//   }
// })