export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  onTrack,
  download = false,
  target,
  rel,
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-400 hover:scale-105 shadow-lg shadow-cyan-500/30",

    outline:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-500/10 hover:scale-105",

    ghost:
      "text-gray-300 hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
 
        href={href}
        download={download}
        target={target}
        rel={rel}
        onClick={onTrack}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
 
      type="button"
      onClick={(event) => {
        onTrack?.(event);
        onClick?.(event);
      }}
      className={classes}
    >
      {children}
    </button>
  );
 
}
