import { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={props.name}>{props.name}: </label>
            <input {...props} />
        </div>
    )
}