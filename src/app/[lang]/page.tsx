'use client';

import { useTranslations } from "next-intl";
import LanguageSwitcher from "./lang_switcher";
import LoginPage from "./login_page";
import CenterWithActionDialog from "@/src/shared/component/dialog/CenterWithActionDialog";
import { DASHBOARD } from "@/src/shared/constants/route_constant";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <CenterWithActionDialog
        onClose={() => {
          console.log("Dialog closed");
          router.push(DASHBOARD);
        }
        }

      />
      <LanguageSwitcher />
      <LoginPage />

    </>
  );
}
