import { Box } from 'components/Box';
import { privateKeyManagement } from 'configs/home';
import style from 'ui/about/PrivateKeyManagement.module.scss';
import SectionContainer from 'ui/common/SectionContainer';

const PrivateKeyManagement = () => (
  <SectionContainer>
    <section className={style.container}>
      <h2 className={style.title}>Decentralized management of private keys and smart contracts</h2>
      <section className={style.products}>
        {privateKeyManagement.map((item) => (
          <Box key={item.title} className={style.product}>
            <img className={style.image} src={item.image} alt={item.title} />
            <h3 className={style.title}>{item.title}</h3>
            <p className={style.text}>{item.text}</p>
          </Box>
        ))}
      </section>
    </section>
  </SectionContainer>
);

export default PrivateKeyManagement;
