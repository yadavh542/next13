"use client";

import React, { useEffect, useState } from 'react';
import PokemonTable from '../components/PokemonTable';
import {store} from "../store";
import { setStartupPokemon } from '../store/searchSlice';
import SSRPokemonTable from '../components/SSRPokemonTable';
import SearchInput from '../components/SearchInput';
import Providers from '../components/Provider';
import Preloader from '../components/Preloader';

const PokemonPage = () => {
 
  return (
    <div className='h-full w-full'>
            {/* <Preloader pokemons={data}/> */}
            <Providers>
            <SearchInput/>
            {/* <SSRPokemonTable /> */}
            </Providers>
    </div>
  )
}

export default PokemonPage