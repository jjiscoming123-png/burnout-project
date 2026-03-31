export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Empty battery - almost dead */}
      {/* Battery body */}
      <rect x="4" y="13" width="30" height="14" rx="2" stroke="#888888" strokeWidth="1.5" fill="none"/>
      {/* Battery tip */}
      <rect x="34" y="17" width="3" height="6" rx="1" fill="#888888" opacity="0.6"/>
      {/* Tiny fill - almost nothing */}
      <rect x="6" y="15" width="4" height="10" rx="1" fill="#555555"/>
    </svg>
  );
}
