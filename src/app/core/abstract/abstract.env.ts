import { environmentConfigSerializer } from "./abstract.serializer"
import { EnvironmentConfig } from "./abstract.structure";

export const ENV_CONFIG: EnvironmentConfig = environmentConfigSerializer().data;