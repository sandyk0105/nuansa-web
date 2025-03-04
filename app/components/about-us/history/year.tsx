interface YearProps {
    year: number;
    selected: boolean;
    setSelected: () => void;
}

export default function Year({ year, selected, setSelected }: YearProps) {
    return (
        <button 
            className={`text-sm font-bold font-poppin text-justify ml-2 w-14 text-center ${selected ? 'text-orange-a' : 'text-gray-500'}`} 
            onClick={setSelected}
        >
            {year}
        </button>
    );
}
