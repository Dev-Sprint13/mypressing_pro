'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useOrdersStore } from '@/lib/orders-store';
import { buildStorageCode, formatStorageLocation } from '@/lib/utils';

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const searchOrders = useOrdersStore((state) => state.searchOrders);
  const searchResults = searchQuery ? searchOrders(searchQuery).slice(0, 5) : [];

    return (
      <>
        <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col font-sans overflow-x-hidden selection:bg-brand-light selection:text-white">
          {/* Top Navigation Header */}
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-gray-200 shadow-sm transition-all h-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
            
            <div className="flex items-center gap-8">
                {/* Brand Logo */}
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-light to-brand text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                        <i className="ph-bold ph-drop text-lg"></i>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-gray-900">PressingPro</span>
                </div>

                {/* Main Navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                    <button className="px-4 py-2 rounded-lg bg-brand-50 text-brand font-medium transition-all duration-200 text-sm">
                        Tableau de bord
                    </button>
                    <button onClick={() => router.push('/orders-management')} className="px-4 py-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 text-sm font-medium">
                        Gestion des commandes
                    </button>
                    <button onClick={() => router.push('/customer-crm')} className="px-4 py-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 text-sm font-medium">
                        CRM Clients
                    </button>
                    <button onClick={() => router.push('/invoices')} className="px-4 py-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 text-sm font-medium">
                        Factures
                    </button>
                    <button onClick={() => router.push('/pickup-delivery')} className="px-4 py-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 text-sm font-medium">
                        Collecte & Livraison
                    </button>
                </nav>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
                {/* Search */}
                <div className="hidden lg:flex items-center relative">
                    <i className="ph ph-magnifying-glass absolute left-3 text-gray-400 text-lg"></i>
                    <input
                      type="text"
                      placeholder="Rechercher (Ctrl+K)"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      className="pl-10 pr-4 py-2 bg-gray-100/80 border-transparent focus:bg-white border focus:border-brand/30 rounded-xl text-sm w-64 outline-none transition-all duration-200 placeholder:text-gray-400 focus:ring-4 focus:ring-brand/5"
                    />
                </div>
                
                <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors relative">
                    <i className="ph ph-bell text-xl"></i>
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                </button>
                
                <div className="h-6 w-px bg-gray-200 mx-1"></div>
                
                <button onClick={() => router.push('/login')} className="flex items-center gap-2 hover:bg-gray-100 p-1 pr-3 rounded-full transition-colors border border-transparent hover:border-gray-200">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" className="w-8 h-8 rounded-full border border-gray-200 object-cover" />
                    <span className="text-sm font-medium text-gray-700 hidden sm:block">Admin</span>
                    <i className="ph ph-caret-down text-gray-400 text-xs hidden sm:block"></i>
                </button>
            </div>
            
        </div>
    </header>

    {/* Main Content */}
    <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto w-full opacity-0 animate-fade-in">
        
        {/* Header Section: Greeting & Quick Actions */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 opacity-0 animate-slide-up">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight flex items-center gap-3">
                    Bonjour <span className="origin-bottom-right inline-block hover:animate-pulse">👋</span>
                </h1>
                <p className="text-gray-500 mt-1">Prêt(e) à gérer vos commandes aujourd'hui ?</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3">
                <button onClick={() => router.push('/customer-crm')} className="px-4 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm active:scale-95 text-sm">
                    <i className="ph ph-user-plus text-lg"></i>
                    Nouveau client
                </button>
                <button onClick={() => router.push('/invoices')} className="px-4 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm active:scale-95 text-sm">
                    <i className="ph ph-receipt text-lg"></i>
                    Générer facture
                </button>
                <button onClick={() => router.push('/orders-management')} className="px-5 py-2.5 bg-brand text-white font-medium rounded-xl hover:bg-brand-dark transition-all flex items-center gap-2 shadow-lg shadow-brand/20 active:scale-95 text-sm">
                    <i className="ph ph-plus-circle text-lg"></i>
                    Nouvelle commande
                </button>
            </div>
        </div>

        {/* Global search results */}
        {searchQuery && (
          <div className="mb-8 opacity-0 animate-slide-up">
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-card border border-gray-100/50">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-gray-900">
                  Résultats pour « {searchQuery} »
                </h2>
                <span className="text-xs text-gray-500">
                  {searchResults.length} commande{searchResults.length > 1 ? 's' : ''}
                </span>
              </div>
              {searchResults.length === 0 ? (
                <p className="text-xs text-gray-500">Aucune commande trouvée.</p>
              ) : (
                <ul className="divide-y divide-gray-100">
                  {searchResults.map((order) => (
                    <li
                      key={order.id}
                      className="py-2.5 flex items-center justify-between gap-4"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {order.id} · {order.customerName}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {order.customerPhone} • {order.service}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-0.5">
                        <span className="text-xs font-semibold text-gray-900">
                          {buildStorageCode(order) ?? 'Emplacement non défini'}
                        </span>
                        <span className="text-[11px] text-gray-500">
                          {formatStorageLocation(order)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 opacity-0 animate-slide-up delay-100">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50 hover:shadow-glass hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 ease-out pointer-events-none"></div>
                <div className="flex justify-between items-start relative z-10">
                    <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">Commandes du jour</p>
                        <h3 className="text-3xl font-bold text-gray-900">24</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand flex items-center justify-center">
                        <i className="ph ph-shopping-bag text-xl"></i>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-50 text-emerald-600 text-xs font-semibold">
                        <i className="ph-bold ph-trend-up"></i> +12%
                    </span>
                    <span className="text-xs text-gray-400">vs hier</span>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50 hover:shadow-glass hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 ease-out pointer-events-none"></div>
                <div className="flex justify-between items-start relative z-10">
                    <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">Revenus aujourd'hui</p>
                        <h3 className="text-3xl font-bold text-gray-900 tracking-tight">186k <span className="text-xl font-semibold text-gray-400">FCFA</span></h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand flex items-center justify-center">
                        <i className="ph ph-wallet text-xl"></i>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-50 text-emerald-600 text-xs font-semibold">
                        <i className="ph-bold ph-trend-up"></i> +5%
                    </span>
                    <span className="text-xs text-gray-400">vs hier</span>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50 hover:shadow-glass hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 ease-out pointer-events-none"></div>
                <div className="flex justify-between items-start relative z-10">
                    <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">En cours de traitement</p>
                        <h3 className="text-3xl font-bold text-gray-900">8</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <i className="ph ph-spinner-gap text-xl animate-[spin_3s_linear_infinite]"></i>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-semibold">
                        <i className="ph-bold ph-minus"></i> 0%
                    </span>
                    <span className="text-xs text-gray-400">moyenne habituelle</span>
                </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50 hover:shadow-glass hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 ease-out pointer-events-none"></div>
                <div className="flex justify-between items-start relative z-10">
                    <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">Commandes terminées</p>
                        <h3 className="text-3xl font-bold text-gray-900">16</h3>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <i className="ph ph-check-circle text-xl"></i>
                    </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                    <div className="w-full bg-gray-100 rounded-full h-1.5 mt-1 overflow-hidden">
                        <div className="bg-brand h-1.5 rounded-full" style={{ width: '66%' }}></div>
                    </div>
                    <span className="text-xs font-medium text-gray-500 ml-2">66%</span>
                </div>
            </div>
        </div>

        {/* Main Dashboard Area (Charts & Feed) */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 opacity-0 animate-slide-up delay-200">
            
            {/* Left Column: Charts Area (Takes up 2 cols on wide screens) */}
            <div className="xl:col-span-2 space-y-6">
                
                {/* Main Chart Card */}
                <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900">Évolution des revenus</h2>
                            <p className="text-sm text-gray-500">7 derniers jours (FCFA)</p>
                        </div>
                        <button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 transition-colors">
                            <i className="ph ph-dots-three text-xl"></i>
                        </button>
                    </div>
                    
                    {/* SVG Chart Mock */}
                    <div className="h-64 w-full relative">
                        {/* Y-axis labels */}
                        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pb-6 pr-4">
                            <span>250k</span>
                            <span>200k</span>
                            <span>150k</span>
                            <span>100k</span>
                            <span>50k</span>
                        </div>
                        
                        <div className="ml-10 h-full relative">
                            <svg className="w-full h-full" viewBox="0 0 1000 240" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#5a7880" stopOpacity="0.2"/>
                                        <stop offset="100%" stopColor="#5a7880" stopOpacity="0"/>
                                    </linearGradient>
                                </defs>
                                {/* Grid lines */}
                                <line x1="0" y1="0" x2="1000" y2="0" className="chart-grid" />
                                <line x1="0" y1="50" x2="1000" y2="50" className="chart-grid" />
                                <line x1="0" y1="100" x2="1000" y2="100" className="chart-grid" />
                                <line x1="0" y1="150" x2="1000" y2="150" className="chart-grid" />
                                <line x1="0" y1="200" x2="1000" y2="200" className="chart-grid" />
                                
                                {/* The filled area */}
                                <path d="M0,180 C150,170 250,90 400,120 C550,150 700,40 850,70 C950,90 1000,30 1000,30 L1000,240 L0,240 Z" fill="url(#chartGradient)"/>
                                
                                {/* The line */}
                                <path d="M0,180 C150,170 250,90 400,120 C550,150 700,40 850,70 C950,90 1000,30 1000,30" fill="none" stroke="#5a7880" strokeWidth="4" strokeLinecap="round" className="drop-shadow-md"/>
                                
                                {/* Data points */}
                                <circle cx="400" cy="120" r="5" fill="#fff" stroke="#5a7880" strokeWidth="3" />
                                <circle cx="700" cy="40" r="5" fill="#fff" stroke="#5a7880" strokeWidth="3" />
                                <circle cx="1000" cy="30" r="5" fill="#fff" stroke="#5a7880" strokeWidth="3" />
                            </svg>
                            
                            {/* Custom Tooltip Mock on hover area */}
                            <div className="absolute left-[65%] top-[10%] bg-gray-900 text-white text-xs py-1.5 px-3 rounded-lg shadow-lg opacity-0 hover:opacity-100 transition-opacity cursor-crosshair">
                                18 Avr: 224,000 FCFA
                            </div>
                        </div>
                        
                        {/* X-axis labels */}
                        <div className="ml-10 absolute bottom-0 w-full flex justify-between text-xs text-gray-400 font-medium pt-2">
                            <span>Lun</span>
                            <span>Mar</span>
                            <span>Mer</span>
                            <span>Jeu</span>
                            <span>Ven</span>
                            <span>Sam</span>
                            <span>Dim</span>
                        </div>
                    </div>
                </div>

                {/* Secondary Chart: Orders per Service */}
                <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50">
                    <h2 className="text-lg font-bold text-gray-900 mb-6">Répartition par type de service</h2>
                    
                    <div className="space-y-5">
                        {/* Item 1 */}
                        <div>
                            <div className="flex justify-between text-sm mb-1.5">
                                <span className="font-medium text-gray-700 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-brand"></span> Lavage
                                </span>
                                <span className="font-bold text-gray-900">42%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-brand h-2 rounded-full" style={{ width: '42%' }}></div>
                            </div>
                        </div>
                        
                        {/* Item 2 */}
                        <div>
                            <div className="flex justify-between text-sm mb-1.5">
                                <span className="font-medium text-gray-700 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-brand-light"></span> Lavage & Repassage
                                </span>
                                <span className="font-bold text-gray-900">35%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-brand-light h-2 rounded-full" style={{ width: '35%' }}></div>
                            </div>
                        </div>
                        
                        {/* Item 3 */}
                        <div>
                            <div className="flex justify-between text-sm mb-1.5">
                                <span className="font-medium text-gray-700 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-brand-dark"></span> Nettoyage à sec
                                </span>
                                <span className="font-bold text-gray-900">15%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-brand-dark h-2 rounded-full" style={{ width: '15%' }}></div>
                            </div>
                        </div>
                        
                        {/* Item 4 */}
                        <div>
                            <div className="flex justify-between text-sm mb-1.5">
                                <span className="font-medium text-gray-700 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Express
                                </span>
                                <span className="font-bold text-gray-900">8%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-amber-400 h-2 rounded-full" style={{ width: '8%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Right Column: Activity Feed */}
            <div className="xl:col-span-1 min-w-0">
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 flex flex-col overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-bold text-gray-900">Activité récente</h2>
                            <button onClick={() => router.push('/orders-management')} className="text-sm text-brand font-medium hover:text-brand-dark transition-colors flex-shrink-0">Tout voir</button>
                        </div>
                    </div>
                    
                    <div className="p-6 pr-5 space-y-6 overflow-hidden">
                        <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:to-transparent">
                            
                            {/* Activity 1 */}
                            <div className="relative flex items-start gap-4 group min-w-0">
                                <div className="absolute left-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-white z-10 top-2 mt-0.5 ml-4 md:ml-[1.125rem] flex-shrink-0"></div>
                                <div className="ml-10 flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <p className="text-sm font-bold text-gray-900">Marie Dubois</p>
                                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold tracking-wide uppercase flex-shrink-0">Terminée</span>
                                    </div>
                                    <div className="flex justify-between items-baseline gap-3 mt-1">
                                        <span className="text-xs text-gray-500 truncate">Nettoyage à sec</span>
                                        <span className="text-xs text-gray-600 font-medium flex-shrink-0">ORD-023</span>
                                    </div>
                                    <p className="text-[11px] text-gray-400 mt-1 flex items-center gap-1"><i className="ph ph-clock flex-shrink-0"></i> Il y a 5 min</p>
                                </div>
                            </div>

                            {/* Activity 2 */}
                            <div className="relative flex items-start gap-4 group min-w-0">
                                <div className="absolute left-0 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white z-10 top-2 mt-0.5 ml-4 md:ml-[1.125rem] flex-shrink-0"></div>
                                <div className="ml-10 flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <p className="text-sm font-bold text-gray-900">Jean Martin</p>
                                        <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold tracking-wide uppercase flex-shrink-0">En cours</span>
                                    </div>
                                    <div className="flex justify-between items-baseline gap-3 mt-1">
                                        <span className="text-xs text-gray-500 truncate">Lavage & repassage</span>
                                        <span className="text-xs text-gray-600 font-medium flex-shrink-0">ORD-024</span>
                                    </div>
                                    <p className="text-[11px] text-gray-400 mt-1 flex items-center gap-1"><i className="ph ph-clock flex-shrink-0"></i> Il y a 22 min</p>
                                </div>
                            </div>

                            {/* Activity 3 */}
                            <div className="relative flex items-start gap-4 group min-w-0">
                                <div className="absolute left-0 w-2.5 h-2.5 rounded-full bg-yellow-400 ring-4 ring-white z-10 top-2 mt-0.5 ml-4 md:ml-[1.125rem] flex-shrink-0"></div>
                                <div className="ml-10 flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <p className="text-sm font-bold text-gray-900">Sophie Bernard</p>
                                        <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-[10px] font-bold tracking-wide uppercase flex-shrink-0">Reçue</span>
                                    </div>
                                    <div className="flex justify-between items-baseline gap-3 mt-1">
                                        <span className="text-xs text-gray-500 truncate">Express (24h)</span>
                                        <span className="text-xs text-gray-600 font-medium flex-shrink-0">ORD-025</span>
                                    </div>
                                    <p className="text-[11px] text-gray-400 mt-1 flex items-center gap-1"><i className="ph ph-clock flex-shrink-0"></i> Il y a 1h</p>
                                </div>
                            </div>

                            {/* Activity 4 */}
                            <div className="relative flex items-start gap-4 group min-w-0">
                                <div className="absolute left-0 w-2.5 h-2.5 rounded-full bg-gray-400 ring-4 ring-white z-10 top-2 mt-0.5 ml-4 md:ml-[1.125rem] flex-shrink-0"></div>
                                <div className="ml-10 flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <p className="text-sm font-bold text-gray-900">Hôtel de Paris</p>
                                        <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-[10px] font-bold tracking-wide uppercase flex-shrink-0">Livrée</span>
                                    </div>
                                    <div className="flex justify-between items-baseline gap-3 mt-1">
                                        <span className="text-xs text-gray-500 truncate">Lavage industriel (50kg)</span>
                                        <span className="text-xs text-gray-600 font-medium flex-shrink-0">ORD-019</span>
                                    </div>
                                    <p className="text-[11px] text-gray-400 mt-1 flex items-center gap-1"><i className="ph ph-clock flex-shrink-0"></i> Ce matin à 09:30</p>
                                </div>
                            </div>
                            
                            {/* Activity 5 */}
                            <div className="relative flex items-start gap-4 group min-w-0">
                                <div className="absolute left-0 w-2.5 h-2.5 rounded-full bg-yellow-400 ring-4 ring-white z-10 top-2 mt-0.5 ml-4 md:ml-[1.125rem] flex-shrink-0"></div>
                                <div className="ml-10 flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <p className="text-sm font-bold text-gray-900">Lucas Moreau</p>
                                        <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-[10px] font-bold tracking-wide uppercase flex-shrink-0">Reçue</span>
                                    </div>
                                    <div className="flex justify-between items-baseline gap-3 mt-1">
                                        <span className="text-xs text-gray-500 truncate">Nettoyage à sec (Costume)</span>
                                        <span className="text-xs text-gray-600 font-medium flex-shrink-0">ORD-026</span>
                                    </div>
                                    <p className="text-[11px] text-gray-400 mt-1 flex items-center gap-1"><i className="ph ph-clock flex-shrink-0"></i> Hier à 17:45</p>
                                </div>
                            </div>

                            {/* Activity 6 */}
                            <div className="relative flex items-start gap-4 group min-w-0">
                                <div className="absolute left-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-white z-10 top-2 mt-0.5 ml-4 md:ml-[1.125rem] flex-shrink-0"></div>
                                <div className="ml-10 flex-1 min-w-0">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <p className="text-sm font-bold text-gray-900">Emma Laurent</p>
                                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold tracking-wide uppercase flex-shrink-0">Terminée</span>
                                    </div>
                                    <div className="flex justify-between items-baseline gap-3 mt-1">
                                        <span className="text-xs text-gray-500 truncate">Lavage express</span>
                                        <span className="text-xs text-gray-600 font-medium flex-shrink-0">ORD-020</span>
                                    </div>
                                    <p className="text-[11px] text-gray-400 mt-1 flex items-center gap-1"><i className="ph ph-clock flex-shrink-0"></i> Hier à 14:20</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    {/* Quick action inside feed */}
                    <div className="px-6 pb-6">
                        <button onClick={() => router.push('/orders-management')} className="w-full py-2.5 rounded-xl border border-dashed border-gray-300 text-gray-500 text-sm font-medium hover:border-brand hover:text-brand transition-colors bg-gray-50 hover:bg-brand-50 flex items-center justify-center gap-2">
                            <i className="ph ph-list-magnifying-glass"></i>
                            Gérer toutes les commandes
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </main>
        </div>
      </>
    );
}
