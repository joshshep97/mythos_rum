import React from 'react';

// import all components from container
import {About, Footer, Header, Hero, PinnedProduct} from './components/container'

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