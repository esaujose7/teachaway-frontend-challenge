import { useState, useEffect, FC, Dispatch, SetStateAction } from 'react';
import { createCtx } from '../../utils';
import { getImgurGallery, } from '../../services/ImgurService';
import { GalleryResponse, GalleryImageType, ImgurGallerySections, ImgurGallerySortValues, ImgurGalleryWindowOfTime } from '../../types';

interface ImgurContextType {
  state: {
    section: ImgurGallerySections,
    sort: ImgurGallerySortValues,
    windowTime: ImgurGalleryWindowOfTime,
    viralImages: boolean,
    error: Error | null,
    loading: boolean,
    images: GalleryResponse,
    selectedImage?: GalleryImageType | null
  },
  actions: {
    setSort: Dispatch<SetStateAction<ImgurGallerySortValues>>,
    setSection: Dispatch<SetStateAction<ImgurGallerySections>>,
    setWindowTime: Dispatch<SetStateAction<ImgurGalleryWindowOfTime>>,
    setViralImages: Dispatch<SetStateAction<boolean>>,
    setSelectedImage:Dispatch<SetStateAction<GalleryImageType | null>> 
  }
}

const [useImgurContext, Provider] = createCtx<ImgurContextType>();

const ImgurContextProvider: FC = ({ children }) => {
  const [images, setImages] = useState<GalleryResponse>([]);
  const [error, setErr] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  const [section, setSection] = useState<ImgurGallerySections>(ImgurGallerySections.HOT);
  const [sort, setSort] = useState<ImgurGallerySortValues>(ImgurGallerySortValues.VIRAL);
  const [windowTime, setWindowTime] = useState<ImgurGalleryWindowOfTime>(ImgurGalleryWindowOfTime.DAY);
  const [viralImages, setViralImages] = useState(true);

  const [selectedImage, setSelectedImage] = useState<GalleryImageType | null>(null);

  useEffect(() => {
    getImgurGallery(section, sort, windowTime, viralImages)
      .then(data => { setImages(data.data); })
      .catch(err => { setErr(err); })
      .finally(() => { setLoading(false) });

    return () => {
      setLoading(true);
    };
  }, [section, sort, windowTime, viralImages]);

  return (
    <Provider value={{
      state: { section, sort, windowTime, viralImages, error, loading, images, selectedImage },
      actions: { setSort, setSection, setWindowTime, setViralImages, setSelectedImage }
    }}>
      {children}
    </ Provider>
  );
}

const useImgurActions = () => {
  const { actions } = useImgurContext();
  return actions;
}

const useImgurState = () => {
  const { state } = useImgurContext();
  return state;
}

export { useImgurContext as default, ImgurContextProvider, useImgurActions, useImgurState };
