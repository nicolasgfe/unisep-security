import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            '.footer': {
                width: '300px',
                height: '800px',
                backgroundColor: "blue",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }


        }

    }
})

export default theme;