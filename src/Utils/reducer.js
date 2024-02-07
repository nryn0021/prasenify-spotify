import { reducerCases } from "./Constants";

export const initialState = {
    token: null,
    playlists: [],
    userInfo: null,
    selectPlaylistId: '5khIgRF6CEo9dhPkRH7Mm2',
    selectedPlaylist: null,
    currentlyPlaying: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN: {
            return {
                ...state, token: action.token
            };
        }
        case reducerCases.SET_PLAYLISTS: {
            return {
                ...state, playlists: action.playlists,
            };
        }
        case reducerCases.SET_USER: {
            return {
                ...state, userInfo: action.userInfo,
            }
        }
        case reducerCases.SET_PLAYLIST: {
            return {
                ...state, selectPlaylist: action.selectPlaylist,
            }
        }
        case reducerCases.SET_PLAYING: {
            return {
                ...state, currentlyPlaying: action.currentlyPlaying,
            };
        }
        default:
            return state;
    }
};

export default reducer;
