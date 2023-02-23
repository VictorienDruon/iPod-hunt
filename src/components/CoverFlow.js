import { useState } from "react";
import { Box, Button, Center, Stack } from "@chakra-ui/react";
import {musicsList} from "utils/musicsList.js";
import Cover from "./Cover.js"

export default function CoverFlow() {
  const [musics, setMusics] = useState(musicsList);
  return <Cover.Selected details={musics[0]}></Cover.Selected>;
}
