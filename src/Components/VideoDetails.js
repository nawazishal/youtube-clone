import React from "react";
import {Card,CardBody,CardText,CardSubtitle,Button} from 'reactstrap'


const VideoDetails = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Card>
        
        <CardBody>
          <iframe src={videoSrc} alt='logo' height="500px" width="100%" name="iframe_a" title='video' />
          <h4>{video.snippet.title} - {video.snippet.channelTitle}</h4>
          <CardSubtitle> {video.snippet.channelTitle}</CardSubtitle>
          <CardText>{video.snippet.description}</CardText>
          <Button color='danger' class='btn btn-lg'>Subcribe</Button>
          
        </CardBody>
        </Card>
        
    </React.Fragment>
  );
};

export default VideoDetails;
