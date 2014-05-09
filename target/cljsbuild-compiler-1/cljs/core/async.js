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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16232 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16232 = (function (f,fn_handler,meta16233){
this.f = f;
this.fn_handler = fn_handler;
this.meta16233 = meta16233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16232.cljs$lang$type = true;
cljs.core.async.t16232.cljs$lang$ctorStr = "cljs.core.async/t16232";
cljs.core.async.t16232.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t16232");
});
cljs.core.async.t16232.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16234){var self__ = this;
var _16234__$1 = this;return self__.meta16233;
});
cljs.core.async.t16232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16234,meta16233__$1){var self__ = this;
var _16234__$1 = this;return (new cljs.core.async.t16232(self__.f,self__.fn_handler,meta16233__$1));
});
cljs.core.async.__GT_t16232 = (function __GT_t16232(f__$1,fn_handler__$1,meta16233){return (new cljs.core.async.t16232(f__$1,fn_handler__$1,meta16233));
});
}
return (new cljs.core.async.t16232(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16236 = buff;if(G__16236)
{var bit__4128__auto__ = null;if(cljs.core.truth_((function (){var or__3478__auto__ = bit__4128__auto__;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return G__16236.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16236.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16236);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16236);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_16237 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16237);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_16237,ret){
return (function (){return fn1.call(null,val_16237);
});})(val_16237,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___2 = (function (port,val){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4090__auto__))
{var ret = temp__4090__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4090__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4090__auto__))
{var retb = temp__4090__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4090__auto__){
return (function (){return fn1.call(null,ret);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4326__auto___16238 = n;var x_16239 = 0;while(true){
if((x_16239 < n__4326__auto___16238))
{(a[x_16239] = 0);
{
var G__16240 = (x_16239 + 1);
x_16239 = G__16240;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__16241 = (i + 1);
i = G__16241;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16245 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16245 = (function (flag,alt_flag,meta16246){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16246 = meta16246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16245.cljs$lang$type = true;
cljs.core.async.t16245.cljs$lang$ctorStr = "cljs.core.async/t16245";
cljs.core.async.t16245.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t16245");
});})(flag))
;
cljs.core.async.t16245.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16245.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t16245.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t16245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16247){var self__ = this;
var _16247__$1 = this;return self__.meta16246;
});})(flag))
;
cljs.core.async.t16245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16247,meta16246__$1){var self__ = this;
var _16247__$1 = this;return (new cljs.core.async.t16245(self__.flag,self__.alt_flag,meta16246__$1));
});})(flag))
;
cljs.core.async.__GT_t16245 = ((function (flag){
return (function __GT_t16245(flag__$1,alt_flag__$1,meta16246){return (new cljs.core.async.t16245(flag__$1,alt_flag__$1,meta16246));
});})(flag))
;
}
return (new cljs.core.async.t16245(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16251 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16251 = (function (cb,flag,alt_handler,meta16252){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16252 = meta16252;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16251.cljs$lang$type = true;
cljs.core.async.t16251.cljs$lang$ctorStr = "cljs.core.async/t16251";
cljs.core.async.t16251.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t16251");
});
cljs.core.async.t16251.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16251.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16251.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16253){var self__ = this;
var _16253__$1 = this;return self__.meta16252;
});
cljs.core.async.t16251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16253,meta16252__$1){var self__ = this;
var _16253__$1 = this;return (new cljs.core.async.t16251(self__.cb,self__.flag,self__.alt_handler,meta16252__$1));
});
cljs.core.async.__GT_t16251 = (function __GT_t16251(cb__$1,flag__$1,alt_handler__$1,meta16252){return (new cljs.core.async.t16251(cb__$1,flag__$1,alt_handler__$1,meta16252));
});
}
return (new cljs.core.async.t16251(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16254_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16254_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16255_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16255_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3478__auto__ = wport;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__16256 = (i + 1);
i = G__16256;
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
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3466__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3466__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3466__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__16257){var map__16259 = p__16257;var map__16259__$1 = ((cljs.core.seq_QMARK_.call(null,map__16259))?cljs.core.apply.call(null,cljs.core.hash_map,map__16259):map__16259);var opts = map__16259__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__16257 = null;if (arguments.length > 1) {
  p__16257 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16257);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16260){
var ports = cljs.core.first(arglist__16260);
var p__16257 = cljs.core.rest(arglist__16260);
return alts_BANG___delegate(ports,p__16257);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16268 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16268 = (function (ch,f,map_LT_,meta16269){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16269 = meta16269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16268.cljs$lang$type = true;
cljs.core.async.t16268.cljs$lang$ctorStr = "cljs.core.async/t16268";
cljs.core.async.t16268.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t16268");
});
cljs.core.async.t16268.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16268.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t16268.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16268.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t16271 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16271 = (function (fn1,_,meta16269,ch,f,map_LT_,meta16272){
this.fn1 = fn1;
this._ = _;
this.meta16269 = meta16269;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16272 = meta16272;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16271.cljs$lang$type = true;
cljs.core.async.t16271.cljs$lang$ctorStr = "cljs.core.async/t16271";
cljs.core.async.t16271.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t16271");
});})(___$1))
;
cljs.core.async.t16271.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16271.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16271.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16271.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__16261_SHARP_){return f1.call(null,(((p1__16261_SHARP_ == null))?null:self__.f.call(null,p1__16261_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t16271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16273){var self__ = this;
var _16273__$1 = this;return self__.meta16272;
});})(___$1))
;
cljs.core.async.t16271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16273,meta16272__$1){var self__ = this;
var _16273__$1 = this;return (new cljs.core.async.t16271(self__.fn1,self__._,self__.meta16269,self__.ch,self__.f,self__.map_LT_,meta16272__$1));
});})(___$1))
;
cljs.core.async.__GT_t16271 = ((function (___$1){
return (function __GT_t16271(fn1__$1,___$2,meta16269__$1,ch__$2,f__$2,map_LT___$2,meta16272){return (new cljs.core.async.t16271(fn1__$1,___$2,meta16269__$1,ch__$2,f__$2,map_LT___$2,meta16272));
});})(___$1))
;
}
return (new cljs.core.async.t16271(fn1,___$1,self__.meta16269,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3466__auto__ = ret;if(cljs.core.truth_(and__3466__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3466__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t16268.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16268.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16268.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t16268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16270){var self__ = this;
var _16270__$1 = this;return self__.meta16269;
});
cljs.core.async.t16268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16270,meta16269__$1){var self__ = this;
var _16270__$1 = this;return (new cljs.core.async.t16268(self__.ch,self__.f,self__.map_LT_,meta16269__$1));
});
cljs.core.async.__GT_t16268 = (function __GT_t16268(ch__$1,f__$1,map_LT___$1,meta16269){return (new cljs.core.async.t16268(ch__$1,f__$1,map_LT___$1,meta16269));
});
}
return (new cljs.core.async.t16268(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16277 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16277 = (function (ch,f,map_GT_,meta16278){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16278 = meta16278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16277.cljs$lang$type = true;
cljs.core.async.t16277.cljs$lang$ctorStr = "cljs.core.async/t16277";
cljs.core.async.t16277.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t16277");
});
cljs.core.async.t16277.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16277.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t16277.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16277.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16277.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16277.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16279){var self__ = this;
var _16279__$1 = this;return self__.meta16278;
});
cljs.core.async.t16277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16279,meta16278__$1){var self__ = this;
var _16279__$1 = this;return (new cljs.core.async.t16277(self__.ch,self__.f,self__.map_GT_,meta16278__$1));
});
cljs.core.async.__GT_t16277 = (function __GT_t16277(ch__$1,f__$1,map_GT___$1,meta16278){return (new cljs.core.async.t16277(ch__$1,f__$1,map_GT___$1,meta16278));
});
}
return (new cljs.core.async.t16277(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16283 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16283 = (function (ch,p,filter_GT_,meta16284){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16284 = meta16284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16283.cljs$lang$type = true;
cljs.core.async.t16283.cljs$lang$ctorStr = "cljs.core.async/t16283";
cljs.core.async.t16283.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t16283");
});
cljs.core.async.t16283.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16283.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t16283.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16283.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16283.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16283.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16283.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t16283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16285){var self__ = this;
var _16285__$1 = this;return self__.meta16284;
});
cljs.core.async.t16283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16285,meta16284__$1){var self__ = this;
var _16285__$1 = this;return (new cljs.core.async.t16283(self__.ch,self__.p,self__.filter_GT_,meta16284__$1));
});
cljs.core.async.__GT_t16283 = (function __GT_t16283(ch__$1,p__$1,filter_GT___$1,meta16284){return (new cljs.core.async.t16283(ch__$1,p__$1,filter_GT___$1,meta16284));
});
}
return (new cljs.core.async.t16283(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5635__auto___16368 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___16368,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___16368,out){
return (function (state_16347){var state_val_16348 = (state_16347[1]);if((state_val_16348 === 1))
{var state_16347__$1 = state_16347;var statearr_16349_16369 = state_16347__$1;(statearr_16349_16369[2] = null);
(statearr_16349_16369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16348 === 2))
{var state_16347__$1 = state_16347;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16347__$1,4,ch);
} else
{if((state_val_16348 === 3))
{var inst_16345 = (state_16347[2]);var state_16347__$1 = state_16347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16347__$1,inst_16345);
} else
{if((state_val_16348 === 4))
{var inst_16329 = (state_16347[7]);var inst_16329__$1 = (state_16347[2]);var inst_16330 = (inst_16329__$1 == null);var state_16347__$1 = (function (){var statearr_16350 = state_16347;(statearr_16350[7] = inst_16329__$1);
return statearr_16350;
})();if(cljs.core.truth_(inst_16330))
{var statearr_16351_16370 = state_16347__$1;(statearr_16351_16370[1] = 5);
} else
{var statearr_16352_16371 = state_16347__$1;(statearr_16352_16371[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16348 === 5))
{var inst_16332 = cljs.core.async.close_BANG_.call(null,out);var state_16347__$1 = state_16347;var statearr_16353_16372 = state_16347__$1;(statearr_16353_16372[2] = inst_16332);
(statearr_16353_16372[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16348 === 6))
{var inst_16329 = (state_16347[7]);var inst_16334 = p.call(null,inst_16329);var state_16347__$1 = state_16347;if(cljs.core.truth_(inst_16334))
{var statearr_16354_16373 = state_16347__$1;(statearr_16354_16373[1] = 8);
} else
{var statearr_16355_16374 = state_16347__$1;(statearr_16355_16374[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16348 === 7))
{var inst_16343 = (state_16347[2]);var state_16347__$1 = state_16347;var statearr_16356_16375 = state_16347__$1;(statearr_16356_16375[2] = inst_16343);
(statearr_16356_16375[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16348 === 8))
{var inst_16329 = (state_16347[7]);var state_16347__$1 = state_16347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16347__$1,11,out,inst_16329);
} else
{if((state_val_16348 === 9))
{var state_16347__$1 = state_16347;var statearr_16357_16376 = state_16347__$1;(statearr_16357_16376[2] = null);
(statearr_16357_16376[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16348 === 10))
{var inst_16340 = (state_16347[2]);var state_16347__$1 = (function (){var statearr_16358 = state_16347;(statearr_16358[8] = inst_16340);
return statearr_16358;
})();var statearr_16359_16377 = state_16347__$1;(statearr_16359_16377[2] = null);
(statearr_16359_16377[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16348 === 11))
{var inst_16337 = (state_16347[2]);var state_16347__$1 = state_16347;var statearr_16360_16378 = state_16347__$1;(statearr_16360_16378[2] = inst_16337);
(statearr_16360_16378[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5635__auto___16368,out))
;return ((function (switch__5620__auto__,c__5635__auto___16368,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_16364 = [null,null,null,null,null,null,null,null,null];(statearr_16364[0] = state_machine__5621__auto__);
(statearr_16364[1] = 1);
return statearr_16364;
});
var state_machine__5621__auto____1 = (function (state_16347){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_16347);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e16365){if((e16365 instanceof Object))
{var ex__5624__auto__ = e16365;var statearr_16366_16379 = state_16347;(statearr_16366_16379[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16347);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16365;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16380 = state_16347;
state_16347 = G__16380;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_16347){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_16347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___16368,out))
})();var state__5637__auto__ = (function (){var statearr_16367 = f__5636__auto__.call(null);(statearr_16367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___16368);
return statearr_16367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___16368,out))
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5635__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto__){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto__){
return (function (state_16546){var state_val_16547 = (state_16546[1]);if((state_val_16547 === 1))
{var state_16546__$1 = state_16546;var statearr_16548_16589 = state_16546__$1;(statearr_16548_16589[2] = null);
(statearr_16548_16589[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 2))
{var state_16546__$1 = state_16546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16546__$1,4,in$);
} else
{if((state_val_16547 === 3))
{var inst_16544 = (state_16546[2]);var state_16546__$1 = state_16546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16546__$1,inst_16544);
} else
{if((state_val_16547 === 4))
{var inst_16487 = (state_16546[7]);var inst_16487__$1 = (state_16546[2]);var inst_16488 = (inst_16487__$1 == null);var state_16546__$1 = (function (){var statearr_16549 = state_16546;(statearr_16549[7] = inst_16487__$1);
return statearr_16549;
})();if(cljs.core.truth_(inst_16488))
{var statearr_16550_16590 = state_16546__$1;(statearr_16550_16590[1] = 5);
} else
{var statearr_16551_16591 = state_16546__$1;(statearr_16551_16591[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 5))
{var inst_16490 = cljs.core.async.close_BANG_.call(null,out);var state_16546__$1 = state_16546;var statearr_16552_16592 = state_16546__$1;(statearr_16552_16592[2] = inst_16490);
(statearr_16552_16592[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 6))
{var inst_16487 = (state_16546[7]);var inst_16496 = f.call(null,inst_16487);var inst_16497 = cljs.core.seq.call(null,inst_16496);var inst_16498 = inst_16497;var inst_16499 = null;var inst_16500 = 0;var inst_16501 = 0;var state_16546__$1 = (function (){var statearr_16553 = state_16546;(statearr_16553[8] = inst_16500);
(statearr_16553[9] = inst_16501);
(statearr_16553[10] = inst_16499);
(statearr_16553[11] = inst_16498);
return statearr_16553;
})();var statearr_16554_16593 = state_16546__$1;(statearr_16554_16593[2] = null);
(statearr_16554_16593[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 7))
{var inst_16542 = (state_16546[2]);var state_16546__$1 = state_16546;var statearr_16555_16594 = state_16546__$1;(statearr_16555_16594[2] = inst_16542);
(statearr_16555_16594[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 8))
{var inst_16500 = (state_16546[8]);var inst_16501 = (state_16546[9]);var inst_16503 = (inst_16501 < inst_16500);var inst_16504 = inst_16503;var state_16546__$1 = state_16546;if(cljs.core.truth_(inst_16504))
{var statearr_16556_16595 = state_16546__$1;(statearr_16556_16595[1] = 10);
} else
{var statearr_16557_16596 = state_16546__$1;(statearr_16557_16596[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 9))
{var inst_16534 = (state_16546[2]);var inst_16535 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_16546__$1 = (function (){var statearr_16558 = state_16546;(statearr_16558[12] = inst_16534);
return statearr_16558;
})();if(cljs.core.truth_(inst_16535))
{var statearr_16559_16597 = state_16546__$1;(statearr_16559_16597[1] = 21);
} else
{var statearr_16560_16598 = state_16546__$1;(statearr_16560_16598[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 10))
{var inst_16501 = (state_16546[9]);var inst_16499 = (state_16546[10]);var inst_16506 = cljs.core._nth.call(null,inst_16499,inst_16501);var state_16546__$1 = state_16546;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16546__$1,13,out,inst_16506);
} else
{if((state_val_16547 === 11))
{var inst_16512 = (state_16546[13]);var inst_16498 = (state_16546[11]);var inst_16512__$1 = cljs.core.seq.call(null,inst_16498);var state_16546__$1 = (function (){var statearr_16564 = state_16546;(statearr_16564[13] = inst_16512__$1);
return statearr_16564;
})();if(inst_16512__$1)
{var statearr_16565_16599 = state_16546__$1;(statearr_16565_16599[1] = 14);
} else
{var statearr_16566_16600 = state_16546__$1;(statearr_16566_16600[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 12))
{var inst_16532 = (state_16546[2]);var state_16546__$1 = state_16546;var statearr_16567_16601 = state_16546__$1;(statearr_16567_16601[2] = inst_16532);
(statearr_16567_16601[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 13))
{var inst_16500 = (state_16546[8]);var inst_16501 = (state_16546[9]);var inst_16499 = (state_16546[10]);var inst_16498 = (state_16546[11]);var inst_16508 = (state_16546[2]);var inst_16509 = (inst_16501 + 1);var tmp16561 = inst_16500;var tmp16562 = inst_16499;var tmp16563 = inst_16498;var inst_16498__$1 = tmp16563;var inst_16499__$1 = tmp16562;var inst_16500__$1 = tmp16561;var inst_16501__$1 = inst_16509;var state_16546__$1 = (function (){var statearr_16568 = state_16546;(statearr_16568[8] = inst_16500__$1);
(statearr_16568[14] = inst_16508);
(statearr_16568[9] = inst_16501__$1);
(statearr_16568[10] = inst_16499__$1);
(statearr_16568[11] = inst_16498__$1);
return statearr_16568;
})();var statearr_16569_16602 = state_16546__$1;(statearr_16569_16602[2] = null);
(statearr_16569_16602[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 14))
{var inst_16512 = (state_16546[13]);var inst_16514 = cljs.core.chunked_seq_QMARK_.call(null,inst_16512);var state_16546__$1 = state_16546;if(inst_16514)
{var statearr_16570_16603 = state_16546__$1;(statearr_16570_16603[1] = 17);
} else
{var statearr_16571_16604 = state_16546__$1;(statearr_16571_16604[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 15))
{var state_16546__$1 = state_16546;var statearr_16572_16605 = state_16546__$1;(statearr_16572_16605[2] = null);
(statearr_16572_16605[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 16))
{var inst_16530 = (state_16546[2]);var state_16546__$1 = state_16546;var statearr_16573_16606 = state_16546__$1;(statearr_16573_16606[2] = inst_16530);
(statearr_16573_16606[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 17))
{var inst_16512 = (state_16546[13]);var inst_16516 = cljs.core.chunk_first.call(null,inst_16512);var inst_16517 = cljs.core.chunk_rest.call(null,inst_16512);var inst_16518 = cljs.core.count.call(null,inst_16516);var inst_16498 = inst_16517;var inst_16499 = inst_16516;var inst_16500 = inst_16518;var inst_16501 = 0;var state_16546__$1 = (function (){var statearr_16574 = state_16546;(statearr_16574[8] = inst_16500);
(statearr_16574[9] = inst_16501);
(statearr_16574[10] = inst_16499);
(statearr_16574[11] = inst_16498);
return statearr_16574;
})();var statearr_16575_16607 = state_16546__$1;(statearr_16575_16607[2] = null);
(statearr_16575_16607[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 18))
{var inst_16512 = (state_16546[13]);var inst_16521 = cljs.core.first.call(null,inst_16512);var state_16546__$1 = state_16546;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16546__$1,20,out,inst_16521);
} else
{if((state_val_16547 === 19))
{var inst_16527 = (state_16546[2]);var state_16546__$1 = state_16546;var statearr_16576_16608 = state_16546__$1;(statearr_16576_16608[2] = inst_16527);
(statearr_16576_16608[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 20))
{var inst_16512 = (state_16546[13]);var inst_16523 = (state_16546[2]);var inst_16524 = cljs.core.next.call(null,inst_16512);var inst_16498 = inst_16524;var inst_16499 = null;var inst_16500 = 0;var inst_16501 = 0;var state_16546__$1 = (function (){var statearr_16577 = state_16546;(statearr_16577[8] = inst_16500);
(statearr_16577[9] = inst_16501);
(statearr_16577[10] = inst_16499);
(statearr_16577[11] = inst_16498);
(statearr_16577[15] = inst_16523);
return statearr_16577;
})();var statearr_16578_16609 = state_16546__$1;(statearr_16578_16609[2] = null);
(statearr_16578_16609[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 21))
{var state_16546__$1 = state_16546;var statearr_16579_16610 = state_16546__$1;(statearr_16579_16610[2] = null);
(statearr_16579_16610[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 22))
{var state_16546__$1 = state_16546;var statearr_16580_16611 = state_16546__$1;(statearr_16580_16611[2] = null);
(statearr_16580_16611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16547 === 23))
{var inst_16540 = (state_16546[2]);var state_16546__$1 = state_16546;var statearr_16581_16612 = state_16546__$1;(statearr_16581_16612[2] = inst_16540);
(statearr_16581_16612[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5621__auto____0 = (function (){var statearr_16585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16585[0] = state_machine__5621__auto__);
(statearr_16585[1] = 1);
return statearr_16585;
});
var state_machine__5621__auto____1 = (function (state_16546){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_16546);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e16586){if((e16586 instanceof Object))
{var ex__5624__auto__ = e16586;var statearr_16587_16613 = state_16546;(statearr_16587_16613[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16546);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16586;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16614 = state_16546;
state_16546 = G__16614;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_16546){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_16546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto__))
})();var state__5637__auto__ = (function (){var statearr_16588 = f__5636__auto__.call(null);(statearr_16588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto__);
return statearr_16588;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5635__auto___16709 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___16709){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___16709){
return (function (state_16685){var state_val_16686 = (state_16685[1]);if((state_val_16686 === 1))
{var state_16685__$1 = state_16685;var statearr_16687_16710 = state_16685__$1;(statearr_16687_16710[2] = null);
(statearr_16687_16710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 2))
{var state_16685__$1 = state_16685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16685__$1,4,from);
} else
{if((state_val_16686 === 3))
{var inst_16683 = (state_16685[2]);var state_16685__$1 = state_16685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16685__$1,inst_16683);
} else
{if((state_val_16686 === 4))
{var inst_16664 = (state_16685[7]);var inst_16664__$1 = (state_16685[2]);var inst_16665 = (inst_16664__$1 == null);var state_16685__$1 = (function (){var statearr_16688 = state_16685;(statearr_16688[7] = inst_16664__$1);
return statearr_16688;
})();if(cljs.core.truth_(inst_16665))
{var statearr_16689_16711 = state_16685__$1;(statearr_16689_16711[1] = 5);
} else
{var statearr_16690_16712 = state_16685__$1;(statearr_16690_16712[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 5))
{var state_16685__$1 = state_16685;if(cljs.core.truth_(close_QMARK_))
{var statearr_16691_16713 = state_16685__$1;(statearr_16691_16713[1] = 8);
} else
{var statearr_16692_16714 = state_16685__$1;(statearr_16692_16714[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 6))
{var inst_16664 = (state_16685[7]);var state_16685__$1 = state_16685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16685__$1,11,to,inst_16664);
} else
{if((state_val_16686 === 7))
{var inst_16681 = (state_16685[2]);var state_16685__$1 = state_16685;var statearr_16693_16715 = state_16685__$1;(statearr_16693_16715[2] = inst_16681);
(statearr_16693_16715[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 8))
{var inst_16668 = cljs.core.async.close_BANG_.call(null,to);var state_16685__$1 = state_16685;var statearr_16694_16716 = state_16685__$1;(statearr_16694_16716[2] = inst_16668);
(statearr_16694_16716[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 9))
{var state_16685__$1 = state_16685;var statearr_16695_16717 = state_16685__$1;(statearr_16695_16717[2] = null);
(statearr_16695_16717[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 10))
{var inst_16671 = (state_16685[2]);var state_16685__$1 = state_16685;var statearr_16696_16718 = state_16685__$1;(statearr_16696_16718[2] = inst_16671);
(statearr_16696_16718[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 11))
{var inst_16674 = (state_16685[2]);var state_16685__$1 = state_16685;if(cljs.core.truth_(inst_16674))
{var statearr_16697_16719 = state_16685__$1;(statearr_16697_16719[1] = 12);
} else
{var statearr_16698_16720 = state_16685__$1;(statearr_16698_16720[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 12))
{var state_16685__$1 = state_16685;var statearr_16699_16721 = state_16685__$1;(statearr_16699_16721[2] = null);
(statearr_16699_16721[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 13))
{var state_16685__$1 = state_16685;var statearr_16700_16722 = state_16685__$1;(statearr_16700_16722[2] = null);
(statearr_16700_16722[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16686 === 14))
{var inst_16679 = (state_16685[2]);var state_16685__$1 = state_16685;var statearr_16701_16723 = state_16685__$1;(statearr_16701_16723[2] = inst_16679);
(statearr_16701_16723[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5635__auto___16709))
;return ((function (switch__5620__auto__,c__5635__auto___16709){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_16705 = [null,null,null,null,null,null,null,null];(statearr_16705[0] = state_machine__5621__auto__);
(statearr_16705[1] = 1);
return statearr_16705;
});
var state_machine__5621__auto____1 = (function (state_16685){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_16685);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e16706){if((e16706 instanceof Object))
{var ex__5624__auto__ = e16706;var statearr_16707_16724 = state_16685;(statearr_16707_16724[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16685);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16725 = state_16685;
state_16685 = G__16725;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_16685){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_16685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___16709))
})();var state__5637__auto__ = (function (){var statearr_16708 = f__5636__auto__.call(null);(statearr_16708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___16709);
return statearr_16708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___16709))
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5635__auto___16826 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___16826,tc,fc){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___16826,tc,fc){
return (function (state_16801){var state_val_16802 = (state_16801[1]);if((state_val_16802 === 1))
{var state_16801__$1 = state_16801;var statearr_16803_16827 = state_16801__$1;(statearr_16803_16827[2] = null);
(statearr_16803_16827[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16802 === 2))
{var state_16801__$1 = state_16801;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16801__$1,4,ch);
} else
{if((state_val_16802 === 3))
{var inst_16799 = (state_16801[2]);var state_16801__$1 = state_16801;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16801__$1,inst_16799);
} else
{if((state_val_16802 === 4))
{var inst_16778 = (state_16801[7]);var inst_16778__$1 = (state_16801[2]);var inst_16779 = (inst_16778__$1 == null);var state_16801__$1 = (function (){var statearr_16804 = state_16801;(statearr_16804[7] = inst_16778__$1);
return statearr_16804;
})();if(cljs.core.truth_(inst_16779))
{var statearr_16805_16828 = state_16801__$1;(statearr_16805_16828[1] = 5);
} else
{var statearr_16806_16829 = state_16801__$1;(statearr_16806_16829[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16802 === 5))
{var inst_16781 = cljs.core.async.close_BANG_.call(null,tc);var inst_16782 = cljs.core.async.close_BANG_.call(null,fc);var state_16801__$1 = (function (){var statearr_16807 = state_16801;(statearr_16807[8] = inst_16781);
return statearr_16807;
})();var statearr_16808_16830 = state_16801__$1;(statearr_16808_16830[2] = inst_16782);
(statearr_16808_16830[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16802 === 6))
{var inst_16778 = (state_16801[7]);var inst_16784 = p.call(null,inst_16778);var state_16801__$1 = state_16801;if(cljs.core.truth_(inst_16784))
{var statearr_16809_16831 = state_16801__$1;(statearr_16809_16831[1] = 9);
} else
{var statearr_16810_16832 = state_16801__$1;(statearr_16810_16832[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16802 === 7))
{var inst_16797 = (state_16801[2]);var state_16801__$1 = state_16801;var statearr_16811_16833 = state_16801__$1;(statearr_16811_16833[2] = inst_16797);
(statearr_16811_16833[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16802 === 8))
{var inst_16790 = (state_16801[2]);var state_16801__$1 = state_16801;if(cljs.core.truth_(inst_16790))
{var statearr_16812_16834 = state_16801__$1;(statearr_16812_16834[1] = 12);
} else
{var statearr_16813_16835 = state_16801__$1;(statearr_16813_16835[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16802 === 9))
{var state_16801__$1 = state_16801;var statearr_16814_16836 = state_16801__$1;(statearr_16814_16836[2] = tc);
(statearr_16814_16836[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16802 === 10))
{var state_16801__$1 = state_16801;var statearr_16815_16837 = state_16801__$1;(statearr_16815_16837[2] = fc);
(statearr_16815_16837[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16802 === 11))
{var inst_16778 = (state_16801[7]);var inst_16788 = (state_16801[2]);var state_16801__$1 = state_16801;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16801__$1,8,inst_16788,inst_16778);
} else
{if((state_val_16802 === 12))
{var state_16801__$1 = state_16801;var statearr_16816_16838 = state_16801__$1;(statearr_16816_16838[2] = null);
(statearr_16816_16838[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16802 === 13))
{var state_16801__$1 = state_16801;var statearr_16817_16839 = state_16801__$1;(statearr_16817_16839[2] = null);
(statearr_16817_16839[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16802 === 14))
{var inst_16795 = (state_16801[2]);var state_16801__$1 = state_16801;var statearr_16818_16840 = state_16801__$1;(statearr_16818_16840[2] = inst_16795);
(statearr_16818_16840[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5635__auto___16826,tc,fc))
;return ((function (switch__5620__auto__,c__5635__auto___16826,tc,fc){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_16822 = [null,null,null,null,null,null,null,null,null];(statearr_16822[0] = state_machine__5621__auto__);
(statearr_16822[1] = 1);
return statearr_16822;
});
var state_machine__5621__auto____1 = (function (state_16801){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_16801);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e16823){if((e16823 instanceof Object))
{var ex__5624__auto__ = e16823;var statearr_16824_16841 = state_16801;(statearr_16824_16841[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16801);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16842 = state_16801;
state_16801 = G__16842;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_16801){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_16801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___16826,tc,fc))
})();var state__5637__auto__ = (function (){var statearr_16825 = f__5636__auto__.call(null);(statearr_16825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___16826);
return statearr_16825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___16826,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5635__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto__){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto__){
return (function (state_16889){var state_val_16890 = (state_16889[1]);if((state_val_16890 === 7))
{var inst_16885 = (state_16889[2]);var state_16889__$1 = state_16889;var statearr_16891_16907 = state_16889__$1;(statearr_16891_16907[2] = inst_16885);
(statearr_16891_16907[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 6))
{var inst_16878 = (state_16889[7]);var inst_16875 = (state_16889[8]);var inst_16882 = f.call(null,inst_16875,inst_16878);var inst_16875__$1 = inst_16882;var state_16889__$1 = (function (){var statearr_16892 = state_16889;(statearr_16892[8] = inst_16875__$1);
return statearr_16892;
})();var statearr_16893_16908 = state_16889__$1;(statearr_16893_16908[2] = null);
(statearr_16893_16908[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 5))
{var inst_16875 = (state_16889[8]);var state_16889__$1 = state_16889;var statearr_16894_16909 = state_16889__$1;(statearr_16894_16909[2] = inst_16875);
(statearr_16894_16909[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 4))
{var inst_16878 = (state_16889[7]);var inst_16878__$1 = (state_16889[2]);var inst_16879 = (inst_16878__$1 == null);var state_16889__$1 = (function (){var statearr_16895 = state_16889;(statearr_16895[7] = inst_16878__$1);
return statearr_16895;
})();if(cljs.core.truth_(inst_16879))
{var statearr_16896_16910 = state_16889__$1;(statearr_16896_16910[1] = 5);
} else
{var statearr_16897_16911 = state_16889__$1;(statearr_16897_16911[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16890 === 3))
{var inst_16887 = (state_16889[2]);var state_16889__$1 = state_16889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16889__$1,inst_16887);
} else
{if((state_val_16890 === 2))
{var state_16889__$1 = state_16889;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16889__$1,4,ch);
} else
{if((state_val_16890 === 1))
{var inst_16875 = init;var state_16889__$1 = (function (){var statearr_16898 = state_16889;(statearr_16898[8] = inst_16875);
return statearr_16898;
})();var statearr_16899_16912 = state_16889__$1;(statearr_16899_16912[2] = null);
(statearr_16899_16912[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5621__auto____0 = (function (){var statearr_16903 = [null,null,null,null,null,null,null,null,null];(statearr_16903[0] = state_machine__5621__auto__);
(statearr_16903[1] = 1);
return statearr_16903;
});
var state_machine__5621__auto____1 = (function (state_16889){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_16889);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e16904){if((e16904 instanceof Object))
{var ex__5624__auto__ = e16904;var statearr_16905_16913 = state_16889;(statearr_16905_16913[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16889);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16904;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16914 = state_16889;
state_16889 = G__16914;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_16889){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_16889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto__))
})();var state__5637__auto__ = (function (){var statearr_16906 = f__5636__auto__.call(null);(statearr_16906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto__);
return statearr_16906;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5635__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto__){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto__){
return (function (state_16988){var state_val_16989 = (state_16988[1]);if((state_val_16989 === 1))
{var inst_16964 = cljs.core.seq.call(null,coll);var inst_16965 = inst_16964;var state_16988__$1 = (function (){var statearr_16990 = state_16988;(statearr_16990[7] = inst_16965);
return statearr_16990;
})();var statearr_16991_17013 = state_16988__$1;(statearr_16991_17013[2] = null);
(statearr_16991_17013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 2))
{var inst_16965 = (state_16988[7]);var state_16988__$1 = state_16988;if(cljs.core.truth_(inst_16965))
{var statearr_16992_17014 = state_16988__$1;(statearr_16992_17014[1] = 4);
} else
{var statearr_16993_17015 = state_16988__$1;(statearr_16993_17015[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 3))
{var inst_16986 = (state_16988[2]);var state_16988__$1 = state_16988;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16988__$1,inst_16986);
} else
{if((state_val_16989 === 4))
{var inst_16965 = (state_16988[7]);var inst_16968 = cljs.core.first.call(null,inst_16965);var state_16988__$1 = state_16988;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16988__$1,7,ch,inst_16968);
} else
{if((state_val_16989 === 5))
{var inst_16965 = (state_16988[7]);var state_16988__$1 = state_16988;var statearr_16994_17016 = state_16988__$1;(statearr_16994_17016[2] = inst_16965);
(statearr_16994_17016[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 6))
{var inst_16973 = (state_16988[2]);var state_16988__$1 = state_16988;if(cljs.core.truth_(inst_16973))
{var statearr_16995_17017 = state_16988__$1;(statearr_16995_17017[1] = 8);
} else
{var statearr_16996_17018 = state_16988__$1;(statearr_16996_17018[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 7))
{var inst_16970 = (state_16988[2]);var state_16988__$1 = state_16988;var statearr_16997_17019 = state_16988__$1;(statearr_16997_17019[2] = inst_16970);
(statearr_16997_17019[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 8))
{var inst_16965 = (state_16988[7]);var inst_16975 = cljs.core.next.call(null,inst_16965);var inst_16965__$1 = inst_16975;var state_16988__$1 = (function (){var statearr_16998 = state_16988;(statearr_16998[7] = inst_16965__$1);
return statearr_16998;
})();var statearr_16999_17020 = state_16988__$1;(statearr_16999_17020[2] = null);
(statearr_16999_17020[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 9))
{var state_16988__$1 = state_16988;if(cljs.core.truth_(close_QMARK_))
{var statearr_17000_17021 = state_16988__$1;(statearr_17000_17021[1] = 11);
} else
{var statearr_17001_17022 = state_16988__$1;(statearr_17001_17022[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 10))
{var inst_16984 = (state_16988[2]);var state_16988__$1 = state_16988;var statearr_17002_17023 = state_16988__$1;(statearr_17002_17023[2] = inst_16984);
(statearr_17002_17023[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 11))
{var inst_16979 = cljs.core.async.close_BANG_.call(null,ch);var state_16988__$1 = state_16988;var statearr_17003_17024 = state_16988__$1;(statearr_17003_17024[2] = inst_16979);
(statearr_17003_17024[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 12))
{var state_16988__$1 = state_16988;var statearr_17004_17025 = state_16988__$1;(statearr_17004_17025[2] = null);
(statearr_17004_17025[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16989 === 13))
{var inst_16982 = (state_16988[2]);var state_16988__$1 = state_16988;var statearr_17005_17026 = state_16988__$1;(statearr_17005_17026[2] = inst_16982);
(statearr_17005_17026[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5621__auto____0 = (function (){var statearr_17009 = [null,null,null,null,null,null,null,null];(statearr_17009[0] = state_machine__5621__auto__);
(statearr_17009[1] = 1);
return statearr_17009;
});
var state_machine__5621__auto____1 = (function (state_16988){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_16988);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e17010){if((e17010 instanceof Object))
{var ex__5624__auto__ = e17010;var statearr_17011_17027 = state_16988;(statearr_17011_17027[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16988);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17028 = state_16988;
state_16988 = G__17028;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_16988){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_16988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto__))
})();var state__5637__auto__ = (function (){var statearr_17012 = f__5636__auto__.call(null);(statearr_17012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto__);
return statearr_17012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj17030 = {};return obj17030;
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
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj17032 = {};return obj17032;
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
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17254 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17254 = (function (cs,ch,mult,meta17255){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17255 = meta17255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17254.cljs$lang$type = true;
cljs.core.async.t17254.cljs$lang$ctorStr = "cljs.core.async/t17254";
cljs.core.async.t17254.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t17254");
});})(cs))
;
cljs.core.async.t17254.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17254.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17254.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17254.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17254.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17254.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17254.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17256){var self__ = this;
var _17256__$1 = this;return self__.meta17255;
});})(cs))
;
cljs.core.async.t17254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17256,meta17255__$1){var self__ = this;
var _17256__$1 = this;return (new cljs.core.async.t17254(self__.cs,self__.ch,self__.mult,meta17255__$1));
});})(cs))
;
cljs.core.async.__GT_t17254 = ((function (cs){
return (function __GT_t17254(cs__$1,ch__$1,mult__$1,meta17255){return (new cljs.core.async.t17254(cs__$1,ch__$1,mult__$1,meta17255));
});})(cs))
;
}
return (new cljs.core.async.t17254(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5635__auto___17475 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___17475,cs,m,dchan,dctr,done){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___17475,cs,m,dchan,dctr,done){
return (function (state_17387){var state_val_17388 = (state_17387[1]);if((state_val_17388 === 32))
{var inst_17329 = (state_17387[7]);var inst_17328 = (state_17387[8]);var inst_17327 = (state_17387[9]);var inst_17330 = (state_17387[10]);var inst_17342 = (state_17387[2]);var inst_17343 = (inst_17330 + 1);var tmp17389 = inst_17329;var tmp17390 = inst_17328;var tmp17391 = inst_17327;var inst_17327__$1 = tmp17391;var inst_17328__$1 = tmp17390;var inst_17329__$1 = tmp17389;var inst_17330__$1 = inst_17343;var state_17387__$1 = (function (){var statearr_17392 = state_17387;(statearr_17392[7] = inst_17329__$1);
(statearr_17392[8] = inst_17328__$1);
(statearr_17392[9] = inst_17327__$1);
(statearr_17392[10] = inst_17330__$1);
(statearr_17392[11] = inst_17342);
return statearr_17392;
})();var statearr_17393_17476 = state_17387__$1;(statearr_17393_17476[2] = null);
(statearr_17393_17476[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 1))
{var state_17387__$1 = state_17387;var statearr_17394_17477 = state_17387__$1;(statearr_17394_17477[2] = null);
(statearr_17394_17477[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 33))
{var inst_17346 = (state_17387[12]);var inst_17348 = cljs.core.chunked_seq_QMARK_.call(null,inst_17346);var state_17387__$1 = state_17387;if(inst_17348)
{var statearr_17395_17478 = state_17387__$1;(statearr_17395_17478[1] = 36);
} else
{var statearr_17396_17479 = state_17387__$1;(statearr_17396_17479[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 2))
{var state_17387__$1 = state_17387;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17387__$1,4,ch);
} else
{if((state_val_17388 === 34))
{var state_17387__$1 = state_17387;var statearr_17397_17480 = state_17387__$1;(statearr_17397_17480[2] = null);
(statearr_17397_17480[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 3))
{var inst_17385 = (state_17387[2]);var state_17387__$1 = state_17387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17387__$1,inst_17385);
} else
{if((state_val_17388 === 35))
{var inst_17369 = (state_17387[2]);var state_17387__$1 = state_17387;var statearr_17398_17481 = state_17387__$1;(statearr_17398_17481[2] = inst_17369);
(statearr_17398_17481[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 4))
{var inst_17259 = (state_17387[13]);var inst_17259__$1 = (state_17387[2]);var inst_17260 = (inst_17259__$1 == null);var state_17387__$1 = (function (){var statearr_17399 = state_17387;(statearr_17399[13] = inst_17259__$1);
return statearr_17399;
})();if(cljs.core.truth_(inst_17260))
{var statearr_17400_17482 = state_17387__$1;(statearr_17400_17482[1] = 5);
} else
{var statearr_17401_17483 = state_17387__$1;(statearr_17401_17483[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 36))
{var inst_17346 = (state_17387[12]);var inst_17350 = cljs.core.chunk_first.call(null,inst_17346);var inst_17351 = cljs.core.chunk_rest.call(null,inst_17346);var inst_17352 = cljs.core.count.call(null,inst_17350);var inst_17327 = inst_17351;var inst_17328 = inst_17350;var inst_17329 = inst_17352;var inst_17330 = 0;var state_17387__$1 = (function (){var statearr_17402 = state_17387;(statearr_17402[7] = inst_17329);
(statearr_17402[8] = inst_17328);
(statearr_17402[9] = inst_17327);
(statearr_17402[10] = inst_17330);
return statearr_17402;
})();var statearr_17403_17484 = state_17387__$1;(statearr_17403_17484[2] = null);
(statearr_17403_17484[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 5))
{var inst_17266 = cljs.core.deref.call(null,cs);var inst_17267 = cljs.core.seq.call(null,inst_17266);var inst_17268 = inst_17267;var inst_17269 = null;var inst_17270 = 0;var inst_17271 = 0;var state_17387__$1 = (function (){var statearr_17404 = state_17387;(statearr_17404[14] = inst_17269);
(statearr_17404[15] = inst_17270);
(statearr_17404[16] = inst_17271);
(statearr_17404[17] = inst_17268);
return statearr_17404;
})();var statearr_17405_17485 = state_17387__$1;(statearr_17405_17485[2] = null);
(statearr_17405_17485[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 37))
{var inst_17355 = (state_17387[18]);var inst_17259 = (state_17387[13]);var inst_17346 = (state_17387[12]);var inst_17355__$1 = cljs.core.first.call(null,inst_17346);var inst_17356 = cljs.core.async.put_BANG_.call(null,inst_17355__$1,inst_17259,done);var state_17387__$1 = (function (){var statearr_17406 = state_17387;(statearr_17406[18] = inst_17355__$1);
return statearr_17406;
})();if(cljs.core.truth_(inst_17356))
{var statearr_17407_17486 = state_17387__$1;(statearr_17407_17486[1] = 39);
} else
{var statearr_17408_17487 = state_17387__$1;(statearr_17408_17487[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 6))
{var inst_17319 = (state_17387[19]);var inst_17318 = cljs.core.deref.call(null,cs);var inst_17319__$1 = cljs.core.keys.call(null,inst_17318);var inst_17320 = cljs.core.count.call(null,inst_17319__$1);var inst_17321 = cljs.core.reset_BANG_.call(null,dctr,inst_17320);var inst_17326 = cljs.core.seq.call(null,inst_17319__$1);var inst_17327 = inst_17326;var inst_17328 = null;var inst_17329 = 0;var inst_17330 = 0;var state_17387__$1 = (function (){var statearr_17409 = state_17387;(statearr_17409[19] = inst_17319__$1);
(statearr_17409[7] = inst_17329);
(statearr_17409[8] = inst_17328);
(statearr_17409[9] = inst_17327);
(statearr_17409[20] = inst_17321);
(statearr_17409[10] = inst_17330);
return statearr_17409;
})();var statearr_17410_17488 = state_17387__$1;(statearr_17410_17488[2] = null);
(statearr_17410_17488[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 38))
{var inst_17366 = (state_17387[2]);var state_17387__$1 = state_17387;var statearr_17411_17489 = state_17387__$1;(statearr_17411_17489[2] = inst_17366);
(statearr_17411_17489[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 7))
{var inst_17383 = (state_17387[2]);var state_17387__$1 = state_17387;var statearr_17412_17490 = state_17387__$1;(statearr_17412_17490[2] = inst_17383);
(statearr_17412_17490[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 39))
{var state_17387__$1 = state_17387;var statearr_17413_17491 = state_17387__$1;(statearr_17413_17491[2] = null);
(statearr_17413_17491[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 8))
{var inst_17270 = (state_17387[15]);var inst_17271 = (state_17387[16]);var inst_17273 = (inst_17271 < inst_17270);var inst_17274 = inst_17273;var state_17387__$1 = state_17387;if(cljs.core.truth_(inst_17274))
{var statearr_17414_17492 = state_17387__$1;(statearr_17414_17492[1] = 10);
} else
{var statearr_17415_17493 = state_17387__$1;(statearr_17415_17493[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 40))
{var inst_17355 = (state_17387[18]);var inst_17359 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17360 = cljs.core.async.untap_STAR_.call(null,m,inst_17355);var state_17387__$1 = (function (){var statearr_17416 = state_17387;(statearr_17416[21] = inst_17359);
return statearr_17416;
})();var statearr_17417_17494 = state_17387__$1;(statearr_17417_17494[2] = inst_17360);
(statearr_17417_17494[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 9))
{var inst_17316 = (state_17387[2]);var state_17387__$1 = state_17387;var statearr_17418_17495 = state_17387__$1;(statearr_17418_17495[2] = inst_17316);
(statearr_17418_17495[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 41))
{var inst_17346 = (state_17387[12]);var inst_17362 = (state_17387[2]);var inst_17363 = cljs.core.next.call(null,inst_17346);var inst_17327 = inst_17363;var inst_17328 = null;var inst_17329 = 0;var inst_17330 = 0;var state_17387__$1 = (function (){var statearr_17419 = state_17387;(statearr_17419[7] = inst_17329);
(statearr_17419[8] = inst_17328);
(statearr_17419[9] = inst_17327);
(statearr_17419[22] = inst_17362);
(statearr_17419[10] = inst_17330);
return statearr_17419;
})();var statearr_17420_17496 = state_17387__$1;(statearr_17420_17496[2] = null);
(statearr_17420_17496[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 10))
{var inst_17269 = (state_17387[14]);var inst_17271 = (state_17387[16]);var inst_17277 = cljs.core._nth.call(null,inst_17269,inst_17271);var inst_17278 = cljs.core.nth.call(null,inst_17277,0,null);var inst_17279 = cljs.core.nth.call(null,inst_17277,1,null);var state_17387__$1 = (function (){var statearr_17421 = state_17387;(statearr_17421[23] = inst_17278);
return statearr_17421;
})();if(cljs.core.truth_(inst_17279))
{var statearr_17422_17497 = state_17387__$1;(statearr_17422_17497[1] = 13);
} else
{var statearr_17423_17498 = state_17387__$1;(statearr_17423_17498[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 42))
{var state_17387__$1 = state_17387;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17387__$1,45,dchan);
} else
{if((state_val_17388 === 11))
{var inst_17288 = (state_17387[24]);var inst_17268 = (state_17387[17]);var inst_17288__$1 = cljs.core.seq.call(null,inst_17268);var state_17387__$1 = (function (){var statearr_17424 = state_17387;(statearr_17424[24] = inst_17288__$1);
return statearr_17424;
})();if(inst_17288__$1)
{var statearr_17425_17499 = state_17387__$1;(statearr_17425_17499[1] = 16);
} else
{var statearr_17426_17500 = state_17387__$1;(statearr_17426_17500[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 43))
{var state_17387__$1 = state_17387;var statearr_17427_17501 = state_17387__$1;(statearr_17427_17501[2] = null);
(statearr_17427_17501[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 12))
{var inst_17314 = (state_17387[2]);var state_17387__$1 = state_17387;var statearr_17428_17502 = state_17387__$1;(statearr_17428_17502[2] = inst_17314);
(statearr_17428_17502[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 44))
{var inst_17380 = (state_17387[2]);var state_17387__$1 = (function (){var statearr_17429 = state_17387;(statearr_17429[25] = inst_17380);
return statearr_17429;
})();var statearr_17430_17503 = state_17387__$1;(statearr_17430_17503[2] = null);
(statearr_17430_17503[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 13))
{var inst_17278 = (state_17387[23]);var inst_17281 = cljs.core.async.close_BANG_.call(null,inst_17278);var state_17387__$1 = state_17387;var statearr_17431_17504 = state_17387__$1;(statearr_17431_17504[2] = inst_17281);
(statearr_17431_17504[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 45))
{var inst_17377 = (state_17387[2]);var state_17387__$1 = state_17387;var statearr_17435_17505 = state_17387__$1;(statearr_17435_17505[2] = inst_17377);
(statearr_17435_17505[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 14))
{var state_17387__$1 = state_17387;var statearr_17436_17506 = state_17387__$1;(statearr_17436_17506[2] = null);
(statearr_17436_17506[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 15))
{var inst_17269 = (state_17387[14]);var inst_17270 = (state_17387[15]);var inst_17271 = (state_17387[16]);var inst_17268 = (state_17387[17]);var inst_17284 = (state_17387[2]);var inst_17285 = (inst_17271 + 1);var tmp17432 = inst_17269;var tmp17433 = inst_17270;var tmp17434 = inst_17268;var inst_17268__$1 = tmp17434;var inst_17269__$1 = tmp17432;var inst_17270__$1 = tmp17433;var inst_17271__$1 = inst_17285;var state_17387__$1 = (function (){var statearr_17437 = state_17387;(statearr_17437[26] = inst_17284);
(statearr_17437[14] = inst_17269__$1);
(statearr_17437[15] = inst_17270__$1);
(statearr_17437[16] = inst_17271__$1);
(statearr_17437[17] = inst_17268__$1);
return statearr_17437;
})();var statearr_17438_17507 = state_17387__$1;(statearr_17438_17507[2] = null);
(statearr_17438_17507[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 16))
{var inst_17288 = (state_17387[24]);var inst_17290 = cljs.core.chunked_seq_QMARK_.call(null,inst_17288);var state_17387__$1 = state_17387;if(inst_17290)
{var statearr_17439_17508 = state_17387__$1;(statearr_17439_17508[1] = 19);
} else
{var statearr_17440_17509 = state_17387__$1;(statearr_17440_17509[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 17))
{var state_17387__$1 = state_17387;var statearr_17441_17510 = state_17387__$1;(statearr_17441_17510[2] = null);
(statearr_17441_17510[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 18))
{var inst_17312 = (state_17387[2]);var state_17387__$1 = state_17387;var statearr_17442_17511 = state_17387__$1;(statearr_17442_17511[2] = inst_17312);
(statearr_17442_17511[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 19))
{var inst_17288 = (state_17387[24]);var inst_17292 = cljs.core.chunk_first.call(null,inst_17288);var inst_17293 = cljs.core.chunk_rest.call(null,inst_17288);var inst_17294 = cljs.core.count.call(null,inst_17292);var inst_17268 = inst_17293;var inst_17269 = inst_17292;var inst_17270 = inst_17294;var inst_17271 = 0;var state_17387__$1 = (function (){var statearr_17443 = state_17387;(statearr_17443[14] = inst_17269);
(statearr_17443[15] = inst_17270);
(statearr_17443[16] = inst_17271);
(statearr_17443[17] = inst_17268);
return statearr_17443;
})();var statearr_17444_17512 = state_17387__$1;(statearr_17444_17512[2] = null);
(statearr_17444_17512[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 20))
{var inst_17288 = (state_17387[24]);var inst_17298 = cljs.core.first.call(null,inst_17288);var inst_17299 = cljs.core.nth.call(null,inst_17298,0,null);var inst_17300 = cljs.core.nth.call(null,inst_17298,1,null);var state_17387__$1 = (function (){var statearr_17445 = state_17387;(statearr_17445[27] = inst_17299);
return statearr_17445;
})();if(cljs.core.truth_(inst_17300))
{var statearr_17446_17513 = state_17387__$1;(statearr_17446_17513[1] = 22);
} else
{var statearr_17447_17514 = state_17387__$1;(statearr_17447_17514[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 21))
{var inst_17309 = (state_17387[2]);var state_17387__$1 = state_17387;var statearr_17448_17515 = state_17387__$1;(statearr_17448_17515[2] = inst_17309);
(statearr_17448_17515[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 22))
{var inst_17299 = (state_17387[27]);var inst_17302 = cljs.core.async.close_BANG_.call(null,inst_17299);var state_17387__$1 = state_17387;var statearr_17449_17516 = state_17387__$1;(statearr_17449_17516[2] = inst_17302);
(statearr_17449_17516[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 23))
{var state_17387__$1 = state_17387;var statearr_17450_17517 = state_17387__$1;(statearr_17450_17517[2] = null);
(statearr_17450_17517[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 24))
{var inst_17288 = (state_17387[24]);var inst_17305 = (state_17387[2]);var inst_17306 = cljs.core.next.call(null,inst_17288);var inst_17268 = inst_17306;var inst_17269 = null;var inst_17270 = 0;var inst_17271 = 0;var state_17387__$1 = (function (){var statearr_17451 = state_17387;(statearr_17451[28] = inst_17305);
(statearr_17451[14] = inst_17269);
(statearr_17451[15] = inst_17270);
(statearr_17451[16] = inst_17271);
(statearr_17451[17] = inst_17268);
return statearr_17451;
})();var statearr_17452_17518 = state_17387__$1;(statearr_17452_17518[2] = null);
(statearr_17452_17518[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 25))
{var inst_17329 = (state_17387[7]);var inst_17330 = (state_17387[10]);var inst_17332 = (inst_17330 < inst_17329);var inst_17333 = inst_17332;var state_17387__$1 = state_17387;if(cljs.core.truth_(inst_17333))
{var statearr_17453_17519 = state_17387__$1;(statearr_17453_17519[1] = 27);
} else
{var statearr_17454_17520 = state_17387__$1;(statearr_17454_17520[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 26))
{var inst_17319 = (state_17387[19]);var inst_17373 = (state_17387[2]);var inst_17374 = cljs.core.seq.call(null,inst_17319);var state_17387__$1 = (function (){var statearr_17455 = state_17387;(statearr_17455[29] = inst_17373);
return statearr_17455;
})();if(inst_17374)
{var statearr_17456_17521 = state_17387__$1;(statearr_17456_17521[1] = 42);
} else
{var statearr_17457_17522 = state_17387__$1;(statearr_17457_17522[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 27))
{var inst_17328 = (state_17387[8]);var inst_17335 = (state_17387[30]);var inst_17259 = (state_17387[13]);var inst_17330 = (state_17387[10]);var inst_17335__$1 = cljs.core._nth.call(null,inst_17328,inst_17330);var inst_17336 = cljs.core.async.put_BANG_.call(null,inst_17335__$1,inst_17259,done);var state_17387__$1 = (function (){var statearr_17458 = state_17387;(statearr_17458[30] = inst_17335__$1);
return statearr_17458;
})();if(cljs.core.truth_(inst_17336))
{var statearr_17459_17523 = state_17387__$1;(statearr_17459_17523[1] = 30);
} else
{var statearr_17460_17524 = state_17387__$1;(statearr_17460_17524[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 28))
{var inst_17327 = (state_17387[9]);var inst_17346 = (state_17387[12]);var inst_17346__$1 = cljs.core.seq.call(null,inst_17327);var state_17387__$1 = (function (){var statearr_17461 = state_17387;(statearr_17461[12] = inst_17346__$1);
return statearr_17461;
})();if(inst_17346__$1)
{var statearr_17462_17525 = state_17387__$1;(statearr_17462_17525[1] = 33);
} else
{var statearr_17463_17526 = state_17387__$1;(statearr_17463_17526[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 29))
{var inst_17371 = (state_17387[2]);var state_17387__$1 = state_17387;var statearr_17464_17527 = state_17387__$1;(statearr_17464_17527[2] = inst_17371);
(statearr_17464_17527[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 30))
{var state_17387__$1 = state_17387;var statearr_17465_17528 = state_17387__$1;(statearr_17465_17528[2] = null);
(statearr_17465_17528[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17388 === 31))
{var inst_17335 = (state_17387[30]);var inst_17339 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17340 = cljs.core.async.untap_STAR_.call(null,m,inst_17335);var state_17387__$1 = (function (){var statearr_17466 = state_17387;(statearr_17466[31] = inst_17339);
return statearr_17466;
})();var statearr_17467_17529 = state_17387__$1;(statearr_17467_17529[2] = inst_17340);
(statearr_17467_17529[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5635__auto___17475,cs,m,dchan,dctr,done))
;return ((function (switch__5620__auto__,c__5635__auto___17475,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_17471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17471[0] = state_machine__5621__auto__);
(statearr_17471[1] = 1);
return statearr_17471;
});
var state_machine__5621__auto____1 = (function (state_17387){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_17387);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e17472){if((e17472 instanceof Object))
{var ex__5624__auto__ = e17472;var statearr_17473_17530 = state_17387;(statearr_17473_17530[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17387);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17472;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17531 = state_17387;
state_17387 = G__17531;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_17387){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_17387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___17475,cs,m,dchan,dctr,done))
})();var state__5637__auto__ = (function (){var statearr_17474 = f__5636__auto__.call(null);(statearr_17474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___17475);
return statearr_17474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___17475,cs,m,dchan,dctr,done))
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj17533 = {};return obj17533;
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
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t17653 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17653 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta17654){
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
this.meta17654 = meta17654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17653.cljs$lang$type = true;
cljs.core.async.t17653.cljs$lang$ctorStr = "cljs.core.async/t17653";
cljs.core.async.t17653.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t17653");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17653.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17653.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17653.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17653.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17653.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17653.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17653.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17653.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17655){var self__ = this;
var _17655__$1 = this;return self__.meta17654;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17655,meta17654__$1){var self__ = this;
var _17655__$1 = this;return (new cljs.core.async.t17653(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta17654__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17653 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17653(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17654){return (new cljs.core.async.t17653(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17654));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17653(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5635__auto___17772 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___17772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___17772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17725){var state_val_17726 = (state_17725[1]);if((state_val_17726 === 1))
{var inst_17659 = (state_17725[7]);var inst_17659__$1 = calc_state.call(null);var inst_17660 = cljs.core.seq_QMARK_.call(null,inst_17659__$1);var state_17725__$1 = (function (){var statearr_17727 = state_17725;(statearr_17727[7] = inst_17659__$1);
return statearr_17727;
})();if(inst_17660)
{var statearr_17728_17773 = state_17725__$1;(statearr_17728_17773[1] = 2);
} else
{var statearr_17729_17774 = state_17725__$1;(statearr_17729_17774[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 2))
{var inst_17659 = (state_17725[7]);var inst_17662 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17659);var state_17725__$1 = state_17725;var statearr_17730_17775 = state_17725__$1;(statearr_17730_17775[2] = inst_17662);
(statearr_17730_17775[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 3))
{var inst_17659 = (state_17725[7]);var state_17725__$1 = state_17725;var statearr_17731_17776 = state_17725__$1;(statearr_17731_17776[2] = inst_17659);
(statearr_17731_17776[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 4))
{var inst_17659 = (state_17725[7]);var inst_17665 = (state_17725[2]);var inst_17666 = cljs.core.get.call(null,inst_17665,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17667 = cljs.core.get.call(null,inst_17665,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17668 = cljs.core.get.call(null,inst_17665,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_17669 = inst_17659;var state_17725__$1 = (function (){var statearr_17732 = state_17725;(statearr_17732[8] = inst_17669);
(statearr_17732[9] = inst_17668);
(statearr_17732[10] = inst_17667);
(statearr_17732[11] = inst_17666);
return statearr_17732;
})();var statearr_17733_17777 = state_17725__$1;(statearr_17733_17777[2] = null);
(statearr_17733_17777[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 5))
{var inst_17669 = (state_17725[8]);var inst_17672 = cljs.core.seq_QMARK_.call(null,inst_17669);var state_17725__$1 = state_17725;if(inst_17672)
{var statearr_17734_17778 = state_17725__$1;(statearr_17734_17778[1] = 7);
} else
{var statearr_17735_17779 = state_17725__$1;(statearr_17735_17779[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 6))
{var inst_17723 = (state_17725[2]);var state_17725__$1 = state_17725;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17725__$1,inst_17723);
} else
{if((state_val_17726 === 7))
{var inst_17669 = (state_17725[8]);var inst_17674 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17669);var state_17725__$1 = state_17725;var statearr_17736_17780 = state_17725__$1;(statearr_17736_17780[2] = inst_17674);
(statearr_17736_17780[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 8))
{var inst_17669 = (state_17725[8]);var state_17725__$1 = state_17725;var statearr_17737_17781 = state_17725__$1;(statearr_17737_17781[2] = inst_17669);
(statearr_17737_17781[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 9))
{var inst_17677 = (state_17725[12]);var inst_17677__$1 = (state_17725[2]);var inst_17678 = cljs.core.get.call(null,inst_17677__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17679 = cljs.core.get.call(null,inst_17677__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17680 = cljs.core.get.call(null,inst_17677__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_17725__$1 = (function (){var statearr_17738 = state_17725;(statearr_17738[12] = inst_17677__$1);
(statearr_17738[13] = inst_17679);
(statearr_17738[14] = inst_17680);
return statearr_17738;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17725__$1,10,inst_17678);
} else
{if((state_val_17726 === 10))
{var inst_17685 = (state_17725[15]);var inst_17684 = (state_17725[16]);var inst_17683 = (state_17725[2]);var inst_17684__$1 = cljs.core.nth.call(null,inst_17683,0,null);var inst_17685__$1 = cljs.core.nth.call(null,inst_17683,1,null);var inst_17686 = (inst_17684__$1 == null);var inst_17687 = cljs.core._EQ_.call(null,inst_17685__$1,change);var inst_17688 = (inst_17686) || (inst_17687);var state_17725__$1 = (function (){var statearr_17739 = state_17725;(statearr_17739[15] = inst_17685__$1);
(statearr_17739[16] = inst_17684__$1);
return statearr_17739;
})();if(cljs.core.truth_(inst_17688))
{var statearr_17740_17782 = state_17725__$1;(statearr_17740_17782[1] = 11);
} else
{var statearr_17741_17783 = state_17725__$1;(statearr_17741_17783[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 11))
{var inst_17684 = (state_17725[16]);var inst_17690 = (inst_17684 == null);var state_17725__$1 = state_17725;if(cljs.core.truth_(inst_17690))
{var statearr_17742_17784 = state_17725__$1;(statearr_17742_17784[1] = 14);
} else
{var statearr_17743_17785 = state_17725__$1;(statearr_17743_17785[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 12))
{var inst_17685 = (state_17725[15]);var inst_17699 = (state_17725[17]);var inst_17680 = (state_17725[14]);var inst_17699__$1 = inst_17680.call(null,inst_17685);var state_17725__$1 = (function (){var statearr_17744 = state_17725;(statearr_17744[17] = inst_17699__$1);
return statearr_17744;
})();if(cljs.core.truth_(inst_17699__$1))
{var statearr_17745_17786 = state_17725__$1;(statearr_17745_17786[1] = 17);
} else
{var statearr_17746_17787 = state_17725__$1;(statearr_17746_17787[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 13))
{var inst_17721 = (state_17725[2]);var state_17725__$1 = state_17725;var statearr_17747_17788 = state_17725__$1;(statearr_17747_17788[2] = inst_17721);
(statearr_17747_17788[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 14))
{var inst_17685 = (state_17725[15]);var inst_17692 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17685);var state_17725__$1 = state_17725;var statearr_17748_17789 = state_17725__$1;(statearr_17748_17789[2] = inst_17692);
(statearr_17748_17789[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 15))
{var state_17725__$1 = state_17725;var statearr_17749_17790 = state_17725__$1;(statearr_17749_17790[2] = null);
(statearr_17749_17790[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 16))
{var inst_17695 = (state_17725[2]);var inst_17696 = calc_state.call(null);var inst_17669 = inst_17696;var state_17725__$1 = (function (){var statearr_17750 = state_17725;(statearr_17750[8] = inst_17669);
(statearr_17750[18] = inst_17695);
return statearr_17750;
})();var statearr_17751_17791 = state_17725__$1;(statearr_17751_17791[2] = null);
(statearr_17751_17791[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 17))
{var inst_17699 = (state_17725[17]);var state_17725__$1 = state_17725;var statearr_17752_17792 = state_17725__$1;(statearr_17752_17792[2] = inst_17699);
(statearr_17752_17792[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 18))
{var inst_17685 = (state_17725[15]);var inst_17679 = (state_17725[13]);var inst_17680 = (state_17725[14]);var inst_17702 = cljs.core.empty_QMARK_.call(null,inst_17680);var inst_17703 = inst_17679.call(null,inst_17685);var inst_17704 = cljs.core.not.call(null,inst_17703);var inst_17705 = (inst_17702) && (inst_17704);var state_17725__$1 = state_17725;var statearr_17753_17793 = state_17725__$1;(statearr_17753_17793[2] = inst_17705);
(statearr_17753_17793[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 19))
{var inst_17707 = (state_17725[2]);var state_17725__$1 = state_17725;if(cljs.core.truth_(inst_17707))
{var statearr_17754_17794 = state_17725__$1;(statearr_17754_17794[1] = 20);
} else
{var statearr_17755_17795 = state_17725__$1;(statearr_17755_17795[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 20))
{var inst_17684 = (state_17725[16]);var state_17725__$1 = state_17725;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17725__$1,23,out,inst_17684);
} else
{if((state_val_17726 === 21))
{var inst_17677 = (state_17725[12]);var inst_17669 = inst_17677;var state_17725__$1 = (function (){var statearr_17756 = state_17725;(statearr_17756[8] = inst_17669);
return statearr_17756;
})();var statearr_17757_17796 = state_17725__$1;(statearr_17757_17796[2] = null);
(statearr_17757_17796[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 22))
{var inst_17719 = (state_17725[2]);var state_17725__$1 = state_17725;var statearr_17758_17797 = state_17725__$1;(statearr_17758_17797[2] = inst_17719);
(statearr_17758_17797[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 23))
{var inst_17710 = (state_17725[2]);var state_17725__$1 = state_17725;if(cljs.core.truth_(inst_17710))
{var statearr_17759_17798 = state_17725__$1;(statearr_17759_17798[1] = 24);
} else
{var statearr_17760_17799 = state_17725__$1;(statearr_17760_17799[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 24))
{var inst_17677 = (state_17725[12]);var inst_17669 = inst_17677;var state_17725__$1 = (function (){var statearr_17761 = state_17725;(statearr_17761[8] = inst_17669);
return statearr_17761;
})();var statearr_17762_17800 = state_17725__$1;(statearr_17762_17800[2] = null);
(statearr_17762_17800[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 25))
{var state_17725__$1 = state_17725;var statearr_17763_17801 = state_17725__$1;(statearr_17763_17801[2] = null);
(statearr_17763_17801[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17726 === 26))
{var inst_17715 = (state_17725[2]);var state_17725__$1 = state_17725;var statearr_17764_17802 = state_17725__$1;(statearr_17764_17802[2] = inst_17715);
(statearr_17764_17802[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5635__auto___17772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5620__auto__,c__5635__auto___17772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_17768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17768[0] = state_machine__5621__auto__);
(statearr_17768[1] = 1);
return statearr_17768;
});
var state_machine__5621__auto____1 = (function (state_17725){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_17725);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e17769){if((e17769 instanceof Object))
{var ex__5624__auto__ = e17769;var statearr_17770_17803 = state_17725;(statearr_17770_17803[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17725);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17769;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17804 = state_17725;
state_17725 = G__17804;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_17725){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_17725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___17772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5637__auto__ = (function (){var statearr_17771 = f__5636__auto__.call(null);(statearr_17771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___17772);
return statearr_17771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___17772,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj17806 = {};return obj17806;
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
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3478__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3478__auto__,mults){
return (function (p1__17807_SHARP_){if(cljs.core.truth_(p1__17807_SHARP_.call(null,topic)))
{return p1__17807_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17807_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3478__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17922 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17922 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17923){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17923 = meta17923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17922.cljs$lang$type = true;
cljs.core.async.t17922.cljs$lang$ctorStr = "cljs.core.async/t17922";
cljs.core.async.t17922.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t17922");
});})(mults,ensure_mult))
;
cljs.core.async.t17922.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17922.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17922.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17922.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17922.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17922.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17924){var self__ = this;
var _17924__$1 = this;return self__.meta17923;
});})(mults,ensure_mult))
;
cljs.core.async.t17922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17924,meta17923__$1){var self__ = this;
var _17924__$1 = this;return (new cljs.core.async.t17922(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17923__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17922 = ((function (mults,ensure_mult){
return (function __GT_t17922(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17923){return (new cljs.core.async.t17922(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17923));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17922(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5635__auto___18036 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___18036,mults,ensure_mult,p){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___18036,mults,ensure_mult,p){
return (function (state_17992){var state_val_17993 = (state_17992[1]);if((state_val_17993 === 1))
{var state_17992__$1 = state_17992;var statearr_17994_18037 = state_17992__$1;(statearr_17994_18037[2] = null);
(statearr_17994_18037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 2))
{var state_17992__$1 = state_17992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17992__$1,4,ch);
} else
{if((state_val_17993 === 3))
{var inst_17990 = (state_17992[2]);var state_17992__$1 = state_17992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17992__$1,inst_17990);
} else
{if((state_val_17993 === 4))
{var inst_17927 = (state_17992[7]);var inst_17927__$1 = (state_17992[2]);var inst_17928 = (inst_17927__$1 == null);var state_17992__$1 = (function (){var statearr_17995 = state_17992;(statearr_17995[7] = inst_17927__$1);
return statearr_17995;
})();if(cljs.core.truth_(inst_17928))
{var statearr_17996_18038 = state_17992__$1;(statearr_17996_18038[1] = 5);
} else
{var statearr_17997_18039 = state_17992__$1;(statearr_17997_18039[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 5))
{var inst_17934 = cljs.core.deref.call(null,mults);var inst_17935 = cljs.core.vals.call(null,inst_17934);var inst_17936 = cljs.core.seq.call(null,inst_17935);var inst_17937 = inst_17936;var inst_17938 = null;var inst_17939 = 0;var inst_17940 = 0;var state_17992__$1 = (function (){var statearr_17998 = state_17992;(statearr_17998[8] = inst_17939);
(statearr_17998[9] = inst_17937);
(statearr_17998[10] = inst_17938);
(statearr_17998[11] = inst_17940);
return statearr_17998;
})();var statearr_17999_18040 = state_17992__$1;(statearr_17999_18040[2] = null);
(statearr_17999_18040[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 6))
{var inst_17927 = (state_17992[7]);var inst_17975 = (state_17992[12]);var inst_17975__$1 = topic_fn.call(null,inst_17927);var inst_17976 = cljs.core.deref.call(null,mults);var inst_17977 = cljs.core.get.call(null,inst_17976,inst_17975__$1);var inst_17978 = cljs.core.async.muxch_STAR_.call(null,inst_17977);var state_17992__$1 = (function (){var statearr_18000 = state_17992;(statearr_18000[12] = inst_17975__$1);
return statearr_18000;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17992__$1,19,inst_17978,inst_17927);
} else
{if((state_val_17993 === 7))
{var inst_17988 = (state_17992[2]);var state_17992__$1 = state_17992;var statearr_18001_18041 = state_17992__$1;(statearr_18001_18041[2] = inst_17988);
(statearr_18001_18041[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 8))
{var inst_17939 = (state_17992[8]);var inst_17940 = (state_17992[11]);var inst_17942 = (inst_17940 < inst_17939);var inst_17943 = inst_17942;var state_17992__$1 = state_17992;if(cljs.core.truth_(inst_17943))
{var statearr_18005_18042 = state_17992__$1;(statearr_18005_18042[1] = 10);
} else
{var statearr_18006_18043 = state_17992__$1;(statearr_18006_18043[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 9))
{var inst_17973 = (state_17992[2]);var state_17992__$1 = state_17992;var statearr_18007_18044 = state_17992__$1;(statearr_18007_18044[2] = inst_17973);
(statearr_18007_18044[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 10))
{var inst_17939 = (state_17992[8]);var inst_17937 = (state_17992[9]);var inst_17938 = (state_17992[10]);var inst_17940 = (state_17992[11]);var inst_17945 = cljs.core._nth.call(null,inst_17938,inst_17940);var inst_17946 = cljs.core.async.muxch_STAR_.call(null,inst_17945);var inst_17947 = cljs.core.async.close_BANG_.call(null,inst_17946);var inst_17948 = (inst_17940 + 1);var tmp18002 = inst_17939;var tmp18003 = inst_17937;var tmp18004 = inst_17938;var inst_17937__$1 = tmp18003;var inst_17938__$1 = tmp18004;var inst_17939__$1 = tmp18002;var inst_17940__$1 = inst_17948;var state_17992__$1 = (function (){var statearr_18008 = state_17992;(statearr_18008[8] = inst_17939__$1);
(statearr_18008[13] = inst_17947);
(statearr_18008[9] = inst_17937__$1);
(statearr_18008[10] = inst_17938__$1);
(statearr_18008[11] = inst_17940__$1);
return statearr_18008;
})();var statearr_18009_18045 = state_17992__$1;(statearr_18009_18045[2] = null);
(statearr_18009_18045[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 11))
{var inst_17951 = (state_17992[14]);var inst_17937 = (state_17992[9]);var inst_17951__$1 = cljs.core.seq.call(null,inst_17937);var state_17992__$1 = (function (){var statearr_18010 = state_17992;(statearr_18010[14] = inst_17951__$1);
return statearr_18010;
})();if(inst_17951__$1)
{var statearr_18011_18046 = state_17992__$1;(statearr_18011_18046[1] = 13);
} else
{var statearr_18012_18047 = state_17992__$1;(statearr_18012_18047[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 12))
{var inst_17971 = (state_17992[2]);var state_17992__$1 = state_17992;var statearr_18013_18048 = state_17992__$1;(statearr_18013_18048[2] = inst_17971);
(statearr_18013_18048[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 13))
{var inst_17951 = (state_17992[14]);var inst_17953 = cljs.core.chunked_seq_QMARK_.call(null,inst_17951);var state_17992__$1 = state_17992;if(inst_17953)
{var statearr_18014_18049 = state_17992__$1;(statearr_18014_18049[1] = 16);
} else
{var statearr_18015_18050 = state_17992__$1;(statearr_18015_18050[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 14))
{var state_17992__$1 = state_17992;var statearr_18016_18051 = state_17992__$1;(statearr_18016_18051[2] = null);
(statearr_18016_18051[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 15))
{var inst_17969 = (state_17992[2]);var state_17992__$1 = state_17992;var statearr_18017_18052 = state_17992__$1;(statearr_18017_18052[2] = inst_17969);
(statearr_18017_18052[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 16))
{var inst_17951 = (state_17992[14]);var inst_17955 = cljs.core.chunk_first.call(null,inst_17951);var inst_17956 = cljs.core.chunk_rest.call(null,inst_17951);var inst_17957 = cljs.core.count.call(null,inst_17955);var inst_17937 = inst_17956;var inst_17938 = inst_17955;var inst_17939 = inst_17957;var inst_17940 = 0;var state_17992__$1 = (function (){var statearr_18018 = state_17992;(statearr_18018[8] = inst_17939);
(statearr_18018[9] = inst_17937);
(statearr_18018[10] = inst_17938);
(statearr_18018[11] = inst_17940);
return statearr_18018;
})();var statearr_18019_18053 = state_17992__$1;(statearr_18019_18053[2] = null);
(statearr_18019_18053[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 17))
{var inst_17951 = (state_17992[14]);var inst_17960 = cljs.core.first.call(null,inst_17951);var inst_17961 = cljs.core.async.muxch_STAR_.call(null,inst_17960);var inst_17962 = cljs.core.async.close_BANG_.call(null,inst_17961);var inst_17963 = cljs.core.next.call(null,inst_17951);var inst_17937 = inst_17963;var inst_17938 = null;var inst_17939 = 0;var inst_17940 = 0;var state_17992__$1 = (function (){var statearr_18020 = state_17992;(statearr_18020[15] = inst_17962);
(statearr_18020[8] = inst_17939);
(statearr_18020[9] = inst_17937);
(statearr_18020[10] = inst_17938);
(statearr_18020[11] = inst_17940);
return statearr_18020;
})();var statearr_18021_18054 = state_17992__$1;(statearr_18021_18054[2] = null);
(statearr_18021_18054[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 18))
{var inst_17966 = (state_17992[2]);var state_17992__$1 = state_17992;var statearr_18022_18055 = state_17992__$1;(statearr_18022_18055[2] = inst_17966);
(statearr_18022_18055[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 19))
{var inst_17980 = (state_17992[2]);var state_17992__$1 = state_17992;if(cljs.core.truth_(inst_17980))
{var statearr_18023_18056 = state_17992__$1;(statearr_18023_18056[1] = 20);
} else
{var statearr_18024_18057 = state_17992__$1;(statearr_18024_18057[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 20))
{var state_17992__$1 = state_17992;var statearr_18025_18058 = state_17992__$1;(statearr_18025_18058[2] = null);
(statearr_18025_18058[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 21))
{var inst_17975 = (state_17992[12]);var inst_17983 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17975);var state_17992__$1 = state_17992;var statearr_18026_18059 = state_17992__$1;(statearr_18026_18059[2] = inst_17983);
(statearr_18026_18059[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17993 === 22))
{var inst_17985 = (state_17992[2]);var state_17992__$1 = (function (){var statearr_18027 = state_17992;(statearr_18027[16] = inst_17985);
return statearr_18027;
})();var statearr_18028_18060 = state_17992__$1;(statearr_18028_18060[2] = null);
(statearr_18028_18060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5635__auto___18036,mults,ensure_mult,p))
;return ((function (switch__5620__auto__,c__5635__auto___18036,mults,ensure_mult,p){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_18032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18032[0] = state_machine__5621__auto__);
(statearr_18032[1] = 1);
return statearr_18032;
});
var state_machine__5621__auto____1 = (function (state_17992){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_17992);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e18033){if((e18033 instanceof Object))
{var ex__5624__auto__ = e18033;var statearr_18034_18061 = state_17992;(statearr_18034_18061[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17992);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18033;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18062 = state_17992;
state_17992 = G__18062;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_17992){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_17992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___18036,mults,ensure_mult,p))
})();var state__5637__auto__ = (function (){var statearr_18035 = f__5636__auto__.call(null);(statearr_18035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___18036);
return statearr_18035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___18036,mults,ensure_mult,p))
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5635__auto___18199 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___18199,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___18199,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18169){var state_val_18170 = (state_18169[1]);if((state_val_18170 === 1))
{var state_18169__$1 = state_18169;var statearr_18171_18200 = state_18169__$1;(statearr_18171_18200[2] = null);
(statearr_18171_18200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18170 === 2))
{var inst_18132 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_18133 = 0;var state_18169__$1 = (function (){var statearr_18172 = state_18169;(statearr_18172[7] = inst_18133);
(statearr_18172[8] = inst_18132);
return statearr_18172;
})();var statearr_18173_18201 = state_18169__$1;(statearr_18173_18201[2] = null);
(statearr_18173_18201[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18170 === 3))
{var inst_18167 = (state_18169[2]);var state_18169__$1 = state_18169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18169__$1,inst_18167);
} else
{if((state_val_18170 === 4))
{var inst_18133 = (state_18169[7]);var inst_18135 = (inst_18133 < cnt);var state_18169__$1 = state_18169;if(cljs.core.truth_(inst_18135))
{var statearr_18174_18202 = state_18169__$1;(statearr_18174_18202[1] = 6);
} else
{var statearr_18175_18203 = state_18169__$1;(statearr_18175_18203[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18170 === 5))
{var inst_18153 = (state_18169[2]);var state_18169__$1 = (function (){var statearr_18176 = state_18169;(statearr_18176[9] = inst_18153);
return statearr_18176;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18169__$1,12,dchan);
} else
{if((state_val_18170 === 6))
{var state_18169__$1 = state_18169;var statearr_18177_18204 = state_18169__$1;(statearr_18177_18204[2] = null);
(statearr_18177_18204[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18170 === 7))
{var state_18169__$1 = state_18169;var statearr_18178_18205 = state_18169__$1;(statearr_18178_18205[2] = null);
(statearr_18178_18205[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18170 === 8))
{var inst_18151 = (state_18169[2]);var state_18169__$1 = state_18169;var statearr_18179_18206 = state_18169__$1;(statearr_18179_18206[2] = inst_18151);
(statearr_18179_18206[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18170 === 9))
{var inst_18133 = (state_18169[7]);var inst_18146 = (state_18169[2]);var inst_18147 = (inst_18133 + 1);var inst_18133__$1 = inst_18147;var state_18169__$1 = (function (){var statearr_18180 = state_18169;(statearr_18180[7] = inst_18133__$1);
(statearr_18180[10] = inst_18146);
return statearr_18180;
})();var statearr_18181_18207 = state_18169__$1;(statearr_18181_18207[2] = null);
(statearr_18181_18207[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18170 === 10))
{var inst_18137 = (state_18169[2]);var inst_18138 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_18169__$1 = (function (){var statearr_18182 = state_18169;(statearr_18182[11] = inst_18137);
return statearr_18182;
})();var statearr_18183_18208 = state_18169__$1;(statearr_18183_18208[2] = inst_18138);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18169__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18170 === 11))
{var inst_18133 = (state_18169[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18169,10,Object,null,9);var inst_18142 = chs__$1.call(null,inst_18133);var inst_18143 = done.call(null,inst_18133);var inst_18144 = cljs.core.async.take_BANG_.call(null,inst_18142,inst_18143);var state_18169__$1 = state_18169;var statearr_18184_18209 = state_18169__$1;(statearr_18184_18209[2] = inst_18144);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18169__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18170 === 12))
{var inst_18155 = (state_18169[12]);var inst_18155__$1 = (state_18169[2]);var inst_18156 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18155__$1);var state_18169__$1 = (function (){var statearr_18185 = state_18169;(statearr_18185[12] = inst_18155__$1);
return statearr_18185;
})();if(cljs.core.truth_(inst_18156))
{var statearr_18186_18210 = state_18169__$1;(statearr_18186_18210[1] = 13);
} else
{var statearr_18187_18211 = state_18169__$1;(statearr_18187_18211[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18170 === 13))
{var inst_18158 = cljs.core.async.close_BANG_.call(null,out);var state_18169__$1 = state_18169;var statearr_18188_18212 = state_18169__$1;(statearr_18188_18212[2] = inst_18158);
(statearr_18188_18212[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18170 === 14))
{var inst_18155 = (state_18169[12]);var inst_18160 = cljs.core.apply.call(null,f,inst_18155);var state_18169__$1 = state_18169;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18169__$1,16,out,inst_18160);
} else
{if((state_val_18170 === 15))
{var inst_18165 = (state_18169[2]);var state_18169__$1 = state_18169;var statearr_18189_18213 = state_18169__$1;(statearr_18189_18213[2] = inst_18165);
(statearr_18189_18213[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18170 === 16))
{var inst_18162 = (state_18169[2]);var state_18169__$1 = (function (){var statearr_18190 = state_18169;(statearr_18190[13] = inst_18162);
return statearr_18190;
})();var statearr_18191_18214 = state_18169__$1;(statearr_18191_18214[2] = null);
(statearr_18191_18214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5635__auto___18199,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5620__auto__,c__5635__auto___18199,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_18195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18195[0] = state_machine__5621__auto__);
(statearr_18195[1] = 1);
return statearr_18195;
});
var state_machine__5621__auto____1 = (function (state_18169){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_18169);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e18196){if((e18196 instanceof Object))
{var ex__5624__auto__ = e18196;var statearr_18197_18215 = state_18169;(statearr_18197_18215[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18169);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18216 = state_18169;
state_18169 = G__18216;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_18169){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_18169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___18199,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5637__auto__ = (function (){var statearr_18198 = f__5636__auto__.call(null);(statearr_18198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___18199);
return statearr_18198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___18199,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5635__auto___18324 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___18324,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___18324,out){
return (function (state_18300){var state_val_18301 = (state_18300[1]);if((state_val_18301 === 1))
{var inst_18271 = cljs.core.vec.call(null,chs);var inst_18272 = inst_18271;var state_18300__$1 = (function (){var statearr_18302 = state_18300;(statearr_18302[7] = inst_18272);
return statearr_18302;
})();var statearr_18303_18325 = state_18300__$1;(statearr_18303_18325[2] = null);
(statearr_18303_18325[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18301 === 2))
{var inst_18272 = (state_18300[7]);var inst_18274 = cljs.core.count.call(null,inst_18272);var inst_18275 = (inst_18274 > 0);var state_18300__$1 = state_18300;if(cljs.core.truth_(inst_18275))
{var statearr_18304_18326 = state_18300__$1;(statearr_18304_18326[1] = 4);
} else
{var statearr_18305_18327 = state_18300__$1;(statearr_18305_18327[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18301 === 3))
{var inst_18298 = (state_18300[2]);var state_18300__$1 = state_18300;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18300__$1,inst_18298);
} else
{if((state_val_18301 === 4))
{var inst_18272 = (state_18300[7]);var state_18300__$1 = state_18300;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18300__$1,7,inst_18272);
} else
{if((state_val_18301 === 5))
{var inst_18294 = cljs.core.async.close_BANG_.call(null,out);var state_18300__$1 = state_18300;var statearr_18306_18328 = state_18300__$1;(statearr_18306_18328[2] = inst_18294);
(statearr_18306_18328[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18301 === 6))
{var inst_18296 = (state_18300[2]);var state_18300__$1 = state_18300;var statearr_18307_18329 = state_18300__$1;(statearr_18307_18329[2] = inst_18296);
(statearr_18307_18329[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18301 === 7))
{var inst_18280 = (state_18300[8]);var inst_18279 = (state_18300[9]);var inst_18279__$1 = (state_18300[2]);var inst_18280__$1 = cljs.core.nth.call(null,inst_18279__$1,0,null);var inst_18281 = cljs.core.nth.call(null,inst_18279__$1,1,null);var inst_18282 = (inst_18280__$1 == null);var state_18300__$1 = (function (){var statearr_18308 = state_18300;(statearr_18308[10] = inst_18281);
(statearr_18308[8] = inst_18280__$1);
(statearr_18308[9] = inst_18279__$1);
return statearr_18308;
})();if(cljs.core.truth_(inst_18282))
{var statearr_18309_18330 = state_18300__$1;(statearr_18309_18330[1] = 8);
} else
{var statearr_18310_18331 = state_18300__$1;(statearr_18310_18331[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18301 === 8))
{var inst_18272 = (state_18300[7]);var inst_18281 = (state_18300[10]);var inst_18280 = (state_18300[8]);var inst_18279 = (state_18300[9]);var inst_18284 = (function (){var c = inst_18281;var v = inst_18280;var vec__18277 = inst_18279;var cs = inst_18272;return ((function (c,v,vec__18277,cs,inst_18272,inst_18281,inst_18280,inst_18279,state_val_18301,c__5635__auto___18324,out){
return (function (p1__18217_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__18217_SHARP_);
});
;})(c,v,vec__18277,cs,inst_18272,inst_18281,inst_18280,inst_18279,state_val_18301,c__5635__auto___18324,out))
})();var inst_18285 = cljs.core.filterv.call(null,inst_18284,inst_18272);var inst_18272__$1 = inst_18285;var state_18300__$1 = (function (){var statearr_18311 = state_18300;(statearr_18311[7] = inst_18272__$1);
return statearr_18311;
})();var statearr_18312_18332 = state_18300__$1;(statearr_18312_18332[2] = null);
(statearr_18312_18332[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18301 === 9))
{var inst_18280 = (state_18300[8]);var state_18300__$1 = state_18300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18300__$1,11,out,inst_18280);
} else
{if((state_val_18301 === 10))
{var inst_18292 = (state_18300[2]);var state_18300__$1 = state_18300;var statearr_18314_18333 = state_18300__$1;(statearr_18314_18333[2] = inst_18292);
(statearr_18314_18333[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18301 === 11))
{var inst_18272 = (state_18300[7]);var inst_18289 = (state_18300[2]);var tmp18313 = inst_18272;var inst_18272__$1 = tmp18313;var state_18300__$1 = (function (){var statearr_18315 = state_18300;(statearr_18315[7] = inst_18272__$1);
(statearr_18315[11] = inst_18289);
return statearr_18315;
})();var statearr_18316_18334 = state_18300__$1;(statearr_18316_18334[2] = null);
(statearr_18316_18334[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5635__auto___18324,out))
;return ((function (switch__5620__auto__,c__5635__auto___18324,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_18320 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18320[0] = state_machine__5621__auto__);
(statearr_18320[1] = 1);
return statearr_18320;
});
var state_machine__5621__auto____1 = (function (state_18300){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_18300);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e18321){if((e18321 instanceof Object))
{var ex__5624__auto__ = e18321;var statearr_18322_18335 = state_18300;(statearr_18322_18335[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18300);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18321;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18336 = state_18300;
state_18300 = G__18336;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_18300){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_18300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___18324,out))
})();var state__5637__auto__ = (function (){var statearr_18323 = f__5636__auto__.call(null);(statearr_18323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___18324);
return statearr_18323;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___18324,out))
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5635__auto___18429 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___18429,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___18429,out){
return (function (state_18406){var state_val_18407 = (state_18406[1]);if((state_val_18407 === 1))
{var inst_18383 = 0;var state_18406__$1 = (function (){var statearr_18408 = state_18406;(statearr_18408[7] = inst_18383);
return statearr_18408;
})();var statearr_18409_18430 = state_18406__$1;(statearr_18409_18430[2] = null);
(statearr_18409_18430[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18407 === 2))
{var inst_18383 = (state_18406[7]);var inst_18385 = (inst_18383 < n);var state_18406__$1 = state_18406;if(cljs.core.truth_(inst_18385))
{var statearr_18410_18431 = state_18406__$1;(statearr_18410_18431[1] = 4);
} else
{var statearr_18411_18432 = state_18406__$1;(statearr_18411_18432[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18407 === 3))
{var inst_18403 = (state_18406[2]);var inst_18404 = cljs.core.async.close_BANG_.call(null,out);var state_18406__$1 = (function (){var statearr_18412 = state_18406;(statearr_18412[8] = inst_18403);
return statearr_18412;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18406__$1,inst_18404);
} else
{if((state_val_18407 === 4))
{var state_18406__$1 = state_18406;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18406__$1,7,ch);
} else
{if((state_val_18407 === 5))
{var state_18406__$1 = state_18406;var statearr_18413_18433 = state_18406__$1;(statearr_18413_18433[2] = null);
(statearr_18413_18433[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18407 === 6))
{var inst_18401 = (state_18406[2]);var state_18406__$1 = state_18406;var statearr_18414_18434 = state_18406__$1;(statearr_18414_18434[2] = inst_18401);
(statearr_18414_18434[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18407 === 7))
{var inst_18388 = (state_18406[9]);var inst_18388__$1 = (state_18406[2]);var inst_18389 = (inst_18388__$1 == null);var inst_18390 = cljs.core.not.call(null,inst_18389);var state_18406__$1 = (function (){var statearr_18415 = state_18406;(statearr_18415[9] = inst_18388__$1);
return statearr_18415;
})();if(inst_18390)
{var statearr_18416_18435 = state_18406__$1;(statearr_18416_18435[1] = 8);
} else
{var statearr_18417_18436 = state_18406__$1;(statearr_18417_18436[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18407 === 8))
{var inst_18388 = (state_18406[9]);var state_18406__$1 = state_18406;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18406__$1,11,out,inst_18388);
} else
{if((state_val_18407 === 9))
{var state_18406__$1 = state_18406;var statearr_18418_18437 = state_18406__$1;(statearr_18418_18437[2] = null);
(statearr_18418_18437[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18407 === 10))
{var inst_18398 = (state_18406[2]);var state_18406__$1 = state_18406;var statearr_18419_18438 = state_18406__$1;(statearr_18419_18438[2] = inst_18398);
(statearr_18419_18438[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18407 === 11))
{var inst_18383 = (state_18406[7]);var inst_18393 = (state_18406[2]);var inst_18394 = (inst_18383 + 1);var inst_18383__$1 = inst_18394;var state_18406__$1 = (function (){var statearr_18420 = state_18406;(statearr_18420[10] = inst_18393);
(statearr_18420[7] = inst_18383__$1);
return statearr_18420;
})();var statearr_18421_18439 = state_18406__$1;(statearr_18421_18439[2] = null);
(statearr_18421_18439[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5635__auto___18429,out))
;return ((function (switch__5620__auto__,c__5635__auto___18429,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_18425 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18425[0] = state_machine__5621__auto__);
(statearr_18425[1] = 1);
return statearr_18425;
});
var state_machine__5621__auto____1 = (function (state_18406){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_18406);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e18426){if((e18426 instanceof Object))
{var ex__5624__auto__ = e18426;var statearr_18427_18440 = state_18406;(statearr_18427_18440[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18406);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18426;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18441 = state_18406;
state_18406 = G__18441;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_18406){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_18406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___18429,out))
})();var state__5637__auto__ = (function (){var statearr_18428 = f__5636__auto__.call(null);(statearr_18428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___18429);
return statearr_18428;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___18429,out))
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5635__auto___18538 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___18538,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___18538,out){
return (function (state_18513){var state_val_18514 = (state_18513[1]);if((state_val_18514 === 1))
{var inst_18490 = null;var state_18513__$1 = (function (){var statearr_18515 = state_18513;(statearr_18515[7] = inst_18490);
return statearr_18515;
})();var statearr_18516_18539 = state_18513__$1;(statearr_18516_18539[2] = null);
(statearr_18516_18539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18514 === 2))
{var state_18513__$1 = state_18513;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18513__$1,4,ch);
} else
{if((state_val_18514 === 3))
{var inst_18510 = (state_18513[2]);var inst_18511 = cljs.core.async.close_BANG_.call(null,out);var state_18513__$1 = (function (){var statearr_18517 = state_18513;(statearr_18517[8] = inst_18510);
return statearr_18517;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18513__$1,inst_18511);
} else
{if((state_val_18514 === 4))
{var inst_18493 = (state_18513[9]);var inst_18493__$1 = (state_18513[2]);var inst_18494 = (inst_18493__$1 == null);var inst_18495 = cljs.core.not.call(null,inst_18494);var state_18513__$1 = (function (){var statearr_18518 = state_18513;(statearr_18518[9] = inst_18493__$1);
return statearr_18518;
})();if(inst_18495)
{var statearr_18519_18540 = state_18513__$1;(statearr_18519_18540[1] = 5);
} else
{var statearr_18520_18541 = state_18513__$1;(statearr_18520_18541[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18514 === 5))
{var inst_18490 = (state_18513[7]);var inst_18493 = (state_18513[9]);var inst_18497 = cljs.core._EQ_.call(null,inst_18493,inst_18490);var state_18513__$1 = state_18513;if(inst_18497)
{var statearr_18521_18542 = state_18513__$1;(statearr_18521_18542[1] = 8);
} else
{var statearr_18522_18543 = state_18513__$1;(statearr_18522_18543[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18514 === 6))
{var state_18513__$1 = state_18513;var statearr_18524_18544 = state_18513__$1;(statearr_18524_18544[2] = null);
(statearr_18524_18544[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18514 === 7))
{var inst_18508 = (state_18513[2]);var state_18513__$1 = state_18513;var statearr_18525_18545 = state_18513__$1;(statearr_18525_18545[2] = inst_18508);
(statearr_18525_18545[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18514 === 8))
{var inst_18490 = (state_18513[7]);var tmp18523 = inst_18490;var inst_18490__$1 = tmp18523;var state_18513__$1 = (function (){var statearr_18526 = state_18513;(statearr_18526[7] = inst_18490__$1);
return statearr_18526;
})();var statearr_18527_18546 = state_18513__$1;(statearr_18527_18546[2] = null);
(statearr_18527_18546[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18514 === 9))
{var inst_18493 = (state_18513[9]);var state_18513__$1 = state_18513;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18513__$1,11,out,inst_18493);
} else
{if((state_val_18514 === 10))
{var inst_18505 = (state_18513[2]);var state_18513__$1 = state_18513;var statearr_18528_18547 = state_18513__$1;(statearr_18528_18547[2] = inst_18505);
(statearr_18528_18547[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18514 === 11))
{var inst_18493 = (state_18513[9]);var inst_18502 = (state_18513[2]);var inst_18490 = inst_18493;var state_18513__$1 = (function (){var statearr_18529 = state_18513;(statearr_18529[7] = inst_18490);
(statearr_18529[10] = inst_18502);
return statearr_18529;
})();var statearr_18530_18548 = state_18513__$1;(statearr_18530_18548[2] = null);
(statearr_18530_18548[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5635__auto___18538,out))
;return ((function (switch__5620__auto__,c__5635__auto___18538,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_18534 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18534[0] = state_machine__5621__auto__);
(statearr_18534[1] = 1);
return statearr_18534;
});
var state_machine__5621__auto____1 = (function (state_18513){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_18513);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e18535){if((e18535 instanceof Object))
{var ex__5624__auto__ = e18535;var statearr_18536_18549 = state_18513;(statearr_18536_18549[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18513);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18535;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18550 = state_18513;
state_18513 = G__18550;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_18513){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_18513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___18538,out))
})();var state__5637__auto__ = (function (){var statearr_18537 = f__5636__auto__.call(null);(statearr_18537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___18538);
return statearr_18537;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___18538,out))
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5635__auto___18685 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___18685,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___18685,out){
return (function (state_18655){var state_val_18656 = (state_18655[1]);if((state_val_18656 === 1))
{var inst_18618 = (new Array(n));var inst_18619 = inst_18618;var inst_18620 = 0;var state_18655__$1 = (function (){var statearr_18657 = state_18655;(statearr_18657[7] = inst_18620);
(statearr_18657[8] = inst_18619);
return statearr_18657;
})();var statearr_18658_18686 = state_18655__$1;(statearr_18658_18686[2] = null);
(statearr_18658_18686[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18656 === 2))
{var state_18655__$1 = state_18655;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18655__$1,4,ch);
} else
{if((state_val_18656 === 3))
{var inst_18653 = (state_18655[2]);var state_18655__$1 = state_18655;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18655__$1,inst_18653);
} else
{if((state_val_18656 === 4))
{var inst_18623 = (state_18655[9]);var inst_18623__$1 = (state_18655[2]);var inst_18624 = (inst_18623__$1 == null);var inst_18625 = cljs.core.not.call(null,inst_18624);var state_18655__$1 = (function (){var statearr_18659 = state_18655;(statearr_18659[9] = inst_18623__$1);
return statearr_18659;
})();if(inst_18625)
{var statearr_18660_18687 = state_18655__$1;(statearr_18660_18687[1] = 5);
} else
{var statearr_18661_18688 = state_18655__$1;(statearr_18661_18688[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18656 === 5))
{var inst_18623 = (state_18655[9]);var inst_18620 = (state_18655[7]);var inst_18628 = (state_18655[10]);var inst_18619 = (state_18655[8]);var inst_18627 = (inst_18619[inst_18620] = inst_18623);var inst_18628__$1 = (inst_18620 + 1);var inst_18629 = (inst_18628__$1 < n);var state_18655__$1 = (function (){var statearr_18662 = state_18655;(statearr_18662[10] = inst_18628__$1);
(statearr_18662[11] = inst_18627);
return statearr_18662;
})();if(cljs.core.truth_(inst_18629))
{var statearr_18663_18689 = state_18655__$1;(statearr_18663_18689[1] = 8);
} else
{var statearr_18664_18690 = state_18655__$1;(statearr_18664_18690[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18656 === 6))
{var inst_18620 = (state_18655[7]);var inst_18641 = (inst_18620 > 0);var state_18655__$1 = state_18655;if(cljs.core.truth_(inst_18641))
{var statearr_18666_18691 = state_18655__$1;(statearr_18666_18691[1] = 12);
} else
{var statearr_18667_18692 = state_18655__$1;(statearr_18667_18692[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18656 === 7))
{var inst_18651 = (state_18655[2]);var state_18655__$1 = state_18655;var statearr_18668_18693 = state_18655__$1;(statearr_18668_18693[2] = inst_18651);
(statearr_18668_18693[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18656 === 8))
{var inst_18628 = (state_18655[10]);var inst_18619 = (state_18655[8]);var tmp18665 = inst_18619;var inst_18619__$1 = tmp18665;var inst_18620 = inst_18628;var state_18655__$1 = (function (){var statearr_18669 = state_18655;(statearr_18669[7] = inst_18620);
(statearr_18669[8] = inst_18619__$1);
return statearr_18669;
})();var statearr_18670_18694 = state_18655__$1;(statearr_18670_18694[2] = null);
(statearr_18670_18694[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18656 === 9))
{var inst_18619 = (state_18655[8]);var inst_18633 = cljs.core.vec.call(null,inst_18619);var state_18655__$1 = state_18655;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18655__$1,11,out,inst_18633);
} else
{if((state_val_18656 === 10))
{var inst_18639 = (state_18655[2]);var state_18655__$1 = state_18655;var statearr_18671_18695 = state_18655__$1;(statearr_18671_18695[2] = inst_18639);
(statearr_18671_18695[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18656 === 11))
{var inst_18635 = (state_18655[2]);var inst_18636 = (new Array(n));var inst_18619 = inst_18636;var inst_18620 = 0;var state_18655__$1 = (function (){var statearr_18672 = state_18655;(statearr_18672[7] = inst_18620);
(statearr_18672[12] = inst_18635);
(statearr_18672[8] = inst_18619);
return statearr_18672;
})();var statearr_18673_18696 = state_18655__$1;(statearr_18673_18696[2] = null);
(statearr_18673_18696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18656 === 12))
{var inst_18619 = (state_18655[8]);var inst_18643 = cljs.core.vec.call(null,inst_18619);var state_18655__$1 = state_18655;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18655__$1,15,out,inst_18643);
} else
{if((state_val_18656 === 13))
{var state_18655__$1 = state_18655;var statearr_18674_18697 = state_18655__$1;(statearr_18674_18697[2] = null);
(statearr_18674_18697[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18656 === 14))
{var inst_18648 = (state_18655[2]);var inst_18649 = cljs.core.async.close_BANG_.call(null,out);var state_18655__$1 = (function (){var statearr_18675 = state_18655;(statearr_18675[13] = inst_18648);
return statearr_18675;
})();var statearr_18676_18698 = state_18655__$1;(statearr_18676_18698[2] = inst_18649);
(statearr_18676_18698[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18656 === 15))
{var inst_18645 = (state_18655[2]);var state_18655__$1 = state_18655;var statearr_18677_18699 = state_18655__$1;(statearr_18677_18699[2] = inst_18645);
(statearr_18677_18699[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5635__auto___18685,out))
;return ((function (switch__5620__auto__,c__5635__auto___18685,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_18681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18681[0] = state_machine__5621__auto__);
(statearr_18681[1] = 1);
return statearr_18681;
});
var state_machine__5621__auto____1 = (function (state_18655){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_18655);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e18682){if((e18682 instanceof Object))
{var ex__5624__auto__ = e18682;var statearr_18683_18700 = state_18655;(statearr_18683_18700[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18655);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18701 = state_18655;
state_18655 = G__18701;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_18655){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_18655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___18685,out))
})();var state__5637__auto__ = (function (){var statearr_18684 = f__5636__auto__.call(null);(statearr_18684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___18685);
return statearr_18684;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___18685,out))
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5635__auto___18844 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___18844,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___18844,out){
return (function (state_18814){var state_val_18815 = (state_18814[1]);if((state_val_18815 === 1))
{var inst_18773 = [];var inst_18774 = inst_18773;var inst_18775 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_18814__$1 = (function (){var statearr_18816 = state_18814;(statearr_18816[7] = inst_18774);
(statearr_18816[8] = inst_18775);
return statearr_18816;
})();var statearr_18817_18845 = state_18814__$1;(statearr_18817_18845[2] = null);
(statearr_18817_18845[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18815 === 2))
{var state_18814__$1 = state_18814;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18814__$1,4,ch);
} else
{if((state_val_18815 === 3))
{var inst_18812 = (state_18814[2]);var state_18814__$1 = state_18814;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18814__$1,inst_18812);
} else
{if((state_val_18815 === 4))
{var inst_18778 = (state_18814[9]);var inst_18778__$1 = (state_18814[2]);var inst_18779 = (inst_18778__$1 == null);var inst_18780 = cljs.core.not.call(null,inst_18779);var state_18814__$1 = (function (){var statearr_18818 = state_18814;(statearr_18818[9] = inst_18778__$1);
return statearr_18818;
})();if(inst_18780)
{var statearr_18819_18846 = state_18814__$1;(statearr_18819_18846[1] = 5);
} else
{var statearr_18820_18847 = state_18814__$1;(statearr_18820_18847[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18815 === 5))
{var inst_18778 = (state_18814[9]);var inst_18775 = (state_18814[8]);var inst_18782 = (state_18814[10]);var inst_18782__$1 = f.call(null,inst_18778);var inst_18783 = cljs.core._EQ_.call(null,inst_18782__$1,inst_18775);var inst_18784 = cljs.core.keyword_identical_QMARK_.call(null,inst_18775,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_18785 = (inst_18783) || (inst_18784);var state_18814__$1 = (function (){var statearr_18821 = state_18814;(statearr_18821[10] = inst_18782__$1);
return statearr_18821;
})();if(cljs.core.truth_(inst_18785))
{var statearr_18822_18848 = state_18814__$1;(statearr_18822_18848[1] = 8);
} else
{var statearr_18823_18849 = state_18814__$1;(statearr_18823_18849[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18815 === 6))
{var inst_18774 = (state_18814[7]);var inst_18799 = inst_18774.length;var inst_18800 = (inst_18799 > 0);var state_18814__$1 = state_18814;if(cljs.core.truth_(inst_18800))
{var statearr_18825_18850 = state_18814__$1;(statearr_18825_18850[1] = 12);
} else
{var statearr_18826_18851 = state_18814__$1;(statearr_18826_18851[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18815 === 7))
{var inst_18810 = (state_18814[2]);var state_18814__$1 = state_18814;var statearr_18827_18852 = state_18814__$1;(statearr_18827_18852[2] = inst_18810);
(statearr_18827_18852[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18815 === 8))
{var inst_18778 = (state_18814[9]);var inst_18774 = (state_18814[7]);var inst_18782 = (state_18814[10]);var inst_18787 = inst_18774.push(inst_18778);var tmp18824 = inst_18774;var inst_18774__$1 = tmp18824;var inst_18775 = inst_18782;var state_18814__$1 = (function (){var statearr_18828 = state_18814;(statearr_18828[7] = inst_18774__$1);
(statearr_18828[8] = inst_18775);
(statearr_18828[11] = inst_18787);
return statearr_18828;
})();var statearr_18829_18853 = state_18814__$1;(statearr_18829_18853[2] = null);
(statearr_18829_18853[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18815 === 9))
{var inst_18774 = (state_18814[7]);var inst_18790 = cljs.core.vec.call(null,inst_18774);var state_18814__$1 = state_18814;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18814__$1,11,out,inst_18790);
} else
{if((state_val_18815 === 10))
{var inst_18797 = (state_18814[2]);var state_18814__$1 = state_18814;var statearr_18830_18854 = state_18814__$1;(statearr_18830_18854[2] = inst_18797);
(statearr_18830_18854[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18815 === 11))
{var inst_18778 = (state_18814[9]);var inst_18782 = (state_18814[10]);var inst_18792 = (state_18814[2]);var inst_18793 = [];var inst_18794 = inst_18793.push(inst_18778);var inst_18774 = inst_18793;var inst_18775 = inst_18782;var state_18814__$1 = (function (){var statearr_18831 = state_18814;(statearr_18831[7] = inst_18774);
(statearr_18831[8] = inst_18775);
(statearr_18831[12] = inst_18792);
(statearr_18831[13] = inst_18794);
return statearr_18831;
})();var statearr_18832_18855 = state_18814__$1;(statearr_18832_18855[2] = null);
(statearr_18832_18855[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18815 === 12))
{var inst_18774 = (state_18814[7]);var inst_18802 = cljs.core.vec.call(null,inst_18774);var state_18814__$1 = state_18814;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18814__$1,15,out,inst_18802);
} else
{if((state_val_18815 === 13))
{var state_18814__$1 = state_18814;var statearr_18833_18856 = state_18814__$1;(statearr_18833_18856[2] = null);
(statearr_18833_18856[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18815 === 14))
{var inst_18807 = (state_18814[2]);var inst_18808 = cljs.core.async.close_BANG_.call(null,out);var state_18814__$1 = (function (){var statearr_18834 = state_18814;(statearr_18834[14] = inst_18807);
return statearr_18834;
})();var statearr_18835_18857 = state_18814__$1;(statearr_18835_18857[2] = inst_18808);
(statearr_18835_18857[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18815 === 15))
{var inst_18804 = (state_18814[2]);var state_18814__$1 = state_18814;var statearr_18836_18858 = state_18814__$1;(statearr_18836_18858[2] = inst_18804);
(statearr_18836_18858[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});})(c__5635__auto___18844,out))
;return ((function (switch__5620__auto__,c__5635__auto___18844,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_18840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18840[0] = state_machine__5621__auto__);
(statearr_18840[1] = 1);
return statearr_18840;
});
var state_machine__5621__auto____1 = (function (state_18814){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_18814);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e18841){if((e18841 instanceof Object))
{var ex__5624__auto__ = e18841;var statearr_18842_18859 = state_18814;(statearr_18842_18859[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18814);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18841;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18860 = state_18814;
state_18814 = G__18860;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_18814){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_18814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___18844,out))
})();var state__5637__auto__ = (function (){var statearr_18843 = f__5636__auto__.call(null);(statearr_18843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___18844);
return statearr_18843;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___18844,out))
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
