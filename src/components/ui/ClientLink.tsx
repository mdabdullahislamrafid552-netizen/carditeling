import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { useClient } from '../../clients/ClientContext';

interface ClientLinkProps extends RouterLinkProps {
  to: string;
}

export const ClientLink: React.FC<ClientLinkProps> = ({ to, children, ...props }) => {
  const { client, isDemo } = useClient();

  // If in demo mode, and the route doesn't already start with /demo, prepend it.
  // Exception: absolute URLs or hash links.
  let target = to;
  if (isDemo && target.startsWith('/') && !target.startsWith('/demo')) {
    target = `/demo/${client.slug}${target === '/' ? '' : target}`;
  }

  return (
    <RouterLink to={target} {...props}>
      {children}
    </RouterLink>
  );
};
