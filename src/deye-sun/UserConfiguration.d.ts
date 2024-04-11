import type { NodeDef } from 'node-red';

/**
 * Configuration options available to users.
 */
export interface UserConfigurationOptions {
    outputTarget?: string;
    outputProperty?: string;
    deviceIp?: string;
    deviceSerialNumber?: string;
    deviceTimeout?: number;
    updateMode?: string;
    updateFrequency?: number;
}

/**
 * Configuration generated by the user in the editor.
 */
export interface UserConfiguration extends NodeDef, UserConfigurationOptions {}