import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    gray: {
      700: "#1f2733",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: 'white',
        fontFamily: 'Inter, sans-serif'
      },
      html: {
        fontFamily: 'Inter, sans-serif'
      },
    }),  
  },

};
