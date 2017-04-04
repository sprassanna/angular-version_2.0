"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var posts_service_1 = require("../services/posts.service");
var UserComponent = (function () {
    function UserComponent(postService) {
        var _this = this;
        this.postService = postService;
        this.name = 'Prassanna Subiramaniyan';
        this.email = 'sprassanna@ceiamerica.com';
        this.address = {
            street: 'PV Chetty St',
            doorNo: 'New 24, Old NO 32',
            town: 'Ammapet'
        };
        this.hobbies = ['Music', 'Movies', 'Cricket'];
        this.showHobby = false;
        this.postService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
            console.log(_this.posts);
        });
    }
    UserComponent.prototype.toggleHobbies = function () {
        this.showHobby = !(this.showHobby);
    };
    UserComponent.prototype.deleteHobby = function (i) {
        this.hobbies.splice(i, 1);
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby.value);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user',
        templateUrl: 'user.component.html',
        providers: [posts_service_1.PostService],
    }),
    __metadata("design:paramtypes", [posts_service_1.PostService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map