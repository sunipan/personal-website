import type { NextPage } from 'next';
import { Layout } from '../components/layout';
import { Header } from '../components/header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Layout className="min-h-screen bg-dark">
        <Header
          title="About"
          commentStyle
          description="A little bit about me, my background, skills and interests"
        />
      </Layout>
    </>
  );
};

export default Home;
