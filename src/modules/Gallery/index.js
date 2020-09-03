import React from 'react';
import FadeIn from 'react-fade-in';

const Gallery = () => (
  <div id="gallery">
    <FadeIn delay="100">
      <h2>Gallery</h2>
      <div className="hoverZoom">
        <img src="/imgs/img1.jpg" alt="" />
      </div>
      <div className="hoverZoom">
        <img src="/imgs/img3.jpg" alt="" />
      </div>
      <div className="hoverZoom">
        <img src="/imgs/img4.jpg" alt="" />
      </div>
      <div className="hoverZoom">
        <img src="/imgs/img8.jpg" alt="" />
      </div>
      <div className="hoverZoom">
        <img src="/imgs/img5.jpg" alt="" />
      </div>
      <div className="hoverZoom">
        <img src="/imgs/img6.jpg" alt="" />
      </div>
      <div className="hoverZoom">
        <img src="/imgs/img2.jpg" alt="" />
      </div>
      <div className="hoverZoom">
        <img src="/imgs/img7.jpg" alt="" />
      </div>
      <div className="hoverZoom">
        <img src="/imgs/img9.jpg" alt="" />
      </div>
      <div className="hoverZoom">
        <img src="/imgs/img10.jpg" alt="" />
      </div>
      <div className="hoverZoom">
        <img src="/imgs/img11.jpg" alt="" />
      </div>
    </FadeIn>
  </div>
);

export default {
  routeProps: {
    path: '/gallery',
    component: Gallery,
  },
  name: 'Gallery',
};
