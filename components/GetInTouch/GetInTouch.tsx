import { Box } from 'components/Box';
import style from 'components/GetInTouch/GetInTouch.module.scss';
import Link from 'next/link';

export const GetInTouch = () => (
  <Box className={style.newBot}>
    <p className={style.description}>Do you have a new bot idea?</p>
    <h3 className={style.title}>Let's create your Bot</h3>
    <Link href="/message" className={style.getInTouch}>
      Get in Touch
    </Link>
  </Box>
);
