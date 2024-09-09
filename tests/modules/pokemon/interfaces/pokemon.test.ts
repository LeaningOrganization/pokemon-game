import type { Pokemon } from '@/modules/pokemon/interfaces/IPokemon';

describe('pokemon interface', ()=>{
    const pokemon: Pokemon = { id: 10, name: 'bulbasaur'};

    test('should have an id property of type number', ()=>{
        expect(pokemon.id).toEqual(expect.any(Number));
    })

    test('should have an name property of type string', ()=>{
        expect(pokemon.name).toEqual(expect.any(String));
    })


})
