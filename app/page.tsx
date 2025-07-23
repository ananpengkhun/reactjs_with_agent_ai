import LoginPage from "./login_page";
// import SettingView from "./settings/setting_view";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  console.log("Home page loaded");
  return (
    <LoginPage />

  
  );
}
