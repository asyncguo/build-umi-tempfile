const esbuild = require('esbuild');
const http = require('http');
const path = require('path')
const { lessLoader } = require('esbuild-plugin-less')

// Start esbuild's server on a random local port
esbuild.serve({
  servedir: path.resolve(__dirname, 'www'),
}, {
    format: 'iife',
    logLevel: 'error',
    outdir: 'www/',
    platform: "browser",
    bundle: true,
    define: {
      'process.env.__IS_SERVER': JSON.stringify('null')
    },
    plugins: [lessLoader({
      javascriptEnabled: true
    })],
    external: ['esbuild'],
    entryPoints: [path.resolve(__dirname, 'src/.umi/umi.ts')]
}).then(result => {
  console.log('esbuild success~');
  console.log('service: ', `http://127.0.0.1:${result.port}`);
});