import { Camisa1 } from "@/assets";
import Header from "@/components/Header";
import { Container, ImageContainer, Content } from "@/styles/success";
import Link from "next/link";
import Image from "next/image";

export default function Success() {
  return (
    <Container>
      <Header />
      <Content>
        <h1>Compra efetuada!</h1>
        <ImageContainer>
          <Image src={Camisa1} alt="Foto da camisa comprada" />
        </ImageContainer>
        <p>
          Uhuul <strong> Diego Fernandes</strong>, sua Camiseta{" "}
          <strong>Beyond the Limits</strong>
          já está a caminho da sua casa.{" "}
        </p>
        <Link href="/">Voltar ao catálogo</Link>
      </Content>
    </Container>
  );
}
