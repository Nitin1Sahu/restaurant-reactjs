import MenuCard from "../components/MenuCard"
import Menu from "../components/menuApi"
function Breakfast() {
    return (
        <>
            <div className="menu-card-container">
                {Menu.map(item => {
                    if (item.category === "breakfast") {
                        return (
                            <><MenuCard id={item.id} image={item.image} name={item.name} category={item.category} price={item.price} description={item.description} /></>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default Breakfast