import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Layout from '../../components/Layout';
import profile from '../../assets/profile.jpg';
// import resume from '../../assets/Resume_SydStrzempko_2024.pdf';
import styles from './Home.module.css';

const Home = () => {
  return (
    <Layout header={'About Me'}>
      <Fragment>
        <img className={styles.profile} src={profile} alt={'professional headshot'} />
        <div className={styles.title}>Syd Strzempko</div>
        <div className={styles.description}>
          <span>Full stack engineer with experience developing high-quality, customer-focused applications.</span>
          <span>Expertise ranges from polished, modern frontend frameworks to insight-focused surfacing of trends through backend data aggregation.</span>
          <span>Comfortable working alongside and in tandem with multiple teams to communicate expectations and facilitate combined rollout of cross-domain features.</span>
          <span>My work history reflects a preference towards mission-driven projects which meaningfully contribute to the improvement of the human experience, whether through the propagation of residential clean energy, identifying misinformation & disinformation in the public sphere, or cultural enrichment in community spaces.</span>
          <span>I look forward to learning more about the unique challenges of your problem space and to developing maintainable and scalable features to solve them!</span>
        </div>
        <Link
          to={process.env.PUBLIC_URL + '/Resume_SydStrzempko_2024.pdf'}
          className={styles.linkButton}
          download
          target='_blank' rel='noopener noreferrer'
        >résumé <div>»</div></Link>
      </Fragment>
    </Layout>
  );
}

export default Home;