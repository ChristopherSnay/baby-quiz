import { Button, Typography } from '@mui/material';

export default function ErrorPage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center container">
      <Typography variant="h4" className="mt-4">
        Error. Page not found.
      </Typography>
      <Button variant="contained" href="/">
        Go Home
      </Button>
    </div>
  );
}
