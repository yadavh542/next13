"use client";

import React, { useEffect, useRef, useState } from 'react';
import {store} from '../store';
import { setSearch } from '../store/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import PokemonTable from './PokemonTable';
import { setStartupPokemon } from '../store/searchSlice';
//import type { TypedUseSelectorHook } from 'react-redux';
//import { RootState, AppDispatch} from '../store';

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;

const SearchInput = () => {
  const [text, setText] = useState("");
  const textRef = useRef("");
  const dispatch = useAppDispatch();
  const search = useAppSelector((state)=>state.search.search);
  const startupPokemon = useAppSelector((state)=>state.search.startupPokemon);

  const getData=async() => {
    const req = await fetch(`http://localhost:3000/api/search?name=${store.getState().search.search}`);
    const data = await req.json();
    store.dispatch(setStartupPokemon(data));
  };
    useEffect(()=>{
      getData();
    },[search])


  return (
    <div className='flex flex-col justify-center w-1/3 mx-auto'>
        <input className='border border-blue-400 outline-none my-5' type="text" 
        ref={textRef}
        placeholder='Search Here...'
        value={search}
        onChange={(e)=>dispatch(setSearch(e.target.value))}
        />
        {/*<button 
        onClick={()=>store.dispatch(setSearch(text))}
        className='rounded-full bg-blue-600 p-1 text-white mt-2 hover:scale-105 transition duration-200 ease-out'>Search</button>
         <p>{text}</p> 
        <p>{search}</p>*/}
        <h2>Pokemons List :</h2>
        <PokemonTable pokemons={startupPokemon}/> 
    </div>
  )
}

export default SearchInput