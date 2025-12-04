export default function showStats(player) {
    const time = 0
    for(i = 0; i<player.times.length; i++)
        time += player.times[i]
    console.log(`your total time is: ${time}`)
    console.log(`your time per riddle is: ${time/player.times.length}`)
}
