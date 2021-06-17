

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
// import './App.css';
import { Box, Container, Divider, FormControl, Grid, makeStyles, } from '@material-ui/core/';


const useStyles = makeStyles({
    grid: {
        justifyContent: 'center',
        position: 'absolute',
        display: 'block',
        width: '100%'

    }
})




const CreateNote = (props) => {

    const classes = useStyles();

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const [expand, serExpand] = useState(false);

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setNote((preD) => {
            return {
                ...preD, [name]: value,
            };
        }
        )
        console.log(note);
    }

    const addEvent = () => {
        if (!note.title) { return null } else {

            props.passNote(note);

            setNote({
                title: "",
                content: "",
            });
        }
    }

    const expandIt = () => {
        serExpand(true);
    }

    const revExpand = () => {
        serExpand(false);

    }

    return (<>
        <Grid items className='grid'>
            <Box textAlign="center">


                <FormControl>
                    {expand ?
                        <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder="Title" autoComplete="off" onDoubleClick={revExpand} />
                        : '🐻'}
                    <br />

                    <Divider />

                    <textarea rows='2' name="content" value={note.content} onChange={inputEvent} placeholder="write additional note" onClick={expandIt}></textarea>

                    {
                        expand ?
                            <Button onClick={addEvent}  >


                                <AddIcon />
                            </Button> : null}
                </FormControl>
            </Box>

        </Grid>


    </>
    )

}

export default CreateNote;