import {z} from 'zod'

// This is a Zod schema
// https://zod.dev/

// It will validate data at run time
// And generate Types during development
// Giving you both the flexibility of writing GROQ queries
// And the safety of Typescript
// without being limited to the shape of your Sanity Schema
export const novelZ = z.object({
  _id: z.string(),
  title: z.string().nullable(),
  slug: z.string().nullable(),
  likes: z.number(),
  dislikes: z.number(),
  artist: z.string().nullable(),
  tracks: z
    .array(
      z.object({
        _key: z.string(),
        title: z.string().nullable(),
        duration: z.number().nullable(),
      })
    )
    .nullable(),
  // ...being a touch lazy here, these could be more strongly typed
  image: z.any().nullable(),
  content: z.array(z.any()).nullable(),
})

export type NovelDocument = z.infer<typeof novelZ>

export const novelsZ = z.array(novelZ)

export const novelStubZ = z.object({
  _id: z.string(),
  _type: z.string(),
  title: z.string().nullable(),
  slug: z.string().nullable(),
  artist: z.string().nullable(),
  image: z.any().nullable(),
})

export const novelStubsZ = z.array(novelStubZ)

export type NovelStub = z.infer<typeof novelStubZ>
