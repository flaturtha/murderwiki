/* eslint-disable prettier/prettier */
import { authorType } from "~/sanity/schema/author";
import { genreType } from "~/sanity/schema/genre";
import { homeType } from "~/sanity/schema/home";
import { novelType } from "~/sanity/schema/novel";
import { recordType } from "~/sanity/schema/record";
import { trackType } from "~/sanity/schema/track";

export default [
  authorType,
  genreType,
  homeType,
  recordType,
  trackType,
  novelType,
];
