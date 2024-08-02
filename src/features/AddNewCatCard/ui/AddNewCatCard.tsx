import { useModal } from '@/shared/hooks/useModal';
import style from './AddNewCatCard.module.scss';
import { useAuth } from '@/shared/hooks/useAuth';
import { CreateCatCard } from '@/entities/CreateCatCard';
import { Button } from '@/shared/ui/Button/Button';
import { useSaveCatMutation } from '@/widgets/SearchCats/api/api';
import { BaseQueryFn, MutationDefinition } from '@reduxjs/toolkit/query';
import { Cat } from '@/features/Cats';

type SaveCatMutationDefinition = MutationDefinition<Cat, BaseQueryFn, string, void>


export const AddNewCatCard = () => {
    const [changeCreateModal, drawCreateModal] = useModal();
    const { isAuth } = useAuth();

    return (
        <>
            {drawCreateModal(
                <CreateCatCard
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
