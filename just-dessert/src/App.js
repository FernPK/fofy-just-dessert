import { useState } from 'react';
import './App.css';
import AppHeader from './Components/AppHeader';
import AppSearch from './Components/AppSearch';
import DessertItem from './Components/DessertItem';
import DessertPost from './Components/DessertPost';
import desserts from './Data/desserts';

function App() {
    const [selectedDessert, setSelectedDessert] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onDessertOpenClick(theDessert){
        setSelectedDessert(theDessert);
    }

    function onDessertCloseClick(){
        setSelectedDessert(null);
    }

    //const filteredDesserts = desserts.filter((dessert) => {
        //return dessert.title.includes(searchText);
    //});
    const dessertElements = desserts.filter((dessert) => {
        return dessert.title.includes(searchText);
    }).map((dessert, index) => {
        return <DessertItem key={index} dessert={dessert} onDessertClick={onDessertOpenClick} />
    });

    let dessertPost = null;
    if(!!selectedDessert){
        dessertPost = <DessertPost dessert={selectedDessert} onBgClick={onDessertCloseClick} />
    }

    return (
        <div className="app">
            <AppHeader />
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {dessertElements}
                    </div>
                </div>
            </section>
            {dessertPost}
        </div>
    );
}

export default App;
