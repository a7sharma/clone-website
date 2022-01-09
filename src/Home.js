import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='Home'>
            <img className='Home__image'src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt='' />

            <div className='Home__Row'>
            <Product 
    id="1234"
    title="boAt Airdopes 44 Bluetooth Truly Wireless in Ear Earbuds with Mic (Spirit Lime)"
    price={ 1490.00}
    rating={5}
    image="https://images-eu.ssl-images-amazon.com/images/I/31L3rQazQ3L._AC_SX184_.jpg"
    />
     <Product 
    id="1234"
    title="Sennheiser CX 120BT Wireless Bluetooth "
    price={1590.00}
    rating={5}
    image="https://images-eu.ssl-images-amazon.com/images/I/31PU4kWou+L._AC_SX184_.jpg"
    />


            </div>
     <div className='Home__Row'>
     <Product 
    id="1234"
    title="EDICT by Boat DynaBeats EWH01 "
    price={499.00}
    rating={5}
    image="https://images-eu.ssl-images-amazon.com/images/I/31hEytFiulS._AC_SX184_.jpg"
    />
    <Product 
    id="1234"
    title="Fire-Boltt Buds BE1400 "
    price={1499}
    rating={5}
    image="https://images-eu.ssl-images-amazon.com/images/I/31QQ-e2v+0S._AC_SX184_.jpg"
    />
    <Product 
    id="1234"
    title="ZEBRONICS Zeb-Warrior II 10 watts 2.0"
    price={700}
    rating={5}
    image="https://images-eu.ssl-images-amazon.com/images/I/41cUmIYRfVL._AC_SX184_.jpg"
    />
     </div>
     <div className='Home__Row'>
     <Product 
    id="1234"
    title="Fujitsu UH-X 11th Gen Intel Core i5 13.3 inches FHD IPS 400Nits Thin and Light Business Laptop"
    price={59900}
    rating={5}
    image="https://images-eu.ssl-images-amazon.com/images/I/41gEpWXBDnL._AC_SX184_.jpg"
    />
     </div>
    </div>

    )
}

export default Home;
