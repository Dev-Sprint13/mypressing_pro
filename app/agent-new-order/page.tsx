'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useOrdersStore } from '@/lib/orders-store';
import { buildStorageCode, formatStorageLocation } from '@/lib/utils';

interface OrderItem {
  name: string;
  price: number;
}

interface Customer {
  name: string;
  phone: string;
}

interface OrderData {
  customer: Customer;
  items: OrderItem[];
  pickupDate: string;
  pickupTime: string;
  paymentMethod: string;
  storageZone: string;
  storageRack: string;
  storagePosition: string;
}

export default function AgentNewOrderPage() {
  const router = useRouter();
  const orders = useOrdersStore((state) => state.orders);
  const addOrder = useOrdersStore((state) => state.addOrder);
  
  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState<OrderData>({
    customer: { name: '', phone: '' },
    items: [],
    pickupDate: '',
    pickupTime: '',
    paymentMethod: 'cash',
    storageZone: 'Salle principale',
    storageRack: 'A',
    storagePosition: '',
  });
  const [isExistingCustomer, setIsExistingCustomer] = useState(true);
  const [selectedCustomerVisible, setSelectedCustomerVisible] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('pickup-date') as HTMLInputElement;
    if (dateInput) {
      dateInput.setAttribute('min', today);
    }
  }, []);

  const toggleCustomerMode = (isExisting: boolean) => {
    setIsExistingCustomer(isExisting);
  };

  const selectCustomer = (name: string, phone: string) => {
    setOrderData(prev => ({
      ...prev,
      customer: { name, phone }
    }));
    setSelectedCustomerVisible(true);
  };

  const createNewCustomer = () => {
    const nameInput = document.getElementById('new-name') as HTMLInputElement;
    const phoneInput = document.getElementById('new-phone') as HTMLInputElement;
    const name = nameInput?.value || '';
    const phone = phoneInput?.value || '';
    
    if (name && phone) {
      selectCustomer(name, phone);
      setIsExistingCustomer(true);
    }
  };

  const addItem = (name: string, price: number) => {
    setOrderData(prev => ({
      ...prev,
      items: [...prev.items, { name, price }]
    }));
  };

  const removeItem = (index: number) => {
    setOrderData(prev => ({
      ...prev,
      items: prev.items.filter((_, idx) => idx !== index)
    }));
  };

  const updatePricing = () => {
    const subtotal = orderData.items.reduce((sum, item) => sum + item.price, 0);
    const tax = subtotal * 0.18;
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const suggestNextStoragePosition = (zone: string, rack: string): string => {
    const occupied = new Set(
      orders
        .filter(
          (order) =>
            order.storageZone === zone &&
            order.storageRack === rack &&
            order.storagePosition,
        )
        .map((order) => order.storagePosition as string),
    );

    for (let index = 1; index <= 20; index += 1) {
      const candidate = index.toString().padStart(2, '0');
      if (!occupied.has(candidate)) {
        return candidate;
      }
    }

    return '';
  };

  const nextStep = () => {
    if (currentStep === 3) {
      if (!orderData.pickupDate || !orderData.pickupTime) {
        alert('Veuillez sélectionner une date et un créneau horaire');
        return;
      }
    }
    
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const completeOrder = () => {
    const pricing = updatePricing();

    const storagePosition =
      orderData.storagePosition ||
      suggestNextStoragePosition(orderData.storageZone, orderData.storageRack);

    const created = addOrder({
      customerName: orderData.customer.name,
      customerPhone: orderData.customer.phone,
      service: orderData.items[0]?.name || 'Service pressing',
      itemsSummary:
        orderData.items.length > 0
          ? orderData.items.map((item) => item.name).join(', ')
          : 'Aucun article',
      amount: pricing.total,
      currency: 'FCFA',
      pickupDate: orderData.pickupDate,
      pickupTime: orderData.pickupTime,
      status: 'recue',
      storageZone: orderData.storageZone,
      storageRack: orderData.storageRack,
      storagePosition,
    });

    // Mock: generate invoice and notify customer
    console.log(
      '[Mock facture]',
      `Facture générée pour ${created.id}, client ${created.customerName}, montant ${created.amount} ${created.currency ?? ''}`,
    );
    console.log(
      '[Mock notification]',
      `SMS/Email envoyé à ${created.customerPhone}: votre commande ${created.id} a été payée. Emplacement: ${storagePosition}`,
    );
    alert('Paiement confirmé. Facture générée et notification client envoyée (simulation).');

    router.push('/agent-order-ticket');
  };

  const logout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    router.push('/login');
  };

  const getStepCircleClass = (step: number) => {
    if (step < currentStep) {
      return 'w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm mb-2';
    } else if (step === currentStep) {
      return 'w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold text-sm mb-2';
    } else {
      return 'w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-bold text-sm mb-2';
    }
  };

  const pricing = updatePricing();

    return (
      <>
        <div className="bg-gray-50 text-gray-800 min-h-screen flex font-sans overflow-x-hidden selection:bg-brand-light selection:text-white">
          {/* Sidebar Navigation */}
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 shadow-sm z-40 overflow-y-auto flex flex-col">
        <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-light to-brand text-white flex items-center justify-center shadow-md">
                    <i className="ph-bold ph-drop text-lg"></i>
                </div>
                <span className="font-bold text-lg tracking-tight text-gray-900">PressingPro</span>
            </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
            <button onClick={() => router.push('/agent-dashboard')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-chart-pie-slice text-lg"></i>
                <span>Tableau de bord</span>
            </button>
            
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-brand-50 text-brand font-medium transition-all duration-200 text-sm">
                <i className="ph ph-plus-circle text-lg"></i>
                <span>Nouvelle commande</span>
            </button>
            
            <button onClick={() => router.push('/agent-orders')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-list-checks text-lg"></i>
                <span>Commandes</span>
            </button>
            
            <button onClick={() => router.push('/agent-clients')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-users text-lg"></i>
                <span>Clients</span>
            </button>
            
            <button onClick={() => router.push('/agent-storage')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-archive-box text-lg"></i>
                <span>Rangement</span>
            </button>
            
            <button onClick={() => router.push('/agent-cash')} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-cash text-lg"></i>
                <span>Caisse</span>
            </button>
        </nav>

        <div className="p-4 border-t border-gray-100">
            <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 font-medium transition-all duration-200 text-sm">
                <i className="ph ph-sign-out text-lg"></i>
                <span>Déconnexion</span>
            </button>
        </div>
    </aside>

    {/* Main Content */}
    <main className="flex-1 ml-64 pt-6 pb-12 px-6">
        
        {/* Header */}
        <div className="mb-8">
            <button onClick={() => router.push('/agent-dashboard')} className="flex items-center gap-2 text-brand font-semibold mb-4 hover:underline">
                <i className="ph ph-arrow-left"></i>
                <span>Retour au tableau de bord</span>
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Nouvelle commande</h1>
            <p className="text-gray-500 mt-1">Créez une commande en 5 étapes</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center w-full">
                {/* Step 1 */}
                <div className="flex flex-col items-center flex-1">
                    <div className={getStepCircleClass(1)}>1</div>
                    <p className="text-xs font-semibold text-gray-700 text-center">Client</p>
                </div>
                <div className="flex-1 h-1 bg-gray-200 mx-2"></div>

                {/* Step 2 */}
                <div className="flex flex-col items-center flex-1">
                    <div className={getStepCircleClass(2)}>2</div>
                    <p className="text-xs font-semibold text-gray-600 text-center">Articles</p>
                </div>
                <div className="flex-1 h-1 bg-gray-200 mx-2"></div>

                {/* Step 3 */}
                <div className="flex flex-col items-center flex-1">
                    <div className={getStepCircleClass(3)}>3</div>
                    <p className="text-xs font-semibold text-gray-600 text-center">Date</p>
                </div>
                <div className="flex-1 h-1 bg-gray-200 mx-2"></div>

                {/* Step 4 */}
                <div className="flex flex-col items-center flex-1">
                    <div className={getStepCircleClass(4)}>4</div>
                    <p className="text-xs font-semibold text-gray-600 text-center">Total</p>
                </div>
                <div className="flex-1 h-1 bg-gray-200 mx-2"></div>

                {/* Step 5 */}
                <div className="flex flex-col items-center flex-1">
                    <div className={getStepCircleClass(5)}>5</div>
                    <p className="text-xs font-semibold text-gray-600 text-center">Paiement</p>
                </div>
            </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-card border border-gray-100/50 p-8">

            {/* STEP 1: Select/Create Customer */}
            <div id="step1" className={currentStep === 1 ? 'block' : 'hidden'}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Sélectionner ou créer un client</h2>
                
                {/* Search/Create Toggle */}
                <div className="flex gap-3 mb-6">
                    <button onClick={() => toggleCustomerMode(true)} className={`flex-1 py-2.5 px-4 rounded-xl font-semibold text-sm ${isExistingCustomer ? 'bg-brand text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                        <i className="ph ph-magnifying-glass mr-2"></i>Client existant
                    </button>
                    <button onClick={() => toggleCustomerMode(false)} className={`flex-1 py-2.5 px-4 rounded-xl font-semibold text-sm ${!isExistingCustomer ? 'bg-brand text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                        <i className="ph ph-plus mr-2"></i>Nouveau client
                    </button>
                </div>

                {/* Search Mode */}
                <div id="search-mode" className={isExistingCustomer ? 'space-y-4' : 'hidden'}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Rechercher un client</label>
                        <input type="text" id="customer-search" placeholder="Nom, téléphone ou email..." 
                               className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand focus:bg-white rounded-xl text-sm outline-none transition-all duration-200 focus:ring-4 focus:ring-brand/5" />
                    </div>

                    {/* Customer List */}
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                        <div className="p-4 border border-gray-200 rounded-xl hover:border-brand hover:bg-brand-50 cursor-pointer transition-all" onClick={() => selectCustomer('Marie Dubois', '06 45 32 11 22')}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-gray-900">Marie Dubois</p>
                                    <p className="text-sm text-gray-500">06 45 32 11 22</p>
                                </div>
                                <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-semibold">Or</span>
                            </div>
                        </div>

                        <div className="p-4 border border-gray-200 rounded-xl hover:border-brand hover:bg-brand-50 cursor-pointer transition-all" onClick={() => selectCustomer('Jean Martin', '07 12 34 56 78')}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-gray-900">Jean Martin</p>
                                    <p className="text-sm text-gray-500">07 12 34 56 78</p>
                                </div>
                                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">Standard</span>
                            </div>
                        </div>

                        <div className="p-4 border border-gray-200 rounded-xl hover:border-brand hover:bg-brand-50 cursor-pointer transition-all" onClick={() => selectCustomer('Sophie Bernard', '06 78 90 12 34')}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-gray-900">Sophie Bernard</p>
                                    <p className="text-sm text-gray-500">06 78 90 12 34</p>
                                </div>
                                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-semibold">Standard</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Create New Mode */}
                <div id="create-mode" className={!isExistingCustomer ? 'space-y-4' : 'hidden'}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                        <input type="text" id="new-name" placeholder="Ex: Alice Fontaine" 
                               className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand focus:bg-white rounded-xl text-sm outline-none transition-all duration-200 focus:ring-4 focus:ring-brand/5" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                        <input type="tel" id="new-phone" placeholder="06 XX XX XX XX" 
                               className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand focus:bg-white rounded-xl text-sm outline-none transition-all duration-200 focus:ring-4 focus:ring-brand/5" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Adresse email (optionnel)</label>
                        <input type="email" id="new-email" placeholder="alice@example.com" 
                               className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand focus:bg-white rounded-xl text-sm outline-none transition-all duration-200 focus:ring-4 focus:ring-brand/5" />
                    </div>

                    <button onClick={createNewCustomer} className="w-full py-2.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-all text-sm">
                        Créer le client et continuer
                    </button>
                </div>

                {/* Selected Customer Display */}
                <div className={selectedCustomerVisible ? 'p-4 bg-brand-50 border border-brand-100 rounded-xl mt-6' : 'hidden'}>
                    <p className="text-sm text-gray-600">Client sélectionné :</p>
                    <p className="text-lg font-bold text-gray-900 mt-1">{orderData.customer.name}</p>
                    <p className="text-sm text-gray-600">{orderData.customer.phone}</p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-8">
                    <button onClick={() => router.push('/agent-dashboard')} className="flex-1 py-2.5 px-4 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all text-sm">
                        Annuler
                    </button>
                    <button onClick={nextStep} disabled={!orderData.customer.name} className="flex-1 py-2.5 px-4 rounded-xl bg-brand text-white font-semibold hover:bg-brand-dark disabled:bg-gray-300 transition-all text-sm">
                        Continuer →
                    </button>
                </div>
            </div>

            {/* STEP 2: Add Items/Services */}
            <div id="step2" className={currentStep === 2 ? 'block' : 'hidden'}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Sélectionner les articles et services</h2>
                
                <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Lavage */}
                        <div className="p-4 border border-gray-200 rounded-xl hover:border-brand cursor-pointer transition-all" onClick={() => addItem('Lavage standard', 5000)}>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-gray-900">Lavage standard</h3>
                                <span className="text-brand font-bold">5,000 F</span>
                            </div>
                            <p className="text-xs text-gray-600">Vêtements courants • Délai: 3 jours</p>
                        </div>

                        {/* Lavage & Repassage */}
                        <div className="p-4 border border-gray-200 rounded-xl hover:border-brand cursor-pointer transition-all" onClick={() => addItem('Lavage & Repassage', 8000)}>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-gray-900">Lavage & Repassage</h3>
                                <span className="text-brand font-bold">8,000 F</span>
                            </div>
                            <p className="text-xs text-gray-600">Chemises, pantalons • Délai: 3 jours</p>
                        </div>

                        {/* Nettoyage à sec */}
                        <div className="p-4 border border-gray-200 rounded-xl hover:border-brand cursor-pointer transition-all" onClick={() => addItem('Nettoyage à sec', 12000)}>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-gray-900">Nettoyage à sec</h3>
                                <span className="text-brand font-bold">12,000 F</span>
                            </div>
                            <p className="text-xs text-gray-600">Costumes, robes délicates • Délai: 5 jours</p>
                        </div>

                        {/* Express 24h */}
                        <div className="p-4 border border-gray-200 rounded-xl hover:border-brand cursor-pointer transition-all" onClick={() => addItem('Express (24h)', 15000)}>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-gray-900">Express (24h)</h3>
                                <span className="text-brand font-bold">15,000 F</span>
                            </div>
                            <p className="text-xs text-gray-600">Service rapide • Délai: 24h</p>
                        </div>
                    </div>
                </div>

                {/* Items Added */}
                <div id="items-list" className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-sm font-semibold text-gray-700 mb-4">Articles ajoutés</p>
                    <div id="items-container" className="space-y-2">
                        {orderData.items.length === 0 ? (
                            <p className="text-sm text-gray-500 italic">Aucun article ajouté</p>
                        ) : (
                            orderData.items.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center p-2 bg-white rounded border border-gray-100">
                                    <span className="text-sm font-medium text-gray-900">{item.name}</span>
                                    <div className="flex gap-2 items-center">
                                        <span className="text-sm font-bold text-brand">{item.price.toLocaleString()} F</span>
                                        <button onClick={() => removeItem(idx)} className="text-red-500 hover:text-red-700 text-sm font-bold">×</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-8">
                    <button onClick={previousStep} className="flex-1 py-2.5 px-4 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all text-sm">
                        ← Précédent
                    </button>
                    <button onClick={nextStep} disabled={orderData.items.length === 0} className="flex-1 py-2.5 px-4 rounded-xl bg-brand text-white font-semibold hover:bg-brand-dark disabled:bg-gray-300 transition-all text-sm">
                        Continuer →
                    </button>
                </div>
            </div>

            {/* STEP 3: Select Pickup Date */}
            <div id="step3" className={currentStep === 3 ? 'block' : 'hidden'}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Choisir la date de retrait</h2>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Date de retrait prévue</label>
                        <input
                          type="date"
                          id="pickup-date"
                          value={orderData.pickupDate}
                          onChange={(event) =>
                            setOrderData((previous) => ({
                              ...previous,
                              pickupDate: event.target.value,
                            }))
                          }
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand focus:bg-white rounded-xl text-sm outline-none transition-all duration-200 focus:ring-4 focus:ring-brand/5"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Créneau horaire</label>
                        <select
                          id="pickup-time"
                          value={orderData.pickupTime}
                          onChange={(event) =>
                            setOrderData((previous) => ({
                              ...previous,
                              pickupTime: event.target.value,
                            }))
                          }
                          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-brand focus:bg-white rounded-xl text-sm outline-none transition-all duration-200 focus:ring-4 focus:ring-brand/5"
                        >
                            <option value="">Sélectionner un créneau</option>
                            <option value="09:00-11:00">09:00 - 11:00</option>
                            <option value="11:00-13:00">11:00 - 13:00</option>
                            <option value="14:00-16:00">14:00 - 16:00</option>
                            <option value="16:00-18:00">16:00 - 18:00</option>
                        </select>
                    </div>

                    <div className="p-4 bg-brand-50 border border-brand-100 rounded-xl">
                        <p className="text-sm font-semibold text-gray-700">Note importante</p>
                        <p className="text-xs text-gray-600 mt-2">Les délais dépendent du service choisi. Assurez-vous que la date sélectionnée correspond au délai du service.</p>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-8">
                    <button onClick={previousStep} className="flex-1 py-2.5 px-4 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all text-sm">
                        ← Précédent
                    </button>
                    <button onClick={nextStep} disabled={!orderData.pickupDate || !orderData.pickupTime} className="flex-1 py-2.5 px-4 rounded-xl bg-brand text-white font-semibold hover:bg-brand-dark disabled:bg-gray-300 transition-all text-sm">
                        Continuer →
                    </button>
                </div>
            </div>

            {/* STEP 4: Review & Total */}
            <div id="step4" className={currentStep === 4 ? 'block' : 'hidden'}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Résumé de la commande</h2>
                
                <div className="space-y-6">
                    {/* Customer Info */}
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="text-xs font-semibold text-gray-600 uppercase">Client</p>
                        <p className="text-lg font-bold text-gray-900 mt-1">{orderData.customer.name}</p>
                        <p className="text-sm text-gray-600">{orderData.customer.phone}</p>
                    </div>

                    {/* Items */}
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="text-xs font-semibold text-gray-600 uppercase mb-3">Articles</p>
                        <div className="space-y-2">
                            {orderData.items.length === 0 ? (
                                <p className="text-sm text-gray-500">Aucun article</p>
                            ) : (
                                orderData.items.map((item, idx) => (
                                    <div key={idx} className="flex justify-between text-sm">
                                        <span className="text-gray-700">{item.name}</span>
                                        <span className="font-semibold text-gray-900">{item.price.toLocaleString()} F</span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Dates */}
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <p className="text-xs font-semibold text-gray-600 uppercase">Date et créneau</p>
                        <p className="text-lg font-bold text-gray-900 mt-1">
                            {orderData.pickupDate ? `${new Date(orderData.pickupDate).toLocaleDateString('fr-FR')} • ${orderData.pickupTime}` : 'À définir'}
                        </p>
                    </div>

                    {/* Pricing Summary */}
                    <div className="p-6 bg-gradient-to-br from-brand-50 to-white rounded-2xl border border-brand-100 space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Sous-total</span>
                            <span id="subtotal" className="font-semibold text-gray-900">
                              {pricing.subtotal.toLocaleString()} F
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Taxe (18%)</span>
                            <span id="tax" className="font-semibold text-gray-900">
                              {pricing.tax.toLocaleString()} F
                            </span>
                        </div>
                        <div className="border-t border-brand-100 pt-3 flex justify-between">
                            <span className="text-lg font-bold text-gray-900">Total</span>
                            <span id="total" className="text-2xl font-bold text-brand">
                              {pricing.total.toLocaleString()} F
                            </span>
                        </div>
                    </div>

                    {/* Storage location */}
                    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-4 mt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs font-semibold text-gray-600 uppercase">Emplacement de rangement</p>
                                <p className="text-sm text-gray-500 mt-1">
                                  Utilisé pour retrouver rapidement les vêtements dans la zone de rangement.
                                </p>
                            </div>
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-dashed border-gray-300 text-xs text-gray-600">
                                Code :{" "}
                                <span className="ml-1 font-semibold text-gray-900">
                                  {buildStorageCode(orderData) ?? 'Non défini'}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">Zone</label>
                                <input
                                  type="text"
                                  value={orderData.storageZone}
                                  onChange={(event) =>
                                    setOrderData((previous) => ({
                                      ...previous,
                                      storageZone: event.target.value,
                                    }))
                                  }
                                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/5"
                                  placeholder="Ex : Salle principale"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">Rack</label>
                                <select
                                  value={orderData.storageRack}
                                  onChange={(event) =>
                                    setOrderData((previous) => ({
                                      ...previous,
                                      storageRack: event.target.value,
                                    }))
                                  }
                                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/5"
                                >
                                    {['A', 'B', 'C', 'D'].map((rack) => (
                                      <option key={rack} value={rack}>
                                        {rack}
                                      </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-700 mb-1.5">Position</label>
                                <div className="flex gap-2">
                                    <input
                                      type="number"
                                      min={1}
                                      max={99}
                                      value={orderData.storagePosition}
                                      onChange={(event) =>
                                        setOrderData((previous) => ({
                                          ...previous,
                                          storagePosition: event.target.value,
                                        }))
                                      }
                                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:border-brand focus:ring-4 focus:ring-brand/5"
                                      placeholder="01"
                                    />
                                    <button
                                      type="button"
                                      onClick={() => {
                                        const suggested = suggestNextStoragePosition(
                                          orderData.storageZone,
                                          orderData.storageRack,
                                        );
                                        setOrderData((previous) => ({
                                          ...previous,
                                          storagePosition: suggested || previous.storagePosition,
                                        }));
                                      }}
                                      className="px-3 py-2 rounded-xl border border-dashed border-gray-300 text-xs text-gray-600 hover:border-brand hover:text-brand transition-colors"
                                    >
                                      Suggérer
                                    </button>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-gray-500">
                          Emplacement formaté :{" "}
                          <span className="font-semibold text-gray-900">
                            {formatStorageLocation(orderData)}
                          </span>
                        </p>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-8">
                    <button onClick={() => previousStep()} className="flex-1 py-2.5 px-4 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all text-sm">
                        ← Précédent
                    </button>
                    <button onClick={() => nextStep()} className="flex-1 py-2.5 px-4 rounded-xl bg-brand text-white font-semibold hover:bg-brand-dark transition-all text-sm">
                        Procéder au paiement →
                    </button>
                </div>
            </div>

            {/* STEP 5: Payment */}
            <div id="step5" className={currentStep === 5 ? 'block' : 'hidden'}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Mode de paiement</h2>
                
                <div className="space-y-4">
                    <label className="p-4 border-2 border-brand rounded-xl cursor-pointer flex items-center gap-3 bg-brand-50">
                        <input type="radio" name="payment" value="cash" checked className="w-5 h-5 text-brand accent-brand" />
                        <div>
                            <p className="font-semibold text-gray-900">Espèces</p>
                            <p className="text-xs text-gray-600">Paiement comptant</p>
                        </div>
                    </label>

                    <label className="p-4 border-2 border-gray-200 rounded-xl cursor-pointer flex items-center gap-3 hover:border-brand transition-all">
                        <input type="radio" name="payment" value="card" className="w-5 h-5 text-brand accent-brand" />
                        <div>
                            <p className="font-semibold text-gray-900">Carte bancaire</p>
                            <p className="text-xs text-gray-600">Visa, Mastercard, etc.</p>
                        </div>
                    </label>

                    <label className="p-4 border-2 border-gray-200 rounded-xl cursor-pointer flex items-center gap-3 hover:border-brand transition-all">
                        <input type="radio" name="payment" value="credit" className="w-5 h-5 text-brand accent-brand" />
                        <div>
                            <p className="font-semibold text-gray-900">Crédit (Compte client)</p>
                            <p className="text-xs text-gray-600">À facturer</p>
                        </div>
                    </label>
                </div>

                {/* Payment Summary */}
                <div className="mt-8 p-6 bg-gradient-to-br from-brand-50 to-white rounded-2xl border border-brand-100 space-y-2">
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Montant total</span>
                        <span id="final-total" className="text-2xl font-bold text-brand">
                          {pricing.total.toLocaleString()} F
                        </span>
                    </div>
                    <p className="text-xs text-gray-600">
                      La facture sera générée automatiquement et un reçu sera envoyé au client (simulation).
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-8">
                    <button onClick={() => previousStep()} className="flex-1 py-2.5 px-4 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all text-sm">
                        ← Précédent
                    </button>
                    <button onClick={() => completeOrder()} className="flex-1 py-2.5 px-4 rounded-xl bg-brand text-white font-semibold hover:bg-brand-dark transition-all text-sm flex items-center justify-center gap-2">
                        <i className="ph ph-check-circle"></i>
                        Valider la commande
                    </button>
                </div>
            </div>

        </div>

    </main>
        </div>
      </>
    );
}
