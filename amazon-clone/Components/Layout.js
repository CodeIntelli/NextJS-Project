import React from "react";
import Head from "next/head";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Link,
} from "@material-ui/core";
import NextLink from "next/link";
import useStyles from "../utils/style";
const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Amazon Clone(CodeIntelli)</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link className={classes.rmLink}>
              <Typography variant="h6" className={classes.brand}>
                Amazon
              </Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link style={{ margin: 5 }} className={classes.rmLink}>
                Cart
              </Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link style={{ margin: 5 }} className={classes.rmLink}>
                Login
              </Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography variant="h6" style={{ margin: 20 }}>
          All Right Reserved. NextJs Amazon Clone
        </Typography>
      </footer>
    </div>
  );
};

export default Layout;
