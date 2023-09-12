import { Box } from 'components/Box';
import { ourBots } from 'shared/configs/bots';
import SectionContainer from 'ui/common/SectionContainer';

import style from './Bots.module.scss';

const Bots = () => (
  <SectionContainer>
    <section className={style.container}>
      <h2 className={style.title}>Choose one from our most popular</h2>
      <section className={style.products}>
        {ourBots.map((item) => (
          <Box key={item.title} className={style.product}>
            <a href={item.link} target="_blank" rel="noreferrer" className={style.href}>
              <img className={style.image} src={item.image} alt={item.title} />
              <h3 className={style.title}>{item.title}</h3>
              <p className={style.text}>{item.text}</p>
            </a>
          </Box>
        ))}
      </section>
    </section>
  </SectionContainer>
);

export default Bots;
