import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'

export default {
  entry: 'src/main.js',
  dest: 'build/main.js',
  format: 'es',
  plugins: [
    nodeResolve(),
    commonjs({
      namedExports: {
        'jsencrypt': [ 'JSEncrypt' ]
      }
    }),
    buble()
  ]
}
