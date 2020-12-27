import { FC } from 'react';
import { IGalleryImage, IGalleryAlbum } from '../../types';

import GalleryImage from '../GalleryImage';
import GalleryAlbum from '../GalleryAlbum';

interface IGalleryFeedProps {
  items: (IGalleryAlbum | IGalleryImage)[]
}

const GalleryFeed: FC<IGalleryFeedProps> = ({ items }) =>  (
  <>
    {items.map(item => (
      <div key={item.id} style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center'}}>
        {!item.is_album ? <GalleryImage image={item as IGalleryImage} /> : <GalleryAlbum album={item as IGalleryAlbum} />}
        <p style={{ maxWidth: '200px' }}>{item.title}</p>
      </div>
    ))}
  </>
);

export default GalleryFeed;
