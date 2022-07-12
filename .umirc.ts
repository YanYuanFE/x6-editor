import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'x6-editor',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  ignoreMomentLocale: true,
  webpack5: {},
  menus: {
    '/components': [
      {
        title: '组件',
        children: ['GraphCore/index', 'Foo/index'],
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
