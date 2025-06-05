"use client"

import { use, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import TypewriterText from "../common/typewriterText";
import { Button } from "@/components/ui/button";
import {
    TabsList,
    TabsContent,
    TabsTrigger,
    Tabs
} from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/themeToggle";

export default function HomePage() {
    const [email, setEmail] = useState<string | null>(null);
    const [displayName, setDisplayName] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [instructionCompleted, setIntructionCompleted] = useState(false);
    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.reload();
    };
    const onIntructionComplete = () => {
        setIntructionCompleted(true);
        console.log("instruction is completed")
    }
    const text = `You have been granted provisional access to the Agency Intelligence Network.Your current clearance level: Intern OperativeYour mission: Investigate high-priority anomalies, decode encrypted files, and expose the truth behind a series of covert incidents.Proceed with caution. Every clue matters.Select your operational difficulty to begin your first mission.`
    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setDisplayName(user?.user_metadata?.name)
            setEmail(user?.email ?? null);
            setLoading(false);
        };
        getUser();
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="w-full flex justify-end items-center p-4">
                <Button
                    onClick={handleLogout}
                >
                    Logout
                </Button>
                <div className="ml-5">
                    <ModeToggle></ModeToggle>
                </div>
            </div>
            <div className="p-20">
                <div className="text-3xl mb-10">
                    Welcome agent {displayName}
                </div>
                <div className="main-context text-sm">
                    <TypewriterText text={text} onComplete={onIntructionComplete}></TypewriterText>
                </div>
                {
                    instructionCompleted ?
                        (
                            <div className="mt-10">
                                <Tabs defaultValue="Trainee">
                                    <TabsList>
                                        <TabsTrigger value="Trainee">Trainee</TabsTrigger>
                                        <TabsTrigger value="FA">Field Agent</TabsTrigger>
                                        <TabsTrigger value="SO">Special Ops</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="Trainee">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Trainee</CardTitle>
                                                <CardDescription>
                                                    You’re just getting started, Agent. Select this to begin your initiation.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="grid gap-4">
                                                <div className="grid gap-2">
                                                    <Label>Mission Brief</Label>
                                                    <p className="text-muted-foreground">Low risk. Learn to analyze crime scene documents, decode images, and identify suspects.</p>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Button variant="default">Select Trainee</Button>
                                            </CardFooter>
                                        </Card>
                                    </TabsContent>
                                    <TabsContent value="FA">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Field Agent</CardTitle>
                                                <CardDescription>
                                                    You're trained and ready. This mode introduces red herrings and branching leads.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="grid gap-4">
                                                <div className="grid gap-2">
                                                    <Label>Mission Brief</Label>
                                                    <p className="text-muted-foreground">Medium risk. Expect conflicting witness statements and timed decisions.</p>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Button variant="secondary">Select Field Agent</Button>
                                            </CardFooter>
                                        </Card>
                                    </TabsContent>
                                    <TabsContent value="SO">
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Special Ops</CardTitle>
                                                <CardDescription>
                                                    Only for elite agents. Every clue matters. One wrong move could cost the case.
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="grid gap-4">
                                                <div className="grid gap-2">
                                                    <Label>Mission Brief</Label>
                                                    <p className="text-muted-foreground">High risk. Deep conspiracies, encrypted files, AI-generated traps, and multiplayer twist scenarios.</p>
                                                </div>
                                            </CardContent>
                                            <CardFooter>
                                                <Button variant="destructive">Select Special Ops</Button>
                                            </CardFooter>
                                        </Card>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        ) :
                        (
                            <div></div>
                        )
                }
            </div>
        </div>
    );
}
