import { apiFetch } from "@/lib/api";
import { LoginResponse, User } from "@/types/auth";

export const authService = {
    login(username: string, password: string) {
        return apiFetch<LoginResponse>("/auth/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
        });
    },
    me() {
        return apiFetch<User>("/auth/me");
    },
    saveSession(data: LoginResponse) {
        localStorage.setItem("nagi_token", data.token);
        localStorage.setItem("nagi_user", JSON.stringify(data.user));
    },
    clearSession() {
        localStorage.removeItem("nagi_token");
        localStorage.removeItem("nagi_user");
    }
}