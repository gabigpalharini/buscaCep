import React from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import BuscaCep from './componentes/BuscaCepForm';
import styles from "./App.module.css"
function App() {
  return (
    <div>
    <Header />
    <main className={styles.main}>
      <BuscaCep />
    </main>
    <Footer />
    </div>
  );
}

export default App;
