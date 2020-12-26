import { FC } from 'react';
import GalleryImage from '../GalleryImage';
import { IGalleryAlbum, IGalleryImage } from '../../types';

type IGalleryImageAlbum = {
  album: IGalleryAlbum;
}

const GalleryAlbum: FC<IGalleryImageAlbum> = ({ album }) => (
  <GalleryImage image={album.images[0] as IGalleryImage} />
)


export default GalleryAlbum;
