import React from "react";
import PlayerOneCharacter from "./PlayerOneCharacter";
import PlayerTwoCharacter from "./PlayerTwoCharacter";
import PlayerOneInput from "./PlayerOneInput";
import PlayerTwoInput from "./PlayerTwoInput";
import { Flex } from "@chakra-ui/react";

export default function Form() {
  return (
    <form>
      <h2>This is a form thing yo</h2>
      <Flex>
        <PlayerOneCharacter />
        <PlayerTwoCharacter />
      </Flex>
      <Flex>
        <PlayerOneInput />
        <PlayerTwoInput />
      </Flex>
    </form>
  );
}
