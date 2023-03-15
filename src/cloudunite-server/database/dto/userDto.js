export class UserDto {
    accessToken;
    user;
    disks;

    constructor(model) {
        this.accessToken = model.accessToken;
        this.user = {...model.user};
        this.disks = {...model.disks};
    }

    json() {
        return {...this}
    }
}