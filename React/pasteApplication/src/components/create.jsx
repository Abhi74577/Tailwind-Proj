import React, { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { createPastes, updatePaste } from '../feature/pasteSlice'
import { ToastContainer, toast } from 'react-toastify';
import { BsFiles } from "react-icons/bs";
import { BsFillRecordFill } from "react-icons/bs";
function create(props) {

  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')
  const [searchParam, setSeatchParam] = useSearchParams()
  const pasteId = searchParam.get("pasteId")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const pastesAll = useSelector(state => state.paste.pastes)

  function handleSumit(e) {
    e.preventDefault()

    const data = {
      id: pasteId ? pasteId : Date.now().toString(),
      title: title,
      content: value,
      createdAt: new Date().toISOString()
    }

    if (!pasteId) {
      //create
      dispatch(createPastes(data));
      toast("Create Successfully!!")
      setTitle('')
      setValue('')
      // navigate('/')
    }
    else {
      //update
      dispatch(updatePaste(data))
      toast("Update Successfully!!")
      setTitle('')
      setValue('')
      // navigate('/')
    }

  }

  useEffect(() => {


    if (pasteId || props.id) {
      const id = pasteId ? pasteId : props.id
      const data = pastesAll?.filter(x => x.id == id);
      if (data) {
        setTitle(data[0].title)
        setValue(data[0].content)
      }
    }

  }, [pasteId])

  function NbReturn(text) {
    const numberOfLines = text.split(/\r?\n/).length;
    return numberOfLines
  }

  return (
    <div className='mx-auto p-10 mt-4 '>

      <div className='max-w-10/12 mx-auto flex flex-col justify-center relative space-y-5 overflow-hidden'>
        <h2 className='text-center text-2xl font-bold'>Create Paste</h2>
        {/* <div className=' flex relative space-x-5 mt-2'> */}
        <input className='w-full border border-solid border-black-400 rounded-md py-2 px-4 text-[18px]' placeholder='title' type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} disabled={props.isview} />

        {/* </div> */}
        <div className=' m-0 p-0 border border-solid border-black-400'>
          <div className='flex justify-between items-center py-3 px-4 bg-[#eee7e7d4] '>
            <div className='flex space-x-0.5'>
              <BsFillRecordFill className=' text-[20px] text-red-700' />
              <BsFillRecordFill className=' text-[20px] ' />
              <BsFillRecordFill className=' text-[20px] text-amber-700' />
            </div>
            <button className='text-[25px] text-blue-500 hover:scale-y-110 transform-0 duration-75 cursor-pointer' onClick={() => { navigator.clipboard.writeText(value), toast("Copy Successfully!!") }}><BsFiles /></button>
          </div>
          {/* <div className='flex flex-row w-[20px]'>{NbReturn(value)}</div> */}
          <textarea className='w-full min-h-[200px] overflow-y-auto py-2 px-4  rounded-md text-[18px]' placeholder='Enter text' name='value' rows='10' value={value} onChange={(e) => setValue(e.target.value)} disabled={props.isview} />

        </div>


        {props.id ?
          <div></div>

          : <button className='mt-3 border border-solid border-black-400 rounded-md py-2 px-5 text-[18px] hover:bg-amber-100 cursor-pointer' onClick={(e) => handleSumit(e)}>{
            pasteId ? "Update" : "Submit"
          }</button>
        }


      </div>
      <ToastContainer />
    </div>
  )
}

export default create
