function Navbar() {
  return (
    <div className="h-14 w-full  flex align-middle justify-center items-center font-serif">
      <ul className="flex align-middle justify-between  w-10/12 md:w-8/12 md:xl lg:w-7/12  lg:text-2xl bg-slate-100 pl-9 pr-9 pt-2 pb-2 rounded-full border  shadow-lg">
        <li className="inset-0 flex items-center justify-center bg-opacity-50 hover:scale-110 transition-transform duration-300 ease-in-out hover:cursor-default">
          Home
        </li>
        <li className="inset-0 flex items-center justify-center bg-opacity-50 hover:scale-110 transition-transform duration-300 ease-in-out hover:cursor-default">
          Buy
        </li>
        <li className="inset-0 flex items-center justify-center bg-opacity-50 hover:scale-110 transition-transform duration-300 ease-in-out hover:cursor-default">
          Sell
        </li>
        <li className="inset-0 flex items-center justify-center bg-opacity-50 hover:scale-110 transition-transform duration-300 ease-in-out hover:cursor-default">
          Rent
        </li>
      </ul>
      {/* <div>&#x2630;</div> */}
    </div>
  );
}

export default Navbar;
