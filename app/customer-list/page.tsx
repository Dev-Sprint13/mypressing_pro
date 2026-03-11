'use client';

import { useRouter } from 'next/navigation';

export default function CustomerListPage() {
  const router = useRouter();

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
                    <button onClick={() => router.push('/orders-management')} className="px-4 py-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 text-sm font-medium">
                        Gestion des commandes
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-brand-50 text-brand font-medium transition-all duration-200 text-sm">
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
    <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto w-full opacity-0 animate-fade-in">
        
        {/* Page Header */}
        <div className="mb-8 opacity-0 animate-slide-up">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">CRM Clients</h1>
            <p className="text-gray-500">Gérez et suivez vos clients</p>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 opacity-0 animate-slide-up delay-100">
            {/* Search Bar */}
            <div className="md:col-span-2 relative">
                <input type="text" placeholder="Rechercher un client..." className="w-full px-4 py-3 pl-10 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all text-sm" />
                <i className="ph ph-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>

            {/* Filter by Status */}
            <select className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all text-sm text-gray-600">
                <option value="">Tous les statuts</option>
                <option value="platinum">Platinum</option>
                <option value="gold">Gold</option>
                <option value="regular">Client régulier</option>
            </select>

            {/* Action Button */}
            <button className="px-4 py-3 bg-brand text-white font-medium rounded-xl hover:bg-brand-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/20 active:scale-95">
                <i className="ph ph-plus-circle text-lg"></i>
                <span className="hidden sm:inline">Nouveau client</span>
            </button>
        </div>

        {/* Clients Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-0 animate-slide-up delay-200">
            
            {/* Client Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50 hover:shadow-glass hover:border-gray-200 transition-all cursor-pointer group" onClick={() => router.push('/customer-crm')}>
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-indigo-500/20">
                        MD
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-100 border border-amber-300/50 text-amber-900 text-[10px] font-bold tracking-wide uppercase inline-flex items-center gap-1">
                        <i className="ph-fill ph-crown text-amber-600 text-sm"></i> Platinum
                    </span>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-brand transition-colors">Marie Dubois</h3>
                <p className="text-sm text-gray-500 mb-4">+33 6 45 32 11 22</p>
                
                <div className="space-y-3 mb-5 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Total dépensé</span>
                        <span className="font-bold text-gray-900">450k FCFA</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Commandes</span>
                        <span className="font-bold text-gray-900">42</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Note</span>
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-gray-900">4.8</span>
                            <i className="ph-fill ph-star text-amber-400 text-sm"></i>
                        </div>
                    </div>
                </div>

                <button className="w-full py-2.5 bg-brand/10 text-brand font-medium rounded-lg hover:bg-brand hover:text-white transition-all text-sm">
                    Voir détails
                </button>
            </div>

            {/* Client Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50 hover:shadow-glass hover:border-gray-200 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-emerald-500/20">
                        JM
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-blue-100 border border-blue-300/50 text-blue-900 text-[10px] font-bold tracking-wide uppercase">
                        <i className="ph-fill ph-star text-blue-600 text-sm"></i> Gold
                    </span>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-brand transition-colors">Jean Martin</h3>
                <p className="text-sm text-gray-500 mb-4">+33 7 23 45 67 89</p>
                
                <div className="space-y-3 mb-5 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Total dépensé</span>
                        <span className="font-bold text-gray-900">287k FCFA</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Commandes</span>
                        <span className="font-bold text-gray-900">28</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Note</span>
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-gray-900">4.6</span>
                            <i className="ph-fill ph-star text-amber-400 text-sm"></i>
                        </div>
                    </div>
                </div>

                <button className="w-full py-2.5 bg-brand/10 text-brand font-medium rounded-lg hover:bg-brand hover:text-white transition-all text-sm">
                    Voir détails
                </button>
            </div>

            {/* Client Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50 hover:shadow-glass hover:border-gray-200 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-rose-500/20">
                        SB
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-gray-100 border border-gray-300/50 text-gray-900 text-[10px] font-bold tracking-wide uppercase">
                        Client régulier
                    </span>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-brand transition-colors">Sophie Bernard</h3>
                <p className="text-sm text-gray-500 mb-4">+33 6 12 34 56 78</p>
                
                <div className="space-y-3 mb-5 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Total dépensé</span>
                        <span className="font-bold text-gray-900">92k FCFA</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Commandes</span>
                        <span className="font-bold text-gray-900">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Note</span>
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-gray-900">4.5</span>
                            <i className="ph-fill ph-star text-amber-400 text-sm"></i>
                        </div>
                    </div>
                </div>

                <button className="w-full py-2.5 bg-brand/10 text-brand font-medium rounded-lg hover:bg-brand hover:text-white transition-all text-sm">
                    Voir détails
                </button>
            </div>

            {/* Client Card 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50 hover:shadow-glass hover:border-gray-200 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-purple-500/20">
                        LT
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-100 border border-amber-300/50 text-amber-900 text-[10px] font-bold tracking-wide uppercase inline-flex items-center gap-1">
                        <i className="ph-fill ph-crown text-amber-600 text-sm"></i> Platinum
                    </span>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-brand transition-colors">Luc Tremblay</h3>
                <p className="text-sm text-gray-500 mb-4">+33 6 98 76 54 32</p>
                
                <div className="space-y-3 mb-5 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Total dépensé</span>
                        <span className="font-bold text-gray-900">520k FCFA</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Commandes</span>
                        <span className="font-bold text-gray-900">56</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Note</span>
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-gray-900">4.9</span>
                            <i className="ph-fill ph-star text-amber-400 text-sm"></i>
                        </div>
                    </div>
                </div>

                <button className="w-full py-2.5 bg-brand/10 text-brand font-medium rounded-lg hover:bg-brand hover:text-white transition-all text-sm">
                    Voir détails
                </button>
            </div>

            {/* Client Card 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50 hover:shadow-glass hover:border-gray-200 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-orange-500/20">
                        NR
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-blue-100 border border-blue-300/50 text-blue-900 text-[10px] font-bold tracking-wide uppercase">
                        <i className="ph-fill ph-star text-blue-600 text-sm"></i> Gold
                    </span>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-brand transition-colors">Nathalie Rousseau</h3>
                <p className="text-sm text-gray-500 mb-4">+33 7 11 22 33 44</p>
                
                <div className="space-y-3 mb-5 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Total dépensé</span>
                        <span className="font-bold text-gray-900">315k FCFA</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Commandes</span>
                        <span className="font-bold text-gray-900">34</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Note</span>
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-gray-900">4.7</span>
                            <i className="ph-fill ph-star text-amber-400 text-sm"></i>
                        </div>
                    </div>
                </div>

                <button className="w-full py-2.5 bg-brand/10 text-brand font-medium rounded-lg hover:bg-brand hover:text-white transition-all text-sm">
                    Voir détails
                </button>
            </div>

            {/* Client Card 6 */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50 hover:shadow-glass hover:border-gray-200 transition-all cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-cyan-500/20">
                        PM
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-gray-100 border border-gray-300/50 text-gray-900 text-[10px] font-bold tracking-wide uppercase">
                        Client régulier
                    </span>
                </div>
                
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-brand transition-colors">Pierre Moreau</h3>
                <p className="text-sm text-gray-500 mb-4">+33 6 55 66 77 88</p>
                
                <div className="space-y-3 mb-5 pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Total dépensé</span>
                        <span className="font-bold text-gray-900">156k FCFA</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Commandes</span>
                        <span className="font-bold text-gray-900">18</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-gray-500">Note</span>
                        <div className="flex items-center gap-1">
                            <span className="font-bold text-gray-900">4.4</span>
                            <i className="ph-fill ph-star text-amber-400 text-sm"></i>
                        </div>
                    </div>
                </div>

                <button className="w-full py-2.5 bg-brand/10 text-brand font-medium rounded-lg hover:bg-brand hover:text-white transition-all text-sm">
                    Voir détails
                </button>
            </div>

        </div>

    </main>
        </div>
      </>
    );
}
