import { TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import Character from './Character';

const CombatList = ({characters, updateCharacter}) => {

    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">HP</TableCell>
                        <TableCell align="right">MAX HP</TableCell>
                        <TableCell align="right">AC</TableCell>
                        <TableCell align="right">INI</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    characters ? 
                    characters.map((char, idx) => {
                    return <Character updateCharacter={updateCharacter} char={char} idx={idx} />
                    })
                    : null
                }
                </TableBody>
            </Table>
        </TableContainer>
    )
}


export default CombatList;