import React from 'react';

const AddNewCard = () => {
  const xmlnss = { 'xmlns:default': 'http://www.w3.org/2000/svg' };

  return (
    <>
      <svg
        version='1.2'
        preserveAspectRatio='none'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 400 250'
        style={{
          overflow: 'visible',
          width: '400px',
          height: '250px',
          opacity: 1,
          mixBlendMode: 'normal',
          // transform: 'rotate(0deg) translate(763px, 1034px) rotate(0deg)',
        }}
      >
        <defs>
          <path
            id='path-1602846786959109'
            d='M0 15.000000000000002 C0 6.7157287530000005 6.715728753000001 0 15.000000000000002 0 C15.000000000000002 0 385.0000000000002 0 385.0000000000002 0 C393.2842712470002 0 400.0000000000002 6.715728753000001 400.0000000000002 15.000000000000002 C400.0000000000002 15.000000000000002 400.0000000000002 235 400.0000000000002 235 C400.0000000000002 243.284271247 393.2842712470002 250 385.0000000000002 250 C385.0000000000002 250 15.000000000000002 250 15.000000000000002 250 C6.7157287530000005 250 0 243.284271247 0 235 C0 235 0 15.000000000000002 0 15.000000000000002 Z'
          ></path>
          <linearGradient
            id='gradient-16028467873331248'
            x1='0%'
            y1='50%'
            x2='100%'
            y2='50%'
          >
            <stop
              offset='0%'
              stopColor='rgba(117,127,154,1)'
              stopOpacity='1'
            ></stop>
            <stop
              offset='100%'
              stopColor='rgba(215,221,232,1)'
              stopOpacity='1'
            ></stop>
          </linearGradient>
        </defs>
        <g transform='translate(0, 0)'>
          <path
            d='M0 15.000000000000002 C0 6.7157287530000005 6.715728753000001 0 15.000000000000002 0 C15.000000000000002 0 385.0000000000002 0 385.0000000000002 0 C393.2842712470002 0 400.0000000000002 6.715728753000001 400.0000000000002 15.000000000000002 C400.0000000000002 15.000000000000002 400.0000000000002 235 400.0000000000002 235 C400.0000000000002 243.284271247 393.2842712470002 250 385.0000000000002 250 C385.0000000000002 250 15.000000000000002 250 15.000000000000002 250 C6.7157287530000005 250 0 243.284271247 0 235 C0 235 0 15.000000000000002 0 15.000000000000002 Z'
            style={{
              strokeWidth: 5,
              stroke: 'rgb(0, 0, 0)',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              fill: 'url(#gradient-16028467873331248)',
              strokeDasharray: 3,
            }}
          ></path>
        </g>
      </svg>
      <svg
        version='1.2'
        preserveAspectRatio='none'
        viewBox='0 0 24 24'
        style={{
          opacity: 1,
          mixBlendMode: 'normal',
          fill: 'rgb(18, 18, 18)',
          width: '100px',
          height: '100px',
          transform: 'rotate(0deg) translate(-250px, 0px)',
          pointerEvents: 'all',
        }}
      >
        <g>
          <path
            {...xmlnss}
            id='plus'
            d='M19.33,11c0-0.55-0.45-1-1-1H14V5.67c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1V10H5.67c-0.55,0-1,0.45-1,1v2  c0,0.55,0.45,1,1,1H10v4.33c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1V14h4.33c0.55,0,1-0.45,1-1V11L19.33,11z'
            style={{ fill: 'rgb(18, 18, 18)' }}
          ></path>
        </g>
      </svg>
    </>
  );
};

export default AddNewCard;
