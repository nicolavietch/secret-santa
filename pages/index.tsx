import type { NextPage } from "next";
import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../components/Layout"));

const Home: NextPage = () => {
  return <Layout></Layout>;
};

export default Home;
