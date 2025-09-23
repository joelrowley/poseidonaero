'use client';
import React from 'react';

const RegionsDisplay = () => {
  return (
    <section id="middle-ground" className="middle-ground-section">
      <h1 className="title">The Middle Ground</h1>

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
        /* Section spacing integrates with global rhythm */
        .middle-ground-section {
          scroll-margin-top: 10rem;
          padding-top: clamp(6rem, 8vw, 10rem);
          padding-bottom: clamp(4rem, 6vw, 8rem);
          background: #000;
          color: #fff;
          font-family: 'Stabil Grotesk', sans-serif;
        }

        /* Responsive H1 that matches global site typography */
        .title {
          text-align: center;
          font-weight: 700;
          font-size: clamp(2.25rem, 4vw, 2.8rem);
          line-height: 1.1;
          margin: 0 0 clamp(1.5rem, 3vw, 2.5rem);
        }

        .table-container {
          width: min(90%, 1200px);
          margin: 0 auto;
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          font-size: clamp(0.95rem, 1.8vw, 1.05rem);
          line-height: 1.4;
        }

        .comparison-table th,
        .comparison-table td {
          padding: clamp(0.75rem, 1.5vw, 1rem) clamp(1rem, 2vw, 1.25rem);
          border-bottom: 1px solid white;
          text-align: left;
        }

        .comparison-table thead th {
          text-transform: uppercase;
          font-weight: 800;
          vertical-align: top;
        }

        .cost-footnote {
          font-size: clamp(0.55rem, 1.4vw, 0.65rem);
          font-weight: 300;
          line-height: 1.1;
          margin-top: 0.15rem;
          text-transform: none;
        }

        .poseidon-row {
          background-color: rgba(255, 255, 255, 0.12);
          font-weight: 700;
        }

        /* Remove unnecessary vertical borders for clean lines */
        .comparison-table th:first-child,
        .comparison-table td:first-child {
          border-left: none;
        }
        .comparison-table th:last-child,
        .comparison-table td:last-child {
          border-right: none;
        }

        @media (max-width: 600px) {
          .comparison-table th,
          .comparison-table td {
            padding: 0.6rem 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default RegionsDisplay;
