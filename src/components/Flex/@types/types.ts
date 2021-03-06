import { ElementType } from 'react';

import { GapProps, PolymorphicComponentProps } from '../../../typings';
import { BaseBoxProps } from '../../Box';

export interface BaseFlexProps extends BaseBoxProps, GapProps {}

export type FlexProps<E extends ElementType = 'div'> = PolymorphicComponentProps<E, BaseFlexProps>;
