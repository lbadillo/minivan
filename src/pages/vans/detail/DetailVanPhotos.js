import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function DetailVanPhotos() {
  const currentVan = useOutletContext();

  return (
    <img
      src={currentVan.imageUrl}
      alt="current"
      className="host-van-detail-image"
    />
  );
}
