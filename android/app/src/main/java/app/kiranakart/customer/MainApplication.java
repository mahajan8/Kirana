package app.kiranakart.customer;
import app.kiranakart.customer.generated.BasePackageList;

import android.app.Application;
import android.content.Context;
import android.util.Log;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Arrays;
import java.util.Map;
 
import android.os.Handler;
import android.os.Looper;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import org.json.JSONObject;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.clevertap.android.sdk.ActivityLifecycleCallback;
import com.clevertap.android.sdk.CleverTapAPI;
import com.clevertap.android.sdk.pushnotification.CTPushNotificationListener;
import org.unimodules.adapters.react.ModuleRegistryAdapter;
import org.unimodules.adapters.react.ReactModuleRegistryProvider;
import org.unimodules.core.interfaces.SingletonModule;
import android.net.Uri;
import expo.modules.updates.UpdatesController;
import javax.annotation.Nullable;

public class MainApplication extends Application implements ReactApplication,CTPushNotificationListener {
  private final ReactModuleRegistryProvider mModuleRegistryProvider = new ReactModuleRegistryProvider(new BasePackageList().getPackageList(), null);

  private static final String REACT_MODULE_NAME = "CleverTapReact";
  private static final String TAG = REACT_MODULE_NAME;

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          
          // Add unimodules
          List<ReactPackage> unimodules = Arrays.<ReactPackage>asList(
            new ModuleRegistryAdapter(mModuleRegistryProvider)
          );
          packages.addAll(unimodules);

          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

        @Override
        protected @Nullable String getJSBundleFile() {
          if (BuildConfig.DEBUG) {
            return super.getJSBundleFile();
          } else {
            return UpdatesController.getInstance().getLaunchAssetFile();
          }
        }
 
        @Override
        protected @Nullable String getBundleAssetName() {
          if (BuildConfig.DEBUG) {
            return super.getBundleAssetName();
          } else {
            return UpdatesController.getInstance().getBundleAssetName();
          }
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    // Register the CleverTap ActivityLifecycleCallback; before calling super
    ActivityLifecycleCallback.register(this);	
    super.onCreate();
    CleverTapAPI cleverTapAPI = CleverTapAPI.getDefaultInstance(getApplicationContext());
    cleverTapAPI.setDebugLevel(3);
    cleverTapAPI.setCTPushNotificationListener(this);
    SoLoader.init(this, /* native exopackage */ false);
     if (!BuildConfig.DEBUG) {
      UpdatesController.initialize(this);
    }
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("app.kiranakart.customer.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
  @Override
  public void onNotificationClickedPayloadReceived(HashMap<String, Object> payload) {
      Log.e("MainApplication", "onNotificationClickedPayloadReceived called");
      final String CLEVERTAP_PUSH_NOTIFICATION_CLICKED = "CleverTapPushNotificationClicked";
      Handler handler = new Handler(Looper.getMainLooper());
      handler.post(new Runnable() {
          public void run() {
              // Construct and load our normal React JS code bundle
              final ReactInstanceManager mReactInstanceManager =((ReactApplication) getApplicationContext()).getReactNativeHost().getReactInstanceManager();
              ReactContext context = mReactInstanceManager.getCurrentReactContext();
              // If it’s constructed, send a notification
              if (context != null) {
                  sendEvent(CLEVERTAP_PUSH_NOTIFICATION_CLICKED ,getWritableMapFromMap(payload),context);
              } else {
                  // Otherwise wait for construction, then send the notification
                  mReactInstanceManager.addReactInstanceEventListener(
                          new ReactInstanceManager.ReactInstanceEventListener() {
                              public void onReactContextInitialized(ReactContext context) {
                                  sendEvent(CLEVERTAP_PUSH_NOTIFICATION_CLICKED, getWritableMapFromMap(payload),context);
                                  mReactInstanceManager.removeReactInstanceEventListener(this);
                              }
                          });
                  if (!mReactInstanceManager.hasStartedCreatingInitialContext()) {
                      // Construct it in the background
                      mReactInstanceManager.createReactContextInBackground();
                  }
              }
          }
      });
  }

  private void sendEvent(String eventName, Object params,ReactContext context) {
      try {
          context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
      } catch (Throwable t) {
          Log.e(TAG, t.getLocalizedMessage());
      }
  }

  private WritableMap getWritableMapFromMap(Map<String, ? extends Object> var1) {
      JSONObject extras = var1 != null ? new JSONObject(var1) : new JSONObject();
      WritableMap extrasParams = Arguments.createMap();
      Iterator extrasKeys = extras.keys();
      while (extrasKeys.hasNext()) {
          String key = null;
          String value = null;
          try {
              key = extrasKeys.next().toString();
              value = extras.get(key).toString();
          } catch (Throwable t) {
              Log.e(TAG, t.getLocalizedMessage());
          }

          if (key != null && value != null) {
              extrasParams.putString(key, value);
          }
      }
      return extrasParams;
  }
}
