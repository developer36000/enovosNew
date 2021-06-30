import device from 'current-device';
export class DeviceHelper {
  static getDevice() {
    return device.type;
  }
  static getDeviceClass(className) {
    return `${className}--${device.type}`;
  }
}
