export const Sidebar = ({ menu }) => {
    return (
        <section id="sidebarSection">
            <ul> { menu.map(sectionLink => <li key={ sectionLink.name }><a href={sectionLink.link } className="sidebarLink">{ sectionLink.name }</a></li>) }
            </ul>
        </section>
    )
}