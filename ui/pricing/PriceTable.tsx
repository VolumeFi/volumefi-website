import { priceOptions } from 'configs/services';
import SectionContainer from 'ui/common/SectionContainer';
import PriceOption from 'ui/pricing/PriceOption';
import style from 'ui/pricing/PriceTable.module.scss';

const PriceTable = () => (
  <SectionContainer>
    <section className={style.container}>
      {priceOptions.map((item) => (
        <PriceOption key={item.name} priceOption={item} />
      ))}
    </section>
  </SectionContainer>
);

export default PriceTable;
