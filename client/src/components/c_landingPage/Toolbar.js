import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';

// const useTheme = makeStyles((theme) => ({
//   header: {
//     color: theme.main,
//   },
// }));

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  backgroundColor: '#ffc400',
  height: 64,
  [theme.breakpoints.up('sm')]: {
    height: 70,
  },
}));

export default Toolbar;
