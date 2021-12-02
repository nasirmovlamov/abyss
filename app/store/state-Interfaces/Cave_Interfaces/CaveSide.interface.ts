export interface CaveSideInterface {
    selectedWindow: "profile" | "inventory" | "library" | "notes" | "shop" | "guide",
    status: 'loading' | 'loaded' | 'error',
}