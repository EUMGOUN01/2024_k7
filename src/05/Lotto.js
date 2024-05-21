import React, { useState } from 'react';
import * as S from './LottoStyle'; 

const Lotto = () => {
    const [lottoNumbers, setLottoNumbers] = useState([]);

    const generateLottoNumbers = () => {
        let set = new Set();
        while (set.size < 6) {
            set.add(Math.floor(Math.random() * 45) + 1);
        }

        let randomNum = Array.from(set);
        let bonusNum;
        do {
            bonusNum = Math.floor(Math.random() * 45) + 1;
        } while (randomNum.includes(bonusNum));

        randomNum.push(bonusNum);
        setLottoNumbers(randomNum);
    };

    return (
        <S.Wrapper>
            <S.Border>
                <S.LottoContainer>
                    <S.Heading>LOTTO 번호 추첨기</S.Heading>
                    <S.NumberContainer>
                        {lottoNumbers.slice(0, 6).map((num, index) => (
                            <S.NumberWithColor key={index} num={num} />
                        ))}
                        <S.Number>+</S.Number>
                        <S.BonusNumberWithColor num={lottoNumbers[6]} /> {/* 보너스 숫자를 NumberWithColor 컴포넌트로 출력 */}
                    </S.NumberContainer>
                    <S.Button onClick={generateLottoNumbers}>번호 생성</S.Button>
                </S.LottoContainer>
            </S.Border>
        </S.Wrapper>
    );
};

export default Lotto;