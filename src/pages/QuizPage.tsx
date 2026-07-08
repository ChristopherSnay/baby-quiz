import { Box, Button } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import QuizGroup from '../components/QuizGroup';
import { useQuizItems } from '../hooks/quizItems';
import useTextToSpeech from '../hooks/textToSpeech';

export default function QuizPage() {
  const searchParams = useSearchParams();
  const mode = searchParams[0].get('mode') || '';
  const { items, nextGroup } = useQuizItems(mode);
  const { speak } = useTextToSpeech();

  const handleItemClick = (itemName: string) => {
    speak(itemName);
  };

  const handleNextGroup = () => {
    nextGroup(4);
  };

  // useEffect removed - nextGroup is now called automatically in useQuizItems

  if (items.length === 0) {
    return <p>No items found for mode: {mode}</p>;
  }

  // max height should be the view height and the items should be centered vertically and horizontally
  // it should not scroll. the cards will change size depending on the page height
  return (
    <Box>
      <h1 className="mt-4">Quiz Page</h1>
      <p>Mode: {mode}</p>
      <QuizGroup
        items={items}
        mode={mode}
        onItemClick={(itemId) => {
          const item = items.find((i) => i.id === itemId);
          if (item) {
            handleItemClick(item.name);
          }
        }}
      />

      <Button variant="contained" onClick={handleNextGroup} className="mt-4">
        Next Group
      </Button>
    </Box>
  );
}
