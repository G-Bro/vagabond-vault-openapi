/* tslint:disable */
/* eslint-disable */
/**
 * Player Character API
 * This API definition describes a Player Character API. 
 *
 * The version of the OpenAPI document: 1.1.1
 * Contact: georgehbroadhurst@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface Bonus
 */
export interface Bonus {
    /**
     * The unique identifier for a bonus
     * @type {number}
     * @memberof Bonus
     */
    'id'?: number;
    /**
     * The value of the bonus
     * @type {number}
     * @memberof Bonus
     */
    'value'?: number;
    /**
     * 
     * @type {Stat}
     * @memberof Bonus
     */
    'stat'?: Stat;
}
/**
 * 
 * @export
 * @interface Choice
 */
export interface Choice {
    /**
     * The unique identifier for a choice
     * @type {number}
     * @memberof Choice
     */
    'id'?: number;
    /**
     * The unique reference code for a choice
     * @type {string}
     * @memberof Choice
     */
    'referenceCode'?: string;
    /**
     * 
     * @type {ChoiceChoice}
     * @memberof Choice
     */
    'choice'?: ChoiceChoice;
}
/**
 * The chosen option
 * @export
 * @interface ChoiceChoice
 */
export interface ChoiceChoice {
    /**
     * The type of choice
     * @type {string}
     * @memberof ChoiceChoice
     */
    'choiceType'?: string;
    /**
     * 
     * @type {ChoiceChoiceResource}
     * @memberof ChoiceChoice
     */
    'resource'?: ChoiceChoiceResource;
}
/**
 * @type ChoiceChoiceResource
 * The resource of the choice
 * @export
 */
export type ChoiceChoiceResource = Bonus | Drive | Move | Nature | RoguishFeat | Skill;

/**
 * 
 * @export
 * @interface Drive
 */
export interface Drive {
    /**
     * The unique identifier for a drive
     * @type {number}
     * @memberof Drive
     */
    'id'?: number;
    /**
     * The unique code for a drive
     * @type {string}
     * @memberof Drive
     */
    'code'?: string;
    /**
     * The name of the drive
     * @type {string}
     * @memberof Drive
     */
    'name'?: string;
    /**
     * The description of the drive
     * @type {string}
     * @memberof Drive
     */
    'description'?: string;
}
/**
 * 
 * @export
 * @interface Equipment
 */
export interface Equipment {
    /**
     * The unique identifier
     * @type {number}
     * @memberof Equipment
     */
    'id'?: number;
    /**
     * The name of the equipment
     * @type {string}
     * @memberof Equipment
     */
    'name'?: string;
    /**
     * The description of the equipment
     * @type {string}
     * @memberof Equipment
     */
    'description'?: string | null;
    /**
     * 
     * @type {Source}
     * @memberof Equipment
     */
    'source'?: Source;
    /**
     * The value of the equipment
     * @type {number}
     * @memberof Equipment
     */
    'value'?: number;
    /**
     * The load of the equipment
     * @type {number}
     * @memberof Equipment
     */
    'load'?: number;
    /**
     * The wear slots of the equipment
     * @type {number}
     * @memberof Equipment
     */
    'wearSlots'?: number;
    /**
     * 
     * @type {Array<EquipmentTag>}
     * @memberof Equipment
     */
    'tags'?: Array<EquipmentTag> | null;
    /**
     * 
     * @type {Array<Range>}
     * @memberof Equipment
     */
    'range'?: Array<Range> | null;
}
/**
 * 
 * @export
 * @interface EquipmentTag
 */
export interface EquipmentTag {
    /**
     * The unique identifier for a equipment tag
     * @type {number}
     * @memberof EquipmentTag
     */
    'id'?: number;
    /**
     * The unique code for a equipment tag
     * @type {string}
     * @memberof EquipmentTag
     */
    'code'?: string;
    /**
     * The name of the equipment tag
     * @type {string}
     * @memberof EquipmentTag
     */
    'name'?: string;
    /**
     * The description of the equipment tag
     * @type {string}
     * @memberof EquipmentTag
     */
    'description'?: string;
    /**
     * Whether the equipment tag is positive or negative
     * @type {boolean}
     * @memberof EquipmentTag
     */
    'isPositive'?: boolean;
}
/**
 * 
 * @export
 * @interface Faction
 */
export interface Faction {
    /**
     * The unique identifier for a faction
     * @type {number}
     * @memberof Faction
     */
    'id'?: number;
    /**
     * The unique code for a faction
     * @type {string}
     * @memberof Faction
     */
    'code'?: string;
    /**
     * The name of the faction
     * @type {string}
     * @memberof Faction
     */
    'name'?: string;
    /**
     * The description of the faction
     * @type {string}
     * @memberof Faction
     */
    'description'?: string;
    /**
     * 
     * @type {Source}
     * @memberof Faction
     */
    'source'?: Source;
}
/**
 * 
 * @export
 * @interface Move
 */
export interface Move {
    /**
     * The unique identifier for a move
     * @type {number}
     * @memberof Move
     */
    'id'?: number;
    /**
     * The unique code for a move
     * @type {string}
     * @memberof Move
     */
    'code'?: string;
    /**
     * The name of the move
     * @type {string}
     * @memberof Move
     */
    'name'?: string;
    /**
     * The description of the move
     * @type {string}
     * @memberof Move
     */
    'description'?: string;
}
/**
 * 
 * @export
 * @interface Nature
 */
export interface Nature {
    /**
     * The unique identifier for a drive
     * @type {number}
     * @memberof Nature
     */
    'id'?: number;
    /**
     * The unique code for a drive
     * @type {string}
     * @memberof Nature
     */
    'code'?: string;
    /**
     * The name of the drive
     * @type {string}
     * @memberof Nature
     */
    'name'?: string;
    /**
     * The description of the drive
     * @type {string}
     * @memberof Nature
     */
    'description'?: string;
}
/**
 * 
 * @export
 * @interface Playbook
 */
export interface Playbook {
    /**
     * The unique identifier for a drive
     * @type {number}
     * @memberof Playbook
     */
    'id'?: number;
    /**
     * The unique code for a drive
     * @type {string}
     * @memberof Playbook
     */
    'code'?: string;
    /**
     * The name of the drive
     * @type {string}
     * @memberof Playbook
     */
    'name'?: string;
    /**
     * The description of the drive
     * @type {string}
     * @memberof Playbook
     */
    'description'?: string;
    /**
     * The natures of the drive
     * @type {Array<Nature>}
     * @memberof Playbook
     */
    'natures'?: Array<Nature>;
    /**
     * The moves of the drive
     * @type {Array<Move>}
     * @memberof Playbook
     */
    'moves'?: Array<Move>;
    /**
     * The drives of the drive
     * @type {Array<Drive>}
     * @memberof Playbook
     */
    'drives'?: Array<Drive>;
    /**
     * 
     * @type {Source}
     * @memberof Playbook
     */
    'source'?: Source;
    /**
     * 
     * @type {PlaybookSkills}
     * @memberof Playbook
     */
    'skills'?: PlaybookSkills;
    /**
     * The roguish feats of the drive
     * @type {Array<RoguishFeat>}
     * @memberof Playbook
     */
    'roguishFeats'?: Array<RoguishFeat>;
    /**
     * The starting value of the drive
     * @type {number}
     * @memberof Playbook
     */
    'startingValue'?: number;
    /**
     * The short description of the drive
     * @type {string}
     * @memberof Playbook
     */
    'shortDescription'?: string;
    /**
     * The long description of the drive
     * @type {string}
     * @memberof Playbook
     */
    'longDescription'?: string;
}
/**
 * The skills of the drive
 * @export
 * @interface PlaybookSkills
 */
export interface PlaybookSkills {
    /**
     * The charm skill of the drive
     * @type {number}
     * @memberof PlaybookSkills
     */
    'charm'?: number;
    /**
     * The cunning skill of the drive
     * @type {number}
     * @memberof PlaybookSkills
     */
    'cunning'?: number;
    /**
     * The finesse skill of the drive
     * @type {number}
     * @memberof PlaybookSkills
     */
    'finesse'?: number;
    /**
     * The luck skill of the drive
     * @type {number}
     * @memberof PlaybookSkills
     */
    'luck'?: number;
    /**
     * The might skill of the drive
     * @type {number}
     * @memberof PlaybookSkills
     */
    'might'?: number;
}
/**
 * 
 * @export
 * @interface PlayerCharacter
 */
export interface PlayerCharacter {
    /**
     * The unique identifier for a player character
     * @type {number}
     * @memberof PlayerCharacter
     */
    'id'?: number;
    /**
     * The name of the player character
     * @type {string}
     * @memberof PlayerCharacter
     */
    'name'?: string;
    /**
     * 
     * @type {PlayerCharacterStats}
     * @memberof PlayerCharacter
     */
    'stats'?: PlayerCharacterStats;
    /**
     * 
     * @type {Array<Move>}
     * @memberof PlayerCharacter
     */
    'moves'?: Array<Move>;
    /**
     * 
     * @type {Array<Nature>}
     * @memberof PlayerCharacter
     */
    'natures'?: Array<Nature>;
    /**
     * 
     * @type {Array<Drive>}
     * @memberof PlayerCharacter
     */
    'drives'?: Array<Drive>;
    /**
     * 
     * @type {Playbook}
     * @memberof PlayerCharacter
     */
    'playbook'?: Playbook;
    /**
     * 
     * @type {Array<Choice>}
     * @memberof PlayerCharacter
     */
    'choices'?: Array<Choice>;
    /**
     * 
     * @type {Array<Skill>}
     * @memberof PlayerCharacter
     */
    'skills'?: Array<Skill>;
    /**
     * 
     * @type {Array<RoguishFeat>}
     * @memberof PlayerCharacter
     */
    'roguishFeats'?: Array<RoguishFeat>;
    /**
     * 
     * @type {Array<Relationship>}
     * @memberof PlayerCharacter
     */
    'relationships'?: Array<Relationship>;
    /**
     * 
     * @type {Array<Equipment>}
     * @memberof PlayerCharacter
     */
    'equipment'?: Array<Equipment>;
}
/**
 * 
 * @export
 * @interface PlayerCharacterStats
 */
export interface PlayerCharacterStats {
    /**
     * The charm stat of the player character
     * @type {number}
     * @memberof PlayerCharacterStats
     */
    'charm'?: number;
    /**
     * The cunning stat of the player character
     * @type {number}
     * @memberof PlayerCharacterStats
     */
    'cunning'?: number;
    /**
     * The finesse stat of the player character
     * @type {number}
     * @memberof PlayerCharacterStats
     */
    'finesse'?: number;
    /**
     * The luck stat of the player character
     * @type {number}
     * @memberof PlayerCharacterStats
     */
    'luck'?: number;
    /**
     * The might stat of the player character
     * @type {number}
     * @memberof PlayerCharacterStats
     */
    'might'?: number;
}
/**
 * 
 * @export
 * @interface Range
 */
export interface Range {
    /**
     * The unique code for a equipment tag
     * @type {string}
     * @memberof Range
     */
    'code'?: string;
    /**
     * The name of the equipment tag
     * @type {string}
     * @memberof Range
     */
    'name'?: string;
}
/**
 * 
 * @export
 * @interface Relationship
 */
export interface Relationship {
    /**
     * The unique identifier for a relationship
     * @type {number}
     * @memberof Relationship
     */
    'id'?: number;
    /**
     * 
     * @type {Faction}
     * @memberof Relationship
     */
    'faction'?: Faction;
    /**
     * The bonus of the relationship
     * @type {number}
     * @memberof Relationship
     */
    'bonus'?: number;
    /**
     * The prestige of the relationship
     * @type {number}
     * @memberof Relationship
     */
    'prestige'?: number;
    /**
     * The notoriety of the relationship
     * @type {number}
     * @memberof Relationship
     */
    'notoriety'?: number;
}
/**
 * 
 * @export
 * @interface RoguishFeat
 */
export interface RoguishFeat {
    /**
     * The unique identifier for a roguish feat
     * @type {number}
     * @memberof RoguishFeat
     */
    'id'?: number;
    /**
     * The unique code for a roguish feat
     * @type {string}
     * @memberof RoguishFeat
     */
    'code'?: string;
    /**
     * The name of the roguish feat
     * @type {string}
     * @memberof RoguishFeat
     */
    'name'?: string;
    /**
     * The description of the roguish feat
     * @type {string}
     * @memberof RoguishFeat
     */
    'description'?: string;
    /**
     * The risks of the roguish feat
     * @type {string}
     * @memberof RoguishFeat
     */
    'risks'?: string;
}
/**
 * 
 * @export
 * @interface Skill
 */
export interface Skill {
    /**
     * The unique identifier for a skill
     * @type {number}
     * @memberof Skill
     */
    'id'?: number;
    /**
     * The unique code for a skill
     * @type {string}
     * @memberof Skill
     */
    'code'?: string;
    /**
     * The name of the skill
     * @type {string}
     * @memberof Skill
     */
    'name'?: string;
    /**
     * The description of the skill
     * @type {string}
     * @memberof Skill
     */
    'description'?: string;
    /**
     * 
     * @type {Source}
     * @memberof Skill
     */
    'source'?: Source;
    /**
     * The type of the skill
     * @type {string}
     * @memberof Skill
     */
    'type'?: SkillTypeEnum;
}

export const SkillTypeEnum = {
    WeaponSkill: 'Weapon Skill'
} as const;

export type SkillTypeEnum = typeof SkillTypeEnum[keyof typeof SkillTypeEnum];

/**
 * 
 * @export
 * @interface Source
 */
export interface Source {
    /**
     * The unique identifier for a source
     * @type {number}
     * @memberof Source
     */
    'id'?: number;
    /**
     * The unique code for a source
     * @type {string}
     * @memberof Source
     */
    'code'?: string;
    /**
     * The name of the source
     * @type {string}
     * @memberof Source
     */
    'name'?: string;
}
/**
 * 
 * @export
 * @interface Stat
 */
export interface Stat {
    /**
     * The unique identifier for a stat
     * @type {number}
     * @memberof Stat
     */
    'id'?: number;
    /**
     * The unique code for a stat
     * @type {string}
     * @memberof Stat
     */
    'code'?: string;
    /**
     * The name of the stat
     * @type {string}
     * @memberof Stat
     */
    'name'?: string;
    /**
     * The description of the stat
     * @type {string}
     * @memberof Stat
     */
    'description'?: string;
    /**
     * The default value of the stat
     * @type {number}
     * @memberof Stat
     */
    'defaultValue'?: number;
}

/**
 * EquipmentApi - axios parameter creator
 * @export
 */
export const EquipmentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a specific equipment by ID
         * @param {number} equipmentId ID of the equipment to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEquipment: async (equipmentId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'equipmentId' is not null or undefined
            assertParamExists('getEquipment', 'equipmentId', equipmentId)
            const localVarPath = `/equipment/{equipmentId}`
                .replace(`{${"equipmentId"}}`, encodeURIComponent(String(equipmentId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all equipment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEquipment: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/equipment/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EquipmentApi - functional programming interface
 * @export
 */
export const EquipmentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EquipmentApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a specific equipment by ID
         * @param {number} equipmentId ID of the equipment to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getEquipment(equipmentId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Equipment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getEquipment(equipmentId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EquipmentApi.getEquipment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get all equipment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listEquipment(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Equipment>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listEquipment(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EquipmentApi.listEquipment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * EquipmentApi - factory interface
 * @export
 */
export const EquipmentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EquipmentApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a specific equipment by ID
         * @param {number} equipmentId ID of the equipment to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getEquipment(equipmentId: number, options?: RawAxiosRequestConfig): AxiosPromise<Equipment> {
            return localVarFp.getEquipment(equipmentId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all equipment
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listEquipment(options?: RawAxiosRequestConfig): AxiosPromise<Array<Equipment>> {
            return localVarFp.listEquipment(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EquipmentApi - object-oriented interface
 * @export
 * @class EquipmentApi
 * @extends {BaseAPI}
 */
export class EquipmentApi extends BaseAPI {
    /**
     * 
     * @summary Get a specific equipment by ID
     * @param {number} equipmentId ID of the equipment to get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EquipmentApi
     */
    public getEquipment(equipmentId: number, options?: RawAxiosRequestConfig) {
        return EquipmentApiFp(this.configuration).getEquipment(equipmentId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all equipment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EquipmentApi
     */
    public listEquipment(options?: RawAxiosRequestConfig) {
        return EquipmentApiFp(this.configuration).listEquipment(options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * PlayerCharacterApi - axios parameter creator
 * @export
 */
export const PlayerCharacterApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a specific player character by ID
         * @param {number} playerCharacterId ID of the player character to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayerCharacter: async (playerCharacterId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'playerCharacterId' is not null or undefined
            assertParamExists('getPlayerCharacter', 'playerCharacterId', playerCharacterId)
            const localVarPath = `/player-characters/{playerCharacterId}`
                .replace(`{${"playerCharacterId"}}`, encodeURIComponent(String(playerCharacterId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all player characters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPlayerCharacters: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/player-characters`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PlayerCharacterApi - functional programming interface
 * @export
 */
export const PlayerCharacterApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PlayerCharacterApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a specific player character by ID
         * @param {number} playerCharacterId ID of the player character to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlayerCharacter(playerCharacterId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PlayerCharacter>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPlayerCharacter(playerCharacterId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PlayerCharacterApi.getPlayerCharacter']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get all player characters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listPlayerCharacters(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PlayerCharacter>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listPlayerCharacters(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PlayerCharacterApi.listPlayerCharacters']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PlayerCharacterApi - factory interface
 * @export
 */
export const PlayerCharacterApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PlayerCharacterApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a specific player character by ID
         * @param {number} playerCharacterId ID of the player character to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayerCharacter(playerCharacterId: number, options?: RawAxiosRequestConfig): AxiosPromise<PlayerCharacter> {
            return localVarFp.getPlayerCharacter(playerCharacterId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all player characters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPlayerCharacters(options?: RawAxiosRequestConfig): AxiosPromise<Array<PlayerCharacter>> {
            return localVarFp.listPlayerCharacters(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PlayerCharacterApi - object-oriented interface
 * @export
 * @class PlayerCharacterApi
 * @extends {BaseAPI}
 */
export class PlayerCharacterApi extends BaseAPI {
    /**
     * 
     * @summary Get a specific player character by ID
     * @param {number} playerCharacterId ID of the player character to get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayerCharacterApi
     */
    public getPlayerCharacter(playerCharacterId: number, options?: RawAxiosRequestConfig) {
        return PlayerCharacterApiFp(this.configuration).getPlayerCharacter(playerCharacterId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all player characters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlayerCharacterApi
     */
    public listPlayerCharacters(options?: RawAxiosRequestConfig) {
        return PlayerCharacterApiFp(this.configuration).listPlayerCharacters(options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * RoguishFeatApi - axios parameter creator
 * @export
 */
export const RoguishFeatApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a specific roguish feat by ID
         * @param {number} roguishFeatId ID of the roguish feat to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRougishFeat: async (roguishFeatId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roguishFeatId' is not null or undefined
            assertParamExists('getRougishFeat', 'roguishFeatId', roguishFeatId)
            const localVarPath = `/roguish-feats/{roguishFeatId}`
                .replace(`{${"roguishFeatId"}}`, encodeURIComponent(String(roguishFeatId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all roguish feats
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRougishFeats: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/roguish-feats`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RoguishFeatApi - functional programming interface
 * @export
 */
export const RoguishFeatApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RoguishFeatApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a specific roguish feat by ID
         * @param {number} roguishFeatId ID of the roguish feat to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRougishFeat(roguishFeatId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoguishFeat>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRougishFeat(roguishFeatId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoguishFeatApi.getRougishFeat']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get all roguish feats
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listRougishFeats(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RoguishFeat>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listRougishFeats(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoguishFeatApi.listRougishFeats']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * RoguishFeatApi - factory interface
 * @export
 */
export const RoguishFeatApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RoguishFeatApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a specific roguish feat by ID
         * @param {number} roguishFeatId ID of the roguish feat to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRougishFeat(roguishFeatId: number, options?: RawAxiosRequestConfig): AxiosPromise<RoguishFeat> {
            return localVarFp.getRougishFeat(roguishFeatId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all roguish feats
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRougishFeats(options?: RawAxiosRequestConfig): AxiosPromise<Array<RoguishFeat>> {
            return localVarFp.listRougishFeats(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RoguishFeatApi - object-oriented interface
 * @export
 * @class RoguishFeatApi
 * @extends {BaseAPI}
 */
export class RoguishFeatApi extends BaseAPI {
    /**
     * 
     * @summary Get a specific roguish feat by ID
     * @param {number} roguishFeatId ID of the roguish feat to get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoguishFeatApi
     */
    public getRougishFeat(roguishFeatId: number, options?: RawAxiosRequestConfig) {
        return RoguishFeatApiFp(this.configuration).getRougishFeat(roguishFeatId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all roguish feats
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoguishFeatApi
     */
    public listRougishFeats(options?: RawAxiosRequestConfig) {
        return RoguishFeatApiFp(this.configuration).listRougishFeats(options).then((request) => request(this.axios, this.basePath));
    }
}



