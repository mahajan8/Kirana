export const Environment = {
  development: 'development',
  test: 'test',
  staging: 'staging',
  production: 'production',
};

export const AppConfig = {
  development: {
    // baseUrl: 'http://3.7.13.157/api',
    // mediaBaseUrl: 'https://d3unaxpny5psa2.cloudfront.net/',
    // storageBaseUrl: 'https://d2xqut4m1etz6f.cloudfront.net/',
    // googlePlacesKey: 'AIzaSyDo_1B19MetLFFDeLIt25KsiBCZ0s_rozE',
    // //mediaUrl: 'https://d2xqut4m1etz6f.cloudfront.net/',
    // //cloudFrontUrl: 'https://d2xqut4m1etz6f.cloudfront.net/',
    // senderId: '826426830572',
    // otpLength: 6,
    // otpTimer: 40,
  },

  staging: {
    baseUrl: 'http://15.206.252.200/api/',

    // mediaBaseUrl: 'https://d3unaxpny5psa2.cloudfront.net/',
    storageBaseUrl: 'https://kiranakart-dev.s3.ap-south-1.amazonaws.com/',
    googlePlacesKey: 'AIzaSyDfGkyVsGaqoBQsTAAttQH-p2sDuqHqAmc',
    razorpayKey: 'rzp_test_whorR3ZOEdCg5w',
    // //mediaUrl: 'https://d2xqut4m1etz6f.cloudfront.net/',
    // //cloudFrontUrl: 'https://d2xqut4m1etz6f.cloudfront.net/',
    // senderId: '826426830572',
    // otpLength: 6,
    // otpTimer: 40,
    pubnubPublishKey: 'pub-c-6c6b32d6-708f-4785-8ccb-065b045836d3',
    pubnutSubscribeKey: 'sub-c-db75dc12-5a14-11eb-95c0-3253a07b53cf',
  },
  production: {
    baseUrl: 'https://api.kiranakart.app/api/',
    // mediaBaseUrl: 'https://d3unaxpny5psa2.cloudfront.net/',
    storageBaseUrl: 'https://cdn.kiranakart.app/',
    googlePlacesKey: 'AIzaSyDfGkyVsGaqoBQsTAAttQH-p2sDuqHqAmc',
    razorpayKey: 'rzp_live_m95QnB92XOQmua',
    pubnubPublishKey: 'pub-c-875ecaec-1a56-4d89-9f22-cc156c47bacc',
    pubnutSubscribeKey: 'sub-c-f9275340-5d3d-11eb-8c5b-2e0ea7dd7f9a',
    algoliaShortKey: '2BRKLSMSWI',
    algoliaLongKey: 'fce1b4320fd83ddc7af437',
  },
};
