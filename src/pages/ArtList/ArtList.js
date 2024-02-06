import { Fragment } from 'react';
import Layout from '../../components/Layout';
import NavBar from '../../components/NavBar';
import './ArtList.css';

const ArtList = () => {
  return (
    <Layout>
      <NavBar />
      <Fragment>ArtIndex</Fragment>
    </Layout>
  );
}

export default ArtList;