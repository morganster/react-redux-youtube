import React from 'react';
import { connect } from 'react-redux';
import { videoActions } from '../Actions';
import ListItem from '../Components/ListItem';
import {
    Col,
    Row,
    } from 'reactstrap';


class VideoList extends React.Component {
    componentDidMount(props){
        const  dispatch  = this.props.dispatch;
        dispatch(videoActions.search(''));
        this.selectVid = this.selectVid.bind(this);
        this.onScroll = this.onScroll.bind(this);
        window.addEventListener('scroll', this.onScroll, false);

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
      }

    onScroll(){
        if (
          (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
          this.props.videos.videoList.items && this.props.videos.videoList.items.length && !this.props.videos.requesting
        ) {
          this.props.dispatch(videoActions.paginateSearch(this.props.videos.searchTerm, this.props.videos.videoList.nextPageToken));
        }
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