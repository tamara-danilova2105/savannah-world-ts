import { memo } from "react";
import styles from './Signin.module.scss';
import closeIcon from '@/shared/assets/images/close.png';
import { Input } from "@/shared/ui/Input/Input";
import { Stack } from "@/shared/ui/Stack/Stack";
import { Button } from "@/shared/ui/Button/Button";
import { arrowIcon } from "@/shared/assets/svg/arrowIcon";

interface SignInProps {
    changeSigninModal?: () => void;
}

export const Signin = memo(({ changeSigninModal }: SignInProps) => {
    return (
        <Stack
            gap='32'
            justify='center'
            direction='column'
            className={styles.signin}
        >
            <img
                className={styles.closeButton}
                src={closeIcon} alt="закрыть"
                onClick={changeSigninModal}
            />
            <Input
                placeholder='логин'
                onChange={() => console.log()}
            />
            <Input
                type="password"
                placeholder='пароль'
                onChange={() => console.log()}
            />
            <Button className={styles.buttonSignin}>
                войти {arrowIcon()}
            </Button>
        </Stack>
    );
});