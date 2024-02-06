import { Fragment } from 'react';
import Layout from '../../components/Layout';
import NavBar from '../../components/NavBar';
import './WorkList.css';

const WorkList = () => {
  return (
    <Layout>
      <NavBar />
      <Fragment>WorkIndex</Fragment>
    </Layout>
  );
}

export default WorkList;