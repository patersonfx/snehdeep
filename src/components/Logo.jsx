/**
 * Snehdeep logo component.
 * Uses the real logo image (public/logo.png) with transparent background.
 * size prop controls width/height in pixels (default 48).
 */
export default function Logo({ size = 48, className = "" }) {
  return (
    <img
      src="/logo.png"
      alt="Snehdeep Enterprises"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}
