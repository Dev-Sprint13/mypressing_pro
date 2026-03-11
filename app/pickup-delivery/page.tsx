'use client';

import { useRouter } from 'next/navigation';

export default function PickupDeliveryPage() {
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
                    <button onClick={() => router.push('/invoices')} className="px-4 py-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 text-sm font-medium">
                        Factures
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-brand-50 text-brand font-medium transition-all duration-200 text-sm">
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
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Planification des courses</h1>
                <p className="text-gray-500 mt-1">Gérez vos itinéraires et suivez vos chauffeurs en temps réel.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button className="px-4 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 text-sm flex-1 sm:flex-none">
                    <i className="ph ph-magic-wand text-lg"></i>
                    Optimiser trajets
                </button>
                <button className="px-5 py-2.5 bg-brand text-white font-medium rounded-xl hover:bg-brand-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/20 active:scale-95 text-sm flex-1 sm:flex-none">
                    <i className="ph ph-plus-circle text-lg"></i>
                    Nouvelle course
                </button>
            </div>
        </div>

        {/* Layout Grid: List (Left) + Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 opacity-0 animate-slide-up delay-100 h-auto lg:h-[calc(100vh-220px)] min-h-[700px]">
            
            {/* LEFT COLUMN: Timeline / List */}
            <div className="lg:col-span-1 xl:col-span-1 flex flex-col bg-white rounded-2xl shadow-card border border-gray-100/50 overflow-hidden h-full">
                
                {/* Filters/Tabs inside card */}
                <div className="p-5 border-b border-gray-100 shrink-0">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-bold text-gray-900 flex items-center gap-2">
                            Aujourd'hui <i className="ph ph-caret-down text-gray-400 text-sm cursor-pointer"></i>
                        </h2>
                        <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">12 Courses</span>
                    </div>

                    <div className="flex bg-gray-50 rounded-lg p-1 border border-gray-200/50">
                        <button className="flex-1 py-1.5 text-xs font-semibold rounded-md bg-white text-gray-900 shadow-sm border border-gray-200">Toutes</button>
                        <button className="flex-1 py-1.5 text-xs font-semibold rounded-md text-gray-500 hover:text-gray-700">Collectes (4)</button>
                        <button className="flex-1 py-1.5 text-xs font-semibold rounded-md text-gray-500 hover:text-gray-700">Livraisons (8)</button>
                    </div>
                </div>

                {/* Scrollable Timeline List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    
                    {/* Past Item */}
                    <div className="flex gap-4 relative timeline-container group">
                        {/* Connecting Line */}
                        <div className="absolute left-[3.35rem] top-7 bottom-[-24px] w-px bg-gray-200 timeline-line"></div>
                        
                        {/* Time Column */}
                        <div className="w-12 text-right shrink-0 pt-1">
                            <span className="text-xs font-bold text-gray-400 block">09h00</span>
                        </div>
                        
                        {/* Node */}
                        <div className="w-3 h-3 rounded-full bg-gray-300 ring-4 ring-white relative z-10 mt-2 shrink-0 border border-gray-400/20"></div>
                        
                        {/* Card Content */}
                        <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-3.5 shadow-sm opacity-70 hover:opacity-100 transition-opacity">
                            <div className="flex justify-between items-start mb-2">
                                <span className="px-2 py-0.5 rounded-md bg-gray-200 text-gray-600 text-[10px] font-bold tracking-wide uppercase flex items-center gap-1">
                                    <i className="ph-bold ph-check"></i> Terminée
                                </span>
                                <span className="text-[10px] font-medium text-gray-400 bg-white px-1.5 py-0.5 rounded border border-gray-100">LIVRAISON</span>
                            </div>
                            <p className="font-bold text-gray-900 text-sm">Marie Dubois</p>
                            <p className="text-xs text-gray-500 mt-0.5 flex items-start gap-1">
                                <i className="ph ph-map-pin mt-0.5 text-gray-400"></i>
                                12 rue Victor Hugo, Paris
                            </p>
                        </div>
                    </div>

                    {/* ACTIVE Item (En route) */}
                    <div className="flex gap-4 relative timeline-container group">
                        <div className="absolute left-[3.35rem] top-7 bottom-[-24px] w-px bg-gray-200 timeline-line"></div>
                        
                        <div className="w-12 text-right shrink-0 pt-1">
                            <span className="text-xs font-bold text-brand block">14h00</span>
                            <span className="text-[10px] text-gray-500 block">- 16h</span>
                        </div>
                        
                        <div className="w-3 h-3 rounded-full bg-brand ring-4 ring-white relative z-10 mt-2 shrink-0 shadow-[0_0_12px_rgba(90,120,128,0.6)] animate-pulse"></div>
                        
                        <div className="flex-1 bg-white border border-brand/30 rounded-xl p-3.5 shadow-[0_4px_12px_rgba(90,120,128,0.08)] ring-1 ring-brand/10 hover:border-brand/50 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100 text-[10px] font-bold tracking-wide uppercase flex items-center gap-1">
                                    <i className="ph-bold ph-truck"></i> En route
                                </span>
                                <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">LIVRAISON</span>
                            </div>
                            <p className="font-bold text-gray-900 text-sm">Jean Martin</p>
                            <p className="text-xs text-gray-500 mt-0.5 flex items-start gap-1">
                                <i className="ph ph-map-pin mt-0.5 text-gray-400"></i>
                                15 Rue Lafayette, Paris
                            </p>
                            {/* Assigned Driver Badge */}
                            <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
                                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Chauffeur" className="w-5 h-5 rounded-full object-cover" />
                                <span className="text-[11px] font-medium text-gray-600">Marc D. (À ~5 min)</span>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Item (En attente) */}
                    <div className="flex gap-4 relative timeline-container group">
                        <div className="absolute left-[3.35rem] top-7 bottom-[-24px] w-px bg-gray-200 timeline-line border-dashed border-l-2 bg-transparent"></div>
                        
                        <div className="w-12 text-right shrink-0 pt-1">
                            <span className="text-xs font-bold text-gray-900 block">15h30</span>
                            <span className="text-[10px] text-gray-500 block">- 17h</span>
                        </div>
                        
                        <div className="w-3 h-3 rounded-full bg-white ring-4 ring-white border-2 border-amber-400 relative z-10 mt-2 shrink-0"></div>
                        
                        <div className="flex-1 bg-white border border-gray-200 rounded-xl p-3.5 shadow-sm hover:border-gray-300 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-bold tracking-wide uppercase">
                                    En attente
                                </span>
                                <span className="text-[10px] font-medium text-brand bg-brand-50 px-1.5 py-0.5 rounded border border-brand-100">COLLECTE</span>
                            </div>
                            <p className="font-bold text-gray-900 text-sm">Sophie Bernard</p>
                            <p className="text-xs text-gray-500 mt-0.5 flex items-start gap-1">
                                <i className="ph ph-map-pin mt-0.5 text-gray-400"></i>
                                8 Blvd Haussmann, Paris
                            </p>
                            <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center">
                                        <i className="ph ph-user text-[10px] text-gray-400"></i>
                                    </div>
                                    <span className="text-[11px] font-medium text-amber-600">Assigner chauffeur</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Item (En attente) */}
                    <div className="flex gap-4 relative timeline-container group">
                        <div className="absolute left-[3.35rem] top-7 bottom-[-24px] w-px bg-gray-200 timeline-line border-dashed border-l-2 bg-transparent"></div>
                        
                        <div className="w-12 text-right shrink-0 pt-1">
                            <span className="text-xs font-bold text-gray-900 block">17h00</span>
                        </div>
                        
                        <div className="w-3 h-3 rounded-full bg-white ring-4 ring-white border-2 border-gray-300 relative z-10 mt-2 shrink-0"></div>
                        
                        <div className="flex-1 bg-white border border-gray-200 rounded-xl p-3.5 shadow-sm hover:border-gray-300 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 text-[10px] font-bold tracking-wide uppercase">
                                    Planifié
                                </span>
                                <span className="text-[10px] font-medium text-brand bg-brand-50 px-1.5 py-0.5 rounded border border-brand-100">COLLECTE</span>
                            </div>
                            <p className="font-bold text-gray-900 text-sm">Hôtel de Paris (Pro)</p>
                            <p className="text-xs text-gray-500 mt-0.5 flex items-start gap-1">
                                <i className="ph ph-map-pin mt-0.5 text-gray-400"></i>
                                22 Rue de Rivoli, Paris
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* RIGHT COLUMN: Map & Driver Status */}
            <div className="lg:col-span-2 xl:col-span-3 flex flex-col gap-6">
                
                {/* KPI mini cards above map */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-4 shadow-card border border-gray-100/50 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">En circulation</p>
                            <p className="text-xl font-bold text-gray-900">3 <span className="text-sm font-medium text-gray-500 normal-case">chauffeurs</span></p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                            <i className="ph-fill ph-steering-wheel text-xl"></i>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-card border border-gray-100/50 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Retards signalés</p>
                            <p className="text-xl font-bold text-gray-900">0</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <i className="ph-fill ph-check-circle text-xl"></i>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-card border border-gray-100/50 flex items-center justify-between">
                        <div>
                            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Taux de complétion</p>
                            <p className="text-xl font-bold text-gray-900">45%</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-brand-50 text-brand flex items-center justify-center">
                            <i className="ph-fill ph-chart-pie-slice text-xl"></i>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder Area */}
                <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 relative overflow-hidden flex-1 min-h-[400px]">
                    
                    {/* Decorative Map Canvas (CSS/SVG Abstraction) */}
                    <div className="absolute inset-0 bg-[#f8fafb] overflow-hidden">
                        <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                            {/* Background Grid */}
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e3e8eb" strokeWidth="1"/>
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                            
                            {/* Main Roads (Thick White Lines) */}
                            <path d="M -50 200 C 150 200 300 100 500 250 C 700 400 850 350 1100 400" fill="none" stroke="#ffffff" strokeWidth="24" className="drop-shadow-sm"/>
                            <path d="M 200 -50 C 250 150 300 250 300 400 C 300 550 400 650 500 700" fill="none" stroke="#ffffff" strokeWidth="18" className="drop-shadow-sm"/>
                            <path d="M 700 -50 C 650 100 600 200 700 350 C 800 500 750 650 800 700" fill="none" stroke="#ffffff" strokeWidth="16" className="drop-shadow-sm"/>
                            
                            {/* Route Trail (Brand color) */}
                            <path d="M 300 200 C 350 250 450 250 500 250 C 600 250 650 320 700 350" fill="none" stroke="#5a7880" strokeWidth="4" strokeDasharray="8,8" />
                        </svg>

                        {/* Absolute positioned Map Markers (HTML over SVG for better styling) */}
                        
                        {/* Marker 1: Completed */}
                        <div className="absolute top-[28%] left-[28%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                            <div className="relative">
                                <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg border-2 border-white relative z-10">
                                    <i className="ph-bold ph-check text-sm"></i>
                                </div>
                                <div className="absolute w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-900 -bottom-[6px] left-1/2 -translate-x-1/2 z-0"></div>
                            </div>
                        </div>

                        {/* Marker 2: Active Driver (En route) */}
                        <div className="absolute top-[40%] left-[48%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                            <div className="absolute inset-0 rounded-full bg-brand/30 animate-ping"></div>
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shadow-[0_4px_12px_rgba(90,120,128,0.4)] border-2 border-white relative z-10 overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Chauffeur" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            {/* Tooltip */}
                            <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
                                <p className="font-bold">Marc D. <span className="font-normal text-gray-400">· 50km/h</span></p>
                                <p className="text-brand-light mt-0.5">Vers: 15 Rue Lafayette</p>
                                <div className="absolute w-2 h-2 bg-gray-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
                            </div>
                        </div>

                        {/* Marker 3: Destination (En attente) */}
                        <div className="absolute top-[56%] left-[68%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                            <div className="relative">
                                <div className="w-8 h-8 rounded-full bg-white text-gray-500 flex items-center justify-center shadow-lg border-2 border-white ring-1 ring-gray-200 relative z-10 hover:text-brand transition-colors">
                                    <i className="ph-fill ph-map-pin text-lg"></i>
                                </div>
                            </div>
                            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-800 border border-gray-100 shadow-sm text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap">
                                J. Martin
                            </div>
                        </div>

                    </div>

                    {/* Map UI Controls */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <div className="bg-white rounded-lg shadow-md border border-gray-100 flex flex-col overflow-hidden">
                            <button className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors border-b border-gray-100">
                                <i className="ph-bold ph-plus"></i>
                            </button>
                            <button className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
                                <i className="ph-bold ph-minus"></i>
                            </button>
                        </div>
                        <button className="w-9 h-9 bg-white rounded-lg shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:text-brand hover:bg-gray-50 transition-colors">
                            <i className="ph-bold ph-crosshair"></i>
                        </button>
                    </div>

                    {/* Live Status Bar overlay */}
                    <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white max-w-sm flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <div className="flex-1">
                            <p className="text-xs font-bold text-gray-900">Synchronisation GPS active</p>
                            <p className="text-[10px] text-gray-500">Dernière mise à jour: il y a 2 sec</p>
                        </div>
                    </div>
                </div>

                {/* Drivers List Horizontal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    
                    {/* Driver 1 */}
                    <div className="bg-white rounded-xl p-4 shadow-card border border-brand/20 ring-1 ring-brand/5 relative overflow-hidden group hover:border-brand/40 transition-colors cursor-pointer">
                        <div className="absolute top-0 left-0 w-1 h-full bg-brand"></div>
                        <div className="flex justify-between items-start mb-3 pl-2">
                            <div className="flex gap-3 items-center">
                                <div className="relative">
                                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Chauffeur" className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm" />
                                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full ring-2 ring-white"></div>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Marc Dupont</p>
                                    <p className="text-[10px] text-gray-500 font-medium">Camionnette A (AB-123-CD)</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-brand"><i className="ph ph-dots-three text-lg"></i></button>
                        </div>
                        
                        <div className="pl-2">
                            <div className="flex justify-between text-xs mb-1.5">
                                <span className="font-medium text-gray-600">Progression</span>
                                <span className="font-bold text-gray-900">5/12</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                                <div className="bg-brand h-1.5 rounded-full" style={{ width: '41%' }}></div>
                            </div>
                            <p className="text-[11px] text-gray-500 mt-2 flex items-center gap-1">
                                <i className="ph-fill ph-navigation-arrow text-brand"></i> Prochain: Jean Martin (5 min)
                            </p>
                        </div>
                    </div>

                    {/* Driver 2 */}
                    <div className="bg-white rounded-xl p-4 shadow-card border border-gray-100/50 relative overflow-hidden group hover:border-gray-300 transition-colors cursor-pointer">
                        <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400"></div>
                        <div className="flex justify-between items-start mb-3 pl-2">
                            <div className="flex gap-3 items-center">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center ring-2 ring-white shadow-sm text-sm font-bold">SL</div>
                                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-gray-300 rounded-full ring-2 ring-white"></div>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Sarah Leroy</p>
                                    <p className="text-[10px] text-gray-500 font-medium">Scooter Cargo (EF-456-GH)</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="pl-2">
                            <div className="flex justify-between text-xs mb-1.5">
                                <span className="font-medium text-gray-600">Progression</span>
                                <span className="font-bold text-emerald-600">Terminé</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5 mb-2">
                                <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                            <p className="text-[11px] text-gray-500 mt-2 flex items-center gap-1">
                                <i className="ph-fill ph-check-circle text-emerald-500"></i> 8 courses terminées
                            </p>
                        </div>
                    </div>

                    {/* Driver 3 (Add driver btn) */}
                    <div className="bg-gray-50 rounded-xl p-4 border border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 hover:bg-gray-100 hover:border-brand/50 hover:text-brand transition-colors cursor-pointer min-h-[140px]">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-gray-400">
                            <i className="ph ph-plus text-lg"></i>
                        </div>
                        <p className="font-medium text-sm text-gray-600">Assigner nouveau véhicule</p>
                    </div>

                </div>

            </div>
        </div>
    </main>
        </div>
      </>
    );
}
