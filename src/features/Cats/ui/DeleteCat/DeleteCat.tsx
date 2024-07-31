import { deleteIcon } from "@/shared/assets/svg/deleteIcon";
import { Button } from "@/shared/ui/Button/Button";
import styles from './DeleteCat.module.scss';
import { useDeleteCatMutation } from "@/pages/CatalogPage/api/api";
import { useModal } from "@/shared/hooks/useModal";
import { ConfirmModal } from "@/entities/ConfirmModal";

interface DeleteCatProps {
    id: string;
};

export const DeleteCat = (props: DeleteCatProps) => {
    const { id } = props;

    const [deleteCat, { isLoading }] = useDeleteCatMutation();
    const [changeConfirmModal, drawConfirmModal] = useModal();

    const deleteCatCard = async () => {
        try {
            await deleteCat(id).unwrap();
        } catch (err) {
            console.error("Failed to delete cat:", err);
        }
    };

    return (
        <>
            {drawConfirmModal(
                <ConfirmModal
                    changeConfirmModal={changeConfirmModal}
                    onConfirm={deleteCatCard}
                    title="Удалить карточку котенка?"
                    text="Это действие нельзя будет отменить. Карточка будет удалена навсегда."
                    isLoading={isLoading}
                />
            )}
            <Button
                className={styles.delete}
                onClick={changeConfirmModal}
            >
                {deleteIcon()}
            </Button>
        </>

    );
};