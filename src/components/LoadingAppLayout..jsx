import { HiChevronLeft } from "react-icons/hi";
import AppNav from "./AppNav";
import Header from "./Header";

function LoadingAppLayout() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[1fr_0.5fr] min-h-screen md:gap-x-5 md:grid-rows-[auto_auto_1fr] bg-neutral-900 text-stone-50 max-w-[1200px] my-0 mx-auto px-5 md:15 lg:px-25 pt-8 pb-10 md:pb-20  sm">
      <AppNav />
      <Header />
      <div>
        <div className="w-full h-60 bg-neutral-700 rounded-xl mb-5 flex flex-col justify-center items-center gap-2">
          <div className="dots-loader "></div>
          <p className="text-md text-neutral-200">Loading...</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 justify-start gap-4 w-full mb-10 sm:mb-6">
          <div className="bg-neutral-800 rounded-lg max-w-40 w-full px-5 py-3 flex flex-col gap-1  border border-neutral-600 h-24">
            <p className="text-stone-300 text-sm">Feels Like</p>
            <p>&#95;</p>
          </div>
          <div className="bg-neutral-800 rounded-lg max-w-40 w-full px-5 py-3 flex flex-col gap-1  border border-neutral-600 h-24">
            <p className="text-stone-300 text-sm">Humidity</p>
            <p>&#95;</p>
          </div>
          <div className="bg-neutral-800 rounded-lg max-w-40 w-full px-5 py-3 flex flex-col gap-1  border border-neutral-600 h-24">
            <p className="text-stone-300 text-sm">Wind</p>
            <p>&#95;</p>
          </div>
          <div className="bg-neutral-800 rounded-lg max-w-40 w-full px-5 py-3 flex flex-col gap-1  border border-neutral-600 h-24">
            <p className="text-stone-300 text-sm">Precipitation</p>
            <p>&#95;</p>
          </div>
        </div>

        <div className="mb-8 sm:mb-0">
          <p className="mb-2 font-semibold">Daily forecast</p>
          <ul className="flex gap-2 justify-between  flex-wrap">
            <li className=" bg-neutral-700 border border-neutral-600 p-2 rounded-md text-xs flex flex-col gap-2 items-center font-bold h-30 w-20"></li>
            <li className=" bg-neutral-700 border border-neutral-600 p-2 rounded-md text-xs flex flex-col gap-2 items-center font-bold h-30 w-20"></li>
            <li className=" bg-neutral-700 border border-neutral-600 p-2 rounded-md text-xs flex flex-col gap-2 items-center font-bold h-30 w-20"></li>
            <li className=" bg-neutral-700 border border-neutral-600 p-2 rounded-md text-xs flex flex-col gap-2 items-center font-bold h-30 w-20 "></li>
            <li className=" bg-neutral-700 border border-neutral-600 p-2 rounded-md text-xs flex flex-col gap-2 items-center font-bold h-30 w-20"></li>
            <li className=" bg-neutral-700 border border-neutral-600 p-2 rounded-md text-xs flex flex-col gap-2 items-center font-bold h-30 w-20"></li>
            <li className=" bg-neutral-700 border border-neutral-600 p-2 rounded-md text-xs flex flex-col gap-2 items-center font-bold h-30 w-20"></li>
          </ul>
        </div>
      </div>
      <aside className="px-4 pt-4 mt-10 md:mt-0  bg-neutral-800 relative rounded-xl md:self-start border-b-5 border-neutral-800 ">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold">Hourly forcast</h3>
          <button className="flex gap-2 items-center px-2 bg-neutral-600 rounded-lg">
            <span>&minus; </span>
            <HiChevronLeft />
          </button>
        </div>
        <ul className="space-y-2 overflow-auto h-105 border-b-20 border-neutral-800 ">
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
          <li className="flex justify-between items-center bg-neutral-700 rounded-lg p-2 border border-neutral-600 h-9"></li>
        </ul>
      </aside>
    </div>
  );
}

export default LoadingAppLayout;
