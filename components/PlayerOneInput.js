import React from "react";
import { Input } from "@chakra-ui/react";

export default function PlayerOneInput({ playerOne, setPlayerOne }) {
  return (
    <div>
      <Input
        placeholder="Handle"
        onChange={(e) => setPlayerOne(e.target.value)}
      />
      {playerOne}
    </div>
  );
}
