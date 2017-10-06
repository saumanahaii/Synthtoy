import {CREATE_GRID, UPDATE_GRID, TOGGLE_PLAY, ADD_PATTERN,UPDATE_ACTIVE_PATTERN} from '../actions/action'
import createGrid from '../functions/createGrid';

const templatePattern = [

];

const defaultState = {
    user: null,
    activePattern: 0,
    //blueprint of a pattern.  I did it this way partly out of laziness, but also because I keep forgetting how it looks/dimensions.
    patterns: [[
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
        [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
    ]],
    //notes: ["g5","f5","e5","d5","c5","b5","a5","g4","e4","d4","c4","b4","a4","g3","e3","d3"],
    notes: ["F5", "Eb5", "D5", "C5", "Bb4", "Ab4", "G4", "F4", "Eb4", "D4", "C4", "Bb3", "Ab3", "G3", "F3", "Eb3"],
    isPlaying: false,
}

export default function reducer(state = defaultState, action){
    const type = action.type;
if(type === CREATE_GRID){
    console.log("create grid action dispatched.");
    let grid = createGrid(action.length,action.height);
    let patterns = [...state.patterns];
    patterns[state.activePattern] = grid;
    return {...state, patterns: patterns};
}
// TODO: Fix the update function to use the new pattern where activePattern is a number.
else if(type === UPDATE_GRID){
    let patterns = [...state.patterns];
    let grid = [...patterns[state.activePattern]];
    grid[action.x][action.y] = !grid[action.x][action.y];
    patterns[state.activePattern] = grid;
    console.table(templatePattern);
    return {...state, patterns : patterns}
}
else if(type===TOGGLE_PLAY){
    return {...state, isPlaying : !state.isPlaying}
}
else if(type===ADD_PATTERN){
    console.log("Hit add pattern reducer")
    let patterns = [...state.patterns];
    console.table(templatePattern);
    patterns.push([[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]]);
    console.log(patterns)
    return {...state, patterns : patterns}
}
else if(type===UPDATE_ACTIVE_PATTERN){
    return {...state, activePattern : action.newActivePattern}
}
else{
    return state;
}
}
