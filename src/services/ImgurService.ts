import { api } from '../utils';
import { ImgurResponse, GalleryResponse, ImgurGallerySections, ImgurGallerySortValues, ImgurGalleryWindowOfTime } from '../types';

function getImgurGallery(
  section: ImgurGallerySections = ImgurGallerySections.HOT,
  sort: ImgurGallerySortValues = ImgurGallerySortValues.VIRAL,
  windowOfTime: ImgurGalleryWindowOfTime = ImgurGalleryWindowOfTime.DAY,
  includeViralImages = true,
  page = 1
) {
  return api<ImgurResponse<GalleryResponse>>(
    `/gallery/${section}/${sort}/${windowOfTime}/${page}?showViral=${includeViralImages}`
  );
}

export { getImgurGallery };
