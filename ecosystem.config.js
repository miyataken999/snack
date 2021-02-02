const path = require('path');

const interpreter = path.resolve(__dirname, 'node_modules/.bin/ts-node');

module.exports = {
  apps: [
    {
      name: 'snack-website',
      script: './src/server/index.tsx',
      interpreter,
      interpreter_args: '--require tsconfig-paths/register',
      watch: true,
      cwd: 'website',
    },
    /* {
      name: 'snack-bundler',
      script: './src/index.ts',
      interpreter,
      watch: true,
      cwd: 'bundler',
    }, */
    {
      name: 'exp-www-proxy',
      script: './src/index.ts',
      interpreter,
      watch: true,
      cwd: 'packages/expo-www-proxy',
    },
    {
      name: 'exp-web-proxy',
      script: './src/index.ts',
      interpreter,
      watch: true,
      cwd: 'packages/expo-website-proxy',
    },
  ],
};