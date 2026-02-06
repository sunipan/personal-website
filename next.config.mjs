/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://riftrstore.cc/Sebi%20Unipan%20-%20Resume.pdf',
        permanent: false, // 307 redirect - keeps the destination hidden from casual inspection
      },
      {
        source: '/resume.pdf',
        destination: 'https://riftrstore.cc/Sebi%20Unipan%20-%20Resume.pdf',
        permanent: false,
      },
    ];
  },
};
