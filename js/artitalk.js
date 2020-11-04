/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/**
 * Minified by jsDelivr using Terser v5.3.0.
 * Original file: /gh/Artitalk/Artitalk-jsdelivr@master/at312.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AV = t() : e.AV = t()
}("undefined" != typeof self ? self : this, (function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 80)
    }([function(e, t, n) {
        (function(e, n) {
            var r;
            ! function() {
                var i = "object" == typeof self && self.self === self && self || "object" == typeof e && e.global === e && e || this || {},
                    o = i._,
                    a = Array.prototype,
                    s = Object.prototype,
                    u = "undefined" != typeof Symbol ? Symbol.prototype : null,
                    c = a.push,
                    l = a.slice,
                    h = s.toString,
                    d = s.hasOwnProperty,
                    p = Array.isArray,
                    f = Object.keys,
                    g = Object.create,
                    m = function() {},
                    _ = function(e) {
                        return e instanceof _ ? e : this instanceof _ ? void(this._wrapped = e) : new _(e)
                    };
                void 0 === t || t.nodeType ? i._ = _ : (void 0 !== n && !n.nodeType && n.exports && (t = n.exports = _), t._ = _), _.VERSION = "1.9.1";
                var v, b = function(e, t, n) {
                        if (void 0 === t) return e;
                        switch (null == n ? 3 : n) {
                            case 1:
                                return function(n) {
                                    return e.call(t, n)
                                };
                            case 3:
                                return function(n, r, i) {
                                    return e.call(t, n, r, i)
                                };
                            case 4:
                                return function(n, r, i, o) {
                                    return e.call(t, n, r, i, o)
                                }
                        }
                        return function() {
                            return e.apply(t, arguments)
                        }
                    },
                    y = function(e, t, n) {
                        return _.iteratee !== v ? _.iteratee(e, t) : null == e ? _.identity : _.isFunction(e) ? b(e, t, n) : _.isObject(e) && !_.isArray(e) ? _.matcher(e) : _.property(e)
                    };
                _.iteratee = v = function(e, t) {
                    return y(e, t, 1 / 0)
                };
                var w = function(e, t) {
                        return t = null == t ? e.length - 1 : +t,
                            function() {
                                for (var n = Math.max(arguments.length - t, 0), r = Array(n), i = 0; i < n; i++) r[i] = arguments[i + t];
                                switch (t) {
                                    case 0:
                                        return e.call(this, r);
                                    case 1:
                                        return e.call(this, arguments[0], r);
                                    case 2:
                                        return e.call(this, arguments[0], arguments[1], r)
                                }
                                var o = Array(t + 1);
                                for (i = 0; i < t; i++) o[i] = arguments[i];
                                return o[t] = r, e.apply(this, o)
                            }
                    },
                    k = function(e) {
                        if (!_.isObject(e)) return {};
                        if (g) return g(e);
                        m.prototype = e;
                        var t = new m;
                        return m.prototype = null, t
                    },
                    j = function(e) {
                        return function(t) {
                            return null == t ? void 0 : t[e]
                        }
                    },
                    A = function(e, t) {
                        return null != e && d.call(e, t)
                    },
                    x = function(e, t) {
                        for (var n = t.length, r = 0; r < n; r++) {
                            if (null == e) return;
                            e = e[t[r]]
                        }
                        return n ? e : void 0
                    },
                    E = Math.pow(2, 53) - 1,
                    S = j("length"),
                    O = function(e) {
                        var t = S(e);
                        return "number" == typeof t && t >= 0 && t <= E
                    };
                _.each = _.forEach = function(e, t, n) {
                    var r, i;
                    if (t = b(t, n), O(e))
                        for (r = 0, i = e.length; r < i; r++) t(e[r], r, e);
                    else {
                        var o = _.keys(e);
                        for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e)
                    }
                    return e
                }, _.map = _.collect = function(e, t, n) {
                    t = y(t, n);
                    for (var r = !O(e) && _.keys(e), i = (r || e).length, o = Array(i), a = 0; a < i; a++) {
                        var s = r ? r[a] : a;
                        o[a] = t(e[s], s, e)
                    }
                    return o
                };
                var C = function(e) {
                    var t = function(t, n, r, i) {
                        var o = !O(t) && _.keys(t),
                            a = (o || t).length,
                            s = e > 0 ? 0 : a - 1;
                        for (i || (r = t[o ? o[s] : s], s += e); s >= 0 && s < a; s += e) {
                            var u = o ? o[s] : s;
                            r = n(r, t[u], u, t)
                        }
                        return r
                    };
                    return function(e, n, r, i) {
                        var o = arguments.length >= 3;
                        return t(e, b(n, i, 4), r, o)
                    }
                };
                _.reduce = _.foldl = _.inject = C(1), _.reduceRight = _.foldr = C(-1), _.find = _.detect = function(e, t, n) {
                    var r = (O(e) ? _.findIndex : _.findKey)(e, t, n);
                    if (void 0 !== r && -1 !== r) return e[r]
                }, _.filter = _.select = function(e, t, n) {
                    var r = [];
                    return t = y(t, n), _.each(e, (function(e, n, i) {
                        t(e, n, i) && r.push(e)
                    })), r
                }, _.reject = function(e, t, n) {
                    return _.filter(e, _.negate(y(t)), n)
                }, _.every = _.all = function(e, t, n) {
                    t = y(t, n);
                    for (var r = !O(e) && _.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                        var a = r ? r[o] : o;
                        if (!t(e[a], a, e)) return !1
                    }
                    return !0
                }, _.some = _.any = function(e, t, n) {
                    t = y(t, n);
                    for (var r = !O(e) && _.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                        var a = r ? r[o] : o;
                        if (t(e[a], a, e)) return !0
                    }
                    return !1
                }, _.contains = _.includes = _.include = function(e, t, n, r) {
                    return O(e) || (e = _.values(e)), ("number" != typeof n || r) && (n = 0), _.indexOf(e, t, n) >= 0
                }, _.invoke = w((function(e, t, n) {
                    var r, i;
                    return _.isFunction(t) ? i = t : _.isArray(t) && (r = t.slice(0, -1), t = t[t.length - 1]), _.map(e, (function(e) {
                        var o = i;
                        if (!o) {
                            if (r && r.length && (e = x(e, r)), null == e) return;
                            o = e[t]
                        }
                        return null == o ? o : o.apply(e, n)
                    }))
                })), _.pluck = function(e, t) {
                    return _.map(e, _.property(t))
                }, _.where = function(e, t) {
                    return _.filter(e, _.matcher(t))
                }, _.findWhere = function(e, t) {
                    return _.find(e, _.matcher(t))
                }, _.max = function(e, t, n) {
                    var r, i, o = -1 / 0,
                        a = -1 / 0;
                    if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e)
                        for (var s = 0, u = (e = O(e) ? e : _.values(e)).length; s < u; s++) null != (r = e[s]) && r > o && (o = r);
                    else t = y(t, n), _.each(e, (function(e, n, r) {
                        ((i = t(e, n, r)) > a || i === -1 / 0 && o === -1 / 0) && (o = e, a = i)
                    }));
                    return o
                }, _.min = function(e, t, n) {
                    var r, i, o = 1 / 0,
                        a = 1 / 0;
                    if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e)
                        for (var s = 0, u = (e = O(e) ? e : _.values(e)).length; s < u; s++) null != (r = e[s]) && r < o && (o = r);
                    else t = y(t, n), _.each(e, (function(e, n, r) {
                        ((i = t(e, n, r)) < a || i === 1 / 0 && o === 1 / 0) && (o = e, a = i)
                    }));
                    return o
                }, _.shuffle = function(e) {
                    return _.sample(e, 1 / 0)
                }, _.sample = function(e, t, n) {
                    if (null == t || n) return O(e) || (e = _.values(e)), e[_.random(e.length - 1)];
                    var r = O(e) ? _.clone(e) : _.values(e),
                        i = S(r);
                    t = Math.max(Math.min(t, i), 0);
                    for (var o = i - 1, a = 0; a < t; a++) {
                        var s = _.random(a, o),
                            u = r[a];
                        r[a] = r[s], r[s] = u
                    }
                    return r.slice(0, t)
                }, _.sortBy = function(e, t, n) {
                    var r = 0;
                    return t = y(t, n), _.pluck(_.map(e, (function(e, n, i) {
                        return {
                            value: e,
                            index: r++,
                            criteria: t(e, n, i)
                        }
                    })).sort((function(e, t) {
                        var n = e.criteria,
                            r = t.criteria;
                        if (n !== r) {
                            if (n > r || void 0 === n) return 1;
                            if (n < r || void 0 === r) return -1
                        }
                        return e.index - t.index
                    })), "value")
                };
                var T = function(e, t) {
                    return function(n, r, i) {
                        var o = t ? [
                            [],
                            []
                        ] : {};
                        return r = y(r, i), _.each(n, (function(t, i) {
                            var a = r(t, i, n);
                            e(o, t, a)
                        })), o
                    }
                };
                _.groupBy = T((function(e, t, n) {
                    A(e, n) ? e[n].push(t) : e[n] = [t]
                })), _.indexBy = T((function(e, t, n) {
                    e[n] = t
                })), _.countBy = T((function(e, t, n) {
                    A(e, n) ? e[n]++ : e[n] = 1
                }));
                var P = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
                _.toArray = function(e) {
                    return e ? _.isArray(e) ? l.call(e) : _.isString(e) ? e.match(P) : O(e) ? _.map(e, _.identity) : _.values(e) : []
                }, _.size = function(e) {
                    return null == e ? 0 : O(e) ? e.length : _.keys(e).length
                }, _.partition = T((function(e, t, n) {
                    e[n ? 0 : 1].push(t)
                }), !0), _.first = _.head = _.take = function(e, t, n) {
                    return null == e || e.length < 1 ? null == t ? void 0 : [] : null == t || n ? e[0] : _.initial(e, e.length - t)
                }, _.initial = function(e, t, n) {
                    return l.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
                }, _.last = function(e, t, n) {
                    return null == e || e.length < 1 ? null == t ? void 0 : [] : null == t || n ? e[e.length - 1] : _.rest(e, Math.max(0, e.length - t))
                }, _.rest = _.tail = _.drop = function(e, t, n) {
                    return l.call(e, null == t || n ? 1 : t)
                }, _.compact = function(e) {
                    return _.filter(e, Boolean)
                };
                var z = function(e, t, n, r) {
                    for (var i = (r = r || []).length, o = 0, a = S(e); o < a; o++) {
                        var s = e[o];
                        if (O(s) && (_.isArray(s) || _.isArguments(s)))
                            if (t)
                                for (var u = 0, c = s.length; u < c;) r[i++] = s[u++];
                            else z(s, t, n, r), i = r.length;
                        else n || (r[i++] = s)
                    }
                    return r
                };
                _.flatten = function(e, t) {
                    return z(e, t, !1)
                }, _.without = w((function(e, t) {
                    return _.difference(e, t)
                })), _.uniq = _.unique = function(e, t, n, r) {
                    _.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = y(n, r));
                    for (var i = [], o = [], a = 0, s = S(e); a < s; a++) {
                        var u = e[a],
                            c = n ? n(u, a, e) : u;
                        t && !n ? (a && o === c || i.push(u), o = c) : n ? _.contains(o, c) || (o.push(c), i.push(u)) : _.contains(i, u) || i.push(u)
                    }
                    return i
                }, _.union = w((function(e) {
                    return _.uniq(z(e, !0, !0))
                })), _.intersection = function(e) {
                    for (var t = [], n = arguments.length, r = 0, i = S(e); r < i; r++) {
                        var o = e[r];
                        if (!_.contains(t, o)) {
                            var a;
                            for (a = 1; a < n && _.contains(arguments[a], o); a++);
                            a === n && t.push(o)
                        }
                    }
                    return t
                }, _.difference = w((function(e, t) {
                    return t = z(t, !0, !0), _.filter(e, (function(e) {
                        return !_.contains(t, e)
                    }))
                })), _.unzip = function(e) {
                    for (var t = e && _.max(e, S).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = _.pluck(e, r);
                    return n
                }, _.zip = w(_.unzip), _.object = function(e, t) {
                    for (var n = {}, r = 0, i = S(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                    return n
                };
                var I = function(e) {
                    return function(t, n, r) {
                        n = y(n, r);
                        for (var i = S(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
                            if (n(t[o], o, t)) return o;
                        return -1
                    }
                };
                _.findIndex = I(1), _.findLastIndex = I(-1), _.sortedIndex = function(e, t, n, r) {
                    for (var i = (n = y(n, r, 1))(t), o = 0, a = S(e); o < a;) {
                        var s = Math.floor((o + a) / 2);
                        n(e[s]) < i ? o = s + 1 : a = s
                    }
                    return o
                };
                var M = function(e, t, n) {
                    return function(r, i, o) {
                        var a = 0,
                            s = S(r);
                        if ("number" == typeof o) e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1;
                        else if (n && o && s) return r[o = n(r, i)] === i ? o : -1;
                        if (i != i) return (o = t(l.call(r, a, s), _.isNaN)) >= 0 ? o + a : -1;
                        for (o = e > 0 ? a : s - 1; o >= 0 && o < s; o += e)
                            if (r[o] === i) return o;
                        return -1
                    }
                };
                _.indexOf = M(1, _.findIndex, _.sortedIndex), _.lastIndexOf = M(-1, _.findLastIndex), _.range = function(e, t, n) {
                    null == t && (t = e || 0, e = 0), n || (n = t < e ? -1 : 1);
                    for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n) i[o] = e;
                    return i
                }, _.chunk = function(e, t) {
                    if (null == t || t < 1) return [];
                    for (var n = [], r = 0, i = e.length; r < i;) n.push(l.call(e, r, r += t));
                    return n
                };
                var q = function(e, t, n, r, i) {
                    if (!(r instanceof t)) return e.apply(n, i);
                    var o = k(e.prototype),
                        a = e.apply(o, i);
                    return _.isObject(a) ? a : o
                };
                _.bind = w((function(e, t, n) {
                    if (!_.isFunction(e)) throw new TypeError("Bind must be called on a function");
                    var r = w((function(i) {
                        return q(e, r, t, this, n.concat(i))
                    }));
                    return r
                })), _.partial = w((function(e, t) {
                    var n = _.partial.placeholder,
                        r = function() {
                            for (var i = 0, o = t.length, a = Array(o), s = 0; s < o; s++) a[s] = t[s] === n ? arguments[i++] : t[s];
                            for (; i < arguments.length;) a.push(arguments[i++]);
                            return q(e, r, this, this, a)
                        };
                    return r
                })), _.partial.placeholder = _, _.bindAll = w((function(e, t) {
                    var n = (t = z(t, !1, !1)).length;
                    if (n < 1) throw new Error("bindAll must be passed function names");
                    for (; n--;) {
                        var r = t[n];
                        e[r] = _.bind(e[r], e)
                    }
                })), _.memoize = function(e, t) {
                    var n = function(r) {
                        var i = n.cache,
                            o = "" + (t ? t.apply(this, arguments) : r);
                        return A(i, o) || (i[o] = e.apply(this, arguments)), i[o]
                    };
                    return n.cache = {}, n
                }, _.delay = w((function(e, t, n) {
                    return setTimeout((function() {
                        return e.apply(null, n)
                    }), t)
                })), _.defer = _.partial(_.delay, _, 1), _.throttle = function(e, t, n) {
                    var r, i, o, a, s = 0;
                    n || (n = {});
                    var u = function() {
                            s = !1 === n.leading ? 0 : _.now(), r = null, a = e.apply(i, o), r || (i = o = null)
                        },
                        c = function() {
                            var c = _.now();
                            s || !1 !== n.leading || (s = c);
                            var l = t - (c - s);
                            return i = this, o = arguments, l <= 0 || l > t ? (r && (clearTimeout(r), r = null), s = c, a = e.apply(i, o), r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(u, l)), a
                        };
                    return c.cancel = function() {
                        clearTimeout(r), s = 0, r = i = o = null
                    }, c
                }, _.debounce = function(e, t, n) {
                    var r, i, o = function(t, n) {
                            r = null, n && (i = e.apply(t, n))
                        },
                        a = w((function(a) {
                            if (r && clearTimeout(r), n) {
                                var s = !r;
                                r = setTimeout(o, t), s && (i = e.apply(this, a))
                            } else r = _.delay(o, t, this, a);
                            return i
                        }));
                    return a.cancel = function() {
                        clearTimeout(r), r = null
                    }, a
                }, _.wrap = function(e, t) {
                    return _.partial(t, e)
                }, _.negate = function(e) {
                    return function() {
                        return !e.apply(this, arguments)
                    }
                }, _.compose = function() {
                    var e = arguments,
                        t = e.length - 1;
                    return function() {
                        for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
                        return r
                    }
                }, _.after = function(e, t) {
                    return function() {
                        if (--e < 1) return t.apply(this, arguments)
                    }
                }, _.before = function(e, t) {
                    var n;
                    return function() {
                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
                    }
                }, _.once = _.partial(_.before, 2), _.restArguments = w;
                var N = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    L = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                    U = function(e, t) {
                        var n = L.length,
                            r = e.constructor,
                            i = _.isFunction(r) && r.prototype || s,
                            o = "constructor";
                        for (A(e, o) && !_.contains(t, o) && t.push(o); n--;)(o = L[n]) in e && e[o] !== i[o] && !_.contains(t, o) && t.push(o)
                    };
                _.keys = function(e) {
                    if (!_.isObject(e)) return [];
                    if (f) return f(e);
                    var t = [];
                    for (var n in e) A(e, n) && t.push(n);
                    return N && U(e, t), t
                }, _.allKeys = function(e) {
                    if (!_.isObject(e)) return [];
                    var t = [];
                    for (var n in e) t.push(n);
                    return N && U(e, t), t
                }, _.values = function(e) {
                    for (var t = _.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
                    return r
                }, _.mapObject = function(e, t, n) {
                    t = y(t, n);
                    for (var r = _.keys(e), i = r.length, o = {}, a = 0; a < i; a++) {
                        var s = r[a];
                        o[s] = t(e[s], s, e)
                    }
                    return o
                }, _.pairs = function(e) {
                    for (var t = _.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [t[i], e[t[i]]];
                    return r
                }, _.invert = function(e) {
                    for (var t = {}, n = _.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
                    return t
                }, _.functions = _.methods = function(e) {
                    var t = [];
                    for (var n in e) _.isFunction(e[n]) && t.push(n);
                    return t.sort()
                };
                var B = function(e, t) {
                    return function(n) {
                        var r = arguments.length;
                        if (t && (n = Object(n)), r < 2 || null == n) return n;
                        for (var i = 1; i < r; i++)
                            for (var o = arguments[i], a = e(o), s = a.length, u = 0; u < s; u++) {
                                var c = a[u];
                                t && void 0 !== n[c] || (n[c] = o[c])
                            }
                        return n
                    }
                };
                _.extend = B(_.allKeys), _.extendOwn = _.assign = B(_.keys), _.findKey = function(e, t, n) {
                    t = y(t, n);
                    for (var r, i = _.keys(e), o = 0, a = i.length; o < a; o++)
                        if (t(e[r = i[o]], r, e)) return r
                };
                var R, D, F = function(e, t, n) {
                    return t in n
                };
                _.pick = w((function(e, t) {
                    var n = {},
                        r = t[0];
                    if (null == e) return n;
                    _.isFunction(r) ? (t.length > 1 && (r = b(r, t[1])), t = _.allKeys(e)) : (r = F, t = z(t, !1, !1), e = Object(e));
                    for (var i = 0, o = t.length; i < o; i++) {
                        var a = t[i],
                            s = e[a];
                        r(s, a, e) && (n[a] = s)
                    }
                    return n
                })), _.omit = w((function(e, t) {
                    var n, r = t[0];
                    return _.isFunction(r) ? (r = _.negate(r), t.length > 1 && (n = t[1])) : (t = _.map(z(t, !1, !1), String), r = function(e, n) {
                        return !_.contains(t, n)
                    }), _.pick(e, r, n)
                })), _.defaults = B(_.allKeys, !0), _.create = function(e, t) {
                    var n = k(e);
                    return t && _.extendOwn(n, t), n
                }, _.clone = function(e) {
                    return _.isObject(e) ? _.isArray(e) ? e.slice() : _.extend({}, e) : e
                }, _.tap = function(e, t) {
                    return t(e), e
                }, _.isMatch = function(e, t) {
                    var n = _.keys(t),
                        r = n.length;
                    if (null == e) return !r;
                    for (var i = Object(e), o = 0; o < r; o++) {
                        var a = n[o];
                        if (t[a] !== i[a] || !(a in i)) return !1
                    }
                    return !0
                }, R = function(e, t, n, r) {
                    if (e === t) return 0 !== e || 1 / e == 1 / t;
                    if (null == e || null == t) return !1;
                    if (e != e) return t != t;
                    var i = typeof e;
                    return ("function" === i || "object" === i || "object" == typeof t) && D(e, t, n, r)
                }, D = function(e, t, n, r) {
                    e instanceof _ && (e = e._wrapped), t instanceof _ && (t = t._wrapped);
                    var i = h.call(e);
                    if (i !== h.call(t)) return !1;
                    switch (i) {
                        case "[object RegExp]":
                        case "[object String]":
                            return "" + e == "" + t;
                        case "[object Number]":
                            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                        case "[object Date]":
                        case "[object Boolean]":
                            return +e == +t;
                        case "[object Symbol]":
                            return u.valueOf.call(e) === u.valueOf.call(t)
                    }
                    var o = "[object Array]" === i;
                    if (!o) {
                        if ("object" != typeof e || "object" != typeof t) return !1;
                        var a = e.constructor,
                            s = t.constructor;
                        if (a !== s && !(_.isFunction(a) && a instanceof a && _.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1
                    }
                    r = r || [];
                    for (var c = (n = n || []).length; c--;)
                        if (n[c] === e) return r[c] === t;
                    if (n.push(e), r.push(t), o) {
                        if ((c = e.length) !== t.length) return !1;
                        for (; c--;)
                            if (!R(e[c], t[c], n, r)) return !1
                    } else {
                        var l, d = _.keys(e);
                        if (c = d.length, _.keys(t).length !== c) return !1;
                        for (; c--;)
                            if (l = d[c], !A(t, l) || !R(e[l], t[l], n, r)) return !1
                    }
                    return n.pop(), r.pop(), !0
                }, _.isEqual = function(e, t) {
                    return R(e, t)
                }, _.isEmpty = function(e) {
                    return null == e || (O(e) && (_.isArray(e) || _.isString(e) || _.isArguments(e)) ? 0 === e.length : 0 === _.keys(e).length)
                }, _.isElement = function(e) {
                    return !(!e || 1 !== e.nodeType)
                }, _.isArray = p || function(e) {
                    return "[object Array]" === h.call(e)
                }, _.isObject = function(e) {
                    var t = typeof e;
                    return "function" === t || "object" === t && !!e
                }, _.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet"], (function(e) {
                    _["is" + e] = function(t) {
                        return h.call(t) === "[object " + e + "]"
                    }
                })), _.isArguments(arguments) || (_.isArguments = function(e) {
                    return A(e, "callee")
                });
                var H = i.document && i.document.childNodes;
                "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof H && (_.isFunction = function(e) {
                    return "function" == typeof e || !1
                }), _.isFinite = function(e) {
                    return !_.isSymbol(e) && isFinite(e) && !isNaN(parseFloat(e))
                }, _.isNaN = function(e) {
                    return _.isNumber(e) && isNaN(e)
                }, _.isBoolean = function(e) {
                    return !0 === e || !1 === e || "[object Boolean]" === h.call(e)
                }, _.isNull = function(e) {
                    return null === e
                }, _.isUndefined = function(e) {
                    return void 0 === e
                }, _.has = function(e, t) {
                    if (!_.isArray(t)) return A(e, t);
                    for (var n = t.length, r = 0; r < n; r++) {
                        var i = t[r];
                        if (null == e || !d.call(e, i)) return !1;
                        e = e[i]
                    }
                    return !!n
                }, _.noConflict = function() {
                    return i._ = o, this
                }, _.identity = function(e) {
                    return e
                }, _.constant = function(e) {
                    return function() {
                        return e
                    }
                }, _.noop = function() {}, _.property = function(e) {
                    return _.isArray(e) ? function(t) {
                        return x(t, e)
                    } : j(e)
                }, _.propertyOf = function(e) {
                    return null == e ? function() {} : function(t) {
                        return _.isArray(t) ? x(e, t) : e[t]
                    }
                }, _.matcher = _.matches = function(e) {
                    return e = _.extendOwn({}, e),
                        function(t) {
                            return _.isMatch(t, e)
                        }
                }, _.times = function(e, t, n) {
                    var r = Array(Math.max(0, e));
                    t = b(t, n, 1);
                    for (var i = 0; i < e; i++) r[i] = t(i);
                    return r
                }, _.random = function(e, t) {
                    return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
                }, _.now = Date.now || function() {
                    return (new Date).getTime()
                };
                var W = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;",
                        "`": "&#x60;"
                    },
                    V = _.invert(W),
                    Q = function(e) {
                        var t = function(t) {
                                return e[t]
                            },
                            n = "(?:" + _.keys(e).join("|") + ")",
                            r = RegExp(n),
                            i = RegExp(n, "g");
                        return function(e) {
                            return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e
                        }
                    };
                _.escape = Q(W), _.unescape = Q(V), _.result = function(e, t, n) {
                    _.isArray(t) || (t = [t]);
                    var r = t.length;
                    if (!r) return _.isFunction(n) ? n.call(e) : n;
                    for (var i = 0; i < r; i++) {
                        var o = null == e ? void 0 : e[t[i]];
                        void 0 === o && (o = n, i = r), e = _.isFunction(o) ? o.call(e) : o
                    }
                    return e
                };
                var G = 0;
                _.uniqueId = function(e) {
                    var t = ++G + "";
                    return e ? e + t : t
                }, _.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var K = /(.)^/,
                    $ = {
                        "'": "'",
                        "\\": "\\",
                        "\r": "r",
                        "\n": "n",
                        "\u2028": "u2028",
                        "\u2029": "u2029"
                    },
                    J = /\\|'|\r|\n|\u2028|\u2029/g,
                    X = function(e) {
                        return "\\" + $[e]
                    };
                _.template = function(e, t, n) {
                    !t && n && (t = n), t = _.defaults({}, t, _.templateSettings);
                    var r, i = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"),
                        o = 0,
                        a = "__p+='";
                    e.replace(i, (function(t, n, r, i, s) {
                        return a += e.slice(o, s).replace(J, X), o = s + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
                    })), a += "';\n", t.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
                    try {
                        r = new Function(t.variable || "obj", "_", a)
                    } catch (e) {
                        throw e.source = a, e
                    }
                    var s = function(e) {
                        return r.call(this, e, _)
                    };
                    return s.source = "function(" + (t.variable || "obj") + "){\n" + a + "}", s
                }, _.chain = function(e) {
                    var t = _(e);
                    return t._chain = !0, t
                };
                var Z = function(e, t) {
                    return e._chain ? _(t).chain() : t
                };
                _.mixin = function(e) {
                    return _.each(_.functions(e), (function(t) {
                        var n = _[t] = e[t];
                        _.prototype[t] = function() {
                            var e = [this._wrapped];
                            return c.apply(e, arguments), Z(this, n.apply(_, e))
                        }
                    })), _
                }, _.mixin(_), _.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], (function(e) {
                    var t = a[e];
                    _.prototype[e] = function() {
                        var n = this._wrapped;
                        return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], Z(this, n)
                    }
                })), _.each(["concat", "join", "slice"], (function(e) {
                    var t = a[e];
                    _.prototype[e] = function() {
                        return Z(this, t.apply(this._wrapped, arguments))
                    }
                })), _.prototype.value = function() {
                    return this._wrapped
                }, _.prototype.valueOf = _.prototype.toJSON = _.prototype.value, _.prototype.toString = function() {
                    return String(this._wrapped)
                }, void 0 !== (r = function() {
                    return _
                }.apply(t, [])) && (n.exports = r)
            }()
        }).call(t, n(66), n(103)(e))
    }, function(e, t) {
        var n = e.exports = {
            version: "2.6.9"
        };
        "number" == typeof __e && (__e = n)
    }, function(e, t, n) {
        e.exports = {
            default: n(83),
            __esModule: !0
        }
    }, function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(e, t, n) {
        var r = n(42)("wks"),
            i = n(31),
            o = n(3).Symbol,
            a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }).store = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = r(n(2)),
            o = r(n(111)),
            a = r(n(9)),
            s = r(n(27)),
            u = r(n(67)),
            c = n(0),
            l = n(123).timeout,
            h = n(19),
            d = h("leancloud:request"),
            p = h("leancloud:request:error"),
            f = n(28).getAdapter,
            g = 0,
            m = function(e) {
                return c.isArray(e) ? e : null == e ? [] : [e]
            },
            _ = function() {};
        e.exports = {
            ajax: function(e) {
                var t = e.method,
                    n = e.url,
                    r = e.query,
                    i = e.data,
                    o = e.headers,
                    c = void 0 === o ? {} : o,
                    m = e.timeout,
                    _ = e.onprogress;
                if (r) {
                    var v = (0, u.default)(r).map((function(e) {
                        var t = r[e];
                        if (void 0 !== t) {
                            var n = "object" === (void 0 === t ? "undefined" : (0, s.default)(t)) ? (0, a.default)(t) : t;
                            return encodeURIComponent(e) + "=" + encodeURIComponent(n)
                        }
                    })).filter((function(e) {
                        return e
                    })).join("&");
                    n = n + "?" + v
                }
                var b = g++;
                d("request(%d) %s %s %o %o %o", b, t, n, r, i, c);
                var y = f("request")(n, {
                    method: t,
                    headers: c,
                    data: i,
                    onprogress: _
                }).then((function(e) {
                    if (d("response(%d) %d %O %o", b, e.status, e.data || e.text, e.header), !1 === e.ok) {
                        var t = new Error;
                        throw t.response = e, t
                    }
                    return e.data
                })).catch((function(e) {
                    throw e.response && (h.enabled("leancloud:request") || p("request(%d) %s %s %o %o %o", b, t, n, r, i, c), p("response(%d) %d %O %o", b, e.response.status, e.response.data || e.response.text, e.response.header), e.statusCode = e.response.status, e.responseText = e.response.text, e.response = e.response.data), e
                }));
                return m ? l(y, m) : y
            },
            isNullOrUndefined: function(e) {
                return c.isNull(e) || c.isUndefined(e)
            },
            ensureArray: m,
            transformFetchOptions: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.keys,
                    n = e.include,
                    r = e.includeACL,
                    i = {};
                return t && (i.keys = m(t).join(",")), n && (i.include = m(n).join(",")), r && (i.returnACL = r), i
            },
            getSessionToken: function(e) {
                return e.sessionToken ? e.sessionToken : e.user && "function" == typeof e.user.getSessionToken ? e.user.getSessionToken() : void 0
            },
            tap: function(e) {
                return function(t) {
                    return e(t), t
                }
            },
            inherits: function(e, t, n) {
                var r;
                return r = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                    e.apply(this, arguments)
                }, c.extend(r, e), _.prototype = e.prototype, r.prototype = new _, t && c.extend(r.prototype, t), n && c.extend(r, n), r.prototype.constructor = r, r.__super__ = e.prototype, r
            },
            parseDate: function(e) {
                return new Date(e)
            },
            setValue: function(e, t, n) {
                var r = t.split("."),
                    i = r.pop(),
                    o = e;
                return r.forEach((function(e) {
                    void 0 === o[e] && (o[e] = {}), o = o[e]
                })), o[i] = n, e
            },
            findValue: function(e, t) {
                for (var n = t.split("."), r = n[0], i = n.pop(), o = e, a = 0; a < n.length; a++)
                    if (void 0 === (o = o[n[a]])) return [void 0, void 0, i];
                return [o[i], o, i, r]
            },
            isPlainObject: function(e) {
                return c.isObject(e) && (0, o.default)(e) === Object.prototype
            },
            continueWhile: function e(t, n) {
                return t() ? n().then((function() {
                    return e(t, n)
                })) : i.default.resolve()
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(2)),
            i = n(0),
            o = n(137),
            a = n(0).extend,
            s = n(18),
            u = n(5),
            c = u.getSessionToken,
            l = u.ajax,
            h = function(e, t) {
                var n = (new Date).getTime(),
                    r = o(n + e);
                return t ? r + "," + n + ",master" : r + "," + n
            },
            d = function(e, t) {
                t ? e["X-LC-Sign"] = h(s.applicationKey) : e["X-LC-Key"] = s.applicationKey
            },
            p = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments[1],
                    n = {
                        "X-LC-Id": s.applicationId,
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                    i = !1;
                return "boolean" == typeof e.useMasterKey ? i = e.useMasterKey : "boolean" == typeof s._config.useMasterKey && (i = s._config.useMasterKey), i ? s.masterKey ? t ? n["X-LC-Sign"] = h(s.masterKey, !0) : n["X-LC-Key"] = s.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), d(n, t)) : d(n, t), s.hookKey && (n["X-LC-Hook-Key"] = s.hookKey), null !== s._config.production && (n["X-LC-Prod"] = String(s._config.production)), n["X-LC-UA"] = s._sharedConfig.userAgent, r.default.resolve().then((function() {
                    var t = c(e);
                    if (t) n["X-LC-Session"] = t;
                    else if (!s._config.disableCurrentUser) return s.User.currentAsync().then((function(e) {
                        return e && e._sessionToken && (n["X-LC-Session"] = e._sessionToken), n
                    }));
                    return n
                }))
            },
            f = function(e) {
                var t = e.service,
                    n = e.version,
                    r = e.method,
                    o = e.path,
                    a = e.query,
                    u = e.data,
                    c = e.authOptions,
                    h = e.signKey,
                    d = void 0 === h || h;
                if (!s.applicationId || !s.applicationKey && !s.masterKey) throw new Error("Not initialized");
                s._appRouter && s._appRouter.refresh();
                var f = s._config.requestTimeout,
                    g = function(e) {
                        var t = e.service,
                            n = void 0 === t ? "api" : t,
                            r = e.version,
                            i = void 0 === r ? "1.1" : r,
                            o = e.path,
                            a = s._config.serverURLs[n];
                        if (!a) throw new Error("undefined server URL for " + n);
                        return "/" !== a.charAt(a.length - 1) && (a += "/"), a += i, o && (a += o), a
                    }({
                        service: t,
                        path: o,
                        version: n
                    });
                return p(c, d).then((function(e) {
                    return l({
                        method: r,
                        url: g,
                        query: a,
                        data: u,
                        headers: e,
                        timeout: f
                    }).catch((function(e) {
                        var t = {
                            code: e.code || -1,
                            error: e.message || e.responseText
                        };
                        if (e.response && e.response.code) t = e.response;
                        else if (e.responseText) try {
                            t = JSON.parse(e.responseText)
                        } catch (e) {}
                        t.rawMessage = t.rawMessage || t.error, s._sharedConfig.keepErrorRawMessage || (t.error += " [" + (e.statusCode || "N/A") + " " + r + " " + g + "]");
                        var n = new Error(t.error);
                        throw delete t.error, i.extend(n, t)
                    }))
                }))
            };
        s.request = f, e.exports = {
            _request: function(e, t, n, r, i, o, s) {
                var u = "";
                if (e && (u += "/" + e), t && (u += "/" + t), n && (u += "/" + n), i && i._fetchWhenSave) throw new Error("_fetchWhenSave should be in the query");
                if (i && i._where) throw new Error("_where should be in the query");
                return r && "get" === r.toLowerCase() && (s = a({}, s, i), i = null), f({
                    method: r,
                    path: u,
                    query: s,
                    data: i,
                    authOptions: o
                })
            },
            request: f
        }
    }, function(e, t, n) {
        var r = n(8),
            i = n(53),
            o = n(39),
            a = Object.defineProperty;
        t.f = n(11) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, function(e, t, n) {
        var r = n(13);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, function(e, t, n) {
        e.exports = {
            default: n(104),
            __esModule: !0
        }
    }, function(e, t, n) {
        var r = n(3),
            i = n(1),
            o = n(22),
            a = n(12),
            s = n(14),
            u = function(e, t, n) {
                var c, l, h, d = e & u.F,
                    p = e & u.G,
                    f = e & u.S,
                    g = e & u.P,
                    m = e & u.B,
                    _ = e & u.W,
                    v = p ? i : i[t] || (i[t] = {}),
                    b = v.prototype,
                    y = p ? r : f ? r[t] : (r[t] || {}).prototype;
                for (c in p && (n = t), n)(l = !d && y && void 0 !== y[c]) && s(v, c) || (h = l ? y[c] : n[c], v[c] = p && "function" != typeof y[c] ? n[c] : m && l ? o(h, r) : _ && y[c] == h ? function(e) {
                    var t = function(t, n, r) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, n)
                            }
                            return new e(t, n, r)
                        }
                        return e.apply(this, arguments)
                    };
                    return t.prototype = e.prototype, t
                }(h) : g && "function" == typeof h ? o(Function.call, h) : h, g && ((v.virtual || (v.virtual = {}))[c] = h, e & u.R && b && !b[c] && a(b, c, h)))
            };
        u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
    }, function(e, t, n) {
        e.exports = !n(23)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    }, function(e, t, n) {
        var r = n(7),
            i = n(24);
        e.exports = n(11) ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    }, function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    }, function(e, t, n) {
        var r = n(87),
            i = n(37);
        e.exports = function(e) {
            return r(i(e))
        }
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = new Error(t);
            return n.code = e, n
        }
        n(0).extend(r, {
            OTHER_CAUSE: -1,
            INTERNAL_SERVER_ERROR: 1,
            CONNECTION_FAILED: 100,
            OBJECT_NOT_FOUND: 101,
            INVALID_QUERY: 102,
            INVALID_CLASS_NAME: 103,
            MISSING_OBJECT_ID: 104,
            INVALID_KEY_NAME: 105,
            INVALID_POINTER: 106,
            INVALID_JSON: 107,
            COMMAND_UNAVAILABLE: 108,
            NOT_INITIALIZED: 109,
            INCORRECT_TYPE: 111,
            INVALID_CHANNEL_NAME: 112,
            PUSH_MISCONFIGURED: 115,
            OBJECT_TOO_LARGE: 116,
            OPERATION_FORBIDDEN: 119,
            CACHE_MISS: 120,
            INVALID_NESTED_KEY: 121,
            INVALID_FILE_NAME: 122,
            INVALID_ACL: 123,
            TIMEOUT: 124,
            INVALID_EMAIL_ADDRESS: 125,
            MISSING_CONTENT_TYPE: 126,
            MISSING_CONTENT_LENGTH: 127,
            INVALID_CONTENT_LENGTH: 128,
            FILE_TOO_LARGE: 129,
            FILE_SAVE_ERROR: 130,
            FILE_DELETE_ERROR: 153,
            DUPLICATE_VALUE: 137,
            INVALID_ROLE_NAME: 139,
            EXCEEDED_QUOTA: 140,
            SCRIPT_FAILED: 141,
            VALIDATION_ERROR: 142,
            INVALID_IMAGE_DATA: 150,
            UNSAVED_FILE_ERROR: 151,
            INVALID_PUSH_TIME_ERROR: 152,
            USERNAME_MISSING: 200,
            PASSWORD_MISSING: 201,
            USERNAME_TAKEN: 202,
            EMAIL_TAKEN: 203,
            EMAIL_MISSING: 204,
            EMAIL_NOT_FOUND: 205,
            SESSION_MISSING: 206,
            MUST_CREATE_USER_THROUGH_SIGNUP: 207,
            ACCOUNT_ALREADY_LINKED: 208,
            LINKED_ID_MISSING: 250,
            INVALID_LINKED_SESSION: 251,
            UNSUPPORTED_SERVICE: 252,
            X_DOMAIN_REQUEST: 602
        }), e.exports = r
    }, function(e, t) {
        e.exports = {}
    }, function(e, t, n) {
        "use strict";
        (function(t) {
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = r(n(9)),
                o = r(n(67)),
                a = r(n(2)),
                s = n(0),
                u = n(68),
                c = n(19),
                l = n(69),
                h = n(5),
                d = h.inherits,
                p = h.parseDate,
                f = n(28).setAdapters,
                g = t.AV || {};
            g._config = {
                serverURLs: {},
                useMasterKey: !1,
                production: null,
                realtime: null,
                requestTimeout: null
            }, g._sharedConfig = {
                userAgent: l(),
                liveQueryRealtime: null
            }, g._getAVPath = function(e) {
                if (!g.applicationId) throw new Error("You need to call AV.initialize before using AV.");
                if (e || (e = ""), !s.isString(e)) throw new Error("Tried to get a localStorage path that wasn't a String.");
                return "/" === e[0] && (e = e.substring(1)), "AV/" + g.applicationId + "/" + e
            }, g._installationId = null, g._getInstallationId = function() {
                if (g._installationId) return a.default.resolve(g._installationId);
                var e = g._getAVPath("installationId");
                return g.localStorage.getItemAsync(e).then((function(t) {
                    return g._installationId = t, g._installationId ? t : (g._installationId = t = u(), g.localStorage.setItemAsync(e, t).then((function() {
                        return t
                    })))
                }))
            }, g._subscriptionId = null, g._refreshSubscriptionId = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g._getAVPath("subscriptionId"),
                    t = g._subscriptionId = u();
                return g.localStorage.setItemAsync(e, t).then((function() {
                    return t
                }))
            }, g._getSubscriptionId = function() {
                if (g._subscriptionId) return a.default.resolve(g._subscriptionId);
                var e = g._getAVPath("subscriptionId");
                return g.localStorage.getItemAsync(e).then((function(t) {
                    return g._subscriptionId = t, g._subscriptionId || (t = g._refreshSubscriptionId(e)), t
                }))
            }, g._parseDate = p, g._extend = function(e, t) {
                var n = d(this, e, t);
                return n.extend = this.extend, n
            }, g._encode = function(e, t, n) {
                var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (e instanceof g.Object) {
                    if (n) throw new Error("AV.Objects not allowed here");
                    return t && !s.include(t, e) && e._hasData ? e._toFullJSON(t.concat(e), r) : e._toPointer()
                }
                if (e instanceof g.ACL) return e.toJSON();
                if (s.isDate(e)) return r ? {
                    __type: "Date",
                    iso: e.toJSON()
                } : e.toJSON();
                if (e instanceof g.GeoPoint) return e.toJSON();
                if (s.isArray(e)) return s.map(e, (function(e) {
                    return g._encode(e, t, n, r)
                }));
                if (s.isRegExp(e)) return e.source;
                if (e instanceof g.Relation) return e.toJSON();
                if (e instanceof g.Op) return e.toJSON();
                if (e instanceof g.File) {
                    if (!e.url() && !e.id) throw new Error("Tried to save an object containing an unsaved file.");
                    return e._toFullJSON(t, r)
                }
                return s.isObject(e) ? s.mapObject(e, (function(e, i) {
                    return g._encode(e, t, n, r)
                })) : e
            }, g._decode = function(e, t) {
                if (!s.isObject(e) || s.isDate(e)) return e;
                if (s.isArray(e)) return s.map(e, (function(e) {
                    return g._decode(e)
                }));
                if (e instanceof g.Object) return e;
                if (e instanceof g.File) return e;
                if (e instanceof g.Op) return e;
                if (e instanceof g.GeoPoint) return e;
                if (e instanceof g.ACL) return e;
                if ("ACL" === t) return new g.ACL(e);
                if (e.__op) return g.Op._decode(e);
                var n;
                if ("Pointer" === e.__type) {
                    n = e.className;
                    var r = g.Object._create(n);
                    if ((0, o.default)(e).length > 3) {
                        var i = s.clone(e);
                        delete i.__type, delete i.className, r._finishFetch(i, !0)
                    } else r._finishFetch({
                        objectId: e.objectId
                    }, !1);
                    return r
                }
                if ("Object" === e.__type) {
                    n = e.className;
                    var a = s.clone(e);
                    delete a.__type, delete a.className;
                    var u = g.Object._create(n);
                    return u._finishFetch(a, !0), u
                }
                if ("Date" === e.__type) return g._parseDate(e.iso);
                if ("GeoPoint" === e.__type) return new g.GeoPoint({
                    latitude: e.latitude,
                    longitude: e.longitude
                });
                if ("Relation" === e.__type) {
                    if (!t) throw new Error("key missing decoding a Relation");
                    var c = new g.Relation(null, t);
                    return c.targetClassName = e.className, c
                }
                if ("File" === e.__type) {
                    var l = new g.File(e.name),
                        h = s.clone(e);
                    return delete h.__type, l._finishFetch(h), l
                }
                return s.mapObject(e, g._decode)
            }, g.parseJSON = g._decode, g.parse = function(e) {
                return g.parseJSON(JSON.parse(e))
            }, g.stringify = function(e) {
                return (0, i.default)(g._encode(e, [], !1, !0))
            }, g._encodeObjectOrArray = function(e) {
                var t = function(e) {
                    return e && e._toFullJSON && (e = e._toFullJSON([])), s.mapObject(e, (function(e) {
                        return g._encode(e, [])
                    }))
                };
                return s.isArray(e) ? e.map((function(e) {
                    return t(e)
                })) : t(e)
            }, g._arrayEach = s.each, g._traverse = function(e, t, n) {
                if (e instanceof g.Object) {
                    if (n = n || [], s.indexOf(n, e) >= 0) return;
                    return n.push(e), g._traverse(e.attributes, t, n), t(e)
                }
                return e instanceof g.Relation || e instanceof g.File ? t(e) : s.isArray(e) ? (s.each(e, (function(r, i) {
                    var o = g._traverse(r, t, n);
                    o && (e[i] = o)
                })), t(e)) : s.isObject(e) ? (g._each(e, (function(r, i) {
                    var o = g._traverse(r, t, n);
                    o && (e[i] = o)
                })), t(e)) : t(e)
            }, g._objectEach = g._each = function(e, t) {
                s.isObject(e) ? s.each(s.keys(e), (function(n) {
                    t(e[n], n)
                })) : s.each(e, t)
            }, g.debug = {
                enable: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "leancloud*";
                    return c.enable(e)
                },
                disable: c.disable
            }, g.setAdapters = f, e.exports = g
        }).call(t, n(66))
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        t.log = function() {
            var e;
            return "object" === ("undefined" == typeof console ? "undefined" : r(console)) && console.log && (e = console).log.apply(e, arguments)
        }, t.formatArgs = function(t) {
            if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), this.useColors) {
                var n = "color: " + this.color;
                t.splice(1, 0, n, "color: inherit");
                var r = 0,
                    i = 0;
                t[0].replace(/%[a-zA-Z%]/g, (function(e) {
                    "%%" !== e && (r++, "%c" === e && (i = r))
                })), t.splice(i, 0, n)
            }
        }, t.save = function(e) {
            try {
                e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
            } catch (e) {}
        }, t.load = function() {
            var e;
            try {
                e = t.storage.getItem("debug")
            } catch (e) {}
            return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e
        }, t.useColors = function() {
            return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        }, t.storage = function() {
            try {
                return localStorage
            } catch (e) {}
        }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.exports = n(109)(t), e.exports.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(84)(!0);
        n(52)(String, "String", (function(e) {
            this._t = String(e), this._i = 0
        }), (function() {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (e = r(t, n), this._i += e.length, {
                value: e,
                done: !1
            })
        }))
    }, function(e, t) {
        e.exports = !0
    }, function(e, t, n) {
        var r = n(29);
        e.exports = function(e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    }, function(e, t, n) {
        var r = n(37);
        e.exports = function(e) {
            return Object(r(e))
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.__esModule = !0;
        var i = r(n(34)),
            o = r(n(35)),
            a = "function" == typeof o.default && "symbol" == typeof i.default ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e
            };
        t.default = "function" == typeof o.default && "symbol" === a(i.default) ? function(e) {
            return void 0 === e ? "undefined" : a(e)
        } : function(e) {
            return e && "function" == typeof o.default && e.constructor === o.default && e !== o.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = {};
        e.exports = {
            getAdapter: function(e) {
                var t = i[e];
                if (void 0 === t) throw new Error(e + " adapter is not configured");
                return t
            },
            setAdapters: function(e) {
                r.extend(i, e)
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, function(e, t, n) {
        var r = n(56),
            i = n(43);
        e.exports = Object.keys || function(e) {
            return r(e, i)
        }
    }, function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    }, function(e, t, n) {
        var r = n(7).f,
            i = n(14),
            o = n(4)("toStringTag");
        e.exports = function(e, t, n) {
            e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                configurable: !0,
                value: t
            })
        }
    }, function(e, t, n) {
        n(90);
        for (var r = n(3), i = n(12), o = n(17), a = n(4)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < s.length; u++) {
            var c = s[u],
                l = r[c],
                h = l && l.prototype;
            h && !h[a] && i(h, a, c), o[c] = o.Array
        }
    }, function(e, t, n) {
        e.exports = {
            default: n(114),
            __esModule: !0
        }
    }, function(e, t, n) {
        e.exports = {
            default: n(115),
            __esModule: !0
        }
    }, function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    }, function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, function(e, t, n) {
        var r = n(13),
            i = n(3).document,
            o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {}
        }
    }, function(e, t, n) {
        var r = n(13);
        e.exports = function(e, t) {
            if (!r(e)) return e;
            var n, i;
            if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
            if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
            if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(e, t, n) {
        var r = n(36),
            i = Math.min;
        e.exports = function(e) {
            return e > 0 ? i(r(e), 9007199254740991) : 0
        }
    }, function(e, t, n) {
        var r = n(42)("keys"),
            i = n(31);
        e.exports = function(e) {
            return r[e] || (r[e] = i(e))
        }
    }, function(e, t, n) {
        var r = n(1),
            i = n(3),
            o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (e.exports = function(e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(21) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(e, t, n) {
        var r = n(25),
            i = n(4)("toStringTag"),
            o = "Arguments" == r(function() {
                return arguments
            }());
        e.exports = function(e) {
            var t, n, a;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), i)) ? n : o ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
        }
    }, function(e, t, n) {
        var r = n(44),
            i = n(4)("iterator"),
            o = n(17);
        e.exports = n(1).getIteratorMethod = function(e) {
            if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t, n;
            this.promise = new e((function(e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r
            })), this.resolve = i(t), this.reject = i(n)
        }
        var i = n(29);
        e.exports.f = function(e) {
            return new r(e)
        }
    }, function(e, t, n) {
        var r = n(10),
            i = n(1),
            o = n(23);
        e.exports = function(e, t) {
            var n = (i.Object || {})[e] || Object[e],
                a = {};
            a[e] = t(n), r(r.S + r.F * o((function() {
                n(1)
            })), "Object", a)
        }
    }, function(e, t, n) {
        t.f = n(4)
    }, function(e, t, n) {
        var r = n(3),
            i = n(1),
            o = n(21),
            a = n(48),
            s = n(7).f;
        e.exports = function(e) {
            var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
            "_" == e.charAt(0) || e in t || s(t, e, {
                value: a.f(e)
            })
        }
    }, function(e, t) {
        t.f = {}.propertyIsEnumerable
    }, function(e, t) {}, function(e, t, n) {
        "use strict";
        var r = n(21),
            i = n(10),
            o = n(54),
            a = n(12),
            s = n(17),
            u = n(85),
            c = n(32),
            l = n(58),
            h = n(4)("iterator"),
            d = !([].keys && "next" in [].keys()),
            p = function() {
                return this
            };
        e.exports = function(e, t, n, f, g, m, _) {
            u(n, t, f);
            var v, b, y, w = function(e) {
                    if (!d && e in x) return x[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, e)
                            }
                    }
                    return function() {
                        return new n(this, e)
                    }
                },
                k = t + " Iterator",
                j = "values" == g,
                A = !1,
                x = e.prototype,
                E = x[h] || x["@@iterator"] || g && x[g],
                S = E || w(g),
                O = g ? j ? w("entries") : S : void 0,
                C = "Array" == t && x.entries || E;
            if (C && (y = l(C.call(new e))) !== Object.prototype && y.next && (c(y, k, !0), r || "function" == typeof y[h] || a(y, h, p)), j && E && "values" !== E.name && (A = !0, S = function() {
                    return E.call(this)
                }), r && !_ || !d && !A && x[h] || a(x, h, S), s[t] = S, s[k] = p, g)
                if (v = {
                        values: j ? S : w("values"),
                        keys: m ? S : w("keys"),
                        entries: O
                    }, _)
                    for (b in v) b in x || o(x, b, v[b]);
                else i(i.P + i.F * (d || A), t, v);
            return v
        }
    }, function(e, t, n) {
        e.exports = !n(11) && !n(23)((function() {
            return 7 != Object.defineProperty(n(38)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    }, function(e, t, n) {
        e.exports = n(12)
    }, function(e, t, n) {
        var r = n(8),
            i = n(86),
            o = n(43),
            a = n(41)("IE_PROTO"),
            s = function() {},
            u = function() {
                var e, t = n(38)("iframe"),
                    r = o.length;
                for (t.style.display = "none", n(57).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; r--;) delete u.prototype[o[r]];
                return u()
            };
        e.exports = Object.create || function(e, t) {
            var n;
            return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[a] = e) : n = u(), void 0 === t ? n : i(n, t)
        }
    }, function(e, t, n) {
        var r = n(14),
            i = n(15),
            o = n(88)(!1),
            a = n(41)("IE_PROTO");
        e.exports = function(e, t) {
            var n, s = i(e),
                u = 0,
                c = [];
            for (n in s) n != a && r(s, n) && c.push(n);
            for (; t.length > u;) r(s, n = t[u++]) && (~o(c, n) || c.push(n));
            return c
        }
    }, function(e, t, n) {
        var r = n(3).document;
        e.exports = r && r.documentElement
    }, function(e, t, n) {
        var r = n(14),
            i = n(26),
            o = n(41)("IE_PROTO"),
            a = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    }, function(e, t, n) {
        var r = n(8);
        e.exports = function(e, t, n, i) {
            try {
                return i ? t(r(n)[0], n[1]) : t(n)
            } catch (t) {
                var o = e.return;
                throw void 0 !== o && r(o.call(e)), t
            }
        }
    }, function(e, t, n) {
        var r = n(17),
            i = n(4)("iterator"),
            o = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (r.Array === e || o[i] === e)
        }
    }, function(e, t, n) {
        var r = n(8),
            i = n(29),
            o = n(4)("species");
        e.exports = function(e, t) {
            var n, a = r(e).constructor;
            return void 0 === a || null == (n = r(a)[o]) ? t : i(n)
        }
    }, function(e, t, n) {
        var r, i, o, a = n(22),
            s = n(96),
            u = n(57),
            c = n(38),
            l = n(3),
            h = l.process,
            d = l.setImmediate,
            p = l.clearImmediate,
            f = l.MessageChannel,
            g = l.Dispatch,
            m = 0,
            _ = {},
            v = function() {
                var e = +this;
                if (_.hasOwnProperty(e)) {
                    var t = _[e];
                    delete _[e], t()
                }
            },
            b = function(e) {
                v.call(e.data)
            };
        d && p || (d = function(e) {
            for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
            return _[++m] = function() {
                s("function" == typeof e ? e : Function(e), t)
            }, r(m), m
        }, p = function(e) {
            delete _[e]
        }, "process" == n(25)(h) ? r = function(e) {
            h.nextTick(a(v, e, 1))
        } : g && g.now ? r = function(e) {
            g.now(a(v, e, 1))
        } : f ? (o = (i = new f).port2, i.port1.onmessage = b, r = a(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) {
            l.postMessage(e + "", "*")
        }, l.addEventListener("message", b, !1)) : r = "onreadystatechange" in c("script") ? function(e) {
            u.appendChild(c("script")).onreadystatechange = function() {
                u.removeChild(this), v.call(e)
            }
        } : function(e) {
            setTimeout(a(v, e, 1), 0)
        }), e.exports = {
            set: d,
            clear: p
        }
    }, function(e, t) {
        e.exports = function(e) {
            try {
                return {
                    e: !1,
                    v: e()
                }
            } catch (e) {
                return {
                    e: !0,
                    v: e
                }
            }
        }
    }, function(e, t, n) {
        var r = n(8),
            i = n(13),
            o = n(46);
        e.exports = function(e, t) {
            if (r(e), i(t) && t.constructor === e) return t;
            var n = o.f(e);
            return (0, n.resolve)(t), n.promise
        }
    }, function(e, t, n) {
        var r = n(4)("iterator"),
            i = !1;
        try {
            var o = [7][r]();
            o.return = function() {
                i = !0
            }, Array.from(o, (function() {
                throw 2
            }))
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !i) return !1;
            var n = !1;
            try {
                var o = [7],
                    a = o[r]();
                a.next = function() {
                    return {
                        done: n = !0
                    }
                }, o[r] = function() {
                    return a
                }, e(o)
            } catch (e) {}
            return n
        }
    }, function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function(e, t, n) {
        e.exports = {
            default: n(105),
            __esModule: !0
        }
    }, function(e, t, n) {
        var r = n(107),
            i = n(108);
        e.exports = function(e, t, n) {
            var o = t && n || 0;
            "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
            var a = (e = e || {}).random || (e.rng || r)();
            if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
                for (var s = 0; s < 16; ++s) t[o + s] = a[s];
            return t || i(a)
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(70);
        e.exports = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = "LeanCloud-JS-SDK/" + r;
            return e.length && (t += " (" + e.join("; ") + ")"), t
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = "4.5.3"
    }, function(e, t) {
        t.f = Object.getOwnPropertySymbols
    }, function(e, t, n) {
        var r = n(56),
            i = n(43).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) {
            return r(e, i)
        }
    }, function(e, t, n) {
        var r = n(50),
            i = n(24),
            o = n(15),
            a = n(39),
            s = n(14),
            u = n(53),
            c = Object.getOwnPropertyDescriptor;
        t.f = n(11) ? c : function(e, t) {
            if (e = o(e), t = a(t, !0), u) try {
                return c(e, t)
            } catch (e) {}
            if (s(e, t)) return i(!r.f.call(e, t), e[t])
        }
    }, function(e, t, n) {
        "use strict";
        var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(2)),
            i = n(28).getAdapter,
            o = {
                get async() {
                    return i("storage").async
                }
            };
        ["getItem", "setItem", "removeItem", "clear"].forEach((function(e) {
            o[e + "Async"] = function() {
                var t = i("storage");
                return r.default.resolve(t[e].apply(t, arguments))
            }, o[e] = function() {
                var t = i("storage");
                if (!t.async) return t[e].apply(t, arguments);
                var n = new Error("Synchronous API [" + e + "] is not available in this runtime.");
                throw n.code = "SYNC_API_NOT_AVAILABLE", n
            }
        })), e.exports = o
    }, function(e, t, n) {
        "use strict";
        var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(9)),
            i = n(74),
            o = n(18),
            a = t.removeAsync = i.removeItemAsync.bind(i);
        t.getAsync = function(e) {
            return e = "AV/" + o.applicationId + "/" + e, i.getItemAsync(e).then((function(t) {
                return function(e, t) {
                    try {
                        e = JSON.parse(e)
                    } catch (e) {
                        return null
                    }
                    return e ? e.expiredAt && e.expiredAt < Date.now() ? a(t).then((function() {
                        return null
                    })) : e.value : null
                }(t, e)
            }))
        }, t.setAsync = function(e, t, n) {
            var a = {
                value: t
            };
            return "number" == typeof n && (a.expiredAt = Date.now() + n), i.setItemAsync("AV/" + o.applicationId + "/" + e, (0, r.default)(a))
        }
    }, function(e, t, n) {
        e.exports = {
            default: n(125),
            __esModule: !0
        }
    }, function(e, t) {
        var n = {
            utf8: {
                stringToBytes: function(e) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(n.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                    return t
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                    return t.join("")
                }
            }
        };
        e.exports = n
    }, function(e, t, n) {
        e.exports = {
            default: n(146),
            __esModule: !0
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            return (i = "function" == typeof s.default && "symbol" === (0, a.default)(o.default) ? function(e) {
                return void 0 === e ? "undefined" : (0, a.default)(e)
            } : function(e) {
                return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : void 0 === e ? "undefined" : (0, a.default)(e)
            })(e)
        }
        var o = r(n(34)),
            a = r(n(27)),
            s = r(n(35));
        e.exports = function(e) {
            return null !== e && "object" === i(e)
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(81),
            i = n(165);
        e.exports = i(r)
    }, function(e, t, n) {
        "use strict";
        e.exports = n(82)
    }, function(e, t, n) {
        "use strict";
        var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(2)),
            i = n(0),
            o = n(18);
        o._ = i, o.version = n(70), o.Promise = r.default, o.localStorage = n(74), o.Cache = n(75), o.Error = n(16), n(124), n(128)(o), n(129)(o), n(130)(o), n(131)(o), n(132)(o), n(133)(o), n(141)(o), n(151)(o), n(152)(o), n(154)(o), n(155)(o), n(157)(o), n(158)(o), n(159)(o), n(160)(o), n(161)(o), n(162)(o), o.Conversation = n(163), n(164), e.exports = o
    }, function(e, t, n) {
        n(51), n(20), n(33), n(93), n(101), n(102), e.exports = n(1).Promise
    }, function(e, t, n) {
        var r = n(36),
            i = n(37);
        e.exports = function(e) {
            return function(t, n) {
                var o, a, s = String(i(t)),
                    u = r(n),
                    c = s.length;
                return u < 0 || u >= c ? e ? "" : void 0 : (o = s.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? s.charAt(u) : o : e ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(55),
            i = n(24),
            o = n(32),
            a = {};
        n(12)(a, n(4)("iterator"), (function() {
            return this
        })), e.exports = function(e, t, n) {
            e.prototype = r(a, {
                next: i(1, n)
            }), o(e, t + " Iterator")
        }
    }, function(e, t, n) {
        var r = n(7),
            i = n(8),
            o = n(30);
        e.exports = n(11) ? Object.defineProperties : function(e, t) {
            i(e);
            for (var n, a = o(t), s = a.length, u = 0; s > u;) r.f(e, n = a[u++], t[n]);
            return e
        }
    }, function(e, t, n) {
        var r = n(25);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    }, function(e, t, n) {
        var r = n(15),
            i = n(40),
            o = n(89);
        e.exports = function(e) {
            return function(t, n, a) {
                var s, u = r(t),
                    c = i(u.length),
                    l = o(a, c);
                if (e && n != n) {
                    for (; c > l;)
                        if ((s = u[l++]) != s) return !0
                } else
                    for (; c > l; l++)
                        if ((e || l in u) && u[l] === n) return e || l || 0;
                return !e && -1
            }
        }
    }, function(e, t, n) {
        var r = n(36),
            i = Math.max,
            o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(91),
            i = n(92),
            o = n(17),
            a = n(15);
        e.exports = n(52)(Array, "Array", (function(e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }), (function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }), "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    }, function(e, t) {
        e.exports = function() {}
    }, function(e, t) {
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r, i, o, a, s = n(21),
            u = n(3),
            c = n(22),
            l = n(44),
            h = n(10),
            d = n(13),
            p = n(29),
            f = n(94),
            g = n(95),
            m = n(61),
            _ = n(62).set,
            v = n(97)(),
            b = n(46),
            y = n(63),
            w = n(98),
            k = n(64),
            j = u.TypeError,
            A = u.process,
            x = A && A.versions,
            E = x && x.v8 || "",
            S = u.Promise,
            O = "process" == l(A),
            C = function() {},
            T = i = b.f,
            P = !! function() {
                try {
                    var e = S.resolve(1),
                        t = (e.constructor = {})[n(4)("species")] = function(e) {
                            e(C, C)
                        };
                    return (O || "function" == typeof PromiseRejectionEvent) && e.then(C) instanceof t && 0 !== E.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
                } catch (e) {}
            }(),
            z = function(e) {
                var t;
                return !(!d(e) || "function" != typeof(t = e.then)) && t
            },
            I = function(e, t) {
                if (!e._n) {
                    e._n = !0;
                    var n = e._c;
                    v((function() {
                        for (var r = e._v, i = 1 == e._s, o = 0; n.length > o;) ! function(t) {
                            var n, o, a, s = i ? t.ok : t.fail,
                                u = t.resolve,
                                c = t.reject,
                                l = t.domain;
                            try {
                                s ? (i || (2 == e._h && N(e), e._h = 1), !0 === s ? n = r : (l && l.enter(), n = s(r), l && (l.exit(), a = !0)), n === t.promise ? c(j("Promise-chain cycle")) : (o = z(n)) ? o.call(n, u, c) : u(n)) : c(r)
                            } catch (e) {
                                l && !a && l.exit(), c(e)
                            }
                        }(n[o++]);
                        e._c = [], e._n = !1, t && !e._h && M(e)
                    }))
                }
            },
            M = function(e) {
                _.call(u, (function() {
                    var t, n, r, i = e._v,
                        o = q(e);
                    if (o && (t = y((function() {
                            O ? A.emit("unhandledRejection", i, e) : (n = u.onunhandledrejection) ? n({
                                promise: e,
                                reason: i
                            }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
                        })), e._h = O || q(e) ? 2 : 1), e._a = void 0, o && t.e) throw t.v
                }))
            },
            q = function(e) {
                return 1 !== e._h && 0 === (e._a || e._c).length
            },
            N = function(e) {
                _.call(u, (function() {
                    var t;
                    O ? A.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                        promise: e,
                        reason: e._v
                    })
                }))
            },
            L = function(e) {
                var t = this;
                t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), I(t, !0))
            },
            U = function(e) {
                var t, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === e) throw j("Promise can't be resolved itself");
                        (t = z(e)) ? v((function() {
                            var r = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                t.call(e, c(U, r, 1), c(L, r, 1))
                            } catch (e) {
                                L.call(r, e)
                            }
                        })): (n._v = e, n._s = 1, I(n, !1))
                    } catch (e) {
                        L.call({
                            _w: n,
                            _d: !1
                        }, e)
                    }
                }
            };
        P || (S = function(e) {
            f(this, S, "Promise", "_h"), p(e), r.call(this);
            try {
                e(c(U, this, 1), c(L, this, 1))
            } catch (e) {
                L.call(this, e)
            }
        }, (r = function(e) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }).prototype = n(99)(S.prototype, {
            then: function(e, t) {
                var n = T(m(this, S));
                return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = O ? A.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && I(this, !1), n.promise
            },
            catch: function(e) {
                return this.then(void 0, e)
            }
        }), o = function() {
            var e = new r;
            this.promise = e, this.resolve = c(U, e, 1), this.reject = c(L, e, 1)
        }, b.f = T = function(e) {
            return e === S || e === a ? new o(e) : i(e)
        }), h(h.G + h.W + h.F * !P, {
            Promise: S
        }), n(32)(S, "Promise"), n(100)("Promise"), a = n(1).Promise, h(h.S + h.F * !P, "Promise", {
            reject: function(e) {
                var t = T(this);
                return (0, t.reject)(e), t.promise
            }
        }), h(h.S + h.F * (s || !P), "Promise", {
            resolve: function(e) {
                return k(s && this === a ? S : this, e)
            }
        }), h(h.S + h.F * !(P && n(65)((function(e) {
            S.all(e).catch(C)
        }))), "Promise", {
            all: function(e) {
                var t = this,
                    n = T(t),
                    r = n.resolve,
                    i = n.reject,
                    o = y((function() {
                        var n = [],
                            o = 0,
                            a = 1;
                        g(e, !1, (function(e) {
                            var s = o++,
                                u = !1;
                            n.push(void 0), a++, t.resolve(e).then((function(e) {
                                u || (u = !0, n[s] = e, --a || r(n))
                            }), i)
                        })), --a || r(n)
                    }));
                return o.e && i(o.v), n.promise
            },
            race: function(e) {
                var t = this,
                    n = T(t),
                    r = n.reject,
                    i = y((function() {
                        g(e, !1, (function(e) {
                            t.resolve(e).then(n.resolve, r)
                        }))
                    }));
                return i.e && r(i.v), n.promise
            }
        })
    }, function(e, t) {
        e.exports = function(e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    }, function(e, t, n) {
        var r = n(22),
            i = n(59),
            o = n(60),
            a = n(8),
            s = n(40),
            u = n(45),
            c = {},
            l = {};
        (t = e.exports = function(e, t, n, h, d) {
            var p, f, g, m, _ = d ? function() {
                    return e
                } : u(e),
                v = r(n, h, t ? 2 : 1),
                b = 0;
            if ("function" != typeof _) throw TypeError(e + " is not iterable!");
            if (o(_)) {
                for (p = s(e.length); p > b; b++)
                    if ((m = t ? v(a(f = e[b])[0], f[1]) : v(e[b])) === c || m === l) return m
            } else
                for (g = _.call(e); !(f = g.next()).done;)
                    if ((m = i(g, v, f.value, t)) === c || m === l) return m
        }).BREAK = c, t.RETURN = l
    }, function(e, t) {
        e.exports = function(e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
                case 0:
                    return r ? e() : e.call(n);
                case 1:
                    return r ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
        }
    }, function(e, t, n) {
        var r = n(3),
            i = n(62).set,
            o = r.MutationObserver || r.WebKitMutationObserver,
            a = r.process,
            s = r.Promise,
            u = "process" == n(25)(a);
        e.exports = function() {
            var e, t, n, c = function() {
                var r, i;
                for (u && (r = a.domain) && r.exit(); e;) {
                    i = e.fn, e = e.next;
                    try {
                        i()
                    } catch (r) {
                        throw e ? n() : t = void 0, r
                    }
                }
                t = void 0, r && r.enter()
            };
            if (u) n = function() {
                a.nextTick(c)
            };
            else if (!o || r.navigator && r.navigator.standalone)
                if (s && s.resolve) {
                    var l = s.resolve(void 0);
                    n = function() {
                        l.then(c)
                    }
                } else n = function() {
                    i.call(r, c)
                };
            else {
                var h = !0,
                    d = document.createTextNode("");
                new o(c).observe(d, {
                    characterData: !0
                }), n = function() {
                    d.data = h = !h
                }
            }
            return function(r) {
                var i = {
                    fn: r,
                    next: void 0
                };
                t && (t.next = i), e || (e = i, n()), t = i
            }
        }
    }, function(e, t, n) {
        var r = n(3).navigator;
        e.exports = r && r.userAgent || ""
    }, function(e, t, n) {
        var r = n(12);
        e.exports = function(e, t, n) {
            for (var i in t) n && e[i] ? e[i] = t[i] : r(e, i, t[i]);
            return e
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(3),
            i = n(1),
            o = n(7),
            a = n(11),
            s = n(4)("species");
        e.exports = function(e) {
            var t = "function" == typeof i[e] ? i[e] : r[e];
            a && t && !t[s] && o.f(t, s, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(10),
            i = n(1),
            o = n(3),
            a = n(61),
            s = n(64);
        r(r.P + r.R, "Promise", {
            finally: function(e) {
                var t = a(this, i.Promise || o.Promise),
                    n = "function" == typeof e;
                return this.then(n ? function(n) {
                    return s(t, e()).then((function() {
                        return n
                    }))
                } : e, n ? function(n) {
                    return s(t, e()).then((function() {
                        throw n
                    }))
                } : e)
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(10),
            i = n(46),
            o = n(63);
        r(r.S, "Promise", {
            try: function(e) {
                var t = i.f(this),
                    n = o(e);
                return (n.e ? t.reject : t.resolve)(n.v), t.promise
            }
        })
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function(e, t, n) {
        var r = n(1),
            i = r.JSON || (r.JSON = {
                stringify: JSON.stringify
            });
        e.exports = function(e) {
            return i.stringify.apply(i, arguments)
        }
    }, function(e, t, n) {
        n(106), e.exports = n(1).Object.keys
    }, function(e, t, n) {
        var r = n(26),
            i = n(30);
        n(47)("keys", (function() {
            return function(e) {
                return i(r(e))
            }
        }))
    }, function(e, t) {
        var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (n) {
            var r = new Uint8Array(16);
            e.exports = function() {
                return n(r), r
            }
        } else {
            var i = new Array(16);
            e.exports = function() {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
                return i
            }
        }
    }, function(e, t) {
        for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
        e.exports = function(e, t) {
            var r = t || 0,
                i = n;
            return [i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]]].join("")
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            function t(e) {
                for (var t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                return r.colors[Math.abs(t) % r.colors.length]
            }

            function r(e) {
                function n() {
                    if (n.enabled) {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        var o = n,
                            s = Number(new Date),
                            u = s - (a || s);
                        o.diff = u, o.prev = a, o.curr = s, a = s, t[0] = r.coerce(t[0]), "string" != typeof t[0] && t.unshift("%O");
                        var c = 0;
                        t[0] = t[0].replace(/%([a-zA-Z%])/g, (function(e, n) {
                            if ("%%" === e) return e;
                            c++;
                            var i = r.formatters[n];
                            if ("function" == typeof i) {
                                var a = t[c];
                                e = i.call(o, a), t.splice(c, 1), c--
                            }
                            return e
                        })), r.formatArgs.call(o, t), (o.log || r.log).apply(o, t)
                    }
                }
                var a;
                return n.namespace = e, n.enabled = r.enabled(e), n.useColors = r.useColors(), n.color = t(e), n.destroy = i, n.extend = o, "function" == typeof r.init && r.init(n), r.instances.push(n), n
            }

            function i() {
                var e = r.instances.indexOf(this);
                return -1 !== e && (r.instances.splice(e, 1), !0)
            }

            function o(e, t) {
                return r(this.namespace + (void 0 === t ? ":" : t) + e)
            }
            return r.debug = r, r.default = r, r.coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e
            }, r.disable = function() {
                r.enable("")
            }, r.enable = function(e) {
                r.save(e), r.names = [], r.skips = [];
                var t, n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                    i = n.length;
                for (t = 0; t < i; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")));
                for (t = 0; t < r.instances.length; t++) {
                    var o = r.instances[t];
                    o.enabled = r.enabled(o.namespace)
                }
            }, r.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                var t, n;
                for (t = 0, n = r.skips.length; t < n; t++)
                    if (r.skips[t].test(e)) return !1;
                for (t = 0, n = r.names.length; t < n; t++)
                    if (r.names[t].test(e)) return !0;
                return !1
            }, r.humanize = n(110), Object.keys(e).forEach((function(t) {
                r[t] = e[t]
            })), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = t, r.enable(r.load()), r
        }
    }, function(e, t) {
        function n(e) {
            var t = Math.abs(e);
            return t >= s ? r(e, t, s, "day") : t >= a ? r(e, t, a, "hour") : t >= o ? r(e, t, o, "minute") : t >= i ? r(e, t, i, "second") : e + " ms"
        }

        function r(e, t, n, r) {
            var i = t >= 1.5 * n;
            return Math.round(e / n) + " " + r + (i ? "s" : "")
        }
        var i = 1e3,
            o = 60 * i,
            a = 60 * o,
            s = 24 * a,
            u = 7 * s,
            c = 365.25 * s;
        e.exports = function(e, t) {
            t = t || {};
            var r = typeof e;
            if ("string" === r && e.length > 0) return function(e) {
                if (!((e = String(e)).length > 100)) {
                    var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                    if (t) {
                        var n = parseFloat(t[1]);
                        switch ((t[2] || "ms").toLowerCase()) {
                            case "years":
                            case "year":
                            case "yrs":
                            case "yr":
                            case "y":
                                return n * c;
                            case "weeks":
                            case "week":
                            case "w":
                                return n * u;
                            case "days":
                            case "day":
                            case "d":
                                return n * s;
                            case "hours":
                            case "hour":
                            case "hrs":
                            case "hr":
                            case "h":
                                return n * a;
                            case "minutes":
                            case "minute":
                            case "mins":
                            case "min":
                            case "m":
                                return n * o;
                            case "seconds":
                            case "second":
                            case "secs":
                            case "sec":
                            case "s":
                                return n * i;
                            case "milliseconds":
                            case "millisecond":
                            case "msecs":
                            case "msec":
                            case "ms":
                                return n;
                            default:
                                return
                        }
                    }
                }
            }(e);
            if ("number" === r && isFinite(e)) return t.long ? n(e) : function(e) {
                var t = Math.abs(e);
                return t >= s ? Math.round(e / s) + "d" : t >= a ? Math.round(e / a) + "h" : t >= o ? Math.round(e / o) + "m" : t >= i ? Math.round(e / i) + "s" : e + "ms"
            }(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
        }
    }, function(e, t, n) {
        e.exports = {
            default: n(112),
            __esModule: !0
        }
    }, function(e, t, n) {
        n(113), e.exports = n(1).Object.getPrototypeOf
    }, function(e, t, n) {
        var r = n(26),
            i = n(58);
        n(47)("getPrototypeOf", (function() {
            return function(e) {
                return i(r(e))
            }
        }))
    }, function(e, t, n) {
        n(20), n(33), e.exports = n(48).f("iterator")
    }, function(e, t, n) {
        n(116), n(51), n(121), n(122), e.exports = n(1).Symbol
    }, function(e, t, n) {
        "use strict";
        var r = n(3),
            i = n(14),
            o = n(11),
            a = n(10),
            s = n(54),
            u = n(117).KEY,
            c = n(23),
            l = n(42),
            h = n(32),
            d = n(31),
            p = n(4),
            f = n(48),
            g = n(49),
            m = n(118),
            _ = n(119),
            v = n(8),
            b = n(13),
            y = n(26),
            w = n(15),
            k = n(39),
            j = n(24),
            A = n(55),
            x = n(120),
            E = n(73),
            S = n(71),
            O = n(7),
            C = n(30),
            T = E.f,
            P = O.f,
            z = x.f,
            I = r.Symbol,
            M = r.JSON,
            q = M && M.stringify,
            N = p("_hidden"),
            L = p("toPrimitive"),
            U = {}.propertyIsEnumerable,
            B = l("symbol-registry"),
            R = l("symbols"),
            D = l("op-symbols"),
            F = Object.prototype,
            H = "function" == typeof I && !!S.f,
            W = r.QObject,
            V = !W || !W.prototype || !W.prototype.findChild,
            Q = o && c((function() {
                return 7 != A(P({}, "a", {
                    get: function() {
                        return P(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            })) ? function(e, t, n) {
                var r = T(F, t);
                r && delete F[t], P(e, t, n), r && e !== F && P(F, t, r)
            } : P,
            G = function(e) {
                var t = R[e] = A(I.prototype);
                return t._k = e, t
            },
            K = H && "symbol" == typeof I.iterator ? function(e) {
                return "symbol" == typeof e
            } : function(e) {
                return e instanceof I
            },
            $ = function(e, t, n) {
                return e === F && $(D, t, n), v(e), t = k(t, !0), v(n), i(R, t) ? (n.enumerable ? (i(e, N) && e[N][t] && (e[N][t] = !1), n = A(n, {
                    enumerable: j(0, !1)
                })) : (i(e, N) || P(e, N, j(1, {})), e[N][t] = !0), Q(e, t, n)) : P(e, t, n)
            },
            J = function(e, t) {
                v(e);
                for (var n, r = m(t = w(t)), i = 0, o = r.length; o > i;) $(e, n = r[i++], t[n]);
                return e
            },
            X = function(e) {
                var t = U.call(this, e = k(e, !0));
                return !(this === F && i(R, e) && !i(D, e)) && (!(t || !i(this, e) || !i(R, e) || i(this, N) && this[N][e]) || t)
            },
            Z = function(e, t) {
                if (e = w(e), t = k(t, !0), e !== F || !i(R, t) || i(D, t)) {
                    var n = T(e, t);
                    return !n || !i(R, t) || i(e, N) && e[N][t] || (n.enumerable = !0), n
                }
            },
            Y = function(e) {
                for (var t, n = z(w(e)), r = [], o = 0; n.length > o;) i(R, t = n[o++]) || t == N || t == u || r.push(t);
                return r
            },
            ee = function(e) {
                for (var t, n = e === F, r = z(n ? D : w(e)), o = [], a = 0; r.length > a;) !i(R, t = r[a++]) || n && !i(F, t) || o.push(R[t]);
                return o
            };
        H || (s((I = function() {
            if (this instanceof I) throw TypeError("Symbol is not a constructor!");
            var e = d(arguments.length > 0 ? arguments[0] : void 0),
                t = function(n) {
                    this === F && t.call(D, n), i(this, N) && i(this[N], e) && (this[N][e] = !1), Q(this, e, j(1, n))
                };
            return o && V && Q(F, e, {
                configurable: !0,
                set: t
            }), G(e)
        }).prototype, "toString", (function() {
            return this._k
        })), E.f = Z, O.f = $, n(72).f = x.f = Y, n(50).f = X, S.f = ee, o && !n(21) && s(F, "propertyIsEnumerable", X, !0), f.f = function(e) {
            return G(p(e))
        }), a(a.G + a.W + a.F * !H, {
            Symbol: I
        });
        for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) p(te[ne++]);
        for (var re = C(p.store), ie = 0; re.length > ie;) g(re[ie++]);
        a(a.S + a.F * !H, "Symbol", {
            for: function(e) {
                return i(B, e += "") ? B[e] : B[e] = I(e)
            },
            keyFor: function(e) {
                if (!K(e)) throw TypeError(e + " is not a symbol!");
                for (var t in B)
                    if (B[t] === e) return t
            },
            useSetter: function() {
                V = !0
            },
            useSimple: function() {
                V = !1
            }
        }), a(a.S + a.F * !H, "Object", {
            create: function(e, t) {
                return void 0 === t ? A(e) : J(A(e), t)
            },
            defineProperty: $,
            defineProperties: J,
            getOwnPropertyDescriptor: Z,
            getOwnPropertyNames: Y,
            getOwnPropertySymbols: ee
        });
        var oe = c((function() {
            S.f(1)
        }));
        a(a.S + a.F * oe, "Object", {
            getOwnPropertySymbols: function(e) {
                return S.f(y(e))
            }
        }), M && a(a.S + a.F * (!H || c((function() {
            var e = I();
            return "[null]" != q([e]) || "{}" != q({
                a: e
            }) || "{}" != q(Object(e))
        }))), "JSON", {
            stringify: function(e) {
                for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
                if (n = t = r[1], (b(t) || void 0 !== e) && !K(e)) return _(t) || (t = function(e, t) {
                    if ("function" == typeof n && (t = n.call(this, e, t)), !K(t)) return t
                }), r[1] = t, q.apply(M, r)
            }
        }), I.prototype[L] || n(12)(I.prototype, L, I.prototype.valueOf), h(I, "Symbol"), h(Math, "Math", !0), h(r.JSON, "JSON", !0)
    }, function(e, t, n) {
        var r = n(31)("meta"),
            i = n(13),
            o = n(14),
            a = n(7).f,
            s = 0,
            u = Object.isExtensible || function() {
                return !0
            },
            c = !n(23)((function() {
                return u(Object.preventExtensions({}))
            })),
            l = function(e) {
                a(e, r, {
                    value: {
                        i: "O" + ++s,
                        w: {}
                    }
                })
            },
            h = e.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function(e, t) {
                    if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!o(e, r)) {
                        if (!u(e)) return "F";
                        if (!t) return "E";
                        l(e)
                    }
                    return e[r].i
                },
                getWeak: function(e, t) {
                    if (!o(e, r)) {
                        if (!u(e)) return !0;
                        if (!t) return !1;
                        l(e)
                    }
                    return e[r].w
                },
                onFreeze: function(e) {
                    return c && h.NEED && u(e) && !o(e, r) && l(e), e
                }
            }
    }, function(e, t, n) {
        var r = n(30),
            i = n(71),
            o = n(50);
        e.exports = function(e) {
            var t = r(e),
                n = i.f;
            if (n)
                for (var a, s = n(e), u = o.f, c = 0; s.length > c;) u.call(e, a = s[c++]) && t.push(a);
            return t
        }
    }, function(e, t, n) {
        var r = n(25);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    }, function(e, t, n) {
        var r = n(15),
            i = n(72).f,
            o = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function(e) {
            return a && "[object Window]" == o.call(e) ? function(e) {
                try {
                    return i(e)
                } catch (e) {
                    return a.slice()
                }
            }(e) : i(r(e))
        }
    }, function(e, t, n) {
        n(49)("asyncIterator")
    }, function(e, t, n) {
        n(49)("observable")
    }, function(e, t, n) {
        "use strict";
        var r;
        e.exports.timeout = function(e, t) {
            var n, i = new r;
            return Promise.race([e, new Promise((function(e, r) {
                n = setTimeout((function() {
                    r(i)
                }), t)
            }))]).then((function(e) {
                return clearTimeout(n), e
            }), (function(e) {
                throw clearTimeout(n), e
            }))
        }, (r = e.exports.TimeoutError = function() {
            Error.call(this), this.stack = Error().stack, this.message = "Timeout"
        }).prototype = Object.create(Error.prototype), r.prototype.name = "TimeoutError"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (d(e)) return {};
            var t = e.slice(0, 8).toLowerCase(),
                n = "lncldglobal.com";
            return {
                push: "https://" + t + ".push." + n,
                stats: "https://" + t + ".stats." + n,
                engine: "https://" + t + ".engine." + n,
                api: "https://" + t + ".api." + n,
                rtm: "https://" + t + ".rtm." + n
            }
        }
        var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(76)),
            o = n(18),
            a = n(127),
            s = n(5).isNullOrUndefined,
            u = n(0),
            c = u.extend,
            l = u.isObject,
            h = u.isEmpty,
            d = function(e) {
                return "-MdYXbMMI" !== e.slice(-9)
            },
            p = function(e) {
                return {
                    push: e,
                    stats: e,
                    engine: e,
                    api: e,
                    rtm: e
                }
            },
            f = !1,
            g = !1;
        o.init = function(e) {
            if (!l(e)) return o.init({
                appId: e,
                appKey: arguments.length <= 1 ? void 0 : arguments[1],
                masterKey: arguments.length <= 2 ? void 0 : arguments[2]
            });
            var t = e.appId,
                n = e.appKey,
                i = e.masterKey,
                s = e.hookKey,
                u = e.serverURL,
                m = e.serverURLs,
                _ = void 0 === m ? u : m,
                v = e.disableCurrentUser,
                b = e.production,
                y = e.realtime;
            if (g && console.warn("Initializing LeanCloud Storage SDK which has already been initialized. Reinitializing the SDK might cause problems like unexpected cross-app data writing and invalid relations."), !t) throw new TypeError("appId must be a string");
            if (!n) throw new TypeError("appKey must be a string");
            if (i && console.warn("MasterKey is not supposed to be used at client side."), d(t) && !_ && h(o._config.serverURLs)) throw new TypeError("serverURL option is required for apps from CN region");
            t !== o._config.applicationId ? (o._config.masterKey = i, o._config.hookKey = s) : (i && (o._config.masterKey = i), s && (o._config.hookKey = s)), o._config.applicationId = t, o._config.applicationKey = n, o.setProduction(b), void 0 !== v && (o._config.disableCurrentUser = v);
            var w = f || void 0 !== _;
            if (w || (o._appRouter = new a(o)), o._setServerURLs(c({}, r(t), o._config.serverURLs, "string" == typeof _ ? p(_) : _), w), y) o._config.realtime = y;
            else if (o._sharedConfig.liveQueryRealtime) {
                var k = o._config.serverURLs,
                    j = k.api,
                    A = k.rtm;
                o._config.realtime = new o._sharedConfig.liveQueryRealtime({
                    appId: t,
                    appKey: n,
                    server: {
                        api: j,
                        RTMRouter: A
                    }
                })
            }
            g = !0
        }, o.setProduction = function(e) {
            s(e) ? o._config.production = null : o._config.production = e ? 1 : 0
        }, o._setServerURLs = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            "string" != typeof e ? c(o._config.serverURLs, e) : o._config.serverURLs = p(e), t && (o._appRouter ? o._appRouter.disable() : f = !0)
        }, o.setServerURL = function(e) {
            return o._setServerURLs(e)
        }, o.setServerURLs = o.setServerURL, o.keepErrorRawMessage = function(e) {
            o._sharedConfig.keepErrorRawMessage = e
        }, o.setRequestTimeout = function(e) {
            o._config.requestTimeout = e
        }, o.initialize = o.init, ["applicationId", "applicationKey", "masterKey", "hookKey"].forEach((function(e) {
            return (0, i.default)(o, e, {
                get: function() {
                    return o._config[e]
                },
                set: function(t) {
                    o._config[e] = t
                }
            })
        }))
    }, function(e, t, n) {
        n(126);
        var r = n(1).Object;
        e.exports = function(e, t, n) {
            return r.defineProperty(e, t, n)
        }
    }, function(e, t, n) {
        var r = n(10);
        r(r.S + r.F * !n(11), "Object", {
            defineProperty: n(7).f
        })
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = this;
            this.AV = e, this.lockedUntil = 0, o.getAsync("serverURLs").then((function(e) {
                if (!t.disabled) {
                    if (!e) return t.lock(0);
                    var n = e.serverURLs,
                        r = e.lockedUntil;
                    t.AV._setServerURLs(n, !1), t.lockedUntil = r
                }
            })).catch((function() {
                return t.lock(0)
            }))
        }
        var i = n(5).ajax,
            o = n(75);
        r.prototype.disable = function() {
            this.disabled = !0
        }, r.prototype.lock = function(e) {
            this.lockedUntil = Date.now() + e
        }, r.prototype.refresh = function() {
            var e = this;
            if (!(this.disabled || Date.now() < this.lockedUntil)) return this.lock(10), i({
                method: "get",
                url: "https://app-router.com/2/route",
                query: {
                    appId: this.AV.applicationId
                }
            }).then((function(t) {
                if (!e.disabled) {
                    var n = t.ttl;
                    if (!n) throw new Error("missing ttl");
                    n *= 1e3;
                    var r = {
                        push: "https://" + t.push_server,
                        stats: "https://" + t.stats_server,
                        engine: "https://" + t.engine_server,
                        api: "https://" + t.api_server
                    };
                    return e.AV._setServerURLs(r, !1), e.lock(n), o.setAsync("serverURLs", {
                        serverURLs: r,
                        lockedUntil: e.lockedUntil
                    }, n)
                }
            })).catch((function(t) {
                console.warn("refresh server URLs failed: " + t.message), e.lock(600)
            }))
        }, e.exports = r
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function(e) {
            var t = /\s+/,
                n = Array.prototype.slice;
            e.Events = {
                on: function(e, n, r) {
                    var i, o, a, s, u;
                    if (!n) return this;
                    for (e = e.split(t), i = this._callbacks || (this._callbacks = {}), o = e.shift(); o;)(a = (u = i[o]) ? u.tail : {}).next = s = {}, a.context = r, a.callback = n, i[o] = {
                        tail: s,
                        next: u ? u.next : a
                    }, o = e.shift();
                    return this
                },
                off: function(e, n, i) {
                    var o, a, s, u, c, l;
                    if (a = this._callbacks) {
                        if (!(e || n || i)) return delete this._callbacks, this;
                        for (o = (e = e ? e.split(t) : r.keys(a)).shift(); o;)
                            if (s = a[o], delete a[o], s && (n || i)) {
                                for (u = s.tail, s = s.next; s !== u;) c = s.callback, l = s.context, (n && c !== n || i && l !== i) && this.on(o, c, l), s = s.next;
                                o = e.shift()
                            } return this
                    }
                },
                trigger: function(e) {
                    var r, i, o, a, s, u, c;
                    if (!(o = this._callbacks)) return this;
                    for (u = o.all, e = e.split(t), c = n.call(arguments, 1), r = e.shift(); r;) {
                        if (i = o[r])
                            for (a = i.tail;
                                (i = i.next) !== a;) i.callback.apply(i.context || this, c);
                        if (i = u)
                            for (a = i.tail, s = [r].concat(c);
                                (i = i.next) !== a;) i.callback.apply(i.context || this, s);
                        r = e.shift()
                    }
                    return this
                }
            }, e.Events.bind = e.Events.on, e.Events.unbind = e.Events.off
        }
    }, function(e, t, n) {
        "use strict";
        var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(2)),
            i = n(0);
        e.exports = function(e) {
            e.GeoPoint = function(t, n) {
                i.isArray(t) ? (e.GeoPoint._validate(t[0], t[1]), this.latitude = t[0], this.longitude = t[1]) : i.isObject(t) ? (e.GeoPoint._validate(t.latitude, t.longitude), this.latitude = t.latitude, this.longitude = t.longitude) : i.isNumber(t) && i.isNumber(n) ? (e.GeoPoint._validate(t, n), this.latitude = t, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
                var r = this;
                this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__("latitude", (function() {
                    return r._latitude
                })), this.__defineGetter__("longitude", (function() {
                    return r._longitude
                })), this.__defineSetter__("latitude", (function(t) {
                    e.GeoPoint._validate(t, r.longitude), r._latitude = t
                })), this.__defineSetter__("longitude", (function(t) {
                    e.GeoPoint._validate(r.latitude, t), r._longitude = t
                })))
            }, e.GeoPoint._validate = function(e, t) {
                if (e < -90) throw new Error("AV.GeoPoint latitude " + e + " < -90.0.");
                if (e > 90) throw new Error("AV.GeoPoint latitude " + e + " > 90.0.");
                if (t < -180) throw new Error("AV.GeoPoint longitude " + t + " < -180.0.");
                if (t > 180) throw new Error("AV.GeoPoint longitude " + t + " > 180.0.")
            }, e.GeoPoint.current = function() {
                return new r.default((function(t, n) {
                    navigator.geolocation.getCurrentPosition((function(n) {
                        t(new e.GeoPoint({
                            latitude: n.coords.latitude,
                            longitude: n.coords.longitude
                        }))
                    }), n)
                }))
            }, i.extend(e.GeoPoint.prototype, {
                toJSON: function() {
                    return e.GeoPoint._validate(this.latitude, this.longitude), {
                        __type: "GeoPoint",
                        latitude: this.latitude,
                        longitude: this.longitude
                    }
                },
                radiansTo: function(e) {
                    var t = Math.PI / 180,
                        n = this.latitude * t,
                        r = this.longitude * t,
                        i = e.latitude * t,
                        o = n - i,
                        a = r - e.longitude * t,
                        s = Math.sin(o / 2),
                        u = Math.sin(a / 2),
                        c = s * s + Math.cos(n) * Math.cos(i) * u * u;
                    return c = Math.min(1, c), 2 * Math.asin(Math.sqrt(c))
                },
                kilometersTo: function(e) {
                    return 6371 * this.radiansTo(e)
                },
                milesTo: function(e) {
                    return 3958.8 * this.radiansTo(e)
                }
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function(e) {
            e.ACL = function(t) {
                var n = this;
                if (n.permissionsById = {}, r.isObject(t))
                    if (t instanceof e.User) n.setReadAccess(t, !0), n.setWriteAccess(t, !0);
                    else {
                        if (r.isFunction(t)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");
                        e._objectEach(t, (function(t, i) {
                            if (!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");
                            n.permissionsById[i] = {}, e._objectEach(t, (function(e, t) {
                                if ("read" !== t && "write" !== t) throw new Error("Tried to create an ACL with an invalid permission type.");
                                if (!r.isBoolean(e)) throw new Error("Tried to create an ACL with an invalid permission value.");
                                n.permissionsById[i][t] = e
                            }))
                        }))
                    }
            }, e.ACL.prototype.toJSON = function() {
                return r.clone(this.permissionsById)
            }, e.ACL.prototype._setAccess = function(t, n, i) {
                if (n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName()), !r.isString(n)) throw new Error("userId must be a string.");
                if (!r.isBoolean(i)) throw new Error("allowed must be either true or false.");
                var o = this.permissionsById[n];
                if (!o) {
                    if (!i) return;
                    o = {}, this.permissionsById[n] = o
                }
                i ? this.permissionsById[n][t] = !0 : (delete o[t], r.isEmpty(o) && delete this.permissionsById[n])
            }, e.ACL.prototype._getAccess = function(t, n) {
                n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName());
                var r = this.permissionsById[n];
                return !!r && !!r[t]
            }, e.ACL.prototype.setReadAccess = function(e, t) {
                this._setAccess("read", e, t)
            }, e.ACL.prototype.getReadAccess = function(e) {
                return this._getAccess("read", e)
            }, e.ACL.prototype.setWriteAccess = function(e, t) {
                this._setAccess("write", e, t)
            }, e.ACL.prototype.getWriteAccess = function(e) {
                return this._getAccess("write", e)
            }, e.ACL.prototype.setPublicReadAccess = function(e) {
                this.setReadAccess("*", e)
            }, e.ACL.prototype.getPublicReadAccess = function() {
                return this.getReadAccess("*")
            }, e.ACL.prototype.setPublicWriteAccess = function(e) {
                this.setWriteAccess("*", e)
            }, e.ACL.prototype.getPublicWriteAccess = function() {
                return this.getWriteAccess("*")
            }, e.ACL.prototype.getRoleReadAccess = function(t) {
                if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getReadAccess("role:" + t);
                throw new Error("role must be a AV.Role or a String")
            }, e.ACL.prototype.getRoleWriteAccess = function(t) {
                if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getWriteAccess("role:" + t);
                throw new Error("role must be a AV.Role or a String")
            }, e.ACL.prototype.setRoleReadAccess = function(t, n) {
                if (t instanceof e.Role && (t = t.getName()), !r.isString(t)) throw new Error("role must be a AV.Role or a String");
                this.setReadAccess("role:" + t, n)
            }, e.ACL.prototype.setRoleWriteAccess = function(t, n) {
                if (t instanceof e.Role && (t = t.getName()), !r.isString(t)) throw new Error("role must be a AV.Role or a String");
                this.setWriteAccess("role:" + t, n)
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function(e) {
            e.Op = function() {
                this._initialize.apply(this, arguments)
            }, r.extend(e.Op.prototype, {
                _initialize: function() {}
            }), r.extend(e.Op, {
                _extend: e._extend,
                _opDecoderMap: {},
                _registerDecoder: function(t, n) {
                    e.Op._opDecoderMap[t] = n
                },
                _decode: function(t) {
                    var n = e.Op._opDecoderMap[t.__op];
                    return n ? n(t) : void 0
                }
            }), e.Op._registerDecoder("Batch", (function(t) {
                var n = null;
                return e._arrayEach(t.ops, (function(t) {
                    t = e.Op._decode(t), n = t._mergeWithPrevious(n)
                })), n
            })), e.Op.Set = e.Op._extend({
                _initialize: function(e) {
                    this._value = e
                },
                value: function() {
                    return this._value
                },
                toJSON: function() {
                    return e._encode(this.value())
                },
                _mergeWithPrevious: function(e) {
                    return this
                },
                _estimate: function(e) {
                    return this.value()
                }
            }), e.Op._UNSET = {}, e.Op.Unset = e.Op._extend({
                toJSON: function() {
                    return {
                        __op: "Delete"
                    }
                },
                _mergeWithPrevious: function(e) {
                    return this
                },
                _estimate: function(t) {
                    return e.Op._UNSET
                }
            }), e.Op._registerDecoder("Delete", (function(t) {
                return new e.Op.Unset
            })), e.Op.Increment = e.Op._extend({
                _initialize: function(e) {
                    this._amount = e
                },
                amount: function() {
                    return this._amount
                },
                toJSON: function() {
                    return {
                        __op: "Increment",
                        amount: this._amount
                    }
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.amount());
                        if (t instanceof e.Op.Set) return new e.Op.Set(t.value() + this.amount());
                        if (t instanceof e.Op.Increment) return new e.Op.Increment(this.amount() + t.amount());
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(e) {
                    return e ? e + this.amount() : this.amount()
                }
            }), e.Op._registerDecoder("Increment", (function(t) {
                return new e.Op.Increment(t.amount)
            })), e.Op.BitAnd = e.Op._extend({
                _initialize: function(e) {
                    this._value = e
                },
                value: function() {
                    return this._value
                },
                toJSON: function() {
                    return {
                        __op: "BitAnd",
                        value: this.value()
                    }
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(0);
                        if (t instanceof e.Op.Set) return new e.Op.Set(t.value() & this.value());
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(e) {
                    return e & this.value()
                }
            }), e.Op._registerDecoder("BitAnd", (function(t) {
                return new e.Op.BitAnd(t.value)
            })), e.Op.BitOr = e.Op._extend({
                _initialize: function(e) {
                    this._value = e
                },
                value: function() {
                    return this._value
                },
                toJSON: function() {
                    return {
                        __op: "BitOr",
                        value: this.value()
                    }
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.value());
                        if (t instanceof e.Op.Set) return new e.Op.Set(t.value() | this.value());
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(e) {
                    return e | this.value()
                }
            }), e.Op._registerDecoder("BitOr", (function(t) {
                return new e.Op.BitOr(t.value)
            })), e.Op.BitXor = e.Op._extend({
                _initialize: function(e) {
                    this._value = e
                },
                value: function() {
                    return this._value
                },
                toJSON: function() {
                    return {
                        __op: "BitXor",
                        value: this.value()
                    }
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.value());
                        if (t instanceof e.Op.Set) return new e.Op.Set(t.value() ^ this.value());
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(e) {
                    return e ^ this.value()
                }
            }), e.Op._registerDecoder("BitXor", (function(t) {
                return new e.Op.BitXor(t.value)
            })), e.Op.Add = e.Op._extend({
                _initialize: function(e) {
                    this._objects = e
                },
                objects: function() {
                    return this._objects
                },
                toJSON: function() {
                    return {
                        __op: "Add",
                        objects: e._encode(this.objects())
                    }
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
                        if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.Add) return new e.Op.Add(t.objects().concat(this.objects()));
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(e) {
                    return e ? e.concat(this.objects()) : r.clone(this.objects())
                }
            }), e.Op._registerDecoder("Add", (function(t) {
                return new e.Op.Add(e._decode(t.objects))
            })), e.Op.AddUnique = e.Op._extend({
                _initialize: function(e) {
                    this._objects = r.uniq(e)
                },
                objects: function() {
                    return this._objects
                },
                toJSON: function() {
                    return {
                        __op: "AddUnique",
                        objects: e._encode(this.objects())
                    }
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
                        if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.AddUnique) return new e.Op.AddUnique(this._estimate(t.objects()));
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(t) {
                    if (t) {
                        var n = r.clone(t);
                        return e._arrayEach(this.objects(), (function(t) {
                            if (t instanceof e.Object && t.id) {
                                var i = r.find(n, (function(n) {
                                    return n instanceof e.Object && n.id === t.id
                                }));
                                if (i) {
                                    var o = r.indexOf(n, i);
                                    n[o] = t
                                } else n.push(t)
                            } else r.contains(n, t) || n.push(t)
                        })), n
                    }
                    return r.clone(this.objects())
                }
            }), e.Op._registerDecoder("AddUnique", (function(t) {
                return new e.Op.AddUnique(e._decode(t.objects))
            })), e.Op.Remove = e.Op._extend({
                _initialize: function(e) {
                    this._objects = r.uniq(e)
                },
                objects: function() {
                    return this._objects
                },
                toJSON: function() {
                    return {
                        __op: "Remove",
                        objects: e._encode(this.objects())
                    }
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return t;
                        if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.Remove) return new e.Op.Remove(r.union(t.objects(), this.objects()));
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(t) {
                    if (t) {
                        var n = r.difference(t, this.objects());
                        return e._arrayEach(this.objects(), (function(t) {
                            t instanceof e.Object && t.id && (n = r.reject(n, (function(n) {
                                return n instanceof e.Object && n.id === t.id
                            })))
                        })), n
                    }
                    return []
                }
            }), e.Op._registerDecoder("Remove", (function(t) {
                return new e.Op.Remove(e._decode(t.objects))
            })), e.Op.Relation = e.Op._extend({
                _initialize: function(t, n) {
                    this._targetClassName = null;
                    var i = this,
                        o = function(t) {
                            if (t instanceof e.Object) {
                                if (!t.id) throw new Error("You can't add an unsaved AV.Object to a relation.");
                                if (i._targetClassName || (i._targetClassName = t.className), i._targetClassName !== t.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + t.className + ".");
                                return t.id
                            }
                            return t
                        };
                    this.relationsToAdd = r.uniq(r.map(t, o)), this.relationsToRemove = r.uniq(r.map(n, o))
                },
                added: function() {
                    var t = this;
                    return r.map(this.relationsToAdd, (function(n) {
                        var r = e.Object._create(t._targetClassName);
                        return r.id = n, r
                    }))
                },
                removed: function() {
                    var t = this;
                    return r.map(this.relationsToRemove, (function(n) {
                        var r = e.Object._create(t._targetClassName);
                        return r.id = n, r
                    }))
                },
                toJSON: function() {
                    var e = null,
                        t = null,
                        n = this,
                        i = function(e) {
                            return {
                                __type: "Pointer",
                                className: n._targetClassName,
                                objectId: e
                            }
                        };
                    return this.relationsToAdd.length > 0 && (e = {
                        __op: "AddRelation",
                        objects: r.map(this.relationsToAdd, i)
                    }), this.relationsToRemove.length > 0 && (t = {
                        __op: "RemoveRelation",
                        objects: r.map(this.relationsToRemove, i)
                    }), e && t ? {
                        __op: "Batch",
                        ops: [e, t]
                    } : e || t || {}
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) throw new Error("You can't modify a relation after deleting it.");
                        if (t instanceof e.Op.Relation) {
                            if (t._targetClassName && t._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + t._targetClassName + ", but " + this._targetClassName + " was passed in.");
                            var n = r.union(r.difference(t.relationsToAdd, this.relationsToRemove), this.relationsToAdd),
                                i = r.union(r.difference(t.relationsToRemove, this.relationsToAdd), this.relationsToRemove),
                                o = new e.Op.Relation(n, i);
                            return o._targetClassName = this._targetClassName, o
                        }
                        throw new Error("Op is invalid after previous op.")
                    }
                    return this
                },
                _estimate: function(t, n, r) {
                    if (t) {
                        if (t instanceof e.Relation) {
                            if (this._targetClassName)
                                if (t.targetClassName) {
                                    if (t.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + t.targetClassName + ", but a " + this._targetClassName + " was passed in.")
                                } else t.targetClassName = this._targetClassName;
                            return t
                        }
                        throw new Error("Op is invalid after previous op.")
                    }
                    new e.Relation(n, r).targetClassName = this._targetClassName
                }
            }), e.Op._registerDecoder("AddRelation", (function(t) {
                return new e.Op.Relation(e._decode(t.objects), [])
            })), e.Op._registerDecoder("RemoveRelation", (function(t) {
                return new e.Op.Relation([], e._decode(t.objects))
            }))
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function(e) {
            e.Relation = function(e, t) {
                if (!r.isString(t)) throw new TypeError("key must be a string");
                this.parent = e, this.key = t, this.targetClassName = null
            }, e.Relation.reverseQuery = function(t, n, r) {
                var i = new e.Query(t);
                return i.equalTo(n, r._toPointer()), i
            }, r.extend(e.Relation.prototype, {
                _ensureParentAndKey: function(e, t) {
                    if (this.parent = this.parent || e, this.key = this.key || t, this.parent !== e) throw new Error("Internal Error. Relation retrieved from two different Objects.");
                    if (this.key !== t) throw new Error("Internal Error. Relation retrieved from two different keys.")
                },
                add: function(t) {
                    r.isArray(t) || (t = [t]);
                    var n = new e.Op.Relation(t, []);
                    this.parent.set(this.key, n), this.targetClassName = n._targetClassName
                },
                remove: function(t) {
                    r.isArray(t) || (t = [t]);
                    var n = new e.Op.Relation([], t);
                    this.parent.set(this.key, n), this.targetClassName = n._targetClassName
                },
                toJSON: function() {
                    return {
                        __type: "Relation",
                        className: this.targetClassName
                    }
                },
                query: function() {
                    var t, n;
                    return this.targetClassName ? (t = e.Object._getSubclass(this.targetClassName), n = new e.Query(t)) : (t = e.Object._getSubclass(this.parent.className), (n = new e.Query(t))._defaultParams.redirectClassNameForKey = this.key), n._addCondition("$relatedTo", "object", this.parent._toPointer()), n._addCondition("$relatedTo", "key", this.key), n
                }
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(2)),
            i = n(0),
            o = n(134),
            a = n(135),
            s = n(136),
            u = n(16),
            c = n(6)._request,
            l = n(5),
            h = l.tap,
            d = l.transformFetchOptions,
            p = n(19)("leancloud:file"),
            f = n(140);
        e.exports = function(e) {
            var t = function() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                },
                n = function(e) {
                    return i.isString(e) ? e.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4] : ""
                },
                l = function(e) {
                    if (e < 26) return String.fromCharCode(65 + e);
                    if (e < 52) return String.fromCharCode(e - 26 + 97);
                    if (e < 62) return String.fromCharCode(e - 52 + 48);
                    if (62 === e) return "+";
                    if (63 === e) return "/";
                    throw new Error("Tried to encode large digit " + e + " in base64.")
                },
                g = function(e) {
                    var t = [];
                    return t.length = Math.ceil(e.length / 3), i.times(t.length, (function(n) {
                        var r = e[3 * n],
                            i = e[3 * n + 1] || 0,
                            o = e[3 * n + 2] || 0,
                            a = 3 * n + 1 < e.length,
                            s = 3 * n + 2 < e.length;
                        t[n] = [l(r >> 2 & 63), l(r << 4 & 48 | i >> 4 & 15), a ? l(i << 2 & 60 | o >> 6 & 3) : "=", s ? l(63 & o) : "="].join("")
                    })), t.join("")
                };
            e.File = function(t, r, o) {
                if (this.attributes = {
                        name: t,
                        url: "",
                        metaData: {},
                        base64: ""
                    }, i.isString(r)) throw new TypeError("Creating an AV.File from a String is not yet supported.");
                i.isArray(r) && (this.attributes.metaData.size = r.length, r = {
                    base64: g(r)
                }), this._extName = "", this._data = r, this._uploadHeaders = {}, r && r.blob && "string" == typeof r.blob.uri && (this._extName = n(r.blob.uri)), "undefined" != typeof Blob && r instanceof Blob && (r.size && (this.attributes.metaData.size = r.size), r.name && (this._extName = n(r.name)));
                var a = void 0;
                if (r && r.owner) a = r.owner;
                else if (!e._config.disableCurrentUser) try {
                    a = e.User.current()
                } catch (e) {
                    if ("SYNC_API_NOT_AVAILABLE" !== e.code) throw e
                }
                this.attributes.metaData.owner = a ? a.id : "unknown", this.set("mime_type", o)
            }, e.File.withURL = function(t, n, r, i) {
                if (!t || !n) throw new Error("Please provide file name and url");
                var o = new e.File(t, null, i);
                if (r)
                    for (var a in r) o.attributes.metaData[a] || (o.attributes.metaData[a] = r[a]);
                return o.attributes.url = n, o.attributes.metaData.__source = "external", o
            }, e.File.createWithoutData = function(t) {
                var n = new e.File;
                return n.id = t, n
            }, i.extend(e.File.prototype, {
                className: "_File",
                _toFullJSON: function(t) {
                    var n = this,
                        r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        o = i.clone(this.attributes);
                    return e._objectEach(o, (function(n, i) {
                        o[i] = e._encode(n, t, void 0, r)
                    })), e._objectEach(this._operations, (function(e, t) {
                        o[t] = e
                    })), i.has(this, "id") && (o.objectId = this.id), i(["createdAt", "updatedAt"]).each((function(e) {
                        if (i.has(n, e)) {
                            var t = n[e];
                            o[e] = i.isDate(t) ? t.toJSON() : t
                        }
                    })), r && (o.__type = "File"), o
                },
                toFullJSON: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this._toFullJSON(e)
                },
                toJSON: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [this];
                    return this._toFullJSON(n, !1)
                },
                _toPointer: function() {
                    return {
                        __type: "Pointer",
                        className: this.className,
                        objectId: this.id
                    }
                },
                getACL: function() {
                    return this._acl
                },
                setACL: function(t) {
                    return t instanceof e.ACL ? (this._acl = t, this) : new u(u.OTHER_CAUSE, "ACL must be a AV.ACL.")
                },
                name: function() {
                    return this.get("name")
                },
                url: function() {
                    return this.get("url")
                },
                get: function(e) {
                    switch (e) {
                        case "objectId":
                            return this.id;
                        case "url":
                        case "name":
                        case "mime_type":
                        case "metaData":
                        case "createdAt":
                        case "updatedAt":
                            return this.attributes[e];
                        default:
                            return this.attributes.metaData[e]
                    }
                },
                set: function() {
                    for (var e = this, t = function(t, n) {
                            switch (t) {
                                case "name":
                                case "url":
                                case "mime_type":
                                case "base64":
                                case "metaData":
                                    e.attributes[t] = n;
                                    break;
                                default:
                                    e.attributes.metaData[t] = n
                            }
                        }, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    switch (r.length) {
                        case 1:
                            for (var o in r[0]) t(o, r[0][o]);
                            break;
                        case 2:
                            t(r[0], r[1])
                    }
                    return this
                },
                setUploadHeader: function(e, t) {
                    return this._uploadHeaders[e] = t, this
                },
                metaData: function(e, t) {
                    return e && t ? (this.attributes.metaData[e] = t, this) : e && !t ? this.attributes.metaData[e] : this.attributes.metaData
                },
                thumbnailURL: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "png",
                        o = this.attributes.url;
                    if (!o) throw new Error("Invalid url.");
                    if (!e || !t || e <= 0 || t <= 0) throw new Error("Invalid width or height value.");
                    if (n <= 0 || n > 100) throw new Error("Invalid quality value.");
                    return o + "?imageView/" + (r ? 2 : 1) + "/w/" + e + "/h/" + t + "/q/" + n + "/format/" + i
                },
                size: function() {
                    return this.metaData().size
                },
                ownerId: function() {
                    return this.metaData().owner
                },
                destroy: function(e) {
                    return this.id ? c("files", null, this.id, "DELETE", null, e) : r.default.reject(new Error("The file id does not eixst."))
                },
                _fileToken: function(e, r) {
                    var i = this.attributes.name,
                        o = n(i);
                    !o && this._extName && (i += this._extName, o = this._extName);
                    var a = t() + t() + t() + t() + t() + o,
                        s = {
                            key: a,
                            name: i,
                            keep_file_name: r.keepFileName,
                            ACL: this._acl,
                            mime_type: e,
                            metaData: this.attributes.metaData
                        };
                    return this._qiniu_key = a, c("fileTokens", null, null, "POST", s, r)
                },
                save: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.id) throw new Error("File is already saved.");
                    if (!this._previousSave)
                        if (this._data) {
                            var n = this.get("mime_type");
                            this._previousSave = this._fileToken(n, t).then((function(u) {
                                return u.mime_type && (n = u.mime_type, e.set("mime_type", n)), e._token = u.token, r.default.resolve().then((function() {
                                    var t = e._data;
                                    if (t && t.base64) return f(t.base64, n);
                                    if (t && t.blob) return !t.blob.type && n && (t.blob.type = n), t.blob.name || (t.blob.name = e.get("name")), t.blob;
                                    if ("undefined" != typeof Blob && t instanceof Blob) return t;
                                    throw new TypeError("malformed file data")
                                })).then((function(n) {
                                    var r = i.extend({}, t);
                                    switch (t.onprogress && (r.onprogress = function(e) {
                                        if ("download" !== e.direction) return t.onprogress(e)
                                    }), u.provider) {
                                        case "s3":
                                            return s(u, n, e, r);
                                        case "qcloud":
                                            return o(u, n, e, r);
                                        case "qiniu":
                                        default:
                                            return a(u, n, e, r)
                                    }
                                })).then(h((function() {
                                    return e._callback(!0)
                                })), (function(t) {
                                    throw e._callback(!1), t
                                }))
                            }))
                        } else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
                        var u = {
                            name: this.attributes.name,
                            ACL: this._acl,
                            metaData: this.attributes.metaData,
                            mime_type: this.mimeType,
                            url: this.attributes.url
                        };
                        this._previousSave = c("files", this.attributes.name, null, "post", u, t).then((function(t) {
                            return e.attributes.name = t.name, e.attributes.url = t.url, e.id = t.objectId, t.size && (e.attributes.metaData.size = t.size), e
                        }))
                    }
                    return this._previousSave
                },
                _callback: function(e) {
                    c("fileCallback", null, null, "post", {
                        token: this._token,
                        result: e
                    }).catch(p), delete this._token, delete this._data
                },
                fetch: function(e, t) {
                    return c("files", null, this.id, "GET", d(e), t).then(this._finishFetch.bind(this))
                },
                _finishFetch: function(t) {
                    var n = e.Object.prototype.parse(t);
                    return n.attributes = {
                        name: n.name,
                        url: n.url,
                        mime_type: n.mime_type,
                        bucket: n.bucket
                    }, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, i.extend(this, n), this
                }
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(28).getAdapter,
            i = n(19)("cos");
        e.exports = function(e, t, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
            var a = e.upload_url + "?sign=" + encodeURIComponent(e.token),
                s = {
                    field: "fileContent",
                    data: t,
                    name: n.attributes.name
                },
                u = {
                    headers: n._uploadHeaders,
                    data: {
                        op: "upload"
                    },
                    onprogress: o.onprogress
                };
            return i("url: %s, file: %o, options: %o", a, s, u), r("upload")(a, s, u).then((function(e) {
                if (i(e.status, e.data), !1 === e.ok) {
                    var t = new Error(e.status);
                    throw t.response = e, t
                }
                return n
            }), (function(e) {
                var t = e.response;
                throw t && (i(t.status, t.data), e.statusCode = t.status, e.response = t.data), e
            }))
        }
    }, function(e, t, n) {
        "use strict";
        var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(9)),
            i = n(28).getAdapter,
            o = n(19)("leancloud:qiniu");
        e.exports = function(e, t, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
            var s = e.token,
                u = e.upload_url || "https://upload.qiniup.com",
                c = {
                    field: "file",
                    data: t,
                    name: n.attributes.name
                },
                l = {
                    headers: n._uploadHeaders,
                    data: {
                        name: n.attributes.name,
                        key: e.key || n._qiniu_key,
                        token: s
                    },
                    onprogress: a.onprogress
                };
            return o("url: %s, file: %o, options: %o", u, c, l), i("upload")(u, c, l).then((function(e) {
                if (o(e.status, e.data), !1 === e.ok) {
                    var t = e.status;
                    e.data && (t = e.data.error ? e.data.error : (0, r.default)(e.data));
                    var i = new Error(t);
                    throw i.response = e, i
                }
                return n
            }), (function(e) {
                var t = e.response;
                throw t && (o(t.status, t.data), e.statusCode = t.status, e.response = t.data), e
            }))
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(5).ajax;
        e.exports = function(e, t, n) {
            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId, i({
                url: e.upload_url,
                method: "PUT",
                data: t,
                headers: r.extend({
                    "Content-Type": n.get("mime_type"),
                    "Cache-Control": "public, max-age=31536000"
                }, n._uploadHeaders),
                onprogress: o.onprogress
            }).then((function() {
                return n
            }))
        }
    }, function(e, t, n) {
        ! function() {
            var t = n(138),
                r = n(77).utf8,
                i = n(139),
                o = n(77).bin,
                a = function(e, n) {
                    e.constructor == String ? e = n && "binary" === n.encoding ? o.stringToBytes(e) : r.stringToBytes(e) : i(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                    for (var s = t.bytesToWords(e), u = 8 * e.length, c = 1732584193, l = -271733879, h = -1732584194, d = 271733878, p = 0; p < s.length; p++) s[p] = 16711935 & (s[p] << 8 | s[p] >>> 24) | 4278255360 & (s[p] << 24 | s[p] >>> 8);
                    s[u >>> 5] |= 128 << u % 32, s[14 + (u + 64 >>> 9 << 4)] = u;
                    var f = a._ff,
                        g = a._gg,
                        m = a._hh,
                        _ = a._ii;
                    for (p = 0; p < s.length; p += 16) {
                        var v = c,
                            b = l,
                            y = h,
                            w = d;
                        c = f(c, l, h, d, s[p + 0], 7, -680876936), d = f(d, c, l, h, s[p + 1], 12, -389564586), h = f(h, d, c, l, s[p + 2], 17, 606105819), l = f(l, h, d, c, s[p + 3], 22, -1044525330), c = f(c, l, h, d, s[p + 4], 7, -176418897), d = f(d, c, l, h, s[p + 5], 12, 1200080426), h = f(h, d, c, l, s[p + 6], 17, -1473231341), l = f(l, h, d, c, s[p + 7], 22, -45705983), c = f(c, l, h, d, s[p + 8], 7, 1770035416), d = f(d, c, l, h, s[p + 9], 12, -1958414417), h = f(h, d, c, l, s[p + 10], 17, -42063), l = f(l, h, d, c, s[p + 11], 22, -1990404162), c = f(c, l, h, d, s[p + 12], 7, 1804603682), d = f(d, c, l, h, s[p + 13], 12, -40341101), h = f(h, d, c, l, s[p + 14], 17, -1502002290), c = g(c, l = f(l, h, d, c, s[p + 15], 22, 1236535329), h, d, s[p + 1], 5, -165796510), d = g(d, c, l, h, s[p + 6], 9, -1069501632), h = g(h, d, c, l, s[p + 11], 14, 643717713), l = g(l, h, d, c, s[p + 0], 20, -373897302), c = g(c, l, h, d, s[p + 5], 5, -701558691), d = g(d, c, l, h, s[p + 10], 9, 38016083), h = g(h, d, c, l, s[p + 15], 14, -660478335), l = g(l, h, d, c, s[p + 4], 20, -405537848), c = g(c, l, h, d, s[p + 9], 5, 568446438), d = g(d, c, l, h, s[p + 14], 9, -1019803690), h = g(h, d, c, l, s[p + 3], 14, -187363961), l = g(l, h, d, c, s[p + 8], 20, 1163531501), c = g(c, l, h, d, s[p + 13], 5, -1444681467), d = g(d, c, l, h, s[p + 2], 9, -51403784), h = g(h, d, c, l, s[p + 7], 14, 1735328473), c = m(c, l = g(l, h, d, c, s[p + 12], 20, -1926607734), h, d, s[p + 5], 4, -378558), d = m(d, c, l, h, s[p + 8], 11, -2022574463), h = m(h, d, c, l, s[p + 11], 16, 1839030562), l = m(l, h, d, c, s[p + 14], 23, -35309556), c = m(c, l, h, d, s[p + 1], 4, -1530992060), d = m(d, c, l, h, s[p + 4], 11, 1272893353), h = m(h, d, c, l, s[p + 7], 16, -155497632), l = m(l, h, d, c, s[p + 10], 23, -1094730640), c = m(c, l, h, d, s[p + 13], 4, 681279174), d = m(d, c, l, h, s[p + 0], 11, -358537222), h = m(h, d, c, l, s[p + 3], 16, -722521979), l = m(l, h, d, c, s[p + 6], 23, 76029189), c = m(c, l, h, d, s[p + 9], 4, -640364487), d = m(d, c, l, h, s[p + 12], 11, -421815835), h = m(h, d, c, l, s[p + 15], 16, 530742520), c = _(c, l = m(l, h, d, c, s[p + 2], 23, -995338651), h, d, s[p + 0], 6, -198630844), d = _(d, c, l, h, s[p + 7], 10, 1126891415), h = _(h, d, c, l, s[p + 14], 15, -1416354905), l = _(l, h, d, c, s[p + 5], 21, -57434055), c = _(c, l, h, d, s[p + 12], 6, 1700485571), d = _(d, c, l, h, s[p + 3], 10, -1894986606), h = _(h, d, c, l, s[p + 10], 15, -1051523), l = _(l, h, d, c, s[p + 1], 21, -2054922799), c = _(c, l, h, d, s[p + 8], 6, 1873313359), d = _(d, c, l, h, s[p + 15], 10, -30611744), h = _(h, d, c, l, s[p + 6], 15, -1560198380), l = _(l, h, d, c, s[p + 13], 21, 1309151649), c = _(c, l, h, d, s[p + 4], 6, -145523070), d = _(d, c, l, h, s[p + 11], 10, -1120210379), h = _(h, d, c, l, s[p + 2], 15, 718787259), l = _(l, h, d, c, s[p + 9], 21, -343485551), c = c + v >>> 0, l = l + b >>> 0, h = h + y >>> 0, d = d + w >>> 0
                    }
                    return t.endian([c, l, h, d])
                };
            a._ff = function(e, t, n, r, i, o, a) {
                var s = e + (t & n | ~t & r) + (i >>> 0) + a;
                return (s << o | s >>> 32 - o) + t
            }, a._gg = function(e, t, n, r, i, o, a) {
                var s = e + (t & r | n & ~r) + (i >>> 0) + a;
                return (s << o | s >>> 32 - o) + t
            }, a._hh = function(e, t, n, r, i, o, a) {
                var s = e + (t ^ n ^ r) + (i >>> 0) + a;
                return (s << o | s >>> 32 - o) + t
            }, a._ii = function(e, t, n, r, i, o, a) {
                var s = e + (n ^ (t | ~r)) + (i >>> 0) + a;
                return (s << o | s >>> 32 - o) + t
            }, a._blocksize = 16, a._digestsize = 16, e.exports = function(e, n) {
                if (null == e) throw new Error("Illegal argument " + e);
                var r = t.wordsToBytes(a(e, n));
                return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : t.bytesToHex(r)
            }
        }()
    }, function(e, t) {
        ! function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                n = {
                    rotl: function(e, t) {
                        return e << t | e >>> 32 - t
                    },
                    rotr: function(e, t) {
                        return e << 32 - t | e >>> t
                    },
                    endian: function(e) {
                        if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                        for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                        return e
                    },
                    randomBytes: function(e) {
                        for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                        return t
                    },
                    bytesToWords: function(e) {
                        for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                        return t
                    },
                    wordsToBytes: function(e) {
                        for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                        return t
                    },
                    bytesToHex: function(e) {
                        for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                        return t.join("")
                    },
                    hexToBytes: function(e) {
                        for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                        return t
                    },
                    bytesToBase64: function(e) {
                        for (var n = [], r = 0; r < e.length; r += 3)
                            for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
                        return n.join("")
                    },
                    base64ToBytes: function(e) {
                        e = e.replace(/[^A-Z0-9+\/]/gi, "");
                        for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4) 0 != i && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i);
                        return n
                    }
                };
            e.exports = n
        }()
    }, function(e, t) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <https://feross.org>
         * @license  MIT
         */
        e.exports = function(e) {
            return null != e && (n(e) || function(e) {
                return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
            }(e) || !!e._isBuffer)
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            var n;
            e.indexOf("base64") < 0 ? n = atob(e) : e.split(",")[0].indexOf("base64") >= 0 ? (t = t || e.split(",")[0].split(":")[1].split(";")[0], n = atob(e.split(",")[1])) : n = unescape(e.split(",")[1]);
            for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
            return new Blob([r], {
                type: t
            })
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e, t) {
            return e && e[t] ? c.isFunction(e[t]) ? e[t]() : e[t] : null
        }
        var o = r(n(142)),
            a = r(n(9)),
            s = r(n(145)),
            u = r(n(2)),
            c = n(0),
            l = n(16),
            h = n(6)._request,
            d = n(5),
            p = d.isNullOrUndefined,
            f = d.ensureArray,
            g = d.transformFetchOptions,
            m = d.setValue,
            _ = d.findValue,
            v = d.isPlainObject,
            b = d.continueWhile,
            y = ["objectId", "createdAt", "updatedAt"],
            w = function(e) {
                if (-1 !== y.indexOf(e)) throw new Error("key[" + e + "] is reserved")
            },
            k = function(e) {
                var t = c.find(e, (function(e) {
                    return e instanceof Error
                }));
                if (!t) return e;
                var n = new l(t.code, t.message);
                throw n.results = e, n
            };
        e.exports = function(e) {
            e.Object = function(t, n) {
                if (c.isString(t)) return e.Object._create.apply(this, arguments);
                t = t || {}, n && n.parse && (t = this.parse(t), t = this._mergeMagicFields(t));
                var r = i(this, "defaults");
                r && (t = c.extend({}, r, t)), n && n.collection && (this.collection = n.collection), this._serverData = {}, this._opSetQueue = [{}], this._flags = {}, this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = c.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(t, {
                    silent: !0
                }), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = c.clone(this.attributes), this.initialize.apply(this, arguments)
            }, e.Object.saveAll = function(t, n) {
                return e.Object._deepSaveAsync(t, null, n)
            }, e.Object.fetchAll = function(e, t) {
                return u.default.resolve().then((function() {
                    return h("batch", null, null, "POST", {
                        requests: c.map(e, (function(e) {
                            if (!e.className) throw new Error("object must have className to fetch");
                            if (!e.id) throw new Error("object must have id to fetch");
                            if (e.dirty()) throw new Error("object is modified but not saved");
                            return {
                                method: "GET",
                                path: "/1.1/classes/" + e.className + "/" + e.id
                            }
                        }))
                    }, t)
                })).then((function(t) {
                    var n = c.map(e, (function(e, n) {
                        if (t[n].success) {
                            var r = e.parse(t[n].success);
                            return e._cleanupUnsetKeys(r), e._finishFetch(r), e
                        }
                        return null === t[n].success ? new l(l.OBJECT_NOT_FOUND, "Object not found.") : new l(t[n].error.code, t[n].error.error)
                    }));
                    return k(n)
                }))
            }, c.extend(e.Object.prototype, e.Events, {
                _fetchWhenSave: !1,
                initialize: function() {},
                fetchWhenSave: function(e) {
                    if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), !c.isBoolean(e)) throw new Error("Expect boolean value for fetchWhenSave");
                    this._fetchWhenSave = e
                },
                getObjectId: function() {
                    return this.id
                },
                getCreatedAt: function() {
                    return this.createdAt
                },
                getUpdatedAt: function() {
                    return this.updatedAt
                },
                toJSON: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return this._toFullJSON(n, !1)
                },
                toFullJSON: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this._toFullJSON(e)
                },
                _toFullJSON: function(t) {
                    var n = this,
                        r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = c.clone(this.attributes);
                    if (c.isArray(t)) var o = t.concat(this);
                    return e._objectEach(i, (function(t, n) {
                        i[n] = e._encode(t, o, void 0, r)
                    })), e._objectEach(this._operations, (function(e, t) {
                        i[t] = e
                    })), c.has(this, "id") && (i.objectId = this.id), c(["createdAt", "updatedAt"]).each((function(e) {
                        if (c.has(n, e)) {
                            var t = n[e];
                            i[e] = c.isDate(t) ? t.toJSON() : t
                        }
                    })), r && (i.__type = "Object", c.isArray(t) && t.length && (i.__type = "Pointer"), i.className = this.className), i
                },
                _refreshCache: function() {
                    var t = this;
                    t._refreshingCache || (t._refreshingCache = !0, e._objectEach(this.attributes, (function(n, r) {
                        n instanceof e.Object ? n._refreshCache() : c.isObject(n) && t._resetCacheForKey(r) && t.set(r, new e.Op.Set(n), {
                            silent: !0
                        })
                    })), delete t._refreshingCache)
                },
                dirty: function(e) {
                    this._refreshCache();
                    var t = c.last(this._opSetQueue);
                    return e ? !!t[e] : !this.id || c.keys(t).length > 0
                },
                dirtyKeys: function() {
                    this._refreshCache();
                    var e = c.last(this._opSetQueue);
                    return c.keys(e)
                },
                _toPointer: function() {
                    return {
                        __type: "Pointer",
                        className: this.className,
                        objectId: this.id
                    }
                },
                get: function(e) {
                    switch (e) {
                        case "objectId":
                            return this.id;
                        case "createdAt":
                        case "updatedAt":
                            return this[e];
                        default:
                            return this.attributes[e]
                    }
                },
                relation: function(t) {
                    var n = this.get(t);
                    if (n) {
                        if (!(n instanceof e.Relation)) throw new Error("Called relation() on non-relation field " + t);
                        return n._ensureParentAndKey(this, t), n
                    }
                    return new e.Relation(this, t)
                },
                escape: function(e) {
                    var t = this._escapedAttributes[e];
                    if (t) return t;
                    var n, r = this.attributes[e];
                    return n = p(r) ? "" : c.escape(r.toString()), this._escapedAttributes[e] = n, n
                },
                has: function(e) {
                    return !p(this.attributes[e])
                },
                _mergeMagicFields: function(t) {
                    var n = this;
                    return e._arrayEach(["objectId", "createdAt", "updatedAt"], (function(r) {
                        t[r] && ("objectId" === r ? n.id = t[r] : "createdAt" !== r && "updatedAt" !== r || c.isDate(t[r]) ? n[r] = t[r] : n[r] = e._parseDate(t[r]), delete t[r])
                    })), t
                },
                _startSave: function() {
                    this._opSetQueue.push({})
                },
                _cancelSave: function() {
                    var t = c.first(this._opSetQueue);
                    this._opSetQueue = c.rest(this._opSetQueue);
                    var n = c.first(this._opSetQueue);
                    e._objectEach(t, (function(e, r) {
                        var i = t[r],
                            o = n[r];
                        i && o ? n[r] = o._mergeWithPrevious(i) : i && (n[r] = i)
                    })), this._saving = this._saving - 1
                },
                _finishSave: function(t) {
                    var n = {};
                    e._traverse(this.attributes, (function(t) {
                        t instanceof e.Object && t.id && t._hasData && (n[t.id] = t)
                    }));
                    var r = c.first(this._opSetQueue);
                    this._opSetQueue = c.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), this._mergeMagicFields(t);
                    var i = this;
                    e._objectEach(t, (function(t, r) {
                        i._serverData[r] = e._decode(t, r);
                        var o = e._traverse(i._serverData[r], (function(t) {
                            if (t instanceof e.Object && n[t.id]) return n[t.id]
                        }));
                        o && (i._serverData[r] = o)
                    })), this._rebuildAllEstimatedData();
                    var o = this._opSetQueue.map(c.clone);
                    this._refreshCache(), this._opSetQueue = o, this._saving = this._saving - 1
                },
                _finishFetch: function(t, n) {
                    this._opSetQueue = [{}], this._mergeMagicFields(t);
                    var r = this;
                    e._objectEach(t, (function(t, n) {
                        r._serverData[n] = e._decode(t, n)
                    })), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._hasData = n
                },
                _applyOpSet: function(t, n) {
                    var r = this;
                    e._objectEach(t, (function(t, i) {
                        var o = _(n, i),
                            a = (0, s.default)(o, 3),
                            u = a[0],
                            c = a[1],
                            l = a[2];
                        m(n, i, t._estimate(u, r, i)), c && c[l] === e.Op._UNSET && delete c[l]
                    }))
                },
                _resetCacheForKey: function(t) {
                    var n = this.attributes[t];
                    if (c.isObject(n) && !(n instanceof e.Object) && !(n instanceof e.File)) {
                        var r = (0, a.default)(function e(t) {
                            return c.isArray(t) ? t.map(e) : v(t) ? c.mapObject(t, e) : c.isObject(t) && t._toPointer ? t._toPointer() : t
                        }(n));
                        if (this._hashedJSON[t] !== r) {
                            var i = !!this._hashedJSON[t];
                            return this._hashedJSON[t] = r, i
                        }
                    }
                    return !1
                },
                _rebuildEstimatedDataForKey: function(t) {
                    var n = this;
                    delete this.attributes[t], this._serverData[t] && (this.attributes[t] = this._serverData[t]), e._arrayEach(this._opSetQueue, (function(r) {
                        var i = r[t];
                        if (i) {
                            var o = _(n.attributes, t),
                                a = (0, s.default)(o, 4),
                                u = a[0],
                                c = a[1],
                                l = a[2],
                                h = a[3];
                            m(n.attributes, t, i._estimate(u, n, t)), c && c[l] === e.Op._UNSET && delete c[l], n._resetCacheForKey(h)
                        }
                    }))
                },
                _rebuildAllEstimatedData: function() {
                    var t = this,
                        n = c.clone(this.attributes);
                    this.attributes = c.clone(this._serverData), e._arrayEach(this._opSetQueue, (function(n) {
                        t._applyOpSet(n, t.attributes), e._objectEach(n, (function(e, n) {
                            t._resetCacheForKey(n)
                        }))
                    })), e._objectEach(n, (function(e, n) {
                        t.attributes[n] !== e && t.trigger("change:" + n, t, t.attributes[n], {})
                    })), e._objectEach(this.attributes, (function(e, r) {
                        c.has(n, r) || t.trigger("change:" + r, t, e, {})
                    }))
                },
                set: function(t, n, r) {
                    var i;
                    if (c.isObject(t) || p(t) ? (i = c.mapObject(t, (function(t, n) {
                            return w(n), e._decode(t, n)
                        })), r = n) : (i = {}, w(t), i[t] = e._decode(n, t)), r = r || {}, !i) return this;
                    i instanceof e.Object && (i = i.attributes), r.unset && e._objectEach(i, (function(t, n) {
                        i[n] = new e.Op.Unset
                    }));
                    var o = c.clone(i),
                        a = this;
                    e._objectEach(o, (function(t, n) {
                        t instanceof e.Op && (o[n] = t._estimate(a.attributes[n], a, n), o[n] === e.Op._UNSET && delete o[n])
                    })), this._validate(i, r), r.changes = {};
                    var s = this._escapedAttributes;
                    return e._arrayEach(c.keys(i), (function(t) {
                        var n = i[t];
                        n instanceof e.Relation && (n.parent = a), n instanceof e.Op || (n = new e.Op.Set(n));
                        var o = !0;
                        n instanceof e.Op.Set && c.isEqual(a.attributes[t], n.value) && (o = !1), o && (delete s[t], r.silent ? a._silent[t] = !0 : r.changes[t] = !0);
                        var u = c.last(a._opSetQueue);
                        u[t] = n._mergeWithPrevious(u[t]), a._rebuildEstimatedDataForKey(t), o ? (a.changed[t] = a.attributes[t], r.silent || (a._pending[t] = !0)) : (delete a.changed[t], delete a._pending[t])
                    })), r.silent || this.change(r), this
                },
                unset: function(e, t) {
                    return (t = t || {}).unset = !0, this.set(e, null, t)
                },
                increment: function(t, n) {
                    return (c.isUndefined(n) || c.isNull(n)) && (n = 1), this.set(t, new e.Op.Increment(n))
                },
                add: function(t, n) {
                    return this.set(t, new e.Op.Add(f(n)))
                },
                addUnique: function(t, n) {
                    return this.set(t, new e.Op.AddUnique(f(n)))
                },
                remove: function(t, n) {
                    return this.set(t, new e.Op.Remove(f(n)))
                },
                bitAnd: function(t, n) {
                    return this.set(t, new e.Op.BitAnd(n))
                },
                bitOr: function(t, n) {
                    return this.set(t, new e.Op.BitOr(n))
                },
                bitXor: function(t, n) {
                    return this.set(t, new e.Op.BitXor(n))
                },
                op: function(e) {
                    return c.last(this._opSetQueue)[e]
                },
                clear: function(e) {
                    (e = e || {}).unset = !0;
                    var t = c.extend(this.attributes, this._operations);
                    return this.set(t, e)
                },
                revert: function(e) {
                    var t = c.last(this._opSetQueue);
                    return f(e || c.keys(t)).forEach((function(e) {
                        delete t[e]
                    })), this._rebuildAllEstimatedData(), this
                },
                _getSaveJSON: function() {
                    var t = c.clone(c.first(this._opSetQueue));
                    return e._objectEach(t, (function(e, n) {
                        t[n] = e.toJSON()
                    })), t
                },
                _canBeSerialized: function() {
                    return e.Object._canBeSerializedAsValue(this.attributes)
                },
                fetch: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments[1],
                        n = this;
                    return h("classes", this.className, this.id, "GET", g(e), t).then((function(t) {
                        var r = n.parse(t);
                        return n._cleanupUnsetKeys(r, e.keys ? f(e.keys).join(",").split(",") : void 0), n._finishFetch(r, !0), n
                    }))
                },
                _cleanupUnsetKeys: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.keys(this._serverData);
                    c.forEach(n, (function(n) {
                        void 0 === e[n] && delete t._serverData[n]
                    }))
                },
                save: function(t, n, r) {
                    var i, o, a;
                    c.isObject(t) || p(t) ? (i = t, a = n) : ((i = {})[t] = n, a = r), (a = c.clone(a) || {}).wait && (o = c.clone(this.attributes));
                    var s = c.clone(a) || {};
                    s.wait && (s.silent = !0), i && this.set(i, s);
                    var l = this,
                        d = [],
                        f = [];
                    return e.Object._findUnsavedChildren(l, d, f), d.length + f.length > 1 ? e.Object._deepSaveAsync(this, l, a) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || u.default.resolve(), this._allPreviousSaves = this._allPreviousSaves.catch((function(e) {})).then((function() {
                        var e, t = l.id ? "PUT" : "POST",
                            n = l._getSaveJSON(),
                            r = {};
                        if (((l._fetchWhenSave || a.fetchWhenSave) && (r.new = "true"), a._failOnNotExist && (r.failOnNotExist = "true"), a.query) && ("function" == typeof a.query._getParams && (e = a.query._getParams()) && (r.where = e.where), !r.where)) throw new Error("options.query is not an AV.Query");
                        c.extend(n, l._flags);
                        var u = "classes",
                            d = l.className;
                        "_User" !== l.className || l.id || (u = "users", d = null);
                        var p = (a._makeRequest || h)(u, d, l.id, t, n, a, r);
                        return p.then((function(e) {
                            var t = l.parse(e);
                            return a.wait && (t = c.extend(i || {}, t)), l._finishSave(t), a.wait && l.set(o, s), l
                        }), (function(e) {
                            throw l._cancelSave(), e
                        }))
                    })), this._allPreviousSaves)
                },
                destroy: function(e) {
                    e = e || {};
                    var t = this,
                        n = function() {
                            t.trigger("destroy", t, t.collection, e)
                        };
                    return this.id ? (e.wait || n(), h("classes", this.className, this.id, "DELETE", this._flags, e).then((function() {
                        return e.wait && n(), t
                    }))) : n()
                },
                parse: function(t) {
                    var n = c.clone(t);
                    return c(["createdAt", "updatedAt"]).each((function(t) {
                        n[t] && (n[t] = e._parseDate(n[t]))
                    })), n.createdAt && !n.updatedAt && (n.updatedAt = n.createdAt), n
                },
                clone: function() {
                    return new this.constructor(this.attributes)
                },
                isNew: function() {
                    return !this.id
                },
                change: function(t) {
                    t = t || {};
                    var n = this._changing;
                    this._changing = !0;
                    var r = this;
                    e._objectEach(this._silent, (function(e) {
                        r._pending[e] = !0
                    }));
                    var i = c.extend({}, t.changes, this._silent);
                    if (this._silent = {}, e._objectEach(i, (function(e, n) {
                            r.trigger("change:" + n, r, r.get(n), t)
                        })), n) return this;
                    for (var o = function(e, t) {
                            r._pending[t] || r._silent[t] || delete r.changed[t]
                        }; !c.isEmpty(this._pending);) this._pending = {}, this.trigger("change", this, t), e._objectEach(this.changed, o), r._previousAttributes = c.clone(this.attributes);
                    return this._changing = !1, this
                },
                previous: function(e) {
                    return arguments.length && this._previousAttributes ? this._previousAttributes[e] : null
                },
                previousAttributes: function() {
                    return c.clone(this._previousAttributes)
                },
                isValid: function() {
                    try {
                        this.validate(this.attributes)
                    } catch (e) {
                        return !1
                    }
                    return !0
                },
                validate: function(t) {
                    if (c.has(t, "ACL") && !(t.ACL instanceof e.ACL)) throw new l(l.OTHER_CAUSE, "ACL must be a AV.ACL.")
                },
                _validate: function(e, t) {
                    !t.silent && this.validate && (e = c.extend({}, this.attributes, e), this.validate(e))
                },
                getACL: function() {
                    return this.get("ACL")
                },
                setACL: function(e, t) {
                    return this.set("ACL", e, t)
                },
                disableBeforeHook: function() {
                    this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete")
                },
                disableAfterHook: function() {
                    this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete")
                },
                ignoreHook: function(t) {
                    if (!c.contains(["beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete"], t)) throw new Error("Unsupported hookName: " + t);
                    if (!e.hookKey) throw new Error("ignoreHook required hookKey");
                    this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), this._flags.__ignore_hooks.push(t)
                }
            }), e.Object.createWithoutData = function(t, n, r) {
                var i = void 0;
                if (c.isString(t)) i = e.Object._getSubclass(t);
                else {
                    if (!(t.prototype && t.prototype instanceof e.Object)) throw new Error("class must be a string or a subclass of AV.Object.");
                    i = t
                }
                var o = new i;
                return o.id = n, o._hasData = r, o
            }, e.Object.destroyAll = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e || 0 === e.length) return u.default.resolve();
                var n = c.groupBy(e, (function(e) {
                        return (0, a.default)({
                            className: e.className,
                            flags: e._flags
                        })
                    })),
                    r = {
                        requests: c.map(n, (function(e) {
                            var t = c.map(e, "id").join(",");
                            return {
                                method: "DELETE",
                                path: "/1.1/classes/" + e[0].className + "/" + t,
                                body: e[0]._flags
                            }
                        }))
                    };
                return h("batch", null, null, "POST", r, t).then((function(e) {
                    var t = c.find(e, (function(e) {
                        return !e.success
                    }));
                    if (t) throw new l(t.error.code, t.error.error)
                }))
            }, e.Object._getSubclass = function(t) {
                if (!c.isString(t)) throw new Error("AV.Object._getSubclass requires a string argument.");
                var n = e.Object._classMap[t];
                return n || (n = e.Object.extend(t), e.Object._classMap[t] = n), n
            }, e.Object._create = function(t, n, r) {
                return new(e.Object._getSubclass(t))(n, r)
            }, e.Object._classMap = {}, e.Object._extend = e._extend, e.Object.new = function(t, n) {
                return new e.Object(t, n)
            }, e.Object.extend = function(t, n, r) {
                if (!c.isString(t)) {
                    if (t && c.has(t, "className")) return e.Object.extend(t.className, t, n);
                    throw new Error("AV.Object.extend's first argument should be the className.")
                }
                "User" === t && (t = "_User");
                var i = null;
                if (c.has(e.Object._classMap, t)) {
                    var a = e.Object._classMap[t];
                    if (!n && !r) return a;
                    i = a._extend(n, r)
                } else(n = n || {})._className = t, i = this._extend(n, r);
                return i.extend = function(n) {
                    if (c.isString(n) || n && c.has(n, "className")) return e.Object.extend.apply(i, arguments);
                    var r = [t].concat(c.toArray(arguments));
                    return e.Object.extend.apply(i, r)
                }, Object.defineProperty(i, "query", (0, o.default)(e.Object, "query")), i.new = function(e, t) {
                    return new i(e, t)
                }, e.Object._classMap[t] = i, i
            }, Object.defineProperty(e.Object.prototype, "className", {
                get: function() {
                    var e = this._className || this.constructor._LCClassName || this.constructor.name;
                    return "User" === e ? "_User" : e
                }
            }), e.Object.register = function(t, n) {
                if (!(t.prototype instanceof e.Object)) throw new Error("registered class is not a subclass of AV.Object");
                var r = n || t.name;
                if (!r.length) throw new Error("registered class must be named");
                n && (t._LCClassName = n), e.Object._classMap[r] = t
            }, Object.defineProperty(e.Object, "query", {
                get: function() {
                    return new e.Query(this.prototype.className)
                }
            }), e.Object._findUnsavedChildren = function(t, n, r) {
                e._traverse(t, (function(t) {
                    return t instanceof e.Object ? void(t.dirty() && n.push(t)) : t instanceof e.File ? void(t.id || r.push(t)) : void 0
                }))
            }, e.Object._canBeSerializedAsValue = function(t) {
                var n = !0;
                return t instanceof e.Object || t instanceof e.File ? n = !!t.id : c.isArray(t) ? e._arrayEach(t, (function(t) {
                    e.Object._canBeSerializedAsValue(t) || (n = !1)
                })) : c.isObject(t) && e._objectEach(t, (function(t) {
                    e.Object._canBeSerializedAsValue(t) || (n = !1)
                })), n
            }, e.Object._deepSaveAsync = function(t, n, r) {
                var i = [],
                    o = [];
                e.Object._findUnsavedChildren(t, i, o);
                var a = u.default.resolve();
                c.each(o, (function(e) {
                    a = a.then((function() {
                        return e.save()
                    }))
                }));
                var s = c.uniq(i),
                    d = c.uniq(s);
                return a.then((function() {
                    return b((function() {
                        return d.length > 0
                    }), (function() {
                        var t = [],
                            n = [];
                        if (e._arrayEach(d, (function(e) {
                                t.length > 20 ? n.push(e) : e._canBeSerialized() ? t.push(e) : n.push(e)
                            })), d = n, 0 === t.length) return u.default.reject(new l(l.OTHER_CAUSE, "Tried to save a batch with a cycle."));
                        var i = u.default.resolve(c.map(t, (function(e) {
                            return e._allPreviousSaves || u.default.resolve()
                        }))).then((function() {
                            return h("batch", null, null, "POST", {
                                requests: c.map(t, (function(e) {
                                    var t = e.id ? "PUT" : "POST",
                                        n = e._getSaveJSON();
                                    c.extend(n, e._flags);
                                    var r = "/classes/" + e.className;
                                    "_User" !== e.className || e.id || (r = "/users");
                                    r = "/1.1" + r;
                                    return e.id && (r = r + "/" + e.id), e._startSave(), {
                                        method: t,
                                        path: r,
                                        body: n
                                    }
                                }))
                            }, r).then((function(e) {
                                var n = c.map(t, (function(t, n) {
                                    return e[n].success ? (t._finishSave(t.parse(e[n].success)), t) : (t._cancelSave(), new l(e[n].error.code, e[n].error.error))
                                }));
                                return k(n)
                            }))
                        }));
                        return e._arrayEach(t, (function(e) {
                            e._allPreviousSaves = i
                        })), i
                    }))
                })).then((function() {
                    return t
                }))
            }
        }
    }, function(e, t, n) {
        e.exports = {
            default: n(143),
            __esModule: !0
        }
    }, function(e, t, n) {
        n(144);
        var r = n(1).Object;
        e.exports = function(e, t) {
            return r.getOwnPropertyDescriptor(e, t)
        }
    }, function(e, t, n) {
        var r = n(15),
            i = n(73).f;
        n(47)("getOwnPropertyDescriptor", (function() {
            return function(e, t) {
                return i(r(e), t)
            }
        }))
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.__esModule = !0;
        var i = r(n(78)),
            o = r(n(148));
        t.default = function(e, t) {
            if (Array.isArray(e)) return e;
            if ((0, i.default)(Object(e))) return function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, u = (0, o.default)(e); !(r = (s = u.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return n
            }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }, function(e, t, n) {
        n(33), n(20), e.exports = n(147)
    }, function(e, t, n) {
        var r = n(44),
            i = n(4)("iterator"),
            o = n(17);
        e.exports = n(1).isIterable = function(e) {
            var t = Object(e);
            return void 0 !== t[i] || "@@iterator" in t || o.hasOwnProperty(r(t))
        }
    }, function(e, t, n) {
        e.exports = {
            default: n(149),
            __esModule: !0
        }
    }, function(e, t, n) {
        n(33), n(20), e.exports = n(150)
    }, function(e, t, n) {
        var r = n(8),
            i = n(45);
        e.exports = n(1).getIterator = function(e) {
            var t = i(e);
            if ("function" != typeof t) throw TypeError(e + " is not iterable!");
            return r(t.call(e))
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(16);
        e.exports = function(e) {
            e.Role = e.Object.extend("_Role", {
                constructor: function(t, n) {
                    if (r.isString(t) ? (e.Object.prototype.constructor.call(this, null, null), this.setName(t)) : e.Object.prototype.constructor.call(this, t, n), n) {
                        if (!(n instanceof e.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
                        this.setACL(n)
                    }
                },
                getName: function() {
                    return this.get("name")
                },
                setName: function(e, t) {
                    return this.set("name", e, t)
                },
                getUsers: function() {
                    return this.relation("users")
                },
                getRoles: function() {
                    return this.relation("roles")
                },
                validate: function(t, n) {
                    if ("name" in t && t.name !== this.getName()) {
                        var o = t.name;
                        if (this.id && this.id !== t.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
                        if (!r.isString(o)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");
                        if (!/^[0-9a-zA-Z\-_ ]+$/.test(o)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.")
                    }
                    return !!e.Object.prototype.validate && e.Object.prototype.validate.call(this, t, n)
                }
            })
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = r(n(9)),
            o = r(n(153)),
            a = r(n(2)),
            s = n(0),
            u = n(68),
            c = n(16),
            l = n(6),
            h = l._request,
            d = l.request,
            p = function() {
                if ("undefined" == typeof wx || "function" != typeof wx.login) throw new Error("wx.login is not a function（当前平台不支持一键登录）");
                return new a.default((function(e, t) {
                    wx.login({
                        success: function(n) {
                            var r = n.code,
                                i = n.errMsg;
                            r ? e(r) : t(new Error(i))
                        },
                        fail: function() {
                            return t(new Error("login 失败"))
                        }
                    })
                }))
            },
            f = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "weixin";
                return function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.preferUnionId,
                        i = n.unionIdPlatform,
                        o = void 0 === i ? e : i,
                        a = n.asMainAccount,
                        s = void 0 === a || a;
                    return r ? {
                        platform: o,
                        main_account: s,
                        code: t
                    } : {
                        code: t
                    }
                }
            },
            g = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "weixin";
                return function(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = r.unionIdPlatform,
                        o = void 0 === i ? e : i,
                        a = r.asMainAccount,
                        u = void 0 !== a && a;
                    if ("string" != typeof n) throw new c(c.OTHER_CAUSE, "unionId is not a string");
                    if ("string" != typeof o) throw new c(c.OTHER_CAUSE, "unionIdPlatform is not a string");
                    return s.extend({}, t, {
                        platform: o,
                        unionid: n,
                        main_account: Boolean(u)
                    })
                }
            };
        e.exports = function(e) {
            e.User = e.Object.extend("_User", {
                _isCurrentUser: !1,
                _mergeMagicFields: function(t) {
                    return t.sessionToken && (this._sessionToken = t.sessionToken, delete t.sessionToken), e.User.__super__._mergeMagicFields.call(this, t)
                },
                _cleanupAuthData: function() {
                    if (this.isCurrent()) {
                        var t = this.get("authData");
                        t && e._objectEach(this.get("authData"), (function(e, n) {
                            t[n] || delete t[n]
                        }))
                    }
                },
                _synchronizeAllAuthData: function() {
                    if (this.get("authData")) {
                        var t = this;
                        e._objectEach(this.get("authData"), (function(e, n) {
                            t._synchronizeAuthData(n)
                        }))
                    }
                },
                _synchronizeAuthData: function(t) {
                    if (this.isCurrent()) {
                        var n;
                        s.isString(t) ? (n = t, t = e.User._authProviders[n]) : n = t.getAuthType();
                        var r = this.get("authData");
                        r && t && (t.restoreAuthentication(r[n]) || this.dissociateAuthData(t))
                    }
                },
                _handleSaveResult: function(t) {
                    return t && !e._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), this._refreshCache(), !t && !this.isCurrent() || e._config.disableCurrentUser ? a.default.resolve() : a.default.resolve(e.User._saveCurrentUser(this))
                },
                _linkWith: function(t, n) {
                    var r, i = this,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        u = a.failOnNotExist,
                        c = void 0 !== u && u;
                    return s.isString(t) ? (r = t, t = e.User._authProviders[t]) : r = t.getAuthType(), n ? this.save({
                        authData: (0, o.default)({}, r, n)
                    }, {
                        fetchWhenSave: !!this.get("authData"),
                        _failOnNotExist: c
                    }).then((function(e) {
                        return e._handleSaveResult(!0).then((function() {
                            return e
                        }))
                    })) : t.authenticate().then((function(e) {
                        return i._linkWith(t, e)
                    }))
                },
                associateWithAuthData: function(e, t) {
                    return this._linkWith(t, e)
                },
                associateWithAuthDataAndUnionId: function(e, t, n, r) {
                    return this._linkWith(t, g()(e, n, r))
                },
                associateWithQQApp: function(e) {
                    var t = this;
                    return p().then((function(n) {
                        return t._linkWith("lc_qqapp", f("qq")(n, e))
                    }))
                },
                associateWithWeapp: function(e) {
                    var t = this;
                    return p().then((function(n) {
                        return t._linkWith("lc_weapp", f()(n, e))
                    }))
                },
                linkWithWeapp: function(e) {
                    return console.warn("DEPRECATED: User#linkWithWeapp 已废弃，请使用 User#associateWithWeapp 代替"), this.associateWithWeapp(e)
                },
                associateWithQQAppWithUnionId: function(e, t) {
                    var n = this;
                    return p().then((function(r) {
                        return n._linkWith("lc_qqapp", g("qq")({
                            code: r
                        }, e, t))
                    }))
                },
                associateWithWeappWithUnionId: function(e, t) {
                    var n = this;
                    return p().then((function(r) {
                        return n._linkWith("lc_weapp", g()({
                            code: r
                        }, e, t))
                    }))
                },
                dissociateAuthData: function(e) {
                    return this.unset("authData." + e), this.save().then((function(e) {
                        return e._handleSaveResult(!0).then((function() {
                            return e
                        }))
                    }))
                },
                _unlinkFrom: function(e) {
                    return console.warn("DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替"), this.dissociateAuthData(e)
                },
                _isLinked: function(e) {
                    var t;
                    return t = s.isString(e) ? e : e.getAuthType(), !!(this.get("authData") || {})[t]
                },
                isAnonymous: function() {
                    return this._isLinked("anonymous")
                },
                logOut: function() {
                    this._logOutWithAll(), this._isCurrentUser = !1
                },
                _logOutWithAll: function() {
                    if (this.get("authData")) {
                        var t = this;
                        e._objectEach(this.get("authData"), (function(e, n) {
                            t._logOutWith(n)
                        }))
                    }
                },
                _logOutWith: function(t) {
                    this.isCurrent() && (s.isString(t) && (t = e.User._authProviders[t]), t && t.deauthenticate && t.deauthenticate())
                },
                signUp: function(e, t) {
                    var n = e && e.username || this.get("username");
                    if (!n || "" === n) throw new c(c.OTHER_CAUSE, "Cannot sign up user with an empty name.");
                    var r = e && e.password || this.get("password");
                    if (!r || "" === r) throw new c(c.OTHER_CAUSE, "Cannot sign up user with an empty password.");
                    return this.save(e, t).then((function(e) {
                        return e.isAnonymous() && (e.unset("authData.anonymous"), e._opSetQueue = [{}]), e._handleSaveResult(!0).then((function() {
                            return e
                        }))
                    }))
                },
                signUpOrlogInWithMobilePhone: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = e && e.mobilePhoneNumber || this.get("mobilePhoneNumber");
                    if (!n || "" === n) throw new c(c.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
                    var r = e && e.smsCode || this.get("smsCode");
                    if (!r || "" === r) throw new c(c.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
                    return t._makeRequest = function(e, t, n, r, i) {
                        return h("usersByMobilePhone", null, null, "POST", i)
                    }, this.save(e, t).then((function(e) {
                        return delete e.attributes.smsCode, delete e._serverData.smsCode, e._handleSaveResult(!0).then((function() {
                            return e
                        }))
                    }))
                },
                loginWithAuthData: function(e, t, n) {
                    return this._linkWith(t, e, n)
                },
                loginWithAuthDataAndUnionId: function(e, t, n, r) {
                    return this.loginWithAuthData(g()(e, n, r), t, r)
                },
                loginWithWeapp: function(e) {
                    var t = this;
                    return p().then((function(n) {
                        return t.loginWithAuthData(f()(n, e), "lc_weapp", e)
                    }))
                },
                loginWithWeappWithUnionId: function(e, t) {
                    var n = this;
                    return p().then((function(r) {
                        return n.loginWithAuthData(g()({
                            code: r
                        }, e, t), "lc_weapp", t)
                    }))
                },
                loginWithQQApp: function(e) {
                    var t = this;
                    return p().then((function(n) {
                        return t.loginWithAuthData(f("qq")(n, e), "lc_weapp", e)
                    }))
                },
                loginWithQQAppWithUnionId: function(e, t) {
                    var n = this;
                    return p().then((function(r) {
                        return n.loginWithAuthData(g("qq")({
                            code: r
                        }, e, t), "lc_weapp", t)
                    }))
                },
                logIn: function() {
                    var e = this;
                    return h("login", null, null, "POST", this.toJSON()).then((function(t) {
                        var n = e.parse(t);
                        return e._finishFetch(n), e._handleSaveResult(!0).then((function() {
                            return n.smsCode || delete e.attributes.smsCode, e
                        }))
                    }))
                },
                save: function(t, n, r) {
                    var i, o;
                    return s.isObject(t) || s.isNull(t) || s.isUndefined(t) ? (i = t, o = n) : ((i = {})[t] = n, o = r), o = o || {}, e.Object.prototype.save.call(this, i, o).then((function(e) {
                        return e._handleSaveResult(!1).then((function() {
                            return e
                        }))
                    }))
                },
                follow: function(t, n) {
                    if (!this.id) throw new Error("Please signin.");
                    var r = void 0,
                        i = void 0;
                    t.user ? (r = t.user, i = t.attributes) : r = t;
                    var o = s.isString(r) ? r : r.id;
                    if (!o) throw new Error("Invalid target user.");
                    var a = "users/" + this.id + "/friendship/" + o;
                    return h(a, null, null, "POST", e._encode(i), n)
                },
                unfollow: function(e, t) {
                    if (!this.id) throw new Error("Please signin.");
                    var n;
                    n = e.user ? e.user : e;
                    var r = s.isString(n) ? n : n.id;
                    if (!r) throw new Error("Invalid target user.");
                    var i = "users/" + this.id + "/friendship/" + r;
                    return h(i, null, null, "DELETE", null, t)
                },
                followerQuery: function() {
                    return e.User.followerQuery(this.id)
                },
                followeeQuery: function() {
                    return e.User.followeeQuery(this.id)
                },
                fetch: function(t, n) {
                    return e.Object.prototype.fetch.call(this, t, n).then((function(e) {
                        return e._handleSaveResult(!1).then((function() {
                            return e
                        }))
                    }))
                },
                updatePassword: function(e, t, n) {
                    var r = "users/" + this.id + "/updatePassword";
                    return h(r, null, null, "PUT", {
                        old_password: e,
                        new_password: t
                    }, n)
                },
                isCurrent: function() {
                    return this._isCurrentUser
                },
                getUsername: function() {
                    return this.get("username")
                },
                getMobilePhoneNumber: function() {
                    return this.get("mobilePhoneNumber")
                },
                setMobilePhoneNumber: function(e, t) {
                    return this.set("mobilePhoneNumber", e, t)
                },
                setUsername: function(e, t) {
                    return this.set("username", e, t)
                },
                setPassword: function(e, t) {
                    return this.set("password", e, t)
                },
                getEmail: function() {
                    return this.get("email")
                },
                setEmail: function(e, t) {
                    return this.set("email", e, t)
                },
                authenticated: function() {
                    return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"), !!this._sessionToken && !e._config.disableCurrentUser && e.User.current() && e.User.current().id === this.id
                },
                isAuthenticated: function() {
                    var t = this;
                    return a.default.resolve().then((function() {
                        return !!t._sessionToken && e.User._fetchUserBySessionToken(t._sessionToken).then((function() {
                            return !0
                        }), (function(e) {
                            if (211 === e.code) return !1;
                            throw e
                        }))
                    }))
                },
                getSessionToken: function() {
                    return this._sessionToken
                },
                refreshSessionToken: function(e) {
                    var t = this;
                    return h("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, e).then((function(e) {
                        return t._finishFetch(e), t._handleSaveResult(!0).then((function() {
                            return t
                        }))
                    }))
                },
                getRoles: function(t) {
                    return e.Relation.reverseQuery("_Role", "users", this).find(t)
                }
            }, {
                _currentUser: null,
                _currentUserMatchesDisk: !1,
                _CURRENT_USER_KEY: "currentUser",
                _authProviders: {},
                signUp: function(t, n, r, i) {
                    return (r = r || {}).username = t, r.password = n, e.Object._create("_User").signUp(r, i)
                },
                logIn: function(t, n) {
                    var r = e.Object._create("_User");
                    return r._finishFetch({
                        username: t,
                        password: n
                    }), r.logIn()
                },
                become: function(e) {
                    return this._fetchUserBySessionToken(e).then((function(e) {
                        return e._handleSaveResult(!0).then((function() {
                            return e
                        }))
                    }))
                },
                _fetchUserBySessionToken: function(t) {
                    var n = e.Object._create("_User");
                    return d({
                        method: "GET",
                        path: "/users/me",
                        authOptions: {
                            sessionToken: t
                        }
                    }).then((function(e) {
                        var t = n.parse(e);
                        return n._finishFetch(t), n
                    }))
                },
                logInWithMobilePhoneSmsCode: function(t, n) {
                    var r = e.Object._create("_User");
                    return r._finishFetch({
                        mobilePhoneNumber: t,
                        smsCode: n
                    }), r.logIn()
                },
                signUpOrlogInWithMobilePhone: function(t, n, r, i) {
                    return (r = r || {}).mobilePhoneNumber = t, r.smsCode = n, e.Object._create("_User").signUpOrlogInWithMobilePhone(r, i)
                },
                logInWithMobilePhone: function(t, n) {
                    var r = e.Object._create("_User");
                    return r._finishFetch({
                        mobilePhoneNumber: t,
                        password: n
                    }), r.logIn()
                },
                loginWithEmail: function(t, n) {
                    var r = e.Object._create("_User");
                    return r._finishFetch({
                        email: t,
                        password: n
                    }), r.logIn()
                },
                loginWithAuthData: function(t, n, r) {
                    return e.User._logInWith(n, t, r)
                },
                signUpOrlogInWithAuthData: function() {
                    return console.warn("DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替"), this.loginWithAuthData.apply(this, arguments)
                },
                loginWithAuthDataAndUnionId: function(e, t, n, r) {
                    return this.loginWithAuthData(g()(e, n, r), t, r)
                },
                signUpOrlogInWithAuthDataAndUnionId: function() {
                    return console.warn("DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替"), this.loginWithAuthDataAndUnionId.apply(this, arguments)
                },
                loginWithWeapp: function(e) {
                    var t = this;
                    return p().then((function(n) {
                        return t.loginWithAuthData(f()(n, e), "lc_weapp", e)
                    }))
                },
                loginWithWeappWithUnionId: function(e, t) {
                    var n = this;
                    return p().then((function(r) {
                        return n.loginWithAuthData(g()({
                            code: r
                        }, e, t), "lc_weapp", t)
                    }))
                },
                loginWithQQApp: function(e) {
                    var t = this;
                    return p().then((function(n) {
                        return t.loginWithAuthData(f("qq")(n, e), "lc_qqapp", e)
                    }))
                },
                loginWithQQAppWithUnionId: function(e, t) {
                    var n = this;
                    return p().then((function(r) {
                        return n.loginWithAuthData(g("qq")({
                            code: r
                        }, e, t), "lc_qqapp", t)
                    }))
                },
                _genId: function() {
                    return u()
                },
                loginAnonymously: function() {
                    return this.loginWithAuthData({
                        id: e.User._genId()
                    }, "anonymous")
                },
                associateWithAuthData: function(e, t, n) {
                    return console.warn("DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替"), e._linkWith(t, n)
                },
                logOut: function() {
                    return e._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), a.default.resolve(null)) : (null !== e.User._currentUser && (e.User._currentUser._logOutWithAll(), e.User._currentUser._isCurrentUser = !1), e.User._currentUserMatchesDisk = !0, e.User._currentUser = null, e.localStorage.removeItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then((function() {
                        return e._refreshSubscriptionId()
                    })))
                },
                followerQuery: function(t) {
                    if (!t || !s.isString(t)) throw new Error("Invalid user object id.");
                    var n = new e.FriendShipQuery("_Follower");
                    return n._friendshipTag = "follower", n.equalTo("user", e.Object.createWithoutData("_User", t)), n
                },
                followeeQuery: function(t) {
                    if (!t || !s.isString(t)) throw new Error("Invalid user object id.");
                    var n = new e.FriendShipQuery("_Followee");
                    return n._friendshipTag = "followee", n.equalTo("user", e.Object.createWithoutData("_User", t)), n
                },
                requestPasswordReset: function(e) {
                    return h("requestPasswordReset", null, null, "POST", {
                        email: e
                    })
                },
                requestEmailVerify: function(e) {
                    return h("requestEmailVerify", null, null, "POST", {
                        email: e
                    })
                },
                requestMobilePhoneVerify: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = {
                            mobilePhoneNumber: e
                        };
                    return t.validateToken && (n.validate_token = t.validateToken), h("requestMobilePhoneVerify", null, null, "POST", n, t)
                },
                requestPasswordResetBySmsCode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = {
                            mobilePhoneNumber: e
                        };
                    return t.validateToken && (n.validate_token = t.validateToken), h("requestPasswordResetBySmsCode", null, null, "POST", n, t)
                },
                resetPasswordBySmsCode: function(e, t) {
                    return h("resetPasswordBySmsCode", null, e, "PUT", {
                        password: t
                    })
                },
                verifyMobilePhone: function(e) {
                    return h("verifyMobilePhone", null, e, "POST", null)
                },
                requestLoginSmsCode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = {
                            mobilePhoneNumber: e
                        };
                    return t.validateToken && (n.validate_token = t.validateToken), h("requestLoginSmsCode", null, null, "POST", n, t)
                },
                currentAsync: function() {
                    return e._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), a.default.resolve(null)) : e.User._currentUser || e.User._currentUserMatchesDisk ? a.default.resolve(e.User._currentUser) : e.localStorage.getItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then((function(t) {
                        if (!t) return null;
                        e.User._currentUserMatchesDisk = !0, e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
                        var n = JSON.parse(t);
                        return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser
                    }))
                },
                current: function() {
                    if (e._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), null;
                    if (e.localStorage.async) {
                        var t = new Error("Synchronous API User.current() is not available in this runtime. Use User.currentAsync() instead.");
                        throw t.code = "SYNC_API_NOT_AVAILABLE", t
                    }
                    if (e.User._currentUser) return e.User._currentUser;
                    if (e.User._currentUserMatchesDisk) return e.User._currentUser;
                    e.User._currentUserMatchesDisk = !0;
                    var n = e.localStorage.getItem(e._getAVPath(e.User._CURRENT_USER_KEY));
                    if (!n) return null;
                    e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
                    var r = JSON.parse(n);
                    return e.User._currentUser.id = r._id, delete r._id, e.User._currentUser._sessionToken = r._sessionToken, delete r._sessionToken, e.User._currentUser._finishFetch(r), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser
                },
                _saveCurrentUser: function(t) {
                    return (e.User._currentUser !== t ? e.User.logOut() : a.default.resolve()).then((function() {
                        t._isCurrentUser = !0, e.User._currentUser = t;
                        var n = t._toFullJSON();
                        return n._id = t.id, n._sessionToken = t._sessionToken, e.localStorage.setItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY), (0, i.default)(n)).then((function() {
                            return e.User._currentUserMatchesDisk = !0, e._refreshSubscriptionId()
                        }))
                    }))
                },
                _registerAuthenticationProvider: function(t) {
                    e.User._authProviders[t.getAuthType()] = t, !e._config.disableCurrentUser && e.User.current() && e.User.current()._synchronizeAuthData(t.getAuthType())
                },
                _logInWith: function(t, n, r) {
                    return e.Object._create("_User")._linkWith(t, n, r)
                }
            })
        }
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(n(76));
        t.default = function(e, t, n) {
            return t in e ? (0, r.default)(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = r(n(9)),
            o = r(n(2)),
            a = n(0),
            s = n(19)("leancloud:query"),
            u = n(16),
            c = n(6),
            l = c._request,
            h = c.request,
            d = n(5),
            p = d.ensureArray,
            f = d.transformFetchOptions,
            g = d.continueWhile,
            m = function(e, t) {
                if (void 0 === e) throw new Error(t)
            };
        e.exports = function(e) {
            e.Query = function(t) {
                a.isString(t) && (t = e.Object._getSubclass(t)), this.objectClass = t, this.className = t.prototype.className, this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, this._defaultParams = {}
            }, e.Query.or = function() {
                var t = a.toArray(arguments),
                    n = null;
                e._arrayEach(t, (function(e) {
                    if (a.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class")
                }));
                var r = new e.Query(n);
                return r._orQuery(t), r
            }, e.Query.and = function() {
                var t = a.toArray(arguments),
                    n = null;
                e._arrayEach(t, (function(e) {
                    if (a.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class")
                }));
                var r = new e.Query(n);
                return r._andQuery(t), r
            }, e.Query.doCloudQuery = function(t, n, r) {
                var i = {
                    cql: t
                };
                return a.isArray(n) ? i.pvalues = n : r = n, l("cloudQuery", null, null, "GET", i, r).then((function(t) {
                    var n = new e.Query(t.className);
                    return {
                        results: a.map(t.results, (function(e) {
                            var r = n._newObject(t);
                            return r._finishFetch && r._finishFetch(n._processResult(e), !0), r
                        })),
                        count: t.count,
                        className: t.className
                    }
                }))
            }, e.Query.fromJSON = function(t) {
                var n = t.className,
                    r = t.where,
                    i = t.include,
                    o = t.select,
                    s = t.includeACL,
                    u = t.limit,
                    c = t.skip,
                    l = t.order;
                if ("string" != typeof n) throw new TypeError("Invalid Query JSON, className must be a String.");
                var h = new e.Query(n);
                return a.extend(h, {
                    _where: r,
                    _include: i,
                    _select: o,
                    _includeACL: s,
                    _limit: u,
                    _skip: c,
                    _order: l
                }), h
            }, e.Query._extend = e._extend, a.extend(e.Query.prototype, {
                _processResult: function(e) {
                    return e
                },
                get: function(e, t) {
                    if (!a.isString(e)) throw new Error("objectId must be a string");
                    if ("" === e) return o.default.reject(new u(u.OBJECT_NOT_FOUND, "Object not found."));
                    var n = this._newObject();
                    n.id = e;
                    var r = this._getParams(),
                        i = {};
                    return r.keys && (i.keys = r.keys), r.include && (i.include = r.include), r.includeACL && (i.includeACL = r.includeACL), l("classes", this.className, e, "GET", f(i), t).then((function(e) {
                        if (a.isEmpty(e)) throw new u(u.OBJECT_NOT_FOUND, "Object not found.");
                        return n._finishFetch(n.parse(e), !0), n
                    }))
                },
                toJSON: function() {
                    return {
                        className: this.className,
                        where: this._where,
                        include: this._include,
                        select: this._select,
                        includeACL: this._includeACL,
                        limit: this._limit,
                        skip: this._skip,
                        order: this._order
                    }
                },
                _getParams: function() {
                    var e = a.extend({}, this._defaultParams, {
                        where: this._where
                    });
                    return this._include.length > 0 && (e.include = this._include.join(",")), this._select.length > 0 && (e.keys = this._select.join(",")), void 0 !== this._includeACL && (e.returnACL = this._includeACL), this._limit >= 0 && (e.limit = this._limit), this._skip > 0 && (e.skip = this._skip), void 0 !== this._order && (e.order = this._order), e
                },
                _newObject: function(t) {
                    return t && t.className ? new e.Object(t.className) : new this.objectClass
                },
                _createRequest: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getParams(),
                        t = arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/classes/" + this.className;
                    return encodeURIComponent((0, i.default)(e)).length > 2e3 ? h({
                        path: "/batch",
                        method: "POST",
                        data: {
                            requests: [{
                                method: "GET",
                                path: "/1.1" + n,
                                params: e
                            }]
                        },
                        authOptions: t
                    }).then((function(e) {
                        var t = e[0];
                        if (t.success) return t.success;
                        var n = new Error(t.error.error || "Unknown batch error");
                        throw n.code = t.error.code, n
                    })) : h({
                        method: "GET",
                        path: n,
                        query: e,
                        authOptions: t
                    })
                },
                _parseResponse: function(e) {
                    var t = this;
                    return a.map(e.results, (function(n) {
                        var r = t._newObject(e);
                        return r._finishFetch && r._finishFetch(t._processResult(n), !0), r
                    }))
                },
                find: function(e) {
                    return this._createRequest(void 0, e).then(this._parseResponse.bind(this))
                },
                scan: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = t.orderedBy,
                        r = t.batchSize,
                        i = arguments[1],
                        u = this._getParams();
                    s("scan %O", u), u.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), delete u.order), u.skip && (console.warn("The skip option of the query is ignored for Query#scan."), delete u.skip), u.limit && (console.warn("The limit option of the query is ignored for Query#scan."), delete u.limit), n && (u.scan_key = n), r && (u.limit = r);
                    var c = o.default.resolve([]),
                        h = void 0,
                        d = !1;
                    return {
                        next: function() {
                            return (c = c.then((function(t) {
                                return d ? [] : t.length > 1 ? t : h || 0 === t.length ? l("scan/classes", e.className, null, "GET", h ? a.extend({}, u, {
                                    cursor: h
                                }) : u, i).then((function(t) {
                                    return h = t.cursor, e._parseResponse(t)
                                })).then((function(e) {
                                    return e.length || (d = !0), t.concat(e)
                                })) : (d = !0, t)
                            }))).then((function(e) {
                                return e.shift()
                            })).then((function(e) {
                                return {
                                    value: e,
                                    done: d
                                }
                            }))
                        }
                    }
                },
                destroyAll: function(t) {
                    return this.find(t).then((function(n) {
                        return e.Object.destroyAll(n, t)
                    }))
                },
                count: function(e) {
                    var t = this._getParams();
                    return t.limit = 0, t.count = 1, this._createRequest(t, e).then((function(e) {
                        return e.count
                    }))
                },
                first: function(e) {
                    var t = this,
                        n = this._getParams();
                    return n.limit = 1, this._createRequest(n, e).then((function(e) {
                        return a.map(e.results, (function(e) {
                            var n = t._newObject();
                            return n._finishFetch && n._finishFetch(t._processResult(e), !0), n
                        }))[0]
                    }))
                },
                skip: function(e) {
                    return m(e, "undefined is not a valid skip value"), this._skip = e, this
                },
                limit: function(e) {
                    return m(e, "undefined is not a valid limit value"), this._limit = e, this
                },
                equalTo: function(t, n) {
                    return m(t, "undefined is not a valid key"), m(n, "undefined is not a valid value"), this._where[t] = e._encode(n), this
                },
                _addCondition: function(t, n, r) {
                    return m(t, "undefined is not a valid condition key"), m(n, "undefined is not a valid condition"), m(r, "undefined is not a valid condition value"), this._where[t] || (this._where[t] = {}), this._where[t][n] = e._encode(r), this
                },
                sizeEqualTo: function(e, t) {
                    return this._addCondition(e, "$size", t), this
                },
                notEqualTo: function(e, t) {
                    return this._addCondition(e, "$ne", t), this
                },
                lessThan: function(e, t) {
                    return this._addCondition(e, "$lt", t), this
                },
                greaterThan: function(e, t) {
                    return this._addCondition(e, "$gt", t), this
                },
                lessThanOrEqualTo: function(e, t) {
                    return this._addCondition(e, "$lte", t), this
                },
                greaterThanOrEqualTo: function(e, t) {
                    return this._addCondition(e, "$gte", t), this
                },
                containedIn: function(e, t) {
                    return this._addCondition(e, "$in", t), this
                },
                notContainedIn: function(e, t) {
                    return this._addCondition(e, "$nin", t), this
                },
                containsAll: function(e, t) {
                    return this._addCondition(e, "$all", t), this
                },
                exists: function(e) {
                    return this._addCondition(e, "$exists", !0), this
                },
                doesNotExist: function(e) {
                    return this._addCondition(e, "$exists", !1), this
                },
                matches: function(e, t, n) {
                    return this._addCondition(e, "$regex", t), n || (n = ""), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), n && n.length && this._addCondition(e, "$options", n), this
                },
                matchesQuery: function(e, t) {
                    var n = t._getParams();
                    return n.className = t.className, this._addCondition(e, "$inQuery", n), this
                },
                doesNotMatchQuery: function(e, t) {
                    var n = t._getParams();
                    return n.className = t.className, this._addCondition(e, "$notInQuery", n), this
                },
                matchesKeyInQuery: function(e, t, n) {
                    var r = n._getParams();
                    return r.className = n.className, this._addCondition(e, "$select", {
                        key: t,
                        query: r
                    }), this
                },
                doesNotMatchKeyInQuery: function(e, t, n) {
                    var r = n._getParams();
                    return r.className = n.className, this._addCondition(e, "$dontSelect", {
                        key: t,
                        query: r
                    }), this
                },
                _orQuery: function(e) {
                    var t = a.map(e, (function(e) {
                        return e._getParams().where
                    }));
                    return this._where.$or = t, this
                },
                _andQuery: function(e) {
                    var t = a.map(e, (function(e) {
                        return e._getParams().where
                    }));
                    return this._where.$and = t, this
                },
                _quote: function(e) {
                    return "\\Q" + e.replace("\\E", "\\E\\\\E\\Q") + "\\E"
                },
                contains: function(e, t) {
                    return this._addCondition(e, "$regex", this._quote(t)), this
                },
                startsWith: function(e, t) {
                    return this._addCondition(e, "$regex", "^" + this._quote(t)), this
                },
                endsWith: function(e, t) {
                    return this._addCondition(e, "$regex", this._quote(t) + "$"), this
                },
                ascending: function(e) {
                    return m(e, "undefined is not a valid key"), this._order = e, this
                },
                addAscending: function(e) {
                    return m(e, "undefined is not a valid key"), this._order ? this._order += "," + e : this._order = e, this
                },
                descending: function(e) {
                    return m(e, "undefined is not a valid key"), this._order = "-" + e, this
                },
                addDescending: function(e) {
                    return m(e, "undefined is not a valid key"), this._order ? this._order += ",-" + e : this._order = "-" + e, this
                },
                near: function(t, n) {
                    return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), this._addCondition(t, "$nearSphere", n), this
                },
                withinRadians: function(e, t, n) {
                    return this.near(e, t), this._addCondition(e, "$maxDistance", n), this
                },
                withinMiles: function(e, t, n) {
                    return this.withinRadians(e, t, n / 3958.8)
                },
                withinKilometers: function(e, t, n) {
                    return this.withinRadians(e, t, n / 6371)
                },
                withinGeoBox: function(t, n, r) {
                    return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), r instanceof e.GeoPoint || (r = new e.GeoPoint(r)), this._addCondition(t, "$within", {
                        $box: [n, r]
                    }), this
                },
                include: function(e) {
                    var t = this;
                    return m(e, "undefined is not a valid key"), a.forEach(arguments, (function(e) {
                        t._include = t._include.concat(p(e))
                    })), this
                },
                includeACL: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return this._includeACL = e, this
                },
                select: function(e) {
                    var t = this;
                    return m(e, "undefined is not a valid key"), a.forEach(arguments, (function(e) {
                        t._select = t._select.concat(p(e))
                    })), this
                },
                each: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this._order || this._skip || this._limit >= 0) {
                        var r = new Error("Cannot iterate on a query with sort, skip, or limit.");
                        return o.default.reject(r)
                    }
                    var i = new e.Query(this.objectClass);
                    i._limit = n.batchSize || 100, i._where = a.clone(this._where), i._include = a.clone(this._include), i.ascending("objectId");
                    var s = !1;
                    return g((function() {
                        return !s
                    }), (function() {
                        return i.find(n).then((function(e) {
                            var n = o.default.resolve();
                            return a.each(e, (function(e) {
                                n = n.then((function() {
                                    return t(e)
                                }))
                            })), n.then((function() {
                                e.length >= i._limit ? i.greaterThan("objectId", e[e.length - 1].id) : s = !0
                            }))
                        }))
                    }))
                },
                subscribe: function(t) {
                    return e.LiveQuery.init(this, t)
                }
            }), e.FriendShipQuery = e.Query._extend({
                _newObject: function() {
                    return new(e.Object._getSubclass("_User"))
                },
                _processResult: function(e) {
                    if (e && e[this._friendshipTag]) {
                        var t = e[this._friendshipTag];
                        return "Pointer" === t.__type && "_User" === t.className && (delete t.__type, delete t.className), t
                    }
                    return null
                }
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(2)),
            i = n(0),
            o = n(156),
            a = n(5).inherits,
            s = n(6).request,
            u = function(e, t) {
                return s({
                    method: "POST",
                    path: "/LiveQuery/subscribe",
                    data: {
                        query: e,
                        id: t
                    }
                })
            };
        e.exports = function(e) {
            var t = function() {
                if (!e._config.realtime) throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query")
            };
            e.LiveQuery = a(o, {
                constructor: function(e, t, n, r) {
                    var i = this;
                    o.apply(this), this.id = e, this._client = t, this._client.register(this), this._queryJSON = n, this._subscriptionId = r, this._onMessage = this._dispatch.bind(this), this._onReconnect = function() {
                        u(i._queryJSON, i._subscriptionId).catch((function(e) {
                            return console.error("LiveQuery resubscribe error: " + e.message)
                        }))
                    }, t.on("message", this._onMessage), t.on("reconnect", this._onReconnect)
                },
                _dispatch: function(t) {
                    var n = this;
                    t.forEach((function(t) {
                        var r = t.op,
                            o = t.object,
                            a = t.query_id,
                            s = t.updatedKeys;
                        if (a === n.id) {
                            var u = e.parseJSON(i.extend({
                                __type: "_File" === o.className ? "File" : "Object"
                            }, o));
                            s ? n.emit(r, u, s) : n.emit(r, u)
                        }
                    }))
                },
                unsubscribe: function() {
                    var e = this._client;
                    return e.off("message", this._onMessage), e.off("reconnect", this._onReconnect), e.deregister(this), s({
                        method: "POST",
                        path: "/LiveQuery/unsubscribe",
                        data: {
                            id: e.id,
                            query_id: this.id
                        }
                    })
                }
            }, {
                init: function(n) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = i.subscriptionId,
                        a = void 0 === o ? e._getSubscriptionId() : o;
                    if (t(), !(n instanceof e.Query)) throw new TypeError("LiveQuery must be inited with a Query");
                    return r.default.resolve(a).then((function(t) {
                        return e._config.realtime.createLiveQueryClient(t).then((function(r) {
                            var i = n._getParams(),
                                o = {
                                    where: i.where,
                                    keys: i.keys,
                                    returnACL: i.returnACL,
                                    className: n.className
                                },
                                a = u(o, t).then((function(n) {
                                    var i = n.query_id;
                                    return new e.LiveQuery(i, r, o, t)
                                })).finally((function() {
                                    r.deregister(a)
                                }));
                            return r.register(a), a
                        }))
                    }))
                },
                pause: function() {
                    return t(), e._config.realtime.pause()
                },
                resume: function() {
                    return t(), e._config.realtime.resume()
                }
            })
        }
    }, function(e, t, n) {
        "use strict";

        function r() {}

        function i(e, t, n) {
            this.fn = e, this.context = t, this.once = n || !1
        }

        function o() {
            this._events = new r, this._eventsCount = 0
        }
        var a = Object.prototype.hasOwnProperty,
            s = "~";
        Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (s = !1)), o.prototype.eventNames = function() {
            var e, t, n = [];
            if (0 === this._eventsCount) return n;
            for (t in e = this._events) a.call(e, t) && n.push(s ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n
        }, o.prototype.listeners = function(e, t) {
            var n = s ? s + e : e,
                r = this._events[n];
            if (t) return !!r;
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var i = 0, o = r.length, a = new Array(o); i < o; i++) a[i] = r[i].fn;
            return a
        }, o.prototype.emit = function(e, t, n, r, i, o) {
            var a = s ? s + e : e;
            if (!this._events[a]) return !1;
            var u, c, l = this._events[a],
                h = arguments.length;
            if (l.fn) {
                switch (l.once && this.removeListener(e, l.fn, void 0, !0), h) {
                    case 1:
                        return l.fn.call(l.context), !0;
                    case 2:
                        return l.fn.call(l.context, t), !0;
                    case 3:
                        return l.fn.call(l.context, t, n), !0;
                    case 4:
                        return l.fn.call(l.context, t, n, r), !0;
                    case 5:
                        return l.fn.call(l.context, t, n, r, i), !0;
                    case 6:
                        return l.fn.call(l.context, t, n, r, i, o), !0
                }
                for (c = 1, u = new Array(h - 1); c < h; c++) u[c - 1] = arguments[c];
                l.fn.apply(l.context, u)
            } else {
                var d, p = l.length;
                for (c = 0; c < p; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), h) {
                    case 1:
                        l[c].fn.call(l[c].context);
                        break;
                    case 2:
                        l[c].fn.call(l[c].context, t);
                        break;
                    case 3:
                        l[c].fn.call(l[c].context, t, n);
                        break;
                    case 4:
                        l[c].fn.call(l[c].context, t, n, r);
                        break;
                    default:
                        if (!u)
                            for (d = 1, u = new Array(h - 1); d < h; d++) u[d - 1] = arguments[d];
                        l[c].fn.apply(l[c].context, u)
                }
            }
            return !0
        }, o.prototype.on = function(e, t, n) {
            var r = new i(t, n || this),
                o = s ? s + e : e;
            return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this
        }, o.prototype.once = function(e, t, n) {
            var r = new i(t, n || this, !0),
                o = s ? s + e : e;
            return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this
        }, o.prototype.removeListener = function(e, t, n, i) {
            var o = s ? s + e : e;
            if (!this._events[o]) return this;
            if (!t) return 0 == --this._eventsCount ? this._events = new r : delete this._events[o], this;
            var a = this._events[o];
            if (a.fn) a.fn !== t || i && !a.once || n && a.context !== n || (0 == --this._eventsCount ? this._events = new r : delete this._events[o]);
            else {
                for (var u = 0, c = [], l = a.length; u < l; u++)(a[u].fn !== t || i && !a[u].once || n && a[u].context !== n) && c.push(a[u]);
                c.length ? this._events[o] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new r : delete this._events[o]
            }
            return this
        }, o.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = s ? s + e : e, this._events[t] && (0 == --this._eventsCount ? this._events = new r : delete this._events[t])) : (this._events = new r, this._eventsCount = 0), this
        }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function() {
            return this
        }, o.prefixed = s, o.EventEmitter = o, e.exports = o
    }, function(e, t, n) {
        "use strict";
        var r = n(0),
            i = n(5).tap;
        e.exports = function(e) {
            e.Captcha = function(e, t) {
                this._options = e, this._authOptions = t, this.url = void 0, this.captchaToken = void 0, this.validateToken = void 0
            }, e.Captcha.prototype.refresh = function() {
                var t = this;
                return e.Cloud._requestCaptcha(this._options, this._authOptions).then((function(e) {
                    var n = e.captchaToken,
                        i = e.url;
                    return r.extend(t, {
                        captchaToken: n,
                        url: i
                    }), i
                }))
            }, e.Captcha.prototype.verify = function(t) {
                var n = this;
                return e.Cloud.verifyCaptcha(t, this.captchaToken).then(i((function(e) {
                    return n.validateToken = e
                })))
            }, e.Captcha.prototype.bind = function(e, t) {
                var n = this,
                    r = e.textInput,
                    i = e.image,
                    o = e.verifyButton,
                    a = t.success,
                    s = t.error;
                if ("string" == typeof r && !(r = document.getElementById(r))) throw new Error("textInput with id " + r + " not found");
                if ("string" == typeof i && !(i = document.getElementById(i))) throw new Error("image with id " + i + " not found");
                if ("string" == typeof o && !(o = document.getElementById(o))) throw new Error("verifyButton with id " + o + " not found");
                this.__refresh = function() {
                    return n.refresh().then((function(e) {
                        i.src = e, r && (r.value = "", r.focus())
                    })).catch((function(e) {
                        return console.warn("refresh captcha fail: " + e.message)
                    }))
                }, i && (this.__image = i, i.src = this.url, i.addEventListener("click", this.__refresh)), this.__verify = function() {
                    var e = r.value;
                    n.verify(e).catch((function(e) {
                        throw n.__refresh(), e
                    })).then(a, s).catch((function(e) {
                        return console.warn("verify captcha fail: " + e.message)
                    }))
                }, r && o && (this.__verifyButton = o, o.addEventListener("click", this.__verify))
            }, e.Captcha.prototype.unbind = function() {
                this.__image && this.__image.removeEventListener("click", this.__refresh), this.__verifyButton && this.__verifyButton.removeEventListener("click", this.__verify)
            }, e.Captcha.request = function(t, n) {
                var r = new e.Captcha(t, n);
                return r.refresh().then((function() {
                    return r
                }))
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(2)),
            i = n(0),
            o = n(6),
            a = o._request,
            s = o.request;
        e.exports = function(e) {
            e.Cloud = e.Cloud || {}, i.extend(e.Cloud, {
                run: function(t, n, r) {
                    return s({
                        service: "engine",
                        method: "POST",
                        path: "/functions/" + t,
                        data: e._encode(n, null, !0),
                        authOptions: r
                    }).then((function(t) {
                        return e._decode(t).result
                    }))
                },
                rpc: function(t, n, o) {
                    return i.isArray(n) ? r.default.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : s({
                        service: "engine",
                        method: "POST",
                        path: "/call/" + t,
                        data: e._encodeObjectOrArray(n),
                        authOptions: o
                    }).then((function(t) {
                        return e._decode(t).result
                    }))
                },
                getServerDate: function() {
                    return a("date", null, null, "GET").then((function(t) {
                        return e._decode(t)
                    }))
                },
                requestSmsCode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (i.isString(e) && (e = {
                            mobilePhoneNumber: e
                        }), !e.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber.");
                    return t.validateToken && (e = i.extend({}, e, {
                        validate_token: t.validateToken
                    })), a("requestSmsCode", null, null, "POST", e, t)
                },
                verifySmsCode: function(e, t) {
                    if (!e) throw new Error("Missing sms code.");
                    var n = {};
                    return i.isString(t) && (n.mobilePhoneNumber = t), a("verifySmsCode", e, null, "POST", n)
                },
                _requestCaptcha: function(e, t) {
                    return a("requestCaptcha", null, null, "GET", e, t).then((function(e) {
                        var t = e.captcha_url;
                        return {
                            captchaToken: e.captcha_token,
                            url: t
                        }
                    }))
                },
                requestCaptcha: e.Captcha.request,
                verifyCaptcha: function(e, t) {
                    return a("verifyCaptcha", null, null, "POST", {
                        captcha_code: e,
                        captcha_token: t
                    }).then((function(e) {
                        return e.validate_token
                    }))
                }
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(6).request;
        e.exports = function(e) {
            e.Installation = e.Object.extend("_Installation"), e.Push = e.Push || {}, e.Push.send = function(e, t) {
                if (e.where && (e.where = e.where._getParams().where), e.where && e.cql) throw new Error("Both where and cql can't be set");
                if (e.push_time && (e.push_time = e.push_time.toJSON()), e.expiration_time && (e.expiration_time = e.expiration_time.toJSON()), e.expiration_time && e.expiration_time_interval) throw new Error("Both expiration_time and expiration_time_interval can't be set");
                return r({
                    service: "push",
                    method: "POST",
                    path: "/push",
                    data: e,
                    authOptions: t
                })
            }
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = r(n(2)),
            o = r(n(27)),
            a = n(0),
            s = n(6)._request,
            u = n(5).getSessionToken;
        e.exports = function(e) {
            var t = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return u(t) ? e.User._fetchUserBySessionToken(u(t)) : e.User.currentAsync()
                },
                n = function(n) {
                    return t(n).then((function(t) {
                        return e.Object.createWithoutData("_User", t.id)._toPointer()
                    }))
                };
            e.Status = function(e, t) {
                return this.data = {}, this.inboxType = "default", this.query = null, e && "object" === (void 0 === e ? "undefined" : (0, o.default)(e)) ? this.data = e : (e && (this.data.image = e), t && (this.data.message = t)), this
            }, a.extend(e.Status.prototype, {
                get: function(e) {
                    return this.data[e]
                },
                set: function(e, t) {
                    return this.data[e] = t, this
                },
                destroy: function(e) {
                    return this.id ? s("statuses", null, this.id, "DELETE", e) : i.default.reject(new Error("The status id is not exists."))
                },
                toObject: function() {
                    return this.id ? e.Object.createWithoutData("_Status", this.id) : null
                },
                _getDataJSON: function() {
                    var t = a.clone(this.data);
                    return e._encode(t)
                },
                send: function() {
                    var t = this,
                        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!u(r) && !e.User.current()) throw new Error("Please signin an user.");
                    return this.query ? n(r).then((function(e) {
                        var n = t.query._getParams();
                        n.className = t.query.className;
                        var i = {};
                        return i.query = n, t.data = t.data || {}, t.data.source = t.data.source || e, i.data = t._getDataJSON(), i.inboxType = t.inboxType || "default", s("statuses", null, null, "POST", i, r)
                    })).then((function(n) {
                        return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
                    })) : e.Status.sendStatusToFollowers(this, r)
                },
                _finishFetch: function(t) {
                    this.id = t.objectId, this.createdAt = e._parseDate(t.createdAt), this.updatedAt = e._parseDate(t.updatedAt), this.messageId = t.messageId, delete t.messageId, delete t.objectId, delete t.createdAt, delete t.updatedAt, this.data = e._decode(t)
                }
            }), e.Status.sendStatusToFollowers = function(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!u(r) && !e.User.current()) throw new Error("Please signin an user.");
                return n(r).then((function(n) {
                    var i = {
                        className: "_Follower",
                        keys: "follower"
                    };
                    i.where = {
                        user: n
                    };
                    var o = {};
                    return o.query = i, t.data = t.data || {}, t.data.source = t.data.source || n, o.data = t._getDataJSON(), o.inboxType = t.inboxType || "default", s("statuses", null, null, "POST", o, r).then((function(n) {
                        return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
                    }))
                }))
            }, e.Status.sendPrivateStatus = function(t, r) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!u(i) && !e.User.current()) throw new Error("Please signin an user.");
                if (!r) throw new Error("Invalid target user.");
                var o = a.isString(r) ? r : r.id;
                if (!o) throw new Error("Invalid target user.");
                return n(i).then((function(n) {
                    var r = {
                        className: "_User"
                    };
                    r.where = {
                        objectId: o
                    };
                    var a = {};
                    return a.query = r, t.data = t.data || {}, t.data.source = t.data.source || n, a.data = t._getDataJSON(), a.inboxType = "private", t.inboxType = "private", s("statuses", null, null, "POST", a, i).then((function(n) {
                        return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t
                    }))
                }))
            }, e.Status.countUnreadStatuses = function(n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (a.isString(r) || (o = r), !u(o) && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
                return i.default.resolve(n || t(o)).then((function(t) {
                    var n = {};
                    return n.inboxType = e._encode(r), n.owner = e._encode(t), s("subscribe/statuses/count", null, null, "GET", n, o)
                }))
            }, e.Status.resetUnreadCount = function(n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (a.isString(r) || (o = r), !u(o) && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
                return i.default.resolve(n || t(o)).then((function(t) {
                    var n = {};
                    return n.inboxType = e._encode(r), n.owner = e._encode(t), s("subscribe/statuses/resetUnreadCount", null, null, "POST", n, o)
                }))
            }, e.Status.statusQuery = function(t) {
                var n = new e.Query("_Status");
                return t && n.equalTo("source", t), n
            }, e.InboxQuery = e.Query._extend({
                _objectClass: e.Status,
                _sinceId: 0,
                _maxId: 0,
                _inboxType: "default",
                _owner: null,
                _newObject: function() {
                    return new e.Status
                },
                _createRequest: function(t, n) {
                    return e.InboxQuery.__super__._createRequest.call(this, t, n, "/subscribe/statuses")
                },
                sinceId: function(e) {
                    return this._sinceId = e, this
                },
                maxId: function(e) {
                    return this._maxId = e, this
                },
                owner: function(e) {
                    return this._owner = e, this
                },
                inboxType: function(e) {
                    return this._inboxType = e, this
                },
                _getParams: function() {
                    var t = e.InboxQuery.__super__._getParams.call(this);
                    return t.owner = e._encode(this._owner), t.inboxType = e._encode(this._inboxType), t.sinceId = e._encode(this._sinceId), t.maxId = e._encode(this._maxId), t
                }
            }), e.Status.inboxQuery = function(t, n) {
                var r = new e.InboxQuery(e.Status);
                return t && (r._owner = t), n && (r._inboxType = n), r
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(9)),
            i = n(0),
            o = n(6)._request;
        e.exports = function(e) {
            e.SearchSortBuilder = function() {
                this._sortFields = []
            }, i.extend(e.SearchSortBuilder.prototype, {
                _addField: function(e, t, n, r) {
                    var i = {};
                    return i[e] = {
                        order: t || "asc",
                        mode: n || "avg",
                        missing: "_" + (r || "last")
                    }, this._sortFields.push(i), this
                },
                ascending: function(e, t, n) {
                    return this._addField(e, "asc", t, n)
                },
                descending: function(e, t, n) {
                    return this._addField(e, "desc", t, n)
                },
                whereNear: function(e, t, n) {
                    n = n || {};
                    var r = {},
                        i = {
                            lat: t.latitude,
                            lon: t.longitude
                        },
                        o = {
                            order: n.order || "asc",
                            mode: n.mode || "avg",
                            unit: n.unit || "km"
                        };
                    return o[e] = i, r._geo_distance = o, this._sortFields.push(r), this
                },
                build: function() {
                    return (0, r.default)(e._encode(this._sortFields))
                }
            }), e.SearchQuery = e.Query._extend({
                _sid: null,
                _hits: 0,
                _queryString: null,
                _highlights: null,
                _sortBuilder: null,
                _createRequest: function(e, t) {
                    return o("search/select", null, null, "GET", e || this._getParams(), t)
                },
                sid: function(e) {
                    return this._sid = e, this
                },
                queryString: function(e) {
                    return this._queryString = e, this
                },
                highlights: function(e) {
                    var t;
                    return t = e && i.isString(e) ? arguments : e, this._highlights = t, this
                },
                sortBy: function(e) {
                    return this._sortBuilder = e, this
                },
                hits: function() {
                    return this._hits || (this._hits = 0), this._hits
                },
                _processResult: function(e) {
                    return delete e.className, delete e._app_url, delete e._deeplink, e
                },
                hasMore: function() {
                    return !this._hitEnd
                },
                reset: function() {
                    this._hitEnd = !1, this._sid = null, this._hits = 0
                },
                find: function() {
                    var e = this;
                    return this._createRequest().then((function(t) {
                        return t.sid ? (e._oldSid = e._sid, e._sid = t.sid) : (e._sid = null, e._hitEnd = !0), e._hits = t.hits || 0, i.map(t.results, (function(n) {
                            n.className && (t.className = n.className);
                            var r = e._newObject(t);
                            return r.appURL = n._app_url, r._finishFetch(e._processResult(n), !0), r
                        }))
                    }))
                },
                _getParams: function() {
                    var t = e.SearchQuery.__super__._getParams.call(this);
                    if (delete t.where, this.className && (t.clazz = this.className), this._sid && (t.sid = this._sid), !this._queryString) throw new Error("Please set query string.");
                    if (t.q = this._queryString, this._highlights && (t.highlights = this._highlights.join(",")), this._sortBuilder && t.order) throw new Error("sort and order can not be set at same time.");
                    return this._sortBuilder && (t.sort = this._sortBuilder.build()), t
                }
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(2)),
            i = n(0),
            o = n(16),
            a = n(6).request;
        e.exports = function(e) {
            e.Insight = e.Insight || {}, i.extend(e.Insight, {
                startJob: function(t, n) {
                    if (!t || !t.sql) throw new Error("Please provide the sql to run the job.");
                    var r = {
                        jobConfig: t,
                        appId: e.applicationId
                    };
                    return a({
                        path: "/bigquery/jobs",
                        method: "POST",
                        data: e._encode(r, null, !0),
                        authOptions: n,
                        signKey: !1
                    }).then((function(t) {
                        return e._decode(t).id
                    }))
                },
                on: function(e, t) {}
            }), e.Insight.JobQuery = function(e, t) {
                if (!e) throw new Error("Please provide the job id.");
                this.id = e, this.className = t, this._skip = 0, this._limit = 100
            }, i.extend(e.Insight.JobQuery.prototype, {
                skip: function(e) {
                    return this._skip = e, this
                },
                limit: function(e) {
                    return this._limit = e, this
                },
                find: function(e) {
                    var t = {
                        skip: this._skip,
                        limit: this._limit
                    };
                    return a({
                        path: "/bigquery/jobs/" + this.id,
                        method: "GET",
                        query: t,
                        authOptions: e,
                        signKey: !1
                    }).then((function(e) {
                        return e.error ? r.default.reject(new o(e.code, e.error)) : r.default.resolve(e)
                    }))
                }
            })
        }
    }, function(e, t, n) {
        "use strict";
        var r = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(9)),
            i = n(0),
            o = n(6)._request,
            a = n(18),
            s = function(e) {
                return "string" == typeof e ? e : "function" == typeof e.getPayload ? (0, r.default)(e.getPayload()) : (0, r.default)(e)
            };
        e.exports = a.Object.extend("_Conversation", {
            constructor: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                a.Object.prototype.constructor.call(this, null, null), this.set("name", e), void 0 !== t.isSystem && this.set("sys", !!t.isSystem), void 0 !== t.isTransient && this.set("tr", !!t.isTransient)
            },
            getCreator: function() {
                return this.get("c")
            },
            getLastMessageAt: function() {
                return this.get("lm")
            },
            getMembers: function() {
                return this.get("m")
            },
            addMember: function(e) {
                return this.add("m", e)
            },
            getMutedMembers: function() {
                return this.get("mu")
            },
            getName: function() {
                return this.get("name")
            },
            isTransient: function() {
                return this.get("tr")
            },
            isSystem: function() {
                return this.get("sys")
            },
            send: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = {
                        from_peer: e,
                        conv_id: this.id,
                        transient: !1,
                        message: s(t)
                    };
                return void 0 !== n.toClients && (i.to_peers = n.toClients), void 0 !== n.transient && (i.transient = !!n.transient), void 0 !== n.pushData && (i.push_data = n.pushData), o("rtm", "messages", null, "POST", i, r)
            },
            broadcast: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = {
                        from_peer: e,
                        conv_id: this.id,
                        message: s(t)
                    };
                if (void 0 !== n.pushData && (a.push = n.pushData), void 0 !== n.validTill) {
                    var u = n.validTill;
                    i.isDate(u) && (u = u.getTime()), n.valid_till = u
                }
                return o("rtm", "broadcast", null, "POST", a, r)
            }
        })
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            var t = e.name,
                n = e.value,
                r = e.version;
            this.name = t, this.value = n, this.version = r
        }
        var i = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(2)),
            o = n(0),
            a = n(6).request,
            s = n(5),
            u = s.ensureArray,
            c = s.parseDate,
            l = n(18);
        l.LeaderboardVersionChangeInterval = {
            NEVER: "never",
            DAY: "day",
            WEEK: "week",
            MONTH: "month"
        }, l.LeaderboardOrder = {
            ASCENDING: "ascending",
            DESCENDING: "descending"
        }, l.LeaderboardUpdateStrategy = {
            BETTER: "better",
            LAST: "last",
            SUM: "sum"
        };
        var h = function(e) {
            var t = l._decode(e);
            return new r({
                name: t.statisticName,
                value: t.statisticValue,
                version: t.version
            })
        };
        l.Leaderboard = function(e) {
            this.statisticName = e, this.order = void 0, this.updateStrategy = void 0, this.versionChangeInterval = void 0, this.version = void 0, this.nextResetAt = void 0, this.createdAt = void 0
        };
        var d = l.Leaderboard;
        l.Leaderboard.createWithoutData = function(e) {
            return new d(e)
        }, l.Leaderboard.createLeaderboard = function(e, t) {
            var n = e.statisticName,
                r = e.order,
                i = e.versionChangeInterval,
                o = e.updateStrategy;
            return a({
                method: "POST",
                path: "/leaderboard/leaderboards",
                data: {
                    statisticName: n,
                    order: r,
                    versionChangeInterval: i,
                    updateStrategy: o
                },
                authOptions: t
            }).then((function(e) {
                return new d(n)._finishFetch(e)
            }))
        }, l.Leaderboard.getLeaderboard = function(e, t) {
            return d.createWithoutData(e).fetch(t)
        }, l.Leaderboard.getStatistics = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.statisticNames,
                r = arguments[2];
            return i.default.resolve().then((function() {
                if (!e || !e.id) throw new Error("user must be an AV.User");
                return a({
                    method: "GET",
                    path: "/leaderboard/users/" + e.id + "/statistics",
                    query: {
                        statistics: n ? u(n).join(",") : void 0
                    },
                    authOptions: r
                }).then((function(e) {
                    return e.results.map(h)
                }))
            }))
        }, l.Leaderboard.updateStatistics = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return i.default.resolve().then((function() {
                if (!e || !e.id) throw new Error("user must be an AV.User");
                var r = o.map(t, (function(e, t) {
                        return {
                            statisticName: t,
                            statisticValue: e
                        }
                    })),
                    i = n.overwrite;
                return a({
                    method: "POST",
                    path: "/leaderboard/users/" + e.id + "/statistics",
                    query: {
                        overwrite: i ? 1 : void 0
                    },
                    data: r,
                    authOptions: n
                }).then((function(e) {
                    return e.results.map(h)
                }))
            }))
        }, l.Leaderboard.deleteStatistics = function(e, t, n) {
            return i.default.resolve().then((function() {
                if (!e || !e.id) throw new Error("user must be an AV.User");
                return a({
                    method: "DELETE",
                    path: "/leaderboard/users/" + e.id + "/statistics",
                    query: {
                        statistics: u(t).join(",")
                    },
                    authOptions: n
                }).then((function() {}))
            }))
        }, o.extend(d.prototype, {
            _finishFetch: function(e) {
                var t = this;
                return o.forEach(e, (function(e, n) {
                    "updatedAt" !== n && "objectId" !== n && ("expiredAt" === n && (n = "nextResetAt"), "createdAt" === n && (e = c(e)), e && "Date" === e.__type && (e = c(e.iso)), t[n] = e)
                })), this
            },
            fetch: function(e) {
                var t = this;
                return a({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    authOptions: e
                }).then((function(e) {
                    return t._finishFetch(e)
                }))
            },
            count: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.version,
                    n = arguments[1];
                return a({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks",
                    query: {
                        count: 1,
                        limit: 0,
                        version: t
                    },
                    authOptions: n
                }).then((function(e) {
                    return e.count
                }))
            },
            _getResults: function(e, t, n) {
                var r = e.skip,
                    i = e.limit,
                    s = e.selectUserKeys,
                    c = e.includeUserKeys,
                    d = e.includeStatistics,
                    p = e.version;
                return a({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks" + (n ? "/" + n : ""),
                    query: {
                        skip: r,
                        limit: i,
                        selectUserKeys: o.union(u(s), u(c)).join(",") || void 0,
                        includeUser: c ? u(c).join(",") : void 0,
                        includeStatistics: d ? u(d).join(",") : void 0,
                        version: p
                    },
                    authOptions: t
                }).then((function(e) {
                    return e.results.map((function(e) {
                        var t = l._decode(e),
                            n = t.user,
                            r = t.statisticValue,
                            i = t.rank,
                            o = t.statistics;
                        return {
                            user: n,
                            value: r,
                            rank: i,
                            includedStatistics: (void 0 === o ? [] : o).map(h)
                        }
                    }))
                }))
            },
            getResults: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.skip,
                    n = e.limit,
                    r = e.selectUserKeys,
                    i = e.includeUserKeys,
                    o = e.includeStatistics,
                    a = e.version,
                    s = arguments[1];
                return this._getResults({
                    skip: t,
                    limit: n,
                    selectUserKeys: r,
                    includeUserKeys: i,
                    includeStatistics: o,
                    version: a
                }, s)
            },
            getResultsAroundUser: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments[2];
                if (e && "string" != typeof e.id) return this.getResultsAroundUser(void 0, e, t);
                var r = t.limit,
                    i = t.selectUserKeys,
                    o = t.includeUserKeys,
                    a = t.includeStatistics,
                    s = t.version;
                return this._getResults({
                    limit: r,
                    selectUserKeys: i,
                    includeUserKeys: o,
                    includeStatistics: a,
                    version: s
                }, n, e ? e.id : "self")
            },
            _update: function(e, t) {
                var n = this;
                return a({
                    method: "PUT",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    data: e,
                    authOptions: t
                }).then((function(e) {
                    return n._finishFetch(e)
                }))
            },
            updateVersionChangeInterval: function(e, t) {
                return this._update({
                    versionChangeInterval: e
                }, t)
            },
            updateUpdateStrategy: function(e, t) {
                return this._update({
                    updateStrategy: e
                }, t)
            },
            reset: function(e) {
                var t = this;
                return a({
                    method: "PUT",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/incrementVersion",
                    authOptions: e
                }).then((function(e) {
                    return t._finishFetch(e)
                }))
            },
            destroy: function(e) {
                return l.request({
                    method: "DELETE",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    authOptions: e
                }).then((function() {}))
            },
            getArchives: function() {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.skip,
                    r = t.limit,
                    i = arguments[1];
                return a({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/archives",
                    query: {
                        skip: n,
                        limit: r
                    },
                    authOptions: i
                }).then((function(t) {
                    return t.results.map((function(t) {
                        var n = t.version,
                            r = t.status,
                            i = t.url,
                            o = t.activatedAt,
                            a = t.deactivatedAt;
                        return {
                            statisticName: e.statisticName,
                            version: n,
                            status: r,
                            url: i,
                            activatedAt: c(o.iso),
                            deactivatedAt: c(a.iso)
                        }
                    }))
                }))
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(166),
            i = n(69),
            o = ["Browser"].concat(n(179));
        e.exports = function(e) {
            return e.setAdapters(r), e._sharedConfig.userAgent = i(o), e
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(167);
        t.request = r.request, t.upload = r.upload, t.storage = window.localStorage, t.WebSocket = window.WebSocket
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(168);
        t.request = function(e, t) {
            void 0 === t && (t = {});
            var n = t.method,
                i = void 0 === n ? "GET" : n,
                o = t.data,
                a = t.headers,
                s = t.onprogress,
                u = r(i, e);
            return a && u.set(a), s && u.on("progress", s), u.send(o).catch((function(e) {
                if (e.response) return e.response;
                throw e
            })).then((function(e) {
                return {
                    status: e.status,
                    ok: e.ok,
                    headers: e.header,
                    data: e.body
                }
            }))
        }, t.upload = function(e, t, n) {
            void 0 === n && (n = {});
            var i = n.data,
                o = n.headers,
                a = n.onprogress,
                s = r("POST", e).attach(t.field, t.data, t.name);
            return i && s.field(i), o && s.set(o), a && s.on("progress", a), s.catch((function(e) {
                if (e.response) return e.response;
                throw e
            })).then((function(e) {
                return {
                    status: e.status,
                    ok: e.ok,
                    headers: e.header,
                    data: e.body
                }
            }))
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            return (i = "function" == typeof m.default && "symbol" === (0, g.default)(f.default) ? function(e) {
                return void 0 === e ? "undefined" : (0, g.default)(e)
            } : function(e) {
                return e && "function" == typeof m.default && e.constructor === m.default && e !== m.default.prototype ? "symbol" : void 0 === e ? "undefined" : (0, g.default)(e)
            })(e)
        }

        function o() {}

        function a(e) {
            if (!y(e)) return e;
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && s(t, n, e[n]);
            return t.join("&")
        }

        function s(e, t, n) {
            if (void 0 !== n) {
                if (null === n) return void e.push(encodeURI(t));
                if (Array.isArray(n)) n.forEach((function(n) {
                    s(e, t, n)
                }));
                else if (y(n))
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && s(e, "".concat(t, "[").concat(r, "]"), n[r]);
                else e.push(encodeURI(t) + "=" + encodeURIComponent(n))
            }
        }

        function u(e) {
            for (var t, n, r = {}, i = e.split("&"), o = 0, a = i.length; o < a; ++o) - 1 === (n = (t = i[o]).indexOf("=")) ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
            return r
        }

        function c(e) {
            return /[\/+]json($|[^-\w])/.test(e)
        }

        function l(e) {
            this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
            var t = this.xhr.status;
            1223 === t && (t = 204), this._setStatusProperties(t), this.headers = function(e) {
                for (var t, n, r, i, o = e.split(/\r?\n/), a = {}, s = 0, u = o.length; s < u; ++s) - 1 !== (t = (n = o[s]).indexOf(":")) && (r = n.slice(0, t).toLowerCase(), i = A(n.slice(t + 1)), a[r] = i);
                return a
            }(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response)
        }

        function h(e, t) {
            var n = this;
            this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", (function() {
                var e, t = null,
                    r = null;
                try {
                    r = new l(n)
                } catch (r) {
                    return (t = new Error("Parser is unable to parse the response")).parse = !0, t.original = r, n.xhr ? (t.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, t.status = n.xhr.status ? n.xhr.status : null, t.statusCode = t.status) : (t.rawResponse = null, t.status = null), n.callback(t)
                }
                n.emit("response", r);
                try {
                    n._isResponseOK(r) || (e = new Error(r.statusText || r.text || "Unsuccessful HTTP response"))
                } catch (t) {
                    e = t
                }
                e ? (e.original = t, e.response = r, e.status = r.status, n.callback(e, r)) : n.callback(null, r)
            }))
        }

        function d(e, t, n) {
            var r = j("DELETE", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
        }
        var p, f = r(n(34)),
            g = r(n(27)),
            m = r(n(35));
        "undefined" != typeof window ? p = window : "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), p = void 0) : p = self;
        var _ = n(169),
            v = n(170),
            b = n(171),
            y = n(79),
            w = n(172),
            k = n(174);
        e.exports = function(e, n) {
            return "function" == typeof n ? new t.Request("GET", e).end(n) : 1 === arguments.length ? new t.Request("GET", e) : new t.Request(e, n)
        };
        var j = t = e.exports;
        t.Request = h, j.getXHR = function() {
            if (p.XMLHttpRequest && (!p.location || "file:" !== p.location.protocol || !p.ActiveXObject)) return new XMLHttpRequest;
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (e) {}
            throw new Error("Browser-only version of superagent could not find XHR")
        };
        var A = "".trim ? function(e) {
            return e.trim()
        } : function(e) {
            return e.replace(/(^\s*|\s*$)/g, "")
        };
        j.serializeObject = a, j.parseString = u, j.types = {
            html: "text/html",
            json: "application/json",
            xml: "text/xml",
            urlencoded: "application/x-www-form-urlencoded",
            form: "application/x-www-form-urlencoded",
            "form-data": "application/x-www-form-urlencoded"
        }, j.serialize = {
            "application/x-www-form-urlencoded": a,
            "application/json": v
        }, j.parse = {
            "application/x-www-form-urlencoded": u,
            "application/json": JSON.parse
        }, w(l.prototype), l.prototype._parseBody = function(e) {
            var t = j.parse[this.type];
            return this.req._parser ? this.req._parser(this, e) : (!t && c(this.type) && (t = j.parse["application/json"]), t && e && (e.length > 0 || e instanceof Object) ? t(e) : null)
        }, l.prototype.toError = function() {
            var e = this.req,
                t = e.method,
                n = e.url,
                r = "cannot ".concat(t, " ").concat(n, " (").concat(this.status, ")"),
                i = new Error(r);
            return i.status = this.status, i.method = t, i.url = n, i
        }, j.Response = l, _(h.prototype), b(h.prototype), h.prototype.type = function(e) {
            return this.set("Content-Type", j.types[e] || e), this
        }, h.prototype.accept = function(e) {
            return this.set("Accept", j.types[e] || e), this
        }, h.prototype.auth = function(e, t, n) {
            1 === arguments.length && (t = ""), "object" === i(t) && null !== t && (n = t, t = ""), n || (n = {
                type: "function" == typeof btoa ? "basic" : "auto"
            });
            var r = function(e) {
                if ("function" == typeof btoa) return btoa(e);
                throw new Error("Cannot use basic auth, btoa is not a function")
            };
            return this._auth(e, t, n, r)
        }, h.prototype.query = function(e) {
            return "string" != typeof e && (e = a(e)), e && this._query.push(e), this
        }, h.prototype.attach = function(e, t, n) {
            if (t) {
                if (this._data) throw new Error("superagent can't mix .send() and .attach()");
                this._getFormData().append(e, t, n || t.name)
            }
            return this
        }, h.prototype._getFormData = function() {
            return this._formData || (this._formData = new p.FormData), this._formData
        }, h.prototype.callback = function(e, t) {
            if (this._shouldRetry(e, t)) return this._retry();
            var n = this._callback;
            this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), this.emit("error", e)), n(e, t)
        }, h.prototype.crossDomainError = function() {
            var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
            e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e)
        }, h.prototype.agent = function() {
            return console.warn("This is not supported in browser version of superagent"), this
        }, h.prototype.ca = h.prototype.agent, h.prototype.buffer = h.prototype.ca, h.prototype.write = function() {
            throw new Error("Streaming is not supported in browser version of superagent")
        }, h.prototype.pipe = h.prototype.write, h.prototype._isHost = function(e) {
            return e && "object" === i(e) && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e)
        }, h.prototype.end = function(e) {
            this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = e || o, this._finalizeQueryString(), this._end()
        }, h.prototype._setUploadTimeout = function() {
            var e = this;
            this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout((function() {
                e._timeoutError("Upload timeout of ", e._uploadTimeout, "ETIMEDOUT")
            }), this._uploadTimeout))
        }, h.prototype._end = function() {
            if (this._aborted) return this.callback(new Error("The request has been aborted even before .end() was called"));
            var e = this;
            this.xhr = j.getXHR();
            var t = this.xhr,
                n = this._formData || this._data;
            this._setTimeouts(), t.onreadystatechange = function() {
                var n = t.readyState;
                if (n >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 4 === n) {
                    var r;
                    try {
                        r = t.status
                    } catch (e) {
                        r = 0
                    }
                    if (!r) {
                        if (e.timedout || e._aborted) return;
                        return e.crossDomainError()
                    }
                    e.emit("end")
                }
            };
            var r = function(t, n) {
                n.total > 0 && (n.percent = n.loaded / n.total * 100, 100 === n.percent && clearTimeout(e._uploadTimeoutTimer)), n.direction = t, e.emit("progress", n)
            };
            if (this.hasListeners("progress")) try {
                t.addEventListener("progress", r.bind(null, "download")), t.upload && t.upload.addEventListener("progress", r.bind(null, "upload"))
            } catch (e) {}
            t.upload && this._setUploadTimeout();
            try {
                this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0)
            } catch (e) {
                return this.callback(e)
            }
            if (this._withCredentials && (t.withCredentials = !0), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof n && !this._isHost(n)) {
                var i = this._header["content-type"],
                    o = this._serializer || j.serialize[i ? i.split(";")[0] : ""];
                !o && c(i) && (o = j.serialize["application/json"]), o && (n = o(n))
            }
            for (var a in this.header) null !== this.header[a] && Object.prototype.hasOwnProperty.call(this.header, a) && t.setRequestHeader(a, this.header[a]);
            this._responseType && (t.responseType = this._responseType), this.emit("request", this), t.send(void 0 === n ? null : n)
        }, j.agent = function() {
            return new k
        }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach((function(e) {
            k.prototype[e.toLowerCase()] = function(t, n) {
                var r = new j.Request(e, t);
                return this._setDefaults(r), n && r.end(n), r
            }
        })), k.prototype.del = k.prototype.delete, j.get = function(e, t, n) {
            var r = j("GET", e);
            return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
        }, j.head = function(e, t, n) {
            var r = j("HEAD", e);
            return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
        }, j.options = function(e, t, n) {
            var r = j("OPTIONS", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
        }, j.del = d, j.delete = d, j.patch = function(e, t, n) {
            var r = j("PATCH", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
        }, j.post = function(e, t, n) {
            var r = j("POST", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
        }, j.put = function(e, t, n) {
            var r = j("PUT", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
        }
    }, function(e, t, n) {
        function r(e) {
            if (e) return function(e) {
                for (var t in r.prototype) e[t] = r.prototype[t];
                return e
            }(e)
        }
        e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
        }, r.prototype.once = function(e, t) {
            function n() {
                this.off(e, n), t.apply(this, arguments)
            }
            return n.fn = t, this.on(e, n), this
        }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var n = this._callbacks["$" + e];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + e], this;
            for (var r, i = 0; i < n.length; i++)
                if ((r = n[i]) === t || r.fn === t) {
                    n.splice(i, 1);
                    break
                } return 0 === n.length && delete this._callbacks["$" + e], this
        }, r.prototype.emit = function(e) {
            this._callbacks = this._callbacks || {};
            for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            if (n) {
                r = 0;
                for (var i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, t)
            }
            return this
        }, r.prototype.listeners = function(e) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
        }, r.prototype.hasListeners = function(e) {
            return !!this.listeners(e).length
        }
    }, function(e, t) {
        function n(e, t, n) {
            var r;
            for (function e(t, n, r, i) {
                    var o;
                    if ("object" == typeof t && null !== t) {
                        for (o = 0; o < r.length; o++)
                            if (r[o] === t) {
                                var a = Object.getOwnPropertyDescriptor(i, n);
                                return void(void 0 !== a.get ? a.configurable ? (Object.defineProperty(i, n, {
                                    value: "[Circular]"
                                }), s.push([i, n, t, a])) : u.push([t, n]) : (i[n] = "[Circular]", s.push([i, n, t])))
                            } if (r.push(t), Array.isArray(t))
                            for (o = 0; o < t.length; o++) e(t[o], o, r, t);
                        else {
                            var c = Object.keys(t);
                            for (o = 0; o < c.length; o++) {
                                var l = c[o];
                                e(t[l], l, r, t)
                            }
                        }
                        r.pop()
                    }
                }(e, "", [], void 0), r = 0 === u.length ? JSON.stringify(e, t, n) : JSON.stringify(e, a(t), n); 0 !== s.length;) {
                var i = s.pop();
                4 === i.length ? Object.defineProperty(i[0], i[1], i[3]) : i[0][i[1]] = i[2]
            }
            return r
        }

        function r(e, t) {
            return e < t ? -1 : e > t ? 1 : 0
        }

        function i(e, t, n) {
            var r, i = o(e, "", [], void 0) || e;
            for (r = 0 === u.length ? JSON.stringify(i, t, n) : JSON.stringify(i, a(t), n); 0 !== s.length;) {
                var c = s.pop();
                4 === c.length ? Object.defineProperty(c[0], c[1], c[3]) : c[0][c[1]] = c[2]
            }
            return r
        }

        function o(e, t, n, i) {
            var a;
            if ("object" == typeof e && null !== e) {
                for (a = 0; a < n.length; a++)
                    if (n[a] === e) {
                        var c = Object.getOwnPropertyDescriptor(i, t);
                        return void(void 0 !== c.get ? c.configurable ? (Object.defineProperty(i, t, {
                            value: "[Circular]"
                        }), s.push([i, t, e, c])) : u.push([e, t]) : (i[t] = "[Circular]", s.push([i, t, e])))
                    } if ("function" == typeof e.toJSON) return;
                if (n.push(e), Array.isArray(e))
                    for (a = 0; a < e.length; a++) o(e[a], a, n, e);
                else {
                    var l = {},
                        h = Object.keys(e).sort(r);
                    for (a = 0; a < h.length; a++) {
                        var d = h[a];
                        o(e[d], d, n, e), l[d] = e[d]
                    }
                    if (void 0 === i) return l;
                    s.push([i, t, e]), i[t] = l
                }
                n.pop()
            }
        }

        function a(e) {
            return e = void 0 !== e ? e : function(e, t) {
                    return t
                },
                function(t, n) {
                    if (u.length > 0)
                        for (var r = 0; r < u.length; r++) {
                            var i = u[r];
                            if (i[1] === t && i[0] === n) {
                                n = "[Circular]", u.splice(r, 1);
                                break
                            }
                        }
                    return e.call(this, t, n)
                }
        }
        e.exports = n, n.default = n, n.stable = i, n.stableStringify = i;
        var s = [],
            u = []
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            return (i = "function" == typeof c.default && "symbol" === (0, u.default)(s.default) ? function(e) {
                return void 0 === e ? "undefined" : (0, u.default)(e)
            } : function(e) {
                return e && "function" == typeof c.default && e.constructor === c.default && e !== c.default.prototype ? "symbol" : void 0 === e ? "undefined" : (0, u.default)(e)
            })(e)
        }

        function o(e) {
            if (e) return function(e) {
                for (var t in o.prototype) Object.prototype.hasOwnProperty.call(o.prototype, t) && (e[t] = o.prototype[t]);
                return e
            }(e)
        }
        var a = r(n(2)),
            s = r(n(34)),
            u = r(n(27)),
            c = r(n(35)),
            l = n(79);
        e.exports = o, o.prototype.clearTimeout = function() {
            return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this
        }, o.prototype.parse = function(e) {
            return this._parser = e, this
        }, o.prototype.responseType = function(e) {
            return this._responseType = e, this
        }, o.prototype.serialize = function(e) {
            return this._serializer = e, this
        }, o.prototype.timeout = function(e) {
            if (!e || "object" !== i(e)) return this._timeout = e, this._responseTimeout = 0, this._uploadTimeout = 0, this;
            for (var t in e)
                if (Object.prototype.hasOwnProperty.call(e, t)) switch (t) {
                    case "deadline":
                        this._timeout = e.deadline;
                        break;
                    case "response":
                        this._responseTimeout = e.response;
                        break;
                    case "upload":
                        this._uploadTimeout = e.upload;
                        break;
                    default:
                        console.warn("Unknown timeout option", t)
                }
            return this
        }, o.prototype.retry = function(e, t) {
            return 0 !== arguments.length && !0 !== e || (e = 1), e <= 0 && (e = 0), this._maxRetries = e, this._retries = 0, this._retryCallback = t, this
        };
        var h = ["ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT"];
        o.prototype._shouldRetry = function(e, t) {
            if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
            if (this._retryCallback) try {
                var n = this._retryCallback(e, t);
                if (!0 === n) return !0;
                if (!1 === n) return !1
            } catch (e) {
                console.error(e)
            }
            if (t && t.status && t.status >= 500 && 501 !== t.status) return !0;
            if (e) {
                if (e.code && h.includes(e.code)) return !0;
                if (e.timeout && "ECONNABORTED" === e.code) return !0;
                if (e.crossDomain) return !0
            }
            return !1
        }, o.prototype._retry = function() {
            return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this.timedoutError = null, this._end()
        }, o.prototype.then = function(e, t) {
            var n = this;
            if (!this._fullfilledPromise) {
                var r = this;
                this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new a.default((function(e, t) {
                    r.on("abort", (function() {
                        if (n.timedout && n.timedoutError) t(n.timedoutError);
                        else {
                            var e = new Error("Aborted");
                            e.code = "ABORTED", e.status = n.status, e.method = n.method, e.url = n.url, t(e)
                        }
                    })), r.end((function(n, r) {
                        n ? t(n) : e(r)
                    }))
                }))
            }
            return this._fullfilledPromise.then(e, t)
        }, o.prototype.catch = function(e) {
            return this.then(void 0, e)
        }, o.prototype.use = function(e) {
            return e(this), this
        }, o.prototype.ok = function(e) {
            if ("function" != typeof e) throw new Error("Callback required");
            return this._okCallback = e, this
        }, o.prototype._isResponseOK = function(e) {
            return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300)
        }, o.prototype.get = function(e) {
            return this._header[e.toLowerCase()]
        }, o.prototype.getHeader = o.prototype.get, o.prototype.set = function(e, t) {
            if (l(e)) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && this.set(n, e[n]);
                return this
            }
            return this._header[e.toLowerCase()] = t, this.header[e] = t, this
        }, o.prototype.unset = function(e) {
            return delete this._header[e.toLowerCase()], delete this.header[e], this
        }, o.prototype.field = function(e, t) {
            if (null == e) throw new Error(".field(name, val) name can not be empty");
            if (this._data) throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
            if (l(e)) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && this.field(n, e[n]);
                return this
            }
            if (Array.isArray(t)) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && this.field(e, t[r]);
                return this
            }
            if (null == t) throw new Error(".field(name, val) val can not be empty");
            return "boolean" == typeof t && (t = String(t)), this._getFormData().append(e, t), this
        }, o.prototype.abort = function() {
            return this._aborted || (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort")), this
        }, o.prototype._auth = function(e, t, n, r) {
            switch (n.type) {
                case "basic":
                    this.set("Authorization", "Basic ".concat(r("".concat(e, ":").concat(t))));
                    break;
                case "auto":
                    this.username = e, this.password = t;
                    break;
                case "bearer":
                    this.set("Authorization", "Bearer ".concat(e))
            }
            return this
        }, o.prototype.withCredentials = function(e) {
            return void 0 === e && (e = !0), this._withCredentials = e, this
        }, o.prototype.redirects = function(e) {
            return this._maxRedirects = e, this
        }, o.prototype.maxResponseSize = function(e) {
            if ("number" != typeof e) throw new TypeError("Invalid argument");
            return this._maxResponseSize = e, this
        }, o.prototype.toJSON = function() {
            return {
                method: this.method,
                url: this.url,
                data: this._data,
                headers: this._header
            }
        }, o.prototype.send = function(e) {
            var t = l(e),
                n = this._header["content-type"];
            if (this._formData) throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
            if (t && !this._data) Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {});
            else if (e && this._data && this._isHost(this._data)) throw new Error("Can't merge these send calls");
            if (t && l(this._data))
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (this._data[r] = e[r]);
            else "string" == typeof e ? (n || this.type("form"), n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" === n ? this._data ? "".concat(this._data, "&").concat(e) : e : (this._data || "") + e) : this._data = e;
            return !t || this._isHost(e) || n || this.type("json"), this
        }, o.prototype.sortQuery = function(e) {
            return this._sort = void 0 === e || e, this
        }, o.prototype._finalizeQueryString = function() {
            var e = this._query.join("&");
            if (e && (this.url += (this.url.includes("?") ? "&" : "?") + e), this._query.length = 0, this._sort) {
                var t = this.url.indexOf("?");
                if (t >= 0) {
                    var n = this.url.slice(t + 1).split("&");
                    "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.slice(0, t) + "?" + n.join("&")
                }
            }
        }, o.prototype._appendQueryString = function() {
            console.warn("Unsupported")
        }, o.prototype._timeoutError = function(e, t, n) {
            if (!this._aborted) {
                var r = new Error("".concat(e + t, "ms exceeded"));
                r.timeout = t, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.timedoutError = r, this.abort(), this.callback(r)
            }
        }, o.prototype._setTimeouts = function() {
            var e = this;
            this._timeout && !this._timer && (this._timer = setTimeout((function() {
                e._timeoutError("Timeout of ", e._timeout, "ETIME")
            }), this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout((function() {
                e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT")
            }), this._responseTimeout))
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e) return function(e) {
                for (var t in r.prototype) Object.prototype.hasOwnProperty.call(r.prototype, t) && (e[t] = r.prototype[t]);
                return e
            }(e)
        }
        var i = n(173);
        e.exports = r, r.prototype.get = function(e) {
            return this.header[e.toLowerCase()]
        }, r.prototype._setHeaderProperties = function(e) {
            var t = e["content-type"] || "";
            this.type = i.type(t);
            var n = i.params(t);
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (this[r] = n[r]);
            this.links = {};
            try {
                e.link && (this.links = i.parseLinks(e.link))
            } catch (e) {}
        }, r.prototype._setStatusProperties = function(e) {
            var t = e / 100 | 0;
            this.statusCode = e, this.status = this.statusCode, this.statusType = t, this.info = 1 === t, this.ok = 2 === t, this.redirect = 3 === t, this.clientError = 4 === t, this.serverError = 5 === t, this.error = (4 === t || 5 === t) && this.toError(), this.created = 201 === e, this.accepted = 202 === e, this.noContent = 204 === e, this.badRequest = 400 === e, this.unauthorized = 401 === e, this.notAcceptable = 406 === e, this.forbidden = 403 === e, this.notFound = 404 === e, this.unprocessableEntity = 422 === e
        }
    }, function(e, t, n) {
        "use strict";
        t.type = function(e) {
            return e.split(/ *; */).shift()
        }, t.params = function(e) {
            return e.split(/ *; */).reduce((function(e, t) {
                var n = t.split(/ *= */),
                    r = n.shift(),
                    i = n.shift();
                return r && i && (e[r] = i), e
            }), {})
        }, t.parseLinks = function(e) {
            return e.split(/ *, */).reduce((function(e, t) {
                var n = t.split(/ *; */),
                    r = n[0].slice(1, -1);
                return e[n[1].split(/ *= */)[1].slice(1, -1)] = r, e
            }), {})
        }, t.cleanHeader = function(e, t) {
            return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], delete e.host, t && (delete e.authorization, delete e.cookie), e
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if ((0, s.default)(Object(e)) || "[object Arguments]" === Object.prototype.toString.call(e)) return (0, a.default)(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function o() {
            this._defaults = []
        }
        var a = r(n(175)),
            s = r(n(78));
        ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"].forEach((function(e) {
            o.prototype[e] = function() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return this._defaults.push({
                    fn: e,
                    args: n
                }), this
            }
        })), o.prototype._setDefaults = function(e) {
            this._defaults.forEach((function(t) {
                e[t.fn].apply(e, i(t.args))
            }))
        }, e.exports = o
    }, function(e, t, n) {
        e.exports = {
            default: n(176),
            __esModule: !0
        }
    }, function(e, t, n) {
        n(20), n(177), e.exports = n(1).Array.from
    }, function(e, t, n) {
        "use strict";
        var r = n(22),
            i = n(10),
            o = n(26),
            a = n(59),
            s = n(60),
            u = n(40),
            c = n(178),
            l = n(45);
        i(i.S + i.F * !n(65)((function(e) {
            Array.from(e)
        })), "Array", {
            from: function(e) {
                var t, n, i, h, d = o(e),
                    p = "function" == typeof this ? this : Array,
                    f = arguments.length,
                    g = f > 1 ? arguments[1] : void 0,
                    m = void 0 !== g,
                    _ = 0,
                    v = l(d);
                if (m && (g = r(g, f > 2 ? arguments[2] : void 0, 2)), null == v || p == Array && s(v))
                    for (n = new p(t = u(d.length)); t > _; _++) c(n, _, m ? g(d[_], _) : d[_]);
                else
                    for (h = v.call(d), n = new p; !(i = h.next()).done; _++) c(n, _, m ? a(h, g, [i.value, _], !0) : i.value);
                return n.length = _, n
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(7),
            i = n(24);
        e.exports = function(e, t, n) {
            t in e ? r.f(e, t, i(0, n)) : e[t] = n
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = []
    }])
})),
/*!
 * 获取浏览器和操作系统的信息
 */
function(e) {
    var t, n = {},
        r = navigator.userAgent.toLowerCase(),
        i = (navigator.platform, r.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []);
    /trident/i.test(i[1]) && (t = /\brv[ :]+(\d+)/g.exec(r) || [], i[1] = "IE", i[2] = t[1] || ""), "Chrome" === i[1] && null != (t = r.match(/\b(OPR|Edge)\/(\d+)/)) && (i[1] = "Opera", i[2] = t[1] || ""), i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (t = r.match(/version\/(\d+)/i)) && i.splice(1, 1, t[1]), n.browser = i[0], n.browserVersion = i[1];
    var o, a, s = [{
        s: "Windows 10",
        r: /(Windows 10.0|Windows NT 10.0)/
    }, {
        s: "Windows 8.1",
        r: /(Windows 8.1|Windows NT 6.3)/
    }, {
        s: "Windows 8",
        r: /(Windows 8|Windows NT 6.2)/
    }, {
        s: "Windows 7",
        r: /(Windows 7|Windows NT 6.1)/
    }, {
        s: "Windows Vista",
        r: /Windows NT 6.0/
    }, {
        s: "Windows Server 2003",
        r: /Windows NT 5.2/
    }, {
        s: "Windows XP",
        r: /(Windows NT 5.1|Windows XP)/
    }, {
        s: "Windows 2000",
        r: /(Windows NT 5.0|Windows 2000)/
    }, {
        s: "Windows ME",
        r: /(Win 9x 4.90|Windows ME)/
    }, {
        s: "Windows 98",
        r: /(Windows 98|Win98)/
    }, {
        s: "Windows 95",
        r: /(Windows 95|Win95|Windows_95)/
    }, {
        s: "Windows NT 4.0",
        r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
    }, {
        s: "Windows CE",
        r: /Windows CE/
    }, {
        s: "Windows 3.11",
        r: /Win16/
    }, {
        s: "Android",
        r: /Android/
    }, {
        s: "Open BSD",
        r: /OpenBSD/
    }, {
        s: "Sun OS",
        r: /SunOS/
    }, {
        s: "Linux",
        r: /(Linux|X11)/
    }, {
        s: "iOS",
        r: /(iPhone|iPad|iPod)/
    }, {
        s: "Mac OS X",
        r: /Mac OS X/
    }, {
        s: "Mac OS",
        r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
    }, {
        s: "QNX",
        r: /QNX/
    }, {
        s: "UNIX",
        r: /UNIX/
    }, {
        s: "BeOS",
        r: /BeOS/
    }, {
        s: "OS/2",
        r: /OS\/2/
    }, {
        s: "Search Bot",
        r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
    }];
    for (var u in s) {
        var c = s[u];
        if (c.r.test(navigator.userAgent)) {
            o = c.s;
            break
        }
    }
    switch (/Windows/.test(o) && (a = /Windows (.*)/.exec(o)[1], o = "Windows"), o) {
        case "Mac OS X":
            a = /Mac OS X (10[\.\_\d]+)/.exec(navigator.userAgent)[1];
            break;
        case "Android":
            a = /Android ([\.\_\d]+)/.exec(navigator.userAgent)[1];
            break;
        case "iOS":
            a = (a = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigator.appVersion))[1] + "." + a[2] + "." + (0 | a[3])
    }
    n.os = o, n.osVersion = a, e.boInfo = n
}(window),
/*! showdown v 1.9.1 - 02-11-2019 */
function() {
    function e(e) {
        "use strict";
        var t = {
            omitExtraWLInCodeBlocks: {
                defaultValue: !1,
                describe: "Omit the default extra whiteline added to code blocks",
                type: "boolean"
            },
            noHeaderId: {
                defaultValue: !1,
                describe: "Turn on/off generated header id",
                type: "boolean"
            },
            prefixHeaderId: {
                defaultValue: !1,
                describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
                type: "string"
            },
            rawPrefixHeaderId: {
                defaultValue: !1,
                describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
                type: "boolean"
            },
            ghCompatibleHeaderId: {
                defaultValue: !1,
                describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
                type: "boolean"
            },
            rawHeaderId: {
                defaultValue: !1,
                describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
                type: "boolean"
            },
            headerLevelStart: {
                defaultValue: !1,
                describe: "The header blocks level start",
                type: "integer"
            },
            parseImgDimensions: {
                defaultValue: !1,
                describe: "Turn on/off image dimension parsing",
                type: "boolean"
            },
            simplifiedAutoLink: {
                defaultValue: !1,
                describe: "Turn on/off GFM autolink style",
                type: "boolean"
            },
            excludeTrailingPunctuationFromURLs: {
                defaultValue: !1,
                describe: "Excludes trailing punctuation from links generated with autoLinking",
                type: "boolean"
            },
            literalMidWordUnderscores: {
                defaultValue: !1,
                describe: "Parse midword underscores as literal underscores",
                type: "boolean"
            },
            literalMidWordAsterisks: {
                defaultValue: !1,
                describe: "Parse midword asterisks as literal asterisks",
                type: "boolean"
            },
            strikethrough: {
                defaultValue: !1,
                describe: "Turn on/off strikethrough support",
                type: "boolean"
            },
            tables: {
                defaultValue: !1,
                describe: "Turn on/off tables support",
                type: "boolean"
            },
            tablesHeaderId: {
                defaultValue: !1,
                describe: "Add an id to table headers",
                type: "boolean"
            },
            ghCodeBlocks: {
                defaultValue: !0,
                describe: "Turn on/off GFM fenced code blocks support",
                type: "boolean"
            },
            tasklists: {
                defaultValue: !1,
                describe: "Turn on/off GFM tasklist support",
                type: "boolean"
            },
            smoothLivePreview: {
                defaultValue: !1,
                describe: "Prevents weird effects in live previews due to incomplete input",
                type: "boolean"
            },
            smartIndentationFix: {
                defaultValue: !1,
                description: "Tries to smartly fix indentation in es6 strings",
                type: "boolean"
            },
            disableForced4SpacesIndentedSublists: {
                defaultValue: !1,
                description: "Disables the requirement of indenting nested sublists by 4 spaces",
                type: "boolean"
            },
            simpleLineBreaks: {
                defaultValue: !1,
                description: "Parses simple line breaks as <br> (GFM Style)",
                type: "boolean"
            },
            requireSpaceBeforeHeadingText: {
                defaultValue: !1,
                description: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
                type: "boolean"
            },
            ghMentions: {
                defaultValue: !1,
                description: "Enables github @mentions",
                type: "boolean"
            },
            ghMentionsLink: {
                defaultValue: "https://github.com/{u}",
                description: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
                type: "string"
            },
            encodeEmails: {
                defaultValue: !0,
                description: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
                type: "boolean"
            },
            openLinksInNewWindow: {
                defaultValue: !1,
                description: "Open all links in new windows",
                type: "boolean"
            },
            backslashEscapesHTMLTags: {
                defaultValue: !1,
                description: "Support for HTML Tag escaping. ex: <div>foo</div>",
                type: "boolean"
            },
            emoji: {
                defaultValue: !1,
                description: "Enable emoji support. Ex: `this is a :smile: emoji`",
                type: "boolean"
            },
            underline: {
                defaultValue: !1,
                description: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
                type: "boolean"
            },
            completeHTMLDocument: {
                defaultValue: !1,
                description: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
                type: "boolean"
            },
            metadata: {
                defaultValue: !1,
                description: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
                type: "boolean"
            },
            splitAdjacentBlockquotes: {
                defaultValue: !1,
                description: "Split adjacent blockquote blocks",
                type: "boolean"
            }
        };
        if (!1 === e) return JSON.parse(JSON.stringify(t));
        var n = {};
        for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r].defaultValue);
        return n
    }

    function t(e, t) {
        "use strict";
        var n = t ? "Error in " + t + " extension->" : "Error in unnamed extension",
            i = {
                valid: !0,
                error: ""
            };
        r.helper.isArray(e) || (e = [e]);
        for (var o = 0; o < e.length; ++o) {
            var a = n + " sub-extension " + o + ": ",
                s = e[o];
            if ("object" != typeof s) return i.valid = !1, i.error = a + "must be an object, but " + typeof s + " given", i;
            if (!r.helper.isString(s.type)) return i.valid = !1, i.error = a + 'property "type" must be a string, but ' + typeof s.type + " given", i;
            var u = s.type = s.type.toLowerCase();
            if ("language" === u && (u = s.type = "lang"), "html" === u && (u = s.type = "output"), "lang" !== u && "output" !== u && "listener" !== u) return i.valid = !1, i.error = a + "type " + u + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', i;
            if ("listener" === u) {
                if (r.helper.isUndefined(s.listeners)) return i.valid = !1, i.error = a + '. Extensions of type "listener" must have a property called "listeners"', i
            } else if (r.helper.isUndefined(s.filter) && r.helper.isUndefined(s.regex)) return i.valid = !1, i.error = a + u + ' extensions must define either a "regex" property or a "filter" method', i;
            if (s.listeners) {
                if ("object" != typeof s.listeners) return i.valid = !1, i.error = a + '"listeners" property must be an object but ' + typeof s.listeners + " given", i;
                for (var c in s.listeners)
                    if (s.listeners.hasOwnProperty(c) && "function" != typeof s.listeners[c]) return i.valid = !1, i.error = a + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + c + " must be a function but " + typeof s.listeners[c] + " given", i
            }
            if (s.filter) {
                if ("function" != typeof s.filter) return i.valid = !1, i.error = a + '"filter" must be a function, but ' + typeof s.filter + " given", i
            } else if (s.regex) {
                if (r.helper.isString(s.regex) && (s.regex = new RegExp(s.regex, "g")), !(s.regex instanceof RegExp)) return i.valid = !1, i.error = a + '"regex" property must either be a string or a RegExp object, but ' + typeof s.regex + " given", i;
                if (r.helper.isUndefined(s.replace)) return i.valid = !1, i.error = a + '"regex" extensions must implement a replace string or function', i
            }
        }
        return i
    }

    function n(e, t) {
        "use strict";
        return "¨E" + t.charCodeAt(0) + "E"
    }
    var r = {},
        i = {},
        o = {},
        a = e(!0),
        s = "vanilla",
        u = {
            github: {
                omitExtraWLInCodeBlocks: !0,
                simplifiedAutoLink: !0,
                excludeTrailingPunctuationFromURLs: !0,
                literalMidWordUnderscores: !0,
                strikethrough: !0,
                tables: !0,
                tablesHeaderId: !0,
                ghCodeBlocks: !0,
                tasklists: !0,
                disableForced4SpacesIndentedSublists: !0,
                simpleLineBreaks: !0,
                requireSpaceBeforeHeadingText: !0,
                ghCompatibleHeaderId: !0,
                ghMentions: !0,
                backslashEscapesHTMLTags: !0,
                emoji: !0,
                splitAdjacentBlockquotes: !0
            },
            original: {
                noHeaderId: !0,
                ghCodeBlocks: !1
            },
            ghost: {
                omitExtraWLInCodeBlocks: !0,
                parseImgDimensions: !0,
                simplifiedAutoLink: !0,
                excludeTrailingPunctuationFromURLs: !0,
                literalMidWordUnderscores: !0,
                strikethrough: !0,
                tables: !0,
                tablesHeaderId: !0,
                ghCodeBlocks: !0,
                tasklists: !0,
                smoothLivePreview: !0,
                simpleLineBreaks: !0,
                requireSpaceBeforeHeadingText: !0,
                ghMentions: !1,
                encodeEmails: !0
            },
            vanilla: e(!0),
            allOn: function() {
                "use strict";
                var t = e(!0),
                    n = {};
                for (var r in t) t.hasOwnProperty(r) && (n[r] = !0);
                return n
            }()
        };
    r.helper = {}, r.extensions = {}, r.setOption = function(e, t) {
        "use strict";
        return a[e] = t, this
    }, r.getOption = function(e) {
        "use strict";
        return a[e]
    }, r.getOptions = function() {
        "use strict";
        return a
    }, r.resetOptions = function() {
        "use strict";
        a = e(!0)
    }, r.setFlavor = function(e) {
        "use strict";
        if (!u.hasOwnProperty(e)) throw Error(e + " flavor was not found");
        r.resetOptions();
        var t = u[e];
        for (var n in s = e, t) t.hasOwnProperty(n) && (a[n] = t[n])
    }, r.getFlavor = function() {
        "use strict";
        return s
    }, r.getFlavorOptions = function(e) {
        "use strict";
        if (u.hasOwnProperty(e)) return u[e]
    }, r.getDefaultOptions = function(t) {
        "use strict";
        return e(t)
    }, r.subParser = function(e, t) {
        "use strict";
        if (r.helper.isString(e)) {
            if (void 0 === t) {
                if (i.hasOwnProperty(e)) return i[e];
                throw Error("SubParser named " + e + " not registered!")
            }
            i[e] = t
        }
    }, r.extension = function(e, n) {
        "use strict";
        if (!r.helper.isString(e)) throw Error("Extension 'name' must be a string");
        if (e = r.helper.stdExtName(e), r.helper.isUndefined(n)) {
            if (!o.hasOwnProperty(e)) throw Error("Extension named " + e + " is not registered!");
            return o[e]
        }
        "function" == typeof n && (n = n()), r.helper.isArray(n) || (n = [n]);
        var i = t(n, e);
        if (!i.valid) throw Error(i.error);
        o[e] = n
    }, r.getAllExtensions = function() {
        "use strict";
        return o
    }, r.removeExtension = function(e) {
        "use strict";
        delete o[e]
    }, r.resetExtensions = function() {
        "use strict";
        o = {}
    }, r.validateExtension = function(e) {
        "use strict";
        var n = t(e, null);
        return !!n.valid || (console.warn(n.error), !1)
    }, r.hasOwnProperty("helper") || (r.helper = {}), r.helper.isString = function(e) {
        "use strict";
        return "string" == typeof e || e instanceof String
    }, r.helper.isFunction = function(e) {
        "use strict";
        return e && "[object Function]" === {}.toString.call(e)
    }, r.helper.isArray = function(e) {
        "use strict";
        return Array.isArray(e)
    }, r.helper.isUndefined = function(e) {
        "use strict";
        return void 0 === e
    }, r.helper.forEach = function(e, t) {
        "use strict";
        if (r.helper.isUndefined(e)) throw new Error("obj param is required");
        if (r.helper.isUndefined(t)) throw new Error("callback param is required");
        if (!r.helper.isFunction(t)) throw new Error("callback param must be a function/closure");
        if ("function" == typeof e.forEach) e.forEach(t);
        else if (r.helper.isArray(e))
            for (var n = 0; n < e.length; n++) t(e[n], n, e);
        else {
            if ("object" != typeof e) throw new Error("obj does not seem to be an array or an iterable object");
            for (var i in e) e.hasOwnProperty(i) && t(e[i], i, e)
        }
    }, r.helper.stdExtName = function(e) {
        "use strict";
        return e.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase()
    }, r.helper.escapeCharactersCallback = n, r.helper.escapeCharacters = function(e, t, r) {
        "use strict";
        var i = "([" + t.replace(/([\[\]\\])/g, "\\$1") + "])";
        r && (i = "\\\\" + i);
        var o = new RegExp(i, "g");
        return e.replace(o, n)
    }, r.helper.unescapeHTMLEntities = function(e) {
        "use strict";
        return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
    };
    var c = function(e, t, n, r) {
        "use strict";
        var i, o, a, s, u, c = r || "",
            l = c.indexOf("g") > -1,
            h = new RegExp(t + "|" + n, "g" + c.replace(/g/g, "")),
            d = new RegExp(t, c.replace(/g/g, "")),
            p = [];
        do {
            for (i = 0; a = h.exec(e);)
                if (d.test(a[0])) i++ || (s = (o = h.lastIndex) - a[0].length);
                else if (i && !--i) {
                u = a.index + a[0].length;
                var f = {
                    left: {
                        start: s,
                        end: o
                    },
                    match: {
                        start: o,
                        end: a.index
                    },
                    right: {
                        start: a.index,
                        end: u
                    },
                    wholeMatch: {
                        start: s,
                        end: u
                    }
                };
                if (p.push(f), !l) return p
            }
        } while (i && (h.lastIndex = o));
        return p
    };
    r.helper.matchRecursiveRegExp = function(e, t, n, r) {
        "use strict";
        for (var i = c(e, t, n, r), o = [], a = 0; a < i.length; ++a) o.push([e.slice(i[a].wholeMatch.start, i[a].wholeMatch.end), e.slice(i[a].match.start, i[a].match.end), e.slice(i[a].left.start, i[a].left.end), e.slice(i[a].right.start, i[a].right.end)]);
        return o
    }, r.helper.replaceRecursiveRegExp = function(e, t, n, i, o) {
        "use strict";
        if (!r.helper.isFunction(t)) {
            var a = t;
            t = function() {
                return a
            }
        }
        var s = c(e, n, i, o),
            u = e,
            l = s.length;
        if (l > 0) {
            var h = [];
            0 !== s[0].wholeMatch.start && h.push(e.slice(0, s[0].wholeMatch.start));
            for (var d = 0; d < l; ++d) h.push(t(e.slice(s[d].wholeMatch.start, s[d].wholeMatch.end), e.slice(s[d].match.start, s[d].match.end), e.slice(s[d].left.start, s[d].left.end), e.slice(s[d].right.start, s[d].right.end))), d < l - 1 && h.push(e.slice(s[d].wholeMatch.end, s[d + 1].wholeMatch.start));
            s[l - 1].wholeMatch.end < e.length && h.push(e.slice(s[l - 1].wholeMatch.end)), u = h.join("")
        }
        return u
    }, r.helper.regexIndexOf = function(e, t, n) {
        "use strict";
        if (!r.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        if (t instanceof RegExp == 0) throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        var i = e.substring(n || 0).search(t);
        return i >= 0 ? i + (n || 0) : i
    }, r.helper.splitAtIndex = function(e, t) {
        "use strict";
        if (!r.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        return [e.substring(0, t), e.substring(t)]
    }, r.helper.encodeEmailAddress = function(e) {
        "use strict";
        var t = [function(e) {
            return "&#" + e.charCodeAt(0) + ";"
        }, function(e) {
            return "&#x" + e.charCodeAt(0).toString(16) + ";"
        }, function(e) {
            return e
        }];
        return e.replace(/./g, (function(e) {
            if ("@" === e) e = t[Math.floor(2 * Math.random())](e);
            else {
                var n = Math.random();
                e = n > .9 ? t[2](e) : n > .45 ? t[1](e) : t[0](e)
            }
            return e
        }))
    }, r.helper.padEnd = function(e, t, n) {
        "use strict";
        return t >>= 0, n = String(n || " "), e.length > t ? String(e) : ((t -= e.length) > n.length && (n += n.repeat(t / n.length)), String(e) + n.slice(0, t))
    }, "undefined" == typeof console && (console = {
        warn: function(e) {
            "use strict";
            alert(e)
        },
        log: function(e) {
            "use strict";
            alert(e)
        },
        error: function(e) {
            "use strict";
            throw e
        }
    }), r.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
    }, r.helper.emojis = {
        "+1": "👍",
        "-1": "👎",
        100: "💯",
        1234: "🔢",
        "1st_place_medal": "🥇",
        "2nd_place_medal": "🥈",
        "3rd_place_medal": "🥉",
        "8ball": "🎱",
        a: "🅰️",
        ab: "🆎",
        abc: "🔤",
        abcd: "🔡",
        accept: "🉑",
        aerial_tramway: "🚡",
        airplane: "✈️",
        alarm_clock: "⏰",
        alembic: "⚗️",
        alien: "👽",
        ambulance: "🚑",
        amphora: "🏺",
        anchor: "⚓️",
        angel: "👼",
        anger: "💢",
        angry: "😠",
        anguished: "😧",
        ant: "🐜",
        apple: "🍎",
        aquarius: "♒️",
        aries: "♈️",
        arrow_backward: "◀️",
        arrow_double_down: "⏬",
        arrow_double_up: "⏫",
        arrow_down: "⬇️",
        arrow_down_small: "🔽",
        arrow_forward: "▶️",
        arrow_heading_down: "⤵️",
        arrow_heading_up: "⤴️",
        arrow_left: "⬅️",
        arrow_lower_left: "↙️",
        arrow_lower_right: "↘️",
        arrow_right: "➡️",
        arrow_right_hook: "↪️",
        arrow_up: "⬆️",
        arrow_up_down: "↕️",
        arrow_up_small: "🔼",
        arrow_upper_left: "↖️",
        arrow_upper_right: "↗️",
        arrows_clockwise: "🔃",
        arrows_counterclockwise: "🔄",
        art: "🎨",
        articulated_lorry: "🚛",
        artificial_satellite: "🛰",
        astonished: "😲",
        athletic_shoe: "👟",
        atm: "🏧",
        atom_symbol: "⚛️",
        avocado: "🥑",
        b: "🅱️",
        baby: "👶",
        baby_bottle: "🍼",
        baby_chick: "🐤",
        baby_symbol: "🚼",
        back: "🔙",
        bacon: "🥓",
        badminton: "🏸",
        baggage_claim: "🛄",
        baguette_bread: "🥖",
        balance_scale: "⚖️",
        balloon: "🎈",
        ballot_box: "🗳",
        ballot_box_with_check: "☑️",
        bamboo: "🎍",
        banana: "🍌",
        bangbang: "‼️",
        bank: "🏦",
        bar_chart: "📊",
        barber: "💈",
        baseball: "⚾️",
        basketball: "🏀",
        basketball_man: "⛹️",
        basketball_woman: "⛹️&zwj;♀️",
        bat: "🦇",
        bath: "🛀",
        bathtub: "🛁",
        battery: "🔋",
        beach_umbrella: "🏖",
        bear: "🐻",
        bed: "🛏",
        bee: "🐝",
        beer: "🍺",
        beers: "🍻",
        beetle: "🐞",
        beginner: "🔰",
        bell: "🔔",
        bellhop_bell: "🛎",
        bento: "🍱",
        biking_man: "🚴",
        bike: "🚲",
        biking_woman: "🚴&zwj;♀️",
        bikini: "👙",
        biohazard: "☣️",
        bird: "🐦",
        birthday: "🎂",
        black_circle: "⚫️",
        black_flag: "🏴",
        black_heart: "🖤",
        black_joker: "🃏",
        black_large_square: "⬛️",
        black_medium_small_square: "◾️",
        black_medium_square: "◼️",
        black_nib: "✒️",
        black_small_square: "▪️",
        black_square_button: "🔲",
        blonde_man: "👱",
        blonde_woman: "👱&zwj;♀️",
        blossom: "🌼",
        blowfish: "🐡",
        blue_book: "📘",
        blue_car: "🚙",
        blue_heart: "💙",
        blush: "😊",
        boar: "🐗",
        boat: "⛵️",
        bomb: "💣",
        book: "📖",
        bookmark: "🔖",
        bookmark_tabs: "📑",
        books: "📚",
        boom: "💥",
        boot: "👢",
        bouquet: "💐",
        bowing_man: "🙇",
        bow_and_arrow: "🏹",
        bowing_woman: "🙇&zwj;♀️",
        bowling: "🎳",
        boxing_glove: "🥊",
        boy: "👦",
        bread: "🍞",
        bride_with_veil: "👰",
        bridge_at_night: "🌉",
        briefcase: "💼",
        broken_heart: "💔",
        bug: "🐛",
        building_construction: "🏗",
        bulb: "💡",
        bullettrain_front: "🚅",
        bullettrain_side: "🚄",
        burrito: "🌯",
        bus: "🚌",
        business_suit_levitating: "🕴",
        busstop: "🚏",
        bust_in_silhouette: "👤",
        busts_in_silhouette: "👥",
        butterfly: "🦋",
        cactus: "🌵",
        cake: "🍰",
        calendar: "📆",
        call_me_hand: "🤙",
        calling: "📲",
        camel: "🐫",
        camera: "📷",
        camera_flash: "📸",
        camping: "🏕",
        cancer: "♋️",
        candle: "🕯",
        candy: "🍬",
        canoe: "🛶",
        capital_abcd: "🔠",
        capricorn: "♑️",
        car: "🚗",
        card_file_box: "🗃",
        card_index: "📇",
        card_index_dividers: "🗂",
        carousel_horse: "🎠",
        carrot: "🥕",
        cat: "🐱",
        cat2: "🐈",
        cd: "💿",
        chains: "⛓",
        champagne: "🍾",
        chart: "💹",
        chart_with_downwards_trend: "📉",
        chart_with_upwards_trend: "📈",
        checkered_flag: "🏁",
        cheese: "🧀",
        cherries: "🍒",
        cherry_blossom: "🌸",
        chestnut: "🌰",
        chicken: "🐔",
        children_crossing: "🚸",
        chipmunk: "🐿",
        chocolate_bar: "🍫",
        christmas_tree: "🎄",
        church: "⛪️",
        cinema: "🎦",
        circus_tent: "🎪",
        city_sunrise: "🌇",
        city_sunset: "🌆",
        cityscape: "🏙",
        cl: "🆑",
        clamp: "🗜",
        clap: "👏",
        clapper: "🎬",
        classical_building: "🏛",
        clinking_glasses: "🥂",
        clipboard: "📋",
        clock1: "🕐",
        clock10: "🕙",
        clock1030: "🕥",
        clock11: "🕚",
        clock1130: "🕦",
        clock12: "🕛",
        clock1230: "🕧",
        clock130: "🕜",
        clock2: "🕑",
        clock230: "🕝",
        clock3: "🕒",
        clock330: "🕞",
        clock4: "🕓",
        clock430: "🕟",
        clock5: "🕔",
        clock530: "🕠",
        clock6: "🕕",
        clock630: "🕡",
        clock7: "🕖",
        clock730: "🕢",
        clock8: "🕗",
        clock830: "🕣",
        clock9: "🕘",
        clock930: "🕤",
        closed_book: "📕",
        closed_lock_with_key: "🔐",
        closed_umbrella: "🌂",
        cloud: "☁️",
        cloud_with_lightning: "🌩",
        cloud_with_lightning_and_rain: "⛈",
        cloud_with_rain: "🌧",
        cloud_with_snow: "🌨",
        clown_face: "🤡",
        clubs: "♣️",
        cocktail: "🍸",
        coffee: "☕️",
        coffin: "⚰️",
        cold_sweat: "😰",
        comet: "☄️",
        computer: "💻",
        computer_mouse: "🖱",
        confetti_ball: "🎊",
        confounded: "😖",
        confused: "😕",
        congratulations: "㊗️",
        construction: "🚧",
        construction_worker_man: "👷",
        construction_worker_woman: "👷&zwj;♀️",
        control_knobs: "🎛",
        convenience_store: "🏪",
        cookie: "🍪",
        cool: "🆒",
        policeman: "👮",
        copyright: "©️",
        corn: "🌽",
        couch_and_lamp: "🛋",
        couple: "👫",
        couple_with_heart_woman_man: "💑",
        couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
        couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
        couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
        couplekiss_man_woman: "💏",
        couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
        cow: "🐮",
        cow2: "🐄",
        cowboy_hat_face: "🤠",
        crab: "🦀",
        crayon: "🖍",
        credit_card: "💳",
        crescent_moon: "🌙",
        cricket: "🏏",
        crocodile: "🐊",
        croissant: "🥐",
        crossed_fingers: "🤞",
        crossed_flags: "🎌",
        crossed_swords: "⚔️",
        crown: "👑",
        cry: "😢",
        crying_cat_face: "😿",
        crystal_ball: "🔮",
        cucumber: "🥒",
        cupid: "💘",
        curly_loop: "➰",
        currency_exchange: "💱",
        curry: "🍛",
        custard: "🍮",
        customs: "🛃",
        cyclone: "🌀",
        dagger: "🗡",
        dancer: "💃",
        dancing_women: "👯",
        dancing_men: "👯&zwj;♂️",
        dango: "🍡",
        dark_sunglasses: "🕶",
        dart: "🎯",
        dash: "💨",
        date: "📅",
        deciduous_tree: "🌳",
        deer: "🦌",
        department_store: "🏬",
        derelict_house: "🏚",
        desert: "🏜",
        desert_island: "🏝",
        desktop_computer: "🖥",
        male_detective: "🕵️",
        diamond_shape_with_a_dot_inside: "💠",
        diamonds: "♦️",
        disappointed: "😞",
        disappointed_relieved: "😥",
        dizzy: "💫",
        dizzy_face: "😵",
        do_not_litter: "🚯",
        dog: "🐶",
        dog2: "🐕",
        dollar: "💵",
        dolls: "🎎",
        dolphin: "🐬",
        door: "🚪",
        doughnut: "🍩",
        dove: "🕊",
        dragon: "🐉",
        dragon_face: "🐲",
        dress: "👗",
        dromedary_camel: "🐪",
        drooling_face: "🤤",
        droplet: "💧",
        drum: "🥁",
        duck: "🦆",
        dvd: "📀",
        "e-mail": "📧",
        eagle: "🦅",
        ear: "👂",
        ear_of_rice: "🌾",
        earth_africa: "🌍",
        earth_americas: "🌎",
        earth_asia: "🌏",
        egg: "🥚",
        eggplant: "🍆",
        eight_pointed_black_star: "✴️",
        eight_spoked_asterisk: "✳️",
        electric_plug: "🔌",
        elephant: "🐘",
        email: "✉️",
        end: "🔚",
        envelope_with_arrow: "📩",
        euro: "💶",
        european_castle: "🏰",
        european_post_office: "🏤",
        evergreen_tree: "🌲",
        exclamation: "❗️",
        expressionless: "😑",
        eye: "👁",
        eye_speech_bubble: "👁&zwj;🗨",
        eyeglasses: "👓",
        eyes: "👀",
        face_with_head_bandage: "🤕",
        face_with_thermometer: "🤒",
        fist_oncoming: "👊",
        factory: "🏭",
        fallen_leaf: "🍂",
        family_man_woman_boy: "👪",
        family_man_boy: "👨&zwj;👦",
        family_man_boy_boy: "👨&zwj;👦&zwj;👦",
        family_man_girl: "👨&zwj;👧",
        family_man_girl_boy: "👨&zwj;👧&zwj;👦",
        family_man_girl_girl: "👨&zwj;👧&zwj;👧",
        family_man_man_boy: "👨&zwj;👨&zwj;👦",
        family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
        family_man_man_girl: "👨&zwj;👨&zwj;👧",
        family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
        family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
        family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
        family_man_woman_girl: "👨&zwj;👩&zwj;👧",
        family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
        family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
        family_woman_boy: "👩&zwj;👦",
        family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
        family_woman_girl: "👩&zwj;👧",
        family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
        family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
        family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
        family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
        family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
        family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
        family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
        fast_forward: "⏩",
        fax: "📠",
        fearful: "😨",
        feet: "🐾",
        female_detective: "🕵️&zwj;♀️",
        ferris_wheel: "🎡",
        ferry: "⛴",
        field_hockey: "🏑",
        file_cabinet: "🗄",
        file_folder: "📁",
        film_projector: "📽",
        film_strip: "🎞",
        fire: "🔥",
        fire_engine: "🚒",
        fireworks: "🎆",
        first_quarter_moon: "🌓",
        first_quarter_moon_with_face: "🌛",
        fish: "🐟",
        fish_cake: "🍥",
        fishing_pole_and_fish: "🎣",
        fist_raised: "✊",
        fist_left: "🤛",
        fist_right: "🤜",
        flags: "🎏",
        flashlight: "🔦",
        fleur_de_lis: "⚜️",
        flight_arrival: "🛬",
        flight_departure: "🛫",
        floppy_disk: "💾",
        flower_playing_cards: "🎴",
        flushed: "😳",
        fog: "🌫",
        foggy: "🌁",
        football: "🏈",
        footprints: "👣",
        fork_and_knife: "🍴",
        fountain: "⛲️",
        fountain_pen: "🖋",
        four_leaf_clover: "🍀",
        fox_face: "🦊",
        framed_picture: "🖼",
        free: "🆓",
        fried_egg: "🍳",
        fried_shrimp: "🍤",
        fries: "🍟",
        frog: "🐸",
        frowning: "😦",
        frowning_face: "☹️",
        frowning_man: "🙍&zwj;♂️",
        frowning_woman: "🙍",
        middle_finger: "🖕",
        fuelpump: "⛽️",
        full_moon: "🌕",
        full_moon_with_face: "🌝",
        funeral_urn: "⚱️",
        game_die: "🎲",
        gear: "⚙️",
        gem: "💎",
        gemini: "♊️",
        ghost: "👻",
        gift: "🎁",
        gift_heart: "💝",
        girl: "👧",
        globe_with_meridians: "🌐",
        goal_net: "🥅",
        goat: "🐐",
        golf: "⛳️",
        golfing_man: "🏌️",
        golfing_woman: "🏌️&zwj;♀️",
        gorilla: "🦍",
        grapes: "🍇",
        green_apple: "🍏",
        green_book: "📗",
        green_heart: "💚",
        green_salad: "🥗",
        grey_exclamation: "❕",
        grey_question: "❔",
        grimacing: "😬",
        grin: "😁",
        grinning: "😀",
        guardsman: "💂",
        guardswoman: "💂&zwj;♀️",
        guitar: "🎸",
        gun: "🔫",
        haircut_woman: "💇",
        haircut_man: "💇&zwj;♂️",
        hamburger: "🍔",
        hammer: "🔨",
        hammer_and_pick: "⚒",
        hammer_and_wrench: "🛠",
        hamster: "🐹",
        hand: "✋",
        handbag: "👜",
        handshake: "🤝",
        hankey: "💩",
        hatched_chick: "🐥",
        hatching_chick: "🐣",
        headphones: "🎧",
        hear_no_evil: "🙉",
        heart: "❤️",
        heart_decoration: "💟",
        heart_eyes: "😍",
        heart_eyes_cat: "😻",
        heartbeat: "💓",
        heartpulse: "💗",
        hearts: "♥️",
        heavy_check_mark: "✔️",
        heavy_division_sign: "➗",
        heavy_dollar_sign: "💲",
        heavy_heart_exclamation: "❣️",
        heavy_minus_sign: "➖",
        heavy_multiplication_x: "✖️",
        heavy_plus_sign: "➕",
        helicopter: "🚁",
        herb: "🌿",
        hibiscus: "🌺",
        high_brightness: "🔆",
        high_heel: "👠",
        hocho: "🔪",
        hole: "🕳",
        honey_pot: "🍯",
        horse: "🐴",
        horse_racing: "🏇",
        hospital: "🏥",
        hot_pepper: "🌶",
        hotdog: "🌭",
        hotel: "🏨",
        hotsprings: "♨️",
        hourglass: "⌛️",
        hourglass_flowing_sand: "⏳",
        house: "🏠",
        house_with_garden: "🏡",
        houses: "🏘",
        hugs: "🤗",
        hushed: "😯",
        ice_cream: "🍨",
        ice_hockey: "🏒",
        ice_skate: "⛸",
        icecream: "🍦",
        id: "🆔",
        ideograph_advantage: "🉐",
        imp: "👿",
        inbox_tray: "📥",
        incoming_envelope: "📨",
        tipping_hand_woman: "💁",
        information_source: "ℹ️",
        innocent: "😇",
        interrobang: "⁉️",
        iphone: "📱",
        izakaya_lantern: "🏮",
        jack_o_lantern: "🎃",
        japan: "🗾",
        japanese_castle: "🏯",
        japanese_goblin: "👺",
        japanese_ogre: "👹",
        jeans: "👖",
        joy: "😂",
        joy_cat: "😹",
        joystick: "🕹",
        kaaba: "🕋",
        key: "🔑",
        keyboard: "⌨️",
        keycap_ten: "🔟",
        kick_scooter: "🛴",
        kimono: "👘",
        kiss: "💋",
        kissing: "😗",
        kissing_cat: "😽",
        kissing_closed_eyes: "😚",
        kissing_heart: "😘",
        kissing_smiling_eyes: "😙",
        kiwi_fruit: "🥝",
        koala: "🐨",
        koko: "🈁",
        label: "🏷",
        large_blue_circle: "🔵",
        large_blue_diamond: "🔷",
        large_orange_diamond: "🔶",
        last_quarter_moon: "🌗",
        last_quarter_moon_with_face: "🌜",
        latin_cross: "✝️",
        laughing: "😆",
        leaves: "🍃",
        ledger: "📒",
        left_luggage: "🛅",
        left_right_arrow: "↔️",
        leftwards_arrow_with_hook: "↩️",
        lemon: "🍋",
        leo: "♌️",
        leopard: "🐆",
        level_slider: "🎚",
        libra: "♎️",
        light_rail: "🚈",
        link: "🔗",
        lion: "🦁",
        lips: "👄",
        lipstick: "💄",
        lizard: "🦎",
        lock: "🔒",
        lock_with_ink_pen: "🔏",
        lollipop: "🍭",
        loop: "➿",
        loud_sound: "🔊",
        loudspeaker: "📢",
        love_hotel: "🏩",
        love_letter: "💌",
        low_brightness: "🔅",
        lying_face: "🤥",
        m: "Ⓜ️",
        mag: "🔍",
        mag_right: "🔎",
        mahjong: "🀄️",
        mailbox: "📫",
        mailbox_closed: "📪",
        mailbox_with_mail: "📬",
        mailbox_with_no_mail: "📭",
        man: "👨",
        man_artist: "👨&zwj;🎨",
        man_astronaut: "👨&zwj;🚀",
        man_cartwheeling: "🤸&zwj;♂️",
        man_cook: "👨&zwj;🍳",
        man_dancing: "🕺",
        man_facepalming: "🤦&zwj;♂️",
        man_factory_worker: "👨&zwj;🏭",
        man_farmer: "👨&zwj;🌾",
        man_firefighter: "👨&zwj;🚒",
        man_health_worker: "👨&zwj;⚕️",
        man_in_tuxedo: "🤵",
        man_judge: "👨&zwj;⚖️",
        man_juggling: "🤹&zwj;♂️",
        man_mechanic: "👨&zwj;🔧",
        man_office_worker: "👨&zwj;💼",
        man_pilot: "👨&zwj;✈️",
        man_playing_handball: "🤾&zwj;♂️",
        man_playing_water_polo: "🤽&zwj;♂️",
        man_scientist: "👨&zwj;🔬",
        man_shrugging: "🤷&zwj;♂️",
        man_singer: "👨&zwj;🎤",
        man_student: "👨&zwj;🎓",
        man_teacher: "👨&zwj;🏫",
        man_technologist: "👨&zwj;💻",
        man_with_gua_pi_mao: "👲",
        man_with_turban: "👳",
        tangerine: "🍊",
        mans_shoe: "👞",
        mantelpiece_clock: "🕰",
        maple_leaf: "🍁",
        martial_arts_uniform: "🥋",
        mask: "😷",
        massage_woman: "💆",
        massage_man: "💆&zwj;♂️",
        meat_on_bone: "🍖",
        medal_military: "🎖",
        medal_sports: "🏅",
        mega: "📣",
        melon: "🍈",
        memo: "📝",
        men_wrestling: "🤼&zwj;♂️",
        menorah: "🕎",
        mens: "🚹",
        metal: "🤘",
        metro: "🚇",
        microphone: "🎤",
        microscope: "🔬",
        milk_glass: "🥛",
        milky_way: "🌌",
        minibus: "🚐",
        minidisc: "💽",
        mobile_phone_off: "📴",
        money_mouth_face: "🤑",
        money_with_wings: "💸",
        moneybag: "💰",
        monkey: "🐒",
        monkey_face: "🐵",
        monorail: "🚝",
        moon: "🌔",
        mortar_board: "🎓",
        mosque: "🕌",
        motor_boat: "🛥",
        motor_scooter: "🛵",
        motorcycle: "🏍",
        motorway: "🛣",
        mount_fuji: "🗻",
        mountain: "⛰",
        mountain_biking_man: "🚵",
        mountain_biking_woman: "🚵&zwj;♀️",
        mountain_cableway: "🚠",
        mountain_railway: "🚞",
        mountain_snow: "🏔",
        mouse: "🐭",
        mouse2: "🐁",
        movie_camera: "🎥",
        moyai: "🗿",
        mrs_claus: "🤶",
        muscle: "💪",
        mushroom: "🍄",
        musical_keyboard: "🎹",
        musical_note: "🎵",
        musical_score: "🎼",
        mute: "🔇",
        nail_care: "💅",
        name_badge: "📛",
        national_park: "🏞",
        nauseated_face: "🤢",
        necktie: "👔",
        negative_squared_cross_mark: "❎",
        nerd_face: "🤓",
        neutral_face: "😐",
        new: "🆕",
        new_moon: "🌑",
        new_moon_with_face: "🌚",
        newspaper: "📰",
        newspaper_roll: "🗞",
        next_track_button: "⏭",
        ng: "🆖",
        no_good_man: "🙅&zwj;♂️",
        no_good_woman: "🙅",
        night_with_stars: "🌃",
        no_bell: "🔕",
        no_bicycles: "🚳",
        no_entry: "⛔️",
        no_entry_sign: "🚫",
        no_mobile_phones: "📵",
        no_mouth: "😶",
        no_pedestrians: "🚷",
        no_smoking: "🚭",
        "non-potable_water": "🚱",
        nose: "👃",
        notebook: "📓",
        notebook_with_decorative_cover: "📔",
        notes: "🎶",
        nut_and_bolt: "🔩",
        o: "⭕️",
        o2: "🅾️",
        ocean: "🌊",
        octopus: "🐙",
        oden: "🍢",
        office: "🏢",
        oil_drum: "🛢",
        ok: "🆗",
        ok_hand: "👌",
        ok_man: "🙆&zwj;♂️",
        ok_woman: "🙆",
        old_key: "🗝",
        older_man: "👴",
        older_woman: "👵",
        om: "🕉",
        on: "🔛",
        oncoming_automobile: "🚘",
        oncoming_bus: "🚍",
        oncoming_police_car: "🚔",
        oncoming_taxi: "🚖",
        open_file_folder: "📂",
        open_hands: "👐",
        open_mouth: "😮",
        open_umbrella: "☂️",
        ophiuchus: "⛎",
        orange_book: "📙",
        orthodox_cross: "☦️",
        outbox_tray: "📤",
        owl: "🦉",
        ox: "🐂",
        package: "📦",
        page_facing_up: "📄",
        page_with_curl: "📃",
        pager: "📟",
        paintbrush: "🖌",
        palm_tree: "🌴",
        pancakes: "🥞",
        panda_face: "🐼",
        paperclip: "📎",
        paperclips: "🖇",
        parasol_on_ground: "⛱",
        parking: "🅿️",
        part_alternation_mark: "〽️",
        partly_sunny: "⛅️",
        passenger_ship: "🛳",
        passport_control: "🛂",
        pause_button: "⏸",
        peace_symbol: "☮️",
        peach: "🍑",
        peanuts: "🥜",
        pear: "🍐",
        pen: "🖊",
        pencil2: "✏️",
        penguin: "🐧",
        pensive: "😔",
        performing_arts: "🎭",
        persevere: "😣",
        person_fencing: "🤺",
        pouting_woman: "🙎",
        phone: "☎️",
        pick: "⛏",
        pig: "🐷",
        pig2: "🐖",
        pig_nose: "🐽",
        pill: "💊",
        pineapple: "🍍",
        ping_pong: "🏓",
        pisces: "♓️",
        pizza: "🍕",
        place_of_worship: "🛐",
        plate_with_cutlery: "🍽",
        play_or_pause_button: "⏯",
        point_down: "👇",
        point_left: "👈",
        point_right: "👉",
        point_up: "☝️",
        point_up_2: "👆",
        police_car: "🚓",
        policewoman: "👮&zwj;♀️",
        poodle: "🐩",
        popcorn: "🍿",
        post_office: "🏣",
        postal_horn: "📯",
        postbox: "📮",
        potable_water: "🚰",
        potato: "🥔",
        pouch: "👝",
        poultry_leg: "🍗",
        pound: "💷",
        rage: "😡",
        pouting_cat: "😾",
        pouting_man: "🙎&zwj;♂️",
        pray: "🙏",
        prayer_beads: "📿",
        pregnant_woman: "🤰",
        previous_track_button: "⏮",
        prince: "🤴",
        princess: "👸",
        printer: "🖨",
        purple_heart: "💜",
        purse: "👛",
        pushpin: "📌",
        put_litter_in_its_place: "🚮",
        question: "❓",
        rabbit: "🐰",
        rabbit2: "🐇",
        racehorse: "🐎",
        racing_car: "🏎",
        radio: "📻",
        radio_button: "🔘",
        radioactive: "☢️",
        railway_car: "🚃",
        railway_track: "🛤",
        rainbow: "🌈",
        rainbow_flag: "🏳️&zwj;🌈",
        raised_back_of_hand: "🤚",
        raised_hand_with_fingers_splayed: "🖐",
        raised_hands: "🙌",
        raising_hand_woman: "🙋",
        raising_hand_man: "🙋&zwj;♂️",
        ram: "🐏",
        ramen: "🍜",
        rat: "🐀",
        record_button: "⏺",
        recycle: "♻️",
        red_circle: "🔴",
        registered: "®️",
        relaxed: "☺️",
        relieved: "😌",
        reminder_ribbon: "🎗",
        repeat: "🔁",
        repeat_one: "🔂",
        rescue_worker_helmet: "⛑",
        restroom: "🚻",
        revolving_hearts: "💞",
        rewind: "⏪",
        rhinoceros: "🦏",
        ribbon: "🎀",
        rice: "🍚",
        rice_ball: "🍙",
        rice_cracker: "🍘",
        rice_scene: "🎑",
        right_anger_bubble: "🗯",
        ring: "💍",
        robot: "🤖",
        rocket: "🚀",
        rofl: "🤣",
        roll_eyes: "🙄",
        roller_coaster: "🎢",
        rooster: "🐓",
        rose: "🌹",
        rosette: "🏵",
        rotating_light: "🚨",
        round_pushpin: "📍",
        rowing_man: "🚣",
        rowing_woman: "🚣&zwj;♀️",
        rugby_football: "🏉",
        running_man: "🏃",
        running_shirt_with_sash: "🎽",
        running_woman: "🏃&zwj;♀️",
        sa: "🈂️",
        sagittarius: "♐️",
        sake: "🍶",
        sandal: "👡",
        santa: "🎅",
        satellite: "📡",
        saxophone: "🎷",
        school: "🏫",
        school_satchel: "🎒",
        scissors: "✂️",
        scorpion: "🦂",
        scorpius: "♏️",
        scream: "😱",
        scream_cat: "🙀",
        scroll: "📜",
        seat: "💺",
        secret: "㊙️",
        see_no_evil: "🙈",
        seedling: "🌱",
        selfie: "🤳",
        shallow_pan_of_food: "🥘",
        shamrock: "☘️",
        shark: "🦈",
        shaved_ice: "🍧",
        sheep: "🐑",
        shell: "🐚",
        shield: "🛡",
        shinto_shrine: "⛩",
        ship: "🚢",
        shirt: "👕",
        shopping: "🛍",
        shopping_cart: "🛒",
        shower: "🚿",
        shrimp: "🦐",
        signal_strength: "📶",
        six_pointed_star: "🔯",
        ski: "🎿",
        skier: "⛷",
        skull: "💀",
        skull_and_crossbones: "☠️",
        sleeping: "😴",
        sleeping_bed: "🛌",
        sleepy: "😪",
        slightly_frowning_face: "🙁",
        slightly_smiling_face: "🙂",
        slot_machine: "🎰",
        small_airplane: "🛩",
        small_blue_diamond: "🔹",
        small_orange_diamond: "🔸",
        small_red_triangle: "🔺",
        small_red_triangle_down: "🔻",
        smile: "😄",
        smile_cat: "😸",
        smiley: "😃",
        smiley_cat: "😺",
        smiling_imp: "😈",
        smirk: "😏",
        smirk_cat: "😼",
        smoking: "🚬",
        snail: "🐌",
        snake: "🐍",
        sneezing_face: "🤧",
        snowboarder: "🏂",
        snowflake: "❄️",
        snowman: "⛄️",
        snowman_with_snow: "☃️",
        sob: "😭",
        soccer: "⚽️",
        soon: "🔜",
        sos: "🆘",
        sound: "🔉",
        space_invader: "👾",
        spades: "♠️",
        spaghetti: "🍝",
        sparkle: "❇️",
        sparkler: "🎇",
        sparkles: "✨",
        sparkling_heart: "💖",
        speak_no_evil: "🙊",
        speaker: "🔈",
        speaking_head: "🗣",
        speech_balloon: "💬",
        speedboat: "🚤",
        spider: "🕷",
        spider_web: "🕸",
        spiral_calendar: "🗓",
        spiral_notepad: "🗒",
        spoon: "🥄",
        squid: "🦑",
        stadium: "🏟",
        star: "⭐️",
        star2: "🌟",
        star_and_crescent: "☪️",
        star_of_david: "✡️",
        stars: "🌠",
        station: "🚉",
        statue_of_liberty: "🗽",
        steam_locomotive: "🚂",
        stew: "🍲",
        stop_button: "⏹",
        stop_sign: "🛑",
        stopwatch: "⏱",
        straight_ruler: "📏",
        strawberry: "🍓",
        stuck_out_tongue: "😛",
        stuck_out_tongue_closed_eyes: "😝",
        stuck_out_tongue_winking_eye: "😜",
        studio_microphone: "🎙",
        stuffed_flatbread: "🥙",
        sun_behind_large_cloud: "🌥",
        sun_behind_rain_cloud: "🌦",
        sun_behind_small_cloud: "🌤",
        sun_with_face: "🌞",
        sunflower: "🌻",
        sunglasses: "😎",
        sunny: "☀️",
        sunrise: "🌅",
        sunrise_over_mountains: "🌄",
        surfing_man: "🏄",
        surfing_woman: "🏄&zwj;♀️",
        sushi: "🍣",
        suspension_railway: "🚟",
        sweat: "😓",
        sweat_drops: "💦",
        sweat_smile: "😅",
        sweet_potato: "🍠",
        swimming_man: "🏊",
        swimming_woman: "🏊&zwj;♀️",
        symbols: "🔣",
        synagogue: "🕍",
        syringe: "💉",
        taco: "🌮",
        tada: "🎉",
        tanabata_tree: "🎋",
        taurus: "♉️",
        taxi: "🚕",
        tea: "🍵",
        telephone_receiver: "📞",
        telescope: "🔭",
        tennis: "🎾",
        tent: "⛺️",
        thermometer: "🌡",
        thinking: "🤔",
        thought_balloon: "💭",
        ticket: "🎫",
        tickets: "🎟",
        tiger: "🐯",
        tiger2: "🐅",
        timer_clock: "⏲",
        tipping_hand_man: "💁&zwj;♂️",
        tired_face: "😫",
        tm: "™️",
        toilet: "🚽",
        tokyo_tower: "🗼",
        tomato: "🍅",
        tongue: "👅",
        top: "🔝",
        tophat: "🎩",
        tornado: "🌪",
        trackball: "🖲",
        tractor: "🚜",
        traffic_light: "🚥",
        train: "🚋",
        train2: "🚆",
        tram: "🚊",
        triangular_flag_on_post: "🚩",
        triangular_ruler: "📐",
        trident: "🔱",
        triumph: "😤",
        trolleybus: "🚎",
        trophy: "🏆",
        tropical_drink: "🍹",
        tropical_fish: "🐠",
        truck: "🚚",
        trumpet: "🎺",
        tulip: "🌷",
        tumbler_glass: "🥃",
        turkey: "🦃",
        turtle: "🐢",
        tv: "📺",
        twisted_rightwards_arrows: "🔀",
        two_hearts: "💕",
        two_men_holding_hands: "👬",
        two_women_holding_hands: "👭",
        u5272: "🈹",
        u5408: "🈴",
        u55b6: "🈺",
        u6307: "🈯️",
        u6708: "🈷️",
        u6709: "🈶",
        u6e80: "🈵",
        u7121: "🈚️",
        u7533: "🈸",
        u7981: "🈲",
        u7a7a: "🈳",
        umbrella: "☔️",
        unamused: "😒",
        underage: "🔞",
        unicorn: "🦄",
        unlock: "🔓",
        up: "🆙",
        upside_down_face: "🙃",
        v: "✌️",
        vertical_traffic_light: "🚦",
        vhs: "📼",
        vibration_mode: "📳",
        video_camera: "📹",
        video_game: "🎮",
        violin: "🎻",
        virgo: "♍️",
        volcano: "🌋",
        volleyball: "🏐",
        vs: "🆚",
        vulcan_salute: "🖖",
        walking_man: "🚶",
        walking_woman: "🚶&zwj;♀️",
        waning_crescent_moon: "🌘",
        waning_gibbous_moon: "🌖",
        warning: "⚠️",
        wastebasket: "🗑",
        watch: "⌚️",
        water_buffalo: "🐃",
        watermelon: "🍉",
        wave: "👋",
        wavy_dash: "〰️",
        waxing_crescent_moon: "🌒",
        wc: "🚾",
        weary: "😩",
        wedding: "💒",
        weight_lifting_man: "🏋️",
        weight_lifting_woman: "🏋️&zwj;♀️",
        whale: "🐳",
        whale2: "🐋",
        wheel_of_dharma: "☸️",
        wheelchair: "♿️",
        white_check_mark: "✅",
        white_circle: "⚪️",
        white_flag: "🏳️",
        white_flower: "💮",
        white_large_square: "⬜️",
        white_medium_small_square: "◽️",
        white_medium_square: "◻️",
        white_small_square: "▫️",
        white_square_button: "🔳",
        wilted_flower: "🥀",
        wind_chime: "🎐",
        wind_face: "🌬",
        wine_glass: "🍷",
        wink: "😉",
        wolf: "🐺",
        woman: "👩",
        woman_artist: "👩&zwj;🎨",
        woman_astronaut: "👩&zwj;🚀",
        woman_cartwheeling: "🤸&zwj;♀️",
        woman_cook: "👩&zwj;🍳",
        woman_facepalming: "🤦&zwj;♀️",
        woman_factory_worker: "👩&zwj;🏭",
        woman_farmer: "👩&zwj;🌾",
        woman_firefighter: "👩&zwj;🚒",
        woman_health_worker: "👩&zwj;⚕️",
        woman_judge: "👩&zwj;⚖️",
        woman_juggling: "🤹&zwj;♀️",
        woman_mechanic: "👩&zwj;🔧",
        woman_office_worker: "👩&zwj;💼",
        woman_pilot: "👩&zwj;✈️",
        woman_playing_handball: "🤾&zwj;♀️",
        woman_playing_water_polo: "🤽&zwj;♀️",
        woman_scientist: "👩&zwj;🔬",
        woman_shrugging: "🤷&zwj;♀️",
        woman_singer: "👩&zwj;🎤",
        woman_student: "👩&zwj;🎓",
        woman_teacher: "👩&zwj;🏫",
        woman_technologist: "👩&zwj;💻",
        woman_with_turban: "👳&zwj;♀️",
        womans_clothes: "👚",
        womans_hat: "👒",
        women_wrestling: "🤼&zwj;♀️",
        womens: "🚺",
        world_map: "🗺",
        worried: "😟",
        wrench: "🔧",
        writing_hand: "✍️",
        x: "❌",
        yellow_heart: "💛",
        yen: "💴",
        yin_yang: "☯️",
        yum: "😋",
        zap: "⚡️",
        zipper_mouth_face: "🤐",
        zzz: "💤",
        octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        showdown: "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"
    }, r.Converter = function(e) {
        "use strict";

        function n(e, n) {
            if (n = n || null, r.helper.isString(e)) {
                if (n = e = r.helper.stdExtName(e), r.extensions[e]) return console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), void

                function(e, n) {
                    "function" == typeof e && (e = e(new r.Converter)), r.helper.isArray(e) || (e = [e]);
                    var i = t(e, n);
                    if (!i.valid) throw Error(i.error);
                    for (var o = 0; o < e.length; ++o) switch (e[o].type) {
                        case "lang":
                            l.push(e[o]);
                            break;
                        case "output":
                            h.push(e[o]);
                            break;
                        default:
                            throw Error("Extension loader error: Type unrecognized!!!")
                    }
                }(r.extensions[e], e);
                if (r.helper.isUndefined(o[e])) throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
                e = o[e]
            }
            "function" == typeof e && (e = e()), r.helper.isArray(e) || (e = [e]);
            var a = t(e, n);
            if (!a.valid) throw Error(a.error);
            for (var s = 0; s < e.length; ++s) {
                switch (e[s].type) {
                    case "lang":
                        l.push(e[s]);
                        break;
                    case "output":
                        h.push(e[s])
                }
                if (e[s].hasOwnProperty("listeners"))
                    for (var u in e[s].listeners) e[s].listeners.hasOwnProperty(u) && i(u, e[s].listeners[u])
            }
        }

        function i(e, t) {
            if (!r.helper.isString(e)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof e + " given");
            if ("function" != typeof t) throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof t + " given");
            d.hasOwnProperty(e) || (d[e] = []), d[e].push(t)
        }
        var c = {},
            l = [],
            h = [],
            d = {},
            p = s,
            f = {
                parsed: {},
                raw: "",
                format: ""
            };
        ! function() {
            for (var t in e = e || {}, a) a.hasOwnProperty(t) && (c[t] = a[t]);
            if ("object" != typeof e) throw Error("Converter expects the passed parameter to be an object, but " + typeof e + " was passed instead.");
            for (var i in e) e.hasOwnProperty(i) && (c[i] = e[i]);
            c.extensions && r.helper.forEach(c.extensions, n)
        }(), this._dispatch = function(e, t, n, r) {
            if (d.hasOwnProperty(e))
                for (var i = 0; i < d[e].length; ++i) {
                    var o = d[e][i](e, t, this, n, r);
                    o && void 0 !== o && (t = o)
                }
            return t
        }, this.listen = function(e, t) {
            return i(e, t), this
        }, this.makeHtml = function(e) {
            if (!e) return e;
            var t = {
                gHtmlBlocks: [],
                gHtmlMdBlocks: [],
                gHtmlSpans: [],
                gUrls: {},
                gTitles: {},
                gDimensions: {},
                gListLevel: 0,
                hashLinkCounts: {},
                langExtensions: l,
                outputModifiers: h,
                converter: this,
                ghCodeBlocks: [],
                metadata: {
                    parsed: {},
                    raw: "",
                    format: ""
                }
            };
            return e = (e = (e = (e = (e = e.replace(/¨/g, "¨T")).replace(/\$/g, "¨D")).replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/\u00A0/g, "&nbsp;"), c.smartIndentationFix && (e = function(e) {
                var t = e.match(/^\s*/)[0].length,
                    n = new RegExp("^\\s{0," + t + "}", "gm");
                return e.replace(n, "")
            }(e)), e = "\n\n" + e + "\n\n", e = (e = r.subParser("detab")(e, c, t)).replace(/^[ \t]+$/gm, ""), r.helper.forEach(l, (function(n) {
                e = r.subParser("runExtension")(n, e, c, t)
            })), e = r.subParser("metadata")(e, c, t), e = r.subParser("hashPreCodeTags")(e, c, t), e = r.subParser("githubCodeBlocks")(e, c, t), e = r.subParser("hashHTMLBlocks")(e, c, t), e = r.subParser("hashCodeTags")(e, c, t), e = r.subParser("stripLinkDefinitions")(e, c, t), e = r.subParser("blockGamut")(e, c, t), e = r.subParser("unhashHTMLSpans")(e, c, t), e = (e = (e = r.subParser("unescapeSpecialChars")(e, c, t)).replace(/¨D/g, "$$")).replace(/¨T/g, "¨"), e = r.subParser("completeHTMLDocument")(e, c, t), r.helper.forEach(h, (function(n) {
                e = r.subParser("runExtension")(n, e, c, t)
            })), f = t.metadata, e
        }, this.makeMarkdown = this.makeMd = function(e, t) {
            if (e = (e = (e = e.replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/>[ \t]+</, ">¨NBSP;<"), !t) {
                if (!window || !window.document) throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
                t = window.document
            }
            var n = t.createElement("div");
            n.innerHTML = e;
            var i = {
                preList: function(e) {
                    for (var t = e.querySelectorAll("pre"), n = [], i = 0; i < t.length; ++i)
                        if (1 === t[i].childElementCount && "code" === t[i].firstChild.tagName.toLowerCase()) {
                            var o = t[i].firstChild.innerHTML.trim(),
                                a = t[i].firstChild.getAttribute("data-language") || "";
                            if ("" === a)
                                for (var s = t[i].firstChild.className.split(" "), u = 0; u < s.length; ++u) {
                                    var c = s[u].match(/^language-(.+)$/);
                                    if (null !== c) {
                                        a = c[1];
                                        break
                                    }
                                }
                            o = r.helper.unescapeHTMLEntities(o), n.push(o), t[i].outerHTML = '<precode language="' + a + '" precodenum="' + i.toString() + '"></precode>'
                        } else n.push(t[i].innerHTML), t[i].innerHTML = "", t[i].setAttribute("prenum", i.toString());
                    return n
                }(n)
            };
            ! function e(t) {
                for (var n = 0; n < t.childNodes.length; ++n) {
                    var r = t.childNodes[n];
                    3 === r.nodeType ? /\S/.test(r.nodeValue) ? (r.nodeValue = r.nodeValue.split("\n").join(" "), r.nodeValue = r.nodeValue.replace(/(\s)+/g, "$1")) : (t.removeChild(r), --n) : 1 === r.nodeType && e(r)
                }
            }(n);
            for (var o = n.childNodes, a = "", s = 0; s < o.length; s++) a += r.subParser("makeMarkdown.node")(o[s], i);
            return a
        }, this.setOption = function(e, t) {
            c[e] = t
        }, this.getOption = function(e) {
            return c[e]
        }, this.getOptions = function() {
            return c
        }, this.addExtension = function(e, t) {
            n(e, t = t || null)
        }, this.useExtension = function(e) {
            n(e)
        }, this.setFlavor = function(e) {
            if (!u.hasOwnProperty(e)) throw Error(e + " flavor was not found");
            var t = u[e];
            for (var n in p = e, t) t.hasOwnProperty(n) && (c[n] = t[n])
        }, this.getFlavor = function() {
            return p
        }, this.removeExtension = function(e) {
            r.helper.isArray(e) || (e = [e]);
            for (var t = 0; t < e.length; ++t) {
                for (var n = e[t], i = 0; i < l.length; ++i) l[i] === n && l[i].splice(i, 1);
                for (; 0 < h.length; ++i) h[0] === n && h[0].splice(i, 1)
            }
        }, this.getAllExtensions = function() {
            return {
                language: l,
                output: h
            }
        }, this.getMetadata = function(e) {
            return e ? f.raw : f.parsed
        }, this.getMetadataFormat = function() {
            return f.format
        }, this._setMetadataPair = function(e, t) {
            f.parsed[e] = t
        }, this._setMetadataFormat = function(e) {
            f.format = e
        }, this._setMetadataRaw = function(e) {
            f.raw = e
        }
    }, r.subParser("anchors", (function(e, t, n) {
        "use strict";
        var i = function(e, i, o, a, s, u, c) {
            if (r.helper.isUndefined(c) && (c = ""), o = o.toLowerCase(), e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) a = "";
            else if (!a) {
                if (o || (o = i.toLowerCase().replace(/ ?\n/g, " ")), a = "#" + o, r.helper.isUndefined(n.gUrls[o])) return e;
                a = n.gUrls[o], r.helper.isUndefined(n.gTitles[o]) || (c = n.gTitles[o])
            }
            var l = '<a href="' + (a = a.replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback)) + '"';
            return "" !== c && null !== c && (l += ' title="' + (c = (c = c.replace(/"/g, "&quot;")).replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback)) + '"'), t.openLinksInNewWindow && !/^#/.test(a) && (l += ' rel="noopener noreferrer" target="¨E95Eblank"'), l + ">" + i + "</a>"
        };
        return e = (e = (e = (e = (e = n.converter._dispatch("anchors.before", e, t, n)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, i)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, i)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, i)).replace(/\[([^\[\]]+)]()()()()()/g, i), t.ghMentions && (e = e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim, (function(e, n, i, o, a) {
            if ("\\" === i) return n + o;
            if (!r.helper.isString(t.ghMentionsLink)) throw new Error("ghMentionsLink option must be a string");
            var s = t.ghMentionsLink.replace(/\{u}/g, a),
                u = "";
            return t.openLinksInNewWindow && (u = ' rel="noopener noreferrer" target="¨E95Eblank"'), n + '<a href="' + s + '"' + u + ">" + o + "</a>"
        }))), n.converter._dispatch("anchors.after", e, t, n)
    }));
    var l = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
        h = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
        d = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
        p = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
        f = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
        g = function(e) {
            "use strict";
            return function(t, n, i, o, a, s, u) {
                var c = i = i.replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback),
                    l = "",
                    h = "",
                    d = n || "",
                    p = u || "";
                return /^www\./i.test(i) && (i = i.replace(/^www\./i, "http://www.")), e.excludeTrailingPunctuationFromURLs && s && (l = s), e.openLinksInNewWindow && (h = ' rel="noopener noreferrer" target="¨E95Eblank"'), d + '<a href="' + i + '"' + h + ">" + c + "</a>" + l + p
            }
        },
        m = function(e, t) {
            "use strict";
            return function(n, i, o) {
                var a = "mailto:";
                return i = i || "", o = r.subParser("unescapeSpecialChars")(o, e, t), e.encodeEmails ? (a = r.helper.encodeEmailAddress(a + o), o = r.helper.encodeEmailAddress(o)) : a += o, i + '<a href="' + a + '">' + o + "</a>"
            }
        };
    r.subParser("autoLinks", (function(e, t, n) {
        "use strict";
        return e = (e = (e = n.converter._dispatch("autoLinks.before", e, t, n)).replace(d, g(t))).replace(f, m(t, n)), n.converter._dispatch("autoLinks.after", e, t, n)
    })), r.subParser("simplifiedAutoLinks", (function(e, t, n) {
        "use strict";
        return t.simplifiedAutoLink ? (e = n.converter._dispatch("simplifiedAutoLinks.before", e, t, n), e = (e = t.excludeTrailingPunctuationFromURLs ? e.replace(h, g(t)) : e.replace(l, g(t))).replace(p, m(t, n)), e = n.converter._dispatch("simplifiedAutoLinks.after", e, t, n)) : e
    })), r.subParser("blockGamut", (function(e, t, n) {
        "use strict";
        return e = n.converter._dispatch("blockGamut.before", e, t, n), e = r.subParser("blockQuotes")(e, t, n), e = r.subParser("headers")(e, t, n), e = r.subParser("horizontalRule")(e, t, n), e = r.subParser("lists")(e, t, n), e = r.subParser("codeBlocks")(e, t, n), e = r.subParser("tables")(e, t, n), e = r.subParser("hashHTMLBlocks")(e, t, n), e = r.subParser("paragraphs")(e, t, n), n.converter._dispatch("blockGamut.after", e, t, n)
    })), r.subParser("blockQuotes", (function(e, t, n) {
        "use strict";
        e = n.converter._dispatch("blockQuotes.before", e, t, n), e += "\n\n";
        var i = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        return t.splitAdjacentBlockquotes && (i = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), e = e.replace(i, (function(e) {
            return e = (e = (e = e.replace(/^[ \t]*>[ \t]?/gm, "")).replace(/¨0/g, "")).replace(/^[ \t]+$/gm, ""), e = r.subParser("githubCodeBlocks")(e, t, n), e = (e = (e = r.subParser("blockGamut")(e, t, n)).replace(/(^|\n)/g, "$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, (function(e, t) {
                var n = t;
                return (n = n.replace(/^  /gm, "¨0")).replace(/¨0/g, "")
            })), r.subParser("hashBlock")("<blockquote>\n" + e + "\n</blockquote>", t, n)
        })), n.converter._dispatch("blockQuotes.after", e, t, n)
    })), r.subParser("codeBlocks", (function(e, t, n) {
        "use strict";
        return e = n.converter._dispatch("codeBlocks.before", e, t, n), e = (e = (e += "¨0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g, (function(e, i, o) {
            var a = i,
                s = o,
                u = "\n";
            return a = r.subParser("outdent")(a, t, n), a = r.subParser("encodeCode")(a, t, n), a = (a = (a = r.subParser("detab")(a, t, n)).replace(/^\n+/g, "")).replace(/\n+$/g, ""), t.omitExtraWLInCodeBlocks && (u = ""), a = "<pre><code>" + a + u + "</code></pre>", r.subParser("hashBlock")(a, t, n) + s
        }))).replace(/¨0/, ""), n.converter._dispatch("codeBlocks.after", e, t, n)
    })), r.subParser("codeSpans", (function(e, t, n) {
        "use strict";
        return void 0 === (e = n.converter._dispatch("codeSpans.before", e, t, n)) && (e = ""), e = e.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, (function(e, i, o, a) {
            var s = a;
            return s = (s = s.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, ""), s = i + "<code>" + (s = r.subParser("encodeCode")(s, t, n)) + "</code>", r.subParser("hashHTMLSpans")(s, t, n)
        })), n.converter._dispatch("codeSpans.after", e, t, n)
    })), r.subParser("completeHTMLDocument", (function(e, t, n) {
        "use strict";
        if (!t.completeHTMLDocument) return e;
        e = n.converter._dispatch("completeHTMLDocument.before", e, t, n);
        var r = "html",
            i = "<!DOCTYPE HTML>\n",
            o = "",
            a = '<meta charset="utf-8">\n',
            s = "",
            u = "";
        for (var c in void 0 !== n.metadata.parsed.doctype && (i = "<!DOCTYPE " + n.metadata.parsed.doctype + ">\n", "html" !== (r = n.metadata.parsed.doctype.toString().toLowerCase()) && "html5" !== r || (a = '<meta charset="utf-8">')), n.metadata.parsed)
            if (n.metadata.parsed.hasOwnProperty(c)) switch (c.toLowerCase()) {
                case "doctype":
                    break;
                case "title":
                    o = "<title>" + n.metadata.parsed.title + "</title>\n";
                    break;
                case "charset":
                    a = "html" === r || "html5" === r ? '<meta charset="' + n.metadata.parsed.charset + '">\n' : '<meta name="charset" content="' + n.metadata.parsed.charset + '">\n';
                    break;
                case "language":
                case "lang":
                    s = ' lang="' + n.metadata.parsed[c] + '"', u += '<meta name="' + c + '" content="' + n.metadata.parsed[c] + '">\n';
                    break;
                default:
                    u += '<meta name="' + c + '" content="' + n.metadata.parsed[c] + '">\n'
            }
        return e = i + "<html" + s + ">\n<head>\n" + o + a + u + "</head>\n<body>\n" + e.trim() + "\n</body>\n</html>", n.converter._dispatch("completeHTMLDocument.after", e, t, n)
    })), r.subParser("detab", (function(e, t, n) {
        "use strict";
        return e = (e = (e = (e = (e = (e = n.converter._dispatch("detab.before", e, t, n)).replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "¨A¨B")).replace(/¨B(.+?)¨A/g, (function(e, t) {
            for (var n = t, r = 4 - n.length % 4, i = 0; i < r; i++) n += " ";
            return n
        }))).replace(/¨A/g, "    ")).replace(/¨B/g, ""), n.converter._dispatch("detab.after", e, t, n)
    })), r.subParser("ellipsis", (function(e, t, n) {
        "use strict";
        return e = (e = n.converter._dispatch("ellipsis.before", e, t, n)).replace(/\.\.\./g, "…"), n.converter._dispatch("ellipsis.after", e, t, n)
    })), r.subParser("emoji", (function(e, t, n) {
        "use strict";
        return t.emoji ? (e = (e = n.converter._dispatch("emoji.before", e, t, n)).replace(/:([\S]+?):/g, (function(e, t) {
            return r.helper.emojis.hasOwnProperty(t) ? r.helper.emojis[t] : e
        })), n.converter._dispatch("emoji.after", e, t, n)) : e
    })), r.subParser("encodeAmpsAndAngles", (function(e, t, n) {
        "use strict";
        return e = (e = (e = (e = (e = n.converter._dispatch("encodeAmpsAndAngles.before", e, t, n)).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(/<(?![a-z\/?$!])/gi, "&lt;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;"), n.converter._dispatch("encodeAmpsAndAngles.after", e, t, n)
    })), r.subParser("encodeBackslashEscapes", (function(e, t, n) {
        "use strict";
        return e = (e = (e = n.converter._dispatch("encodeBackslashEscapes.before", e, t, n)).replace(/\\(\\)/g, r.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, r.helper.escapeCharactersCallback), n.converter._dispatch("encodeBackslashEscapes.after", e, t, n)
    })), r.subParser("encodeCode", (function(e, t, n) {
        "use strict";
        return e = (e = n.converter._dispatch("encodeCode.before", e, t, n)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, r.helper.escapeCharactersCallback), n.converter._dispatch("encodeCode.after", e, t, n)
    })), r.subParser("escapeSpecialCharsWithinTagAttributes", (function(e, t, n) {
        "use strict";
        return e = (e = (e = n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", e, t, n)).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, (function(e) {
            return e.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, r.helper.escapeCharactersCallback)
        }))).replace(/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi, (function(e) {
            return e.replace(/([\\`*_~=|])/g, r.helper.escapeCharactersCallback)
        })), n.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", e, t, n)
    })), r.subParser("githubCodeBlocks", (function(e, t, n) {
        "use strict";
        return t.ghCodeBlocks ? (e = n.converter._dispatch("githubCodeBlocks.before", e, t, n), e = (e = (e += "¨0").replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, (function(e, i, o, a) {
            var s = t.omitExtraWLInCodeBlocks ? "" : "\n";
            return a = r.subParser("encodeCode")(a, t, n), a = "<pre><code" + (o ? ' class="' + o + " language-" + o + '"' : "") + ">" + (a = (a = (a = r.subParser("detab")(a, t, n)).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + s + "</code></pre>", a = r.subParser("hashBlock")(a, t, n), "\n\n¨G" + (n.ghCodeBlocks.push({
                text: e,
                codeblock: a
            }) - 1) + "G\n\n"
        }))).replace(/¨0/, ""), n.converter._dispatch("githubCodeBlocks.after", e, t, n)) : e
    })), r.subParser("hashBlock", (function(e, t, n) {
        "use strict";
        return e = (e = n.converter._dispatch("hashBlock.before", e, t, n)).replace(/(^\n+|\n+$)/g, ""), e = "\n\n¨K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n", n.converter._dispatch("hashBlock.after", e, t, n)
    })), r.subParser("hashCodeTags", (function(e, t, n) {
        "use strict";
        return e = n.converter._dispatch("hashCodeTags.before", e, t, n), e = r.helper.replaceRecursiveRegExp(e, (function(e, i, o, a) {
            var s = o + r.subParser("encodeCode")(i, t, n) + a;
            return "¨C" + (n.gHtmlSpans.push(s) - 1) + "C"
        }), "<code\\b[^>]*>", "</code>", "gim"), n.converter._dispatch("hashCodeTags.after", e, t, n)
    })), r.subParser("hashElement", (function(e, t, n) {
        "use strict";
        return function(e, t) {
            var r = t;
            return r = (r = (r = r.replace(/\n\n/g, "\n")).replace(/^\n/, "")).replace(/\n+$/g, ""), "\n\n¨K" + (n.gHtmlBlocks.push(r) - 1) + "K\n\n"
        }
    })), r.subParser("hashHTMLBlocks", (function(e, t, n) {
        "use strict";
        e = n.converter._dispatch("hashHTMLBlocks.before", e, t, n);
        var i = ["pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p"],
            o = function(e, t, r, i) {
                var o = e;
                return -1 !== r.search(/\bmarkdown\b/) && (o = r + n.converter.makeHtml(t) + i), "\n\n¨K" + (n.gHtmlBlocks.push(o) - 1) + "K\n\n"
            };
        t.backslashEscapesHTMLTags && (e = e.replace(/\\<(\/?[^>]+?)>/g, (function(e, t) {
            return "&lt;" + t + "&gt;"
        })));
        for (var a = 0; a < i.length; ++a)
            for (var s, u = new RegExp("^ {0,3}(<" + i[a] + "\\b[^>]*>)", "im"), c = "<" + i[a] + "\\b[^>]*>", l = "</" + i[a] + ">"; - 1 !== (s = r.helper.regexIndexOf(e, u));) {
                var h = r.helper.splitAtIndex(e, s),
                    d = r.helper.replaceRecursiveRegExp(h[1], o, c, l, "im");
                if (d === h[1]) break;
                e = h[0].concat(d)
            }
        return e = e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, r.subParser("hashElement")(e, t, n)), e = (e = r.helper.replaceRecursiveRegExp(e, (function(e) {
            return "\n\n¨K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n"
        }), "^ {0,3}\x3c!--", "--\x3e", "gm")).replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, r.subParser("hashElement")(e, t, n)), n.converter._dispatch("hashHTMLBlocks.after", e, t, n)
    })), r.subParser("hashHTMLSpans", (function(e, t, n) {
        "use strict";

        function r(e) {
            return "¨C" + (n.gHtmlSpans.push(e) - 1) + "C"
        }
        return e = (e = (e = (e = (e = n.converter._dispatch("hashHTMLSpans.before", e, t, n)).replace(/<[^>]+?\/>/gi, (function(e) {
            return r(e)
        }))).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, (function(e) {
            return r(e)
        }))).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, (function(e) {
            return r(e)
        }))).replace(/<[^>]+?>/gi, (function(e) {
            return r(e)
        })), n.converter._dispatch("hashHTMLSpans.after", e, t, n)
    })), r.subParser("unhashHTMLSpans", (function(e, t, n) {
        "use strict";
        e = n.converter._dispatch("unhashHTMLSpans.before", e, t, n);
        for (var r = 0; r < n.gHtmlSpans.length; ++r) {
            for (var i = n.gHtmlSpans[r], o = 0;
                /¨C(\d+)C/.test(i);) {
                var a = RegExp.$1;
                if (i = i.replace("¨C" + a + "C", n.gHtmlSpans[a]), 10 === o) {
                    console.error("maximum nesting of 10 spans reached!!!");
                    break
                }++o
            }
            e = e.replace("¨C" + r + "C", i)
        }
        return n.converter._dispatch("unhashHTMLSpans.after", e, t, n)
    })), r.subParser("hashPreCodeTags", (function(e, t, n) {
        "use strict";
        return e = n.converter._dispatch("hashPreCodeTags.before", e, t, n), e = r.helper.replaceRecursiveRegExp(e, (function(e, i, o, a) {
            var s = o + r.subParser("encodeCode")(i, t, n) + a;
            return "\n\n¨G" + (n.ghCodeBlocks.push({
                text: e,
                codeblock: s
            }) - 1) + "G\n\n"
        }), "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), n.converter._dispatch("hashPreCodeTags.after", e, t, n)
    })), r.subParser("headers", (function(e, t, n) {
        "use strict";

        function i(e) {
            var i, o;
            if (t.customizedHeaderId) {
                var a = e.match(/\{([^{]+?)}\s*$/);
                a && a[1] && (e = a[1])
            }
            return i = e, o = r.helper.isString(t.prefixHeaderId) ? t.prefixHeaderId : !0 === t.prefixHeaderId ? "section-" : "", t.rawPrefixHeaderId || (i = o + i), i = t.ghCompatibleHeaderId ? i.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : t.rawHeaderId ? i.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : i.replace(/[^\w]/g, "").toLowerCase(), t.rawPrefixHeaderId && (i = o + i), n.hashLinkCounts[i] ? i = i + "-" + n.hashLinkCounts[i]++ : n.hashLinkCounts[i] = 1, i
        }
        e = n.converter._dispatch("headers.before", e, t, n);
        var o = isNaN(parseInt(t.headerLevelStart)) ? 1 : parseInt(t.headerLevelStart),
            a = t.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
            s = t.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        e = (e = e.replace(a, (function(e, a) {
            var s = r.subParser("spanGamut")(a, t, n),
                u = t.noHeaderId ? "" : ' id="' + i(a) + '"',
                c = "<h" + o + u + ">" + s + "</h" + o + ">";
            return r.subParser("hashBlock")(c, t, n)
        }))).replace(s, (function(e, a) {
            var s = r.subParser("spanGamut")(a, t, n),
                u = t.noHeaderId ? "" : ' id="' + i(a) + '"',
                c = o + 1,
                l = "<h" + c + u + ">" + s + "</h" + c + ">";
            return r.subParser("hashBlock")(l, t, n)
        }));
        var u = t.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        return e = e.replace(u, (function(e, a, s) {
            var u = s;
            t.customizedHeaderId && (u = s.replace(/\s?\{([^{]+?)}\s*$/, ""));
            var c = r.subParser("spanGamut")(u, t, n),
                l = t.noHeaderId ? "" : ' id="' + i(s) + '"',
                h = o - 1 + a.length,
                d = "<h" + h + l + ">" + c + "</h" + h + ">";
            return r.subParser("hashBlock")(d, t, n)
        })), n.converter._dispatch("headers.after", e, t, n)
    })), r.subParser("horizontalRule", (function(e, t, n) {
        "use strict";
        e = n.converter._dispatch("horizontalRule.before", e, t, n);
        var i = r.subParser("hashBlock")("<hr />", t, n);
        return e = (e = (e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, i)).replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, i)).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, i), n.converter._dispatch("horizontalRule.after", e, t, n)
    })), r.subParser("images", (function(e, t, n) {
        "use strict";

        function i(e, t, i, o, a, s, u, c) {
            var l = n.gUrls,
                h = n.gTitles,
                d = n.gDimensions;
            if (i = i.toLowerCase(), c || (c = ""), e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) o = "";
            else if ("" === o || null === o) {
                if ("" !== i && null !== i || (i = t.toLowerCase().replace(/ ?\n/g, " ")), o = "#" + i, r.helper.isUndefined(l[i])) return e;
                o = l[i], r.helper.isUndefined(h[i]) || (c = h[i]), r.helper.isUndefined(d[i]) || (a = d[i].width, s = d[i].height)
            }
            t = t.replace(/"/g, "&quot;").replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback);
            var p = '<img src="' + (o = o.replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback)) + '" alt="' + t + '"';
            return c && r.helper.isString(c) && (p += ' title="' + (c = c.replace(/"/g, "&quot;").replace(r.helper.regexes.asteriskDashAndColon, r.helper.escapeCharactersCallback)) + '"'), a && s && (p += ' width="' + (a = "*" === a ? "auto" : a) + '"', p += ' height="' + (s = "*" === s ? "auto" : s) + '"'), p + " />"
        }
        return e = (e = (e = (e = (e = (e = n.converter._dispatch("images.before", e, t, n)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, i)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, (function(e, t, n, r, o, a, s, u) {
            return i(e, t, n, r = r.replace(/\s/g, ""), o, a, 0, u)
        }))).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, i)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, i)).replace(/!\[([^\[\]]+)]()()()()()/g, i), n.converter._dispatch("images.after", e, t, n)
    })), r.subParser("italicsAndBold", (function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            return t + e + n
        }
        return e = n.converter._dispatch("italicsAndBold.before", e, t, n), e = t.literalMidWordUnderscores ? (e = (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, (function(e, t) {
            return r(t, "<strong><em>", "</em></strong>")
        }))).replace(/\b__(\S[\s\S]*?)__\b/g, (function(e, t) {
            return r(t, "<strong>", "</strong>")
        }))).replace(/\b_(\S[\s\S]*?)_\b/g, (function(e, t) {
            return r(t, "<em>", "</em>")
        })) : (e = (e = e.replace(/___(\S[\s\S]*?)___/g, (function(e, t) {
            return /\S$/.test(t) ? r(t, "<strong><em>", "</em></strong>") : e
        }))).replace(/__(\S[\s\S]*?)__/g, (function(e, t) {
            return /\S$/.test(t) ? r(t, "<strong>", "</strong>") : e
        }))).replace(/_([^\s_][\s\S]*?)_/g, (function(e, t) {
            return /\S$/.test(t) ? r(t, "<em>", "</em>") : e
        })), e = t.literalMidWordAsterisks ? (e = (e = e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, (function(e, t, n) {
            return r(n, t + "<strong><em>", "</em></strong>")
        }))).replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, (function(e, t, n) {
            return r(n, t + "<strong>", "</strong>")
        }))).replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, (function(e, t, n) {
            return r(n, t + "<em>", "</em>")
        })) : (e = (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, (function(e, t) {
            return /\S$/.test(t) ? r(t, "<strong><em>", "</em></strong>") : e
        }))).replace(/\*\*(\S[\s\S]*?)\*\*/g, (function(e, t) {
            return /\S$/.test(t) ? r(t, "<strong>", "</strong>") : e
        }))).replace(/\*([^\s*][\s\S]*?)\*/g, (function(e, t) {
            return /\S$/.test(t) ? r(t, "<em>", "</em>") : e
        })), n.converter._dispatch("italicsAndBold.after", e, t, n)
    })), r.subParser("lists", (function(e, t, n) {
        "use strict";

        function i(e, i) {
            n.gListLevel++, e = e.replace(/\n{2,}$/, "\n");
            var o = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
                a = /\n[ \t]*\n(?!¨0)/.test(e += "¨0");
            return t.disableForced4SpacesIndentedSublists && (o = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), e = (e = e.replace(o, (function(e, i, o, s, u, c, l) {
                l = l && "" !== l.trim();
                var h = r.subParser("outdent")(u, t, n),
                    d = "";
                return c && t.tasklists && (d = ' class="task-list-item" style="list-style-type: none;"', h = h.replace(/^[ \t]*\[(x|X| )?]/m, (function() {
                    var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                    return l && (e += " checked"), e + ">"
                }))), h = h.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, (function(e) {
                    return "¨A" + e
                })), i || h.search(/\n{2,}/) > -1 ? (h = r.subParser("githubCodeBlocks")(h, t, n), h = r.subParser("blockGamut")(h, t, n)) : (h = (h = r.subParser("lists")(h, t, n)).replace(/\n$/, ""), h = (h = r.subParser("hashHTMLBlocks")(h, t, n)).replace(/\n\n+/g, "\n\n"), h = a ? r.subParser("paragraphs")(h, t, n) : r.subParser("spanGamut")(h, t, n)), "<li" + d + ">" + (h = h.replace("¨A", "")) + "</li>\n"
            }))).replace(/¨0/g, ""), n.gListLevel--, i && (e = e.replace(/\s+$/, "")), e
        }

        function o(e, t) {
            if ("ol" === t) {
                var n = e.match(/^ *(\d+)\./);
                if (n && "1" !== n[1]) return ' start="' + n[1] + '"'
            }
            return ""
        }

        function a(e, n, r) {
            var a = t.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
                s = t.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
                u = "ul" === n ? a : s,
                c = "";
            if (-1 !== e.search(u)) ! function t(l) {
                var h = l.search(u),
                    d = o(e, n); - 1 !== h ? (c += "\n\n<" + n + d + ">\n" + i(l.slice(0, h), !!r) + "</" + n + ">\n", u = "ul" == (n = "ul" === n ? "ol" : "ul") ? a : s, t(l.slice(h))) : c += "\n\n<" + n + d + ">\n" + i(l, !!r) + "</" + n + ">\n"
            }(e);
            else {
                var l = o(e, n);
                c = "\n\n<" + n + l + ">\n" + i(e, !!r) + "</" + n + ">\n"
            }
            return c
        }
        return e = n.converter._dispatch("lists.before", e, t, n), e += "¨0", e = (e = n.gListLevel ? e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, (function(e, t, n) {
            return a(t, n.search(/[*+-]/g) > -1 ? "ul" : "ol", !0)
        })) : e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, (function(e, t, n, r) {
            return a(n, r.search(/[*+-]/g) > -1 ? "ul" : "ol", !1)
        }))).replace(/¨0/, ""), n.converter._dispatch("lists.after", e, t, n)
    })), r.subParser("metadata", (function(e, t, n) {
        "use strict";

        function r(e) {
            n.metadata.raw = e, (e = (e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;")).replace(/\n {4}/g, " ")).replace(/^([\S ]+): +([\s\S]+?)$/gm, (function(e, t, r) {
                return n.metadata.parsed[t] = r, ""
            }))
        }
        return t.metadata ? (e = (e = (e = (e = n.converter._dispatch("metadata.before", e, t, n)).replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, (function(e, t, n) {
            return r(n), "¨M"
        }))).replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, (function(e, t, i) {
            return t && (n.metadata.format = t), r(i), "¨M"
        }))).replace(/¨M/g, ""), e = n.converter._dispatch("metadata.after", e, t, n)) : e
    })), r.subParser("outdent", (function(e, t, n) {
        "use strict";
        return e = (e = (e = n.converter._dispatch("outdent.before", e, t, n)).replace(/^(\t|[ ]{1,4})/gm, "¨0")).replace(/¨0/g, ""), n.converter._dispatch("outdent.after", e, t, n)
    })), r.subParser("paragraphs", (function(e, t, n) {
        "use strict";
        for (var i = (e = (e = (e = n.converter._dispatch("paragraphs.before", e, t, n)).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g), o = [], a = i.length, s = 0; s < a; s++) {
            var u = i[s];
            u.search(/¨(K|G)(\d+)\1/g) >= 0 ? o.push(u) : u.search(/\S/) >= 0 && (u = (u = r.subParser("spanGamut")(u, t, n)).replace(/^([ \t]*)/g, "<p>"), u += "</p>", o.push(u))
        }
        for (a = o.length, s = 0; s < a; s++) {
            for (var c = "", l = o[s], h = !1;
                /¨(K|G)(\d+)\1/.test(l);) {
                var d = RegExp.$1,
                    p = RegExp.$2;
                c = (c = "K" === d ? n.gHtmlBlocks[p] : h ? r.subParser("encodeCode")(n.ghCodeBlocks[p].text, t, n) : n.ghCodeBlocks[p].codeblock).replace(/\$/g, "$$$$"), l = l.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, c), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(l) && (h = !0)
            }
            o[s] = l
        }
        return e = (e = (e = o.join("\n")).replace(/^\n+/g, "")).replace(/\n+$/g, ""), n.converter._dispatch("paragraphs.after", e, t, n)
    })), r.subParser("runExtension", (function(e, t, n, r) {
        "use strict";
        if (e.filter) t = e.filter(t, r.converter, n);
        else if (e.regex) {
            var i = e.regex;
            i instanceof RegExp || (i = new RegExp(i, "g")), t = t.replace(i, e.replace)
        }
        return t
    })), r.subParser("spanGamut", (function(e, t, n) {
        "use strict";
        return e = n.converter._dispatch("spanGamut.before", e, t, n), e = r.subParser("codeSpans")(e, t, n), e = r.subParser("escapeSpecialCharsWithinTagAttributes")(e, t, n), e = r.subParser("encodeBackslashEscapes")(e, t, n), e = r.subParser("images")(e, t, n), e = r.subParser("anchors")(e, t, n), e = r.subParser("autoLinks")(e, t, n), e = r.subParser("simplifiedAutoLinks")(e, t, n), e = r.subParser("emoji")(e, t, n), e = r.subParser("underline")(e, t, n), e = r.subParser("italicsAndBold")(e, t, n), e = r.subParser("strikethrough")(e, t, n), e = r.subParser("ellipsis")(e, t, n), e = r.subParser("hashHTMLSpans")(e, t, n), e = r.subParser("encodeAmpsAndAngles")(e, t, n), t.simpleLineBreaks ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, "<br />\n")) : e = e.replace(/  +\n/g, "<br />\n"), n.converter._dispatch("spanGamut.after", e, t, n)
    })), r.subParser("strikethrough", (function(e, t, n) {
        "use strict";
        return t.strikethrough && (e = (e = n.converter._dispatch("strikethrough.before", e, t, n)).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, (function(e, i) {
            return function(e) {
                return t.simplifiedAutoLink && (e = r.subParser("simplifiedAutoLinks")(e, t, n)), "<del>" + e + "</del>"
            }(i)
        })), e = n.converter._dispatch("strikethrough.after", e, t, n)), e
    })), r.subParser("stripLinkDefinitions", (function(e, t, n) {
        "use strict";
        var i = function(e, i, o, a, s, u, c) {
            return i = i.toLowerCase(), o.match(/^data:.+?\/.+?;base64,/) ? n.gUrls[i] = o.replace(/\s/g, "") : n.gUrls[i] = r.subParser("encodeAmpsAndAngles")(o, t, n), u ? u + c : (c && (n.gTitles[i] = c.replace(/"|'/g, "&quot;")), t.parseImgDimensions && a && s && (n.gDimensions[i] = {
                width: a,
                height: s
            }), "")
        };
        return (e = (e = (e += "¨0").replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm, i)).replace(/^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, i)).replace(/¨0/, "")
    })), r.subParser("tables", (function(e, t, n) {
        "use strict";

        function i(e) {
            return /^:[ \t]*--*$/.test(e) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(e) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(e) ? ' style="text-align:center;"' : ""
        }

        function o(e, i) {
            var o = "";
            return e = e.trim(), (t.tablesHeaderId || t.tableHeaderId) && (o = ' id="' + e.replace(/ /g, "_").toLowerCase() + '"'), "<th" + o + i + ">" + (e = r.subParser("spanGamut")(e, t, n)) + "</th>\n"
        }

        function a(e, i) {
            return "<td" + i + ">" + r.subParser("spanGamut")(e, t, n) + "</td>\n"
        }

        function s(e) {
            var s, u = e.split("\n");
            for (s = 0; s < u.length; ++s) /^ {0,3}\|/.test(u[s]) && (u[s] = u[s].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(u[s]) && (u[s] = u[s].replace(/\|[ \t]*$/, "")), u[s] = r.subParser("codeSpans")(u[s], t, n);
            var c = u[0].split("|").map((function(e) {
                    return e.trim()
                })),
                l = u[1].split("|").map((function(e) {
                    return e.trim()
                })),
                h = [],
                d = [],
                p = [],
                f = [];
            for (u.shift(), u.shift(), s = 0; s < u.length; ++s) "" !== u[s].trim() && h.push(u[s].split("|").map((function(e) {
                return e.trim()
            })));
            if (c.length < l.length) return e;
            for (s = 0; s < l.length; ++s) p.push(i(l[s]));
            for (s = 0; s < c.length; ++s) r.helper.isUndefined(p[s]) && (p[s] = ""), d.push(o(c[s], p[s]));
            for (s = 0; s < h.length; ++s) {
                for (var g = [], m = 0; m < d.length; ++m) r.helper.isUndefined(h[s][m]), g.push(a(h[s][m], p[m]));
                f.push(g)
            }
            return function(e, t) {
                for (var n = "<table>\n<thead>\n<tr>\n", r = e.length, i = 0; i < r; ++i) n += e[i];
                for (n += "</tr>\n</thead>\n<tbody>\n", i = 0; i < t.length; ++i) {
                    n += "<tr>\n";
                    for (var o = 0; o < r; ++o) n += t[i][o];
                    n += "</tr>\n"
                }
                return n + "</tbody>\n</table>\n"
            }(d, f)
        }
        return t.tables ? (e = (e = (e = (e = n.converter._dispatch("tables.before", e, t, n)).replace(/\\(\|)/g, r.helper.escapeCharactersCallback)).replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, s)).replace(/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm, s), n.converter._dispatch("tables.after", e, t, n)) : e
    })), r.subParser("underline", (function(e, t, n) {
        "use strict";
        return t.underline ? (e = n.converter._dispatch("underline.before", e, t, n), e = (e = t.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, (function(e, t) {
            return "<u>" + t + "</u>"
        }))).replace(/\b__(\S[\s\S]*?)__\b/g, (function(e, t) {
            return "<u>" + t + "</u>"
        })) : (e = e.replace(/___(\S[\s\S]*?)___/g, (function(e, t) {
            return /\S$/.test(t) ? "<u>" + t + "</u>" : e
        }))).replace(/__(\S[\s\S]*?)__/g, (function(e, t) {
            return /\S$/.test(t) ? "<u>" + t + "</u>" : e
        }))).replace(/(_)/g, r.helper.escapeCharactersCallback), e = n.converter._dispatch("underline.after", e, t, n)) : e
    })), r.subParser("unescapeSpecialChars", (function(e, t, n) {
        "use strict";
        return e = (e = n.converter._dispatch("unescapeSpecialChars.before", e, t, n)).replace(/¨E(\d+)E/g, (function(e, t) {
            var n = parseInt(t);
            return String.fromCharCode(n)
        })), n.converter._dispatch("unescapeSpecialChars.after", e, t, n)
    })), r.subParser("makeMarkdown.blockquote", (function(e, t) {
        "use strict";
        var n = "";
        if (e.hasChildNodes())
            for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a) {
                var s = r.subParser("makeMarkdown.node")(i[a], t);
                "" !== s && (n += s)
            }
        return "> " + (n = n.trim()).split("\n").join("\n> ")
    })), r.subParser("makeMarkdown.codeBlock", (function(e, t) {
        "use strict";
        var n = e.getAttribute("language"),
            r = e.getAttribute("precodenum");
        return "```" + n + "\n" + t.preList[r] + "\n```"
    })), r.subParser("makeMarkdown.codeSpan", (function(e) {
        "use strict";
        return "`" + e.innerHTML + "`"
    })), r.subParser("makeMarkdown.emphasis", (function(e, t) {
        "use strict";
        var n = "";
        if (e.hasChildNodes()) {
            n += "*";
            for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a) n += r.subParser("makeMarkdown.node")(i[a], t);
            n += "*"
        }
        return n
    })), r.subParser("makeMarkdown.header", (function(e, t, n) {
        "use strict";
        var i = new Array(n + 1).join("#"),
            o = "";
        if (e.hasChildNodes()) {
            o = i + " ";
            for (var a = e.childNodes, s = a.length, u = 0; u < s; ++u) o += r.subParser("makeMarkdown.node")(a[u], t)
        }
        return o
    })), r.subParser("makeMarkdown.hr", (function() {
        "use strict";
        return "---"
    })), r.subParser("makeMarkdown.image", (function(e) {
        "use strict";
        var t = "";
        return e.hasAttribute("src") && (t += "![" + e.getAttribute("alt") + "](", t += "<" + e.getAttribute("src") + ">", e.hasAttribute("width") && e.hasAttribute("height") && (t += " =" + e.getAttribute("width") + "x" + e.getAttribute("height")), e.hasAttribute("title") && (t += ' "' + e.getAttribute("title") + '"'), t += ")"), t
    })), r.subParser("makeMarkdown.links", (function(e, t) {
        "use strict";
        var n = "";
        if (e.hasChildNodes() && e.hasAttribute("href")) {
            var i = e.childNodes,
                o = i.length;
            n = "[";
            for (var a = 0; a < o; ++a) n += r.subParser("makeMarkdown.node")(i[a], t);
            n += "](", n += "<" + e.getAttribute("href") + ">", e.hasAttribute("title") && (n += ' "' + e.getAttribute("title") + '"'), n += ")"
        }
        return n
    })), r.subParser("makeMarkdown.list", (function(e, t, n) {
        "use strict";
        var i = "";
        if (!e.hasChildNodes()) return "";
        for (var o = e.childNodes, a = o.length, s = e.getAttribute("start") || 1, u = 0; u < a; ++u) void 0 !== o[u].tagName && "li" === o[u].tagName.toLowerCase() && (i += ("ol" === n ? s.toString() + ". " : "- ") + r.subParser("makeMarkdown.listItem")(o[u], t), ++s);
        return (i += "\n\x3c!-- --\x3e\n").trim()
    })), r.subParser("makeMarkdown.listItem", (function(e, t) {
        "use strict";
        for (var n = "", i = e.childNodes, o = i.length, a = 0; a < o; ++a) n += r.subParser("makeMarkdown.node")(i[a], t);
        return /\n$/.test(n) ? n = n.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n") : n += "\n", n
    })), r.subParser("makeMarkdown.node", (function(e, t, n) {
        "use strict";
        n = n || !1;
        var i = "";
        if (3 === e.nodeType) return r.subParser("makeMarkdown.txt")(e, t);
        if (8 === e.nodeType) return "\x3c!--" + e.data + "--\x3e\n\n";
        if (1 !== e.nodeType) return "";
        switch (e.tagName.toLowerCase()) {
            case "h1":
                n || (i = r.subParser("makeMarkdown.header")(e, t, 1) + "\n\n");
                break;
            case "h2":
                n || (i = r.subParser("makeMarkdown.header")(e, t, 2) + "\n\n");
                break;
            case "h3":
                n || (i = r.subParser("makeMarkdown.header")(e, t, 3) + "\n\n");
                break;
            case "h4":
                n || (i = r.subParser("makeMarkdown.header")(e, t, 4) + "\n\n");
                break;
            case "h5":
                n || (i = r.subParser("makeMarkdown.header")(e, t, 5) + "\n\n");
                break;
            case "h6":
                n || (i = r.subParser("makeMarkdown.header")(e, t, 6) + "\n\n");
                break;
            case "p":
                n || (i = r.subParser("makeMarkdown.paragraph")(e, t) + "\n\n");
                break;
            case "blockquote":
                n || (i = r.subParser("makeMarkdown.blockquote")(e, t) + "\n\n");
                break;
            case "hr":
                n || (i = r.subParser("makeMarkdown.hr")(e, t) + "\n\n");
                break;
            case "ol":
                n || (i = r.subParser("makeMarkdown.list")(e, t, "ol") + "\n\n");
                break;
            case "ul":
                n || (i = r.subParser("makeMarkdown.list")(e, t, "ul") + "\n\n");
                break;
            case "precode":
                n || (i = r.subParser("makeMarkdown.codeBlock")(e, t) + "\n\n");
                break;
            case "pre":
                n || (i = r.subParser("makeMarkdown.pre")(e, t) + "\n\n");
                break;
            case "table":
                n || (i = r.subParser("makeMarkdown.table")(e, t) + "\n\n");
                break;
            case "code":
                i = r.subParser("makeMarkdown.codeSpan")(e, t);
                break;
            case "em":
            case "i":
                i = r.subParser("makeMarkdown.emphasis")(e, t);
                break;
            case "strong":
            case "b":
                i = r.subParser("makeMarkdown.strong")(e, t);
                break;
            case "del":
                i = r.subParser("makeMarkdown.strikethrough")(e, t);
                break;
            case "a":
                i = r.subParser("makeMarkdown.links")(e, t);
                break;
            case "img":
                i = r.subParser("makeMarkdown.image")(e, t);
                break;
            default:
                i = e.outerHTML + "\n\n"
        }
        return i
    })), r.subParser("makeMarkdown.paragraph", (function(e, t) {
        "use strict";
        var n = "";
        if (e.hasChildNodes())
            for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a) n += r.subParser("makeMarkdown.node")(i[a], t);
        return n.trim()
    })), r.subParser("makeMarkdown.pre", (function(e, t) {
        "use strict";
        var n = e.getAttribute("prenum");
        return "<pre>" + t.preList[n] + "</pre>"
    })), r.subParser("makeMarkdown.strikethrough", (function(e, t) {
        "use strict";
        var n = "";
        if (e.hasChildNodes()) {
            n += "~~";
            for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a) n += r.subParser("makeMarkdown.node")(i[a], t);
            n += "~~"
        }
        return n
    })), r.subParser("makeMarkdown.strong", (function(e, t) {
        "use strict";
        var n = "";
        if (e.hasChildNodes()) {
            n += "**";
            for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a) n += r.subParser("makeMarkdown.node")(i[a], t);
            n += "**"
        }
        return n
    })), r.subParser("makeMarkdown.table", (function(e, t) {
        "use strict";
        var n, i, o = "",
            a = [
                [],
                []
            ],
            s = e.querySelectorAll("thead>tr>th"),
            u = e.querySelectorAll("tbody>tr");
        for (n = 0; n < s.length; ++n) {
            var c = r.subParser("makeMarkdown.tableCell")(s[n], t),
                l = "---";
            if (s[n].hasAttribute("style")) switch (s[n].getAttribute("style").toLowerCase().replace(/\s/g, "")) {
                case "text-align:left;":
                    l = ":---";
                    break;
                case "text-align:right;":
                    l = "---:";
                    break;
                case "text-align:center;":
                    l = ":---:"
            }
            a[0][n] = c.trim(), a[1][n] = l
        }
        for (n = 0; n < u.length; ++n) {
            var h = a.push([]) - 1,
                d = u[n].getElementsByTagName("td");
            for (i = 0; i < s.length; ++i) {
                var p = " ";
                void 0 !== d[i] && (p = r.subParser("makeMarkdown.tableCell")(d[i], t)), a[h].push(p)
            }
        }
        var f = 3;
        for (n = 0; n < a.length; ++n)
            for (i = 0; i < a[n].length; ++i) {
                var g = a[n][i].length;
                g > f && (f = g)
            }
        for (n = 0; n < a.length; ++n) {
            for (i = 0; i < a[n].length; ++i) 1 === n ? ":" === a[n][i].slice(-1) ? a[n][i] = r.helper.padEnd(a[n][i].slice(-1), f - 1, "-") + ":" : a[n][i] = r.helper.padEnd(a[n][i], f, "-") : a[n][i] = r.helper.padEnd(a[n][i], f);
            o += "| " + a[n].join(" | ") + " |\n"
        }
        return o.trim()
    })), r.subParser("makeMarkdown.tableCell", (function(e, t) {
        "use strict";
        var n = "";
        if (!e.hasChildNodes()) return "";
        for (var i = e.childNodes, o = i.length, a = 0; a < o; ++a) n += r.subParser("makeMarkdown.node")(i[a], t, !0);
        return n.trim()
    })), r.subParser("makeMarkdown.txt", (function(e) {
        "use strict";
        var t = e.nodeValue;
        return t = (t = t.replace(/ +/g, " ")).replace(/¨NBSP;/g, " "), (t = (t = (t = (t = (t = (t = (t = (t = r.helper.unescapeHTMLEntities(t)).replace(/([*_~|`])/g, "\\$1")).replace(/^(\s*)>/g, "\\$1>")).replace(/^#/gm, "\\#")).replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3")).replace(/^( {0,3}\d+)\./gm, "$1\\.")).replace(/^( {0,3})([+-])/gm, "$1\\$2")).replace(/]([\s]*)\(/g, "\\]$1\\(")).replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:")
    })), "function" == typeof define && define.amd ? define((function() {
        "use strict";
        return r
    })) : "undefined" != typeof module && module.exports ? module.exports = r : this.showdown = r
}.call(this),
    function(e) {
        "use strict";

        function t(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }

        function n(e, n, r, i, o, a) {
            return t((s = t(t(n, e), t(i, a))) << (u = o) | s >>> 32 - u, r);
            var s, u
        }

        function r(e, t, r, i, o, a, s) {
            return n(t & r | ~t & i, e, t, o, a, s)
        }

        function i(e, t, r, i, o, a, s) {
            return n(t & i | r & ~i, e, t, o, a, s)
        }

        function o(e, t, r, i, o, a, s) {
            return n(t ^ r ^ i, e, t, o, a, s)
        }

        function a(e, t, r, i, o, a, s) {
            return n(r ^ (t | ~i), e, t, o, a, s)
        }

        function s(e, n) {
            var s, u, c, l;
            e[n >> 5] |= 128 << n % 32, e[14 + (n + 64 >>> 9 << 4)] = n;
            for (var h = 1732584193, d = -271733879, p = -1732584194, f = 271733878, g = 0; g < e.length; g += 16) h = r(s = h, u = d, c = p, l = f, e[g], 7, -680876936), f = r(f, h, d, p, e[g + 1], 12, -389564586), p = r(p, f, h, d, e[g + 2], 17, 606105819), d = r(d, p, f, h, e[g + 3], 22, -1044525330), h = r(h, d, p, f, e[g + 4], 7, -176418897), f = r(f, h, d, p, e[g + 5], 12, 1200080426), p = r(p, f, h, d, e[g + 6], 17, -1473231341), d = r(d, p, f, h, e[g + 7], 22, -45705983), h = r(h, d, p, f, e[g + 8], 7, 1770035416), f = r(f, h, d, p, e[g + 9], 12, -1958414417), p = r(p, f, h, d, e[g + 10], 17, -42063), d = r(d, p, f, h, e[g + 11], 22, -1990404162), h = r(h, d, p, f, e[g + 12], 7, 1804603682), f = r(f, h, d, p, e[g + 13], 12, -40341101), p = r(p, f, h, d, e[g + 14], 17, -1502002290), h = i(h, d = r(d, p, f, h, e[g + 15], 22, 1236535329), p, f, e[g + 1], 5, -165796510), f = i(f, h, d, p, e[g + 6], 9, -1069501632), p = i(p, f, h, d, e[g + 11], 14, 643717713), d = i(d, p, f, h, e[g], 20, -373897302), h = i(h, d, p, f, e[g + 5], 5, -701558691), f = i(f, h, d, p, e[g + 10], 9, 38016083), p = i(p, f, h, d, e[g + 15], 14, -660478335), d = i(d, p, f, h, e[g + 4], 20, -405537848), h = i(h, d, p, f, e[g + 9], 5, 568446438), f = i(f, h, d, p, e[g + 14], 9, -1019803690), p = i(p, f, h, d, e[g + 3], 14, -187363961), d = i(d, p, f, h, e[g + 8], 20, 1163531501), h = i(h, d, p, f, e[g + 13], 5, -1444681467), f = i(f, h, d, p, e[g + 2], 9, -51403784), p = i(p, f, h, d, e[g + 7], 14, 1735328473), h = o(h, d = i(d, p, f, h, e[g + 12], 20, -1926607734), p, f, e[g + 5], 4, -378558), f = o(f, h, d, p, e[g + 8], 11, -2022574463), p = o(p, f, h, d, e[g + 11], 16, 1839030562), d = o(d, p, f, h, e[g + 14], 23, -35309556), h = o(h, d, p, f, e[g + 1], 4, -1530992060), f = o(f, h, d, p, e[g + 4], 11, 1272893353), p = o(p, f, h, d, e[g + 7], 16, -155497632), d = o(d, p, f, h, e[g + 10], 23, -1094730640), h = o(h, d, p, f, e[g + 13], 4, 681279174), f = o(f, h, d, p, e[g], 11, -358537222), p = o(p, f, h, d, e[g + 3], 16, -722521979), d = o(d, p, f, h, e[g + 6], 23, 76029189), h = o(h, d, p, f, e[g + 9], 4, -640364487), f = o(f, h, d, p, e[g + 12], 11, -421815835), p = o(p, f, h, d, e[g + 15], 16, 530742520), h = a(h, d = o(d, p, f, h, e[g + 2], 23, -995338651), p, f, e[g], 6, -198630844), f = a(f, h, d, p, e[g + 7], 10, 1126891415), p = a(p, f, h, d, e[g + 14], 15, -1416354905), d = a(d, p, f, h, e[g + 5], 21, -57434055), h = a(h, d, p, f, e[g + 12], 6, 1700485571), f = a(f, h, d, p, e[g + 3], 10, -1894986606), p = a(p, f, h, d, e[g + 10], 15, -1051523), d = a(d, p, f, h, e[g + 1], 21, -2054922799), h = a(h, d, p, f, e[g + 8], 6, 1873313359), f = a(f, h, d, p, e[g + 15], 10, -30611744), p = a(p, f, h, d, e[g + 6], 15, -1560198380), d = a(d, p, f, h, e[g + 13], 21, 1309151649), h = a(h, d, p, f, e[g + 4], 6, -145523070), f = a(f, h, d, p, e[g + 11], 10, -1120210379), p = a(p, f, h, d, e[g + 2], 15, 718787259), d = a(d, p, f, h, e[g + 9], 21, -343485551), h = t(h, s), d = t(d, u), p = t(p, c), f = t(f, l);
            return [h, d, p, f]
        }

        function u(e) {
            for (var t = "", n = 32 * e.length, r = 0; r < n; r += 8) t += String.fromCharCode(e[r >> 5] >>> r % 32 & 255);
            return t
        }

        function c(e) {
            var t = [];
            for (t[(e.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1) t[r] = 0;
            for (var n = 8 * e.length, r = 0; r < n; r += 8) t[r >> 5] |= (255 & e.charCodeAt(r / 8)) << r % 32;
            return t
        }

        function l(e) {
            for (var t, n = "0123456789abcdef", r = "", i = 0; i < e.length; i += 1) t = e.charCodeAt(i), r += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
            return r
        }

        function h(e) {
            return unescape(encodeURIComponent(e))
        }

        function d(e) {
            return u(s(c(t = h(e)), 8 * t.length));
            var t
        }

        function p(e, t) {
            return function(e, t) {
                var n, r, i = c(e),
                    o = [],
                    a = [];
                for (o[15] = a[15] = void 0, 16 < i.length && (i = s(i, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ i[n], a[n] = 1549556828 ^ i[n];
                return r = s(o.concat(c(t)), 512 + 8 * t.length), u(s(a.concat(r), 640))
            }(h(e), h(t))
        }

        function f(e, t, n) {
            return t ? n ? p(t, e) : l(p(t, e)) : n ? d(e) : l(d(e))
        }
        "function" == typeof define && define.amd ? define((function() {
            return f
        })) : "object" == typeof module && module.exports ? module.exports = f : e.md5 = f
    }(this);
const atVersion = "3.1.2";
if ("undefined" != typeof appID) {
    1 == confirm("　　3.0版本更新需要修改一下配置，深感抱歉，但是为了更好的体验不得不这样。\n　　如果不想更换，可以继续使用2.4.2版本，这也是比较成熟的版本了，但是以后不会再维护。更换详情请点击确定前往文档查看") && (location.href = "https://artitalk.js.org/release.html")
}
const atEmojiQQ = {
        qq_aini: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aini.gif",
        qq_aixin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aixin.gif",
        qq_aoman: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/aoman.gif",
        qq_baiyan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.gif",
        qq_bangbangtang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bangbangtang.gif",
        qq_baojin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baojin.gif",
        qq_baoquan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baoquan.gif",
        qq_bishi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.gif",
        qq_bizui: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.gif",
        qq_cahan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/cahan.gif",
        qq_caidao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/caidao.gif",
        qq_chi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chi.gif",
        qq_ciya: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ciya.gif",
        qq_dabing: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dabing.gif",
        qq_daku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/daku.gif",
        qq_dan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dan.gif",
        qq_deyi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/deyi.gif",
        qq_doge: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/doge.gif",
        qq_fadai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fadai.gif",
        qq_fanu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fanu.gif",
        qq_fendou: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fendou.gif",
        qq_ganga: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ganga.gif",
        qq_gouyin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/gouyin.gif",
        qq_guzhang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guzhang.gif",
        qq_haixiu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haixiu.gif",
        qq_hanxiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hanxiao.gif",
        qq_haobang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haobang.gif",
        qq_haqian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haqian.gif",
        qq_hecai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hecai.gif",
        qq_hexie: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/hexie.gif",
        qq_huaixiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/huaixiao.gif",
        qq_jie: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jie.gif",
        qq_jingkong: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingkong.gif",
        qq_jingxi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingxi.gif",
        qq_jingya: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingya.gif",
        qq_juhua: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/juhua.gif",
        qq_keai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/keai.gif",
        qq_kelian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kelian.gif",
        qq_koubi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/koubi.gif",
        qq_ku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ku.gif",
        qq_kuaikule: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kuaikule.gif",
        qq_kulou: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kulou.gif",
        qq_kun: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kun.gif",
        qq_lanqiu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lanqiu.gif",
        qq_leiben: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/leiben.gif",
        qq_lenghan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lenghan.gif",
        qq_liuhan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liuhan.gif",
        qq_liulei: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liulei.gif",
        qq_nanguo: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/nanguo.gif",
        qq_OK: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/OK.gif",
        qq_penxue: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/penxue.gif",
        qq_piezui: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/piezui.gif",
        qq_pijiu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/pijiu.gif",
        qq_qiang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiang.gif",
        qq_qiaoda: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiaoda.gif",
        qq_qinqin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qinqin.gif",
        qq_qiudale: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qiudale.gif",
        qq_quantou: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/quantou.gif",
        qq_saorao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/saorao.gif",
        qq_se: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/se.gif",
        qq_shengli: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengli.gif",
        qq_shouqiang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shouqiang.gif",
        qq_shuai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shuai.gif",
        qq_shui: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shui.gif",
        qq_tiaopi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaopi.gif",
        qq_touxiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/touxiao.gif",
        qq_tu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tu.gif",
        qq_tuosai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tuosai.gif",
        qq_weiqu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weiqu.gif",
        qq_weixiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weixiao.gif",
        qq_woshou: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/woshou.gif",
        qq_wozuimei: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wozuimei.gif",
        qq_wunai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wunai.gif",
        qq_xia: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xia.gif",
        qq_xiaojiujie: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaojiujie.gif",
        qq_xiaoku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoku.gif",
        qq_xiaoyanger: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoyanger.gif",
        qq_xieyanxiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xieyanxiao.gif",
        qq_xigua: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xigua.gif",
        qq_xu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xu.gif",
        qq_yangtuo: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yangtuo.gif",
        qq_yinxian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yinxian.gif",
        qq_yiwen: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yiwen.gif",
        qq_youhengheng: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/youhengheng.gif",
        qq_youling: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/youling.gif",
        qq_yun: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yun.gif",
        qq_zaijian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zaijian.gif",
        qq_zhayanjian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhayanjian.gif",
        qq_zhemo: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhemo.gif",
        qq_zhouma: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhouma.gif",
        qq_zhuakuang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhuakuang.gif",
        qq_zuohengheng: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zuohengheng.gif"
    },
    atEmojiTB = {
        OK: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/OK.png",
        what: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/what.png",
        "不高兴": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/不高兴.png",
        "乖": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/乖.png",
        "你懂的": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/你懂的.png",
        "便便": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/便便.png",
        "勉强": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/勉强.png",
        "吐": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/吐.png",
        "吐舌": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/吐舌.png",
        "呀咩爹": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/呀咩爹.png",
        "呵呵": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/呵呵.png",
        "哈哈": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/哈哈.png",
        "啊": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/啊.png",
        "喷": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/喷.png",
        "大拇指": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/大拇指.png",
        "太开心": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/太开心.png",
        "太阳": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/太阳.png",
        "委屈": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/委屈.png",
        "小乖": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/小乖.png",
        "小红脸": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/小红脸.png",
        "彩虹": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/彩虹.png",
        "心碎": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/心碎.png",
        "怒": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/怒.png",
        "惊哭": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/惊哭.png",
        "惊讶": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/惊讶.png",
        "懒得理": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/懒得理.png",
        "手纸": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/手纸.png",
        "挖鼻": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/挖鼻.png",
        "捂嘴笑": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/捂嘴笑.png",
        "星星月亮": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/星星月亮.png",
        "汗": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/汗.png",
        "沙发": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/沙发.png",
        "泪": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/泪.png",
        "滑稽": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/滑稽.png",
        "灯泡": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/灯泡.png",
        "爱心": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/爱心.png",
        "犀利": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/犀利.png",
        "狂汗": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/狂汗.png",
        "玫瑰": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/玫瑰.png",
        "疑问": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/疑问.png",
        "真棒": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/真棒.png",
        "睡觉": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/睡觉.png",
        "礼物": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/礼物.png",
        "笑尿": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/笑尿.png",
        "笑眼": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/笑眼.png",
        "红领巾": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/红领巾.png",
        "胜利": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/胜利.png",
        "花心": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/花心.png",
        "茶杯": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/茶杯.png",
        "药丸": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/药丸.png",
        "蛋糕": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/蛋糕.png",
        "蜡烛": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/蜡烛.png",
        "鄙视": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/鄙视.png",
        "酷": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/酷.png",
        "酸爽": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/酸爽.png",
        "钱币": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/钱币.png",
        "阴险": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/阴险.png",
        "音乐": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/音乐.png",
        "香蕉": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/香蕉.png",
        "黑线": "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/黑线.png"
    },
    atEmojiBB = {
        baiyan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/baiyan.png",
        bishi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bishi.png",
        bizui: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/bizui.png",
        chan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/chan.png",
        daku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/daku.png",
        dalao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalao.png",
        dalian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dalian.png",
        dianzan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/dianzan.png",
        doge: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/doge.png",
        facai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/facai.png",
        fadai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fadai.png",
        fanu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/fanu.png",
        ganga: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/ganga.png",
        guilian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guilian.png",
        guzhang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/guzhang.png",
        haixiu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/haixiu.png",
        heirenwenhao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/heirenwenhao.png",
        huaixiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/huaixiao.png",
        jingxia: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/jingxia.png",
        keai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/keai.png",
        koubi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/koubi.png",
        kun2: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/kun2.png",
        lengmo: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/lengmo.png",
        liubixue: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liubixue.png",
        liuhan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liuhan.png",
        liulei: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/liulei.png",
        mudengkoudai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/mudengkoudai.png",
        nanguo: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/nanguo.png",
        outu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/outu.png",
        qinqin: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/qinqin.png",
        se: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/se.png",
        shengbing: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengbing.png",
        shengqi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shengqi.png",
        shuizhao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/shuizhao.png",
        sikao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/sikao.png",
        tiaokan: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaokan.png",
        tiaopi: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tiaopi.png",
        touxiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/touxiao.png",
        tuxue: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/tuxue.png",
        weiqu: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/weiqu.png",
        wunai: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/wunai.png",
        xiaoku: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xiaoku.png",
        xieyanxiao: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/xieyanxiao.png",
        yiwen: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yiwen.png",
        yun: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/yun.png",
        zaijian: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zaijian.png",
        zhoumei: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhoumei.png",
        zhuakuang: "https://cdn.jsdelivr.net/gh/Artitalk/Artitalk-emoji/zhuakuang.png"
    };
var atEmojiQ = "",
    atEmojiT = "",
    atEmojiB = "";
for (let e in atEmojiQQ) atEmojiQ = atEmojiQ + "<img alt='[" + e + "]' title='" + e + "' onclick='insertEmoji(\"[" + e + "]\")' class='atemoji gallery-group-img' src='" + atEmojiQQ[e] + "'/>";
for (let e in atEmojiTB) atEmojiT = atEmojiT + "<img alt='[" + e + "]' title='" + e + "' onclick='insertEmoji(\"[" + e + "]\")' class='atemoji gallery-group-img' src='" + atEmojiTB[e] + "'/>";
for (let e in atEmojiBB) atEmojiB = atEmojiB + "<img alt='[" + e + "]' title='" + e + "' onclick='insertEmoji(\"[" + e + "]\")' class='atemoji gallery-group-img' src='" + atEmojiBB[e] + "'/>";

function Logout() {
    AV.User.logOut(), location.reload()
}

function insertEmoji(e) {
    let t = document.getElementById("neirong"),
        n = t.value.length;
    t.focus(), void 0 !== document.selection ? document.selection.createRange().text = e : t.value = t.value.substr(0, t.selectionStart) + e + t.value.substring(t.selectionStart, n), preview()
}

function preview() {
    document.getElementById("clickForPreview").click()
}

function Artitalk(e) {
    return new atEvery(e)
}

function atEvery(e) {
    return this.init(e), this
}
atEvery.prototype.init = function(e) {
    let t = this;
    return t.config = e, e && t._init(), t
}, atEvery.prototype._init = function() {
    let e = this,
        {
            appId: t,
            appKey: n,
            lang: r,
            pageSize: i,
            atEmoji: o,
            bgImg: a,
            motion: s,
            cssUrl: u,
            shuoPla: c,
            avatarPla: l,
            serverURL: h,
            color1: d,
            color2: p,
            color3: f
        } = e.config;
    switch (r = void 0 === r || "" === r ? "zh" : r, a = void 0 === a || "" === a ? "https://cdn.jsdelivr.net/gh/GlumeL/Static@master/Butterfly/3.1.0/img/PLK.gif" : a, r) {
        case "zh":
            var g = "加载更多...",
                m = "预览",
                _ = "发布",
                v = "已登录",
                b = "确定",
                y = "退出登录",
                w = "用户",
                k = "密码",
                j = "登录",
                A = "取消",
                x = "发布说说",
                E = "请先登录",
                S = "头像url",
                O = "确定删除本条说说吗？",
                C = "删除成功",
                T = "表情",
                P = "加载中";
            break;
        case "en":
            g = "load more...", m = "Preview", _ = "Publish", v = "logged", b = "Ok", y = "Sign out", w = "Username", k = "Password", j = "Log in", A = "Cancel", x = "Post talk", E = "Please log in first", S = "Avatar url", O = "Are you sure you want to devare this article?", C = "Successfully devared", T = "emoji", P = "Loading";
            break;
        case "es":
            g = "Carga más...", m = "Avance", _ = "Lanzamiento", v = "Registrado", b = "Determinar", y = "Desconectar", w = "Usuario", k = "Contraseña", j = "Iniciar sesión", A = "Cancelar", x = "Publicar charla", E = "Por favor ingresa primero", S = "URL del avatar", O = "¿Estás seguro de que deseas eliminar este artículo?", C = "Eliminado con éxito", T = "expresión", P = "Cargando"
    }
    let z = "";
    for (let e in o) z = z + "<img alt='[" + e + "]' title='" + e + "' onclick='insertEmoji(\"[" + e + "]\")' class='atemoji gallery-group-img' src='" + o[e] + "'/>";
    c = void 0 === c ? "" : c, l = void 0 === l ? "" : l, d = void 0 === d || "" === d ? "RGBA(255, 125, 73, 0.75)" : d, p = void 0 === p || "" === p ? "#9BCD9B" : p, f = void 0 === f || "" === f ? "white" : f, i = void 0 === i ? "5" : i;
    try {
        "" !== h ? AV.init({
            appId: t,
            appKey: n,
            serverURL: h
        }) : AV.init({
            appId: t,
            appKey: n
        })
    } catch (e) {
        let t = e.toString();
        console.error(t), -1 != t.indexOf("appId is not defined") ? console.log("appId没找到") : -1 != t.indexOf("appKey is not defined") && console.log("appKey没找到")
    }

    function I(e) {
        if (void 0 !== e) {
            for (let t in atEmojiQQ) {
                let n = "[" + t + "]",
                    r = "<img class='atemoji gallery-group-img' src='" + atEmojiQQ[t] + "'/>";
                for (; - 1 != e.indexOf(n);) e = e.replace(n, r)
            }
            for (let t in atEmojiTB) {
                let n = "[" + t + "]",
                    r = "<img class='atemoji gallery-group-img' src='" + atEmojiTB[t] + "'/>";
                for (; - 1 != e.indexOf(n);) e = e.replace(n, r)
            }
            for (let t in atEmojiBB) {
                let n = "[" + t + "]",
                    r = "<img class='atemoji gallery-group-img' src='" + atEmojiBB[t] + "'/>";
                for (; - 1 != e.indexOf(n);) e = e.replace(n, r)
            }
            for (let t in o) {
                let n = "[" + t + "]",
                    r = "<img class='atemoji gallery-group-img' src='" + o[t] + "'/>";
                for (; - 1 != e.indexOf(n);) e = e.replace(n, r)
            }
            return e
        }
    }

    function M(e) {
        if (!document.getElementById(e)) return;
        document.getElementById(e).style.display = ""
    }

    function q(e) {
        if (!document.getElementById(e)) return;
        document.getElementById(e).style.display = "none"
    }

    function N() {
        M("shade"), M("shuoshuo-modal")
    }

    function L() {
        q("shade"), q("shuoshuo-modal")
    }
    let U = "";
    if (!document.getElementById("add-Artitalk_Style"))
        if ("" === u || void 0 === u) {
            U = "div#artitalk_main {    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);  }  #artitalk_main .shuoshuo_row {  width: 100%;  margin-top: 10px;  display: flex;  }  #artitalk_main .artitalk_child {  width: 100%;  }  #artitalk_main #shuoshuo_content {  padding: 10px;  /* min-height: 500px; */  }  #artitalk_main body.theme-dark .cbp_tmtimeline::before {  background: RGBA(255, 255, 255, 0.06);  }  #artitalk_main ul.cbp_tmtimeline {  padding: 0;  }  #artitalk_main .cbp_tmtimeline {  margin: 30px 0 0 0;  padding: 0;  list-style: none;  display: inline;  position: relative;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime {  display: block;  /* width: 29%; */  /* padding-right: 110px; */  max-width: 70px;  position: absolute;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span {  display: block;  text-align: right;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:first-child {  font-size: 0.9em;  color: #bdd0db;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:last-child {  font-size: 1.2em;  color: #9bcd9b;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmtime span:last-child {  color: RGBA(255, 125, 73, 0.75);  }  #artitalk_main div.cbp_tmlabel>p {  margin-bottom: 0;  }  #artitalk_main div class.cdp_tmlabel>li .cbp_tmlabel {  margin-bottom: 0;  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmlabel {  margin: 0 0 45px 65px;  z-index: 1;  background: " + p + ";  color: " + f + " ;  padding: 0.8em 1.2em 0.4em 1.2em;  /* font-size: 1.2em; */  font-weight: 300;  line-height: 1.4;  position: relative;  border-radius: 5px;  transition: all 0.3s ease 0s;  box-shadow: 0 1px 2px rgba(0,0,0,0.15); display: block;  }  #artitalk_main .cbp_tmlabel:hover {  /* transform: scale(1.05); */  transform: translateY(-3px);  z-index: 1;  box-shadow: 0 15px 32px rgba(0,0,0,0.15) ;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel {    background: " + d + ';  }  #artitalk_main .cbp_tmtimeline>li .cbp_tmlabel:after {  right: 100%;  border: solid transparent;  z-index: -1;  content: " ";  height: 0;  width: 0;  position: absolute;  pointer-events: none;  border-right-color: ' + p + ";  border-width: 10px;  top: 4px;  }  #artitalk_main .cbp_tmtimeline>li:nth-child(odd) .cbp_tmlabel:after {    border-right-color: " + d + ";  }  #artitalk_main p.shuoshuo_time {  margin-top: 10px;  border-top: 1px dashed #fff;  padding-top: 5px;  font-size: 12px;  }  @media screen and (max-width: 65.375em) {  #artitalk_main .cbp_tmtimeline>li .cbp_tmtime span:last-child {    font-size: 1.2em;  }  }  #artitalk_main .shuoshuo_author_img img {  border: 1px solid #ddd;  padding: 2px;  float: left;  border-radius: 64px;  transition: all 1s;  }  #artitalk_main .artitalk_avatar {  border-radius: 100% ;  -moz-border-radius: 100% ;  box-shadow: inset 0 -1px 0 3333sf;  -webkit-box-shadow: inset 0 -1px 0 3333sf;  -webkit-transition: 0.4s;  -webkit-transition: -webkit-transform 0.4s ease-out;  transition: transform 0.4s ease-out;  -moz-transition: -moz-transform 0.4s ease-out;  }  #artitalk_main .artitalk_avatar:hover {  -webkit-transform: rotateZ(360deg);  -moz-transform: rotateZ(360deg);  -o-transform: rotateZ(360deg);  -ms-transform: rotateZ(360deg);  transform: rotateZ(360deg);  }  #artitalk_main .shuoshuo_text {  width: 100%;  height: 130px;  padding: 8px 16px;  background-repeat: no-repeat;  background-position: right;  transition: all 0.35s ease-in-out 0s;  outline-style: none;  border: 1px solid #ccc;  border-radius: 6px;  resize: none;  background-color: transparent;  color: #999;  }  #artitalk_main .shuoshuo_inputs {  outline-style: none;  border: 1px solid #ccc;  padding: 8px 16px;  width: 40%;  font-size: 12px;  background-color: transparent;  color: #999;  }  #operare_artitalk .at_button,  #artitalk_main .at_button {    background-color: " + d + ";  /* Green */  border: none;  margin-left: 5px;  color: " + f + ";  padding: 8px 16px;  text-align: center;  text-decoration: none;  height: auto;  line-height: 20px;  display: inline-block;  font-size: 12px;  border-radius: 12px;  /* circle */  outline: none;  cursor: pointer;  }  #operare_artitalk .at_button:hover,  #artitalk_main .at_button:hover {      background-color: " + p + ';  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.24), 0 8px 16px 0 rgba(0,0,0,0.19);  }  #artitalk_main #article-container ul p {  margin: 0 0 1rem;  }  #artitalk_main .power {  text-align: right;  color: #999;  margin-top: 10px;  font-size: 0.75em;  padding: 0.5em 0;  }  #artitalk_main .power a {  font-size: 0.75em;  position: relative;  cursor: pointer;  color: #1abc9c;  text-decoration: none;  display: inline-block;  }  #artitalk_main .shuoshuo_row .col.col-80 {  width: 80%;  float: left;  }  #artitalk_main .shuoshuo_row .col.col-20 {  width: 20%;  float: right;  text-align: right;  }  #artitalk_main #preview {  width: 100%;  float: left;  margin: 0.5rem 0 0;  padding: 7px;  box-shadow: 0 0 1px #f0f0f0;  }  #artitalk_main #lazy {  background: #fff;  bottom: 0;  left: 0;  position: fixed;  right: 0;  top: 0;  z-index: 9999;  }  #artitalk_main .preloader {  position: absolute;  margin-left: -55px;  margin-top: -100px;  height: 110px;  width: 110px;  left: 50%;  top: 50%;  }  #artitalk_main .preloader>svg>g>path {  stroke: #9ea1a4;  stroke-width: 0.25;  }  #artitalk_main .preloader>svg>path {  stroke: #9ea1a4;  stroke-width: 0.25;  }  #artitalk_main #cloud {  position: relative;  z-index: 2;  }  #artitalk_main #cloud path {  fill: #efefef;  }  #artitalk_main #sun {  margin-left: -10px;  margin-top: 6px;  opacity: 0;  width: 60px;  height: 60px;  position: absolute;  left: 45px;  top: 15px;  z-index: 1;  animation-name: rotate;  animation-duration: 16000ms;  animation-iteration-count: infinite;  animation-timing-function: linear;  }  #artitalk_main #sun path {  stroke-width: 0.18;  fill: #9ea1a4;  }  #artitalk_main .rain {  position: absolute;  width: 70px;  height: 70px;  margin-top: -32px;  margin-left: 19px;  }  #artitalk_main .drop {  opacity: 1;  background: #9ea1a4;  display: block;  float: left;  width: 3px;  height: 10px;  margin-left: 4px;  border-radius: 0px 0px 6px 6px;  animation-name: drop;  animation-duration: 350ms;  animation-iteration-count: infinite;  }  #artitalk_main .drop:nth-child(1) {  animation-delay: -130ms;  }  #artitalk_main .drop:nth-child(2) {  animation-delay: -240ms;  }  #artitalk_main .drop:nth-child(3) {  animation-delay: -390ms;  }  #artitalk_main .drop:nth-child(4) {  animation-delay: -525ms;  }  #artitalk_main .drop:nth-child(5) {  animation-delay: -640ms;  }  #artitalk_main .drop:nth-child(6) {  animation-delay: -790ms;  }  #artitalk_main .drop:nth-child(7) {  animation-delay: -900ms;  }  #artitalk_main .drop:nth-child(8) {  animation-delay: -1050ms;  }  #artitalk_main .drop:nth-child(9) {  animation-delay: -1130ms;  }  #artitalk_main .drop:nth-child(10) {  animation-delay: -1300ms;  }  #artitalk_main .artitalk_loading_text {  font-family: Helvetica, " Helvetica Neue ", sans-serif;  letter-spacing: 1px;  text-align: center;  margin-left: -43px;  font-weight: bold;  margin-top: 20px;  font-size: 11px;  color: #a0a0a0;  width: 200px;  }  #artitalk_main .shuoshuoimg {  cursor: pointer;  transition: all 1s;  z-index: 2;  }  #artitalk_main .shuoshuoimg:hover {  transform: scale(3.5);  }  #artitalk_main .hide,  #operare_artitalk .hide {  display: none;  }  #operare_artitalk .c1 {  position: fixed;  top: 0;  bottom: 0;  left: 0;right: 0;  background: rgba(0,0,0,0.5);  z-index: 2;  }  #operare_artitalk .c2 {  background-color: #fff;  position: fixed;  width: 400px;  height: auto;  top: 50%;  left: 50%;  z-index: 3; margin-top: -150px;  margin-left: -200px;  box-shadow: 0 15px 35px rgba(50,50,93,0.1), 0 5px 15px rgba(0,0,0,0.07);  opacity: 0.85;  border: 0;  border-radius: 10px;  }  #operare_artitalk .shuoshuo_input_log {  outline-style: none;  margin-top: 10px;  border: 1px solid #ccc;  border-radius: 6px;  padding: 8px 16px;  font-size: 12px;  background-color: transparent;  color: #999;  }  #artitalk_main .delete_right {  cursor: pointer;  width: 12px;  height: 12px;  position: absolute;  right: 12px;  }  #artitalk_main svg {  display: inline;  }  #artitalk_main .cbp_tmlabel>p,  #artitalk_main h1,  #artitalk_main h2,  #artitalk_main h3,  #artitalk_main h4,  #artitalk_main h5,  #artitalk_main h6,  #artitalk_main em {  word-wrap: break-word;  word-break: break-all;  }  #artitalk_main .shuoshuo_emoji {  border: 1px solid #ccc;  border-radius: 6px 6px 0 0;  height: 120px;  overflow: auto;  margin-top: 10px;  border-bottom: none;  }  #artitalk_main .atemoji {  max-height: 28px;  width: 28px;  display: inline;  vertical-align: middle;  }  #artitalk_main .shuoshuo_emoji>.atemoji {  cursor: pointer;  margin: 0 0 0 10px;  display: inline;  }  #artitalk_main i>.atemoji {  cursor: pointer;  margin: 0 0 0 10px;  }  #artitalk_main .shuoshuo_emoji>a {  display: inline;  }  #artitalk_main #preview>p>.atemoji {  display: inline;  }  #artitalk_main .shuoshuo_emoji>.atemoji:hover {  transform: scale(1.5);  }  #artitalk_main div#shuoshuo_emojiswitch {  height: 40px;  width: auto;  border-radius: 0 0 6px 6px;  border-collapse: collapse;  border: 1px solid #ccc;  border-top: none;  }  #artitalk_main .shuoshuo_emoji_part {  width: 25%;  cursor: pointer;  align-content: center;  text-align: center;  line-height: 40px;  }  #artitalk_main .shuoshuo_emoji_part:hover {  background-color: #ccc;  color: #fff;  }  #artitalk_main .zuiliangdezai {  background-color: #ccc;  color: #fff;  }  #artitalk_main .pingjun {  display: flex;  }  #artitalk_main #article-container img {  margin: 0 0 0 0;  }  #artitalk_main .preview_now {  display: none;  }  #artitalk_main div#loading_txt {  font-size: 20px;  }  #artitalk_main audio {  display: block;  width: 100%;  outline: none;  opacity: 0.8;  }  #artitalk_main video {  z-index: 0;  }p.shuoshuo_time>span>a:hover {color: red;}p.shuoshuo_time>span>a {color: black;text-decoration: none;}  #artitalk_main textarea#neirong:focus {  background-position-y: 150px;  transition: all 0.35s ease-in-out 0s;  }  #artitalk_main img.atemoji {  max-height: 28px;  width: 28px;  display: inline;  vertical-align: middle;  }  #artitalk_main span.cbp_tmlabel>p {  overflow: unset;  }  #artitalk_main ul#maina>li {  list-style: none;  }  #artitalk_main div#artitalk_main {  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);  }  #artitalk_main .c2>center>p {  margin-top: 10px;  margin-bottom: 10px;  }  @-moz-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-webkit-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-o-keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @keyframes rotate {  0% {    transform: rotateZ(0deg);  }  100% {    transform: rotateZ(360deg);  }  }  @-moz-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @-webkit-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @-o-keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }  @keyframes drop {  50% {    height: 45px;    opacity: 0;  }  51% {    opacity: 0;  }  100% {    height: 1px;    opacity: 0;  }  }';
            let e = document.createElement("style");
            e.type = "text/css", e.innerHTML = U, e.id = "add-Artitalk-Style", document.head.appendChild(e)
        } else {
            let e = document.createElement("link");
            e.rel = "stylesheet", e.href = u, e.id = "add-Artitalk-Style", document.head.appendChild(e)
        } var B = '<div id=\'artitalk_part1\'><div id="main" class="site-main" role="main"><div id="shuoshuo_content"><div id="ccontent"></div><div id=\'readButton\' style=\'\'><center><button id="readmore" class="at_button" style="margin-bottom: 15px;display: none">' + g + '</button></center></div></div><div id="shuoshuo_input" class="shuoshuo_active" style="display: none;"><div id="shuoshuo_edit"><textarea class="shuoshuo_text" oninput="preview()" id="neirong" placeholder="' + c + '"style="background-image: url(' + a + ');z-index: 0"></textarea><span id="drag_area" class="z-index: -1;"></span></div><div id="shuoshuo_parttwo" class="shuoshuo_parttwo"><div id="shuoshuo_emoji_Tieba" class="shuoshuo_emoji" style=\'display: none\'></div><div id="shuoshuo_emoji_BiliBili" class="shuoshuo_emoji" style=\'display: none\'></div><div id="shuoshuo_emoji_QQ" class="shuoshuo_emoji" style=\'display: none\'></div><div id="shuoshuo_emoji_custom" class="shuoshuo_emoji" style=\'display: none\'></div><div id="shuoshuo_emojiswitch" class="shuoshuo_emojiswitch" style=\'display: none\'><div id="switch_1" class="shuoshuo_emoji_part zuiliangdezai">Tieba</div><div id="switch_2" class="shuoshuo_emoji_part">BiliBili</div><div id="switch_3" class="shuoshuo_emoji_part">QQ</div><div id="switch_4" class="shuoshuo_emoji_part">Custom</div></div><div id="preview" class="preview_now"></div></div><div class="shuoshuo_submit"><div class="shuoshuo_row"><input class="artitalk_child shuoshuo_inputs" style=\'display: none\' id="email" value=""  placeholder=" ' + S + '"><input class="artitalk_child shuoshuo_inputs" style="display: none" id="commentNick" value="" placeholder="' + S + '"><div class="artitalk_child"><button class="at_button" id=\'atSave\' style="float: right;">' + _ + '</button><button class="at_button" id=\'commentSave\' style="display:none;float: right;">' + _ + '</button><button class="at_button" id=\'atPreview\' style="float: right;">' + m + '</button><button class="at_button" id=\'loadEmoji\' style="float: right;">' + T + '</button></div></div></div></div></div><div class="power"><div style="font-size: 25px;display: none; cursor: pointer" id="pubComment"><svg t="1591347684072" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9731" width="30" height="30" style=""><path d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m0 953.62C268.49 953.62 70.38 755.51 70.38 512S268.49 70.38 512 70.38 953.62 268.49 953.62 512 755.51 953.62 512 953.62z" p-id="9732" fill="#707070"></path><path d="M771.1 726.4H514.8c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23h256.3c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM771.1 654.55H587.92c-15.56 0-28.23 12.66-28.23 28.23S572.35 711 587.92 711H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.22-28.23-28.22zM771.1 582.69H654.22c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM809.25 361.96c0-14.79-5.74-28.68-16.17-39.1L657.66 187.45c-10.43-10.43-24.32-16.17-39.1-16.17s-28.67 5.74-39.1 16.17L207.23 559.67c-5.06 5.06-7.88 12.06-7.72 19.21l3.61 172.49a26.32 26.32 0 0 0 25.8 25.83l172.6 3.81c0.22 0.01 0.44 0.01 0.67 0.01 6.95 0 13.76-2.82 18.66-7.73l372.22-372.22c10.43-10.43 16.18-24.32 16.18-39.11z m-53.5 1.79L391.5 727.99l-136.14-3-2.85-135.96 364.25-364.26c0.99-0.98 2.59-0.98 3.58-0.01l135.4 135.41c0.99 0.99 0.99 2.59 0.01 3.58z" p-id="9733" fill="#707070"></path></svg></div><div style="font-size: 25px;display: inline; cursor: pointer" id="pubShuo"title="' + x + '"><svg t="1591347684072"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9731" width="30" height="30"  style="display: inline"><path d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z m0 953.62C268.49 953.62 70.38 755.51 70.38 512S268.49 70.38 512 70.38 953.62 268.49 953.62 512 755.51 953.62 512 953.62z" p-id="9732" fill="#707070"></path><path d="M771.1 726.4H514.8c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23h256.3c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM771.1 654.55H587.92c-15.56 0-28.23 12.66-28.23 28.23S572.35 711 587.92 711H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.22-28.23-28.22zM771.1 582.69H654.22c-15.57 0-28.23 12.66-28.23 28.23s12.66 28.23 28.23 28.23H771.1c15.57 0 28.23-12.66 28.23-28.23s-12.67-28.23-28.23-28.23zM809.25 361.96c0-14.79-5.74-28.68-16.17-39.1L657.66 187.45c-10.43-10.43-24.32-16.17-39.1-16.17s-28.67 5.74-39.1 16.17L207.23 559.67c-5.06 5.06-7.88 12.06-7.72 19.21l3.61 172.49a26.32 26.32 0 0 0 25.8 25.83l172.6 3.81c0.22 0.01 0.44 0.01 0.67 0.01 6.95 0 13.76-2.82 18.66-7.73l372.22-372.22c10.43-10.43 16.18-24.32 16.18-39.11z m-53.5 1.79L391.5 727.99l-136.14-3-2.85-135.96 364.25-364.26c0.99-0.98 2.59-0.98 3.58-0.01l135.4 135.41c0.99 0.99 0.99 2.59 0.01 3.58z" p-id="9733" fill="#707070"></path></svg></div><div style="font-size: 25px;display: inline; cursor: pointer" id="switchUser" title="' + j + '"><svg t="1591347848063"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12288" width="30" height="30"  style="display: inline"><path d="M515.541449 7.082899c-280.359429 0-508.458551 228.120391-508.458551 508.458551s228.120391 508.458551 508.458551 508.458551 508.458551-228.120391 508.458551-508.458551S795.900879 7.082899 515.541449 7.082899zM515.541449 981.864196c-257.132626 0-466.301477-209.190121-466.301477-466.322747 0-257.132626 209.168851-466.322747 466.301477-466.322747s466.301477 209.190121 466.301477 466.322747S772.674075 981.864196 515.541449 981.864196zM614.574414 524.177056 614.574414 524.177056c47.751075-31.96876 79.230625-86.398604 79.230625-148.187857 0-98.437405-79.804915-178.24232-178.24232-178.24232-98.437405 0-178.24232 79.804915-178.24232 178.24232 0 61.810523 31.479551 116.219097 79.251895 148.187857-100.266622 39.519598-171.244501 137.170014-171.244501 251.453545 0 0.23397 0 0.446669 0.02127 0.659369 0 0.04254-0.02127 0.10635-0.02127 0.14889 0 15.612155 12.65563 28.246516 28.267786 28.246516 15.590885 0 21.886796-12.63436 21.886796-28.246516 0-0.340319-0.08508-0.659369-0.10635-1.020958 0.10635-118.005774 102.159649-219.995264 220.207964-219.995264 118.112124 0 220.207964 102.095839 220.207964 220.207964 0 0.14889-1.467628 29.054774 21.971875 29.054774 15.505806 0 28.076356-12.57055 28.076356-28.055086 0-0.06381-0.02127-0.12762-0.02127-0.2127 0-0.25524 0.02127-0.510479 0.02127-0.786989C785.797645 661.34707 714.798496 563.696654 614.574414 524.177056zM515.541449 510.734437c-74.402343 0-134.723968-60.321625-134.723968-134.723968 0-74.423613 60.321625-134.723968 134.723968-134.723968 74.423613 0 134.723968 60.321625 134.723968 134.723968S589.943792 510.734437 515.541449 510.734437z" p-id="12289" fill="#707070"></path></svg></div><br>Powered By <a href="https://artitalk.js.org" target="_blank">Artitalk</a><br>3.1.2</div></div>',
        R = '<div id=\'lazy\'><div class="preloader" style="opacity: 1; "><svg version="1.1" id="sun" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"y="0px" width="10px" height="10px" viewBox="0 0 10 10" enable-background="new 0 0 10 10" xml:space="preserve"style="opacity: 1; margin-left: 0px; margin-top: 0px;"><g><path fill="none"d="M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"></path><path fill="none"d="M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"></path><path fill="none"d="M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"></path><path fill="none"d="M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"></path><path fill="none"d="M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"></path><path fill="none"d="M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"></path><path fill="none"d="M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"></path><path fill="none"d="M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"></path><path fill="none"d="M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"></path><path fill="none"d="M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"></path><path fill="none"d="M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"></path><path fill="none"d="M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"></path><path fill="none"d="M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"</path></g></svg><svg version="1.1" id="cloud" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"x="0px" y="0px" width="110px" height="110px" viewBox="0 0 10 10" enable-background="new 0 0 10 10"xml:space="preserve"><path fill="none"d="M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"></path></svg><div class="rain"><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span></div><div class="artitalk_loading_text" id="loading_txt">' + P + "</div></div></div>",
        D = '<div id="shade" class="c1" style=\'display: none\'></div><div id="shuoshuo-modal" class="c2" style=\'display: none\' ><center><p>' + w + '：<input type="text" class="shuoshuo_input_log" id="username"/></p><p>' + k + '：<input type="password" class="shuoshuo_input_log"  id="pwd"/></p><p><input type="button" value="' + j + '" class="at_button" id=\'login\'>&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="' + A + '"  class="at_button" id = \'celLogin\'></p></center><center><div id="logw"></div></center></div><div id="userinfo" class="c2" style=\'display: none\'><center><p><div id="status"></div></p><p><input type="button" class="at_button" value="' + b + '" id="hideuser">&nbsp;&nbsp;&nbsp;&nbsp;<input id="tui" type="button" value="' + y + '" class="at_button" style="display: none;" onclick="Logout();"></p></center></div><div id="shanchu" class="c2" style=\'display: none\'><center><p>' + C + '</p><p><input type="button" class="at_button" value="' + b + '" id="deleteSus"></p><center></div><div id="shanchur" class="c2" style=\'display: none\'><center><p>' + O + "</p><p><div id=\"delete1\"></div></p><center></div><div id='clickForPreview'></div>",
        F = document.createElement("div");
    F.id = "operare_artitalk", document.body.append(F), document.getElementById("operare_artitalk").innerHTML = D, B = (R = 0 === s ? "" : R) + B, document.getElementById("artitalk_main").innerHTML = B, e.seeContent(0, e.config);
    let H = document.getElementById("readmore"),
        W = document.getElementById("pubShuo"),
        V = document.getElementById("switchUser"),
        Q = document.getElementById("celLogin"),
        G = document.getElementById("login"),
        K = document.getElementById("hideuser"),
        $ = document.getElementById("loadEmoji"),
        J = document.getElementById("switch_1"),
        X = document.getElementById("switch_2"),
        Z = document.getElementById("switch_3"),
        Y = document.getElementById("switch_4"),
        ee = document.getElementById("atPreview"),
        te = document.getElementById("clickForPreview"),
        ne = document.getElementById("atSave"),
        re = document.getElementById("deleteSus"),
        ie = 0;
    H.onclick = function() {
        ie += 1, e.seeContent(ie, e.config)
    }, W.onclick = function() {
        AV.User.current() ? "" === document.getElementById("shuoshuo_input").style.display ? q("shuoshuo_input") : M("shuoshuo_input") : (document.getElementById("logw").innerHTML = "<center><pre><code>" + E + "</code></pre></center>", N())
    }, V.onclick = function() {
        document.getElementById("logw").innerHTML = "";
        let e = AV.User.current();
        M("shade"), e ? (M("userinfo"), document.getElementById("status").innerHTML = v + ":\t" + e.attributes.username, M("tui")) : (M("tui"), M("shuoshuo-modal"), N())
    }, Q.onclick = function() {
        L()
    }, G.onclick = function() {
        let t = document.getElementById("pwd").value;
        "" === t && (document.getElementById("logw").innerHTML = "密码不能为空");
        let n = document.getElementById("username").value;
        "" === n && (document.getElementById("logw").innerHTML = "用户名不能为空"), AV.User.logIn(n, t).then((function(t) {
            document.getElementById("ccontent").innerHTML = "", document.getElementById("neirong").value = "", M("lazy"), e.seeContent(0, e.config), L()
        }))
    }, K.onclick = function() {
        q("shade"), q("userinfo")
    }, $.onclick = function() {
        document.getElementById("switch_1").classList.add("zuiliangdezai"), document.getElementById("switch_2").classList.remove("zuiliangdezai"), document.getElementById("switch_3").classList.remove("zuiliangdezai"), document.getElementById("switch_4").classList.remove("zuiliangdezai"), "none" === document.getElementById("shuoshuo_emojiswitch").style.display ? (M("shuoshuo_emoji_Tieba"), M("shuoshuo_emojiswitch"), document.getElementById("shuoshuo_emoji_BiliBili").innerHTML = atEmojiB, document.getElementById("shuoshuo_emoji_Tieba").innerHTML = atEmojiT, document.getElementById("shuoshuo_emoji_QQ").innerHTML = atEmojiQ, document.getElementById("shuoshuo_emoji_custom").innerHTML = z, document.getElementById("shuoshuo_emojiswitch").classList.add("pingjun")) : (q("shuoshuo_emoji_Tieba"), q("shuoshuo_emoji_BiliBili"), q("shuoshuo_emoji_custom"), q("shuoshuo_emoji_QQ"), q("shuoshuo_emojiswitch"), document.getElementById("shuoshuo_emojiswitch").classList.remove("pingjun"))
    }, J.onclick = function() {
        J.classList.add("zuiliangdezai"), Z.classList.remove("zuiliangdezai"), X.classList.remove("zuiliangdezai"), Y.classList.remove("zuiliangdezai"), M("shuoshuo_emoji_Tieba"), q("shuoshuo_emoji_QQ"), q("shuoshuo_emoji_BiliBili"), q("shuoshuo_emoji_custom")
    }, Z.onclick = function() {
        Z.classList.add("zuiliangdezai"), J.classList.remove("zuiliangdezai"), X.classList.remove("zuiliangdezai"), Y.classList.remove("zuiliangdezai"), M("shuoshuo_emoji_QQ"), q("shuoshuo_emoji_Tieba"), q("shuoshuo_emoji_BiliBili"), q("shuoshuo_emoji_custom")
    }, X.onclick = function() {
        X.classList.add("zuiliangdezai"), Z.classList.remove("zuiliangdezai"), J.classList.remove("zuiliangdezai"), Y.classList.remove("zuiliangdezai"), M("shuoshuo_emoji_BiliBili"), q("shuoshuo_emoji_QQ"), q("shuoshuo_emoji_Tieba"), q("shuoshuo_emoji_custom")
    }, Y.onclick = function() {
        Y.classList.add("zuiliangdezai"), Z.classList.remove("zuiliangdezai"), X.classList.remove("zuiliangdezai"), J.classList.remove("zuiliangdezai"), M("shuoshuo_emoji_custom"), q("shuoshuo_emoji_QQ"), q("shuoshuo_emoji_BiliBili"), q("shuoshuo_emoji_Tieba")
    }, ee.onclick = function() {
        let e = document.getElementById("preview"); - 1 !== e.className.indexOf("preview_now") ? e.classList.remove("preview_now") : e.classList.add("preview_now")
    }, ne.onclick = function() {
        let t = AV.User.current();
        t || W.click();
        let n = document.getElementById("neirong").value;
        if ("" === n) throw "说说内容不能为空";
        let r = new(AV.Object.extend("shuoshuo")),
            i = n;
        r.set("atContentMd", i), n = I(n);
        let o = new showdown.Converter;
        o.setOption("strikethrough", 1);
        let a = o.makeHtml(n),
            s = void 0 === t.attributes.img ? "https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png" : t.attributes.img,
            u = boInfo.os;
        r.set("atContentHtml", a), r.set("userOs", u), r.set("avatar", s), M("lazy"), r.save().then((function(t) {
            document.getElementById("ccontent").innerHTML = "", document.getElementById("neirong").value = "", q("preview"), e.seeContent(0, e.config), q("shuoshuo_input")
        }))
    }, te.onclick = function() {
        let e = document.getElementById("neirong").value;
        e = I(e);
        let t = new showdown.Converter;
        t.setOption("strikethrough", 1);
        let n = t.makeHtml(e);
        document.getElementById("preview").innerHTML = n
    }, re.onclick = function() {
        q("shanchu"), q("shade"), M("lazy"), document.getElementById("ccontent").innerHTML = "", e.seeContent(0, e.config)
    }, atEvery.prototype.delete = function(e) {
        function t(e) {
            if (!document.getElementById(e)) return;
            document.getElementById(e).style.display = "none"
        }

        function n(e) {
            if (!document.getElementById(e)) return;
            document.getElementById(e).style.display = ""
        }
        if (!AV.User.current()) {
            return void document.getElementById("pubShuo").click()
        }
        n("shade"), n("shanchur"), document.getElementById("delete1").innerHTML = '<input type="button" class="at_button" value="' + b + '" id="Delete"><input type="button" class="at_button" value="' + A + '" id="cancelDelete">';
        let r = document.getElementById("cancelDelete"),
            i = document.getElementById("Delete");
        r.onclick = function() {
            t("shade"), t("shanchur")
        }, i.onclick = function() {
            r.click(), n("lazy");
            AV.Object.createWithoutData("shuoshuo", e).destroy().then((function(e) {
                n("shade"), n("shanchu")
            }), (function(e) {
                console.log(e.rawMessage)
            }))
        }
    }
}, atEvery.prototype.seeContent = function(e, t) {
    let n = "",
        {
            lang: r,
            pageSize: i,
            motion: o,
            atEmoji: a,
            color1: s,
            color2: u,
            color3: c,
            atComment: l
        } = this.config;
    switch (r = void 0 === r || "" === r ? "zh" : r, r) {
        case "zh":
            var h = "如果你看到这条说说，恭喜你已经配置成功并且可以正常使用了。当你发布一个说说之后，我将会自动消失。快去探索Artitalk吧<br>欢迎加入Artitalk的QQ交流群：1104585229<br>觉得本项目不错的话可以推荐给你的好友或者去GitHub点一个star，感谢支持",
                d = "请在下方输入框进行修改然后点击保存即可",
                p = "保存",
                f = "评论",
                g = "邮箱",
                m = "昵称";
            break;
        case "en":
            h = "If you see this, congratulations, you have successfully configured and can be used normally. When you post one shuoshuo, I will disappear automatically. Quickly explore Artitalk.<br>Welcome to Artitalk’s QQ group: 1104585229<br>If you think this project is good, you can recommend it to your friends or go to GitHub to order a star.", d = "Please modify it in the input box below and click save", p = "save", f = "comments", g = "Mailbox", m = "Nickname";
            break;
        case "es":
            h = "Si ve este artículo, felicidades, se ha configurado correctamente y se puede usar normalmente. Cuando publiques un comentario, desapareceré automáticamente. Explore rápidamente Artitalk. <br> Bienvenido al grupo QQ de Artitalk: 1104585229 <br> Si cree que este proyecto es bueno, puede recomendarlo a sus amigos o ir a GitHub para pedir una estrella, gracias por su apoyo.", d = "Por favor, introduzca las modificaciones en el cuadro de abajo y haga clic en guardar", p = "guardar", f = "comentarios", g = "Buzón", m = "Apodo"
    }

    function _(e) {
        if (!document.getElementById(e)) return;
        document.getElementById(e).style.display = ""
    }
    s = void 0 === s || "" === s ? "RGBA(255, 125, 73, 0.75)" : s, u = void 0 === u || "" === u ? "#9BCD9B" : u, c = void 0 === c || "" === c ? "white" : c, i = void 0 === i ? "5" : i, _("lazy");
    let v = new AV.Query("shuoshuo"),
        b = 0;
    v.descending("createdAt"), v.limit(i), v.skip(i * e), v.find().then((function(t) {
        n = "", t.forEach((function(e) {
            b += 1;
            let t = e.attributes.userOs,
                r = "";
            switch (t) {
                case "windows":
                    r = '<svg t="1591348521231"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16474" width="10" height="10"  style="display: inline"><path d="M412.224 511.904c-47.712-24.512-94.08-36.96-137.888-36.96-5.952 0-11.936 0.192-17.952 0.704-55.872 4.64-106.912 19.36-139.744 30.816-8.704 3.2-17.632 6.56-26.816 10.304l-89.824 311.392c61.696-22.816 116.288-33.952 166.272-33.952 80.832 0 139.52 30.208 188 61.312 22.976-77.92 78.048-266.08 94.496-322.336-11.936-7.296-24.064-14.56-36.512-21.312zM528.352 591.072l-90.432 314.144c26.816 15.36 117.088 64.064 186.208 64.064 55.808 0 118.24-14.304 190.848-43.808l86.368-301.984c-58.624 18.912-114.88 28.512-167.456 28.512-95.936 0-163.104-31.104-205.504-60.96zM292.832 368.8c77.12 0.8 134.144 30.208 181.408 60.512l92.768-317.344c-19.552-11.2-70.816-39.104-107.872-48.608-24.384-5.696-50.016-8.608-77.216-8.608-51.808 0.96-108.384 13.952-172.896 39.808l-88.448 310.592c64.8-24.448 120.64-36.352 172.096-36.352 0.032 0 0.128 0 0.128 0zM1024 198.112c-58.816 22.816-116.192 34.464-171.04 34.464-91.68 0-159.296-31.808-203.104-62.368l-91.936 318.24c61.76 39.712 128.288 59.872 198.112 59.872 56.96 0 115.936-13.664 175.456-40.672l-0.192-2.208 3.744-0.896 88.928-306.432z" p-id="16475" fill="' + c + '"></path></svg> ';
                case "Android":
                    r = '<svg t="1591349177001"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17355" width="10" height="10"  style="display: inline"><path d="M391.405714 276.004571a22.308571 22.308571 0 0 0 0-44.544c-11.995429 0-21.723429 10.276571-21.723428 22.272s9.728 22.272 21.723428 22.272z m241.152 0c11.995429 0 21.723429-10.276571 21.723429-22.272s-9.728-22.272-21.723429-22.272a22.308571 22.308571 0 0 0 0 44.544zM168.539429 381.147429a58.514286 58.514286 0 0 1 58.294857 58.294857v245.723428c0 32.585143-25.709714 58.843429-58.294857 58.843429S109.696 717.714286 109.696 685.165714v-245.723428c0-32 26.294857-58.294857 58.843429-58.294857z m605.732571 10.861714v380.562286c0 34.852571-28.013714 62.866286-62.281143 62.866285h-42.861714v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429s-58.843429-26.294857-58.843428-58.843429v-129.718857H472.594286v129.718857c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429l-0.585143-129.718857H312.594286a62.683429 62.683429 0 0 1-62.866286-62.866285V392.009143h524.580571z m-132.571429-231.424c80.018286 41.142857 134.290286 119.990857 134.290286 210.870857H247.424c0-90.843429 54.272-169.728 134.838857-210.870857L341.705143 85.723429a8.338286 8.338286 0 0 1 2.852571-11.446858c3.986286-1.718857 9.142857-0.585143 11.446857 3.437715L397.147429 153.161143c34.852571-15.433143 73.728-23.990857 114.870857-23.990857s80.018286 8.557714 114.870857 23.990857l41.142857-75.446857c2.304-3.986286 7.424-5.156571 11.446857-3.437715a8.338286 8.338286 0 0 1 2.852572 11.446858zM914.267429 439.442286v245.723428c0 32.585143-26.294857 58.843429-58.843429 58.843429a58.660571 58.660571 0 0 1-58.294857-58.843429v-245.723428a58.148571 58.148571 0 0 1 58.294857-58.294857c32.585143 0 58.843429 25.709714 58.843429 58.294857z" fill="' + c + '" p-id="17356"></path></svg> ';
                case "Linux":
                    r = '<svg t="1591349455279"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17896" width="10" height="10"  style="display: inline"><path d="M833.828 772.167c-14.708-27.427-28.724-65.173-32.06-95.097-7.064-63.345 7.001-95.581-26.311-157.655-20.001-37.27-47.167-69.818-69.762-105.374-57.008-89.708-35.862-181.666-78.106-273.828-14.677-32.021-39.272-58.288-73.372-69.27-40.023-12.889-88.039-6.905-123.821 15.09-97.955 60.213-26.601 240.65-82.234 332.558-34.997 57.817-72.677 108.993-92.906 175.374-15.962 52.376-11.905 116.451-74.135 139.232-16.782 6.143-41.737 5.268-50.966 23.624-5.79 11.518-1.802 24.689 0.951 36.449 2.356 10.066 3.024 19.861 1.87 30.14-1.651 14.71-7.417 28.869-8.274 43.641-0.878 15.142 8.565 24.551 21.704 30.534 47.398 21.585 113.582 34.279 164.669 43.764 66.028 12.258 59.608-7.377 115.821-23.029 39.692-11.052 88.466-13.955 129.206-6.827 43.073 7.536 72.966 44.046 112.09 48.73 33.22 0 210.129-91.293 212.144-131.077 1.811-35.802-33.736-33.163-46.508-56.979zM561.696 188.612c34.429 24.892-1.788 99.81-14.799 87.114 41.625-32.641-34.982-83.122-29.425-11.704-53.249-11.693-3.247-109.731 44.224-75.41z m-4.039 117.923c1.857 28.37-64.491 48.349-85.296 56.455-79.455-0.65-53.966-82.141 7.617-88.858 11.889-1.296 76.451 13.646 77.679 32.403zM407.938 198.841c42.337-29.134 70.265 43.258 33.357 66.249 16.796-88.043-79.787-11.981-12.48 11.418-26.974 29.286-46.681-59.91-20.877-77.667z m-57.874 731.028c-38.514-10.84-181.601-28.379-200.949-63.937-0.276-0.507-0.351-2.272-0.282-4.883-0.019-0.032-0.042-0.063-0.06-0.095-0.833-1.415-0.113-8.165 1.246-16.547 1.879-19.977 5.394-46.894 6.514-49.347 12.905-28.267 12.771-23.836 21.86-26.291 5.612-3.079 13.887-7.607 27.549-19.429 37.781-32.691 49.648-51.05 71.076-37.382 8.427 2.949 16.297 11.207 25.986 25.067a570.9 570.9 0 0 1 8.53 10.204c16.954 20.727 55.205 71.093 68.786 114.074 13.447 30 13.992 58.501-30.256 68.566z m290.721-232.992c-16.92 43.195-1.196 82.899-35.488 120.646-58.579 64.48-168.292 61.287-220.377 1.598 61.991-24.918-79.397-135.334-84.198-181.037-10.461-99.563 81.484-201.457 102.457-296.773 77.359 82.013 125.198-33.75 189.934 21.718 50.436 43.215 102.409 212.603 87.712 277.829-8.345 37.034-32.364 36.425-40.04 56.019z m103.371 199.109c-159.991 95.734-70.13-147.276-65.785-178.44 11.336 103.265 74.062 18.695 110.579 7.453-17.789 5.477 57.616 96.436 56.788 86.041 3.123 39.223-63.176 61.965-101.582 84.946z" fill="' + c + '" p-id="17897"></path></svg> ';
                case "iOS":
                    r = '<svg t="1591349632686"  viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18688" width="10" height="10"  style="display: inline"><path d="M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z" p-id="18689" fill="' + c + '"></path></svg> ';
                case "Max":
                    r = '<svg t="1591349632686"  viewBox="0 0 1084 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18688" width="10" height="10"  style="display: inline"><path d="M821.235026 544.015116c-1.287001-129.729651 105.791442-191.891776 110.553344-194.980577-60.102924-88.030835-153.796561-100.12864-187.258574-101.54434-79.794032-7.979403-155.598362 46.975519-196.010178 46.975519-40.411816 0-102.831341-45.688518-168.983167-44.530218-86.872534 1.287001-167.052666 50.57912-211.840284 128.442651-90.347436 156.756662-23.166009 388.931554 64.864826 515.958505 42.985817 62.162125 94.337137 132.046252 161.647264 129.600951 64.864826-2.574001 89.317835-41.956217 167.696167-41.956217s100.38604 41.956217 169.111867 40.669216c69.755428-1.287001 114.028245-63.449125 156.756662-125.86865 49.42082-72.200729 69.755428-142.084856 70.913728-145.559758C957.14228 750.449998 822.522026 698.969977 821.235026 544.015116L821.235026 544.015116 821.235026 544.015116zM692.277575 163.449065c35.778614-43.371917 59.845524-103.474841 53.281821-163.449065-51.48002 2.059201-113.899545 34.234214-150.83646 77.477431C561.647023 115.958746 532.560811 177.21997 540.411514 235.907194 597.811737 240.411695 656.49896 206.692282 692.277575 163.449065L692.277575 163.449065 692.277575 163.449065z" p-id="18689" fill="' + c + '"></path></svg> ';
                default:
                    r = '<svg t="1591349738696"  viewBox="0 0 1168 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20407" width="10" height="10"  style="display: inline"><path d="M787.333831 588.946093a75.189984 75.189984 0 0 0-75.093984 75.092984 75.189984 75.189984 0 0 0 75.093984 75.093984 75.165984 75.165984 0 0 0 75.067984-75.093984 75.165984 75.165984 0 0 0-75.067984-75.092984m0 222.841953a147.919968 147.919968 0 0 1-147.749968-147.748969c0-81.455982 66.292986-147.747968 147.749968-147.747968 81.431983 0 147.747968 66.291986 147.747968 147.747968 0 81.480982-66.315986 147.748968-147.747968 147.748969m89.452981 102.106978c0.342 0.244 1.317 0.585 2.315999 0.585h0.122l71.484985-39.496992c-1.706-4.022999-9.605998-23.478995-9.605998-43.739991a113.858976 113.858976 0 0 1 107.739977-113.613975c0.853-4.729999 5.557999-31.524993 5.557998-51.639989s-4.704999-46.88399-5.559998-51.637989a113.858976 113.858976 0 0 1-107.737977-113.565976c0-20.357996 7.923998-39.813991 9.605998-43.81299l-70.313985-39.057992-0.293-0.025a5.339999 5.339999 0 0 0-2.706 0.732 196.753958 196.753958 0 0 1-26.014994 21.819995c-21.699995 15.239997-42.153991 22.967995-60.951987 22.967995-18.919996 0-39.594991-7.874998-61.390987-23.405995a194.705958 194.705958 0 0 1-26.160994-22.283995 5.777999 5.777999 0 0 0-2.729999-0.707h-0.245l-72.824985 40.032992c1.706 4.046999 9.579998 23.479995 9.579998 43.73999A113.858976 113.858976 0 0 1 528.896886 614.350088c-0.854 4.729999-5.509999 31.524993-5.509998 51.639989s4.655999 46.90799 5.533998 51.661989a113.858976 113.858976 0 0 1 107.763977 113.589975c0 20.334996-7.972998 39.863991-9.679998 43.788991l68.973985 38.545992h0.146c1.024 0 1.95-0.365 2.317-0.585a200.849957 200.849957 0 0 1 26.428994-23.161995c22.088995-16.188997 43.079991-24.429995 62.414987-24.429995 19.552996 0 40.715991 8.387998 62.949986 24.917995 14.921997 11.068998 25.259995 22.185995 26.551995 23.575995m22.673995 108.397976c-13.774997-0.025-27.135994-5.704999-35.765993-15.213996-11.775997-12.896997-49.005989-46.44599-79.530982-46.44599-30.280993 0-68.119985 33.767993-78.993984 45.54399-8.606998 9.386998-21.869995 14.969997-35.499992 14.969997-6.483999 0-12.603997-1.243-18.186996-3.706l-0.975-0.414-92.69698-51.833988-0.926-0.683a44.46999 44.46999 0 0 1-14.920996-53.735989c0.049-0.146 8.532998-19.699996 8.532998-37.594992a98.376979 98.376979 0 0 0-98.254979-98.254978h-3.900999c-15.505997 0-28.159994-13.799997-32.182993-35.108993-0.341-1.706-7.923998-42.178991-7.923999-74.044984 0-31.913993 7.557998-72.361984 7.899999-74.117984 4.119999-21.576995 16.992996-35.449992 32.816993-35.083993h3.266999a98.400979 98.400979 0 0 0 98.279979-98.303978c0-17.846996-8.484998-37.399992-8.559998-37.619992a44.34899 44.34899 0 0 1 15.068996-53.661989l0.95-0.658 97.839979-53.759988 1.025-0.415c5.485999-2.364999 11.507998-3.534999 17.895996-3.534999 13.604997 0 26.891994 5.436999 35.595992 14.629997 11.579998 12.115997 48.17699 43.640991 77.774984 43.64099 29.354994 0 65.755986-30.914993 77.287983-42.812991 8.654998-8.996998 21.844995-14.335997 35.302992-14.335997 6.509999 0 12.653997 1.22 18.285997 3.657l0.974999 0.414 94.47698 52.516988 0.95 0.658c16.895996 11.751997 23.332995 34.889993 14.945997 53.735989-0.05 0.146-8.532998 19.699996-8.532999 37.545992a98.400979 98.400979 0 0 0 98.254979 98.279978h3.29c15.775997-0.34 28.719994 13.506997 32.817993 35.107993 0.317 1.707 7.899998 42.203991 7.899998 74.069984 0 31.889993-7.582998 72.410984-7.949998 74.117984-4.045999 21.551995-16.991996 35.424992-32.766993 35.059993h-3.291a98.400979 98.400979 0 0 0-98.254979 98.278978c0 17.846996 8.483998 37.449992 8.556999 37.619992a44.42199 44.42199 0 0 1-15.017997 53.710989l-0.927 0.683-96.133979 53.100988-0.975 0.415a44.88499 44.88499 0 0 1-17.846996 3.583999z m222.061952-705.339848a48.76199 48.76199 0 1 1-97.523979 0V121.977194c0-13.457997-10.873998-24.453995-24.307995-24.453995H121.829974c-13.262997 0-24.306995 10.970998-24.306995 24.453995v584.995874c0 13.457997 10.873998 24.453995 24.307995 24.453995h219.499953a48.76199 48.76199 0 1 1 0 97.523979H48.908989A48.76199 48.76199 0 0 1 0 780.191052V48.76121C0 21.822215 21.893995 0.00022 48.907989 0.00022h1023.706781a48.76199 48.76199 0 0 1 48.907989 48.76199v268.189942zM219.427953 975.23701c0-26.940994 21.991995-48.76199 48.981989-48.761989h194.607959a48.76199 48.76199 0 1 1 0 97.523979H268.433942a48.76199 48.76199 0 0 1-49.005989-48.76199z" p-id="20408" fill="' + c + '"></path></svg> '
            }
            let i = e.attributes.avatar;
            i = void 0 === i ? "https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png" : i;
            let o = AV.User.current() ? "" : 'style="display: none"',
                a = e.createdAt,
                s = new Date(a);

            function u(e) {
                return e < 10 ? "0" + e : e
            }
            let h = s.getFullYear() + "-" + u(s.getMonth() + 1) + "-" + u(s.getDate()),
                d = u(s.getHours()) + ":" + u(s.getMinutes()) + ":" + u(s.getSeconds()),
                p = s.getHours(),
                f = "";
            switch (f) {
                case p >= 0 && p < 5:
                    f = '<svg t="1591350196611"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24683" width="10" height="10"  style="display: inline"><path d="M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z" fill="' + c + '" p-id="24684"></path></svg> ';
                case p >= 5 && p < 6:
                    f = '<svg t="1591350273094"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24973" width="10" height="10"  style="display: inline"><path d="M512 409.6c121.6 0 220.8 99.2 220.8 220.8 0 9.6-1.6 19.2-3.2 32l-6.4 36.8h152v8H145.6v-8h152l-6.4-36.8c-1.6-12.8-3.2-22.4-3.2-32 3.2-121.6 102.4-220.8 224-220.8m0-32c-139.2 0-252.8 113.6-252.8 252.8 0 12.8 1.6 24 3.2 36.8H131.2c-9.6 0-17.6 8-17.6 17.6v36.8c0 9.6 8 17.6 17.6 17.6h760c9.6 0 17.6-8 17.6-17.6v-36.8c0-9.6-8-17.6-17.6-17.6h-129.6c1.6-11.2 3.2-24 3.2-36.8 0-140.8-113.6-252.8-252.8-252.8zM817.6 329.6l6.4 6.4-57.6 57.6-6.4-6.4 57.6-57.6m0-38.4c-4.8 0-9.6 1.6-12.8 4.8l-76.8 76.8c-6.4 6.4-6.4 19.2 0 25.6l25.6 25.6c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l76.8-76.8c6.4-6.4 6.4-19.2 0-25.6l-25.6-25.6c-3.2-3.2-8-4.8-12.8-4.8zM516.8 211.2v81.6h-8v-81.6h8m12.8-32h-36.8c-9.6 0-17.6 8-17.6 17.6v108.8c0 9.6 8 17.6 17.6 17.6h36.8c9.6 0 17.6-8 17.6-17.6v-108.8c1.6-9.6-6.4-17.6-17.6-17.6zM232 828.8h560M792 844.8h-560c-9.6 0-16-6.4-16-16s6.4-16 16-16h561.6c9.6 0 16 6.4 16 16s-8 16-17.6 16zM233.6 308.8l57.6 57.6-6.4 6.4-57.6-57.6 6.4-6.4m0-36.8c-4.8 0-9.6 1.6-12.8 4.8l-25.6 25.6c-6.4 6.4-6.4 19.2 0 25.6l76.8 76.8c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l25.6-25.6c6.4-6.4 6.4-19.2 0-25.6l-76.8-76.8c-3.2-3.2-8-4.8-12.8-4.8z" fill="' + c + '" p-id="24974"></path></svg> ';
                case p >= 6 && p < 8:
                    f = '<svg t="1591350470149"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25217" width="10" height="10"  style="display: inline"><path d="M574.2 236.3V96.8H454.6v139c19-2.9 38.5-4.4 58.3-4.4 20.8 0 41.3 1.7 61.3 4.9zM245.5 340.1l-114.1-78.5-67.9 98.5 113.8 78.4c17.6-36.1 40.6-69.3 68.2-98.4zM812 588.5c0-164.9-134.2-299.1-299.1-299.1-164.9 0-299.1 134.2-299.1 299.1M778.1 341l114.1-78.5L960 361l-113.8 78.4c-17.5-36.1-40.5-69.3-68.1-98.4zM911.6 746.2H113.8c-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5h797.8c26.2 0 47.5 21.3 47.5 47.5 0 26.3-21.3 47.5-47.5 47.5zM766.6 882h-494c-21 0-38-17-38-38s17-38 38-38h494c21 0 38 17 38 38s-17 38-38 38z" fill="' + c + '" p-id="25218"></path></svg> ';
                case p >= 8 && p < 11:
                    f = '<svg t="1591350526184"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26011" width="10" height="10"  style="display: inline"><path d="M814.592 409.63l96.075-96.105-81.77-81.77-95.924 95.865a381.803 381.803 0 0 1 81.619 82.01zM881.965 572.597c2.952 18.823 4.427 38.189 4.427 57.826 0 19.606-1.505 38.972-4.427 57.825h136.011V572.597h-136.01zM569.826 259.223V124.446H454.174v134.355c18.402-2.801 37.195-4.247 56.38-4.277 20.15 0 39.936 1.627 59.272 4.699zM289.792 326.415l-94.66-94.66-81.77 81.77 94.42 94.449c22.98-31.202 50.658-58.76 82.01-81.559zM134.686 630.423c0-19.697 1.506-38.973 4.458-57.826H6.024v115.651h133.12c-2.952-18.853-4.458-38.159-4.458-57.825zM227.358 688.67h566.423c3.885-18.823 5.903-38.31 5.903-58.278 0-159.412-129.687-289.16-289.13-289.16-159.382 0-289.099 129.718-289.099 289.16 0 19.968 2.018 39.455 5.903 58.278zM902.837 779.083h-783.06c-33.249 0-60.234 26.986-60.234 60.236s26.985 60.235 60.235 60.235h783.059c33.25 0 60.235-26.986 60.235-60.235s-26.985-60.236-60.235-60.236z" p-id="26012" fill="' + c + '"></path></svg> ';
                case p >= 11 && p < 13:
                    f = '<svg t="1591350817881"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29283" width="10" height="10"  style="display: inline"><path d="M512 272.965905c-135.175679 0-245.151419 109.980857-245.151419 245.152443 0 135.175679 109.976764 245.156536 245.151419 245.156536 135.176702 0 245.156536-109.98188 245.156536-245.156536 0-135.171586-109.979834-245.152443-245.156536-245.152443z m0 416.114163c-94.273107 0-170.956603-76.685543-170.956603-170.96172 0-94.2772 76.683497-170.957627 170.956603-170.957627 94.2772 0 170.962743 76.680427 170.962743 170.957627 0 94.276177-76.685543 170.96172-170.962743 170.96172zM475.28582 65.290005h73.427336v159.101601h-73.427336V65.290005z m0 746.559177h73.427336v146.859789h-73.427336V811.849182z m214.111473-529.185404L801.897529 170.163541l51.92358 51.92358-112.500237 112.500237-51.923579-51.92358zM170.167634 801.897529l103.84409-103.847159 51.92358 51.92358-103.84716 103.847159-51.92051-51.92358z m629.439736-326.611709H958.708971v73.427336H799.60737v-73.427336z m-734.317365 0h146.864906v73.427336H65.290005v-73.427336z m624.107288 266.045286l51.923579-51.92358 112.500237 112.500237-51.92358 51.923579-112.500236-112.500236zM170.162518 222.092237l51.924603-51.923579 103.84716 103.847159-51.92358 51.92358-103.848183-103.84716z m0 0" p-id="29284" fill="' + c + '"></path></svg> ';
                case p >= 13 && p < 17:
                    f = '<svg t="1591350596667"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27504" width="10" height="10"  style="display: inline"><path d="M166.4 712.533c-17.067-17.066-17.067-42.666 0-59.733l59.733-59.733C243.2 576 268.8 576 285.867 593.067c17.066 17.066 17.066 42.666 0 59.733l-59.734 59.733c-17.066 17.067-42.666 17.067-59.733 0z m691.2 0c-17.067 17.067-42.667 17.067-59.733 0L738.133 652.8c-17.066-17.067-17.066-42.667 0-59.733C755.2 576 780.8 576 797.867 593.067L857.6 652.8c17.067 17.067 17.067 42.667 0 59.733zM512 896c-25.6 0-42.667-17.067-42.667-42.667V768c0-25.6 17.067-42.667 42.667-42.667S554.667 742.4 554.667 768v85.333C554.667 878.933 537.6 896 512 896z m128-640H384c-25.6 0-42.667-17.067-42.667-42.667S358.4 170.667 384 170.667h256c25.6 0 42.667 17.066 42.667 42.666S665.6 256 640 256z m42.667 170.667H341.333c0 93.866 76.8 170.666 170.667 170.666s170.667-76.8 170.667-170.666z m85.333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256H128c-25.6 0-42.667-17.067-42.667-42.667S102.4 341.333 128 341.333h768c25.6 0 42.667 17.067 42.667 42.667S921.6 426.667 896 426.667H768z" p-id="27505" fill="' + c + '"></path></svg> ';
                case p >= 17 && p < 18:
                    f = '<svg t="1591350638906"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27813" width="10" height="10"  style="display: inline"><path d="M736.946238 928.866293H246.668982c-43.317575 0-80.755232-5.869684-111.272269-17.445324-30.91408-11.726066-56.671721-27.753087-76.555583-47.635927-20.088524-20.090571-34.731012-43.647079-43.521213-70.018704-8.473999-25.419949-12.769838-52.570309-12.769838-80.696903 0-28.757974 5.669116-56.32175 16.847713-81.925894 11.04659-25.300222 26.243711-47.905056 45.169759-67.187215 19.017122-19.376303 41.549302-34.82925 66.969251-45.928029 25.605168-11.17962 53.497425-16.848737 82.903152-16.848737 41.588187 0 79.659271 10.957563 113.156176 32.568767 16.228613 10.469446 30.630624 22.576181 43.125193 36.231179 3.105734-15.261589 7.444553-30.498618 13.002128-45.62513 12.695137-34.559097 33.183773-66.134233 60.896952-93.847412 27.629267-27.630291 63.863517-50.215682 107.698885-67.128886 43.512003-16.787338 97.086176-25.299199 159.236677-25.299199 47.696302 0 89.25993 6.14393 123.531478 18.261922 34.490535 12.192693 63.806211 28.589129 87.128383 48.731888 23.38357 20.193925 42.095747 43.782156 55.615668 70.109777 13.068643 25.449625 22.843264 51.652404 29.055756 77.881788 6.088672 25.702382 10.036587 51.129494 11.734253 75.571163 1.65264 23.796986 2.490727 45.302789 2.490727 63.923892 0 30.209022-6.715959 60.043514-19.958564 88.676645-13.204743 28.55229-32.511461 54.019311-57.379849 75.691913-24.514323 21.361517-54.521754 38.871309-89.191368 52.045353-34.738176 13.20065-74.315566 19.893072-117.636211 19.893073zM214.43893 542.112832c-23.733541 0-46.115294 4.517897-66.524112 13.428847-20.594037 8.991792-38.806841 21.468964-54.134945 37.086663-15.421224 15.711843-27.825742 34.180474-36.869722 54.895261-8.91095 20.406772-13.428847 42.460044-13.428847 65.546855 0 23.719214 3.589758 46.514383 10.670013 67.753104 6.763031 20.289092 18.078751 38.464033 33.634029 54.019311 15.760962 15.759939 36.664038 28.64848 62.127989 38.307467 25.863041 9.810437 58.415434 14.784728 96.755647 14.784728h490.277256c38.334073 0 73.019037-5.79396 103.09196-17.22122 30.132274-11.449773 55.986105-26.470885 76.840063-44.642756 20.4958-17.86181 36.348859-38.727023 47.121203-62.016449 10.734482-23.208585 16.177448-47.26242 16.177448-71.493288 0-17.677615-0.804319-38.23072-2.39249-61.087286-1.543146-22.225187-5.15337-45.430702-10.730389-68.972885-5.450129-23.019273-14.075577-46.105061-25.63689-68.617797-11.106965-21.629623-26.569122-41.086767-45.956681-57.82908-19.448958-16.797571-44.352137-30.632671-74.017784-41.119513-29.879518-10.564613-66.850547-15.921621-109.887736-15.921621-57.093323 0-105.711624 7.588839-144.503115 22.555715-38.471197 14.843056-69.925582 34.31862-93.489254 57.883315-23.485901 23.485901-40.784892 50.071396-51.41909 79.018682-10.832719 29.485545-16.324804 59.313897-16.324804 88.655156a20.466124 20.466124 0 0 1-38.772049 9.15245c-13.891382-27.782763-34.630728-50.706869-61.642942-68.133773-27.15036-17.516956-56.905034-26.031886-90.964758-26.031886z" p-id="27814" fill="' + c + '"></path><path d="M275.518031 465.671858c-35.294854 0-69.230758-8.18338-100.865246-24.321941-26.51898-13.440104-49.698912-31.770588-68.847017-54.456263l-31.388895-37.18797 48.532343 3.576455c4.389984 0.323365 8.849552 0.487094 13.256932 0.487093 68.686359 0 130.741693-38.017872 161.949462-99.218745 33.244148-65.309448 24.155143-143.721309-23.161512-199.74937L243.63181 17.665335l48.478107 3.517103c29.582759 2.146896 58.0583 10.119475 84.634586 23.697725 52.919257 26.963095 92.187609 72.954569 110.549815 129.494283 18.36016 56.533574 13.616112 116.824729-13.359262 169.767522-18.97926 37.250392-47.882544 68.264756-83.587743 89.689718-34.71157 20.830421-74.419943 31.840172-114.829282 31.840172z m-104.032378-73.785493a181.122127 181.122127 0 0 0 21.720697 12.977569c25.867134 13.196557 53.54552 19.875676 82.312704 19.875677 68.723198 0 130.777509-38.003546 161.946392-99.178837 22.01234-43.203988 25.883507-92.405573 10.900258-138.542356-14.984273-46.137807-47.026036-83.668585-90.221838-105.676832a182.542476 182.542476 0 0 0-23.326264-9.953699c31.791054 62.529125 32.601512 137.326669-0.188289 201.74277-19.007913 37.275975-47.915289 68.296479-83.604116 89.721441a223.364207 223.364207 0 0 1-79.539544 29.034267z" p-id="27815" fill="' + c + '"></path></svg> ';
                case p >= 18 && p < 21:
                    f = '<svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10"  style="display: inline"><path d="M784.896 767.488c-291.84 0-528.384-236.544-528.384-528.384 0-81.92 19.456-159.744 52.736-228.864C132.608 95.744 10.24 275.968 10.24 485.376 10.24 777.216 246.784 1013.76 538.624 1013.76c209.408 0 390.144-122.368 475.136-299.008-69.12 33.28-146.944 52.736-228.864 52.736z m-246.272 176.128c-252.416 0-457.728-205.312-457.728-457.728 0-111.104 38.912-214.528 107.52-294.912-1.536 16.384-2.048 32.256-2.048 48.64 0 330.24 268.288 598.528 598.528 598.528 16.384 0 32.256-0.512 48.64-2.048-80.896 68.096-184.32 107.52-294.912 107.52z m127.488-633.344l65.536-32.256 65.536 32.256-9.216-75.264 49.152-55.296-70.656-14.336-34.816-66.56-34.816 66.56-70.656 14.336 49.152 55.296-9.216 75.264zM441.344 432.64l43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.616-9.728-22.528-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176z m313.344 79.872l-23.04-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176 43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.104-9.728z" p-id="28654" fill="' + c + '"></path></svg> '
            }
            let g = "";
            0 === l && (g = "display: none");
            let m = e.id,
                _ = e.attributes.atContentHtml;
            n += '<li><span class="shuoshuo_author_img" onclick=\'atEvery.prototype.atEdit("' + m + "\")'><img  id='atAvatar" + m + "'  src=\"" + i + '"class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel" id=\'atId' + m + "' ><div " + o + "id='operate" + m + '\'  class="delete_right"><svg t="1591347978744"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14459" width="20" height="20" style="display: inline"  onclick="atEvery.prototype.delete(\'' + m + '\')"  ><path d="M512 883.2A371.2 371.2 0 1 0 140.8 512 371.2 371.2 0 0 0 512 883.2z m0 64a435.2 435.2 0 1 1 435.2-435.2 435.2 435.2 0 0 1-435.2 435.2z" p-id="14460" fill="' + c + '"></path><path d="M557.056 512l122.368 122.368a31.744 31.744 0 1 1-45.056 45.056L512 557.056l-122.368 122.368a31.744 31.744 0 1 1-45.056-45.056L466.944 512 344.576 389.632a31.744 31.744 0 1 1 45.056-45.056L512 466.944l122.368-122.368a31.744 31.744 0 1 1 45.056 45.056z" p-id="14461" fill="' + c + "\"></path></svg></div><div id='forEdit" + m + "'>" + _ + '</div><p class="shuoshuo_time"><span style="">  ' + r + t + "</span><span>&nbsp&nbsp" + f + h + " " + d + "</span><span style='float: right'><span style='" + g + ";vertical-align:top;' onclick='atEvery.prototype.commentInit(\"" + m + "\")'  id='atCoInit" + m + "'>" + ('<svg t="1599605913184" class="icon" viewBox="0 0 1024 1024" cursor="pointer" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3173" width="16" height="16" fill="' + c + '"><path d="M512 0C226.742857 0 0 197.485714 0 446.171429c0 138.971429 73.142857 270.628571 190.171429 351.085714L190.171429 1024l226.742857-138.971429c29.257143 7.314286 65.828571 7.314286 95.085714 7.314286 285.257143 0 512-197.485714 512-446.171429C1024 197.485714 797.257143 0 512 0zM256 512C219.428571 512 190.171429 482.742857 190.171429 446.171429S219.428571 380.342857 256 380.342857c36.571429 0 65.828571 29.257143 65.828571 65.828571S292.571429 512 256 512zM512 512C475.428571 512 446.171429 482.742857 446.171429 446.171429S475.428571 380.342857 512 380.342857c36.571429 0 65.828571 29.257143 65.828571 65.828571S548.571429 512 512 512zM768 512C731.428571 512 702.171429 482.742857 702.171429 446.171429s29.257143-65.828571 65.828571-65.828571c36.571429 0 65.828571 29.257143 65.828571 65.828571S804.571429 512 768 512z" p-id="3174" fill="' + c + '"></path></svg>') + "<span style='padding: 0 0 0 8px;color:" + c + "'; id= 'coValue" + m + "'>loading</span></span>&nbsp<span style='vertical-align:top;' id='" + m + "'></span></p></span></li>"
        }));
        let r = document.getElementById("ccontent").innerHTML;
        r = "" === r ? '<ul class="cbp_tmtimeline" id="maina">' : r, r = r.replace(/(.*)<\/ul>/, "$1 "), r += n + "</ul>", 0 === b && 0 === e && (r = '<ul class="cbp_tmtimeline" id="maina"><li><span class="shuoshuo_author_img"><img src="https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png" class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel"><p>' + h + '</p><p class="shuoshuo_time"><span style=""> 由Artitalk发表</span><span style="float:right;"><svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10" style="display: inline"></svg> 2020-04-10 20:35:25</span></p></span></li></ul>'), document.getElementById("ccontent").innerHTML = r, 0 !== l && t.forEach((function(e) {
                let t = new AV.Query("atComment"),
                    n = e.id;
                t.equalTo("atId", n), t.descending("createdAt"), t.find().then(e => {
                    let t = "coValue" + n;
                    document.getElementById(t).innerHTML = e.length
                })
            })),
            function(e) {
                if (!document.getElementById(e)) return;
                document.getElementById(e).style.display = "none"
            }("lazy"), 0 !== b ? _("readmore") : 0 !== e && (document.getElementById("readButton").innerHTML = "<center>已经到底了哦~</center>", document.getElementById("readButton").style.opacity = "0.5")
    })), atEvery.prototype.atEdit = function(e) {
        function t(e) {
            if (!document.getElementById(e)) return;
            document.getElementById(e).style.display = "none"
        }
        if (!AV.User.current()) return;
        ! function(e) {
            if (!document.getElementById(e)) return;
            document.getElementById(e).style.display = ""
        }("lazy");
        let n = new AV.Query("shuoshuo");
        n.equalTo("objectId", e), n.find().then(n => {
            n.forEach((function(n) {
                let r = '<ul class="cbp_tmtimeline" id="maina"><li><span class="shuoshuo_author_img"><img src="https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png" class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel"><p>' + d + '</p><p class="shuoshuo_time"><span style=""> 由Artitalk发表</span><span style="float:right;"><svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10" style="display: inline"></svg> 2020-04-10 20:35:25</span></p></span></li></ul>';
                document.getElementById("ccontent").innerHTML = r;
                let i = document.getElementById("atSave");
                i.id = "atEditsaveButton", document.getElementById("atEditsaveButton").innerHTML = p, t("readmore"), i.setAttribute("onclick", 'atEvery.prototype.atEditsave("' + e + '")'), pubShuo.click(), document.getElementById("neirong").value = n.attributes.atContentMd, t("lazy")
            }))
        })
    }, atEvery.prototype.atEditsave = function(e) {
        _("lazy"), document.getElementById("preview").onclick = function() {
            let e = document.getElementById("preview"); - 1 !== e.className.indexOf("preview_now") ? e.classList.remove("preview_now") : e.classList.add("preview_now")
        };
        let t = document.getElementById("neirong").value,
            n = t,
            r = AV.Object.createWithoutData("shuoshuo", e);
        if (r.set("atContentMd", n), t = function(e) {
                if (void 0 !== e) {
                    for (let t in atEmojiQQ) {
                        let n = "[" + t + "]",
                            r = "<img class='atemoji gallery-group-img' src='" + atEmojiQQ[t] + "'/>";
                        for (; - 1 != e.indexOf(n);) e = e.replace(n, r)
                    }
                    for (let t in atEmojiTB) {
                        let n = "[" + t + "]",
                            r = "<img class='atemoji gallery-group-img' src='" + atEmojiTB[t] + "'/>";
                        for (; - 1 != e.indexOf(n);) e = e.replace(n, r)
                    }
                    for (let t in atEmojiBB) {
                        let n = "[" + t + "]",
                            r = "<img class='atemoji gallery-group-img' src='" + atEmojiBB[t] + "'/>";
                        for (; - 1 != e.indexOf(n);) e = e.replace(n, r)
                    }
                    for (let t in a) {
                        let n = "[" + t + "]",
                            r = "<img class='atemoji gallery-group-img' src='" + a[t] + "'/>";
                        for (; - 1 != e.indexOf(n);) e = e.replace(n, r)
                    }
                    return e
                }
            }(t), "" === t) return void location.reload();
        let i = new showdown.Converter;
        i.setOption("strikethrough", 1);
        let o = i.makeHtml(t);
        r.set("atContentHtml", o), r.save().then((function() {
            location.reload()
        }))
    }, atEvery.prototype.saveComment = function(e, t) {
        function n(e) {
            if (!document.getElementById(e)) return;
            document.getElementById(e).style.display = "none"
        }
        document.getElementById("shuoshuo_input").style.display = "none",
            function(e) {
                if (!document.getElementById(e)) return;
                document.getElementById(e).style.display = ""
            }("lazy");
        let r = document.getElementById("neirong").value,
            i = new(AV.Object.extend("atComment"));
        r = function(e) {
            if (void 0 !== e) {
                for (let t in atEmojiQQ) {
                    let n = "[" + t + "]",
                        r = "<img class='atemoji gallery-group-img' src='" + atEmojiQQ[t] + "'/>";
                    for (; - 1 != e.indexOf(n);) e = e.replace(n, r)
                }
                for (let t in atEmojiTB) {
                    let n = "[" + t + "]",
                        r = "<img class='atemoji gallery-group-img' src='" + atEmojiTB[t] + "'/>";
                    for (; - 1 != e.indexOf(n);) e = e.replace(n, r)
                }
                for (let t in atEmojiBB) {
                    let n = "[" + t + "]",
                        r = "<img class='atemoji gallery-group-img' src='" + atEmojiBB[t] + "'/>";
                    for (; - 1 != e.indexOf(n);) e = e.replace(n, r)
                }
                for (let t in a) {
                    let n = "[" + t + "]",
                        r = "<img class='atemoji gallery-group-img' src='" + a[t] + "'/>";
                    for (; - 1 != e.indexOf(n);) e = e.replace(n, r)
                }
                return e
            }
        }(r);
        let o = new showdown.Converter;
        o.setOption("strikethrough", 1);
        let s = o.makeHtml(r),
            u = AV.User.current(),
            l = document.getElementById("email").value,
            h = document.getElementById("commentNick").value,
            d = md5(l);
        if (!u && ("" === h || "" === l)) return document.getElementById("neirong").value = "昵称，邮箱均为必填项\n" + document.getElementById("neirong").value, void n("lazy");
        let p = "https://cdn.staticdn.net/avatar/" + d + "?d=mp&s=80",
            f = new Date;

        function g(e) {
            return e < 10 ? "0" + e : e
        }
        let m = f.getFullYear() + "-" + g(f.getMonth() + 1) + "-" + g(f.getDate()),
            _ = g(f.getHours()) + ":" + g(f.getMinutes()) + ":" + g(f.getSeconds()),
            v = f.getHours(),
            b = "";
        switch (b) {
            case v >= 0 && v < 5:
                b = '<svg t="1591350196611"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24683" width="10" height="10"  style="display: inline"><path d="M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z" fill="' + c + '" p-id="24684"></path></svg> ';
            case v >= 5 && v < 6:
                b = '<svg t="1591350273094"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24973" width="10" height="10"  style="display: inline"><path d="M512 409.6c121.6 0 220.8 99.2 220.8 220.8 0 9.6-1.6 19.2-3.2 32l-6.4 36.8h152v8H145.6v-8h152l-6.4-36.8c-1.6-12.8-3.2-22.4-3.2-32 3.2-121.6 102.4-220.8 224-220.8m0-32c-139.2 0-252.8 113.6-252.8 252.8 0 12.8 1.6 24 3.2 36.8H131.2c-9.6 0-17.6 8-17.6 17.6v36.8c0 9.6 8 17.6 17.6 17.6h760c9.6 0 17.6-8 17.6-17.6v-36.8c0-9.6-8-17.6-17.6-17.6h-129.6c1.6-11.2 3.2-24 3.2-36.8 0-140.8-113.6-252.8-252.8-252.8zM817.6 329.6l6.4 6.4-57.6 57.6-6.4-6.4 57.6-57.6m0-38.4c-4.8 0-9.6 1.6-12.8 4.8l-76.8 76.8c-6.4 6.4-6.4 19.2 0 25.6l25.6 25.6c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l76.8-76.8c6.4-6.4 6.4-19.2 0-25.6l-25.6-25.6c-3.2-3.2-8-4.8-12.8-4.8zM516.8 211.2v81.6h-8v-81.6h8m12.8-32h-36.8c-9.6 0-17.6 8-17.6 17.6v108.8c0 9.6 8 17.6 17.6 17.6h36.8c9.6 0 17.6-8 17.6-17.6v-108.8c1.6-9.6-6.4-17.6-17.6-17.6zM232 828.8h560M792 844.8h-560c-9.6 0-16-6.4-16-16s6.4-16 16-16h561.6c9.6 0 16 6.4 16 16s-8 16-17.6 16zM233.6 308.8l57.6 57.6-6.4 6.4-57.6-57.6 6.4-6.4m0-36.8c-4.8 0-9.6 1.6-12.8 4.8l-25.6 25.6c-6.4 6.4-6.4 19.2 0 25.6l76.8 76.8c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l25.6-25.6c6.4-6.4 6.4-19.2 0-25.6l-76.8-76.8c-3.2-3.2-8-4.8-12.8-4.8z" fill="' + c + '" p-id="24974"></path></svg> ';
            case v >= 6 && v < 8:
                b = '<svg t="1591350470149"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25217" width="10" height="10"  style="display: inline"><path d="M574.2 236.3V96.8H454.6v139c19-2.9 38.5-4.4 58.3-4.4 20.8 0 41.3 1.7 61.3 4.9zM245.5 340.1l-114.1-78.5-67.9 98.5 113.8 78.4c17.6-36.1 40.6-69.3 68.2-98.4zM812 588.5c0-164.9-134.2-299.1-299.1-299.1-164.9 0-299.1 134.2-299.1 299.1M778.1 341l114.1-78.5L960 361l-113.8 78.4c-17.5-36.1-40.5-69.3-68.1-98.4zM911.6 746.2H113.8c-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5h797.8c26.2 0 47.5 21.3 47.5 47.5 0 26.3-21.3 47.5-47.5 47.5zM766.6 882h-494c-21 0-38-17-38-38s17-38 38-38h494c21 0 38 17 38 38s-17 38-38 38z" fill="' + c + '" p-id="25218"></path></svg> ';
            case v >= 8 && v < 11:
                b = '<svg t="1591350526184"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26011" width="10" height="10"  style="display: inline"><path d="M814.592 409.63l96.075-96.105-81.77-81.77-95.924 95.865a381.803 381.803 0 0 1 81.619 82.01zM881.965 572.597c2.952 18.823 4.427 38.189 4.427 57.826 0 19.606-1.505 38.972-4.427 57.825h136.011V572.597h-136.01zM569.826 259.223V124.446H454.174v134.355c18.402-2.801 37.195-4.247 56.38-4.277 20.15 0 39.936 1.627 59.272 4.699zM289.792 326.415l-94.66-94.66-81.77 81.77 94.42 94.449c22.98-31.202 50.658-58.76 82.01-81.559zM134.686 630.423c0-19.697 1.506-38.973 4.458-57.826H6.024v115.651h133.12c-2.952-18.853-4.458-38.159-4.458-57.825zM227.358 688.67h566.423c3.885-18.823 5.903-38.31 5.903-58.278 0-159.412-129.687-289.16-289.13-289.16-159.382 0-289.099 129.718-289.099 289.16 0 19.968 2.018 39.455 5.903 58.278zM902.837 779.083h-783.06c-33.249 0-60.234 26.986-60.234 60.236s26.985 60.235 60.235 60.235h783.059c33.25 0 60.235-26.986 60.235-60.235s-26.985-60.236-60.235-60.236z" p-id="26012" fill="' + c + '"></path></svg> ';
            case v >= 11 && v < 13:
                b = '<svg t="1591350817881"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29283" width="10" height="10"  style="display: inline"><path d="M512 272.965905c-135.175679 0-245.151419 109.980857-245.151419 245.152443 0 135.175679 109.976764 245.156536 245.151419 245.156536 135.176702 0 245.156536-109.98188 245.156536-245.156536 0-135.171586-109.979834-245.152443-245.156536-245.152443z m0 416.114163c-94.273107 0-170.956603-76.685543-170.956603-170.96172 0-94.2772 76.683497-170.957627 170.956603-170.957627 94.2772 0 170.962743 76.680427 170.962743 170.957627 0 94.276177-76.685543 170.96172-170.962743 170.96172zM475.28582 65.290005h73.427336v159.101601h-73.427336V65.290005z m0 746.559177h73.427336v146.859789h-73.427336V811.849182z m214.111473-529.185404L801.897529 170.163541l51.92358 51.92358-112.500237 112.500237-51.923579-51.92358zM170.167634 801.897529l103.84409-103.847159 51.92358 51.92358-103.84716 103.847159-51.92051-51.92358z m629.439736-326.611709H958.708971v73.427336H799.60737v-73.427336z m-734.317365 0h146.864906v73.427336H65.290005v-73.427336z m624.107288 266.045286l51.923579-51.92358 112.500237 112.500237-51.92358 51.923579-112.500236-112.500236zM170.162518 222.092237l51.924603-51.923579 103.84716 103.847159-51.92358 51.92358-103.848183-103.84716z m0 0" p-id="29284" fill="' + c + '"></path></svg> ';
            case v >= 13 && v < 17:
                b = '<svg t="1591350596667"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27504" width="10" height="10"  style="display: inline"><path d="M166.4 712.533c-17.067-17.066-17.067-42.666 0-59.733l59.733-59.733C243.2 576 268.8 576 285.867 593.067c17.066 17.066 17.066 42.666 0 59.733l-59.734 59.733c-17.066 17.067-42.666 17.067-59.733 0z m691.2 0c-17.067 17.067-42.667 17.067-59.733 0L738.133 652.8c-17.066-17.067-17.066-42.667 0-59.733C755.2 576 780.8 576 797.867 593.067L857.6 652.8c17.067 17.067 17.067 42.667 0 59.733zM512 896c-25.6 0-42.667-17.067-42.667-42.667V768c0-25.6 17.067-42.667 42.667-42.667S554.667 742.4 554.667 768v85.333C554.667 878.933 537.6 896 512 896z m128-640H384c-25.6 0-42.667-17.067-42.667-42.667S358.4 170.667 384 170.667h256c25.6 0 42.667 17.066 42.667 42.666S665.6 256 640 256z m42.667 170.667H341.333c0 93.866 76.8 170.666 170.667 170.666s170.667-76.8 170.667-170.666z m85.333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256H128c-25.6 0-42.667-17.067-42.667-42.667S102.4 341.333 128 341.333h768c25.6 0 42.667 17.067 42.667 42.667S921.6 426.667 896 426.667H768z" p-id="27505" fill="' + c + '"></path></svg> ';
            case v >= 17 && v < 18:
                b = '<svg t="1591350638906"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27813" width="10" height="10"  style="display: inline"><path d="M736.946238 928.866293H246.668982c-43.317575 0-80.755232-5.869684-111.272269-17.445324-30.91408-11.726066-56.671721-27.753087-76.555583-47.635927-20.088524-20.090571-34.731012-43.647079-43.521213-70.018704-8.473999-25.419949-12.769838-52.570309-12.769838-80.696903 0-28.757974 5.669116-56.32175 16.847713-81.925894 11.04659-25.300222 26.243711-47.905056 45.169759-67.187215 19.017122-19.376303 41.549302-34.82925 66.969251-45.928029 25.605168-11.17962 53.497425-16.848737 82.903152-16.848737 41.588187 0 79.659271 10.957563 113.156176 32.568767 16.228613 10.469446 30.630624 22.576181 43.125193 36.231179 3.105734-15.261589 7.444553-30.498618 13.002128-45.62513 12.695137-34.559097 33.183773-66.134233 60.896952-93.847412 27.629267-27.630291 63.863517-50.215682 107.698885-67.128886 43.512003-16.787338 97.086176-25.299199 159.236677-25.299199 47.696302 0 89.25993 6.14393 123.531478 18.261922 34.490535 12.192693 63.806211 28.589129 87.128383 48.731888 23.38357 20.193925 42.095747 43.782156 55.615668 70.109777 13.068643 25.449625 22.843264 51.652404 29.055756 77.881788 6.088672 25.702382 10.036587 51.129494 11.734253 75.571163 1.65264 23.796986 2.490727 45.302789 2.490727 63.923892 0 30.209022-6.715959 60.043514-19.958564 88.676645-13.204743 28.55229-32.511461 54.019311-57.379849 75.691913-24.514323 21.361517-54.521754 38.871309-89.191368 52.045353-34.738176 13.20065-74.315566 19.893072-117.636211 19.893073zM214.43893 542.112832c-23.733541 0-46.115294 4.517897-66.524112 13.428847-20.594037 8.991792-38.806841 21.468964-54.134945 37.086663-15.421224 15.711843-27.825742 34.180474-36.869722 54.895261-8.91095 20.406772-13.428847 42.460044-13.428847 65.546855 0 23.719214 3.589758 46.514383 10.670013 67.753104 6.763031 20.289092 18.078751 38.464033 33.634029 54.019311 15.760962 15.759939 36.664038 28.64848 62.127989 38.307467 25.863041 9.810437 58.415434 14.784728 96.755647 14.784728h490.277256c38.334073 0 73.019037-5.79396 103.09196-17.22122 30.132274-11.449773 55.986105-26.470885 76.840063-44.642756 20.4958-17.86181 36.348859-38.727023 47.121203-62.016449 10.734482-23.208585 16.177448-47.26242 16.177448-71.493288 0-17.677615-0.804319-38.23072-2.39249-61.087286-1.543146-22.225187-5.15337-45.430702-10.730389-68.972885-5.450129-23.019273-14.075577-46.105061-25.63689-68.617797-11.106965-21.629623-26.569122-41.086767-45.956681-57.82908-19.448958-16.797571-44.352137-30.632671-74.017784-41.119513-29.879518-10.564613-66.850547-15.921621-109.887736-15.921621-57.093323 0-105.711624 7.588839-144.503115 22.555715-38.471197 14.843056-69.925582 34.31862-93.489254 57.883315-23.485901 23.485901-40.784892 50.071396-51.41909 79.018682-10.832719 29.485545-16.324804 59.313897-16.324804 88.655156a20.466124 20.466124 0 0 1-38.772049 9.15245c-13.891382-27.782763-34.630728-50.706869-61.642942-68.133773-27.15036-17.516956-56.905034-26.031886-90.964758-26.031886z" p-id="27814" fill="' + c + '"></path><path d="M275.518031 465.671858c-35.294854 0-69.230758-8.18338-100.865246-24.321941-26.51898-13.440104-49.698912-31.770588-68.847017-54.456263l-31.388895-37.18797 48.532343 3.576455c4.389984 0.323365 8.849552 0.487094 13.256932 0.487093 68.686359 0 130.741693-38.017872 161.949462-99.218745 33.244148-65.309448 24.155143-143.721309-23.161512-199.74937L243.63181 17.665335l48.478107 3.517103c29.582759 2.146896 58.0583 10.119475 84.634586 23.697725 52.919257 26.963095 92.187609 72.954569 110.549815 129.494283 18.36016 56.533574 13.616112 116.824729-13.359262 169.767522-18.97926 37.250392-47.882544 68.264756-83.587743 89.689718-34.71157 20.830421-74.419943 31.840172-114.829282 31.840172z m-104.032378-73.785493a181.122127 181.122127 0 0 0 21.720697 12.977569c25.867134 13.196557 53.54552 19.875676 82.312704 19.875677 68.723198 0 130.777509-38.003546 161.946392-99.178837 22.01234-43.203988 25.883507-92.405573 10.900258-138.542356-14.984273-46.137807-47.026036-83.668585-90.221838-105.676832a182.542476 182.542476 0 0 0-23.326264-9.953699c31.791054 62.529125 32.601512 137.326669-0.188289 201.74277-19.007913 37.275975-47.915289 68.296479-83.604116 89.721441a223.364207 223.364207 0 0 1-79.539544 29.034267z" p-id="27815" fill="' + c + '"></path></svg> ';
            case v >= 18 && v < 21:
                b = '<svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10"  style="display: inline"><path d="M784.896 767.488c-291.84 0-528.384-236.544-528.384-528.384 0-81.92 19.456-159.744 52.736-228.864C132.608 95.744 10.24 275.968 10.24 485.376 10.24 777.216 246.784 1013.76 538.624 1013.76c209.408 0 390.144-122.368 475.136-299.008-69.12 33.28-146.944 52.736-228.864 52.736z m-246.272 176.128c-252.416 0-457.728-205.312-457.728-457.728 0-111.104 38.912-214.528 107.52-294.912-1.536 16.384-2.048 32.256-2.048 48.64 0 330.24 268.288 598.528 598.528 598.528 16.384 0 32.256-0.512 48.64-2.048-80.896 68.096-184.32 107.52-294.912 107.52z m127.488-633.344l65.536-32.256 65.536 32.256-9.216-75.264 49.152-55.296-70.656-14.336-34.816-66.56-34.816 66.56-70.656 14.336 49.152 55.296-9.216 75.264zM441.344 432.64l43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.616-9.728-22.528-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176z m313.344 79.872l-23.04-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176 43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.104-9.728z" p-id="28654" fill="' + c + '"></path></svg> '
        }
        if (u) {
            let e = void 0 === u.attributes.img ? "https://cdn.jsdelivr.net/gh/drew233/cdn/logol.png" : u.attributes.img;
            i.set("adminAvatar", e), p = e, h = u.attributes.username
        }
        i.set("atId", e), i.set("commentContent", s), u || i.set("email", d), i.set("nick", h), i.save().then((function(e) {
            let t = '<span style="float: right"><svg t="1599635243920" cursor="pointer" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2431" width="16" height="16" fill="' + c + '"><path d="M853.3 893.6c-17.5 0-34.6-6.8-47.5-19.8l-44.4-44.4c-77.9-78.3-133-133.6-221.7-147.3v119.6c0 27.3-16.3 51.6-41.5 62.1s-53.9 4.7-73.2-14.6l-302-302c-26.2-26.2-26.2-68.8 0-95l302.1-302.1c19.3-19.3 48-25 73.2-14.6 25.2 10.4 41.5 34.8 41.5 62.1v145.5c140.6 4.1 249.5 73.7 315.4 202.1 48.2 93.9 65.4 206.8 65.4 281.2 0 27.3-16.3 51.7-41.5 62.1-8.3 3.4-17.1 5.1-25.8 5.1zM450.2 589.3H495c153.9 0 235.5 82 330 177l2.5 2.5c-5.4-48.3-18.7-118-52-182.6-52.3-101.9-136.1-153.6-248.8-153.6h-76.5V251.7l-248 248 248 248V589.3z" p-id="2432" fill="' + c + '"></path></svg></span>',
                r = document.getElementById("ccontent").innerHTML,
                i = '<li style="margin: 0 0 0 48px"><span class="shuoshuo_author_img"><img src="' + p + '"class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel"  >  <div>' + s + '</div><p class="shuoshuo_time"><span>' + h + "</span><span>&nbsp&nbsp" + b + m + " " + _ + t + "</span></p></span></li>",
                o = r.indexOf("</li>") + 5,
                a = r.slice(0, o) + i + r.slice(o);
            document.getElementById("ccontent").innerHTML = "", document.getElementById("neirong").value = "", document.getElementById("email").value = "", document.getElementById("commentNick").value = "", document.getElementById("ccontent").innerHTML = a, n("preview"), n("lazy")
        }))
    }, atEvery.prototype.atReplay = function() {
        document.getElementById("pubComment").click()
    }, atEvery.prototype.commentInit = function(e, t) {
        function n(e) {
            if (!document.getElementById(e)) return;
            document.getElementById(e).style.display = ""
        }

        function r(e) {
            if (!document.getElementById(e)) return;
            document.getElementById(e).style.display = "none"
        }
        document.getElementById("neirong").placeholder = "";
        let i = "atCoInit" + e;
        r("coValue" + e), document.getElementById(i).setAttribute("onclick", "location.reload()"), n("commentNick"), r("atSave"), n("commentSave"), n("lazy"), n("pubComment"), r("readmore"), r("pubShuo"), r("switchUser"), document.getElementById("pubComment").title = f, document.getElementById("pubComment").style.display = "inline", document.getElementById("pubComment").onclick = function() {
            "" === document.getElementById("shuoshuo_input").style.display ? r("shuoshuo_input") : n("shuoshuo_input")
        }, document.getElementById("email").placeholder = g, document.getElementById("commentNick").placeholder = m;
        let o = document.getElementById("atId" + e).innerHTML,
            a = '<ul class="cbp_tmtimeline" id="maina"><li><span class="shuoshuo_author_img"><img src="' + document.getElementById("atAvatar" + e).src + '" class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel">' + o + "</p></span></li></ul>";
        document.getElementById("ccontent").innerHTML = a;
        let s = "",
            u = AV.User.current(),
            l = new AV.Query("atComment");
        l.equalTo("atId", e), l.descending("createdAt"), l.find().then(e => {
            e.forEach((function(e) {
                let t = e.createdAt;

                function n(e) {
                    return e < 10 ? "0" + e : e
                }
                let r = new Date(t),
                    i = r.getFullYear() + "-" + n(r.getMonth() + 1) + "-" + n(r.getDate()),
                    o = n(r.getHours()) + ":" + n(r.getMinutes()) + ":" + n(r.getSeconds()),
                    a = r.getHours(),
                    u = "";
                switch (u) {
                    case a >= 0 && a < 5:
                        u = '<svg t="1591350196611"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24683" width="10" height="10"  style="display: inline"><path d="M171.605333 622.933333a341.333333 341.333333 0 1 1 680.789334 0h150.186666a21.333333 21.333333 0 1 1 0 42.666667H21.418667a21.333333 21.333333 0 1 1 0-42.666667h150.229333z m637.994667 0a298.666667 298.666667 0 1 0-595.2 0h595.2z" fill="' + c + '" p-id="24684"></path></svg> ';
                    case a >= 5 && a < 6:
                        u = '<svg t="1591350273094"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24973" width="10" height="10"  style="display: inline"><path d="M512 409.6c121.6 0 220.8 99.2 220.8 220.8 0 9.6-1.6 19.2-3.2 32l-6.4 36.8h152v8H145.6v-8h152l-6.4-36.8c-1.6-12.8-3.2-22.4-3.2-32 3.2-121.6 102.4-220.8 224-220.8m0-32c-139.2 0-252.8 113.6-252.8 252.8 0 12.8 1.6 24 3.2 36.8H131.2c-9.6 0-17.6 8-17.6 17.6v36.8c0 9.6 8 17.6 17.6 17.6h760c9.6 0 17.6-8 17.6-17.6v-36.8c0-9.6-8-17.6-17.6-17.6h-129.6c1.6-11.2 3.2-24 3.2-36.8 0-140.8-113.6-252.8-252.8-252.8zM817.6 329.6l6.4 6.4-57.6 57.6-6.4-6.4 57.6-57.6m0-38.4c-4.8 0-9.6 1.6-12.8 4.8l-76.8 76.8c-6.4 6.4-6.4 19.2 0 25.6l25.6 25.6c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l76.8-76.8c6.4-6.4 6.4-19.2 0-25.6l-25.6-25.6c-3.2-3.2-8-4.8-12.8-4.8zM516.8 211.2v81.6h-8v-81.6h8m12.8-32h-36.8c-9.6 0-17.6 8-17.6 17.6v108.8c0 9.6 8 17.6 17.6 17.6h36.8c9.6 0 17.6-8 17.6-17.6v-108.8c1.6-9.6-6.4-17.6-17.6-17.6zM232 828.8h560M792 844.8h-560c-9.6 0-16-6.4-16-16s6.4-16 16-16h561.6c9.6 0 16 6.4 16 16s-8 16-17.6 16zM233.6 308.8l57.6 57.6-6.4 6.4-57.6-57.6 6.4-6.4m0-36.8c-4.8 0-9.6 1.6-12.8 4.8l-25.6 25.6c-6.4 6.4-6.4 19.2 0 25.6l76.8 76.8c3.2 3.2 8 4.8 12.8 4.8s9.6-1.6 12.8-4.8l25.6-25.6c6.4-6.4 6.4-19.2 0-25.6l-76.8-76.8c-3.2-3.2-8-4.8-12.8-4.8z" fill="' + c + '" p-id="24974"></path></svg> ';
                    case a >= 6 && a < 8:
                        u = '<svg t="1591350470149"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25217" width="10" height="10"  style="display: inline"><path d="M574.2 236.3V96.8H454.6v139c19-2.9 38.5-4.4 58.3-4.4 20.8 0 41.3 1.7 61.3 4.9zM245.5 340.1l-114.1-78.5-67.9 98.5 113.8 78.4c17.6-36.1 40.6-69.3 68.2-98.4zM812 588.5c0-164.9-134.2-299.1-299.1-299.1-164.9 0-299.1 134.2-299.1 299.1M778.1 341l114.1-78.5L960 361l-113.8 78.4c-17.5-36.1-40.5-69.3-68.1-98.4zM911.6 746.2H113.8c-26.2 0-47.5-21.3-47.5-47.5s21.3-47.5 47.5-47.5h797.8c26.2 0 47.5 21.3 47.5 47.5 0 26.3-21.3 47.5-47.5 47.5zM766.6 882h-494c-21 0-38-17-38-38s17-38 38-38h494c21 0 38 17 38 38s-17 38-38 38z" fill="' + c + '" p-id="25218"></path></svg> ';
                    case a >= 8 && a < 11:
                        u = '<svg t="1591350526184"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="26011" width="10" height="10"  style="display: inline"><path d="M814.592 409.63l96.075-96.105-81.77-81.77-95.924 95.865a381.803 381.803 0 0 1 81.619 82.01zM881.965 572.597c2.952 18.823 4.427 38.189 4.427 57.826 0 19.606-1.505 38.972-4.427 57.825h136.011V572.597h-136.01zM569.826 259.223V124.446H454.174v134.355c18.402-2.801 37.195-4.247 56.38-4.277 20.15 0 39.936 1.627 59.272 4.699zM289.792 326.415l-94.66-94.66-81.77 81.77 94.42 94.449c22.98-31.202 50.658-58.76 82.01-81.559zM134.686 630.423c0-19.697 1.506-38.973 4.458-57.826H6.024v115.651h133.12c-2.952-18.853-4.458-38.159-4.458-57.825zM227.358 688.67h566.423c3.885-18.823 5.903-38.31 5.903-58.278 0-159.412-129.687-289.16-289.13-289.16-159.382 0-289.099 129.718-289.099 289.16 0 19.968 2.018 39.455 5.903 58.278zM902.837 779.083h-783.06c-33.249 0-60.234 26.986-60.234 60.236s26.985 60.235 60.235 60.235h783.059c33.25 0 60.235-26.986 60.235-60.235s-26.985-60.236-60.235-60.236z" p-id="26012" fill="' + c + '"></path></svg> ';
                    case a >= 11 && a < 13:
                        u = '<svg t="1591350817881"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29283" width="10" height="10"  style="display: inline"><path d="M512 272.965905c-135.175679 0-245.151419 109.980857-245.151419 245.152443 0 135.175679 109.976764 245.156536 245.151419 245.156536 135.176702 0 245.156536-109.98188 245.156536-245.156536 0-135.171586-109.979834-245.152443-245.156536-245.152443z m0 416.114163c-94.273107 0-170.956603-76.685543-170.956603-170.96172 0-94.2772 76.683497-170.957627 170.956603-170.957627 94.2772 0 170.962743 76.680427 170.962743 170.957627 0 94.276177-76.685543 170.96172-170.962743 170.96172zM475.28582 65.290005h73.427336v159.101601h-73.427336V65.290005z m0 746.559177h73.427336v146.859789h-73.427336V811.849182z m214.111473-529.185404L801.897529 170.163541l51.92358 51.92358-112.500237 112.500237-51.923579-51.92358zM170.167634 801.897529l103.84409-103.847159 51.92358 51.92358-103.84716 103.847159-51.92051-51.92358z m629.439736-326.611709H958.708971v73.427336H799.60737v-73.427336z m-734.317365 0h146.864906v73.427336H65.290005v-73.427336z m624.107288 266.045286l51.923579-51.92358 112.500237 112.500237-51.92358 51.923579-112.500236-112.500236zM170.162518 222.092237l51.924603-51.923579 103.84716 103.847159-51.92358 51.92358-103.848183-103.84716z m0 0" p-id="29284" fill="' + c + '"></path></svg> ';
                    case a >= 13 && a < 17:
                        u = '<svg t="1591350596667"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27504" width="10" height="10"  style="display: inline"><path d="M166.4 712.533c-17.067-17.066-17.067-42.666 0-59.733l59.733-59.733C243.2 576 268.8 576 285.867 593.067c17.066 17.066 17.066 42.666 0 59.733l-59.734 59.733c-17.066 17.067-42.666 17.067-59.733 0z m691.2 0c-17.067 17.067-42.667 17.067-59.733 0L738.133 652.8c-17.066-17.067-17.066-42.667 0-59.733C755.2 576 780.8 576 797.867 593.067L857.6 652.8c17.067 17.067 17.067 42.667 0 59.733zM512 896c-25.6 0-42.667-17.067-42.667-42.667V768c0-25.6 17.067-42.667 42.667-42.667S554.667 742.4 554.667 768v85.333C554.667 878.933 537.6 896 512 896z m128-640H384c-25.6 0-42.667-17.067-42.667-42.667S358.4 170.667 384 170.667h256c25.6 0 42.667 17.066 42.667 42.666S665.6 256 640 256z m42.667 170.667H341.333c0 93.866 76.8 170.666 170.667 170.666s170.667-76.8 170.667-170.666z m85.333 0c0 140.8-115.2 256-256 256s-256-115.2-256-256H128c-25.6 0-42.667-17.067-42.667-42.667S102.4 341.333 128 341.333h768c25.6 0 42.667 17.067 42.667 42.667S921.6 426.667 896 426.667H768z" p-id="27505" fill="' + c + '"></path></svg> ';
                    case a >= 17 && a < 18:
                        u = '<svg t="1591350638906"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="27813" width="10" height="10"  style="display: inline"><path d="M736.946238 928.866293H246.668982c-43.317575 0-80.755232-5.869684-111.272269-17.445324-30.91408-11.726066-56.671721-27.753087-76.555583-47.635927-20.088524-20.090571-34.731012-43.647079-43.521213-70.018704-8.473999-25.419949-12.769838-52.570309-12.769838-80.696903 0-28.757974 5.669116-56.32175 16.847713-81.925894 11.04659-25.300222 26.243711-47.905056 45.169759-67.187215 19.017122-19.376303 41.549302-34.82925 66.969251-45.928029 25.605168-11.17962 53.497425-16.848737 82.903152-16.848737 41.588187 0 79.659271 10.957563 113.156176 32.568767 16.228613 10.469446 30.630624 22.576181 43.125193 36.231179 3.105734-15.261589 7.444553-30.498618 13.002128-45.62513 12.695137-34.559097 33.183773-66.134233 60.896952-93.847412 27.629267-27.630291 63.863517-50.215682 107.698885-67.128886 43.512003-16.787338 97.086176-25.299199 159.236677-25.299199 47.696302 0 89.25993 6.14393 123.531478 18.261922 34.490535 12.192693 63.806211 28.589129 87.128383 48.731888 23.38357 20.193925 42.095747 43.782156 55.615668 70.109777 13.068643 25.449625 22.843264 51.652404 29.055756 77.881788 6.088672 25.702382 10.036587 51.129494 11.734253 75.571163 1.65264 23.796986 2.490727 45.302789 2.490727 63.923892 0 30.209022-6.715959 60.043514-19.958564 88.676645-13.204743 28.55229-32.511461 54.019311-57.379849 75.691913-24.514323 21.361517-54.521754 38.871309-89.191368 52.045353-34.738176 13.20065-74.315566 19.893072-117.636211 19.893073zM214.43893 542.112832c-23.733541 0-46.115294 4.517897-66.524112 13.428847-20.594037 8.991792-38.806841 21.468964-54.134945 37.086663-15.421224 15.711843-27.825742 34.180474-36.869722 54.895261-8.91095 20.406772-13.428847 42.460044-13.428847 65.546855 0 23.719214 3.589758 46.514383 10.670013 67.753104 6.763031 20.289092 18.078751 38.464033 33.634029 54.019311 15.760962 15.759939 36.664038 28.64848 62.127989 38.307467 25.863041 9.810437 58.415434 14.784728 96.755647 14.784728h490.277256c38.334073 0 73.019037-5.79396 103.09196-17.22122 30.132274-11.449773 55.986105-26.470885 76.840063-44.642756 20.4958-17.86181 36.348859-38.727023 47.121203-62.016449 10.734482-23.208585 16.177448-47.26242 16.177448-71.493288 0-17.677615-0.804319-38.23072-2.39249-61.087286-1.543146-22.225187-5.15337-45.430702-10.730389-68.972885-5.450129-23.019273-14.075577-46.105061-25.63689-68.617797-11.106965-21.629623-26.569122-41.086767-45.956681-57.82908-19.448958-16.797571-44.352137-30.632671-74.017784-41.119513-29.879518-10.564613-66.850547-15.921621-109.887736-15.921621-57.093323 0-105.711624 7.588839-144.503115 22.555715-38.471197 14.843056-69.925582 34.31862-93.489254 57.883315-23.485901 23.485901-40.784892 50.071396-51.41909 79.018682-10.832719 29.485545-16.324804 59.313897-16.324804 88.655156a20.466124 20.466124 0 0 1-38.772049 9.15245c-13.891382-27.782763-34.630728-50.706869-61.642942-68.133773-27.15036-17.516956-56.905034-26.031886-90.964758-26.031886z" p-id="27814" fill="' + c + '"></path><path d="M275.518031 465.671858c-35.294854 0-69.230758-8.18338-100.865246-24.321941-26.51898-13.440104-49.698912-31.770588-68.847017-54.456263l-31.388895-37.18797 48.532343 3.576455c4.389984 0.323365 8.849552 0.487094 13.256932 0.487093 68.686359 0 130.741693-38.017872 161.949462-99.218745 33.244148-65.309448 24.155143-143.721309-23.161512-199.74937L243.63181 17.665335l48.478107 3.517103c29.582759 2.146896 58.0583 10.119475 84.634586 23.697725 52.919257 26.963095 92.187609 72.954569 110.549815 129.494283 18.36016 56.533574 13.616112 116.824729-13.359262 169.767522-18.97926 37.250392-47.882544 68.264756-83.587743 89.689718-34.71157 20.830421-74.419943 31.840172-114.829282 31.840172z m-104.032378-73.785493a181.122127 181.122127 0 0 0 21.720697 12.977569c25.867134 13.196557 53.54552 19.875676 82.312704 19.875677 68.723198 0 130.777509-38.003546 161.946392-99.178837 22.01234-43.203988 25.883507-92.405573 10.900258-138.542356-14.984273-46.137807-47.026036-83.668585-90.221838-105.676832a182.542476 182.542476 0 0 0-23.326264-9.953699c31.791054 62.529125 32.601512 137.326669-0.188289 201.74277-19.007913 37.275975-47.915289 68.296479-83.604116 89.721441a223.364207 223.364207 0 0 1-79.539544 29.034267z" p-id="27815" fill="' + c + '"></path></svg> ';
                    case a >= 18 && a < 21:
                        u = '<svg t="1591350675688"  viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28653" width="10" height="10"  style="display: inline"><path d="M784.896 767.488c-291.84 0-528.384-236.544-528.384-528.384 0-81.92 19.456-159.744 52.736-228.864C132.608 95.744 10.24 275.968 10.24 485.376 10.24 777.216 246.784 1013.76 538.624 1013.76c209.408 0 390.144-122.368 475.136-299.008-69.12 33.28-146.944 52.736-228.864 52.736z m-246.272 176.128c-252.416 0-457.728-205.312-457.728-457.728 0-111.104 38.912-214.528 107.52-294.912-1.536 16.384-2.048 32.256-2.048 48.64 0 330.24 268.288 598.528 598.528 598.528 16.384 0 32.256-0.512 48.64-2.048-80.896 68.096-184.32 107.52-294.912 107.52z m127.488-633.344l65.536-32.256 65.536 32.256-9.216-75.264 49.152-55.296-70.656-14.336-34.816-66.56-34.816 66.56-70.656 14.336 49.152 55.296-9.216 75.264zM441.344 432.64l43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.616-9.728-22.528-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176z m313.344 79.872l-23.04-44.032-23.04 44.032-47.104 9.728 32.768 36.864-6.144 50.176 43.52-21.504 43.52 21.504-6.144-50.176 32.768-36.864-47.104-9.728z" p-id="28654" fill="' + c + '"></path></svg> '
                }
                let l = e.attributes.commentContent,
                    h = e.attributes.nick,
                    d = e.attributes.email,
                    p = e.attributes.adminAvatar,
                    f = "https://cdn.staticdn.net/avatar/" + d + "?d=mp&s=80";
                void 0 !== p && (f = p), s += '<li style="margin: 0 0 0 48px"><span class="shuoshuo_author_img"><img src="' + f + '"class="artitalk_avatar gallery-group-img" width="48" height="48"></span><span class="cbp_tmlabel"  >  <div>' + l + '</div><p class="shuoshuo_time"><span>' + h + "</span><span>&nbsp&nbsp" + u + i + " " + o + ('<span style="float: right"><svg t="1599635243920" onclick=\'atEvery.prototype.atReplay()\' cursor="pointer" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2431" width="16" height="16" fill="' + c + '"><path d="M853.3 893.6c-17.5 0-34.6-6.8-47.5-19.8l-44.4-44.4c-77.9-78.3-133-133.6-221.7-147.3v119.6c0 27.3-16.3 51.6-41.5 62.1s-53.9 4.7-73.2-14.6l-302-302c-26.2-26.2-26.2-68.8 0-95l302.1-302.1c19.3-19.3 48-25 73.2-14.6 25.2 10.4 41.5 34.8 41.5 62.1v145.5c140.6 4.1 249.5 73.7 315.4 202.1 48.2 93.9 65.4 206.8 65.4 281.2 0 27.3-16.3 51.7-41.5 62.1-8.3 3.4-17.1 5.1-25.8 5.1zM450.2 589.3H495c153.9 0 235.5 82 330 177l2.5 2.5c-5.4-48.3-18.7-118-52-182.6-52.3-101.9-136.1-153.6-248.8-153.6h-76.5V251.7l-248 248 248 248V589.3z" p-id="2432" fill="' + c + '"></path></svg></span>') + "</span></p></span></li>"
            }));
            let t = document.getElementById("ccontent").innerHTML;
            t = t.replace(/(.*)<\/ul>/, "$1 "), t += s + "</ul>", document.getElementById("ccontent").innerHTML = t
        }).then((function() {
            u && (r("commentNick"), r("email")), n("email"), r("lazy")
        })), document.getElementById("commentSave").onclick = function() {
            atEvery.prototype.saveComment(e, t)
        }
    }
};
//# sourceMappingURL=/sm/4debb62364d66c76acc2e6d09e34bb18bdd7ae2903668a48fc49fb704625093a.map