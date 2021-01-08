import React from "react";
import { wrapper } from "../store";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
import Head from "next/head";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import Router from 'next/router';
import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());
function MyApp(props: any) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  toast.configure({
    autoClose: 3000,
    draggable: false,
    newestOnTop: true,
    position: "top-right",
    closeOnClick: true,
  });

  const { Component, pageProps } = props;
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ThemeProvider theme={theme}>
        {/* <Provider store={store}> */}
        <CssBaseline />
        <Component {...pageProps} />
        {/* </Provider> */}
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
export default wrapper.withRedux(MyApp);

