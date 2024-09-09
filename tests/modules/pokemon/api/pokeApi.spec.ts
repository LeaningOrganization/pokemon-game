import { pokeApi } from "@/modules/pokemon/api/pokeApi";

describe('pokeApi', ()=>{
    test('should be configure as expect', ()=>{
        const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

        expect(pokeApi.defaults.baseURL).toBe(baseUrl);

    })



})
