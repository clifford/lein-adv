// Compiled by ClojureScript 0.0-2197
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t22889 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22889 = (function (f,fn_handler,meta22890){
this.f = f;
this.fn_handler = fn_handler;
this.meta22890 = meta22890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22889.cljs$lang$type = true;
cljs.core.async.t22889.cljs$lang$ctorStr = "cljs.core.async/t22889";
cljs.core.async.t22889.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write(writer__4046__auto__,"cljs.core.async/t22889");
});
cljs.core.async.t22889.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22889.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t22889.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t22889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22891){var self__ = this;
var _22891__$1 = this;return self__.meta22890;
});
cljs.core.async.t22889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22891,meta22890__$1){var self__ = this;
var _22891__$1 = this;return (new cljs.core.async.t22889(self__.f,self__.fn_handler,meta22890__$1));
});
cljs.core.async.__GT_t22889 = (function __GT_t22889(f__$1,fn_handler__$1,meta22890){return (new cljs.core.async.t22889(f__$1,fn_handler__$1,meta22890));
});
}
return (new cljs.core.async.t22889(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__22893 = buff;if(G__22893)
{var bit__4128__auto__ = null;if(cljs.core.truth_((function (){var or__3478__auto__ = bit__4128__auto__;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return G__22893.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__22893.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22893);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22893);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_22894 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22894) : fn1.call(null,val_22894));
} else
{cljs.core.async.impl.dispatch.run(((function (val_22894,ret){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_22894) : fn1.call(null,val_22894));
});})(val_22894,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref(ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref(retb);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else
{cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4090__auto__){
return (function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4090__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4326__auto___22895 = n;var x_22896 = 0;while(true){
if((x_22896 < n__4326__auto___22895))
{(a[x_22896] = 0);
{
var G__22897 = (x_22896 + 1);
x_22896 = G__22897;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__22898 = (i + 1);
i = G__22898;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t22902 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22902 = (function (flag,alt_flag,meta22903){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta22903 = meta22903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22902.cljs$lang$type = true;
cljs.core.async.t22902.cljs$lang$ctorStr = "cljs.core.async/t22902";
cljs.core.async.t22902.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write(writer__4046__auto__,"cljs.core.async/t22902");
});})(flag))
;
cljs.core.async.t22902.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});})(flag))
;
cljs.core.async.t22902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t22902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22904){var self__ = this;
var _22904__$1 = this;return self__.meta22903;
});})(flag))
;
cljs.core.async.t22902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22904,meta22903__$1){var self__ = this;
var _22904__$1 = this;return (new cljs.core.async.t22902(self__.flag,self__.alt_flag,meta22903__$1));
});})(flag))
;
cljs.core.async.__GT_t22902 = ((function (flag){
return (function __GT_t22902(flag__$1,alt_flag__$1,meta22903){return (new cljs.core.async.t22902(flag__$1,alt_flag__$1,meta22903));
});})(flag))
;
}
return (new cljs.core.async.t22902(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t22908 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22908 = (function (cb,flag,alt_handler,meta22909){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta22909 = meta22909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22908.cljs$lang$type = true;
cljs.core.async.t22908.cljs$lang$ctorStr = "cljs.core.async/t22908";
cljs.core.async.t22908.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write(writer__4046__auto__,"cljs.core.async/t22908");
});
cljs.core.async.t22908.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22908.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t22908.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t22908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22910){var self__ = this;
var _22910__$1 = this;return self__.meta22909;
});
cljs.core.async.t22908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22910,meta22909__$1){var self__ = this;
var _22910__$1 = this;return (new cljs.core.async.t22908(self__.cb,self__.flag,self__.alt_handler,meta22909__$1));
});
cljs.core.async.__GT_t22908 = (function __GT_t22908(cb__$1,flag__$1,alt_handler__$1,meta22909){return (new cljs.core.async.t22908(cb__$1,flag__$1,alt_handler__$1,meta22909));
});
}
return (new cljs.core.async.t22908(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$111.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22911_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22911_SHARP_,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22911_SHARP_,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22912_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22912_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22912_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3478__auto__ = wport;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__22913 = (i + 1);
i = G__22913;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3478__auto__ = ret;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$95))
{var temp__4092__auto__ = (function (){var and__3466__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3466__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3466__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$95], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__22914){var map__22916 = p__22914;var map__22916__$1 = ((cljs.core.seq_QMARK_(map__22916))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22916):map__22916);var opts = map__22916__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__22914 = null;if (arguments.length > 1) {
  p__22914 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__22914);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__22917){
var ports = cljs.core.first(arglist__22917);
var p__22914 = cljs.core.rest(arglist__22917);
return alts_BANG___delegate(ports,p__22914);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t22925 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22925 = (function (ch,f,map_LT_,meta22926){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22926 = meta22926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22925.cljs$lang$type = true;
cljs.core.async.t22925.cljs$lang$ctorStr = "cljs.core.async/t22925";
cljs.core.async.t22925.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write(writer__4046__auto__,"cljs.core.async/t22925");
});
cljs.core.async.t22925.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22925.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});
cljs.core.async.t22925.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22925.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t22928 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22928 = (function (fn1,_,meta22926,ch,f,map_LT_,meta22929){
this.fn1 = fn1;
this._ = _;
this.meta22926 = meta22926;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22929 = meta22929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22928.cljs$lang$type = true;
cljs.core.async.t22928.cljs$lang$ctorStr = "cljs.core.async/t22928";
cljs.core.async.t22928.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write(writer__4046__auto__,"cljs.core.async/t22928");
});})(___$1))
;
cljs.core.async.t22928.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t22928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;
cljs.core.async.t22928.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});})(___$1))
;
cljs.core.async.t22928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__22918_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__22918_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22918_SHARP_) : self__.f.call(null,p1__22918_SHARP_)))) : f1.call(null,(((p1__22918_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22918_SHARP_) : self__.f.call(null,p1__22918_SHARP_)))));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t22928.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22930){var self__ = this;
var _22930__$1 = this;return self__.meta22929;
});})(___$1))
;
cljs.core.async.t22928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22930,meta22929__$1){var self__ = this;
var _22930__$1 = this;return (new cljs.core.async.t22928(self__.fn1,self__._,self__.meta22926,self__.ch,self__.f,self__.map_LT_,meta22929__$1));
});})(___$1))
;
cljs.core.async.__GT_t22928 = ((function (___$1){
return (function __GT_t22928(fn1__$1,___$2,meta22926__$1,ch__$2,f__$2,map_LT___$2,meta22929){return (new cljs.core.async.t22928(fn1__$1,___$2,meta22926__$1,ch__$2,f__$2,map_LT___$2,meta22929));
});})(___$1))
;
}
return (new cljs.core.async.t22928(fn1,___$1,self__.meta22926,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3466__auto__ = ret;if(cljs.core.truth_(and__3466__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3466__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t22925.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22925.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22925.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t22925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22927){var self__ = this;
var _22927__$1 = this;return self__.meta22926;
});
cljs.core.async.t22925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22927,meta22926__$1){var self__ = this;
var _22927__$1 = this;return (new cljs.core.async.t22925(self__.ch,self__.f,self__.map_LT_,meta22926__$1));
});
cljs.core.async.__GT_t22925 = (function __GT_t22925(ch__$1,f__$1,map_LT___$1,meta22926){return (new cljs.core.async.t22925(ch__$1,f__$1,map_LT___$1,meta22926));
});
}
return (new cljs.core.async.t22925(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t22934 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22934 = (function (ch,f,map_GT_,meta22935){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22935 = meta22935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22934.cljs$lang$type = true;
cljs.core.async.t22934.cljs$lang$ctorStr = "cljs.core.async/t22934";
cljs.core.async.t22934.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write(writer__4046__auto__,"cljs.core.async/t22934");
});
cljs.core.async.t22934.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});
cljs.core.async.t22934.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22934.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22936){var self__ = this;
var _22936__$1 = this;return self__.meta22935;
});
cljs.core.async.t22934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22936,meta22935__$1){var self__ = this;
var _22936__$1 = this;return (new cljs.core.async.t22934(self__.ch,self__.f,self__.map_GT_,meta22935__$1));
});
cljs.core.async.__GT_t22934 = (function __GT_t22934(ch__$1,f__$1,map_GT___$1,meta22935){return (new cljs.core.async.t22934(ch__$1,f__$1,map_GT___$1,meta22935));
});
}
return (new cljs.core.async.t22934(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t22940 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t22940 = (function (ch,p,filter_GT_,meta22941){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22941 = meta22941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22940.cljs$lang$type = true;
cljs.core.async.t22940.cljs$lang$ctorStr = "cljs.core.async/t22940";
cljs.core.async.t22940.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write(writer__4046__auto__,"cljs.core.async/t22940");
});
cljs.core.async.t22940.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t22940.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});
cljs.core.async.t22940.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t22940.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t22940.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t22940.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t22940.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});
cljs.core.async.t22940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22942){var self__ = this;
var _22942__$1 = this;return self__.meta22941;
});
cljs.core.async.t22940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22942,meta22941__$1){var self__ = this;
var _22942__$1 = this;return (new cljs.core.async.t22940(self__.ch,self__.p,self__.filter_GT_,meta22941__$1));
});
cljs.core.async.__GT_t22940 = (function __GT_t22940(ch__$1,p__$1,filter_GT___$1,meta22941){return (new cljs.core.async.t22940(ch__$1,p__$1,filter_GT___$1,meta22941));
});
}
return (new cljs.core.async.t22940(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5635__auto___23025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto___23025,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___23025,out){
return (function (state_23004){var state_val_23005 = (state_23004[1]);if((state_val_23005 === 1))
{var state_23004__$1 = state_23004;var statearr_23006_23026 = state_23004__$1;(statearr_23006_23026[2] = null);
(statearr_23006_23026[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23005 === 2))
{var state_23004__$1 = state_23004;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23004__$1,4,ch);
} else
{if((state_val_23005 === 3))
{var inst_23002 = (state_23004[2]);var state_23004__$1 = state_23004;return cljs.core.async.impl.ioc_helpers.return_chan(state_23004__$1,inst_23002);
} else
{if((state_val_23005 === 4))
{var inst_22986 = (state_23004[7]);var inst_22986__$1 = (state_23004[2]);var inst_22987 = (inst_22986__$1 == null);var state_23004__$1 = (function (){var statearr_23007 = state_23004;(statearr_23007[7] = inst_22986__$1);
return statearr_23007;
})();if(cljs.core.truth_(inst_22987))
{var statearr_23008_23027 = state_23004__$1;(statearr_23008_23027[1] = 5);
} else
{var statearr_23009_23028 = state_23004__$1;(statearr_23009_23028[1] = 6);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23005 === 5))
{var inst_22989 = cljs.core.async.close_BANG_(out);var state_23004__$1 = state_23004;var statearr_23010_23029 = state_23004__$1;(statearr_23010_23029[2] = inst_22989);
(statearr_23010_23029[1] = 7);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23005 === 6))
{var inst_22986 = (state_23004[7]);var inst_22991 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22986) : p.call(null,inst_22986));var state_23004__$1 = state_23004;if(cljs.core.truth_(inst_22991))
{var statearr_23011_23030 = state_23004__$1;(statearr_23011_23030[1] = 8);
} else
{var statearr_23012_23031 = state_23004__$1;(statearr_23012_23031[1] = 9);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23005 === 7))
{var inst_23000 = (state_23004[2]);var state_23004__$1 = state_23004;var statearr_23013_23032 = state_23004__$1;(statearr_23013_23032[2] = inst_23000);
(statearr_23013_23032[1] = 3);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23005 === 8))
{var inst_22986 = (state_23004[7]);var state_23004__$1 = state_23004;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23004__$1,11,out,inst_22986);
} else
{if((state_val_23005 === 9))
{var state_23004__$1 = state_23004;var statearr_23014_23033 = state_23004__$1;(statearr_23014_23033[2] = null);
(statearr_23014_23033[1] = 10);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23005 === 10))
{var inst_22997 = (state_23004[2]);var state_23004__$1 = (function (){var statearr_23015 = state_23004;(statearr_23015[8] = inst_22997);
return statearr_23015;
})();var statearr_23016_23034 = state_23004__$1;(statearr_23016_23034[2] = null);
(statearr_23016_23034[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23005 === 11))
{var inst_22994 = (state_23004[2]);var state_23004__$1 = state_23004;var statearr_23017_23035 = state_23004__$1;(statearr_23017_23035[2] = inst_22994);
(statearr_23017_23035[1] = 10);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5635__auto___23025,out))
;return ((function (switch__5620__auto__,c__5635__auto___23025,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_23021 = [null,null,null,null,null,null,null,null,null];(statearr_23021[0] = state_machine__5621__auto__);
(statearr_23021[1] = 1);
return statearr_23021;
});
var state_machine__5621__auto____1 = (function (state_23004){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_23004);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e23022){if((e23022 instanceof Object))
{var ex__5624__auto__ = e23022;var statearr_23023_23036 = state_23004;(statearr_23023_23036[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23004);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e23022;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__23037 = state_23004;
state_23004 = G__23037;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_23004){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_23004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___23025,out))
})();var state__5637__auto__ = (function (){var statearr_23024 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_23024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___23025);
return statearr_23024;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto___23025,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5635__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto__){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto__){
return (function (state_23203){var state_val_23204 = (state_23203[1]);if((state_val_23204 === 1))
{var state_23203__$1 = state_23203;var statearr_23205_23246 = state_23203__$1;(statearr_23205_23246[2] = null);
(statearr_23205_23246[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 2))
{var state_23203__$1 = state_23203;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23203__$1,4,in$);
} else
{if((state_val_23204 === 3))
{var inst_23201 = (state_23203[2]);var state_23203__$1 = state_23203;return cljs.core.async.impl.ioc_helpers.return_chan(state_23203__$1,inst_23201);
} else
{if((state_val_23204 === 4))
{var inst_23144 = (state_23203[7]);var inst_23144__$1 = (state_23203[2]);var inst_23145 = (inst_23144__$1 == null);var state_23203__$1 = (function (){var statearr_23206 = state_23203;(statearr_23206[7] = inst_23144__$1);
return statearr_23206;
})();if(cljs.core.truth_(inst_23145))
{var statearr_23207_23247 = state_23203__$1;(statearr_23207_23247[1] = 5);
} else
{var statearr_23208_23248 = state_23203__$1;(statearr_23208_23248[1] = 6);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 5))
{var inst_23147 = cljs.core.async.close_BANG_(out);var state_23203__$1 = state_23203;var statearr_23209_23249 = state_23203__$1;(statearr_23209_23249[2] = inst_23147);
(statearr_23209_23249[1] = 7);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 6))
{var inst_23144 = (state_23203[7]);var inst_23153 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23144) : f.call(null,inst_23144));var inst_23154 = cljs.core.seq(inst_23153);var inst_23155 = inst_23154;var inst_23156 = null;var inst_23157 = 0;var inst_23158 = 0;var state_23203__$1 = (function (){var statearr_23210 = state_23203;(statearr_23210[8] = inst_23155);
(statearr_23210[9] = inst_23158);
(statearr_23210[10] = inst_23157);
(statearr_23210[11] = inst_23156);
return statearr_23210;
})();var statearr_23211_23250 = state_23203__$1;(statearr_23211_23250[2] = null);
(statearr_23211_23250[1] = 8);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 7))
{var inst_23199 = (state_23203[2]);var state_23203__$1 = state_23203;var statearr_23212_23251 = state_23203__$1;(statearr_23212_23251[2] = inst_23199);
(statearr_23212_23251[1] = 3);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 8))
{var inst_23158 = (state_23203[9]);var inst_23157 = (state_23203[10]);var inst_23160 = (inst_23158 < inst_23157);var inst_23161 = inst_23160;var state_23203__$1 = state_23203;if(cljs.core.truth_(inst_23161))
{var statearr_23213_23252 = state_23203__$1;(statearr_23213_23252[1] = 10);
} else
{var statearr_23214_23253 = state_23203__$1;(statearr_23214_23253[1] = 11);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 9))
{var inst_23191 = (state_23203[2]);var inst_23192 = cljs.core.async.impl.protocols.closed_QMARK_(out);var state_23203__$1 = (function (){var statearr_23215 = state_23203;(statearr_23215[12] = inst_23191);
return statearr_23215;
})();if(cljs.core.truth_(inst_23192))
{var statearr_23216_23254 = state_23203__$1;(statearr_23216_23254[1] = 21);
} else
{var statearr_23217_23255 = state_23203__$1;(statearr_23217_23255[1] = 22);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 10))
{var inst_23158 = (state_23203[9]);var inst_23156 = (state_23203[11]);var inst_23163 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23156,inst_23158);var state_23203__$1 = state_23203;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23203__$1,13,out,inst_23163);
} else
{if((state_val_23204 === 11))
{var inst_23155 = (state_23203[8]);var inst_23169 = (state_23203[13]);var inst_23169__$1 = cljs.core.seq(inst_23155);var state_23203__$1 = (function (){var statearr_23221 = state_23203;(statearr_23221[13] = inst_23169__$1);
return statearr_23221;
})();if(inst_23169__$1)
{var statearr_23222_23256 = state_23203__$1;(statearr_23222_23256[1] = 14);
} else
{var statearr_23223_23257 = state_23203__$1;(statearr_23223_23257[1] = 15);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 12))
{var inst_23189 = (state_23203[2]);var state_23203__$1 = state_23203;var statearr_23224_23258 = state_23203__$1;(statearr_23224_23258[2] = inst_23189);
(statearr_23224_23258[1] = 9);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 13))
{var inst_23155 = (state_23203[8]);var inst_23158 = (state_23203[9]);var inst_23157 = (state_23203[10]);var inst_23156 = (state_23203[11]);var inst_23165 = (state_23203[2]);var inst_23166 = (inst_23158 + 1);var tmp23218 = inst_23155;var tmp23219 = inst_23157;var tmp23220 = inst_23156;var inst_23155__$1 = tmp23218;var inst_23156__$1 = tmp23220;var inst_23157__$1 = tmp23219;var inst_23158__$1 = inst_23166;var state_23203__$1 = (function (){var statearr_23225 = state_23203;(statearr_23225[8] = inst_23155__$1);
(statearr_23225[14] = inst_23165);
(statearr_23225[9] = inst_23158__$1);
(statearr_23225[10] = inst_23157__$1);
(statearr_23225[11] = inst_23156__$1);
return statearr_23225;
})();var statearr_23226_23259 = state_23203__$1;(statearr_23226_23259[2] = null);
(statearr_23226_23259[1] = 8);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 14))
{var inst_23169 = (state_23203[13]);var inst_23171 = cljs.core.chunked_seq_QMARK_(inst_23169);var state_23203__$1 = state_23203;if(inst_23171)
{var statearr_23227_23260 = state_23203__$1;(statearr_23227_23260[1] = 17);
} else
{var statearr_23228_23261 = state_23203__$1;(statearr_23228_23261[1] = 18);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 15))
{var state_23203__$1 = state_23203;var statearr_23229_23262 = state_23203__$1;(statearr_23229_23262[2] = null);
(statearr_23229_23262[1] = 16);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 16))
{var inst_23187 = (state_23203[2]);var state_23203__$1 = state_23203;var statearr_23230_23263 = state_23203__$1;(statearr_23230_23263[2] = inst_23187);
(statearr_23230_23263[1] = 12);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 17))
{var inst_23169 = (state_23203[13]);var inst_23173 = cljs.core.chunk_first(inst_23169);var inst_23174 = cljs.core.chunk_rest(inst_23169);var inst_23175 = cljs.core.count(inst_23173);var inst_23155 = inst_23174;var inst_23156 = inst_23173;var inst_23157 = inst_23175;var inst_23158 = 0;var state_23203__$1 = (function (){var statearr_23231 = state_23203;(statearr_23231[8] = inst_23155);
(statearr_23231[9] = inst_23158);
(statearr_23231[10] = inst_23157);
(statearr_23231[11] = inst_23156);
return statearr_23231;
})();var statearr_23232_23264 = state_23203__$1;(statearr_23232_23264[2] = null);
(statearr_23232_23264[1] = 8);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 18))
{var inst_23169 = (state_23203[13]);var inst_23178 = cljs.core.first(inst_23169);var state_23203__$1 = state_23203;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23203__$1,20,out,inst_23178);
} else
{if((state_val_23204 === 19))
{var inst_23184 = (state_23203[2]);var state_23203__$1 = state_23203;var statearr_23233_23265 = state_23203__$1;(statearr_23233_23265[2] = inst_23184);
(statearr_23233_23265[1] = 16);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 20))
{var inst_23169 = (state_23203[13]);var inst_23180 = (state_23203[2]);var inst_23181 = cljs.core.next(inst_23169);var inst_23155 = inst_23181;var inst_23156 = null;var inst_23157 = 0;var inst_23158 = 0;var state_23203__$1 = (function (){var statearr_23234 = state_23203;(statearr_23234[8] = inst_23155);
(statearr_23234[15] = inst_23180);
(statearr_23234[9] = inst_23158);
(statearr_23234[10] = inst_23157);
(statearr_23234[11] = inst_23156);
return statearr_23234;
})();var statearr_23235_23266 = state_23203__$1;(statearr_23235_23266[2] = null);
(statearr_23235_23266[1] = 8);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 21))
{var state_23203__$1 = state_23203;var statearr_23236_23267 = state_23203__$1;(statearr_23236_23267[2] = null);
(statearr_23236_23267[1] = 23);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 22))
{var state_23203__$1 = state_23203;var statearr_23237_23268 = state_23203__$1;(statearr_23237_23268[2] = null);
(statearr_23237_23268[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23204 === 23))
{var inst_23197 = (state_23203[2]);var state_23203__$1 = state_23203;var statearr_23238_23269 = state_23203__$1;(statearr_23238_23269[2] = inst_23197);
(statearr_23238_23269[1] = 7);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5635__auto__))
;return ((function (switch__5620__auto__,c__5635__auto__){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_23242 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23242[0] = state_machine__5621__auto__);
(statearr_23242[1] = 1);
return statearr_23242;
});
var state_machine__5621__auto____1 = (function (state_23203){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_23203);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e23243){if((e23243 instanceof Object))
{var ex__5624__auto__ = e23243;var statearr_23244_23270 = state_23203;(statearr_23244_23270[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23203);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e23243;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__23271 = state_23203;
state_23203 = G__23271;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_23203){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_23203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto__))
})();var state__5637__auto__ = (function (){var statearr_23245 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_23245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto__);
return statearr_23245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto__))
);
return c__5635__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5635__auto___23366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto___23366){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___23366){
return (function (state_23342){var state_val_23343 = (state_23342[1]);if((state_val_23343 === 1))
{var state_23342__$1 = state_23342;var statearr_23344_23367 = state_23342__$1;(statearr_23344_23367[2] = null);
(statearr_23344_23367[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23343 === 2))
{var state_23342__$1 = state_23342;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23342__$1,4,from);
} else
{if((state_val_23343 === 3))
{var inst_23340 = (state_23342[2]);var state_23342__$1 = state_23342;return cljs.core.async.impl.ioc_helpers.return_chan(state_23342__$1,inst_23340);
} else
{if((state_val_23343 === 4))
{var inst_23321 = (state_23342[7]);var inst_23321__$1 = (state_23342[2]);var inst_23322 = (inst_23321__$1 == null);var state_23342__$1 = (function (){var statearr_23345 = state_23342;(statearr_23345[7] = inst_23321__$1);
return statearr_23345;
})();if(cljs.core.truth_(inst_23322))
{var statearr_23346_23368 = state_23342__$1;(statearr_23346_23368[1] = 5);
} else
{var statearr_23347_23369 = state_23342__$1;(statearr_23347_23369[1] = 6);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23343 === 5))
{var state_23342__$1 = state_23342;if(cljs.core.truth_(close_QMARK_))
{var statearr_23348_23370 = state_23342__$1;(statearr_23348_23370[1] = 8);
} else
{var statearr_23349_23371 = state_23342__$1;(statearr_23349_23371[1] = 9);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23343 === 6))
{var inst_23321 = (state_23342[7]);var state_23342__$1 = state_23342;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23342__$1,11,to,inst_23321);
} else
{if((state_val_23343 === 7))
{var inst_23338 = (state_23342[2]);var state_23342__$1 = state_23342;var statearr_23350_23372 = state_23342__$1;(statearr_23350_23372[2] = inst_23338);
(statearr_23350_23372[1] = 3);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23343 === 8))
{var inst_23325 = cljs.core.async.close_BANG_(to);var state_23342__$1 = state_23342;var statearr_23351_23373 = state_23342__$1;(statearr_23351_23373[2] = inst_23325);
(statearr_23351_23373[1] = 10);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23343 === 9))
{var state_23342__$1 = state_23342;var statearr_23352_23374 = state_23342__$1;(statearr_23352_23374[2] = null);
(statearr_23352_23374[1] = 10);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23343 === 10))
{var inst_23328 = (state_23342[2]);var state_23342__$1 = state_23342;var statearr_23353_23375 = state_23342__$1;(statearr_23353_23375[2] = inst_23328);
(statearr_23353_23375[1] = 7);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23343 === 11))
{var inst_23331 = (state_23342[2]);var state_23342__$1 = state_23342;if(cljs.core.truth_(inst_23331))
{var statearr_23354_23376 = state_23342__$1;(statearr_23354_23376[1] = 12);
} else
{var statearr_23355_23377 = state_23342__$1;(statearr_23355_23377[1] = 13);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23343 === 12))
{var state_23342__$1 = state_23342;var statearr_23356_23378 = state_23342__$1;(statearr_23356_23378[2] = null);
(statearr_23356_23378[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23343 === 13))
{var state_23342__$1 = state_23342;var statearr_23357_23379 = state_23342__$1;(statearr_23357_23379[2] = null);
(statearr_23357_23379[1] = 14);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23343 === 14))
{var inst_23336 = (state_23342[2]);var state_23342__$1 = state_23342;var statearr_23358_23380 = state_23342__$1;(statearr_23358_23380[2] = inst_23336);
(statearr_23358_23380[1] = 7);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5635__auto___23366))
;return ((function (switch__5620__auto__,c__5635__auto___23366){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_23362 = [null,null,null,null,null,null,null,null];(statearr_23362[0] = state_machine__5621__auto__);
(statearr_23362[1] = 1);
return statearr_23362;
});
var state_machine__5621__auto____1 = (function (state_23342){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_23342);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e23363){if((e23363 instanceof Object))
{var ex__5624__auto__ = e23363;var statearr_23364_23381 = state_23342;(statearr_23364_23381[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23342);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e23363;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__23382 = state_23342;
state_23342 = G__23382;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_23342){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_23342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___23366))
})();var state__5637__auto__ = (function (){var statearr_23365 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_23365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___23366);
return statearr_23365;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto___23366))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5635__auto___23483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto___23483,tc,fc){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___23483,tc,fc){
return (function (state_23458){var state_val_23459 = (state_23458[1]);if((state_val_23459 === 1))
{var state_23458__$1 = state_23458;var statearr_23460_23484 = state_23458__$1;(statearr_23460_23484[2] = null);
(statearr_23460_23484[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23459 === 2))
{var state_23458__$1 = state_23458;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23458__$1,4,ch);
} else
{if((state_val_23459 === 3))
{var inst_23456 = (state_23458[2]);var state_23458__$1 = state_23458;return cljs.core.async.impl.ioc_helpers.return_chan(state_23458__$1,inst_23456);
} else
{if((state_val_23459 === 4))
{var inst_23435 = (state_23458[7]);var inst_23435__$1 = (state_23458[2]);var inst_23436 = (inst_23435__$1 == null);var state_23458__$1 = (function (){var statearr_23461 = state_23458;(statearr_23461[7] = inst_23435__$1);
return statearr_23461;
})();if(cljs.core.truth_(inst_23436))
{var statearr_23462_23485 = state_23458__$1;(statearr_23462_23485[1] = 5);
} else
{var statearr_23463_23486 = state_23458__$1;(statearr_23463_23486[1] = 6);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23459 === 5))
{var inst_23438 = cljs.core.async.close_BANG_(tc);var inst_23439 = cljs.core.async.close_BANG_(fc);var state_23458__$1 = (function (){var statearr_23464 = state_23458;(statearr_23464[8] = inst_23438);
return statearr_23464;
})();var statearr_23465_23487 = state_23458__$1;(statearr_23465_23487[2] = inst_23439);
(statearr_23465_23487[1] = 7);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23459 === 6))
{var inst_23435 = (state_23458[7]);var inst_23441 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23435) : p.call(null,inst_23435));var state_23458__$1 = state_23458;if(cljs.core.truth_(inst_23441))
{var statearr_23466_23488 = state_23458__$1;(statearr_23466_23488[1] = 9);
} else
{var statearr_23467_23489 = state_23458__$1;(statearr_23467_23489[1] = 10);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23459 === 7))
{var inst_23454 = (state_23458[2]);var state_23458__$1 = state_23458;var statearr_23468_23490 = state_23458__$1;(statearr_23468_23490[2] = inst_23454);
(statearr_23468_23490[1] = 3);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23459 === 8))
{var inst_23447 = (state_23458[2]);var state_23458__$1 = state_23458;if(cljs.core.truth_(inst_23447))
{var statearr_23469_23491 = state_23458__$1;(statearr_23469_23491[1] = 12);
} else
{var statearr_23470_23492 = state_23458__$1;(statearr_23470_23492[1] = 13);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23459 === 9))
{var state_23458__$1 = state_23458;var statearr_23471_23493 = state_23458__$1;(statearr_23471_23493[2] = tc);
(statearr_23471_23493[1] = 11);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23459 === 10))
{var state_23458__$1 = state_23458;var statearr_23472_23494 = state_23458__$1;(statearr_23472_23494[2] = fc);
(statearr_23472_23494[1] = 11);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23459 === 11))
{var inst_23435 = (state_23458[7]);var inst_23445 = (state_23458[2]);var state_23458__$1 = state_23458;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23458__$1,8,inst_23445,inst_23435);
} else
{if((state_val_23459 === 12))
{var state_23458__$1 = state_23458;var statearr_23473_23495 = state_23458__$1;(statearr_23473_23495[2] = null);
(statearr_23473_23495[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23459 === 13))
{var state_23458__$1 = state_23458;var statearr_23474_23496 = state_23458__$1;(statearr_23474_23496[2] = null);
(statearr_23474_23496[1] = 14);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23459 === 14))
{var inst_23452 = (state_23458[2]);var state_23458__$1 = state_23458;var statearr_23475_23497 = state_23458__$1;(statearr_23475_23497[2] = inst_23452);
(statearr_23475_23497[1] = 7);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5635__auto___23483,tc,fc))
;return ((function (switch__5620__auto__,c__5635__auto___23483,tc,fc){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_23479 = [null,null,null,null,null,null,null,null,null];(statearr_23479[0] = state_machine__5621__auto__);
(statearr_23479[1] = 1);
return statearr_23479;
});
var state_machine__5621__auto____1 = (function (state_23458){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_23458);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e23480){if((e23480 instanceof Object))
{var ex__5624__auto__ = e23480;var statearr_23481_23498 = state_23458;(statearr_23481_23498[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23458);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e23480;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__23499 = state_23458;
state_23458 = G__23499;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_23458){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_23458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___23483,tc,fc))
})();var state__5637__auto__ = (function (){var statearr_23482 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_23482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___23483);
return statearr_23482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto___23483,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5635__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto__){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto__){
return (function (state_23546){var state_val_23547 = (state_23546[1]);if((state_val_23547 === 7))
{var inst_23542 = (state_23546[2]);var state_23546__$1 = state_23546;var statearr_23548_23564 = state_23546__$1;(statearr_23548_23564[2] = inst_23542);
(statearr_23548_23564[1] = 3);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23547 === 6))
{var inst_23535 = (state_23546[7]);var inst_23532 = (state_23546[8]);var inst_23539 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_23532,inst_23535) : f.call(null,inst_23532,inst_23535));var inst_23532__$1 = inst_23539;var state_23546__$1 = (function (){var statearr_23549 = state_23546;(statearr_23549[8] = inst_23532__$1);
return statearr_23549;
})();var statearr_23550_23565 = state_23546__$1;(statearr_23550_23565[2] = null);
(statearr_23550_23565[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23547 === 5))
{var inst_23532 = (state_23546[8]);var state_23546__$1 = state_23546;var statearr_23551_23566 = state_23546__$1;(statearr_23551_23566[2] = inst_23532);
(statearr_23551_23566[1] = 7);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23547 === 4))
{var inst_23535 = (state_23546[7]);var inst_23535__$1 = (state_23546[2]);var inst_23536 = (inst_23535__$1 == null);var state_23546__$1 = (function (){var statearr_23552 = state_23546;(statearr_23552[7] = inst_23535__$1);
return statearr_23552;
})();if(cljs.core.truth_(inst_23536))
{var statearr_23553_23567 = state_23546__$1;(statearr_23553_23567[1] = 5);
} else
{var statearr_23554_23568 = state_23546__$1;(statearr_23554_23568[1] = 6);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23547 === 3))
{var inst_23544 = (state_23546[2]);var state_23546__$1 = state_23546;return cljs.core.async.impl.ioc_helpers.return_chan(state_23546__$1,inst_23544);
} else
{if((state_val_23547 === 2))
{var state_23546__$1 = state_23546;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23546__$1,4,ch);
} else
{if((state_val_23547 === 1))
{var inst_23532 = init;var state_23546__$1 = (function (){var statearr_23555 = state_23546;(statearr_23555[8] = inst_23532);
return statearr_23555;
})();var statearr_23556_23569 = state_23546__$1;(statearr_23556_23569[2] = null);
(statearr_23556_23569[1] = 2);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
});})(c__5635__auto__))
;return ((function (switch__5620__auto__,c__5635__auto__){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_23560 = [null,null,null,null,null,null,null,null,null];(statearr_23560[0] = state_machine__5621__auto__);
(statearr_23560[1] = 1);
return statearr_23560;
});
var state_machine__5621__auto____1 = (function (state_23546){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_23546);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e23561){if((e23561 instanceof Object))
{var ex__5624__auto__ = e23561;var statearr_23562_23570 = state_23546;(statearr_23562_23570[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23546);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e23561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__23571 = state_23546;
state_23546 = G__23571;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_23546){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_23546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto__))
})();var state__5637__auto__ = (function (){var statearr_23563 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_23563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto__);
return statearr_23563;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto__))
);
return c__5635__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5635__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto__){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto__){
return (function (state_23645){var state_val_23646 = (state_23645[1]);if((state_val_23646 === 1))
{var inst_23621 = cljs.core.seq(coll);var inst_23622 = inst_23621;var state_23645__$1 = (function (){var statearr_23647 = state_23645;(statearr_23647[7] = inst_23622);
return statearr_23647;
})();var statearr_23648_23670 = state_23645__$1;(statearr_23648_23670[2] = null);
(statearr_23648_23670[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23646 === 2))
{var inst_23622 = (state_23645[7]);var state_23645__$1 = state_23645;if(cljs.core.truth_(inst_23622))
{var statearr_23649_23671 = state_23645__$1;(statearr_23649_23671[1] = 4);
} else
{var statearr_23650_23672 = state_23645__$1;(statearr_23650_23672[1] = 5);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23646 === 3))
{var inst_23643 = (state_23645[2]);var state_23645__$1 = state_23645;return cljs.core.async.impl.ioc_helpers.return_chan(state_23645__$1,inst_23643);
} else
{if((state_val_23646 === 4))
{var inst_23622 = (state_23645[7]);var inst_23625 = cljs.core.first(inst_23622);var state_23645__$1 = state_23645;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23645__$1,7,ch,inst_23625);
} else
{if((state_val_23646 === 5))
{var inst_23622 = (state_23645[7]);var state_23645__$1 = state_23645;var statearr_23651_23673 = state_23645__$1;(statearr_23651_23673[2] = inst_23622);
(statearr_23651_23673[1] = 6);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23646 === 6))
{var inst_23630 = (state_23645[2]);var state_23645__$1 = state_23645;if(cljs.core.truth_(inst_23630))
{var statearr_23652_23674 = state_23645__$1;(statearr_23652_23674[1] = 8);
} else
{var statearr_23653_23675 = state_23645__$1;(statearr_23653_23675[1] = 9);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23646 === 7))
{var inst_23627 = (state_23645[2]);var state_23645__$1 = state_23645;var statearr_23654_23676 = state_23645__$1;(statearr_23654_23676[2] = inst_23627);
(statearr_23654_23676[1] = 6);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23646 === 8))
{var inst_23622 = (state_23645[7]);var inst_23632 = cljs.core.next(inst_23622);var inst_23622__$1 = inst_23632;var state_23645__$1 = (function (){var statearr_23655 = state_23645;(statearr_23655[7] = inst_23622__$1);
return statearr_23655;
})();var statearr_23656_23677 = state_23645__$1;(statearr_23656_23677[2] = null);
(statearr_23656_23677[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23646 === 9))
{var state_23645__$1 = state_23645;if(cljs.core.truth_(close_QMARK_))
{var statearr_23657_23678 = state_23645__$1;(statearr_23657_23678[1] = 11);
} else
{var statearr_23658_23679 = state_23645__$1;(statearr_23658_23679[1] = 12);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_23646 === 10))
{var inst_23641 = (state_23645[2]);var state_23645__$1 = state_23645;var statearr_23659_23680 = state_23645__$1;(statearr_23659_23680[2] = inst_23641);
(statearr_23659_23680[1] = 3);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23646 === 11))
{var inst_23636 = cljs.core.async.close_BANG_(ch);var state_23645__$1 = state_23645;var statearr_23660_23681 = state_23645__$1;(statearr_23660_23681[2] = inst_23636);
(statearr_23660_23681[1] = 13);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23646 === 12))
{var state_23645__$1 = state_23645;var statearr_23661_23682 = state_23645__$1;(statearr_23661_23682[2] = null);
(statearr_23661_23682[1] = 13);
return cljs.core.constant$keyword$105;
} else
{if((state_val_23646 === 13))
{var inst_23639 = (state_23645[2]);var state_23645__$1 = state_23645;var statearr_23662_23683 = state_23645__$1;(statearr_23662_23683[2] = inst_23639);
(statearr_23662_23683[1] = 10);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5635__auto__))
;return ((function (switch__5620__auto__,c__5635__auto__){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_23666 = [null,null,null,null,null,null,null,null];(statearr_23666[0] = state_machine__5621__auto__);
(statearr_23666[1] = 1);
return statearr_23666;
});
var state_machine__5621__auto____1 = (function (state_23645){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_23645);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e23667){if((e23667 instanceof Object))
{var ex__5624__auto__ = e23667;var statearr_23668_23684 = state_23645;(statearr_23668_23684[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23645);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e23667;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__23685 = state_23645;
state_23645 = G__23685;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_23645){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_23645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto__))
})();var state__5637__auto__ = (function (){var statearr_23669 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_23669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto__);
return statearr_23669;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto__))
);
return c__5635__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj23687 = {};return obj23687;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3466__auto__ = _;if(and__3466__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4105__auto__ = (((_ == null))?null:_);return (function (){var or__3478__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj23689 = {};return obj23689;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t23911 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23911 = (function (cs,ch,mult,meta23912){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta23912 = meta23912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23911.cljs$lang$type = true;
cljs.core.async.t23911.cljs$lang$ctorStr = "cljs.core.async/t23911";
cljs.core.async.t23911.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write(writer__4046__auto__,"cljs.core.async/t23911");
});})(cs))
;
cljs.core.async.t23911.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t23911.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t23911.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t23911.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t23911.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t23911.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t23911.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23913){var self__ = this;
var _23913__$1 = this;return self__.meta23912;
});})(cs))
;
cljs.core.async.t23911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23913,meta23912__$1){var self__ = this;
var _23913__$1 = this;return (new cljs.core.async.t23911(self__.cs,self__.ch,self__.mult,meta23912__$1));
});})(cs))
;
cljs.core.async.__GT_t23911 = ((function (cs){
return (function __GT_t23911(cs__$1,ch__$1,mult__$1,meta23912){return (new cljs.core.async.t23911(cs__$1,ch__$1,mult__$1,meta23912));
});})(cs))
;
}
return (new cljs.core.async.t23911(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5635__auto___24132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto___24132,cs,m,dchan,dctr,done){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___24132,cs,m,dchan,dctr,done){
return (function (state_24044){var state_val_24045 = (state_24044[1]);if((state_val_24045 === 32))
{var inst_23985 = (state_24044[7]);var inst_23986 = (state_24044[8]);var inst_23987 = (state_24044[9]);var inst_23984 = (state_24044[10]);var inst_23999 = (state_24044[2]);var inst_24000 = (inst_23987 + 1);var tmp24046 = inst_23985;var tmp24047 = inst_23986;var tmp24048 = inst_23984;var inst_23984__$1 = tmp24048;var inst_23985__$1 = tmp24046;var inst_23986__$1 = tmp24047;var inst_23987__$1 = inst_24000;var state_24044__$1 = (function (){var statearr_24049 = state_24044;(statearr_24049[11] = inst_23999);
(statearr_24049[7] = inst_23985__$1);
(statearr_24049[8] = inst_23986__$1);
(statearr_24049[9] = inst_23987__$1);
(statearr_24049[10] = inst_23984__$1);
return statearr_24049;
})();var statearr_24050_24133 = state_24044__$1;(statearr_24050_24133[2] = null);
(statearr_24050_24133[1] = 25);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 1))
{var state_24044__$1 = state_24044;var statearr_24051_24134 = state_24044__$1;(statearr_24051_24134[2] = null);
(statearr_24051_24134[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 33))
{var inst_24003 = (state_24044[12]);var inst_24005 = cljs.core.chunked_seq_QMARK_(inst_24003);var state_24044__$1 = state_24044;if(inst_24005)
{var statearr_24052_24135 = state_24044__$1;(statearr_24052_24135[1] = 36);
} else
{var statearr_24053_24136 = state_24044__$1;(statearr_24053_24136[1] = 37);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 2))
{var state_24044__$1 = state_24044;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24044__$1,4,ch);
} else
{if((state_val_24045 === 34))
{var state_24044__$1 = state_24044;var statearr_24054_24137 = state_24044__$1;(statearr_24054_24137[2] = null);
(statearr_24054_24137[1] = 35);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 3))
{var inst_24042 = (state_24044[2]);var state_24044__$1 = state_24044;return cljs.core.async.impl.ioc_helpers.return_chan(state_24044__$1,inst_24042);
} else
{if((state_val_24045 === 35))
{var inst_24026 = (state_24044[2]);var state_24044__$1 = state_24044;var statearr_24055_24138 = state_24044__$1;(statearr_24055_24138[2] = inst_24026);
(statearr_24055_24138[1] = 29);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 4))
{var inst_23916 = (state_24044[13]);var inst_23916__$1 = (state_24044[2]);var inst_23917 = (inst_23916__$1 == null);var state_24044__$1 = (function (){var statearr_24056 = state_24044;(statearr_24056[13] = inst_23916__$1);
return statearr_24056;
})();if(cljs.core.truth_(inst_23917))
{var statearr_24057_24139 = state_24044__$1;(statearr_24057_24139[1] = 5);
} else
{var statearr_24058_24140 = state_24044__$1;(statearr_24058_24140[1] = 6);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 36))
{var inst_24003 = (state_24044[12]);var inst_24007 = cljs.core.chunk_first(inst_24003);var inst_24008 = cljs.core.chunk_rest(inst_24003);var inst_24009 = cljs.core.count(inst_24007);var inst_23984 = inst_24008;var inst_23985 = inst_24007;var inst_23986 = inst_24009;var inst_23987 = 0;var state_24044__$1 = (function (){var statearr_24059 = state_24044;(statearr_24059[7] = inst_23985);
(statearr_24059[8] = inst_23986);
(statearr_24059[9] = inst_23987);
(statearr_24059[10] = inst_23984);
return statearr_24059;
})();var statearr_24060_24141 = state_24044__$1;(statearr_24060_24141[2] = null);
(statearr_24060_24141[1] = 25);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 5))
{var inst_23923 = cljs.core.deref(cs);var inst_23924 = cljs.core.seq(inst_23923);var inst_23925 = inst_23924;var inst_23926 = null;var inst_23927 = 0;var inst_23928 = 0;var state_24044__$1 = (function (){var statearr_24061 = state_24044;(statearr_24061[14] = inst_23926);
(statearr_24061[15] = inst_23925);
(statearr_24061[16] = inst_23927);
(statearr_24061[17] = inst_23928);
return statearr_24061;
})();var statearr_24062_24142 = state_24044__$1;(statearr_24062_24142[2] = null);
(statearr_24062_24142[1] = 8);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 37))
{var inst_24012 = (state_24044[18]);var inst_24003 = (state_24044[12]);var inst_23916 = (state_24044[13]);var inst_24012__$1 = cljs.core.first(inst_24003);var inst_24013 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24012__$1,inst_23916,done);var state_24044__$1 = (function (){var statearr_24063 = state_24044;(statearr_24063[18] = inst_24012__$1);
return statearr_24063;
})();if(cljs.core.truth_(inst_24013))
{var statearr_24064_24143 = state_24044__$1;(statearr_24064_24143[1] = 39);
} else
{var statearr_24065_24144 = state_24044__$1;(statearr_24065_24144[1] = 40);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 6))
{var inst_23976 = (state_24044[19]);var inst_23975 = cljs.core.deref(cs);var inst_23976__$1 = cljs.core.keys(inst_23975);var inst_23977 = cljs.core.count(inst_23976__$1);var inst_23978 = cljs.core.reset_BANG_(dctr,inst_23977);var inst_23983 = cljs.core.seq(inst_23976__$1);var inst_23984 = inst_23983;var inst_23985 = null;var inst_23986 = 0;var inst_23987 = 0;var state_24044__$1 = (function (){var statearr_24066 = state_24044;(statearr_24066[20] = inst_23978);
(statearr_24066[7] = inst_23985);
(statearr_24066[8] = inst_23986);
(statearr_24066[9] = inst_23987);
(statearr_24066[10] = inst_23984);
(statearr_24066[19] = inst_23976__$1);
return statearr_24066;
})();var statearr_24067_24145 = state_24044__$1;(statearr_24067_24145[2] = null);
(statearr_24067_24145[1] = 25);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 38))
{var inst_24023 = (state_24044[2]);var state_24044__$1 = state_24044;var statearr_24068_24146 = state_24044__$1;(statearr_24068_24146[2] = inst_24023);
(statearr_24068_24146[1] = 35);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 7))
{var inst_24040 = (state_24044[2]);var state_24044__$1 = state_24044;var statearr_24069_24147 = state_24044__$1;(statearr_24069_24147[2] = inst_24040);
(statearr_24069_24147[1] = 3);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 39))
{var state_24044__$1 = state_24044;var statearr_24070_24148 = state_24044__$1;(statearr_24070_24148[2] = null);
(statearr_24070_24148[1] = 41);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 8))
{var inst_23927 = (state_24044[16]);var inst_23928 = (state_24044[17]);var inst_23930 = (inst_23928 < inst_23927);var inst_23931 = inst_23930;var state_24044__$1 = state_24044;if(cljs.core.truth_(inst_23931))
{var statearr_24071_24149 = state_24044__$1;(statearr_24071_24149[1] = 10);
} else
{var statearr_24072_24150 = state_24044__$1;(statearr_24072_24150[1] = 11);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 40))
{var inst_24012 = (state_24044[18]);var inst_24016 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24017 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24012);var state_24044__$1 = (function (){var statearr_24073 = state_24044;(statearr_24073[21] = inst_24016);
return statearr_24073;
})();var statearr_24074_24151 = state_24044__$1;(statearr_24074_24151[2] = inst_24017);
(statearr_24074_24151[1] = 41);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 9))
{var inst_23973 = (state_24044[2]);var state_24044__$1 = state_24044;var statearr_24075_24152 = state_24044__$1;(statearr_24075_24152[2] = inst_23973);
(statearr_24075_24152[1] = 7);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 41))
{var inst_24003 = (state_24044[12]);var inst_24019 = (state_24044[2]);var inst_24020 = cljs.core.next(inst_24003);var inst_23984 = inst_24020;var inst_23985 = null;var inst_23986 = 0;var inst_23987 = 0;var state_24044__$1 = (function (){var statearr_24076 = state_24044;(statearr_24076[7] = inst_23985);
(statearr_24076[8] = inst_23986);
(statearr_24076[9] = inst_23987);
(statearr_24076[10] = inst_23984);
(statearr_24076[22] = inst_24019);
return statearr_24076;
})();var statearr_24077_24153 = state_24044__$1;(statearr_24077_24153[2] = null);
(statearr_24077_24153[1] = 25);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 10))
{var inst_23926 = (state_24044[14]);var inst_23928 = (state_24044[17]);var inst_23934 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23926,inst_23928);var inst_23935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23934,0,null);var inst_23936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23934,1,null);var state_24044__$1 = (function (){var statearr_24078 = state_24044;(statearr_24078[23] = inst_23935);
return statearr_24078;
})();if(cljs.core.truth_(inst_23936))
{var statearr_24079_24154 = state_24044__$1;(statearr_24079_24154[1] = 13);
} else
{var statearr_24080_24155 = state_24044__$1;(statearr_24080_24155[1] = 14);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 42))
{var state_24044__$1 = state_24044;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24044__$1,45,dchan);
} else
{if((state_val_24045 === 11))
{var inst_23925 = (state_24044[15]);var inst_23945 = (state_24044[24]);var inst_23945__$1 = cljs.core.seq(inst_23925);var state_24044__$1 = (function (){var statearr_24081 = state_24044;(statearr_24081[24] = inst_23945__$1);
return statearr_24081;
})();if(inst_23945__$1)
{var statearr_24082_24156 = state_24044__$1;(statearr_24082_24156[1] = 16);
} else
{var statearr_24083_24157 = state_24044__$1;(statearr_24083_24157[1] = 17);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 43))
{var state_24044__$1 = state_24044;var statearr_24084_24158 = state_24044__$1;(statearr_24084_24158[2] = null);
(statearr_24084_24158[1] = 44);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 12))
{var inst_23971 = (state_24044[2]);var state_24044__$1 = state_24044;var statearr_24085_24159 = state_24044__$1;(statearr_24085_24159[2] = inst_23971);
(statearr_24085_24159[1] = 9);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 44))
{var inst_24037 = (state_24044[2]);var state_24044__$1 = (function (){var statearr_24086 = state_24044;(statearr_24086[25] = inst_24037);
return statearr_24086;
})();var statearr_24087_24160 = state_24044__$1;(statearr_24087_24160[2] = null);
(statearr_24087_24160[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 13))
{var inst_23935 = (state_24044[23]);var inst_23938 = cljs.core.async.close_BANG_(inst_23935);var state_24044__$1 = state_24044;var statearr_24088_24161 = state_24044__$1;(statearr_24088_24161[2] = inst_23938);
(statearr_24088_24161[1] = 15);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 45))
{var inst_24034 = (state_24044[2]);var state_24044__$1 = state_24044;var statearr_24092_24162 = state_24044__$1;(statearr_24092_24162[2] = inst_24034);
(statearr_24092_24162[1] = 44);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 14))
{var state_24044__$1 = state_24044;var statearr_24093_24163 = state_24044__$1;(statearr_24093_24163[2] = null);
(statearr_24093_24163[1] = 15);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 15))
{var inst_23926 = (state_24044[14]);var inst_23925 = (state_24044[15]);var inst_23927 = (state_24044[16]);var inst_23928 = (state_24044[17]);var inst_23941 = (state_24044[2]);var inst_23942 = (inst_23928 + 1);var tmp24089 = inst_23926;var tmp24090 = inst_23925;var tmp24091 = inst_23927;var inst_23925__$1 = tmp24090;var inst_23926__$1 = tmp24089;var inst_23927__$1 = tmp24091;var inst_23928__$1 = inst_23942;var state_24044__$1 = (function (){var statearr_24094 = state_24044;(statearr_24094[14] = inst_23926__$1);
(statearr_24094[15] = inst_23925__$1);
(statearr_24094[16] = inst_23927__$1);
(statearr_24094[17] = inst_23928__$1);
(statearr_24094[26] = inst_23941);
return statearr_24094;
})();var statearr_24095_24164 = state_24044__$1;(statearr_24095_24164[2] = null);
(statearr_24095_24164[1] = 8);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 16))
{var inst_23945 = (state_24044[24]);var inst_23947 = cljs.core.chunked_seq_QMARK_(inst_23945);var state_24044__$1 = state_24044;if(inst_23947)
{var statearr_24096_24165 = state_24044__$1;(statearr_24096_24165[1] = 19);
} else
{var statearr_24097_24166 = state_24044__$1;(statearr_24097_24166[1] = 20);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 17))
{var state_24044__$1 = state_24044;var statearr_24098_24167 = state_24044__$1;(statearr_24098_24167[2] = null);
(statearr_24098_24167[1] = 18);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 18))
{var inst_23969 = (state_24044[2]);var state_24044__$1 = state_24044;var statearr_24099_24168 = state_24044__$1;(statearr_24099_24168[2] = inst_23969);
(statearr_24099_24168[1] = 12);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 19))
{var inst_23945 = (state_24044[24]);var inst_23949 = cljs.core.chunk_first(inst_23945);var inst_23950 = cljs.core.chunk_rest(inst_23945);var inst_23951 = cljs.core.count(inst_23949);var inst_23925 = inst_23950;var inst_23926 = inst_23949;var inst_23927 = inst_23951;var inst_23928 = 0;var state_24044__$1 = (function (){var statearr_24100 = state_24044;(statearr_24100[14] = inst_23926);
(statearr_24100[15] = inst_23925);
(statearr_24100[16] = inst_23927);
(statearr_24100[17] = inst_23928);
return statearr_24100;
})();var statearr_24101_24169 = state_24044__$1;(statearr_24101_24169[2] = null);
(statearr_24101_24169[1] = 8);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 20))
{var inst_23945 = (state_24044[24]);var inst_23955 = cljs.core.first(inst_23945);var inst_23956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23955,0,null);var inst_23957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23955,1,null);var state_24044__$1 = (function (){var statearr_24102 = state_24044;(statearr_24102[27] = inst_23956);
return statearr_24102;
})();if(cljs.core.truth_(inst_23957))
{var statearr_24103_24170 = state_24044__$1;(statearr_24103_24170[1] = 22);
} else
{var statearr_24104_24171 = state_24044__$1;(statearr_24104_24171[1] = 23);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 21))
{var inst_23966 = (state_24044[2]);var state_24044__$1 = state_24044;var statearr_24105_24172 = state_24044__$1;(statearr_24105_24172[2] = inst_23966);
(statearr_24105_24172[1] = 18);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 22))
{var inst_23956 = (state_24044[27]);var inst_23959 = cljs.core.async.close_BANG_(inst_23956);var state_24044__$1 = state_24044;var statearr_24106_24173 = state_24044__$1;(statearr_24106_24173[2] = inst_23959);
(statearr_24106_24173[1] = 24);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 23))
{var state_24044__$1 = state_24044;var statearr_24107_24174 = state_24044__$1;(statearr_24107_24174[2] = null);
(statearr_24107_24174[1] = 24);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 24))
{var inst_23945 = (state_24044[24]);var inst_23962 = (state_24044[2]);var inst_23963 = cljs.core.next(inst_23945);var inst_23925 = inst_23963;var inst_23926 = null;var inst_23927 = 0;var inst_23928 = 0;var state_24044__$1 = (function (){var statearr_24108 = state_24044;(statearr_24108[14] = inst_23926);
(statearr_24108[15] = inst_23925);
(statearr_24108[28] = inst_23962);
(statearr_24108[16] = inst_23927);
(statearr_24108[17] = inst_23928);
return statearr_24108;
})();var statearr_24109_24175 = state_24044__$1;(statearr_24109_24175[2] = null);
(statearr_24109_24175[1] = 8);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 25))
{var inst_23986 = (state_24044[8]);var inst_23987 = (state_24044[9]);var inst_23989 = (inst_23987 < inst_23986);var inst_23990 = inst_23989;var state_24044__$1 = state_24044;if(cljs.core.truth_(inst_23990))
{var statearr_24110_24176 = state_24044__$1;(statearr_24110_24176[1] = 27);
} else
{var statearr_24111_24177 = state_24044__$1;(statearr_24111_24177[1] = 28);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 26))
{var inst_23976 = (state_24044[19]);var inst_24030 = (state_24044[2]);var inst_24031 = cljs.core.seq(inst_23976);var state_24044__$1 = (function (){var statearr_24112 = state_24044;(statearr_24112[29] = inst_24030);
return statearr_24112;
})();if(inst_24031)
{var statearr_24113_24178 = state_24044__$1;(statearr_24113_24178[1] = 42);
} else
{var statearr_24114_24179 = state_24044__$1;(statearr_24114_24179[1] = 43);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 27))
{var inst_23985 = (state_24044[7]);var inst_23987 = (state_24044[9]);var inst_23992 = (state_24044[30]);var inst_23916 = (state_24044[13]);var inst_23992__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23985,inst_23987);var inst_23993 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23992__$1,inst_23916,done);var state_24044__$1 = (function (){var statearr_24115 = state_24044;(statearr_24115[30] = inst_23992__$1);
return statearr_24115;
})();if(cljs.core.truth_(inst_23993))
{var statearr_24116_24180 = state_24044__$1;(statearr_24116_24180[1] = 30);
} else
{var statearr_24117_24181 = state_24044__$1;(statearr_24117_24181[1] = 31);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 28))
{var inst_24003 = (state_24044[12]);var inst_23984 = (state_24044[10]);var inst_24003__$1 = cljs.core.seq(inst_23984);var state_24044__$1 = (function (){var statearr_24118 = state_24044;(statearr_24118[12] = inst_24003__$1);
return statearr_24118;
})();if(inst_24003__$1)
{var statearr_24119_24182 = state_24044__$1;(statearr_24119_24182[1] = 33);
} else
{var statearr_24120_24183 = state_24044__$1;(statearr_24120_24183[1] = 34);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 29))
{var inst_24028 = (state_24044[2]);var state_24044__$1 = state_24044;var statearr_24121_24184 = state_24044__$1;(statearr_24121_24184[2] = inst_24028);
(statearr_24121_24184[1] = 26);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 30))
{var state_24044__$1 = state_24044;var statearr_24122_24185 = state_24044__$1;(statearr_24122_24185[2] = null);
(statearr_24122_24185[1] = 32);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24045 === 31))
{var inst_23992 = (state_24044[30]);var inst_23996 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_23997 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23992);var state_24044__$1 = (function (){var statearr_24123 = state_24044;(statearr_24123[31] = inst_23996);
return statearr_24123;
})();var statearr_24124_24186 = state_24044__$1;(statearr_24124_24186[2] = inst_23997);
(statearr_24124_24186[1] = 32);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5635__auto___24132,cs,m,dchan,dctr,done))
;return ((function (switch__5620__auto__,c__5635__auto___24132,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_24128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24128[0] = state_machine__5621__auto__);
(statearr_24128[1] = 1);
return statearr_24128;
});
var state_machine__5621__auto____1 = (function (state_24044){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_24044);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e24129){if((e24129 instanceof Object))
{var ex__5624__auto__ = e24129;var statearr_24130_24187 = state_24044;(statearr_24130_24187[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24044);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e24129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__24188 = state_24044;
state_24044 = G__24188;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_24044){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_24044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___24132,cs,m,dchan,dctr,done))
})();var state__5637__auto__ = (function (){var statearr_24131 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_24131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___24132);
return statearr_24131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto___24132,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj24190 = {};return obj24190;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3466__auto__ = m;if(and__3466__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4105__auto__ = (((m == null))?null:m);return (function (){var or__3478__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$112,null,cljs.core.constant$keyword$113,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$114);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$113);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$114,chs);var pauses = pick(cljs.core.constant$keyword$112,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$115,solos,cljs.core.constant$keyword$116,pick(cljs.core.constant$keyword$113,chs),cljs.core.constant$keyword$117,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$112)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24310 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24310 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24311){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta24311 = meta24311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24310.cljs$lang$type = true;
cljs.core.async.t24310.cljs$lang$ctorStr = "cljs.core.async/t24310";
cljs.core.async.t24310.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write(writer__4046__auto__,"cljs.core.async/t24310");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24310.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24310.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24310.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24310.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24310.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24310.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24310.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24312){var self__ = this;
var _24312__$1 = this;return self__.meta24311;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24312,meta24311__$1){var self__ = this;
var _24312__$1 = this;return (new cljs.core.async.t24310(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24311__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24310 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24310(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24311){return (new cljs.core.async.t24310(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24311));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24310(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5635__auto___24429 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto___24429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___24429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24382){var state_val_24383 = (state_24382[1]);if((state_val_24383 === 1))
{var inst_24316 = (state_24382[7]);var inst_24316__$1 = calc_state();var inst_24317 = cljs.core.seq_QMARK_(inst_24316__$1);var state_24382__$1 = (function (){var statearr_24384 = state_24382;(statearr_24384[7] = inst_24316__$1);
return statearr_24384;
})();if(inst_24317)
{var statearr_24385_24430 = state_24382__$1;(statearr_24385_24430[1] = 2);
} else
{var statearr_24386_24431 = state_24382__$1;(statearr_24386_24431[1] = 3);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 2))
{var inst_24316 = (state_24382[7]);var inst_24319 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24316);var state_24382__$1 = state_24382;var statearr_24387_24432 = state_24382__$1;(statearr_24387_24432[2] = inst_24319);
(statearr_24387_24432[1] = 4);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 3))
{var inst_24316 = (state_24382[7]);var state_24382__$1 = state_24382;var statearr_24388_24433 = state_24382__$1;(statearr_24388_24433[2] = inst_24316);
(statearr_24388_24433[1] = 4);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 4))
{var inst_24316 = (state_24382[7]);var inst_24322 = (state_24382[2]);var inst_24323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24322,cljs.core.constant$keyword$117);var inst_24324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24322,cljs.core.constant$keyword$116);var inst_24325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24322,cljs.core.constant$keyword$115);var inst_24326 = inst_24316;var state_24382__$1 = (function (){var statearr_24389 = state_24382;(statearr_24389[8] = inst_24326);
(statearr_24389[9] = inst_24325);
(statearr_24389[10] = inst_24324);
(statearr_24389[11] = inst_24323);
return statearr_24389;
})();var statearr_24390_24434 = state_24382__$1;(statearr_24390_24434[2] = null);
(statearr_24390_24434[1] = 5);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 5))
{var inst_24326 = (state_24382[8]);var inst_24329 = cljs.core.seq_QMARK_(inst_24326);var state_24382__$1 = state_24382;if(inst_24329)
{var statearr_24391_24435 = state_24382__$1;(statearr_24391_24435[1] = 7);
} else
{var statearr_24392_24436 = state_24382__$1;(statearr_24392_24436[1] = 8);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 6))
{var inst_24380 = (state_24382[2]);var state_24382__$1 = state_24382;return cljs.core.async.impl.ioc_helpers.return_chan(state_24382__$1,inst_24380);
} else
{if((state_val_24383 === 7))
{var inst_24326 = (state_24382[8]);var inst_24331 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24326);var state_24382__$1 = state_24382;var statearr_24393_24437 = state_24382__$1;(statearr_24393_24437[2] = inst_24331);
(statearr_24393_24437[1] = 9);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 8))
{var inst_24326 = (state_24382[8]);var state_24382__$1 = state_24382;var statearr_24394_24438 = state_24382__$1;(statearr_24394_24438[2] = inst_24326);
(statearr_24394_24438[1] = 9);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 9))
{var inst_24334 = (state_24382[12]);var inst_24334__$1 = (state_24382[2]);var inst_24335 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24334__$1,cljs.core.constant$keyword$117);var inst_24336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24334__$1,cljs.core.constant$keyword$116);var inst_24337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24334__$1,cljs.core.constant$keyword$115);var state_24382__$1 = (function (){var statearr_24395 = state_24382;(statearr_24395[13] = inst_24336);
(statearr_24395[12] = inst_24334__$1);
(statearr_24395[14] = inst_24337);
return statearr_24395;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24382__$1,10,inst_24335);
} else
{if((state_val_24383 === 10))
{var inst_24342 = (state_24382[15]);var inst_24341 = (state_24382[16]);var inst_24340 = (state_24382[2]);var inst_24341__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24340,0,null);var inst_24342__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24340,1,null);var inst_24343 = (inst_24341__$1 == null);var inst_24344 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24342__$1,change);var inst_24345 = (inst_24343) || (inst_24344);var state_24382__$1 = (function (){var statearr_24396 = state_24382;(statearr_24396[15] = inst_24342__$1);
(statearr_24396[16] = inst_24341__$1);
return statearr_24396;
})();if(cljs.core.truth_(inst_24345))
{var statearr_24397_24439 = state_24382__$1;(statearr_24397_24439[1] = 11);
} else
{var statearr_24398_24440 = state_24382__$1;(statearr_24398_24440[1] = 12);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 11))
{var inst_24341 = (state_24382[16]);var inst_24347 = (inst_24341 == null);var state_24382__$1 = state_24382;if(cljs.core.truth_(inst_24347))
{var statearr_24399_24441 = state_24382__$1;(statearr_24399_24441[1] = 14);
} else
{var statearr_24400_24442 = state_24382__$1;(statearr_24400_24442[1] = 15);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 12))
{var inst_24342 = (state_24382[15]);var inst_24356 = (state_24382[17]);var inst_24337 = (state_24382[14]);var inst_24356__$1 = (inst_24337.cljs$core$IFn$_invoke$arity$1 ? inst_24337.cljs$core$IFn$_invoke$arity$1(inst_24342) : inst_24337.call(null,inst_24342));var state_24382__$1 = (function (){var statearr_24401 = state_24382;(statearr_24401[17] = inst_24356__$1);
return statearr_24401;
})();if(cljs.core.truth_(inst_24356__$1))
{var statearr_24402_24443 = state_24382__$1;(statearr_24402_24443[1] = 17);
} else
{var statearr_24403_24444 = state_24382__$1;(statearr_24403_24444[1] = 18);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 13))
{var inst_24378 = (state_24382[2]);var state_24382__$1 = state_24382;var statearr_24404_24445 = state_24382__$1;(statearr_24404_24445[2] = inst_24378);
(statearr_24404_24445[1] = 6);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 14))
{var inst_24342 = (state_24382[15]);var inst_24349 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24342);var state_24382__$1 = state_24382;var statearr_24405_24446 = state_24382__$1;(statearr_24405_24446[2] = inst_24349);
(statearr_24405_24446[1] = 16);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 15))
{var state_24382__$1 = state_24382;var statearr_24406_24447 = state_24382__$1;(statearr_24406_24447[2] = null);
(statearr_24406_24447[1] = 16);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 16))
{var inst_24352 = (state_24382[2]);var inst_24353 = calc_state();var inst_24326 = inst_24353;var state_24382__$1 = (function (){var statearr_24407 = state_24382;(statearr_24407[8] = inst_24326);
(statearr_24407[18] = inst_24352);
return statearr_24407;
})();var statearr_24408_24448 = state_24382__$1;(statearr_24408_24448[2] = null);
(statearr_24408_24448[1] = 5);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 17))
{var inst_24356 = (state_24382[17]);var state_24382__$1 = state_24382;var statearr_24409_24449 = state_24382__$1;(statearr_24409_24449[2] = inst_24356);
(statearr_24409_24449[1] = 19);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 18))
{var inst_24336 = (state_24382[13]);var inst_24342 = (state_24382[15]);var inst_24337 = (state_24382[14]);var inst_24359 = cljs.core.empty_QMARK_(inst_24337);var inst_24360 = (inst_24336.cljs$core$IFn$_invoke$arity$1 ? inst_24336.cljs$core$IFn$_invoke$arity$1(inst_24342) : inst_24336.call(null,inst_24342));var inst_24361 = cljs.core.not(inst_24360);var inst_24362 = (inst_24359) && (inst_24361);var state_24382__$1 = state_24382;var statearr_24410_24450 = state_24382__$1;(statearr_24410_24450[2] = inst_24362);
(statearr_24410_24450[1] = 19);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 19))
{var inst_24364 = (state_24382[2]);var state_24382__$1 = state_24382;if(cljs.core.truth_(inst_24364))
{var statearr_24411_24451 = state_24382__$1;(statearr_24411_24451[1] = 20);
} else
{var statearr_24412_24452 = state_24382__$1;(statearr_24412_24452[1] = 21);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 20))
{var inst_24341 = (state_24382[16]);var state_24382__$1 = state_24382;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24382__$1,23,out,inst_24341);
} else
{if((state_val_24383 === 21))
{var inst_24334 = (state_24382[12]);var inst_24326 = inst_24334;var state_24382__$1 = (function (){var statearr_24413 = state_24382;(statearr_24413[8] = inst_24326);
return statearr_24413;
})();var statearr_24414_24453 = state_24382__$1;(statearr_24414_24453[2] = null);
(statearr_24414_24453[1] = 5);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 22))
{var inst_24376 = (state_24382[2]);var state_24382__$1 = state_24382;var statearr_24415_24454 = state_24382__$1;(statearr_24415_24454[2] = inst_24376);
(statearr_24415_24454[1] = 13);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 23))
{var inst_24367 = (state_24382[2]);var state_24382__$1 = state_24382;if(cljs.core.truth_(inst_24367))
{var statearr_24416_24455 = state_24382__$1;(statearr_24416_24455[1] = 24);
} else
{var statearr_24417_24456 = state_24382__$1;(statearr_24417_24456[1] = 25);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 24))
{var inst_24334 = (state_24382[12]);var inst_24326 = inst_24334;var state_24382__$1 = (function (){var statearr_24418 = state_24382;(statearr_24418[8] = inst_24326);
return statearr_24418;
})();var statearr_24419_24457 = state_24382__$1;(statearr_24419_24457[2] = null);
(statearr_24419_24457[1] = 5);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 25))
{var state_24382__$1 = state_24382;var statearr_24420_24458 = state_24382__$1;(statearr_24420_24458[2] = null);
(statearr_24420_24458[1] = 26);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24383 === 26))
{var inst_24372 = (state_24382[2]);var state_24382__$1 = state_24382;var statearr_24421_24459 = state_24382__$1;(statearr_24421_24459[2] = inst_24372);
(statearr_24421_24459[1] = 22);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5635__auto___24429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5620__auto__,c__5635__auto___24429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_24425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24425[0] = state_machine__5621__auto__);
(statearr_24425[1] = 1);
return statearr_24425;
});
var state_machine__5621__auto____1 = (function (state_24382){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_24382);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e24426){if((e24426 instanceof Object))
{var ex__5624__auto__ = e24426;var statearr_24427_24460 = state_24382;(statearr_24427_24460[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24382);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e24426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__24461 = state_24382;
state_24382 = G__24461;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_24382){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_24382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___24429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5637__auto__ = (function (){var statearr_24428 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_24428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___24429);
return statearr_24428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto___24429,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj24463 = {};return obj24463;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3466__auto__ = p;if(and__3466__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3466__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4105__auto__ = (((p == null))?null:p);return (function (){var or__3478__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4105__auto__)]);if(or__3478__auto__)
{return or__3478__auto__;
} else
{var or__3478__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3478__auto____$1)
{return or__3478__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3478__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3478__auto__,mults){
return (function (p1__24464_SHARP_){if(cljs.core.truth_((p1__24464_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24464_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24464_SHARP_.call(null,topic))))
{return p1__24464_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24464_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3478__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t24579 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24579 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta24580){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta24580 = meta24580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24579.cljs$lang$type = true;
cljs.core.async.t24579.cljs$lang$ctorStr = "cljs.core.async/t24579";
cljs.core.async.t24579.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write(writer__4046__auto__,"cljs.core.async/t24579");
});})(mults,ensure_mult))
;
cljs.core.async.t24579.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t24579.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t24579.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t24579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t24579.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t24579.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t24579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24581){var self__ = this;
var _24581__$1 = this;return self__.meta24580;
});})(mults,ensure_mult))
;
cljs.core.async.t24579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24581,meta24580__$1){var self__ = this;
var _24581__$1 = this;return (new cljs.core.async.t24579(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta24580__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t24579 = ((function (mults,ensure_mult){
return (function __GT_t24579(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24580){return (new cljs.core.async.t24579(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta24580));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t24579(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5635__auto___24693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto___24693,mults,ensure_mult,p){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___24693,mults,ensure_mult,p){
return (function (state_24649){var state_val_24650 = (state_24649[1]);if((state_val_24650 === 1))
{var state_24649__$1 = state_24649;var statearr_24651_24694 = state_24649__$1;(statearr_24651_24694[2] = null);
(statearr_24651_24694[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 2))
{var state_24649__$1 = state_24649;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24649__$1,4,ch);
} else
{if((state_val_24650 === 3))
{var inst_24647 = (state_24649[2]);var state_24649__$1 = state_24649;return cljs.core.async.impl.ioc_helpers.return_chan(state_24649__$1,inst_24647);
} else
{if((state_val_24650 === 4))
{var inst_24584 = (state_24649[7]);var inst_24584__$1 = (state_24649[2]);var inst_24585 = (inst_24584__$1 == null);var state_24649__$1 = (function (){var statearr_24652 = state_24649;(statearr_24652[7] = inst_24584__$1);
return statearr_24652;
})();if(cljs.core.truth_(inst_24585))
{var statearr_24653_24695 = state_24649__$1;(statearr_24653_24695[1] = 5);
} else
{var statearr_24654_24696 = state_24649__$1;(statearr_24654_24696[1] = 6);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 5))
{var inst_24591 = cljs.core.deref(mults);var inst_24592 = cljs.core.vals(inst_24591);var inst_24593 = cljs.core.seq(inst_24592);var inst_24594 = inst_24593;var inst_24595 = null;var inst_24596 = 0;var inst_24597 = 0;var state_24649__$1 = (function (){var statearr_24655 = state_24649;(statearr_24655[8] = inst_24597);
(statearr_24655[9] = inst_24595);
(statearr_24655[10] = inst_24596);
(statearr_24655[11] = inst_24594);
return statearr_24655;
})();var statearr_24656_24697 = state_24649__$1;(statearr_24656_24697[2] = null);
(statearr_24656_24697[1] = 8);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 6))
{var inst_24584 = (state_24649[7]);var inst_24632 = (state_24649[12]);var inst_24632__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_24584) : topic_fn.call(null,inst_24584));var inst_24633 = cljs.core.deref(mults);var inst_24634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24633,inst_24632__$1);var inst_24635 = cljs.core.async.muxch_STAR_(inst_24634);var state_24649__$1 = (function (){var statearr_24657 = state_24649;(statearr_24657[12] = inst_24632__$1);
return statearr_24657;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24649__$1,19,inst_24635,inst_24584);
} else
{if((state_val_24650 === 7))
{var inst_24645 = (state_24649[2]);var state_24649__$1 = state_24649;var statearr_24658_24698 = state_24649__$1;(statearr_24658_24698[2] = inst_24645);
(statearr_24658_24698[1] = 3);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 8))
{var inst_24597 = (state_24649[8]);var inst_24596 = (state_24649[10]);var inst_24599 = (inst_24597 < inst_24596);var inst_24600 = inst_24599;var state_24649__$1 = state_24649;if(cljs.core.truth_(inst_24600))
{var statearr_24662_24699 = state_24649__$1;(statearr_24662_24699[1] = 10);
} else
{var statearr_24663_24700 = state_24649__$1;(statearr_24663_24700[1] = 11);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 9))
{var inst_24630 = (state_24649[2]);var state_24649__$1 = state_24649;var statearr_24664_24701 = state_24649__$1;(statearr_24664_24701[2] = inst_24630);
(statearr_24664_24701[1] = 7);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 10))
{var inst_24597 = (state_24649[8]);var inst_24595 = (state_24649[9]);var inst_24596 = (state_24649[10]);var inst_24594 = (state_24649[11]);var inst_24602 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24595,inst_24597);var inst_24603 = cljs.core.async.muxch_STAR_(inst_24602);var inst_24604 = cljs.core.async.close_BANG_(inst_24603);var inst_24605 = (inst_24597 + 1);var tmp24659 = inst_24595;var tmp24660 = inst_24596;var tmp24661 = inst_24594;var inst_24594__$1 = tmp24661;var inst_24595__$1 = tmp24659;var inst_24596__$1 = tmp24660;var inst_24597__$1 = inst_24605;var state_24649__$1 = (function (){var statearr_24665 = state_24649;(statearr_24665[13] = inst_24604);
(statearr_24665[8] = inst_24597__$1);
(statearr_24665[9] = inst_24595__$1);
(statearr_24665[10] = inst_24596__$1);
(statearr_24665[11] = inst_24594__$1);
return statearr_24665;
})();var statearr_24666_24702 = state_24649__$1;(statearr_24666_24702[2] = null);
(statearr_24666_24702[1] = 8);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 11))
{var inst_24608 = (state_24649[14]);var inst_24594 = (state_24649[11]);var inst_24608__$1 = cljs.core.seq(inst_24594);var state_24649__$1 = (function (){var statearr_24667 = state_24649;(statearr_24667[14] = inst_24608__$1);
return statearr_24667;
})();if(inst_24608__$1)
{var statearr_24668_24703 = state_24649__$1;(statearr_24668_24703[1] = 13);
} else
{var statearr_24669_24704 = state_24649__$1;(statearr_24669_24704[1] = 14);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 12))
{var inst_24628 = (state_24649[2]);var state_24649__$1 = state_24649;var statearr_24670_24705 = state_24649__$1;(statearr_24670_24705[2] = inst_24628);
(statearr_24670_24705[1] = 9);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 13))
{var inst_24608 = (state_24649[14]);var inst_24610 = cljs.core.chunked_seq_QMARK_(inst_24608);var state_24649__$1 = state_24649;if(inst_24610)
{var statearr_24671_24706 = state_24649__$1;(statearr_24671_24706[1] = 16);
} else
{var statearr_24672_24707 = state_24649__$1;(statearr_24672_24707[1] = 17);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 14))
{var state_24649__$1 = state_24649;var statearr_24673_24708 = state_24649__$1;(statearr_24673_24708[2] = null);
(statearr_24673_24708[1] = 15);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 15))
{var inst_24626 = (state_24649[2]);var state_24649__$1 = state_24649;var statearr_24674_24709 = state_24649__$1;(statearr_24674_24709[2] = inst_24626);
(statearr_24674_24709[1] = 12);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 16))
{var inst_24608 = (state_24649[14]);var inst_24612 = cljs.core.chunk_first(inst_24608);var inst_24613 = cljs.core.chunk_rest(inst_24608);var inst_24614 = cljs.core.count(inst_24612);var inst_24594 = inst_24613;var inst_24595 = inst_24612;var inst_24596 = inst_24614;var inst_24597 = 0;var state_24649__$1 = (function (){var statearr_24675 = state_24649;(statearr_24675[8] = inst_24597);
(statearr_24675[9] = inst_24595);
(statearr_24675[10] = inst_24596);
(statearr_24675[11] = inst_24594);
return statearr_24675;
})();var statearr_24676_24710 = state_24649__$1;(statearr_24676_24710[2] = null);
(statearr_24676_24710[1] = 8);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 17))
{var inst_24608 = (state_24649[14]);var inst_24617 = cljs.core.first(inst_24608);var inst_24618 = cljs.core.async.muxch_STAR_(inst_24617);var inst_24619 = cljs.core.async.close_BANG_(inst_24618);var inst_24620 = cljs.core.next(inst_24608);var inst_24594 = inst_24620;var inst_24595 = null;var inst_24596 = 0;var inst_24597 = 0;var state_24649__$1 = (function (){var statearr_24677 = state_24649;(statearr_24677[15] = inst_24619);
(statearr_24677[8] = inst_24597);
(statearr_24677[9] = inst_24595);
(statearr_24677[10] = inst_24596);
(statearr_24677[11] = inst_24594);
return statearr_24677;
})();var statearr_24678_24711 = state_24649__$1;(statearr_24678_24711[2] = null);
(statearr_24678_24711[1] = 8);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 18))
{var inst_24623 = (state_24649[2]);var state_24649__$1 = state_24649;var statearr_24679_24712 = state_24649__$1;(statearr_24679_24712[2] = inst_24623);
(statearr_24679_24712[1] = 15);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 19))
{var inst_24637 = (state_24649[2]);var state_24649__$1 = state_24649;if(cljs.core.truth_(inst_24637))
{var statearr_24680_24713 = state_24649__$1;(statearr_24680_24713[1] = 20);
} else
{var statearr_24681_24714 = state_24649__$1;(statearr_24681_24714[1] = 21);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 20))
{var state_24649__$1 = state_24649;var statearr_24682_24715 = state_24649__$1;(statearr_24682_24715[2] = null);
(statearr_24682_24715[1] = 22);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 21))
{var inst_24632 = (state_24649[12]);var inst_24640 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_24632);var state_24649__$1 = state_24649;var statearr_24683_24716 = state_24649__$1;(statearr_24683_24716[2] = inst_24640);
(statearr_24683_24716[1] = 22);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24650 === 22))
{var inst_24642 = (state_24649[2]);var state_24649__$1 = (function (){var statearr_24684 = state_24649;(statearr_24684[16] = inst_24642);
return statearr_24684;
})();var statearr_24685_24717 = state_24649__$1;(statearr_24685_24717[2] = null);
(statearr_24685_24717[1] = 2);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5635__auto___24693,mults,ensure_mult,p))
;return ((function (switch__5620__auto__,c__5635__auto___24693,mults,ensure_mult,p){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_24689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24689[0] = state_machine__5621__auto__);
(statearr_24689[1] = 1);
return statearr_24689;
});
var state_machine__5621__auto____1 = (function (state_24649){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_24649);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e24690){if((e24690 instanceof Object))
{var ex__5624__auto__ = e24690;var statearr_24691_24718 = state_24649;(statearr_24691_24718[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24649);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e24690;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__24719 = state_24649;
state_24649 = G__24719;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_24649){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_24649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___24693,mults,ensure_mult,p))
})();var state__5637__auto__ = (function (){var statearr_24692 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_24692[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___24693);
return statearr_24692;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto___24693,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5635__auto___24856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto___24856,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___24856,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24826){var state_val_24827 = (state_24826[1]);if((state_val_24827 === 1))
{var state_24826__$1 = state_24826;var statearr_24828_24857 = state_24826__$1;(statearr_24828_24857[2] = null);
(statearr_24828_24857[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24827 === 2))
{var inst_24789 = cljs.core.reset_BANG_(dctr,cnt);var inst_24790 = 0;var state_24826__$1 = (function (){var statearr_24829 = state_24826;(statearr_24829[7] = inst_24789);
(statearr_24829[8] = inst_24790);
return statearr_24829;
})();var statearr_24830_24858 = state_24826__$1;(statearr_24830_24858[2] = null);
(statearr_24830_24858[1] = 4);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24827 === 3))
{var inst_24824 = (state_24826[2]);var state_24826__$1 = state_24826;return cljs.core.async.impl.ioc_helpers.return_chan(state_24826__$1,inst_24824);
} else
{if((state_val_24827 === 4))
{var inst_24790 = (state_24826[8]);var inst_24792 = (inst_24790 < cnt);var state_24826__$1 = state_24826;if(cljs.core.truth_(inst_24792))
{var statearr_24831_24859 = state_24826__$1;(statearr_24831_24859[1] = 6);
} else
{var statearr_24832_24860 = state_24826__$1;(statearr_24832_24860[1] = 7);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24827 === 5))
{var inst_24810 = (state_24826[2]);var state_24826__$1 = (function (){var statearr_24833 = state_24826;(statearr_24833[9] = inst_24810);
return statearr_24833;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24826__$1,12,dchan);
} else
{if((state_val_24827 === 6))
{var state_24826__$1 = state_24826;var statearr_24834_24861 = state_24826__$1;(statearr_24834_24861[2] = null);
(statearr_24834_24861[1] = 11);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24827 === 7))
{var state_24826__$1 = state_24826;var statearr_24835_24862 = state_24826__$1;(statearr_24835_24862[2] = null);
(statearr_24835_24862[1] = 8);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24827 === 8))
{var inst_24808 = (state_24826[2]);var state_24826__$1 = state_24826;var statearr_24836_24863 = state_24826__$1;(statearr_24836_24863[2] = inst_24808);
(statearr_24836_24863[1] = 5);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24827 === 9))
{var inst_24790 = (state_24826[8]);var inst_24803 = (state_24826[2]);var inst_24804 = (inst_24790 + 1);var inst_24790__$1 = inst_24804;var state_24826__$1 = (function (){var statearr_24837 = state_24826;(statearr_24837[10] = inst_24803);
(statearr_24837[8] = inst_24790__$1);
return statearr_24837;
})();var statearr_24838_24864 = state_24826__$1;(statearr_24838_24864[2] = null);
(statearr_24838_24864[1] = 4);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24827 === 10))
{var inst_24794 = (state_24826[2]);var inst_24795 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_24826__$1 = (function (){var statearr_24839 = state_24826;(statearr_24839[11] = inst_24794);
return statearr_24839;
})();var statearr_24840_24865 = state_24826__$1;(statearr_24840_24865[2] = inst_24795);
cljs.core.async.impl.ioc_helpers.process_exception(state_24826__$1);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24827 === 11))
{var inst_24790 = (state_24826[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24826,10,Object,null,9);var inst_24799 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_24790) : chs__$1.call(null,inst_24790));var inst_24800 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_24790) : done.call(null,inst_24790));var inst_24801 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24799,inst_24800);var state_24826__$1 = state_24826;var statearr_24841_24866 = state_24826__$1;(statearr_24841_24866[2] = inst_24801);
cljs.core.async.impl.ioc_helpers.process_exception(state_24826__$1);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24827 === 12))
{var inst_24812 = (state_24826[12]);var inst_24812__$1 = (state_24826[2]);var inst_24813 = cljs.core.some(cljs.core.nil_QMARK_,inst_24812__$1);var state_24826__$1 = (function (){var statearr_24842 = state_24826;(statearr_24842[12] = inst_24812__$1);
return statearr_24842;
})();if(cljs.core.truth_(inst_24813))
{var statearr_24843_24867 = state_24826__$1;(statearr_24843_24867[1] = 13);
} else
{var statearr_24844_24868 = state_24826__$1;(statearr_24844_24868[1] = 14);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24827 === 13))
{var inst_24815 = cljs.core.async.close_BANG_(out);var state_24826__$1 = state_24826;var statearr_24845_24869 = state_24826__$1;(statearr_24845_24869[2] = inst_24815);
(statearr_24845_24869[1] = 15);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24827 === 14))
{var inst_24812 = (state_24826[12]);var inst_24817 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24812);var state_24826__$1 = state_24826;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24826__$1,16,out,inst_24817);
} else
{if((state_val_24827 === 15))
{var inst_24822 = (state_24826[2]);var state_24826__$1 = state_24826;var statearr_24846_24870 = state_24826__$1;(statearr_24846_24870[2] = inst_24822);
(statearr_24846_24870[1] = 3);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24827 === 16))
{var inst_24819 = (state_24826[2]);var state_24826__$1 = (function (){var statearr_24847 = state_24826;(statearr_24847[13] = inst_24819);
return statearr_24847;
})();var statearr_24848_24871 = state_24826__$1;(statearr_24848_24871[2] = null);
(statearr_24848_24871[1] = 2);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5635__auto___24856,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5620__auto__,c__5635__auto___24856,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_24852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24852[0] = state_machine__5621__auto__);
(statearr_24852[1] = 1);
return statearr_24852;
});
var state_machine__5621__auto____1 = (function (state_24826){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_24826);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e24853){if((e24853 instanceof Object))
{var ex__5624__auto__ = e24853;var statearr_24854_24872 = state_24826;(statearr_24854_24872[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24826);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e24853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__24873 = state_24826;
state_24826 = G__24873;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_24826){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_24826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___24856,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5637__auto__ = (function (){var statearr_24855 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_24855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___24856);
return statearr_24855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto___24856,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5635__auto___24981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto___24981,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___24981,out){
return (function (state_24957){var state_val_24958 = (state_24957[1]);if((state_val_24958 === 1))
{var inst_24928 = cljs.core.vec(chs);var inst_24929 = inst_24928;var state_24957__$1 = (function (){var statearr_24959 = state_24957;(statearr_24959[7] = inst_24929);
return statearr_24959;
})();var statearr_24960_24982 = state_24957__$1;(statearr_24960_24982[2] = null);
(statearr_24960_24982[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24958 === 2))
{var inst_24929 = (state_24957[7]);var inst_24931 = cljs.core.count(inst_24929);var inst_24932 = (inst_24931 > 0);var state_24957__$1 = state_24957;if(cljs.core.truth_(inst_24932))
{var statearr_24961_24983 = state_24957__$1;(statearr_24961_24983[1] = 4);
} else
{var statearr_24962_24984 = state_24957__$1;(statearr_24962_24984[1] = 5);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24958 === 3))
{var inst_24955 = (state_24957[2]);var state_24957__$1 = state_24957;return cljs.core.async.impl.ioc_helpers.return_chan(state_24957__$1,inst_24955);
} else
{if((state_val_24958 === 4))
{var inst_24929 = (state_24957[7]);var state_24957__$1 = state_24957;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24957__$1,7,inst_24929);
} else
{if((state_val_24958 === 5))
{var inst_24951 = cljs.core.async.close_BANG_(out);var state_24957__$1 = state_24957;var statearr_24963_24985 = state_24957__$1;(statearr_24963_24985[2] = inst_24951);
(statearr_24963_24985[1] = 6);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24958 === 6))
{var inst_24953 = (state_24957[2]);var state_24957__$1 = state_24957;var statearr_24964_24986 = state_24957__$1;(statearr_24964_24986[2] = inst_24953);
(statearr_24964_24986[1] = 3);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24958 === 7))
{var inst_24936 = (state_24957[8]);var inst_24937 = (state_24957[9]);var inst_24936__$1 = (state_24957[2]);var inst_24937__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24936__$1,0,null);var inst_24938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24936__$1,1,null);var inst_24939 = (inst_24937__$1 == null);var state_24957__$1 = (function (){var statearr_24965 = state_24957;(statearr_24965[8] = inst_24936__$1);
(statearr_24965[10] = inst_24938);
(statearr_24965[9] = inst_24937__$1);
return statearr_24965;
})();if(cljs.core.truth_(inst_24939))
{var statearr_24966_24987 = state_24957__$1;(statearr_24966_24987[1] = 8);
} else
{var statearr_24967_24988 = state_24957__$1;(statearr_24967_24988[1] = 9);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_24958 === 8))
{var inst_24936 = (state_24957[8]);var inst_24938 = (state_24957[10]);var inst_24937 = (state_24957[9]);var inst_24929 = (state_24957[7]);var inst_24941 = (function (){var c = inst_24938;var v = inst_24937;var vec__24934 = inst_24936;var cs = inst_24929;return ((function (c,v,vec__24934,cs,inst_24936,inst_24938,inst_24937,inst_24929,state_val_24958,c__5635__auto___24981,out){
return (function (p1__24874_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24874_SHARP_);
});
;})(c,v,vec__24934,cs,inst_24936,inst_24938,inst_24937,inst_24929,state_val_24958,c__5635__auto___24981,out))
})();var inst_24942 = cljs.core.filterv(inst_24941,inst_24929);var inst_24929__$1 = inst_24942;var state_24957__$1 = (function (){var statearr_24968 = state_24957;(statearr_24968[7] = inst_24929__$1);
return statearr_24968;
})();var statearr_24969_24989 = state_24957__$1;(statearr_24969_24989[2] = null);
(statearr_24969_24989[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24958 === 9))
{var inst_24937 = (state_24957[9]);var state_24957__$1 = state_24957;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24957__$1,11,out,inst_24937);
} else
{if((state_val_24958 === 10))
{var inst_24949 = (state_24957[2]);var state_24957__$1 = state_24957;var statearr_24971_24990 = state_24957__$1;(statearr_24971_24990[2] = inst_24949);
(statearr_24971_24990[1] = 6);
return cljs.core.constant$keyword$105;
} else
{if((state_val_24958 === 11))
{var inst_24929 = (state_24957[7]);var inst_24946 = (state_24957[2]);var tmp24970 = inst_24929;var inst_24929__$1 = tmp24970;var state_24957__$1 = (function (){var statearr_24972 = state_24957;(statearr_24972[11] = inst_24946);
(statearr_24972[7] = inst_24929__$1);
return statearr_24972;
})();var statearr_24973_24991 = state_24957__$1;(statearr_24973_24991[2] = null);
(statearr_24973_24991[1] = 2);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5635__auto___24981,out))
;return ((function (switch__5620__auto__,c__5635__auto___24981,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_24977 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24977[0] = state_machine__5621__auto__);
(statearr_24977[1] = 1);
return statearr_24977;
});
var state_machine__5621__auto____1 = (function (state_24957){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_24957);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e24978){if((e24978 instanceof Object))
{var ex__5624__auto__ = e24978;var statearr_24979_24992 = state_24957;(statearr_24979_24992[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24957);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e24978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__24993 = state_24957;
state_24957 = G__24993;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_24957){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_24957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___24981,out))
})();var state__5637__auto__ = (function (){var statearr_24980 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_24980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___24981);
return statearr_24980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto___24981,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5635__auto___25086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto___25086,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___25086,out){
return (function (state_25063){var state_val_25064 = (state_25063[1]);if((state_val_25064 === 1))
{var inst_25040 = 0;var state_25063__$1 = (function (){var statearr_25065 = state_25063;(statearr_25065[7] = inst_25040);
return statearr_25065;
})();var statearr_25066_25087 = state_25063__$1;(statearr_25066_25087[2] = null);
(statearr_25066_25087[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25064 === 2))
{var inst_25040 = (state_25063[7]);var inst_25042 = (inst_25040 < n);var state_25063__$1 = state_25063;if(cljs.core.truth_(inst_25042))
{var statearr_25067_25088 = state_25063__$1;(statearr_25067_25088[1] = 4);
} else
{var statearr_25068_25089 = state_25063__$1;(statearr_25068_25089[1] = 5);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_25064 === 3))
{var inst_25060 = (state_25063[2]);var inst_25061 = cljs.core.async.close_BANG_(out);var state_25063__$1 = (function (){var statearr_25069 = state_25063;(statearr_25069[8] = inst_25060);
return statearr_25069;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25063__$1,inst_25061);
} else
{if((state_val_25064 === 4))
{var state_25063__$1 = state_25063;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25063__$1,7,ch);
} else
{if((state_val_25064 === 5))
{var state_25063__$1 = state_25063;var statearr_25070_25090 = state_25063__$1;(statearr_25070_25090[2] = null);
(statearr_25070_25090[1] = 6);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25064 === 6))
{var inst_25058 = (state_25063[2]);var state_25063__$1 = state_25063;var statearr_25071_25091 = state_25063__$1;(statearr_25071_25091[2] = inst_25058);
(statearr_25071_25091[1] = 3);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25064 === 7))
{var inst_25045 = (state_25063[9]);var inst_25045__$1 = (state_25063[2]);var inst_25046 = (inst_25045__$1 == null);var inst_25047 = cljs.core.not(inst_25046);var state_25063__$1 = (function (){var statearr_25072 = state_25063;(statearr_25072[9] = inst_25045__$1);
return statearr_25072;
})();if(inst_25047)
{var statearr_25073_25092 = state_25063__$1;(statearr_25073_25092[1] = 8);
} else
{var statearr_25074_25093 = state_25063__$1;(statearr_25074_25093[1] = 9);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_25064 === 8))
{var inst_25045 = (state_25063[9]);var state_25063__$1 = state_25063;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25063__$1,11,out,inst_25045);
} else
{if((state_val_25064 === 9))
{var state_25063__$1 = state_25063;var statearr_25075_25094 = state_25063__$1;(statearr_25075_25094[2] = null);
(statearr_25075_25094[1] = 10);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25064 === 10))
{var inst_25055 = (state_25063[2]);var state_25063__$1 = state_25063;var statearr_25076_25095 = state_25063__$1;(statearr_25076_25095[2] = inst_25055);
(statearr_25076_25095[1] = 6);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25064 === 11))
{var inst_25040 = (state_25063[7]);var inst_25050 = (state_25063[2]);var inst_25051 = (inst_25040 + 1);var inst_25040__$1 = inst_25051;var state_25063__$1 = (function (){var statearr_25077 = state_25063;(statearr_25077[10] = inst_25050);
(statearr_25077[7] = inst_25040__$1);
return statearr_25077;
})();var statearr_25078_25096 = state_25063__$1;(statearr_25078_25096[2] = null);
(statearr_25078_25096[1] = 2);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5635__auto___25086,out))
;return ((function (switch__5620__auto__,c__5635__auto___25086,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_25082 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25082[0] = state_machine__5621__auto__);
(statearr_25082[1] = 1);
return statearr_25082;
});
var state_machine__5621__auto____1 = (function (state_25063){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_25063);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e25083){if((e25083 instanceof Object))
{var ex__5624__auto__ = e25083;var statearr_25084_25097 = state_25063;(statearr_25084_25097[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25063);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e25083;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__25098 = state_25063;
state_25063 = G__25098;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_25063){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_25063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___25086,out))
})();var state__5637__auto__ = (function (){var statearr_25085 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_25085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___25086);
return statearr_25085;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto___25086,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5635__auto___25195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto___25195,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___25195,out){
return (function (state_25170){var state_val_25171 = (state_25170[1]);if((state_val_25171 === 1))
{var inst_25147 = null;var state_25170__$1 = (function (){var statearr_25172 = state_25170;(statearr_25172[7] = inst_25147);
return statearr_25172;
})();var statearr_25173_25196 = state_25170__$1;(statearr_25173_25196[2] = null);
(statearr_25173_25196[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25171 === 2))
{var state_25170__$1 = state_25170;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25170__$1,4,ch);
} else
{if((state_val_25171 === 3))
{var inst_25167 = (state_25170[2]);var inst_25168 = cljs.core.async.close_BANG_(out);var state_25170__$1 = (function (){var statearr_25174 = state_25170;(statearr_25174[8] = inst_25167);
return statearr_25174;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25170__$1,inst_25168);
} else
{if((state_val_25171 === 4))
{var inst_25150 = (state_25170[9]);var inst_25150__$1 = (state_25170[2]);var inst_25151 = (inst_25150__$1 == null);var inst_25152 = cljs.core.not(inst_25151);var state_25170__$1 = (function (){var statearr_25175 = state_25170;(statearr_25175[9] = inst_25150__$1);
return statearr_25175;
})();if(inst_25152)
{var statearr_25176_25197 = state_25170__$1;(statearr_25176_25197[1] = 5);
} else
{var statearr_25177_25198 = state_25170__$1;(statearr_25177_25198[1] = 6);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_25171 === 5))
{var inst_25147 = (state_25170[7]);var inst_25150 = (state_25170[9]);var inst_25154 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25150,inst_25147);var state_25170__$1 = state_25170;if(inst_25154)
{var statearr_25178_25199 = state_25170__$1;(statearr_25178_25199[1] = 8);
} else
{var statearr_25179_25200 = state_25170__$1;(statearr_25179_25200[1] = 9);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_25171 === 6))
{var state_25170__$1 = state_25170;var statearr_25181_25201 = state_25170__$1;(statearr_25181_25201[2] = null);
(statearr_25181_25201[1] = 7);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25171 === 7))
{var inst_25165 = (state_25170[2]);var state_25170__$1 = state_25170;var statearr_25182_25202 = state_25170__$1;(statearr_25182_25202[2] = inst_25165);
(statearr_25182_25202[1] = 3);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25171 === 8))
{var inst_25147 = (state_25170[7]);var tmp25180 = inst_25147;var inst_25147__$1 = tmp25180;var state_25170__$1 = (function (){var statearr_25183 = state_25170;(statearr_25183[7] = inst_25147__$1);
return statearr_25183;
})();var statearr_25184_25203 = state_25170__$1;(statearr_25184_25203[2] = null);
(statearr_25184_25203[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25171 === 9))
{var inst_25150 = (state_25170[9]);var state_25170__$1 = state_25170;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25170__$1,11,out,inst_25150);
} else
{if((state_val_25171 === 10))
{var inst_25162 = (state_25170[2]);var state_25170__$1 = state_25170;var statearr_25185_25204 = state_25170__$1;(statearr_25185_25204[2] = inst_25162);
(statearr_25185_25204[1] = 7);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25171 === 11))
{var inst_25150 = (state_25170[9]);var inst_25159 = (state_25170[2]);var inst_25147 = inst_25150;var state_25170__$1 = (function (){var statearr_25186 = state_25170;(statearr_25186[7] = inst_25147);
(statearr_25186[10] = inst_25159);
return statearr_25186;
})();var statearr_25187_25205 = state_25170__$1;(statearr_25187_25205[2] = null);
(statearr_25187_25205[1] = 2);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__5635__auto___25195,out))
;return ((function (switch__5620__auto__,c__5635__auto___25195,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_25191 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25191[0] = state_machine__5621__auto__);
(statearr_25191[1] = 1);
return statearr_25191;
});
var state_machine__5621__auto____1 = (function (state_25170){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_25170);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e25192){if((e25192 instanceof Object))
{var ex__5624__auto__ = e25192;var statearr_25193_25206 = state_25170;(statearr_25193_25206[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25170);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e25192;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__25207 = state_25170;
state_25170 = G__25207;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_25170){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_25170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___25195,out))
})();var state__5637__auto__ = (function (){var statearr_25194 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_25194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___25195);
return statearr_25194;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto___25195,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5635__auto___25342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto___25342,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___25342,out){
return (function (state_25312){var state_val_25313 = (state_25312[1]);if((state_val_25313 === 1))
{var inst_25275 = (new Array(n));var inst_25276 = inst_25275;var inst_25277 = 0;var state_25312__$1 = (function (){var statearr_25314 = state_25312;(statearr_25314[7] = inst_25277);
(statearr_25314[8] = inst_25276);
return statearr_25314;
})();var statearr_25315_25343 = state_25312__$1;(statearr_25315_25343[2] = null);
(statearr_25315_25343[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25313 === 2))
{var state_25312__$1 = state_25312;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25312__$1,4,ch);
} else
{if((state_val_25313 === 3))
{var inst_25310 = (state_25312[2]);var state_25312__$1 = state_25312;return cljs.core.async.impl.ioc_helpers.return_chan(state_25312__$1,inst_25310);
} else
{if((state_val_25313 === 4))
{var inst_25280 = (state_25312[9]);var inst_25280__$1 = (state_25312[2]);var inst_25281 = (inst_25280__$1 == null);var inst_25282 = cljs.core.not(inst_25281);var state_25312__$1 = (function (){var statearr_25316 = state_25312;(statearr_25316[9] = inst_25280__$1);
return statearr_25316;
})();if(inst_25282)
{var statearr_25317_25344 = state_25312__$1;(statearr_25317_25344[1] = 5);
} else
{var statearr_25318_25345 = state_25312__$1;(statearr_25318_25345[1] = 6);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_25313 === 5))
{var inst_25280 = (state_25312[9]);var inst_25277 = (state_25312[7]);var inst_25276 = (state_25312[8]);var inst_25285 = (state_25312[10]);var inst_25284 = (inst_25276[inst_25277] = inst_25280);var inst_25285__$1 = (inst_25277 + 1);var inst_25286 = (inst_25285__$1 < n);var state_25312__$1 = (function (){var statearr_25319 = state_25312;(statearr_25319[10] = inst_25285__$1);
(statearr_25319[11] = inst_25284);
return statearr_25319;
})();if(cljs.core.truth_(inst_25286))
{var statearr_25320_25346 = state_25312__$1;(statearr_25320_25346[1] = 8);
} else
{var statearr_25321_25347 = state_25312__$1;(statearr_25321_25347[1] = 9);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_25313 === 6))
{var inst_25277 = (state_25312[7]);var inst_25298 = (inst_25277 > 0);var state_25312__$1 = state_25312;if(cljs.core.truth_(inst_25298))
{var statearr_25323_25348 = state_25312__$1;(statearr_25323_25348[1] = 12);
} else
{var statearr_25324_25349 = state_25312__$1;(statearr_25324_25349[1] = 13);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_25313 === 7))
{var inst_25308 = (state_25312[2]);var state_25312__$1 = state_25312;var statearr_25325_25350 = state_25312__$1;(statearr_25325_25350[2] = inst_25308);
(statearr_25325_25350[1] = 3);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25313 === 8))
{var inst_25276 = (state_25312[8]);var inst_25285 = (state_25312[10]);var tmp25322 = inst_25276;var inst_25276__$1 = tmp25322;var inst_25277 = inst_25285;var state_25312__$1 = (function (){var statearr_25326 = state_25312;(statearr_25326[7] = inst_25277);
(statearr_25326[8] = inst_25276__$1);
return statearr_25326;
})();var statearr_25327_25351 = state_25312__$1;(statearr_25327_25351[2] = null);
(statearr_25327_25351[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25313 === 9))
{var inst_25276 = (state_25312[8]);var inst_25290 = cljs.core.vec(inst_25276);var state_25312__$1 = state_25312;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25312__$1,11,out,inst_25290);
} else
{if((state_val_25313 === 10))
{var inst_25296 = (state_25312[2]);var state_25312__$1 = state_25312;var statearr_25328_25352 = state_25312__$1;(statearr_25328_25352[2] = inst_25296);
(statearr_25328_25352[1] = 7);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25313 === 11))
{var inst_25292 = (state_25312[2]);var inst_25293 = (new Array(n));var inst_25276 = inst_25293;var inst_25277 = 0;var state_25312__$1 = (function (){var statearr_25329 = state_25312;(statearr_25329[7] = inst_25277);
(statearr_25329[8] = inst_25276);
(statearr_25329[12] = inst_25292);
return statearr_25329;
})();var statearr_25330_25353 = state_25312__$1;(statearr_25330_25353[2] = null);
(statearr_25330_25353[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25313 === 12))
{var inst_25276 = (state_25312[8]);var inst_25300 = cljs.core.vec(inst_25276);var state_25312__$1 = state_25312;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25312__$1,15,out,inst_25300);
} else
{if((state_val_25313 === 13))
{var state_25312__$1 = state_25312;var statearr_25331_25354 = state_25312__$1;(statearr_25331_25354[2] = null);
(statearr_25331_25354[1] = 14);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25313 === 14))
{var inst_25305 = (state_25312[2]);var inst_25306 = cljs.core.async.close_BANG_(out);var state_25312__$1 = (function (){var statearr_25332 = state_25312;(statearr_25332[13] = inst_25305);
return statearr_25332;
})();var statearr_25333_25355 = state_25312__$1;(statearr_25333_25355[2] = inst_25306);
(statearr_25333_25355[1] = 7);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25313 === 15))
{var inst_25302 = (state_25312[2]);var state_25312__$1 = state_25312;var statearr_25334_25356 = state_25312__$1;(statearr_25334_25356[2] = inst_25302);
(statearr_25334_25356[1] = 14);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5635__auto___25342,out))
;return ((function (switch__5620__auto__,c__5635__auto___25342,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_25338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25338[0] = state_machine__5621__auto__);
(statearr_25338[1] = 1);
return statearr_25338;
});
var state_machine__5621__auto____1 = (function (state_25312){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_25312);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e25339){if((e25339 instanceof Object))
{var ex__5624__auto__ = e25339;var statearr_25340_25357 = state_25312;(statearr_25340_25357[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25312);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e25339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__25358 = state_25312;
state_25312 = G__25358;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_25312){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_25312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___25342,out))
})();var state__5637__auto__ = (function (){var statearr_25341 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_25341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___25342);
return statearr_25341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto___25342,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5635__auto___25501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run(((function (c__5635__auto___25501,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___25501,out){
return (function (state_25471){var state_val_25472 = (state_25471[1]);if((state_val_25472 === 1))
{var inst_25430 = [];var inst_25431 = inst_25430;var inst_25432 = cljs.core.constant$keyword$118;var state_25471__$1 = (function (){var statearr_25473 = state_25471;(statearr_25473[7] = inst_25431);
(statearr_25473[8] = inst_25432);
return statearr_25473;
})();var statearr_25474_25502 = state_25471__$1;(statearr_25474_25502[2] = null);
(statearr_25474_25502[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25472 === 2))
{var state_25471__$1 = state_25471;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25471__$1,4,ch);
} else
{if((state_val_25472 === 3))
{var inst_25469 = (state_25471[2]);var state_25471__$1 = state_25471;return cljs.core.async.impl.ioc_helpers.return_chan(state_25471__$1,inst_25469);
} else
{if((state_val_25472 === 4))
{var inst_25435 = (state_25471[9]);var inst_25435__$1 = (state_25471[2]);var inst_25436 = (inst_25435__$1 == null);var inst_25437 = cljs.core.not(inst_25436);var state_25471__$1 = (function (){var statearr_25475 = state_25471;(statearr_25475[9] = inst_25435__$1);
return statearr_25475;
})();if(inst_25437)
{var statearr_25476_25503 = state_25471__$1;(statearr_25476_25503[1] = 5);
} else
{var statearr_25477_25504 = state_25471__$1;(statearr_25477_25504[1] = 6);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_25472 === 5))
{var inst_25432 = (state_25471[8]);var inst_25439 = (state_25471[10]);var inst_25435 = (state_25471[9]);var inst_25439__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25435) : f.call(null,inst_25435));var inst_25440 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25439__$1,inst_25432);var inst_25441 = cljs.core.keyword_identical_QMARK_(inst_25432,cljs.core.constant$keyword$118);var inst_25442 = (inst_25440) || (inst_25441);var state_25471__$1 = (function (){var statearr_25478 = state_25471;(statearr_25478[10] = inst_25439__$1);
return statearr_25478;
})();if(cljs.core.truth_(inst_25442))
{var statearr_25479_25505 = state_25471__$1;(statearr_25479_25505[1] = 8);
} else
{var statearr_25480_25506 = state_25471__$1;(statearr_25480_25506[1] = 9);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_25472 === 6))
{var inst_25431 = (state_25471[7]);var inst_25456 = inst_25431.length;var inst_25457 = (inst_25456 > 0);var state_25471__$1 = state_25471;if(cljs.core.truth_(inst_25457))
{var statearr_25482_25507 = state_25471__$1;(statearr_25482_25507[1] = 12);
} else
{var statearr_25483_25508 = state_25471__$1;(statearr_25483_25508[1] = 13);
}
return cljs.core.constant$keyword$105;
} else
{if((state_val_25472 === 7))
{var inst_25467 = (state_25471[2]);var state_25471__$1 = state_25471;var statearr_25484_25509 = state_25471__$1;(statearr_25484_25509[2] = inst_25467);
(statearr_25484_25509[1] = 3);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25472 === 8))
{var inst_25431 = (state_25471[7]);var inst_25439 = (state_25471[10]);var inst_25435 = (state_25471[9]);var inst_25444 = inst_25431.push(inst_25435);var tmp25481 = inst_25431;var inst_25431__$1 = tmp25481;var inst_25432 = inst_25439;var state_25471__$1 = (function (){var statearr_25485 = state_25471;(statearr_25485[7] = inst_25431__$1);
(statearr_25485[8] = inst_25432);
(statearr_25485[11] = inst_25444);
return statearr_25485;
})();var statearr_25486_25510 = state_25471__$1;(statearr_25486_25510[2] = null);
(statearr_25486_25510[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25472 === 9))
{var inst_25431 = (state_25471[7]);var inst_25447 = cljs.core.vec(inst_25431);var state_25471__$1 = state_25471;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25471__$1,11,out,inst_25447);
} else
{if((state_val_25472 === 10))
{var inst_25454 = (state_25471[2]);var state_25471__$1 = state_25471;var statearr_25487_25511 = state_25471__$1;(statearr_25487_25511[2] = inst_25454);
(statearr_25487_25511[1] = 7);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25472 === 11))
{var inst_25439 = (state_25471[10]);var inst_25435 = (state_25471[9]);var inst_25449 = (state_25471[2]);var inst_25450 = [];var inst_25451 = inst_25450.push(inst_25435);var inst_25431 = inst_25450;var inst_25432 = inst_25439;var state_25471__$1 = (function (){var statearr_25488 = state_25471;(statearr_25488[12] = inst_25451);
(statearr_25488[13] = inst_25449);
(statearr_25488[7] = inst_25431);
(statearr_25488[8] = inst_25432);
return statearr_25488;
})();var statearr_25489_25512 = state_25471__$1;(statearr_25489_25512[2] = null);
(statearr_25489_25512[1] = 2);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25472 === 12))
{var inst_25431 = (state_25471[7]);var inst_25459 = cljs.core.vec(inst_25431);var state_25471__$1 = state_25471;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25471__$1,15,out,inst_25459);
} else
{if((state_val_25472 === 13))
{var state_25471__$1 = state_25471;var statearr_25490_25513 = state_25471__$1;(statearr_25490_25513[2] = null);
(statearr_25490_25513[1] = 14);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25472 === 14))
{var inst_25464 = (state_25471[2]);var inst_25465 = cljs.core.async.close_BANG_(out);var state_25471__$1 = (function (){var statearr_25491 = state_25471;(statearr_25491[14] = inst_25464);
return statearr_25491;
})();var statearr_25492_25514 = state_25471__$1;(statearr_25492_25514[2] = inst_25465);
(statearr_25492_25514[1] = 7);
return cljs.core.constant$keyword$105;
} else
{if((state_val_25472 === 15))
{var inst_25461 = (state_25471[2]);var state_25471__$1 = state_25471;var statearr_25493_25515 = state_25471__$1;(statearr_25493_25515[2] = inst_25461);
(statearr_25493_25515[1] = 14);
return cljs.core.constant$keyword$105;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5635__auto___25501,out))
;return ((function (switch__5620__auto__,c__5635__auto___25501,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_25497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25497[0] = state_machine__5621__auto__);
(statearr_25497[1] = 1);
return statearr_25497;
});
var state_machine__5621__auto____1 = (function (state_25471){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__(state_25471);if(cljs.core.keyword_identical_QMARK_(result__5623__auto__,cljs.core.constant$keyword$105))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e25498){if((e25498 instanceof Object))
{var ex__5624__auto__ = e25498;var statearr_25499_25516 = state_25471;(statearr_25499_25516[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25471);
return cljs.core.constant$keyword$105;
} else
{if(cljs.core.constant$keyword$94)
{throw e25498;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5622__auto__,cljs.core.constant$keyword$105))
{{
var G__25517 = state_25471;
state_25471 = G__25517;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_25471){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_25471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___25501,out))
})();var state__5637__auto__ = (function (){var statearr_25500 = (f__5636__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5636__auto__.cljs$core$IFn$_invoke$arity$0() : f__5636__auto__.call(null));(statearr_25500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___25501);
return statearr_25500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5637__auto__);
});})(c__5635__auto___25501,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
