import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/Layout';
import { selectArt } from '../artSlice';
import styles from '../art.module.css';
import ProgressiveImage from '../../../components/ProgressiveImage';

export const ArtSingle = () => {
  let { id } = useParams();
  const art = useSelector((state) => selectArt(state, id));
  return (
    <Layout header={'Art Project'} returnURL={'/art'}>
      <div className={styles.wrapperSingle}>
        <ProgressiveImage image={art} />
      </div>
    </Layout>
  );
}