import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            {/* <ul> */}
            <div className="nav">
                <div className="nav-links">
                    <Link className='link' to='/'>Breakfast</Link>
                    <Link className='link' to='/lunch'>Lunch</Link>
                    <Link className='link' to='/evening'>Eve</Link>
                    <Link className='link' to='/dinner'>Dinner</Link>
                    <Link className='link' to='/fulldaymeal'>Fullday</Link>
                </div>
            </div>
            {/* </ul> */}
        </>
    )
}

export default Navbar