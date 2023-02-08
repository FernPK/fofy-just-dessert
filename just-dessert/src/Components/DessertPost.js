import './DessertPost.css';

function DessertPost(props){
    const { dessert, onBgClick } = props;
    return (
        <div className="dessert-post">
            <div className="dessert-post-bg" onClick={onBgClick} />
            <div className="dessert-post-content">
                <img src={dessert.fullUrl} alt="cake" />
                <h3>{dessert.title}</h3>
            </div>
        </div>
    )
}

export default DessertPost;