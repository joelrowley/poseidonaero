'use client';
import React from 'react';

const RegionsDisplay = () => {
  return (
    <section id="middle-ground" style={{ scrollMarginTop: '160px' }}>
      <h1 className="custom-title">The Middle Ground</h1>

      <div className="table-container">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>METHOD</th>
              <th>SPEED</th>
              <th>COST PER TON</th>
              <th>FLEXIBILITY</th>
              <th>INFRASTRUCTURE REQUIRED</th>
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
        .custom-title {
          font-family: 'Stabil Grotesk', sans-serif;
          font-size: 1.8rem; /* slightly smaller than default h1 */
          font-weight: 700;
          margin-top: 80px;   /* more space above */
          margin-bottom: 16px; /* closer to table */
          text-align: center;
          color: white;
        }

        .table-container {
          width: 100%;
          padding: 0 0 100px;
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

        /* Table cells */
        .comparison-table th,
        .comparison-table td {
          padding: 16px 20px;
          border-bottom: 1px solid white;
        }

        /* remove top border on first row to hide top line */
        .comparison-table thead tr th {
          border-top: none;
          text-transform: uppercase;
          font-weight: 800; /* slightly bolder */
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

        /* Highlight Poseidon row */
        .poseidon-row {
          background-color: rgba(255, 255, 255, 0.07);
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
          .custom-title {
            font-size: 1.5rem;
            margin-top: 60px;
          }

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
