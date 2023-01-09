import type { NextPage } from 'next';
import { Layout } from '../components/layout';
import { Header } from '../components/header/Header';

const Home: NextPage = () => {
  return (
    <>
      <Layout className="min-h-screen bg-dark">
        <Header
          title="Contact"
          commentStyle
          description="If you want to get in touch with me, you can do it here"
        />
      </Layout>
    </>
  );
};

export default Home;
