import React, { PropTypes } from 'react';

// First, we extract youtubes, onHandleSelectYoutubeVideo, and selectedYoutubeVideo 
// from props using destructuring assignment and then render.
const YoutubePage = ({ youtubes, onHandleSelectYoutubeVideo, selectedYoutubeVideo }) => {
   console.log(youtubes) 
    return(
 <div className="col-md-6">
    <h2> Youtube thumbnails </h2>
    <div className="selected-image">
      <div id={selectedYoutubeVideo.id}>
        <h6>{selectedYoutubeVideo.title}</h6>
        <img src={selectedYoutubeVideo.mediaUrl} alt={selectedYoutubeVideo.title} />
      </div>
    </div>
    <div className="image-thumbnail">
      {youtubes.map((image, i) => (
        <div key={i} onClick={onHandleSelectYoutubeVideo.bind(this, image)}>
          <img src={image.mediaUrl} alt={image.title} />
        </div>
      ))}
    </div>
  </div>
)};

// Define PropTypes
YoutubePage.propTypes = {
  youtubes: PropTypes.array.isRequired,
  selectedYoutubeVideo: PropTypes.object.isRequired,
  onHandleSelectYoutubeVideo: PropTypes.func.isRequired
};

export default YoutubePage;