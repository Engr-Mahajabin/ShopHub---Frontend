import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

export default function AdminRoutes({ children }) {
    const { user, loading } = useAuth();
    const isAdmin = useAdmin();

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" replace />;
}
