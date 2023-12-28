/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['blognew.dynamicssquare.ca']
   },
   env:{
    BACKEND_URL:'https://blognew.dynamicssquare.ca'
  }
}


module.exports = nextConfig
