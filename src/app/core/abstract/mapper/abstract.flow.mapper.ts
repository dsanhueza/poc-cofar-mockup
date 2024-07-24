import { EMPTY_STRING, PATH_CONNECTOR, PATH_QUERY_CONNECTOR, SerializerKeys, ServiceKeys, ServicePathConnectors, ServiceRequestParamsKeys, ServiceRouterPaths, URL_QUERY } from '../abstract.config';
import { Products, ProductsPayload, SingleProduct, SingleProductPayload } from '../abstract.structure';
import { ProductDivisionKeys } from "../abstract.config";

export const ManagePDPContentMapper = {
    [ProductDivisionKeys.NOT_FOUND]: null,
    [ProductDivisionKeys.NOT_ASSIGNED]: null,
    [ProductDivisionKeys.MEDICAMENT]: null,
    [ProductDivisionKeys.DERMOCOSMETIC]: null
};

export const ManagePLPContentMapper = {
    [ProductDivisionKeys.NOT_FOUND]: null,
    [ProductDivisionKeys.NOT_ASSIGNED]: null,
    [ProductDivisionKeys.MEDICAMENT]: null,
    [ProductDivisionKeys.DERMOCOSMETIC]: null
};

export const ServiceConfigMapper = {
    [ServiceKeys.NOT_FOUND]: {
        AbstractPayload: SingleProductPayload,
        AbstractStructure: SingleProduct,
        basePath: `${ServiceRouterPaths.PRODUCTS}`,
        conector: ServicePathConnectors.pathParam,
        serializerKey: SerializerKeys.NOT_ASSIGNED,
        serviceKey: ServiceKeys.PRODUCT_BY_SKU,
        assign: EMPTY_STRING,
        availableParams: {
            [ServiceRequestParamsKeys.first]: { active: false, key: ServiceRequestParamsKeys.first },
            [ServiceRequestParamsKeys.offset]: { active: false, key: ServiceRequestParamsKeys.offset },
            [ServiceRequestParamsKeys.sortBy]: { active: false, key: ServiceRequestParamsKeys.sortBy },
            [ServiceRequestParamsKeys.sortOrder]: { active: false, key: ServiceRequestParamsKeys.sortOrder },
            [ServiceRequestParamsKeys.subscription]: { active: false, key: ServiceRequestParamsKeys.subscription },
            [ServiceRequestParamsKeys.productType]: { active: false, key: ServiceRequestParamsKeys.productType },
            [ServiceRequestParamsKeys.priceMin]: { active: true, key: ServiceRequestParamsKeys.priceMin },
            [ServiceRequestParamsKeys.priceMax]: { active: true, key: ServiceRequestParamsKeys.priceMax },
            [ServiceRequestParamsKeys.slugs]: { active: true, key: ServiceRequestParamsKeys.slugs },
            [ServiceRequestParamsKeys.sku]: { active: false, key: ServiceRequestParamsKeys.sku }

        }
    },
    [ServiceKeys.NOT_ASSIGNED]: {
        AbstractPayload: SingleProductPayload,
        AbstractStructure: SingleProduct,
        basePath: `${ServiceRouterPaths.PRODUCTS}`,
        conector: ServicePathConnectors.pathParam,
        serializerKey: SerializerKeys.NOT_ASSIGNED,
        serviceKey: ServiceKeys.PRODUCT_BY_SKU,
        assign: EMPTY_STRING,
        availableParams: {
            [ServiceRequestParamsKeys.first]: { active: false, key: ServiceRequestParamsKeys.first },
            [ServiceRequestParamsKeys.offset]: { active: false, key: ServiceRequestParamsKeys.offset },
            [ServiceRequestParamsKeys.sortBy]: { active: false, key: ServiceRequestParamsKeys.sortBy },
            [ServiceRequestParamsKeys.sortOrder]: { active: false, key: ServiceRequestParamsKeys.sortOrder },
            [ServiceRequestParamsKeys.subscription]: { active: false, key: ServiceRequestParamsKeys.subscription },
            [ServiceRequestParamsKeys.productType]: { active: false, key: ServiceRequestParamsKeys.productType },
            [ServiceRequestParamsKeys.priceMin]: { active: true, key: ServiceRequestParamsKeys.priceMin },
            [ServiceRequestParamsKeys.priceMax]: { active: true, key: ServiceRequestParamsKeys.priceMax },
            [ServiceRequestParamsKeys.slugs]: { active: true, key: ServiceRequestParamsKeys.slugs },
            [ServiceRequestParamsKeys.sku]: { active: false, key: ServiceRequestParamsKeys.sku }

        }
    },
    [ServiceKeys.PRODUCT_BY_SKU]: {
        AbstractPayload: SingleProductPayload,
        AbstractStructure: SingleProduct,
        basePath: `${ServiceRouterPaths.PRODUCTS}${PATH_CONNECTOR}`,
        conector: ServicePathConnectors.pathParam,
        serializerKey: SerializerKeys.singleProductSerializer,
        serviceKey: ServiceKeys.PRODUCT_BY_SKU,
        assign: EMPTY_STRING,
        availableParams: {
            [ServiceRequestParamsKeys.first]: { active: false, key: ServiceRequestParamsKeys.first },
            [ServiceRequestParamsKeys.offset]: { active: false, key: ServiceRequestParamsKeys.offset },
            [ServiceRequestParamsKeys.sortBy]: { active: false, key: ServiceRequestParamsKeys.sortBy },
            [ServiceRequestParamsKeys.sortOrder]: { active: false, key: ServiceRequestParamsKeys.sortOrder },
            [ServiceRequestParamsKeys.subscription]: { active: false, key: ServiceRequestParamsKeys.subscription },
            [ServiceRequestParamsKeys.productType]: { active: false, key: ServiceRequestParamsKeys.productType },
            [ServiceRequestParamsKeys.priceMin]: { active: false, key: ServiceRequestParamsKeys.priceMin },
            [ServiceRequestParamsKeys.priceMax]: { active: false, key: ServiceRequestParamsKeys.priceMax },
            [ServiceRequestParamsKeys.slugs]: { active: false, key: ServiceRequestParamsKeys.slugs },
            [ServiceRequestParamsKeys.sku]: { active: true, key: ServiceRequestParamsKeys.sku }
        }
    },
    [ServiceKeys.PRODUCT_BY_QUERY]: {
        AbstractPayload: ProductsPayload,
        AbstractStructure: Products,
        basePath: `${ServiceRouterPaths.PRODUCTS}${URL_QUERY}`,
        conector: ServicePathConnectors.urlParam,
        serializerKey: SerializerKeys.productsSerializer,
        serviceKey: ServiceKeys.PRODUCT_BY_QUERY,
        assign: PATH_QUERY_CONNECTOR,
        availableParams: {
            [ServiceRequestParamsKeys.first]: { active: true, key: ServiceRequestParamsKeys.first },
            [ServiceRequestParamsKeys.offset]: { active: true, key: ServiceRequestParamsKeys.offset },
            [ServiceRequestParamsKeys.sortBy]: { active: true, key: ServiceRequestParamsKeys.sortBy },
            [ServiceRequestParamsKeys.sortOrder]: { active: true, key: ServiceRequestParamsKeys.sortOrder },
            [ServiceRequestParamsKeys.subscription]: { active: true, key: ServiceRequestParamsKeys.subscription },
            [ServiceRequestParamsKeys.productType]: { active: true, key: ServiceRequestParamsKeys.productType },
            [ServiceRequestParamsKeys.priceMin]: { active: true, key: ServiceRequestParamsKeys.priceMin },
            [ServiceRequestParamsKeys.priceMax]: { active: true, key: ServiceRequestParamsKeys.priceMax },
            [ServiceRequestParamsKeys.slugs]: { active: true, key: ServiceRequestParamsKeys.slugs },
            [ServiceRequestParamsKeys.sku]: { active: false, key: ServiceRequestParamsKeys.sku }
        }
    }
};