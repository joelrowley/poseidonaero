'use client';
import React from 'react';

const RegionsDisplay = () => {
  return (
    <section id="middle-ground" style={{ scrollMarginTop: '160px' }}>
      <h1 className="mb-4 items-center title">The Middle Ground</h1>

      <div className="table-container">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Speed</th>
              <th>Cost per Ton</th>
              <th>Flexibility</th>
              <th>Infrastructure Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ocean Freight</td>
              <td>15–25 mph</td>
              <td>$500–800</td>
              <td>Limited routes</td>
              <td>Ports only</td>
            </tr>
            <tr className="poseidon-row">
              <td>Poseidon Aero</td>
              <td>120–150 mph</td>
              <td>$1,200–1,800</td>
              <td>Any waterway</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Air Freight</td>
              <td>500+ mph</td>
              <td>$3,000–6,000</td>
              <td>Airport dependent</td>
              <td>Airports required</td>
            </tr>
          </tbody>
        </table>

        <p className="footnote">* Route dependent</p>
      </div>

      <style jsx>{`
        .table-container {
          width: 100%;
          padding: 100px 0;
          background-color: #000;
          color: white;
          font-family: 'Stabil Grotesk', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .comparison-table {
          width: 90%;
          max-width: 1200px;
          border-collapse: collapse;
          text-align: left;
          font-size: 1rem;
        }

        .comparison-table th,
        .comparison-table td {
          padding: 16px 20px;
          border-top: 1px solid white;
          border-bottom: 1px solid white;
        }

        /* remove vertical lines */
        .comparison-table th:first-child,
        .comparison-table td:first-child {
          border-left: none;
        }
        .comparison-table th:last-child,
        .comparison-table td:last-child {
          border-right: none;
        }

        .comparison-table th {
          font-weight: 600;
        }

        /* Highlight Poseidon row */
        .poseidon-row {
          background-color: rgba(255, 255, 255, 0.3);
          font-weight: 700;
        }

        .footnote {
          margin-top: 20px;
          font-size: 0.9rem;
          color: #ccc;
          text-align: right;
          width: 90%;
          max-width: 1200px;
        }

        @media (max-width: 768px) {
          .comparison-table th,
          .comparison-table td {
            padding: 12px 10px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default RegionsDisplay;
