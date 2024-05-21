import { useState, useEffect } from "react";

export default function MyListitem({ title, imgUrl, content }) {
  const [cnt, setCnt] = useState(0);

  const handleClick = () => {
    setCnt(cnt+1);
    console.log(title, 'cnt = ', cnt );
  }
  
  //컴포넌트 생성시 최초 한번만 실행
  useEffect(() => {
    console.log(title, '생성');
  }, []);

  //state 변수가 변경
  useEffect(() => {
    console.log(title, '변경 cnt = ', cnt);
  }, [cnt]);


  return (
      <div className="flex w-full h-full justify-center items-start p-2 bg-slate-200">
      <div className="w-1/3 m-2 flex justify-center items-center">
         <img src={imgUrl} alt={title} className="max-w-full h-40" />
      </div>
        <div className="flex flex-col w-2/3 m-0 p-2">
          <div key={`${title}-title`} style={{ fontWeight: 'bold', marginBottom: '10px' }}>{title}</div>
          <div key={`${title}-content`} style={{ marginBottom: '10px' }}>{content}</div>
          <div key={`${title}-footer`} className="flex justify-end items-center" style={{ marginTop: '10px' }}>
        </div>
        <div className="flex justify-end items-center">
          <span onClick={handleClick}>❤️</span>
          <span className="inline-flex mx-2 font-bold">좋아요</span>
          <span className="font-bold text-xl">{cnt}</span>
        </div>
      </div>
    </div>
    );
  }