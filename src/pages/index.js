import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { ChakraProvider } from "@chakra-ui/react";
import Musics from "./Musics.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ChakraProvider>
      <Musics></Musics>
    </ChakraProvider>
  );
}
