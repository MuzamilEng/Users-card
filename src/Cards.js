import React from 'react';
import Card from './Component/Card';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from './UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = ({ data, handleDelete }) => {
  const { selectUser } = useGlobalContext();
  const navigate = useNavigate();
  const handleEdit = (user) => {
    if (user) {
      selectUser(user);
      navigate(`/edit/${user.id}`);
    }
  };

  return (
    <div className='grid grid-cols-3 dark:text-white m-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:m-3 sm:m-3 sm:grid-cols-1 responsive_card'>
      {data?.map((user) => (
        <div key={user.id}>
          <Card {...user} handleEdit={() => handleEdit(user)} handleDelete={() => handleDelete(user.id)} />
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Cards;
