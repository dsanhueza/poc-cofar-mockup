import { AxiosRequestConfig } from "axios";
import {
  AxiosErrorCodes,
  DEVELOPMENT,
  EMPTY_STRING,
  FirstSizeKeys,
  HeadersKeys,
  NOT_ASSIGNED,
  OFF_EVENT_DAY,
  PRICE_MAX_PRODUCT,
  PageKeys,
  ProductDivisionKeys,
  SerializerKeys,
  ServiceErrorKeys,
  ServiceKeys,
  ServiceRequestParamsKeys,
  SortByKeys,
  SortOrderKeys,
  SchemaConfig,
  DEFAULT_REACT_APP_HOST,
  ProductSchemaKeys,
  SchemaConfigTypes,
} from "./abstract.config";
import { AbstractDictionary } from "./abstract.dictionary";
import { FirstSizeMapper } from "./mapper/abstract.mapper";

//------------------Structures-----------------------//

//*** ProductSchema ***//

export class ProductSchemaBrand {
  [ProductSchemaKeys.type]: string = SchemaConfig.brand;
  [ProductSchemaKeys.name]: string = EMPTY_STRING;
}

export class ProductSchemaOffers {
  [ProductSchemaKeys.type]: string = SchemaConfig.offerType;
  [ProductSchemaKeys.price]: string = EMPTY_STRING;
  [ProductSchemaKeys.priceCurrency]: string = SchemaConfig.priceCurrency;
  [ProductSchemaKeys.availability]: string = EMPTY_STRING;
}

export class ProductSchemaPDP {
  [ProductSchemaKeys.context]: string = SchemaConfig.context;
  [ProductSchemaKeys.type]: string = SchemaConfigTypes.product;
  [ProductSchemaKeys.description]: string = EMPTY_STRING;
  [ProductSchemaKeys.name]: string = EMPTY_STRING;
  [ProductSchemaKeys.url]: string = EMPTY_STRING;
  [ProductSchemaKeys.image]: string = EMPTY_STRING;
  [ProductSchemaKeys.brand]: ProductSchemaBrand = Object.assign(
    {},
    new ProductSchemaBrand()
  );
  [ProductSchemaKeys.sku]: string = EMPTY_STRING;
  [ProductSchemaKeys.category]: string = EMPTY_STRING;
  [ProductSchemaKeys.offers]: ProductSchemaOffers = Object.assign(
    {},
    new ProductSchemaOffers()
  );
}

export class ProductSchemaItemList {
  [ProductSchemaKeys.type]: string = SchemaConfigTypes.listItem;
  [ProductSchemaKeys.position]: number = 0;
  [ProductSchemaKeys.item]: ProductSchemaPDP = Object.assign(
    {},
    new ProductSchemaPDP()
  );
}

export class ProductSchemaPLP {
  [ProductSchemaKeys.context]: string = SchemaConfig.context;
  [ProductSchemaKeys.type]: string = SchemaConfigTypes.itemList;
  [ProductSchemaKeys.numberOfItems]: number = 0;
  [ProductSchemaKeys.itemListOrder]: string = SchemaConfig.itemListOrder;
  [ProductSchemaKeys.itemListElement]: Array<ProductSchemaItemList> = [];
}

//*** SingleProduct ***//

export class SingleProductEquivalence {
  value: string = EMPTY_STRING;
  label: string = EMPTY_STRING;
}

export class ProductLaboratory {
  value: string = EMPTY_STRING;
  label: string = EMPTY_STRING;
}

export class SingleProductPharmaceuticalForm {
  value: string = EMPTY_STRING;
  label: string = EMPTY_STRING;
}

export class SingleProductSaleCondition {
  value: string = EMPTY_STRING;
  label: string = EMPTY_STRING;
}

export class SingleProductBrand {
  value: string = EMPTY_STRING;
  label: string = EMPTY_STRING;
}

export class SingleProductTags {
  value: string = EMPTY_STRING;
  label: string = EMPTY_STRING;
  slug: string = EMPTY_STRING;
}

export class SingleProductSubTags {
  value: string = EMPTY_STRING;
  label: string = EMPTY_STRING;
  slug: string = EMPTY_STRING;
}

export class SingleProductShippingMethod {
  value: string = EMPTY_STRING;
  label: string = EMPTY_STRING;
}

export class SingleProductActivePrinciples {
  name: string = EMPTY_STRING;
  amountContent: any  = null;
  unitMeasure: any = null;
}

export class PromoAvailable {
  promoId: number = null;
  discount: number = null;
  condbenef: string = EMPTY_STRING;
  option: number = null;
  promType: string = EMPTY_STRING;
  promoName: string = EMPTY_STRING;
  qtyItems: number = null;
}

export class SingleProduct {
  _id: string = NOT_ASSIGNED;
  createdAt: string = EMPTY_STRING;
  productName: string = EMPTY_STRING;
  sku: string = NOT_ASSIGNED;
  equivalence: SingleProductEquivalence = Object.assign(
    {},
    new SingleProductEquivalence()
  );
  productType: string = NOT_ASSIGNED;
  brand: SingleProductBrand = Object.assign({}, new SingleProductBrand());
  pharmaceuticalFormText: string = EMPTY_STRING;
  tags: Array<SingleProductTags> = [];
  subTags: Array<SingleProductSubTags> = [];
  laboratory: ProductLaboratory = Object.assign({}, new ProductLaboratory());
  amountContent: number = null;
  unitContent: number = null;
  pharmaceuticalForm: SingleProductPharmaceuticalForm = Object.assign(
    {},
    new SingleProductPharmaceuticalForm()
  );
  saleCondition: SingleProductSaleCondition = Object.assign(
    {},
    new SingleProductSaleCondition()
  );
  shippingMethod: Array<SingleProductShippingMethod> = [];
  description: string = EMPTY_STRING;
  stock: number = null;
  normalPrice: number = null;
  offerPrice: number = null;
  miCofarPrice: number = null;
  activePrinciples: Array<SingleProductActivePrinciples> = [];
  enable: boolean = false;
  imageURLs: Array<string> = [];
  maxQuantity: number = null;
  freeDispatch: boolean = false;
  subscription: boolean = false;
  fractionalUnitPrice: string = EMPTY_STRING;
  storageCondition: string = EMPTY_STRING;
  badge: boolean = false;
  urlName: string = EMPTY_STRING;
  urlPage: string = EMPTY_STRING;
  activePrinciplesStringFormat: string = EMPTY_STRING;
  promoAvailable: Array<PromoAvailable> = [];
  dictionary =
    AbstractDictionary[PageKeys.PDP][ProductDivisionKeys.NOT_ASSIGNED];
  productSchemaPDP: ProductSchemaPDP = Object.assign(
    {},
    new ProductSchemaPDP()
  );
}

export class SingleProductPayload {
  product: SingleProduct = Object.assign({}, new SingleProduct());
}

export class SingleProductResponse {
  data: SingleProductPayload = Object.assign({}, new SingleProductPayload());
}

//*** Products ***//

export class ProductsPageInfo {
  hasNextPage: boolean = true;
  hasPreviousPage: boolean = false;
}

export class Products {
  totalCount: number = 0;
  pageInfo: ProductsPageInfo = Object.assign({}, new ProductsPageInfo());
  nodes: Array<SingleProduct> = [];
  productSchemaPLP: ProductSchemaPLP = Object.assign(
    {},
    new ProductSchemaPLP()
  );
}

export class ProductsPayload {
  products: Products = Object.assign({}, new Products());
}

export class ProductsResponse {
  data: ProductsPayload = Object.assign({}, new ProductsPayload());
}

//*** SearchPage ***//

export class SearchPage {
  id: number = 1;
  query: string = EMPTY_STRING;
  needRestorePath: boolean = false;
}

//------------------System-----------------------//

//*** Environment ***//

export class EnvironmentConfig {
  REACT_APP_HOTJAR_ID: number = null;
  REACT_APP_AUTHENTICATION_API_URL: string = NOT_ASSIGNED;
  REACT_APP_SHOP_ID: string = NOT_ASSIGNED;
  REACT_APP_GRAPHQL_URI: string = NOT_ASSIGNED;
  REACT_APP_GOOGLE_API_KEY: string = NOT_ASSIGNED;
  REACT_APP_CAPTCHA_SITE_KEY: string = NOT_ASSIGNED;
  REACT_APP_SITE_URI: string = NOT_ASSIGNED;
  REACT_APP_GTM_ID: string = NOT_ASSIGNED;
  REACT_APP_PUBLIC_MP_KEY: string = NOT_ASSIGNED;
  REACT_APP_TRACKER_API_URL: string = NOT_ASSIGNED;
  REACT_APP_MAX_PRICE_TELEMEDICINE: number = null;
  REACT_APP_TELEMEDICINE_URL: string = NOT_ASSIGNED;
  REACT_APP_TIME_OF_INACTIVE_MILISECONDS: number = null;
  REACT_APP_TIME_OF_MODAL_SIMPLE_RECIPE_MILISECONDS: number = null;
  REACT_APP_API_SCHEDULE_WORLD: string = NOT_ASSIGNED;
  REACT_APP_PHONE_NUMBER_ASSISTANCE: string = NOT_ASSIGNED;
  REACT_APP_EVENT_DAY: string = OFF_EVENT_DAY;
  REACT_APP_API_KEY_FIREBASE: string = NOT_ASSIGNED;
  REACT_APP_API_DOMAIN_FIREBASE: string = NOT_ASSIGNED;
  REACT_APP_PUBLIC_S3_FILES: string = NOT_ASSIGNED;
  NODE_ENV: string = DEVELOPMENT;
  REACT_APP_MP_METHOD_PAYMENT: string = NOT_ASSIGNED;
  REACT_APP_WEBPAY_METHOD_PAYMENT: string = NOT_ASSIGNED;
  REACT_APP_HOST: string = DEFAULT_REACT_APP_HOST;
  REACT_APP_CHECKOUT_URI: string = NOT_ASSIGNED;
  REACT_APP_PRODUCTS_URI: string = NOT_ASSIGNED;
}

//*** Axios Config ***//

export type AbstractServicePayload = ProductsPayload | SingleProductPayload | any;

export type AbstractSerializerStructure =
  | EnvironmentConfig
  | SingleProduct
  | SearchPage
  | Products;

export class AxiosDataPaylaod {
  data: AbstractServicePayload = null;
}

export class AxiosServiceResponse {
  config: any = null;
  data: AxiosDataPaylaod = Object.assign({}, new AxiosDataPaylaod());
  headers: any = null;
  status: number = 500;
  statusText: string = EMPTY_STRING;
}

export class ErrorServiceResponseData {
  statusCode: number = 500;
  timestamp: string = NOT_ASSIGNED;
  path: string = NOT_ASSIGNED;
  message: any = null;
}

export class ErrorServiceResponse {
  status: number = 500;
  data: ErrorServiceResponseData = Object.assign(
    {},
    new ErrorServiceResponseData()
  );
}

export class AxiosErrorServiceResponse {
  code: AxiosErrorCodes = AxiosErrorCodes.ERR_NETWORK;
  message: string = EMPTY_STRING;
  name: string = EMPTY_STRING;
  response: ErrorServiceResponse = Object.assign(
    {},
    new ErrorServiceResponse()
  );
}

//*** Services ***//

export class ServiceRequestParams {
  [ServiceRequestParamsKeys.first]: number =
    FirstSizeMapper[FirstSizeKeys.NOT_ASSIGNED];
  [ServiceRequestParamsKeys.offset]: number = 0;
  [ServiceRequestParamsKeys.sortBy]: string = SortOrderKeys.asc;
  [ServiceRequestParamsKeys.sortOrder]: string = SortByKeys.createdAt;
  [ServiceRequestParamsKeys.subscription]: boolean = false;
  [ServiceRequestParamsKeys.productType]: string = EMPTY_STRING;
  [ServiceRequestParamsKeys.priceMin]: number = 0;
  [ServiceRequestParamsKeys.priceMax]: number = PRICE_MAX_PRODUCT;
  [ServiceRequestParamsKeys.slugs]: Array<string> = [];
  [ServiceRequestParamsKeys.sku]: string = NOT_ASSIGNED;
}

export class ServiceHeaders {
  [HeadersKeys.accept]: string = EMPTY_STRING;
  [HeadersKeys.contentType]: string = EMPTY_STRING;
}

export class ServiceRequestOptions {
  headers: ServiceHeaders = Object.assign({}, new ServiceHeaders());
}

export class ServiceResponse {
  axiosServiceResponse: AxiosServiceResponse = Object.assign(
    {},
    new AxiosServiceResponse()
  );
  AbstractPayload: AbstractServicePayload = null;
  AbstractStructure: AbstractSerializerStructure = null;
  success: boolean = true;
  url: string = EMPTY_STRING;
  serviceKey: string = ServiceKeys.NOT_ASSIGNED;
  serializerKey: string = SerializerKeys.NOT_ASSIGNED;
  serviceErrorKey: string = ServiceErrorKeys.NOT_ASSIGNED;
  options: any = Object.assign(
    {},
    new ServiceRequestOptions()
  );
  error: AxiosErrorServiceResponse = null;
}

export class ServiceConfig {
  AbstractPayload: AbstractServicePayload = null;
  AbstractStructure: AbstractSerializerStructure = null;
  basePath: string = EMPTY_STRING;
  serializerKey: string = SerializerKeys.serializeError;
  serviceKey: string = ServiceKeys.NOT_ASSIGNED;
  endpoint: string = EMPTY_STRING;
  url: string = EMPTY_STRING;
  options: ServiceRequestOptions = Object.assign(
    {},
    new ServiceRequestOptions()
  );
}

export class AbstractSerializerResponse {
  data: AbstractSerializerStructure = null;
  serviceResponse: ServiceResponse = Object.assign({}, new ServiceResponse());
  success: boolean = true;
  details: any = null;
}

//*** Abstract Pages ***//

export class AbstractPDP {
  data: SingleProduct = Object.assign({}, new SingleProduct());
  serviceResponse: ServiceResponse = Object.assign({}, new ServiceResponse());
  success: boolean = true;
  details: any = null;
}

export class AbstractPLP {
  data: Products = Object.assign({}, new Products());
  serviceResponse: ServiceResponse = Object.assign({}, new ServiceResponse());
  success: boolean = true;
  details: any = null;
}

//*** Others ***//

export class FilterSortProductsValue {
  by: string = SortByKeys.createdAt;
  order: string = SortOrderKeys.desc;
}

export class FilterSortProducts {
  value: FilterSortProductsValue = Object.assign(
    {},
    new FilterSortProductsValue()
  );
}

export class FilterByPriceRange {
  priceMin: number = 0;
  priceMax: number = PRICE_MAX_PRODUCT;
}
