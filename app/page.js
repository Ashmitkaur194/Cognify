import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      <h2>ashmit</h2>
      <Button>Hello Ash!</Button>
     <UserButton></UserButton>
      
    </div>
  );
}
