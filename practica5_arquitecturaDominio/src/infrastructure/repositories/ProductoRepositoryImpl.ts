import { PrismaClient } from '@prisma/client';
import { ProductoEntity } from '../../domain/entities'; // Ajusta según la estructura de tu entidad de producto
import { ProductoRepository } from '../../domain/repositories/producto.repository';

const prisma = new PrismaClient();

export class ProductoRepositoryImpl implements ProductoRepository {

    async create(producto: any): Promise<ProductoEntity> {
        const createdProducto = await prisma.producto.create({
            data: producto
        });
        return ProductoEntity.fromObject(createdProducto);
    }

    async getAll(): Promise<ProductoEntity[]> {
        const productos = await prisma.producto.findMany();
        return productos.map(producto => ProductoEntity.fromObject(producto));
    }

    async findById(id: number): Promise<ProductoEntity | null> {
        const producto = await prisma.producto.findUnique({
            where: { id }
        });
        return producto ? ProductoEntity.fromObject(producto) : null;
    }

    async updateById(id: number, producto: any): Promise<ProductoEntity> {
        const updatedProducto = await prisma.producto.update({
            where: { id },
            data: producto
        });
        return ProductoEntity.fromObject(updatedProducto);
    }

    async deleteById(id: number): Promise<ProductoEntity> {
        const deleted = await prisma.producto.delete({
            where: { id }
        });
        return ProductoEntity.fromObject(deleted);
    }
}
