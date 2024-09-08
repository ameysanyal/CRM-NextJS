
const StatsCard = ({ title, value }) => {
    return (
        <div className="bg-blue-100 shadow-md rounded-lg p-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-2xl font-bold mt-2">{value || '-'}</p>
        </div>
    );
};

export default StatsCard;
