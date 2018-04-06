import { videoConstants } from '../Constants';

const initialState = {
    videoSelected: { },
    videoList: { 
                etag: "",
                items: [],
                kind: "",
                nextPageToken: "",
                pageInfo:{},
                regionCode: ""
    },
    requesting: false,
    nextPlayRequesting: false,
    searchTerm: '',
};

export function videos(state = initialState, action) {
    switch (action.type) {
        case videoConstants.SEARCH_REQUEST:
            return {
                ...state,
                requesting: true,
                searchTerm: action.term,
                videoList: {}
            };
        case videoConstants.SEARCH_SUCCESS:
            return {
                ...state,
                requesting: false,
                videoList: action.result.videos,
                nextPlayRequesting: action.result.nextVid,
            };
        case videoConstants.SEARCH_FAILURE:
            return {
                ...state,
                requesting: false,
                videoList: []
                };
        case videoConstants.PAGINATE_SEARCH_REQUEST:
            return {
                ...state,
                searchTerm: action.term,
                requesting: true
            };
        case videoConstants.PAGINATE_SEARCH_SUCCESS:
            let items = state.videoList.items.concat(action.videos.items);
            let videoList = {...state.videoList,...action.videos };
            videoList.items = items;
            return {
                ...state,
                requesting: false,
                videoList: videoList
                };
        case videoConstants.PAGINATE_SEARCH_FAILURE:
            return {
                ...state,
                requesting: false,
                videoList: []
                };
        case videoConstants.SELECT_REQUEST:
            return {
                    ...state,
                    requesting: true,
                   };
        case videoConstants.SELECT_SUCCESS:
            return {
                ...state,
                requesting: false,
                videoSelected: action.video,
                nextPlayRequesting: false,
            };
        case videoConstants.SELECT_FAILURE:
            return {
                ...state,
                requesting: false,
            };
        default:
            return state
    }
}