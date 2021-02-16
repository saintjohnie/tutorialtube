import React from 'react'
import VideoItem from './videoItem'
import { Grid } from "@material-ui/core";

export default function ListVideo({videos, onVideoSelect}) {
    const listOfVideo = videos.map((video, id) => (
      <VideoItem onVideoSelect={onVideoSelect} video={video} key={id} />
    ));
    return <Grid container spacing={4}>{listOfVideo}</Grid>;
        
    
}
