import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import { string } from 'rollup-plugin-string'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  external: ['react', 'react-dom'],
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.ems.js',
      format: 'esm'
    },
    {
      name: 'modvue',
      file: 'dist/bundle.umd.js',
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    string({
      include: '**/*.css'
    }),
    production && terser()
  ]
}
