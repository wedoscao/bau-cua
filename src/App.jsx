import { createContext, useEffect, useState } from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import "./App.scss";

const date = new Date();
const AppContext = createContext(null);
if (!localStorage.getItem("resultList")) {
    localStorage.setItem("resultList", JSON.stringify([]));
}

export default function App() {
    const [chosenSquare, setChosenSquare] = useState(null);
    const [isClosed, setIsClosed] = useState(false);
    const [result, setResult] = useState({});
    const [resultList, setResultList] = useState(JSON.parse(localStorage.getItem("resultList")));

    useEffect(() => {
        if (result.data !== undefined) {
            if (resultList.length < 22) {
                resultList.unshift({
                    time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                    result: result.data,
                });
            } else {
                resultList.pop();
                resultList.unshift({
                    time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                    result: result.data,
                });
            }
            localStorage.setItem("resultList", JSON.stringify(resultList));
        }
    }, [result]);
    return (
        <div className="App">
            <AppContext.Provider
                value={{
                    chosenSquare,
                    setChosenSquare,
                    isClosed,
                    setIsClosed,
                    result,
                    setResult,
                    resultList,
                    setResultList,
                }}
            >
                <Content />
                <Sidebar />
            </AppContext.Provider>
        </div>
    );
}

export { AppContext };
