import PokePicture from '@/modules/pokemon/components/PokePicture.vue';
import { mount } from '@vue/test-utils';

describe ('<PokemonPicture/>', ()=>{
    const pokemonId = 77;
    const imgSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

    const wrapper = mount( PokePicture,{
        props:{ pokemonId, showPokemon: false}
    });

    console.log(wrapper.html());

test('should render hidden image whe showPokemon prop is false', ()=>{
    const image = wrapper.find('img');
    const attributes = image.attributes();
    //  expect(image.attributes('src')).toBe(imgSource);

    expect(attributes).toEqual(
        expect.objectContaining({
            class:"brightness-0 h-[250px] py-8",
            alt:"Pokemon images",
            src:imgSource,
        }),
    );
})


});
