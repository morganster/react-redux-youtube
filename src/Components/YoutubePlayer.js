import React from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    CardSubtitle,
     } from 'reactstrap';


import * as moment from 'moment';

class YoutubePlayer extends React.Component {

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        
        this.opts = {
            height: '100%',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
    }
    
    resize(){
        this.youtubeWidth = document.getElementById('youtube-player__Frame').offsetWidth;
    }
    
    render() {
        this.styles = {
            youtubeFrame : {
                padding: '0.5em 3em',
                height: this.youtubeWidth * 0.57,
                backgroundColor: '#222',
                color: '#f3f3f3'
        },
            cardBody: {
                height: '100%'
            },
            
        };
        return (
            <div>
                 <Card id="youtube-player__Frame" style={this.styles.youtubeFrame}>
                        <CardBody style={this.styles.cardBody}>
                            <YouTube  className="youtube-player" videoId={this.props.videos.videoSelected.id.videoId} opts={this.opts} onEnd={this.props.onEnd}/>
                        </CardBody>
                 </Card>
                 <Card id="youtube-player__info" style={{backgroundColor: '#222', color: '#f3f3f3'}}>
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