import { FC } from 'react';

import { SvgProps } from '../@types';
import Svg from '../Svg';

const Icon: FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default Icon;
