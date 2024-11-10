import css from './buttons.module.css';


function Buttons(props) {


    return (
        <div className={css.btn}>
            <button onClick={props.prevOnClick}>prev</button>
            <button onClick={() => props.showPage(1)}>{props.page + 1}</button>
            <button onClick={() => props.showPage(2)}>{props.page + 2}</button>
            <button onClick={() => props.showPage(3)}>{props.page + 3}</button>
            <button onClick={props.nextOnClick}>next</button>
        </div >
    )
}
export default Buttons;