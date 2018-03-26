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
};

export function videos(state = initialState, action) {
    switch (action.type) {
        case videoConstants.SEARCH_REQUEST:
            return {
                ...state,
                requesting: true,
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