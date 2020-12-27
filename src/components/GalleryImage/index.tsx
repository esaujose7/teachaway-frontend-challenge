import { FC } from 'react';
import { IGalleryImage } from '../../types';
import { getImgurImageJPG } from '../../utils';

import AspectRatio from '../AspectRatio';

interface IGalleryImageProps {
  image: IGalleryImage;
}

const GalleryImage: FC<IGalleryImageProps> = ({ image }) => {
  const imageUrl = image.type.startsWith('video') ? getImgurImageJPG(image.id) : image.link;

  return (
    <AspectRatio height={image.height} width={image.width}>
      <img src={imageUrl} alt={image.title}/>
    </AspectRatio>
  )
};


export default GalleryImage;
