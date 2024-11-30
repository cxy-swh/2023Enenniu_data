// hook
// (function (){
//     var stringify  = JSON.stringify;
//     JSON.stringify = function (e) {
//         if (e.sig != undefined){
//             console.log(e)
//             debugger
//         }
//             // console.log(e)
//         return stringify(e)
//     }
// })()

// --------------------------------------------------
function item1_mod(){
    cc = Object()
    cc._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    cc._p = "W5D80NFZHAYB8EUI2T649RT2MNRMVE2O";
    md5 = function (ccey){
            function _typeof(e) {
                return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            function t(e) {
                if (e)
                    d[0] = d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0,
                    this.blocks = d,
                    this.buffer8 = l;
                else if (a) {
                    var t = new ArrayBuffer(68);
                    this.buffer8 = new Uint8Array(t),
                    this.blocks = new Uint32Array(t)
                } else
                    this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0,
                this.finalized = this.hashed = !1,
                this.first = !0
            }
            var r = "input is invalid type"
              , e = "object" == ("undefined" == typeof window ? "undefined" : _typeof(window))
              , i = e ? window : {};
            i.JS_MD5_NO_WINDOW && (e = !1);
            var s = !e && "object" == ("undefined" == typeof self ? "undefined" : _typeof(self))
              , h = !i.JS_MD5_NO_NODE_JS && "object" == (void 0 === process ? "undefined" : _typeof(process)) && process.versions && process.versions.node;
            h ? i = global : s && (i = self);
            var f = !i.JS_MD5_NO_COMMON_JS && "object" == _typeof(module) && module.exports, o = "function" == typeof define && __webpack_require__(714), a = !i.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, n = "0123456789abcdef".split(""), u = [128, 32768, 8388608, -2147483648], y = [0, 8, 16, 24], c = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), d = [], l;
            if (a) {
                var A = new ArrayBuffer(68);
                l = new Uint8Array(A),
                d = new Uint32Array(A)
            }
            !i.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            ),
            !a || !i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                return "object" == _typeof(e) && e.buffer && e.buffer.constructor === ArrayBuffer
            }
            );
            var b = function(e) {
                return function(r) {
                    return new t(!0).update(r)[e]()
                }
            }
              , v = function() {
                var e = b("hex");
                h && (e = w(e)),
                e.create = function() {
                    return new t
                }
                ,
                e.update = function(t) {
                    return e.create().update(t)
                }
                ;
                for (var r = 0; r < c.length; ++r) {
                    var n = c[r];
                    e[n] = b(n)
                }
                return e
            }
              , w = function w(t) {
                var e = eval("require('crypto')")
                  , i = eval("require('buffer').Buffer")
                  , s = function(n) {
                    if ("string" == typeof n)
                        return e.createHash("md5").update(n, "utf8").digest("hex");
                    if (null == n)
                        throw r;
                    return n.constructor === ArrayBuffer && (n = new Uint8Array(n)),
                    Array.isArray(n) || ArrayBuffer.isView(n) || n.constructor === i ? e.createHash("md5").update(new i(n)).digest("hex") : t(n)
                };
                return s
            };
            t.prototype.update = function(e) {
                if (!this.finalized) {
                    var t, n = _typeof(e);
                    if ("string" !== n) {
                        if ("object" !== n)
                            throw r;
                        if (null === e)
                            throw r;
                        if (a && e.constructor === ArrayBuffer)
                            e = new Uint8Array(e);
                        else if (!(Array.isArray(e) || a && ArrayBuffer.isView(e)))
                            throw r;
                        t = !0
                    }
                    for (var o, i, s = 0, u = e.length, c = this.blocks, l = this.buffer8; s < u; ) {
                        if (this.hashed && (this.hashed = !1,
                        c[0] = c[16],
                        c[16] = c[1] = c[2] = c[3] = c[4] = c[5] = c[6] = c[7] = c[8] = c[9] = c[10] = c[11] = c[12] = c[13] = c[14] = c[15] = 0),
                        t)
                            if (a)
                                for (i = this.start; s < u && i < 64; ++s)
                                    l[i++] = e[s];
                            else
                                for (i = this.start; s < u && i < 64; ++s)
                                    c[i >> 2] |= e[s] << y[3 & i++];
                        else if (a)
                            for (i = this.start; s < u && i < 64; ++s)
                                (o = e.charCodeAt(s)) < 128 ? l[i++] = o : o < 2048 ? (l[i++] = 192 | o >> 6,
                                l[i++] = 128 | 63 & o) : o < 55296 || o >= 57344 ? (l[i++] = 224 | o >> 12,
                                l[i++] = 128 | o >> 6 & 63,
                                l[i++] = 128 | 63 & o) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++s)),
                                l[i++] = 240 | o >> 18,
                                l[i++] = 128 | o >> 12 & 63,
                                l[i++] = 128 | o >> 6 & 63,
                                l[i++] = 128 | 63 & o);
                        else
                            for (i = this.start; s < u && i < 64; ++s)
                                (o = e.charCodeAt(s)) < 128 ? c[i >> 2] |= o << y[3 & i++] : o < 2048 ? (c[i >> 2] |= (192 | o >> 6) << y[3 & i++],
                                c[i >> 2] |= (128 | 63 & o) << y[3 & i++]) : o < 55296 || o >= 57344 ? (c[i >> 2] |= (224 | o >> 12) << y[3 & i++],
                                c[i >> 2] |= (128 | o >> 6 & 63) << y[3 & i++],
                                c[i >> 2] |= (128 | 63 & o) << y[3 & i++]) : (o = 65536 + ((1023 & o) << 10 | 1023 & e.charCodeAt(++s)),
                                c[i >> 2] |= (240 | o >> 18) << y[3 & i++],
                                c[i >> 2] |= (128 | o >> 12 & 63) << y[3 & i++],
                                c[i >> 2] |= (128 | o >> 6 & 63) << y[3 & i++],
                                c[i >> 2] |= (128 | 63 & o) << y[3 & i++]);
                        this.lastByteIndex = i,
                        this.bytes += i - this.start,
                        i >= 64 ? (this.start = i - 64,
                        this.hash(),
                        this.hashed = !0) : this.start = i
                    }
                    return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0,
                    this.bytes = this.bytes % 4294967296),
                    this
                }
            }
            ,
            t.prototype.finalize = function() {
                if (!this.finalized) {
                    this.finalized = !0;
                    var e = this.blocks
                      , t = this.lastByteIndex;
                    e[t >> 2] |= u[3 & t],
                    t >= 56 && (this.hashed || this.hash(),
                    e[0] = e[16],
                    e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0),
                    e[14] = this.bytes << 3,
                    e[15] = this.hBytes << 3 | this.bytes >>> 29,
                    this.hash()
                }
            }
            ,
            t.prototype.hash = function() {
                var e, t, r, n, o, a, i = this.blocks;
                this.first ? t = ((t = ((e = ((e = i[0] - 680876937) << 7 | e >>> 25) - 271733879 << 0) ^ (r = ((r = (-271733879 ^ (n = ((n = (-1732584194 ^ 2004318071 & e) + i[1] - 117830708) << 12 | n >>> 20) + e << 0) & (-271733879 ^ e)) + i[2] - 1126478375) << 17 | r >>> 15) + n << 0) & (n ^ e)) + i[3] - 1316259209) << 22 | t >>> 10) + r << 0 : (e = this.h0,
                t = this.h1,
                r = this.h2,
                t = ((t += ((e = ((e += ((n = this.h3) ^ t & (r ^ n)) + i[0] - 680876936) << 7 | e >>> 25) + t << 0) ^ (r = ((r += (t ^ (n = ((n += (r ^ e & (t ^ r)) + i[1] - 389564586) << 12 | n >>> 20) + e << 0) & (e ^ t)) + i[2] + 606105819) << 17 | r >>> 15) + n << 0) & (n ^ e)) + i[3] - 1044525330) << 22 | t >>> 10) + r << 0),
                t = ((t += ((e = ((e += (n ^ t & (r ^ n)) + i[4] - 176418897) << 7 | e >>> 25) + t << 0) ^ (r = ((r += (t ^ (n = ((n += (r ^ e & (t ^ r)) + i[5] + 1200080426) << 12 | n >>> 20) + e << 0) & (e ^ t)) + i[6] - 1473231341) << 17 | r >>> 15) + n << 0) & (n ^ e)) + i[7] - 45705983) << 22 | t >>> 10) + r << 0,
                t = ((t += ((e = ((e += (n ^ t & (r ^ n)) + i[8] + 1770035416) << 7 | e >>> 25) + t << 0) ^ (r = ((r += (t ^ (n = ((n += (r ^ e & (t ^ r)) + i[9] - 1958414417) << 12 | n >>> 20) + e << 0) & (e ^ t)) + i[10] - 42063) << 17 | r >>> 15) + n << 0) & (n ^ e)) + i[11] - 1990404162) << 22 | t >>> 10) + r << 0,
                t = ((t += ((e = ((e += (n ^ t & (r ^ n)) + i[12] + 1804603682) << 7 | e >>> 25) + t << 0) ^ (r = ((r += (t ^ (n = ((n += (r ^ e & (t ^ r)) + i[13] - 40341101) << 12 | n >>> 20) + e << 0) & (e ^ t)) + i[14] - 1502002290) << 17 | r >>> 15) + n << 0) & (n ^ e)) + i[15] + 1236535329) << 22 | t >>> 10) + r << 0,
                t = ((t += ((n = ((n += (t ^ r & ((e = ((e += (r ^ n & (t ^ r)) + i[1] - 165796510) << 5 | e >>> 27) + t << 0) ^ t)) + i[6] - 1069501632) << 9 | n >>> 23) + e << 0) ^ e & ((r = ((r += (e ^ t & (n ^ e)) + i[11] + 643717713) << 14 | r >>> 18) + n << 0) ^ n)) + i[0] - 373897302) << 20 | t >>> 12) + r << 0,
                t = ((t += ((n = ((n += (t ^ r & ((e = ((e += (r ^ n & (t ^ r)) + i[5] - 701558691) << 5 | e >>> 27) + t << 0) ^ t)) + i[10] + 38016083) << 9 | n >>> 23) + e << 0) ^ e & ((r = ((r += (e ^ t & (n ^ e)) + i[15] - 660478335) << 14 | r >>> 18) + n << 0) ^ n)) + i[4] - 405537848) << 20 | t >>> 12) + r << 0,
                t = ((t += ((n = ((n += (t ^ r & ((e = ((e += (r ^ n & (t ^ r)) + i[9] + 568446438) << 5 | e >>> 27) + t << 0) ^ t)) + i[14] - 1019803690) << 9 | n >>> 23) + e << 0) ^ e & ((r = ((r += (e ^ t & (n ^ e)) + i[3] - 187363961) << 14 | r >>> 18) + n << 0) ^ n)) + i[8] + 1163531501) << 20 | t >>> 12) + r << 0,
                t = ((t += ((n = ((n += (t ^ r & ((e = ((e += (r ^ n & (t ^ r)) + i[13] - 1444681467) << 5 | e >>> 27) + t << 0) ^ t)) + i[2] - 51403784) << 9 | n >>> 23) + e << 0) ^ e & ((r = ((r += (e ^ t & (n ^ e)) + i[7] + 1735328473) << 14 | r >>> 18) + n << 0) ^ n)) + i[12] - 1926607734) << 20 | t >>> 12) + r << 0,
                t = ((t += ((a = (n = ((n += ((o = t ^ r) ^ (e = ((e += (o ^ n) + i[5] - 378558) << 4 | e >>> 28) + t << 0)) + i[8] - 2022574463) << 11 | n >>> 21) + e << 0) ^ e) ^ (r = ((r += (a ^ t) + i[11] + 1839030562) << 16 | r >>> 16) + n << 0)) + i[14] - 35309556) << 23 | t >>> 9) + r << 0,
                t = ((t += ((a = (n = ((n += ((o = t ^ r) ^ (e = ((e += (o ^ n) + i[1] - 1530992060) << 4 | e >>> 28) + t << 0)) + i[4] + 1272893353) << 11 | n >>> 21) + e << 0) ^ e) ^ (r = ((r += (a ^ t) + i[7] - 155497632) << 16 | r >>> 16) + n << 0)) + i[10] - 1094730640) << 23 | t >>> 9) + r << 0,
                t = ((t += ((a = (n = ((n += ((o = t ^ r) ^ (e = ((e += (o ^ n) + i[13] + 681279174) << 4 | e >>> 28) + t << 0)) + i[0] - 358537222) << 11 | n >>> 21) + e << 0) ^ e) ^ (r = ((r += (a ^ t) + i[3] - 722521979) << 16 | r >>> 16) + n << 0)) + i[6] + 76029189) << 23 | t >>> 9) + r << 0,
                t = ((t += ((a = (n = ((n += ((o = t ^ r) ^ (e = ((e += (o ^ n) + i[9] - 640364487) << 4 | e >>> 28) + t << 0)) + i[12] - 421815835) << 11 | n >>> 21) + e << 0) ^ e) ^ (r = ((r += (a ^ t) + i[15] + 530742520) << 16 | r >>> 16) + n << 0)) + i[2] - 995338651) << 23 | t >>> 9) + r << 0,
                t = ((t += ((n = ((n += (t ^ ((e = ((e += (r ^ (t | ~n)) + i[0] - 198630844) << 6 | e >>> 26) + t << 0) | ~r)) + i[7] + 1126891415) << 10 | n >>> 22) + e << 0) ^ ((r = ((r += (e ^ (n | ~t)) + i[14] - 1416354905) << 15 | r >>> 17) + n << 0) | ~e)) + i[5] - 57434055) << 21 | t >>> 11) + r << 0,
                t = ((t += ((n = ((n += (t ^ ((e = ((e += (r ^ (t | ~n)) + i[12] + 1700485571) << 6 | e >>> 26) + t << 0) | ~r)) + i[3] - 1894986606) << 10 | n >>> 22) + e << 0) ^ ((r = ((r += (e ^ (n | ~t)) + i[10] - 1051523) << 15 | r >>> 17) + n << 0) | ~e)) + i[1] - 2054922799) << 21 | t >>> 11) + r << 0,
                t = ((t += ((n = ((n += (t ^ ((e = ((e += (r ^ (t | ~n)) + i[8] + 1873313359) << 6 | e >>> 26) + t << 0) | ~r)) + i[15] - 30611744) << 10 | n >>> 22) + e << 0) ^ ((r = ((r += (e ^ (n | ~t)) + i[6] - 1560198380) << 15 | r >>> 17) + n << 0) | ~e)) + i[13] + 1309151649) << 21 | t >>> 11) + r << 0,
                t = ((t += ((n = ((n += (t ^ ((e = ((e += (r ^ (t | ~n)) + i[4] - 145523070) << 6 | e >>> 26) + t << 0) | ~r)) + i[11] - 1120210379) << 10 | n >>> 22) + e << 0) ^ ((r = ((r += (e ^ (n | ~t)) + i[2] + 718787259) << 15 | r >>> 17) + n << 0) | ~e)) + i[9] - 343485551) << 21 | t >>> 11) + r << 0,
                this.first ? (this.h0 = e + 1732584193 << 0,
                this.h1 = t - 271733879 << 0,
                this.h2 = r - 1732584194 << 0,
                this.h3 = n + 271733878 << 0,
                this.first = !1) : (this.h0 = this.h0 + e << 0,
                this.h1 = this.h1 + t << 0,
                this.h2 = this.h2 + r << 0,
                this.h3 = this.h3 + n << 0)
            }
            ,
            t.prototype.hex = function() {
                this.finalize();
                var e = this.h0
                  , t = this.h1
                  , r = this.h2
                  , o = this.h3;
                return n[e >> 4 & 15] + n[15 & e] + n[e >> 12 & 15] + n[e >> 8 & 15] + n[e >> 20 & 15] + n[e >> 16 & 15] + n[e >> 28 & 15] + n[e >> 24 & 15] + n[t >> 4 & 15] + n[15 & t] + n[t >> 12 & 15] + n[t >> 8 & 15] + n[t >> 20 & 15] + n[t >> 16 & 15] + n[t >> 28 & 15] + n[t >> 24 & 15] + n[r >> 4 & 15] + n[15 & r] + n[r >> 12 & 15] + n[r >> 8 & 15] + n[r >> 20 & 15] + n[r >> 16 & 15] + n[r >> 28 & 15] + n[r >> 24 & 15] + n[o >> 4 & 15] + n[15 & o] + n[o >> 12 & 15] + n[o >> 8 & 15] + n[o >> 20 & 15] + n[o >> 16 & 15] + n[o >> 28 & 15] + n[o >> 24 & 15]
            }
            ,
            t.prototype.toString = t.prototype.hex,
            t.prototype.digest = function() {
                this.finalize();
                var e = this.h0
                  , t = this.h1
                  , r = this.h2
                  , n = this.h3;
                return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255]
            }
            ,
            t.prototype.array = t.prototype.digest,
            t.prototype.arrayBuffer = function() {
                this.finalize();
                var e = new ArrayBuffer(16)
                  , t = new Uint32Array(e);
                return t[0] = this.h0,
                t[1] = this.h1,
                t[2] = this.h2,
                t[3] = this.h3,
                e
            }
            ,
            t.prototype.buffer = t.prototype.arrayBuffer,
            t.prototype.base64 = function() {
                for (var e, t, r, n = "", o = this.array(), a = 0; a < 15; )
                    e = o[a++],
                    t = o[a++],
                    r = o[a++],
                    n += p[e >>> 2] + p[63 & (e << 4 | t >>> 4)] + p[63 & (t << 2 | r >>> 6)] + p[63 & r];
                return e = o[a],
                n + (p[e >>> 2] + p[e << 4 & 63] + "==")
            }
            ;
            var _ = v();
            f ? module.exports = _ : (i.md5 = _,
            o && define(function() {
                return _
            }))
            e = "hex";
            return new t(!0).update(ccey)[e]()
    }
    cc.md5 = md5
    function _u_d(e) {
    for (var t = "", n = 0, r = 0, o = 0, i = 0; n < e.length; )
        (r = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(r),
        n++) : r > 191 && r < 224 ? (o = e.charCodeAt(n + 1),
        t += String.fromCharCode((31 & r) << 6 | 63 & o),
        n += 2) : (o = e.charCodeAt(n + 1),
        i = e.charCodeAt(n + 2),
        t += String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & i),
        n += 3);
    return t
}
    cc._u_d = _u_d
    function _u_e(e) {
                        if (null == e)
                            return null;
                        e = e.replace(/\r\n/g, "\n");
                        for (var t = "", n = 0; n < e.length; n++) {
                            var r = e.charCodeAt(n);
                            r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192),
                            t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224),
                            t += String.fromCharCode(r >> 6 & 63 | 128),
                            t += String.fromCharCode(63 & r | 128))
                        }
                        return t
                    };
    cc._u_e = _u_e
    function e1(e) {
                    if (null == e)
                        return null;
                    for (var t, n, r, o, i, a, u, c = "", l = 0; l < e.length; )
                        o = (t = e.charCodeAt(l++)) >> 2,
                        i = (3 & t) << 4 | (n = e.charCodeAt(l++)) >> 4,
                        a = (15 & n) << 2 | (r = e.charCodeAt(l++)) >> 6,
                        u = 63 & r,
                        isNaN(n) ? a = u = 64 : isNaN(r) && (u = 64),
                        c = c + _keyStr.charAt(o) + _keyStr.charAt(i) + _keyStr.charAt(a) + _keyStr.charAt(u);
                    return c
                };
    cc.e1 = e1
    function e2(e) {
                    if (null == (e = _u_e(e)))
                        return null;
                    for (var t = "", n = 0; n < e.length; n++) {
                        var r = _p.charCodeAt(n % _p.length);
                        t += String.fromCharCode(e.charCodeAt(n) ^ r)
                    }
                    return t
                };
    cc.e2 = e2
    function sig(e) {
            return md5(e + cc._p).toUpperCase()
        };
    cc.sig = sig
    // 解密方法
    jiemi = function (s){
         s = s.d;
        function _u_d(e) {
            for (var t = "", n = 0, r = 0, o = 0, i = 0; n < e.length; )
                (r = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(r),
                n++) : r > 191 && r < 224 ? (o = e.charCodeAt(n + 1),
                t += String.fromCharCode((31 & r) << 6 | 63 & o),
                n += 2) : (o = e.charCodeAt(n + 1),
                i = e.charCodeAt(n + 2),
                t += String.fromCharCode((15 & r) << 12 | (63 & o) << 6 | 63 & i),
                n += 3);
            return t
        }
        u = {
            a:function d1(e) {
                        var t, n, r, o, i, a, u = "", c = 0;
                        for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < e.length; )
                            t = _keyStr.indexOf(e.charAt(c++)) << 2 | (o = _keyStr.indexOf(e.charAt(c++))) >> 4,
                            n = (15 & o) << 4 | (i = _keyStr.indexOf(e.charAt(c++))) >> 2,
                            r = (3 & i) << 6 | (a = _keyStr.indexOf(e.charAt(c++))),
                            u += String.fromCharCode(t),
                            64 != i && (u += String.fromCharCode(n)),
                            64 != a && (u += String.fromCharCode(r));
                        return u
            },
            b:function d2(e) {
                        for (var t = "", n = 0; n < e.length; n++) {
                            var r = _p.charCodeAt(n % _p.length);
                            t += String.fromCharCode(e.charCodeAt(n) ^ r)
                        }
                        return t = _u_d(t)
            },
        }
        var d = Object(u.a)(s)
        , y = Object(u.b)(d)
        , v = JSON.parse(y);
        return v
    }
    cc.jiemi = jiemi
    return cc
}
module.exports = item1_mod()
// ------------------------------------------------

