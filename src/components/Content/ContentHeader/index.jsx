import { useContext } from "react";
import { AppContext } from "../../../App";
import Button from "../../Button";
import "./ContentHeader.scss";

export default function ContentHeader() {
    const { chosenSquare, setIsClosed, isClosed, setResult } = useContext(AppContext);
    const handleRoll = () => {
        if (chosenSquare) {
            if (isClosed) {
                document.querySelector("audio").play();
                document.querySelectorAll("button").forEach((element) => {
                    element.style.pointerEvents = "none";
                });
                setTimeout(() => {
                    const number = Math.round(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) + Math.ceil(1);
                    let square;
                    switch (number) {
                        case 1:
                            square = "cop";
                            break;
                        case 2:
                            square = "bau";
                            break;
                        case 3:
                            square = "ga";
                            break;
                        case 4:
                            square = "tom";
                            break;
                        case 5:
                            square = "ca";
                            break;
                        case 6:
                            square = "cua";
                            break;
                    }
                    setResult({ data: square === chosenSquare });
                    setIsClosed(false);
                    document.querySelectorAll("button").forEach((element) => {
                        element.style.pointerEvents = "auto";
                    });
                    document.querySelector(`#close-btn`).click();
                }, 2000);
            } else {
                alert("Hãy đóng sòng trước khi đổ xúc sắc!!!");
            }
        }
    };
    return (
        <div className="ContentHeader">
            <audio src="/src/assets/sounds/dice-roll.mp3" />
            <ul className="ContentHeader__imgs">
                <li className="ContentHeader__img">
                    <img src="https://github.com/wedoscao/bau-cua/blob/main/src/assets/imgs/app/1-cop.jpg" />
                </li>
                <li className="ContentHeader__img">
                    <img src="https://github.com/wedoscao/bau-cua/blob/main/src/assets/imgs/app/2-bau.jpg" />
                </li>
                <li className="ContentHeader__img">
                    <img src="https://github.com/wedoscao/bau-cua/blob/main/src/assets/imgs/app/3-ga.jpg" />
                </li>
            </ul>
            <div className="ContentHeader__control">
                <div className="ContentHeader__paragraph">
                    {isClosed ? `SÒNG ĐANG ĐÓNG. Bắt đầu đổ xúc sắc!!!` : `SÒNG ĐANG MỞ. Đặt đi bà con!!!`}
                </div>
                <div className="ContentHeader__btns">
                    <Button
                        id="close-btn"
                        type="red"
                        title="Đóng sòng"
                        className={`ContentHeader__btn`}
                        onClick={() => {
                            setIsClosed(true);
                        }}
                    />
                    <Button id="roll-btn" title="Lắc" className={`ContentHeader__btn`} onClick={handleRoll} />
                    <Button
                        id="open-btn"
                        type="blue"
                        title="Mở sòng"
                        className={`ContentHeader__btn`}
                        onClick={() => {
                            setIsClosed(false);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
