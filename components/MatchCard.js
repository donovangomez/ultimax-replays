import React, { useEffect } from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { supabase } from "../utils/client";

export default function matchCard({
  key,
  playerOneCharacter,
  playerTwoCharacter,
  playerOne,
  playerTwo,
  version,
  link,
  image,
  setImage,
}) {
  const fetchOptions = async () => {
    let { data: characters, error } = await supabase
      .from("characters")
      .select("*");
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  return (
    <Flex border="2px" key={key}>
      {image}
      <Box>
        <h2>{playerOne}</h2>
        <h2>{playerOneCharacter}</h2>
      </Box>
      <span>Vs.</span>
      <Box>
        <h2>{playerTwo}</h2>
        <h2>{playerTwoCharacter}</h2>
      </Box>
      <Box>
        <p>{version}</p>
        <a href={link} target="_blank">
          Watch
        </a>
      </Box>
    </Flex>
  );
}
