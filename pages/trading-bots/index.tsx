import { BotTypes } from 'shared/configs/bots';
import BotContainer from 'ui/bots';

export default function CareersPage() {
  return <BotContainer botType={BotTypes.TRADING_BOT} />;
}
