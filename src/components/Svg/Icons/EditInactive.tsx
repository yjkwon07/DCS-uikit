import { FC } from 'react';

import { SvgProps } from '../@types';
import Svg from '../Svg';

const Icon: FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
    </Svg>
  );
};

export default Icon;
