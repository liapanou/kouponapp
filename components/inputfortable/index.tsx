export function InputForTable() {
  return (
    <div className="flex mx-8 px-4 py-4 rounded-full border  bg-slate-400 bg-opacity-20">
      <picture>
        <img
          src="https://s2.svgbox.net/octicons.svg?ic=search&color=gray"
          alt="search"
          width="20"
          height="20"
        />
      </picture>

      <input
        type="text"
        placeholder="Search filter , ex. created  > 2022-01-01 ..."
        className="input h-full w-full px-2 bg-transparent border-none outline-none focus:outline-none"
      />
    </div>
  );
}
