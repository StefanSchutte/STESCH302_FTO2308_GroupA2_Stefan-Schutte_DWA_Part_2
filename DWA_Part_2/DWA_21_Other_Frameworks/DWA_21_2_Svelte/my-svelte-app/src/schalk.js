//React
// const Button = (props) => {
//     return <button>{props.label}</button>
// }
//
// const List = () => {
//     return (
//         <div>
//             <Button label='Click me' />
//         </div>
//     )
// }

//do this in svelte
<script>
    export const label
</script>

<button>{label}</button>

<script>
    import Button from './Button.svelte'
</script>

<div>
    <Button label='click me'/>
</div>

<styles>

</styles>

// -----

