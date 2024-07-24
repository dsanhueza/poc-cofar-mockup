import { EnvironmentConfig, ServiceResponse, AbstractSerializerResponse, SingleProductPayload, SingleProduct, AbstractSerializerStructure, SearchPage, ProductSchemaBrand, ProductSchemaOffers, ProductSchemaPDP, ProductSchemaPLP, Products, ProductSchemaItemList } from "./abstract.structure";
import { NOT_ASSIGNED, NOT_FOUND, ProductDivisionKeys, SaleConditionKeys, EMPTY_STRING, PathKeys, PageKeys, SerializerKeys, ServiceKeys, ProductSchemaKeys, PATH_CONNECTOR, RouterPaths, SchemaConfig, NOT_IMAGE_PATH } from "./abstract.config";
import { AbstractDictionary } from "./abstract.dictionary";
import { generateProductUrl } from "./utils/product.util";
import { ServiceAbstractClassKey } from "./mapper/abstract.mapper";

export const sanitize = (obj) => {
    return obj && JSON.parse(JSON.stringify(obj, (key, value) => {
        const isInvalid = value === null;
        const cleanData = isInvalid ? undefined : value;
        return cleanData;
    }));
};

export const environmentConfigSerializer = (): AbstractSerializerResponse => {
    const environmentConfigSerializerResponse: AbstractSerializerResponse = Object.assign({}, new AbstractSerializerResponse());
    environmentConfigSerializerResponse.data = Object.assign(new EnvironmentConfig(), process.env);
    environmentConfigSerializerResponse.success = !Object.values(environmentConfigSerializerResponse.data).includes(NOT_ASSIGNED);
    const serialize: AbstractSerializerResponse = JSON.parse(JSON.stringify(environmentConfigSerializerResponse));
    return serialize;
};

const serializeError = (serviceResponse: ServiceResponse): AbstractSerializerResponse => {
    const serializerResponse: AbstractSerializerResponse = Object.assign({}, new AbstractSerializerResponse());
    serializerResponse.serviceResponse = Object.assign(new ServiceResponse(), serviceResponse);
    serializerResponse.success = serializerResponse.serviceResponse.success;
    serializerResponse.details = serializerResponse.success ? serializerResponse.serviceResponse.axiosServiceResponse : serializerResponse.serviceResponse.error;
    serializerResponse.data = Object.assign(new serializerResponse.serviceResponse.AbstractStructure(), sanitize(serializerResponse.serviceResponse.AbstractPayload[ServiceAbstractClassKey[serializerResponse.serviceResponse.serviceKey]]));
    const serialize: AbstractSerializerResponse = JSON.parse(JSON.stringify(serializerResponse));
    return serialize;
};

const productsSerializer = (serviceResponse: ServiceResponse): AbstractSerializerResponse => {
    const serializerResponse: AbstractSerializerResponse = Object.assign({}, new AbstractSerializerResponse());
    serializerResponse.serviceResponse = Object.assign(new ServiceResponse(), serviceResponse);
    serializerResponse.success = serializerResponse.serviceResponse.success;
    serializerResponse.details = serializerResponse.success ? serializerResponse.serviceResponse.axiosServiceResponse : serializerResponse.serviceResponse.error;
    const payload: AbstractSerializerStructure = serializerResponse.serviceResponse.AbstractPayload[ServiceAbstractClassKey[serializerResponse.serviceResponse.serviceKey]];
    serializerResponse.data = Object.assign({}, new serializerResponse.serviceResponse.AbstractStructure());
    serializerResponse.data.totalCount = payload.totalCount;
    serializerResponse.data.pageInfo = payload.pageInfo;
    payload.nodes.forEach((payloadItem) => {
        const singlePayloadResponse: ServiceResponse = Object.assign(new ServiceResponse(), serializerResponse.serviceResponse);
        singlePayloadResponse.AbstractPayload = Object.assign(new SingleProductPayload(), { product: payloadItem });
        singlePayloadResponse.AbstractStructure = SingleProduct;
        singlePayloadResponse.serviceKey = ServiceKeys.PRODUCT_BY_SKU;
        const newAbstractSingleResponse: AbstractSerializerResponse = singleProductSerializer(singlePayloadResponse);
        serializerResponse.success = newAbstractSingleResponse.success;
        serializerResponse.data.nodes = [...serializerResponse.data.nodes, newAbstractSingleResponse.data];
    });
    serializerResponse.data.productSchemaPLP = JSON.stringify(productSchemaPLPSerializer(serializerResponse.data).data);
    const serialize: AbstractSerializerResponse = JSON.parse(JSON.stringify(serializerResponse));
    return serialize;
};

const singleProductSerializer = (serviceResponse: ServiceResponse): AbstractSerializerResponse => {
    const serializerResponse: AbstractSerializerResponse = Object.assign({}, new AbstractSerializerResponse());
    serializerResponse.serviceResponse = Object.assign(new ServiceResponse(), serviceResponse);
    serializerResponse.success = serializerResponse.serviceResponse.success;
    serializerResponse.details = serializerResponse.success ? serializerResponse.serviceResponse.axiosServiceResponse : serializerResponse.serviceResponse.error;
    const payload: AbstractSerializerStructure = serializerResponse.serviceResponse.AbstractPayload[ServiceAbstractClassKey[serializerResponse.serviceResponse.serviceKey]];
    serializerResponse.data = Object.assign(new serializerResponse.serviceResponse.AbstractStructure(), sanitize(payload));
    serializerResponse.success = serializerResponse.data._id !== NOT_ASSIGNED;
    const productIndexType = Object.values(ProductDivisionKeys).findIndex((type) => type === serializerResponse.data.productType);
    const SaleConditionIndex = Object.values(SaleConditionKeys).findIndex((sale) => sale === serializerResponse.data.saleCondition.value);
    serializerResponse.data.productType = productIndexType !== -1 ? Object.values(ProductDivisionKeys)[productIndexType] : NOT_FOUND;
    serializerResponse.data.saleCondition.value = SaleConditionIndex !== -1 ? Object.values(SaleConditionKeys)[SaleConditionIndex] : NOT_FOUND;
    serializerResponse.data.dictionary = AbstractDictionary[PageKeys.PDP][serializerResponse.data.productType];
    serializerResponse.data.productName = serializerResponse.data.productName.trim();
    serializerResponse.data.description = serializerResponse.data.description.trim();
    serializerResponse.data.urlName = generateProductUrl(serializerResponse.data.productName);
    serializerResponse.data.activePrinciples = [...serializerResponse.data.activePrinciples];
    serializerResponse.data.urlPage = `${process.env.REACT_APP_HOST}${RouterPaths.PRODUCT}${serializerResponse.data.sku}${PATH_CONNECTOR}${serializerResponse.data.urlName}`;
    serializerResponse.data.activePrinciplesStringFormat = serializerResponse.data.activePrinciples.map(active => { return `${active.name} ${active.amountContent} ${active.unitMeasure}` });
    serializerResponse.data.productSchemaPDP = JSON.stringify(productSchemaPDPSerializer(serializerResponse.data).data);
    const serialize: AbstractSerializerResponse = JSON.parse(JSON.stringify(serializerResponse));
    return serialize;
};

const productSchemaPDPSerializer = (product: SingleProduct): AbstractSerializerResponse => {
    const serializerResponse: AbstractSerializerResponse = Object.assign({}, new AbstractSerializerResponse());
    serializerResponse.data = Object.assign({}, new ProductSchemaPDP());
    serializerResponse.data[ProductSchemaKeys.description] = product.description;
    serializerResponse.data[ProductSchemaKeys.name] = product.productName.trim();
    serializerResponse.data[ProductSchemaKeys.url] = product.urlPage;
    serializerResponse.data[ProductSchemaKeys.image] = product.imageURLs[0] ? product.imageURLs[0] : NOT_IMAGE_PATH;
    serializerResponse.data[ProductSchemaKeys.brand] = Object.assign({}, new ProductSchemaBrand());
    serializerResponse.data[ProductSchemaKeys.brand][ProductSchemaKeys.name] = product.brand.label !== EMPTY_STRING ? product.brand.label : product.laboratory.label;
    serializerResponse.data[ProductSchemaKeys.sku] = product.sku;
    serializerResponse.data[ProductSchemaKeys.category] = product.subTags.label;
    serializerResponse.data[ProductSchemaKeys.offers] = Object.assign({}, new ProductSchemaOffers());
    serializerResponse.data[ProductSchemaKeys.offers][ProductSchemaKeys.price] = product.offerPrice ? product.offerPrice : product.normalPrice;
    serializerResponse.data[ProductSchemaKeys.offers][ProductSchemaKeys.availability] = product.stock > 0 ? SchemaConfig.stockValues.inStock : SchemaConfig.stockValues.outOfStock;
    const serialize: AbstractSerializerResponse = JSON.parse(JSON.stringify(serializerResponse));
    return serialize;
};

const productSchemaPLPSerializer = (products: Products): AbstractSerializerResponse => {
    const serializerResponse: AbstractSerializerResponse = Object.assign({}, new AbstractSerializerResponse());
    serializerResponse.data = Object.assign({}, new ProductSchemaPLP());
    serializerResponse.data[ProductSchemaKeys.numberOfItems] = products.totalCount;
    products.nodes.forEach((node, i) => {
        const itemListElement: ProductSchemaItemList = Object.assign({}, new ProductSchemaItemList());
        itemListElement[ProductSchemaKeys.position] = i;
        itemListElement[ProductSchemaKeys.item] = productSchemaPDPSerializer(node).data;
        itemListElement[ProductSchemaKeys.item][ProductSchemaKeys.context] = null;
        serializerResponse.data[ProductSchemaKeys.itemListElement] = [...serializerResponse.data[ProductSchemaKeys.itemListElement], sanitize(itemListElement)];
    });
    const serialize: AbstractSerializerResponse = JSON.parse(JSON.stringify(serializerResponse));
    return serialize;
};

const searchPageSerializer = (search: string): AbstractSerializerResponse => {
    const serializerResponse: AbstractSerializerResponse = Object.assign({}, new AbstractSerializerResponse());
    serializerResponse.data = Object.assign({}, new SearchPage());
    serializerResponse.data.query = search;
    const validPageIndex = serializerResponse.data.query.toLowerCase().indexOf(PathKeys.PAGE);
    const cleanURL = serializerResponse.data.query.replace(/[%,: +;.-/÷¬∞¢#@|≠”"¨Ç_¿?=(){}^*$&!¡·º'ç/\\/pageId]/g, EMPTY_STRING);
    const numberPage = cleanURL !== EMPTY_STRING ? cleanURL : serializerResponse.data.id;
    const serializeNumberPageId = parseInt(numberPage);
    const serializePageId = isNaN(parseFloat(serializeNumberPageId)) ? serializerResponse.data.id : serializeNumberPageId;
    const pageId = validPageIndex !== -1 && serializePageId > 0 ? serializePageId : serializerResponse.data.id;
    serializerResponse.data.needRestorePath = isNaN(parseFloat(serializeNumberPageId)) || serializePageId < 2;
    serializerResponse.data.id = pageId;
    const serialize: AbstractSerializerResponse = JSON.parse(JSON.stringify(serializerResponse));
    return serialize;
};

export const AbstractSerializer = {
    [SerializerKeys.NOT_FOUND]: (data) => serializeError(data),
    [SerializerKeys.NOT_ASSIGNED]: (data) => serializeError(data),
    [SerializerKeys.serializeError]: (data) => serializeError(data),
    [SerializerKeys.productsSerializer]: (data) => productsSerializer(data),
    [SerializerKeys.singleProductSerializer]: (data) => singleProductSerializer(data),
    [SerializerKeys.productSchemaPDPSerializer]: (data) => productSchemaPDPSerializer(data),
    [SerializerKeys.productSchemaPLPSerializer]: (data) => productSchemaPLPSerializer(data),
    [SerializerKeys.searchPageSerializer]: (data) => searchPageSerializer(data)
};