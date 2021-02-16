import "./App.css";
import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import VideoDetail from "./components/VideoDetail";
import SearchBar from "./components/SearchBar";
import ListVideo from "./components/ListVideo";
import youtube from "./api/youtube";

export default function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    onFormSubmit("javascript");
  }, []);
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  
    async function onFormSubmit(searchTerm) {
      const {
        data: { items: videos },
      } = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key:
            process.env.YOUTUBE_API_KEY,
          q: searchTerm,
        },
      });
     ;
      setVideos(videos);
      setSelectedVideo(videos[0]);
      console.log(videos)
    }

  
  function handleSubmit() {
    onFormSubmit(searchTerm);
    console.log(searchTerm);
  }
  
  useEffect(() => {
    onFormSubmit("javascript");
  }, []);
  function onVideoSelect(video) {
    setSelectedVideo(video);
  }
   return (
     <Grid style={{ justifyContent: "center",background:"black" }} container spacing={10}>
       <Grid item xs={11}>
         <Grid container spacing={10}>
           
           <Grid item xs={12}>
             <h1 style={{color:"white"}}>TUTORIALTUBE</h1>
             <SearchBar
               onSubmit={handleSubmit}
               handleChange={handleChange}
               searchTerm={searchTerm}
             />
           </Grid>
           <Grid item lg={8} md={8}sm={8} xs={12}>
             <VideoDetail video={selectedVideo} />
           </Grid>
           <Grid item lg={4} md={4}sm={4} xs={12}>
             <ListVideo videos={videos} onVideoSelect={onVideoSelect} />
           </Grid>
         </Grid>
       </Grid>
     </Grid>
   );
}
