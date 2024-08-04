import { EventHandler } from '@create-figma-plugin/utilities'

export type TMagicCard = {
    id: string;
    img: string;
    name?: string;
}

export interface AddCardsHandler extends EventHandler {
    name: 'ADD_CARDS',
    handler: (cards: TMagicCard[]) => void
}