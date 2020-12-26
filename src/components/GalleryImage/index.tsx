import { FC } from 'react';
import { IGalleryImage } from '../../types';

interface IGalleryImageProps {
  image: IGalleryImage;
}

const GalleryImage: FC<IGalleryImageProps> = ({ image }) => {
  const sm = image.type.startsWith('video') ? console.log(image) : null;
  return (<img src={image.link} alt={image.title} style={{maxWidth:"350px"}}/>)
};


export default GalleryImage;
