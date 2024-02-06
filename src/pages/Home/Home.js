import { Fragment } from 'react';
import Layout from '../../components/Layout';
import './Home.css';

const Home = () => {
  return (
    <Layout header={'About Me'}>
      <Fragment>
        Hi!
      </Fragment>
    </Layout>
  );
}

export default Home;