import { create } from "zustand";

export type OrderStatus = "recue" | "en_cours" | "prete" | "livree";

export interface StorageLocation {
  storageZone?: string;
  storageRack?: string;
  storagePosition?: string;
}

export interface Order extends StorageLocation {
  id: string;
  customerName: string;
  customerPhone: string;
  service: string;
  itemsSummary: string;
  amount: number;
  currency?: string;
  pickupDate?: string;
  pickupTime?: string;
  status: OrderStatus;
}

const STORAGE_KEY = "pressingpro-orders-v1";

const seedOrders: Order[] = [
  {
    id: "ORD-023",
    customerName: "Marie Dubois",
    customerPhone: "+33 6 45 32 11 22",
    service: "Nettoyage à sec",
    itemsSummary: "Costume, Chemise",
    amount: 12000,
    currency: "FCFA",
    pickupDate: "Aujourd'hui",
    pickupTime: "09:30",
    status: "prete",
    storageZone: "Salle principale",
    storageRack: "A",
    storagePosition: "03",
  },
  {
    id: "ORD-024",
    customerName: "Jean Martin",
    customerPhone: "+33 6 12 34 56 78",
    service: "Lavage & Repassage",
    itemsSummary: "5 Chemises",
    amount: 8500,
    currency: "FCFA",
    pickupDate: "Aujourd'hui",
    pickupTime: "08:15",
    status: "en_cours",
    storageZone: "Salle principale",
    storageRack: "B",
    storagePosition: "04",
  },
  {
    id: "ORD-025",
    customerName: "Sophie Bernard",
    customerPhone: "+33 6 98 76 54 32",
    service: "Express (24h)",
    itemsSummary: "Robe soirée",
    amount: 6000,
    currency: "FCFA",
    pickupDate: "Hier",
    pickupTime: "17:45",
    status: "recue",
    storageZone: "Salle principale",
    storageRack: "C",
    storagePosition: "05",
  },
  {
    id: "ORD-019",
    customerName: "Hôtel de Paris",
    customerPhone: "contact@hotelparis.com",
    service: "Lavage industriel (50kg)",
    itemsSummary: "Linge de lit",
    amount: 45000,
    currency: "FCFA",
    pickupDate: "Ce matin",
    pickupTime: "09:30",
    status: "livree",
    storageZone: "Zone Pro",
    storageRack: "B",
    storagePosition: "12",
  },
  {
    id: "ORD-026",
    customerName: "Lucas Moreau",
    customerPhone: "+33 6 11 22 33 44",
    service: "Nettoyage à sec",
    itemsSummary: "Costume",
    amount: 18000,
    currency: "FCFA",
    pickupDate: "Hier",
    pickupTime: "17:45",
    status: "recue",
    storageZone: "Salle principale",
    storageRack: "A",
    storagePosition: "10",
  },
  {
    id: "ORD-020",
    customerName: "Emma Laurent",
    customerPhone: "+33 6 00 11 22 33",
    service: "Lavage express",
    itemsSummary: "Divers vêtements",
    amount: 9000,
    currency: "FCFA",
    pickupDate: "Hier",
    pickupTime: "14:20",
    status: "prete",
    storageZone: "Salle principale",
    storageRack: "C",
    storagePosition: "02",
  },
];

function loadInitialOrders(): Order[] {
  if (typeof globalThis === "undefined" || typeof globalThis.window === "undefined") {
    return seedOrders;
  }

  try {
    const raw = globalThis.window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedOrders;
    const parsed = JSON.parse(raw) as Order[];
    if (!Array.isArray(parsed)) return seedOrders;
    return parsed;
  } catch {
    return seedOrders;
  }
}

function persistOrders(orders: Order[]) {
  if (typeof globalThis === "undefined" || typeof globalThis.window === "undefined") return;
  try {
    globalThis.window.localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  } catch {
    // ignore persistence errors in demo mode
  }
}

export interface OrdersState {
  orders: Order[];
  addOrder: (order: Omit<Order, "id">) => Order;
  updateOrder: (id: string, data: Partial<Order>) => void;
  findById: (id: string) => Order | undefined;
  searchOrders: (query: string) => Order[];
}

export const useOrdersStore = create<OrdersState>((set, get) => ({
  orders: loadInitialOrders(),

  addOrder: (orderInput) => {
    const existing = get().orders;
    const numericParts = existing
      .map((o) => o.id.match(/ORD-(\d+)/i))
      .filter(Boolean)
      .map((m) => parseInt((m as RegExpMatchArray)[1], 10))
      .filter((n) => !Number.isNaN(n));

    const nextNumber =
      numericParts.length > 0 ? Math.max(...numericParts) + 1 : 1;
    const id = `ORD-${nextNumber.toString().padStart(3, "0")}`;

    const order: Order = { id, ...orderInput };
    const orders = [...existing, order];
    persistOrders(orders);
    set({ orders });
    return order;
  },

  updateOrder: (id, data) => {
    const orders = get().orders.map((order) =>
      order.id === id ? { ...order, ...data } : order
    );
    persistOrders(orders);
    set({ orders });
  },

  findById: (id) => {
    return get().orders.find((order) => order.id === id);
  },

  searchOrders: (query) => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return get().orders;
    return get().orders.filter((order) => {
      return (
        order.id.toLowerCase().includes(trimmed) ||
        order.customerName.toLowerCase().includes(trimmed) ||
        order.customerPhone.toLowerCase().includes(trimmed)
      );
    });
  },
}));

