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
const sub_entity_1 = require("./sub.entity");
const common_1 = require("@nestjs/common");
let SubRepository = class SubRepository extends typeorm_1.Repository {
    geSubCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.createQueryBuilder('subcategory');
            try {
                const subs = yield query.getMany();
                return subs;
            }
            catch (error) {
                throw new common_1.InternalServerErrorException();
            }
        });
    }
    createSubCategory(subCategoryValues, category) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, nameRu, nameEn } = subCategoryValues;
            const sub = new sub_entity_1.SubCategory();
            sub.name = name;
            sub.nameRu = nameRu;
            sub.nameEn = nameEn;
            sub.category = category;
            try {
                yield sub.save();
                return sub;
            }
            catch (e) {
                throw new common_1.InternalServerErrorException();
            }
        });
    }
    updateSubCategory(subCategoryValues, category, subCategory) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, nameRu, nameEn, categoryId } = subCategoryValues;
            if (categoryId !== category.id) {
                subCategory.category = category;
            }
            if (subCategory.name !== name) {
                subCategory.name = name;
            }
            if (subCategory.nameRu !== nameRu) {
                subCategory.nameRu = nameRu;
            }
            if (subCategory.nameEn !== nameEn) {
                subCategory.nameEn = nameEn;
            }
            try {
                yield subCategory.save();
                return subCategory;
            }
            catch (e) {
                throw new common_1.InternalServerErrorException();
            }
        });
    }
};
SubRepository = __decorate([
    typeorm_1.EntityRepository(sub_entity_1.SubCategory)
], SubRepository);
exports.SubRepository = SubRepository;
//# sourceMappingURL=sub.repository.js.map