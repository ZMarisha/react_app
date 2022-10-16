import d from './Dialogs.module.css';

const Dialogs = ({text, author, date, time}) => {

  return (
    <div className={d.dialogs}>
      <p className={d.text}>{text}</p>
      <div className={d.blockAuthor}>
        <div>
          <p><span className={d.mailer}>Author: </span>{author ? author : 'anonymous'}</p>
          <p><span className={d.mailer}>Date: </span>{date}</p>
          <p><span className={d.mailer}>Time: </span>{time}</p>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;