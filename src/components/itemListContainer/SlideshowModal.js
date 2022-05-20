import React from 'react';
import { Fade } from 'react-slideshow-image';
import './SlideshowModal.css'
import 'react-slideshow-image/dist/styles.css'

const FadeExample = ({id,title,itemDesc}) => {

    console.log(title)

  const fadeImages = [
    `./img/${id}/webp0.jpg`,
    `./img/${id}/webp1.jpg`,
    `./img/${id}/webp2.jpg`,
  ];

  const properties = {
    indicators: true,
    arrows: false,
    duration: 2000
  };

  return (
    <div>
      <div sx={{ width : '50%'}}className="slide-container">
        <Fade {...properties} >
          <div className="each-fade">
            <div>
              <img src={fadeImages[0]} alt={id} />
            </div>
            <p className='title'>{title}
            <div className='spacer'></div>
            <p className='itemDesc'>{itemDesc}</p>
            </p>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[1]} alt={id} />
            </div>
            <p className='title'>{title}
            <div className='spacer'></div>
            <p className='itemDesc'>{itemDesc}</p>
            </p>
          </div>
          <div className="each-fade">
            <div>
              <img src={fadeImages[2]} alt={id} />
            </div>
            <p className='title'>{title}
            <div className='spacer'></div>
            <p className='itemDesc'>{itemDesc}</p>
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default FadeExample;