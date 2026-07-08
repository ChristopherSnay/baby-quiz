const isDev = import.meta.env.MODE === 'development';

const imageUrl = (imageName: string) => {
  return isDev ? `/${imageName}` : `/baby-quiz/${imageName}`;
};

export const renderGridItemIcon = (image: string, mode: string): React.ReactNode => {
  switch (mode.toLowerCase()) {
    case 'colors':
      return (
        <div className="ratio ratio-1x1 w-100" style={{ backgroundColor: image }}></div>
      );
    case 'animals':
    case 'vehicles':
    case 'trucks':
    case 'cars':
      return <img src={imageUrl(image)} className="w-100" />;
    default:
      return null;
  }
};
