import React, { useState } from "react";
import Layout from "./layout/Layout";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import Meet from "./parts/meet/Meet";
import { getMeet } from "./services/event-service";

const App: React.FC = () => {
  const [currentMeet] = useState(getMeet("MT12"));
  return <Layout header={<Header />} content={<Meet meet={currentMeet} />} footer={<Footer />} />;
};

export default App;
