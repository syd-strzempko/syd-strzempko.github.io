import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectWorkComplete } from '../workSlice';
import styles from '../work.module.css';
import Layout from '../../../components/Layout';
import ProgressiveImage from '../../../components/ProgressiveImage';

export const WorkList = () => {
  const jobs = useSelector(selectWorkComplete);

  return (
    <Layout>
      <div className={styles.wrapper}>
        {jobs?.map((job, i) => {
          return (
            <Link to={`/work/${job.url}`} key={i}>
              <div className={styles.tile}>
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