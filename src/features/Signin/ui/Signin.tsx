import { ChangeEvent, FormEvent, memo, useState } from "react";
import closeIcon from '@/shared/assets/images/close.png';
import { Stack } from "@/shared/ui/Stack";
import { arrowIcon } from "@/shared/assets/svg/arrowIcons";
import { Text } from "@/shared/ui/Text";
import styles from './Signin.module.scss';
import { hidePasswordIcon, showPasswordIcon } from "@/shared/assets/svg/passwordIcons";
import { useLoginAdminMutation } from "../api/api";
import { useAuth } from "@/shared/hooks/useAuth";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Loader } from "@/shared/ui/Loader";

interface SignInProps {
    changeSigninModal?: () => void;
}

export const Signin = memo(({ changeSigninModal }: SignInProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { login } = useAuth();

    const [loginAdmin, { isLoading, error }] = useLoginAdminMutation();

    const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await loginAdmin({ username, password }).unwrap();
            login(response.token); 
            
            if (changeSigninModal) changeSigninModal();
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const PasswordToggleIcon = showPassword ? hidePasswordIcon : showPasswordIcon;

    return (
        <Stack
            gap='16'
            justify='center'
            direction='column'
            className={styles.signin}
        >
            <img
                className={styles.closeButton}
                src={closeIcon} alt="закрыть"
                onClick={changeSigninModal}
            />
            <Text tag="h3" size='l' className={styles.title}>
                Вход
            </Text>
            <Text tag="h3" size='s' className={styles.title}>
                Введите данные, чтобы войти в систему
            </Text>

            <form className={styles.form} onSubmit={handleSignin}>
                <Input
                    isError={!!error}
                    placeholder='логин'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                />
                <div className={styles.password}>
                    <Input
                        isError={!!error}
                        type={!showPassword ? 'password' : 'text'}
                        placeholder='пароль'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <button
                        className={styles.password_btn}
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <PasswordToggleIcon />
                    </button>
                </div>

                <div className={styles.error}>
                    {
                        error &&
                        <Text size='xs' className={styles.text}>
                            Введен неверный логин и/или пароль
                        </Text>
                    }
                </div>
                <Button
                    className={styles.buttonSignin}
                    type="submit"
                >
                    войти
                    {isLoading
                        ? <Loader />
                        : <>{arrowIcon()}</>
                    }
                </Button>
            </form>
        </Stack>
    );
});