import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import TeamsContainer from '../container/TeamsContainer';
const Teams = () => {
    return (
  
      <Layout>
           <Header teams name="Teams"/>
           <TeamsContainer/>
    </Layout>
      
      


    );
};

export default Teams;