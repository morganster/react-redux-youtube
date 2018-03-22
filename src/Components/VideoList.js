import React from 'react';
import { connect } from 'react-redux';
import { videoActions } from '../Actions';
import ListItem from './ListItem';

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
        const styles = {
            root: {
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            },
            gridList: {
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
            },
            image:{
                cursor:'pointer'
            }
          };
        return (
            <div style={styles.root}>   
                    { this.props.videos.videoList.items && this.props.videos.videoList.items.map((video) => {
                    return   <ListItem
                                key={video.id.videoId}
                                title={video.snippet.title}
                                subtitle={video.snippet.channelTitle}
                                onClick={(e) => this.selectVid(video, e)} 
                                thumbnail={video.snippet.thumbnails.medium.url}>
                            </ListItem>
                    }) }
            </div>);
        
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