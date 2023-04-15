"use client";

import React, { useState } from 'react';
import MsgList from '../components/MsgList';
import Link from "next/link";

const NotesPage = () => {
  const [msg, setMsg] = useState("");
  const [noteList, setNoteList]= useState([]);
  const btnClass = "rounded-full bg-blue-600 p-2 text-white mt-2 hover:scale-105 transition duration-200 ease-out ";

  const addClick=()=>{
    if(msg){ 
      setNoteList(pre=>([...pre, 
        { id:noteList? noteList.length+1 : 0 ,
          time:new Date(), 
          message: msg,
        }
        ]));
      setMsg("");
    }else{
      alert("Please write notes");
    }
  }

  const deleteNote=(Id)=>{
    setNoteList(noteList.filter(i=>i.id!==Id));
  };

  const viewNote=(Id)=>{
    let obj = noteList.find(i=>i.id===Id);
    setMsg(obj.message);
  }

  const generateEmailContent=()=>{
    const subject = "Notes by Hemant";
    const body = msg + ". By " + window.location.href;
    return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const emailClick=()=>{
    window.location.href = generateEmailContent();
  }

  return (
    <>
    <div className='grid grid-cols-2 gap-4 lg:mx-4 md:mx-auto mt-4'>

      <div className='w-full flex flex-col '>
      <textarea name="textarea" id="textarea" cols="10" rows="10" className='border-black bg-gray-100 p-4 rounded-lg' value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
      <div className='grid grid-cols-4 gap-2'>
        <button onClick={addClick} className={btnClass}>Add Note</button>
        <button onClick={()=>setMsg("")} className={btnClass}>Clear</button>
        <button onClick={()=>setMsg(msg.toUpperCase())} className={btnClass}>UPPERCASE</button>
        <button onClick={()=>setMsg(msg.toLowerCase())} className={btnClass}>lowercase</button>
        <button className={btnClass} onClick={emailClick}>
        Share Via Email
        </button>
      </div>
      </div>
    

    {/* Message List */}
    <div className='flex justify-center '>
      <MsgList list={noteList} deleteNote={deleteNote} viewNote={viewNote}/>
    </div>

    </div>
    </>
  )
}

export default NotesPage