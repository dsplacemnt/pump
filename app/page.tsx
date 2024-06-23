import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen flex flex-col gap-4">
      <Label>Welcome to pump</Label>
      <Button>
        <Link href="/signin">Sign in</Link>
      </Button>
      <Button>
        <Link href="/signup">Sign up</Link>
      </Button>
    </div>
  );
}
