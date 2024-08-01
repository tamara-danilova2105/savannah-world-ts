import Cookies from "js-cookie";
import { ReactNode, useState, createContext, useEffect } from "react";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextProps {
    isAuth: boolean;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
    isAuth: false,
    logout: () => {}
});

export const AuthProvider = (props: AuthProviderProps) => {
    const { children } = props;

    const [isAuth, setIsAuth] = useState<boolean>(!!Cookies.get('authToken'));

    useEffect(() => {
        const handleCookieChange = () => {
            const token = Cookies.get('authToken');
            setIsAuth(!!token);
        };

        window.addEventListener('storage', handleCookieChange);

        handleCookieChange();

        return () => {
            window.removeEventListener('storage', handleCookieChange);
        };
    }, []);

    const logout = () => {
        Cookies.remove('authToken');
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
}