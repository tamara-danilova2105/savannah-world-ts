import { CatList } from './ui/CatList/CatList';
import { CatCard } from './ui/CatCard/CatCard';
import { 
    getCatCard,
    default as catCard,
} from './model/slices/slice';

export type { Cat } from './model/types/cat';

export { 
    CatList,
    CatCard,
    catCard,
    getCatCard,
}