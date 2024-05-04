export function IconBtn({ Icon, isActive, color, children, ...props }) {
  return (
    <button className={`${isActive ? "active" : ""} ${color || ""}`} {...props}>
      <span className={`${children != null ? "mr-1" : ""}`}>
        <img className="w-[20px] fill-[#3498DB]" src={Icon}></img>
      </span>
      {children}
    </button>
  );
}
