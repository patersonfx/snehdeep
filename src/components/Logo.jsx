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
