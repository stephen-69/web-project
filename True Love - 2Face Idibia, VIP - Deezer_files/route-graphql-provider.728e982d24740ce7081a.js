(window.webpackJsonpDeezer=window.webpackJsonpDeezer||[]).push([[180],{L3kz:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return f}));var r,i,a=n("VkAN"),u=n.n(a),o=n("l8Gu"),s=n("UYTu"),c=n("fDhA"),l=Object(s.a)(r||(r=u()(["\n\tfragment AlbumMasthead on Album {\n\t\t...AlbumBase\n\t\tduration\n\t\treleaseDate\n\t\tfansCount\n\t\tisExplicit\n\t}\n\t","\n"])),c.a),b=Object(s.a)(i||(i=u()(["\n\tquery AlbumFull($albumId: String!) {\n\t\talbum(albumId: $albumId) {\n\t\t\t...AlbumMasthead\n\t\t}\n\t}\n\t","\n"])),l);function f(t){return Object(o.e)(b,t)}},fDhA:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r,i,a=n("VkAN"),u=n.n(a),o=n("UYTu"),s=Object(o.a)(r||(r=u()(["\n\tfragment AlbumContributors on Album {\n\t\tcontributors {\n\t\t\tedges {\n\t\t\t\tcursor\n\t\t\t\troles\n\t\t\t\tnode {\n\t\t\t\t\t... on Artist {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\tpicture {\n\t\t\t\t\t\t\tsmall: urls(pictureRequest: {width: 100, height: 100})\n\t\t\t\t\t\t\tmedium: urls(pictureRequest: {width: 264, height: 264})\n\t\t\t\t\t\t\tlarge: urls(pictureRequest: {width: 500, height: 500})\n\t\t\t\t\t\t\tcopyright\n\t\t\t\t\t\t\texplicitStatus\n\t\t\t\t\t\t\t__typename\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]))),c=Object(o.a)(i||(i=u()(["\n\tfragment AlbumBase on Album {\n\t\tid\n\t\tdisplayTitle\n\t\tcover {\n\t\t\tsmall: urls(pictureRequest: {width: 100, height: 100})\n\t\t\tmedium: urls(pictureRequest: {width: 264, height: 264})\n\t\t\tlarge: urls(pictureRequest: {width: 500, height: 500})\n\t\t\tcopyright\n\t\t\texplicitStatus\n\t\t\t__typename\n\t\t}\n\t\t...AlbumContributors\n\t}\n\t","\n"])),s)},ue3E:function(t,e,n){"use strict";n.r(e);n("+2oP"),n("07d7"),n("sMBO"),n("pjDv"),n("PKPk"),n("pNMO"),n("4Brf"),n("0oug"),n("4mDm"),n("3bBZ"),n("J30X");var r=n("yXPU"),i=n.n(r),a=n("o0o1"),u=n.n(a),o=(n("tkto"),n("q1tI")),s=n.n(o),c=n("/MKj"),l=n("l8Gu"),b={possibleTypes:{ArtistHighlightContent:["Album","Playlist","Podcast","PodcastEpisode"],Asset:["FormattedImage","Video"],CardTemplate:["Chapter","Cover","Page","Story"],ConcertAttendee:["Artist","GenericConcertArtist"],Contributor:["Artist"],DeezerUrl:["Url"],Image:["Illustration","Picture"],MadeForMe:["Flow","SmartTracklist"],Node:["Album","Artist","ArtistConcert","Flow","Livestream","Lyrics","Mix","Playlist","Podcast","PodcastEpisode","SmartTracklist","Track","User"],PersonalStatsInsightlink:["PersonalStatsIllustration","Picture"],RecentlyPlayedContent:["Album","Artist","Flow","Livestream","Mix","Playlist","Podcast"],SearchHistorySuccessResult:["Album","Artist","Livestream","Mix","Playlist","Podcast","PodcastEpisode","Track"],SearchTopResultContent:["Album","Artist","Livestream","Playlist","Podcast","PodcastEpisode","Track"]}},f=n("MST+"),d=n("HF1P"),m=n("Fmxg"),p=n("hNNj"),h=n("orQ7"),y=n("wynh");var A=n("L3kz");function g(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,o=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){o=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(o)throw a}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e.default=function(t){var e,n,r=t.offline,a=void 0===r||r,v=t.children,P=Object(c.f)((function(t){var e=t.user;return Object(f.u)(e)})),w=Object(c.f)((function(t){return t.cache.album})),k=w?Object.keys(w):[],T=(e=function(){var t,e=Object(h.b)({itemType:y.b.CONFIG,itemName:"pipe"})||d.a.get("host_pipe"),n="https://".concat(e,"/api");return Object(l.b)({uri:n,possibleTypes:b.possibleTypes,getLocale:function(){return P},getToken:function(){return Object(m.a)().catch((function(){return""}))},onTokenInvalid:m.b,connectToDevTools:!1,customHttpFetch:p.a,disableOffline:!a,onDbUpgrade:(t=i()(u.a.mark((function t(e){var n,r,i,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e<2)){t.next=19;break}n=g(k),t.prev=2,n.s();case 4:if((r=n.n()).done){t.next=11;break}return i=r.value,a={query:A.a,variables:{albumId:i}},t.next=9,T.offline.query(a);case 9:t.next=4;break;case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),n.e(t.t0);case 16:return t.prev=16,n.f(),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[2,13,16,19]])}))),function(e){return t.apply(this,arguments)})})},(n=Object(o.useRef)()).current||(n.current=e()),n.current);return s.a.createElement(l.a,{client:T},v)}}}]);
//# sourceMappingURL=https://files.deezer.com/cache/js/route-graphql-provider.728e982d24740ce7081a.js.map.json