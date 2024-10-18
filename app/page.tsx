'use client'
import Image from 'next/image'
import GitalkComments from './components/GitalkComments'


export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css"></link>
      <h1>快乐生活，愉快编码~</h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image src='/assets/images/135.jpg' width={1920} height={1080} style={{ width: 1920, height: "auto" }} alt='beautiful scenery' priority/>
        <h1>评论(欢迎一切批评，建议和意见):</h1>
        <div id="gitalk-container"></div>
        <GitalkComments title='comments'/>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            访问测试站{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              https://opinions-swart.vercel.app/
            </code>
          </li>
          <li>Enjoy developing.</li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://opinions-swart.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            正在开发中...
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://opinions-swart.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            谢谢关注
          </a>
        </div>
      </main>
    </div>
  );
}
