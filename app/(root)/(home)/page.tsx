"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <nav style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Link href="/">Home</Link>

        {/* Show UserButton only when signed in */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        {/* Show a sign-in link when signed out */}
        <SignedOut>
          <Link href="/sign-in">Sign in</Link>
        </SignedOut>
      </nav>

      <main style={{ marginTop: 24 }}>
        <h1>Welcome</h1>
        <p>Your app content goes here.</p>
      </main>
    </div>
  );
}
