import { GameStatus } from "@/modules/pokemon/interfaces"

describe('Game status enum', ()=>{

    test('should have correct value of "playing" ', ()=>{
        expect(GameStatus.playing).toBe('playing')
    } )
    test('should have correct value of "won" ', ()=>{
        expect(GameStatus.won).toBe('won')
    } )
    test('should have correct value of "lost" ', ()=>{
        expect(GameStatus.lost).toBe('lost')
    } )



})
