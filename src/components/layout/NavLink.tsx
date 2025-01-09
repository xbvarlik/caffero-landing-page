import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a href={href} className="hover:text-brown-400 transition-colors" onClick={onClick}>
      {children}
    </a>
  );
}