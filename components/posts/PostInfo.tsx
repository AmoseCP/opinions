'use client'

import React from 'react'
import Link from 'next/link'

interface Post {
  id: number;
  name: string;
  author: string;
  title: string;
  desc: string;
  picture?: string;
  tags: string[];
  status: string[];
  readtime: string;
}

type PostProps = {
  post: Post
}

const PostInfo: React.FC<PostProps> = ({ post }) => {
  return(
    <div className="row-start-3 flex gap-2 flex-wrap items-center justify-center">
      <img src={post.picture} alt='image'/>
      <span>{post.title}</span>
      <span>{post.author}</span>
      <span>{post.desc}</span>
    </div>
  )
}

export default PostInfo