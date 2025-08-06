import { LoginFormComponent } from '../components/LoginFormComponent';
import type { IUserWithTokens } from '../models/IUserWithTokens';
import type {FC} from "react";

interface LoginPageProps {
    onLoginSuccess: (user: IUserWithTokens) => void;
}

export const LoginPage: FC<LoginPageProps> = ({ onLoginSuccess }) => {
    return (
        <div className="p-4 max-w-sm mx-auto">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <LoginFormComponent onLoginSuccess={onLoginSuccess} />
        </div>
    );
};

