export default function Mydiv3({dname1, dname2, dname3}) {
    return (
        <div className="flex flex-col justify-center items-center
                          w-4/5 h-4/5
                          text-white bg-sky-500
                          rounded-sm m-10 p-10"> {/* MyDiv3의 z-index 값을 10으로 설정 */}
          <p className="flex w-full justify-start">
            {`${dname1} > ${dname2} > ${dname3}`}
          </p>
        </div>
    );
  }