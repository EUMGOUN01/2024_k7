import React from 'react';
import { useSearchParams } from "react-router-dom";

const RoutePage2 = () => {
  const [params] = useSearchParams();

  console.log(params.get('i1'));
  console.log(params.get('i2'));

  return (
    <div>
      페이지2: {params.get('i1')} , {params.get('i2')}
    </div>
  );
};

export default RoutePage2;