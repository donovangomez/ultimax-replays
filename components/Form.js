import React from "react";
import PlayerOneCharacter from "./PlayerOneCharacter";
import PlayerTwoCharacter from "./PlayerTwoCharacter";
import PlayerOneInput from "./PlayerOneInput";
import PlayerTwoInput from "./PlayerTwoInput";
import { Flex, Button } from "@chakra-ui/react";

export default function Form({
  characterOne,
  characterTwo,
  setCharacterOne,
  setCharacterTwo,
  playerOne,
  setPlayerOne,
  playerTwo,
  setPlayerTwo,
  characterSearchHandler,
  filterCharacterMatches,
  image,
  setImage,
  options,
  setOptions,
}) {
  return (
    <form>
      <h2>This is a form thing yo</h2>
      <Flex>
        <PlayerOneCharacter
          characterOne={characterOne}
          setCharacterOne={setCharacterOne}
          image={image}
          setImage={setImage}
          options={options}
          setOptions={setOptions}
        />
        <PlayerTwoCharacter
          characterTwo={characterTwo}
          setCharacterTwo={setCharacterTwo}
        />
      </Flex>
      <Flex>
        <PlayerOneInput playerOne={playerOne} setPlayerOne={setPlayerOne} />
        <PlayerTwoInput playerTwo={playerTwo} setPlayerTwo={setPlayerTwo} />
      </Flex>
      <Button type="submit" onClick={characterSearchHandler}>
        Search
      </Button>
    </form>
  );
}
