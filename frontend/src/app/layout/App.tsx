import { useState, useEffect, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { Container, createTheme, CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from '../store/configureStore';
import { fetchCurrentUser } from '../../features/account/accountSlice';
import { fetchBasketAsync } from '../../features/basket/basketSlice';
import { Header } from './Header';
import { Catalog } from '../../features/catalog/Catalog';
import { HomePage } from '../../features/home/HomePage';
import { ProductDetails } from '../../features/catalog/ProductDetails';
import { AboutPage } from '../../features/about/AboutPage';
import { ContactPage } from '../../features/contact/ContactPage';
import { ServerError } from '../errors/ServerError';
import { NotFound } from '../errors/NotFound';
import { BasketPage } from '../../features/basket/BasketPage';
import { LoadingComponent } from './LoadingComponent';
import { CheckoutPage } from '../../features/checkout/CheckoutPage';
import { Login } from '../../features/account/Login';
import { Register } from '../../features/account/Register';
import { PrivateRoute } from './PrivateRoute';

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212',
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  if (loading) return <LoadingComponent message="Initialising app..." />;

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" theme="colored" hideProgressBar />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/catalog" component={Catalog} exact={true} />
          <Route path="/catalog/:id" component={ProductDetails} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/server-error" component={ServerError} />
          <Route path="/basket" component={BasketPage} />
          <PrivateRoute path="/checkout" component={CheckoutPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </ThemeProvider>
  );
}

export default App;
