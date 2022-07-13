import { ElementType } from 'react';

import { GridProps as _GridProps } from 'styled-system';

import { PolymorphicComponentProps } from '../../../typings';
import { BaseFlexProps } from '../../Flex';

export interface BaseGridProps extends BaseFlexProps, _GridProps {}

export type GridProps<E extends ElementType> = PolymorphicComponentProps<E, BaseGridProps>;
