import { ElementType } from 'react';

import { PolymorphicComponentProps } from '../../../typings';
import { BaseBoxProps } from '../../Box';

export interface BaseFlexProps extends BaseBoxProps, GapProps {}

export type FlexProps<E extends ElementType> = PolymorphicComponentProps<E, BaseFlexProps>;
