import { useState } from "react";
import { Page } from "../app/page";
import PencilLogo from "../assests/Pencil";

interface HeaderProps {
  isAuthenticated: boolean;
  currentPage: Page
  onNavigate: (page: Page) => void;
  onSignOut: () => void;
}

export function Header({isAuthenticated,currentPage,onNavigate,onSignOut}:HeaderProps){
    const [IsOpen,setIsOpen] = useState();





    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <PencilLogo></PencilLogo>

          </div>
        </header>
        
    
    )

}

