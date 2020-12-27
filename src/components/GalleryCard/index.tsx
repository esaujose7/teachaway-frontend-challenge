import{ FC } from 'react';

import { IGalleryAlbum, IGalleryImage } from '../../types';

import GalleryImage from '../GalleryImage';
import GalleryAlbum from '../GalleryAlbum';

import './style.css';

interface IGalleryCardProps {
  galleryItem: IGalleryImage | IGalleryAlbum;
}

const GalleryCard: FC<IGalleryCardProps> = ({ galleryItem }) => (
  <div key={galleryItem.id} className="gallery-card">
    {
      galleryItem.is_album
        ? <GalleryAlbum album={galleryItem as IGalleryAlbum} />
        : <GalleryImage image={galleryItem as IGalleryImage} />
    }
    <span className="gallery-description">{galleryItem.title}</span>
  </div>
);

export default GalleryCard;
