import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import JournalScren from "../components/journal/JournalScreen";
import { auth } from "../firebase/firebase-config";
import AuthRouter from "./AuthRouter";
import { login } from "../actions/auth";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [cheking, setCheking] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        const { uid, displayName } = user;
        dispatch(login(uid, displayName));
        setIsLoggingIn(true);
      } else {
        setIsLoggingIn(false);
      }
      setCheking(false);
    });
  }, [dispatch, setCheking, setIsLoggingIn]);
  if (cheking) {
    return <h1>Wait...</h1>;
  }

  return (
    <Routes>
      {isLoggingIn ? (
        <Route path="/*" element={<JournalScren />} />
      ) : (
        <Route path="auth/*" element={<AuthRouter />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

export default AppRouter;
