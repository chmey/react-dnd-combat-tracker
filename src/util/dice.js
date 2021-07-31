const rollDice = (eyes) => {
    const result = getRandomInt(1, eyes+1);
    return result;
}

function getRandomInt(min, max) {
    // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
  
export {rollDice};