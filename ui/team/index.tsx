import { teamMembers } from 'shared/configs/teams';
import SectionContainer from 'ui/common/SectionContainer';
import style from 'ui/team/index.module.scss';

const TeamContainer = () => (
  <SectionContainer>
    <section className={style.container}>
      <h1 className={style.title}>Volume Team</h1>

      <section className={style.teamWrapper}>
        {teamMembers.map((member) => (
          <section key={member.name} className={style.memberWrapper}>
            <img src={member.photo} className={style.photo} />
            <div className={style.name}>{member.name}</div>
            <div className={style.title}>{member.title}</div>
          </section>
        ))}
      </section>
    </section>
  </SectionContainer>
);

export default TeamContainer;
