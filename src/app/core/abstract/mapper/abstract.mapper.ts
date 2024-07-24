import { EMPTY_STRING, FirstSizeKeys, HeadersKeys, NOT_ASSIGNED, NOT_FOUND, PathKeys, SaleConditionKeys, ServiceKeys, ServicePayloadKeys, URL_CONNECTOR } from '../abstract.config';
import { ProductDivisionKeys } from "../abstract.config";

export const RecipeRequireMapper = {
    [SaleConditionKeys.NOT_FOUND]: false,
    [SaleConditionKeys.NOT_ASSIGNED]: false,
    [SaleConditionKeys.simpleRecipe]: true,
    [SaleConditionKeys.recipeRetention]: true,
    [SaleConditionKeys.recipeCheck]: true,
    [SaleConditionKeys.noPrescription]: false
};

export const HeaderConfigMapper = {
    [HeadersKeys.accept]: 'application/json',
    [HeadersKeys.contentType]: 'application/json'
};

export const ServiceAbstractClassKey = {
    [ServiceKeys.NOT_FOUND]: NOT_ASSIGNED,
    [ServiceKeys.NOT_ASSIGNED]: NOT_ASSIGNED,
    [ServiceKeys.PRODUCT_BY_SKU]: ServicePayloadKeys.product,
    [ServiceKeys.PRODUCT_BY_QUERY]: ServicePayloadKeys.products
};

export const FirstSizeMapper = {
    [FirstSizeKeys.NOT_FOUND]: 20,
    [FirstSizeKeys.NOT_ASSIGNED]: 20,
    [FirstSizeKeys.big]: 20,
    [FirstSizeKeys.medium]: 9,
    [FirstSizeKeys.small]: 8
};

export const PathConfigMapper = {
    [PathKeys.NOT_FOUND]: {
        productType: NOT_FOUND,
        slug: []
    },
    [PathKeys.NOT_ASSIGNED]: {
        productType: NOT_ASSIGNED,
        slug: []
    },
    [PathKeys.SUBSCRIPTION]: {
        productType: NOT_ASSIGNED,
        slug: []
    },
    [PathKeys.DERMOCOSMETIC]: {
        productType: ProductDivisionKeys.DERMOCOSMETIC,
        slug: []
    },
    [PathKeys.MEDICAMENT]: {
        productType: ProductDivisionKeys.MEDICAMENT,
        slug: []
    },
    [PathKeys.PAGE]: {
        productType: NOT_ASSIGNED,
        slug: []
    },
    [PathKeys.BLACK_FRIDAY]: {
        productType: EMPTY_STRING,
        slug: [PathKeys.BLACK_FRIDAY + URL_CONNECTOR + PathKeys.MEDICAMENT, PathKeys.BLACK_FRIDAY + URL_CONNECTOR + PathKeys.DERMOCOSMETIC]
    },
    [PathKeys.CYBER]: {
        productType: EMPTY_STRING,
        slug: [PathKeys.CYBER + URL_CONNECTOR + PathKeys.MEDICAMENT, PathKeys.CYBER + URL_CONNECTOR + PathKeys.DERMOCOSMETIC]
    },
};