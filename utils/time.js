export const time = function() {
    return Date.now()
}


function addSolveTime(player, seconds) {
    player.times.push(seconds)
}
