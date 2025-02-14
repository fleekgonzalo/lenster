import { AUTH } from '@lenster/data/tracking';
import { Button } from '@lenster/ui';
import { Leafwatch } from '@lib/leafwatch';
import { Trans } from '@lingui/macro';
import type { FC } from 'react';
import { useGlobalModalStateStore } from 'src/store/modals';

interface LoginButtonProps {
  isBig?: boolean;
}

const LoginButton: FC<LoginButtonProps> = ({ isBig = false }) => {
  const setShowAuthModal = useGlobalModalStateStore(
    (state) => state.setShowAuthModal
  );

  return (
    <Button
      size={isBig ? 'lg' : 'md'}
      icon={
        <img
          className="mr-0.5 h-4 w-4"
          height={16}
          width={16}
          src="/lens.png"
          alt="Lens Logo"
        />
      }
      onClick={() => {
        setShowAuthModal(true);
        Leafwatch.track(AUTH.LOGIN);
      }}
      data-testid="login-button"
    >
      <Trans>Login</Trans>
    </Button>
  );
};

export default LoginButton;
