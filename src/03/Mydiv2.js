import Mydiv3 from "./Mydiv3";

export default function Mydiv2({dname1, dname2, dname3}) {
  return (
      <div className="flex flex-col justify-center items-center
                        w-4/5 h-4/5
                        text-white bg-sky-700
                        rounded-sm m-10 p-10"> {/* MyDiv2의 z-index 값을 20으로 설정 */}
        <p className="flex w-full justify-start">{`${dname1} > ${dname2}`}</p>
        <Mydiv3 dname1 = {dname1} dname2 = {dname2} dname3 = {dname3} />
      </div>
  );
}