import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "@/store/authSlice";

export const useAuthSync = () => {
    const { data: session, status } = useSession();
    const dispatch = useDispatch();

    if (status === "authenticated" && session) {
        dispatch(
            loginSuccess({
                user: session.user,
                role: "student", // temporary
            })
        );
    }

    if (status === "unauthenticated") {
        dispatch(logout());
    }
};
