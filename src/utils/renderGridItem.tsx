import { getImagePath } from './getAssetPath';

export const renderGridItemIcon = (image: string): React.ReactNode => {
  if (image.startsWith('#')) {
    return <div className="ratio ratio-1x1 w-100" style={{ backgroundColor: image }}></div>;
  }

  return <img src={getImagePath(image)} className="w-100" alt="" />;
};
