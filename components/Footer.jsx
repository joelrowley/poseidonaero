'use client';

import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="content-wrapper">
        <div className="logo-copyright-container">
          <div className="logo-wrapper">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              width={250} 
              height={25} 
              priority
            />
          </div>
          <div className="copyright">© {currentYear} Poseidon Aero</div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 64px;
          border-top: 1px solid #ffffff;
          background-color: #000000;
        }
        
        .content-wrapper {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo-copyright-container {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .logo-wrapper {
          display: flex;
          align-items: center;
        }
        
        .copyright {
          font-size: 14px;
          color: #FFFFFF;
          opacity: 0.7;
        }
      `}</style>
    </footer>
  );
}
