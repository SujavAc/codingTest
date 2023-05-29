import { CardProps } from "../Card/Card.model";

export interface FilterChipsProps {
    chips?: Pick<CardProps, "articleTag">[];
}
