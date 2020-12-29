import { useReducer, useEffect, FC } from 'react';
import reducer, { initialState } from './reducer'
import { ImgurState, ChangeFiltersType, CHANGE_FILTERS, LOADING, ERROR, SUCCESFUL_LOAD, SET_SELECTED_MEDIA, CLEAR_SELECTED_MEDIA } from './types';
import { createCtx } from '../../utils';
import { getImgurGallery, } from '../../services/ImgurService';
import { GalleryAlbumType, GalleryImageType } from '../../types';

interface ImgurContextType {
  state: ImgurState,
  actions: {
    changeGalleryFilters: (filter: ChangeFiltersType) => void;
    setSelectedMedia: (media: GalleryImageType | GalleryAlbumType) => void;
    clearSelectedMedia: () => void;
  }
}

const [useImgurContext, Provider] = createCtx<ImgurContextType>();

const ImgurContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getImgurGallery(state.section, state.sort, state.windowTime, state.viralImages)
      .then(data => {
        if (data.success) {
          dispatch({ type: SUCCESFUL_LOAD, payload: data.data });
        } else {
          const errorMessage = `${data.status} | ${data.data.method} ${data.data.request} : ${data.data.error}`;
          dispatch({ type: ERROR, payload: Error(errorMessage) });
        }
      })
      .catch(err => { dispatch({ type: ERROR, payload: err }); })

    return () => {
      dispatch({ type: LOADING });
    };
  }, [state.section, state.sort, state.windowTime, state.viralImages]);

  const changeGalleryFilters = (filter: ChangeFiltersType) => {
    dispatch({ type: CHANGE_FILTERS, payload: filter })
  }

  const setSelectedMedia = (media: GalleryAlbumType | GalleryImageType) => {
    dispatch({ type: SET_SELECTED_MEDIA, payload: media })
  }

  const clearSelectedMedia = () => {
    dispatch({ type: CLEAR_SELECTED_MEDIA });
  }

  return (
    <Provider value={{
      state,
      actions: { changeGalleryFilters, setSelectedMedia, clearSelectedMedia }
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
