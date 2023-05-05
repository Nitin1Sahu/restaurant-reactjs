import Menu from '../components/menuApi'
import MenuCard from '../components/MenuCard'
function Lunch() {
    return (
        <>
            <div className="menu-card-container">
                {Menu.map(item => {
                    if (item.category === "lunch") {
                        return (
                            <><MenuCard id={item.id} image={item.image} name={item.name} category={item.category} price={item.price} description={item.description} /></>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default Lunch