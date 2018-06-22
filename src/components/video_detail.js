import React from 'react';

const VideoDetail = ({video}) => {
  //^^ is same as: const video = props.video

  //Check to see if video has been passed in props before you attempt to render
  if (!video) {
    return <div>Loading...</div>
  }

  const videoId = video.id.videoId;

  //ES6 template string
  const url = `https://www.youtube.com/embed/${videoId}`;
  //const url = 'https://www.youtube.com/embed/' + videoId;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
