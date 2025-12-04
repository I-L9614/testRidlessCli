export function addSolveTime(player, seconds) {
    player.times.push(seconds)
    return player
}

export const measureSolveTime = function(fn) {
    const startTime = Date.now()
    fn()
    const endTime = Date.now()
    return endTime - startTime
}