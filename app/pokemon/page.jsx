"use client";

import React, { useEffect } from 'react';
import PokemonTable from '../components/PokemonTable';
import {store} from "../store";
import { setStartupPokemon } from '../store/searchSlice';
import SSRPokemonTable from '../components/SSRPokemonTable';
import SearchInput from '../components/SearchInput';

const PokemonPage = () => {

    const getData=async() => {
    const req = await fetch("http://localhost:3000/api/search");
    const data = await req.json();
    store.dispatch(setStartupPokemon(data));
  };
    useEffect(()=>{
      getData();
    },[])

  return (
    <div className='h-full w-full'>
            
            <SearchInput/>
            <SSRPokemonTable />
        
    </div>
  )
}

export default PokemonPage