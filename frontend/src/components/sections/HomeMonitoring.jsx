import HomeFeatureBlock from './HomeFeatureBlock';
import { monitoringCopy, monitoringCards } from '../../data/home';
import monitoringImage from '../../assets/images/home/monitoring.png';
import batteryIcon from '../../assets/icons/home/battery.svg';
import dataDrivenIcon from '../../assets/icons/home/data-driven.svg';
import efficiencyIcon from '../../assets/icons/home/efficiency.svg';

const icons = {
  battery: batteryIcon,
  'data-driven': dataDrivenIcon,
  efficiency: efficiencyIcon,
};

export default function HomeMonitoring() {
  return (
    <HomeFeatureBlock
      id="home-monitoring"
      className="home-monitoring"
      copy={monitoringCopy}
      cards={monitoringCards}
      icons={icons}
      image={monitoringImage}
      imageAlt="Acecore PowerCore app on two phones showing live energy monitoring over a solar farm"
    />
  );
}
