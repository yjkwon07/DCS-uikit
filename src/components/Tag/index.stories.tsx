import { css } from '@emotion/react';
import { capitalize } from 'lodash-es';

import { Box } from '../Box';
import { IconButton } from '../Button';
import { Flex } from '../Flex';
import { CommunityIcon, RemoveIcon } from '../Svg';
import { SCALE, VARIANT } from './@types';
import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {},
};

export const Default = () => {
  return (
    <Box>
      {Object.values(VARIANT).map((variant) => (
        <Box key={variant} mb="32px ">
          <Flex alignItems="center">
            {Object.values(SCALE).map((scale) => (
              <Tag
                key={scale}
                scale={scale}
                variant={variant}
                mr="8px"
                startIcon={
                  <IconButton>
                    <CommunityIcon />
                  </IconButton>
                }
              >
                {`${capitalize(variant)}: ${scale.toUpperCase()}`}
              </Tag>
            ))}
            <Tag variant={variant} outline mr="8px">
              {`${capitalize(variant)} Outline`}
            </Tag>
            <Tag variant={variant} outline startIcon={<CommunityIcon />} mr="8px">
              {`${capitalize(variant)} Icon Left`}
            </Tag>
            <Tag variant={variant} outline endIcon={<RemoveIcon />} mr="8px">
              {`${capitalize(variant)} Icon Right`}
            </Tag>
            <Tag
              variant={variant}
              outline
              startIcon={
                <IconButton disabled>
                  <CommunityIcon />
                </IconButton>
              }
              endIcon={
                <IconButton
                  css={css`
                    &:hover {
                      background-color: red;
                    }
                  `}
                >
                  <RemoveIcon />
                </IconButton>
              }
            >
              {`${capitalize(variant)} Both`}
            </Tag>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export const TextVariations = () => {
  return (
    <Box>
      <Tag textTransform="uppercase" mr="16px">
        uppercase
      </Tag>
      <Tag fontWeight="bold" mr="16px">
        Bold
      </Tag>
    </Box>
  );
};
