import { Card, CardActionArea, CardContent } from '@mui/material';
import type { GridItem } from '../models/GridItem';
import { renderGridItemIcon } from '../utils/renderGridItem';

export default function QuizGroup(props: Readonly<QuizGroupProps>) {
  const { items, mode, onItemClick } = props;

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center flex-grow-1"
      style={{ minHeight: 0 }}
    >
      <div className="row g-1 w-100" style={{ height: '100%' }}>
        {items.map((item) => (
          <div className="col-6" style={{ height: '50%' }} key={item.id}>
            <Card elevation={0} sx={{ height: '100%' }}>
              <CardActionArea
                sx={{ height: '100%' }}
                onClick={() => onItemClick?.(item.id)}
              >
                <CardContent sx={{ height: '100%', display: 'flex', p: 1 }}>
                  {renderGridItemIcon(item.image, mode)}
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

interface QuizGroupProps {
  items: GridItem[];
  mode: string;
  onItemClick?: (itemId: number) => void;
}
