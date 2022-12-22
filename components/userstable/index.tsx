export function UsersTable() {
  return (
    <div className="my-4 ">
      <table className="table w-full">
        <thead className=" px-8 ">
          <tr>
            <th>
              <div className=" flex gap-6">
                <label>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm rounded-sm border-2"
                  />
                </label>
                <div className="flex gap-1 justify-center items-center">
                  <picture>
                    <img
                      src="https://s2.svgbox.net/materialui.svg?ic=vpn_key&color=gray"
                      alt="id"
                      width="15"
                      height="15"
                    />
                  </picture>
                  <h2 className="normal-case text-slate-600">id</h2>
                </div>
              </div>
            </th>

            <th>
              <div className="flex gap-1">
                <picture>
                  <img
                    src="https://s2.svgbox.net/octicons.svg?ic=person&color=gray"
                    alt="username"
                    width="15"
                    height="15"
                  />
                </picture>
                <h2 className="normal-case text-slate-600">username</h2>
              </div>
            </th>
            <th>
              <div className="flex gap-1">
                <picture>
                  <img
                    src="https://s2.svgbox.net/materialui.svg?ic=email&color=gray"
                    alt="email"
                    width="15"
                    height="15"
                  />
                </picture>
                <h2 className="normal-case text-slate-600">email</h2>
              </div>
            </th>
            <th>
              <div className="flex gap-1">
                <span className="text-slate-500">T</span>
                <span className="normal-case text-slate-600">name</span>
              </div>
            </th>
            <th>
              <div className="flex gap-1">
                <picture>
                  <img
                    src="https://s2.svgbox.net/octicons.svg?ic=image&color=gray"
                    alt="avatar"
                    width="15"
                    height="15"
                  />
                </picture>
                <h2 className="normal-case text-slate-600">avatar</h2>
              </div>
            </th>
            <th>
              <div className="flex gap-8">
                <div className="flex gap-4">
                  <div className="flex gap-1">
                    <picture>
                      <img
                        src="https://s2.svgbox.net/octicons.svg?ic=calendar&color=gray"
                        alt="created"
                        width="15"
                        height="15"
                      />
                    </picture>
                    <h2 className="normal-case text-slate-600">created</h2>
                    <picture>
                      <img
                        src="https://s2.svgbox.net/octicons.svg?ic=arrow-down&color=gray"
                        alt="created"
                        width="15"
                        height="15"
                      />
                    </picture>
                  </div>
                  <div className="flex gap-1">
                    <picture>
                      <img
                        src="https://s2.svgbox.net/octicons.svg?ic=calendar&color=gray"
                        alt="updated"
                        width="15"
                        height="15"
                      />
                    </picture>
                    <h2 className="normal-case text-slate-600">updated</h2>
                  </div>
                </div>
                <div className="dropdown">
                  <label tabIndex={0} className=" m-1 text-slate-500">
                    ...
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}
