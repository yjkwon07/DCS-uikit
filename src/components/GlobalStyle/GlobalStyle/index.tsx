import { css, Global } from '@emotion/react';

import { colorStyle } from '../../../theme';
import BaseStyle from '../BaseStyle';

const customStyles = css([colorStyle]);

const GlobalStyle = () => (
  <>
    <BaseStyle />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyle;
