import './DessertItem.css';

function DessertItem(props){
    const { dessert, onDessertClick } = props;
    return(
        <div className="dessert-item">
            <img src={dessert.thumbnailUrl} alt="Chocolate Cake" onClick={() => {onDessertClick(dessert)}}/>
            <h4>{dessert.title}</h4>
        </div>
    )
}

export default DessertItem;