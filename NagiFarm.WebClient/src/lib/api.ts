import { ApiResponse } from "@/types/auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<ApiResponse<T>> {
    const token = typeof window !== "undefined" ? localStorage.getItem("nagi_token") : null;

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
    };

    const res = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers
    });

    const json: ApiResponse<T> = await res.json();

    if (!res.ok || !json.success) {
        throw new Error(json.message || "Terjadi kesalahan pada server.");
    }

    return json;
}