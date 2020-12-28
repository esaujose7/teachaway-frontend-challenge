import Modal from 'react-modal';
import { FC, MouseEvent } from 'react';
import { GalleryAlbumType, GalleryImageType, Image } from '../../types';
import AspectRatio from '../AspectRatio';

import './style.css';

interface IModalMediaProps {
  image: Image | GalleryImageType;
}

const ModalMedia: FC<IModalMediaProps> = ({ image }) => (
  <AspectRatio
    width={image.width}
    height={image.height}
    className={`modal-media ${(image.width / image.height) <= 0.9 ? 'vertical-media' : ''}`}
  >
    {image.type.startsWith('video')
      ? <video controls>
          <source type={image.type} src={image.link} />
        </video>
      : <img src={image.link} alt={image.title} />
    } 
  </AspectRatio>
)

interface ISelectedImageModalProps {
  selectedMedia: GalleryAlbumType | GalleryImageType;
  closeModal: (e: MouseEvent) => void;
}

const SelectedImageModal: FC<ISelectedImageModalProps> = ({ selectedMedia, closeModal }) => {
  const image = selectedMedia.is_album ? selectedMedia.images[0] : selectedMedia;

  return (
    <Modal
      isOpen={!!selectedMedia}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
    >
      <div className="modal-wrapper">
        <h1>{selectedMedia.title}</h1>
        {Array.isArray(image)
            ? image.map(() => (<ModalMedia image={image}/>))
            : <ModalMedia image={image}/>
        } 
        <span>Upvotes: {selectedMedia.ups}</span>
        <span>Downvotes: {selectedMedia.downs}</span>
        <span>Score: {selectedMedia.score}</span>
        {selectedMedia && <p>{selectedMedia.description}</p>}
      </div>
    </Modal>
  );
};

export default SelectedImageModal;
