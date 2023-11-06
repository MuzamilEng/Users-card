import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Cards from './Cards';
import Switcher from './Component/Switcher';
import { useGlobalContext } from './UserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const { state } = useGlobalContext()
  const navigate = useNavigate();
  // console.log(state, "state");
  const [users, setUsers] = useState(state);
  const [input, setInput] = useState('');
  const [paginate, setPaginate] = useState(1);
  const [select, setSelect] = useState('');
  const [doPaginate, setDoPaginate] = useState(true);
  const [show, setShow] = useState(true);
  const [showHoverText, setShowHoverText] = useState(false);

  const isActivePage = (pageNumber) => {
    return paginate === pageNumber ? 'active-button' : '';
  };
  const showToast = (message, type) => {
    toast[type](message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };
  const handleDelete = (user) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      const deleteUser = users.filter((item, i) => item?.id !== user);
      setUsers(deleteUser);
      showToast('User deleted successfully', 'success');
    }
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    navigate('/add')
  }
  const handleInputFocus = () => {
    setShowHoverText(true);
    setTimeout(() => {
      setShowHoverText(false);
    }, 3000);
  };


  useEffect(() => {
    const filteredUsers = state.filter((user) => {
      const genderFilter = (select === 'male' || select === 'female') && user?.gender?.toLowerCase() === input?.toLowerCase();
      const ageFilter = select === 'age' && Number(user.age) === Number(input);
      const nameFilter = select === 'name' && user?.name?.toLowerCase().includes(input?.toLowerCase());
      const generalSelection = select === '' &&
        (user?.name?.toLowerCase().includes(input?.toLowerCase()) ||
        user?.gender?.toLowerCase() === (input?.toLowerCase())    ||
        (user?.age && user.age.toString().includes(input)));
      return genderFilter ||
             ageFilter    ||
             nameFilter   ||
             generalSelection;
    });

    const shouldPaginate =
      (select === 'male' || select === 'female') || filteredUsers.length > 5;
    setDoPaginate(shouldPaginate);

    if (shouldPaginate) {
      const itemsPerPage = 5;
      const startIndex = (paginate - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setUsers(filteredUsers.slice(startIndex, endIndex));
      if (select === '') {
        setShow(true)
      } else {
        setShow(false);
      }
    } else {
      if (!input && !select) {
        setUsers(paginate === 1 ? state?.slice(0, 5) : paginate === 2 ? state?.slice(5, 10) : paginate === 3 ? state?.slice(10, 15) : state?.slice(15, 20));
        setDoPaginate(true);
        setShow(true);
      } else {
        setUsers(filteredUsers);
        setShow(true);
      }
    }
  }, [input, select, paginate, state]);





  return (
    <div className='dark:bg-[#081229] h-full w-screen'>
      <div style={{ height: '100%' }} className="bg-slate-200 dark:bg-[#081229]">
        <div className="flex justify-center items-center">
          <span className='text-center relative text-3xl dark:text-[#bf1650] font-bold p-2 underline'>Fetch Users</span>
          <span className=""><Switcher /></span>
          <button onClick={handleAddUser} className='absolute responsive_button btn-primary dark:text-white border-2 mt-3 m-2 border-blue-700 dark:border-[#bf1650] font-bold text-lg p-2 rounded-md text-center dark:hover:bg-[#bf1650] hover:bg-slate-200 top-[2rem] right-[12rem]'><span className='w-full max-w-[15rem]'>Add New User</span></button>
        </div>
        <ToastContainer />
        {users.length === 0 && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="relative">
              <p className=' text-2xl font-bold'>Sorry, no users found</p>
            </div>
          </div>
        )}

        <div className="m-2 flex flex-col justify-center items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search github users"
              value={input}
              onFocus={handleInputFocus}
              onChange={(e) => setInput(e.target.value)}
              className="w-[40rem] res_input p-2 focus:outline-none focus:shadow-md border-gray-300 border-[1px] rounded-md"
            />
            {showHoverText && (
              <p className="absolute top-full left-0 bg-white border border-gray-300 rounded-md p-2 hover-text">
                You can enter name, age, or gender to search profiles.
              </p>
            )}
          </div>
          <br />
          <select className='w-full max-w-[15rem] p-2 focus:outline-none focus:shadow-md border-gray-300 border-[1px] rounded-md' value={select} onChange={(e) => setSelect(e.target.value)}>
            <option value="">--Select--</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="age">age</option>
            <option value="name">name</option>
          </select>
        </div>
        <div className="container">
          <Cards data={users} handleDelete={handleDelete} />
        </div>
        {doPaginate && <div className="p-2 flex justify-center items-center">
          <Icon icon="ic:round-arrow-left" color="blue" className='cursor-pointer m-2 text-4xl bg-gray-300 rounded-full hover:bg-gray-400' onClick={() => setPaginate(show && paginate === 1 ? 3 : paginate === 1 ? 2 : show && paginate === 1 ? 4 : paginate - 1)} />
          <button onClick={() => setPaginate(1)} value={paginate} className={`p-2 border-[1px] dark:text-white border-blue-700 rounded-md font-semibold text-center m-2 hover:bg-[#bf1650] ${isActivePage(1)}`}>1</button>
          <button onClick={() => setPaginate(2)} value={paginate} className={`p-2 border-[1px] border-blue-700 dark:text-white rounded-md font-semibold text-center m-2 hover:bg-[#bf1650] ${isActivePage(2)}`}>2</button>
          {show && <button onClick={() => setPaginate(3)} value={paginate} className={`p-2 border-[1px] border-blue-700 dark:text-white rounded-md font-semibold text-center m-2 hover:bg-[#bf1650] ${isActivePage(3)}`}>3</button>}
          {(state?.length > 15 && show) && <button onClick={() => setPaginate(4)} value={paginate} className={`p-2 border-[1px] border-blue-700 dark:text-white rounded-md font-semibold text-center m-2 hover:bg-[#bf1650] ${isActivePage(4)}`}>4</button>}
          <Icon icon="ic:round-arrow-right" color="blue" className='cursor-pointer m-2 text-4xl bg-gray-300 hover:bg-gray-400 rounded-full' onClick={() => setPaginate((show && state?.length === 15) && paginate === 3 ? 1 : show && paginate === 4 ? 1 : !show && paginate === 2 ? 1 : paginate + 1)} />
        </div>}
      </div>
    </div>
  );
};

export default Users;