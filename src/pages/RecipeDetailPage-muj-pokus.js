import React, { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { api } from '../api';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [detailData, setDetailData] = useState({
    detailData: {},
  });

  useEffect(() => {
    api.get(`/recipes/${slug}`).then(({ detailData }) => {
      setDetailData({ detailData });
      console.log(detailData);
    });
  }, []);

  return (
    <>
      <h1>{detailData.title}</h1>
      <p>Délka přípravy: {detailData.preparationTime} min</p>
    </>
  );
}
