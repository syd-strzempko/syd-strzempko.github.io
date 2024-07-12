import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import styles from './Carousel.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';

const Carousel = ({ images }) => {
  return (
    <ResponsiveCarousel
      showThumbs={false}
      interval={6000}
      autoPlay
      infiniteLoop
    >
      {images?.map((image) => {
        return (<div className={styles.imageWrapper} key={image.id}>
          <ProgressiveImage className={styles.full} image={image} carousel />
        </div>);
      })}
    </ResponsiveCarousel>
  );
}

export default Carousel;