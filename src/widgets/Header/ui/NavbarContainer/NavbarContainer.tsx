import { useModal } from "@/shared/hooks/useModal";
import styles from './NavbarContainer.module.scss';
import { Navbar } from "@/features/Navbar";
import { Button } from "@/shared/ui/Button/Button";
import { Signin } from "@/features/Signin/ui/Signin";
import { memo } from "react";

export const NavbarContainer = memo(() => {
    const [changeSigninModal, drawSiginModal] = useModal();

    return (
        <>
            {drawSiginModal(
                <Signin changeSigninModal={changeSigninModal} />
            )}

            <div className={styles.navbar}>
                <Navbar />
                <Button
                    onClick={changeSigninModal}
                    className={styles.buttonSigin}
                    variant="secondary"
                >
                    войти
                </Button>
            </div>
        </>
    )
});
