import { ElementType, Ref, useEffect } from 'react';

import forwardRefWithAs from '../../../utils/forwardRefWidthAs';
import { OverlayProps } from '../@types';
import { StyledOverlay } from './styles';

const DEFAULT_OVERLAY_TAG = 'div' as const;

const Overlay = forwardRefWithAs(function Overlay<E extends ElementType = typeof DEFAULT_OVERLAY_TAG>(
  props: OverlayProps<E>,
  ref: Ref<HTMLDivElement>,
) {
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
