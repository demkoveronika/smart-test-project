import { CircularProgress } from "@mui/material"

export const Loader = () => (
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
    <CircularProgress color="inherit" />
  </div>
);