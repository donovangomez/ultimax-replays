import styles from "../styles/Home.module.css";
import Form from "../components/Form";
import { supabase } from "../utils/client";
import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import MatchCard from "../components/MatchCard";

export default function Home() {
  const [characterOne, setCharacterOne] = useState("");
  const [characterTwo, setCharacterTwo] = useState("");
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [replays, setReplays] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState("");

  const fetchReplays = async () => {
    let { data: replays, error } = await supabase.from("replays").select("*");
    setReplays(replays);
    console.log("this is the data", replays);
  };

  useEffect(() => {
    fetchReplays();
  }, []);

  // search character function
  const characterSearchHandler = (e) => {
    e.preventDefault();
    console.log("handler worked!");
    searchMatches(characterOne, characterTwo);
    filterCharacterMatches(characterOne);
  };

  const searchMatches = async (characterOne, characterTwo) => {
    console.log(`searching for ${characterOne} vs ${characterTwo}`);
    // replays.filter((replay) => (replay.p1_character = characterOne));
  };

  // filter matches
  const filterCharacterMatches = async (characterOne) => {
    setFilterCharacter(characterOne);
    console.log(filterCharacter);
    const newReplays = replays.filter(
      (replay) => replay.p1_character == characterOne
    );
    setReplays(newReplays);
  };

  return (
    <Flex as="main" minH="100vh" direction="column">
      <Flex flex="1" border="1px" borderColor="gray.600">
        <h2>Hello</h2>
        <Form
          characterOne={characterOne}
          characterTwo={characterTwo}
          setCharacterOne={setCharacterOne}
          setCharacterTwo={setCharacterTwo}
          playerOne={playerOne}
          playerTwo={playerTwo}
          setPlayerOne={setPlayerOne}
          setPlayerTwo={setPlayerTwo}
          characterSearchHandler={characterSearchHandler}
          filterCharacterMatches={filterCharacterMatches}
        />
      </Flex>
      <Flex flex="1">
        <div>
          {filterCharacter}
          <h1>Matches!</h1>
          {replays.map((replay) => (
            <MatchCard
              key={replay.id}
              playerOneCharacter={replay.p1_character}
              playerTwoCharacter={replay.p2_character}
              playerOne={replay.p1_handle}
              playerTwo={replay.p2_handle}
              version={replay.version}
              link={replay.replay_link}
            />
          ))}
        </div>
      </Flex>
    </Flex>
  );
}
