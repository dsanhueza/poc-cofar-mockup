export const NOT_AVAILABLE = "not-available";
export const NOT_ASSIGNED = "NOT_ASSIGNED";
export const SUSCRIPTION = "suscripcion";
export const SPECIAL_SEPARATOR = " - ";
export const NOT_FOUND = "NOT_FOUND";
export const PATH_CONNECTOR = "/";
export const URL_CONNECTOR = "-";
export const EMPTY_STRING = "";
export const EMPTY_SPACE = " ";
export const DOT_CHAT = ".";
export const NFD = "NFD";
export const PATH_QUERY_CONNECTOR = "=";
export const URL_QUERY = "?";
export const URL_QUERY_ADD_PARAM = "&";
export const PRICE_MAX_PRODUCT = 1000000000;
export const OFF_EVENT_DAY = "off";
export const DEVELOPMENT = "DEVELOPMENT";
export const PAGE_ID_PATH = "?pageId=";
export const TITLE_PAGE_PATH = " página ";
export const DEFAULT_REACT_APP_HOST = "http://localhost:3000";
export const NOT_IMAGE_PATH = "/products/no-image-available";

export enum AvailableQueryParams {
  utm_source = "utm_source",
  utm_medium = "utm_medium",
  utm_campaign = "utm_campaign",
  utm_content = "utm_content",
  utm_term = "utm_term",
  gad_source = "gad_source",
}

export enum PathKeys {
  NOT_FOUND = "NOT_FOUND",
  NOT_ASSIGNED = "NOT_ASSIGNED",
  SUBSCRIPTION = "suscripciones",
  DERMOCOSMETIC = "dermocosmeticos",
  MEDICAMENT = "medicamentos",
  PAGE = "page",
  BLACK_FRIDAY = "black-friday",
  CYBER = "cyber",
}

export enum ProductDivisionKeys {
  NOT_FOUND = "NOT_FOUND",
  NOT_ASSIGNED = "NOT_ASSIGNED",
  MEDICAMENT = "Medicament",
  DERMOCOSMETIC = "Dermocosmetic",
}

export enum SaleConditionKeys {
  NOT_FOUND = "NOT_FOUND",
  NOT_ASSIGNED = "NOT_ASSIGNED",
  recipeCheck = "recipeCheck",
  recipeRetention = "recipeRetention",
  simpleRecipe = "simpleRecipe",
  noPrescription = "noPrescription",
}

export enum PageKeys {
  NOT_FOUND = "NOT_FOUND",
  NOT_ASSIGNED = "NOT_ASSIGNED",
  PDP = "PDP",
  PLP = "PLP",
}

export enum HeadersKeys {
  NOT_FOUND = "NOT_FOUND",
  NOT_ASSIGNED = "NOT_ASSIGNED",
  accept = "Accept",
  contentType = "Content-Type",
}

export enum SerializerKeys {
  NOT_FOUND = "NOT_FOUND",
  NOT_ASSIGNED = "NOT_ASSIGNED",
  serializeError = "serializeError",
  singleProductSerializer = "singleProductSerializer",
  productsSerializer = "productsSerializer",
  searchPageSerializer = "searchPageSerializer",
  productSchemaSerializer = "productSchemaSerializer",
  productSchemaPDPSerializer = "productSchemaPDPSerializer",
  productSchemaPLPSerializer = "productSchemaPLPSerializer",
}

export enum SortOrderKeys {
  NOT_FOUND = "NOT_FOUND",
  NOT_ASSIGNED = "NOT_ASSIGNED",
  asc = "asc",
  desc = "desc",
}

export enum SortByKeys {
  NOT_FOUND = "NOT_FOUND",
  NOT_ASSIGNED = "NOT_ASSIGNED",
  productName = "productName",
  createdAt = "createdAt",
  price = "price",
}

export enum ServiceKeys {
  NOT_FOUND = "NOT_FOUND",
  NOT_ASSIGNED = "NOT_ASSIGNED",
  PRODUCT_BY_SKU = "PRODUCT_BY_SKU",
  PRODUCT_BY_QUERY = "PRODUCT_BY_QUERY",
}

export enum ServicePayloadKeys {
  NOT_FOUND = "NOT_FOUND",
  NOT_ASSIGNED = "NOT_ASSIGNED",
  product = "product",
  products = "products",
}

export enum ServiceStatusKeys {
  NOT_FOUND = "NOT_FOUND",
  NOT_ASSIGNED = "NOT_ASSIGNED",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
  REJECTED = "REJECTED",
}

export enum ServiceErrorKeys {
  NOT_FOUND = "NOT_FOUND",
  NOT_ASSIGNED = "NOT_ASSIGNED",
  ERROR_NOT_FOUND = "ERROR_NOT_FOUND",
  ERROR_WARNING = "ERROR_WARNING",
  ERROR_CRITICAL = "ERROR_CRITICAL",
}

export enum AxiosErrorCodes {
  ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS",
  ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE",
  ERR_BAD_OPTION = "ERR_BAD_OPTION",
  ERR_NETWORK = "ERR_NETWORK",
  ERR_DEPRECATED = "ERR_DEPRECATED",
  ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE",
  ERR_BAD_REQUEST = "ERR_BAD_REQUEST",
  ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT",
  ERR_INVALID_URL = "ERR_INVALID_URL",
  ERR_CANCELED = "ERR_CANCELED",
  ECONNABORTED = "ECONNABORTED",
  ETIMEDOUT = "ETIMEDOUT",
}

export enum ServiceRequestParamsKeys {
  first = "first",
  offset = "offset",
  sortBy = "sortBy",
  sortOrder = "sortOrder",
  subscription = "subscription",
  productType = "productType",
  priceMin = "priceMin",
  priceMax = "priceMax",
  slugs = "slugs",
  sku = "sku",
}

export enum RouterPaths {
  NOT_FOUND = "/404",
  PRODUCT = "/product/",
  SUBSCRIPTION_PATH_INIT = "/suscripcion",
  SUBSCRIPTION_PATH_END = "suscripcion/",
}

export enum ServiceRouterPaths {
  PRODUCTS = "/products/1.0",
}

export enum ServicePathConnectors {
  pathParam = "/",
  urlParam = "&",
}

export enum FirstSizeKeys {
  NOT_FOUND = "NOT_FOUND",
  NOT_ASSIGNED = "NOT_ASSIGNED",
  big = "big",
  medium = "medium",
  small = "small",
}

export enum SchemaConfig {
  type = "Product",
  brand = "Brand",
  context = "https=//schema.org/",
  itemListOrder = "https=//schema.org/ItemListOrderDescending",
  priceCurrency = "CLP",
  offerType = "Offer",
}

export enum SchemaConfigStockValues {
  inStock = "InStock",
  outOfStock = "OutOfStock",
}

export enum SchemaConfigTypes {
  product = "Product",
  itemList = "ItemList",
  listItem = "ListItem",
}

export enum ProductSchemaKeys {
  context = "@context",
  type = "@type",
  description = "description",
  name = "name",
  url = "url",
  image = "image",
  brand = "brand",
  sku = "sku",
  category = "category",
  offers = "offers",
  price = "price",
  priceCurrency = "priceCurrency",
  availability = "availability",
  numberOfItems = "numberOfItems",
  itemListOrder = "itemListOrder",
  itemListElement = "itemListElement",
  position = "position",
  item = "item",
}

export const HttpErrorSuportedCodes = [
  500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511,
];
