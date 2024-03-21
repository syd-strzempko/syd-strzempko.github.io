import { useState, useEffect } from 'react';
import styles from './ProgressiveImage.module.css';

const ProgressiveImage = ({ image }) => {
  const [imgSrc, setImgSrc] = useState(image.compressed.pathLong || image.pathLong);

  useEffect(() => {
    const img = new Image();
    img.src = image.pathLong;
    img.onload = () => {
      setImgSrc(image.pathLong);
    };
  }, [image.pathLong]);

  return (
    <img src={imgSrc} className={styles.image} alt={`artwork ${image.id}`}/>
  );
}

export default ProgressiveImage;