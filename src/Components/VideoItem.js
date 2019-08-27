import React from "react";

import { Grid, Card, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item s={12}>
      <Card onClick={() => onVideoSelect(video)}>
        <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Card>
    </Grid>
  );
};

export default VideoItem;
