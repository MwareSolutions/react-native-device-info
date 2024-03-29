"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUniqueId = getUniqueId;
exports.getInstanceId = getInstanceId;
exports.getInstanceIdSync = getInstanceIdSync;
exports.getSerialNumber = getSerialNumber;
exports.getSerialNumberSync = getSerialNumberSync;
exports.getAndroidId = getAndroidId;
exports.getAndroidIdSync = getAndroidIdSync;
exports.getIpAddress = getIpAddress;
exports.getIpAddressSync = getIpAddressSync;
exports.isCameraPresent = isCameraPresent;
exports.isCameraPresentSync = isCameraPresentSync;
exports.getMacAddressEthernet = getMacAddressEthernet;
exports.getMacAddressEthernetSync = getMacAddressEthernetSync;
exports.getMacAddress = getMacAddress;
exports.getMacAddressSync = getMacAddressSync;
exports.getDeviceId = getDeviceId;
exports.getManufacturer = getManufacturer;
exports.getManufacturerSync = getManufacturerSync;
exports.getModel = getModel;
exports.getBrand = getBrand;
exports.getSystemName = getSystemName;
exports.getSystemVersion = getSystemVersion;
exports.getBuildId = getBuildId;
exports.getBuildIdSync = getBuildIdSync;
exports.getApiLevel = getApiLevel;
exports.getApiLevelSync = getApiLevelSync;
exports.getBundleId = getBundleId;
exports.getInstallerPackageName = getInstallerPackageName;
exports.getInstallerPackageNameSync = getInstallerPackageNameSync;
exports.getApplicationName = getApplicationName;
exports.getBuildNumber = getBuildNumber;
exports.getVersion = getVersion;
exports.getReadableVersion = getReadableVersion;
exports.getDeviceName = getDeviceName;
exports.getDeviceNameSync = getDeviceNameSync;
exports.getUsedMemory = getUsedMemory;
exports.getUsedMemorySync = getUsedMemorySync;
exports.getUserAgent = getUserAgent;
exports.getUserAgentSync = getUserAgentSync;
exports.getFontScale = getFontScale;
exports.getFontScaleSync = getFontScaleSync;
exports.getBootloader = getBootloader;
exports.getBootloaderSync = getBootloaderSync;
exports.getDevice = getDevice;
exports.getDeviceSync = getDeviceSync;
exports.getDisplay = getDisplay;
exports.getDisplaySync = getDisplaySync;
exports.getFingerprint = getFingerprint;
exports.getFingerprintSync = getFingerprintSync;
exports.getHardware = getHardware;
exports.getHardwareSync = getHardwareSync;
exports.getHost = getHost;
exports.getHostSync = getHostSync;
exports.getProduct = getProduct;
exports.getProductSync = getProductSync;
exports.getTags = getTags;
exports.getTagsSync = getTagsSync;
exports.getType = getType;
exports.getTypeSync = getTypeSync;
exports.getBaseOs = getBaseOs;
exports.getBaseOsSync = getBaseOsSync;
exports.getPreviewSdkInt = getPreviewSdkInt;
exports.getPreviewSdkIntSync = getPreviewSdkIntSync;
exports.getSecurityPatch = getSecurityPatch;
exports.getSecurityPatchSync = getSecurityPatchSync;
exports.getCodename = getCodename;
exports.getCodenameSync = getCodenameSync;
exports.getIncremental = getIncremental;
exports.getIncrementalSync = getIncrementalSync;
exports.isEmulator = isEmulator;
exports.isEmulatorSync = isEmulatorSync;
exports.isTablet = isTablet;
exports.isPinOrFingerprintSet = isPinOrFingerprintSet;
exports.isPinOrFingerprintSetSync = isPinOrFingerprintSetSync;
exports.hasNotch = hasNotch;
exports.getFirstInstallTime = getFirstInstallTime;
exports.getFirstInstallTimeSync = getFirstInstallTimeSync;
exports.getInstallReferrer = getInstallReferrer;
exports.getInstallReferrerSync = getInstallReferrerSync;
exports.getLastUpdateTime = getLastUpdateTime;
exports.getLastUpdateTimeSync = getLastUpdateTimeSync;
exports.getPhoneNumber = getPhoneNumber;
exports.getPhoneNumberSync = getPhoneNumberSync;
exports.getCarrier = getCarrier;
exports.getCarrierSync = getCarrierSync;
exports.getTotalMemory = getTotalMemory;
exports.getTotalMemorySync = getTotalMemorySync;
exports.getMaxMemory = getMaxMemory;
exports.getMaxMemorySync = getMaxMemorySync;
exports.getTotalDiskCapacity = getTotalDiskCapacity;
exports.getTotalDiskCapacitySync = getTotalDiskCapacitySync;
exports.getFreeDiskStorage = getFreeDiskStorage;
exports.getFreeDiskStorageSync = getFreeDiskStorageSync;
exports.getBatteryLevel = getBatteryLevel;
exports.getBatteryLevelSync = getBatteryLevelSync;
exports.getPowerState = getPowerState;
exports.getPowerStateSync = getPowerStateSync;
exports.isBatteryCharging = isBatteryCharging;
exports.isBatteryChargingSync = isBatteryChargingSync;
exports.isLandscape = isLandscape;
exports.isLandscapeSync = isLandscapeSync;
exports.isAirplaneMode = isAirplaneMode;
exports.isAirplaneModeSync = isAirplaneModeSync;
exports.getDeviceType = getDeviceType;
exports.getDeviceTypeSync = getDeviceTypeSync;
exports.supportedAbis = supportedAbis;
exports.supportedAbisSync = supportedAbisSync;
exports.supported32BitAbis = supported32BitAbis;
exports.supported32BitAbisSync = supported32BitAbisSync;
exports.supported64BitAbis = supported64BitAbis;
exports.supported64BitAbisSync = supported64BitAbisSync;
exports.hasSystemFeature = hasSystemFeature;
exports.hasSystemFeatureSync = hasSystemFeatureSync;
exports.getSystemAvailableFeatures = getSystemAvailableFeatures;
exports.getSystemAvailableFeaturesSync = getSystemAvailableFeaturesSync;
exports.isLocationEnabled = isLocationEnabled;
exports.isLocationEnabledSync = isLocationEnabledSync;
exports.isHeadphonesConnected = isHeadphonesConnected;
exports.isHeadphonesConnectedSync = isHeadphonesConnectedSync;
exports.getAvailableLocationProviders = getAvailableLocationProviders;
exports.getAvailableLocationProvidersSync = getAvailableLocationProvidersSync;
exports.getDeviceToken = getDeviceToken;
exports.useBatteryLevel = useBatteryLevel;
exports.useBatteryLevelIsLow = useBatteryLevelIsLow;
exports.usePowerState = usePowerState;
exports.useFirstInstallTime = useFirstInstallTime;
exports.useDeviceName = useDeviceName;
exports.useHasSystemFeature = useHasSystemFeature;
exports.useIsEmulator = useIsEmulator;
exports.default = void 0;

var _react = require("react");

var _reactNative = require("react-native");

var _asyncHookWrappers = require("./internal/asyncHookWrappers");

var _devicesWithNotch = _interopRequireDefault(require("./internal/devicesWithNotch"));

var _nativeInterface = _interopRequireDefault(require("./internal/nativeInterface"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let uniqueId;

function getUniqueId() {
  if (!uniqueId) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
      uniqueId = _nativeInterface.default.uniqueId;
    } else {
      uniqueId = 'unknown';
    }
  }

  return uniqueId;
}

let instanceId;

async function getInstanceId() {
  if (!instanceId) {
    if (_reactNative.Platform.OS === 'android') {
      instanceId = await _nativeInterface.default.getInstanceId();
    } else {
      instanceId = 'unknown';
    }
  }

  return instanceId;
}

function getInstanceIdSync() {
  if (!instanceId) {
    if (_reactNative.Platform.OS === 'android') {
      instanceId = _nativeInterface.default.getInstanceIdSync();
    } else {
      instanceId = 'unknown';
    }
  }

  return instanceId;
}

let serialNumber;

async function getSerialNumber() {
  if (!serialNumber) {
    if (_reactNative.Platform.OS === 'android') {
      serialNumber = await _nativeInterface.default.getSerialNumber();
    } else {
      serialNumber = 'unknown';
    }
  }

  return serialNumber;
}

function getSerialNumberSync() {
  if (!serialNumber) {
    if (_reactNative.Platform.OS === 'android') {
      serialNumber = _nativeInterface.default.getSerialNumberSync();
    } else {
      serialNumber = 'unknown';
    }
  }

  return serialNumber;
}

let androidId;

async function getAndroidId() {
  if (!androidId) {
    if (_reactNative.Platform.OS === 'android') {
      androidId = await _nativeInterface.default.getAndroidId();
    } else {
      androidId = 'unknown';
    }
  }

  return androidId;
}

function getAndroidIdSync() {
  if (!androidId) {
    if (_reactNative.Platform.OS === 'android') {
      androidId = _nativeInterface.default.getAndroidIdSync();
    } else {
      androidId = 'unknown';
    }
  }

  return androidId;
}

async function getIpAddress() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
    return _nativeInterface.default.getIpAddress();
  }

  return 'unknown';
}

function getIpAddressSync() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
    return _nativeInterface.default.getIpAddressSync();
  }

  return 'unknown';
}

async function isCameraPresent() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'windows' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.isCameraPresent();
  }

  return false;
}

function isCameraPresentSync() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'windows' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.isCameraPresentSync();
  }

  return false;
}

async function getMacAddressEthernet() {
  if (_reactNative.Platform.OS === 'android') {
    return _nativeInterface.default.getMacAddressEthernet();
  } else if (_reactNative.Platform.OS === 'ios') {
    return '02:00:00:00:00:00';
  }

  return 'unknown';
}

function getMacAddressEthernetSync() {
  if (_reactNative.Platform.OS === 'android') {
    return _nativeInterface.default.getMacAddressEthernetSync();
  } else if (_reactNative.Platform.OS === 'ios') {
    return '02:00:00:00:00:00';
  }

  return 'unknown';
}

async function getMacAddress() {
  if (_reactNative.Platform.OS === 'android') {
    return _nativeInterface.default.getMacAddress();
  } else if (_reactNative.Platform.OS === 'ios') {
    return '02:00:00:00:00:00';
  }

  return 'unknown';
}

function getMacAddressSync() {
  if (_reactNative.Platform.OS === 'android') {
    return _nativeInterface.default.getMacAddressSync();
  } else if (_reactNative.Platform.OS === 'ios') {
    return '02:00:00:00:00:00';
  }

  return 'unknown';
}

let deviceId;

function getDeviceId() {
  if (!deviceId) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
      deviceId = _nativeInterface.default.deviceId;
    } else {
      deviceId = 'unknown';
    }
  }

  return deviceId;
}

let manufacturer;

async function getManufacturer() {
  if (!manufacturer) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'windows') {
      manufacturer = await _nativeInterface.default.getSystemManufacturer();
    } else if (_reactNative.Platform.OS === 'ios') {
      manufacturer = 'Apple';
    } else {
      manufacturer = 'unknown';
    }
  }

  return manufacturer;
}

function getManufacturerSync() {
  if (!manufacturer) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'windows') {
      manufacturer = _nativeInterface.default.getSystemManufacturerSync();
    } else if (_reactNative.Platform.OS === 'ios') {
      manufacturer = 'Apple';
    } else {
      manufacturer = 'unknown';
    }
  }

  return manufacturer;
}

let model;

function getModel() {
  if (!model) {
    if (_reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'windows') {
      model = _nativeInterface.default.model;
    } else {
      model = 'unknown';
    }
  }

  return model;
}

let brand;

function getBrand() {
  if (!brand) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
      brand = _nativeInterface.default.brand;
    } else {
      brand = 'unknown';
    }
  }

  return brand;
}

let systemName;

function getSystemName() {
  if (!systemName) {
    if (_reactNative.Platform.OS === 'ios') {
      systemName = _nativeInterface.default.systemName;
    } else if (_reactNative.Platform.OS === 'android') {
      systemName = 'Android';
    } else if (_reactNative.Platform.OS === 'windows') {
      systemName = 'Windows';
    } else {
      systemName = 'unknown';
    }
  }

  return systemName;
}

let systemVersion;

function getSystemVersion() {
  if (!systemVersion) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
      systemVersion = _nativeInterface.default.systemVersion;
    } else {
      systemVersion = 'unknown';
    }
  }

  return systemVersion;
}

let buildId;

async function getBuildId() {
  if (!buildId) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios') {
      buildId = await _nativeInterface.default.getBuildId();
    } else {
      buildId = 'unknown';
    }
  }

  return buildId;
}

function getBuildIdSync() {
  if (!buildId) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios') {
      buildId = _nativeInterface.default.getBuildIdSync();
    } else {
      buildId = 'unknown';
    }
  }

  return buildId;
}

let apiLevel;

async function getApiLevel() {
  if (!apiLevel) {
    if (_reactNative.Platform.OS === 'android') {
      apiLevel = await _nativeInterface.default.getApiLevel();
    } else {
      apiLevel = -1;
    }
  }

  return apiLevel;
}

function getApiLevelSync() {
  if (!apiLevel) {
    if (_reactNative.Platform.OS === 'android') {
      apiLevel = _nativeInterface.default.getApiLevelSync();
    } else {
      apiLevel = -1;
    }
  }

  return apiLevel;
}

let bundleId;

function getBundleId() {
  if (!bundleId) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
      bundleId = _nativeInterface.default.bundleId;
    } else {
      bundleId = 'unknown';
    }
  }

  return bundleId;
}

let installerPackageName;

async function getInstallerPackageName() {
  if (!installerPackageName) {
    if (_reactNative.Platform.OS === 'android') {
      installerPackageName = await _nativeInterface.default.getInstallerPackageName();
    } else {
      installerPackageName = 'unknown';
    }
  }

  return installerPackageName;
}

function getInstallerPackageNameSync() {
  if (!installerPackageName) {
    if (_reactNative.Platform.OS === 'android') {
      installerPackageName = _nativeInterface.default.getInstallerPackageNameSync();
    } else {
      installerPackageName = 'unknown';
    }
  }

  return installerPackageName;
}

let appName;

function getApplicationName() {
  if (!appName) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
      appName = _nativeInterface.default.appName;
    } else {
      appName = 'unknown';
    }
  }

  return appName;
}

let buildNumber;

function getBuildNumber() {
  if (!buildNumber) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
      buildNumber = _nativeInterface.default.buildNumber;
    } else {
      buildNumber = 'unknown';
    }
  }

  return buildNumber;
}

let version;

function getVersion() {
  if (!version) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
      version = _nativeInterface.default.appVersion;
    } else {
      version = 'unknown';
    }
  }

  return version;
}

function getReadableVersion() {
  return getVersion() + '.' + getBuildNumber();
}

let deviceName;

async function getDeviceName() {
  if (!deviceName) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
      deviceName = await _nativeInterface.default.getDeviceName();
    } else {
      deviceName = 'unknown';
    }
  }

  return deviceName;
}

function getDeviceNameSync() {
  if (!deviceName) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
      deviceName = _nativeInterface.default.getDeviceNameSync();
    } else {
      deviceName = 'unknown';
    }
  }

  return deviceName;
}

async function getUsedMemory() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.getUsedMemory();
  }

  return -1;
}

function getUsedMemorySync() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.getUsedMemorySync();
  }

  return -1;
}

let userAgent;

async function getUserAgent() {
  if (!userAgent) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'web') {
      userAgent = await _nativeInterface.default.getUserAgent();
    } else {
      userAgent = 'unknown';
    }
  }

  return userAgent;
}

function getUserAgentSync() {
  if (!userAgent) {
    // getUserAgentSync is not available on iOS since it rely on an completion operation
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'web') {
      userAgent = _nativeInterface.default.getUserAgentSync();
    } else {
      userAgent = 'unknown';
    }
  }

  return userAgent;
}

async function getFontScale() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios') {
    return _nativeInterface.default.getFontScale();
  }

  return -1;
}

function getFontScaleSync() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios') {
    return _nativeInterface.default.getFontScaleSync();
  }

  return -1;
}

let bootloader;

async function getBootloader() {
  if (!bootloader) {
    if (_reactNative.Platform.OS === 'android') {
      bootloader = await _nativeInterface.default.getBootloader();
    } else {
      bootloader = 'unknown';
    }
  }

  return bootloader;
}

function getBootloaderSync() {
  if (!bootloader) {
    if (_reactNative.Platform.OS === 'android') {
      bootloader = _nativeInterface.default.getBootloaderSync();
    } else {
      bootloader = 'unknown';
    }
  }

  return bootloader;
}

let device;

async function getDevice() {
  if (!device) {
    if (_reactNative.Platform.OS === 'android') {
      device = await _nativeInterface.default.getDevice();
    } else {
      device = 'unknown';
    }
  }

  return device;
}

function getDeviceSync() {
  if (!device) {
    if (_reactNative.Platform.OS === 'android') {
      device = _nativeInterface.default.getDeviceSync();
    } else {
      device = 'unknown';
    }
  }

  return device;
}

let display;

async function getDisplay() {
  if (!display) {
    if (_reactNative.Platform.OS === 'android') {
      display = await _nativeInterface.default.getDisplay();
    } else {
      display = 'unknown';
    }
  }

  return display;
}

function getDisplaySync() {
  if (!display) {
    if (_reactNative.Platform.OS === 'android') {
      display = _nativeInterface.default.getDisplaySync();
    } else {
      display = 'unknown';
    }
  }

  return display;
}

let fingerprint;

async function getFingerprint() {
  if (!fingerprint) {
    if (_reactNative.Platform.OS === 'android') {
      fingerprint = await _nativeInterface.default.getFingerprint();
    } else {
      fingerprint = 'unknown';
    }
  }

  return fingerprint;
}

function getFingerprintSync() {
  if (!fingerprint) {
    if (_reactNative.Platform.OS === 'android') {
      fingerprint = _nativeInterface.default.getFingerprintSync();
    } else {
      fingerprint = 'unknown';
    }
  }

  return fingerprint;
}

let hardware;

async function getHardware() {
  if (!hardware) {
    if (_reactNative.Platform.OS === 'android') {
      hardware = await _nativeInterface.default.getHardware();
    } else {
      hardware = 'unknown';
    }
  }

  return hardware;
}

function getHardwareSync() {
  if (!hardware) {
    if (_reactNative.Platform.OS === 'android') {
      hardware = _nativeInterface.default.getHardwareSync();
    } else {
      hardware = 'unknown';
    }
  }

  return hardware;
}

let host;

async function getHost() {
  if (!host) {
    if (_reactNative.Platform.OS === 'android') {
      host = await _nativeInterface.default.getHost();
    } else {
      host = 'unknown';
    }
  }

  return host;
}

function getHostSync() {
  if (!host) {
    if (_reactNative.Platform.OS === 'android') {
      host = _nativeInterface.default.getHostSync();
    } else {
      host = 'unknown';
    }
  }

  return host;
}

let product;

async function getProduct() {
  if (!product) {
    if (_reactNative.Platform.OS === 'android') {
      product = await _nativeInterface.default.getProduct();
    } else {
      product = 'unknown';
    }
  }

  return product;
}

function getProductSync() {
  if (!product) {
    if (_reactNative.Platform.OS === 'android') {
      product = _nativeInterface.default.getProductSync();
    } else {
      product = 'unknown';
    }
  }

  return product;
}

let tags;

async function getTags() {
  if (!tags) {
    if (_reactNative.Platform.OS === 'android') {
      tags = await _nativeInterface.default.getTags();
    } else {
      tags = 'unknown';
    }
  }

  return tags;
}

function getTagsSync() {
  if (!tags) {
    if (_reactNative.Platform.OS === 'android') {
      tags = _nativeInterface.default.getTagsSync();
    } else {
      tags = 'unknown';
    }
  }

  return tags;
}

let type;

async function getType() {
  if (!type) {
    if (_reactNative.Platform.OS === 'android') {
      type = await _nativeInterface.default.getType();
    } else {
      type = 'unknown';
    }
  }

  return type;
}

function getTypeSync() {
  if (!type) {
    if (_reactNative.Platform.OS === 'android') {
      type = _nativeInterface.default.getTypeSync();
    } else {
      type = 'unknown';
    }
  }

  return type;
}

let baseOs;

async function getBaseOs() {
  if (!baseOs) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'web') {
      baseOs = await _nativeInterface.default.getBaseOs();
    } else {
      baseOs = 'unknown';
    }
  }

  return baseOs;
}

function getBaseOsSync() {
  if (!baseOs) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'web') {
      baseOs = _nativeInterface.default.getBaseOsSync();
    } else {
      baseOs = 'unknown';
    }
  }

  return baseOs;
}

let previewSdkInt;

async function getPreviewSdkInt() {
  if (!previewSdkInt) {
    if (_reactNative.Platform.OS === 'android') {
      previewSdkInt = await _nativeInterface.default.getPreviewSdkInt();
    } else {
      previewSdkInt = -1;
    }
  }

  return previewSdkInt;
}

function getPreviewSdkIntSync() {
  if (!previewSdkInt) {
    if (_reactNative.Platform.OS === 'android') {
      previewSdkInt = _nativeInterface.default.getPreviewSdkIntSync();
    } else {
      previewSdkInt = -1;
    }
  }

  return previewSdkInt;
}

let securityPatch;

async function getSecurityPatch() {
  if (!securityPatch) {
    if (_reactNative.Platform.OS === 'android') {
      securityPatch = await _nativeInterface.default.getSecurityPatch();
    } else {
      securityPatch = 'unknown';
    }
  }

  return securityPatch;
}

function getSecurityPatchSync() {
  if (!securityPatch) {
    if (_reactNative.Platform.OS === 'android') {
      securityPatch = _nativeInterface.default.getSecurityPatchSync();
    } else {
      securityPatch = 'unknown';
    }
  }

  return securityPatch;
}

let codeName;

async function getCodename() {
  if (!codeName) {
    if (_reactNative.Platform.OS === 'android') {
      codeName = await _nativeInterface.default.getCodename();
    } else {
      codeName = 'unknown';
    }
  }

  return codeName;
}

function getCodenameSync() {
  if (!codeName) {
    if (_reactNative.Platform.OS === 'android') {
      codeName = _nativeInterface.default.getCodenameSync();
    } else {
      codeName = 'unknown';
    }
  }

  return codeName;
}

let incremental;

async function getIncremental() {
  if (!incremental) {
    if (_reactNative.Platform.OS === 'android') {
      incremental = await _nativeInterface.default.getIncremental();
    } else {
      incremental = 'unknown';
    }
  }

  return incremental;
}

function getIncrementalSync() {
  if (!incremental) {
    if (_reactNative.Platform.OS === 'android') {
      incremental = _nativeInterface.default.getIncrementalSync();
    } else {
      incremental = 'unknown';
    }
  }

  return incremental;
}

let emulator;

async function isEmulator() {
  if (emulator === undefined) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
      emulator = await _nativeInterface.default.isEmulator();
    } else {
      emulator = false;
    }
  }

  return emulator;
}

function isEmulatorSync() {
  if (emulator === undefined) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
      emulator = _nativeInterface.default.isEmulatorSync();
    } else {
      emulator = false;
    }
  }

  return emulator;
}

let tablet;

function isTablet() {
  if (tablet === undefined) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
      tablet = _nativeInterface.default.isTablet;
    } else {
      tablet = false;
    }
  }

  return tablet;
}

async function isPinOrFingerprintSet() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
    return _nativeInterface.default.isPinOrFingerprintSet();
  }

  return false;
}

function isPinOrFingerprintSetSync() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows') {
    return _nativeInterface.default.isPinOrFingerprintSetSync();
  }

  return false;
}

let notch;

function hasNotch() {
  if (notch === undefined) {
    let _brand = getBrand();

    let _model = getModel();

    notch = _devicesWithNotch.default.findIndex(item => item.brand.toLowerCase() === _brand.toLowerCase() && item.model.toLowerCase() === _model.toLowerCase()) !== -1;
  }

  return notch;
}

let firstInstallTime;

async function getFirstInstallTime() {
  if (!firstInstallTime) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'windows') {
      firstInstallTime = await _nativeInterface.default.getFirstInstallTime();
    } else {
      firstInstallTime = -1;
    }
  }

  return firstInstallTime;
}

function getFirstInstallTimeSync() {
  if (!firstInstallTime) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'windows') {
      firstInstallTime = _nativeInterface.default.getFirstInstallTimeSync();
    } else {
      firstInstallTime = -1;
    }
  }

  return firstInstallTime;
}

let installReferrer;

async function getInstallReferrer() {
  if (!installReferrer) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'web') {
      installReferrer = await _nativeInterface.default.getInstallReferrer();
    } else {
      installReferrer = 'unknown';
    }
  }

  return installReferrer;
}

function getInstallReferrerSync() {
  if (!installReferrer) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'web') {
      installReferrer = _nativeInterface.default.getInstallReferrerSync();
    } else {
      installReferrer = 'unknown';
    }
  }

  return installReferrer;
}

let lastUpdateTime;

async function getLastUpdateTime() {
  if (!lastUpdateTime) {
    if (_reactNative.Platform.OS === 'android') {
      lastUpdateTime = await _nativeInterface.default.getLastUpdateTime();
    } else {
      lastUpdateTime = -1;
    }
  }

  return lastUpdateTime;
}

function getLastUpdateTimeSync() {
  if (!lastUpdateTime) {
    if (_reactNative.Platform.OS === 'android') {
      lastUpdateTime = _nativeInterface.default.getLastUpdateTimeSync();
    } else {
      lastUpdateTime = -1;
    }
  }

  return lastUpdateTime;
}

async function getPhoneNumber() {
  if (_reactNative.Platform.OS === 'android') {
    return _nativeInterface.default.getPhoneNumber();
  }

  return 'unknown';
}

function getPhoneNumberSync() {
  if (_reactNative.Platform.OS === 'android') {
    return _nativeInterface.default.getPhoneNumberSync();
  }

  return 'unknown';
}

async function getCarrier() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios') {
    return _nativeInterface.default.getCarrier();
  }

  return 'unknown';
}

function getCarrierSync() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios') {
    return _nativeInterface.default.getCarrierSync();
  }

  return 'unknown';
}

let totalMemory;

async function getTotalMemory() {
  if (!totalMemory) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows' || _reactNative.Platform.OS === 'web') {
      totalMemory = await _nativeInterface.default.getTotalMemory();
    } else {
      totalMemory = -1;
    }
  }

  return totalMemory;
}

function getTotalMemorySync() {
  if (!totalMemory) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows' || _reactNative.Platform.OS === 'web') {
      totalMemory = _nativeInterface.default.getTotalMemorySync();
    } else {
      totalMemory = -1;
    }
  }

  return totalMemory;
}

let maxMemory;

async function getMaxMemory() {
  if (!maxMemory) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'windows' || _reactNative.Platform.OS === 'web') {
      maxMemory = await _nativeInterface.default.getMaxMemory();
    } else {
      maxMemory = -1;
    }
  }

  return maxMemory;
}

function getMaxMemorySync() {
  if (!maxMemory) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'windows' || _reactNative.Platform.OS === 'web') {
      maxMemory = _nativeInterface.default.getMaxMemorySync();
    } else {
      maxMemory = -1;
    }
  }

  return maxMemory;
}

async function getTotalDiskCapacity() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.getTotalDiskCapacity();
  }

  return -1;
}

function getTotalDiskCapacitySync() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.getTotalDiskCapacitySync();
  }

  return -1;
}

async function getFreeDiskStorage() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.getFreeDiskStorage();
  }

  return -1;
}

function getFreeDiskStorageSync() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.getFreeDiskStorageSync();
  }

  return -1;
}

async function getBatteryLevel() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.getBatteryLevel();
  }

  return -1;
}

function getBatteryLevelSync() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'windows' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.getBatteryLevelSync();
  }

  return -1;
}

async function getPowerState() {
  if (_reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.getPowerState();
  }

  return {};
}

function getPowerStateSync() {
  if (_reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.getPowerStateSync();
  }

  return {};
}

async function isBatteryCharging() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.isBatteryCharging();
  }

  return false;
}

function isBatteryChargingSync() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.isBatteryChargingSync();
  }

  return false;
}

async function isLandscape() {
  return Promise.resolve(isLandscapeSync());
}

function isLandscapeSync() {
  const {
    height,
    width
  } = _reactNative.Dimensions.get('window');

  return width >= height;
}

async function isAirplaneMode() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.isAirplaneMode();
  }

  return Promise.resolve(false);
}

function isAirplaneModeSync() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.isAirplaneModeSync();
  }

  return false;
}

let deviceType;

function getDeviceType() {
  if (!deviceType) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios') {
      deviceType = _nativeInterface.default.deviceType;
    } else {
      deviceType = 'unknown';
    }
  }

  return deviceType;
}

function getDeviceTypeSync() {
  if (!deviceType) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios') {
      deviceType = _nativeInterface.default.deviceType;
    } else {
      deviceType = 'unknown';
    }
  }

  return deviceType;
}

let _supportedAbis;

async function supportedAbis() {
  if (!_supportedAbis) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios') {
      _supportedAbis = await _nativeInterface.default.getSupportedAbis();
    } else {
      _supportedAbis = [];
    }
  }

  return _supportedAbis;
}

function supportedAbisSync() {
  if (!_supportedAbis) {
    if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios') {
      _supportedAbis = _nativeInterface.default.getSupportedAbisSync();
    } else {
      _supportedAbis = [];
    }
  }

  return _supportedAbis;
}

let _supported32BitAbis;

async function supported32BitAbis() {
  if (!_supported32BitAbis) {
    if (_reactNative.Platform.OS === 'android') {
      _supported32BitAbis = await _nativeInterface.default.getSupported32BitAbis();
    } else {
      _supported32BitAbis = [];
    }
  }

  return _supported32BitAbis;
}

function supported32BitAbisSync() {
  if (!_supported32BitAbis) {
    if (_reactNative.Platform.OS === 'android') {
      _supported32BitAbis = _nativeInterface.default.getSupported32BitAbisSync();
    } else {
      _supported32BitAbis = [];
    }
  }

  return _supported32BitAbis;
}

let _supported64BitAbis;

async function supported64BitAbis() {
  if (!_supported64BitAbis) {
    if (_reactNative.Platform.OS === 'android') {
      _supported64BitAbis = await _nativeInterface.default.getSupported64BitAbis();
    } else {
      _supported64BitAbis = [];
    }
  }

  return _supported64BitAbis;
}

function supported64BitAbisSync() {
  if (!_supported64BitAbis) {
    if (_reactNative.Platform.OS === 'android') {
      _supported64BitAbis = _nativeInterface.default.getSupported64BitAbisSync();
    } else {
      _supported64BitAbis = [];
    }
  }

  return _supported64BitAbis;
}

async function hasSystemFeature(feature) {
  if (_reactNative.Platform.OS === 'android') {
    return _nativeInterface.default.hasSystemFeature(feature);
  }

  return false;
}

function hasSystemFeatureSync(feature) {
  if (_reactNative.Platform.OS === 'android') {
    return _nativeInterface.default.hasSystemFeatureSync(feature);
  }

  return false;
}

async function getSystemAvailableFeatures() {
  if (_reactNative.Platform.OS === 'android') {
    return _nativeInterface.default.getSystemAvailableFeatures();
  }

  return [];
}

function getSystemAvailableFeaturesSync() {
  if (_reactNative.Platform.OS === 'android') {
    return _nativeInterface.default.getSystemAvailableFeaturesSync();
  }

  return [];
}

async function isLocationEnabled() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.isLocationEnabled();
  }

  return false;
}

function isLocationEnabledSync() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios' || _reactNative.Platform.OS === 'web') {
    return _nativeInterface.default.isLocationEnabledSync();
  }

  return false;
}

async function isHeadphonesConnected() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios') {
    return _nativeInterface.default.isHeadphonesConnected();
  }

  return false;
}

function isHeadphonesConnectedSync() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios') {
    return _nativeInterface.default.isHeadphonesConnectedSync();
  }

  return false;
}

async function getAvailableLocationProviders() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios') {
    return _nativeInterface.default.getAvailableLocationProviders();
  }

  return {};
}

function getAvailableLocationProvidersSync() {
  if (_reactNative.Platform.OS === 'android' || _reactNative.Platform.OS === 'ios') {
    return _nativeInterface.default.getAvailableLocationProvidersSync();
  }

  return {};
}

async function getDeviceToken() {
  if (_reactNative.Platform.OS === 'ios') {
    return _nativeInterface.default.getDeviceToken();
  }

  return 'unknown';
}

const deviceInfoEmitter = new _reactNative.NativeEventEmitter(_reactNative.NativeModules.RNDeviceInfo);

function useBatteryLevel() {
  const [batteryLevel, setBatteryLevel] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    const setInitialValue = async () => {
      const initialValue = await getBatteryLevel();
      setBatteryLevel(initialValue);
    };

    const onChange = level => {
      setBatteryLevel(level);
    };

    setInitialValue();
    const subscription = deviceInfoEmitter.addListener('RNDeviceInfo_batteryLevelDidChange', onChange);
    return () => subscription.remove();
  }, []);
  return batteryLevel;
}

function useBatteryLevelIsLow() {
  const [batteryLevelIsLow, setBatteryLevelIsLow] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    const setInitialValue = async () => {
      const initialValue = await getBatteryLevel();
      setBatteryLevelIsLow(initialValue);
    };

    const onChange = level => {
      setBatteryLevelIsLow(level);
    };

    setInitialValue();
    const subscription = deviceInfoEmitter.addListener('RNDeviceInfo_batteryLevelIsLow', onChange);
    return () => subscription.remove();
  }, []);
  return batteryLevelIsLow;
}

function usePowerState() {
  const [powerState, setPowerState] = (0, _react.useState)({});
  (0, _react.useEffect)(() => {
    const setInitialValue = async () => {
      const initialValue = await getPowerState();
      setPowerState(initialValue);
    };

    const onChange = state => {
      setPowerState(state);
    };

    setInitialValue();
    const subscription = deviceInfoEmitter.addListener('RNDeviceInfo_powerStateDidChange', onChange);
    return () => subscription.remove();
  }, []);
  return powerState;
}

function useFirstInstallTime() {
  return (0, _asyncHookWrappers.useOnMount)(getFirstInstallTime, -1);
}

function useDeviceName() {
  return (0, _asyncHookWrappers.useOnMount)(getDeviceName, 'unknown');
}

function useHasSystemFeature(feature) {
  const asyncGetter = (0, _react.useCallback)(() => hasSystemFeature(feature), [feature]);
  return (0, _asyncHookWrappers.useOnMount)(asyncGetter, false);
}

function useIsEmulator() {
  return (0, _asyncHookWrappers.useOnMount)(isEmulator, false);
}

const deviceInfoModule = {
  getAndroidId,
  getAndroidIdSync,
  getApiLevel,
  getApiLevelSync,
  getApplicationName,
  getAvailableLocationProviders,
  getAvailableLocationProvidersSync,
  getBaseOs,
  getBaseOsSync,
  getBatteryLevel,
  getBatteryLevelSync,
  getBootloader,
  getBootloaderSync,
  getBrand,
  getBuildId,
  getBuildIdSync,
  getBuildNumber,
  getBundleId,
  getCarrier,
  getCarrierSync,
  getCodename,
  getCodenameSync,
  getDevice,
  getDeviceId,
  getDeviceName,
  getDeviceNameSync,
  getDeviceSync,
  getDeviceToken,
  getDeviceType,
  getDisplay,
  getDisplaySync,
  getFingerprint,
  getFingerprintSync,
  getFirstInstallTime,
  getFirstInstallTimeSync,
  getFontScale,
  getFontScaleSync,
  getFreeDiskStorage,
  getFreeDiskStorageSync,
  getHardware,
  getHardwareSync,
  getHost,
  getHostSync,
  getIncremental,
  getIncrementalSync,
  getInstallerPackageName,
  getInstallerPackageNameSync,
  getInstallReferrer,
  getInstallReferrerSync,
  getInstanceId,
  getInstanceIdSync,
  getIpAddress,
  getIpAddressSync,
  getLastUpdateTime,
  getLastUpdateTimeSync,
  getMacAddress,
  getMacAddressSync,
  getMacAddressEthernet,
  getMacAddressEthernetSync,
  getManufacturer,
  getManufacturerSync,
  getMaxMemory,
  getMaxMemorySync,
  getModel,
  getPhoneNumber,
  getPhoneNumberSync,
  getPowerState,
  getPowerStateSync,
  getPreviewSdkInt,
  getPreviewSdkIntSync,
  getProduct,
  getProductSync,
  getReadableVersion,
  getSecurityPatch,
  getSecurityPatchSync,
  getSerialNumber,
  getSerialNumberSync,
  getSystemAvailableFeatures,
  getSystemAvailableFeaturesSync,
  getSystemName,
  getSystemVersion,
  getTags,
  getTagsSync,
  getTotalDiskCapacity,
  getTotalDiskCapacitySync,
  getTotalMemory,
  getTotalMemorySync,
  getType,
  getTypeSync,
  getUniqueId,
  getUsedMemory,
  getUsedMemorySync,
  getUserAgent,
  getUserAgentSync,
  getVersion,
  hasNotch,
  hasSystemFeature,
  hasSystemFeatureSync,
  isAirplaneMode,
  isAirplaneModeSync,
  isBatteryCharging,
  isBatteryChargingSync,
  isCameraPresent,
  isCameraPresentSync,
  isEmulator,
  isEmulatorSync,
  isHeadphonesConnected,
  isHeadphonesConnectedSync,
  isLandscape,
  isLandscapeSync,
  isLocationEnabled,
  isLocationEnabledSync,
  isPinOrFingerprintSet,
  isPinOrFingerprintSetSync,
  isTablet,
  supported32BitAbis,
  supported32BitAbisSync,
  supported64BitAbis,
  supported64BitAbisSync,
  supportedAbis,
  supportedAbisSync,
  useBatteryLevel,
  useBatteryLevelIsLow,
  useDeviceName,
  useFirstInstallTime,
  useHasSystemFeature,
  useIsEmulator,
  usePowerState
};
var _default = deviceInfoModule;
exports.default = _default;
//# sourceMappingURL=index.js.map