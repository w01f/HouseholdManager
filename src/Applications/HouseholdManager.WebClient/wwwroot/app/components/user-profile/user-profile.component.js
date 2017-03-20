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
var core_1 = require('@angular/core');
var users_service_1 = require("../../services/users.service");
var exception_service_1 = require("../../services/exception.service");
var UserProfileViewModel_1 = require("../../models/users/UserProfileViewModel");
var UserProfileEditModel_1 = require("../../models/users/UserProfileEditModel");
var GenderType_1 = require("../../models/users/GenderType");
var UserProfileComponent = (function () {
    function UserProfileComponent(dataService, exceptionService) {
        this.dataService = dataService;
        this.exceptionService = exceptionService;
        this.originalUserProfile = new UserProfileViewModel_1.UserProfileViewModel();
        this.editedUserProfile = new UserProfileEditModel_1.UserProfileEditModel();
        this.genderTypes = GenderType_1.GenderType;
        this.title = "Profile";
        this.successCallback = function () { };
        this.errorCallback = function () { };
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getLoggedUserProfile()
            .then(function (userProfile) {
            _this.originalUserProfile = userProfile;
            _this.editedUserProfile.userId = userProfile.userId;
            _this.editedUserProfile.firstName = userProfile.firstName;
            _this.editedUserProfile.lastName = userProfile.lastName;
            _this.editedUserProfile.gender = userProfile.gender;
            _this.editedUserProfile.birthday = userProfile.birthday;
            _this.editedUserProfile.passwordOriginal = '';
            _this.editedUserProfile.passwordConfirm = '';
        })
            .catch(function (exception) { _this.exceptionService.handleAppException(exception); });
    };
    UserProfileComponent.prototype.submit = function () {
        this.formControl.onSubmit();
    };
    UserProfileComponent.prototype.saveData = function () {
        var _this = this;
        return this.dataService.editUserProfile(this.editedUserProfile)
            .then(function () {
            _this.successCallback();
        })
            .catch(function (exception) {
            _this.errorCallback(exception);
        });
    };
    __decorate([
        core_1.ViewChild('formControl'), 
        __metadata('design:type', Object)
    ], UserProfileComponent.prototype, "formControl", void 0);
    UserProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "user-profile",
            templateUrl: "user-profile.component.html",
            providers: [users_service_1.UsersService]
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService, exception_service_1.ExceptionService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.component.js.map