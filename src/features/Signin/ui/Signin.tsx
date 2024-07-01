import { memo, useState } from "react";
import closeIcon from '@/shared/assets/images/close.png';
import { Input } from "@/shared/ui/Input/Input";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Button } from "@/shared/ui/Button/Button";
import { arrowIcon } from "@/shared/assets/svg/arrowIcon";
import { Text } from "@/shared/ui/Text/Text";
import styles from './Signin.module.scss';
import { hidePasswordIcon, showPasswordIcon } from "@/shared/assets/svg/passwordIcons";

interface SignInProps {
    changeSigninModal?: () => void;
}

export const Signin = memo(({ changeSigninModal }: SignInProps) => {
    const [isError ] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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

            <form className={styles.form}>
                <Input
                    isError={isError}
                    placeholder='логин'
                    onChange={() => {}}
                />
                <Input
                    isError={isError}
                    type={!showPassword ? 'password' : 'text'}
                    placeholder='пароль'
                    onChange={() => {}}
                />
                <div className={styles.error}>
                    {
                        isError &&
                        <Text size='xs' className={styles.text}>
                            Введен неверный логин и/или пароль
                        </Text>
                    }
                </div>
                <Button className={styles.buttonSignin}>
                    войти {arrowIcon()}
                </Button>
            </form>

            <div
                className={styles.password}
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? hidePasswordIcon() : showPasswordIcon()}
            </div>
        </Stack>
    );
});