import { State } from '@/enums/states';

export interface Product {
    id: string;
    name: string;
    link: string;
    price?: string;
    img?: string;
    desc?: string;
    state: State;
}
