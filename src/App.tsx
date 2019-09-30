import React from 'react';
import styles from './App.module.scss';
import Layout from "./layout/Layout";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import Meet from "./meet/Meet";

const App: React.FC = () => {
  return (
    <Layout 
      header={<Header/>}
      content={<Meet />}
      footer={<Footer/>} />
  );
}

export default App;
