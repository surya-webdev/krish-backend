function Button({ onClick, href }) {
  return (
    <button
      onClick={onClick}
      className="z-0 w-full rounded-lg bg-black px-10 py-3 font-syne text-white"
      href={href}
    >
      Donate Now
    </button>
  );
}

export default Button;
