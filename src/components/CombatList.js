import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import Character from './Character';

const CombatList = ({characters, updateCharacter, removeCharacter, addCharacter}) => {

    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">HP (+TEMP)</TableCell>
                        <TableCell align="right">MAX HP</TableCell>
                        <TableCell align="right">AC</TableCell>
                        <TableCell align="right">Spellslots</TableCell>
                        <TableCell align="right">Concentrated</TableCell>
                        <TableCell align="right">INI</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    characters ? 
                    characters.map(char => {
                    return <Character key={`char-${char.id}`} addCharacter={addCharacter} removeCharacter={removeCharacter} updateCharacter={updateCharacter} char={char} />
                    })
                    : null
                }
                </TableBody>
            </Table>
        </TableContainer>
    )
}


export default CombatList;