import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";

export default function useAdmin() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/api/users/admin/${user.email}`)
        .then((res) => setIsAdmin(res.data.admin));
    }
  }, [user]);

  return isAdmin;
}
