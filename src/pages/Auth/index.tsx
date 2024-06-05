import { useState, FormEvent, useEffect } from "react";

import {
  AuthContainer,
  AuthFormContainer,
  OptionUserAccount,
  MessageError,
} from "./styles";

import { useAuthentication } from "../../hooks/useAuthentication";

import imgAuth from "../../assets/images/img-auth.png";

import { useAuthValue } from "../../context/AuthContext";

export const Auth = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newUser, setNewUser] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { createUser, error: authError, loading, login } = useAuthentication();

  const { user } = useAuthValue();

  const handleOptionLogin = () => {
    setNewUser(!newUser);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (newUser) {
      const user = {
        displayName,
        email,
        password,
      };

      if (password !== confirmPassword) {
        setError("As senhas precisam ser iguais.");
        return;
      }

      await createUser(user);
    } else {
      const user = {
        email,
        password,
      };

      await login(user);
    }
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <AuthContainer>
      <img src={imgAuth} alt="" />
      <AuthFormContainer>
        {newUser ? <h1>Cadastra-se</h1> : <h1>Entrar</h1>}
        {newUser ? (
          <p>Crie seu perfil para conseguir organizar sua rotina diária.</p>
        ) : (
          <p>Faça o login para continuar com sua produtividade.</p>
        )}

        <form onSubmit={handleSubmit}>
          {newUser && (
            <label>
              <span>Nome:</span>
              <input
                type="text"
                name="displayName"
                required
                placeholder="Nome do usuário"
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
              />
            </label>
          )}
          <label>
            <span>E-mail:</span>
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail do usuário"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>Senha:</span>
            <input
              type="password"
              name="password"
              required
              placeholder="Insira a senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          {newUser && (
            <label>
              <span>Confirmação de senha:</span>
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Confirme a senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </label>
          )}
          {newUser ? (
            <button className="btn">Cadastrar</button>
          ) : (
            <button className="btn">Entrar</button>
          )}
        </form>
        <OptionUserAccount>
          {newUser ? "Ja possui uma conta? " : "Ainda não possui uma conta? "}
          {""}
          <span onClick={() => handleOptionLogin()}>
            {newUser ? "Entrar" : "Cadastrar"}
          </span>
        </OptionUserAccount>
        {error && <MessageError className="error">{error}</MessageError>}
      </AuthFormContainer>
    </AuthContainer>
  );
};
