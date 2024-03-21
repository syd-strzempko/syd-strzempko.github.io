import { useState, useEffect } from 'react';
import styles from './ProgressiveImage.module.css';

const ProgressiveImage = ({ image, tile = false }) => {
  const [imgSrc, setImgSrc] = useState(image.compressed.pathLong || image.pathLong);
  const [viewportHeight, setViewportHeight] = useState(document.body.clientHeight);

  useEffect(() => {
    const img = new Image();
    img.src = image.pathLong;
    img.onload = () => {
      setImgSrc(image.pathLong);
    };
  }, [image.pathLong]);

  if (!tile) {
    window.addEventListener('resize', () => {
      setViewportHeight(document.body.clientHeight);
    });
  };

  return (
    <img
      src={imgSrc}
      alt={`artwork ${image.id}`}
      className={tile ? styles.tile : styles.image}
      style={!tile ? { maxHeight: `calc(${viewportHeight}px - 50px)` } : {}}
    />
  );
}

export default ProgressiveImage;