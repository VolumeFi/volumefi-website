import { useMemo } from 'react';

import { Button } from 'components/Button';
import dateTools from 'shared/tools/date';
import { NODE_IMAGE, render } from 'storyblok-rich-text-react-renderer';
import style from 'ui/events/EventItem.module.scss';

const EventItem = ({ event }) => {
  const eventLink = useMemo(() => {
    if (!event) return null;

    const link = {
      register: '',
      register_info: null,
      learnMore: '',
      learnMore_info: null,
    };

    if ('Register' in event.content) {
      link.register = event.content.Register.url;
      link.register_info = event.content.Register;
    }

    if ('LearnMore' in event.content) {
      link.learnMore = event.content.LearnMore.url;
      link.learnMore_info = event.content.LearnMore;
    }

    return link;
  }, [event]);

  const handleLearnMore = () => {
    if (eventLink?.register) {
      window.open(eventLink.register, '_blank');
    } else if (eventLink?.learnMore) {
      window.open(eventLink.learnMore, '_blank');
    }
  };

  return (
    <section className={style.container}>
      <img className={style.image} src={event.content.Image.filename} />
      <section className={style.contentWrapper}>
        <span className={style.date}>{dateTools.convertDateStringWithWeekDay(event.content.EventTime, true)}</span>
        <section className={style.description}>
          {render(event.content.Description, {
            nodeResolvers: {
              [NODE_IMAGE]: (children, props) => <img {...props} style={{ borderRadius: '0px', maxWidth: '100%' }} />,
            },
            blokResolvers: {
              ['YouTube-blogpost']: (props) => (
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    src={
                      'https://www.youtube.com/embed/' + props.YouTube_id?.toString().replace('https://youtu.be/', '')
                    }
                  ></iframe>
                </div>
              ),
            },
          })}
        </section>
        <Button className={style.learnMore} variant="outline" onClick={() => handleLearnMore()}>
          Learn More...
        </Button>
      </section>
    </section>
  );
};

export default EventItem;
