import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Tooltip } from 'react-tooltip';
import cn from 'classnames';
import { selectJobs, selectProjects } from '../workSlice';
import Layout from '../../../components/Layout';
import styles from './WorkList.module.css';

export const WorkList = () => {
  const jobs = useSelector(selectJobs);
  const projects = useSelector(selectProjects);
  return (
    <Layout header={'Work Experience'}>
      <div className={styles.title}>Jobs</div>
      <div className={styles.wrapper}>
        <div className={styles.line} />
        <div className={styles.listWrapper}>
          {jobs.map((job, i) => {
            return (
              <div key={i} className={styles.listItem}>
                <div data-tooltip-id='date-span-tooltip' data-tooltip-content={job.span} className={styles.point} />
                <Link to={job.url} className={styles.listLink}>
                  <span className={styles.listTitle}>{job.org}</span>
                  <br />
                  <span className={styles.listRole}>{job.title}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.title}>Projects</div>
      <div className={styles.wrapper}>
        <div className={cn(styles.listWrapper, styles.nonlined)}>
          {projects.map((project, i) => {
            return (
              <div key={i} className={styles.listItem}>
                <div data-tooltip-id='date-span-tooltip' data-tooltip-content={project.span} className={styles.point} />
                <Link to={project.url}>
                  <span className={styles.listTitle}>{project.project}</span>
                  <br />
                  <span className={styles.listRole}>{project.org}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Tooltip id='date-span-tooltip' className={styles.tooltip} />
    </Layout>
  );
}