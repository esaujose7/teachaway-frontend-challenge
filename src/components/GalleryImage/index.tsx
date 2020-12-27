import { FC } from 'react';
import { IGalleryImage } from '../../types';
import { getImgurImageJPG } from '../../utils';

import AspectRatio from '../AspectRatio';

interface IGalleryImageProps {
  image: IGalleryImage;
  maxWidth?: number
}

const GalleryImage: FC<IGalleryImageProps> = ({ image, maxWidth = 300 }) => {
  const imageUrl = image.type.startsWith('video') ? getImgurImageJPG(image.id) : image.link;

  return (
    <AspectRatio height={image.height} width={image.width} displayWidth={maxWidth}>
      <img src={imageUrl.concat(`?maxWidth=${maxWidth}`)} alt={image.title}/>
    </AspectRatio>
  )
};


export default GalleryImage;
