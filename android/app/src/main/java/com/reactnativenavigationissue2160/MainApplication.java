package com.reactnativenavigationissue2160;

import com.facebook.react.ReactPackage;
import com.inprogress.reactnativeyoutube.ReactNativeYouTube;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {
   @Override
   public boolean isDebug() {
       // Make sure you are using BuildConfig from your own application
       return BuildConfig.DEBUG;
   }

   protected List<ReactPackage> getPackages() {
       // Add additional packages you require here
       // No need to add RnnPackage and MainReactPackage
       return Arrays.<ReactPackage>asList(
           new ReactNativeYouTube()
       );
   }

   @Override
   public List<ReactPackage> createAdditionalReactPackages() {
       return getPackages();
   }
}
