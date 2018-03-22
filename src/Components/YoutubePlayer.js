import React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    CardSubtitle } from 'reactstrap';


import * as moment from 'moment';

class YoutubePlayer extends React.Component {
    componentDidMount() {
        let youtubeWidth = document.getElementById('youtubeFrame').offsetWidth * 0.99;
        this.opts = {
            height: youtubeWidth*0.57,
            width: youtubeWidth,
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
          };
    }

    render() {
        const styles = {
            padding: '0.5em 3em'
        };
        return (
            <div style={styles}>
                 <Card id="youtubeFrame" style={{backgroundColor: '#222', color: '#f3f3f3'}}>
                     <YouTube  videoId={this.props.videos.videoSelected.id.videoId} opts={this.opts} onEnd={this.props.onEnd}/>
                        <CardBody>
                            <CardTitle>{this.props.videos.videoSelected.snippet.title}</CardTitle>
                            <CardSubtitle>{this.props.videos.videoSelected.snippet.channelTitle}</CardSubtitle>
                            <CardText>{this.props.videos.videoSelected.snippet.description}</CardText>
                            <CardText>
                                <small className="text-muted">Published: { moment(this.props.videos.videoSelected.snippet.publishedAt).format('MMMM Do YYYY') }</small>
                            </CardText>
                        </CardBody>
                 </Card>
                
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { videos } = state;
    return {
        videos
    };
}

const connectedYoutubePlayer = connect(mapStateToProps)(YoutubePlayer);
export { connectedYoutubePlayer as YoutubePlayer };