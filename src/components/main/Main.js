import Video from "../video/Video";
import Info from "./info/Info";
import Rules from "./rules/Rules";
import Signs from "./signs/Signs";

const Main = () => {
    return (
        <main className="main">
            <Info />
            <Rules />
            <Signs />
            <Video />
        </main>
    )
}

export default Main;