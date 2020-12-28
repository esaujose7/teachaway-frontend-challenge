import { FC } from 'react';
import useImgurContext from '../../context/Imgur';
import { ImgurGallerySections, ImgurGallerySortValues, ImgurGalleryWindowOfTime } from '../../types';
import Select from '../Select';
import FormControl from '../FormControl';

const GalleryControls: FC = () => {
  const {
    state: { section, sort, windowTime, viralImages },
    actions: { setSection, setSort, setWindowTime, setViralImages }
  } = useImgurContext();

  return (
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
  )
}

export default GalleryControls;
