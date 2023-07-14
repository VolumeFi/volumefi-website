import AboutContainer from 'ui/about';
import { Mixpanel } from 'mixpanel-react-native';

const trackAutomaticEvents = true;
const mixpanel = new Mixpanel('009859534ebc340a92901d2d252f4f94', trackAutomaticEvents);

mixpanel.init();


export default function HomePage() {
  return <AboutContainer />;
}
