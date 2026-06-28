import {
  Show,
  SignInButton,
  SignUpButton,
  useAuth,
  UserButton,
} from "@clerk/react";
import PageLoader from "./components/PageLoader";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";

function App() {
  const { isLoaded } = useAuth();
  if (!isLoaded) return <PageLoader />;
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
