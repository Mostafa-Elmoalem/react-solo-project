import React from 'react';
import "./style.css";
import {
  Header,
  Hero,
  Featured,
  How,
  Meals,
  Testimonials,
  Pricing,
  Cta,
  Footer
} from "./All-components.jsx";

function App() {
  console.log('App component is rendering!');
  
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Featured />
        <How />
        <Meals />
        <Testimonials />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;