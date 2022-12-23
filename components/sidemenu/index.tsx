import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
export function SideMenu() {
  const router = useRouter();
  return (
    <div className="h-screen  bg-white border border-r">
      <div className="h-28 grid content-center px-4 py-6 border border-b">
        <input
          type="text"
          placeholder="Search collections..."
          className="input h-full w-full max-w-xs bg-white focus:outline-none   "
        />
      </div>

      <ul className="menu py-6 ">
        <li className="mb-6 px-6 rounded-sm ">
          <Link href="/users">
            <picture>
              <img
                src={clsx(
                  "https://s2.svgbox.net/octicons.svg?ic=people-bold&color=gray",
                  {
                    "https://s2.svgbox.net/octicons.svg?ic=people-bold&color=black":
                      router.pathname === "/users",
                  }
                )}
                alt="users"
                width="20"
                height="20"
              />
            </picture>

            <h2
              className={clsx("text-gray-500", {
                "text-black": router.pathname === "/users",
              })}
            >
              users
            </h2>
          </Link>
        </li>
        <li className="mb-6 px-6 rounded-sm ">
          <Link href="/stores">
            <picture>
              <img
                src={clsx(
                  "https://s2.svgbox.net/hero-outline.svg?ic=folder&color=gray",
                  {
                    "https://s2.svgbox.net/hero-outline.svg?ic=folder&color=black":
                      router.pathname === "/stores",
                  }
                )}
                alt="stores's folder"
                width="20"
                height="20"
              />
            </picture>
            <h2
              className={clsx("text-gray-500", {
                "text-black": router.pathname === "/stores",
              })}
            >
              stores
            </h2>
          </Link>
        </li>
        <li className="mb-6 px-6 rounded-sm">
          <Link href="/products">
            <picture>
              <img
                src={clsx(
                  "https://s2.svgbox.net/hero-outline.svg?ic=folder&color=gray",
                  {
                    "https://s2.svgbox.net/hero-outline.svg?ic=folder&color=black":
                      router.pathname === "/products",
                  }
                )}
                alt="products's folder"
                width="20"
                height="20"
              />
            </picture>
            <h2
              className={clsx("text-gray-500", {
                "text-black": router.pathname === "/products",
              })}
            >
              products
            </h2>
          </Link>
        </li>
      </ul>
      <div className=" flex justify-center items-center w-full ">
        <button className="border-2 rounded-md border-black  w-52 h-12 mx-6 font-bold">
          + New collection
        </button>
      </div>
    </div>
  );
}
