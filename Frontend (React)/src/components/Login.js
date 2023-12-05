import React, {useState} from 'react';
import '../App.css';
import axios from 'axios';
import { API_URL } from '../constant/constant';
import { HandleExpires } from '../helper/token';
const Login = () => {
  // Fungsi untuk menangani logika login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(API_URL + 'login', {
        username: username,
        password: password,
      })
      // Handle respons dari backend (misalnya, menyimpan token)
      localStorage.setItem("token", response.data.access_token)
      window.location.href = "/"
    } catch (error) {
      // Handle error dari backend
      console.error('Login gagal:', error.message);
    }
  };

  return (
    <div className="card w-1/5 my-20">
      
    <div className="w-full p-8 bg-white rounded-md shadow-md">

            <div className='mb-3'>
              <h2>Masuk</h2>
              <hr></hr>
            </div>
            <form>
              <div>
                <label className='mr-5' htmlFor='username'>
                  Username
                </label>
                <br />
                <input type="text" name="username" id='username'
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}/>
              </div>
              
              <br />
              
              <div className='mb-70'>
                <label className='mr-5' htmlFor='password'>
                  Password
                </label>
                <br />
                
                <input type="password" name="password" id='password'
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <br />

              <button 
                className="bg-blue-500 text-white py-2 px-7 rounded-md hover:bg-blue-600 transition duration-300"
                type="button" onClick={handleLogin}>
                Login
              </button>
            </form>
            <p className="text-center text-xs">Need an Account? try <a href="/register">Register</a>.</p>
      </div>
    </div>

  );
};

export default Login;
