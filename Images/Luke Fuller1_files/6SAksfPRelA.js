if (self.CavalryLogger) { CavalryLogger.start_js(["p\/A9W"]); }

__d("PrivacyConst",[],(function(a,b,c,d,e,f){e.exports={BaseValue:{FRIEND_LIST:129,FRIENDS_PLUS_GAMER_FRIENDS:128,FRIENDS_MINUS_ACQUAINTANCES:127,FACEBOOK_EMPLOYEES:112,CUSTOM:111,EVERYONE:80,NETWORKS_FRIENDS_OF_FRIENDS:60,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SELF:10,NOBODY:0},CustomPrivacyTokens:{FRIENDS:247124075410460,FRIENDS_OF_FRIENDS:498125493540100},FriendsValue:{EVERYONE:80,NETWORKS_FRIENDS:55,FRIENDS_OF_FRIENDS:50,ALL_FRIENDS:40,SOME_FRIENDS:30,SELF:10,NO_FRIENDS:0},PostParam:{EVERYONE:300645083384735,NETWORKS_FRIENDS:123780391104836,FRIENDS_OF_FRIENDS:275425949243301,FRIENDS:291667064279714,FRIENDS_MINUS_ACQUAINTANCES:284920934947802,ONLY_ME:286958161406148,FB_ONLY:411331705596297,EVENT_PUBLIC:1493271774218406,EVENT_INVITE_ONLY:599950423437029},PrivacyField:{CURRENT_COMPOSER:8787670733,DEFAULT_COMPOSER:875106179167765,TIMELINE_TAGGED_CONTENT_VISIBILITY:8787530733,WALL_POSTS:8787370733,TAG_EXPANDED_CONTENT:8787795733,SEARCH_BY_PHONE:8787815733,SEARCH_BY_EMAIL:8787820733,CAN_FRIEND:8787540733,DEPRECATED_APP_DEFAULT:8787700733,SEARCH_BY_NAME:8787755733,SEARCH_BY_CONTACT_INFO:8787760733,SCREENNAME:8787335733,CURRENT_ADDRESS:8787355733,FRIENDS:8787365733,WEBSITE:8787375733,STATUS_UPDATES:8787395733,BIRTHDAY:8787510733,BIRTHYEAR:8787805733,CAN_COMMENT:8787535733,RELATIONSHIPS:8787550733,PROFILE_PICTURE_ALBUM:8787565733,DASHBOARD_ACTIVITY:8787575733,FAMILY:8787585733,INTERESTED_IN_LOOKING_FOR:8787590733,PLACES:8787620733,NAME_DAY:8787810733,LANGUAGES:8787625733,QUOTATIONS:8787630733,ABOUT_ME:8787635733,POLITICAL:8787640733,RELIGIOUS:8787645733,CURRENT_CITY:8787650733,HOMETOWN:8787655733,PROFILE_LIKES_AND_INTERESTS:8787660733,BLURB:8787665733,OTHER_LIKES_AND_INTERESTS:8787680733,SUBSCRIBERS:8787690733,SUBSCRIBED_TO:8787695733,PERSONAL_CONTACT_DEFAULT:8787765733,PAGE_CONTACT_DEFAULT:8787770733,AUTO_GENERATED_FB_EMAIL:8787775733,SKILLS:8787780733,CUSTOM_GENDERS:237760973066217,LOCATION_DO_NOT_WRITE_DIRECTLY:8787785733,SOCIAL_ADS:7719929599,PLATFORM_ADS:126540474531,BASS_ADS:183468681673909,ACTIVITIES:144331422306930,INTERESTS:113693108715766,MUSIC:172372399483077,BOOKS:100725463352700,GAMES:199298603444535,MOVIES:201146206594049,TV_SHOWS:129665560441221,SPORTS_PLAYED:129991670408857,FAVORITE_TEAMS:225288534151802,FAVORITE_ATHLETES:203380763033334,PEOPLE_I_ADMIRE:210380795648667,FAVORITE_FOODS:585935528106425,FAVORITE_RESTAURANTS:172588449584647,FAVORITE_WEBSITES:180412195459106,CLOTHING_BRANDS:397391233714082,LAST_POST_PRIVACY:314763985364212,SECOND_TO_LAST_POST_PRIVACY:321179124722698,PREVIOUS_SECONDARY_COMPOSER:864562253561430,RECENT_COMPOSER:358304524327898,COMPOSER_CUSTOM_INCLUSION:1067668039947624,COMPOSER_CUSTOM_EXCLUSION:1082068668536535,CAN_LIKE_AND_COMMENT_PUBLIC_PROFILE_MEDIA:1269423589794183,CAN_TAG_PUBLIC_PROFILE_MEDIA:260920744319731,CAN_DOWNLOAD_PUBLIC_PROFILE_MEDIA:410249702663051,CAN_SHARE_PUBLIC_PROFILE_MEDIA:1648969422065270,NOW_COMPOSER:421290164697736,BACKSTAGE_PRIVACY:809506612451171,FACEREC_ENROLLMENT:1709697052669794,DEVICE_PHOTO_PROCESSING:1798505450455620,SPACES_VR_OFFLINE_VISIT_PRIVACY:351913698615451,RESHARES_ON_TIMELINE_VISIBILITY:230094651068076,CAN_POST_TRIBUTES:298481070877996,CAN_SEE_TRIBUTE_POSTS:1909416226028186,RESHARE_TO_STORIES:282421212606762},TagExpansion:{NONE:0,TAGGEES:1,FRIENDS_OF_TAGGEES:2,FRIENDS_TAGGED:6},ExpansionType:{NONE:0,TAGS_ONLY:1}}}),null);
__d("CircularProgressBar.react",["cx","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"CircularProgressBar",propTypes:{animate:a.bool,percentComplete:a.number.isRequired,text:a.string},render:function(){var a=this.props,c=a.animate,d=a.text;a=a.percentComplete;var e=360*a/100,f=Math.max(e,180)-180;e=Math.min(e,180);a=a<100?"1":"0";return b("React").createElement("div",{className:"_1_bj",style:{opacity:a}},!!d&&b("React").createElement("div",{className:"_22sa"},d),b("React").createElement("div",{className:"_1_bk"},b("React").createElement("div",{className:c?"_22sb":""},b("React").createElement("div",{className:"_1_bl",style:{opacity:a}}),b("React").createElement("div",{className:"_1_bp _1_bq"},b("React").createElement("div",{className:"_1_br",style:{transform:"translateX(-100%) rotate("+f+"deg)",opacity:a}})),b("React").createElement("div",{className:"_1_bs _1_bq"},b("React").createElement("div",{className:"_1_br",style:{transform:"translateX(-100%) rotate("+e+"deg)",opacity:a}})))))}});e.exports=c}),null);
__d("TextDelightInComposerGating",["TextDelightConfig","TextDelightSurface","gkx"],(function(a,b,c,d,e,f){"use strict";var g=b("TextDelightConfig").composerOptions;a={checkGKForSurface:function(a){return a===b("TextDelightSurface").POST?b("gkx")("678313"):b("gkx")("678314")},isEnabled:function(a){return this.checkGKForSurface(a)&&g.enabled},isHighlightEnabled:function(a){return this.checkGKForSurface(a)&&g.enabled&&g.highlightEnabled},isBackspaceEnabled:function(a){return this.checkGKForSurface(a)&&g.enabled&&g.backspaceEnabled},isXbuttonEnabled:function(a){return this.checkGKForSurface(a)&&g.enabled&&g.xbuttonEnabled}};e.exports=a}),null);
__d("TextDelightInComposerLogger",["FunnelLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="TEXT_DELIGHTS_COMPOSER_FUNNEL",h="regex_matched",i="opt_out_tapped",j="opt_out_backspace",k="range_tapped";function l(a){var b=0;for(var c=0;c<a.length;c++)b=(b<<5)-b+a.charCodeAt(c),b&=b;return b}a={startFunnelInstance:function(a,c){a=l(a);if(b("FunnelLogger").getFunnelInstance(g,a))return;b("FunnelLogger").startFunnel(g,a);b("FunnelLogger").addFunnelTag(g,a,c)},_appendAction:function(a,c,d,e,f){this.startFunnelInstance(a,f),b("FunnelLogger").appendActionWithPayload(g,l(a),c,{campaign_id:d,keyword:e})},regexMatched:function(a,b,c,d){this._appendAction(a,h,b,c,d)},optOutTapped:function(a,b,c,d){this._appendAction(a,i,b,c,d)},optOutBackspace:function(a,b,c,d){this._appendAction(a,j,b,c,d)},rangeTapped:function(a,b,c,d){this._appendAction(a,k,b,c,d)},endFunnel:function(a){b("FunnelLogger").endFunnel(g,l(a))}};e.exports=a}),null);
__d("DOMClone",[],(function(a,b,c,d,e,f){a={shallowClone:function(a){return g(a,!1)},deepClone:function(a){return g(a,!0)}};function g(a,b){a=a.cloneNode(b);typeof a.__FB_TOKEN!=="undefined"&&delete a.__FB_TOKEN;typeof a.__FB_STORE!=="undefined"&&delete a.__FB_STORE;return a}e.exports=a}),null);
__d("ErrorDialog",["Dialog","emptyFunction"],(function(a,b,c,d,e,f){var g={showAsyncError:function(a){try{return g.show(a.getErrorSummary(),a.getErrorDescription())}catch(b){alert(a)}},show:function(a,c,d,e){return new(b("Dialog"))().setTitle(a).setBody(c).setButtons([b("Dialog").OK]).setStackable(!0).setModal(!0).setHandler(d||b("emptyFunction")).setButtonsMessage(e||"").show()}};e.exports=g}),null);
__d("FileInput",["cx","ArbiterMixin","DOM","DOMClone","Event","Focus","Keys","UserAgent_DEPRECATED","mixin"],(function(a,b,c,d,e,f,g){__p&&__p();var h,i=b("UserAgent_DEPRECATED").ie();c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));h=c&&c.prototype;function a(a,c,d){"use strict";__p&&__p();h.constructor.call(this);this.container=a;this.control=c;a=b("DOM").scry(this.container,"a")[0];a&&a.removeAttribute("href");c=b("DOM").create("div",{className:"_3jk"},d);b("DOM").appendContent(this.control,c);this._boundHandleChange=this._handleChange.bind(this);i&&(this._boundHandleIEKeyDown=this._handleIEKeyDown.bind(this));this._setInputElement(d)}a.prototype.getValue=function(){"use strict";return this.input.value};a.prototype.getInput=function(){"use strict";return this.input};a.prototype.getContainer=function(){"use strict";return this.container};a.prototype.getControl=function(){"use strict";return this.control};a.prototype.clear=function(){"use strict";this.input.value="";if(this.input.value!==""){var a=b("DOMClone").deepClone(this.input);b("DOM").replace(this.input,a);this._setInputElement(a)}};a.prototype.destroy=function(){"use strict";this._focus.remove(),this._focus=null,this._listener.remove(),this._listener=null,i&&(this._IEKeyDownListener.remove(),this._IEKeyDownListener=null),this.container=null,this.control=null,this.input=null};a.prototype._setInputElement=function(a){"use strict";this.input=a,this._focus&&this._focus.remove(),this._focus=b("Focus").relocate(a,this.control),this._listener&&this._listener.remove(),this._listener=b("Event").listen(a,"change",this._boundHandleChange),i&&(this._IEKeyDownListener&&this._IEKeyDownListener.remove(),this._IEKeyDownListener=b("Event").listen(a,"keydown",this._boundHandleIEKeyDown))};a.prototype._handleChange=function(event){"use strict";this.inform("change",event);if(this.input){var a=this.input.form;a&&i<9&&b("Event").fire(a,"change",event)}};a.prototype._handleIEKeyDown=function(event){"use strict";if(event.keyCode===b("Keys").RETURN){event.preventDefault();var a=document.createEvent("MouseEvents");a.initEvent("click",!0,!0);this.input.dispatchEvent(a)}};e.exports=a}),null);
__d("PhotosUploadWaterfallMixin",["PhotosUploadWaterfall","emptyFunction"],(function(a,b,c,d,e,f){a=b("emptyFunction");c={getUploaderApp:a,getWaterfallID:a,getAdditionalData:function(){return{}},logWaterfallStep:function(a,c,d){b("PhotosUploadWaterfall").sendSignal(babelHelpers["extends"]({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:a,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),c),d)},logWaterfallStepUsingBanzai:function(a,c,d){b("PhotosUploadWaterfall").sendBanzai(babelHelpers["extends"]({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:a,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),c),d)}};e.exports=c}),null);
__d("PhotoSourceTypes",["keyMirror"],(function(a,b,c,d,e,f){e.exports=b("keyMirror")({COMPUTER:null,POSTED_PHOTOS:null,SYNCED_PHOTOS:null,SUGGESTIONS:null,PAGES_POSTED_PHOTOS:null})}),null);
__d("BaseSelectionContainer",[],(function(a,b,c,d,e,f){__p&&__p();var g=0;function a(){"use strict";this.$1=(g++).toString()}a.prototype.getSelectionContainerID=function(){"use strict";return this.$1};a.prototype.getSource=function(){"use strict";throw new Error("This must be implemented by the child class")};a.prototype.getName=function(){"use strict";return null};a.prototype.getSize=function(){"use strict";return null};a.prototype.hasPlaceholderUI=function(){"use strict";throw new Error("This must be implemented by the child class")};e.exports=a}),null);
__d("SelectionSource",["PhotoSourceTypes"],(function(a,b,c,d,e,f){var g={FILE:"file",FLASH:"flash",VAULT:"vault",SUGGESTIONS:"suggestions",POSTED_PHOTOS:"posted_photos",PAGES_POSTED_PHOTOS:"pages_posted_photos",toPhotoSourceType:function(a){switch(a){case g.FILE:case g.FLASH:return b("PhotoSourceTypes").COMPUTER;case g.VAULT:return b("PhotoSourceTypes").SYNCED_PHOTOS;case g.SUGGESTIONS:return b("PhotoSourceTypes").SUGGESTIONS;case g.POSTED_PHOTOS:return b("PhotoSourceTypes").POSTED_PHOTOS;case g.PAGES_POSTED_PHOTOS:return b("PhotoSourceTypes").PAGES_POSTED_PHOTOS;default:throw new Error("No mapping for SelectionSource: "+a)}}};e.exports=g}),null);
__d("FileSelectionContainer",["BaseSelectionContainer","SelectionSource"],(function(a,b,c,d,e,f){__p&&__p();var g;c=babelHelpers.inherits(a,b("BaseSelectionContainer"));g=c&&c.prototype;function a(a){"use strict";g.constructor.call(this),this.$FileSelectionContainer1=a}a.prototype.getFile=function(){"use strict";return this.$FileSelectionContainer1};a.prototype.getSource=function(){"use strict";return b("SelectionSource").FILE};a.prototype.getName=function(){"use strict";return this.$FileSelectionContainer1.fileName||this.$FileSelectionContainer1.name};a.prototype.getSize=function(){"use strict";return this.$FileSelectionContainer1.fileSize||this.$FileSelectionContainer1.size};a.prototype.hasPlaceholderUI=function(){"use strict";return!1};e.exports=a}),null);
__d("FilePickerEvent",[],(function(a,b,c,d,e,f){e.exports={BEGIN:"FilePickerEvent/BEGIN",SELECT_START:"FilePickerEvent/SELECT_START",SELECTED:"FilePickerEvent/SELECTED_FILES",ALBUM_LIMIT_EXCEEDED:"FilePickerEvent/ALBUM_LIMIT_EXCEEDED",SESSION_LIMIT_EXCEEDED:"FilePickerEvent/SESSION_LIMIT_EXCEEDED",SELECT_CANCELED:"FilePickerEvent/SELECT_CANCELED",FALLBACK:"FilePickerEvent/FALLBACK"}}),null);
__d("PUWApplications",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({WEB_SIMPLE:"web_simple",WEB_FLASH:"web_flash",WEB_HTML5:"web_html5",WEB_COMPOSER:"web_composer",WEB_ARCHIVE:"web_archive",WEB_MESSENGER:"web_messenger",WEB_OMNIPICKER:"web_omnipicker",WEB_MUSE_OMNIPICKER:"web_muse_omnipicker",WEB_SAY_THANKS:"web_say_thanks",WEB_GOODWILL_CAMPAIGN_OMNIPICKER:"web_goodwill_campaign_omnipicker",WEB_PRODUCT_PHOTO_OMNIPICKER:"web_product_photo_omnipicker",WEB_PAGES_MESSENGER:"web_pages_messenger",WEB_M_ZERO:"web_m_zero",WEB_M_BASIC:"web_m_basic",WEB_M_TOUCH:"web_m_touch",WEB_REACT_COMPOSER:"web_react_composer",MOBILE_FB4IOS:"mobile_fb4ios",MOBILE_FB4IOS_SNAP:"mobile_fb4ios_snap",MOBILE_FB4A:"mobile_fb4a",MOBILE_PMA_ANDROID:"mobile_pma_android",MOBILE_PMA_IOS:"mobile_pma_ios",THIRD_PARTY:"third_party"})}),null);
__d("PUWSteps",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CLIENT_FLOW_BEGIN:"client_flow_begin",CLIENT_SELECT_BEGIN:"client_select_begin",CLIENT_SELECT_SUCCESS:"client_select_success",CLIENT_SELECT_CANCEL:"client_select_cancel",CLIENT_SELECT_FAIL:"client_select_fail",CLIENT_FLOW_POST:"client_flow_post",CLIENT_TRANSFER_BATCH_BEGIN:"client_transfer_batch_begin",CLIENT_UPLOAD_BEGIN:"client_upload_begin",CLIENT_ATTACH_PHOTO:"client_attach_photo",CLIENT_PROCESS_BEGIN:"client_process_begin",CLIENT_PROCESS_SUCCESS:"client_process_success",CLIENT_PROCESS_CANCEL:"client_process_cancel",CLIENT_PROCESS_SKIP:"client_process_skip",CLIENT_PROCESS_FAIL:"client_process_fail",CLIENT_PROCESS_UNAVAILABLE:"client_process_unavailable",CLIENT_SPHERICAL_CHECK_SUCCESS:"client_spherical_check_success",CLIENT_SPHERICAL_CHECK_FAIL:"client_spherical_check_fail",CLIENT_TRANSFER_ENQUEUE:"client_transfer_enqueue",CLIENT_TRANSFER_BEGIN:"client_transfer_begin",CLIENT_TRANSFER_SUCCESS:"client_transfer_success",CLIENT_TRANSFER_CANCEL:"client_transfer_cancel",CLIENT_TRANSFER_FAIL:"client_transfer_fail",CLIENT_TRANSFER_MANUAL_RETRY:"client_transfer_manual_retry",CLIENT_UPLOAD_SUCCESS:"client_upload_success",CLIENT_UPLOAD_FAIL:"client_upload_fail",CLIENT_UPLOAD_CANCEL:"client_upload_cancel",CLIENT_UPLOAD_REMOVE:"client_upload_remove",CLIENT_FACEREC_BEGIN:"client_facerec_begin",CLIENT_FACEREC_SUCCESS:"client_facerec_success",CLIENT_FACEREC_FAIL:"client_facerec_fail",CLIENT_PHOTO_PREVIEW_OPEN:"client_photo_preview_open",CLIENT_PHOTO_PREVIEW_CLOSE:"client_photo_preview_close",CLIENT_TRANSFER_BATCH_SUCCESS:"client_transfer_batch_success",CLIENT_TRANSFER_BATCH_CANCEL:"client_transfer_batch_cancel",CLIENT_TRANSFER_BATCH_FAIL:"client_transfer_batch_fail",CLIENT_PUBLISH_ENQUEUE:"client_publish_enqueue",CLIENT_PUBLISH_BEGIN:"client_publish_begin",CLIENT_PUBLISH_SUCCESS:"client_publish_success",CLIENT_PUBLISH_FAIL:"client_publish_fail",CLIENT_ATTEMPT_FAIL:"client_attempt_fail",CLIENT_FLOW_SUCCESS:"client_flow_success",CLIENT_FLOW_FATAL:"client_flow_fatal",CLIENT_FLOW_GIVEUP:"client_flow_giveup",CLIENT_FLOW_CANCEL:"client_flow_cancel",CLIENT_FLOW_FAIL:"client_flow_fail",CLIENT_FLOW_INCOMPLETE:"client_flow_incomplete",CLIENT_ATTEMPT_INCOMPLETE:"client_attempt_incomplete",CLIENT_FLOW_RETRY:"client_flow_retry",CLIENT_ATTEMPT_RETRY:"client_attempt_retry",CLIENT_DIAGNOSTIC:"client_diagnostic",CLIENT_QUALITY_SWITCH:"client_quality_switch",CLIENT_CANCEL_SURVEY:"client_cancel_survey",CLIENT_PHOTO_EDIT_BEGIN:"client_photo_edit_begin",CLIENT_PHOTO_EDIT_SUCCESS:"client_photo_edit_success",SERVER_UPLOAD_BEGIN:"server_upload_begin",SERVER_UPLOAD_SUCCESS:"server_upload_success",SERVER_UPLOAD_FAIL:"server_upload_fail",SERVER_PUBLISH_BEGIN:"server_publish_begin",SERVER_PUBLISH_SUCCESS:"server_publish_success",SERVER_PUBLISH_FAIL:"server_publish_fail",SERVER_RECEIVER_BEGIN:"server_receiver_begin",SERVER_RECEIVER_PUBLISH_BEGIN:"server_receiver_publish_begin",SERVER_SENTRY_RESTRICTION:"server_sentry_restriction"})}),null);
__d("PhotosUploadWaterfallXMixin",["invariant","AsyncSignal","Banzai","PhotosUploadWaterfallXConfig","randomInt"],(function(a,b,c,d,e,f,g){__p&&__p();var h=new Map();function i(a,c){var d={};a.client_time=Math.round(Date.now()/1e3);b("PhotosUploadWaterfallXConfig").retryBanzai&&(d.retry=!0,a.nonce=b("randomInt")(4294967296));b("Banzai").post(b("PhotosUploadWaterfallXConfig").banzaiRoute,a,d);c&&setTimeout(c,0)}function j(a,c){if(b("PhotosUploadWaterfallXConfig").useBanzai)i(a,c);else{a=new(b("AsyncSignal"))(b("PhotosUploadWaterfallXConfig").loggingEndpoint,{data:JSON.stringify(a)}).setHandler(c);b("PhotosUploadWaterfallXConfig").timeout&&a.setTimeout(10*1e3);a.send()}}e.exports={logStep:function(a,b,c){var d=this.getWaterfallID&&this.getWaterfallID(),e=this.getWaterfallAppName&&this.getWaterfallAppName();if(!d||!e)return;j(babelHelpers["extends"]({step:a,qn:d,uploader:e,ref:this.getWaterfallSource&&this.getWaterfallSource()},b),c)},logPUWStep:function(a,b,c,d,e,f,g){if(f&&f.logOncePerSession){h.has(b)||h.set(b,new Set());if(h.get(b).has(a))return;h.get(b).add(a)}j(Object.assign({step:a,qn:b,uploader:c,ref:d},e),g)}}}),null);
__d("HTML5FilePicker",["cx","ArbiterMixin","BrowserSupport","CSS","DOM","FilePickerEvent","FileSelectionContainer","Keys","Parent","PhotosUploadID","PhotosUploadWaterfall","PhotosUploadWaterfallMixin","PhotosUploadWaterfallXMixin","PUWApplications","PUWSteps","getOrCreateDOMID"],(function(a,b,c,d,e,f,g){__p&&__p();function a(a,c){__p&&__p();this._config=babelHelpers["extends"]({accept:undefined,multiple:undefined},c);this._button=a;this._beginInformed=!1;if(!b("BrowserSupport").hasFileAPI()){this.logStep(b("PUWSteps").CLIENT_PROCESS_UNAVAILABLE,{error:"no_file_api"});if(Object.prototype.hasOwnProperty.call(this._config,"fallbackFunction")){this._config.fallbackFunction.call(this);return}return}this._subscriptions=[];c=this._config.input||b("DOM").create("input",{type:"file",className:"_n"});Object.prototype.hasOwnProperty.call(this._config,"accept")&&(c.accept=this._config.accept);Object.prototype.hasOwnProperty.call(this._config,"multiple")&&(c.multiple=this._config.multiple);Object.prototype.hasOwnProperty.call(this._config,"title")&&(c.title=this._config.title);a=b("DOM").create("label",{className:"accessible_elem","for":b("getOrCreateDOMID")(c)},c.title);a=b("DOM").create("div",{className:"_3jk"},[a,c]);b("CSS").addClass(this._button,"_m");b("DOM").appendContent(this._button,a);this._button.setAttribute("rel","ignore");this._bindInput(c);this._button.onkeydown=function(event){event.keyCode===b("Keys").RETURN&&(this._input.click(),event&&event.stopPropagation&&event.stopPropagation())}.bind(this);a=b("Parent").byClass(this._button,"addPhotosDisabled");a&&(b("CSS").removeClass(a,"addPhotosDisabled"),b("CSS").addClass(a,"addPhotosEnabled"))}Object.assign(a.prototype,b("ArbiterMixin"),b("PhotosUploadWaterfallMixin"),b("PhotosUploadWaterfallXMixin"),{getUploaderApp:function(){return b("PhotosUploadWaterfall").APP_HTML5},getWaterfallID:function(){return this._config.qn},getWaterfallAppName:function(){return b("PUWApplications").WEB_HTML5},getWaterfallSource:function(){return this._config.ref},getSwfID:function(){return null},_constructFileList:function(){var a=Array.from(this._input.files);a.forEach(function(a){a.uploadID=b("PhotosUploadID").getNewID()});return a},_constructFileSelectionContainerList:function(){var a=Array.from(this._input.files);return a.map(function(a){return new(b("FileSelectionContainer"))(a)})},cleanup:function(){this._input&&(this._input.onclick=null,this._input.onchange=null),this._button&&(this._button.onkeydown=null)},_bindInput:function(a){this.cleanup(),a.onclick=function(){this.logWaterfallStep(b("PhotosUploadWaterfall").SELECT_START),this._beginInformed||(this._beginInformed=!0,this.inform(b("FilePickerEvent").BEGIN||"FilePickerEvent/BEGIN")),this.inform(b("FilePickerEvent").SELECT_START)}.bind(this),a.onchange=function(){this.inform(b("FilePickerEvent").SELECTED,{sender:this,files:this._constructFileList(),selections:this._constructFileSelectionContainerList()}),this._bindInput(this._input.cloneNode(!1))}.bind(this),this._input&&b("DOM").replace(this._input,a),this._input=a}});e.exports=a}),null);
__d("PrivacySelectorNewDispatcher",["Dispatcher_DEPRECATED"],(function(a,b,c,d,e,f){__p&&__p();var g,h="selector";g=babelHelpers.inherits(a,b("Dispatcher_DEPRECATED"));g&&g.prototype;a.prototype.handleUpdateFromSelector=function(a){"use strict";this.dispatch(babelHelpers["extends"]({payloadSource:h},a))};function a(){"use strict";g.apply(this,arguments)}c=new a();e.exports=c}),null);
__d("FBStoriesPrivacySelectorLoadingPlaceholder.react",["fbt","React","XUIButton.react","XUISpinner.react"],(function(a,b,c,d,e,f,g){"use strict";a=function(){return b("React").createElement("div",null,b("React").createElement(b("XUIButton.react"),{size:"medium",haschevron:!1,label:g._("Loading..."),image:b("React").createElement(b("XUISpinner.react"),null),onClick:function(a){a.stopPropagation()}}))};e.exports=a}),null);
__d("FBStoriesPrivacySelectorLoadingContainerBootloader.react",["BootloadOnRender.react","FBStoriesPrivacySelectorLoadingPlaceholder.react","JSResource","LazyComponent.react","React"],(function(a,b,c,d,e,f){"use strict";a=function(a){return b("React").createElement(b("BootloadOnRender.react"),{loader:b("JSResource")("FBStoriesPrivacySelectorLoadingContainer.react").__setRef("FBStoriesPrivacySelectorLoadingContainerBootloader.react"),placeholder:b("React").createElement(b("FBStoriesPrivacySelectorLoadingPlaceholder.react"),null),component:b("React").createElement(b("LazyComponent.react"),a)})};e.exports=a}),null);
__d("ProfileTile.react",["Image.react","ImageBlock.react","Link.react","React","URI","XUIText.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=24;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){var a=this.props.size||h;a=this.props.imageProps&&this.props.imageProps.src||"https://graph.facebook.com/"+this.props.id+"/picture?width="+a+"&height="+a;var c=this.props.imageProps&&this.props.imageProps.href||"/"+this.props.id,d=null;this.props.shouldShowProfileCardOnHover&&(d=new(b("URI"))("/ajax/hovercard/user.php").setQueryData({id:this.props.id}));var e=this.props.desc?b("React").createElement(b("XUIText.react"),babelHelpers["extends"]({display:"block"},this.props.descProps),this.props.desc):null,f=b("React").createElement("span",this.props.titleProps,this.props.name);this.props.shouldNameLinkToProfile&&(f=b("React").createElement(b("Link.react"),babelHelpers["extends"]({"data-hovercard":d},this.props.titleProps,{href:this.props.titleProps&&this.props.titleProps.href||"/"+this.props.id}),this.props.name));d=this.props.image||(this.props.size&&this.props.imageProps&&!this.props.imageProps.height&&this.props.imageProps&&!this.props.imageProps.width?b("React").createElement(b("Image.react"),babelHelpers["extends"]({height:this.props.size,src:a,width:this.props.size},this.props.imageProps)):b("React").createElement(b("Image.react"),babelHelpers["extends"]({src:a},this.props.imageProps)));a=this.props.shouldImageLinkToProfile?b("React").createElement(b("Link.react"),{href:c},d):d;return b("React").createElement(b("ImageBlock.react"),this.props.tileProps,a,b("React").createElement("div",null,f,e))};function a(){g.apply(this,arguments)}a.defaultProps={shouldShowProfileCardOnHover:!0,shouldNameLinkToProfile:!0};e.exports=a}),null);
__d("HTMLMediaElementReadyStates",[],(function(a,b,c,d,e,f){a={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4};e.exports=a}),null);
__d("VideoFrameBuffer",["HTMLMediaElementReadyStates"],(function(a,b,c,d,e,f){__p&&__p();function a(a,b,c,d,e,f,g){d===void 0&&(d=null),e===void 0&&(e=null),f===void 0&&(f=null),g===void 0&&(g=null),this.$2=b,this.$1=a,this.$3=c||"contain",this.$6=d,this.$7=e,this.$8=f,this.$9=g}a.prototype.updateFrameBuffer=function(){"use strict";__p&&__p();this.$4&&(this.$1.width=this.$4,this.$4=null);this.$5&&(this.$1.height=this.$5,this.$5=null);if(this.$2.readyState<b("HTMLMediaElementReadyStates").HAVE_CURRENT_DATA)return;var a=this.$1.clientWidth||this.$1.width,c=this.$1.clientHeight||this.$1.height,d=a,e=c,f=this.$2.videoWidth/this.$2.videoHeight,g=d/e;this.$3==="cover"&&(g*=-1,f*=-1);g>f?d=e*f:g<f&&(e=d/f);g=this.$1.getContext("2d");if(!(g instanceof window.CanvasRenderingContext2D))return;try{if(this.$6||this.$7){g.drawImage(this.$2,(f=this.$8)!=null?f:0,(f=this.$9)!=null?f:0,(f=this.$6)!=null?f:a,(f=this.$7)!=null?f:c,0,0,a,c)}else g.drawImage(this.$2,(a-d)/2,(c-e)/2,d,e)}catch(a){if(a.name!=="NS_ERROR_NOT_AVAILABLE")throw a}};a.prototype.getDOMNode=function(){"use strict";return this.$1};a.prototype.updateDimensions=function(a,b){"use strict";this.$4=a,this.$5=b};e.exports=a}),null);
__d("BlobFactory",["emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(){try{new a.Blob(),g=!0}catch(a){g=!1}}var i=a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder;a.Blob?c={getBlob:function(b,c){__p&&__p();b=b||[];c=c||{};g===undefined&&h();if(g)return new a.Blob(b,c);else{var d=new i();for(var e=0;e<b.length;e++)d.append(b[e]);return d.getBlob(c.type)}},isSupported:b("emptyFunction").thatReturnsTrue}:c={getBlob:function(){},isSupported:b("emptyFunction").thatReturnsFalse};e.exports=c}),null);
__d("htmlSpecialChars",[],(function(a,b,c,d,e,f){__p&&__p();var g=/&/g,h=/</g,i=/>/g,j=/\"/g,k=/\'/g;function a(a){if(typeof a==="undefined"||a===null||!a.toString)return"";if(a===!1)return"0";else if(a===!0)return"1";return a.toString().replace(g,"&amp;").replace(j,"&quot;").replace(k,"&#039;").replace(h,"&lt;").replace(i,"&gt;")}e.exports=a}),null);
__d("WebWorker",["invariant","BlobFactory","Bootloader","EventListener","SubscriptionsHandler","URI","WebWorkerConfig","XHRRequest","areSameOrigin","destroyOnUnload","emptyFunction","filterObject","getCrossOriginTransport","memoize","performanceNow"],(function(a,b,c,d,e,f,g){__p&&__p();var h=a.URL||a.webkitURL;function i(a){"use strict";this.$1=!1,this.$2=null,this.$3=a,this.__worker=null,this.$4=b("emptyFunction"),this.$5=b("emptyFunction"),this.$6=[],this.$7=[],this.$8=!1,this.$9=new(b("SubscriptionsHandler"))(),this.$10=b("destroyOnUnload")(function(){this.$8||this.terminate()}.bind(this)),this.$11("constructed")}i.prototype.setMessageHandler=function(a){"use strict";this.$4=a||b("emptyFunction");return this};i.prototype.setErrorHandler=function(a){"use strict";this.$5=a||b("emptyFunction");return this};i.prototype.postMessage=function(a,b){"use strict";__p&&__p();this.isCurrentState("constructed")&&g(0,5977);this.isCurrentState("terminated")&&g(0,5978);if(this.isCurrentState("preparing")){this.$6.push(this.postMessage.bind(this,a,b));return this}a={type:"message",message:a};b?this.getInterfaceableWorker().postMessage(a,b):this.getInterfaceableWorker().postMessage(a);return this};i.prototype.$12=function(){"use strict";this.isCurrentState("terminated")||(this.$11("terminated"),this.__worker=null,this.$13(),this.$6=[],this.$7=[],this.$10&&this.$10.remove&&this.$10.remove())};i.prototype.terminate=function(){"use strict";this.isCurrentState("executing")&&this.__worker.terminate();this.$12();return this};i.prototype.execute=function(){"use strict";this.isCurrentState("terminated")&&g(0,5979);if(["preparing","executing"].some(this.isCurrentState,this))return this;this.$11("preparing");i.prepareResource(this.$3,this.$14.bind(this));return this};i.prototype.setAllowCrossPageTransition=function(a){"use strict";this.$8=a;return this};i.prototype.isCurrentState=function(a){"use strict";i.states.includes(a)||g(0,5980,a);return a===this.$2};i.prototype.$14=function(){"use strict";__p&&__p();this.isCurrentState("executing")&&g(0,5981);if(this.isCurrentState("terminated"))return;this.$3.sameOriginURL||this.$3.source||g(0,5982);this.$3.sameOriginURL?this.__worker=this.constructWorker(this.$3.sameOriginURL):(this.__worker=this.constructWorker(i.evalWorkerURL),this.getInterfaceableWorker().postMessage(this.$3.source));this.$15("ping",Date.now());if(this.$3.dynamicModules)try{this.$15("defineModules",this.$3.dynamicModules)}catch(a){this.terminate();this.$16("define_error",{message:a.message});throw a}this.$17();this.$11("executing");this.$6.forEach(function(a){return a()});this.$6=null;this.$7.forEach(function(a){return a()});this.$7=null};i.prototype.$13=function(){"use strict";this.$9.release()};i.prototype.$15=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.getInterfaceableWorker().postMessage({type:a,args:c})};i.prototype.$16=function(event,a){"use strict";i.$16(event,this.$3.name,babelHelpers["extends"]({},a,{cross_page_transition:!!this.$8,state:this.$2}))};i.$18=function(){"use strict";return Object.keys(b("filterObject")({object_url:i.$19(),eval_url:n(),data_url:i.$20(),worker:i.isSupported(),transferables:i.areTransferablesSupported()},function(a){return!!a}))};i.prototype.$17=function(){"use strict";this.$9.addSubscriptions(b("EventListener").listen(this.getInterfaceableWorker(),"message",this.$21.bind(this)),b("EventListener").listen(this.__worker,"error",this.$22.bind(this)))};i.prototype.$22=function(a){"use strict";var b=this.$5(a);!b&&!a.defaultPrevented&&this.$16("exception",{message:a.message})};i.prototype.$21=function(event){"use strict";__p&&__p();var b=event.data;switch(b.type){case"message":this.$4(b.message);break;case"pong":this.$1=!0;this.$16("executed",{dt:Math.floor(b.args[1]-b.args[0]),bytes:this.$3.source?this.$3.source.length:-1});break;case"terminate":this.terminate();break;case"haste-error":this.terminate();this.$16("haste_error",{message:b.message});break;case"console":var c=b.args.shift();["log","error","info","debug","warn"].includes(c)||g(0,5983,c);a.console[c].apply(a.console,b.args);break}};i.prototype.$11=function(a){"use strict";i.states.includes(a)||g(0,5984,a),this.$16("transition",{next_state:a}),this.$2=a};i.prepareResource=function(c,d){"use strict";__p&&__p();d=d||b("emptyFunction");c.sameOriginURL||c.url||c.source||g(0,5985);!i.isSupported()&&g(0,5986);if(c.sameOriginURL)d();else if(c.url&&b("areSameOrigin")(new(b("URI"))(c.url),new(b("URI"))(a.location.href)))c.sameOriginURL=c.url,d();else if(c.source)i.$23()&&(c.sameOriginURL=i.$24(c.source)),d();else if(!c.loading){var e=b("performanceNow")();c.loading=[d];i.$25(c.url,function(a){a?(c.source=a,i.$23()&&(c.sameOriginURL=i.$24(a)),i.$16("prepared",c.name,{dt:Math.floor(b("performanceNow")()-e),bytes:a.length})):i.$16("failed",c.name,{dt:Math.floor(b("performanceNow")()-e),bytes:0}),c.loading.forEach(function(a){return a()}),c.loading=!1})}else c.loading.push(d);return c};i.releaseResource=function(a){"use strict";a.sameOriginURL.indexOf("blob:")===0&&(h.revokeObjectURL&&h.revokeObjectURL(a.sameOriginURL),a.sameOriginURL=null);return a};i.isSupported=function(){"use strict";return m&&(i.$23()||n())};i.isMessageChannelSupported=function(){"use strict";return i.areTransferablesSupported()&&!!a.MessageChannel};i.areTransferablesSupported=function(){"use strict";return i.isSupported()&&o()};i.$25=function(a,c){"use strict";new(b("XHRRequest"))(a).setTransportBuilder(b("getCrossOriginTransport")).setMethod("GET").setResponseHandler(function(a){c(a)}).setErrorHandler(c.bind(null,null)).send()};i.$24=function(a){"use strict";i.$23()||g(0,5987);if(i.$19()){var c=b("BlobFactory").getBlob([a],{type:"application/javascript"});return h.createObjectURL(c)}if(i.$20())return"data:application/javascript,"+encodeURIComponent(a)};i.$19=function(){"use strict";return b("BlobFactory").isSupported()&&k()};i.$20=function(){"use strict";return l()};i.$23=function(){"use strict";return i.$19()||i.$20()};i.$16=function(event,a,c){"use strict";if(!b("WebWorkerConfig").logging.enabled)return;b("Bootloader").loadModules(["BanzaiLogger"],function(d){d.log(b("WebWorkerConfig").logging.config,babelHelpers["extends"]({},c,{features_array:i.$18(),event:event,resource:a}))},"WebWorker")};i.prototype.constructWorker=function(a){"use strict";return j(a)};i.prototype.$26=function(a,b){"use strict";if(this.isCurrentState("preparing")){this.$7.push(this.$26.bind(this,a,b));return}this.getInterfaceableWorker().postMessage({type:"port",message:a},b)};i.prototype.createMessageChannel=function(a,b){"use strict";var c=new MessageChannel();this.$26(a,[c.port2].concat(b||[]));c.port1.start();return c.port1};i.prototype.getInterfaceableWorker=function(){"use strict";return this.__worker};function j(b){return new a.Worker(b)}var k=b("memoize")(function(){__p&&__p();var a;if(!h||!h.createObjectURL)return!1;try{a=h.createObjectURL(b("BlobFactory").getBlob([""],{type:"application/javascript"}));var c=j(a);c.terminate();c=!0}catch(a){c=!1}finally{h.revokeObjectURL&&h.revokeObjectURL(a)}return c}),l=b("memoize")(function(){try{var a=j("data:application/javascript,");a.terminate();a=!0}catch(b){a=!1}return a}),m=!!a.Worker,n=b("memoize")(function(){try{var a=j(i.evalWorkerURL);a.terminate();a=!0}catch(b){a=!1}return a}),o=b("memoize")(function(){try{var a=j(i.evalWorkerURL),b=new ArrayBuffer(0);a.postMessage({buffer:b},[b]);a.terminate();b=!0}catch(a){b=!1}return b});i.states=["constructed","preparing","executing","terminated"];i.evalWorkerURL=b("WebWorkerConfig").evalWorkerURL;e.exports=i}),null);
__d("XPrivacyCustomDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/privacy/custom_dialog/",{id:{type:"String",required:!0},option_id:{type:"String",required:!0},autosave:{type:"Bool",defaultValue:!1},explain_tags:{type:"Bool",defaultValue:!1},limit_community:{type:"Bool",defaultValue:!1},limit_facebook:{type:"Bool",defaultValue:!1},limit_fof:{type:"Bool",defaultValue:!1},limit_tagexpand:{type:"Bool",defaultValue:!1},is_new_privacy_selector:{type:"Bool",defaultValue:!1},render_location_enum:{type:"Enum",enumType:1},content_type:{type:"String"},post_param:{type:"String"},privacy_data:{type:"String"},source:{type:"String"},tags:{type:"IntVector"},saved_custom_opt_in:{type:"Bool",defaultValue:!1},__asyncDialog:{type:"Int"}})}),null);