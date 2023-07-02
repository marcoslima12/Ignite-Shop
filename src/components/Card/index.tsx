import { Camisa1 } from "@/assets";
import { Container, Footer } from "./styles";
import Image from "next/image";
import "keen-slider/keen-slider.min.css";

interface CardProps {
  imgUrl: string,
  name: string,
  price: number
}


export default function Card(props: CardProps) {
  return (
    <Container className="keen-slider__slide">
      <Image src={props.imgUrl} alt="camisa a venda" width={520} height={480}/>
      <Footer>
        <span>{props.name}</span>
        <strong>{props.price}</strong>
      </Footer>
    </Container>
  );
}
