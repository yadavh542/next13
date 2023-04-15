"use client";

import React from "react";
import { FaTrashAlt, FaEye } from "react-icons/fa";
import "../globals.css";

const MsgList = ({ list, deleteNote, viewNote }) => {
  return (
    <div className="w-full flex flex-col p-4 rounded-lg shadow-md overflow-y-auto">
      {list?.length === 0 && <p>No Notes Added</p>}
      {list?.map((i, index) => (
        <div className="flex justify-between h-20 my-2 py-2 px-4 rounded-lg shadow-lg hover:shadow-xl bg-slate-100 hover:bg-pink-100 trnsition duration-200 ease-out cursor-pointer relative rainbow-gradient">
          <p>{index + 1}&nbsp;</p>
          <p>{i.message.slice(0, 60)}...</p>
          <p className="text-xs absolute bottom-1 left-6 text-gray-400">
            {i.time}
          </p>

          <div className="space-x-2">
            <button
              className="bg-gray-600 hover:bg-red-600 rounded-full p-2 text-xs text-white"
              onClick={() => deleteNote(i.id)}
            >
              <FaTrashAlt/>
            </button>
            <button
              className="bg-gray-600 hover:bg-green-600 rounded-full p-2 text-xs text-white"
              onClick={() => viewNote(i.id)}
            >
              <FaEye/>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MsgList;
