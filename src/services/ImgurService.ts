import { api } from '../utils';
import { ImgurResponse, IGalleryImage, IGalleryAlbum } from '../types';

export enum ImgurGallerySections {
  HOT = 'hot',
  TOP = 'top',
  USER = 'user'
};

export enum ImgurGallerySortValues {
  VIRAL = 'viral',
  TOP = 'top',
  TIME = 'time',
  RISING = 'rising'
};

export enum ImgurGalleryWindowOfTime {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
  ALL = 'all'
};

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
