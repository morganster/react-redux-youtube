import { videoConstants } from '../Constants';

const initialState = {
    videoSelected: { 
        id: {
            videoId: "L-xvMsEw3LE"
        },
        snippet:{
            title:"dummy",
            description:""
        },
        initial: true
    },
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
            return {...state,
                requesting: false,
                videoList: action.result.videos,
                nextPlayRequesting: action.result.nextVid,
                videoSelected: state.videoSelected.initial?action.result.videos.items[0]:state.videoSelected
            };
        case videoConstants.SEARCH_FAILURE:
            return Object.assign({}, state,{
                requesting: false,
                videoList: []
            });
        case videoConstants.SELECT_REQUEST:
            return Object.assign({}, state,{
                    requesting: true,
                   });
        case videoConstants.SELECT_SUCCESS:
            return Object.assign({}, state,{
                requesting: false,
                videoSelected: action.video,
                nextPlayRequesting: false,
            });
        case videoConstants.SELECT_FAILURE:
            return Object.assign({}, state,{
                requesting: false,
            });
        default:
            return state
    }
}