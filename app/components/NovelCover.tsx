import type {SanityImageObjectStub} from '@sanity/asset-utils'
import urlBuilder from '@sanity/image-url'
import React from 'react'

import {projectDetails} from '~/sanity/projectDetails'

type NovelCoverProps = {
  title?: string | null
  image?: SanityImageObjectStub
}

export function NovelCover(props: NovelCoverProps) {
  const {title, image} = props

  return (
    <div className="aspect-auto bg-gray-50">
      {image ? (
        <img
          className="h-auto w-full object-cover drop-shadow-lg"
          src={urlBuilder(projectDetails())
            // @ts-ignore
            .image(image.asset._ref)
            .height(2100)
            .width(1275)
            .fit('max')
            .auto('format')
            .url()}
          alt={String(title) ?? ``}
          loading="lazy"
        />
      ) : (
        <div className="flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500">
          {title ?? `Missing Novel art`}
        </div>
      )}
    </div>
  )
}
