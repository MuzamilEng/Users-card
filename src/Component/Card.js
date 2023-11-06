import React from 'react'

const Card = ({id, name, age, gender, email, image, handleEdit, dob, handleDelete, address,children, program}) => {
  return (
    <div key={id} className='container max-w-[30rem] m-3 flex justify-center flex-col items-center w-full p-2 xl:[30rem] lg:w-[25rem] md:w-[20rem] sm:w-[15rem] rounded-md bg-[#ffff] dark:bg-[#0f111b] dark:shadow-2xl'>
        <img src={image ? image : '/images/model.webp'} alt="default" className='w-[7rem] h-[7rem] rounded-full border-2 border-blue-700 dark:border-[#bf1650]'/>
        <div className="m-2">
            <p className='text-lg dark:text-white text-black font-bold'> Name: <span className='text-gray-500 text-lg ml-2'> {name}</span></p>
            <p className='text-lg dark:text-white text-black font-bold'> Age: <span className='text-gray-500 text-lg ml-2'>{age}</span></p>
            <p className='text-lg dark:text-white text-black font-bold'> Email: <span className='text-gray-500 text-lg ml-2'> {email}</span></p>
            <p className='text-lg dark:text-white text-black font-bold'> Gender:<span className='text-gray-500 text-lg ml-2'> {gender}</span></p>
            <p className='text-lg dark:text-white text-black font-bold'> Children: <span className='text-gray-500 text-lg ml-2'>{ children ? children : 0}</span></p>
            <p className='text-lg dark:text-white text-black font-bold'> Date of Birth: <span className='text-gray-500 text-lg ml-2'>{dob}</span></p>
            <p className='text-lg dark:text-white text-black font-bold'> Program: <span className='text-gray-500 text-lg ml-2'>{program}</span></p>
            <div className="flex">
            <p className='text-lg dark:text-white text-black font-bold'>Address:</p>
            <textarea className='text-gray-500 bg-inherit text-lg ml-2 overflow-hidden' cols="20" rows="2">{address}</textarea>
            </div>
            <div className="flex justify-around p-2">
            <button className='btn-primary dark:text-white border-2 mt-3 m-2 border-blue-700 dark:border-[#bf1650] font-bold text-lg p-2 rounded-md text-center w-full max-w-[10rem] dark:hover:bg-[#bf1650] hover:bg-slate-200' onClick={handleEdit}>Edit</button>
            <button className='btn-primary dark:text-white border-2 mt-3 m-2 border-blue-700 dark:border-[#bf1650] font-bold text-lg p-2 rounded-md text-center w-full max-w-[10rem] dark:hover:bg-[#bf1650] hover:bg-slate-200' onClick={handleDelete}>Delete</button>
            </div>

        </div>

    </div>
  )
}

export default Card