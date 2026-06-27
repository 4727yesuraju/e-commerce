import {
  Show,
  SignInButton,
  SignUpButton,
  useAuth,
  UserButton,
} from "@clerk/react";
import PageLoader from "./components/PageLoader";
import Layout from "./components/Layout";

function App() {
  const { isLoaded } = useAuth();
  if (!isLoaded) return <PageLoader />;
  return (
    <Layout>
      <header>
        <Show when="signed-out">
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>

      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <button class="btn btn-primary">Button</button>
    </Layout>
  );
}

export default App;
