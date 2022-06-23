import { forwardRef, useEffect } from 'react';

import { OverlayProps } from '../@types';
import { StyledOverlay } from './styles';

const Overlay = forwardRef<HTMLDivElement, OverlayProps>((props, ref) => {
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

  return <StyledOverlay ref={ref} role="presentation" {...props} />;
});

Overlay.displayName = 'Overlay';

export default Overlay;
