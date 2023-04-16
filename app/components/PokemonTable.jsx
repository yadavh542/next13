import React from 'react'

const PokemonTable = ({pokemons}) => {
  return (
    <div>
        <table className='border border-slate-400 border-collapse'>
            <thead>
            <th className='border border-slate-400'>S.No.</th>
                <th className='border border-slate-400'>Name</th>
            </thead>
            <tbody>
                {pokemons?.map((p,index)=>(
                    <tr>
                        <td className='border border-slate-400'>{index+1}</td>
                        <td className='border border-slate-400'>{p.name}</td></tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default PokemonTable