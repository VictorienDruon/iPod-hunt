import { Inter } from "@next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import CoverFlow from "../components/CoverFlow.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ChakraProvider>
      <CoverFlow></CoverFlow>
    </ChakraProvider>
  );
}
