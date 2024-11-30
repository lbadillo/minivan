import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import VanDetailMenu from '../../components/VanDetailMenu';
import { getVan } from '../../api';

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null);
  const params = useParams();

  useEffect(() => {
    getVan(params.id).then((data) => setCurrentVan(data));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      <Link to=".." className="back-button" relative="path">
        &larr; <span>Back to all vans</span>
      </Link>

      {currentVan ? (
        <section>
          <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
              <img src={currentVan.imageUrl} alt="current" />
              <div className="host-van-detail-info-text">
                <i className={`van-type van-type-${currentVan.type}`}>
                  {currentVan.type}
                </i>
                <h3>{currentVan.name}</h3>
                <h4>${currentVan.price}/day</h4>
              </div>
            </div>
            <VanDetailMenu />
            <Outlet context={currentVan} />
          </div>
        </section>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
