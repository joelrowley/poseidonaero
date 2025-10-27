'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link href="/" aria-label="Home">
          <div className="logo-wrapper">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              fill
              priority
              className="logo"
              sizes="(max-width: 300px) 100px, 300px"
            />
          </div>
        </Link>
      </div>

      <div className="nav-links">        
        <Link href="/#about" legacyBehavior>
          <a className="nav-link about-link">About</a>
        </Link>

        <Link href="/#products" legacyBehavior>
          <a className="nav-link products-link">Products</a>
        </Link>
        
        <Link href="https://www.linkedin.com/company/poseidon-aerospace/jobs/" legacyBehavior>
          <a className="nav-link" target="_blank" rel="noopener noreferrer"> Careers </a>
        </Link>
      </div>
      
      <style jsx>{`
        .navbar {
          width: 100%;
          height: 90px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 64px;
          border-bottom: 1px solid #ffffff;
        }

        .logo-container {
          display: flex;
          align-items: center;
        }

        .logo-wrapper {
          position: relative;
          width: 300px;
          height: 40px;
        }

        .logo {
          object-fit: contain;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 68px;
        }

        .nav-link {
          color: #ffffff;
          text-decoration: none;
          font-size: 1rem;
          letter-spacing: 0.5px;
          transition: opacity 0.2s ease;
        }

        .nav-link:hover {
          color: #6B99B3;
        }

        @media (max-width: 1024px) {
          .navbar {
            padding: 0 32px;
            height: 80px;
          }

          .nav-links {
            gap: 40px;
          }

          .nav-link {
            font-size: 1.1rem;
          }

          .logo-wrapper {
            width: 200px;
            height: 30px;
          }
        }

        @media (max-width: 700px) {
          .navbar {
            padding: 0 16px;
            height: 70px;
          }

          .logo-wrapper {
            width: 200px;
            height: 24px;
          }

          .about-link,
          .products-link {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
