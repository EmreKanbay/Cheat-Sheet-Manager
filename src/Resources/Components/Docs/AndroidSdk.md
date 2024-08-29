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
     setx ANDROID_HOME &quot;C:\Users\<Your-Username>\AppData\Local\Android\Sdk&quot;
     setx PATH &quot;%PATH%;%ANDROID_HOME%\platform-tools&quot;
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
          applicationId &quot;com.example.yourapp&quot;
          minSdkVersion 21
          targetSdkVersion 30
          versionCode 1
          versionName &quot;1.0&quot;
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
  <manifest xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
      package=&quot;com.example.yourapp&quot;>

      <application
          android:allowBackup=&quot;true&quot;
          android:icon=&quot;@mipmap/ic_launcher&quot;
          android:label=&quot;@string/app_name&quot;
          android:roundIcon=&quot;@mipmap/ic_launcher_round&quot;
          android:supportsRtl=&quot;true&quot;
          android:theme=&quot;@style/AppTheme&quot;>
          <activity android:name=&quot;.MainActivity&quot;>
              <intent-filter>
                  <action android:name=&quot;android.intent.action.MAIN&quot; />
                  <category android:name=&quot;android.intent.category.LAUNCHER&quot; />
              </intent-filter>
          </activity>
      </application>

  </manifest>
  ```

- **activity_main.xml**:

  ```xml
  <RelativeLayout xmlns:android=&quot;http://schemas.android.com/apk/res/android&quot;
      xmlns:tools=&quot;http://schemas.android.com/tools&quot;
      android:layout_width=&quot;match_parent&quot;
      android:layout_height=&quot;match_parent&quot;
      tools:context=&quot;.MainActivity&quot;>

      <TextView
          android:layout_width=&quot;wrap_content&quot;
          android:layout_height=&quot;wrap_content&quot;
          android:text=&quot;Hello, World!&quot; />

  </RelativeLayout>
  ```

#### Useful Links

- [Android Developer Documentation](https://developer.android.com/docs)
- [Android Studio User Guide](https://developer.android.com/studio/intro)
