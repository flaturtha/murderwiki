import {Link} from '@remix-run/react'
import React from 'react'

import {NovelCover} from '~/components/NovelCover'
import type {NovelStub} from '~/types/novel'

type NovelsProps = {
  novels: NovelStub[]
}

export function Novels(props: NovelsProps) {
  const {novels = []} = props

  return novels.length > 0 ? (
    <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-12 lg:grid-cols-4">
      {novels.map((novel) => (
        <li key={novel._id} className="group relative flex flex-col">
          <div className="relative overflow-hidden transition-all duration-200 ease-in-out group-hover:scale-105 group-hover:opacity-90">
            <div className="absolute z-0 h-48 w-[200%] translate-x-20 translate-y-20 -rotate-45 bg-gradient-to-b from-white to-transparent opacity-25 mix-blend-overlay transition-transform duration-500 ease-in-out group-hover:translate-x-10 group-hover:translate-y-10 group-hover:opacity-75" />
            <NovelCover image={novel.image} title={novel.title} />
          </div>
          <div className="flex flex-col">
            {novel?.slug ? (
              <Link
                prefetch="intent"
                to={novel?.slug}
                className="text-bold pt-4 text-xl font-bold tracking-tighter"
              >
                {novel.title}
                {/* Makes this entire block clickable */}
                <span className="absolute inset-0" />
              </Link>
            ) : (
              <span className="pt-4 text-xl font-bold tracking-tighter">
                {novel.title}
              </span>
            )}
            {novel?.author ? (
              <span className="bg-black font-bold leading-none tracking-tighter text-white">
                {novel.author}
              </span>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <div className="prose prose-xl mx-auto bg-green-50 p-4">
      <p>No novels found, yet!</p>
      <p>
        <a href="/studio">Log in to your Sanity Studio</a> and start creating
        content!
      </p>
    </div>
  )
}
