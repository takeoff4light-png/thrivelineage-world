import * as React from 'react';

export function LogoMark({
  size = 24,
  title = 'ThriveLineage',
  className,
}: {
  size?: number;
  title?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      role="img"
      aria-label={title}
      className={className}
    >
      <circle cx="64" cy="56" r="28" stroke="currentColor" strokeWidth="10" />
      <circle cx="64" cy="56" r="8" fill="currentColor" />
      <path d="M36 104h56" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}
