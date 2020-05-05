"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
const common_1 = require("@nestjs/common");
let CategoryRepository = class CategoryRepository extends typeorm_1.Repository {
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.createQueryBuilder('category').leftJoinAndSelect("category.subcategory", "subcategory");
            return yield query.getMany();
        });
    }
    createCategory(categoryValues) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = new category_entity_1.Category();
            category.name = categoryValues.name;
            category.nameRu = categoryValues.nameRu;
            category.nameEn = categoryValues.nameEn;
            category.type = categoryValues.type;
            try {
                yield category.save();
                return category;
            }
            catch (e) {
                throw new common_1.InternalServerErrorException();
            }
        });
    }
    updateCategory(categoryValues, category) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, type, nameEn, nameRu } = categoryValues;
            if (category.name !== name) {
                category.name = name;
            }
            if (category.nameEn !== nameEn) {
                category.nameEn = nameEn;
            }
            if (category.nameRu !== nameRu) {
                category.nameRu = nameRu;
            }
            if (category.type !== type) {
                category.type = type;
            }
            try {
                yield category.save();
                return category;
            }
            catch (e) {
                throw new common_1.InternalServerErrorException();
            }
        });
    }
};
CategoryRepository = __decorate([
    typeorm_1.EntityRepository(category_entity_1.Category)
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=category.repository.js.map