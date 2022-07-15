import { SVGAttributes } from 'react';

import { SpaceProps } from 'styled-system';

import { ColorsKey } from '../../../theme/color/@types';
import { ColorStyleProps } from '../../../typings';

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  fill?: ColorStyleProps<ColorsKey>;
  spin?: boolean;
}

export type SvgIconProps = { iconName: string } & SvgProps;
