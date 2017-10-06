export const CREATE_GRID = "CREATE_GRID";
export const createGrid = (length,height) => ({
    type: CREATE_GRID,
    length,
    height
})
export const UPDATE_GRID = "UPDATE_GRID";
export const updateGrid = (x,y) =>({
    type: UPDATE_GRID,
    x,
    y
})
export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const togglePlay = () =>({
    type: TOGGLE_PLAY
})
export const ADD_PATTERN = "ADD_PATTERN";
export const addPattern = () =>({
    type: ADD_PATTERN
})
export const UPDATE_ACTIVE_PATTERN = "UPDATE_ACTIVE_PATTERN";
export const updateActivePattern = (newActivePattern) =>({
    type: UPDATE_ACTIVE_PATTERN,
    newActivePattern
})
