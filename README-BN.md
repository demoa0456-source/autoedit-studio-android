# AutoEdit Studio — Android APK Builder

এই প্যাকেজটি AutoEdit Studio ওয়েব অ্যাপকে Android APK হিসেবে ক্লাউডে বিল্ড করার প্রাথমিক প্রকল্প।

**এটি APK ফাইল নয়**—এটি APK তৈরির সোর্স/বিল্ড প্রকল্প। GitHub Actions দিয়ে ক্লাউডে APK তৈরি করতে হবে।

## Android ফোন থেকে APK তৈরির ধাপ
1. ZIP ফাইলটি Extract করুন।
2. GitHub-এ একটি নতুন repository তৈরি করুন।
3. এই ফোল্ডারের সব ফাইল repository-তে upload করুন।
4. repository-র **Actions** ট্যাব খুলুন।
5. `Build Android APK` workflow সম্পন্ন হওয়া পর্যন্ত অপেক্ষা করুন।
6. workflow run-এর **Artifacts** থেকে `AutoEditStudio-debug-apk` ডাউনলোড করুন।
7. ZIP extract করে `app-debug.apk` ইনস্টল করুন। Android চাইলে “Install unknown apps” অনুমতি দিন।

## সীমাবদ্ধতা
- এটি অনলাইন ওয়েব অ্যাপকে Android WebView-তে খুলবে; ইন্টারনেট লাগবে।
- এটি পরীক্ষামূলক debug APK, Play Store release signing নয়।
- APK বানালেই নতুন নেটিভ ফিচার যুক্ত হয় না। অফলাইন এডিটিং, MP4 encoding, AI voice generation ও automatic editing আলাদাভাবে তৈরি করতে হবে।
- যদি ওয়েব অ্যাপের URL বা অ্যাক্সেস অনুমতি বদলায়, `capacitor.config.ts`-এ URL আপডেট করতে হবে।
