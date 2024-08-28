const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: 'http://example.com/auth/callback',
    },
  })
  
  if (data.url) {
    redirect(data.url) // use the redirect API for your server framework
  }
  