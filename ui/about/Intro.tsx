import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { envParams } from 'shared/configs/constants';
import { StaticLink } from 'shared/configs/links';
import style from 'ui/about/Intro.module.scss';
import SectionContainer from 'ui/common/SectionContainer';


const Intro = () => {
  const router = useRouter();
  // State to hold the fetched data
  const [data, setData] = useState({
    bots_total: '200', // default value
    volume_total: 0, // default value
  });

  useEffect(() => {
    // Fetch data from the URL when the component mounts
    fetch('https://service.palomabot.ai/stats')
      .then(async (response) => response.json())
      .then((bot) => {
        // Update the state with the new data
        setData({
          bots_total: bot.bots_total,
          volume_total: Math.ceil(bot.volume_total),
        });
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, []); // Empty dependency array means this effect runs once on mount

  const handleJoinWaitlist = () => {
    router.push(StaticLink.Signup);
  };

  // Calculate total volume in a readable format (e.g., converting to millions, if necessary)
  const formattedVolume = new Intl.NumberFormat().format(data.volume_total); // You might want to format this number to a more readable format

  return (
    <SectionContainer>
      <section className={style.container}>
        <div className={style.textWrapper}>
          <div className={style.sub}>Securely Manage your onchain funds with blockchain bots</div>
          {/* Dynamic text based on fetched data */}
          <h1 className={style.title}>
            Over {data.bots_total} intelligent and decentralized bots managing ${formattedVolume}
          </h1>
          <p className={style.description}>
            Unlock the power of the blockchain, zero-knowledge cryptography, and artificial intelligence to create
            intelligent blockchain applications quickly.
          </p>
        </div>
        {/* Rest of your code remains unchanged */}
        <a href={envParams.palomabot} target="_blank" rel="noreferrer" className={style.launchBot}>
          Launch a Free Bot
        </a>
      </section>
    </SectionContainer>
  );
};

export default Intro;
