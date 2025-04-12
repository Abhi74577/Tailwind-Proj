import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router';
import { deletePaste } from '../feature/pasteSlice'
import { ToastContainer, toast } from 'react-toastify';
function paste() {
  const [search, setSearch] = useState('')
  const [allData, setAlldata] = useState([])
  const pastesAll = useSelector(state => state.paste.pastes);
  // const [searchParam, setSeatchParam] = useSearchParams()
  // const pasteId = searchParam.get("pasteId")
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function copyContent(data) {
    var copyText = document.getElementById(data.id);
    // copyText.select();
    // copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(data.content);
    toast("Content Copy Successfully!!")
  }

  function handelEditView(id) {

    navigate(`/paste/?pasteId=${id}`)
  }

  function removePaste(pasteId) {

    dispatch(deletePaste(pasteId))
    toast("Post delete Successfully!!")
  }
  useEffect(() => {
    SerchingData()

  }, [search, removePaste])

  function SerchingData() {
    if (search) {
      let data = pastesAll?.filter(x => x.title == search)
      // data.length !==0 ? allData.length !==1 && setAlldata(data) :setAlldata([])
      setAlldata(data.length != 0 ? data : [])
    }
    else {
      setAlldata(pastesAll)
    }

  }



  return (

    <div className='max-w-10/12 mx-auto mt-4 flex flex-col py-4 justify-center text-start space-y-3 relative '>
      <input className='w-full border-2 border-solid border-black-400 rounded-md py-2 px-4 text-[18px]' placeholder='Search' type='search' name='search'
        value={search} onChange={(e) => { setSearch(e.target.value), SerchingData }} />
      <div className='w-full  mx-auto  bg-[#3a3939ec] py-4   border-3 border-black-600 rounded-md'>
        <h2 className=' px-3.5 text-3xl font-bold text-white'>All Pastes</h2>
        <div className='border-2 rounded-md border-white'>
        </div>
        {
          allData ? allData?.map((data) => (

            <li className='w-full flex flex-col mx-3 space-y-4 border-2 rounded-md border-white justify-between mt-3' key={data.id}>

              <div className='flex flex-col lg:flex-row lg:space-x-4 lg:items-center py-4 justify-center lg:justify-between lg:px-5 text-center space-y-3'>
                <h3 className='text-white'>Title -: {data.title}</h3>
                <p className='text-white lg:w-[500px]' id={data.id}>Content -: {data.content}</p>
                <div className='lg:w-[300px] flex flex-wrap gap-4 space-x-5 mx-5 justify-center items-center lg:px-5'>
                  <button className='border border-solid border-black bg-black py-0.5 px-3 text-[14px] text-blue-500 hover:bg-amber-100 cursor-pointer' onClick={() => handelEditView(data.id)}>Edit</button>
                  <button className='border border-solid border-black bg-black py-0.5 px-3 text-[14px] text-blue-500 hover:bg-amber-100 cursor-pointer' onClick={() => navigate(`/view/${data.id}`)}>View</button>
                  <button className='border border-solid border-black bg-white py-0.5 px-3 text-[14px] text-blue-500 hover:bg-amber-100 cursor-pointer' onClick={() => removePaste(data.id)}>Delete</button>
                  <button className='border border-solid border-black bg-white py-0.5 px-3 text-[14px] text-blue-500 hover:bg-amber-100 cursor-pointer' onClick={() => copyContent(data)}>Copy</button>
                  <button className='border border-solid border-black bg-black py-0.5 px-3 text-[14px] text-blue-500 hover:bg-amber-100 cursor-pointer'>Share</button>
                </div>
                <p className='text-white lg:w-[200px]'>Created At : <br></br> {data.createdAt}
                </p>
              </div>
            </li>


          ))
            : <h2>Not Found</h2>
        }
        <ToastContainer />
      </div>
    </div>
  )
}

export default paste
