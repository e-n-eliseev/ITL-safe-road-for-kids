import ReactPlayer from "react-player";

const Video = () => {
    return (
        <section className="video">
            <h2 className="video__heading"> Пожалуйста, посмотрите видео ниже для закрепления основных правил поведения на дороге. </h2>
            <div className="video__url">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=klxderXnVPc"
                />
            </div >
        </section>

    )
}

export default Video;