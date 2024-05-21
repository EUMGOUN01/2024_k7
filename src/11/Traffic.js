import TrafficMains from "./TrafficMains"
import { useState, useEffect } from "react"

export default function Traffic(){
    const [tdata, setTdata] = useState(); //fetch 데이터

    const [c1, setC1] = useState() ;        //대분류(중복제거)
    const [selC1, setSelC1] = useState() ;  //선택된 대분류

    const [c2, setC2] = useState() ;        //중분류(중복제거)
    const [selC2, setSelC2] = useState() ;  //선택된 중분류

    const [detail, setDetail] = useState(); //상세 정보
    const [info, setInfo] = useState(); //상세 정보

    //사용자 정의자 함수
    const getFetchData = (url) =>{
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.data))
            .catch( err => console.log(err));
    }

    //컴포넌트 생성시
    useEffect(()=>{
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?`;
        url = `${url}page=1&perPage=17&serviceKey=${process.env.REACT_APP_API_KEY}`;

    console.log(url)
    getFetchData(url)
    },[])

    useEffect(() => {
        if (!tdata) return ;
    
        let tm = tdata.map(item => item.사고유형_대분류);
        tm = new Set(tm) ;
        tm = [...tm] ;
        console.log("tdata tm => ", tm)  
        
        setC1(tm) ;
     
      }, [tdata]);
    
      useEffect(()=>{
        console.log("selC1" , selC1) ;
        if (!tdata) return ;
    
        let tm = tdata.filter(item => item.사고유형_대분류 === selC1) 
                      .map(item => item.사고유형_중분류) ;
            
        setInfo('') ;
        setC2(tm) ;
      } , [selC1]);
    
      useEffect(() =>{
        console.log("selC2" , selC2) ;
        if (!tdata) return ;
        let tm = tdata.filter(item => item.사고유형_대분류 === selC1 &&
                                      item.사고유형_중분류 === selC2)
         
        setDetail(tm[0]) ;
        
      }, [selC2]) ;
    
      useEffect(()=>{
        console.log("detail =>" , detail)
        if (!tdata) return ;
        const keyArr = ['사고건수', '사망자수', '중상자수' , '경상자수', '부상신고자수'];
    
        let tm = keyArr.map( k => 
            <div className="w-full mt-5 h-10 
                            border
                            flex justify-center items-center"
                 key ={k} >
              <div className="w-1/2 h-10
                              font-bold
                              flex justify-center items-center
    
    
                             bg-slate-200">
                {k}
              </div>
              <div className="w-1/2 h-10
                              font-bold
                              flex justify-center items-center">
                {parseInt(detail[k]).toLocaleString()}
              </div>
            </div>
        );
        setInfo(tm) ;
      }, [detail]);

    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
            <TrafficMains />
        </div>
    )
}