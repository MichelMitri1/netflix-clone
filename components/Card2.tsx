import React from 'react'
import homepageStyles from "../styles/HomePage.module.css";
import netflixMobile from "./assets/netflix-mobile.jpg";

function Card2() {
  return (
    <div className={homepageStyles.homepage__card2Wrapper}>
    <div className={homepageStyles.homepage__card2Info}>
      <h1 className={homepageStyles.homepage__card2Title}>
        Download your shows to watch offline.
      </h1>
      <p className={homepageStyles.homepage__card2Para}>
        Save your favorites easily and always have something to watch.
      </p>
    </div>
    <figure className={homepageStyles.homepage__card2ImgWrapper}>
      <img
        src={netflixMobile.src}
        alt=""
        className={homepageStyles.homepage__card2Img}
      />
    </figure>
  </div>
  )
}

export default Card2