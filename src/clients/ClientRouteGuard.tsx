import React, { useEffect } from 'react';
import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useClient } from './ClientContext';

export const ClientRouteGuard: React.FC = () => {
  const { clientSlug } = useParams<{ clientSlug: string }>();
  const { setClientSlug } = useClient();

  useEffect(() => {
    if (clientSlug) {
      setClientSlug(clientSlug);
    }
  }, [clientSlug, setClientSlug]);

  // If we want to strictly check if the clientSlug is valid, we could add logic here
  // For now, setClientSlug falls back to default if not found.

  return <Outlet />;
};
