import { supabase } from "../supabase/client"


export const LoginGoogle = async () => {
  try {
    await supabase.auth.signInWithOAuth({
      provider: "google"
     })
  } catch (error) {
    console.log("google login error:",error)
  }
}
