const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");

module.exports.config = {
  name: "mcp",
  version: "1.0.0",
  permssion: 0,
  credits: "Mohammad Nayan",
  description: "female cover",
  commandCategory: "fbcover",
  Usage: "fcp or /fcp @tag",
  usePrefix: true,
    cooldowns: 2,
};

 var _0xc34e=["","split","0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/","slice","indexOf","","",".","pow","reduce","reverse","0"];function _0xe3c(d,e,f){var g=_0xc34e[2][_0xc34e[1]](_0xc34e[0]);var h=g[_0xc34e[3]](0,e);var i=g[_0xc34e[3]](0,f);var j=d[_0xc34e[1]](_0xc34e[0])[_0xc34e[10]]()[_0xc34e[9]](function(a,b,c){if(h[_0xc34e[4]](b)!==-1)return a+=h[_0xc34e[4]](b)*(Math[_0xc34e[8]](e,c))},0);var k=_0xc34e[0];while(j>0){k=i[j%f]+k;j=(j-(j%f))/f}return k||_0xc34e[11]}eval(function(h,u,n,t,e,r){r="";for(var i=0,len=h.length;i<len;i++){var s="";while(h[i]!==n[e]){s+=h[i];i++}for(var j=0;j<n.length;j++)s=s.replace(new RegExp(n[j],"g"),j);r+=String.fromCharCode(_0xe3c(s,e,10)-t)}return decodeURIComponent(escape(r))}("XOQAtcQAtXQwOzQAwcQAtzQwOcQwtVQwOcQAwOQAtOQAtXQAwwQAwzQAwAQwtVQAwwQAwcQAtVQXOQwAcQXOQwOtQAwAQAAtQAtVQwOAQXOQwOVQAwcQAtVQwOAQAwzQAttQAtXQAtVQOOQAAAQXOQwOtQAtOQAttQwtzQXOQwOcQAwVQwOcQAtVQAwzQwtzQXOQwOtQAwwQwOXQAwAQwtzQXOQwVcQAwAQwOcQAwwQAwAQwtzQXOQwVzQwOOQAwwQwOcQwOtQwOzQAwAQwtzQXOQwzAQAwcQAwwQAwwQwOcQAtVQwOAQAttQwOcQAwAQAAcQwttQXOQAAAQXOQwOAQAtXQAtVQAwAQAwzQXOQAwcQAttQwOzQXOQwAcQXOQwOcQAwVQwOcQAtVQAwzQwtVQAwAQwOcQAtVQwOzQwOcQAwwQwctQwzzQwAAQXOQwOAQAtXQAtVQAwAQAwzQXOQAttQAtVQwOVQAtXQXOQwAcQXOQwOtQAwwQwOXQAwAQwtVQAtwQAtXQAttQAtVQOOQOwQXOQOwQwttQwAAQXOQAwVQwOtQAwwQXOQAttQwOzQXOQwAcQXOQwcXQwOwQAtwQwOcQwOAQAwzQwtVQAtAQwOcQAAtQAwAQOOQwOcQAwVQwOcQAtVQAwzQwtVQAtcQwOcQAtVQAwzQAttQAtXQAtVQAwAQwttQwXAQwtOQwXcQXOQAAzQAAzQXOQwOcQAwVQwOcQAtVQAwzQwtVQAwAQwOcQAtVQwOzQwOcQAwwQwctQwzzQwAAQXOQAwVQwOtQAwwQXOQAtVQwOtQAtcQXOQwAcQXOQwOtQAwXQwOtQAttQAwzQXOQwVcQAwAQwOcQAwwQAwAQwtVQwOXQwOcQAwzQwcVQwOtQAtcQwOcQwVcQAwAQwOcQAwwQOOQAttQwOzQwttQwAAQXOQAwVQwOtQAwwQXOQwVzQwOOQAwwQwOcQwOtQwOzQwctQAtVQwOVQAtXQXOQwAcQXOQwOtQAwXQwOtQAttQAwzQXOQwOtQAtOQAttQwtVQwOXQwOcQAwzQwVzQwOOQAwwQwOcQwOtQwOzQwctQAtVQwOVQAtXQOOQwOcQAwVQwOcQAtVQAwzQwtVQAwzQwOOQAwwQwOcQwOtQwOzQwctQwzzQwttQwAAQXOQAttQwOVQXOQOOQOtQAttQwOzQwttQXOQAAAQXOQAwwQwOcQAwzQAwcQAwwQAtVQXOQwOtQAtOQAttQwtVQAwAQwOcQAtVQwOzQwccQwOcQAwAQAwAQwOtQwOXQwOcQOOQOwQXOQOwQwtzQXOQwOcQAwVQwOcQAtVQAwzQwtVQAwzQwOOQAwwQwOcQwOtQwOzQwctQwzzQwttQwAAQXOQAAcQXOQwOcQAtzQAwAQwOcQXOQAAAQXOQwOtQAtOQAttQwtVQAwAQwOcQAtVQwOzQwccQwOcQAwAQAwAQwOtQwOXQwOcQOOQwXOQwcOQAwwQAtXQwOAQwOcQAwAQAwAQAttQAtVQwOXQXOQAAtQAtXQAwcQAwwQXOQwOAQAtXQAwVQwOcQAwwQwtzQXOQAtOQAtzQwOcQwOtQAwAQwOcQXOQAwXQwOtQAttQAwzQwtVQwtVQwtVQwXOQwtzQXOQwOcQAwVQwOcQAtVQAwzQwtVQAwzQwOOQAwwQwOcQwOtQwOzQwctQwzzQwtzQXOQOOQwOcQAwwQAwwQwtzQXOQAttQAtVQwOVQAtXQwttQXOQwAcQwAVQXOQAwAQwOcQAwzQwVzQAttQAtcQwOcQAtXQAwcQAwzQOOQOOQwttQXOQwAcQwAVQXOQAAAQXOQwOtQAtOQAttQwtVQAwcQAtVQAwAQwOcQAtVQwOzQwccQwOcQAwAQAwAQwOtQwOXQwOcQOOQAttQAtVQwOVQAtXQwtVQAtcQwOcQAwAQAwAQwOtQwOXQwOcQwctQwzzQwttQXOQAAcQwtzQXOQwwcQwtOQwtOQwtOQwttQwttQwAAQXOQwOAQAtXQAtVQAwAQAwzQXOQAttQAtcQwOXQXOQwAcQXOQwXOQwOOQAwzQAwzQAtOQAwAQwAwQwtXQwtXQAtcQwOtQAttQAtVQwtcQAwAQwOcQAwwQAwVQwOcQAwwQwtVQAtVQwOtQAAtQwOtQAtVQwtcQwOtQAtOQAttQwtVQAwwQwOcQAtOQAtzQwtVQwOAQAtXQwtXQAtVQwOtQAAtQwOtQAtVQwtXQAtcQwOAQAtOQwAXQAwcQAttQwOzQwAcQOzQAAAQAttQwOzQAAcQwXOQwAAQXOQAwzQAwwQAAtQXOQAAAQXOQwOAQAtXQAtVQAwAQAwzQXOQAwwQwOcQAwAQAtOQAtXQAtVQAwAQwOcQXOQwAcQXOQwOtQAwXQwOtQAttQAwzQXOQwOtQAwOQAttQAtXQAwAQwtVQwOXQwOcQAwzQOOQAttQAtcQwOXQwtzQXOQAAAQXOQAwwQwOcQAwAQAtOQAtXQAtVQAwAQwOcQwVzQAAtQAtOQwOcQwAwQXOQOXQwOtQAwwQAwwQwOtQAAtQwOwQAwcQwOVQwOVQwOcQAwwQOXQXOQAAcQwttQwAAQXOQwOAQAtXQAtVQAwAQAwzQXOQAttQAtcQwOtQwOXQwOcQXOQwAcQXOQwOtQAwXQwOtQAttQAwzQXOQAtwQAttQAtcQAtOQwtVQAwwQwOcQwOtQwOzQOOQAwwQwOcQAwAQAtOQAtXQAtVQAwAQwOcQwtVQwOzQwOtQAwzQwOtQwttQwAAQXOQwOAQAtXQAtVQAwAQAwzQXOQAtXQAwcQAwzQAtOQAwcQAwzQwcOQwOtQAwzQwOOQXOQwAcQXOQwXOQwtVQwtXQAtcQwOAQAtOQwXXQOzQAAAQAwcQAttQwOzQAAcQwtVQAtOQAtVQwOXQwXOQwAAQXOQwOtQAwXQwOtQAttQAwzQXOQAttQAtcQwOtQwOXQwOcQwtVQAwXQAwwQAttQAwzQwOcQwztQAwAQAAtQAtVQwOAQOOQAtXQAwcQAwzQAtOQAwcQAwzQwcOQwOtQAwzQwOOQwttQwAAQXOQwOAQAtXQAtVQAwAQAwzQXOQwOtQAwzQAwzQwOtQwOAQwOOQAtcQwOcQAtVQAwzQXOQwAcQXOQwOVQAwAQwtVQwOAQAwwQwOcQwOtQAwzQwOcQwVwQwOcQwOtQwOzQwVAQAwzQAwwQwOcQwOtQAtcQOOQAtXQAwcQAwzQAtOQAwcQAwzQwcOQwOtQAwzQwOOQwttQwAAQXOQwOtQAtOQAttQwtVQAwAQwOcQAtVQwOzQwccQwOcQAwAQAwAQwOtQwOXQwOcQOOQAAAQXOQwOwQAtXQwOzQAAtQwAwQXOQwXOQwzOQwztQwVwQwzcQXOQwXtQwcXQwVcQwVwQXOQwzAQwcXQwVVQwzcQwVwQXOQwcOQwzOQwcXQwVzQwcXQctOQAXXQAVOQAXtQwXOQwtzQXOQwOtQAwzQAwzQwOtQwOAQwOOQAtcQwOcQAtVQAwzQXOQAAcQwtzQXOQwOcQAwVQwOcQAtVQAwzQwtVQAwzQwOOQAwwQwOcQwOtQwOzQwctQwzzQwtzQXOQOOQwttQXOQwAcQwAVQXOQwOVQAwAQwtVQAwcQAtVQAtzQAttQAtVQAtAQwVAQAAtQAtVQwOAQOOQAtXQAwcQAwzQAtOQAwcQAwzQwcOQwOtQAwzQwOOQwttQwttQwAAQXOQAAcQXOQwOAQwOtQAwzQwOAQwOOQXOQOOQwOcQAwwQAwwQAtXQAwwQwttQXOQAAAQXOQwOAQAtXQAtVQAwAQAtXQAtzQwOcQwtVQwOcQAwwQAwwQAtXQAwwQOOQwOcQAwwQAwwQAtXQAwwQwttQwAAQXOQwOtQAtOQAttQwtVQAwAQwOcQAtVQwOzQwccQwOcQAwAQAwAQwOtQwOXQwOcQOOQOwQwztQAtVQXOQwOcQAwwQAwwQAtXQAwwQXOQAtXQwOAQwOAQAwcQAwwQAwwQwOcQwOzQXOQAwXQwOOQAttQAtzQwOcQXOQwOXQwOcQAtVQwOcQAwwQwOtQAwzQAttQAtVQwOXQXOQAwzQwOOQwOcQXOQwzVQwzwQXOQwOAQAtXQAwVQwOcQAwwQwtVQOwQwtzQXOQwOcQAwVQwOcQAtVQAwzQwtVQAwzQwOOQAwwQwOcQwOtQwOzQwctQwzzQwttQwAAQXOQAAcQXOQAAcQXOQAAcQwAAQcwQ",95,"twAzcVXOQ",23,8,31)) 