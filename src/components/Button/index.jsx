import { Fragment, useEffect } from "react";
import "./Button.scss";

export default function Button({ title = "Button", type = "green", className, onClick, id }) {
    return (
        <Fragment>
            <button id={id} className={`btn--${type}` + " " + (className ? className : ``)} onClick={onClick}>
                {title}
            </button>
        </Fragment>
    );
}
