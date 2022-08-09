import { Routes, Route, Navigate } from "react-router-dom";
import JournalScren from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRouter />} />
      <Route path="/*" element={<JournalScren />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};

export default AppRouter;
