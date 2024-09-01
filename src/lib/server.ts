import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function signInWithOAuth(provider: string) {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`,
    },
  })

  if (error) {
    console.error('OAuth sign in error:', error)
    return { error }
  }

  if (data.url) {
    redirect(data.url)
  }

  return { data }
}