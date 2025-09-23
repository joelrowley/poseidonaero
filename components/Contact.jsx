'use client';

import React from 'react';
import VectorField from './VectorField';

const Contact = () => {
  return (
    <section>
      <div className="relative w-full min-h-[900px] py-[80px] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[900px] overflow-hidden z-[1] pointer-events-auto">
          <VectorField height={1000} />
        </div>

        <div className="relative z-[2] w-full flex flex-col items-center justify-center pointer-events-auto mt-[80px] px-[16px]">
          <div className="contact-box bg-black py-[50px] px-[50px] rounded-[8px] text-left min-h-[270px] text-white font-stabil">
            <h2 className="contact-title mb-[30px] text-[2.4rem]">Contact Us</h2>
            <a
              href="mailto:contact@poseidonaero.com"
              className="contact-link flex items-center text-[1.2rem] no-underline transition-colors duration-400 ease-in-out hover:text-[#6B99B3]"
            >
              <img
                src="/planearrow.svg"
                alt="Arrow"
                className="arrow-icon mr-[15px] ml-[15px] w-[25px] h-[25px] transform rotate-90"
              />
              contact@poseidonaero.com
            </a>
          </div>
        </div>

        <style jsx>{`
          /* Responsive box sizing */
          .contact-box {
            width: 30%;
            min-width: 400px;
          }

          @media (max-width: 1024px) {
            .contact-box {
              width: 70%;
              min-width: auto;
              padding: 40px 60px;
            }

            .contact-title {
              font-size: 2.2rem;
            }

            .contact-link {
              font-size: 1.3rem;
            }
          }

          @media (max-width: 768px) {
            .contact-box {
              width: 90%;
              padding: 30px;
            }

            .contact-title {
              font-size: 2.2rem;
            }

            .contact-link {
              font-size: 1r.2em;
            }

            .arrow-icon {
              width: 22px;
              height: 22px;
              margin-left: 10px;
              margin-right: 10px;
            }
          }
          @media (max-width: 768px) {
          .contact-title {
              font-size: 2rem;
            }

            .contact-link {
              font-size: 1rem;
            }
        }

        `}</style>
      </div>
    </section>
  );
};

export default Contact;
