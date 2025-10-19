

import { XPButton } from './WindowsXPPage';

export default function XPBackButton() {
  return (
    <XPButton onClick={() => window.history.back()}>
      ← Back to Industries
    </XPButton>
  );
}