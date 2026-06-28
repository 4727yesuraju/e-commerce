import {
  Show,
  SignInButton,
  SignUpButton,
  useAuth,
  UserButton,
} from "@clerk/react";
import PageLoader from "./components/PageLoader";
import Layout from "./components/Layout";
import { Route, Routes, Navigate } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import OrdersPage from "./pages/OrderPage.jsx";
import CheckoutReturnPage from "./pages/CheckoutReturnPage.jsx";
import ProductDetailPage from "./pages/ProductDetailsPage.jsx";
import { SentryDemoPage } from "./pages/SentryDemoPage.jsx";

function App() {
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) return <PageLoader />;
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        <Route
          path="/orders"
          element={isSignedIn ? <OrdersPage /> : <Navigate to={"/"} replace />}
        />
        <Route path="/checkout/return" element={<CheckoutReturnPage />} />
        <Route path="/demo-sentry" element={<SentryDemoPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
