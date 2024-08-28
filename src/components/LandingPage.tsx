'use client'

import { Button } from "@/components/ui/button"
import { supabase } from '@/lib/supabase'

export default function LandingPage() {
  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
      },
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f4f4f5] text-[#1c1c1c] font-['IBM_Plex_Mono']">
      <div className="bg-white p-12 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Job Page Tracker</h1>
        <div className="space-y-4">
          <Button onClick={handleSignIn} className="w-full bg-[#1c1c1c] hover:bg-[#2c2c2c] text-white font-medium">
            Sign In with Google
          </Button>
        </div>
      </div>
    </div>
  )
}