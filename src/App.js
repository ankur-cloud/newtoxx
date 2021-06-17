import './App.css';

import CreateNote from './CreateNote';
import Note from './Note';
import { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, Toolbar } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { List, createMuiTheme, ThemeProvider } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { dark } from '@material-ui/core/styles/createPalette';


const useStyles = makeStyles({
  title: {
    justifyContent: 'center',
    display: 'flex',
    width: '100%'

  }
})
const dTheme = createMuiTheme({
  palette: {
    type: 'dark',
  }

})


const App = () => {
  const classes = useStyles();

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((preData) => {
      return [...preData, note]
    });
    console.log(note)
  };

  const onDelete = (id) => {

    setAddItem((preDatas) =>
      preDatas.filter((curData, indx) => {
        return indx !== id;
      })
    );
  }


  return (<>


    <Toolbar className={classes.title} >Todo Lisit
        </Toolbar>
    <Divider />
    <div className='App-header'>
      <Container>
        <ThemeProvider theme={dTheme}>
          <Grid item sm={6} lg={3}>
            <List>

              <CreateNote passNote={addNote} />

              {addItem.map((cvalue, index) => {
                return <Note key={index}
                  id={index}
                  title={cvalue.title}
                  content={cvalue.content}
                  deleteItem={onDelete}
                />
              })
              }
            </List>
          </Grid>
        </ThemeProvider>
      </Container>
    </div>





  </>)
}




export default App;
