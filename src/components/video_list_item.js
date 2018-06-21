import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
//^^ is same as: const video = props.video
//^^ is same as: const onVideoSelect = props.onVideoSelect

//Since these are props, you can pick them off as they're passed in instead of passing in (props) and then performing that action

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video) } className="list-group-item">
      <div className="video-list media">

        <div className="media-left">
          <img className="media-object" src={ imageUrl } />
        </div>

        <div className="media-body">
          <div className="media-heading">{ video.snippet.title }</div>
        </div>

      </div>
    </li>
  );
};

export default VideoListItem;
