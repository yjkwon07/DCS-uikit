import { FC, useEffect } from 'react';

import { OverlayProps } from '../@types';
import { StyledOverlay } from './styles';

const Overlay: FC<OverlayProps> = (props) => {
  useEffect(() => {
    document.body.style.cssText = `
      overflow: hidden;
    `;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.cssText = `
        overflow: visible;
        overflow: overlay;
      `;
    };
  }, []);

  return <StyledOverlay role="presentation" {...props} />;
};

export default Overlay;
