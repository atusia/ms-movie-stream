export interface IMovie {
  id?: number;
  title: string;
  year?: number;
  genre?: Array<string>;
  rating?: number;
  director?: string;
  actors?: Array<string>;
  plot: string;
  poster?: string;
  trailer?: string;
  runtime?: number;
  awards?: string;
  country?: string;
  language?: string;
  production?: string;
  website?: string;
}
