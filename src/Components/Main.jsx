/*Import Mui Styles*/
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function Main(props) {
  return (
    <main>
      <Container className='main-first-child'>
        {props.randomNumbers.map((item,index) => {
          return (
            <Box sx={{ p: 2, border: '1px dashed grey' }} key={index}>
              <h2>{item.id}</h2>
              <Button
                onClick={() => {
                  props.deleteRandomNumbers(item.id);
                }}
              >
                X
              </Button>
            </Box>
          );
        })}
      </Container>
      <Container className='main-second-child'>
        <span>
            <h1>{props.instruction}</h1>
        </span>
      </Container>
    </main>
  );
}