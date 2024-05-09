import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Layout from '../../../components/Layout';
import { selectSingle } from '../workSlice';
import styles from '../work.module.css';
import linkButton from '../../../assets/icons/link.svg';

export const WorkSingle = () => {
  let { id } = useParams();
  const single = useSelector((state) => selectSingle(state, id));
  return (
    <Layout header={single.title ? single.org : single.project} returnURL={'/work'}>
      <div className={styles.title}>{single.title ? single.title : single.org}</div>
      <div className={styles.subTitle}>{single.span}</div>
      {single.stack && <div>Stack: {single.stack}</div>}
      <div className={styles.listWrapper}>
        {single.details.map((detail, i) => {
          return (
            <div key={i} className={styles.listItem}>
              <div className={styles.bullet} />
              <span>{detail}</span>
            </div>
          );
        })}
      </div>
      {single.link && <div className={styles.linkWrapper}>
        <Link to={single.link} className={styles.linkButton}>
          <img src={linkButton} alt='external link' />
        </Link>
      </div>}
    </Layout>
  );
}