import { usePokemonGame } from "@/modules/pokemon/composables/usePokemonGame"
import { withSetup } from "../utils/with-setup"

describe('usePokemonGame', ()=>{
    test('should initializer with de correct default values', async ()=>{

        const [results, app] = withSetup(usePokemonGame);

        // console.log( 'loading:',  isLoading.value) 



    })



})
