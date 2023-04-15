"use client";

import React from 'react';

const MsgList = ({list, deleteNote, viewNote}) => {
  return (
    <div className='w-full flex flex-col bg-emerald-200 p-4 rounded-lg'>
        {list?.length===0 && <p>No Notes Added</p>}
        {list?.map((i,index)=>(
            <div className='flex justify-start my-2 py-2 px-4 border-black bg-slate-100 rounded-lg hover:scale-105 trnsition duration-200 ease-out cursor-pointer'>
                <p>{index+1}&nbsp;</p>
                <p>{i.message.slice(0,30)}...</p>
                <button className='bg-blue-600 rounded-full p-2 text-xs text-white' onClick={()=>deleteNote(i.id)}>delete</button>
                <button className='bg-blue-600 rounded-full p-2 text-xs text-white' onClick={()=>viewNote(i.id)}>view</button>
            </div>
        ))}
    </div>
  )
}

export default MsgList