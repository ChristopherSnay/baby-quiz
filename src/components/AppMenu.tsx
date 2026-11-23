import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useItemAudio from '../hooks/useItemAudio';
import { useCategories } from '../hooks/useCategories';
import type { Category } from '../models/Category';

export default function AppMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [, setSearchParams] = useSearchParams();
  const { playItem } = useItemAudio();
  const { categories } = useCategories();
  const open = Boolean(anchorEl);

  const handleMenuOpenClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (category: Category) => {
    playItem(category);
    setAnchorEl(null);
    setSearchParams({ mode: category.name });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="contained" size="large" onClick={handleMenuOpenClick}>
        Mode
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {categories.map((category) => (
          <MenuItem key={category.id} onClick={() => handleMenuItemClick(category)}>
            {category.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
