import MuiGrid, {   Grid2Props  as MuiGridProps} from '@mui/material/Grid2';

export const Grid = ({children, ...props}: MuiGridProps) => {
  return <MuiGrid {...props}>{children}</MuiGrid>
} 
