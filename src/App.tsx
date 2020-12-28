import { MouseEvent } from 'react';
import { useImgurState, useImgurActions } from './context/Imgur';
import SelectedMediaModal from './components/SelectedMediaModal';
import GalleryFeed from './components/GalleryFeed';
import GalleryControls from './components/GalleryControls';
import Error from './components/Error';
import Loading from './components/Loading';

import './App.css'

const App = () => {
  const { error, loading, images, selectedMedia } = useImgurState();
  const { setSelectedMedia } = useImgurActions();

  if (error) {
    return (
      <div className="wrapper">
        <Error error={error} />
      </div>
    );
  }

  return (
    <div className="wrapper">
      {selectedMedia && <SelectedMediaModal selectedMedia={selectedMedia} closeModal={(_: MouseEvent) => { setSelectedMedia(null); }} />}     
      <GalleryControls />
      {loading ? <Loading /> : <GalleryFeed items={images} />}
    </div>
  );
}

export default App;


