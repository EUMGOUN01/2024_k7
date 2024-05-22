import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import TailSelect from "../UI/TailSelect";
import getcode from "./getcode.json";

export default function FrcstList() {
  const [queryParams] = useSearchParams();
  const dt = queryParams.get('dt');
  const area = queryParams.get('area');
  const x = queryParams.get('x');
  const y = queryParams.get('y');
  const gubun = queryParams.get('gubun');

  const ops = getcode.filter(item => item["예보구분"] === gubun)
                     .map(item => `${item["항목명"]} (${item["항목값"]})`);
  const itemRef = useRef();

  const [tdata, setTdata] = useState([]);
  const [trtags, setTrtags] = useState([]);

  const [selitemName, setSelItemName] = useState();
  const [selitem, setSelItem] = useState();

  const handleItem = () => {
    if (itemRef.current.value === '') {
      alert('항목을 선택하세요.');
      itemRef.current.focus();
      setTrtags([]);
      return;
    }
    console.log(itemRef.current.value);
    setSelItemName(itemRef.current.value.split(' (')[0]);
    setSelItem(itemRef.current.value.split(' (')[1].replace(')', ''));
  };

  // Fetch 함수
  const getData = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data.response.body.items.item);
  };

  // 데이터 가져오기
  useEffect(() => {
    if (!dt || !area || !x || !y || !gubun) {
      return;
    }

    let url;

    if (gubun === '초단기예보') {

      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`;
      url += `serviceKey=${process.env.REACT_APP_API_KEY}`;
      url += `&pageNo=1&numOfRows=1000&dataType=json&base_date=20240522&base_time=0630&nx=55&ny=127`;

      
    } else {
      url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`;
      url += `serviceKey=${process.env.REACT_APP_API_KEY}`;
      url += `&pageNo=1&numOfRows=1000&dataType=json&base_date=20240522&base_time=0500&nx=55&ny=127`;
    }

    console.log(url)
    getData(url);
  }, [dt, area, x, y, gubun]);

  useEffect(() => {
    if (!selitem) return;

    const tm = tdata.filter(item => item["category"] === selitem)
                    .map(item =>
                      <tr key={item.fcstDate + item.fcstTime}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {selitemName}
                        </td>
                        <td className="px-6 py-2">
                          {`${item.fcstDate.substr(0, 4)}-${item.fcstDate.substr(4, 2)}-${item.fcstDate.substr(6, 2)}`}
                        </td>
                        <td className="px-6 py-2">
                          {`${item.fcstTime.substr(0, 2)}:${item.fcstTime.substr(2, 2)}`}
                        </td>
                        <td className="px-6 py-2">
                          {item.fcstValue}
                        </td>
                      </tr>
                    );
    setTrtags(tm);
  }, [selitem, tdata, selitemName]);

  if (!dt || !area || !x || !y || !gubun) {
    return <div>URL 매개변수가 잘못되었습니다.</div>;
  }

  return (
    <div className='w-full h-full flex flex-col justify-start items-center'>
      <div className="w-11/12 justify-start grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
        <div className="text-lg font-bold p-4">
          {`${area} ${gubun} (${dt.substring(0, 4)}-${dt.substring(4, 6)}-${dt.substring(6, 8)})일자`}
        </div>
        <div className="p-4">
          <TailSelect ops={ops}
                      opDefault="---항목선택---"
                      selRef={itemRef}
                      handleSel={handleItem} />
        </div>
      </div>
      <table className="w-10/12 text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="px-6 py-1">
              항목명
            </th>
            <th className="px-6 py-1">
              예측일자
            </th>
            <th className="px-6 py-3">
              예측시간
            </th>
            <th className="px-6 py-3">
              예측값
            </th>
          </tr>
          </thead>
        <tbody>
          {trtags}
        </tbody>
      </table>
    </div>
  );
}