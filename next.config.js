/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  images: {
    domains: ['assets.example.com'],
  },
}

module.exports = nextConfig
