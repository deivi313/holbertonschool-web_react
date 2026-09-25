import './Notifications.css'
import closeIcon from './assets/close-button.png'
import { getLatestNotification } from './utils'

const Notification = () => {
  return <div className="notification-items">

    <p>Here is the list of notifications</p>

    <button
      style={{ position: "absolute", top: "15px", right: "20px" }}
      aria-label="Close"
      onClick={() => console.log('Close button has been clicked')}>
      <img src={closeIcon} alt="close icon" style={{ width: '10px', height: '10px' }} />
    </button>

    <p>Here is the list of notifications</p>

    <ul>
      <li data-priority="default">New course available</li>
      <li data-priority="urgent">New resume available</li>
      <li
        data-priority="urgent"
        dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
      />
    </ul>

  </div>
}
export default Notification;