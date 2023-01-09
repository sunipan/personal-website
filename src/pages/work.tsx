import type { NextPage } from 'next';
import { Layout } from '../components/layout';
import { Header } from '../components/header/Header';

const Work: NextPage = () => {
  return (
    <>
      <Layout className="min-h-screen bg-dark">
        <Header
          title="Projects"
          commentStyle
          description="My past projects and career experiences"
        />
      </Layout>
    </>
  );
};

export default Work;
