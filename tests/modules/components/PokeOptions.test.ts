import { mount } from "@vue/test-utils";
import PokeOptions from "@/modules/pokemon/components/PokeOptions.vue";

const options =[
{id:1, name: 'Bulbasaur'},
{id:2, name: 'Ivysaur'},
{id:3, name: 'Venusaur'},
    
];

describe('<PokeOptions/>', ()=>{

test('should render buttons with correct text', ()=>{
    const wrapper = mount(PokeOptions, {
        props: {options, blockSelection: false,  correctAnswer: 1},
    });

    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBe(options.length)


    buttons.forEach( (button, index)=>{
        expect(button.text()).toBe(options[index].name)
    })
    
});

test('should emit selectedOption event, when the trigger is clicked', async ()=>{
    const wrapper = mount(PokeOptions, {
        props: {options, blockSelection: false,  correctAnswer: 1},
    });

    const [b1, b2, b3] = wrapper.findAll('button');
    
    await b1.trigger('click');
    await b2.trigger('click');
    await b3.trigger('click');

    expect(wrapper.emitted().selectedOption[0]).toEqual([1]);
    expect(wrapper.emitted().selectedOption[1]).toEqual([2]);
    expect(wrapper.emitted().selectedOption[2]).toEqual([3]);
})

test('should disabled buttons when the blockSelection prop is true', ()=>{

    const wrapper = mount(PokeOptions, {
        // blockSelection true, 
        props: {options, blockSelection: true,  correctAnswer: 1},
    });

    const buttons = wrapper.findAll('button');

    buttons.forEach( (button)=>{

        const attributes = Object.keys(button.attributes());
        // console.log(attributes);
        expect(attributes).toContain('disabled');

    }  );


});

test('should apply correct styling to buttons based on correct/incorrect answer ', ()=>{
    const correctAnswer =2;
    const wrapper = mount(PokeOptions, {
        props: {options, blockSelection: true,  correctAnswer},
    });

    const buttons = wrapper.findAll('button');

    buttons.forEach( (button, i)=>{
        // console.log(button.classes())
        if( options[i].id === correctAnswer) {
            expect(button.classes()).toContain('correct');
        }else{
            expect(button.classes()).toContain('incorrect');
        };
    })


})


})
