import './App.css';
import { RiHomeOfficeFill } from "react-icons/ri";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mydiv from './03/Mydiv';
import Lotto from './05/Lotto';
import MyClock from './08/MyClock';
import FoodMain from './09/FoodMain';
import Frcst from './15/Frcst';
import FrcstList from './15/FrcstList';
import Rest from './17/Rest';

import RecoilMain from './16/RecoilMain';

function App() {
  return (
    <Router>
      <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
        <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
          <p> 리액트 실습</p>
          <nav>
            <ul className="flex space-x-4 text-sky-900">
              <li><Link to="/Mydiv">하트</Link></li>
              <li><Link to="/Lotto">로또</Link></li>
              <li><Link to="/MyClock">알람 시계</Link></li>
              <li><Link to="/FoodMain">음식</Link></li>
              <li><Link to="/frcst">날씨 예보</Link></li> {/* 수정: Frcst 컴포넌트로 이동하는 링크 추가 */}
              <li><Link to="/RecoilMain">리코일</Link></li>
              <li><Link to="/Rest">Rest</Link></li>
              
            </ul>
          </nav>
          <p className="flex items-center space-x-4"><RiHomeOfficeFill className='text-3xl text-sky-900' /></p>
        </header>
        <main className='grow w-full flex justify-center items-center overflow-y-auto '>
          <Routes>
            <Route path="/Mydiv" element={<Mydiv />} />
            <Route path="/Lotto" element={<Lotto />} />
            <Route path="/MyClock" element={<MyClock />} />
            <Route path="/FoodMain" element={<FoodMain />} />
            <Route path="/frcst" element={<Frcst />} />
            <Route path="/flist" element={<FrcstList />} />
            <Route path="/RecoilMain" element={<RecoilMain />} />
            <Route path="/Rest" element={<Rest />} />
          </Routes>
        </main>
        <footer className='flex justify-center items-center h-16 bg-black text-slate-100'>
          ⓒ 2024 , K-digital-7
        </footer>
      </div>
    </Router>
  );
}

export default App;
// import './App.css';
// import { RiHomeOfficeFill } from "react-icons/ri";
// //import Mydiv from './03/Mydiv';
// //import MyList from './04/MyList';
// //import Lotto from './05/Lotto';
// //import Boxoffice from './07/Boxoffice';
// //import MyClock from './08/MyClock';
// //import FoodMain from './09/FoodMain';
// //import TrafficMain from './10/TrafficMain';
// //import Traffic from './11/Traffic';
// //import MyRef from './12/MyRef';
// //import RefInput from './12/RefInput';
// //import GalleryMain from './13/GalleryMain';
// //import Festival from './Festival';
// import RouteMain from './14/RouteMain';

// function App() {
//   return (
//     <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
//       <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
//         <p>리액트 실습</p> 
//         <p><RiHomeOfficeFill className='text-3xl text-sky-900'/></p>
//       </header>
//       <main className='grow w-full flex justify-center items-center overflow-y-auto '>
//         <div>
//           <RouteMain />
//         </div>
//       </main>
//       <footer className='flex justify-center items-center h-16 bg-black text-slate-100'>
//         ⓒ 2024 , K-digital-7
//       </footer>
//     </div>
//   );
// }

// export default App;