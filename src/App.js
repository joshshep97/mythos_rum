import React from 'react';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import PinnedProduct from './components/PinnedProduct/PinnedProduct'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <PinnedProduct />
            <Footer />
        </div>
    )
}

export default App;