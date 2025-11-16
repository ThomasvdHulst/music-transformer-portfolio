/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Handle MIDI files
    config.module.rules.push({
      test: /\.midi?$/,
      type: 'asset/resource',
    });
    
    // Fix for Tone.js - ensure it's not externalized and properly bundled
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
  transpilePackages: ['tone'],
}

module.exports = nextConfig

