import './NavBar.css';

function NavBar() {

    return (
        <nav className='container'>
            <ul>
                <p>About Me</p>
                <p>Portfolio</p>
                <p>Social</p>

                {/* 
                li><link to=''>About Me</link></li>
                <li><link to=''>Portfolio</link></li>
                <li><link to=''>Social</link></li> */}
            </ul>
        </nav>
    )
}

export default NavBar;