import { Box } from 'components/Box';
import { privateKeyManagement } from 'configs/home';
import SectionContainer from 'ui/common/SectionContainer';
import style from 'ui/home/PrivateKeyManagement.module.scss';

const PrivateKeyManagement = () => (
  <SectionContainer>
    <section className={style.container}>
      <h2 className={style.title}>Volume Private Key Management</h2>
      <p className={style.description}>Volume Already Supports Decentralized Key Management Applications</p>
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
