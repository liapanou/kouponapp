import { InputForTable } from "../components/inputfortable";
import { SideMenu } from "../components/sidemenu";
import { UsersTable } from "../components/userstable";

export default function Stores() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="grid grid-cols-[250px_1fr]">
        <SideMenu />
        <div className="bg-slate-100">
          <div className="px-7 py-6 flex justify-center items-center ">
            <div className=" flex ">
              <div className=" flex gap-2 mr-6 text-lg">
                <h2 className="text-gray-500 ">Collections /</h2>
                <h2 className="text-black">stores</h2>
              </div>
              <div className="flex gap-6 justify-center items-center">
                <picture>
                  <img
                    src="https://s2.svgbox.net/hero-outline.svg?ic=cog&color=000"
                    alt="settings"
                    width="20"
                    height="20"
                  />
                </picture>
                <picture>
                  <img
                    src="https://s2.svgbox.net/hero-outline.svg?ic=refresh&color=000"
                    alt="refresh"
                    width="20"
                    height="20"
                  ></img>
                </picture>
              </div>
            </div>
            <div className=" flex gap-2 ml-auto text-sm  ">
              <button className="text-black border-2 rounded-md border-black  w-40 h-12 font-medium  ">
                API Preview
              </button>
              <button className="text-white bg-black rounded-md w-40 h-12 font-medium flex gap-2 justify-center items-center">
                <span>+</span>
                <h2>New record</h2>
              </button>
            </div>
          </div>
          <InputForTable />
          <UsersTable />
        </div>
      </div>
    </div>
  );
}
