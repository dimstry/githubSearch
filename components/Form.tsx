interface formProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Form({ value, onChange }: formProps) {
  return (
    <>
      <input
        className="border-2 border-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="text"
        placeholder="Username"
        aria-label="Full name"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
