import React from "react";
import { ChakraProvider, CSSReset, Portal } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { Global, css } from "@emotion/react";
import SEO from "next-seo.config";
import theme from "@/theme/theme"
import Router from 'next/router';
import Head from "next/head";
import {UserProvider} from "@/contexts/UserProvider";

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const GlobalStyle = ({ children }) => {


  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            min-width: 320px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};


function MyApp({ Component, pageProps }) {
  const mainPanel = React.createRef();

  return (
    <>
          {Component.requiresAuth && (
        <Head>
          <script
            // If no token is found, redirect inmediately
            dangerouslySetInnerHTML={{
              __html: `if(!document.cookie || document.cookie.indexOf('access_token') === -1)
            {location.replace(
              "/signin?next=" +
                encodeURIComponent(location.pathname + location.search)
            )}
            else {document.documentElement.classList.add("render")}`
            }}
          />
        </Head>
      )}
    <ChakraProvider theme={theme}>
      <GlobalStyle />
    <DefaultSeo {...SEO} />
    <UserProvider>
  <Component {...pageProps} />
    </UserProvider>
    </ChakraProvider>
    </>
  )
}

export default MyApp
