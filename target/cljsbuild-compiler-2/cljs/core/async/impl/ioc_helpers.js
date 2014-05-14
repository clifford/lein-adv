// Compiled by ClojureScript 0.0-2197
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$60);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t18914 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t18914 = (function (f,fn_handler,meta18915){
this.f = f;
this.fn_handler = fn_handler;
this.meta18915 = meta18915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t18914.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t18914.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t18914";
cljs.core.async.impl.ioc_helpers.t18914.cljs$lang$ctorPrWriter = (function (this__4045__auto__,writer__4046__auto__,opt__4047__auto__){return cljs.core._write(writer__4046__auto__,"cljs.core.async.impl.ioc-helpers/t18914");
});
cljs.core.async.impl.ioc_helpers.t18914.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t18914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t18914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t18914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18916){var self__ = this;
var _18916__$1 = this;return self__.meta18915;
});
cljs.core.async.impl.ioc_helpers.t18914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18916,meta18915__$1){var self__ = this;
var _18916__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t18914(self__.f,self__.fn_handler,meta18915__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t18914 = (function __GT_t18914(f__$1,fn_handler__$1,meta18915){return (new cljs.core.async.impl.ioc_helpers.t18914(f__$1,fn_handler__$1,meta18915));
});
}
return (new cljs.core.async.impl.ioc_helpers.t18914(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e18918){if((e18918 instanceof Object))
{var ex = e18918;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{if(cljs.core.constant$keyword$50)
{throw e18918;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_18921_18923 = state;(statearr_18921_18923[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_18921_18923[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_18922_18924 = state;(statearr_18922_18924[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_18922_18924[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$61;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){var statearr_18927_18929 = state;(statearr_18927_18929[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);
(statearr_18927_18929[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_18928_18930 = state;(statearr_18928_18930[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_18928_18930[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$61;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18931){var map__18936 = p__18931;var map__18936__$1 = ((cljs.core.seq_QMARK_(map__18936))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18936):map__18936);var opts = map__18936__$1;var statearr_18937_18940 = state;(statearr_18937_18940[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts(((function (map__18936,map__18936__$1,opts){
return (function (val){var statearr_18938_18941 = state;(statearr_18938_18941[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__18936,map__18936__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_18939_18942 = state;(statearr_18939_18942[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
return cljs.core.constant$keyword$61;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18931 = null;if (arguments.length > 3) {
  p__18931 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18931);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18943){
var state = cljs.core.first(arglist__18943);
arglist__18943 = cljs.core.next(arglist__18943);
var cont_block = cljs.core.first(arglist__18943);
arglist__18943 = cljs.core.next(arglist__18943);
var ports = cljs.core.first(arglist__18943);
var p__18931 = cljs.core.rest(arglist__18943);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18931);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){return null;
});})(c))
));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4059__auto__){var self__ = this;
var this__4059__auto____$1 = this;var h__3889__auto__ = self__.__hash;if(!((h__3889__auto__ == null)))
{return h__3889__auto__;
} else
{var h__3889__auto____$1 = cljs.core.hash_imap(this__4059__auto____$1);self__.__hash = h__3889__auto____$1;
return h__3889__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4064__auto__,k__4065__auto__){var self__ = this;
var this__4064__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4064__auto____$1,k__4065__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4066__auto__,k18945,else__4067__auto__){var self__ = this;
var this__4066__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k18945,cljs.core.constant$keyword$62))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k18945,cljs.core.constant$keyword$63))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_(k18945,cljs.core.constant$keyword$64))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k18945,cljs.core.constant$keyword$65))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k18945,cljs.core.constant$keyword$66))
{return self__.prev;
} else
{if(cljs.core.constant$keyword$50)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18945,else__4067__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4071__auto__,k__4072__auto__,G__18944){var self__ = this;
var this__4071__auto____$1 = this;var pred__18947 = cljs.core.keyword_identical_QMARK_;var expr__18948 = k__4072__auto__;if(cljs.core.truth_((pred__18947.cljs$core$IFn$_invoke$arity$2 ? pred__18947.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$62,expr__18948) : pred__18947.call(null,cljs.core.constant$keyword$62,expr__18948))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__18944,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__18947.cljs$core$IFn$_invoke$arity$2 ? pred__18947.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$63,expr__18948) : pred__18947.call(null,cljs.core.constant$keyword$63,expr__18948))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__18944,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__18947.cljs$core$IFn$_invoke$arity$2 ? pred__18947.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$64,expr__18948) : pred__18947.call(null,cljs.core.constant$keyword$64,expr__18948))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__18944,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__18947.cljs$core$IFn$_invoke$arity$2 ? pred__18947.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$65,expr__18948) : pred__18947.call(null,cljs.core.constant$keyword$65,expr__18948))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__18944,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__18947.cljs$core$IFn$_invoke$arity$2 ? pred__18947.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$66,expr__18948) : pred__18947.call(null,cljs.core.constant$keyword$66,expr__18948))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__18944,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4072__auto__,G__18944),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4078__auto__,writer__4079__auto__,opts__4080__auto__){var self__ = this;
var this__4078__auto____$1 = this;var pr_pair__4081__auto__ = ((function (this__4078__auto____$1){
return (function (keyval__4082__auto__){return cljs.core.pr_sequential_writer(writer__4079__auto__,cljs.core.pr_writer,""," ","",opts__4080__auto__,keyval__4082__auto__);
});})(this__4078__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4079__auto__,pr_pair__4081__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4080__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$62,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$63,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$64,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$65,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$66,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4069__auto__,entry__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4070__auto__))
{return cljs.core._assoc(this__4069__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4070__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4070__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4069__auto____$1,entry__4070__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4076__auto__){var self__ = this;
var this__4076__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$62,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$63,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$64,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$65,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$66,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4068__auto__){var self__ = this;
var this__4068__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4060__auto__,other__4061__auto__){var self__ = this;
var this__4060__auto____$1 = this;if(cljs.core.truth_((function (){var and__3466__auto__ = other__4061__auto__;if(cljs.core.truth_(and__3466__auto__))
{return ((this__4060__auto____$1.constructor === other__4061__auto__.constructor)) && (cljs.core.equiv_map(this__4060__auto____$1,other__4061__auto__));
} else
{return and__3466__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4063__auto__,G__18944){var self__ = this;
var this__4063__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__18944,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4058__auto__){var self__ = this;
var this__4058__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4073__auto__,k__4074__auto__){var self__ = this;
var this__4073__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$64,null,cljs.core.constant$keyword$62,null,cljs.core.constant$keyword$63,null,cljs.core.constant$keyword$65,null,cljs.core.constant$keyword$66,null], null), null),k__4074__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4073__auto____$1),self__.__meta),k__4074__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4074__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4098__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4098__auto__,writer__4099__auto__){return cljs.core._write(writer__4099__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__18946){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(G__18946),cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(G__18946),cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(G__18946),cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(G__18946),cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(G__18946),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18946,cljs.core.constant$keyword$62,cljs.core.array_seq([cljs.core.constant$keyword$63,cljs.core.constant$keyword$64,cljs.core.constant$keyword$65,cljs.core.constant$keyword$66], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_18951 = state;(statearr_18951[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_18951;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$62.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$63.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3466__auto__ = exception;if(cljs.core.truth_(and__3466__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3466__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3466__auto__ = exception;if(cljs.core.truth_(and__3466__auto__))
{var and__3466__auto____$1 = catch_block;if(cljs.core.truth_(and__3466__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3466__auto____$1;
}
} else
{return and__3466__auto__;
}
})()))
{var statearr_18957 = state;(statearr_18957[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_18957[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_18957[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_18957[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$62,null,cljs.core.array_seq([cljs.core.constant$keyword$63,null], 0)));
return statearr_18957;
} else
{if(cljs.core.truth_((function (){var and__3466__auto__ = exception;if(cljs.core.truth_(and__3466__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3466__auto__;
}
})()))
{var statearr_18958_18962 = state;(statearr_18958_18962[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__18963 = state;
state = G__18963;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3466__auto__ = exception;if(cljs.core.truth_(and__3466__auto__))
{var and__3466__auto____$1 = cljs.core.not(catch_block);if(and__3466__auto____$1)
{return cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3466__auto____$1;
}
} else
{return and__3466__auto__;
}
})()))
{var statearr_18959 = state;(statearr_18959[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18959[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$64,null));
return statearr_18959;
} else
{if(cljs.core.truth_((function (){var and__3466__auto__ = cljs.core.not(exception);if(and__3466__auto__)
{return cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3466__auto__;
}
})()))
{var statearr_18960 = state;(statearr_18960[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18960[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$64,null));
return statearr_18960;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_18961 = state;(statearr_18961[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$65.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_18961[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$66.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_18961;
} else
{if(cljs.core.constant$keyword$50)
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
