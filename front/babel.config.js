module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin', [
      'module-resolver', {
        alias: {'@': './src'}  /* 절대 경로 생성 */
    }
  ]],
};
