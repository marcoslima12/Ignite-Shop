import Header from "@/components/Header";
import { stripe } from "@/lib/stripe";
import {
  Button,
  Container,
  Content,
  Description,
  ImageContainer,
  InfoContainer,
  InfoContent,
  Price,
  Title,
} from "@/styles/product";
import { GetStaticPaths } from "next";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Image from "next/image";
import { useRouter } from "next/router";
import { priceFormatter } from "@/utils/format";
import Link from "next/link";

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();
  //IMPROVE THIS!
  if (isFallback) {
    console.log("isLoading...");
    return <h1>is loading...</h1>;
  }

  return (
    <Container>
      <Header />
      {isFallback ? (
        <h1>Loading...</h1>
      ) : (
        <Content>
          <Link href={"/"}>
            {"<"}
            <h1>Voltar </h1>
          </Link>
          <ImageContainer>
            <Image
              src={product.imageUrl}
              alt="product photo"
              width={520}
              height={480}
            />
          </ImageContainer>
          <InfoContainer>
            <InfoContent>
              <Title>{product.name}</Title>
              <Price>{priceFormatter.format(product.price)}</Price>
              <Description> {product.description} </Description>
            </InfoContent>
            <Button>Comprar agora</Button>
          </InfoContainer>
        </Content>
      )}
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id;

  const product = await stripe.products.retrieve(productId as string, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        price: price.unit_amount && price.unit_amount / 100,
        description: product.description,
        imageUrl: product.images[0],
      },
    },
    revalidate: 60 * 60 * 1, //1h
  };
};
