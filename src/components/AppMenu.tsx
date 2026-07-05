import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useTextToSpeech from '../hooks/textToSpeech';

export default function AppMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [_searchParams, setSearchParams] = useSearchParams();
  const { speak } = useTextToSpeech();
  const open = Boolean(anchorEl);

  const handleMenuOpenClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>) => {
    speak(event.currentTarget.textContent || '');
    setAnchorEl(null);
    setSearchParams({ mode: event.currentTarget.textContent || '' });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleMenuOpenClick}>Mode</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={(e) => handleMenuItemClick(e)}>Vehicles</MenuItem>
        <MenuItem onClick={(e) => handleMenuItemClick(e)}>Colors</MenuItem>
        <MenuItem onClick={(e) => handleMenuItemClick(e)}>Animals</MenuItem>
      </Menu>
    </>
  );
}
