import { useState } from "react";
import "./Reklama.scss";

const Reklama = () => {

const [open, setOpen] = useState(false);

const handleBtnDelete = () => {
    setOpen(!open)
};

    return (
        <div className={open ? "reklama reklama--delete": "reklama"}>
            <div className="container">
                <strong className="reklama__title">Сумма минимального заказа 1000 ₽</strong>
                <button onClick={handleBtnDelete} className="reklama__btn"></button>
            </div>
        </div>
    )
}

export default Reklama;