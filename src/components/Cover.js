import { Box, Image } from "@chakra-ui/react";

const Cover = {
    Default: function({details}) {
        console.log(details)
        return (<Box>
            <Image src={details.cover} alt={`${details.single} cover`} ></Image>
        </Box>)
    },
    Selected: function({details}) {
        return (<Cover.Default details={details} />)
    },
    Left: function({details}) {
        return (<Cover.Default details={details} />) 
    },
    Right: function({details}) {
        return (<Cover.Default details={details} />) 
    },
}

export default Cover;