const isDev = import.meta.env.MODE === 'development';

export const getAssetPath = (filename: string): string => {
  return isDev ? `/${filename}` : `/baby-quiz/${filename}`;
};
