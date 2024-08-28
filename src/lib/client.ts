await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `http://example.com/auth/callback`,
    },
  })
  