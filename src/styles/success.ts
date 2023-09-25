import { styled } from "@/styles";

export const Container = styled("div", {
  width: "100%",
  minHeight: "100vh",

  h1: {
    color: "$gray100",
    fontSize: "$large",
    fontWeight: "$bold",
    margin: "5rem 0",
  },
  p: {
    color: "$gray300",
    fontSize: "$semi-large",
    fontWeight: "$bold",
    marginBottom: 88,
    width: "37rem",
    textAlign: "center",
  },
  a: {
    color: "$green500",
    textDecoration: "none",
    fontSize: "$medium",
    fontWeight: "$bold",
    "&:hover": {
      color: "$green100",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "7.9375rem",
  height: "9.0625rem",
  borderRadius: "0.5rem",
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  img: {
    width: "inherit",
    height: "inherit",
  },
  marginBottom: "2rem",
});

export const Content = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
