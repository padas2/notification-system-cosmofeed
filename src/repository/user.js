"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryUsersRepo = void 0;
const user_1 = require("../model/user");
class InMemoryUsersRepo {
    static Init() {
        InMemoryUsersRepo.users = new Map;
        InMemoryUsersRepo.users.set(2, new user_1.User("Harry Potter", "9502272879", "harry.potter@gmail.com", "654C4DB3-3F68-4969-8GF6-80EA16B46EB0"));
        InMemoryUsersRepo.users.set(3, new user_1.User("Aragorn", "9502272876", "aragorn@gmail.com", "654C4DB3-3F68-4969-8ED2-80EA16B46EB0"));
        InMemoryUsersRepo.users.set(4, new user_1.User("Jon Snow", "9502272875", "jon.snow.padavala@gmail.com", "654C4DB3-3F68-4969-8ED2-80EA16B46EB0"));
        InMemoryUsersRepo.users.set(5, new user_1.User("Benjen Stark", "95023228734", "benjen.stark@gmail.com", "654C4DB3-3F68-4969-8ED2-80EA16B46EB0"));
        InMemoryUsersRepo.users.set(6, new user_1.User("Robert Baratheon", "66802272878", "robert.baratheon@gmail.com", "654C4DB3-3F68-4969-8ED2-80EA16B46EB0"));
    }
    static IsUserValid(user_id) {
        return this.users.has(user_id);
    }
    static GetUserContactDetails(user_id, notification_mode) {
        console.log("Received notification mode details : ", notification_mode);
        var user = this.users.get(user_id);
        switch (notification_mode) {
            case "email":
                return user === null || user === void 0 ? void 0 : user.email;
            case "sms":
                return user === null || user === void 0 ? void 0 : user.phoneNumber;
            case "push_notification":
                return user === null || user === void 0 ? void 0 : user.deviceTokenId;
        }
        return "";
    }
}
exports.InMemoryUsersRepo = InMemoryUsersRepo;
