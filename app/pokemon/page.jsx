import React from 'react';
import PokemonTable from '../components/PokemonTable';
import {store} from "../store";
import { setStartupPokemon } from '../store/searchSlice';
import SSRPokemonTable from '../components/SSRPokemonTable';
import SearchInput from '../components/SearchInput';

const PokemonPage = async() => {
    const req = await fetch("http://localhost:3000/api/search");
    const data = await req.json();
    store.dispatch(setStartupPokemon(data));

  return (
    <div className='relative h-full w-full'>
        <div className='flex flex-col mx-auto right-0 left-0 top-0 bottom-0 absolute'>       
            <SearchInput/>
            <SSRPokemonTable />
        </div>
    </div>
  )
}

export default PokemonPage