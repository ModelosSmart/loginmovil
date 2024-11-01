import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.app',
  appPath: 'src',
  appResourcesPath: '../../tools/assets/App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    minSdkVersion: 21,
    maxSdkVersion: 33,
    requiresSmallestWidthDp: 320,
    // Add configurations to reduce APK size
    aot: true,
    buildTypes: {
      release: {
        optimization: {
          shrinkResources: true,
          minify: true
        }
      }
    }
  }
} as NativeScriptConfig;