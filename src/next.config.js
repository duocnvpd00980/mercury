// src/next.config.js

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/index.py/:path*',
      },
    ]
  },
};
