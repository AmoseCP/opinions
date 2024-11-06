'use client'

import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return(
    <footer className="row-start-3 flex gap-2 flex-wrap items-center justify-center">
      Copyright © 2024 <Link href='https://opinions-swart.vercel.app/'>Opinions</Link>
    </footer>
  )
}

export default Footer