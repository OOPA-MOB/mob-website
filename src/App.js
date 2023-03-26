import { React } from 'react'
import './App.css';
import { init, useConnectWallet } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
//import { ethers } from 'ethers'
import {AppBar, Box, Grid, Button, Toolbar, Typography} from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import MobMenu from "./components/MobMenu";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./components/Home";
import "@fontsource/tenor-sans";
import bgImg from "./images/roses.png";

const theme = createTheme({
  palette: {
    primary: {
      main: '#954759',
    },
    secondary: {
      main: '#000',
    },
    info: {
      main: '#B26F7F',
    },
    warning: {
      main: '#FFAD06',
    },
    action: {
      disabledBackground: '#23161d',
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          '&[role="menu"]': {
            backgroundColor: '#B26F7F',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Tenor Sans',
      'Roboto',
    ].join(','),
  },
});

const injected = injectedModule()

const rpcUrl = `https://api.avax.network/ext/bc/C/rpc`

// initialize Onboard
init({
  wallets: [injected],
  chains: [
    {
      id: '0xa86a',
      token: 'AVAX',
      label: 'Avalanche Mainnet',
      rpcUrl
    }
  ]
})

function App() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  // create an ethers provider
  // let ethersProvider, signer;
  //
  // if (wallet) {
  //   ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any');
  //   signer = ethersProvider.getSigner();
  // }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <AppBar position="static" sx={{ px: 2, width: '100%' }} color="transparent">
            <Toolbar disableGutters sx={{display: "flex"}}>
              <Grid container sx={{padding: 0}} alignItems="center">
                <Grid item xs={1} sm={1} lg={1} display="flex">
                  {/*<MobMenu/>*/}
                </Grid>
                <Grid item xs={9} sm={9} lg={9} display="flex" sx={{ px: 1 }}>
                  <Typography variant="h5" color="primary">
                    OOPA MOB
                  </Typography>
                </Grid>
                <Grid item xs={2} display="flex" justifyContent="center" sx={{ pr: 3 }}>
                  <Button
                      id="connectButton"
                      variant="contained"
                      sx={{ minWidth: 100, height: 30}}
                      onClick={() => (wallet ? disconnect(wallet) : connect())}
                      disabled
                  >
                    {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
                  </Button>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Box
              style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                height: '150vh'
              }}
          >
            <Switch>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
            <Box className="buffer"/>
          </Box>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
