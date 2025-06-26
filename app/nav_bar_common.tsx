
"use client";

import { useRouter } from "next/navigation";

export default function NavBarCommon() {
    const router = useRouter();
  return (
    
    <nav className="flex justify-center gap-4 p-4 border-b">
      <button className="text-blue-500 hover:underline" onClick={() => router.push("/dashboard") }>
        Home
      </button>
      <button className="text-blue-500 hover:underline" onClick={() => router.push("/profile")}>
        Profile
      </button>
      <button className="text-blue-500 hover:underline" onClick={() => router.push("/settings")}>
        Settings
      </button>
    </nav>
  );
}