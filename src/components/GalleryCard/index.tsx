import{ FC } from 'react';
import { GalleryAlbumType, GalleryImageType } from '../../types';
import GalleryImage from '../GalleryImage';

import './style.css';

interface IGalleryCardProps {
  galleryItem: GalleryAlbumType | GalleryImageType;
}

const GalleryCard: FC<IGalleryCardProps> = ({ galleryItem }) => (
  <div className="gallery-card">
    {
      galleryItem.is_album
        ? <GalleryImage image={galleryItem.images[0] as GalleryImageType} />
        : <GalleryImage image={galleryItem} />
    }
    <span className="gallery-description">{galleryItem.title}</span>
  </div>
);

export default GalleryCard;
