import { Img } from "./Img";

export const ContainerSections = ({ textSections }) => {
    return (
        <section id="containerSections">
            { textSections.map((textSection) => {
                return <Img key={ textSection.title } title={ textSection.title } text={ textSection.text } />;
            })}
        </section>
    )
}