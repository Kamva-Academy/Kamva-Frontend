import { createTheme } from '@mui/material';
import palette from '../themeOptions/pallete';
import typography from '../themeOptions/typography';

const RTLMuiTheme = createTheme({
  direction: 'rtl',
  palette,
  typography,
  shape: {
    borderRadius: 8,
  },
});

export default RTLMuiTheme;