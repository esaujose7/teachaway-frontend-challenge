import { FC, CSSProperties } from 'react';

import './style.css';

interface IAspectRatioProps {
  width: number,
  height: number,
}

// https://css-tricks.com/aspect-ratio-boxes/#using-custom-properties
const AspectRatio: FC<IAspectRatioProps> = ({ width, height, children }) => {
  const aspectRatioStyle = { '--aspect-ratio': (width / height).toFixed(2) } as CSSProperties;

  return (
    <div className="aspect-ratio__container" style={aspectRatioStyle}>
      {children}
    </div>
  );
}

export default AspectRatio;
