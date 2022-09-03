import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardTest from "./pages/cardtest";
import ListTest from "./pages/ListTest";
import FormTest from "./pages/FormTest";
import HomePage from "./pages/HomePage";
import CardStore from "./store/CardStore";

type Card = {
  id: number;
  title: string;
  done: boolean;
  doneAt: string;
  description: string;
  createdAt: string;
};
interface ICardListContext {
  cards: CardStore;
}

const defaultState = {
  cards: new CardStore(),
};

export const Context = createContext<ICardListContext>(defaultState);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider value={defaultState}>
      <BrowserRouter>
        <Routes>
          <Route path="/test/cards" element={<CardTest />} />
          <Route path="/test/list" element={<ListTest />} />
          <Route path="/test/form" element={<FormTest />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);
