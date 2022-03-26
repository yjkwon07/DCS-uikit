import { capitalize } from 'lodash-es';
import { BrowserRouter, Link } from 'react-router-dom';
import { theme } from 'twin.macro';

import { AutoRenewIcon, SearchIcon } from '../Svg';
import { SCALE, VARIANT } from './@types';
import Button from './Button';
import IconButton from './IconButton';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
};

export const Default = () => {
  return (
    <div>
      {Object.values(VARIANT).map((variant) => {
        return (
          <div tw="mb-[10px]" key={variant}>
            {Object.values(SCALE).map((scale) => {
              return (
                <Button mr="8px" key={scale} variant={variant} scale={scale}>
                  {`${capitalize(variant)} ${scale.toUpperCase()}`}
                </Button>
              );
            })}
          </div>
        );
      })}
      <div tw="mb-[10px]">
        <Button mr="10px" disabled>
          Disabled
        </Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
      </div>
    </div>
  );
};

export const Anchors = () => {
  return (
    <div>
      {Object.values(VARIANT).map((variant) => {
        return (
          <div key={variant} tw="mb-[10px]">
            {Object.values(SCALE).map((scale) => {
              return (
                <Button
                  as="a"
                  tw="mr-[10px]"
                  href="https://www.naver.com"
                  key={scale}
                  variant={variant}
                  scale={scale}
                  external
                >
                  {`${capitalize(variant)} anchor ${scale.toUpperCase()}`}
                </Button>
              );
            })}
          </div>
        );
      })}
      <div tw="mb-[10px]">
        <Button as="a" href="https://www.naver.com" tw="mr-[10px]" external disabled>
          Disabled
        </Button>
        <Button as="a" href="https://www.naver.com" variant="secondary" external disabled>
          Disabled
        </Button>
      </div>
    </div>
  );
};

export const Variants = () => {
  return (
    <div>
      <div tw="mb-[10px]">
        <BrowserRouter>
          <Button as={Link} to="/" variant="secondary">
            As an React Router link
          </Button>
        </BrowserRouter>
      </div>
      <div tw="flex mb-[10px] gap-[10px]">
        <Button tw="w-full" variant="primary" startIcon={<SearchIcon color={theme`colors.white`} />}>
          Full scale
        </Button>
      </div>
      <div tw="flex mb-[10px] gap-[10px]">
        <Button variant="primary" isLoading startIcon={<AutoRenewIcon color={theme`colors.white`} spin />}>
          Search
        </Button>
        <Button variant="primary" isLoading startIcon={<SearchIcon color={theme`colors.white`} />}>
          Search
        </Button>
      </div>
      <div tw="flex mb-[10px] gap-[10px]">
        <IconButton variant="primary" scale="md">
          <SearchIcon color={theme`colors.white`} />
        </IconButton>
        <IconButton variant="secondary" scale="md">
          <SearchIcon />
        </IconButton>
      </div>
      <div tw="flex mb-[10px] gap-[10px]">
        <IconButton variant="primary" scale="sm">
          <SearchIcon color={theme`colors.white`} />
        </IconButton>
        <IconButton variant="secondary" scale="sm">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};
