import React from 'react';
import { connect } from 'react-redux';
import { videoActions } from '../Actions';
import ListItem from './ListItem';
import {
    Col,
    Row,
    } from 'reactstrap';


class VideoList extends React.Component {
    componentDidMount(props){
        const  dispatch  = this.props.dispatch;
        dispatch(videoActions.search(''));
        this.selectVid = this.selectVid.bind(this);

    }

    selectVid(video,e) {
        this.props.dispatch(videoActions.select(video));
        this.props.dispatch(videoActions.search(video.id.videoId, true));
        e.preventDefault();
    }




    render() {
        return (
            <Row>  

                    { this.props.videos.videoList.items && this.props.videos.videoList.items.map((video) => {
                    return <Col lg='3'>
                                <ListItem
                                        key={video.id.videoId}
                                        title={video.snippet.title}
                                        subtitle={video.snippet.channelTitle}
                                        description={video.snippet.description}
                                        onClick={(e) => this.selectVid(video, e)} 
                                        thumbnail={video.snippet.thumbnails.medium.url}>
                                </ListItem>
                            </Col>
                    }) }
            </Row>);
        
    }
}

function mapStateToProps(state) {
    const { videos } = state;
    return {
        videos
    };
}

const connectedVideoList = connect(mapStateToProps)(VideoList);
export { connectedVideoList as VideoList };