/** Impor Mui **/
import Button from '@mui/material/Button';

import ButtonGroup from '@mui/material/ButtonGroup';

export default function Header(props) {
  return (
      <nav className='navbar'>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={props.createSorting}>
                Click To Set Random Numbers
            </Button>
            <Button onClick={props.numbersSorting}>
                Click To Sort Random Numbers
            </Button>
        </ButtonGroup>
      </nav>
  );
}