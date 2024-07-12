import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCombinedComplete } from '../workSlice';
import styles from '../work.module.css';
import Layout from '../../../components/Layout';
import ProgressiveImage from '../../../components/ProgressiveImage';

export const WorkList = () => {
  const jobs = useSelector(selectCombinedComplete);

  return (
    <Layout>
      <div className={styles.wrapper}>
        {jobs?.map((job, i) => {
          return (
            <Link to={`/work/${job.url}`}>
              <div className={styles.tile} key={i}>
                <ProgressiveImage image={job.images[0]} tile />
                <div className={styles.tileTitle}>{job.title ? job.org : job.project}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}