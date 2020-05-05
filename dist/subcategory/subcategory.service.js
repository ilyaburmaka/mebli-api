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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sub_repository_1 = require("./sub.repository");
const category_repository_1 = require("../category/category.repository");
let SubcategoryService = class SubcategoryService {
    constructor(subRepository, categoryRepository) {
        this.subRepository = subRepository;
        this.categoryRepository = categoryRepository;
    }
    geSubCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.subRepository.geSubCategory();
        });
    }
    geSubById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const found = yield this.subRepository.findOne({
                where: { id },
            });
            if (!found) {
                throw new common_1.NotFoundException(`Task with ID ${id} not found`);
            }
            return found;
        });
    }
    createSubCategory(subCategoryValues) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield this.categoryRepository.findOne(subCategoryValues.categoryId);
            if (!category) {
                throw new common_1.NotFoundException(`Category with ID ${subCategoryValues.categoryId} not found`);
            }
            return yield this.subRepository.createSubCategory(subCategoryValues, category);
        });
    }
    updateSub(subCategoryValues, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sub = yield this.geSubById(id);
            const category = yield this.categoryRepository.findOne(subCategoryValues.categoryId);
            return yield this.subRepository.updateSubCategory(subCategoryValues, category, sub);
        });
    }
    removeSub(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.subRepository.delete({
                id,
            });
            if (!result.affected) {
                throw new common_1.NotFoundException(`SubCategory with ID ${id} not found`);
            }
            if (!!result.affected) {
                return true;
            }
        });
    }
};
SubcategoryService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(sub_repository_1.SubRepository)),
    __param(1, typeorm_1.InjectRepository(category_repository_1.CategoryRepository)),
    __metadata("design:paramtypes", [sub_repository_1.SubRepository,
        category_repository_1.CategoryRepository])
], SubcategoryService);
exports.SubcategoryService = SubcategoryService;
//# sourceMappingURL=subcategory.service.js.map