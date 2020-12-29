import { FC } from 'react';
import useImgurContext from '../../context/Imgur';
import { ImgurGallerySections, ImgurGallerySortValues, ImgurGalleryWindowOfTime } from '../../types';
import Select from '../Select';
import FormControl from '../FormControl';

const GalleryControls: FC = () => {
  const {
    state: { section, sort, windowTime, viralImages },
    actions: { changeGalleryFilters }
  } = useImgurContext();

  return (
    <header className="header">
      <Select id="section" dispatcher={changeGalleryFilters} values={Object.values(ImgurGallerySections)} selected={section}>
        Choose the section of the gallery
      </Select>
      <Select id="sort" dispatcher={changeGalleryFilters} values={Object.values(ImgurGallerySortValues)} selected={sort}>
        Sort images by
      </Select>
      <Select id="windowTime" dispatcher={changeGalleryFilters} values={Object.values(ImgurGalleryWindowOfTime)} selected={windowTime}>
        Select the window of time for the gallery
      </Select>
      <FormControl direction="row">
        <input id="viralImagesCheckbox" type="checkbox" checked={viralImages} onChange={() => { changeGalleryFilters({ key: 'viralImages', value: !viralImages }); }} />
        <label htmlFor="viralImagesCheckbox" className="bold ml-10">Show viral images?</label> 
      </FormControl>
    </header>
  )
}

export default GalleryControls;
