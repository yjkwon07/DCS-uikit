import { OverlayProps } from '../@types';

const Overlay = ({ className, onClick }: OverlayProps) => {
  return (
    <div
      role="presentation"
      className={className}
      tw="fixed top-0 left-0 z-overlay w-full h-full bg-overlay-primary opacity-[.8]"
      onClick={() => onClick && onClick()}
    />
  );
};

export default Overlay;
