import { get } from 'lodash-es';
import { theme } from 'twin.macro';

const getThemeValue = (path: string, key: string) => {
  return get(theme(), `${path}.${key}` as any);
};

export default getThemeValue;
