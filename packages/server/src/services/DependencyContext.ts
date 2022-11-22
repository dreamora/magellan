/*
 * ---------------------------------------------------------------------------------------------
 *   Copyright (c) Quatico Solutions AG. All rights reserved.
 *   Licensed under the MIT License. See LICENSE in the project root for license information.
 * ---------------------------------------------------------------------------------------------
 */

/* eslint-disable no-var */
import { TransportHandler } from "..";
import { TransportRequest } from "../api/TransportRequest";

export type DependencyContext = {
    defaultTransportRequest: TransportRequest;
    defaultTransportHandler: TransportHandler;
};

declare global {
    var __qsMagellanDI__: DependencyContext;
}

export const initDependencyContext = (diContext: DependencyContext) => {
    global.__qsMagellanDI__ = diContext;
};

export const getDependencyContext = (): DependencyContext | never => {
    if (global.__qsMagellanDI__ === undefined) {
        throw new Error("Dependency Context not initialized");
    }
    return global.__qsMagellanDI__;
};