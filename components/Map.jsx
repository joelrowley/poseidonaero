'use client';
import React from 'react';

const RegionsDisplay = () => {
  return (
    <section id="middle-ground" style={{ scrollMarginTop: '160px' }}>
      {/* H1 reverted to previous style */}
      <h1 className="mb-4 items-center title">The Middle Ground</h1>

      <div className="table-container">
        <table className="comparison-table">
          <thead>
            <tr>
              <th>METHOD</th>
              <th>SPEED</th>
              <th>
                COST&nbsp;PER&nbsp;TON
                <div className="cost-footnote">*route dependent</div>
              </th>
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
      </div>

      <style jsx>{`
        /* Match earlier H1 style */
        .title {
          font-family: 'Stabil Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 700;
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

        /* Header row: all caps, bold, and no top border */
        .comparison-table thead tr th {
          border-top: none;
          text-transform: uppercase;
          font-weight: 800;
          position: relative;
          vertical-align: bottom;
        }

        /* Small, thin footnote directly under COST PER TON */
        .cost-footnote {
          font-size: 0.6rem;
          font-weight: 300;
          line-height: 0.8rem;
          margin-top: 2px;
        }

        /* Remove vertical lines */
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

        @media (max-width: 768px) {
          .title {
            font-size: 1.8rem;
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
