import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";


export function Navbar(){
    return (
       <nav className="flex items-center justify-between px-6 py-4 border-b bg-background">
      <div className="font-bold text-xl">
        <Link href="/">ToDo</Link>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-between ">
      </div>
        {/* Add the Toggle here */}
        <ModeToggle />
      </div>
    </nav>
    );
}