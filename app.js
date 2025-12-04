import allRiddles from './riddles/imports.js'
import  input  from "analiza-sync"
import  createPlayer from './utils/player.js'
import  askRiddle  from './utils/riddlefun.js'
import { addSolveTime } from './utils/timeHandl.js'
import { measureSolveTime } from './utils/timeHandl.js'
import showStats from './utils/stats.js'
const game = function (riddles) {
    console.log("Welcom to riddle game")
    const name = input('enter your name:')
    let player = createPlayer(name)
    for(let i=0;i<allRiddles.length;i++) {
        let time = measureSolveTime(askRiddle(riddles[i]))
        addSolveTime(player,time)
    }
    showStats(player)

}
game(allRiddles)
