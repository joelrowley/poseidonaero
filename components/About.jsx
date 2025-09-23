'use client';

import React from 'react';
import VectorField from './VectorField';

const About = () => {
  return (
    <section id="about" style={{ scrollMarginTop: '90px' }}>
      <div className="py-20 leading-loose">
        <div className="w-full bg-black flex justify-center items-center px-8 md:px-12 lg:px-16">
          <h1 className="sub-title mb-6 md:mb-6 lg:mb-0">
            Oceanic freight is slow. <span className="break-md"></span>Air freight is expensive.
          </h1>
        </div>
        <div className="w-full flex justify-center items-center px-8 md:px-12 lg:px-16">
          <h2 className="text-center leading-tight title">
            Poseidon is developing a middle ground.
          </h2>
        </div>
      </div>

      <div className="about-with-vector-section">
        <div className="vector-field-background">
          <VectorField height={1200} />
        </div>

        <div className="about-content">
          <div className="about-boxes">
            <div className="about-grid">
              <div className="about-box">
                <h2 className="box-title font-stabil">Autonomous</h2>
                <p className="box-text">
                  Our ground effect seaplanes operate fully autonomously, avoiding the cost and time spent manning a crew, as well as expensive manufacturing costs incurred when building a vehicle that accounts for human life.
                </p>
              </div>

              <div className="about-box">
                <h2 className="box-title font-stabil">Infrastructure Independent</h2>
                <p className="box-text">
                  Poseidon takes off and lands on water, not requiring any pre-built infrastructure. This allows us to avoid airport fees, wait times, and clogged logistics channels.
                </p>
              </div>

              <div className="about-box">
                <h2 className="box-title font-stabil">Increased payload capacity</h2>
                <p className="box-text">
                  Our vehicles are built to fly in ground effect, increasing our payload capacity.
                </p>
              </div>

              <div className="about-box">
                <h2 className="box-title font-stabil">Regulated by the coast guard</h2>
                <p className="box-text">
                  Significantly decreasing our operational barrier to entry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .about-with-vector-section {
            position: relative;
            width: 100%;
            min-height: 800px;
            padding: 80px 0;
            pointer-events: none;
          }

          .vector-field-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 820px;
            overflow: hidden;
            z-index: 1;
            pointer-events: auto;
          }

          .about-content {
            position: relative;
            z-index: 2;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            pointer-events: auto;
            margin-top: 80px;
          }

          .about-boxes {
            width: 60%;
            display: flex;
            flex-direction: column;
            margin-bottom: 50px;
          }

          .about-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
          }

          .about-box {
            background-color: rgb(0, 0, 0);
            padding: 30px;
            border-radius: 8px;
            color: white;
          }

          .box-title {
            font-size: 2rem;
            margin-bottom: 20px;
          }

          .box-text {
            font-size: 1rem;
            line-height: 1.6;
          }

          @media (max-width: 1024px) {
            .about-boxes {
              width: 80%;
            }

            .vector-field-background {
              height: 1100px;
            }
          }

          @media (max-width: 768px) {
            .about-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }

            .about-boxes {
              width: 80%;
            }

            .box-title {
              font-size: 1.5rem;
            }

            .box-text {
              font-size: 0.95rem;
            }

            .vector-field-background {
              height: 1300px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default About;
