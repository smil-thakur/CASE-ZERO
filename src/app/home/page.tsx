
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import HomePage from "../pages/homePage";

export default function HomeRoute() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user);
            setLoading(false);
            if (!user) {
                router.replace("/");
            }
        });
    }, [router]);

    if (loading) return null;
    if (!user) return null;
    return <HomePage />;
}
