import React, { useEffect } from "react";
import { Select, Flex, Text } from "@chakra-ui/react";
import { supabase } from "../utils/client";

export default function PlayerTwoCharacter({
  characterTwo,
  setCharacterTwo,
  options,
  setOptions,
  image,
  setImage,
}) {
  const fetchOptions = async () => {
    let { data: characters, error } = await supabase
      .from("characters")
      .select("*");
    setOptions(characters);
    console.log(characters);
  };

  useEffect(() => {
    fetchOptions();
  }, []);
  return (
    <>
      <Select
        onChange={(e) => setCharacterTwo(e.target.value)}
        placeholder="Select character"
      >
        {options.map((option) => (
          <option value={option.first_name}>
            {option.first_name} {option.last_name}
          </option>
        ))}
      </Select>
      {characterTwo}
    </>
  );
}
