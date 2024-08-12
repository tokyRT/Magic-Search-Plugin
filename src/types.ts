import { EventHandler } from '@create-figma-plugin/utilities'

export type TImageUris = {
    normal: string,
    png: string
}
export type TMagicCard = {
    id: number;
    scryfallId: string;
    name: string;
    faces: TImageUris;
}

export interface AddCardsHandler extends EventHandler {
    name: 'ADD_CARDS',
    handler: (cards: TMagicCard[]) => void
}