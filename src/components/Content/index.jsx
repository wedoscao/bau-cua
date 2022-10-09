import { useContext } from "react";
import { AppContext } from "/src/App";
import Header from "./ContentHeader";
import "./Content.scss";

export default function Content() {
    const { setChosenSquare, chosenSquare, isClosed } = useContext(AppContext);
    return (
        <div className="Content">
            <Header />
            <div className="Content__baucua">
                <div className="Content__baucua-img">
                    <div className="Content__baucua-choose">
                        <div
                            id="cop"
                            className="Content__baucua-square"
                            onClick={
                                isClosed
                                    ? () => {}
                                    : (e) => {
                                          setChosenSquare(e.target.id);
                                      }
                            }
                        ></div>
                        <div
                            id="bau"
                            className="Content__baucua-square"
                            onClick={
                                isClosed
                                    ? () => {}
                                    : (e) => {
                                          setChosenSquare(e.target.id);
                                      }
                            }
                        ></div>
                        <div
                            id="ga"
                            className="Content__baucua-square"
                            onClick={
                                isClosed
                                    ? () => {}
                                    : (e) => {
                                          setChosenSquare(e.target.id);
                                      }
                            }
                        ></div>
                        <div
                            id="tom"
                            className="Content__baucua-square"
                            onClick={
                                isClosed
                                    ? () => {}
                                    : (e) => {
                                          setChosenSquare(e.target.id);
                                      }
                            }
                        ></div>
                        <div
                            id="ca"
                            className="Content__baucua-square"
                            onClick={
                                isClosed
                                    ? () => {}
                                    : (e) => {
                                          setChosenSquare(e.target.id);
                                      }
                            }
                        ></div>
                        <div
                            id="cua"
                            className="Content__baucua-square"
                            onClick={
                                isClosed
                                    ? () => {}
                                    : (e) => {
                                          setChosenSquare(e.target.id);
                                      }
                            }
                        ></div>
                    </div>
                </div>
                <div className="Content--chosen-square">
                    <span>
                        Bạn đã chọn <span>{chosenSquare}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
