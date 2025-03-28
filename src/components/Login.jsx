import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password });

            if (response.data.success) {
                setToken(response.data.token);
                toast.success('Đăng nhập thành công!',
                    {
                        autoClose: 1500,
                        style: {
                            fontSize: "12px",
                            padding: '8px',
                            minHeight: '30px',
                        },
                        icon: ({ theme, type }) => <span style={{ fontSize: "14px" }}>✅</span>
                    });
            } else {
                toast.error(response.data.message || 'Đăng nhập thất bại. Vui lòng thử lại.',
                    {
                        autoClose: 1500,
                        style: {
                            fontSize: "12px",
                            padding: '8px',
                            minHeight: '30px',
                        },
                        icon: ({ theme, type }) => <span style={{ fontSize: "14px" }}>❌</span>
                    }
                );
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || 'Có lỗi xảy ra. Vui lòng thử lại.', {  
                autoClose: 1500, 
                style: { fontSize: "12px", padding: "8px", minWidth: "200px" },
                icon: ({ theme, type }) => <span style={{ fontSize: "14px" }}>⚠️</span>
            });
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center w-full bg-gray-100'>
            <div className='bg-white shadow-lg rounded-xl px-10 py-8 max-w-md w-full'>
                <h1 className='text-3xl font-bold text-gray-900 mb-6 text-center'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold text-gray-700 mb-2'>Email Address</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none'
                            type='email'
                            placeholder='your@gmail.com'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-sm font-semibold text-gray-700 mb-2'>Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:outline-none'
                            type='password'
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
