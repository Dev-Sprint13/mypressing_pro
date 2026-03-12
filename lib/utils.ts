import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { StorageLocation } from "./orders-store";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatStorageLocation(location: StorageLocation): string {
  const { storageZone } = location;
  const code = buildStorageCode(location);

  if (!storageZone && !code) {
    return "Non défini";
  }

  if (storageZone && code) {
    return `${storageZone} • Rack ${code}`;
  }

  if (code) {
    return `Rack ${code}`;
  }

  return storageZone ?? "Non défini";
}

export function buildStorageCode(location: StorageLocation): string | null {
  const { storageRack, storagePosition } = location;
  if (!storageRack || !storagePosition) return null;

  const position =
    storagePosition.length === 1
      ? `0${storagePosition}`
      : storagePosition.toString();

  return `${storageRack}-${position}`;
}

