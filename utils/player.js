import  input  from "analiza-sync"
export const player = {
    name:'',
    times:[]
}

export function createUsaerName(player) {
    const name = input("enter your name:") 
    player.name = name
    return player
}


