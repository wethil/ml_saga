import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function ( state = initialState.youtubes, action ) {
    switch (action.type) {
        case types.YOUTUBE_VIDEO_SUCCESS:
            return [...state , action.youtubes];
        case types.SELECTED_YOUTUBE_VIDEO:
            return {...state, selectedYoutubeVideo : action.youtubeVideo};
        default:
            return state;
    }
}