import m from './Message.module.css'

const Message = (props) => {
    return (
        <div className={m.messages}>
            <h1>Hello, {props.message}!</h1>
        </div>
    )
}

export default Message;