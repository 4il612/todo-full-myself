import { makeAutoObservable } from "mobx";

type Card = {
  id: number;
  title: string;
  done: boolean;
  doneAt: string;
  description: string;
  createdAt: string;
};

export default class CardStore {
  private _cards: Card[];
  constructor() {
    this._cards = [];
    makeAutoObservable(this);
  }

  setCards(cards: Card[]) {
    this._cards = cards;
  }

  deleteCard(cardId: number) {
    this._cards = this._cards.filter((item) => {
      return item.id !== cardId;
    });
    console.log(this.cards);
  }

  addCard(card: Card) {
    this._cards.push(card);
  }

  get cards(): Card[] {
    return this._cards;
  }
}
