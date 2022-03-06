export const buttonStyles = {
  components: {
    Button: {
      variants: {
        "no-hover": {
          _hover: {
            boxShadow: "none",
          },
        },
        "transparent-with-icon": {
          bg: "transparent",
          fontWeight: "bold",
          borderRadius: "inherit",
          cursor: "pointer",
          _hover: "none",
          _active: {
            bgColor: "none",
            color: "none",
            transform: "none",
            borderColor: "transparent",
          },
          _focus: {
            boxShadow: "none",
            color: "none",
            bgColor: "none"
          },
          _hover: {
            boxShadow: "none",
            color: "none",
            bgColor: "none"
          },
        },
      },
      baseStyle: {
        borderRadius: "8px",
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
};
