"use client"

import LoginPage from "./pages/loginPage";
import { supabase } from "@/lib/supabaseClient";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
      if (user) {
        router.replace("/home");
      }
    });
    // eslint-disable-next-line
  }, []);

  if (loading) return null;
  return <LoginPage />;
}
