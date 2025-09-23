'use client';
import React from 'react';

const RegionsDisplay = () => {
  const regions = [
    {
      id: 'hawaii',
      name: 'Hawaii',
      pricing: (
        <>
          <s>Regional air freight: $8 per kg</s>
          <br />
          Poseidon: $2 per kg
        </>
      ),
      svgPath: '/usa-hi.svg'
    },
    {
      id: 'greece',
      name: 'Greece',
      pricing: (
        <>
          <s>Regional air freight: $7 per kg</s>
          <br />
          Poseidon: $3 per kg
        </>
      ),
      svgPath: '/greece.svg'
    },
    {
      id: 'caribbean',
      name: 'Caribbean Region',
      pricing: (
        <>
          <s>Regional air freight: $5 per kg</s>
          <br />
          Poseidon: $2 per kg
        </>
      ),
      svgPath: '/caribbean.png'
    },
  ];

  return (
    <div className="regions-container">
      <h1 className="mb-24 items-center title">Global Operations</h1>

      {regions.map((region, index) => (
        <React.Fragment key={region.id}>
          <div className="region-row">
            <div className="region-svg-container">
              <div className="svg-wrapper">
                <img
                  src={region.svgPath}
                  alt={`${region.name} map`}
                  className="region-svg"
                />
              </div>
            </div>
            <div className="region-text">
              <h2>{region.name}</h2>
              <div>{region.pricing}</div>
            </div>
          </div>
          {index < regions.length - 1 && <div className="divider"></div>}
        </React.Fragment>
      ))}

      <style jsx>{`
        .regions-container {
          width: 100%;
          padding: 100px 0;
          background-color: #000000;
          color: white;
        }

        .region-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .region-svg-container {
          width: 45%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .svg-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .region-svg {
          width: 100%;
          height: auto;
          max-height: 300px;
          filter: brightness(0) saturate(100%) invert(68%) sepia(11%) saturate(1060%) hue-rotate(165deg) brightness(85%) contrast(83%);
        }

        .region-text {
          width: 45%;
          padding: 20px;
        }

        .region-text h2 {
          font-size: 1.8rem;
          margin-top: 0;
          margin-bottom: 1rem;
        }

        .divider {
          width: 100%;
          max-width: 1200px;
          height: 1px;
          background-color: #333;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .region-row {
            flex-direction: column;
            padding: 20px 0;
          }

          .region-svg-container,
          .region-text {
            width: 100%;
          }

          .region-text {
            padding: 20px 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default RegionsDisplay;
