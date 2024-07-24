import { AvailableQueryParams, EMPTY_STRING, NFD, PATH_CONNECTOR, PATH_QUERY_CONNECTOR, RouterPaths, URL_CONNECTOR, URL_QUERY, URL_QUERY_ADD_PARAM } from "../abstract.config";

const cleanFormatName = (productName: string) => {
    const objResponse = { res: EMPTY_STRING };
    const nameArray = productName.split(URL_CONNECTOR);
    nameArray.forEach((item, i) => {
        const sectionContent = objResponse.res === EMPTY_STRING ? item : objResponse.res + URL_CONNECTOR + item;
        objResponse.res = item !== EMPTY_STRING ? sectionContent : objResponse.res;
    });
    return objResponse.res;
};

export const generateProductUrl = (productName: string): string => {
    const cleanNameURL: string = productName.trim().toLowerCase().normalize(NFD)
        .replace(/[\u0300-\u036f]/g, EMPTY_STRING)
        .replace(/[%,: +;.-/÷¬∞¢#@|≠”"¨Ç_¿?=(){}^*$&!¡·º'ç/\\/]/g, URL_CONNECTOR);
    const productNameURL = cleanFormatName(cleanNameURL);
    return productNameURL;
};

export const cleanInvalidQueryParams = (queryParams: string) => {
    const objResponse = { res: EMPTY_STRING };
    Object.keys(AvailableQueryParams).forEach((param, i) => {
        const paramIndex = queryParams.toLowerCase().indexOf(param);
        const marginParam = queryParams.slice(paramIndex, queryParams.length);
        const connectorStartIndex = marginParam.indexOf(PATH_QUERY_CONNECTOR);
        const connectorEndingIndex = marginParam.indexOf(URL_QUERY_ADD_PARAM) !== -1 ? marginParam.indexOf(URL_QUERY_ADD_PARAM) : marginParam.length;
        const marginParamValue = marginParam.slice(connectorStartIndex + 1, connectorEndingIndex);
        const paramValue = queryParams[paramIndex] ? marginParamValue : EMPTY_STRING;
        const queryParamConnector = objResponse.res === EMPTY_STRING ? URL_QUERY : URL_QUERY_ADD_PARAM;
        const paramAssing = queryParamConnector + param + PATH_QUERY_CONNECTOR + paramValue;
        const newParamsURL = paramIndex !== -1 ? paramAssing : EMPTY_STRING;
        objResponse.res = objResponse.res + newParamsURL;
    });
    return objResponse.res;
};

export const applyProductURL = (productName: string, sku: string, isSubscription: boolean, queryParams: string) => {
    const subscriptionPath = isSubscription ? RouterPaths.SUBSCRIPTION_PATH_INIT : EMPTY_STRING;
    const cleanQueryParams = cleanInvalidQueryParams(queryParams);
    window.history.replaceState(null, EMPTY_STRING, `${subscriptionPath}${RouterPaths.PRODUCT}${sku}${PATH_CONNECTOR}${productName}${cleanQueryParams}`);
};