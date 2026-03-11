'use client';

import { useRouter } from 'next/navigation';

export default function InvoicesPage() {
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
                    <button onClick={() => router.push('/customer-crm')} className="px-4 py-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 text-sm font-medium">
                        CRM Clients
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-brand-50 text-brand font-medium transition-all duration-200 text-sm">
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
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Factures & Devis</h1>
                <p className="text-gray-500 mt-1">Gérez vos documents financiers et suivez les paiements.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button className="px-4 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 text-sm flex-1 sm:flex-none">
                    <i className="ph ph-export text-lg"></i>
                    Exporter
                </button>
                <button className="px-5 py-2.5 bg-brand text-white font-medium rounded-xl hover:bg-brand-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/20 active:scale-95 text-sm flex-1 sm:flex-none">
                    <i className="ph ph-plus-circle text-lg"></i>
                    Créer facture
                </button>
            </div>
        </div>

        {/* KPI Mini Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6 opacity-0 animate-slide-up delay-100">
            <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100/50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <i className="ph ph-check-circle text-2xl"></i>
                </div>
                <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-0.5">Payé ce mois</p>
                    <h3 className="text-xl font-bold text-gray-900">845k <span className="text-sm font-semibold text-gray-400">FCFA</span></h3>
                </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100/50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <i className="ph ph-hourglass text-2xl"></i>
                </div>
                <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-0.5">En attente</p>
                    <h3 className="text-xl font-bold text-gray-900">120k <span className="text-sm font-semibold text-gray-400">FCFA</span></h3>
                </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-card border border-gray-100/50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                    <i className="ph ph-warning-circle text-2xl"></i>
                </div>
                <div>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-0.5">En retard</p>
                    <h3 className="text-xl font-bold text-gray-900">45k <span className="text-sm font-semibold text-gray-400">FCFA</span></h3>
                </div>
            </div>
        </div>

        {/* Toolbar: Search & Filters */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-card border border-gray-100/50 mb-6 flex flex-col lg:flex-row gap-4 opacity-0 animate-slide-up delay-200">
            {/* Search */}
            <div className="flex-1 relative">
                <i className="ph ph-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
                <input type="text" placeholder="Rechercher par N° facture, client ou montant..." className="w-full pl-11 pr-4 py-2.5 bg-gray-50/50 border border-gray-200 focus:bg-white focus:border-brand/50 rounded-xl text-sm outline-none transition-all duration-200 placeholder:text-gray-400 focus:ring-4 focus:ring-brand/5" />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3">
                <div className="relative w-full sm:w-44">
                    <select className="w-full pl-4 pr-10 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm outline-none focus:border-brand/50 focus:ring-4 focus:ring-brand/5 cursor-pointer hover:border-gray-300 transition-colors">
                        <option value="">Tous les statuts</option>
                        <option value="payee">Payée</option>
                        <option value="en_attente">En attente</option>
                        <option value="en_retard">En retard</option>
                        <option value="annulee">Annulée</option>
                    </select>
                </div>

                <div className="relative w-full sm:w-40">
                    <select className="w-full pl-4 pr-10 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm outline-none focus:border-brand/50 focus:ring-4 focus:ring-brand/5 cursor-pointer hover:border-gray-300 transition-colors">
                        <option value="ce_mois">Ce mois</option>
                        <option value="mois_dernier">Mois dernier</option>
                        <option value="annee">Cette année</option>
                        <option value="tout">Toutes les dates</option>
                    </select>
                </div>

                <button className="px-4 py-2.5 bg-gray-50 border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 sm:w-auto w-full">
                    <i className="ph ph-faders text-lg"></i>
                    <span className="sm:hidden">Plus de filtres</span>
                </button>
            </div>
        </div>

        {/* Invoice List container */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 overflow-hidden opacity-0 animate-slide-up delay-300">
            
            {/* Desktop List Header */}
            <div className="hidden xl:flex items-center px-6 py-4 border-b border-gray-100 bg-gray-50/50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <div className="w-32 shrink-0">N° Facture</div>
                <div className="w-64 shrink-0">Client</div>
                <div className="flex-1">Services facturés</div>
                <div className="w-24 shrink-0 text-right">Sous-total</div>
                <div className="w-20 shrink-0 text-right">TVA</div>
                <div className="w-32 shrink-0 text-right pr-6">Total TTC</div>
                <div className="w-28 shrink-0">Statut</div>
                <div className="w-32 shrink-0 text-right">Actions</div>
            </div>

            {/* List Body */}
            <div className="divide-y divide-gray-100">

                {/* Invoice Row 1 */}
                <div className="p-4 sm:px-6 sm:py-5 hover:bg-gray-50/50 transition-colors flex flex-col xl:flex-row items-start xl:items-center gap-4 group relative">
                    {/* ID & Date */}
                    <div className="w-full xl:w-32 flex justify-between xl:block shrink-0">
                        <a href="#" className="font-bold text-brand hover:text-brand-dark hover:underline text-sm">INV-2023-001</a>
                        <p className="text-xs text-gray-500 mt-0.5">18 Avr 2024</p>
                    </div>

                    {/* Customer */}
                    <div className="w-full xl:w-64 flex items-center gap-3 shrink-0">
                        <div className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shadow-sm ring-1 ring-white">MD</div>
                        <div>
                            <p className="font-medium text-gray-900 text-sm">Marie Dubois</p>
                            <p className="text-xs text-gray-500">Réf. ORD-001</p>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="w-full xl:flex-1">
                        <p className="font-medium text-gray-900 text-sm truncate">Nettoyage à sec complet</p>
                        <p className="text-xs text-gray-500 mt-0.5">Chemise x3, Costume x1</p>
                    </div>

                    {/* Finances (Stacked on Mobile, Columns on Desktop) */}
                    <div className="w-full xl:w-auto flex flex-col sm:flex-row xl:contents gap-2 sm:gap-6 mt-2 xl:mt-0 bg-gray-50/50 xl:bg-transparent p-3 xl:p-0 rounded-lg border border-gray-100 xl:border-0">
                        {/* Subtotal */}
                        <div className="xl:w-24 flex xl:block justify-between items-center text-right shrink-0">
                            <span className="xl:hidden text-xs text-gray-500 font-medium">Sous-total HT</span>
                            <p className="text-gray-600 text-sm">10 000 <span className="text-[10px] xl:hidden">FCFA</span></p>
                        </div>
                        
                        {/* Tax */}
                        <div className="xl:w-20 flex xl:block justify-between items-center text-right shrink-0 border-b border-gray-200/50 sm:border-0 pb-2 sm:pb-0 mb-2 sm:mb-0 xl:pb-0 xl:mb-0">
                            <span className="xl:hidden text-xs text-gray-500 font-medium">TVA (20%)</span>
                            <p className="text-gray-500 text-sm">2 000 <span className="text-[10px] xl:hidden">FCFA</span></p>
                        </div>

                        {/* Total */}
                        <div className="xl:w-32 flex xl:block justify-between items-center text-right shrink-0 xl:pr-6">
                            <span className="xl:hidden text-xs text-gray-900 font-bold uppercase tracking-wider">Total TTC</span>
                            <p className="font-bold text-gray-900 text-sm xl:text-base">12 000 <span className="text-[10px] xl:text-[11px] font-semibold text-gray-500">FCFA</span></p>
                        </div>
                    </div>

                    {/* Status */}
                    <div className="w-full xl:w-28 flex shrink-0 mt-2 xl:mt-0">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100/50 text-[11px] font-bold tracking-wide uppercase inline-flex items-center gap-1.5 shadow-sm">
                            <i className="ph-fill ph-check-circle"></i> Payée
                        </span>
                    </div>

                    {/* Actions */}
                    <div className="w-full xl:w-32 flex items-center justify-end gap-1 mt-3 xl:mt-0 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity">
                        <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-brand hover:bg-brand-50 rounded-lg transition-colors border border-transparent hover:border-brand-100 bg-white shadow-sm xl:shadow-none xl:bg-transparent" title="Télécharger PDF">
                            <i className="ph ph-download-simple text-lg"></i>
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors border border-transparent hover:border-gray-200 bg-white shadow-sm xl:shadow-none xl:bg-transparent" title="Imprimer">
                            <i className="ph ph-printer text-lg"></i>
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors border border-transparent hover:border-gray-200 bg-white shadow-sm xl:shadow-none xl:bg-transparent" title="Partager">
                            <i className="ph ph-share-network text-lg"></i>
                        </button>
                    </div>
                </div>

                {/* Invoice Row 2 */}
                <div className="p-4 sm:px-6 sm:py-5 hover:bg-gray-50/50 transition-colors flex flex-col xl:flex-row items-start xl:items-center gap-4 group relative">
                    <div className="w-full xl:w-32 flex justify-between xl:block shrink-0">
                        <a href="#" className="font-bold text-brand hover:text-brand-dark hover:underline text-sm">INV-2023-002</a>
                        <p className="text-xs text-gray-500 mt-0.5">17 Avr 2024</p>
                    </div>

                    <div className="w-full xl:w-64 flex items-center gap-3 shrink-0">
                        <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shadow-sm ring-1 ring-white">JM</div>
                        <div>
                            <p className="font-medium text-gray-900 text-sm">Jean Martin</p>
                            <p className="text-xs text-gray-500">Réf. ORD-002</p>
                        </div>
                    </div>

                    <div className="w-full xl:flex-1">
                        <p className="font-medium text-gray-900 text-sm truncate">Lavage & Repassage</p>
                        <p className="text-xs text-gray-500 mt-0.5">Chemises x5</p>
                    </div>

                    <div className="w-full xl:w-auto flex flex-col sm:flex-row xl:contents gap-2 sm:gap-6 mt-2 xl:mt-0 bg-gray-50/50 xl:bg-transparent p-3 xl:p-0 rounded-lg border border-gray-100 xl:border-0">
                        <div className="xl:w-24 flex xl:block justify-between items-center text-right shrink-0">
                            <span className="xl:hidden text-xs text-gray-500 font-medium">Sous-total HT</span>
                            <p className="text-gray-600 text-sm">7 083 <span className="text-[10px] xl:hidden">FCFA</span></p>
                        </div>
                        <div className="xl:w-20 flex xl:block justify-between items-center text-right shrink-0 border-b border-gray-200/50 sm:border-0 pb-2 sm:pb-0 mb-2 sm:mb-0 xl:pb-0 xl:mb-0">
                            <span className="xl:hidden text-xs text-gray-500 font-medium">TVA (20%)</span>
                            <p className="text-gray-500 text-sm">1 417 <span className="text-[10px] xl:hidden">FCFA</span></p>
                        </div>
                        <div className="xl:w-32 flex xl:block justify-between items-center text-right shrink-0 xl:pr-6">
                            <span className="xl:hidden text-xs text-gray-900 font-bold uppercase tracking-wider">Total TTC</span>
                            <p className="font-bold text-gray-900 text-sm xl:text-base">8 500 <span className="text-[10px] xl:text-[11px] font-semibold text-gray-500">FCFA</span></p>
                        </div>
                    </div>

                    <div className="w-full xl:w-28 flex shrink-0 mt-2 xl:mt-0">
                        <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-100/50 text-[11px] font-bold tracking-wide uppercase inline-flex items-center gap-1.5 shadow-sm">
                            <i className="ph-fill ph-clock-circle"></i> En attente
                        </span>
                    </div>

                    <div className="w-full xl:w-32 flex items-center justify-end gap-1 mt-3 xl:mt-0 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity">
                        <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-brand hover:bg-brand-50 rounded-lg transition-colors border border-transparent hover:border-brand-100 bg-white shadow-sm xl:shadow-none xl:bg-transparent" title="Télécharger PDF">
                            <i className="ph ph-download-simple text-lg"></i>
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors border border-transparent hover:border-gray-200 bg-white shadow-sm xl:shadow-none xl:bg-transparent" title="Envoyer rappel">
                            <i className="ph ph-paper-plane-tilt text-lg"></i>
                        </button>
                    </div>
                </div>

                {/* Invoice Row 3 */}
                <div className="p-4 sm:px-6 sm:py-5 hover:bg-gray-50/50 transition-colors flex flex-col xl:flex-row items-start xl:items-center gap-4 group relative">
                    <div className="w-full xl:w-32 flex justify-between xl:block shrink-0">
                        <a href="#" className="font-bold text-brand hover:text-brand-dark hover:underline text-sm">INV-2023-003</a>
                        <p className="text-xs text-rose-500 font-medium mt-0.5">Échue le 10 Avr</p>
                    </div>

                    <div className="w-full xl:w-64 flex items-center gap-3 shrink-0">
                        <div className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 text-gray-600 flex items-center justify-center shadow-sm">
                            <i className="ph ph-buildings text-lg"></i>
                        </div>
                        <div>
                            <p className="font-medium text-gray-900 text-sm flex items-center gap-1.5">
                                Hôtel de Paris
                                <span className="px-1.5 py-0.5 bg-brand-50 text-brand text-[9px] rounded font-bold uppercase">Pro</span>
                            </p>
                            <p className="text-xs text-gray-500">Mensuel Mars</p>
                        </div>
                    </div>

                    <div className="w-full xl:flex-1">
                        <p className="font-medium text-gray-900 text-sm truncate">Forfait Linge Hôtelier</p>
                        <p className="text-xs text-gray-500 mt-0.5">Lavage industriel (50kg)</p>
                    </div>

                    <div className="w-full xl:w-auto flex flex-col sm:flex-row xl:contents gap-2 sm:gap-6 mt-2 xl:mt-0 bg-gray-50/50 xl:bg-transparent p-3 xl:p-0 rounded-lg border border-gray-100 xl:border-0">
                        <div className="xl:w-24 flex xl:block justify-between items-center text-right shrink-0">
                            <span className="xl:hidden text-xs text-gray-500 font-medium">Sous-total HT</span>
                            <p className="text-gray-600 text-sm">37 500 <span className="text-[10px] xl:hidden">FCFA</span></p>
                        </div>
                        <div className="xl:w-20 flex xl:block justify-between items-center text-right shrink-0 border-b border-gray-200/50 sm:border-0 pb-2 sm:pb-0 mb-2 sm:mb-0 xl:pb-0 xl:mb-0">
                            <span className="xl:hidden text-xs text-gray-500 font-medium">TVA (20%)</span>
                            <p className="text-gray-500 text-sm">7 500 <span className="text-[10px] xl:hidden">FCFA</span></p>
                        </div>
                        <div className="xl:w-32 flex xl:block justify-between items-center text-right shrink-0 xl:pr-6">
                            <span className="xl:hidden text-xs text-gray-900 font-bold uppercase tracking-wider">Total TTC</span>
                            <p className="font-bold text-gray-900 text-sm xl:text-base">45 000 <span className="text-[10px] xl:text-[11px] font-semibold text-gray-500">FCFA</span></p>
                        </div>
                    </div>

                    <div className="w-full xl:w-28 flex shrink-0 mt-2 xl:mt-0">
                        <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-100/50 text-[11px] font-bold tracking-wide uppercase inline-flex items-center gap-1.5 shadow-sm">
                            <i className="ph-fill ph-warning-circle"></i> En retard
                        </span>
                    </div>

                    <div className="w-full xl:w-32 flex items-center justify-end gap-1 mt-3 xl:mt-0 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity">
                        <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-brand hover:bg-brand-50 rounded-lg transition-colors border border-transparent hover:border-brand-100 bg-white shadow-sm xl:shadow-none xl:bg-transparent" title="Télécharger PDF">
                            <i className="ph ph-download-simple text-lg"></i>
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center text-rose-600 hover:bg-rose-50 rounded-lg transition-colors border border-transparent hover:border-rose-100 bg-white shadow-sm xl:shadow-none xl:bg-transparent" title="Relance urgente">
                            <i className="ph ph-bell-ringing text-lg"></i>
                        </button>
                    </div>
                </div>

                {/* Invoice Row 4 */}
                <div className="p-4 sm:px-6 sm:py-5 hover:bg-gray-50/50 transition-colors flex flex-col xl:flex-row items-start xl:items-center gap-4 group relative">
                    <div className="w-full xl:w-32 flex justify-between xl:block shrink-0">
                        <a href="#" className="font-bold text-brand hover:text-brand-dark hover:underline text-sm">INV-2023-004</a>
                        <p className="text-xs text-gray-500 mt-0.5">15 Avr 2024</p>
                    </div>

                    <div className="w-full xl:w-64 flex items-center gap-3 shrink-0">
                        <div className="w-9 h-9 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs shadow-sm ring-1 ring-white">LM</div>
                        <div>
                            <p className="font-medium text-gray-900 text-sm">Lucas Moreau</p>
                            <p className="text-xs text-gray-500">Réf. ORD-005</p>
                        </div>
                    </div>

                    <div className="w-full xl:flex-1">
                        <p className="font-medium text-gray-900 text-sm truncate">Nettoyage à sec</p>
                        <p className="text-xs text-gray-500 mt-0.5">Manteau, Écharpes</p>
                    </div>

                    <div className="w-full xl:w-auto flex flex-col sm:flex-row xl:contents gap-2 sm:gap-6 mt-2 xl:mt-0 bg-gray-50/50 xl:bg-transparent p-3 xl:p-0 rounded-lg border border-gray-100 xl:border-0">
                        <div className="xl:w-24 flex xl:block justify-between items-center text-right shrink-0">
                            <span className="xl:hidden text-xs text-gray-500 font-medium">Sous-total HT</span>
                            <p className="text-gray-600 text-sm">15 000 <span className="text-[10px] xl:hidden">FCFA</span></p>
                        </div>
                        <div className="xl:w-20 flex xl:block justify-between items-center text-right shrink-0 border-b border-gray-200/50 sm:border-0 pb-2 sm:pb-0 mb-2 sm:mb-0 xl:pb-0 xl:mb-0">
                            <span className="xl:hidden text-xs text-gray-500 font-medium">TVA (20%)</span>
                            <p className="text-gray-500 text-sm">3 000 <span className="text-[10px] xl:hidden">FCFA</span></p>
                        </div>
                        <div className="xl:w-32 flex xl:block justify-between items-center text-right shrink-0 xl:pr-6">
                            <span className="xl:hidden text-xs text-gray-900 font-bold uppercase tracking-wider">Total TTC</span>
                            <p className="font-bold text-gray-900 text-sm xl:text-base">18 000 <span className="text-[10px] xl:text-[11px] font-semibold text-gray-500">FCFA</span></p>
                        </div>
                    </div>

                    <div className="w-full xl:w-28 flex shrink-0 mt-2 xl:mt-0">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100/50 text-[11px] font-bold tracking-wide uppercase inline-flex items-center gap-1.5 shadow-sm">
                            <i className="ph-fill ph-check-circle"></i> Payée
                        </span>
                    </div>

                    <div className="w-full xl:w-32 flex items-center justify-end gap-1 mt-3 xl:mt-0 xl:opacity-0 xl:group-hover:opacity-100 transition-opacity">
                        <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-brand hover:bg-brand-50 rounded-lg transition-colors border border-transparent hover:border-brand-100 bg-white shadow-sm xl:shadow-none xl:bg-transparent" title="Télécharger PDF">
                            <i className="ph ph-download-simple text-lg"></i>
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors border border-transparent hover:border-gray-200 bg-white shadow-sm xl:shadow-none xl:bg-transparent" title="Imprimer">
                            <i className="ph ph-printer text-lg"></i>
                        </button>
                    </div>
                </div>

            </div>

            {/* Pagination */}
            <div className="p-4 sm:px-6 border-t border-gray-100 bg-gray-50/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">Affichage de <span className="font-medium text-gray-900">1</span> à <span className="font-medium text-gray-900">4</span> sur <span className="font-medium text-gray-900">10</span> factures</p>
                
                <div className="flex items-center gap-1">
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                        <i className="ph ph-caret-left"></i>
                    </button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-brand text-white font-medium shadow-sm">1</button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 transition-colors font-medium">2</button>
                    <button className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 transition-colors font-medium">3</button>
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
