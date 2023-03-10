export class AuthUserDto {
    id;
    email;
    name;

    constructor(model) {
        this.id = model.user_id;
        this.email = model.email;
        this.name = model.name;
    }
}