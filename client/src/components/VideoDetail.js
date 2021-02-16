import React from 'react'
import { Paper, Typography } from "@material-ui/core";
import Loading from './loading'

export default function VideoDetail({ video }) {
  let videoSrc=''
  if (!video) { <div>Loading...</div> }
  else {
      const vid = video.id.videoId;
     videoSrc= `https://www.youtube.com/embed/${vid}`;

  }
  if (!video) {
    return <Loading/>;
  }
    return (
      <React.Fragment>
        <Paper elevation={6} style={{ height: "60%" }}>
          <iframe
            frameBorder="0"
            height="100%"
            width="100%"
            title="Video Player"
            src={videoSrc}
          />
        </Paper>
        <Paper elevation={6} style={{ padding: "15px"}}>
          <Typography variant="h4">
            {video.snippet.title} - {video.snippet.channelTitle}
          </Typography>
          <Typography variant="subtitle1">
            {video.snippet.channelTitle}
          </Typography>
          <Typography variant="subtitle2">
            {video.snippet.description}
          </Typography>
        </Paper>
      </React.Fragment>
    );
}
