'use client';
import React from 'react';

const RegionsDisplay = () => {
  return (
    <div className="table-container">
      <h1 className="title">Transportation Method Comparison</h1>

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
          <tr>
            <td><strong>Poseidon Aero</strong></td>
            <td><strong>120–150 mph</strong></td>
            <td><strong>$1,200–1,800</strong></td>
            <td><strong>Any waterway</strong></td>
            <td><strong>None</strong></td>
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

        .title {
          font-size: 2rem;
          margin-bottom: 40px;
          text-align: center;
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
          border: 1px solid white;
          padding: 16px 20px;
        }

        .comparison-table th {
          background: transparent;
          font-weight: 600;
        }

        .comparison-table tbody tr:nth-child(2) td {
          font-weight: 600; /* Poseidon row bold */
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
    </div>
  );
};

export default RegionsDisplay;
