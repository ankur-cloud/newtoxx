import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import { Box, Grid, Toolbar, Typography, Divider, createMuiTheme, ThemeProvider } from '@material-ui/core';




const Note = (props) => {

    const deleteNote = () => {
        props.deleteItem(props.id);
    }




    return (<>

        <Grid>

            <div className="note">
                <Typography variant='h8'>
                    <Box textAlign="center" >
                        {(props.id + 1)}
                    </Box>
                </Typography>
                <Divider />

                <Typography>
                    <Box textAlign="center" fontWeight='550'>
                        {props.title}
                    </Box>
                    <Box textAlign='center'>{props.content}
                        <Button onClick={deleteNote} style={{ align: 'right', display: 'flex' }}>
                            <DeleteOutlineIcon className="deleteIcon" />
                        </Button></Box></Typography>

            </div>
        </Grid>

    </>
    )

}

export default Note;