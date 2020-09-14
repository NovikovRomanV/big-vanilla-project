import React, {ChangeEvent, MouseEvent} from "react";

export const Callbacks = () => {
    function del (event: MouseEvent<HTMLButtonElement>) {
        console.log(event.currentTarget.name)
    }

    const sav = () => {
        alert("save")
    }

    const userText = (event: ChangeEvent<HTMLTextAreaElement> ) => {
            console.log("text: " + event.currentTarget.value)
    }

    function inputText (event: ChangeEvent<HTMLInputElement>) {
        console.log("input text: " + event.currentTarget.value)
    }

    const userLostFocus = () => {
        console.log("focus")
    }

    return (
        <div>
            <textarea onChange={userText} onBlur={userLostFocus}></textarea>
            <input onChange={inputText}/>
            <button name = {"delete"} onClick={del}>delete</button>
            <button onClick={sav}>save</button>
        </div>
    )
}