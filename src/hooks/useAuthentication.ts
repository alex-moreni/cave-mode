import { db } from "../firebase/config";
console.log(db.type);

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  //cleanup

  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  const checkIfIsCancelled = () => {
    if (cancelled) {
      return;
    }
  };

  const createUser = async (data: any) => {
    checkIfIsCancelled();

    setLoading(true);
    setError("");

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { displayName: data.displayName });

      setLoading(false);

      return user;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        console.error(typeof error.message);

        let systemErrorMessage;

        if (error.message.includes("Password")) {
          systemErrorMessage =
            "A senha precisa conter pelo menos 6 caracteres.";
        } else if (error.message.includes("email-already")) {
          systemErrorMessage = "E-mail já cadastrado.";
        } else {
          systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
        }

        setError(systemErrorMessage);
      }

      setLoading(false);
    }
  };

  //logout

  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
  };

  //login

  const login = async (data: any) => {
    checkIfIsCancelled();
    setLoading(true);

    setError("");

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      setLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        console.error(typeof error.message);

        let systemErrorMessage;

        if (error.message.includes("auth/invalid-credential")) {
          systemErrorMessage =
            "O usuário informado não existe ou a senha está incorreta";
        } else {
          systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
        }

        setError(systemErrorMessage);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
