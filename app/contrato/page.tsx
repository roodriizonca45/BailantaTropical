"use client";
import { useState } from "react";
import Link from "next/link";

const PRECIO_HORA = 50000;
const WHATSAPP = "5492613663359";

export default function ContratoPage() {
  const [horas, setHoras] = useState(2);
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [tipo, setTipo] = useState("");
  const [lugar, setLugar] = useState("");
  const [obs, setObs] = useState("");

  const total = horas * PRECIO_HORA;

  const handleEnviar = () => {
    const msg = `Hola! Quiero solicitar el servicio de Bailanta Tropical.

*Nombre:* ${nombre}
*Teléfono:* ${telefono}
*Fecha del evento:* ${fecha}
*Tipo de evento:* ${tipo}
*Lugar:* ${lugar}
*Cantidad de horas:* ${horas}
*Total estimado:* $${total.toLocaleString("es-AR")}
${obs ? `*Observaciones:* ${obs}` : ""}`;

    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="bg-[#0d1f3c] min-h-screen text-white">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0a1628]">
        <Link href="/" className="text-white/50 text-sm font-extrabold hover:text-yellow-400">
          ← Volver
        </Link>
        <span className="font-bold text-lg" style={{ fontFamily: "Pacifico, cursive" }}>
          Bailanta <span className="text-yellow-400">Tropical</span>
        </span>
        <div className="w-12" />
      </nav>

      <div className="px-6 py-8 max-w-lg mx-auto">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: "Pacifico, cursive" }}>
            Solicitar <span className="text-yellow-400">Contrato</span>
          </h1>
          <p className="text-white/45 text-sm">
            Completá el formulario y te respondemos antes de que termine el fin de semana.
          </p>
        </div>

        {/* Datos del contratante */}
        <div className="bg-white/4 border border-white/8 rounded-2xl p-5 mb-4">
          <p className="text-[10px] font-black text-yellow-400 tracking-[3px] uppercase mb-4">
            Datos del contratante
          </p>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl text-white text-sm px-4 py-3 outline-none focus:border-yellow-400 placeholder:text-white/25 transition-colors"
            />
            <input
              type="tel"
              placeholder="Teléfono / WhatsApp"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl text-white text-sm px-4 py-3 outline-none focus:border-yellow-400 placeholder:text-white/25 transition-colors"
            />
          </div>
        </div>

        {/* Detalles del evento */}
        <div className="bg-white/4 border border-white/8 rounded-2xl p-5 mb-4">
          <p className="text-[10px] font-black text-yellow-400 tracking-[3px] uppercase mb-4">
            Detalles del evento
          </p>
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl text-white text-sm px-4 py-3 outline-none focus:border-yellow-400 transition-colors"
              />
              <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="bg-[#0d1f3c] border border-white/10 rounded-xl text-white text-sm px-4 py-3 outline-none focus:border-yellow-400 transition-colors"
              >
                <option value="">Tipo de evento</option>
                <option>Cumpleaños</option>
                <option>Casamiento</option>
                <option>Egresados</option>
                <option>Corporativo</option>
                <option>Fiesta privada</option>
                <option>Otro</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Lugar / Salón / Dirección"
              value={lugar}
              onChange={(e) => setLugar(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl text-white text-sm px-4 py-3 outline-none focus:border-yellow-400 placeholder:text-white/25 transition-colors"
            />
            <div>
              <label className="text-[10px] font-black text-white/30 tracking-widest uppercase block mb-2">
                Cantidad de horas
              </label>
              <select
                value={horas}
                onChange={(e) => setHoras(Number(e.target.value))}
                className="w-full bg-[#0d1f3c] border border-white/10 rounded-xl text-white text-sm px-4 py-3 outline-none focus:border-yellow-400 transition-colors"
              >
                {[1, 2, 3, 4, 5, 6].map((h) => (
                  <option key={h} value={h}>{h} hora{h > 1 ? "s" : ""}</option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Observaciones: tipo de música, cantidad de personas, requerimientos especiales..."
              value={obs}
              onChange={(e) => setObs(e.target.value)}
              rows={3}
              className="bg-white/5 border border-white/10 rounded-xl text-white text-sm px-4 py-3 outline-none focus:border-yellow-400 placeholder:text-white/25 transition-colors resize-none"
            />
          </div>
        </div>

        {/* Total */}
        <div className="bg-yellow-400/8 border border-yellow-400/25 rounded-xl px-5 py-4 flex justify-between items-center mb-1">
          <span className="text-white/55 text-sm font-bold">Total estimado</span>
          <strong className="text-yellow-400 text-2xl font-black">
            ${total.toLocaleString("es-AR")}
          </strong>
        </div>
        <p className="text-white/25 text-xs text-right mb-6">
          {horas} hora{horas > 1 ? "s" : ""} × ${PRECIO_HORA.toLocaleString("es-AR")}/hora
        </p>

        {/* Botón */}
        <button
          onClick={handleEnviar}
          className="w-full bg-green-500 hover:bg-green-400 text-white font-black text-base py-4 rounded-2xl hover:-translate-y-0.5 active:scale-95 transition-all"
        >
          Enviar por WhatsApp
        </button>
        <p className="text-white/20 text-xs text-center mt-4 leading-relaxed">
          Al enviar aceptás los términos del servicio. El precio es orientativo y puede variar según disponibilidad y distancia.
        </p>

      </div>
    </main>
  );
}