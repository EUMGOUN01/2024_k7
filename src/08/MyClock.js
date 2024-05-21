import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";

function MyClock() {

  return(
    <header className=" w-full flex flex-col 
                    justify-center items-center
                    bg-slate-50">
      <MyClockImage />
      <MyClockTime /> 
    </header>
  );
}

export default MyClock ;