export const Navbar = ({ menu }) => {
    return (
        <header id="header">
            <div className="headerContainer">
                <nav className="headerMenu">
                    <ul>
                        {menu.map(link => <li key={ link.name }><a href={ link.link } className="headerMenuLink">{ link.name }</a></li>)}
                    </ul>
                </nav>
            </div>
        </header>
    )
}