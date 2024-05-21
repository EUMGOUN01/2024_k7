import React, { useState } from 'react';

export default function BoxOfficeTbody({ dailyList, onMovieClick }) {
    return (
        <>
            {dailyList.map((movie, index) => (
                <tr key={index} className="border-b border-neutral-200 dark:border-white/10">
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-center ">{movie.rank}</td>
                    <td className="whitespace-nowrap px-6 py-4" onClick={() => onMovieClick(movie)}>
                        {movie.movieNm}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-right">{movie.salesAmt}원</td>
                    <td className="whitespace-nowrap px-6 py-4 text-right">{movie.audiCnt}명</td>
                    <td className="whitespace-nowrap px-6 py-4 text-center font-bold">
                        {movie.rankInten !== "0" && movie.rankInten !== 0 ? (
                            <>
                                {movie.rankInten < 0 ? (
                                    <span style={{ color: "blue" }}>{Math.abs(movie.rankInten)}▼</span>
                                ) : (
                                    <span style={{ color: "red" }}>{movie.rankInten}▲</span>
                                )}
                            </>
                        ) : (
                            <>-</>
                        )}
                    </td>
                </tr>
            ))}
        </>
    );
}