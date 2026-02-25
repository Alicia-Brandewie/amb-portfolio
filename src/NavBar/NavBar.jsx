import './NavBar.css';

function NavBar() {

    return (
        <nav className='nav-container'>
            <ul>
                <a class='link-content' href='#about'>About</a>
                <a class='link-content' href='#portfolio'>Portfolio</a>
                <a class='link-content' href='#contact'>Contact</a>

            </ul>
        </nav>
    )
}

export default NavBar;
