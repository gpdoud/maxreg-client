export class Guest 
{
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(name: string, email: string, phone: string)
    {
        this.id = 0;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}
