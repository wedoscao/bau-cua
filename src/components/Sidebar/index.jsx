import { useContext } from "react";
import { AppContext } from "/src/App";
import "./Sidebar.scss";

export default function Sidebar() {
    const { resultList } = useContext(AppContext);
    return (
        <div className="Sidebar">
            <ul className="Sidebar__result-list">
                {resultList.map((result, index) => {
                    return (
                        <li key={index} className="Sidebar__result-item">
                            <span className="Sidebar__result-time">{result.time}</span>
                            <span
                                className={`Sidebar__result-alert Sidebar__result-alert--${
                                    result.result ? `win` : `lose`
                                }`}
                            >
                                {result.result ? " Chúc mừng bạn đã thắng!" : " Rất tiếc! Bạn đã thua."}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
