#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <UserNotifications/UserNotifications.h>

#import <UMCore/UMAppDelegateWrapper.h>

@interface AppDelegate : UMAppDelegateWrapper <UIApplicationDelegate, RCTBridgeDelegate, UNUserNotificationCenterDelegate>

@property(nonatomic, strong) UIWindow *window;
@property(nonatomic, strong) NSDictionary *resp;

@end
