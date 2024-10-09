/**
 * SPDX-FileCopyrightText: 2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

export interface IAppstoreCategory {
	/**
	 * The category ID
	 */
	id: string
	/**
	 * The display name (can be localized)
	 */
	displayName: string
	/**
	 * Inline SVG path
	 */
	icon: string
}

export interface IAppstoreAppRelease {
	version: string
	translations: {
		[key: string]: {
			changelog: string
		}
	}
}

export interface IAppstoreApp {
	id: string
	name: string
	summary: string
	description: string
	licence: string
	author: string[] | Record<string, string>
	level: number
	version: string
	category: string|string[]

	preview?: string
	screenshot?: string

	active: boolean
	internal: boolean
	removeable: boolean
	installed: boolean
	canInstall: boolean
	canUninstall: boolean
	isCompatible: boolean

	appstoreData: Record<string, never>
	releases?: IAppstoreAppRelease[]
}

export interface IAppstoreExApp extends IAppstoreApp {
	daemon: IDeployDaemon,
	status: IExAppStatus,
	error: string,
	app_api: boolean,
}

export interface IComputeDevice {
	id: string,
	label: string,
}

export interface IDeployConfig {
	computeDevice: IComputeDevice,
	net: string,
	nextcloud_url: string,
}

export interface IDeployDaemon {
	accepts_deploy_id: string,
	deploy_config: IDeployConfig,
	display_name: string,
	host: string,
	id: number,
	name: string,
	protocol: string,
}

export interface IExAppStatus {
	action: string,
	deploy: number,
	deploy_start_time: number,
	error: string,
	init: number,
	init_start_time: number,
	type: string,
}
