import React from 'react'
import {Grid, Paper, Typography } from "@material-ui/core";


export default function VideoItem({ video, onVideoSelect }) {
  if (!video) {
    return <div>not yet</div>
  }
  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex",alignItems: "center", cursor: "pointer" ,width:"100%" }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{
            marginRight: "10px",
            width: "200px",
            borderRadius: "5px",
            border:"none"
          }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
          
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}
