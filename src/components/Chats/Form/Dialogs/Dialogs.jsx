import { useTheme } from '@emotion/react';
import d from './Dialogs.module.css';

const Dialogs = ({text, author, date, time}) => {
  
const theme = useTheme()
  return (
    <div className={d.dialogs} style={{border: theme.palette.primary.border}}>
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