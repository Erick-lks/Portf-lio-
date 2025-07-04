import { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // Aqui você pode enviar os dados para um backend ou serviço como EmailJS
  };

  return (
    <div className="bg-pink-300 pt-15 pb-15">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-400 shadow-md rounded-lg p-6 ml-130 h-140 w-200"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Entre em Contato
        </h2>

        <label className="block text-left mb-2 font-medium">Seu Nome</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite seu nome"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block text-left mb-2 font-medium">Seu Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu e-mail"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <label className="block text-left mb-2 font-medium">Descrição</label>
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          placeholder="Escreva sua mensagem"
          className="w-full p-2 mb-4 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
