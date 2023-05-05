import { Box } from 'components/Box';
import { productsAndService } from 'configs/home';
import SectionContainer from 'ui/common/SectionContainer';
import style from 'ui/home/ProductsAndService.module.scss';

const ProductsAndService = () => (
  <SectionContainer>
    <section className={style.container}>
      <h2 className={style.title}>Volume Products and Services</h2>
      <p className={style.description}>Volume already supports Decentralized Key Management Applications</p>
      <section className={style.products}>
        {productsAndService.map((item) => (
          <Box key={item.title} className={style.product}>
            <img className={style.image} src={item.image} alt={item.title} />
            <p className={style.text}>{item.text}</p>
          </Box>
        ))}
      </section>
    </section>
  </SectionContainer>
);

export default ProductsAndService;
