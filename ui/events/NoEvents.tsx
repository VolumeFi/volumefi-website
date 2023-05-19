import classNames from 'classnames';
import JoinWaitlistButton from 'ui/common/JoinWaitListButton';
import style from 'ui/events/NoEvents.module.scss';

const NoEvents = ({ className }: DefaultComponentProps) => (
  <section className={classNames(style.container, className)}>
    <img className={style.image} src="/assets/events/no-events.svg" />
    <div className={style.title}>Oops! No events for now</div>
    <p className={style.description}>Join our Community for Upcoming Events</p>
    <JoinWaitlistButton className={style.join} />
  </section>
);

export default NoEvents;
