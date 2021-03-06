import { FC } from 'react';

import { SvgProps } from '../@types';
import Svg from '../Svg';

const Icon: FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M4 4H12V12H4V4Z" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 8H16V16H8V8Z" stroke="#C4B5FD" strokeWidth="2" />
    </Svg>
  );
};

export default Icon;
