import { useForm } from 'react-hook-form';
import { login } from '../services/auth.service';
import type { IUserWithTokens } from '../models/IUserWithTokens';
import type {FC} from "react";

interface LoginFormProps {
    onLoginSuccess: (user: IUserWithTokens) => void;
}

interface ICredo {
    username: string;
    password: string;
}

export const LoginFormComponent: FC<LoginFormProps> = ({ onLoginSuccess }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICredo>({ mode: 'onTouched' });

    const onSubmit = async (data: ICredo) => {
        try {
            const user = await login({ ...data, expiresInMins: 60 });
            localStorage.setItem('user', JSON.stringify(user));
            onLoginSuccess(user);
        } catch (e) {
            alert('Login failed');
            console.error(e);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <input
                    type="text"
                    placeholder="Username"
                    {...register('username', { required: 'Username is required' })}
                    className="border p-2 rounded w-full"
                />
                {errors.username && <p className="text-red-500">{errors.username.message}</p>}
            </div>

            <div>
                <input
                    type="password"
                    placeholder="Password"
                    {...register('password', { required: 'Password is required' })}
                    className="border p-2 rounded w-full"
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Login
            </button>
        </form>
    );
};
