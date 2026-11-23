import { Card, CardActionArea, CardContent } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import useGridItems from '../hooks/gridItems';
import useItemAudio from '../hooks/useItemAudio';
import { renderGridItemIcon } from '../utils/renderGridItem';

export default function OptionsGrid() {
  const searchParams = useSearchParams();
  const mode = searchParams[0].get('mode') || '';
  const items = useGridItems(mode);
  const { playItem } = useItemAudio();

  return (
    <div className="row g-1">
      {items.map((item) => (
        <div key={item.id} className="col-4">
          <Card elevation={0}>
            <CardActionArea onClick={() => playItem(item)}>
              <CardContent>{renderGridItemIcon(item.image)}</CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  );
}
