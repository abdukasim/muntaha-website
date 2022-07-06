/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //enter the domain or subdomain where you have WordPress installed
    domains: ["127.0.0.1", "2.gravatar.com"],
  },
};

module.exports = nextConfig;
