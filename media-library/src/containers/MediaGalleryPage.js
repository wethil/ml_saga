import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMediaAction, selectImageAction, selectVideoAction } from '../actions/mediaActions';
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';
import '../styles/style.css';

class MediaGalleryPage extends Component {
    constructor() {
        super();
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelectImage = this.handleSelectImage.bind(this);
        this.handleSelectVideo = this.handleSelectVideo.bind(this);
    }

  // Dispatches *searchMediaAction*  immediately after initial rendering.
  // Note that we are using the dispatch method from the store to execute this task, courtesy of react-redux
 componentDidMount() {
    this.props.dispatch(searchMediaAction('rain'));
  }

handleSelectImage(selectedImage){
    this.props.dispatch(selectImageAction(selectedImage))
}

handleSelectVideo(selectedVideo){
    this.props.dispatch(selectVideoAction(selectedVideo))
}

handleSearch(event){
    event.preventDefault();
    if (this.query !== null) {
        this.props.dispatch(searchMediaAction(this.query.value))
        this.query.value='';
    }
}

  render() {
    console.log(this.props.i,'all images');
    console.log(this.props.v,'all videos');
    console.log(this.props.images, 'Images');
    console.log(this.props.videos, 'Videos');
    console.log(this.props.selecteImage, 'SelectedImage');
    console.log(this.props.selectedVideo, 'SelectedVideo');
    const { images, selectedImage, videos, selectedVideo } = this.props;
    return (
      <div className="container-fluid">
        {images ? <div>
          <input
            type="text"
            ref={ref => (this.query = ref)}
          />
          <input
            type="submit"
            className="btn btn-primary"
            value="Search Library"
            onClick={this.handleSearch}
          />
          <div className="row">
            <PhotoPage
              images={images}
              selectedImage={selectedImage}
              onHandleSelectImage={this.handleSelectImage}
            />
            <VideoPage
              videos={videos}
              selectedVideo={selectedVideo}
              onHandleSelectVideo={this.handleSelectVideo}
            />
          </div>
        </div> : 'loading ....'}
      </div>
    );
  }
}

// Define PropTypes
MediaGalleryPage.propTypes = {
// Define your PropTypes here
};

 // Subscribe component to redux store and merge the state into 
 // component's props
const mapStateToProps = ({ images, videos }) => ({
  i:images,
  v:videos,
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(MediaGalleryPage);