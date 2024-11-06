'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Head = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };

  const [showLanguages, setShowLanguages] = useState(false)
  const toggleLanguages = () => {
    setShowLanguages(!showLanguages)
  }

  const [showOthers, setShowOthers] = useState(false)

  const toggleOthers = () => {
    setShowOthers(!showOthers)
  }
  useEffect(() => {
    if (showLanguages) {
      document.addEventListener('click', toggleLanguages, false)
    }
    return () => {
      document.removeEventListener('click', toggleLanguages, false)
  }
}, [showLanguages])


useEffect(() => {
  if (showOthers) {
    document.addEventListener('click', toggleOthers, false)
  }
  return () => {
    document.removeEventListener('click', toggleOthers, false)
}
}, [showOthers])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode)
  }

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark)
  }, [])

  return(
    <div>
      <nav className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
        <div className="max-w-7xl container mx-auto px-4 md:flex items-center gap-6 justify-between">
          <div className="flex items-center justify-between md:w-auto w-full">
            <Link href="#" className="py-5 px-2 text-white flex-1 font-bold">
              <Image height={50} width={50} src="/assets/images/logo.jpg" alt="logo image" style={{ width: 50, height: 50 }} priority/>
            </Link>
            <div className="md:hidden flex items-center">
              <button type="button" className="mobile-menu-button" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
              </button>
            </div>
          </div>
          <div className={`md:flex md:flex-row flex-col items-center justify-start md:space-x-1 pb-3 md:pb-0 navigation-menu ${isOpen ? 'block':'hidden'}`}>
            <Link href="#" className="py-2 px-3 block hover:bg-gray-200 dark:hover:bg-gray-700 rounded">首页</Link>
            <Link href="#" className="py-2 px-3 block hover:bg-gray-200 dark:hover:bg-gray-700 rounded">文章</Link>
            <Link href="#" className="py-2 px-3 block hover:bg-gray-200 dark:hover:bg-gray-700 rounded">新闻</Link>
            <Link href="#" className="py-2 px-3 block hover:bg-gray-200 dark:hover:bg-gray-700 rounded">联系我们</Link>
            <Link href="/login" className="py-2 px-3 block hover:bg-gray-200 dark:hover:bg-gray-700 rounded">登录</Link>
            <div className="relative">
              <button type="button" className="dropdown-toggle py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded flex items-center gap-2" onClick={toggleOthers}>
                <span className="pointer-events-none select-none">其它</span>
                <svg className="w-3 h-3 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div className={`dropdown-menu absolute hover:bg-gray-200 dark:hover:bg-gray-700 rounded shadow-md mt-2 rounded-b-lg pb-2 w-48 ${showOthers ? 'block':'hidden'}`}>
                <Link href="#" className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">公告</Link>
                <Link href="#" className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">工具</Link>
                <Link href="#" className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">游戏</Link>
              </div>
            </div>
            <div className="relative">
              <button type="button" className="dropdown-toggle py-2 px-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded flex items-center gap-2" onClick={toggleLanguages}>
                <span className="pointer-events-none select-none">语言选择</span>
                <svg className="w-3 h-3 pointer-events-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div className={`dropdown-menu absolute hover:bg-gray-200 dark:hover:bg-gray-700 rounded shadow-md mt-2 rounded-b-lg pb-2 w-48 ${showLanguages ? 'block':'hidden'}`}>
                <Link href="#" className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">中文</Link>
                <Link href="#" className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">英文</Link>
                <Link href="#" className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">韩国语</Link>
                <Link href="#" className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">法语</Link>
                <Link href="#" className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">西班牙语</Link>
                <Link href="#" className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">阿拉伯语</Link>
                <Link href="#" className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">日语</Link>
                <Link href="#" className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">俄语</Link>
                <Link href="#" className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">德语</Link>
                <Link href="#" className="block px-6 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">葡萄牙语</Link>
              </div>
            </div>
            <button onClick={toggleDarkMode} className="px-2 py-1 rounded focus:outline-none">
              {darkMode ? 
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-sky-400/20"></path>
                  <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-sky-500"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-sky-500"></path>
                </svg> 
              : 
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-sky-400/20 stroke-sky-500"></path>
                  <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-sky-500"></path>
                  </svg>
              }
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Head