export const Menu = ({ sections }) => {
    return (
        <section id="sectionMenu">
            <ul>
                { sections.map(section => <li key={ section.name }><a href={section.link } className="sectionLink">{ section.name}</a></li>)}
            </ul>
        </section>
    )
}