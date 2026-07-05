import { Card, CardActionArea, CardContent } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import useGridItems from '../hooks/gridItems';
import useTextToSpeech from '../hooks/textToSpeech';

export default function OptionsGrid() {
  const searchParams = useSearchParams();
  const mode = searchParams[0].get('mode') || '';
  const items = useGridItems(mode);
  const { speak } = useTextToSpeech();

  const handleItemClick = (itemName: string) => {
    speak(itemName);
  };

  return (
    <div className="row w-100 g-3">
      {items.map((item) => (
        <div key={item.id} className="col-4">
          <Card elevation={0}>
            <CardActionArea onClick={() => handleItemClick(item.name)}>
              <CardContent>{item.icon}</CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  );
}
