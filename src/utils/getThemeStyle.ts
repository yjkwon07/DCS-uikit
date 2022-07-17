import { get } from 'lodash-es';

const getThemeStyle = <T>(theme: T, key: string) => {
  const themeValue = get(theme, key.replace(' !important', ''));
  return themeValue ? themeValue + (key.includes('!important') ? ' !important' : '') : key;
};

export default getThemeStyle;
