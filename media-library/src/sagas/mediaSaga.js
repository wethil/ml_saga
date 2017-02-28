import { put, call } from 'redux-saga/effects';
import { flickrImages, shutterStockVideos , youtubeVideos } from '../Api/api';
import * as types from '../constants/actionTypes';

export function* searchMediaSaga({ payload }) {
  try {
    const videos = yield call(shutterStockVideos, payload);
   const images = yield call(flickrImages, payload);
    const youtubes = yield call(youtubeVideos, payload); 
    yield [
      put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
      put({ type: types.SELECTED_VIDEO, video: videos[0] }),
      put({ type: types.FLICKR_IMAGES_SUCCESS, images }),
      put({ type: types.SELECTED_IMAGE, image: images[0] }),
      put({ type: types.YOUTUBE_VIDEO_SUCCESS,youtubes }),
      put({ type: types.SELECTED_YOUTUBE_VIDEO, youtubeVideo : youtubes[0] })
      
    ];
  } catch (error) {
    yield put({ type: 'SEARCH_MEDIA_ERROR', error });
  }
}