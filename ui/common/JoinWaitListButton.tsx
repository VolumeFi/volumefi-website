import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/Button';
import { useRouter } from 'next/router';
import { StaticLink } from 'shared/configs/links';

import type { ButtonVariantType } from 'components/Button';

interface JoinWaitlistButtonProps {
  className?: string;
  variant?: ButtonVariantType;
  leftIcon?: boolean;
}
const JoinWaitlistButton = ({ className, variant = 'primary', leftIcon }: JoinWaitlistButtonProps) => {
  const router = useRouter();

  const handleJoinWaitlist = () => {
    router.push(StaticLink.Signup);
  };
  return (
    <Button className={className} variant={variant} onClick={handleJoinWaitlist}>
      <span>Join the Waitlist</span>
      {leftIcon && <FontAwesomeIcon icon={faArrowRight} />}
    </Button>
  );
};

export default JoinWaitlistButton;
