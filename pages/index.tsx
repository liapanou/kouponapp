import { SideMenu } from "../components/sidemenu";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-[250px_1fr]">
        <SideMenu />
        <div className="bg-base-200"></div>
      </div>
    </div>
  );
}
