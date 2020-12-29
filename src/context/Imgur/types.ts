import { GalleryResponse, GalleryAlbumType, GalleryImageType, ImgurGallerySections, ImgurGallerySortValues, ImgurGalleryWindowOfTime } from '../../types';

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const SUCCESFUL_LOAD = 'SUCCESFUL_LOAD';
export const CHANGE_FILTERS = 'CHANGE_FILTERS'
export const SET_SELECTED_MEDIA = 'SET_SELECTED_MEDIA';
export const CLEAR_SELECTED_MEDIA = 'CLEAR_SELECTED_MEDIA';

type LoadingAction = {
  type: typeof LOADING,
};

type ErrorAction = {
  type: typeof ERROR,
  payload: Error
}

type SuccesfulLoadAction = {
  type: typeof SUCCESFUL_LOAD,
  payload: GalleryResponse
}

export type ChangeFiltersType = { key: 'section', value: ImgurGallerySections }
  | { key: 'sort', value: ImgurGallerySortValues }
  | { key: 'windowTime', value: ImgurGalleryWindowOfTime }
  | { key: 'viralImages', value: boolean 
}

type ChangeFiltersAction = {
  type: typeof CHANGE_FILTERS,
  payload: ChangeFiltersType
}

type SetSelectedMediaAction = {
  type: typeof SET_SELECTED_MEDIA;
  payload: GalleryImageType | GalleryAlbumType
}

type ClearSelectedMediaAction = {
  type: typeof CLEAR_SELECTED_MEDIA;
}

export type ImgurActionTypes = LoadingAction | ErrorAction | SuccesfulLoadAction | ChangeFiltersAction | SetSelectedMediaAction | ClearSelectedMediaAction;

export type ImgurState = {
  section: ImgurGallerySections,
  sort: ImgurGallerySortValues,
  windowTime: ImgurGalleryWindowOfTime,
  viralImages: boolean,
  error: Error | null,
  loading: boolean,
  images: GalleryResponse,
  selectedMedia: GalleryImageType | GalleryAlbumType | null
};
