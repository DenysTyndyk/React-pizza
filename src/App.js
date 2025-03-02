import React from 'react';
import axios from "axios";
import { Header } from './Components/index';
import { Home, Cart } from './Pages/index';
import { Routes, Route } from 'react-router-dom';


function App() {

   const [Pizzas,setPizzas] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:3000/pizzas.json").then(({data})=>{
            setPizzas(data.pizzas)
        });

    },[]);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home items = {Pizzas} />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;