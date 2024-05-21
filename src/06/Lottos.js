import Ball  from "./Ball" ;
import { useState } from "react";
import Buttonc from "../UI/Buttonc";

export default function Lottos() {
  const [tags, setTags] = useState() ;

  const handleOk = () => {
    let arr = [] ;

    while(arr.length < 7){
      let n = Math.floor(Math.random() * 45) + 1 ;

      if (!arr.includes(n)) arr.push(n)
    }

    let tm = arr.map(item => <Ball n={item} key={item} /> );

    //배열 중간 추가
    tm.splice(6, 0, <span className="text-3xl mx-2" key="sp">+</span>);
    // console.log(tags)

    setTags(tm) ;
  }
  return (
    <div className="w-full flex flex-col
                    justify-center items-center">
      <div className="m-10">
        {tags}
      </div>
      <div>
        <Buttonc caption={'확인'} bcolor={'orange'} handleClick={handleOk} />
      </div>
    </div>
  )
}