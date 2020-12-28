import { useImgurState } from './context/Imgur';
import GalleryFeed from './components/GalleryFeed';
import GalleryControls from './components/GalleryControls';
import Error from './components/Error';
import Loading from './components/Loading';

import './App.css'

const App = () => {
  const { error, loading, images, selectedImage } = useImgurState();

  if (error) {
    return (
      <div className="wrapper">
        <Error error={error} />
      </div>
    );
  }

  return (
    <div className="wrapper">
      {selectedImage && <div>{JSON.stringify(selectedImage, null, 2)}</div>}
      <GalleryControls />
      {loading ? <Loading /> : <GalleryFeed items={images} />}
    </div>
  );
}

export default App;
