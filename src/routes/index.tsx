import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { SetupApp } from "@/components/garage/setup-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <SetupApp />
      <Toaster theme="dark" position="bottom-center" />
    </main>
  );
}
