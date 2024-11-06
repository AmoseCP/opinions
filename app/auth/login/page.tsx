'use client'

import { supabase } from '@/lib/supabase'
import { useState } from 'react'

export default function Login() {
  const [data, setData] = useState<{email: string, password: string}>({email: '', password: ''})
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>(undefined)
  const login = async () => {
    const { email, password } = data
    if (email.length < 4 || password.length < 4) return alert("Please enter a valid email address & password length must be at least 4 characters.")
    try {
      setLoading(true);
      let { data, error } = await supabase
        .auth
        .signUp({
          email,
          password
      })

      if (error) return setError('Sorry impossible to login.');

      if (data) {
        const { user } = data
        const { access_token, refresh_token } = data.session
        await supabase.auth.setSession({
          access_token,
          refresh_token
        })
      }

    } catch (error:any) {
      throw new Error(error)
    } finally {
      setLoading(false)
    }
  }

  const signUp = async () => {
    try {
      let { data, error } = await supabase
        .auth
        .signUp({
          email: 'someonetest@email.com',
          password: 'GRPAAQGIEsssrZMCOuie'
      })
      if (data) {
        console.log(data)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }

  return <div className="bg-gray-100 w-full h-screen py-8">
      <div className="bg-white rounded-lg shadow-sm border w-[300px] mx-auto px-6 py-4 grid gap-4">
        <div className='grid'>
          <label>E-mail</label>
          <input
            type='email'
            name='email'
            placeholder='youremail@example.com'
            value={data?.email}
            onChange={handleChange}
          />
        </div>
        <div className='grid'>
          <label>Password</label>
          <input
            type='password'
            name='password'
            placeholder='password'
            value={data?.password}
            onChange={handleChange}
          />
        </div>
        {error && <div className="notification error">
          {error}
        </div>}
        <div>
          <button onClick={login} >Login</button>
        </div>
      </div>
    </div>
}