export class Guest {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    active: boolean;

    constructor() {
        this.id = 0;
        this.firstname = "";
        this.lastname = "";
        this.email = "";
        this.phone = "";
        this.active = false;
    }
}
