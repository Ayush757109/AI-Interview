"use client";

import React from "react";
import { Button } from "./ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-3 sm:px-10 py-3 border-b border-white/10 backdrop-blur-xl">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Prept Logo"
          width={100}
          height={100}
          className="h-11 w-auto"
        />
      </Link>
      <div className="text-lg font-semibold">
        Prept
      </div>

      <div className="flex items-center gap-3">
        
        {!isSignedIn ? (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost">Sign in</Button>
            </SignInButton>

            <SignInButton mode="modal">
              <Button>Get started →</Button>
            </SignInButton>
          </>
        ) : (
          <UserButton />
        )}

      </div>
    </nav>
  );
};

export default Header;