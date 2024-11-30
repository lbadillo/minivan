import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';

export default function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    getVans().then((data) => setVans(data));
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const displayedVan = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }
  const vanElements = displayedVan.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`${van.id}`} state={{ search: searchParams.toString() }}>
        <img src={van.imageUrl} alt="your van" />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange('type', 'simple')}
          className={`van-type simple ${
            typeFilter === 'simple' ? 'selected' : null
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange('type', 'luxury')}
          className={`van-type luxury ${
            typeFilter === 'luxury' ? 'selected' : null
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange('type', 'rugged')}
          className={`van-type rugged ${
            typeFilter === 'rugged' ? 'selected' : null
          }`}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => handleFilterChange('type', null)}
            className="van-type clear-filters"
          >
            Clear filter
          </button>
        ) : null}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}

/*
<div className="van-list-filter-buttons">
        <Link className="van-type simple" to="?type=simple">
          Simple
        </Link>
        <Link className="van-type luxury" to="?type=luxury">
          Luxury
        </Link>
        <Link className="van-type rugged" to="?type=rugged">
          Rugged
        </Link>
        <Link className="van-type clear-filters" to=".">
          Clear
        </Link>
      </div>
*/
