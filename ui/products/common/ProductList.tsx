import classNames from 'classnames';
import { Box } from 'components/Box';
import style from 'ui/products/common/ProductList.module.scss';

import type { ColorType } from 'components/Box/types';
import type { ProductDetail } from 'shared/configs/products';

interface ProductListProps {
  title: string;
  products: ProductDetail[];
  className?: string;
  theme?: ColorType;
}

const ProductList = ({ title, products, theme, className }: ProductListProps) => (
  <section className={style.container}>
    <h2 className={style.title}>{title}</h2>
    <section className={classNames(style.productListWrapper, className)}>
      {products.map((item, index) => (
        <Box key={`${item.text}-${index}`} className={style.product} fill="outline" color={theme}>
          <div className={style.imageWrapper}>{item.image && <img src={item.image} />}</div>
          <div className={style.productTitle}>{item.title}</div>
          <p className={style.productText}>{item.text}</p>
        </Box>
      ))}
    </section>
  </section>
);

export default ProductList;
