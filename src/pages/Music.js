import { Box, Image } from "@chakra-ui/react";

export default function Music({ single, artist, cover }) {
  return (
    <>
      <Box>
        <Image w="300px" h="300px" src={cover} alt={`${single} cover`} />
        <Box>
          <Box>{single}</Box>
          <Box>{artist}</Box>
        </Box>
      </Box>
    </>
  );
}
