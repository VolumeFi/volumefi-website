import SectionContainer from 'ui/common/SectionContainer';

import style from 'ui/home/TotalTransactions.module.scss';

const TotalTransactionCount = () => (
  <SectionContainer fullScreenWidth>
    <section className={style.container}>
      <div className={style.sub}>With over</div>
      <h2 className={style.title}>{`$1,928,918`}</h2>
      <p className={style.text}>Blockchain-secured Transactions</p>
    </section>
  </SectionContainer>
);

export default TotalTransactionCount;
