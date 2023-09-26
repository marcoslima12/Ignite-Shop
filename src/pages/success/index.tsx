import { Camisa1 } from "@/assets";
import Header from "@/components/Header";
import { Container, ImageContainer, Content } from "@/styles/success";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";
import Stripe from "stripe";

interface SuccessProduct {
  product: {
    costumerName: string;
    imageUrl: string;
    product_name: string;
  };
}

export default function Success({ product }: SuccessProduct) {
  return (
    <>
      <Head>
        <title>Congrats!</title>
      </Head>
      <Container>
        <Header />
        <Content>
          <h1>Compra efetuada!</h1>
          <ImageContainer>
            <Image
              src={product?.imageUrl}
              width={100}
              height={100}
              alt="Foto da camisa comprada"
            />
          </ImageContainer>
          <p>
            Uhuul <strong>{product.costumerName}</strong>, sua Camiseta{" "}
            <strong>{product?.product_name}</strong> já está a caminho da sua
            casa.{" "}
          </p>
          <Link href="/">Voltar ao catálogo</Link>
        </Content>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });
  const costumerName = session.customer_details?.name;
  const product = session.line_items?.data[0]?.price?.product as Stripe.Product;
  return {
    props: {
      product: {
        costumerName: costumerName,
        imageUrl: product.images[0],
        product_name: product.name,
      },
    },
  };
};
