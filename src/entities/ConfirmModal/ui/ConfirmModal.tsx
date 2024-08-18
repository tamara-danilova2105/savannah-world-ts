import { Text } from "../../../shared/ui/Text/ui/Text"
import { arrowIcon } from "@/shared/assets/svg/arrowIcons";
import { Button } from "@/shared/ui/Button";
import styles from './ConfirmModal.module.scss';
import { Loader } from "@/shared/ui/Loader";
import { Stack } from "@/shared/ui/Stack";
import { memo } from "react";

interface ConfirmModalProps {
    changeConfirmModal: () => void;
    onConfirm: () => void;
    title: string;
    text: string;
    isLoading?: boolean;
    error?: boolean;
}

export const ConfirmModal = memo((props: ConfirmModalProps) => {
    const {
        changeConfirmModal,
        onConfirm,
        title,
        text,
        isLoading,
    } = props;

    return (
        <Stack
            gap='32'
            direction='column'
            className={styles.confirm_container}
        >
            <Text tag="h3" size="l" className={styles.title}>
                {title}
            </Text>
            <Text size="m" className={styles.text}>
                {text}
            </Text>
            <Stack gap='16' className={styles.button_container}>
                <Button
                    variant='secondary'
                    className={styles.btn_cancel}
                    onClick={changeConfirmModal}
                >
                    отмена
                </Button>
                <Button
                    className={styles.btn_delete}
                    onClick={onConfirm}
                >
                    удалить
                    {isLoading
                        ? <Loader />
                        : <>{arrowIcon()}</>
                    }
                </Button>
            </Stack>
        </Stack>
    );
});
