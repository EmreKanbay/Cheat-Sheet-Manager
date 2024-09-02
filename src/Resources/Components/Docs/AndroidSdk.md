### How to Install Android SDK

1. **Install Android Studio**:

   - Download Android Studio from the [official website](https://developer.android.com/studio).
   - Follow the installation instructions for your operating system (Windows, macOS, or Linux).

2. **Set Up Android SDK**:

   - Open Android Studio.
   - Go to **Tools > SDK Manager**.
   - In the **SDK Platforms** tab, select the latest Android version.
   - In the **SDK Tools** tab, check the boxes for **Android SDK Build-Tools**, **Android SDK Platform-Tools**, and **Android SDK Tools**.
   - Click **Apply** to download and install the selected packages.

3. **Set Up Environment Variables (Optional)**:
   - Add the path to the Android SDK to your system's environment variables.
   - For Windows:
     ```bash
     setx ANDROID_HOME "C:\Users\<Your-Username>\AppData\Local\Android\Sdk"
     setx PATH "%PATH%;%ANDROID_HOME%\platform-tools"
     ```
   - For macOS/Linux:
     ```bash
     export ANDROID_HOME=$HOME/Library/Android/sdk
     export PATH=$PATH:$ANDROID_HOME/platform-tools
     ```

### Android SDK Cheat Sheet

#### Project Structure

- **src/**: Contains your Java/Kotlin source files.
- **res/**: Contains your resources like layouts, strings, and images.
- **AndroidManifest.xml**: Describes essential information about your app.

#### Common Commands

- **Build Project**:

  ```bash
  ./gradlew build
  ```

- **Run Project**:

  ```bash
  ./gradlew installDebug
  ```

- **Clean Project**:
  ```bash
  ./gradlew clean
  ```

#### ADB (Android Debug Bridge) Commands

- **List Connected Devices**:

  ```bash
  adb devices
  ```

- **Install APK**:

  ```bash
  adb install path/to/your.apk
  ```

- **Uninstall App**:

  ```bash
  adb uninstall com.example.yourapp
  ```

- **Logcat (View Logs)**:
  ```bash
  adb logcat
  ```

#### Gradle Build Scripts

- **build.gradle (Project Level)**:

  ```groovy
  buildscript {
      repositories {
          google()
          mavenCentral()
      }
      dependencies {
          classpath 'com.android.tools.build:gradle:7.0.0'
      }
  }
  ```

- **build.gradle (App Level)**:

  ```groovy
  plugins {
      id 'com.android.application'
  }

  android {
      compileSdkVersion 30
      defaultConfig {
          applicationId "com.example.yourapp"
          minSdkVersion 21
          targetSdkVersion 30
          versionCode 1
          versionName "1.0"
      }
  }

  dependencies {
      implementation 'androidx.core:core-ktx:1.6.0'
      implementation 'androidx.appcompat:appcompat:1.3.1'
  }
  ```

#### Common XML Elements

- **AndroidManifest.xml**:

  ```xml
  <manifest xmlns:android="http://schemas.android.com/apk/res/android"
      package="com.example.yourapp">

      <application
          android:allowBackup="true"
          android:icon="@mipmap/ic_launcher"
          android:label="@string/app_name"
          android:roundIcon="@mipmap/ic_launcher_round"
          android:supportsRtl="true"
          android:theme="@style/AppTheme">
          <activity android:name=".MainActivity">
              <intent-filter>
                  <action android:name="android.intent.action.MAIN" />
                  <category android:name="android.intent.category.LAUNCHER" />
              </intent-filter>
          </activity>
      </application>

  </manifest>
  ```

- **activity_main.xml**:

  ```xml
  <RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
      xmlns:tools="http://schemas.android.com/tools"
      android:layout_width="match_parent"
      android:layout_height="match_parent"
      tools:context=".MainActivity">

      <TextView
          android:layout_width="wrap_content"
          android:layout_height="wrap_content"
          android:text="Hello, World!" />

  </RelativeLayout>
  ```

#### Useful Links

- [Android Developer Documentation](https://developer.android.com/docs)
- [Android Studio User Guide](https://developer.android.com/studio/intro)
