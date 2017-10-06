//Creates an empty grid.
const createGrid = (length, height) => {
    let data = [];
    for(let h = 0; h < height; h++){
        data[h] = [];
        for(let l = 0; l < length; l++){
            data[h][l] = false;
        }
    }
    //console.log(data)
    return data;
};

export default createGrid;
