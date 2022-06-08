import { Box } from '../Box';
import { Heading } from '../Heading';
import Moon from '../Svg/Icons/Moon';
import Search from '../Svg/Icons/Search';
import { SCALE } from './@types';
import Input from './Input';
import InputGroup from './InputGroup';

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {},
};

export const Default = () => {
  return (
    <div>
      {Object.values(SCALE).map((scale) => (
        <>
          <Heading mb="16px" bold>
            {scale.toUpperCase()}
          </Heading>
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

export const Icons = () => {
  return (
    <Box width={300}>
      <InputGroup mb="24px" startIcon={<Search width="18px" />} endIcon={<Moon width="18px" />} scale="xs">
        <Input type="text" defaultValue="Input Group" />
      </InputGroup>
      <InputGroup mb="24px" startIcon={<Search width="24px" />} endIcon={<Moon width="24px" />} scale="sm">
        <Input type="text" defaultValue="Input Group" />
      </InputGroup>
      <InputGroup mb="24px" startIcon={<Search width="32px" />} endIcon={<Moon width="32px" />} scale="md">
        <Input type="text" defaultValue="Input Group" />
      </InputGroup>
    </Box>
  );
};
