export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T | null;
    errors: Record<string, string[]> | null;
}

export interface User {
    id: string;
    name: string;
    username: string;
    role: string;
}

export interface LoginResponse {
    token: string;
    expiresAt: string;
    user: User;
}