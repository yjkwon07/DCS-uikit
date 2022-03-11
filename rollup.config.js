/* eslint-disable import/no-extraneous-dependencies */
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const extensions = ['.ts', '.tsx']; // 어떤 확장자를 처리 할 지 정함

export default {
  input: './src/index.ts', // 어떤 파일부터 불러올지 정함.
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  plugins: [
    // Automatically add peerDependencies to the `external` config
    // https://rollupjs.org/guide/en/#external
    peerDepsExternal(), // peerDependencies로 설치한 라이브러리들을 external 모듈로 설정 즉, 번들링된 결과에 포함시키지 않음

    // External modules not to include in your bundle (eg: 'lodash', 'moment' etc.)
    // https://rollupjs.org/guide/en/#external
    // external: []
    resolve({ extensions }), // node_modules 에서 모듈을 불러올 수 있게 해줌. ts/tsx 파일도 불러올 수 있게 해줌

    commonjs(), // CommonJS 형태로 만들어진 모듈도 불러와서 사용 할 수 있게 해줌. 현재 프로젝트 상황에서는 없어도 무방함

    babel({
      extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
    }), // Babel을 사용 할 수 있게 해줌

    url(), // 미디어 파일을 dataURI 형태로 불러와서 사용 할 수 있게 해줌.

    typescript(),

    svgr(), // SVG를 컴포넌트로 사용 할 수 있게 해줌.
  ],
};
