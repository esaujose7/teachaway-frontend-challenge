import { useState, useEffect, FC } from 'react';
import { createCtx } from '../../utils';
import { getImgurGallery, } from '../../services/ImgurService';
import { IGalleryImage, IGalleryAlbum, ImgurGallerySections, ImgurGallerySortValues, ImgurGalleryWindowOfTime } from '../../types';

interface ImgurContextType {
  state: {
    section: ImgurGallerySections,
    sort: ImgurGallerySortValues,
    windowTime: ImgurGalleryWindowOfTime,
    viralImages: boolean,
    error: Error | null,
    loading: boolean,
    data: (IGalleryImage | IGalleryAlbum)[]
  },
  actions: {
    setSort: Function,
    setSection: Function,
    setWindowTime: Function,
    setViralImages: (newState: boolean | ((prevState: boolean) => boolean)) => void
  }
}

const [useImgurContext, Provider] = createCtx<ImgurContextType>();

const ImgurContextProvider: FC = ({ children }) => {
  const [data, setData] = useState<(IGalleryImage | IGalleryAlbum)[]>([]);
  const [error, setErr] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  const [section, setSection] = useState<ImgurGallerySections>(ImgurGallerySections.HOT);
  const [sort, setSort] = useState<ImgurGallerySortValues>(ImgurGallerySortValues.VIRAL);
  const [windowTime, setWindowTime] = useState<ImgurGalleryWindowOfTime>(ImgurGalleryWindowOfTime.DAY);
  const [viralImages, setViralImages] = useState(true);

  useEffect(() => {
    getImgurGallery(section, sort, windowTime, viralImages)
      .then(datilla => { setData(datilla.data); console.log(datilla); })
      .catch(err => { setErr(err); })
      .finally(() => { setLoading(false) });

    return () => {
      setLoading(true);
    };
  }, [section, sort, windowTime, viralImages]);

  return (
    <Provider value={{
      state: { section, sort, windowTime, viralImages, error, loading, data },
      actions: { setSort, setSection, setWindowTime, setViralImages }
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
