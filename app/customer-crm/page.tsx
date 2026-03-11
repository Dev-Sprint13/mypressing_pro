'use client';

import { useRouter } from 'next/navigation';

export default function CustomerCrmPage() {
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
    <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto w-full opacity-0 animate-fade-in">
        
        {/* Breadcrumb & Top actions */}
        <div className="flex justify-between items-center mb-6 opacity-0 animate-slide-up">
            <button onClick={() => router.push('/customer-list')} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium group">
                <i className="ph ph-arrow-left group-hover:-translate-x-1 transition-transform"></i>
                Retour à la liste des clients
            </button>
            
            <div className="flex items-center gap-2">
                <button className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
                    <i className="ph ph-dots-three text-lg"></i>
                </button>
            </div>
        </div>

        {/* Customer Profile Header Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card border border-gray-100/50 mb-6 opacity-0 animate-slide-up delay-100 relative overflow-hidden">
            {/* Decorative background blob */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-indigo-50 to-brand-50 rounded-bl-[100px] opacity-50 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-start relative z-10">
                
                {/* Avatar */}
                <div className="shrink-0 relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-3xl sm:text-4xl font-bold shadow-lg shadow-indigo-500/20 ring-4 ring-white">
                        MD
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                        <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <i className="ph-fill ph-check-circle text-sm"></i>
                        </div>
                    </div>
                </div>

                {/* Main Info */}
                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Marie Dubois</h1>
                        <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-100 to-amber-200 border border-amber-300/50 text-amber-900 text-[11px] font-bold tracking-wide uppercase inline-flex items-center gap-1.5 shadow-sm">
                            <i className="ph-fill ph-crown text-amber-600"></i> Platinum
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm flex items-center gap-4 flex-wrap">
                        <span className="flex items-center gap-1.5"><i className="ph ph-calendar text-gray-400"></i> Client depuis Mars 2022</span>
                        <span className="flex items-center gap-1.5"><i className="ph ph-identification-card text-gray-400"></i> ID: CLI-8492</span>
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <button className="px-5 py-2.5 bg-brand text-white font-medium rounded-xl hover:bg-brand-dark transition-all flex items-center gap-2 shadow-lg shadow-brand/20 active:scale-95 text-sm">
                            <i className="ph ph-plus-circle text-lg"></i>
                            Nouvelle commande
                        </button>
                        <button className="px-4 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm active:scale-95 text-sm">
                            <i className="ph ph-chat-teardrop-text text-lg"></i>
                            Envoyer message
                        </button>
                        <button className="px-4 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center gap-2 shadow-sm active:scale-95 text-sm hidden sm:flex">
                            <i className="ph ph-pencil-simple text-lg"></i>
                            Modifier
                        </button>
                    </div>
                </div>

                {/* High-level Metrics Grid (Desktop Right Side) */}
                <div className="w-full md:w-auto grid grid-cols-3 md:grid-cols-1 gap-4 md:gap-6 mt-6 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100 md:pl-8">
                    <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Total Dépensé</p>
                        <p className="text-xl sm:text-2xl font-bold text-gray-900">450k <span className="text-sm font-semibold text-gray-400">FCFA</span></p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Commandes</p>
                        <p className="text-xl sm:text-2xl font-bold text-gray-900">42</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Note moy.</p>
                        <div className="flex items-center gap-1.5">
                            <p className="text-xl sm:text-2xl font-bold text-gray-900">4.8</p>
                            <i className="ph-fill ph-star text-amber-400"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Visual Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-200 mb-6 opacity-0 animate-slide-up delay-200 no-scrollbar">
            <div className="flex space-x-8 px-2">
                <button className="pb-4 pt-2 font-medium text-sm text-brand border-b-2 border-brand whitespace-nowrap px-1">
                    Aperçu Général
                </button>
                <button className="pb-4 pt-2 font-medium text-sm text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap px-1 transition-colors">
                    Historique (42)
                </button>
                <button className="pb-4 pt-2 font-medium text-sm text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap px-1 transition-colors">
                    Factures & Devis
                </button>
                <button className="pb-4 pt-2 font-medium text-sm text-gray-500 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300 whitespace-nowrap px-1 transition-colors">
                    Préférences
                </button>
            </div>
        </div>

        {/* Grid Layout for Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 opacity-0 animate-slide-up delay-300">
            
            {/* Left Column: Info & Solde */}
            <div className="space-y-6 lg:col-span-1">
                
                {/* Info Card */}
                <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100/50">
                    <div className="flex justify-between items-center mb-5">
                        <h3 className="font-bold text-gray-900">Informations</h3>
                        <button className="text-gray-400 hover:text-brand transition-colors"><i className="ph ph-pencil-simple text-lg"></i></button>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 shrink-0 mt-0.5">
                                <i className="ph ph-phone text-lg"></i>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-gray-500 mb-0.5">Téléphone</p>
                                <p className="text-sm font-medium text-gray-900">+33 6 45 32 11 22</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 shrink-0 mt-0.5">
                                <i className="ph ph-envelope-simple text-lg"></i>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-gray-500 mb-0.5">Email</p>
                                <p className="text-sm font-medium text-gray-900">marie.dubois@example.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 shrink-0 mt-0.5">
                                <i className="ph ph-map-pin text-lg"></i>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-gray-500 mb-0.5">Adresse de livraison par défaut</p>
                                <p className="text-sm font-medium text-gray-900">12 rue Victor Hugo<br />75008 Paris, France</p>
                            </div>
                        </div>
                    </div>

                    {/* Tags / Preferences mini */}
                    <div className="mt-6 pt-5 border-t border-gray-100">
                        <p className="text-xs font-medium text-gray-500 mb-3">Préférences de lavage</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium border border-gray-200">Sans assouplissant</span>
                            <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium border border-gray-200">Pliage soigné</span>
                            <span className="px-2.5 py-1 bg-rose-50 text-rose-700 rounded-lg text-xs font-medium border border-rose-100">Allergie latex</span>
                        </div>
                    </div>
                </div>

                {/* Solde / Wallet Card */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-xl relative overflow-hidden text-white">
                    <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                        <i className="ph-fill ph-wallet text-[12rem]"></i>
                    </div>
                    
                    <div className="relative z-10">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-medium text-gray-300">Solde crédit</h3>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <i className="ph ph-wallet text-white text-lg"></i>
                            </div>
                        </div>
                        
                        <p className="text-3xl font-bold tracking-tight mb-1">15 000 <span className="text-lg font-medium text-gray-400">FCFA</span></p>
                        <p className="text-xs text-brand-light flex items-center gap-1">
                            <i className="ph-fill ph-check-circle"></i> Utilisable sur la prochaine commande
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <button className="py-2.5 bg-brand text-white font-medium rounded-xl hover:bg-brand-light transition-all flex items-center justify-center gap-2 text-sm">
                                <i className="ph ph-plus"></i> Recharger
                            </button>
                            <button className="py-2.5 bg-white/10 text-white font-medium rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-sm border border-white/10">
                                Historique
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Historique des commandes */}
            <div className="lg:col-span-2 space-y-6">
                
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 overflow-hidden h-full flex flex-col">
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h2 className="text-lg font-bold text-gray-900">Commandes récentes</h2>
                        <button onClick={() => router.push('/orders-management')} className="text-sm font-medium text-brand hover:text-brand-dark transition-colors flex items-center gap-1">
                            Voir tout l'historique <i className="ph ph-arrow-right"></i>
                        </button>
                    </div>

                    {/* List */}
                    <div className="divide-y divide-gray-100 flex-1">
                        
                        {/* Order 1 */}
                        <div className="p-5 hover:bg-gray-50/50 transition-colors flex flex-col sm:flex-row justify-between sm:items-center gap-4 group">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                                    <i className="ph ph-t-shirt text-xl"></i>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-bold text-gray-900">ORD-001</p>
                                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100/50 text-[10px] font-bold tracking-wide uppercase">En cours</span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700">Nettoyage à sec</p>
                                    <p className="text-xs text-gray-500 mt-0.5">Costume, Chemise • Aujourd'hui</p>
                                </div>
                            </div>
                            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto mt-2 sm:mt-0">
                                <p className="font-bold text-gray-900">12 000 FCFA</p>
                                <button className="text-gray-400 hover:text-brand p-1 rounded-lg opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all text-sm font-medium mt-1">Détails</button>
                            </div>
                        </div>

                        {/* Order 2 */}
                        <div className="p-5 hover:bg-gray-50/50 transition-colors flex flex-col sm:flex-row justify-between sm:items-center gap-4 group">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                                    <i className="ph ph-stack text-xl"></i>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-bold text-gray-900">ORD-015</p>
                                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100/50 text-[10px] font-bold tracking-wide uppercase">Terminée</span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700">Lavage & Repassage</p>
                                    <p className="text-xs text-gray-500 mt-0.5">5 Chemises, 2 Pantalons • 12 Avr 2024</p>
                                </div>
                            </div>
                            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto mt-2 sm:mt-0">
                                <p className="font-bold text-gray-900">18 500 FCFA</p>
                                <button className="text-gray-400 hover:text-brand p-1 rounded-lg opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all text-sm font-medium mt-1">Détails</button>
                            </div>
                        </div>

                        {/* Order 3 */}
                        <div className="p-5 hover:bg-gray-50/50 transition-colors flex flex-col sm:flex-row justify-between sm:items-center gap-4 group">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                                    <i className="ph ph-dress text-xl"></i>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-bold text-gray-900">ORD-028</p>
                                        <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200 text-[10px] font-bold tracking-wide uppercase">Livrée</span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700">Express</p>
                                    <p className="text-xs text-gray-500 mt-0.5">Robe de soirée • 05 Avr 2024</p>
                                </div>
                            </div>
                            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto mt-2 sm:mt-0">
                                <p className="font-bold text-gray-900">15 000 FCFA</p>
                                <button className="text-gray-400 hover:text-brand p-1 rounded-lg opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all text-sm font-medium mt-1">Détails</button>
                            </div>
                        </div>
                        
                        {/* Order 4 */}
                        <div className="p-5 hover:bg-gray-50/50 transition-colors flex flex-col sm:flex-row justify-between sm:items-center gap-4 group">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                                    <i className="ph ph-drop text-xl"></i>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <p className="font-bold text-gray-900">ORD-042</p>
                                        <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200 text-[10px] font-bold tracking-wide uppercase">Livrée</span>
                                    </div>
                                    <p className="text-sm font-medium text-gray-700">Lavage simple</p>
                                    <p className="text-xs text-gray-500 mt-0.5">Linge de maison (8kg) • 28 Mar 2024</p>
                                </div>
                            </div>
                            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center w-full sm:w-auto mt-2 sm:mt-0">
                                <p className="font-bold text-gray-900">10 000 FCFA</p>
                                <button className="text-gray-400 hover:text-brand p-1 rounded-lg opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all text-sm font-medium mt-1">Détails</button>
                            </div>
                        </div>

                    </div>
                    
                    {/* View More footer */}
                    <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-center">
                        <button className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Charger plus de commandes...</button>
                    </div>
                </div>

            </div>
        </div>

    </main>
        </div>
      </>
    );
}
