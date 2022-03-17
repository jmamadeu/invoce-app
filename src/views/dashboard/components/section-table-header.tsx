type SectionTableHeaderProperties = {
  label: string;
  onButtonClick: () => void;
  title: string;
};

export const SectionTableHeader = ({
  label,
  onButtonClick,
  title
}: SectionTableHeaderProperties) => (
  <div className="flex gap-4 items-center">
    <h2>{label}</h2>

    <button
      type="button"
      title={title}
      className="bg-gray-25 text-white hover:bg-gray-50 rounded-md py-1 text-xs px-3 transition-all"
      onClick={onButtonClick}
    >
      Add new
    </button>
  </div>
);
