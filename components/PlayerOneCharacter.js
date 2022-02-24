import React, { useEffect, useState } from "react";
import { Select, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { supabase } from "../utils/client";

export default function PlayerOneCharacter({
  characterOne,
  setCharacterOne,
  image,
  setImage,
  options,
  setOptions,
}) {
  const fetchOptions = async () => {
    let { data: characters, error } = await supabase
      .from("characters")
      .select("*");
    setOptions(characters);
  };

  useEffect(() => {
    fetchOptions();
    console.log(characterOne);
  }, []);
  return (
    <>
      <Select
        onChange={(e) => setCharacterOne(e.target.value)}
        placeholder="Select character"
      >
        {options.map((option) => (
          <option value={option.first_name} key={option.id}>
            {option.first_name} {option.last_name}
          </option>
        ))}
      </Select>

      {characterOne}
    </>
  );
}
