import Moon from '../Svg/Icons/Moon';
import Search from '../Svg/Icons/Search';
import { optionSize } from './@types';
import Input from './Input';
import InputGroup from './InputGroup';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {},
};

export const Default = () => {
  return (
    <div>
      {Object.keys(optionSize).map((key) => (
        <>
          <div tw="mb-[16px] font-bold">{key}</div>
          <div tw="flex mb-[32px] gap[16px]">
            <Input type="text" size={optionSize[key]} defaultValue="value" />
            <Input type="text" size={optionSize[key]} placeholder="입력하시오" />
            <Input type="text" size={optionSize[key]} defaultValue="Disabled" disabled />
            <Input type="text" size={optionSize[key]} defaultValue="Success" isSuccess />
            <Input type="text" size={optionSize[key]} defaultValue="Warning" isWarning />
          </div>
        </>
      ))}
    </div>
  );
};

export const Icons = () => {
  return (
    <div tw="w-[300px]">
      <InputGroup tw="mb-[24px]" startIcon={<Search tw="w-[18px]" />} endIcon={<Moon tw="w-[18px]" />} size="xs">
        <Input type="text" defaultValue="Input Group" />
      </InputGroup>
      <InputGroup tw="mb-[24px]" startIcon={<Search tw="w-[24px]" />} endIcon={<Moon tw="w-[24px]" />} size="sm">
        <Input type="text" defaultValue="Input Group" />
      </InputGroup>
      <InputGroup tw="mb-[24px]" startIcon={<Search tw="w-[32px]" />} endIcon={<Moon tw="w-[32px]" />} size="md">
        <Input type="text" defaultValue="Input Group" />
      </InputGroup>
    </div>
  );
};
