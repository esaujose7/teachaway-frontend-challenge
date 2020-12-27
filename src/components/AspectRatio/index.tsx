import { FC, CSSProperties } from 'react';

import './style.css';

interface IAspectRatioProps {
  width: number,
  height: number,
  displayWidth: number,
}

// https://css-tricks.com/aspect-ratio-boxes/#using-custom-properties
const AspectRatio: FC<IAspectRatioProps> = ({ width, height, displayWidth, children }) => {
  const aspectRatioStyle = {
    '--aspect-ratio': (width / height).toFixed(2),
    width: displayWidth
  } as CSSProperties;

  return (
    <div style={aspectRatioStyle}>
      {children}
    </div>
  );
}

export default AspectRatio;
