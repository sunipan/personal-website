import type { NextPage } from 'next';
import { Layout } from '../components/layout';
import { Header } from '../components/header/Header';

const Work: NextPage = () => {
  return (
    <>
      <Layout className="min-h-screen bg-[#1a1a1a]">
        <Header title="Work" commentStyle description="My past projects and career experiences" />
      </Layout>
    </>
  );
};

export default Work;
