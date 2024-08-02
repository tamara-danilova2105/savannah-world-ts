import { useModal } from '@/shared/hooks/useModal';
import style from './AddNewCatCard.module.scss';
import { useAuth } from '@/shared/hooks/useAuth';
import { CreateCatCard } from '@/entities/CreateCatCard';
import { Button } from '@/shared/ui/Button/Button';


export const AddNewCatCard = () => {
    const [changeCreateModal, drawCreateModal] = useModal();
    const { isAuth } = useAuth();

    return (
        <>
            {drawCreateModal(
                <CreateCatCard
                    isCreate
                    changeCreateModal={changeCreateModal}
                />
            )}
            {
                isAuth &&
                <Button onClick={changeCreateModal}>
                    создать
                </Button>
            }
        </>
    );
};
