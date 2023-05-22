import { testimonials } from 'shared/configs/home';
import style from 'ui/about/Testimonials.module.scss';
import SectionContainer from 'ui/common/SectionContainer';

const Testimonials = () => (
  <SectionContainer>
    <section className={style.container}>
      <h1 className={style.title}>What Clients Say</h1>
      <section className={style.testimonialsWrapper}>
        {testimonials.map((item, index) => (
          <section key={`testimonial-${index}`} className={style.testimonial}>
            <img src={item.photo} className={style.photo} />
            <section className={style.descriptionWrapper}>
              <p className={style.saying}>{item.saying}</p>
              <h3 className={style.name}>{item.name}</h3>
              <span className={style.title}>{item.title}</span>
            </section>
          </section>
        ))}
      </section>
    </section>
  </SectionContainer>
);

export default Testimonials;
