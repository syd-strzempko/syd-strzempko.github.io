import { useState, useEffect } from 'react';
import styles from './ProgressiveImage.module.css';
import cn from 'classnames';

const ProgressiveImage = ({ image, art = false, tile = false, carousel = false, alt=null }) => {
  const [imgSrc, setImgSrc] = useState(image.compressed?.pathLong || image.pathLong || image);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const img = new Image();
    img.src = image.pathLong;
    img.onload = () => {
      setImgSrc(image.pathLong);
    };
  }, [image.pathLong]);

  if (!tile) {
    window.addEventListener('resize', () => {
      setViewportHeight(window.innerHeight);
    });
  };

  return (
    <img
      src={imgSrc}
      alt={alt ? alt : `work ${image.id}`}
      className={cn({[styles.tile] : tile, [styles.carousel] : carousel, [styles.image] : !(tile || carousel)})}
      style={art ? { maxHeight: `calc(${viewportHeight}px - 50px)` } : {}}
    />
  );
}

export default ProgressiveImage;