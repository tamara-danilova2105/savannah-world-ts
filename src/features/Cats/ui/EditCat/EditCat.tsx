import { useModal } from '@/shared/hooks/useModal';
import { CreateCatCard } from '@/entities/CreateCatCard';
import { editIcon } from '@/shared/assets/svg/editIcon';
import { Button } from '@/shared/ui/Button/ui/Button';
import { useAppDispatch } from '@/app/providers/store/config/hooks';
import { Cat } from '../../model/types/cat';
import { initCatCard } from '../../model/slices/slice';
import styles from './EditCat.module.scss';
import { useCallback } from 'react';

interface EditCatProps {
    cat: Cat;
};

export const EditCat = (props: EditCatProps) => {
    const { cat } = props;
    const [changeCreateModal, drawCreateModal] = useModal();
    const dispatch = useAppDispatch();

    const handleClick = useCallback(() => {
        dispatch(initCatCard(cat));
        changeCreateModal();
    }, [cat, dispatch, changeCreateModal]);

    return (
        <>
            {drawCreateModal(
                <CreateCatCard
                    changeCreateModal={changeCreateModal}
                    image={cat.image}
                    id={cat._id}
                />
            )}
            <Button
                className={styles.btn}
                onClick={handleClick}
            >
                {editIcon()}
            </Button>
        </>
    );
};
