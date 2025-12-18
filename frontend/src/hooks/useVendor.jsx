import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useVendor = () => {
    const { user, loading } = useAuth();
    const [isVendor, setIsVendor] = useState(false);
    const [isVendorLoading, setIsVendorLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (!user || loading) return;

        axiosSecure
            .get(`/users/vendor/${user.email}`)
            .then(res => {
                setIsVendor(res.data.vendor);
                setIsVendorLoading(false);
            })
            .catch(() => {
                setIsVendor(false);
                setIsVendorLoading(false);
            });
    }, [user, loading, axiosSecure]);

    return [isVendor, isVendorLoading];
};

export default useVendor;
