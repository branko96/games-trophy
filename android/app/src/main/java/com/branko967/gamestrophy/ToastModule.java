package com.branko967.gamestrophy;


import android.widget.Toast;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ToastModule extends ReactContextBaseJavaModule {
  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  public ToastModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "ToastModule";
  }

  @ReactMethod
  public void show(String message, String duration) {
    int durationValue = Toast.LENGTH_SHORT;

    if (DURATION_LONG_KEY.equals(duration)) {
      durationValue = Toast.LENGTH_LONG;
    }

    Toast.makeText(getReactApplicationContext(), message, durationValue).show();
  }
}

