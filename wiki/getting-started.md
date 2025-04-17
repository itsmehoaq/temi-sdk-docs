---
prev: false
next: 
  text: Install/Uninstall app on temi
  link: '/wiki/install-uninstall'
---

# Getting Started
Temi SDK is your way to develop skills for temi that take advantage of your robot's unique abilities! All development for temi is done on Android by creating an android application and importing Temi's SDK. temi V2's tablet runs on Android 6.0.1 (SDK level 23), and temi V3's tablet is running on Android 11 (SDK level 30). Always use the Sample app as a reference.

### Using temi SDK in your project
Prerequisite: [Java JDK](https://adoptium.net/temurin/releases/) (version 21 for best compatibility)

In your Android app project, import the SDK to your `build.gradle` file:

``` java    
dependencies {
   // existing dependencies above
   implementation ("com.robotemi:sdk:1.135.1")
}
```

or Maven:
```xml
<dependency>
  <groupId>com.robotemi</groupId>
  <artifactId>sdk</artifactId>
  <version>1.135.1</version>
</dependency>
```
Upon importing the dependency, you are ready to start using temi SDK by importing functions of your choice.

Example:
```java
import com.robotemi.sdk.Robot;
import com.robotemi.sdk.listeners.OnRobotReadyListener;
import com.robotemi.sdk.navigation.model.Position;
```

Snapshots of the development version are available in [Sonatype's `snapshots` repository](https://oss.sonatype.org/content/repositories/snapshots/).

### Config in Your Application

#### AndroidManifest.xml

All communication betweeen temi OS and your application is linked through the meta-datas included in the AndroidManifest.xml. Below you will see the meta-data that displays your app in temi OS's application selection:

``` xml
<meta-data
    android:name="com.robotemi.sdk.metadata.SKILL"
    android:value="@string/app_name" />
```

#### MainActivity.java

At the start of the MainActivity, you might want to implement specific interfaces based on which types of callbacks you are interested in. For example,

``` java
public class MainActivity extends AppCompatActivity implements
    Robot.NlpListener,
    OnRobotReadyListener,
    Robot.ConversationViewAttachesListener,
    Robot.WakeupWordListener,
    Robot.ActivityStreamPublishListener,
    Robot.TtsListener,
    OnBeWithMeStatusChangedListener,
    OnGoToLocationStatusChangedListener,
    OnLocationsUpdatedListener
```

After doing so, Android Studio will prompt you to implement specific methods.

You will also need to add and remove each listener by doing:

``` java
protected void onStart() {
    super.onStart();
    Robot.getInstance().addOnRobotReadyListener(this);
    Robot.getInstance().addNlpListener(this);
    Robot.getInstance().addOnBeWithMeStatusChangedListener(this);
    Robot.getInstance().addOnGoToLocationStatusChangedListener(this);
    Robot.getInstance().addConversationViewAttachesListenerListener(this);
    Robot.getInstance().addWakeupWordListener(this);
    Robot.getInstance().addTtsListener(this);
    Robot.getInstance().addOnLocationsUpdatedListener(this);
}

protected void onStop() {
    super.onStop();
    Robot.getInstance().removeOnRobotReadyListener(this);
    Robot.getInstance().removeNlpListener(this);
    Robot.getInstance().removeOnBeWithMeStatusChangedListener(this);
    Robot.getInstance().removeOnGoToLocationStatusChangedListener(this);
    Robot.getInstance().removeConversationViewAttachesListenerListener(this);
    Robot.getInstance().removeWakeupWordListener(this);
    Robot.getInstance().removeTtsListener(this);
    Robot.getInstance().removeOnLocationsUpdateListener(this);
}
```

Overriding the onRobotReady method allows your app to be placed as a shortcut in temi's top bar. For example:

``` java
@Override
public void onRobotReady(boolean isReady) {
    if (isReady) {
        try {
            final ActivityInfo activityInfo = getPackageManager().getActivityInfo(getComponentName(), PackageManager.GET_META_DATA);
            robot.onStart(activityInfo);
        } catch (PackageManager.NameNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
}
```