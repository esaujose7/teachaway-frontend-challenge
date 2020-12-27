import { ImgurGallerySections, ImgurGallerySortValues, ImgurGalleryWindowOfTime } from './services/ImgurService';

import GalleryFeed from './components/GalleryFeed';
import Select from './components/Select';

import useImgurContext from './context/Imgur';

import './App.css'

const App = () => {
  const {
    state: { error, loading, section, sort, windowTime, viralImages, data: images },
    actions: { setSection, setSort, setWindowTime, setViralImages }
  } = useImgurContext();

  return (
    <div className="wrapper">
      {
        error ? (
          <div>something bad happened, please try again later. Error: {error.message}</div>
        ) : (
          <>
            <header className="header">
              <Select
                id="section-select"
                dispatcher={setSection}
                values={Object.values(ImgurGallerySections)}
                selected={section}
              />
              <Select
                id="sort-select"
                dispatcher={setSort}
                values={Object.values(ImgurGallerySortValues)}
                selected={sort}
              />
              <Select
                id="window-select"
                dispatcher={setWindowTime}
                values={Object.values(ImgurGalleryWindowOfTime)}
                selected={windowTime}
              />
              <input id="viralImagesCheckbox" type="checkbox" checked={viralImages} onChange={() => { setViralImages(viralImage => !viralImage) }} />
              <label htmlFor="viralImagesCheckbox">viral images sis o non</label> 
            </header>
            <div style={{display:'flex', flexWrap: 'wrap'}}>
              {loading ? <div> un chance manito ... </div> : <GalleryFeed items={images} />}
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
