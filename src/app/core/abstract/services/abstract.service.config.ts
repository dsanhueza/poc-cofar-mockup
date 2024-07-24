import { AbstractSerializerResponse, ServiceConfig, ServiceHeaders, ServiceRequestParams, ServiceResponse } from "../abstract.structure";
import { EMPTY_STRING, NOT_ASSIGNED, NOT_FOUND, ServicePathConnectors } from "../abstract.config";
import { ServiceConfigMapper } from "../mapper/abstract.flow.mapper";
import { HeaderConfigMapper } from "../mapper/abstract.mapper";
import { AbstractSerializer } from "../abstract.serializer";

const manageServiceConfig = (serviceKey: string, requestParams: ServiceRequestParams): ServiceConfig => {
    const configMapper = ServiceConfigMapper[serviceKey];
    const activeParams = Object.entries(configMapper.availableParams).filter((conf) => conf[1].active);
    const serviceRequestConfig: ServiceConfig = Object.assign(new ServiceConfig(), configMapper);
    activeParams.forEach((conf, i) => {
        const dynamicValue = requestParams[conf[0]];
        const isArray: boolean = dynamicValue.constructor === Array;
        const isNotAssigned = isArray || dynamicValue === NOT_ASSIGNED || dynamicValue === EMPTY_STRING || dynamicValue === NOT_FOUND;
        const isURLParam = configMapper.conector === ServicePathConnectors.urlParam;
        let dynamicArrayValue: any[] = [];
        if (isArray) {
            dynamicValue.filter((val) => val !== EMPTY_STRING).forEach((dn, j) => {
                const newBodyURL = `${configMapper.conector}${isURLParam ? conf[1].key : EMPTY_STRING}${configMapper.assign}${dn}`;
                dynamicArrayValue = [...dynamicArrayValue, newBodyURL];
            });
        }
        const bodyURL = `${i === 0 ? EMPTY_STRING : configMapper.conector}${isURLParam ? conf[1].key : EMPTY_STRING}${configMapper.assign}${dynamicValue}`;
        const finalBody = dynamicArrayValue.length > 0 || isArray ? serviceRequestConfig.endpoint + dynamicArrayValue.map((val) => { return val }) : serviceRequestConfig.endpoint + bodyURL;
        serviceRequestConfig.endpoint = isNotAssigned ? serviceRequestConfig.endpoint : finalBody.replace(",", EMPTY_STRING);
    });
    serviceRequestConfig.url = process.env.REACT_APP_PRODUCTS_URI + serviceRequestConfig.basePath + serviceRequestConfig.endpoint;
    serviceRequestConfig.options.headers = Object.assign(new ServiceHeaders(), HeaderConfigMapper);
    return serviceRequestConfig;
};

const manageSerializerResponse = (serviceResponse: ServiceResponse): AbstractSerializerResponse => {
    const abstractSerializerResponse: AbstractSerializerResponse = AbstractSerializer[serviceResponse.serializerKey](serviceResponse);
    return abstractSerializerResponse;
};

export const AbstractServiceConfig = {
    manageServiceConfig,
    manageSerializerResponse
};