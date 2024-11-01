const webpack = require('@nativescript/webpack');

module.exports = (env) => {
  webpack.init(env);

  // Optimize bundle size
  webpack.chainWebpack((config) => {
    config.optimization.minimize(true);
    
    // Split chunks for better caching
    config.optimization.splitChunks({
      chunks: 'all',
      minSize: 20000,
      maxSize: 250000,
    });
  });

  return webpack.resolveConfig();
};