import { ImgurGallerySections, ImgurGallerySortValues, ImgurGalleryWindowOfTime  } from './types';

import useImgurContext from './context/Imgur';
import GalleryFeed from './components/GalleryFeed';
import Select from './components/Select';
import FormControl from './components/FormControl';
import Error from './components/Error';
import Loading from './components/Loading';

import './App.css'

const App = () => {
  const {
    state: { error, loading, section, sort, windowTime, viralImages, data: images },
    actions: { setSection, setSort, setWindowTime, setViralImages }
  } = useImgurContext();

  return (
    <div className="wrapper">
      {error
        ? <Error error={error} />
        : <>
          <header className="header">
            <Select id="section-select" dispatcher={setSection} values={Object.values(ImgurGallerySections)} selected={section}>
              Choose the section of the gallery
            </Select>
            <Select id="sort-select" dispatcher={setSort} values={Object.values(ImgurGallerySortValues)} selected={sort}>
              Sort images by
            </Select>
            <Select id="window-select" dispatcher={setWindowTime} values={Object.values(ImgurGalleryWindowOfTime)} selected={windowTime}>
              Select the window of time for the gallery
            </Select>
            <FormControl direction="row">
              <input id="viralImagesCheckbox" type="checkbox" checked={viralImages} onChange={() => { setViralImages(viralImage => !viralImage) }} />
              <label htmlFor="viralImagesCheckbox" className="bold ml-10">Show viral images?</label> 
            </FormControl>
          </header>
          {loading ? <Loading /> : <GalleryFeed items={images} />}
        </>
      }
    </div>
  );
}

export default App;
