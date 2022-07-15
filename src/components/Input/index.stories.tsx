import { IconButton } from '../Button';
import { Flex } from '../Flex';
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
          <Heading background="transparent" color="black" mb="16px">
            {scale.toUpperCase()}
          </Heading>
          <div tw="flex mb-[32px] [gap:16px]">
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
    <Flex width={400} flexDirection="column" rowGap={24}>
      <InputGroup startIcon={<Search />} endIcon={<Moon />} scale="xs">
        <Input type="text" defaultValue="Input Group" />
      </InputGroup>
      <InputGroup startIcon={<Search />} endIcon={<Moon />} scale="sm">
        <Input type="text" defaultValue="Input Group" />
      </InputGroup>
      <InputGroup startIcon={<Search />} endIcon={<Moon />} scale="md">
        <Input type="text" defaultValue="Input Group" />
      </InputGroup>
      <InputGroup startIcon={<Search />} endIcon={<Moon />} scale="md">
        <Input type="text" defaultValue="Input disabled" disabled />
      </InputGroup>
    </Flex>
  );
};

export const IconsButton = () => {
  return (
    <Flex width={400} flexDirection="column" rowGap={24}>
      <InputGroup
        startIcon={
          <IconButton>
            <Search />
          </IconButton>
        }
        endIcon={
          <IconButton>
            <Moon />
          </IconButton>
        }
        scale="xs"
      >
        <Input type="text" defaultValue="Input Group" />
      </InputGroup>
      <InputGroup
        startIcon={
          <IconButton>
            <Search />
          </IconButton>
        }
        endIcon={
          <IconButton>
            <Moon />
          </IconButton>
        }
        scale="sm"
      >
        <Input type="text" defaultValue="Input Group" />
      </InputGroup>
      <InputGroup
        startIcon={
          <IconButton>
            <Search />
          </IconButton>
        }
        endIcon={
          <IconButton>
            <Moon />
          </IconButton>
        }
        scale="md"
      >
        <Input type="text" defaultValue="Input Group" />
      </InputGroup>
      <InputGroup
        startIcon={
          <IconButton>
            <Search />
          </IconButton>
        }
        endIcon={
          <IconButton>
            <Moon />
          </IconButton>
        }
        scale="md"
        disabled
      >
        <Input type="text" defaultValue="Input Group disabled" />
      </InputGroup>
      <InputGroup
        startIcon={
          <IconButton>
            <Search />
          </IconButton>
        }
        endIcon={
          <IconButton>
            <Moon fill="#dfdf !important" />
          </IconButton>
        }
        scale="md"
        disabled
      >
        <Input type="text" defaultValue="Input, Input Group disabled" disabled />
      </InputGroup>
    </Flex>
  );
};
