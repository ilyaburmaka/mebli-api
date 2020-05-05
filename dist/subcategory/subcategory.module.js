"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const subcategory_service_1 = require("./subcategory.service");
const subcategory_controller_1 = require("./subcategory.controller");
const typeorm_1 = require("@nestjs/typeorm");
const authorization_module_1 = require("../authorization/authorization.module");
const sub_repository_1 = require("./sub.repository");
const category_service_1 = require("../category/category.service");
const category_repository_1 = require("../category/category.repository");
let SubcategoryModule = class SubcategoryModule {
};
SubcategoryModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([sub_repository_1.SubRepository, category_repository_1.CategoryRepository]),
            authorization_module_1.AuthorizationModule,
        ],
        providers: [subcategory_service_1.SubcategoryService, category_service_1.CategoryService],
        controllers: [subcategory_controller_1.SubcategoryController],
    })
], SubcategoryModule);
exports.SubcategoryModule = SubcategoryModule;
//# sourceMappingURL=subcategory.module.js.map