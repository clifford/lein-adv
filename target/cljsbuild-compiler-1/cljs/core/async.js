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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9575 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9575 = (function (f,fn_handler,meta9576){
this.f = f;
this.fn_handler = fn_handler;
this.meta9576 = meta9576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9575.cljs$lang$type = true;
cljs.core.async.t9575.cljs$lang$ctorStr = "cljs.core.async/t9575";
cljs.core.async.t9575.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t9575");
});
cljs.core.async.t9575.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9577){var self__ = this;
var _9577__$1 = this;return self__.meta9576;
});
cljs.core.async.t9575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9577,meta9576__$1){var self__ = this;
var _9577__$1 = this;return (new cljs.core.async.t9575(self__.f,self__.fn_handler,meta9576__$1));
});
cljs.core.async.__GT_t9575 = (function __GT_t9575(f__$1,fn_handler__$1,meta9576){return (new cljs.core.async.t9575(f__$1,fn_handler__$1,meta9576));
});
}
return (new cljs.core.async.t9575(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9579 = buff;if(G__9579)
{var bit__4128__auto__ = null;if(cljs.core.truth_((function (){var or__3478__auto__ = bit__4128__auto__;if(cljs.core.truth_(or__3478__auto__))
{return or__3478__auto__;
} else
{return G__9579.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9579.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9579);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9579);
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
{var val_9580 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9580);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_9580,ret){
return (function (){return fn1.call(null,val_9580);
});})(val_9580,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4326__auto___9581 = n;var x_9582 = 0;while(true){
if((x_9582 < n__4326__auto___9581))
{(a[x_9582] = 0);
{
var G__9583 = (x_9582 + 1);
x_9582 = G__9583;
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
var G__9584 = (i + 1);
i = G__9584;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9588 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9588 = (function (flag,alt_flag,meta9589){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9589 = meta9589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9588.cljs$lang$type = true;
cljs.core.async.t9588.cljs$lang$ctorStr = "cljs.core.async/t9588";
cljs.core.async.t9588.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t9588");
});})(flag))
;
cljs.core.async.t9588.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t9588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t9588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9590){var self__ = this;
var _9590__$1 = this;return self__.meta9589;
});})(flag))
;
cljs.core.async.t9588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9590,meta9589__$1){var self__ = this;
var _9590__$1 = this;return (new cljs.core.async.t9588(self__.flag,self__.alt_flag,meta9589__$1));
});})(flag))
;
cljs.core.async.__GT_t9588 = ((function (flag){
return (function __GT_t9588(flag__$1,alt_flag__$1,meta9589){return (new cljs.core.async.t9588(flag__$1,alt_flag__$1,meta9589));
});})(flag))
;
}
return (new cljs.core.async.t9588(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9594 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9594 = (function (cb,flag,alt_handler,meta9595){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9595 = meta9595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9594.cljs$lang$type = true;
cljs.core.async.t9594.cljs$lang$ctorStr = "cljs.core.async/t9594";
cljs.core.async.t9594.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t9594");
});
cljs.core.async.t9594.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9596){var self__ = this;
var _9596__$1 = this;return self__.meta9595;
});
cljs.core.async.t9594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9596,meta9595__$1){var self__ = this;
var _9596__$1 = this;return (new cljs.core.async.t9594(self__.cb,self__.flag,self__.alt_handler,meta9595__$1));
});
cljs.core.async.__GT_t9594 = (function __GT_t9594(cb__$1,flag__$1,alt_handler__$1,meta9595){return (new cljs.core.async.t9594(cb__$1,flag__$1,alt_handler__$1,meta9595));
});
}
return (new cljs.core.async.t9594(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9597_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9597_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9598_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9598_SHARP_,port], null));
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
var G__9599 = (i + 1);
i = G__9599;
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
var alts_BANG___delegate = function (ports,p__9600){var map__9602 = p__9600;var map__9602__$1 = ((cljs.core.seq_QMARK_.call(null,map__9602))?cljs.core.apply.call(null,cljs.core.hash_map,map__9602):map__9602);var opts = map__9602__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__9600 = null;if (arguments.length > 1) {
  p__9600 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9600);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9603){
var ports = cljs.core.first(arglist__9603);
var p__9600 = cljs.core.rest(arglist__9603);
return alts_BANG___delegate(ports,p__9600);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9611 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9611 = (function (ch,f,map_LT_,meta9612){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9612 = meta9612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9611.cljs$lang$type = true;
cljs.core.async.t9611.cljs$lang$ctorStr = "cljs.core.async/t9611";
cljs.core.async.t9611.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t9611");
});
cljs.core.async.t9611.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t9611.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9614 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9614 = (function (fn1,_,meta9612,ch,f,map_LT_,meta9615){
this.fn1 = fn1;
this._ = _;
this.meta9612 = meta9612;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9615 = meta9615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9614.cljs$lang$type = true;
cljs.core.async.t9614.cljs$lang$ctorStr = "cljs.core.async/t9614";
cljs.core.async.t9614.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t9614");
});})(___$1))
;
cljs.core.async.t9614.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t9614.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t9614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__9604_SHARP_){return f1.call(null,(((p1__9604_SHARP_ == null))?null:self__.f.call(null,p1__9604_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t9614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9616){var self__ = this;
var _9616__$1 = this;return self__.meta9615;
});})(___$1))
;
cljs.core.async.t9614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9616,meta9615__$1){var self__ = this;
var _9616__$1 = this;return (new cljs.core.async.t9614(self__.fn1,self__._,self__.meta9612,self__.ch,self__.f,self__.map_LT_,meta9615__$1));
});})(___$1))
;
cljs.core.async.__GT_t9614 = ((function (___$1){
return (function __GT_t9614(fn1__$1,___$2,meta9612__$1,ch__$2,f__$2,map_LT___$2,meta9615){return (new cljs.core.async.t9614(fn1__$1,___$2,meta9612__$1,ch__$2,f__$2,map_LT___$2,meta9615));
});})(___$1))
;
}
return (new cljs.core.async.t9614(fn1,___$1,self__.meta9612,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t9611.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9611.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t9611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9613){var self__ = this;
var _9613__$1 = this;return self__.meta9612;
});
cljs.core.async.t9611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9613,meta9612__$1){var self__ = this;
var _9613__$1 = this;return (new cljs.core.async.t9611(self__.ch,self__.f,self__.map_LT_,meta9612__$1));
});
cljs.core.async.__GT_t9611 = (function __GT_t9611(ch__$1,f__$1,map_LT___$1,meta9612){return (new cljs.core.async.t9611(ch__$1,f__$1,map_LT___$1,meta9612));
});
}
return (new cljs.core.async.t9611(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9620 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9620 = (function (ch,f,map_GT_,meta9621){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9621 = meta9621;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9620.cljs$lang$type = true;
cljs.core.async.t9620.cljs$lang$ctorStr = "cljs.core.async/t9620";
cljs.core.async.t9620.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t9620");
});
cljs.core.async.t9620.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9620.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t9620.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9620.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9620.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9620.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9622){var self__ = this;
var _9622__$1 = this;return self__.meta9621;
});
cljs.core.async.t9620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9622,meta9621__$1){var self__ = this;
var _9622__$1 = this;return (new cljs.core.async.t9620(self__.ch,self__.f,self__.map_GT_,meta9621__$1));
});
cljs.core.async.__GT_t9620 = (function __GT_t9620(ch__$1,f__$1,map_GT___$1,meta9621){return (new cljs.core.async.t9620(ch__$1,f__$1,map_GT___$1,meta9621));
});
}
return (new cljs.core.async.t9620(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9626 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9626 = (function (ch,p,filter_GT_,meta9627){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9627 = meta9627;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9626.cljs$lang$type = true;
cljs.core.async.t9626.cljs$lang$ctorStr = "cljs.core.async/t9626";
cljs.core.async.t9626.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t9626");
});
cljs.core.async.t9626.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9626.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t9626.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9626.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9626.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9626.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9626.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t9626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9628){var self__ = this;
var _9628__$1 = this;return self__.meta9627;
});
cljs.core.async.t9626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9628,meta9627__$1){var self__ = this;
var _9628__$1 = this;return (new cljs.core.async.t9626(self__.ch,self__.p,self__.filter_GT_,meta9627__$1));
});
cljs.core.async.__GT_t9626 = (function __GT_t9626(ch__$1,p__$1,filter_GT___$1,meta9627){return (new cljs.core.async.t9626(ch__$1,p__$1,filter_GT___$1,meta9627));
});
}
return (new cljs.core.async.t9626(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5635__auto___9711 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___9711,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___9711,out){
return (function (state_9690){var state_val_9691 = (state_9690[1]);if((state_val_9691 === 1))
{var state_9690__$1 = state_9690;var statearr_9692_9712 = state_9690__$1;(statearr_9692_9712[2] = null);
(statearr_9692_9712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9691 === 2))
{var state_9690__$1 = state_9690;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9690__$1,4,ch);
} else
{if((state_val_9691 === 3))
{var inst_9688 = (state_9690[2]);var state_9690__$1 = state_9690;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9690__$1,inst_9688);
} else
{if((state_val_9691 === 4))
{var inst_9672 = (state_9690[7]);var inst_9672__$1 = (state_9690[2]);var inst_9673 = (inst_9672__$1 == null);var state_9690__$1 = (function (){var statearr_9693 = state_9690;(statearr_9693[7] = inst_9672__$1);
return statearr_9693;
})();if(cljs.core.truth_(inst_9673))
{var statearr_9694_9713 = state_9690__$1;(statearr_9694_9713[1] = 5);
} else
{var statearr_9695_9714 = state_9690__$1;(statearr_9695_9714[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9691 === 5))
{var inst_9675 = cljs.core.async.close_BANG_.call(null,out);var state_9690__$1 = state_9690;var statearr_9696_9715 = state_9690__$1;(statearr_9696_9715[2] = inst_9675);
(statearr_9696_9715[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9691 === 6))
{var inst_9672 = (state_9690[7]);var inst_9677 = p.call(null,inst_9672);var state_9690__$1 = state_9690;if(cljs.core.truth_(inst_9677))
{var statearr_9697_9716 = state_9690__$1;(statearr_9697_9716[1] = 8);
} else
{var statearr_9698_9717 = state_9690__$1;(statearr_9698_9717[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9691 === 7))
{var inst_9686 = (state_9690[2]);var state_9690__$1 = state_9690;var statearr_9699_9718 = state_9690__$1;(statearr_9699_9718[2] = inst_9686);
(statearr_9699_9718[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9691 === 8))
{var inst_9672 = (state_9690[7]);var state_9690__$1 = state_9690;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9690__$1,11,out,inst_9672);
} else
{if((state_val_9691 === 9))
{var state_9690__$1 = state_9690;var statearr_9700_9719 = state_9690__$1;(statearr_9700_9719[2] = null);
(statearr_9700_9719[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9691 === 10))
{var inst_9683 = (state_9690[2]);var state_9690__$1 = (function (){var statearr_9701 = state_9690;(statearr_9701[8] = inst_9683);
return statearr_9701;
})();var statearr_9702_9720 = state_9690__$1;(statearr_9702_9720[2] = null);
(statearr_9702_9720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9691 === 11))
{var inst_9680 = (state_9690[2]);var state_9690__$1 = state_9690;var statearr_9703_9721 = state_9690__$1;(statearr_9703_9721[2] = inst_9680);
(statearr_9703_9721[1] = 10);
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
});})(c__5635__auto___9711,out))
;return ((function (switch__5620__auto__,c__5635__auto___9711,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_9707 = [null,null,null,null,null,null,null,null,null];(statearr_9707[0] = state_machine__5621__auto__);
(statearr_9707[1] = 1);
return statearr_9707;
});
var state_machine__5621__auto____1 = (function (state_9690){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_9690);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e9708){if((e9708 instanceof Object))
{var ex__5624__auto__ = e9708;var statearr_9709_9722 = state_9690;(statearr_9709_9722[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9690);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9723 = state_9690;
state_9690 = G__9723;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_9690){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_9690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___9711,out))
})();var state__5637__auto__ = (function (){var statearr_9710 = f__5636__auto__.call(null);(statearr_9710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___9711);
return statearr_9710;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___9711,out))
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
return (function (state_9889){var state_val_9890 = (state_9889[1]);if((state_val_9890 === 1))
{var state_9889__$1 = state_9889;var statearr_9891_9932 = state_9889__$1;(statearr_9891_9932[2] = null);
(statearr_9891_9932[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 2))
{var state_9889__$1 = state_9889;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9889__$1,4,in$);
} else
{if((state_val_9890 === 3))
{var inst_9887 = (state_9889[2]);var state_9889__$1 = state_9889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9889__$1,inst_9887);
} else
{if((state_val_9890 === 4))
{var inst_9830 = (state_9889[7]);var inst_9830__$1 = (state_9889[2]);var inst_9831 = (inst_9830__$1 == null);var state_9889__$1 = (function (){var statearr_9892 = state_9889;(statearr_9892[7] = inst_9830__$1);
return statearr_9892;
})();if(cljs.core.truth_(inst_9831))
{var statearr_9893_9933 = state_9889__$1;(statearr_9893_9933[1] = 5);
} else
{var statearr_9894_9934 = state_9889__$1;(statearr_9894_9934[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 5))
{var inst_9833 = cljs.core.async.close_BANG_.call(null,out);var state_9889__$1 = state_9889;var statearr_9895_9935 = state_9889__$1;(statearr_9895_9935[2] = inst_9833);
(statearr_9895_9935[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 6))
{var inst_9830 = (state_9889[7]);var inst_9839 = f.call(null,inst_9830);var inst_9840 = cljs.core.seq.call(null,inst_9839);var inst_9841 = inst_9840;var inst_9842 = null;var inst_9843 = 0;var inst_9844 = 0;var state_9889__$1 = (function (){var statearr_9896 = state_9889;(statearr_9896[8] = inst_9842);
(statearr_9896[9] = inst_9843);
(statearr_9896[10] = inst_9841);
(statearr_9896[11] = inst_9844);
return statearr_9896;
})();var statearr_9897_9936 = state_9889__$1;(statearr_9897_9936[2] = null);
(statearr_9897_9936[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 7))
{var inst_9885 = (state_9889[2]);var state_9889__$1 = state_9889;var statearr_9898_9937 = state_9889__$1;(statearr_9898_9937[2] = inst_9885);
(statearr_9898_9937[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 8))
{var inst_9843 = (state_9889[9]);var inst_9844 = (state_9889[11]);var inst_9846 = (inst_9844 < inst_9843);var inst_9847 = inst_9846;var state_9889__$1 = state_9889;if(cljs.core.truth_(inst_9847))
{var statearr_9899_9938 = state_9889__$1;(statearr_9899_9938[1] = 10);
} else
{var statearr_9900_9939 = state_9889__$1;(statearr_9900_9939[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 9))
{var inst_9877 = (state_9889[2]);var inst_9878 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_9889__$1 = (function (){var statearr_9901 = state_9889;(statearr_9901[12] = inst_9877);
return statearr_9901;
})();if(cljs.core.truth_(inst_9878))
{var statearr_9902_9940 = state_9889__$1;(statearr_9902_9940[1] = 21);
} else
{var statearr_9903_9941 = state_9889__$1;(statearr_9903_9941[1] = 22);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 10))
{var inst_9842 = (state_9889[8]);var inst_9844 = (state_9889[11]);var inst_9849 = cljs.core._nth.call(null,inst_9842,inst_9844);var state_9889__$1 = state_9889;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9889__$1,13,out,inst_9849);
} else
{if((state_val_9890 === 11))
{var inst_9841 = (state_9889[10]);var inst_9855 = (state_9889[13]);var inst_9855__$1 = cljs.core.seq.call(null,inst_9841);var state_9889__$1 = (function (){var statearr_9907 = state_9889;(statearr_9907[13] = inst_9855__$1);
return statearr_9907;
})();if(inst_9855__$1)
{var statearr_9908_9942 = state_9889__$1;(statearr_9908_9942[1] = 14);
} else
{var statearr_9909_9943 = state_9889__$1;(statearr_9909_9943[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 12))
{var inst_9875 = (state_9889[2]);var state_9889__$1 = state_9889;var statearr_9910_9944 = state_9889__$1;(statearr_9910_9944[2] = inst_9875);
(statearr_9910_9944[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 13))
{var inst_9842 = (state_9889[8]);var inst_9843 = (state_9889[9]);var inst_9841 = (state_9889[10]);var inst_9844 = (state_9889[11]);var inst_9851 = (state_9889[2]);var inst_9852 = (inst_9844 + 1);var tmp9904 = inst_9842;var tmp9905 = inst_9843;var tmp9906 = inst_9841;var inst_9841__$1 = tmp9906;var inst_9842__$1 = tmp9904;var inst_9843__$1 = tmp9905;var inst_9844__$1 = inst_9852;var state_9889__$1 = (function (){var statearr_9911 = state_9889;(statearr_9911[8] = inst_9842__$1);
(statearr_9911[9] = inst_9843__$1);
(statearr_9911[10] = inst_9841__$1);
(statearr_9911[14] = inst_9851);
(statearr_9911[11] = inst_9844__$1);
return statearr_9911;
})();var statearr_9912_9945 = state_9889__$1;(statearr_9912_9945[2] = null);
(statearr_9912_9945[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 14))
{var inst_9855 = (state_9889[13]);var inst_9857 = cljs.core.chunked_seq_QMARK_.call(null,inst_9855);var state_9889__$1 = state_9889;if(inst_9857)
{var statearr_9913_9946 = state_9889__$1;(statearr_9913_9946[1] = 17);
} else
{var statearr_9914_9947 = state_9889__$1;(statearr_9914_9947[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 15))
{var state_9889__$1 = state_9889;var statearr_9915_9948 = state_9889__$1;(statearr_9915_9948[2] = null);
(statearr_9915_9948[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 16))
{var inst_9873 = (state_9889[2]);var state_9889__$1 = state_9889;var statearr_9916_9949 = state_9889__$1;(statearr_9916_9949[2] = inst_9873);
(statearr_9916_9949[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 17))
{var inst_9855 = (state_9889[13]);var inst_9859 = cljs.core.chunk_first.call(null,inst_9855);var inst_9860 = cljs.core.chunk_rest.call(null,inst_9855);var inst_9861 = cljs.core.count.call(null,inst_9859);var inst_9841 = inst_9860;var inst_9842 = inst_9859;var inst_9843 = inst_9861;var inst_9844 = 0;var state_9889__$1 = (function (){var statearr_9917 = state_9889;(statearr_9917[8] = inst_9842);
(statearr_9917[9] = inst_9843);
(statearr_9917[10] = inst_9841);
(statearr_9917[11] = inst_9844);
return statearr_9917;
})();var statearr_9918_9950 = state_9889__$1;(statearr_9918_9950[2] = null);
(statearr_9918_9950[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 18))
{var inst_9855 = (state_9889[13]);var inst_9864 = cljs.core.first.call(null,inst_9855);var state_9889__$1 = state_9889;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9889__$1,20,out,inst_9864);
} else
{if((state_val_9890 === 19))
{var inst_9870 = (state_9889[2]);var state_9889__$1 = state_9889;var statearr_9919_9951 = state_9889__$1;(statearr_9919_9951[2] = inst_9870);
(statearr_9919_9951[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 20))
{var inst_9855 = (state_9889[13]);var inst_9866 = (state_9889[2]);var inst_9867 = cljs.core.next.call(null,inst_9855);var inst_9841 = inst_9867;var inst_9842 = null;var inst_9843 = 0;var inst_9844 = 0;var state_9889__$1 = (function (){var statearr_9920 = state_9889;(statearr_9920[15] = inst_9866);
(statearr_9920[8] = inst_9842);
(statearr_9920[9] = inst_9843);
(statearr_9920[10] = inst_9841);
(statearr_9920[11] = inst_9844);
return statearr_9920;
})();var statearr_9921_9952 = state_9889__$1;(statearr_9921_9952[2] = null);
(statearr_9921_9952[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 21))
{var state_9889__$1 = state_9889;var statearr_9922_9953 = state_9889__$1;(statearr_9922_9953[2] = null);
(statearr_9922_9953[1] = 23);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 22))
{var state_9889__$1 = state_9889;var statearr_9923_9954 = state_9889__$1;(statearr_9923_9954[2] = null);
(statearr_9923_9954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9890 === 23))
{var inst_9883 = (state_9889[2]);var state_9889__$1 = state_9889;var statearr_9924_9955 = state_9889__$1;(statearr_9924_9955[2] = inst_9883);
(statearr_9924_9955[1] = 7);
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
var state_machine__5621__auto____0 = (function (){var statearr_9928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_9928[0] = state_machine__5621__auto__);
(statearr_9928[1] = 1);
return statearr_9928;
});
var state_machine__5621__auto____1 = (function (state_9889){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_9889);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e9929){if((e9929 instanceof Object))
{var ex__5624__auto__ = e9929;var statearr_9930_9956 = state_9889;(statearr_9930_9956[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9889);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9957 = state_9889;
state_9889 = G__9957;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_9889){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_9889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto__))
})();var state__5637__auto__ = (function (){var statearr_9931 = f__5636__auto__.call(null);(statearr_9931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto__);
return statearr_9931;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5635__auto___10052 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___10052){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___10052){
return (function (state_10028){var state_val_10029 = (state_10028[1]);if((state_val_10029 === 1))
{var state_10028__$1 = state_10028;var statearr_10030_10053 = state_10028__$1;(statearr_10030_10053[2] = null);
(statearr_10030_10053[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10029 === 2))
{var state_10028__$1 = state_10028;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10028__$1,4,from);
} else
{if((state_val_10029 === 3))
{var inst_10026 = (state_10028[2]);var state_10028__$1 = state_10028;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10028__$1,inst_10026);
} else
{if((state_val_10029 === 4))
{var inst_10007 = (state_10028[7]);var inst_10007__$1 = (state_10028[2]);var inst_10008 = (inst_10007__$1 == null);var state_10028__$1 = (function (){var statearr_10031 = state_10028;(statearr_10031[7] = inst_10007__$1);
return statearr_10031;
})();if(cljs.core.truth_(inst_10008))
{var statearr_10032_10054 = state_10028__$1;(statearr_10032_10054[1] = 5);
} else
{var statearr_10033_10055 = state_10028__$1;(statearr_10033_10055[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10029 === 5))
{var state_10028__$1 = state_10028;if(cljs.core.truth_(close_QMARK_))
{var statearr_10034_10056 = state_10028__$1;(statearr_10034_10056[1] = 8);
} else
{var statearr_10035_10057 = state_10028__$1;(statearr_10035_10057[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10029 === 6))
{var inst_10007 = (state_10028[7]);var state_10028__$1 = state_10028;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10028__$1,11,to,inst_10007);
} else
{if((state_val_10029 === 7))
{var inst_10024 = (state_10028[2]);var state_10028__$1 = state_10028;var statearr_10036_10058 = state_10028__$1;(statearr_10036_10058[2] = inst_10024);
(statearr_10036_10058[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10029 === 8))
{var inst_10011 = cljs.core.async.close_BANG_.call(null,to);var state_10028__$1 = state_10028;var statearr_10037_10059 = state_10028__$1;(statearr_10037_10059[2] = inst_10011);
(statearr_10037_10059[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10029 === 9))
{var state_10028__$1 = state_10028;var statearr_10038_10060 = state_10028__$1;(statearr_10038_10060[2] = null);
(statearr_10038_10060[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10029 === 10))
{var inst_10014 = (state_10028[2]);var state_10028__$1 = state_10028;var statearr_10039_10061 = state_10028__$1;(statearr_10039_10061[2] = inst_10014);
(statearr_10039_10061[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10029 === 11))
{var inst_10017 = (state_10028[2]);var state_10028__$1 = state_10028;if(cljs.core.truth_(inst_10017))
{var statearr_10040_10062 = state_10028__$1;(statearr_10040_10062[1] = 12);
} else
{var statearr_10041_10063 = state_10028__$1;(statearr_10041_10063[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10029 === 12))
{var state_10028__$1 = state_10028;var statearr_10042_10064 = state_10028__$1;(statearr_10042_10064[2] = null);
(statearr_10042_10064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10029 === 13))
{var state_10028__$1 = state_10028;var statearr_10043_10065 = state_10028__$1;(statearr_10043_10065[2] = null);
(statearr_10043_10065[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10029 === 14))
{var inst_10022 = (state_10028[2]);var state_10028__$1 = state_10028;var statearr_10044_10066 = state_10028__$1;(statearr_10044_10066[2] = inst_10022);
(statearr_10044_10066[1] = 7);
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
});})(c__5635__auto___10052))
;return ((function (switch__5620__auto__,c__5635__auto___10052){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_10048 = [null,null,null,null,null,null,null,null];(statearr_10048[0] = state_machine__5621__auto__);
(statearr_10048[1] = 1);
return statearr_10048;
});
var state_machine__5621__auto____1 = (function (state_10028){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_10028);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e10049){if((e10049 instanceof Object))
{var ex__5624__auto__ = e10049;var statearr_10050_10067 = state_10028;(statearr_10050_10067[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10028);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10049;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10068 = state_10028;
state_10028 = G__10068;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_10028){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_10028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___10052))
})();var state__5637__auto__ = (function (){var statearr_10051 = f__5636__auto__.call(null);(statearr_10051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___10052);
return statearr_10051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___10052))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5635__auto___10169 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___10169,tc,fc){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___10169,tc,fc){
return (function (state_10144){var state_val_10145 = (state_10144[1]);if((state_val_10145 === 1))
{var state_10144__$1 = state_10144;var statearr_10146_10170 = state_10144__$1;(statearr_10146_10170[2] = null);
(statearr_10146_10170[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 2))
{var state_10144__$1 = state_10144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10144__$1,4,ch);
} else
{if((state_val_10145 === 3))
{var inst_10142 = (state_10144[2]);var state_10144__$1 = state_10144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10144__$1,inst_10142);
} else
{if((state_val_10145 === 4))
{var inst_10121 = (state_10144[7]);var inst_10121__$1 = (state_10144[2]);var inst_10122 = (inst_10121__$1 == null);var state_10144__$1 = (function (){var statearr_10147 = state_10144;(statearr_10147[7] = inst_10121__$1);
return statearr_10147;
})();if(cljs.core.truth_(inst_10122))
{var statearr_10148_10171 = state_10144__$1;(statearr_10148_10171[1] = 5);
} else
{var statearr_10149_10172 = state_10144__$1;(statearr_10149_10172[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 5))
{var inst_10124 = cljs.core.async.close_BANG_.call(null,tc);var inst_10125 = cljs.core.async.close_BANG_.call(null,fc);var state_10144__$1 = (function (){var statearr_10150 = state_10144;(statearr_10150[8] = inst_10124);
return statearr_10150;
})();var statearr_10151_10173 = state_10144__$1;(statearr_10151_10173[2] = inst_10125);
(statearr_10151_10173[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 6))
{var inst_10121 = (state_10144[7]);var inst_10127 = p.call(null,inst_10121);var state_10144__$1 = state_10144;if(cljs.core.truth_(inst_10127))
{var statearr_10152_10174 = state_10144__$1;(statearr_10152_10174[1] = 9);
} else
{var statearr_10153_10175 = state_10144__$1;(statearr_10153_10175[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 7))
{var inst_10140 = (state_10144[2]);var state_10144__$1 = state_10144;var statearr_10154_10176 = state_10144__$1;(statearr_10154_10176[2] = inst_10140);
(statearr_10154_10176[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 8))
{var inst_10133 = (state_10144[2]);var state_10144__$1 = state_10144;if(cljs.core.truth_(inst_10133))
{var statearr_10155_10177 = state_10144__$1;(statearr_10155_10177[1] = 12);
} else
{var statearr_10156_10178 = state_10144__$1;(statearr_10156_10178[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 9))
{var state_10144__$1 = state_10144;var statearr_10157_10179 = state_10144__$1;(statearr_10157_10179[2] = tc);
(statearr_10157_10179[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 10))
{var state_10144__$1 = state_10144;var statearr_10158_10180 = state_10144__$1;(statearr_10158_10180[2] = fc);
(statearr_10158_10180[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 11))
{var inst_10121 = (state_10144[7]);var inst_10131 = (state_10144[2]);var state_10144__$1 = state_10144;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10144__$1,8,inst_10131,inst_10121);
} else
{if((state_val_10145 === 12))
{var state_10144__$1 = state_10144;var statearr_10159_10181 = state_10144__$1;(statearr_10159_10181[2] = null);
(statearr_10159_10181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 13))
{var state_10144__$1 = state_10144;var statearr_10160_10182 = state_10144__$1;(statearr_10160_10182[2] = null);
(statearr_10160_10182[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10145 === 14))
{var inst_10138 = (state_10144[2]);var state_10144__$1 = state_10144;var statearr_10161_10183 = state_10144__$1;(statearr_10161_10183[2] = inst_10138);
(statearr_10161_10183[1] = 7);
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
});})(c__5635__auto___10169,tc,fc))
;return ((function (switch__5620__auto__,c__5635__auto___10169,tc,fc){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_10165 = [null,null,null,null,null,null,null,null,null];(statearr_10165[0] = state_machine__5621__auto__);
(statearr_10165[1] = 1);
return statearr_10165;
});
var state_machine__5621__auto____1 = (function (state_10144){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_10144);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e10166){if((e10166 instanceof Object))
{var ex__5624__auto__ = e10166;var statearr_10167_10184 = state_10144;(statearr_10167_10184[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10144);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10166;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10185 = state_10144;
state_10144 = G__10185;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_10144){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_10144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___10169,tc,fc))
})();var state__5637__auto__ = (function (){var statearr_10168 = f__5636__auto__.call(null);(statearr_10168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___10169);
return statearr_10168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___10169,tc,fc))
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
return (function (state_10232){var state_val_10233 = (state_10232[1]);if((state_val_10233 === 7))
{var inst_10228 = (state_10232[2]);var state_10232__$1 = state_10232;var statearr_10234_10250 = state_10232__$1;(statearr_10234_10250[2] = inst_10228);
(statearr_10234_10250[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10233 === 6))
{var inst_10218 = (state_10232[7]);var inst_10221 = (state_10232[8]);var inst_10225 = f.call(null,inst_10218,inst_10221);var inst_10218__$1 = inst_10225;var state_10232__$1 = (function (){var statearr_10235 = state_10232;(statearr_10235[7] = inst_10218__$1);
return statearr_10235;
})();var statearr_10236_10251 = state_10232__$1;(statearr_10236_10251[2] = null);
(statearr_10236_10251[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10233 === 5))
{var inst_10218 = (state_10232[7]);var state_10232__$1 = state_10232;var statearr_10237_10252 = state_10232__$1;(statearr_10237_10252[2] = inst_10218);
(statearr_10237_10252[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10233 === 4))
{var inst_10221 = (state_10232[8]);var inst_10221__$1 = (state_10232[2]);var inst_10222 = (inst_10221__$1 == null);var state_10232__$1 = (function (){var statearr_10238 = state_10232;(statearr_10238[8] = inst_10221__$1);
return statearr_10238;
})();if(cljs.core.truth_(inst_10222))
{var statearr_10239_10253 = state_10232__$1;(statearr_10239_10253[1] = 5);
} else
{var statearr_10240_10254 = state_10232__$1;(statearr_10240_10254[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10233 === 3))
{var inst_10230 = (state_10232[2]);var state_10232__$1 = state_10232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10232__$1,inst_10230);
} else
{if((state_val_10233 === 2))
{var state_10232__$1 = state_10232;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10232__$1,4,ch);
} else
{if((state_val_10233 === 1))
{var inst_10218 = init;var state_10232__$1 = (function (){var statearr_10241 = state_10232;(statearr_10241[7] = inst_10218);
return statearr_10241;
})();var statearr_10242_10255 = state_10232__$1;(statearr_10242_10255[2] = null);
(statearr_10242_10255[1] = 2);
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
var state_machine__5621__auto____0 = (function (){var statearr_10246 = [null,null,null,null,null,null,null,null,null];(statearr_10246[0] = state_machine__5621__auto__);
(statearr_10246[1] = 1);
return statearr_10246;
});
var state_machine__5621__auto____1 = (function (state_10232){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_10232);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e10247){if((e10247 instanceof Object))
{var ex__5624__auto__ = e10247;var statearr_10248_10256 = state_10232;(statearr_10248_10256[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10232);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10247;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10257 = state_10232;
state_10232 = G__10257;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_10232){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_10232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto__))
})();var state__5637__auto__ = (function (){var statearr_10249 = f__5636__auto__.call(null);(statearr_10249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto__);
return statearr_10249;
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
return (function (state_10331){var state_val_10332 = (state_10331[1]);if((state_val_10332 === 1))
{var inst_10307 = cljs.core.seq.call(null,coll);var inst_10308 = inst_10307;var state_10331__$1 = (function (){var statearr_10333 = state_10331;(statearr_10333[7] = inst_10308);
return statearr_10333;
})();var statearr_10334_10356 = state_10331__$1;(statearr_10334_10356[2] = null);
(statearr_10334_10356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 2))
{var inst_10308 = (state_10331[7]);var state_10331__$1 = state_10331;if(cljs.core.truth_(inst_10308))
{var statearr_10335_10357 = state_10331__$1;(statearr_10335_10357[1] = 4);
} else
{var statearr_10336_10358 = state_10331__$1;(statearr_10336_10358[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 3))
{var inst_10329 = (state_10331[2]);var state_10331__$1 = state_10331;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10331__$1,inst_10329);
} else
{if((state_val_10332 === 4))
{var inst_10308 = (state_10331[7]);var inst_10311 = cljs.core.first.call(null,inst_10308);var state_10331__$1 = state_10331;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10331__$1,7,ch,inst_10311);
} else
{if((state_val_10332 === 5))
{var inst_10308 = (state_10331[7]);var state_10331__$1 = state_10331;var statearr_10337_10359 = state_10331__$1;(statearr_10337_10359[2] = inst_10308);
(statearr_10337_10359[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 6))
{var inst_10316 = (state_10331[2]);var state_10331__$1 = state_10331;if(cljs.core.truth_(inst_10316))
{var statearr_10338_10360 = state_10331__$1;(statearr_10338_10360[1] = 8);
} else
{var statearr_10339_10361 = state_10331__$1;(statearr_10339_10361[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 7))
{var inst_10313 = (state_10331[2]);var state_10331__$1 = state_10331;var statearr_10340_10362 = state_10331__$1;(statearr_10340_10362[2] = inst_10313);
(statearr_10340_10362[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 8))
{var inst_10308 = (state_10331[7]);var inst_10318 = cljs.core.next.call(null,inst_10308);var inst_10308__$1 = inst_10318;var state_10331__$1 = (function (){var statearr_10341 = state_10331;(statearr_10341[7] = inst_10308__$1);
return statearr_10341;
})();var statearr_10342_10363 = state_10331__$1;(statearr_10342_10363[2] = null);
(statearr_10342_10363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 9))
{var state_10331__$1 = state_10331;if(cljs.core.truth_(close_QMARK_))
{var statearr_10343_10364 = state_10331__$1;(statearr_10343_10364[1] = 11);
} else
{var statearr_10344_10365 = state_10331__$1;(statearr_10344_10365[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 10))
{var inst_10327 = (state_10331[2]);var state_10331__$1 = state_10331;var statearr_10345_10366 = state_10331__$1;(statearr_10345_10366[2] = inst_10327);
(statearr_10345_10366[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 11))
{var inst_10322 = cljs.core.async.close_BANG_.call(null,ch);var state_10331__$1 = state_10331;var statearr_10346_10367 = state_10331__$1;(statearr_10346_10367[2] = inst_10322);
(statearr_10346_10367[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 12))
{var state_10331__$1 = state_10331;var statearr_10347_10368 = state_10331__$1;(statearr_10347_10368[2] = null);
(statearr_10347_10368[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10332 === 13))
{var inst_10325 = (state_10331[2]);var state_10331__$1 = state_10331;var statearr_10348_10369 = state_10331__$1;(statearr_10348_10369[2] = inst_10325);
(statearr_10348_10369[1] = 10);
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
var state_machine__5621__auto____0 = (function (){var statearr_10352 = [null,null,null,null,null,null,null,null];(statearr_10352[0] = state_machine__5621__auto__);
(statearr_10352[1] = 1);
return statearr_10352;
});
var state_machine__5621__auto____1 = (function (state_10331){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_10331);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e10353){if((e10353 instanceof Object))
{var ex__5624__auto__ = e10353;var statearr_10354_10370 = state_10331;(statearr_10354_10370[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10331);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10371 = state_10331;
state_10331 = G__10371;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_10331){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_10331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto__))
})();var state__5637__auto__ = (function (){var statearr_10355 = f__5636__auto__.call(null);(statearr_10355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto__);
return statearr_10355;
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
cljs.core.async.Mux = (function (){var obj10373 = {};return obj10373;
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
cljs.core.async.Mult = (function (){var obj10375 = {};return obj10375;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10597 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10597 = (function (cs,ch,mult,meta10598){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10598 = meta10598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10597.cljs$lang$type = true;
cljs.core.async.t10597.cljs$lang$ctorStr = "cljs.core.async/t10597";
cljs.core.async.t10597.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t10597");
});})(cs))
;
cljs.core.async.t10597.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10597.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10597.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10597.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10597.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10597.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10599){var self__ = this;
var _10599__$1 = this;return self__.meta10598;
});})(cs))
;
cljs.core.async.t10597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10599,meta10598__$1){var self__ = this;
var _10599__$1 = this;return (new cljs.core.async.t10597(self__.cs,self__.ch,self__.mult,meta10598__$1));
});})(cs))
;
cljs.core.async.__GT_t10597 = ((function (cs){
return (function __GT_t10597(cs__$1,ch__$1,mult__$1,meta10598){return (new cljs.core.async.t10597(cs__$1,ch__$1,mult__$1,meta10598));
});})(cs))
;
}
return (new cljs.core.async.t10597(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5635__auto___10818 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___10818,cs,m,dchan,dctr,done){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___10818,cs,m,dchan,dctr,done){
return (function (state_10730){var state_val_10731 = (state_10730[1]);if((state_val_10731 === 32))
{var inst_10673 = (state_10730[7]);var inst_10672 = (state_10730[8]);var inst_10671 = (state_10730[9]);var inst_10670 = (state_10730[10]);var inst_10685 = (state_10730[2]);var inst_10686 = (inst_10673 + 1);var tmp10732 = inst_10672;var tmp10733 = inst_10671;var tmp10734 = inst_10670;var inst_10670__$1 = tmp10734;var inst_10671__$1 = tmp10733;var inst_10672__$1 = tmp10732;var inst_10673__$1 = inst_10686;var state_10730__$1 = (function (){var statearr_10735 = state_10730;(statearr_10735[11] = inst_10685);
(statearr_10735[7] = inst_10673__$1);
(statearr_10735[8] = inst_10672__$1);
(statearr_10735[9] = inst_10671__$1);
(statearr_10735[10] = inst_10670__$1);
return statearr_10735;
})();var statearr_10736_10819 = state_10730__$1;(statearr_10736_10819[2] = null);
(statearr_10736_10819[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 1))
{var state_10730__$1 = state_10730;var statearr_10737_10820 = state_10730__$1;(statearr_10737_10820[2] = null);
(statearr_10737_10820[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 33))
{var inst_10689 = (state_10730[12]);var inst_10691 = cljs.core.chunked_seq_QMARK_.call(null,inst_10689);var state_10730__$1 = state_10730;if(inst_10691)
{var statearr_10738_10821 = state_10730__$1;(statearr_10738_10821[1] = 36);
} else
{var statearr_10739_10822 = state_10730__$1;(statearr_10739_10822[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 2))
{var state_10730__$1 = state_10730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10730__$1,4,ch);
} else
{if((state_val_10731 === 34))
{var state_10730__$1 = state_10730;var statearr_10740_10823 = state_10730__$1;(statearr_10740_10823[2] = null);
(statearr_10740_10823[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 3))
{var inst_10728 = (state_10730[2]);var state_10730__$1 = state_10730;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10730__$1,inst_10728);
} else
{if((state_val_10731 === 35))
{var inst_10712 = (state_10730[2]);var state_10730__$1 = state_10730;var statearr_10741_10824 = state_10730__$1;(statearr_10741_10824[2] = inst_10712);
(statearr_10741_10824[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 4))
{var inst_10602 = (state_10730[13]);var inst_10602__$1 = (state_10730[2]);var inst_10603 = (inst_10602__$1 == null);var state_10730__$1 = (function (){var statearr_10742 = state_10730;(statearr_10742[13] = inst_10602__$1);
return statearr_10742;
})();if(cljs.core.truth_(inst_10603))
{var statearr_10743_10825 = state_10730__$1;(statearr_10743_10825[1] = 5);
} else
{var statearr_10744_10826 = state_10730__$1;(statearr_10744_10826[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 36))
{var inst_10689 = (state_10730[12]);var inst_10693 = cljs.core.chunk_first.call(null,inst_10689);var inst_10694 = cljs.core.chunk_rest.call(null,inst_10689);var inst_10695 = cljs.core.count.call(null,inst_10693);var inst_10670 = inst_10694;var inst_10671 = inst_10693;var inst_10672 = inst_10695;var inst_10673 = 0;var state_10730__$1 = (function (){var statearr_10745 = state_10730;(statearr_10745[7] = inst_10673);
(statearr_10745[8] = inst_10672);
(statearr_10745[9] = inst_10671);
(statearr_10745[10] = inst_10670);
return statearr_10745;
})();var statearr_10746_10827 = state_10730__$1;(statearr_10746_10827[2] = null);
(statearr_10746_10827[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 5))
{var inst_10609 = cljs.core.deref.call(null,cs);var inst_10610 = cljs.core.seq.call(null,inst_10609);var inst_10611 = inst_10610;var inst_10612 = null;var inst_10613 = 0;var inst_10614 = 0;var state_10730__$1 = (function (){var statearr_10747 = state_10730;(statearr_10747[14] = inst_10614);
(statearr_10747[15] = inst_10613);
(statearr_10747[16] = inst_10611);
(statearr_10747[17] = inst_10612);
return statearr_10747;
})();var statearr_10748_10828 = state_10730__$1;(statearr_10748_10828[2] = null);
(statearr_10748_10828[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 37))
{var inst_10689 = (state_10730[12]);var inst_10602 = (state_10730[13]);var inst_10698 = (state_10730[18]);var inst_10698__$1 = cljs.core.first.call(null,inst_10689);var inst_10699 = cljs.core.async.put_BANG_.call(null,inst_10698__$1,inst_10602,done);var state_10730__$1 = (function (){var statearr_10749 = state_10730;(statearr_10749[18] = inst_10698__$1);
return statearr_10749;
})();if(cljs.core.truth_(inst_10699))
{var statearr_10750_10829 = state_10730__$1;(statearr_10750_10829[1] = 39);
} else
{var statearr_10751_10830 = state_10730__$1;(statearr_10751_10830[1] = 40);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 6))
{var inst_10662 = (state_10730[19]);var inst_10661 = cljs.core.deref.call(null,cs);var inst_10662__$1 = cljs.core.keys.call(null,inst_10661);var inst_10663 = cljs.core.count.call(null,inst_10662__$1);var inst_10664 = cljs.core.reset_BANG_.call(null,dctr,inst_10663);var inst_10669 = cljs.core.seq.call(null,inst_10662__$1);var inst_10670 = inst_10669;var inst_10671 = null;var inst_10672 = 0;var inst_10673 = 0;var state_10730__$1 = (function (){var statearr_10752 = state_10730;(statearr_10752[20] = inst_10664);
(statearr_10752[7] = inst_10673);
(statearr_10752[8] = inst_10672);
(statearr_10752[9] = inst_10671);
(statearr_10752[10] = inst_10670);
(statearr_10752[19] = inst_10662__$1);
return statearr_10752;
})();var statearr_10753_10831 = state_10730__$1;(statearr_10753_10831[2] = null);
(statearr_10753_10831[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 38))
{var inst_10709 = (state_10730[2]);var state_10730__$1 = state_10730;var statearr_10754_10832 = state_10730__$1;(statearr_10754_10832[2] = inst_10709);
(statearr_10754_10832[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 7))
{var inst_10726 = (state_10730[2]);var state_10730__$1 = state_10730;var statearr_10755_10833 = state_10730__$1;(statearr_10755_10833[2] = inst_10726);
(statearr_10755_10833[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 39))
{var state_10730__$1 = state_10730;var statearr_10756_10834 = state_10730__$1;(statearr_10756_10834[2] = null);
(statearr_10756_10834[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 8))
{var inst_10614 = (state_10730[14]);var inst_10613 = (state_10730[15]);var inst_10616 = (inst_10614 < inst_10613);var inst_10617 = inst_10616;var state_10730__$1 = state_10730;if(cljs.core.truth_(inst_10617))
{var statearr_10757_10835 = state_10730__$1;(statearr_10757_10835[1] = 10);
} else
{var statearr_10758_10836 = state_10730__$1;(statearr_10758_10836[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 40))
{var inst_10698 = (state_10730[18]);var inst_10702 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10703 = cljs.core.async.untap_STAR_.call(null,m,inst_10698);var state_10730__$1 = (function (){var statearr_10759 = state_10730;(statearr_10759[21] = inst_10702);
return statearr_10759;
})();var statearr_10760_10837 = state_10730__$1;(statearr_10760_10837[2] = inst_10703);
(statearr_10760_10837[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 9))
{var inst_10659 = (state_10730[2]);var state_10730__$1 = state_10730;var statearr_10761_10838 = state_10730__$1;(statearr_10761_10838[2] = inst_10659);
(statearr_10761_10838[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 41))
{var inst_10689 = (state_10730[12]);var inst_10705 = (state_10730[2]);var inst_10706 = cljs.core.next.call(null,inst_10689);var inst_10670 = inst_10706;var inst_10671 = null;var inst_10672 = 0;var inst_10673 = 0;var state_10730__$1 = (function (){var statearr_10762 = state_10730;(statearr_10762[22] = inst_10705);
(statearr_10762[7] = inst_10673);
(statearr_10762[8] = inst_10672);
(statearr_10762[9] = inst_10671);
(statearr_10762[10] = inst_10670);
return statearr_10762;
})();var statearr_10763_10839 = state_10730__$1;(statearr_10763_10839[2] = null);
(statearr_10763_10839[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 10))
{var inst_10614 = (state_10730[14]);var inst_10612 = (state_10730[17]);var inst_10620 = cljs.core._nth.call(null,inst_10612,inst_10614);var inst_10621 = cljs.core.nth.call(null,inst_10620,0,null);var inst_10622 = cljs.core.nth.call(null,inst_10620,1,null);var state_10730__$1 = (function (){var statearr_10764 = state_10730;(statearr_10764[23] = inst_10621);
return statearr_10764;
})();if(cljs.core.truth_(inst_10622))
{var statearr_10765_10840 = state_10730__$1;(statearr_10765_10840[1] = 13);
} else
{var statearr_10766_10841 = state_10730__$1;(statearr_10766_10841[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 42))
{var state_10730__$1 = state_10730;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10730__$1,45,dchan);
} else
{if((state_val_10731 === 11))
{var inst_10631 = (state_10730[24]);var inst_10611 = (state_10730[16]);var inst_10631__$1 = cljs.core.seq.call(null,inst_10611);var state_10730__$1 = (function (){var statearr_10767 = state_10730;(statearr_10767[24] = inst_10631__$1);
return statearr_10767;
})();if(inst_10631__$1)
{var statearr_10768_10842 = state_10730__$1;(statearr_10768_10842[1] = 16);
} else
{var statearr_10769_10843 = state_10730__$1;(statearr_10769_10843[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 43))
{var state_10730__$1 = state_10730;var statearr_10770_10844 = state_10730__$1;(statearr_10770_10844[2] = null);
(statearr_10770_10844[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 12))
{var inst_10657 = (state_10730[2]);var state_10730__$1 = state_10730;var statearr_10771_10845 = state_10730__$1;(statearr_10771_10845[2] = inst_10657);
(statearr_10771_10845[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 44))
{var inst_10723 = (state_10730[2]);var state_10730__$1 = (function (){var statearr_10772 = state_10730;(statearr_10772[25] = inst_10723);
return statearr_10772;
})();var statearr_10773_10846 = state_10730__$1;(statearr_10773_10846[2] = null);
(statearr_10773_10846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 13))
{var inst_10621 = (state_10730[23]);var inst_10624 = cljs.core.async.close_BANG_.call(null,inst_10621);var state_10730__$1 = state_10730;var statearr_10774_10847 = state_10730__$1;(statearr_10774_10847[2] = inst_10624);
(statearr_10774_10847[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 45))
{var inst_10720 = (state_10730[2]);var state_10730__$1 = state_10730;var statearr_10778_10848 = state_10730__$1;(statearr_10778_10848[2] = inst_10720);
(statearr_10778_10848[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 14))
{var state_10730__$1 = state_10730;var statearr_10779_10849 = state_10730__$1;(statearr_10779_10849[2] = null);
(statearr_10779_10849[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 15))
{var inst_10614 = (state_10730[14]);var inst_10613 = (state_10730[15]);var inst_10611 = (state_10730[16]);var inst_10612 = (state_10730[17]);var inst_10627 = (state_10730[2]);var inst_10628 = (inst_10614 + 1);var tmp10775 = inst_10613;var tmp10776 = inst_10611;var tmp10777 = inst_10612;var inst_10611__$1 = tmp10776;var inst_10612__$1 = tmp10777;var inst_10613__$1 = tmp10775;var inst_10614__$1 = inst_10628;var state_10730__$1 = (function (){var statearr_10780 = state_10730;(statearr_10780[14] = inst_10614__$1);
(statearr_10780[15] = inst_10613__$1);
(statearr_10780[26] = inst_10627);
(statearr_10780[16] = inst_10611__$1);
(statearr_10780[17] = inst_10612__$1);
return statearr_10780;
})();var statearr_10781_10850 = state_10730__$1;(statearr_10781_10850[2] = null);
(statearr_10781_10850[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 16))
{var inst_10631 = (state_10730[24]);var inst_10633 = cljs.core.chunked_seq_QMARK_.call(null,inst_10631);var state_10730__$1 = state_10730;if(inst_10633)
{var statearr_10782_10851 = state_10730__$1;(statearr_10782_10851[1] = 19);
} else
{var statearr_10783_10852 = state_10730__$1;(statearr_10783_10852[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 17))
{var state_10730__$1 = state_10730;var statearr_10784_10853 = state_10730__$1;(statearr_10784_10853[2] = null);
(statearr_10784_10853[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 18))
{var inst_10655 = (state_10730[2]);var state_10730__$1 = state_10730;var statearr_10785_10854 = state_10730__$1;(statearr_10785_10854[2] = inst_10655);
(statearr_10785_10854[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 19))
{var inst_10631 = (state_10730[24]);var inst_10635 = cljs.core.chunk_first.call(null,inst_10631);var inst_10636 = cljs.core.chunk_rest.call(null,inst_10631);var inst_10637 = cljs.core.count.call(null,inst_10635);var inst_10611 = inst_10636;var inst_10612 = inst_10635;var inst_10613 = inst_10637;var inst_10614 = 0;var state_10730__$1 = (function (){var statearr_10786 = state_10730;(statearr_10786[14] = inst_10614);
(statearr_10786[15] = inst_10613);
(statearr_10786[16] = inst_10611);
(statearr_10786[17] = inst_10612);
return statearr_10786;
})();var statearr_10787_10855 = state_10730__$1;(statearr_10787_10855[2] = null);
(statearr_10787_10855[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 20))
{var inst_10631 = (state_10730[24]);var inst_10641 = cljs.core.first.call(null,inst_10631);var inst_10642 = cljs.core.nth.call(null,inst_10641,0,null);var inst_10643 = cljs.core.nth.call(null,inst_10641,1,null);var state_10730__$1 = (function (){var statearr_10788 = state_10730;(statearr_10788[27] = inst_10642);
return statearr_10788;
})();if(cljs.core.truth_(inst_10643))
{var statearr_10789_10856 = state_10730__$1;(statearr_10789_10856[1] = 22);
} else
{var statearr_10790_10857 = state_10730__$1;(statearr_10790_10857[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 21))
{var inst_10652 = (state_10730[2]);var state_10730__$1 = state_10730;var statearr_10791_10858 = state_10730__$1;(statearr_10791_10858[2] = inst_10652);
(statearr_10791_10858[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 22))
{var inst_10642 = (state_10730[27]);var inst_10645 = cljs.core.async.close_BANG_.call(null,inst_10642);var state_10730__$1 = state_10730;var statearr_10792_10859 = state_10730__$1;(statearr_10792_10859[2] = inst_10645);
(statearr_10792_10859[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 23))
{var state_10730__$1 = state_10730;var statearr_10793_10860 = state_10730__$1;(statearr_10793_10860[2] = null);
(statearr_10793_10860[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 24))
{var inst_10631 = (state_10730[24]);var inst_10648 = (state_10730[2]);var inst_10649 = cljs.core.next.call(null,inst_10631);var inst_10611 = inst_10649;var inst_10612 = null;var inst_10613 = 0;var inst_10614 = 0;var state_10730__$1 = (function (){var statearr_10794 = state_10730;(statearr_10794[14] = inst_10614);
(statearr_10794[15] = inst_10613);
(statearr_10794[28] = inst_10648);
(statearr_10794[16] = inst_10611);
(statearr_10794[17] = inst_10612);
return statearr_10794;
})();var statearr_10795_10861 = state_10730__$1;(statearr_10795_10861[2] = null);
(statearr_10795_10861[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 25))
{var inst_10673 = (state_10730[7]);var inst_10672 = (state_10730[8]);var inst_10675 = (inst_10673 < inst_10672);var inst_10676 = inst_10675;var state_10730__$1 = state_10730;if(cljs.core.truth_(inst_10676))
{var statearr_10796_10862 = state_10730__$1;(statearr_10796_10862[1] = 27);
} else
{var statearr_10797_10863 = state_10730__$1;(statearr_10797_10863[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 26))
{var inst_10662 = (state_10730[19]);var inst_10716 = (state_10730[2]);var inst_10717 = cljs.core.seq.call(null,inst_10662);var state_10730__$1 = (function (){var statearr_10798 = state_10730;(statearr_10798[29] = inst_10716);
return statearr_10798;
})();if(inst_10717)
{var statearr_10799_10864 = state_10730__$1;(statearr_10799_10864[1] = 42);
} else
{var statearr_10800_10865 = state_10730__$1;(statearr_10800_10865[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 27))
{var inst_10678 = (state_10730[30]);var inst_10673 = (state_10730[7]);var inst_10671 = (state_10730[9]);var inst_10602 = (state_10730[13]);var inst_10678__$1 = cljs.core._nth.call(null,inst_10671,inst_10673);var inst_10679 = cljs.core.async.put_BANG_.call(null,inst_10678__$1,inst_10602,done);var state_10730__$1 = (function (){var statearr_10801 = state_10730;(statearr_10801[30] = inst_10678__$1);
return statearr_10801;
})();if(cljs.core.truth_(inst_10679))
{var statearr_10802_10866 = state_10730__$1;(statearr_10802_10866[1] = 30);
} else
{var statearr_10803_10867 = state_10730__$1;(statearr_10803_10867[1] = 31);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 28))
{var inst_10689 = (state_10730[12]);var inst_10670 = (state_10730[10]);var inst_10689__$1 = cljs.core.seq.call(null,inst_10670);var state_10730__$1 = (function (){var statearr_10804 = state_10730;(statearr_10804[12] = inst_10689__$1);
return statearr_10804;
})();if(inst_10689__$1)
{var statearr_10805_10868 = state_10730__$1;(statearr_10805_10868[1] = 33);
} else
{var statearr_10806_10869 = state_10730__$1;(statearr_10806_10869[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 29))
{var inst_10714 = (state_10730[2]);var state_10730__$1 = state_10730;var statearr_10807_10870 = state_10730__$1;(statearr_10807_10870[2] = inst_10714);
(statearr_10807_10870[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 30))
{var state_10730__$1 = state_10730;var statearr_10808_10871 = state_10730__$1;(statearr_10808_10871[2] = null);
(statearr_10808_10871[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10731 === 31))
{var inst_10678 = (state_10730[30]);var inst_10682 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10683 = cljs.core.async.untap_STAR_.call(null,m,inst_10678);var state_10730__$1 = (function (){var statearr_10809 = state_10730;(statearr_10809[31] = inst_10682);
return statearr_10809;
})();var statearr_10810_10872 = state_10730__$1;(statearr_10810_10872[2] = inst_10683);
(statearr_10810_10872[1] = 32);
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
});})(c__5635__auto___10818,cs,m,dchan,dctr,done))
;return ((function (switch__5620__auto__,c__5635__auto___10818,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_10814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10814[0] = state_machine__5621__auto__);
(statearr_10814[1] = 1);
return statearr_10814;
});
var state_machine__5621__auto____1 = (function (state_10730){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_10730);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e10815){if((e10815 instanceof Object))
{var ex__5624__auto__ = e10815;var statearr_10816_10873 = state_10730;(statearr_10816_10873[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10730);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10815;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10874 = state_10730;
state_10730 = G__10874;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_10730){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_10730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___10818,cs,m,dchan,dctr,done))
})();var state__5637__auto__ = (function (){var statearr_10817 = f__5636__auto__.call(null);(statearr_10817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___10818);
return statearr_10817;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___10818,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj10876 = {};return obj10876;
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
;var m = (function (){if(typeof cljs.core.async.t10996 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10996 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta10997){
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
this.meta10997 = meta10997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10996.cljs$lang$type = true;
cljs.core.async.t10996.cljs$lang$ctorStr = "cljs.core.async/t10996";
cljs.core.async.t10996.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t10996");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10996.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t10996.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10996.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10996.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10996.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10996.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10996.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10998){var self__ = this;
var _10998__$1 = this;return self__.meta10997;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t10996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10998,meta10997__$1){var self__ = this;
var _10998__$1 = this;return (new cljs.core.async.t10996(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta10997__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t10996 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t10996(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10997){return (new cljs.core.async.t10996(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta10997));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t10996(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5635__auto___11115 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___11115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___11115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11068){var state_val_11069 = (state_11068[1]);if((state_val_11069 === 1))
{var inst_11002 = (state_11068[7]);var inst_11002__$1 = calc_state.call(null);var inst_11003 = cljs.core.seq_QMARK_.call(null,inst_11002__$1);var state_11068__$1 = (function (){var statearr_11070 = state_11068;(statearr_11070[7] = inst_11002__$1);
return statearr_11070;
})();if(inst_11003)
{var statearr_11071_11116 = state_11068__$1;(statearr_11071_11116[1] = 2);
} else
{var statearr_11072_11117 = state_11068__$1;(statearr_11072_11117[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 2))
{var inst_11002 = (state_11068[7]);var inst_11005 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11002);var state_11068__$1 = state_11068;var statearr_11073_11118 = state_11068__$1;(statearr_11073_11118[2] = inst_11005);
(statearr_11073_11118[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 3))
{var inst_11002 = (state_11068[7]);var state_11068__$1 = state_11068;var statearr_11074_11119 = state_11068__$1;(statearr_11074_11119[2] = inst_11002);
(statearr_11074_11119[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 4))
{var inst_11002 = (state_11068[7]);var inst_11008 = (state_11068[2]);var inst_11009 = cljs.core.get.call(null,inst_11008,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11010 = cljs.core.get.call(null,inst_11008,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11011 = cljs.core.get.call(null,inst_11008,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11012 = inst_11002;var state_11068__$1 = (function (){var statearr_11075 = state_11068;(statearr_11075[8] = inst_11010);
(statearr_11075[9] = inst_11011);
(statearr_11075[10] = inst_11012);
(statearr_11075[11] = inst_11009);
return statearr_11075;
})();var statearr_11076_11120 = state_11068__$1;(statearr_11076_11120[2] = null);
(statearr_11076_11120[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 5))
{var inst_11012 = (state_11068[10]);var inst_11015 = cljs.core.seq_QMARK_.call(null,inst_11012);var state_11068__$1 = state_11068;if(inst_11015)
{var statearr_11077_11121 = state_11068__$1;(statearr_11077_11121[1] = 7);
} else
{var statearr_11078_11122 = state_11068__$1;(statearr_11078_11122[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 6))
{var inst_11066 = (state_11068[2]);var state_11068__$1 = state_11068;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11068__$1,inst_11066);
} else
{if((state_val_11069 === 7))
{var inst_11012 = (state_11068[10]);var inst_11017 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11012);var state_11068__$1 = state_11068;var statearr_11079_11123 = state_11068__$1;(statearr_11079_11123[2] = inst_11017);
(statearr_11079_11123[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 8))
{var inst_11012 = (state_11068[10]);var state_11068__$1 = state_11068;var statearr_11080_11124 = state_11068__$1;(statearr_11080_11124[2] = inst_11012);
(statearr_11080_11124[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 9))
{var inst_11020 = (state_11068[12]);var inst_11020__$1 = (state_11068[2]);var inst_11021 = cljs.core.get.call(null,inst_11020__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11022 = cljs.core.get.call(null,inst_11020__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11023 = cljs.core.get.call(null,inst_11020__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11068__$1 = (function (){var statearr_11081 = state_11068;(statearr_11081[13] = inst_11023);
(statearr_11081[14] = inst_11022);
(statearr_11081[12] = inst_11020__$1);
return statearr_11081;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11068__$1,10,inst_11021);
} else
{if((state_val_11069 === 10))
{var inst_11027 = (state_11068[15]);var inst_11028 = (state_11068[16]);var inst_11026 = (state_11068[2]);var inst_11027__$1 = cljs.core.nth.call(null,inst_11026,0,null);var inst_11028__$1 = cljs.core.nth.call(null,inst_11026,1,null);var inst_11029 = (inst_11027__$1 == null);var inst_11030 = cljs.core._EQ_.call(null,inst_11028__$1,change);var inst_11031 = (inst_11029) || (inst_11030);var state_11068__$1 = (function (){var statearr_11082 = state_11068;(statearr_11082[15] = inst_11027__$1);
(statearr_11082[16] = inst_11028__$1);
return statearr_11082;
})();if(cljs.core.truth_(inst_11031))
{var statearr_11083_11125 = state_11068__$1;(statearr_11083_11125[1] = 11);
} else
{var statearr_11084_11126 = state_11068__$1;(statearr_11084_11126[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 11))
{var inst_11027 = (state_11068[15]);var inst_11033 = (inst_11027 == null);var state_11068__$1 = state_11068;if(cljs.core.truth_(inst_11033))
{var statearr_11085_11127 = state_11068__$1;(statearr_11085_11127[1] = 14);
} else
{var statearr_11086_11128 = state_11068__$1;(statearr_11086_11128[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 12))
{var inst_11023 = (state_11068[13]);var inst_11042 = (state_11068[17]);var inst_11028 = (state_11068[16]);var inst_11042__$1 = inst_11023.call(null,inst_11028);var state_11068__$1 = (function (){var statearr_11087 = state_11068;(statearr_11087[17] = inst_11042__$1);
return statearr_11087;
})();if(cljs.core.truth_(inst_11042__$1))
{var statearr_11088_11129 = state_11068__$1;(statearr_11088_11129[1] = 17);
} else
{var statearr_11089_11130 = state_11068__$1;(statearr_11089_11130[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 13))
{var inst_11064 = (state_11068[2]);var state_11068__$1 = state_11068;var statearr_11090_11131 = state_11068__$1;(statearr_11090_11131[2] = inst_11064);
(statearr_11090_11131[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 14))
{var inst_11028 = (state_11068[16]);var inst_11035 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11028);var state_11068__$1 = state_11068;var statearr_11091_11132 = state_11068__$1;(statearr_11091_11132[2] = inst_11035);
(statearr_11091_11132[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 15))
{var state_11068__$1 = state_11068;var statearr_11092_11133 = state_11068__$1;(statearr_11092_11133[2] = null);
(statearr_11092_11133[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 16))
{var inst_11038 = (state_11068[2]);var inst_11039 = calc_state.call(null);var inst_11012 = inst_11039;var state_11068__$1 = (function (){var statearr_11093 = state_11068;(statearr_11093[10] = inst_11012);
(statearr_11093[18] = inst_11038);
return statearr_11093;
})();var statearr_11094_11134 = state_11068__$1;(statearr_11094_11134[2] = null);
(statearr_11094_11134[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 17))
{var inst_11042 = (state_11068[17]);var state_11068__$1 = state_11068;var statearr_11095_11135 = state_11068__$1;(statearr_11095_11135[2] = inst_11042);
(statearr_11095_11135[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 18))
{var inst_11023 = (state_11068[13]);var inst_11022 = (state_11068[14]);var inst_11028 = (state_11068[16]);var inst_11045 = cljs.core.empty_QMARK_.call(null,inst_11023);var inst_11046 = inst_11022.call(null,inst_11028);var inst_11047 = cljs.core.not.call(null,inst_11046);var inst_11048 = (inst_11045) && (inst_11047);var state_11068__$1 = state_11068;var statearr_11096_11136 = state_11068__$1;(statearr_11096_11136[2] = inst_11048);
(statearr_11096_11136[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 19))
{var inst_11050 = (state_11068[2]);var state_11068__$1 = state_11068;if(cljs.core.truth_(inst_11050))
{var statearr_11097_11137 = state_11068__$1;(statearr_11097_11137[1] = 20);
} else
{var statearr_11098_11138 = state_11068__$1;(statearr_11098_11138[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 20))
{var inst_11027 = (state_11068[15]);var state_11068__$1 = state_11068;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11068__$1,23,out,inst_11027);
} else
{if((state_val_11069 === 21))
{var inst_11020 = (state_11068[12]);var inst_11012 = inst_11020;var state_11068__$1 = (function (){var statearr_11099 = state_11068;(statearr_11099[10] = inst_11012);
return statearr_11099;
})();var statearr_11100_11139 = state_11068__$1;(statearr_11100_11139[2] = null);
(statearr_11100_11139[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 22))
{var inst_11062 = (state_11068[2]);var state_11068__$1 = state_11068;var statearr_11101_11140 = state_11068__$1;(statearr_11101_11140[2] = inst_11062);
(statearr_11101_11140[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 23))
{var inst_11053 = (state_11068[2]);var state_11068__$1 = state_11068;if(cljs.core.truth_(inst_11053))
{var statearr_11102_11141 = state_11068__$1;(statearr_11102_11141[1] = 24);
} else
{var statearr_11103_11142 = state_11068__$1;(statearr_11103_11142[1] = 25);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 24))
{var inst_11020 = (state_11068[12]);var inst_11012 = inst_11020;var state_11068__$1 = (function (){var statearr_11104 = state_11068;(statearr_11104[10] = inst_11012);
return statearr_11104;
})();var statearr_11105_11143 = state_11068__$1;(statearr_11105_11143[2] = null);
(statearr_11105_11143[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 25))
{var state_11068__$1 = state_11068;var statearr_11106_11144 = state_11068__$1;(statearr_11106_11144[2] = null);
(statearr_11106_11144[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11069 === 26))
{var inst_11058 = (state_11068[2]);var state_11068__$1 = state_11068;var statearr_11107_11145 = state_11068__$1;(statearr_11107_11145[2] = inst_11058);
(statearr_11107_11145[1] = 22);
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
});})(c__5635__auto___11115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5620__auto__,c__5635__auto___11115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_11111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11111[0] = state_machine__5621__auto__);
(statearr_11111[1] = 1);
return statearr_11111;
});
var state_machine__5621__auto____1 = (function (state_11068){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_11068);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e11112){if((e11112 instanceof Object))
{var ex__5624__auto__ = e11112;var statearr_11113_11146 = state_11068;(statearr_11113_11146[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11068);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11147 = state_11068;
state_11068 = G__11147;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_11068){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_11068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___11115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5637__auto__ = (function (){var statearr_11114 = f__5636__auto__.call(null);(statearr_11114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___11115);
return statearr_11114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___11115,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj11149 = {};return obj11149;
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
return (function (p1__11150_SHARP_){if(cljs.core.truth_(p1__11150_SHARP_.call(null,topic)))
{return p1__11150_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11150_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3478__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11265 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11265 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11266){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11266 = meta11266;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11265.cljs$lang$type = true;
cljs.core.async.t11265.cljs$lang$ctorStr = "cljs.core.async/t11265";
cljs.core.async.t11265.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write.call(null,writer__4046__auto__,"cljs.core.async/t11265");
});})(mults,ensure_mult))
;
cljs.core.async.t11265.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11265.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11265.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11265.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11265.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11265.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11265.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11265.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11267){var self__ = this;
var _11267__$1 = this;return self__.meta11266;
});})(mults,ensure_mult))
;
cljs.core.async.t11265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11267,meta11266__$1){var self__ = this;
var _11267__$1 = this;return (new cljs.core.async.t11265(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11266__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11265 = ((function (mults,ensure_mult){
return (function __GT_t11265(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11266){return (new cljs.core.async.t11265(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11266));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11265(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5635__auto___11379 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___11379,mults,ensure_mult,p){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___11379,mults,ensure_mult,p){
return (function (state_11335){var state_val_11336 = (state_11335[1]);if((state_val_11336 === 1))
{var state_11335__$1 = state_11335;var statearr_11337_11380 = state_11335__$1;(statearr_11337_11380[2] = null);
(statearr_11337_11380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 2))
{var state_11335__$1 = state_11335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11335__$1,4,ch);
} else
{if((state_val_11336 === 3))
{var inst_11333 = (state_11335[2]);var state_11335__$1 = state_11335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11335__$1,inst_11333);
} else
{if((state_val_11336 === 4))
{var inst_11270 = (state_11335[7]);var inst_11270__$1 = (state_11335[2]);var inst_11271 = (inst_11270__$1 == null);var state_11335__$1 = (function (){var statearr_11338 = state_11335;(statearr_11338[7] = inst_11270__$1);
return statearr_11338;
})();if(cljs.core.truth_(inst_11271))
{var statearr_11339_11381 = state_11335__$1;(statearr_11339_11381[1] = 5);
} else
{var statearr_11340_11382 = state_11335__$1;(statearr_11340_11382[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 5))
{var inst_11277 = cljs.core.deref.call(null,mults);var inst_11278 = cljs.core.vals.call(null,inst_11277);var inst_11279 = cljs.core.seq.call(null,inst_11278);var inst_11280 = inst_11279;var inst_11281 = null;var inst_11282 = 0;var inst_11283 = 0;var state_11335__$1 = (function (){var statearr_11341 = state_11335;(statearr_11341[8] = inst_11283);
(statearr_11341[9] = inst_11280);
(statearr_11341[10] = inst_11282);
(statearr_11341[11] = inst_11281);
return statearr_11341;
})();var statearr_11342_11383 = state_11335__$1;(statearr_11342_11383[2] = null);
(statearr_11342_11383[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 6))
{var inst_11318 = (state_11335[12]);var inst_11270 = (state_11335[7]);var inst_11318__$1 = topic_fn.call(null,inst_11270);var inst_11319 = cljs.core.deref.call(null,mults);var inst_11320 = cljs.core.get.call(null,inst_11319,inst_11318__$1);var inst_11321 = cljs.core.async.muxch_STAR_.call(null,inst_11320);var state_11335__$1 = (function (){var statearr_11343 = state_11335;(statearr_11343[12] = inst_11318__$1);
return statearr_11343;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11335__$1,19,inst_11321,inst_11270);
} else
{if((state_val_11336 === 7))
{var inst_11331 = (state_11335[2]);var state_11335__$1 = state_11335;var statearr_11344_11384 = state_11335__$1;(statearr_11344_11384[2] = inst_11331);
(statearr_11344_11384[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 8))
{var inst_11283 = (state_11335[8]);var inst_11282 = (state_11335[10]);var inst_11285 = (inst_11283 < inst_11282);var inst_11286 = inst_11285;var state_11335__$1 = state_11335;if(cljs.core.truth_(inst_11286))
{var statearr_11348_11385 = state_11335__$1;(statearr_11348_11385[1] = 10);
} else
{var statearr_11349_11386 = state_11335__$1;(statearr_11349_11386[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 9))
{var inst_11316 = (state_11335[2]);var state_11335__$1 = state_11335;var statearr_11350_11387 = state_11335__$1;(statearr_11350_11387[2] = inst_11316);
(statearr_11350_11387[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 10))
{var inst_11283 = (state_11335[8]);var inst_11280 = (state_11335[9]);var inst_11282 = (state_11335[10]);var inst_11281 = (state_11335[11]);var inst_11288 = cljs.core._nth.call(null,inst_11281,inst_11283);var inst_11289 = cljs.core.async.muxch_STAR_.call(null,inst_11288);var inst_11290 = cljs.core.async.close_BANG_.call(null,inst_11289);var inst_11291 = (inst_11283 + 1);var tmp11345 = inst_11280;var tmp11346 = inst_11282;var tmp11347 = inst_11281;var inst_11280__$1 = tmp11345;var inst_11281__$1 = tmp11347;var inst_11282__$1 = tmp11346;var inst_11283__$1 = inst_11291;var state_11335__$1 = (function (){var statearr_11351 = state_11335;(statearr_11351[13] = inst_11290);
(statearr_11351[8] = inst_11283__$1);
(statearr_11351[9] = inst_11280__$1);
(statearr_11351[10] = inst_11282__$1);
(statearr_11351[11] = inst_11281__$1);
return statearr_11351;
})();var statearr_11352_11388 = state_11335__$1;(statearr_11352_11388[2] = null);
(statearr_11352_11388[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 11))
{var inst_11294 = (state_11335[14]);var inst_11280 = (state_11335[9]);var inst_11294__$1 = cljs.core.seq.call(null,inst_11280);var state_11335__$1 = (function (){var statearr_11353 = state_11335;(statearr_11353[14] = inst_11294__$1);
return statearr_11353;
})();if(inst_11294__$1)
{var statearr_11354_11389 = state_11335__$1;(statearr_11354_11389[1] = 13);
} else
{var statearr_11355_11390 = state_11335__$1;(statearr_11355_11390[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 12))
{var inst_11314 = (state_11335[2]);var state_11335__$1 = state_11335;var statearr_11356_11391 = state_11335__$1;(statearr_11356_11391[2] = inst_11314);
(statearr_11356_11391[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 13))
{var inst_11294 = (state_11335[14]);var inst_11296 = cljs.core.chunked_seq_QMARK_.call(null,inst_11294);var state_11335__$1 = state_11335;if(inst_11296)
{var statearr_11357_11392 = state_11335__$1;(statearr_11357_11392[1] = 16);
} else
{var statearr_11358_11393 = state_11335__$1;(statearr_11358_11393[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 14))
{var state_11335__$1 = state_11335;var statearr_11359_11394 = state_11335__$1;(statearr_11359_11394[2] = null);
(statearr_11359_11394[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 15))
{var inst_11312 = (state_11335[2]);var state_11335__$1 = state_11335;var statearr_11360_11395 = state_11335__$1;(statearr_11360_11395[2] = inst_11312);
(statearr_11360_11395[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 16))
{var inst_11294 = (state_11335[14]);var inst_11298 = cljs.core.chunk_first.call(null,inst_11294);var inst_11299 = cljs.core.chunk_rest.call(null,inst_11294);var inst_11300 = cljs.core.count.call(null,inst_11298);var inst_11280 = inst_11299;var inst_11281 = inst_11298;var inst_11282 = inst_11300;var inst_11283 = 0;var state_11335__$1 = (function (){var statearr_11361 = state_11335;(statearr_11361[8] = inst_11283);
(statearr_11361[9] = inst_11280);
(statearr_11361[10] = inst_11282);
(statearr_11361[11] = inst_11281);
return statearr_11361;
})();var statearr_11362_11396 = state_11335__$1;(statearr_11362_11396[2] = null);
(statearr_11362_11396[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 17))
{var inst_11294 = (state_11335[14]);var inst_11303 = cljs.core.first.call(null,inst_11294);var inst_11304 = cljs.core.async.muxch_STAR_.call(null,inst_11303);var inst_11305 = cljs.core.async.close_BANG_.call(null,inst_11304);var inst_11306 = cljs.core.next.call(null,inst_11294);var inst_11280 = inst_11306;var inst_11281 = null;var inst_11282 = 0;var inst_11283 = 0;var state_11335__$1 = (function (){var statearr_11363 = state_11335;(statearr_11363[8] = inst_11283);
(statearr_11363[9] = inst_11280);
(statearr_11363[10] = inst_11282);
(statearr_11363[11] = inst_11281);
(statearr_11363[15] = inst_11305);
return statearr_11363;
})();var statearr_11364_11397 = state_11335__$1;(statearr_11364_11397[2] = null);
(statearr_11364_11397[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 18))
{var inst_11309 = (state_11335[2]);var state_11335__$1 = state_11335;var statearr_11365_11398 = state_11335__$1;(statearr_11365_11398[2] = inst_11309);
(statearr_11365_11398[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 19))
{var inst_11323 = (state_11335[2]);var state_11335__$1 = state_11335;if(cljs.core.truth_(inst_11323))
{var statearr_11366_11399 = state_11335__$1;(statearr_11366_11399[1] = 20);
} else
{var statearr_11367_11400 = state_11335__$1;(statearr_11367_11400[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 20))
{var state_11335__$1 = state_11335;var statearr_11368_11401 = state_11335__$1;(statearr_11368_11401[2] = null);
(statearr_11368_11401[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 21))
{var inst_11318 = (state_11335[12]);var inst_11326 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11318);var state_11335__$1 = state_11335;var statearr_11369_11402 = state_11335__$1;(statearr_11369_11402[2] = inst_11326);
(statearr_11369_11402[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11336 === 22))
{var inst_11328 = (state_11335[2]);var state_11335__$1 = (function (){var statearr_11370 = state_11335;(statearr_11370[16] = inst_11328);
return statearr_11370;
})();var statearr_11371_11403 = state_11335__$1;(statearr_11371_11403[2] = null);
(statearr_11371_11403[1] = 2);
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
});})(c__5635__auto___11379,mults,ensure_mult,p))
;return ((function (switch__5620__auto__,c__5635__auto___11379,mults,ensure_mult,p){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_11375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11375[0] = state_machine__5621__auto__);
(statearr_11375[1] = 1);
return statearr_11375;
});
var state_machine__5621__auto____1 = (function (state_11335){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_11335);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e11376){if((e11376 instanceof Object))
{var ex__5624__auto__ = e11376;var statearr_11377_11404 = state_11335;(statearr_11377_11404[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11405 = state_11335;
state_11335 = G__11405;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_11335){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_11335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___11379,mults,ensure_mult,p))
})();var state__5637__auto__ = (function (){var statearr_11378 = f__5636__auto__.call(null);(statearr_11378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___11379);
return statearr_11378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___11379,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5635__auto___11542 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___11542,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___11542,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11512){var state_val_11513 = (state_11512[1]);if((state_val_11513 === 1))
{var state_11512__$1 = state_11512;var statearr_11514_11543 = state_11512__$1;(statearr_11514_11543[2] = null);
(statearr_11514_11543[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 2))
{var inst_11475 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11476 = 0;var state_11512__$1 = (function (){var statearr_11515 = state_11512;(statearr_11515[7] = inst_11476);
(statearr_11515[8] = inst_11475);
return statearr_11515;
})();var statearr_11516_11544 = state_11512__$1;(statearr_11516_11544[2] = null);
(statearr_11516_11544[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 3))
{var inst_11510 = (state_11512[2]);var state_11512__$1 = state_11512;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11512__$1,inst_11510);
} else
{if((state_val_11513 === 4))
{var inst_11476 = (state_11512[7]);var inst_11478 = (inst_11476 < cnt);var state_11512__$1 = state_11512;if(cljs.core.truth_(inst_11478))
{var statearr_11517_11545 = state_11512__$1;(statearr_11517_11545[1] = 6);
} else
{var statearr_11518_11546 = state_11512__$1;(statearr_11518_11546[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 5))
{var inst_11496 = (state_11512[2]);var state_11512__$1 = (function (){var statearr_11519 = state_11512;(statearr_11519[9] = inst_11496);
return statearr_11519;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11512__$1,12,dchan);
} else
{if((state_val_11513 === 6))
{var state_11512__$1 = state_11512;var statearr_11520_11547 = state_11512__$1;(statearr_11520_11547[2] = null);
(statearr_11520_11547[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 7))
{var state_11512__$1 = state_11512;var statearr_11521_11548 = state_11512__$1;(statearr_11521_11548[2] = null);
(statearr_11521_11548[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 8))
{var inst_11494 = (state_11512[2]);var state_11512__$1 = state_11512;var statearr_11522_11549 = state_11512__$1;(statearr_11522_11549[2] = inst_11494);
(statearr_11522_11549[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 9))
{var inst_11476 = (state_11512[7]);var inst_11489 = (state_11512[2]);var inst_11490 = (inst_11476 + 1);var inst_11476__$1 = inst_11490;var state_11512__$1 = (function (){var statearr_11523 = state_11512;(statearr_11523[10] = inst_11489);
(statearr_11523[7] = inst_11476__$1);
return statearr_11523;
})();var statearr_11524_11550 = state_11512__$1;(statearr_11524_11550[2] = null);
(statearr_11524_11550[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 10))
{var inst_11480 = (state_11512[2]);var inst_11481 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11512__$1 = (function (){var statearr_11525 = state_11512;(statearr_11525[11] = inst_11480);
return statearr_11525;
})();var statearr_11526_11551 = state_11512__$1;(statearr_11526_11551[2] = inst_11481);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11512__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 11))
{var inst_11476 = (state_11512[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11512,10,Object,null,9);var inst_11485 = chs__$1.call(null,inst_11476);var inst_11486 = done.call(null,inst_11476);var inst_11487 = cljs.core.async.take_BANG_.call(null,inst_11485,inst_11486);var state_11512__$1 = state_11512;var statearr_11527_11552 = state_11512__$1;(statearr_11527_11552[2] = inst_11487);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11512__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 12))
{var inst_11498 = (state_11512[12]);var inst_11498__$1 = (state_11512[2]);var inst_11499 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11498__$1);var state_11512__$1 = (function (){var statearr_11528 = state_11512;(statearr_11528[12] = inst_11498__$1);
return statearr_11528;
})();if(cljs.core.truth_(inst_11499))
{var statearr_11529_11553 = state_11512__$1;(statearr_11529_11553[1] = 13);
} else
{var statearr_11530_11554 = state_11512__$1;(statearr_11530_11554[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 13))
{var inst_11501 = cljs.core.async.close_BANG_.call(null,out);var state_11512__$1 = state_11512;var statearr_11531_11555 = state_11512__$1;(statearr_11531_11555[2] = inst_11501);
(statearr_11531_11555[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 14))
{var inst_11498 = (state_11512[12]);var inst_11503 = cljs.core.apply.call(null,f,inst_11498);var state_11512__$1 = state_11512;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11512__$1,16,out,inst_11503);
} else
{if((state_val_11513 === 15))
{var inst_11508 = (state_11512[2]);var state_11512__$1 = state_11512;var statearr_11532_11556 = state_11512__$1;(statearr_11532_11556[2] = inst_11508);
(statearr_11532_11556[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11513 === 16))
{var inst_11505 = (state_11512[2]);var state_11512__$1 = (function (){var statearr_11533 = state_11512;(statearr_11533[13] = inst_11505);
return statearr_11533;
})();var statearr_11534_11557 = state_11512__$1;(statearr_11534_11557[2] = null);
(statearr_11534_11557[1] = 2);
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
});})(c__5635__auto___11542,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5620__auto__,c__5635__auto___11542,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_11538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11538[0] = state_machine__5621__auto__);
(statearr_11538[1] = 1);
return statearr_11538;
});
var state_machine__5621__auto____1 = (function (state_11512){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_11512);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e11539){if((e11539 instanceof Object))
{var ex__5624__auto__ = e11539;var statearr_11540_11558 = state_11512;(statearr_11540_11558[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11512);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11559 = state_11512;
state_11512 = G__11559;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_11512){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_11512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___11542,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5637__auto__ = (function (){var statearr_11541 = f__5636__auto__.call(null);(statearr_11541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___11542);
return statearr_11541;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___11542,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5635__auto___11667 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___11667,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___11667,out){
return (function (state_11643){var state_val_11644 = (state_11643[1]);if((state_val_11644 === 1))
{var inst_11614 = cljs.core.vec.call(null,chs);var inst_11615 = inst_11614;var state_11643__$1 = (function (){var statearr_11645 = state_11643;(statearr_11645[7] = inst_11615);
return statearr_11645;
})();var statearr_11646_11668 = state_11643__$1;(statearr_11646_11668[2] = null);
(statearr_11646_11668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 2))
{var inst_11615 = (state_11643[7]);var inst_11617 = cljs.core.count.call(null,inst_11615);var inst_11618 = (inst_11617 > 0);var state_11643__$1 = state_11643;if(cljs.core.truth_(inst_11618))
{var statearr_11647_11669 = state_11643__$1;(statearr_11647_11669[1] = 4);
} else
{var statearr_11648_11670 = state_11643__$1;(statearr_11648_11670[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 3))
{var inst_11641 = (state_11643[2]);var state_11643__$1 = state_11643;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11643__$1,inst_11641);
} else
{if((state_val_11644 === 4))
{var inst_11615 = (state_11643[7]);var state_11643__$1 = state_11643;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11643__$1,7,inst_11615);
} else
{if((state_val_11644 === 5))
{var inst_11637 = cljs.core.async.close_BANG_.call(null,out);var state_11643__$1 = state_11643;var statearr_11649_11671 = state_11643__$1;(statearr_11649_11671[2] = inst_11637);
(statearr_11649_11671[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 6))
{var inst_11639 = (state_11643[2]);var state_11643__$1 = state_11643;var statearr_11650_11672 = state_11643__$1;(statearr_11650_11672[2] = inst_11639);
(statearr_11650_11672[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 7))
{var inst_11622 = (state_11643[8]);var inst_11623 = (state_11643[9]);var inst_11622__$1 = (state_11643[2]);var inst_11623__$1 = cljs.core.nth.call(null,inst_11622__$1,0,null);var inst_11624 = cljs.core.nth.call(null,inst_11622__$1,1,null);var inst_11625 = (inst_11623__$1 == null);var state_11643__$1 = (function (){var statearr_11651 = state_11643;(statearr_11651[8] = inst_11622__$1);
(statearr_11651[9] = inst_11623__$1);
(statearr_11651[10] = inst_11624);
return statearr_11651;
})();if(cljs.core.truth_(inst_11625))
{var statearr_11652_11673 = state_11643__$1;(statearr_11652_11673[1] = 8);
} else
{var statearr_11653_11674 = state_11643__$1;(statearr_11653_11674[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 8))
{var inst_11615 = (state_11643[7]);var inst_11622 = (state_11643[8]);var inst_11623 = (state_11643[9]);var inst_11624 = (state_11643[10]);var inst_11627 = (function (){var c = inst_11624;var v = inst_11623;var vec__11620 = inst_11622;var cs = inst_11615;return ((function (c,v,vec__11620,cs,inst_11615,inst_11622,inst_11623,inst_11624,state_val_11644,c__5635__auto___11667,out){
return (function (p1__11560_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11560_SHARP_);
});
;})(c,v,vec__11620,cs,inst_11615,inst_11622,inst_11623,inst_11624,state_val_11644,c__5635__auto___11667,out))
})();var inst_11628 = cljs.core.filterv.call(null,inst_11627,inst_11615);var inst_11615__$1 = inst_11628;var state_11643__$1 = (function (){var statearr_11654 = state_11643;(statearr_11654[7] = inst_11615__$1);
return statearr_11654;
})();var statearr_11655_11675 = state_11643__$1;(statearr_11655_11675[2] = null);
(statearr_11655_11675[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 9))
{var inst_11623 = (state_11643[9]);var state_11643__$1 = state_11643;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11643__$1,11,out,inst_11623);
} else
{if((state_val_11644 === 10))
{var inst_11635 = (state_11643[2]);var state_11643__$1 = state_11643;var statearr_11657_11676 = state_11643__$1;(statearr_11657_11676[2] = inst_11635);
(statearr_11657_11676[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11644 === 11))
{var inst_11615 = (state_11643[7]);var inst_11632 = (state_11643[2]);var tmp11656 = inst_11615;var inst_11615__$1 = tmp11656;var state_11643__$1 = (function (){var statearr_11658 = state_11643;(statearr_11658[11] = inst_11632);
(statearr_11658[7] = inst_11615__$1);
return statearr_11658;
})();var statearr_11659_11677 = state_11643__$1;(statearr_11659_11677[2] = null);
(statearr_11659_11677[1] = 2);
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
});})(c__5635__auto___11667,out))
;return ((function (switch__5620__auto__,c__5635__auto___11667,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_11663 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11663[0] = state_machine__5621__auto__);
(statearr_11663[1] = 1);
return statearr_11663;
});
var state_machine__5621__auto____1 = (function (state_11643){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_11643);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e11664){if((e11664 instanceof Object))
{var ex__5624__auto__ = e11664;var statearr_11665_11678 = state_11643;(statearr_11665_11678[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11643);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11664;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11679 = state_11643;
state_11643 = G__11679;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_11643){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_11643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___11667,out))
})();var state__5637__auto__ = (function (){var statearr_11666 = f__5636__auto__.call(null);(statearr_11666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___11667);
return statearr_11666;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___11667,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5635__auto___11772 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___11772,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___11772,out){
return (function (state_11749){var state_val_11750 = (state_11749[1]);if((state_val_11750 === 1))
{var inst_11726 = 0;var state_11749__$1 = (function (){var statearr_11751 = state_11749;(statearr_11751[7] = inst_11726);
return statearr_11751;
})();var statearr_11752_11773 = state_11749__$1;(statearr_11752_11773[2] = null);
(statearr_11752_11773[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11750 === 2))
{var inst_11726 = (state_11749[7]);var inst_11728 = (inst_11726 < n);var state_11749__$1 = state_11749;if(cljs.core.truth_(inst_11728))
{var statearr_11753_11774 = state_11749__$1;(statearr_11753_11774[1] = 4);
} else
{var statearr_11754_11775 = state_11749__$1;(statearr_11754_11775[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11750 === 3))
{var inst_11746 = (state_11749[2]);var inst_11747 = cljs.core.async.close_BANG_.call(null,out);var state_11749__$1 = (function (){var statearr_11755 = state_11749;(statearr_11755[8] = inst_11746);
return statearr_11755;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11749__$1,inst_11747);
} else
{if((state_val_11750 === 4))
{var state_11749__$1 = state_11749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11749__$1,7,ch);
} else
{if((state_val_11750 === 5))
{var state_11749__$1 = state_11749;var statearr_11756_11776 = state_11749__$1;(statearr_11756_11776[2] = null);
(statearr_11756_11776[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11750 === 6))
{var inst_11744 = (state_11749[2]);var state_11749__$1 = state_11749;var statearr_11757_11777 = state_11749__$1;(statearr_11757_11777[2] = inst_11744);
(statearr_11757_11777[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11750 === 7))
{var inst_11731 = (state_11749[9]);var inst_11731__$1 = (state_11749[2]);var inst_11732 = (inst_11731__$1 == null);var inst_11733 = cljs.core.not.call(null,inst_11732);var state_11749__$1 = (function (){var statearr_11758 = state_11749;(statearr_11758[9] = inst_11731__$1);
return statearr_11758;
})();if(inst_11733)
{var statearr_11759_11778 = state_11749__$1;(statearr_11759_11778[1] = 8);
} else
{var statearr_11760_11779 = state_11749__$1;(statearr_11760_11779[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11750 === 8))
{var inst_11731 = (state_11749[9]);var state_11749__$1 = state_11749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11749__$1,11,out,inst_11731);
} else
{if((state_val_11750 === 9))
{var state_11749__$1 = state_11749;var statearr_11761_11780 = state_11749__$1;(statearr_11761_11780[2] = null);
(statearr_11761_11780[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11750 === 10))
{var inst_11741 = (state_11749[2]);var state_11749__$1 = state_11749;var statearr_11762_11781 = state_11749__$1;(statearr_11762_11781[2] = inst_11741);
(statearr_11762_11781[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11750 === 11))
{var inst_11726 = (state_11749[7]);var inst_11736 = (state_11749[2]);var inst_11737 = (inst_11726 + 1);var inst_11726__$1 = inst_11737;var state_11749__$1 = (function (){var statearr_11763 = state_11749;(statearr_11763[7] = inst_11726__$1);
(statearr_11763[10] = inst_11736);
return statearr_11763;
})();var statearr_11764_11782 = state_11749__$1;(statearr_11764_11782[2] = null);
(statearr_11764_11782[1] = 2);
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
});})(c__5635__auto___11772,out))
;return ((function (switch__5620__auto__,c__5635__auto___11772,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_11768 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11768[0] = state_machine__5621__auto__);
(statearr_11768[1] = 1);
return statearr_11768;
});
var state_machine__5621__auto____1 = (function (state_11749){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_11749);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e11769){if((e11769 instanceof Object))
{var ex__5624__auto__ = e11769;var statearr_11770_11783 = state_11749;(statearr_11770_11783[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11749);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11769;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11784 = state_11749;
state_11749 = G__11784;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_11749){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_11749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___11772,out))
})();var state__5637__auto__ = (function (){var statearr_11771 = f__5636__auto__.call(null);(statearr_11771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___11772);
return statearr_11771;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___11772,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5635__auto___11881 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___11881,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___11881,out){
return (function (state_11856){var state_val_11857 = (state_11856[1]);if((state_val_11857 === 1))
{var inst_11833 = null;var state_11856__$1 = (function (){var statearr_11858 = state_11856;(statearr_11858[7] = inst_11833);
return statearr_11858;
})();var statearr_11859_11882 = state_11856__$1;(statearr_11859_11882[2] = null);
(statearr_11859_11882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11857 === 2))
{var state_11856__$1 = state_11856;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11856__$1,4,ch);
} else
{if((state_val_11857 === 3))
{var inst_11853 = (state_11856[2]);var inst_11854 = cljs.core.async.close_BANG_.call(null,out);var state_11856__$1 = (function (){var statearr_11860 = state_11856;(statearr_11860[8] = inst_11853);
return statearr_11860;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11856__$1,inst_11854);
} else
{if((state_val_11857 === 4))
{var inst_11836 = (state_11856[9]);var inst_11836__$1 = (state_11856[2]);var inst_11837 = (inst_11836__$1 == null);var inst_11838 = cljs.core.not.call(null,inst_11837);var state_11856__$1 = (function (){var statearr_11861 = state_11856;(statearr_11861[9] = inst_11836__$1);
return statearr_11861;
})();if(inst_11838)
{var statearr_11862_11883 = state_11856__$1;(statearr_11862_11883[1] = 5);
} else
{var statearr_11863_11884 = state_11856__$1;(statearr_11863_11884[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11857 === 5))
{var inst_11836 = (state_11856[9]);var inst_11833 = (state_11856[7]);var inst_11840 = cljs.core._EQ_.call(null,inst_11836,inst_11833);var state_11856__$1 = state_11856;if(inst_11840)
{var statearr_11864_11885 = state_11856__$1;(statearr_11864_11885[1] = 8);
} else
{var statearr_11865_11886 = state_11856__$1;(statearr_11865_11886[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11857 === 6))
{var state_11856__$1 = state_11856;var statearr_11867_11887 = state_11856__$1;(statearr_11867_11887[2] = null);
(statearr_11867_11887[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11857 === 7))
{var inst_11851 = (state_11856[2]);var state_11856__$1 = state_11856;var statearr_11868_11888 = state_11856__$1;(statearr_11868_11888[2] = inst_11851);
(statearr_11868_11888[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11857 === 8))
{var inst_11833 = (state_11856[7]);var tmp11866 = inst_11833;var inst_11833__$1 = tmp11866;var state_11856__$1 = (function (){var statearr_11869 = state_11856;(statearr_11869[7] = inst_11833__$1);
return statearr_11869;
})();var statearr_11870_11889 = state_11856__$1;(statearr_11870_11889[2] = null);
(statearr_11870_11889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11857 === 9))
{var inst_11836 = (state_11856[9]);var state_11856__$1 = state_11856;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11856__$1,11,out,inst_11836);
} else
{if((state_val_11857 === 10))
{var inst_11848 = (state_11856[2]);var state_11856__$1 = state_11856;var statearr_11871_11890 = state_11856__$1;(statearr_11871_11890[2] = inst_11848);
(statearr_11871_11890[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11857 === 11))
{var inst_11836 = (state_11856[9]);var inst_11845 = (state_11856[2]);var inst_11833 = inst_11836;var state_11856__$1 = (function (){var statearr_11872 = state_11856;(statearr_11872[10] = inst_11845);
(statearr_11872[7] = inst_11833);
return statearr_11872;
})();var statearr_11873_11891 = state_11856__$1;(statearr_11873_11891[2] = null);
(statearr_11873_11891[1] = 2);
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
});})(c__5635__auto___11881,out))
;return ((function (switch__5620__auto__,c__5635__auto___11881,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_11877 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11877[0] = state_machine__5621__auto__);
(statearr_11877[1] = 1);
return statearr_11877;
});
var state_machine__5621__auto____1 = (function (state_11856){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_11856);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e11878){if((e11878 instanceof Object))
{var ex__5624__auto__ = e11878;var statearr_11879_11892 = state_11856;(statearr_11879_11892[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11856);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11878;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11893 = state_11856;
state_11856 = G__11893;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_11856){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_11856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___11881,out))
})();var state__5637__auto__ = (function (){var statearr_11880 = f__5636__auto__.call(null);(statearr_11880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___11881);
return statearr_11880;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___11881,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5635__auto___12028 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___12028,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___12028,out){
return (function (state_11998){var state_val_11999 = (state_11998[1]);if((state_val_11999 === 1))
{var inst_11961 = (new Array(n));var inst_11962 = inst_11961;var inst_11963 = 0;var state_11998__$1 = (function (){var statearr_12000 = state_11998;(statearr_12000[7] = inst_11962);
(statearr_12000[8] = inst_11963);
return statearr_12000;
})();var statearr_12001_12029 = state_11998__$1;(statearr_12001_12029[2] = null);
(statearr_12001_12029[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 2))
{var state_11998__$1 = state_11998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11998__$1,4,ch);
} else
{if((state_val_11999 === 3))
{var inst_11996 = (state_11998[2]);var state_11998__$1 = state_11998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11998__$1,inst_11996);
} else
{if((state_val_11999 === 4))
{var inst_11966 = (state_11998[9]);var inst_11966__$1 = (state_11998[2]);var inst_11967 = (inst_11966__$1 == null);var inst_11968 = cljs.core.not.call(null,inst_11967);var state_11998__$1 = (function (){var statearr_12002 = state_11998;(statearr_12002[9] = inst_11966__$1);
return statearr_12002;
})();if(inst_11968)
{var statearr_12003_12030 = state_11998__$1;(statearr_12003_12030[1] = 5);
} else
{var statearr_12004_12031 = state_11998__$1;(statearr_12004_12031[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 5))
{var inst_11962 = (state_11998[7]);var inst_11971 = (state_11998[10]);var inst_11963 = (state_11998[8]);var inst_11966 = (state_11998[9]);var inst_11970 = (inst_11962[inst_11963] = inst_11966);var inst_11971__$1 = (inst_11963 + 1);var inst_11972 = (inst_11971__$1 < n);var state_11998__$1 = (function (){var statearr_12005 = state_11998;(statearr_12005[10] = inst_11971__$1);
(statearr_12005[11] = inst_11970);
return statearr_12005;
})();if(cljs.core.truth_(inst_11972))
{var statearr_12006_12032 = state_11998__$1;(statearr_12006_12032[1] = 8);
} else
{var statearr_12007_12033 = state_11998__$1;(statearr_12007_12033[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 6))
{var inst_11963 = (state_11998[8]);var inst_11984 = (inst_11963 > 0);var state_11998__$1 = state_11998;if(cljs.core.truth_(inst_11984))
{var statearr_12009_12034 = state_11998__$1;(statearr_12009_12034[1] = 12);
} else
{var statearr_12010_12035 = state_11998__$1;(statearr_12010_12035[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 7))
{var inst_11994 = (state_11998[2]);var state_11998__$1 = state_11998;var statearr_12011_12036 = state_11998__$1;(statearr_12011_12036[2] = inst_11994);
(statearr_12011_12036[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 8))
{var inst_11962 = (state_11998[7]);var inst_11971 = (state_11998[10]);var tmp12008 = inst_11962;var inst_11962__$1 = tmp12008;var inst_11963 = inst_11971;var state_11998__$1 = (function (){var statearr_12012 = state_11998;(statearr_12012[7] = inst_11962__$1);
(statearr_12012[8] = inst_11963);
return statearr_12012;
})();var statearr_12013_12037 = state_11998__$1;(statearr_12013_12037[2] = null);
(statearr_12013_12037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 9))
{var inst_11962 = (state_11998[7]);var inst_11976 = cljs.core.vec.call(null,inst_11962);var state_11998__$1 = state_11998;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11998__$1,11,out,inst_11976);
} else
{if((state_val_11999 === 10))
{var inst_11982 = (state_11998[2]);var state_11998__$1 = state_11998;var statearr_12014_12038 = state_11998__$1;(statearr_12014_12038[2] = inst_11982);
(statearr_12014_12038[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 11))
{var inst_11978 = (state_11998[2]);var inst_11979 = (new Array(n));var inst_11962 = inst_11979;var inst_11963 = 0;var state_11998__$1 = (function (){var statearr_12015 = state_11998;(statearr_12015[7] = inst_11962);
(statearr_12015[8] = inst_11963);
(statearr_12015[12] = inst_11978);
return statearr_12015;
})();var statearr_12016_12039 = state_11998__$1;(statearr_12016_12039[2] = null);
(statearr_12016_12039[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 12))
{var inst_11962 = (state_11998[7]);var inst_11986 = cljs.core.vec.call(null,inst_11962);var state_11998__$1 = state_11998;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11998__$1,15,out,inst_11986);
} else
{if((state_val_11999 === 13))
{var state_11998__$1 = state_11998;var statearr_12017_12040 = state_11998__$1;(statearr_12017_12040[2] = null);
(statearr_12017_12040[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 14))
{var inst_11991 = (state_11998[2]);var inst_11992 = cljs.core.async.close_BANG_.call(null,out);var state_11998__$1 = (function (){var statearr_12018 = state_11998;(statearr_12018[13] = inst_11991);
return statearr_12018;
})();var statearr_12019_12041 = state_11998__$1;(statearr_12019_12041[2] = inst_11992);
(statearr_12019_12041[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11999 === 15))
{var inst_11988 = (state_11998[2]);var state_11998__$1 = state_11998;var statearr_12020_12042 = state_11998__$1;(statearr_12020_12042[2] = inst_11988);
(statearr_12020_12042[1] = 14);
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
});})(c__5635__auto___12028,out))
;return ((function (switch__5620__auto__,c__5635__auto___12028,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_12024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12024[0] = state_machine__5621__auto__);
(statearr_12024[1] = 1);
return statearr_12024;
});
var state_machine__5621__auto____1 = (function (state_11998){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_11998);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e12025){if((e12025 instanceof Object))
{var ex__5624__auto__ = e12025;var statearr_12026_12043 = state_11998;(statearr_12026_12043[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11998);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12025;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12044 = state_11998;
state_11998 = G__12044;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_11998){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_11998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___12028,out))
})();var state__5637__auto__ = (function (){var statearr_12027 = f__5636__auto__.call(null);(statearr_12027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___12028);
return statearr_12027;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___12028,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5635__auto___12187 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5635__auto___12187,out){
return (function (){var f__5636__auto__ = (function (){var switch__5620__auto__ = ((function (c__5635__auto___12187,out){
return (function (state_12157){var state_val_12158 = (state_12157[1]);if((state_val_12158 === 1))
{var inst_12116 = [];var inst_12117 = inst_12116;var inst_12118 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12157__$1 = (function (){var statearr_12159 = state_12157;(statearr_12159[7] = inst_12117);
(statearr_12159[8] = inst_12118);
return statearr_12159;
})();var statearr_12160_12188 = state_12157__$1;(statearr_12160_12188[2] = null);
(statearr_12160_12188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 2))
{var state_12157__$1 = state_12157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12157__$1,4,ch);
} else
{if((state_val_12158 === 3))
{var inst_12155 = (state_12157[2]);var state_12157__$1 = state_12157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12157__$1,inst_12155);
} else
{if((state_val_12158 === 4))
{var inst_12121 = (state_12157[9]);var inst_12121__$1 = (state_12157[2]);var inst_12122 = (inst_12121__$1 == null);var inst_12123 = cljs.core.not.call(null,inst_12122);var state_12157__$1 = (function (){var statearr_12161 = state_12157;(statearr_12161[9] = inst_12121__$1);
return statearr_12161;
})();if(inst_12123)
{var statearr_12162_12189 = state_12157__$1;(statearr_12162_12189[1] = 5);
} else
{var statearr_12163_12190 = state_12157__$1;(statearr_12163_12190[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 5))
{var inst_12121 = (state_12157[9]);var inst_12125 = (state_12157[10]);var inst_12118 = (state_12157[8]);var inst_12125__$1 = f.call(null,inst_12121);var inst_12126 = cljs.core._EQ_.call(null,inst_12125__$1,inst_12118);var inst_12127 = cljs.core.keyword_identical_QMARK_.call(null,inst_12118,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12128 = (inst_12126) || (inst_12127);var state_12157__$1 = (function (){var statearr_12164 = state_12157;(statearr_12164[10] = inst_12125__$1);
return statearr_12164;
})();if(cljs.core.truth_(inst_12128))
{var statearr_12165_12191 = state_12157__$1;(statearr_12165_12191[1] = 8);
} else
{var statearr_12166_12192 = state_12157__$1;(statearr_12166_12192[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 6))
{var inst_12117 = (state_12157[7]);var inst_12142 = inst_12117.length;var inst_12143 = (inst_12142 > 0);var state_12157__$1 = state_12157;if(cljs.core.truth_(inst_12143))
{var statearr_12168_12193 = state_12157__$1;(statearr_12168_12193[1] = 12);
} else
{var statearr_12169_12194 = state_12157__$1;(statearr_12169_12194[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 7))
{var inst_12153 = (state_12157[2]);var state_12157__$1 = state_12157;var statearr_12170_12195 = state_12157__$1;(statearr_12170_12195[2] = inst_12153);
(statearr_12170_12195[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 8))
{var inst_12121 = (state_12157[9]);var inst_12125 = (state_12157[10]);var inst_12117 = (state_12157[7]);var inst_12130 = inst_12117.push(inst_12121);var tmp12167 = inst_12117;var inst_12117__$1 = tmp12167;var inst_12118 = inst_12125;var state_12157__$1 = (function (){var statearr_12171 = state_12157;(statearr_12171[11] = inst_12130);
(statearr_12171[7] = inst_12117__$1);
(statearr_12171[8] = inst_12118);
return statearr_12171;
})();var statearr_12172_12196 = state_12157__$1;(statearr_12172_12196[2] = null);
(statearr_12172_12196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 9))
{var inst_12117 = (state_12157[7]);var inst_12133 = cljs.core.vec.call(null,inst_12117);var state_12157__$1 = state_12157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12157__$1,11,out,inst_12133);
} else
{if((state_val_12158 === 10))
{var inst_12140 = (state_12157[2]);var state_12157__$1 = state_12157;var statearr_12173_12197 = state_12157__$1;(statearr_12173_12197[2] = inst_12140);
(statearr_12173_12197[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 11))
{var inst_12121 = (state_12157[9]);var inst_12125 = (state_12157[10]);var inst_12135 = (state_12157[2]);var inst_12136 = [];var inst_12137 = inst_12136.push(inst_12121);var inst_12117 = inst_12136;var inst_12118 = inst_12125;var state_12157__$1 = (function (){var statearr_12174 = state_12157;(statearr_12174[12] = inst_12137);
(statearr_12174[13] = inst_12135);
(statearr_12174[7] = inst_12117);
(statearr_12174[8] = inst_12118);
return statearr_12174;
})();var statearr_12175_12198 = state_12157__$1;(statearr_12175_12198[2] = null);
(statearr_12175_12198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 12))
{var inst_12117 = (state_12157[7]);var inst_12145 = cljs.core.vec.call(null,inst_12117);var state_12157__$1 = state_12157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12157__$1,15,out,inst_12145);
} else
{if((state_val_12158 === 13))
{var state_12157__$1 = state_12157;var statearr_12176_12199 = state_12157__$1;(statearr_12176_12199[2] = null);
(statearr_12176_12199[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 14))
{var inst_12150 = (state_12157[2]);var inst_12151 = cljs.core.async.close_BANG_.call(null,out);var state_12157__$1 = (function (){var statearr_12177 = state_12157;(statearr_12177[14] = inst_12150);
return statearr_12177;
})();var statearr_12178_12200 = state_12157__$1;(statearr_12178_12200[2] = inst_12151);
(statearr_12178_12200[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12158 === 15))
{var inst_12147 = (state_12157[2]);var state_12157__$1 = state_12157;var statearr_12179_12201 = state_12157__$1;(statearr_12179_12201[2] = inst_12147);
(statearr_12179_12201[1] = 14);
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
});})(c__5635__auto___12187,out))
;return ((function (switch__5620__auto__,c__5635__auto___12187,out){
return (function() {
var state_machine__5621__auto__ = null;
var state_machine__5621__auto____0 = (function (){var statearr_12183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12183[0] = state_machine__5621__auto__);
(statearr_12183[1] = 1);
return statearr_12183;
});
var state_machine__5621__auto____1 = (function (state_12157){while(true){
var ret_value__5622__auto__ = (function (){try{while(true){
var result__5623__auto__ = switch__5620__auto__.call(null,state_12157);if(cljs.core.keyword_identical_QMARK_.call(null,result__5623__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5623__auto__;
}
break;
}
}catch (e12184){if((e12184 instanceof Object))
{var ex__5624__auto__ = e12184;var statearr_12185_12202 = state_12157;(statearr_12185_12202[5] = ex__5624__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12157);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5622__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12203 = state_12157;
state_12157 = G__12203;
continue;
}
} else
{return ret_value__5622__auto__;
}
break;
}
});
state_machine__5621__auto__ = function(state_12157){
switch(arguments.length){
case 0:
return state_machine__5621__auto____0.call(this);
case 1:
return state_machine__5621__auto____1.call(this,state_12157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5621__auto____0;
state_machine__5621__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5621__auto____1;
return state_machine__5621__auto__;
})()
;})(switch__5620__auto__,c__5635__auto___12187,out))
})();var state__5637__auto__ = (function (){var statearr_12186 = f__5636__auto__.call(null);(statearr_12186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5635__auto___12187);
return statearr_12186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5637__auto__);
});})(c__5635__auto___12187,out))
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
