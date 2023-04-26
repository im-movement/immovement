import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';
import { FC, ComponentType } from 'react';

const withAuth = <P extends object>(
  Component: ComponentType<P>
): FC<P> => {
  const Auth = (props: P) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      router.replace('/login');
      return null;
    }

    return <Component {...props} />;
  };

  return Auth;
};

export default withAuth;
