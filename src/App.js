import './App.css';
import CombatList from './components/CombatList';
import { useState } from 'react';
import AddCharForm from './components/AddCharForm';
import { Button, Box, Container } from '@material-ui/core';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
 
  const addCharacter = (char) => {
    setCharacters([...characters, char]);
    setIsFormVisible(false);
  }

  const updateCharacter = (char) => {
    const otherCharacters = characters.filter(el => {
      return el.name !== char.name
    });
    setCharacters([...otherCharacters, char]);
    console.log(characters);
  }

  return (
    <div className="App">
      <Container>
        <Box mt={3}>
          <CombatList updateCharacter={updateCharacter} characters={characters}></CombatList>
        </Box>
        <Box mt={3}>
        {
            isFormVisible ?
            <AddCharForm addCharacter={addCharacter}></AddCharForm>
            : <Button variant="contained" color="primary" onClick={_ => setIsFormVisible(true)}>Add Character</Button>
        }
        </Box>
      </Container>
    </div>
  );
}

export default App;
