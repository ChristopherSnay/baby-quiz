const isDev = import.meta.env.MODE === 'development';
const imagesPath = 'images';
const soundsPath = 'sounds';
const categoriesPath = 'categories';

export const getAssetPath = (filename: string): string => {
  return isDev ? `/${filename}` : `/baby-quiz/${filename}`;
};

export const getImagePath = (image: string): string => getAssetPath(`${imagesPath}/${image}`);

export const getSoundPath = (sound: string): string => getAssetPath(`${soundsPath}/${sound}`);

export const getCategoriesPath = (filename: string): string =>
  getAssetPath(`${categoriesPath}/${filename}`);
