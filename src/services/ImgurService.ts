import { api } from '../utils';
import { ImgurResponse, IGalleryImage, IGalleryAlbum, ImgurGallerySections, ImgurGallerySortValues, ImgurGalleryWindowOfTime } from '../types';

function getImgurGallery(
  section: ImgurGallerySections = ImgurGallerySections.HOT,
  sort: ImgurGallerySortValues = ImgurGallerySortValues.VIRAL,
  windowOfTime: ImgurGalleryWindowOfTime = ImgurGalleryWindowOfTime.DAY,
  includeViralImages = true,
  page = 1
) {
  return api<ImgurResponse<(IGalleryAlbum | IGalleryImage)[]>>(
    `/gallery/${section}/${sort}/${windowOfTime}/${page}?showViral=${includeViralImages}`
  );
}

export { getImgurGallery } ;
