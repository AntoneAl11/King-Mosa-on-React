import React from 'react';
import Header from './componets/header';
import Footer from './componets/footer';
import Producto from './componets/Producto';
import './App.css';

function App() {
  const productos = [
    { id: 1, nombre: "Pizza Micro", precio: 35 },
    { id: 2, nombre: "Pizza Personal", precio: 99 },
    { id: 3, nombre: "Pizza Grande", precio: 179 },
  ];
  return (
    <div className="App">
      <Header/>
      <main>
        {productos.map(producto => <Producto key={producto.id} nombre={producto.nombre} precio={producto.precio}/> )}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
