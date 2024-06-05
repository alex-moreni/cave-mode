import { useAuthentication } from "../../hooks/useAuthentication";

export const Home = () => {
  const { logout, loading } = useAuthentication();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => logout()}>Sair</button>
    </div>
  );
};
