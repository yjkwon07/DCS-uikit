import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { GlobalStyle } from '../src';

const cache = createCache({ prepend: true, key: 'twin' });

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <CacheProvider value={cache}>
      <GlobalStyle />
      <Story />
    </CacheProvider>
  ),
];
