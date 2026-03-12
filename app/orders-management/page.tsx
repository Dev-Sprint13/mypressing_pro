'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useOrdersStore } from '@/lib/orders-store';
import { formatStorageLocation } from '@/lib/utils';

export default function OrdersManagementPage() {
  const router = useRouter();
  const orders = useOrdersStore((state) => state.orders);
  const searchOrders = useOrdersStore((state) => state.searchOrders);
  const [searchQuery, setSearchQuery] = useState('');
  const visibleOrders = searchQuery ? searchOrders(searchQuery) : orders;

    return (
      <>
        <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col font-sans overflow-x-hidden selection:bg-brand-light selection:text-white">
          {/* Top Navigation Header */}
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-gray-200 shadow-sm transition-all h-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
            
            <div className="flex items-center gap-8">
                {/* Brand Logo */}
                <div className="flex items-center gap-2 group cursor-pointer" onClick={() => router.push('/')}>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-light to-brand text-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                        <i className="ph-bold ph-drop text-lg"></i>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-gray-900">PressingPro</span>
                </div>

                {/* Main Navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                    <button onClick={() => router.push('/')} className="px-4 py-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 text-sm font-medium">
                        Tableau de bord
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-brand-50 text-brand font-medium transition-all duration-200 text-sm">
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
                <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors relative md:hidden">
                    <i className="ph ph-magnifying-glass text-xl"></i>
                </button>
                
                <button className="w-10 h-10 rounded-xl hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors relative">
                    <i className="ph ph-bell text-xl"></i>
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                </button>
                
                <div className="h-6 w-px bg-gray-200 mx-1"></div>
                
                <button className="flex items-center gap-2 hover:bg-gray-100 p-1 pr-3 rounded-full transition-colors border border-transparent hover:border-gray-200">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" className="w-8 h-8 rounded-full border border-gray-200 object-cover" />
                    <span className="text-sm font-medium text-gray-700 hidden sm:block">Admin</span>
                    <i className="ph ph-caret-down text-gray-400 text-xs hidden sm:block"></i>
                </button>
            </div>
            
        </div>
    </header>

    {/* Main Content */}
    <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto w-full opacity-0 animate-fade-in">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8 opacity-0 animate-slide-up">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Gestion des commandes</h1>
                <p className="text-gray-500 mt-1">40 commandes enregistrées au total. <span className="text-gray-900 font-medium">8 en cours.</span></p>
            </div>
            
            <button className="px-5 py-2.5 bg-brand text-white font-medium rounded-xl hover:bg-brand-dark transition-all flex items-center gap-2 shadow-lg shadow-brand/20 active:scale-95 text-sm w-full sm:w-auto justify-center">
                <i className="ph ph-plus-circle text-lg"></i>
                Nouvelle commande
            </button>
        </div>

        {/* Toolbar: Search & Filters */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-card border border-gray-100/50 mb-6 flex flex-col lg:flex-row gap-4 opacity-0 animate-slide-up delay-100">
            
            {/* Search */}
            <div className="flex-1 relative">
                <i className="ph ph-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                <input
                  type="text"
                  placeholder="Rechercher par N° commande, client ou ID..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-brand/50 rounded-xl text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:ring-4 focus:ring-brand/5"
                />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3">
                <div className="relative w-full sm:w-40">
                    <select className="w-full pl-4 pr-10 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm outline-none focus:border-brand/50 focus:ring-4 focus:ring-brand/5 cursor-pointer hover:border-gray-300 transition-colors">
                        <option value="">Tous les statuts</option>
                        <option value="recue">Reçue</option>
                        <option value="en_cours">En cours</option>
                        <option value="terminee">Terminée</option>
                        <option value="livree">Livrée</option>
                    </select>
                </div>
                
                <div className="relative w-full sm:w-44">
                    <select className="w-full pl-4 pr-10 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm outline-none focus:border-brand/50 focus:ring-4 focus:ring-brand/5 cursor-pointer hover:border-gray-300 transition-colors">
                        <option value="">Tous les services</option>
                        <option value="lavage">Lavage</option>
                        <option value="lavage_repassage">Lavage & Repassage</option>
                        <option value="sec">Nettoyage à sec</option>
                        <option value="express">Express</option>
                    </select>
                </div>

                <div className="relative w-full sm:w-40 hidden sm:block">
                    <select className="w-full pl-4 pr-10 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm outline-none focus:border-brand/50 focus:ring-4 focus:ring-brand/5 cursor-pointer hover:border-gray-300 transition-colors">
                        <option value="aujourdhui">Aujourd'hui</option>
                        <option value="semaine">Cette semaine</option>
                        <option value="mois">Ce mois</option>
                        <option value="tout">Toutes les dates</option>
                    </select>
                </div>

                <button className="px-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 sm:w-auto w-full">
                    <i className="ph ph-faders text-lg"></i>
                    <span className="sm:hidden">Plus de filtres</span>
                </button>
            </div>
        </div>

        {/* Orders List container */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 overflow-hidden opacity-0 animate-slide-up delay-200">
            
            {/* Desktop List Header */}
            <div className="hidden sm:flex items-center px-6 py-4 border-b border-gray-100 bg-gray-50/50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <div className="w-32 shrink-0">N° Commande</div>
                <div className="w-64 shrink-0">Client</div>
                <div className="flex-1">Service & Articles</div>
                <div className="w-32 shrink-0 text-right pr-6">Montant</div>
                <div className="w-32 shrink-0">Statut</div>
                <div className="w-24 shrink-0 text-right">Actions</div>
            </div>

            {/* Order List */}
            <div className="divide-y divide-gray-100">
              {visibleOrders.map((order) => {
                let statusStyles =
                  'px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200 text-[11px] font-bold tracking-wide uppercase inline-flex items-center gap-1.5 shadow-sm';
                let statusDot = 'bg-gray-400';

                if (order.status === 'en_cours') {
                  statusStyles =
                    'px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100/50 text-[11px] font-bold tracking-wide uppercase inline-flex items-center gap-1.5 shadow-sm';
                  statusDot = 'bg-blue-500';
                } else if (order.status === 'recue') {
                  statusStyles =
                    'px-2.5 py-1 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-100/50 text-[11px] font-bold tracking-wide uppercase inline-flex items-center gap-1.5 shadow-sm';
                  statusDot = 'bg-yellow-500';
                } else if (order.status === 'prete') {
                  statusStyles =
                    'px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100/50 text-[11px] font-bold tracking-wide uppercase inline-flex items-center gap-1.5 shadow-sm';
                  statusDot = 'bg-emerald-500';
                }

                return (
                  <div
                    key={order.id}
                    className="p-4 sm:px-6 sm:py-5 hover:bg-gray-50/50 transition-colors flex flex-col sm:flex-row items-start sm:items-center gap-4 group relative"
                  >
                    {/* ID & Date */}
                    <div className="w-full sm:w-32 flex justify-between sm:block shrink-0">
                      <p className="font-bold text-gray-900 text-sm">{order.id}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {order.pickupDate ? `${order.pickupDate}, ${order.pickupTime ?? ''}` : '—'}
                      </p>
                    </div>

                    {/* Customer */}
                    <div className="w-full sm:w-64 flex items-center gap-3 shrink-0">
                      <div className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shadow-sm ring-1 ring-white">
                        {order.customerName
                          .split(' ')
                          .map((part) => part.charAt(0))
                          .join('')
                          .slice(0, 2)
                          .toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{order.customerName}</p>
                        <p className="text-xs text-gray-500">{order.customerPhone}</p>
                      </div>
                    </div>

                    {/* Service & Items */}
                    <div className="w-full sm:flex-1">
                      <p className="font-medium text-gray-900 text-sm">{order.service}</p>
                      <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1.5">
                        <i className="ph ph-t-shirt text-gray-400" />
                        {order.itemsSummary}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1.5">
                        <i className="ph ph-map-pin text-gray-400" />
                        <span>Emplacement : {formatStorageLocation(order)}</span>
                      </p>
                    </div>

                    {/* Price */}
                    <div className="w-full sm:w-32 flex justify-between sm:block text-right shrink-0 sm:pr-6">
                      <span className="sm:hidden text-xs text-gray-500 font-medium">Montant</span>
                      <p className="font-bold text-gray-900 text-sm">
                        {order.amount.toLocaleString()} {order.currency ?? 'FCFA'}
                      </p>
                    </div>

                    {/* Status */}
                    <div className="w-full sm:w-32 flex shrink-0">
                      <span className={statusStyles}>
                        <span className={`w-1.5 h-1.5 rounded-full ${statusDot}`} />
                        {order.status === 'recue'
                          ? 'Reçue'
                          : order.status === 'en_cours'
                          ? 'En cours'
                          : order.status === 'prete'
                          ? 'Terminée'
                          : 'Livrée'}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="w-full sm:w-24 flex items-center gap-1 mt-2 sm:mt-0 justify-end sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                      <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-brand hover:bg-brand-50 rounded-lg transition-colors" title="Contacter">
                        <i className="ph ph-chat-teardrop-text text-[1.1rem]" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" title="Marquer comme prêt">
                        <i className="ph ph-check-circle text-[1.1rem]" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors" title="Voir détails">
                        <i className="ph ph-caret-right text-[1.1rem]" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="p-4 sm:px-6 border-t border-gray-100 bg-gray-50/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">Affichage de <span className="font-medium text-gray-900">1</span> à <span className="font-medium text-gray-900">5</span> sur <span className="font-medium text-gray-900">40</span> commandes</p>
                
                <div className="flex items-center gap-1">
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                        <i className="ph ph-caret-left"></i>
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-brand text-white font-medium shadow-sm">1</button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 transition-colors font-medium">2</button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 transition-colors font-medium">3</button>
                    <span className="px-1 text-gray-400">...</span>
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 transition-colors font-medium">8</button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                        <i className="ph ph-caret-right"></i>
                    </button>
                </div>
            </div>

        </div>
    </main>
        </div>
      </>
    );
}
