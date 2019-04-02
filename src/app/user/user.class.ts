import { fromStringWithSourceMap } from "source-list-map";

export class User {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    isAdmin: boolean;
    active: boolean;

    constructor(username: string = "", password: string = "",
        firstname: string = "", lastname: string = "",
        isAdmin: boolean = false, active: boolean = false)
    {
        this.id = 0;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.isAdmin = isAdmin;
        this.active = active;
    }
}