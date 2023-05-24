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
        <Box key={`${item.title}-${index}`} className={style.product} fill="outline" color={theme}>
          <div className={style.imageWrapper}>{item.image && <img src={item.image} />}</div>
          <div className={style.productTitle}>{item.title}</div>
          {Array.isArray(item.text) && (
            <ul>
              {item.text.map((text, index2) => (
                <li key={`${item.title}-${index}-${index2}`} className={style.productText}>
                  {text}
                </li>
              ))}
            </ul>
          )}
          {!Array.isArray(item.text) && <p className={style.productText}>{item.text}</p>}
        </Box>
      ))}
    </section>
  </section>
);

export default ProductList;
