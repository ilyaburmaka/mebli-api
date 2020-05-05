import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssetsRepository } from './assets.repository';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(AssetsRepository)
    readonly assetsRepository: AssetsRepository,
  ) {}

  async saveFile(image: any): Promise<any> {
    return await this.assetsRepository.saveAsset(image);
  }

  async saveFiles(image: any): Promise<any> {
    return await this.assetsRepository.saveFiles(image);
  }

  async getAsset(imageId: any): Promise<any> {
    const found = await this.assetsRepository.findOne(imageId);

    return found;
  }
}
