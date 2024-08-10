import { Filter } from '@/features/Filter';
import styles from './SearchCats.module.scss';
import { Stack } from '@/shared/ui/Stack';
import { CatList } from '@/features/Cats';
import { useGetCatsQuery } from '@/features/Cats/api/api';
import { useEffect, useMemo, useRef, useState } from 'react';
import { selectFilterParams } from '@/features/Filter/model/selectors/selectors'
import { useAppSelector } from '@/app/providers/store/config/hooks';
import { Text } from '@/shared/ui/Text/ui/Text';
import ReactPaginate from 'react-paginate';

const LIMIT = 12;

interface PageChangeEvent {
    selected: number;
}

export const SearchCats = () => {

    const [selectedPage, setSelectedPage] = useState(0);
    const catalogRef = useRef<HTMLDivElement>(null);

    const filterParams = useAppSelector(selectFilterParams);

    const params = useMemo(() => {
        return {
            ...Object.fromEntries(
                Object.entries(filterParams).map(([key, value]) => {
                    if (Array.isArray(value)) {
                        return [key, value.join(',')];
                    }
                    return [key, value];
                })
            ),
            page: selectedPage + 1,
        };
    }, [filterParams, selectedPage]);

    useEffect(() => {
        setSelectedPage(0);
    }, [filterParams]);

    const {
        data: { cats = [], totalCount } = {},
        error,
        isLoading
    } = useGetCatsQuery(params);

    let itemsPerPage = Math.ceil((totalCount || 0) / LIMIT);

    const handlePageChange = (event: PageChangeEvent) => {
        setSelectedPage(event.selected);

        window.scrollTo({
            top: catalogRef.current ? catalogRef.current.offsetTop : 0,
            behavior: 'smooth'
        });
    };
    
    return (
        <div ref={catalogRef}>
            <Filter />            
            {
                error
                    ? <Text size='l' className={styles.error}>
                        Сервер временно недоступен. Пожалуйста, обновите страницу или попробуйте позже.
                    </Text>
                    : <div className={(!isLoading && !cats?.length) ? styles.no_result : styles.grid}>
                        <CatList 
                            cats={cats} 
                            isLoading={isLoading} 
                            skeletons={6}
                            isCatalog
                        />
                    </div>
            }
            {
                totalCount > LIMIT && 
                <Stack justify='center'>
                    <ReactPaginate 
                        nextLabel=">"
                        previousLabel="<"
                        pageCount={itemsPerPage}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={3}
                        forcePage={selectedPage}
                        onPageChange={handlePageChange}
                        containerClassName={styles.container}
                        pageClassName={styles.page}
                        pageLinkClassName={styles.link}
                        previousClassName={styles.previous}
                        nextClassName={styles.next}
                        activeClassName={styles.active}
                        activeLinkClassName={styles.activeLink}
                        disabledClassName={styles.disabled}
                        breakClassName={styles.break}
                    />
                </Stack>
            }
        </div>
    );
};

