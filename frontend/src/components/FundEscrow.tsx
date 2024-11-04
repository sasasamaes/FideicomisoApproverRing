"use client";

import { useState } from "react";

export default function FundEscrow() {
  const [formData, setFormData] = useState({
    engagementId: "",
    signer: "",
    contractId: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

      const result = await fetch('/api/escrow/fund-escrowt', {
        method: 'POST',
        headers: {
           'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await result.json();
      setResponse(data);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Formulario de Escrow</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="engagementId" className="block font-medium text-gray-700">
            Engagement ID
          </label>
          <input
            type="text"
            id="engagementId"
            name="engagementId"
            value={formData.engagementId}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Ingresa el Engagement ID"
          />
        </div>

        <div>
          <label htmlFor="amount" className="block font-medium text-gray-700">
          Contract Id
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.contractId}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Ingresa el monto"
          />
        </div>

        <div>
          <label htmlFor="signer" className="block font-medium text-gray-700">
          Signer
          </label>
          <input
            type="text"
            id="signer"
            name="signer"
            value={formData.signer}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Ingresa el firmante"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {response && (
        <div className="mt-6 p-4 bg-green-100 rounded-md">
          <h2 className="text-lg font-semibold text-green-800">Respuesta del servidor:</h2>
          <pre className="mt-2 text-sm">{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div className="mt-6 p-4 bg-red-100 rounded-md">
          <p className="text-red-800">{error}</p>
        </div>
      )}
    </div>
  );
}
