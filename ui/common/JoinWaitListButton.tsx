import { Button } from 'components/Button';
import { useRouter } from 'next/router';
import { envParams } from 'shared/configs/constants';
import { StaticLink } from 'shared/configs/links';

const JoinWaitlistButton = ({ className }: DefaultComponentProps) => {
  const router = useRouter();

  const handleJoinWaitlist = () => {
    router.push(`${envParams.baseUrl}${StaticLink.Signup}`);
  };

  return (
    <Button className={className} onClick={handleJoinWaitlist}>
      Join the Waitlist
    </Button>
  );
};

export default JoinWaitlistButton;
