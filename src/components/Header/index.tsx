import { Logo } from "@/assets";
import { Container } from "./styles";
import Image from "next/image";

export default function Header() {
  return (
    <Container>
      <Image src={Logo} alt="Logo da Rocketseat" />
    </Container>
  );
}
