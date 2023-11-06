import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../UserContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Switcher from './Switcher';
import { userData } from '../data';


const UserForm = () => {
  const { id } = useParams();
  const { updateUser, addUser, selectedUser } = useGlobalContext()
  console.log(id);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const user = selectedUser || null;
  // console.log(user, "user");

  const { register, handleSubmit, setValue, reset, control, formState: { errors } } = useForm({
    defaultValues: {
      email: user?.email || '',
      name: user?.name || '',
      age: user?.age || '',
      gender: user?.gender || '',
      dob: user?.dob || '',
      address: user?.address || '',
      children: user?.children || '',
      program: user?.program || '',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(value, "value")
    setValue(name, value);
  };
  const showToast = (message, type) => {
    toast[type](message, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (user) {
      updateUser(user.id, data);
      showToast('User updated successfully', 'success');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
    else {
      addUser(data);
      showToast('User added successfully', 'success');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  const maxDate = new Date();

  return (
    <div style={{ height: '100%' }} className='dark:bg-[#081229] bg-slate-200'>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        {userData?.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <div className="flex justify-center items-center">
              <h1 className='text-center text-3xl font-bold dark:text-white underline pt-[2rem]'>{user ? section?.title : "Create your profile"}</h1>
              <span className=""><Switcher /></span>
            </div>
            <div className="text-center mt-2 p-2">
              {section?.form?.map((field, fieldIndex) => (
                <div key={fieldIndex} >
                  <label className='dark:text-white' htmlFor={field?.name}>{field?.label === 'Are you Married ?' ? "" : field?.label}</label> <br />
                  {field?.type === 'text' ? (
                    <Controller
                      name={field?.name}
                      control={control}
                      rules={field?.rules}
                      render={({ field }) => (
                        <input
                          {...field}
                          onChange={handleInputChange}
                          className={`w-1/2 p-2 m-[1rem] focus:outline-none focus:shadow-md border-gray-300 border-[1px] rounded-md ${errors[field?.name] ? 'border-red-500' : ''}`}
                          type="text"
                          placeholder={field?.placeholder}
                        />
                      )}
                    />
                  ) : field?.type === 'select' ? (
                    <select placeholder={field?.placeholder}
                      {...register(field?.name, field?.rules)}
                      className={`w-1/2 p-2 m-[1rem] focus:outline-none focus:shadow-md border-gray-300 border-[1px] rounded-md ${errors[field?.name] ? 'border-red-500' : ''}`}
                    >
                      {field?.options?.map((option, optionIndex) => (
                        <option key={optionIndex} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : field?.type === 'date' ? (
                    <Controller
                      name={field?.name}
                      control={control}
                      rules={field?.rules}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          selected={field.value ? moment(field.value, 'YYYY-MM-DD').toDate() : null}
                          dateFormat="yyyy-MM-dd"
                          maxDate={maxDate}
                          onChange={(date) => field.onChange(moment(date).format('YYYY-MM-DD'))}
                          className={`w-[49rem] p-2 m-[1rem] focus:outline-none focus:shadow-md border-gray-300 border-[1px] rounded-md`}
                        />
                      )}
                    />
                  ) : field?.type === 'radio' ? (
                    <div className='flex justify-center items-center'>
                      <div className='flex justify-around w-full max-w-[50rem]'>
                        {field.options.map((option, optionIndex) => (
                          <div key={optionIndex}>
                            <input
                              type="radio"
                              name={field?.name}
                              // onChange={handleInputChange}
                              onChange={(e) => {
                                field.onChange(e.target.value);
                              }}
                              defaultChecked={user && user?.program === option?.value}
                              value={option?.value}
                              {...register(field.name, field.rules)}
                              className={`m-[1rem] cursor-pointer`}
                            />
                            <label className='dark:text-white cursor-pointer' htmlFor={`${option?.label}`}>{option.label}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : field?.type === 'checkbox' ? (
                    <>
                      <label className='dark:text-white' htmlFor={field?.name}>Are you Married ?</label>
                      <Controller
                        name={field?.name}
                        control={control}
                        rules={field?.rules}
                        render={({ field }) => (
                          <input
                            type="checkbox"
                            name={field?.name}
                            defaultChecked={user && user.children > 0}
                            className='ml-[2rem] mb-2 text-xl'
                            onChange={(e) => {
                              setShow(e.target.checked);
                            }}
                          />
                        )}
                      />
                    </>
                  ) : field?.type === 'input' && (show || (user && user.children > 0)) ? (
                    <>
                      <label className='dark:text-white' htmlFor={field?.name}>Children</label> <br />
                      <Controller
                        name={field?.name}
                        control={control}
                        rules={field?.rules}
                        render={({ field }) => (
                          <input
                            {...field}
                            onChange={handleInputChange}
                            className={`w-1/2 p-2 m-[1rem] focus:outline-none focus:shadow-md border-gray-300 border-[1px] rounded-md ${errors[field?.name] ? 'border-red-500' : ''}`}
                            type="text"
                            placeholder={field?.placeholder}
                          />
                        )}
                      />
                    </>
                  )
                    : field?.type === 'number' ? (
                      <Controller
                        name={field?.name}
                        control={control}
                        rules={field?.rules}
                        render={({ field }) => (
                          <input
                            {...field}
                            onChange={handleInputChange}
                            className={`w-1/2 p-2 m-[1rem] focus:outline-none focus:shadow-md border-gray-300 border-[1px] rounded-md ${errors[field?.name] ? 'border-red-500' : ''}`}
                            type="number"
                            placeholder={field?.placeholder}
                          />
                        )}
                      />
                    ) : field?.type === 'textarea' ? (
                      <Controller
                        name={field?.name}
                        control={control}
                        rules={field?.rules}
                        render={({ field }) => (
                          <textarea
                            {...field}
                            onChange={handleInputChange}
                            readOnly={user ? true : false}
                            className={`w-1/2 p-2 m-[1rem] focus:outline-none overflow-hidden font-semibold focus:shadow-md border-gray-300 border-[1px] rounded-md`}
                            placeholder={field?.placeholder}
                          ></textarea>
                        )}
                      />
                    ) : null}
                  {errors[field?.name] && <p className='text-red-500'>{errors[field?.name]?.message}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className='flex justify-center items-center pb-[2rem]'>
          <div className="flex justify-evenly items-center">
            <button
              className='btn-primary dark:text-white border-2 mt-3 border-blue-700 dark:border-[#bf1650] font-bold text-lg p-2 rounded-md text-center w-full max-w-[10rem] dark:hover:bg-[#bf1650] hover:bg-slate-200'
              type='submit'
            >
              Save
            </button>
            <button onClick={(e) => {
              e.preventDefault();
              navigate('/')
            }}
              className='btn-primary ml-[2rem] dark:text-white border-2 mt-3 border-blue-700 dark:border-[#bf1650] font-bold text-lg p-2 rounded-md text-center w-[22rem] dark:hover:bg-[#bf1650] hover:bg-slate-200'
              type='button'
            >
              Go Back
            </button>
            <button onClick={() => reset({
              email: user?.email || '',
              name: user?.name || '',
              age: user?.age || '',
              gender: user?.gender || '',
              dob: user?.dob || '',
              address: user?.address || '',
              children: user?.children || '',
              program: user?.program || '',
            })} type='button' className='btn-primary ml-[2rem] dark:text-white border-2 mt-3 border-blue-700 dark:border-[#bf1650] font-bold text-lg p-2 rounded-md text-center w-full max-w-[10rem] dark:hover:bg-[#bf1650] hover:bg-slate-200'>Reset</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;