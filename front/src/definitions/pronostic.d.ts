import type { People } from '@/definitions/people';

export interface Pronostic {
    id: string;
    date: Date;
    size: string;
    weight: string;
    names: string[];
    people: People;
}
