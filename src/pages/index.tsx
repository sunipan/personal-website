import type { NextPage } from 'next';
import { Layout } from '../components/layout';
import { Header } from '../components/header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Layout className="min-h-screen bg-[#1a1a1a]">
        <Header
          title="Sebi Unipan"
          commentStyle
          description="I'm a curious Full Stack developer who loves to learn new things"
        />
      </Layout>
    </>
  );
};

export default Home;