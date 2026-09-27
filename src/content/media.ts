// The verified media library: videos, channels, podcasts, sites, books and apps.
// Every URL here is checked by scripts/check-links.ts; every YouTube video is verified through
// oEmbed and its title/channel recorded exactly as YouTube returns them.

import type { MediaItem } from "./types.ts";

export const MEDIA: readonly MediaItem[] = [];
