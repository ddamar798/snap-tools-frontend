
interface FancyButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function FancyButton({
  label,
  onClick,
  type = "button",
  disabled = false,
}: FancyButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold px-4 py-2 rounded shadow hover:from-blue-700 hover:to-green-600 transition disabled:from-gray-400 disabled:to-gray-400"
    >
      {label}
    </button>
  );
}
