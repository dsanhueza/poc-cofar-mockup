import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { ServiceRequestParams, AbstractSerializerResponse, AbstractPDP } from '../../abstract/abstract.structure';
import { PATH_CONNECTOR, RouterPaths, ServiceErrorKeys, ServiceKeys, ServiceRequestParamsKeys } from '../../abstract/abstract.config';
import { ManagePDPContentMapper } from '../../abstract/mapper/abstract.flow.mapper';
import { AbstractServices } from '../../abstract/services/abstract.service';
import { applyProductURL } from '../../abstract/utils/product.util';
import { SUSCRIPTION } from '../../constants/constants';
import LoadingPage from '../LoadingPage';
import './style/productManager.scss';

const page = () => {
  const history = useHistory();
  const { sku } = useParams();
  const { pathname, search } = useLocation();
  const [loading, setLoading] = useState(true);
  const initialPath = pathname.split(PATH_CONNECTOR)[1];
  const [
    abstractSerializerResponse,
    setAbstractSerializerResponse,
  ]: AbstractSerializerResponse = useState(
    Object.assign(new AbstractSerializerResponse(), new AbstractPDP())
  );
  const Content =
    ManagePDPContentMapper[abstractSerializerResponse.data.productType];

  const manageAbstractCall = useCallback(async () => {
    setLoading(true);
    const serviceRequestParams: ServiceRequestParams = Object.assign(
      {},
      new ServiceRequestParams()
    );
    serviceRequestParams[ServiceRequestParamsKeys.sku] = sku;
    const newAbstractSerializerResponse: AbstractSerializerResponse =
      await AbstractServices[ServiceKeys.PRODUCT_BY_SKU](serviceRequestParams);
    const isNotAvailable =
      newAbstractSerializerResponse.serviceResponse.serviceErrorKey ===
        ServiceErrorKeys.ERROR_NOT_FOUND ||
      (newAbstractSerializerResponse.success &&
        !newAbstractSerializerResponse.data.enable);
    isNotAvailable
      ? history.push(RouterPaths.NOT_FOUND)
      : applyProductURL(
          newAbstractSerializerResponse.data.urlName,
          sku,
          initialPath === SUSCRIPTION,
          search
        );
    setAbstractSerializerResponse(newAbstractSerializerResponse);
    setLoading(false);
  }, [pathname]);

  useEffect(() => {
    manageAbstractCall();
  }, [manageAbstractCall]);
  return <div>page</div>;
};

export default page;
