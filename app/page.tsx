'use client';

import Navbar from '../components/Navbar';
import About from '../components/About';
import Map from '../components/Map';
import Footer from '../components/Footer';
import Product from '../components/Product';
import Contact from '../components/Contact';

export default function Page() {
  return (
    <div className="page-container">
      <Navbar />

      <div className="header-video-container">
        <video
          src="/headervideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="video-element"
        />
        <div className="video-border" />
      </div>

      <About />
      <Map />
      <Product />
      <Contact />
      <Footer />

      <style jsx>{`
        .page-container {
          width: 100%;
          min-height: 100vh;
        }

        .header-video-container {
        width: 100%;
        overflow: hidden;
        }

        .video-element {
          width: 100%;
          height: auto;
          display: block;
        }

      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background-color: #000000;
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          overflow-x: hidden;
        }

        :global(nav) {
          position: sticky;
          top: 0;
          z-index: 99;
          background-color: rgba(0, 0, 0, 0.7) !important;
          backdrop-filter: blur(5px);
        }
      `}</style>
    </div>
  );
}
