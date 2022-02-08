import styles from "../styles/Home.module.css";
import Form from "../components/Form";
import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Home() {
  const [characterOne, setCharacterOne] = useState("");
  const [characterTwo, setCharacterTwo] = useState("");
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  // search character function
  const characterSearchHandler = (e) => {
    console.log("handler worked!");
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
        />
      </Flex>
      <Flex flex="1">
        <h2>Hello Bish</h2>
      </Flex>
    </Flex>
  );
}
