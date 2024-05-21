import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export const Border = styled.div`
    width: 100%;
    height: 280px;
    border: 3px solid #a50909;
    border-radius: 10px;
`;

export const LottoContainer = styled.div`
    padding: 30px;
    text-align: center;
`;

export const Heading = styled.h3`
    padding: 10px 0;
    color: #990505;
    padding-bottom: 25px;
`;

export const Button = styled.button`
    width: 20%;
    height: 60px;
    color: #ffffff;
    font-weight: bold;
    border-radius: 50px;
    background-color: #a50909;
`;

export const NumberContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 20px 0;
`;

export const Number = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000; /* 글자색을 검은색으로 고정 */
    background-color: ${(props) => props.color || '#fff'}; /* 동그라미의 색을 props로 받아온 색으로 지정 */
`;

export const BonusNumber = styled(Number)`
    color: #000000; /* 보너스 숫자의 글자색을 검은색으로 고정 */
    background-color: ${(props) => props.color || '#fff'}; /* 보너스 숫자의 동그라미 색을 props로 받아온 색으로 지정 */
`;

const getNumberColor = (num) => {
    if (num <= 10) {
        return "#9b111e";
    } else if (num <= 20) {
        return "#0080ff";
    } else if (num <= 30) {
        return "#ffd400";
    } else if (num <= 40) {
        return "#8eb914";
    } else {
        return "#282123";
    }
};

export const NumberWithColor = ({ num }) => (
    <Number color={getNumberColor(num)}>
        {num}
    </Number>
);

export const BonusNumberWithColor = ({ num }) => (
    <BonusNumber color={getNumberColor(num)}>
        {num}
    </BonusNumber>
);