import { randNumber, randPastDate } from '@ngneat/falso';
import { nanoid } from 'nanoid';
import { ProductIds } from '../enums/product-ids.js';
import { randChanceFn } from './generators/chance-fn.js';
import { SIZE_LARGE_ID, SIZE_MEDIUM_ID, SIZE_SMALL_ID } from './sizes.js';

export const productSales = [
  {
    id: nanoid(10),
    productId: ProductIds.tshirt,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.tshirt,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.tshirt,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.pants,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.pants,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.pants,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.shorts,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.shorts,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.shorts,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.sweater,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.sweater,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.sweater,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.hat,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.hat,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.hat,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.hoodie,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_SMALL_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.hoodie,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_MEDIUM_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
  {
    id: nanoid(10),
    productId: ProductIds.hoodie,
    quantity: randNumber({ min: 1, max: 999 }),
    sizeId: SIZE_LARGE_ID,
    dateCreated: randPastDate({ years: 10 }),
    dateUpdated: randChanceFn({ chanceTrue: 0.4 }, () => randPastDate({ years: 10 })),
  },
];
