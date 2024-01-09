"use client"
import React from "react";

export default function YesPage() {
  const [form, setForm] = React.useState({
    title: "",
    response: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = () => {
    navigator.share({
      url: `/?title=${form.title}&response=${form.response}`,
    });
  }

  return (
    <main className="container flex flex-col py-4 min-h-screen justify-center items-center">
      <div className="flex flex-col text-wrap gap-4 px-4">
        <h1 className="text-center break-words text-wrap text-3xl font-bold">
          Crea tu mensaje personalizado
        </h1>
        <label htmlFor="title" className="-mb-2">
          Título
        </label>
        <input onChange={handleChange} value={form.title} name="title" type="text" placeholder="Me perdonas?" className="border py-2 px-4 rounded-lg" />
        <label htmlFor="title" className="-mb-2">
          Mensaje
        </label>
        <input onChange={handleChange} value={form.response} name="response" type="text" placeholder="Yo tambien te amo" className="border py-2 px-4 rounded-lg" />
        <button onClick={handleSubmit} className="py-2 px-4 border rounded-lg shadow-sm transition-all hover:bg-violet-100">
          Crear
        </button>
      </div>
    </main>
  );
}
