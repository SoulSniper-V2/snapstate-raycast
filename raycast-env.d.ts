/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `restore-workspace` command */
  export type RestoreWorkspace = ExtensionPreferences & {}
  /** Preferences accessible in the `save-workspace` command */
  export type SaveWorkspace = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `restore-workspace` command */
  export type RestoreWorkspace = {}
  /** Arguments passed to the `save-workspace` command */
  export type SaveWorkspace = {}
}

