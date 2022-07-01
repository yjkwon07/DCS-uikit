import { colors, shadow, textColor } from '..';
import { Leaves } from '../../../typings/utils/nestedKeyof';

export type ColorsKey = Leaves<typeof colors>;
export type TextColorKey = Leaves<typeof textColor>;
export type ShadowKey = Leaves<typeof shadow>;
