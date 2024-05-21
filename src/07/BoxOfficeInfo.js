import React from 'react';

export default function BoxofficeInfo({ selectedMovie }) {
    return (
        <div className="w-full h-10 flex justify-center items-center bg-slate-600 text-white font-bold">
            {selectedMovie ? (
                `${selectedMovie.rank}위 - ${selectedMovie.movieNm}, 개봉일 : ${selectedMovie.openDt}, 누적관객수 : ${selectedMovie.audiAcc}명`
            ) : (
                "영화정보"
            )}
        </div>
    );
}

