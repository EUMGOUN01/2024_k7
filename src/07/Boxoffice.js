import React, { useState } from 'react';
import box from "./BoxOffices.json"; // BoxOffices 데이터 가져오기
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxofficeInfo from './BoxOfficeInfo';

export default function Boxoffice() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const dailyList = box.boxOfficeResult.dailyBoxOfficeList.slice(0, 10); // 처음 10개 요소만 선택

  const handleMovieClick = (movie) => {
      setSelectedMovie(movie);
  };

  return (
      <div className="w-full">
          <div className="w-full flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Box Office Top 10</h2>
              <div className="flex flex-col">
                  <div className="w-full">
                      <table className="min-w-full text-left text-sm font-light text-surface mb-4">
                          <thead className="border-b border-neutral-200 font-medium dark:border-white/10 bg-black text-white">
                              <BoxOfficeThead />
                          </thead>
                          <tbody>
                              <BoxOfficeTbody dailyList={dailyList} onMovieClick={handleMovieClick} />
                          </tbody>
                      </table>
                  </div>
                  <BoxofficeInfo selectedMovie={selectedMovie} />
              </div>
          </div>
      </div>
  );
}