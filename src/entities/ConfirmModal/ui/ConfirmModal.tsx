import { Button } from "@/shared/ui/Button/Button";
import { Stack } from "../../../shared/ui/Stack/Stack"
import { Text } from "../../../shared/ui/Text/Text"
import styles from './ConfirmModal.module.scss';
import { Loader } from "@/shared/ui/Loader/Loader";
import { arrowIcon } from "@/shared/assets/svg/arrowIcons";

interface ConfirmModalProps {
    changeConfirmModal: () => void;
    onConfirm: () => void;
    title: string;
    text: string;
    isLoading?: boolean;
    error?: boolean;
}

export const ConfirmModal = (props: ConfirmModalProps) => {
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
            <Stack gap='16'>
                <Button
                    variant='secondary'
                    onClick={changeConfirmModal}
                >
                    отмена
                </Button>
                <Button
                    className={styles.button}
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
};