import { Fragment } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSingleComplete } from '../workSlice';
import styles from '../work.module.css';
import Layout from '../../../components/Layout';
import Section from '../../../components/Section';
import Carousel from '../../../components/Carousel';

import linkButton from '../../../assets/icons/link.svg';

export const WorkSingle = () => {
  let { id } = useParams();
  const job = useSelector((state) => selectSingleComplete(state, id));

  const renderTop = () => {
    return (
      <div className={styles.topWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>{job.title ? job.org : job.project}</div>
          <div className={styles.subtitle}>{job.title ? job.title : job.org}</div>
        </div>
        {job.link && <Link to={job.link} className={styles.hideMobile}>
          <img src={linkButton} className={styles.link} alt='external link to site' />
        </Link>}
      </div>
    );
  };

  const renderJob = () => {
    return (
      <Fragment>
        <div className={styles.hideMobile}>{renderTop()}</div>
        <div className={styles.midWrapper}>
          {job?.details?.map((bullet, i) => {
            return (<div key={i}>- {bullet}</div>);
          })}
        </div>
        {(job.span || job.link) && <div className={styles.bottomWrapper}>
          {job.span && <div className={styles.span}>{job.span}</div>}
          {job.link && <Link to={job.link} className={styles.showMobile}>
            <img src={linkButton} className={styles.link} alt='external link to site' />
          </Link>}
        </div>}
      </Fragment>
    )
  };

  const renderImages = (images) => {
    return (
      <Fragment>
        <div className={styles.showMobile}>{renderTop()}</div>
        <Carousel images={images} />
      </Fragment>
    );
  }

  return (
    <Layout backLink={'/work'}>
      <Section left={renderJob()} right={renderImages(job.images)}></Section>
    </Layout>
  );
}