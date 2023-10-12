import { Box } from 'components/Box';
import { GetInTouch } from 'components/GetInTouch/GetInTouch';
import Link from 'next/link';
import { AllBots, BotList } from 'shared/configs/bots';
import styled from 'styled-components';
import SectionContainer from 'ui/common/SectionContainer';

import style from './bots.module.scss';

interface BotsProps {
  botType: string;
}

const Bots = ({ botType }: BotsProps) => {
  const StyledContainer = styled.div`
    background-image: url(${AllBots[botType].image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 450px;
    width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    @media screen and (max-width: 768px) {
      gap: 16px;
      width: 100%;
    }
  `;

  return (
    <SectionContainer>
      <section className={style.container}>
        <StyledContainer>
          <h3 className={style.headTitle}>{AllBots[botType].title}</h3>
          <p className={style.headDescription}>{AllBots[botType].description}</p>
        </StyledContainer>
        <div className={style.botsWrapper}>
          {BotList[botType].map((bot, index) => (
            <Box key={index} className={style.product}>
              <div className={style.botDescription}>
                <div className={style.icon}>
                  <img className={style.image} src={bot.image} alt={bot.title} width="93" height="93" />
                </div>
                <div className={style.text}>
                  <h3 className={style.title}>{bot.title}</h3>
                  <p className={style.description}>{bot.description}</p>
                </div>
              </div>
              <a href={bot.link} target="_blank" rel="noreferrer" className={style.startBot}>
                Start Bot
              </a>
            </Box>
          ))}
          <GetInTouch />
        </div>
      </section>
    </SectionContainer>
  );
};

export default Bots;
