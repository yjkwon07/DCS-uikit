import { capitalize } from 'lodash-es';
import { BrowserRouter, Link } from 'react-router-dom';

import { AutoRenewIcon, SearchIcon } from '../Svg';
import { SCALE, VARIANT } from './@types';
import Button from './Button';
import IconButton from './IconButton';

export default {
  title: 'Form/Button',
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
                  key={scale}
                  as="a"
                  mr="10px"
                  href="https://www.naver.com"
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
        <Button as="a" href="https://www.naver.com" mr="10px" external disabled>
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
        <Button width="100%" variant="primary" startIcon={<SearchIcon />}>
          Full scale
        </Button>
      </div>
      <div tw="flex mb-[10px] gap-[10px]">
        <Button variant="primary" isLoading startIcon={<AutoRenewIcon spin />}>
          Search
        </Button>
        <Button variant="primary" isLoading startIcon={<SearchIcon />}>
          Search
        </Button>
      </div>
      <div tw="flex mb-[10px] gap-[10px]">
        <IconButton variant="primary" scale="md">
          <SearchIcon />
        </IconButton>
        <IconButton variant="secondary" scale="md">
          <SearchIcon />
        </IconButton>
      </div>
      <div tw="flex mb-[10px] gap-[10px]">
        <IconButton variant="primary" scale="sm">
          <SearchIcon />
        </IconButton>
        <IconButton variant="secondary" scale="sm">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};
