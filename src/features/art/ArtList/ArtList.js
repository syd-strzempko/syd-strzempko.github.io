import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../../../components/Layout';
import ProgressiveImage from '../../../components/ProgressiveImage';
import { selectArts } from '../artSlice';
import styles from '../art.module.css';

export const ArtList = () => {
  const arts = useSelector(selectArts);
  return (
    <Layout>
      <div className={styles.wrapper}>
        {arts?.map((art) => {
          return (
            <Link to={`/art/${art.id}`}>
              <div className={styles.tile} key={art.id}>
                <ProgressiveImage image={art} tile />
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}