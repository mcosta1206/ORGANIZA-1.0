// app/page.tsx

import React from 'react';
import Head from 'next/head'; // Para inserir informações de meta e título na página
import Navbar from '../components/Navbar'; // Seu componente de navegação
import Footer from '../components/Footer'; // Seu componente de rodapé

export default function Page() {
  return (
    <div>
      <Head>
        <title>Organiza</title>
        <meta name="description" content="Gerencie suas finanças pessoais com facilidade e eficiência." />
      </Head>

      <Navbar /> {/* Carrega a barra de navegação */}
      
      <main className="container mx-auto p-4">
  <h1 className="text-2xl font-bold text-center mb-4 text-gray-900">Organiza</h1>
  <p className="text-center mb-8 text-gray-700">Gerencie suas finanças pessoais e alcance seus objetivos financeiros com facilidade.</p>

  <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="p-4 bg-gray-200 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-2 text-gray-900">Receitas e Despesas</h2>
      <p className="text-gray-800">Registre suas receitas e despesas e visualize sua situação financeira atual.</p>
    </div>

    <div className="p-4 bg-gray-200 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-2 text-gray-900">Orçamento</h2>
      <p className="text-gray-800">Defina metas de orçamento e acompanhe seus gastos em diferentes categorias.</p>
    </div>

    <div className="p-4 bg-gray-200 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-2 text-gray-900">Investimentos</h2>
      <p className="text-gray-800">Registre seus investimentos e veja seus rendimentos ao longo do tempo.</p>
    </div>

    <div className="p-4 bg-gray-200 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-2 text-gray-900">Relatórios</h2>
      <p className="text-gray-800">Gere relatórios detalhados e visualize estatísticas financeiras importantes.</p>
    </div>
  </section>
</main>


      <Footer /> {/* Carrega o rodapé */}
    </div>
  );
}
