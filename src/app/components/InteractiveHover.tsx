const InteractiveHover: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="relative p-6 border rounded hover:bg-gray-300">
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          More details about Service 1...
        </div>
        <div className="z-10">
          <h3 className="text-xl">Service 1</h3>
          <p>Short description</p>
        </div>
      </div>
      {/* Add more service cards here */}
    </div>
  );
};

export default InteractiveHover;
