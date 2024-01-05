"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}])
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }
  let renderTask = <h2>No task available</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between'>
          <div className='flex justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-semibold'>{t.desc}</h6>
          </div>
          <button onClick={()=>{deleteHandler(i)}} className='text-xl bg-red-800 py-2 px-4 font-semibold text-white rounded'>Delete</button>
        </li>
      );
    })
  }

  return (
    <>
    <h1 className='bg-purple-600 p-5 text-5xl text-center text-white font-semibold'>Noddy's Todo List</h1>
    <form onSubmit={submitHandler}>
      <input
        type="text" 
        className='text-2xl m-8 px-4 py-2 border-zinc-800 border-2 rounded'
        placeholder="Enter task title" 
        value={title}
        onChange={(e) => {setTitle(e.target.value)}}/>
      <input
        type="text"
        className='text-2xl m-8 px-4 py-2 border-zinc-800 border-2 rounded'
        placeholder="Enter task description"
        value={desc}
        onChange={(e) => {setDesc(e.target.value)}} />
      <button className='bg-orange-400 text-white font-semibold m-5 px-4 py-2 rounded'>Add Task</button>
    </form>
    <hr/>

    <div className='bg-slate-200 p-6'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}

export default page