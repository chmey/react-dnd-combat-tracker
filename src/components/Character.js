import { Button, TextField, TableRow, TableCell, Typography } from '@material-ui/core';
import { useState } from 'react';
import { rollDice } from '../util/dice';



const Character = ({char, idx, updateCharacter}) => {
    const [isVisNameField, setisVisNameField] = useState(false);
    const [isVisHPField, setIsVisHPField] = useState(false);
    const [isVisMaxHPField, setIsVisMaxHPField] = useState(false);
    const [isVisACField, setIsVisACField] = useState(false);
    const [isVisIniField, setisVisIniField] = useState(false);

    const [changedChar, setChangedChar] = useState(char);


    const handleChange = () => {
        setisVisNameField(false);
        setIsVisHPField(false);
        setIsVisMaxHPField(false);
        setIsVisACField(false);
        setisVisIniField(false);
        updateCharacter(changedChar);
    }

    const rollInitiative = () => {
        const result = rollDice(20);
        changedChar.initiative = result;
        updateCharacter(changedChar);
    }

    const updateHP = (val) => {
        if (val < 0)
            // if negative value entered:
            // assume to reduce hp by damage taken
            setChangedChar({...changedChar, hp: changedChar.hp+parseInt(val)});
        else
            setChangedChar({...changedChar, hp: val});
    }


    return (
        <TableRow key={`char-${idx}`}>
            <TableCell component="th" scope="row">
            {
                    isVisNameField ?
                    <TextField
                        onBlur={e => {setChangedChar({...changedChar, name: e.target.value}); handleChange()}}
                        placeholder="Name"
                        defaultValue={changedChar.name}
                        autoFocus
                    />
                    : <Typography onClick={_ => setisVisNameField(true)} variant="inherit">{changedChar.name ? changedChar.name : "???"}</Typography>
                
                }
            </TableCell>
            <TableCell align="right">
                {
                    isVisHPField ?
                    <TextField
                        onBlur={e => {updateHP(e.target.value); handleChange()}}
                        type="number"
                        placeholder="Current HP"
                        defaultValue={changedChar.hp}
                        autoFocus
                    />
                    : <Typography onClick={_ => setIsVisHPField(true)} variant="inherit">{changedChar.hp ? changedChar.hp : "???"}</Typography>
                
                }
            </TableCell>
            <TableCell align="right">
                {
                    isVisMaxHPField ?
                    <TextField
                        onBlur={e => {setChangedChar({...changedChar, max_hp: parseInt(e.target.value)}); handleChange()}}
                        type="number"
                        placeholder="MAX HP"
                        defaultValue={changedChar.max_hp}
                        autoFocus
                    />
                    : <Typography onClick={_ => setIsVisMaxHPField(true)} variant="inherit">{changedChar.max_hp ? changedChar.max_hp : "???"}</Typography>
                
                }
            </TableCell>
            <TableCell align="right">
                {
                    isVisACField ?
                    <TextField
                        onBlur={e => {setChangedChar({...changedChar, ac: parseInt(e.target.value)}); handleChange()}}
                        type="number"
                        placeholder="AC"
                        defaultValue={changedChar.ac}
                        autoFocus
                    />
                    : <Typography onClick={_ => setIsVisACField(true)} variant="inherit">{changedChar.ac ? changedChar.ac : "???"}</Typography>
                
                }
            </TableCell>
            <TableCell align="right">
                {
                    changedChar.initiative ? 
                    isVisIniField ?
                        <TextField
                            onBlur={e => {setChangedChar({...changedChar, initiative: parseInt(e.target.value)}); handleChange()}}
                            type="number"
                            placeholder="INI"
                            defaultValue={changedChar.initiative}
                            autoFocus
                        />
                        : <Typography onClick={_ => setisVisIniField(true)} variant="inherit">{changedChar.initiative}</Typography>
                    : <Button variant="contained" onClick={_ => rollInitiative()} color="primary">Roll</Button>}
                </TableCell>
        </TableRow>
    )
};

export default Character;