// import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
// import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
// import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import SupabaseLogo from "@/components/SupabaseLogo";
import NextLogo from "@/components/NextLogo";
import Header from "@/components/Header";
import { ModeToggle } from "@/components/ui/toggle-dark-mode";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm">
          {/* <DeployButton /> */}
          {isSupabaseConnected && <AuthButton />}
          <ModeToggle />
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-100 max-w-4xl px-3">
        <Header />
        {/* <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Next steps</h2>
          {isSupabaseConnected ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
        </main> */}
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-end text-center text-xs">
        <p className="p-3 border-e">
          Made with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            <NextLogo />
          </a>
        </p>
        <p className="p-3">
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            <SupabaseLogo />
          </a>
        </p>
      </footer>
    </div>
  );
}
