---
prev:
   text: Install/Uninstall On Temi
   link: 'install-uninstall'
next:
   text: Follow
   link: 'follow'
---

## Static Methods

| Return | Method        |
|--------|---------------|
| Robot  | getInstance() |

## Public Member Methods

| Return                                            | Method                                                                                                            |
|---------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| void                                              | [askQuestion(String question)](speech#askquestion)                                                                |
| void                                              | [beWithMe()](follow#bewithme)                                                                                     |
| void                                              | [cancelAllTtsRequests()](speech#cancelallttsRequests)                                                             |
| int                                               | [checkSelfPermission(Permission permission)](permission#checkselfpermission)                                      |
| void                                              | [constraintBeWith()](follow#constraintbewith)                                                                     |
| boolean                                           | [deletelocation(String location)](location#deletelocation)                                                        |
| void                                              | [finishConversation()](speech#finishconversation)                                                                 |
| [UserInfo](usersAndTelepresence#userinfo)         | [getAdminInfo()](usersAndTelepresence#getadmininfo)                                                               |
| List\<[UserInfo](usersAndTelepresence#userinfo)\> | [getAllContact()](usersAndTelepresence#getallContact)                                                             |
| List\<[SequenceModel](temiCenter#sequencemodel)\> | [getAllSequences()](temiCenter#getallsequences)                                                                   |
| [Battery](utils#batterydata)                      | [getBatteryData()](utils#getbatterydata)                                                                          |
| [SpeedLevel](utils#speedlevel)                    | [getGoToSpeed()](utils#getgotospeed)                                                                              |
| InputStream                                       | [getInputStreamByMediaKey(ContentType contentType, String mediaKey)](temiCenter#getinputstreambymediakey)         |
| String                                            | [getLauncherVersion()](utils#getlauncherversion)                                                                  |
| List\<String\>                                    | [getlocation()](location#getlocations)                                                                            |
| [MapData](location#mapdatamodel)                  | [getMapData()](location#getmapdata)                                                                               |
| [SafetyLevel](utils#safetylevel)                  | [getNavigationSafety()](utils#setnavigationsafety)                                                                |
| boolean                                           | [getPrivacyMode()](utils#getprivacymode)                                                                          |
| List\<RecentCallModel\>                           | [getRecentCalls()](usersAndTelepresence#getrecentcalls)                                                           |
| String                                            | [getRoboxVersion()](utils#getroboxversion)                                                                        |
| String                                            | [getSerialNumber()](utils#getserialnumber)                                                                        |
| int                                               | [getVolume()](utils#getvolume)                                                                                    |
| String                                            | [getWakeupWord()](speech#getwakeupword)                                                                           |
| void                                              | [hideTopBar()](utils#hidetopbar)                                                                                  |
| boolean                                           | [isAutoReturnOn()](utils#isautoReturnOn)                                                                          |
| boolean                                           | [isDetectionModeOn()](detectionAndInteraction#isdetectionmodeon)                                                  |
| boolean                                           | [isHardButtonsDisabled()](utils#isHardButtonsDisabled)                                                            |
| boolean                                           | [isNavigationBillboardDisabled()](utils#isNavigationBillboardDisabled)                                            |
| boolean                                           | isReady()                                                                                                         |
| boolean                                           | [isSelectedKioskApp()](kioskMode#isselectedkioskapp)                                                              |
| boolean                                           | [isTopBadgeEnabled()](utils#istopbadgeenabled)                                                                    |
| boolean                                           | [isWakeupDisabled()](utils#iswakeupdisabled)                                                                      |
| void                                              | [playSequence(String sequenceId)](temiCenter#playsequence)                                                        |
| void                                              | [repose()](location#repose)                                                                                       |
| void                                              | [requestPermissions(List\<Permission\> permissions, int requestCode)](permission#requestpermissions)              |
| void                                              | [requestToBeKioskApp()](kioskMode#requesttobekioskapp)                                                            |
| void                                              | [restart()](utils#restart)                                                                                        |
| void                                              | [savelocation(String location)](location#savelocation)                                                            |
| void                                              | [setAutoReturn(boolean on)](utils#setautoreturnon)                                                                |
| void                                              | [setDetectionModeOn(boolean on)](detectionAndInteraction#setdetectionmodeon)                                      |
| void                                              | [setDetectionModeOn(boolean on, float distance)](detectionAndInteraction#setdetectionmodeonwithdistance)          |
| void                                              | [setGoToSpeed(SpeedLevel level)](utils#setgotospeed)                                                              |
| void                                              | [setHardButtonsDisabled(boolean disabled)](utils#sethardbuttonsdisabled)                                          |
| void                                              | [setNavigationSafety(SafetyLevel level)](utils#setnavigationsafety)                                               |
| void                                              | [setPrivacyMode(boolean on)](utils#setprivacymode)                                                                |
| void                                              | [setTopBadgeEnabled(boolean enabled)](utils#settopbadgeenabled)                                                   |
| void                                              | [setVolume(int volume)](utils#setvolume)                                                                          |
| void                                              | [showAppList()](utils#showapplist)                                                                                |
| void                                              | [showTopBar()](utils#showtopbar)                                                                                  |
| void                                              | [skidJoy(float x, float y)](movement#skidjoy)                                                                     |
| void                                              | [speak(TtsRequest ttsRequest)](speech#speak)                                                                      |
| void                                              | [startDefaultNlu(String text)](speech#startdefaultnlu)                                                            |
| void                                              | [startFaceRecognition()](temiCenter#startfacerecognition)                                                         |
| void                                              | [startTelepresence(String displayName, String peerId, Platform platform)](usersAndTelepresence#starttelepresence) |
| void                                              | [stopFaceRecognition()](temiCenter#stopfacerecognition)                                                           |
| void                                              | [stopmovement()](movement#stopmovement)                                                                           |
| void                                              | [tiltAngle(int degrees)](movement#tiltangle)                                                                      |
| void                                              | [tiltBy(int degrees)](movement#tiltby)                                                                            |
| void                                              | [toggleNavigationBillboard(boolean disabled)](utils#togglenavigationbillboard)                                    |
| void                                              | [toggleWakeup(boolean disabled)](utils#togglewakeup)                                                              |
| void                                              | [turnBy(int degrees)](movement#turnby)                                                                            |
| void                                              | [wakeup()](speech#wakeup)                                                                                         |

### Return value
Please note that if no return value is mention, the method used does not return any value.