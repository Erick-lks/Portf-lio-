export default function Card({ title, description, imageUrl }) {
  return (
    <div className="bg-white w-[400px] rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-90 grid place-items-center">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Imagem"
          className="w-[480px] h-[320px] object-cover"
        />
      ) : (
        <div className="w-[480px] h-[320px] bg-gray-200 flex items-center justify-center text-gray-500">
          Sem imagem
        </div>
      )}
      <div className="p-6 text-center">
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
