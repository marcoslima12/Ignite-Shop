import { styled } from "@/styles";

export const Container = styled("div", {
  position: "relative",
  cursor: 'pointer',
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "43.5rem",
  height: "41rem",
  borderRadius: 8,
  boxShadow: "0px 0px 48px 0px rgba(0, 0, 0, 0.90)",
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  overflow: 'hidden',
  marginLeft: '0 !important',
  //margin: '3rem',

  img: {
    objectFit: "cover",
  },

  "&:hover": {
    footer : {
      opacity: 1,
      transform: "translateY(0)",
    }
  },
});

export const Footer = styled("footer", {
  position: "absolute",
  bottom: "0.25rem",
  left: "0.25rem",
  right: "0.25rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "0.375rem",
  background: "rgba(32, 32, 36, 0.90)",
  padding: "2rem",
  boxSizing: "border-box",
  opacity: 0,
  transform: "translateY(100%)",
  transition: "all 0.2s ease-in-out",

  span: {
    color: "$gray100",
    fontWeight: "$bold",
    fontSize: "$large",
  },
  strong: {
    color: "$green100",
    fontWeight: "$bold",
    fontSize: "$large",
  },
});
