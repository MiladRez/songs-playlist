//Action Creators

//named export
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song // same as song: song
    };
};