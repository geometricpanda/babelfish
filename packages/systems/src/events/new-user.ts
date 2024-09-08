export interface NewUserEvent {
    id: number;
    firstName?: string;
    lastName?: string;
    email: string;
    createdBy: string;
    createdAt: number;
}
