export const ONLINE_CHANGED = `@APP/ONLINE_CHANGED`
export const CACHE_CHANGED = `@APP/CACHE_CHANGED`
export const INSTALL_CHANGED = `@APP/INSTALL_CHANGED`
export const SET_INSTALL_PROMPT = '@APP/SET_INSTALL_PROMPT'

export type ONLINE_STATUS = 'UNKNOWN' | 'ONLINE' | 'OFFLINE'
export type CACHE_STATUS =
  | 'UNKNOWN'
  | 'DOWNLOADED'
  | 'DOWNLOADING'
  | 'SHOULD_DOWNLOAD'
  | 'CACHED'
export type INSTALL_STATUS =
  | 'UNKNOWN'
  | 'INSTALLED'
  | 'PROMPTED'
  | 'NOT_INSTALLED'

export interface AppState {
  onlineStatus: ONLINE_STATUS
  cacheStatus: CACHE_STATUS
  installStatus: INSTALL_STATUS
  installPrompt?: BeforeInstallPromptEvent
}

interface ChangeOnlineAction {
  type: typeof ONLINE_CHANGED
  onlineStatus: ONLINE_STATUS
}

interface ChangeCacheAction {
  type: typeof CACHE_CHANGED
  cacheStatus: CACHE_STATUS
}

interface ChangeInstallAction {
  type: typeof INSTALL_CHANGED
  installStatus: INSTALL_STATUS
}

interface SetInstallPromptAction {
  type: typeof SET_INSTALL_PROMPT
  installPrompt: BeforeInstallPromptEvent
}

export type AppActionsTypes =
  | ChangeOnlineAction
  | ChangeCacheAction
  | ChangeInstallAction
  | SetInstallPromptAction
