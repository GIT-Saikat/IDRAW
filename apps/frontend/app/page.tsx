"use client"

import { useState } from "react";
import {Header} from "../components/header";

export type Page = "landing" | "signin" | "signup" | "dashboard" | "join room";

export default function App(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>("landing");

  const handleSignOut = () => {
    // Implement your sign-out logic here
    setIsAuthenticated(false);
    setCurrentPage("landing");
  };


    return(
        <Header
        isAuthenticated={isAuthenticated}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onSignOut={handleSignOut}
      />
    )
}