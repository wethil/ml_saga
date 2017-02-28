import {combineReducers} from 'redux';
import images from './imageReducer';
import videos from './videoReducer';
import youtubes from './youtubeReducer'

const rootReducer = combineReducers({
    images,
    videos,
    youtubes
});

export default rootReducer;