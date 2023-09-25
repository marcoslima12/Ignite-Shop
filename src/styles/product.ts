import { styled } from "@/styles";

export const Container = styled("div", {
  width: "100%",
  minHeight: "100vh",
});

export const ImageContainer = styled("div", {
  width: "45.3rem",
  height: "41rem",
  borderRadius: 8,
  boxShadow: "0px 0px 48px 0px rgba(0, 0, 0, 0.90)",
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  img: {
    objectFit: "cover",
  },
});

export const Title = styled("span", {
  color: "$gray300",
  fontSize: "$large",
  fontFamily: "Roboto",
  fontWeight: "$bold",
});

export const Price = styled("span", {
  color: "$green500",
  fontWeight: "$regular",
  fontSize: "$large",
  fontFamily: "Roboto",
});

export const Description = styled("div", {
  fontSize: "$medium",
  fontFamily: "Roboto",
  fontWeight: "$regular",
});

export const Button = styled("button", {
  boxSizing: "border-box",
  width: "32.5rem",
  padding: "1.5rem 2rem",
  borderRadius: "0.5rem",
  backgroundColor: "$green500",
  border: 0,

  color: "$white",
  fontSize: "$medium",
  fontFamily: "Roboto",
  fontWeight: "$regular",

  "&:disabled": {
    opacity: "0.7",
    cursor: "not-allowed",
   
  },
});

export const Content = styled("div", {
  width: "100%",
  display: "flex",
  maxWidth: 1180,
  margin: "auto",
  marginTop: "4rem",
  gap: "4.5rem",
  position: "relative",

  a: {
    textDecoration: "none",
    color: "$white",
    position: "absolute",
    top: "-3rem",
    fontSize: "$small",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  },
});

export const InfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  button: {
    marginTop: "auto",
    cursor: "pointer",
    "&:not([disabled]):hover": {
      backgroundColor: "$green100",
      transition: "all 0.2s",
    },
  },
});

export const InfoContent = styled("div", {
  height: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
});
