export default function Card({ title, description, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-90 grid">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={"Imagem"}
          className="w-full h-140 object-cover"
        />
      ) : (
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500"></div>
      )}
      <div className="p-6">
        {title && (
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        )}
        {description && (
          <p className="text-gray-600 text-sm mb-4">{description}</p>
        )}
      </div>
    </div>
  );
}
