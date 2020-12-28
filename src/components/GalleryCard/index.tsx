import{ FC } from 'react';
import { useImgurActions } from '../../context/Imgur';
import { GalleryAlbumType, GalleryImageType } from '../../types';
import GalleryImage from '../GalleryImage';

import './style.css';

interface IGalleryCardProps {
  galleryItem: GalleryAlbumType | GalleryImageType;
  width: number;
}

const GalleryCard: FC<IGalleryCardProps> = ({ galleryItem, width }) => {
  const { setSelectedMedia } = useImgurActions();

  return (
    <div className="gallery-card" onClick={() => { setSelectedMedia(galleryItem) }}>
      <GalleryImage image={galleryItem.is_album ? galleryItem.images[0] : galleryItem} displayWidth={width}/>
      <span className="gallery-description">{galleryItem.title}</span>
    </div>
  );
};

export default GalleryCard;
