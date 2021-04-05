function starOutGrid(grid) {
    let rows = []
    let cols =[]
    for(i in grid){
        row = grid[i];
        x = row.indexOf('*')
        if(x !== -1){
            rows.push(Number(i))
            cols.push(x)
        }
    }
    console.log('r0ws:',rows)
    console.log('cols:',cols)
    return grid.map(function(row, i){
        if(rows.indexOf(i)!== -1){
            return starify(row)
        }
        else{
            return row.map(function(val,i){
                if(cols.indexOf(i) !== -1){
                    return '*'
                }
                else{
                    return val
                }
            })
        }
    })
}

function starify(arr) {
    return arr.map(()=>'*')

}