import { Fragment } from 'react';
import NavBar from '../../components/NavBar';
import Layout from '../../components/Layout';
import './Home.css';

const Home = () => {
  return (
    <Layout>
      <NavBar />
      <Fragment>Home</Fragment>
    </Layout>
  );
}

export default Home;