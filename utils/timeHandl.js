export function addSolveTime(player, seconds) {
    player.times.push(seconds)
    return player
}

export const measureSolveTime = function(fn) {
    let startTime = Date.now()
    fn()
    let endTime = Date.now()
    const beffor = endTime - startTime
    return beffor /1000
}