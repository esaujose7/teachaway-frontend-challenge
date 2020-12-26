import { useState, useEffect, FC, ChangeEvent } from 'react';
import { getImgurGallery, ImgurGallerySections, ImgurGallerySortValues, ImgurGalleryWindowOfTime } from './services/ImgurService';
import { ImgurResponse, IGalleryImage, IGalleryAlbum } from './types';

import GalleryImage from './components/GalleryImage';
import GalleryAlbum from './components/GalleryAlbum';

function onChanger(fn: Function) {
  return (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    fn(e.target.value);
  }
}

const App = () => {
  const [data, setData] = useState<ImgurResponse<(IGalleryImage | IGalleryAlbum)[]> | null>(null);
  const [err, setErr] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  
  // section, sort, window, viralImages 
  const [section, setSection] = useState<ImgurGallerySections>(ImgurGallerySections.HOT);
  const [sort, setSort] = useState<ImgurGallerySortValues>(ImgurGallerySortValues.VIRAL);
  const [windowTime, setWindowTime] = useState<ImgurGalleryWindowOfTime>(ImgurGalleryWindowOfTime.DAY);
  const [viralImages, setViralImages] = useState(true);

  useEffect(() => {
    getImgurGallery(section, sort, windowTime, viralImages)
      .then(datilla => { setData(datilla); console.log(datilla); })
      .catch((err) => { setErr(err); })
      .finally(() => { setLoading(false) });

    return () => {
      setLoading(true);
    };
  }, [section, sort, windowTime, viralImages]);

  if(loading) return <div>chance mano cargandiño</div>

  if (err) return <div>no se mano paso algo mal fijate tu: {err.message}</div>

  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <header>
        <select id="sort-select" name="sort-select" onChange={onChanger(setSection)} defaultValue="hot">
          <option value="hot">hot</option>
          <option value="user">user</option>
        </select>
      </header>
      {Array.isArray(data?.data) && data?.data.map((item) => (
        <div key={item.id} style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'center'}}>
          {!item.is_album 
              ? <GalleryImage image={item as IGalleryImage} />
              : <GalleryAlbum album={item as IGalleryAlbum} />
          }
          <p style={{ maxWidth: '200px' }}>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
