import { Box } from 'components/Box';
import { productsAndService } from 'shared/configs/home';
import style from 'ui/about/ProductsAndService.module.scss';
import SectionContainer from 'ui/common/SectionContainer';

const ProductsAndService = () => (
  <SectionContainer>
    <section className={style.container}>
      <h2 className={style.title}>Volume’s Key Management Services</h2>
      <p className={style.description}>See the difference in cost and security.</p>
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
