export function SideMenu() {
  return (
    <div className="h-screen  bg-white border border-r">
      <div className="h-28 grid content-center px-4 py-6 border border-b">
        <input
          type="text"
          placeholder="Search collections..."
          className="input h-full w-full max-w-xs bg-white focus:outline-none   "
        />
      </div>

      <ul className="menu  ">
        <li className="mb-6 px-6 rounded-sm ">
          <a>
            <picture>
              <img
                src="https://s2.svgbox.net/octicons.svg?ic=people-bold&color=gray"
                alt="users"
                width="20"
                height="20"
              />
            </picture>

            <h2 className="text-gray-500">users</h2>
          </a>
        </li>
        <li className="mb-6 px-6 rounded-sm ">
          <a>
            <picture>
              <img
                src="https://s2.svgbox.net/hero-outline.svg?ic=folder&color=gray"
                alt="stores's folder"
                width="20"
                height="20"
              />
            </picture>
            <h2 className="text-gray-500">stores</h2>
          </a>
        </li>
        <li className="mb-6 px-6 rounded-sm">
          <a>
            <picture>
              <img
                src="https://s2.svgbox.net/hero-outline.svg?ic=folder&color=gray"
                alt="products's folder"
                width="20"
                height="20"
              />
            </picture>
            <h2 className="text-gray-500">products</h2>
          </a>
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
