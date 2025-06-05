'use client'
import { Auth } from '@supabase/auth-ui-react';
import { darkThemes, ThemeMinimal, ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/supabaseClient';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function LoginPage() {
    const router = useRouter();

    useEffect(() => {
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN' && session?.user) {
                router.push('/home');
            }
        });
        return () => {
            subscription.unsubscribe();
        };
    }, [router]);

    return (
        <div className={`min-h-screen bg-black text-white flex flex-col items-center justify-center`}>
            <motion.div
                className="absolute w-full h-full overflow-hidden pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
            >
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        animate={{
                            y: ['100vh', '-10vh'],
                            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                            opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                            duration: 8 + Math.random() * 5,
                            repeat: Infinity,
                            repeatType: 'loop',
                            delay: Math.random() * 5,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </motion.div>

            <motion.h1
                className="text-5xl mb-10 z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                CASE ZERO
            </motion.h1>

            <div className="z-10">
                <Auth
                    supabaseClient={supabase}
                    theme='dark'
                    appearance={{
                        theme: ThemeSupa,
                    }}
                    providers={['google']}
                    onlyThirdPartyProviders
                />
            </div>
        </div>
    );
}