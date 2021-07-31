import { Grid, Button, TextField } from "@material-ui/core";
import { useState } from "react";
const AddCharForm = ({addCharacter}) => {

    const [newChar, setNewChar] = useState({});

    return (
        <form noValidate autoComplete="off" onSubmit={_ => addCharacter(newChar)}>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <TextField
                    placeholder="Name"
                    onChange={e => setNewChar({...newChar, name: e.target.value})}
                    autoFocus
                    />
                </Grid>
                <Grid item xs={2}>
                <TextField
                type="number"
                placeholder="Current HP"
                onChange={e => setNewChar({...newChar, hp: parseInt(e.target.value)})}
                />

                </Grid>
               
                <Grid item xs={2}>
                    <TextField
                    type="number"
                    placeholder="MAX HP"
                    onChange={e => setNewChar({...newChar, max_hp: parseInt(e.target.value)})}
                    />
                </Grid>
                
                <Grid item xs={2}>

                <TextField
                type="number"
                placeholder="AC"
                onChange={e => setNewChar({...newChar, ac: parseInt(e.target.value)})}
                />
                </Grid>
                
                <Grid item xs={2}>
                <TextField
                type="number"
                placeholder="Initiative"
                onChange={e => setNewChar({...newChar, initiative: parseInt(e.target.value)})}
                />

                </Grid>
                
                <Grid item xs={2}>
                <Button type="submit" size="small" variant="contained" color="primary">Add Character</Button>

                </Grid>
                
            </Grid>
        </form>
    )
};

export default AddCharForm;