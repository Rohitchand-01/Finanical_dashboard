import { CircleChevronDown, CircleChevronUp } from "lucide-react";

const MarketOverview = () => {
  return (
    <div className="shadow-md bg-white border  border-gray-300 mt-6 w-[400px] m-2">
      <div className="">
        {/* NSE */}
        <div className="flex items-center justify-between px-16 py-[31px] w-[400px] ">
          <div className="flex flex-col space-x-4  w-[300px]">
            <div className="w-12 h-12 bg-dashboard-light-blue rounded-lg flex items-center justify-center">
              <span className="text-dashboard-blue text-6xl text-gray-500">NSE</span>
            </div>
            <div className="border-l border-gray-400 px-4 mt-7 ml-15">
              <div className="text-4xl text-gray-800">8625.70</div>
              <div className="flex items-center  gap-2 justify-baseline text-red-600">
                <div className=""><CircleChevronDown /></div>
                <span className="text-xl text-dashboard-red">-12.30 (0.14%)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-2 w-[200px] ml-24 border-gray-600">
        </div>
        <div className='w-70 h-1 ml-13 border border-gray-400'></div>

        {/* BSE */}
         <div className="flex items-center justify-between px-16 py-[31px] w-[400px] ">
          <div className="flex flex-col space-x-4  w-[300px]">
            <div className="w-12 h-12 bg-dashboard-light-blue rounded-lg flex items-center justify-center">
              <span className="text-dashboard-blue text-6xl text-gray-500">BSE</span>
            </div>
            <div className="border-l border-gray-400 px-4 mt-7 ml-15">
              <div className="text-4xl text-gray-800">8625.70</div>
              <div className="flex items-center  gap-2 justify-baseline text-green-500 ">
                <div className=""><CircleChevronUp /></div>
                <span className="text-xl text-dashboard-red">14.31(0.05%)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MarketOverview;
