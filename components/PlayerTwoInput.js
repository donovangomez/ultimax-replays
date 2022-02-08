import React from "react";
import { Input } from "@chakra-ui/react";

export default function PlayerTwoInput({ playerTwo, setPlayerTwo }) {
  return (
    <div>
      <Input
        placeholder="Handle"
        onChange={(e) => setPlayerTwo(e.target.value)}
      />
      {playerTwo}
    </div>
  );
}
