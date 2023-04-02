export const Img = ({title, text}) => {
    return (
        <section className="imgArticle">
            <img src="https://picsum.photos/200/200" alt={ title } />
            <div>
                <h1>{ title }</h1>
                <p className="imgText">{ text }</p>
            </div>
        </section>
    )
}