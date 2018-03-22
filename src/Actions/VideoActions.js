import { videoConstants } from '../Constants';
 import { YouTubeService } from '../Services';

 let ytService = new YouTubeService();
export const videoActions = {
    select,
    search
};

function select(video) {

    return (dispatch) => {
        dispatch(request({ video }));
        if(video){
            dispatch(success(video));
        } else {
            dispatch(failure('error'));
        }
    };

    function request(video) { return { type: videoConstants.SELECT_REQUEST, video } }

    function success(video) { return { type: videoConstants.SELECT_SUCCESS, video } }

    function failure(error) { return { type: videoConstants.SELECT_FAILURE, error } }
}


// term is the search string, related is if look for the related videos to an id if true the term is de video id, default to false
function search(term, related = false) {
    return dispatch => {
        dispatch(request(term, related));

        ytService.getVideosFromApi(term, related)
            .then(
                videos => {
                    dispatch(success(videos));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(term) { return { type: videoConstants.SEARCH_REQUEST, term } }

    function success(videos) { return { type: videoConstants.SEARCH_SUCCESS, videos } }

    function failure(error) { return { type: videoConstants.SEARCH_FAILURE, error } }
}

