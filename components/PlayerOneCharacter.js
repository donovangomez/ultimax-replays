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
        {/* <option value="Aigis">Aigis</option>
        <option value="Akihiko">Akihiko</option>
        <option value="Elizabeth">Elizabeth</option>
        <option value="Junpei">Junpei</option>
        <option value="Kanji">Kanji</option>
        <option value="Ken Amada">Ken</option>
        <option value="Labrys">Labrys</option>
        <option value="Margaret">Margaret</option>
        <option value="Marie">Marie</option>
        <option value="Mitsuru">Mitsuru</option>
        <option value="Naoto">Naoto</option>
        <option value="Rise">Rise</option>
        <option value="Shadow Labrys">Shadow Labrys</option>
        <option value="Sho">Sho</option>
        <option value="Minazuki">MINAZUKI</option>
        <option value="Teddie">Teddie</option>
        <option value="Yosuke">Yosuke</option>
        <option value="Yu Narukami" image="../assets/characters/Yu_Icon.png">
          Yu
        </option>
        <option value="Yukari">Yukari</option>
        <option value="Yukiko">Yukiko</option> */}
      </Select>

      {characterOne}
    </>
  );
}
