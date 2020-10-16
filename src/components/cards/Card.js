import React from 'react';

const Card = ({ userName, cardNum, expiresOn }) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.2'
        preserveAspectRatio='none'
        viewBox='0 0 400 250'
        style={{
          overflow: 'visible',
          width: '400px',
          height: '250px',
          opacity: 1,
          mixBlendMode: 'normal',
        }}
      >
        <defs>
          <path
            id='path-1602846787118330'
            d='M0 15.000000000000002 C0 6.7157287530000005 6.715728753000001 0 15.000000000000002 0 C15.000000000000002 0 385.0000000000002 0 385.0000000000002 0 C393.2842712470002 0 400.0000000000002 6.715728753000001 400.0000000000002 15.000000000000002 C400.0000000000002 15.000000000000002 400.0000000000002 235 400.0000000000002 235 C400.0000000000002 243.284271247 393.2842712470002 250 385.0000000000002 250 C385.0000000000002 250 15.000000000000002 250 15.000000000000002 250 C6.7157287530000005 250 0 243.284271247 0 235 C0 235 0 15.000000000000002 0 15.000000000000002 Z'
          ></path>
          <linearGradient
            id='gradient-1602846787144513'
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
              strokeWidth: 0,
              stroke: 'rgb(140, 140, 140)',
              strokeLinecap: 'butt',
              strokeLinejoin: 'miter',
              fill: 'url(#gradient-1602846787144513)',
            }}
          ></path>
        </g>
      </svg>
      <div
        style={{
          opacity: 1,
          mixBlendMode: 'normal',
          color: 'rgba(0, 0, 0, 0.87)',
          fontFeatureSettings: 'liga 0',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: 'normal',
          lineHeight: '29px',
          textTransform: 'none',
          height: '29px',
          width: '65px',
          transform: 'rotate(0deg) translate(315px, -65px)',
        }}
      >
        <div>
          <p>{expiresOn}</p>
        </div>
      </div>
      <div
        style={{
          opacity: 1,
          mixBlendMode: 'normal',
          color: 'rgba(0, 0, 0, 0.87)',
          fontFeatureSettings: 'liga 0',
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: 'normal',
          lineHeight: '38px',
          textTransform: 'none',
          height: '39px',
          width: '339px',
          transform: 'rotate(0deg) translate(30px, -154px)',
        }}
      >
        <div>
          <p>
            {cardNum.partOne} {cardNum.partTwo} {cardNum.partThree}{' '}
            {cardNum.partFour}
          </p>
        </div>
      </div>
      <div
        style={{
          opacity: 1,
          mixBlendMode: 'normal',
          color: 'rgba(0, 0, 0, 0.87)',
          fontFeatureSettings: 'liga 0',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: 'normal',
          lineHeight: '29px',
          textTransform: 'none',
          height: '29px',
          width: '250px',
          transform: 'rotate(0deg) translate(30px, -134px)',
        }}
      >
        <div>
          <p>{userName}</p>
        </div>
      </div>
      <img
        src={`/images/visa.png`}
        alt='card provider name'
        style={{
          opacity: 1,
          mixBlendMode: 'normal',
          borderRadius: '0px',
          objectFit: 'cover',
          objectPosition: 'center center',
          width: '136px',
          height: '136px',
          transform: 'rotate(0deg) translate(250px, -380px)',
          pointerEvents: 'all',
        }}
      ></img>
      <img
        src={`/images/chip.png`}
        alt='card provider name'
        style={{
          opacity: 1,
          mixBlendMode: 'normal',
          borderRadius: '0px',
          objectFit: 'cover',
          objectPosition: 'center center',
          width: '50px',
          height: '44px',
          transform: 'rotate(0deg) translate(-100px, -325px)',
          pointerEvents: 'all',
        }}
      ></img>
    </>
  );
};

export default Card;
