import { capitalize } from 'lodash-es';
import { BrowserRouter, Link } from 'react-router-dom';

import { colors } from '../../theme';
import { Box } from '../Box';
import { Flex } from '../Flex';
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
    <Flex flexDirection="column" rowGap={10}>
      {Object.values(VARIANT).map((variant) => {
        return (
          <Box key={variant}>
            {Object.values(SCALE).map((scale) => {
              return (
                <Button mr="8px" key={scale} variant={variant} scale={scale}>
                  {`${capitalize(variant)} ${scale.toUpperCase()}`}
                </Button>
              );
            })}
          </Box>
        );
      })}
      <Flex rowGap={10}>
        <Button mr={10} disabled>
          Disabled
        </Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
      </Flex>
    </Flex>
  );
};

export const Anchors = () => {
  return (
    <Flex flexDirection="column" rowGap={10}>
      {Object.values(VARIANT).map((variant) => {
        return (
          <Box key={variant}>
            {Object.values(SCALE).map((scale) => {
              return (
                <Button
                  key={scale}
                  as="a"
                  mr={10}
                  href="https://www.naver.com"
                  variant={variant}
                  scale={scale}
                  external
                >
                  {`${capitalize(variant)} anchor ${scale.toUpperCase()}`}
                </Button>
              );
            })}
          </Box>
        );
      })}
      <Flex rowGap={10}>
        <Button as="a" href="https://www.naver.com" mr={10} external disabled>
          Disabled
        </Button>
        <Button as="a" href="https://www.naver.com" variant="secondary" external disabled>
          Disabled
        </Button>
      </Flex>
    </Flex>
  );
};

export const Variants = () => {
  return (
    <Flex flexDirection="column" rowGap={10}>
      <Box>
        <BrowserRouter>
          <Button as={Link} to="/" variant="secondary">
            As an React Router link
          </Button>
        </BrowserRouter>
      </Box>
      <Box>
        <Button width="100%" startIcon={<SearchIcon fill={colors.current} />}>
          Full scale
        </Button>
      </Box>
      <Flex columnGap={10}>
        <Button isLoading startIcon={<AutoRenewIcon fill={colors.orange[600]} spin />}>
          Search
        </Button>
        <Button isLoading startIcon={<SearchIcon fill={colors.current} />}>
          Search
        </Button>
      </Flex>
      <Flex columnGap={10}>
        <IconButton scale="md">
          <SearchIcon fill={colors.current} />
        </IconButton>
        <IconButton variant="secondary" scale="md">
          <SearchIcon fill={colors.current} />
        </IconButton>
      </Flex>
      <Flex columnGap={10}>
        <IconButton scale="sm">
          <SearchIcon fill={colors.current} />
        </IconButton>
        <IconButton variant="secondary" scale="sm">
          <SearchIcon fill={colors.current} />
        </IconButton>
      </Flex>
    </Flex>
  );
};
