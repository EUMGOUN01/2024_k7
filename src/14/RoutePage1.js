import React from 'react';
import { useParams } from "react-router-dom";

const RoutePage1 = () => {
  const { v } = useParams();
  return (
    <div>
      페이지 1: {v}
    </div>
  );
};

export default RoutePage1;