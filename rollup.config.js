import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import autoprefixer from 'autoprefixer'
import postcss from 'rollup-plugin-postcss'
import del from 'rollup-plugin-delete'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'esm',
    preserveModules: true,
    sourcemap: true,
  },
  plugins: [
    del({ targets: 'lib/*' }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      plugins: [autoprefixer()],
      extensions: ['.css'],
      minimize: true,
      modules: true,
    }),
    // terser(),
  ],
}
