import Moon from '../Svg/Icons/Moon';
import Search from '../Svg/Icons/Search';
import { SCALE } from './@types';
import Input from './Menu';

export default {
  title: 'Components/Menu',
  component: Input,
  argTypes: {},
};

export const Default = () => {
  return (
    <div>
      {Object.values(SCALE).map((scale) => (
        <>
          <div tw="mb-[16px] font-bold">{scale.toUpperCase()}</div>
          <div tw="flex mb-[32px] gap[16px]">
            <Input type="text" scale={scale} defaultValue="value" />
            <Input type="text" scale={scale} placeholder="입력하시오" />
            <Input type="text" scale={scale} defaultValue="Disabled" disabled />
            <Input type="text" scale={scale} defaultValue="Success" isSuccess />
            <Input type="text" scale={scale} defaultValue="Warning" isWarning />
          </div>
        </>
      ))}
    </div>
  );
};
