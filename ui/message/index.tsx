import style from 'ui/message/index.module.scss';
import Intro from 'ui/message/Intro';
import MessageBoard from 'ui/message/MessageBoard';

const MessageContainer = () => (
  <section className={style.container}>
    <Intro />
    <MessageBoard />
  </section>
);

export default MessageContainer;
