export default function BoxOfficeThead() {
    return (
        <tr>
            <th scope="col" className="px-6 py-4">순위</th>
            <th scope="col" className="px-6 py-4 text-center" >영화명</th>
            <th scope="col" className="px-6 py-4">매출액</th>
            <th scope="col" className="px-6 py-4">관객수</th>
            <th scope="col" className="px-6 py-4">증감율</th>
        </tr>
    );
}