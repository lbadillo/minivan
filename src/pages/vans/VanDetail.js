import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getVan } from '../../api';

export default function VanDetail() {
  const params = useParams();
  const location = useLocation();
  const [van, setVan] = useState(null);
  useEffect(() => {
    getVan(params.id).then((res) => setVan(res));
  }, [params.id]);

  const search = `..?${location.state?.search}` || '..';
  const type = location.state?.search.split('=')[1] || 'all';
  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <Link to={search} className="back-button" relative="path">
            &larr; <span>Back to {type} vans</span>
          </Link>
          <img src={van.imageUrl} alt="van" />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
