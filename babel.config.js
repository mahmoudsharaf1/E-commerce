module.exports = {
  presets: ['module:@react-native/babel-preset'],
    plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@contexts': './src/contexts',
          '@/features': './src/features',
          '@/product': './src/features/product',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@services': './src/services',
          '@styles': './src/styles',
          '@theme': './src/theme',
          '@/types': './src/types',
          '@utils': './src/utils',
          '@/env': './env',
        },
      },
    ],
  ],
};
