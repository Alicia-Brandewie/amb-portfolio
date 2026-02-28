import './NavBar.css';

function NavBar() {

    return (
        <nav className='nav-container'>
            <ul>
                <h2><a class='link-content' href='#about'>About</a></h2>
                <h2><a class='link-content' href='#portfolio'>Portfolio</a></h2>
                <h2><a class='link-content' href='#contact'>Contact</a></h2>
            </ul>
        </nav>
    )
}

export default NavBar;
