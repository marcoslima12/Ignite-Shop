import Card from "@/components/Card";
import Header from "@/components/Header";
import { Container, Main } from "@/styles/main";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { GetServerSideProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

interface Props {
  products: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ products }: Props) {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    loop: true,
  });

  return (
    <Container>
      <Header />
      <Main ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              name={product.name}
              imgUrl={product.imageUrl}
              price={product.price}
            />
          );
        })}
      </Main>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  console.log(response.data);

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      price: price.unit_amount && price.unit_amount / 100,
    };
  });

  return {
    props: {
      products,
    },
  };
};
