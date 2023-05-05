function MenuCard({ id, image, name, category, price, description }) {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-heading">
                        <div className="card-number">{id}</div>
                        <div className="card-title">{category}</div>
                    </div>
                    <img src={image} alt="Maggi Image" />
                    <div className="name-price">
                        <h1>{name}</h1>
                        <div className="order">
                            <div className="price">{price}</div>
                            <button>Order</button>
                        </div>
                    </div>
                    <div className="description">{description}</div>
                </div>
            </div>
        </>
    )
}

export default MenuCard