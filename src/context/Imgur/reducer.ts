import { LOADING, ERROR, SUCCESFUL_LOAD, CHANGE_FILTERS, SET_SELECTED_MEDIA, CLEAR_SELECTED_MEDIA, ImgurState, ImgurActionTypes } from './types'; 
import { ImgurGallerySections, ImgurGallerySortValues, ImgurGalleryWindowOfTime } from '../../types';

export const initialState: ImgurState = {
  images: [],
  error: null,
  loading: true,
  section: ImgurGallerySections.HOT,
  sort: ImgurGallerySortValues.VIRAL,
  windowTime: ImgurGalleryWindowOfTime.DAY,
  viralImages: true,
  selectedMedia: null
};

export default function ImgurReducer(state = initialState, action: ImgurActionTypes): ImgurState {
  console.log(action.type);
  switch(action.type) {
    case CHANGE_FILTERS:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    case SUCCESFUL_LOAD:
      return {
        ...state,
        loading: false,
        images: action.payload
      };
    case SET_SELECTED_MEDIA:
      return {
        ...state,
        selectedMedia: action.payload
      };
    case CLEAR_SELECTED_MEDIA:
      return {
        ...state,
        selectedMedia: null
      };
    case LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
