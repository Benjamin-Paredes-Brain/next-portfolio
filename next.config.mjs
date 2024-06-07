/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/files',
              outputPath: 'static/files',
            },
          },
        ],
      });
  
      return config;
    },
  };

export default nextConfig;
