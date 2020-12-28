import { FC, CSSProperties } from 'react';

import './style.css';

interface IAspectRatioProps {
  width: number,
  height: number,
  className?: string
}

// https://css-tricks.com/aspect-ratio-boxes/#using-custom-properties
const AspectRatio: FC<IAspectRatioProps> = ({ width, height, className = '', children }) => {
  const aspectRatioStyle = { '--aspect-ratio': (width / height).toFixed(2) } as CSSProperties;

  return (
    <div className={`aspect-ratio__container ${className}`} style={aspectRatioStyle}>
      {children}
    </div>
  );
}

export default AspectRatio;
