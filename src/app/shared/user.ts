export interface User {
    userId: string;
    loginId: string;
    firstName?: string;
    lastName?: string;
    clientAccountId?: string;
    isAdmin?: boolean;
}
