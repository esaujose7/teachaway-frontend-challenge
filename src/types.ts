export interface ImgurResponse<T> {
  data: T; //T|Error;
  status: number;
  success: boolean;
}

export interface IGalleryItem {
  id: string;
  title: string;
  description: string;
  datetime: number;
  account_url?: string;
  account_id?: number;
  ups: number;
  downs: number;
  score: number;
  is_album: boolean;
  views: number;
  link: string;
  vote?: string;
  favorite: boolean;
  nsfw?: boolean;
  comment_count: number;
  topic: string;
  topic_id: number;
}

export interface IGalleryAlbum extends IGalleryItem {
  cover: string;
  cover_width: number;
  cover_height: number;
  privacy: string;
  layout: string;
  images_count: number;
  images: Array<Image>;
}

export interface IGalleryImage extends IGalleryItem {
  type: string;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  bandwidth: number;
  deletehash?: string;
  gifv?: string;
  mp4?: string;
  webm?: string;
  looping?: boolean;
  section: string;
}

export interface Image {
  id: string;
  title: string;
  description: string;
  datetime: number;
  type: string;
  animated: boolean;
  width: number;
  height: number;
  size: number;
  views: number;
  bandwidth: number;
  deletehash?: string;
  name?: string;
  section: string;
  link: string;
  gifv?: string;
  mp4?: string;
  webm?: string;
  looping?: boolean;
  vote?: string;
  favorite: boolean;
  nsfw?: boolean;
  account_url?: string;
  account_id?: number;
}

export enum ImgurGallerySections {
  HOT = 'hot',
  TOP = 'top',
  USER = 'user'
};

export enum ImgurGallerySortValues {
  VIRAL = 'viral',
  TOP = 'top',
  TIME = 'time',
  RISING = 'rising'
};

export enum ImgurGalleryWindowOfTime {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
  ALL = 'all'
};
