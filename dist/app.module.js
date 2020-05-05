"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const tasks_module_1 = require("./tasks/tasks.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const authorization_module_1 = require("./authorization/authorization.module");
const product_module_1 = require("./product/product.module");
const category_module_1 = require("./category/category.module");
const feedback_module_1 = require("./feedback/feedback.module");
const subcategory_module_1 = require("./subcategory/subcategory.module");
const platform_express_1 = require("@nestjs/platform-express");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            tasks_module_1.TasksModule,
            platform_express_1.MulterModule.register({
                dest: '/upload',
            }),
            authorization_module_1.AuthorizationModule,
            product_module_1.ProductModule,
            category_module_1.CategoryModule,
            feedback_module_1.FeedbackModule,
            subcategory_module_1.SubcategoryModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map