import React from "react";
import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import Pokemons2 from "./components/Pokemons2/Pokemons2";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import Users from "./components/Users/Users";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import ProductsList from "./components/ProductsList/ProductsList";

// в хедере есть условный рендеринг
// если закончишь рассказывать про react-router-dom, Link, useLocation и останется время, то добавь еще два роута '/add' и '/products' и начни верстать форму для добавления продукта с ключами title, price, image, все данные храни в стейтах, при клике сделайте проверку на заполненность и если там все ок, то с помощью useNavigate перекинь на '/products', если не ок, то останется на том же роуте '/add', так они увидят разницу между Link и useNavigate - что в Link нельзя задать условие на переход

const App = () => {
  return (
    // указываем что роутинг будет в браузере
    <BrowserRouter>
      {/* header будет на всех наших страницах */}
      <Header />
      {/* для перечисления роутов */}
      <Routes>
        {/* непосредственно сами роуты */}
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons-2" element={<Pokemons2 />} />
        <Route path="/rick-and-morty" element={<RickAndMorty />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/products" element={<ProductsList />} />
      </Routes>
      {/* footer будет на всех страницах */}
      <h1>Footer</h1>
    </BrowserRouter>
    // <div>
    //   <Header />
    //   <Pokemons />
    //   <Pokemons2 />
    //   <RickAndMorty />
    //   <Users />
    // </div>
  );
};

export default App;
