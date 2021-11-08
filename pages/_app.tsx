import "antd/dist/antd.css";
import "@styles/global.css";
import express from "express";
import type { AppProps } from "next/app";
import Head from "next/head";
import Container from "@components/common/container";

export default function MyApp({ Component, pageProps }: AppProps) {
  console.log({ ...pageProps });
  return (
    <div>
      <Container>
        <Head>
          <title>NAVER-FE-SSR</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
