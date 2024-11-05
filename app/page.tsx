'use client'

import Image from 'next/image'
import GitalkComments from './components/GitalkComments'
import { useState, useEffect } from 'react'
import PostInfo from './components/posts/PostInfo'
import { supabase } from '@/lib/supabase'
// import* as fs from 'fs'
// import path from 'path'

// interface Post {
//   id: number;
//   name: string;
//   author: string;
//   title: string;
//   desc: string;
//   pictureUrl?: string;
//   tags: string[];
//   status: string[];
//   readtime: number;
// }
export default function Home() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('./db/stories.json')
  //     console.log(response)
  //     const jsonData = await response.json()
  //     setData(jsonData)
  //   }
  //   fetchData()
  // }, [])
  
  // const filePath = path.join(process.cwd(), 'app/db', 'stories.json');
  // const jsonData = fs.readFileSync(filePath, 'utf-8');
  // const data = JSON.parse(jsonData);

  const setNewView = async () => {
    const { data, error } = await supabase
      .from("views")
      .insert({
        name: 'random test name'
      })
    if (data) console.log(data)
    if (error) console.log(error)
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css"></link>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>评论(欢迎一切批评，建议和意见):</h1>
        <div id="gitalk-container"></div>
        <GitalkComments title='comments'/>
      </main>
    </div>
  );
}
