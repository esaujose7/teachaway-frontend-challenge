import { FC } from 'react';
import { GalleryImageType } from '../../types';

import AspectRatio from '../AspectRatio';

interface IGalleryImageProps {
  image: GalleryImageType;
  displayWidth: number;
}

function getImgurImageJPG(image: GalleryImageType) {
  const [, extension] = image.type.split('/');
  const splittedUrl = image.link.split(extension);
  splittedUrl[splittedUrl.length - 1] = 'jpg';
  return splittedUrl.join('');
}

const GalleryImage: FC<IGalleryImageProps> = ({ image, displayWidth }) => {
  const imageUrl = image.type.startsWith('video') ? getImgurImageJPG(image) : image.link;

  return (
    <AspectRatio height={image.height} width={image.width}>
      <img src={imageUrl.concat(`?maxWidth=${displayWidth}`)} alt={image.title}/>
    </AspectRatio>
  )
};


export default GalleryImage;
