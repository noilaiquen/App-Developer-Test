import Config from 'react-native-config';
import size from '../configs/size';

export const BASE_URL = Config.BASE_URL;
export const API_KEY = Config.API_KEY;

export const STORAGE_KEY = {
  AUTH_TOKEN: 'authToken',
};
export const MOVIE_ITEM_WIDTH = (size.screen.width - size.spacing.lg * 3) / 2;
export const MOVIE_ITEM_HEIGHT = MOVIE_ITEM_WIDTH * 1.8;
