import { Box } from 'components/Box';
import { GetInTouch } from 'components/GetInTouch/GetInTouch';
import Link from 'next/link';
import { AllBots } from 'shared/configs/bots';
import SectionContainer from 'ui/common/SectionContainer';

import style from './Bots.module.scss';

const Bots = () => (
  <SectionContainer>
    <section className={style.container}>
      <h2 className={style.title}>Choose your decentralized activity</h2>
      <section className={style.products}>
        {Object.values(AllBots).map((bots, index) => (
          <Box key={index} className={style.product}>
            <Link href={bots.link} className={style.href}>
              <img className={style.image} src={bots.image} alt={bots.title} />
              <h3 className={style.title}>{bots.title}</h3>
              <div className={style.goImage} />
            </Link>
          </Box>
        ))}
      </section>
      <GetInTouch />
    </section>
  </SectionContainer>
);

export default Bots;
