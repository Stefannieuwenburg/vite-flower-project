import Flowers from "./components/Flowers";
import FlowersData from "./components/FlowersData";
import "./main.css";

const App = () => {
    return (
        <>
            <h1>About flowers</h1>
            <div className="container">
                {FlowersData.map((data) => {
                    return (
                        <>
                            <Flowers
                                title={data.title}
                                imgsrc={data.imgsrc}
                                text={data.text}
                                btn={data.btn}
                            />
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default App;
