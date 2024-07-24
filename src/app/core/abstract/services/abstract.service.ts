import { AbstractSerializerResponse, AxiosDataPaylaod, AxiosErrorServiceResponse, AxiosServiceResponse, ServiceConfig, ServiceRequestParams, ServiceResponse } from "../abstract.structure";
import { HttpErrorSuportedCodes, ServiceErrorKeys, ServiceKeys } from "../abstract.config";
import { sanitize } from "../abstract.serializer";
import { AbstractServiceConfig } from "./abstract.service.config";
import axios, { AxiosResponse, HttpStatusCode } from "axios";

export const abstractServiceCall = async (serviceKey: string, params: ServiceRequestParams): Promise<AbstractSerializerResponse> => {
  const serviceRequestConfig: ServiceConfig = AbstractServiceConfig.manageServiceConfig(serviceKey, params);
  const serviceResponse: ServiceResponse = Object.assign(new ServiceResponse(), serviceRequestConfig);
  try {
    const response: AxiosResponse = await axios.get(serviceResponse.url, serviceResponse.options);
    serviceResponse.axiosServiceResponse = Object.assign(new AxiosServiceResponse(), response);
    serviceResponse.axiosServiceResponse.data = Object.assign(new AxiosDataPaylaod(), serviceResponse.axiosServiceResponse.data);
    serviceResponse.axiosServiceResponse.data.data = Object.assign(new serviceResponse.AbstractPayload(), serviceResponse.axiosServiceResponse.data.data);
  } catch (error) {
    serviceResponse.success = false;
    serviceResponse.error = Object.assign(new AxiosErrorServiceResponse(), error);
    const unavailableService = HttpErrorSuportedCodes.findIndex((httpCode) => httpCode === serviceResponse.error.response.status);
    const isNotFound = serviceResponse.error.response.status !== HttpStatusCode.NotFound ? ServiceErrorKeys.ERROR_WARNING : ServiceErrorKeys.ERROR_NOT_FOUND;
    serviceResponse.serviceErrorKey = unavailableService !== -1 ? ServiceErrorKeys.ERROR_CRITICAL : isNotFound;
  }
  serviceResponse.AbstractPayload = Object.assign(new serviceResponse.AbstractPayload(), sanitize(serviceResponse.axiosServiceResponse.data.data));
  const abstractSerializerResponse: AbstractSerializerResponse = AbstractServiceConfig.manageSerializerResponse(serviceResponse);
  return abstractSerializerResponse;
};

export const AbstractServices = {
  [ServiceKeys.NOT_FOUND]: (params: ServiceRequestParams) => Object.assign({}, new ServiceResponse()),
  [ServiceKeys.NOT_ASSIGNED]: (params: ServiceRequestParams) => Object.assign({}, new ServiceResponse()),
  [ServiceKeys.PRODUCT_BY_SKU]: (params: ServiceRequestParams) => abstractServiceCall(ServiceKeys.PRODUCT_BY_SKU, params),
  [ServiceKeys.PRODUCT_BY_QUERY]: (params: ServiceRequestParams) => abstractServiceCall(ServiceKeys.PRODUCT_BY_QUERY, params)
};