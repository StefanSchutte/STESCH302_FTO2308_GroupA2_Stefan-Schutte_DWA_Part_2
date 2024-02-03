import React from "react"

export default function Box(props) {

    const [on, setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: on ? "#222222" : "transparent",
    }

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
        <button style={styles}
             className="box"
             /*onClick={toggle}*/
             onClick={()=> props.toggle(props.id)}
        >

        </button>
    )
}