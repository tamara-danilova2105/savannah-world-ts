import { memo, useState } from "react";
import closeIcon from '@/shared/assets/images/close.png';
import { Input } from "@/shared/ui/Input/Input";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Button } from "@/shared/ui/Button/Button";
import { arrowIcon } from "@/shared/assets/svg/arrowIcons";
import { Text } from "@/shared/ui/Text/Text";
import styles from './Signin.module.scss';
import { hidePasswordIcon, showPasswordIcon } from "@/shared/assets/svg/passwordIcons";
import { useLoginAdminMutation } from "../api/api";
import Cookies from "js-cookie";

interface SignInProps {
    changeSigninModal?: () => void;
}

export const Signin = memo(({ changeSigninModal }: SignInProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [loginAdmin, { error }] = useLoginAdminMutation();

    const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await loginAdmin({ username, password }).unwrap();
            Cookies.set('authToken', response.token, { expires: 1 });
            
            if (changeSigninModal) changeSigninModal();
        } catch (error) {
            console.error('ERROR')
            
        }
    };

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
                    onChange={(e) => setUserName(e.target.value)}
                />
                <div className={styles.password}>
                    <Input
                        isError={!!error}
                        type={!showPassword ? 'password' : 'text'}
                        placeholder='пароль'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className={styles.password_btn}
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? hidePasswordIcon() : showPasswordIcon()}
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
                    войти {arrowIcon()}
                </Button>
            </form>
        </Stack>
    );
});