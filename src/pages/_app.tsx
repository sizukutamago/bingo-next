import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Head from "next/head";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          backgroundColor: "#defcff",
        },
      },
      html: {
        height: "100%",
        width: "100%",
      },
    },
  });

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Head>
          <title>Bingo Next</title>
          <meta name="description" content="Bingo!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
