
import { XPButton } from './WindowsXPPage';

export function XPContactButton() {
  return (
    <XPButton variant="primary" onClick={() => window.location.href = '/contact'}>
      Get Started
    </XPButton>
  );
}

export function XPServicesButton() {
  return (
    <XPButton onClick={() => window.location.href = '/services'}>
      Learn More
    </XPButton>
  );
}