function snakeToCamel(snake) {
    let words = snake.split('_');
    let first = words[0];
    let camel = '';
    words = words.map(function(word){
        return capitalize(word)
    })
    words[0] = first
    for(word in words){
        camel = camel + words[word]
    }
    return camel
}

function capitalize(word){

    return word.charAt(0).toUpperCase() + word.slice(1)
}
