
"use client";

import { DASHBOARD, PROFIILE, SETTING, TIMESHEET } from "@/src/shared/constants/route_constant";
import { useRouter } from "next/navigation";

export default function NavBarCommon() {
    const router = useRouter();
  return (
    
    <nav className="flex justify-center gap-4 p-4 border-b">
      <button className="text-blue-500 hover:underline" onClick={() => router.push(TIMESHEET) }>
        Timesheet
      </button>
      <button className="text-blue-500 hover:underline" onClick={() => router.push(DASHBOARD) }>
        Home
      </button>
      <button className="text-blue-500 hover:underline" onClick={() => router.push(PROFIILE)}>
        Profile
      </button>
      <button className="text-blue-500 hover:underline" onClick={() => router.push(SETTING)}>
        Settings
      </button>
    </nav>
  );
}