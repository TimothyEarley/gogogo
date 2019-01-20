(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (false) {
    }
    root['kotlinx-coroutines-core'] = factory(typeof this['kotlinx-coroutines-core'] === 'undefined' ? {} : this['kotlinx-coroutines-core'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Unit = Kotlin.kotlin.Unit;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Continuation = Kotlin.kotlin.coroutines.Continuation;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var throwUPAE = Kotlin.throwUPAE;
  var coroutines = Kotlin.kotlin.coroutines;
  var ContinuationInterceptor = Kotlin.kotlin.coroutines.ContinuationInterceptor;
  var equals = Kotlin.equals;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Throwable = Error;
  var toString = Kotlin.toString;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ensureNotNull = Kotlin.ensureNotNull;
  var AbstractCoroutineContextElement = Kotlin.kotlin.coroutines.AbstractCoroutineContextElement;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var CoroutineContext$Key = Kotlin.kotlin.coroutines.CoroutineContext.Key;
  var CoroutineContext$Element = Kotlin.kotlin.coroutines.CoroutineContext.Element;
  var startCoroutine = Kotlin.kotlin.coroutines.startCoroutine_x18nsh$;
  var startCoroutine_0 = Kotlin.kotlin.coroutines.startCoroutine_3a617i$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var L0 = Kotlin.Long.ZERO;
  var L4294967296 = new Kotlin.Long(0, 1);
  var L1 = Kotlin.Long.ONE;
  var sequence = Kotlin.kotlin.sequences.sequence_o0x0bg$;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var emptySequence = Kotlin.kotlin.sequences.emptySequence_287e2$;
  var UnsupportedOperationException_init_0 = Kotlin.kotlin.UnsupportedOperationException_init;
  var SuspendFunction1 = Function;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var IndexedValue = Kotlin.kotlin.collections.IndexedValue;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var createCoroutineUnintercepted = Kotlin.kotlin.coroutines.intrinsics.createCoroutineUnintercepted_x18nsh$;
  var createCoroutineUnintercepted_0 = Kotlin.kotlin.coroutines.intrinsics.createCoroutineUnintercepted_3a617i$;
  var shuffle = Kotlin.kotlin.collections.shuffle_vvxzk3$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var hashCode = Kotlin.hashCode;
  var L2147483647 = Kotlin.Long.fromInt(2147483647);
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_ekzx8g$;
  var HashSet_init_0 = Kotlin.kotlin.collections.HashSet_init_ww73n8$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException_init;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var AbstractMutableList = Kotlin.kotlin.collections.AbstractMutableList;
  AbstractCoroutine.prototype = Object.create(JobSupport.prototype);
  AbstractCoroutine.prototype.constructor = AbstractCoroutine;
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  DeferredCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  DeferredCoroutine.prototype.constructor = DeferredCoroutine;
  LazyDeferredCoroutine.prototype = Object.create(DeferredCoroutine.prototype);
  LazyDeferredCoroutine.prototype.constructor = LazyDeferredCoroutine;
  StandaloneCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  StandaloneCoroutine.prototype.constructor = StandaloneCoroutine;
  LazyStandaloneCoroutine.prototype = Object.create(StandaloneCoroutine.prototype);
  LazyStandaloneCoroutine.prototype.constructor = LazyStandaloneCoroutine;
  RemoveOnCancel.prototype = Object.create(CancelHandler.prototype);
  RemoveOnCancel.prototype.constructor = RemoveOnCancel;
  DisposeOnCancel.prototype = Object.create(CancelHandler.prototype);
  DisposeOnCancel.prototype.constructor = DisposeOnCancel;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  CompletableDeferredImpl.prototype = Object.create(JobSupport.prototype);
  CompletableDeferredImpl.prototype.constructor = CompletableDeferredImpl;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  CoroutineStart.prototype = Object.create(Enum.prototype);
  CoroutineStart.prototype.constructor = CoroutineStart;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  JobSupport$ChildCompletion.prototype = Object.create(JobNode.prototype);
  JobSupport$ChildCompletion.prototype.constructor = JobSupport$ChildCompletion;
  JobSupport$AwaitContinuation.prototype = Object.create(CancellableContinuationImpl.prototype);
  JobSupport$AwaitContinuation.prototype.constructor = JobSupport$AwaitContinuation;
  JobImpl.prototype = Object.create(JobSupport.prototype);
  JobImpl.prototype.constructor = JobImpl;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList.prototype = Object.create(LinkedListHead.prototype);
  NodeList.prototype.constructor = NodeList;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ResumeOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeOnCompletion.prototype.constructor = ResumeOnCompletion;
  ResumeAwaitOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeAwaitOnCompletion.prototype.constructor = ResumeAwaitOnCompletion;
  SelectJoinOnCompletion.prototype = Object.create(JobNode.prototype);
  SelectJoinOnCompletion.prototype.constructor = SelectJoinOnCompletion;
  SelectAwaitOnCompletion.prototype = Object.create(JobNode.prototype);
  SelectAwaitOnCompletion.prototype.constructor = SelectAwaitOnCompletion;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  MainCoroutineDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  MainCoroutineDispatcher.prototype.constructor = MainCoroutineDispatcher;
  NonCancellable.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CancellationException.prototype = Object.create(IllegalStateException.prototype);
  CancellationException.prototype.constructor = CancellationException;
  Unconfined.prototype = Object.create(CoroutineDispatcher.prototype);
  Unconfined.prototype.constructor = Unconfined;
  AbstractAtomicDesc.prototype = Object.create(AtomicDesc.prototype);
  AbstractAtomicDesc.prototype.constructor = AbstractAtomicDesc;
  AddLastDesc.prototype = Object.create(AbstractAtomicDesc.prototype);
  AddLastDesc.prototype.constructor = AddLastDesc;
  AbstractSendChannel$SendBufferedDesc.prototype = Object.create(AddLastDesc.prototype);
  AbstractSendChannel$SendBufferedDesc.prototype.constructor = AbstractSendChannel$SendBufferedDesc;
  AbstractSendChannel$SendConflatedDesc.prototype = Object.create(AbstractSendChannel$SendBufferedDesc.prototype);
  AbstractSendChannel$SendConflatedDesc.prototype.constructor = AbstractSendChannel$SendConflatedDesc;
  RemoveFirstDesc.prototype = Object.create(AbstractAtomicDesc.prototype);
  RemoveFirstDesc.prototype.constructor = RemoveFirstDesc;
  AbstractSendChannel$TryOfferDesc.prototype = Object.create(RemoveFirstDesc.prototype);
  AbstractSendChannel$TryOfferDesc.prototype.constructor = AbstractSendChannel$TryOfferDesc;
  AbstractSendChannel$TryEnqueueSendDesc.prototype = Object.create(AddLastDesc.prototype);
  AbstractSendChannel$TryEnqueueSendDesc.prototype.constructor = AbstractSendChannel$TryEnqueueSendDesc;
  AbstractSendChannel$SendSelect.prototype = Object.create(LinkedListNode.prototype);
  AbstractSendChannel$SendSelect.prototype.constructor = AbstractSendChannel$SendSelect;
  AbstractSendChannel$SendBuffered.prototype = Object.create(LinkedListNode.prototype);
  AbstractSendChannel$SendBuffered.prototype.constructor = AbstractSendChannel$SendBuffered;
  AbstractChannel$TryPollDesc.prototype = Object.create(RemoveFirstDesc.prototype);
  AbstractChannel$TryPollDesc.prototype.constructor = AbstractChannel$TryPollDesc;
  AbstractChannel$TryEnqueueReceiveDesc.prototype = Object.create(AddLastDesc.prototype);
  AbstractChannel$TryEnqueueReceiveDesc.prototype.constructor = AbstractChannel$TryEnqueueReceiveDesc;
  AbstractChannel$RemoveReceiveOnCancel.prototype = Object.create(CancelHandler.prototype);
  AbstractChannel$RemoveReceiveOnCancel.prototype.constructor = AbstractChannel$RemoveReceiveOnCancel;
  Receive.prototype = Object.create(LinkedListNode.prototype);
  Receive.prototype.constructor = Receive;
  AbstractChannel$ReceiveElement.prototype = Object.create(Receive.prototype);
  AbstractChannel$ReceiveElement.prototype.constructor = AbstractChannel$ReceiveElement;
  AbstractChannel$ReceiveHasNext.prototype = Object.create(Receive.prototype);
  AbstractChannel$ReceiveHasNext.prototype.constructor = AbstractChannel$ReceiveHasNext;
  AbstractChannel$ReceiveSelect.prototype = Object.create(Receive.prototype);
  AbstractChannel$ReceiveSelect.prototype.constructor = AbstractChannel$ReceiveSelect;
  AbstractChannel.prototype = Object.create(AbstractSendChannel.prototype);
  AbstractChannel.prototype.constructor = AbstractChannel;
  SendElement.prototype = Object.create(LinkedListNode.prototype);
  SendElement.prototype.constructor = SendElement;
  Closed.prototype = Object.create(LinkedListNode.prototype);
  Closed.prototype.constructor = Closed;
  ArrayChannel.prototype = Object.create(AbstractChannel.prototype);
  ArrayChannel.prototype.constructor = ArrayChannel;
  BroadcastCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  ClosedSendChannelException.prototype = Object.create(CancellationException.prototype);
  ClosedSendChannelException.prototype.constructor = ClosedSendChannelException;
  ClosedReceiveChannelException.prototype = Object.create(NoSuchElementException.prototype);
  ClosedReceiveChannelException.prototype.constructor = ClosedReceiveChannelException;
  ChannelCoroutine.prototype = Object.create(AbstractCoroutine.prototype);
  ConflatedChannel.prototype = Object.create(AbstractChannel.prototype);
  ConflatedChannel.prototype.constructor = ConflatedChannel;
  LinkedListChannel.prototype = Object.create(AbstractChannel.prototype);
  LinkedListChannel.prototype.constructor = LinkedListChannel;
  RendezvousChannel.prototype = Object.create(AbstractChannel.prototype);
  RendezvousChannel.prototype.constructor = RendezvousChannel;
  AtomicOp.prototype = Object.create(OpDescriptor.prototype);
  AtomicOp.prototype.constructor = AtomicOp;
  SelectBuilderImpl$SelectOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  SelectBuilderImpl$SelectOnCancelling.prototype.constructor = SelectBuilderImpl$SelectOnCancelling;
  SelectBuilderImpl$AtomicSelectOp.prototype = Object.create(AtomicOp.prototype);
  SelectBuilderImpl$AtomicSelectOp.prototype.constructor = SelectBuilderImpl$AtomicSelectOp;
  SelectBuilderImpl$DisposeNode.prototype = Object.create(LinkedListNode.prototype);
  SelectBuilderImpl$DisposeNode.prototype.constructor = SelectBuilderImpl$DisposeNode;
  SelectBuilderImpl.prototype = Object.create(LinkedListHead.prototype);
  SelectBuilderImpl.prototype.constructor = SelectBuilderImpl;
  JsMainDispatcher.prototype = Object.create(MainCoroutineDispatcher.prototype);
  JsMainDispatcher.prototype.constructor = JsMainDispatcher;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  DispatchException.prototype = Object.create(RuntimeException.prototype);
  DispatchException.prototype.constructor = DispatchException;
  NodeDispatcher$ClearTimeout.prototype = Object.create(CancelHandler.prototype);
  NodeDispatcher$ClearTimeout.prototype.constructor = NodeDispatcher$ClearTimeout;
  NodeDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  MessageQueue.prototype = Object.create(ArrayQueue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  WindowDispatcher$queue$ObjectLiteral.prototype = Object.create(MessageQueue.prototype);
  WindowDispatcher$queue$ObjectLiteral.prototype.constructor = WindowDispatcher$queue$ObjectLiteral;
  WindowDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  WindowDispatcher.prototype.constructor = WindowDispatcher;
  function AbstractCoroutine(parentContext, active) {
    if (active === void 0)
      active = true;
    JobSupport.call(this, active);
    this.parentContext = parentContext;
    this.context_p8rm81$_0 = this.parentContext.plus_1fupul$(this);
  }
  Object.defineProperty(AbstractCoroutine.prototype, 'context', {get: function () {
    return this.context_p8rm81$_0;
  }});
  Object.defineProperty(AbstractCoroutine.prototype, 'coroutineContext', {get: function () {
    return this.context;
  }});
  Object.defineProperty(AbstractCoroutine.prototype, 'isActive', {get: function () {
    return Kotlin.callGetter(this, JobSupport.prototype, 'isActive');
  }});
  AbstractCoroutine.prototype.initParentJob_8be2vx$ = function () {
    this.initParentJobInternal_8vd9i7$(this.parentContext.get_j3r2sn$(Job$Key_getInstance()));
  };
  AbstractCoroutine.prototype.onStart = function () {
  };
  AbstractCoroutine.prototype.onStartInternal = function () {
    this.onStart();
  };
  AbstractCoroutine.prototype.onCancellation_dbl4no$ = function (cause) {
  };
  AbstractCoroutine.prototype.onCompleted_11rb$ = function (value) {
  };
  AbstractCoroutine.prototype.onCompletedExceptionally_tcv7n7$ = function (exception) {
  };
  AbstractCoroutine.prototype.onCompletionInternal_5apgvt$ = function (state, mode, suppressed) {
    var tmp$;
    if (Kotlin.isType(state, CompletedExceptionally))
      this.onCompletedExceptionally_tcv7n7$(state.cause);
    else {
      this.onCompleted_11rb$((tmp$ = state) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
    }
  };
  Object.defineProperty(AbstractCoroutine.prototype, 'defaultResumeMode', {get: function () {
    return 0;
  }});
  AbstractCoroutine.prototype.resumeWith_tl1gpc$ = function (result) {
    this.makeCompletingOnce_42w2xh$(toState(result), this.defaultResumeMode);
  };
  AbstractCoroutine.prototype.handleOnCompletionException_tcv7n7$ = function (exception) {
    handleCoroutineException(this.parentContext, exception, this);
  };
  AbstractCoroutine.prototype.nameString = function () {
    var tmp$;
    tmp$ = get_coroutineName(this.context);
    if (tmp$ == null) {
      return JobSupport.prototype.nameString.call(this);
    }
    var coroutineName = tmp$;
    return '"' + coroutineName + '"' + ':' + JobSupport.prototype.nameString.call(this);
  };
  AbstractCoroutine.prototype.start_cfq2d3$ = function (start, block) {
    this.initParentJob_8be2vx$();
    start.invoke_810yno$(block, this);
  };
  AbstractCoroutine.prototype.start_b5ul0p$ = function (start, receiver, block) {
    this.initParentJob_8be2vx$();
    start.invoke_3o0yor$(block, receiver, this);
  };
  AbstractCoroutine.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractCoroutine', interfaces: [CoroutineScope, Continuation, JobSupport, Job]};
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var Array_0 = Array;
  var Result = Kotlin.kotlin.Result;
  function launch($receiver, context, start, block) {
    if (context === void 0)
      context = coroutines.EmptyCoroutineContext;
    if (start === void 0)
      start = CoroutineStart$DEFAULT_getInstance();
    var newContext = newCoroutineContext($receiver, context);
    var coroutine = start.isLazy ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.start_b5ul0p$(start, coroutine, block);
    return coroutine;
  }
  function async($receiver, context, start, block) {
    if (context === void 0)
      context = coroutines.EmptyCoroutineContext;
    if (start === void 0)
      start = CoroutineStart$DEFAULT_getInstance();
    var newContext = newCoroutineContext($receiver, context);
    var coroutine = start.isLazy ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.start_b5ul0p$(start, coroutine, block);
    return coroutine;
  }
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, active);
  }
  Object.defineProperty(DeferredCoroutine.prototype, 'cancelsParent', {get: function () {
    return true;
  }});
  DeferredCoroutine.prototype.getCompleted = function () {
    var tmp$;
    return (tmp$ = this.getCompletedInternal_8be2vx$()) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  DeferredCoroutine.prototype.await = function (continuation_0, suspended) {
    var instance = new Coroutine$await(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$await($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$await.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$await.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await.prototype.constructor = Coroutine$await;
  Coroutine$await.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.awaitInternal_8be2vx$(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return (tmp$ = this.result_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Object.defineProperty(DeferredCoroutine.prototype, 'onAwait', {get: function () {
    return this;
  }});
  DeferredCoroutine.prototype.registerSelectClause1_o3xas4$ = function (select, block) {
    this.registerSelectClause1Internal_u6kgbh$(select, block);
  };
  DeferredCoroutine.$metadata$ = {kind: Kind_CLASS, simpleName: 'DeferredCoroutine', interfaces: [SelectClause1, Deferred, AbstractCoroutine]};
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.block_0 = block;
  }
  LazyDeferredCoroutine.prototype.onStart = function () {
    var value = this.block_0;
    var checkNotNull$result;
    if (value == null) {
      var message = 'Already started';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    var block = checkNotNull$result;
    this.block_0 = null;
    startCoroutineCancellable_0(block, this, this);
  };
  LazyDeferredCoroutine.$metadata$ = {kind: Kind_CLASS, simpleName: 'LazyDeferredCoroutine', interfaces: [DeferredCoroutine]};
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, active);
  }
  Object.defineProperty(StandaloneCoroutine.prototype, 'cancelsParent', {get: function () {
    return true;
  }});
  StandaloneCoroutine.prototype.handleJobException_tcv7n7$ = function (exception) {
    handleExceptionViaHandler(this.parentContext, exception);
  };
  StandaloneCoroutine.$metadata$ = {kind: Kind_CLASS, simpleName: 'StandaloneCoroutine', interfaces: [AbstractCoroutine]};
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.block_0 = block;
  }
  LazyStandaloneCoroutine.prototype.onStart = function () {
    var value = this.block_0;
    var checkNotNull$result;
    if (value == null) {
      var message = 'Already started';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    var block = checkNotNull$result;
    this.block_0 = null;
    startCoroutineCancellable_0(block, this, this);
  };
  LazyStandaloneCoroutine.$metadata$ = {kind: Kind_CLASS, simpleName: 'LazyStandaloneCoroutine', interfaces: [StandaloneCoroutine]};
  var UNDECIDED;
  var SUSPENDED;
  var RESUMED;
  function CancellableContinuation() {
  }
  CancellableContinuation.prototype.tryResume_19pj23$ = function (value, idempotent, callback$default) {
    if (idempotent === void 0)
      idempotent = null;
    return callback$default ? callback$default(value, idempotent) : this.tryResume_19pj23$$default(value, idempotent);
  };
  CancellableContinuation.prototype.cancel_dbl4no$ = function (cause, callback$default) {
    if (cause === void 0)
      cause = null;
    return callback$default ? callback$default(cause) : this.cancel_dbl4no$$default(cause);
  };
  CancellableContinuation.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CancellableContinuation', interfaces: [Continuation]};
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.suspendCancellableCoroutine_o6sdx9$', wrapFunction(function () {
    var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
    var CancellableContinuationImpl_init = _.kotlinx.coroutines.CancellableContinuationImpl;
    function suspendCancellableCoroutine$lambda(closure$block) {
      return function (uCont) {
        var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 1);
        closure$block(cancellable);
        return cancellable.getResult();
      };
    }
    return function (block_0, continuation) {
      Kotlin.suspendCall(suspendCancellableCoroutine$lambda(block_0)(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.suspendAtomicCancellableCoroutine_o6sdx9$', wrapFunction(function () {
    var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
    var CancellableContinuationImpl_init = _.kotlinx.coroutines.CancellableContinuationImpl;
    function suspendAtomicCancellableCoroutine$lambda(closure$block) {
      return function (uCont) {
        var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 0);
        closure$block(cancellable);
        return cancellable.getResult();
      };
    }
    return function (block_0, continuation) {
      Kotlin.suspendCall(suspendAtomicCancellableCoroutine$lambda(block_0)(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.suspendAtomicCancellableCoroutine_i8nyj0$', wrapFunction(function () {
    var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
    var CancellableContinuationImpl_init = _.kotlinx.coroutines.CancellableContinuationImpl;
    function suspendAtomicCancellableCoroutine$lambda(closure$block) {
      return function (uCont) {
        var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 0);
        closure$block(cancellable);
        return cancellable.getResult();
      };
    }
    return function (holdCancellability_0, block_0, continuation) {
      if (holdCancellability_0 === void 0)
        holdCancellability_0 = false;
      Kotlin.suspendCall(suspendAtomicCancellableCoroutine$lambda(block_0)(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function removeOnCancellation($receiver, node) {
    $receiver.invokeOnCancellation_f05bi3$(new RemoveOnCancel(node));
  }
  function disposeOnCancellation($receiver, handle) {
    $receiver.invokeOnCancellation_f05bi3$(new DisposeOnCancel(handle));
  }
  function RemoveOnCancel(node) {
    CancelHandler.call(this);
    this.node_0 = node;
  }
  RemoveOnCancel.prototype.invoke = function (cause) {
    this.node_0.remove();
  };
  RemoveOnCancel.prototype.toString = function () {
    return 'RemoveOnCancel[' + this.node_0 + ']';
  };
  RemoveOnCancel.$metadata$ = {kind: Kind_CLASS, simpleName: 'RemoveOnCancel', interfaces: [CancelHandler]};
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this.handle_0 = handle;
  }
  DisposeOnCancel.prototype.invoke = function (cause) {
    this.handle_0.dispose();
  };
  DisposeOnCancel.prototype.toString = function () {
    return 'DisposeOnCancel[' + this.handle_0 + ']';
  };
  DisposeOnCancel.$metadata$ = {kind: Kind_CLASS, simpleName: 'DisposeOnCancel', interfaces: [CancelHandler]};
  var UNDECIDED_0;
  var SUSPENDED_0;
  var RESUMED_0;
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.delegate_dhbmku$_0 = delegate;
    this.context_xycjfy$_0 = this.delegate.context;
    this._decision_0 = 0;
    this._state_0 = Active_getInstance();
    this.parentHandle_0 = null;
  }
  Object.defineProperty(CancellableContinuationImpl.prototype, 'delegate', {get: function () {
    return this.delegate_dhbmku$_0;
  }});
  Object.defineProperty(CancellableContinuationImpl.prototype, 'context', {get: function () {
    return this.context_xycjfy$_0;
  }});
  Object.defineProperty(CancellableContinuationImpl.prototype, 'state_8be2vx$', {get: function () {
    return this._state_0;
  }});
  Object.defineProperty(CancellableContinuationImpl.prototype, 'isActive', {get: function () {
    return Kotlin.isType(this.state_8be2vx$, NotCompleted);
  }});
  Object.defineProperty(CancellableContinuationImpl.prototype, 'isCompleted', {get: function () {
    return !Kotlin.isType(this.state_8be2vx$, NotCompleted);
  }});
  Object.defineProperty(CancellableContinuationImpl.prototype, 'isCancelled', {get: function () {
    return Kotlin.isType(this.state_8be2vx$, CancelledContinuation);
  }});
  CancellableContinuationImpl.prototype.initCancellability = function () {
  };
  CancellableContinuationImpl.prototype.installParentCancellationHandler_0 = function () {
    var tmp$;
    if (this.isCompleted)
      return;
    tmp$ = this.delegate.context.get_j3r2sn$(Job$Key_getInstance());
    if (tmp$ == null) {
      return;
    }
    var parent = tmp$;
    parent.start();
    var handle = parent.invokeOnCompletion_ct2b2z$(true, void 0, new ChildContinuation(parent, this));
    this.parentHandle_0 = handle;
    if (this.isCompleted) {
      handle.dispose();
      this.parentHandle_0 = NonDisposableHandle_getInstance();
    }
  };
  Object.defineProperty(CancellableContinuationImpl.prototype, 'callerFrame', {get: function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.delegate, CoroutineStackFrame) ? tmp$ : null;
  }});
  CancellableContinuationImpl.prototype.getStackTraceElement = function () {
    return null;
  };
  CancellableContinuationImpl.prototype.takeState = function () {
    return this.state_8be2vx$;
  };
  CancellableContinuationImpl.prototype.cancel_dbl4no$$default = function (cause) {
    var $receiver = this._state_0;
    loop_label: while (true) {
      var state = this._state_0;
      action$break: do {
        if (!Kotlin.isType(state, NotCompleted))
          return false;
        var update = new CancelledContinuation(this, cause, Kotlin.isType(state, CancelHandler));
        if (!function (scope) {
          return scope._state_0 === state ? function () {
            scope._state_0 = update;
            return true;
          }() : false;
        }(this))
          break action$break;
        if (Kotlin.isType(state, CancelHandler)) {
          try {
            state.invoke(cause);
          }
           catch (ex) {
            if (Kotlin.isType(ex, Throwable)) {
              handleCoroutineException(this.context, new CompletionHandlerException('Exception in cancellation handler for ' + this, ex));
            }
             else
              throw ex;
          }
        }
        this.disposeParentHandle_0();
        this.dispatchResume_0(0);
        return true;
      }
       while (false);
    }
  };
  CancellableContinuationImpl.prototype.invokeHandlerSafely_0 = function (block) {
    try {
      block();
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        handleCoroutineException(this.context, new CompletionHandlerException('Exception in cancellation handler for ' + this, ex));
      }
       else
        throw ex;
    }
  };
  CancellableContinuationImpl.prototype.getContinuationCancellationCause_dqr1mp$ = function (parent) {
    return parent.getCancellationException();
  };
  CancellableContinuationImpl.prototype.trySuspend_0 = function () {
    var $receiver = this._decision_0;
    while (true) {
      switch (this._decision_0) {
        case 0:
          if (function (scope) {
            return scope._decision_0 === 0 ? function () {
              scope._decision_0 = 1;
              return true;
            }() : false;
          }(this))
            return true;
          break;
        case 2:
          return false;
        default:throw IllegalStateException_init('Already suspended'.toString());
      }
    }
  };
  CancellableContinuationImpl.prototype.tryResume_0 = function () {
    var $receiver = this._decision_0;
    while (true) {
      switch (this._decision_0) {
        case 0:
          if (function (scope) {
            return scope._decision_0 === 0 ? function () {
              scope._decision_0 = 2;
              return true;
            }() : false;
          }(this))
            return true;
          break;
        case 1:
          return false;
        default:throw IllegalStateException_init('Already resumed'.toString());
      }
    }
  };
  CancellableContinuationImpl.prototype.getResult = function () {
    this.installParentCancellationHandler_0();
    if (this.trySuspend_0())
      return COROUTINE_SUSPENDED;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, CompletedExceptionally))
      throw recoverStackTrace(state.cause, this);
    return this.getSuccessfulResult_tpy1pm$(state);
  };
  CancellableContinuationImpl.prototype.resumeWith_tl1gpc$ = function (result) {
    this.resumeImpl_0(toState(result), this.resumeMode);
  };
  CancellableContinuationImpl.prototype.resumeWithExceptionMode_i32via$ = function (exception, mode) {
    this.resumeImpl_0(new CompletedExceptionally(exception), mode);
  };
  CancellableContinuationImpl.prototype.invokeOnCancellation_f05bi3$ = function (handler) {
    var handleCache = {v: null};
    var $receiver = this._state_0;
    while (true) {
      var state = this._state_0;
      var tmp$;
      if (Kotlin.isType(state, Active)) {
        var tmp$_0;
        if ((tmp$ = handleCache.v) != null)
          tmp$_0 = tmp$;
        else {
          var $receiver_0 = this.makeHandler_0(handler);
          handleCache.v = $receiver_0;
          tmp$_0 = $receiver_0;
        }
        var node = tmp$_0;
        if (function (scope) {
          return scope._state_0 === state ? function () {
            scope._state_0 = node;
            return true;
          }() : false;
        }(this))
          return;
      }
       else if (Kotlin.isType(state, CancelHandler))
        this.multipleHandlersError_0(handler, state);
      else if (Kotlin.isType(state, CancelledContinuation)) {
        if (!state.makeHandled())
          this.multipleHandlersError_0(handler, state);
        try {
          var tmp$_1, tmp$_2;
          invokeIt(handler, (tmp$_2 = Kotlin.isType(tmp$_1 = state, CompletedExceptionally) ? tmp$_1 : null) != null ? tmp$_2.cause : null);
        }
         catch (ex) {
          if (Kotlin.isType(ex, Throwable)) {
            handleCoroutineException(this.context, new CompletionHandlerException('Exception in cancellation handler for ' + this, ex));
          }
           else
            throw ex;
        }
        return;
      }
       else {
        return;
      }
    }
  };
  CancellableContinuationImpl.prototype.multipleHandlersError_0 = function (handler, state) {
    throw IllegalStateException_init(("It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + toString(state)).toString());
  };
  CancellableContinuationImpl.prototype.makeHandler_0 = function (handler) {
    return Kotlin.isType(handler, CancelHandler) ? handler : new InvokeOnCancel(handler);
  };
  CancellableContinuationImpl.prototype.dispatchResume_0 = function (mode) {
    if (this.tryResume_0())
      return;
    dispatch(this, mode);
  };
  CancellableContinuationImpl.prototype.resumeImpl_0 = function (proposedUpdate, resumeMode) {
    var $receiver = this._state_0;
    loop_label: while (true) {
      var state = this._state_0;
      action$break: do {
        if (Kotlin.isType(state, NotCompleted)) {
          if (!function (scope) {
            return scope._state_0 === state ? function () {
              scope._state_0 = proposedUpdate;
              return true;
            }() : false;
          }(this))
            break action$break;
          this.disposeParentHandle_0();
          this.dispatchResume_0(resumeMode);
          return;
        }
         else if (Kotlin.isType(state, CancelledContinuation))
          if (state.makeResumed())
            return;
        this.alreadyResumedError_0(proposedUpdate);
      }
       while (false);
    }
  };
  CancellableContinuationImpl.prototype.alreadyResumedError_0 = function (proposedUpdate) {
    throw IllegalStateException_init(('Already resumed, but proposed with update ' + toString(proposedUpdate)).toString());
  };
  CancellableContinuationImpl.prototype.disposeParentHandle_0 = function () {
    var tmp$;
    if ((tmp$ = this.parentHandle_0) != null) {
      tmp$.dispose();
      this.parentHandle_0 = NonDisposableHandle_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.tryResume_19pj23$$default = function (value, idempotent) {
    var $receiver = this._state_0;
    loop_label: while (true) {
      var state = this._state_0;
      action$break: do {
        var tmp$;
        if (Kotlin.isType(state, NotCompleted)) {
          var update = idempotent == null ? value : new CompletedIdempotentResult(idempotent, value, state);
          if (!function (scope) {
            return scope._state_0 === state ? function () {
              scope._state_0 = update;
              return true;
            }() : false;
          }(this))
            break action$break;
          this.disposeParentHandle_0();
          return state;
        }
         else if (Kotlin.isType(state, CompletedIdempotentResult)) {
          if (state.idempotentResume === idempotent) {
            if (!(state.result === value)) {
              var message = 'Non-idempotent resume';
              throw IllegalStateException_init(message.toString());
            }
            tmp$ = state.token;
          }
           else {
            tmp$ = null;
          }
          return tmp$;
        }
         else
          return null;
      }
       while (false);
    }
  };
  CancellableContinuationImpl.prototype.tryResumeWithException_tcv7n7$ = function (exception) {
    var $receiver = this._state_0;
    loop_label: while (true) {
      var state = this._state_0;
      action$break: do {
        if (Kotlin.isType(state, NotCompleted)) {
          var update = new CompletedExceptionally(exception);
          if (!function (scope) {
            return scope._state_0 === state ? function () {
              scope._state_0 = update;
              return true;
            }() : false;
          }(this))
            break action$break;
          this.disposeParentHandle_0();
          return state;
        }
         else
          return null;
      }
       while (false);
    }
  };
  CancellableContinuationImpl.prototype.completeResume_za3rmp$ = function (token) {
    this.dispatchResume_0(this.resumeMode);
  };
  CancellableContinuationImpl.prototype.resumeUndispatched_hyuxa3$ = function ($receiver, value) {
    var tmp$;
    var dc = Kotlin.isType(tmp$ = this.delegate, DispatchedContinuation) ? tmp$ : null;
    this.resumeImpl_0(value, (dc != null ? dc.dispatcher : null) === $receiver ? 3 : this.resumeMode);
  };
  CancellableContinuationImpl.prototype.resumeUndispatchedWithException_gd0rtt$ = function ($receiver, exception) {
    var tmp$;
    var dc = Kotlin.isType(tmp$ = this.delegate, DispatchedContinuation) ? tmp$ : null;
    this.resumeImpl_0(new CompletedExceptionally(exception), (dc != null ? dc.dispatcher : null) === $receiver ? 3 : this.resumeMode);
  };
  CancellableContinuationImpl.prototype.getSuccessfulResult_tpy1pm$ = function (state) {
    var tmp$, tmp$_0;
    return Kotlin.isType(state, CompletedIdempotentResult) ? (tmp$ = state.result) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE() : (tmp$_0 = state) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return this.nameString() + '(' + toDebugString(this.delegate) + '){' + toString(this.state_8be2vx$) + '}@' + get_hexAddress(this);
  };
  CancellableContinuationImpl.prototype.nameString = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'CancellableContinuationImpl', interfaces: [CoroutineStackFrame, CancellableContinuation, DispatchedTask]};
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'NotCompleted', interfaces: []};
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Active', interfaces: [NotCompleted]};
  var Active_instance = null;
  function Active_getInstance() {
    if (Active_instance === null) {
      new Active();
    }
    return Active_instance;
  }
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = {kind: Kind_CLASS, simpleName: 'CancelHandler', interfaces: [NotCompleted, CancelHandlerBase]};
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this.handler_0 = handler;
  }
  InvokeOnCancel.prototype.invoke = function (cause) {
    this.handler_0(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return 'InvokeOnCancel[' + get_classSimpleName(this.handler_0) + '@' + get_hexAddress(this) + ']';
  };
  InvokeOnCancel.$metadata$ = {kind: Kind_CLASS, simpleName: 'InvokeOnCancel', interfaces: [CancelHandler]};
  function CompletedIdempotentResult(idempotentResume, result, token) {
    this.idempotentResume = idempotentResume;
    this.result = result;
    this.token = token;
  }
  CompletedIdempotentResult.prototype.toString = function () {
    return 'CompletedIdempotentResult[' + toString(this.result) + ']';
  };
  CompletedIdempotentResult.$metadata$ = {kind: Kind_CLASS, simpleName: 'CompletedIdempotentResult', interfaces: []};
  function CompletableDeferred() {
  }
  CompletableDeferred.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CompletableDeferred', interfaces: [Deferred]};
  function CompletableDeferred_0(parent) {
    if (parent === void 0)
      parent = null;
    return new CompletableDeferredImpl(parent);
  }
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJobInternal_8vd9i7$(parent);
  }
  Object.defineProperty(CompletableDeferredImpl.prototype, 'cancelsParent', {get: function () {
    return true;
  }});
  Object.defineProperty(CompletableDeferredImpl.prototype, 'onCancelComplete', {get: function () {
    return true;
  }});
  CompletableDeferredImpl.prototype.getCompleted = function () {
    var tmp$;
    return (tmp$ = this.getCompletedInternal_8be2vx$()) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  CompletableDeferredImpl.prototype.await = function (continuation_0, suspended) {
    var instance = new Coroutine$await_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$await_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$await_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$await_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await_0.prototype.constructor = Coroutine$await_0;
  Coroutine$await_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.awaitInternal_8be2vx$(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return (tmp$ = this.result_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Object.defineProperty(CompletableDeferredImpl.prototype, 'onAwait', {get: function () {
    return this;
  }});
  CompletableDeferredImpl.prototype.registerSelectClause1_o3xas4$ = function (select, block) {
    this.registerSelectClause1Internal_u6kgbh$(select, block);
  };
  CompletableDeferredImpl.prototype.complete_11rb$ = function (value) {
    return this.makeCompleting_8ea4ql$(value);
  };
  CompletableDeferredImpl.prototype.completeExceptionally_tcv7n7$ = function (exception) {
    return this.makeCompleting_8ea4ql$(new CompletedExceptionally(exception));
  };
  CompletableDeferredImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'CompletableDeferredImpl', interfaces: [SelectClause1, CompletableDeferred, JobSupport]};
  var throwOnFailure = Kotlin.kotlin.throwOnFailure_iacion$;
  function toState($receiver) {
    var tmp$;
    if ($receiver.isSuccess) {
      var tmp$_0;
      throwOnFailure($receiver);
      tmp$ = (tmp$_0 = $receiver.value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    }
     else
      tmp$ = new CompletedExceptionally(ensureNotNull($receiver.exceptionOrNull()));
    return tmp$;
  }
  function CompletedExceptionally(cause) {
    this.cause = cause;
  }
  CompletedExceptionally.prototype.toString = function () {
    return get_classSimpleName(this) + '[' + this.cause + ']';
  };
  CompletedExceptionally.$metadata$ = {kind: Kind_CLASS, simpleName: 'CompletedExceptionally', interfaces: []};
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause != null ? cause : new CancellationException('Continuation ' + continuation + ' was cancelled normally'));
    this.resumed_0 = false;
    this.handled_0 = handled;
  }
  CancelledContinuation.prototype.makeResumed = function () {
    return function (scope) {
      return scope.resumed_0 === false ? function () {
        scope.resumed_0 = true;
        return true;
      }() : false;
    }(this);
  };
  CancelledContinuation.prototype.makeHandled = function () {
    return function (scope) {
      return scope.handled_0 === false ? function () {
        scope.handled_0 = true;
        return true;
      }() : false;
    }(this);
  };
  CancelledContinuation.$metadata$ = {kind: Kind_CLASS, simpleName: 'CancelledContinuation', interfaces: [CompletedExceptionally]};
  function CoroutineDispatcher() {
    AbstractCoroutineContextElement.call(this, ContinuationInterceptor.Key);
  }
  CoroutineDispatcher.prototype.isDispatchNeeded_1fupul$ = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.dispatchYield_5bn72i$ = function (context, block) {
    this.dispatch_5bn72i$(context, block);
  };
  CoroutineDispatcher.prototype.interceptContinuation_wj8d80$ = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.plus_9wrrq5$ = function (other) {
    return other;
  };
  CoroutineDispatcher.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  CoroutineDispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'CoroutineDispatcher', interfaces: [ContinuationInterceptor, AbstractCoroutineContextElement]};
  function handleCoroutineException(context, exception, caller) {
    if (caller === void 0)
      caller = null;
    if (Kotlin.isType(exception, CancellationException))
      return;
    var job = context.get_j3r2sn$(Job$Key_getInstance());
    if (job !== null && job !== caller && job.cancel_dbl4no$(exception))
      return;
    handleExceptionViaHandler(context, exception);
  }
  function handleExceptionViaHandler(context, exception) {
    var tmp$;
    try {
      if ((tmp$ = context.get_j3r2sn$(CoroutineExceptionHandler$Key_getInstance())) != null) {
        tmp$.handleException_1ur55u$(context, exception);
        return;
      }
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        handleCoroutineExceptionImpl(context, handlerException(exception, t));
        return;
      }
       else
        throw t;
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    return new RuntimeException('Exception while trying to handle coroutine exception', thrownException);
  }
  function CoroutineExceptionHandler_0() {
    CoroutineExceptionHandler$Key_getInstance();
  }
  function CoroutineExceptionHandler$Key() {
    CoroutineExceptionHandler$Key_instance = this;
  }
  CoroutineExceptionHandler$Key.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Key', interfaces: [CoroutineContext$Key]};
  var CoroutineExceptionHandler$Key_instance = null;
  function CoroutineExceptionHandler$Key_getInstance() {
    if (CoroutineExceptionHandler$Key_instance === null) {
      new CoroutineExceptionHandler$Key();
    }
    return CoroutineExceptionHandler$Key_instance;
  }
  var CoroutineName$Key_instance = null;
  function CoroutineScope() {
  }
  CoroutineScope.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CoroutineScope', interfaces: []};
  function GlobalScope() {
    GlobalScope_instance = this;
  }
  Object.defineProperty(GlobalScope.prototype, 'coroutineContext', {get: function () {
    return coroutines.EmptyCoroutineContext;
  }});
  GlobalScope.$metadata$ = {kind: Kind_OBJECT, simpleName: 'GlobalScope', interfaces: [CoroutineScope]};
  var GlobalScope_instance = null;
  function GlobalScope_getInstance() {
    if (GlobalScope_instance === null) {
      new GlobalScope();
    }
    return GlobalScope_instance;
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CoroutineStart_initFields() {
    CoroutineStart_initFields = function () {
    };
    CoroutineStart$DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart$LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart$ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart$UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  var CoroutineStart$DEFAULT_instance;
  function CoroutineStart$DEFAULT_getInstance() {
    CoroutineStart_initFields();
    return CoroutineStart$DEFAULT_instance;
  }
  var CoroutineStart$LAZY_instance;
  function CoroutineStart$LAZY_getInstance() {
    CoroutineStart_initFields();
    return CoroutineStart$LAZY_instance;
  }
  var CoroutineStart$ATOMIC_instance;
  function CoroutineStart$ATOMIC_getInstance() {
    CoroutineStart_initFields();
    return CoroutineStart$ATOMIC_instance;
  }
  var CoroutineStart$UNDISPATCHED_instance;
  function CoroutineStart$UNDISPATCHED_getInstance() {
    CoroutineStart_initFields();
    return CoroutineStart$UNDISPATCHED_instance;
  }
  CoroutineStart.prototype.invoke_810yno$ = function (block, completion) {
    switch (this.name) {
      case 'DEFAULT':
        startCoroutineCancellable(block, completion);
        break;
      case 'ATOMIC':
        startCoroutine(block, completion);
        break;
      case 'UNDISPATCHED':
        startCoroutineUndispatched(block, completion);
        break;
      case 'LAZY':
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  CoroutineStart.prototype.invoke_3o0yor$ = function (block, receiver, completion) {
    switch (this.name) {
      case 'DEFAULT':
        startCoroutineCancellable_0(block, receiver, completion);
        break;
      case 'ATOMIC':
        startCoroutine_0(block, receiver, completion);
        break;
      case 'UNDISPATCHED':
        startCoroutineUndispatched_0(block, receiver, completion);
        break;
      case 'LAZY':
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  Object.defineProperty(CoroutineStart.prototype, 'isLazy', {get: function () {
    return this === CoroutineStart$LAZY_getInstance();
  }});
  CoroutineStart.$metadata$ = {kind: Kind_CLASS, simpleName: 'CoroutineStart', interfaces: [Enum]};
  function CoroutineStart$values() {
    return [CoroutineStart$DEFAULT_getInstance(), CoroutineStart$LAZY_getInstance(), CoroutineStart$ATOMIC_getInstance(), CoroutineStart$UNDISPATCHED_getInstance()];
  }
  CoroutineStart.values = CoroutineStart$values;
  function CoroutineStart$valueOf(name) {
    switch (name) {
      case 'DEFAULT':
        return CoroutineStart$DEFAULT_getInstance();
      case 'LAZY':
        return CoroutineStart$LAZY_getInstance();
      case 'ATOMIC':
        return CoroutineStart$ATOMIC_getInstance();
      case 'UNDISPATCHED':
        return CoroutineStart$UNDISPATCHED_getInstance();
      default:throwISE('No enum constant kotlinx.coroutines.CoroutineStart.' + name);
    }
  }
  CoroutineStart.valueOf_61zpoe$ = CoroutineStart$valueOf;
  function Deferred() {
  }
  Deferred.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Deferred', interfaces: [Job]};
  function Delay() {
  }
  function Delay$delay$lambda(closure$time, this$Delay) {
    return function (it) {
      this$Delay.scheduleResumeAfterDelay_egqmvs$(closure$time, it);
      return Unit;
    };
  }
  function suspendCancellableCoroutine$lambda_0(closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl(intercepted(uCont), 1);
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  Delay.prototype.delay_s8cxhz$ = function (time, continuation) {
    if (time.toNumber() <= 0)
      return;
    return suspendCancellableCoroutine$lambda_0(Delay$delay$lambda(time, this))(continuation);
  };
  Delay.prototype.invokeOnTimeout_8irseu$ = function (timeMillis, block) {
    return get_DefaultDelay().invokeOnTimeout_8irseu$(timeMillis, block);
  };
  Delay.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Delay', interfaces: []};
  function delay$lambda(closure$timeMillis) {
    return function (cont) {
      get_delay(cont.context).scheduleResumeAfterDelay_egqmvs$(closure$timeMillis, cont);
      return Unit;
    };
  }
  function delay(timeMillis, continuation) {
    if (timeMillis.toNumber() <= 0)
      return;
    return suspendCancellableCoroutine$lambda_0(delay$lambda(timeMillis))(continuation);
  }
  function get_delay($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver.get_j3r2sn$(ContinuationInterceptor.Key), Delay) ? tmp$ : null) != null ? tmp$_0 : get_DefaultDelay();
  }
  var UNDEFINED;
  function resumeUnconfined($receiver) {
    var eventLoop = ThreadLocalEventLoop_getInstance().eventLoop_8be2vx$;
    if (eventLoop.isUnconfinedLoopActive) {
      eventLoop.dispatchUnconfined_4avnfa$($receiver);
    }
     else {
      eventLoop.incrementUseCount_6taknv$(true);
      try {
        resume($receiver, $receiver.delegate, 3);
        while (eventLoop.processUnconfinedEvent()) {
        }
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          throw new DispatchException('Unexpected exception in unconfined event loop', e);
        }
         else
          throw e;
      }
      finally {
        eventLoop.decrementUseCount_6taknv$(true);
      }
    }
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, 0);
    this.dispatcher = dispatcher;
    this.continuation = continuation;
    this._state_8be2vx$ = UNDEFINED;
    var tmp$;
    this.callerFrame_w1cgfa$_0 = Kotlin.isType(tmp$ = this.continuation, CoroutineStackFrame) ? tmp$ : null;
    this.countOrElement_8be2vx$ = threadContextElements(this.context);
  }
  Object.defineProperty(DispatchedContinuation.prototype, 'callerFrame', {get: function () {
    return this.callerFrame_w1cgfa$_0;
  }});
  DispatchedContinuation.prototype.getStackTraceElement = function () {
    return null;
  };
  DispatchedContinuation.prototype.takeState = function () {
    var state = this._state_8be2vx$;
    if (!(state !== UNDEFINED)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    this._state_8be2vx$ = UNDEFINED;
    return state;
  };
  Object.defineProperty(DispatchedContinuation.prototype, 'delegate', {get: function () {
    return this;
  }});
  DispatchedContinuation.prototype.resumeWith_tl1gpc$ = function (result) {
    var context = this.continuation.context;
    var state = toState(result);
    if (this.dispatcher.isDispatchNeeded_1fupul$(context)) {
      this._state_8be2vx$ = state;
      this.resumeMode = 0;
      this.dispatcher.dispatch_5bn72i$(context, this);
    }
     else {
      executeUnconfined$break: do {
        var eventLoop = ThreadLocalEventLoop_getInstance().eventLoop_8be2vx$;
        if (false && eventLoop.isUnconfinedQueueEmpty) {
          false;
          break executeUnconfined$break;
        }
        if (eventLoop.isUnconfinedLoopActive) {
          this._state_8be2vx$ = state;
          this.resumeMode = 0;
          eventLoop.dispatchUnconfined_4avnfa$(this);
        }
         else {
          eventLoop.incrementUseCount_6taknv$(true);
          try {
            this.context;
            this.continuation.resumeWith_tl1gpc$(result);
            while (eventLoop.processUnconfinedEvent()) {
            }
          }
           catch (e) {
            if (Kotlin.isType(e, Throwable)) {
              throw new DispatchException('Unexpected exception in unconfined event loop', e);
            }
             else
              throw e;
          }
          finally {
            eventLoop.decrementUseCount_6taknv$(true);
          }
        }
      }
       while (false);
    }
  };
  DispatchedContinuation.prototype.resumeCancellable_11rb$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.DispatchedContinuation.resumeCancellable_11rb$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var DispatchedContinuation$resumeCancellable$lambda = wrapFunction(function () {
      var Job = _.kotlinx.coroutines.Job;
      var Result = Kotlin.kotlin.Result;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var Unit_0 = Kotlin.kotlin.Unit;
      var wrapFunction = Kotlin.wrapFunction;
      var DispatchedContinuation$resumeUndispatched$lambda = wrapFunction(function () {
        var Result = Kotlin.kotlin.Result;
        return function (this$DispatchedContinuation, closure$value) {
          return function () {
            var $receiver = this$DispatchedContinuation.continuation;
            var value = closure$value;
            $receiver.resumeWith_tl1gpc$(new Result(value));
            return Unit_0;
          };
        };
      });
      return function (this$DispatchedContinuation, closure$value) {
        return function () {
          var $this = this$DispatchedContinuation;
          var resumeCancelled$result;
          resumeCancelled$break: do {
            var job = $this.context.get_j3r2sn$(Job.Key);
            if (job != null && !job.isActive) {
              var exception = job.getCancellationException();
              $this.resumeWith_tl1gpc$(new Result(createFailure(exception)));
              resumeCancelled$result = true;
              break resumeCancelled$break;
            }
            resumeCancelled$result = false;
          }
           while (false);
          if (!resumeCancelled$result) {
            var $this_0 = this$DispatchedContinuation;
            var value = closure$value;
            $this_0.context;
            $this_0.continuation.resumeWith_tl1gpc$(new Result(value));
          }
          return Unit;
        };
      };
    });
    var Job = _.kotlinx.coroutines.Job;
    var Result = Kotlin.kotlin.Result;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var DispatchedContinuation$resumeUndispatched$lambda = wrapFunction(function () {
      var Result = Kotlin.kotlin.Result;
      return function (this$DispatchedContinuation, closure$value) {
        return function () {
          var $receiver = this$DispatchedContinuation.continuation;
          var value = closure$value;
          $receiver.resumeWith_tl1gpc$(new Result(value));
          return Unit;
        };
      };
    });
    return function (value) {
      if (this.dispatcher.isDispatchNeeded_1fupul$(this.context)) {
        this._state_8be2vx$ = value;
        this.resumeMode = 1;
        this.dispatcher.dispatch_5bn72i$(this.context, this);
      }
       else {
        executeUnconfined$break: do {
          var eventLoop = ThreadLocalEventLoop_getInstance().eventLoop_8be2vx$;
          if (false && eventLoop.isUnconfinedQueueEmpty) {
            false;
            break executeUnconfined$break;
          }
          if (eventLoop.isUnconfinedLoopActive) {
            this._state_8be2vx$ = value;
            this.resumeMode = 1;
            eventLoop.dispatchUnconfined_4avnfa$(this);
          }
           else {
            eventLoop.incrementUseCount_6taknv$(true);
            try {
              var resumeCancelled$result;
              resumeCancelled$break: do {
                var job = this.context.get_j3r2sn$(Job.Key);
                if (job != null && !job.isActive) {
                  var exception = job.getCancellationException();
                  this.resumeWith_tl1gpc$(new Result(createFailure(exception)));
                  resumeCancelled$result = true;
                  break resumeCancelled$break;
                }
                resumeCancelled$result = false;
              }
               while (false);
              if (!resumeCancelled$result) {
                this.context;
                this.continuation.resumeWith_tl1gpc$(new Result(value));
              }
              while (eventLoop.processUnconfinedEvent()) {
              }
            }
             catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                throw new DispatchException('Unexpected exception in unconfined event loop', e);
              }
               else
                throw e;
            }
            finally {
              eventLoop.decrementUseCount_6taknv$(true);
            }
          }
        }
         while (false);
      }
    };
  }));
  DispatchedContinuation.prototype.resumeCancellableWithException_tcv7n7$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.DispatchedContinuation.resumeCancellableWithException_tcv7n7$', wrapFunction(function () {
    var CompletedExceptionally_init = _.kotlinx.coroutines.CompletedExceptionally;
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var DispatchedContinuation$resumeCancellableWithException$lambda = wrapFunction(function () {
      var Job = _.kotlinx.coroutines.Job;
      var Result = Kotlin.kotlin.Result;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      var Unit_0 = Kotlin.kotlin.Unit;
      var wrapFunction = Kotlin.wrapFunction;
      var DispatchedContinuation$resumeUndispatchedWithException$lambda = wrapFunction(function () {
        var Result = Kotlin.kotlin.Result;
        var recoverStackTrace = _.kotlinx.coroutines.internal.recoverStackTrace_ak2v6d$;
        var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
        return function (this$DispatchedContinuation, closure$exception) {
          return function () {
            var $receiver = this$DispatchedContinuation.continuation;
            $receiver.resumeWith_tl1gpc$(new Result(createFailure(recoverStackTrace(closure$exception, $receiver))));
            return Unit_0;
          };
        };
      });
      var recoverStackTrace = _.kotlinx.coroutines.internal.recoverStackTrace_ak2v6d$;
      return function (this$DispatchedContinuation, closure$exception) {
        return function () {
          var $this = this$DispatchedContinuation;
          var resumeCancelled$result;
          resumeCancelled$break: do {
            var job = $this.context.get_j3r2sn$(Job.Key);
            if (job != null && !job.isActive) {
              var exception = job.getCancellationException();
              $this.resumeWith_tl1gpc$(new Result(createFailure(exception)));
              resumeCancelled$result = true;
              break resumeCancelled$break;
            }
            resumeCancelled$result = false;
          }
           while (false);
          if (!resumeCancelled$result) {
            var $this_0 = this$DispatchedContinuation;
            var exception_0 = closure$exception;
            $this_0.context;
            var $receiver = $this_0.continuation;
            $receiver.resumeWith_tl1gpc$(new Result(createFailure(recoverStackTrace(exception_0, $receiver))));
          }
          return Unit;
        };
      };
    });
    var Job = _.kotlinx.coroutines.Job;
    var Result = Kotlin.kotlin.Result;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    var DispatchedContinuation$resumeUndispatchedWithException$lambda = wrapFunction(function () {
      var Result = Kotlin.kotlin.Result;
      var recoverStackTrace = _.kotlinx.coroutines.internal.recoverStackTrace_ak2v6d$;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      return function (this$DispatchedContinuation, closure$exception) {
        return function () {
          var $receiver = this$DispatchedContinuation.continuation;
          $receiver.resumeWith_tl1gpc$(new Result(createFailure(recoverStackTrace(closure$exception, $receiver))));
          return Unit;
        };
      };
    });
    var recoverStackTrace = _.kotlinx.coroutines.internal.recoverStackTrace_ak2v6d$;
    return function (exception) {
      var context = this.continuation.context;
      var state = new CompletedExceptionally_init(exception);
      if (this.dispatcher.isDispatchNeeded_1fupul$(context)) {
        this._state_8be2vx$ = new CompletedExceptionally_init(exception);
        this.resumeMode = 1;
        this.dispatcher.dispatch_5bn72i$(context, this);
      }
       else {
        executeUnconfined$break: do {
          var eventLoop = ThreadLocalEventLoop_getInstance().eventLoop_8be2vx$;
          if (false && eventLoop.isUnconfinedQueueEmpty) {
            false;
            break executeUnconfined$break;
          }
          if (eventLoop.isUnconfinedLoopActive) {
            this._state_8be2vx$ = state;
            this.resumeMode = 1;
            eventLoop.dispatchUnconfined_4avnfa$(this);
          }
           else {
            eventLoop.incrementUseCount_6taknv$(true);
            try {
              var resumeCancelled$result;
              resumeCancelled$break: do {
                var job = this.context.get_j3r2sn$(Job.Key);
                if (job != null && !job.isActive) {
                  var exception_0 = job.getCancellationException();
                  this.resumeWith_tl1gpc$(new Result(createFailure(exception_0)));
                  resumeCancelled$result = true;
                  break resumeCancelled$break;
                }
                resumeCancelled$result = false;
              }
               while (false);
              if (!resumeCancelled$result) {
                this.context;
                var $receiver = this.continuation;
                $receiver.resumeWith_tl1gpc$(new Result(createFailure(recoverStackTrace(exception, $receiver))));
              }
              while (eventLoop.processUnconfinedEvent()) {
              }
            }
             catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                throw new DispatchException('Unexpected exception in unconfined event loop', e);
              }
               else
                throw e;
            }
            finally {
              eventLoop.decrementUseCount_6taknv$(true);
            }
          }
        }
         while (false);
      }
    };
  }));
  DispatchedContinuation.prototype.resumeCancelled = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.DispatchedContinuation.resumeCancelled', wrapFunction(function () {
    var Job = _.kotlinx.coroutines.Job;
    var Result = Kotlin.kotlin.Result;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    return function () {
      var job = this.context.get_j3r2sn$(Job.Key);
      if (job != null && !job.isActive) {
        var exception = job.getCancellationException();
        this.resumeWith_tl1gpc$(new Result(createFailure(exception)));
        return true;
      }
      return false;
    };
  }));
  DispatchedContinuation.prototype.resumeUndispatched_11rb$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.DispatchedContinuation.resumeUndispatched_11rb$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var DispatchedContinuation$resumeUndispatched$lambda = wrapFunction(function () {
      var Result = Kotlin.kotlin.Result;
      return function (this$DispatchedContinuation, closure$value) {
        return function () {
          var $receiver = this$DispatchedContinuation.continuation;
          var value = closure$value;
          $receiver.resumeWith_tl1gpc$(new Result(value));
          return Unit;
        };
      };
    });
    var Result = Kotlin.kotlin.Result;
    return function (value) {
      this.context;
      this.continuation.resumeWith_tl1gpc$(new Result(value));
    };
  }));
  DispatchedContinuation.prototype.resumeUndispatchedWithException_tcv7n7$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.DispatchedContinuation.resumeUndispatchedWithException_tcv7n7$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var wrapFunction = Kotlin.wrapFunction;
    var DispatchedContinuation$resumeUndispatchedWithException$lambda = wrapFunction(function () {
      var Result = Kotlin.kotlin.Result;
      var recoverStackTrace = _.kotlinx.coroutines.internal.recoverStackTrace_ak2v6d$;
      var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
      return function (this$DispatchedContinuation, closure$exception) {
        return function () {
          var $receiver = this$DispatchedContinuation.continuation;
          $receiver.resumeWith_tl1gpc$(new Result(createFailure(recoverStackTrace(closure$exception, $receiver))));
          return Unit;
        };
      };
    });
    var Result = Kotlin.kotlin.Result;
    var recoverStackTrace = _.kotlinx.coroutines.internal.recoverStackTrace_ak2v6d$;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    return function (exception) {
      this.context;
      var $receiver = this.continuation;
      $receiver.resumeWith_tl1gpc$(new Result(createFailure(recoverStackTrace(exception, $receiver))));
    };
  }));
  DispatchedContinuation.prototype.dispatchYield_1c3m6u$ = function (value) {
    var context = this.continuation.context;
    this._state_8be2vx$ = value;
    this.resumeMode = 1;
    this.dispatcher.dispatchYield_5bn72i$(context, this);
  };
  DispatchedContinuation.prototype.toString = function () {
    return 'DispatchedContinuation[' + this.dispatcher + ', ' + toDebugString(this.continuation) + ']';
  };
  Object.defineProperty(DispatchedContinuation.prototype, 'context', {get: function () {
    return this.continuation.context;
  }});
  DispatchedContinuation.$metadata$ = {kind: Kind_CLASS, simpleName: 'DispatchedContinuation', interfaces: [Continuation, CoroutineStackFrame, DispatchedTask]};
  var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
  function resumeCancellable($receiver, value) {
    if (Kotlin.isType($receiver, DispatchedContinuation)) {
      if ($receiver.dispatcher.isDispatchNeeded_1fupul$($receiver.context)) {
        $receiver._state_8be2vx$ = value;
        $receiver.resumeMode = 1;
        $receiver.dispatcher.dispatch_5bn72i$($receiver.context, $receiver);
      }
       else {
        executeUnconfined$break: do {
          var eventLoop = ThreadLocalEventLoop_getInstance().eventLoop_8be2vx$;
          if (false && eventLoop.isUnconfinedQueueEmpty) {
            false;
            break executeUnconfined$break;
          }
          if (eventLoop.isUnconfinedLoopActive) {
            $receiver._state_8be2vx$ = value;
            $receiver.resumeMode = 1;
            eventLoop.dispatchUnconfined_4avnfa$($receiver);
          }
           else {
            eventLoop.incrementUseCount_6taknv$(true);
            try {
              var resumeCancelled$result;
              resumeCancelled$break: do {
                var job = $receiver.context.get_j3r2sn$(Job.Key);
                if (job != null && !job.isActive) {
                  var exception = job.getCancellationException();
                  $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
                  resumeCancelled$result = true;
                  break resumeCancelled$break;
                }
                resumeCancelled$result = false;
              }
               while (false);
              if (!resumeCancelled$result) {
                $receiver.context;
                $receiver.continuation.resumeWith_tl1gpc$(new Result(value));
              }
              while (eventLoop.processUnconfinedEvent()) {
              }
            }
             catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                throw new DispatchException('Unexpected exception in unconfined event loop', e);
              }
               else
                throw e;
            }
            finally {
              eventLoop.decrementUseCount_6taknv$(true);
            }
          }
        }
         while (false);
      }
    }
     else {
      $receiver.resumeWith_tl1gpc$(new Result(value));
    }
  }
  function resumeCancellableWithException($receiver, exception) {
    if (Kotlin.isType($receiver, DispatchedContinuation)) {
      var context = $receiver.continuation.context;
      var state = new CompletedExceptionally(exception);
      if ($receiver.dispatcher.isDispatchNeeded_1fupul$(context)) {
        $receiver._state_8be2vx$ = new CompletedExceptionally(exception);
        $receiver.resumeMode = 1;
        $receiver.dispatcher.dispatch_5bn72i$(context, $receiver);
      }
       else {
        executeUnconfined$break: do {
          var eventLoop = ThreadLocalEventLoop_getInstance().eventLoop_8be2vx$;
          if (false && eventLoop.isUnconfinedQueueEmpty) {
            false;
            break executeUnconfined$break;
          }
          if (eventLoop.isUnconfinedLoopActive) {
            $receiver._state_8be2vx$ = state;
            $receiver.resumeMode = 1;
            eventLoop.dispatchUnconfined_4avnfa$($receiver);
          }
           else {
            eventLoop.incrementUseCount_6taknv$(true);
            try {
              var resumeCancelled$result;
              resumeCancelled$break: do {
                var job = $receiver.context.get_j3r2sn$(Job.Key);
                if (job != null && !job.isActive) {
                  var exception_0 = job.getCancellationException();
                  $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception_0)));
                  resumeCancelled$result = true;
                  break resumeCancelled$break;
                }
                resumeCancelled$result = false;
              }
               while (false);
              if (!resumeCancelled$result) {
                $receiver.context;
                var $receiver_0 = $receiver.continuation;
                $receiver_0.resumeWith_tl1gpc$(new Result(createFailure(recoverStackTrace(exception, $receiver_0))));
              }
              while (eventLoop.processUnconfinedEvent()) {
              }
            }
             catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                throw new DispatchException('Unexpected exception in unconfined event loop', e);
              }
               else
                throw e;
            }
            finally {
              eventLoop.decrementUseCount_6taknv$(true);
            }
          }
        }
         while (false);
      }
    }
     else {
      $receiver.resumeWith_tl1gpc$(new Result(createFailure(recoverStackTrace(exception, $receiver))));
    }
  }
  function resumeDirect($receiver, value) {
    if (Kotlin.isType($receiver, DispatchedContinuation)) {
      $receiver.continuation.resumeWith_tl1gpc$(new Result(value));
    }
     else {
      $receiver.resumeWith_tl1gpc$(new Result(value));
    }
  }
  function resumeDirectWithException($receiver, exception) {
    if (Kotlin.isType($receiver, DispatchedContinuation)) {
      var $receiver_0 = $receiver.continuation;
      $receiver_0.resumeWith_tl1gpc$(new Result(createFailure(recoverStackTrace(exception, $receiver_0))));
    }
     else {
      $receiver.resumeWith_tl1gpc$(new Result(createFailure(recoverStackTrace(exception, $receiver))));
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.resumeMode = resumeMode;
  }
  DispatchedTask.prototype.getSuccessfulResult_tpy1pm$ = function (state) {
    var tmp$;
    return (tmp$ = state) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  DispatchedTask.prototype.getExceptionalResult_s8jyv4$ = function (state) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = state, CompletedExceptionally) ? tmp$ : null) != null ? tmp$_0.cause : null;
  };
  DispatchedTask.prototype.run = function () {
    var tmp$;
    var taskContext = get_taskContext(this);
    try {
      var delegate = Kotlin.isType(tmp$ = this.delegate, DispatchedContinuation) ? tmp$ : throwCCE();
      var continuation = delegate.continuation;
      var context = continuation.context;
      var job = get_isCancellableMode(this.resumeMode) ? context.get_j3r2sn$(Job$Key_getInstance()) : null;
      var state = this.takeState();
      if (job != null && !job.isActive) {
        var exception = job.getCancellationException();
        continuation.resumeWith_tl1gpc$(new Result(createFailure(exception)));
      }
       else {
        var exception_0 = this.getExceptionalResult_s8jyv4$(state);
        if (exception_0 != null) {
          continuation.resumeWith_tl1gpc$(new Result(createFailure(recoverStackTrace(exception_0, continuation))));
        }
         else {
          var value = this.getSuccessfulResult_tpy1pm$(state);
          continuation.resumeWith_tl1gpc$(new Result(value));
        }
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        throw new DispatchException('Unexpected exception running ' + this, e);
      }
       else
        throw e;
    }
    finally {
    }
  };
  DispatchedTask.$metadata$ = {kind: Kind_CLASS, simpleName: 'DispatchedTask', interfaces: [SchedulerTask]};
  function dispatch($receiver, mode) {
    if (mode === void 0)
      mode = 1;
    var delegate = $receiver.delegate;
    if (get_isDispatchedMode(mode) && Kotlin.isType(delegate, DispatchedContinuation) && get_isCancellableMode(mode) === get_isCancellableMode($receiver.resumeMode)) {
      var dispatcher = delegate.dispatcher;
      var context = delegate.context;
      if (dispatcher.isDispatchNeeded_1fupul$(context)) {
        dispatcher.dispatch_5bn72i$(context, $receiver);
      }
       else {
        resumeUnconfined($receiver);
      }
    }
     else {
      resume($receiver, delegate, mode);
    }
  }
  function resume($receiver, delegate, useMode) {
    var state = $receiver.takeState();
    var exception = $receiver.getExceptionalResult_s8jyv4$(state);
    if (exception != null) {
      resumeWithExceptionMode(delegate, exception, useMode);
    }
     else {
      resumeMode(delegate, $receiver.getSuccessfulResult_tpy1pm$(state), useMode);
    }
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.useCount_0 = L0;
    this.shared_0 = false;
    this.unconfinedQueue_0 = null;
  }
  EventLoop.prototype.processNextEvent = function () {
    if (!this.processUnconfinedEvent())
      return Long$Companion$MAX_VALUE;
    return this.nextTime;
  };
  Object.defineProperty(EventLoop.prototype, 'isEmpty', {get: function () {
    return this.isUnconfinedQueueEmpty;
  }});
  Object.defineProperty(EventLoop.prototype, 'nextTime', {get: function () {
    var tmp$;
    tmp$ = this.unconfinedQueue_0;
    if (tmp$ == null) {
      return Long$Companion$MAX_VALUE;
    }
    var queue = tmp$;
    return queue.isEmpty ? Long$Companion$MAX_VALUE : L0;
  }});
  EventLoop.prototype.processUnconfinedEvent = function () {
    var tmp$, tmp$_0;
    tmp$ = this.unconfinedQueue_0;
    if (tmp$ == null) {
      return false;
    }
    var queue = tmp$;
    tmp$_0 = queue.removeFirstOrNull();
    if (tmp$_0 == null) {
      return false;
    }
    var task = tmp$_0;
    task.run();
    return true;
  };
  EventLoop.prototype.shouldBeProcessedFromContext = function () {
    return false;
  };
  EventLoop.prototype.dispatchUnconfined_4avnfa$ = function (task) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.unconfinedQueue_0) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = new ArrayQueue();
      this.unconfinedQueue_0 = $receiver;
      tmp$_0 = $receiver;
    }
    var queue = tmp$_0;
    queue.addLast_trkh7z$(task);
  };
  Object.defineProperty(EventLoop.prototype, 'isActive', {get: function () {
    return this.useCount_0.toNumber() > 0;
  }});
  Object.defineProperty(EventLoop.prototype, 'isUnconfinedLoopActive', {get: function () {
    return this.useCount_0.compareTo_11rb$(this.delta_0(true)) >= 0;
  }});
  Object.defineProperty(EventLoop.prototype, 'isUnconfinedQueueEmpty', {get: function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.unconfinedQueue_0) != null ? tmp$.isEmpty : null) != null ? tmp$_0 : true;
  }});
  EventLoop.prototype.delta_0 = function (unconfined) {
    return unconfined ? L4294967296 : L1;
  };
  EventLoop.prototype.incrementUseCount_6taknv$ = function (unconfined) {
    if (unconfined === void 0)
      unconfined = false;
    this.useCount_0 = this.useCount_0.add(this.delta_0(unconfined));
    if (!unconfined)
      this.shared_0 = true;
  };
  EventLoop.prototype.decrementUseCount_6taknv$ = function (unconfined) {
    if (unconfined === void 0)
      unconfined = false;
    this.useCount_0 = this.useCount_0.subtract(this.delta_0(unconfined));
    if (this.useCount_0.toNumber() > 0)
      return;
    if (!equals(this.useCount_0, L0)) {
      var message = 'Extra decrementUseCount';
      throw IllegalStateException_init(message.toString());
    }
    if (this.shared_0) {
      this.shutdown();
    }
  };
  EventLoop.prototype.shutdown = function () {
  };
  EventLoop.$metadata$ = {kind: Kind_CLASS, simpleName: 'EventLoop', interfaces: [CoroutineDispatcher]};
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.ref_0 = new CommonThreadLocal();
  }
  Object.defineProperty(ThreadLocalEventLoop.prototype, 'eventLoop_8be2vx$', {get: function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.ref_0.get()) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver = createEventLoop();
      this.ref_0.set_11rb$($receiver);
      tmp$_0 = $receiver;
    }
    return tmp$_0;
  }});
  ThreadLocalEventLoop.prototype.currentOrNull_8be2vx$ = function () {
    return this.ref_0.get();
  };
  ThreadLocalEventLoop.prototype.resetEventLoop_8be2vx$ = function () {
    this.ref_0.set_11rb$(null);
  };
  ThreadLocalEventLoop.prototype.setEventLoop_13etkv$ = function (eventLoop) {
    this.ref_0.set_11rb$(eventLoop);
  };
  ThreadLocalEventLoop.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ThreadLocalEventLoop', interfaces: []};
  var ThreadLocalEventLoop_instance = null;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance === null) {
      new ThreadLocalEventLoop();
    }
    return ThreadLocalEventLoop_instance;
  }
  function Job() {
    Job$Key_getInstance();
  }
  function Job$Key() {
    Job$Key_instance = this;
    CoroutineExceptionHandler$Key_getInstance();
  }
  Job$Key.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Key', interfaces: [CoroutineContext$Key]};
  var Job$Key_instance = null;
  function Job$Key_getInstance() {
    if (Job$Key_instance === null) {
      new Job$Key();
    }
    return Job$Key_instance;
  }
  Job.prototype.cancel0 = function () {
    return this.cancel_dbl4no$(null);
  };
  Job.prototype.cancel_dbl4no$ = function (cause, callback$default) {
    if (cause === void 0)
      cause = null;
    return callback$default ? callback$default(cause) : this.cancel_dbl4no$$default(cause);
  };
  Job.prototype.invokeOnCompletion_ct2b2z$ = function (onCancelling, invokeImmediately, handler, callback$default) {
    if (onCancelling === void 0)
      onCancelling = false;
    if (invokeImmediately === void 0)
      invokeImmediately = true;
    return callback$default ? callback$default(onCancelling, invokeImmediately, handler) : this.invokeOnCompletion_ct2b2z$$default(onCancelling, invokeImmediately, handler);
  };
  Job.prototype.plus_dqr1mp$ = function (other) {
    return other;
  };
  Job.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Job', interfaces: [CoroutineContext$Element]};
  function Job_0(parent) {
    if (parent === void 0)
      parent = null;
    return new JobImpl(parent);
  }
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'DisposableHandle', interfaces: []};
  function ChildJob() {
  }
  ChildJob.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ChildJob', interfaces: [Job]};
  function ParentJob() {
  }
  ParentJob.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ParentJob', interfaces: [Job]};
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ChildHandle', interfaces: [DisposableHandle]};
  function cancelAndJoin($receiver, continuation) {
    $receiver.cancel();
    return $receiver.join(continuation);
  }
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.dispose = function () {
  };
  NonDisposableHandle.prototype.childCancelled_tcv7n7$ = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = {kind: Kind_OBJECT, simpleName: 'NonDisposableHandle', interfaces: [ChildHandle, DisposableHandle]};
  var NonDisposableHandle_instance = null;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance === null) {
      new NonDisposableHandle();
    }
    return NonDisposableHandle_instance;
  }
  function JobSupport(active) {
    this._state_v70vig$_0 = active ? EMPTY_ACTIVE : EMPTY_NEW;
    this.parentHandle_ahojoo$_0 = null;
  }
  Object.defineProperty(JobSupport.prototype, 'key', {get: function () {
    return Job$Key_getInstance();
  }});
  JobSupport.prototype.initParentJobInternal_8vd9i7$ = function (parent) {
    if (!(this.parentHandle_ahojoo$_0 == null)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    if (parent == null) {
      this.parentHandle_ahojoo$_0 = NonDisposableHandle_getInstance();
      return;
    }
    parent.start();
    var handle = parent.attachChild_kx8v25$(this);
    this.parentHandle_ahojoo$_0 = handle;
    if (this.isCompleted) {
      handle.dispose();
      this.parentHandle_ahojoo$_0 = NonDisposableHandle_getInstance();
    }
  };
  Object.defineProperty(JobSupport.prototype, 'state_8be2vx$', {get: function () {
    var $receiver = this._state_v70vig$_0;
    while (true) {
      var state = this._state_v70vig$_0;
      if (!Kotlin.isType(state, OpDescriptor))
        return state;
      state.perform_s8jyv4$(this);
    }
  }});
  JobSupport.prototype.loopOnState_46ivxf$_0 = function (block) {
    while (true) {
      block(this.state_8be2vx$);
    }
  };
  Object.defineProperty(JobSupport.prototype, 'isActive', {get: function () {
    var state = this.state_8be2vx$;
    return Kotlin.isType(state, Incomplete) && state.isActive;
  }});
  Object.defineProperty(JobSupport.prototype, 'isCompleted', {get: function () {
    return !Kotlin.isType(this.state_8be2vx$, Incomplete);
  }});
  Object.defineProperty(JobSupport.prototype, 'isCancelled', {get: function () {
    var state = this.state_8be2vx$;
    return Kotlin.isType(state, CompletedExceptionally) || (Kotlin.isType(state, JobSupport$Finishing) && state.isCancelling);
  }});
  JobSupport.prototype.tryFinalizeFinishingState_ke4xjq$_0 = function (state, proposedUpdate, mode) {
    var tmp$, tmp$_0, tmp$_1;
    if (!(this.state_8be2vx$ === state)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (!!state.isSealed) {
      var message_0 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_0.toString());
    }
    if (!state.isCompleting) {
      var message_1 = 'Failed requirement.';
      throw IllegalArgumentException_init(message_1.toString());
    }
    var proposedException = (tmp$_0 = Kotlin.isType(tmp$ = proposedUpdate, CompletedExceptionally) ? tmp$ : null) != null ? tmp$_0.cause : null;
    var suppressed = {v: false};
    var exceptions = state.sealLocked_dbl4no$(proposedException);
    var finalCause = this.getFinalRootCause_3zkch4$_0(state, exceptions);
    if (finalCause != null)
      suppressed.v = this.suppressExceptions_kr8qts$_0(finalCause, exceptions) || finalCause !== state.rootCause;
    var finalException = finalCause;
    if (finalException == null)
      tmp$_1 = proposedUpdate;
    else if (finalException === proposedException)
      tmp$_1 = proposedUpdate;
    else
      tmp$_1 = new CompletedExceptionally(finalException);
    var finalState = tmp$_1;
    if (finalException != null && !this.cancelParent_7dutpz$_0(finalException)) {
      this.handleJobException_tcv7n7$(finalException);
    }
    if (!function (scope) {
      return scope._state_v70vig$_0 === state ? function () {
        scope._state_v70vig$_0 = boxIncomplete(finalState);
        return true;
      }() : false;
    }(this)) {
      var message_2 = 'Unexpected state: ' + toString(this._state_v70vig$_0) + ', expected: ' + state + ', update: ' + toString(finalState);
      throw IllegalArgumentException_init(message_2.toString());
    }
    this.completeStateFinalization_nn37gt$_0(state, finalState, mode, suppressed.v);
    return true;
  };
  JobSupport.prototype.getFinalRootCause_3zkch4$_0 = function (state, exceptions) {
    var tmp$;
    if (exceptions.isEmpty()) {
      if (state.isCancelling)
        return this.createJobCancellationException_sy2yj3$_0();
      return null;
    }
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = exceptions.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (!Kotlin.isType(element, CancellationException)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$ = firstOrNull$result) != null ? tmp$ : exceptions.get_za3lpa$(0);
  };
  JobSupport.prototype.suppressExceptions_kr8qts$_0 = function (rootCause, exceptions) {
    var tmp$;
    if (exceptions.size <= 1)
      return false;
    var seenExceptions = identitySet(exceptions.size);
    var suppressed = false;
    tmp$ = exceptions.iterator();
    while (tmp$.hasNext()) {
      var exception = tmp$.next();
      var unwrapped = unwrap(exception);
      if (unwrapped !== rootCause && !Kotlin.isType(unwrapped, CancellationException) && seenExceptions.add_11rb$(unwrapped)) {
        suppressed = true;
      }
    }
    return suppressed;
  };
  JobSupport.prototype.tryFinalizeSimpleState_8el5e4$_0 = function (state, update, mode) {
    if (!(Kotlin.isType(state, Empty) || Kotlin.isType(state, JobNode))) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    if (!!Kotlin.isType(update, CompletedExceptionally)) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }
    if (!function (scope) {
      return scope._state_v70vig$_0 === state ? function () {
        scope._state_v70vig$_0 = boxIncomplete(update);
        return true;
      }() : false;
    }(this))
      return false;
    this.completeStateFinalization_nn37gt$_0(state, update, mode, false);
    return true;
  };
  JobSupport.prototype.completeStateFinalization_nn37gt$_0 = function (state, update, mode, suppressed) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if ((tmp$ = this.parentHandle_ahojoo$_0) != null) {
      tmp$.dispose();
      this.parentHandle_ahojoo$_0 = NonDisposableHandle_getInstance();
    }
    var cause = (tmp$_1 = Kotlin.isType(tmp$_0 = update, CompletedExceptionally) ? tmp$_0 : null) != null ? tmp$_1.cause : null;
    if (!this.get_isCancelling_dpdoz8$_0(state))
      this.onCancellation_dbl4no$(cause);
    if (Kotlin.isType(state, JobNode)) {
      try {
        state.invoke(cause);
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          this.handleOnCompletionException_tcv7n7$(new CompletionHandlerException('Exception in completion handler ' + state + ' for ' + this, ex));
        }
         else
          throw ex;
      }
    }
     else {
      (tmp$_2 = state.list) != null ? (this.notifyCompletion_mgxta4$_0(tmp$_2, cause), Unit) : null;
    }
    this.onCompletionInternal_5apgvt$(update, mode, suppressed);
  };
  JobSupport.prototype.notifyCancelling_xkpzb8$_0 = function (list, cause) {
    this.onCancellation_dbl4no$(cause);
    var tmp$;
    var exception = {v: null};
    var cur = list._next;
    while (!equals(cur, list)) {
      if (Kotlin.isType(cur, JobCancellingNode)) {
        var node = cur;
        var tmp$_0;
        try {
          node.invoke(cause);
        }
         catch (ex) {
          if (Kotlin.isType(ex, Throwable)) {
            if (((tmp$_0 = exception.v) != null ? tmp$_0 : null) == null) {
              exception.v = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + this, ex);
            }
          }
           else
            throw ex;
        }
      }
      cur = cur._next;
    }
    if ((tmp$ = exception.v) != null) {
      this.handleOnCompletionException_tcv7n7$(tmp$);
    }
    this.cancelParent_7dutpz$_0(cause);
  };
  JobSupport.prototype.notifyCompletion_mgxta4$_0 = function ($receiver, cause) {
    var tmp$;
    var exception = {v: null};
    var cur = $receiver._next;
    while (!equals(cur, $receiver)) {
      if (Kotlin.isType(cur, JobNode)) {
        var node = cur;
        var tmp$_0;
        try {
          node.invoke(cause);
        }
         catch (ex) {
          if (Kotlin.isType(ex, Throwable)) {
            if (((tmp$_0 = exception.v) != null ? tmp$_0 : null) == null) {
              exception.v = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + this, ex);
            }
          }
           else
            throw ex;
        }
      }
      cur = cur._next;
    }
    if ((tmp$ = exception.v) != null) {
      this.handleOnCompletionException_tcv7n7$(tmp$);
    }
  };
  JobSupport.prototype.notifyHandlers_alhslr$_0 = wrapFunction(function () {
    var equals = Kotlin.equals;
    return function (T_0, isT, list, cause) {
      var tmp$;
      var exception = {v: null};
      var cur = list._next;
      while (!equals(cur, list)) {
        if (isT(cur)) {
          var node = cur;
          var tmp$_0;
          try {
            node.invoke(cause);
          }
           catch (ex) {
            if (Kotlin.isType(ex, Throwable)) {
              if (((tmp$_0 = exception.v) != null ? tmp$_0 : null) == null) {
                exception.v = new CompletionHandlerException('Exception in completion handler ' + node + ' for ' + this, ex);
              }
            }
             else
              throw ex;
          }
        }
        cur = cur._next;
      }
      if ((tmp$ = exception.v) != null) {
        this.handleOnCompletionException_tcv7n7$(tmp$);
      }
    };
  });
  JobSupport.prototype.start = function () {
    while (true) {
      switch (this.startInternal_tp1bqd$_0(this.state_8be2vx$)) {
        case 0:
          return false;
        case 1:
          return true;
      }
    }
  };
  JobSupport.prototype.startInternal_tp1bqd$_0 = function (state) {
    if (Kotlin.isType(state, Empty)) {
      if (state.isActive)
        return 0;
      if (!function (scope) {
        return scope._state_v70vig$_0 === state ? function () {
          scope._state_v70vig$_0 = EMPTY_ACTIVE;
          return true;
        }() : false;
      }(this))
        return -1;
      this.onStartInternal();
      return 1;
    }
     else if (Kotlin.isType(state, InactiveNodeList)) {
      if (!function (scope) {
        return scope._state_v70vig$_0 === state ? function () {
          scope._state_v70vig$_0 = state.list;
          return true;
        }() : false;
      }(this))
        return -1;
      this.onStartInternal();
      return 1;
    }
     else
      return 0;
  };
  JobSupport.prototype.onStartInternal = function () {
  };
  JobSupport.prototype.getCancellationException = function () {
    var tmp$, tmp$_0, tmp$_1;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, JobSupport$Finishing)) {
      var tmp$_2;
      if ((tmp$_0 = (tmp$ = state.rootCause) != null ? this.toCancellationException_rwe8xh$_0(tmp$, 'Job is cancelling') : null) != null)
        tmp$_2 = tmp$_0;
      else {
        throw IllegalStateException_init(('Job is still new or active: ' + this).toString());
      }
      tmp$_1 = tmp$_2;
    }
     else if (Kotlin.isType(state, Incomplete)) {
      throw IllegalStateException_init(('Job is still new or active: ' + this).toString());
    }
     else if (Kotlin.isType(state, CompletedExceptionally))
      tmp$_1 = this.toCancellationException_rwe8xh$_0(state.cause, 'Job was cancelled');
    else
      tmp$_1 = new JobCancellationException('Job has completed normally', null, this);
    return tmp$_1;
  };
  JobSupport.prototype.toCancellationException_rwe8xh$_0 = function ($receiver, message) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, CancellationException) ? tmp$ : null) != null ? tmp$_0 : new JobCancellationException(message, $receiver, this);
  };
  JobSupport.prototype.getCompletionCause = function () {
    while (true) {
      var state = this.state_8be2vx$;
      var tmp$, tmp$_0;
      if (Kotlin.isType(state, JobSupport$Finishing)) {
        var tmp$_1;
        if ((tmp$ = state.rootCause) != null)
          tmp$_1 = tmp$;
        else {
          throw IllegalStateException_init(('Job is still new or active: ' + this).toString());
        }
        tmp$_0 = tmp$_1;
      }
       else if (Kotlin.isType(state, Incomplete)) {
        throw IllegalStateException_init(('Job is still new or active: ' + this).toString());
      }
       else if (Kotlin.isType(state, CompletedExceptionally))
        tmp$_0 = state.cause;
      else
        tmp$_0 = null;
      return tmp$_0;
    }
  };
  JobSupport.prototype.invokeOnCompletion_f05bi3$ = function (handler) {
    return this.invokeOnCompletion_ct2b2z$(false, true, handler);
  };
  JobSupport.prototype.invokeOnCompletion_ct2b2z$$default = function (onCancelling, invokeImmediately, handler) {
    var nodeCache = {v: null};
    loop_label: while (true) {
      var state = this.state_8be2vx$;
      block$break: do {
        var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
        if (Kotlin.isType(state, Empty))
          if (state.isActive) {
            var tmp$_4;
            if ((tmp$ = nodeCache.v) != null)
              tmp$_4 = tmp$;
            else {
              var $receiver = this.makeNode_9qhc1i$_0(handler, onCancelling);
              nodeCache.v = $receiver;
              tmp$_4 = $receiver;
            }
            var node = tmp$_4;
            if (function (scope) {
              return scope._state_v70vig$_0 === state ? function () {
                scope._state_v70vig$_0 = node;
                return true;
              }() : false;
            }(this))
              return node;
          }
           else
            this.promoteEmptyToNodeList_lchanx$_0(state);
        else if (Kotlin.isType(state, Incomplete)) {
          var list = state.list;
          if (list == null) {
            this.promoteSingleToNodeList_ft43ca$_0(Kotlin.isType(tmp$_0 = state, JobNode) ? tmp$_0 : throwCCE());
          }
           else {
            var rootCause = {v: null};
            var handle = {v: NonDisposableHandle_getInstance()};
            if (onCancelling && Kotlin.isType(state, JobSupport$Finishing)) {
              var tmp$_5;
              rootCause.v = state.rootCause;
              var tmp$_6 = rootCause.v == null;
              if (!tmp$_6) {
                tmp$_6 = (Kotlin.isType(handler, ChildHandleNode) && !state.isCompleting);
              }
              if (tmp$_6) {
                var tmp$_7;
                if ((tmp$_5 = nodeCache.v) != null)
                  tmp$_7 = tmp$_5;
                else {
                  var $receiver_0 = this.makeNode_9qhc1i$_0(handler, onCancelling);
                  nodeCache.v = $receiver_0;
                  tmp$_7 = $receiver_0;
                }
                var node_0 = tmp$_7;
                if (!this.addLastAtomic_qayz7c$_0(state, list, node_0))
                  break block$break;
                if (rootCause.v == null)
                  return node_0;
                handle.v = node_0;
              }
            }
            if (rootCause.v != null) {
              if (invokeImmediately)
                invokeIt(handler, rootCause.v);
              return handle.v;
            }
             else {
              var tmp$_8;
              if ((tmp$_1 = nodeCache.v) != null)
                tmp$_8 = tmp$_1;
              else {
                var $receiver_1 = this.makeNode_9qhc1i$_0(handler, onCancelling);
                nodeCache.v = $receiver_1;
                tmp$_8 = $receiver_1;
              }
              var node_1 = tmp$_8;
              if (this.addLastAtomic_qayz7c$_0(state, list, node_1))
                return node_1;
            }
          }
        }
         else {
          if (invokeImmediately) {
            invokeIt(handler, (tmp$_3 = Kotlin.isType(tmp$_2 = state, CompletedExceptionally) ? tmp$_2 : null) != null ? tmp$_3.cause : null);
          }
          return NonDisposableHandle_getInstance();
        }
      }
       while (false);
    }
  };
  JobSupport.prototype.makeNode_9qhc1i$_0 = function (handler, onCancelling) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var tmp$_5;
    if (onCancelling) {
      var tmp$_6;
      if ((tmp$_0 = Kotlin.isType(tmp$ = handler, JobCancellingNode) ? tmp$ : null) != null) {
        if (!(tmp$_0.job === this)) {
          var message = 'Failed requirement.';
          throw IllegalArgumentException_init(message.toString());
        }
        tmp$_6 = tmp$_0;
      }
       else
        tmp$_6 = null;
      tmp$_5 = (tmp$_1 = tmp$_6) != null ? tmp$_1 : new InvokeOnCancelling(this, handler);
    }
     else {
      var tmp$_7;
      if ((tmp$_3 = Kotlin.isType(tmp$_2 = handler, JobNode) ? tmp$_2 : null) != null) {
        if (!(tmp$_3.job === this && !Kotlin.isType(tmp$_3, JobCancellingNode))) {
          var message_0 = 'Failed requirement.';
          throw IllegalArgumentException_init(message_0.toString());
        }
        tmp$_7 = tmp$_3;
      }
       else
        tmp$_7 = null;
      tmp$_5 = (tmp$_4 = tmp$_7) != null ? tmp$_4 : new InvokeOnCompletion(this, handler);
    }
    return tmp$_5;
  };
  function JobSupport$addLastAtomic$lambda(this$JobSupport, closure$expect) {
    return function () {
      return this$JobSupport.state_8be2vx$ === closure$expect;
    };
  }
  JobSupport.prototype.addLastAtomic_qayz7c$_0 = function (expect, list, node) {
    var addLastIf_w327v9$result;
    addLastIf_w327v9$break: do {
      if (!JobSupport$addLastAtomic$lambda(this, expect)()) {
        addLastIf_w327v9$result = false;
        break addLastIf_w327v9$break;
      }
      list.addLast_l2j9rm$(node);
      addLastIf_w327v9$result = true;
    }
     while (false);
    return addLastIf_w327v9$result;
  };
  JobSupport.prototype.promoteEmptyToNodeList_lchanx$_0 = function (state) {
    var list = new NodeList();
    var update = state.isActive ? list : new InactiveNodeList(list);
    (function (scope) {
      return scope._state_v70vig$_0 === state ? function () {
        scope._state_v70vig$_0 = update;
        return true;
      }() : false;
    }(this));
  };
  JobSupport.prototype.promoteSingleToNodeList_ft43ca$_0 = function (state) {
    state.addOneIfEmpty_l2j9rm$(new NodeList());
    var list = state._next;
    (function (scope) {
      return scope._state_v70vig$_0 === state ? function () {
        scope._state_v70vig$_0 = list;
        return true;
      }() : false;
    }(this));
  };
  JobSupport.prototype.join = function (continuation) {
    if (!this.joinInternal_ta6o25$_0()) {
      checkCompletion(continuation.context);
      return;
    }
    return this.joinSuspend_kfh5g8$_0(continuation);
  };
  JobSupport.prototype.joinInternal_ta6o25$_0 = function () {
    while (true) {
      var state = this.state_8be2vx$;
      if (!Kotlin.isType(state, Incomplete))
        return false;
      if (this.startInternal_tp1bqd$_0(state) >= 0)
        return true;
    }
  };
  function JobSupport$joinSuspend$lambda(this$JobSupport) {
    return function (cont) {
      disposeOnCancellation(cont, this$JobSupport.invokeOnCompletion_f05bi3$(new ResumeOnCompletion(this$JobSupport, cont)));
      return Unit;
    };
  }
  function suspendCancellableCoroutine$lambda_1(closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl(intercepted(uCont), 1);
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  JobSupport.prototype.joinSuspend_kfh5g8$_0 = function (continuation) {
    return suspendCancellableCoroutine$lambda_1(JobSupport$joinSuspend$lambda(this))(continuation);
  };
  Object.defineProperty(JobSupport.prototype, 'onJoin', {get: function () {
    return this;
  }});
  JobSupport.prototype.registerSelectClause0_s9h9qd$ = function (select, block) {
    while (true) {
      var state = this.state_8be2vx$;
      if (select.isSelected)
        return;
      if (!Kotlin.isType(state, Incomplete)) {
        if (select.trySelect_s8jyv4$(null)) {
          checkCompletion(select.completion.context);
          startCoroutineUnintercepted(block, select.completion);
        }
        return;
      }
      if (this.startInternal_tp1bqd$_0(state) === 0) {
        select.disposeOnSelect_rvfg84$(this.invokeOnCompletion_f05bi3$(new SelectJoinOnCompletion(this, select, block)));
        return;
      }
    }
  };
  JobSupport.prototype.removeNode_nxb11s$ = function (node) {
    while (true) {
      var state = this.state_8be2vx$;
      if (Kotlin.isType(state, JobNode)) {
        if (state !== node)
          return;
        if (function (scope) {
          return scope._state_v70vig$_0 === state ? function () {
            scope._state_v70vig$_0 = EMPTY_ACTIVE;
            return true;
          }() : false;
        }(this))
          return;
      }
       else if (Kotlin.isType(state, Incomplete)) {
        if (state.list != null)
          node.remove();
        return;
      }
       else
        return;
    }
  };
  Object.defineProperty(JobSupport.prototype, 'onCancelComplete', {get: function () {
    return false;
  }});
  JobSupport.prototype.cancel = function () {
    this.cancel_dbl4no$(null);
  };
  JobSupport.prototype.cancel_dbl4no$$default = function (cause) {
    return this.cancelImpl_1dkq74$_0(cause) && this.handlesException;
  };
  JobSupport.prototype.parentCancelled_pv1t6x$ = function (parentJob) {
    this.cancelImpl_1dkq74$_0(parentJob);
  };
  JobSupport.prototype.childCancelled_tcv7n7$ = function (cause) {
    return this.cancelImpl_1dkq74$_0(cause) && this.handlesException;
  };
  JobSupport.prototype.cancelImpl_1dkq74$_0 = function (cause) {
    if (this.onCancelComplete) {
      if (this.cancelMakeCompleting_z3ww04$_0(cause))
        return true;
    }
    return this.makeCancelling_xjon1g$_0(cause);
  };
  JobSupport.prototype.cancelMakeCompleting_z3ww04$_0 = function (cause) {
    loop_label: while (true) {
      var state = this.state_8be2vx$;
      block$break: do {
        if (!Kotlin.isType(state, Incomplete) || (Kotlin.isType(state, JobSupport$Finishing) && state.isCompleting)) {
          return false;
        }
        var proposedUpdate = new CompletedExceptionally(this.createCauseException_kfrsk8$_0(cause));
        switch (this.tryMakeCompleting_ev8xlh$_0(state, proposedUpdate, 0)) {
          case 0:
            return false;
          case 1:
          case 2:
            return true;
          case 3:
            break block$break;
          default:throw IllegalStateException_init('unexpected result'.toString());
        }
      }
       while (false);
    }
  };
  JobSupport.prototype.createJobCancellationException_sy2yj3$_0 = function () {
    return new JobCancellationException('Job was cancelled', null, this);
  };
  JobSupport.prototype.getChildJobCancellationCause = function () {
    var tmp$, tmp$_0;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, JobSupport$Finishing))
      tmp$ = state.rootCause;
    else if (Kotlin.isType(state, Incomplete)) {
      throw IllegalStateException_init(('Cannot be cancelling child in this state: ' + toString(state)).toString());
    }
     else if (Kotlin.isType(state, CompletedExceptionally))
      tmp$ = state.cause;
    else
      tmp$ = null;
    var rootCause = tmp$;
    if (rootCause == null || (this.handlesException && !Kotlin.isType(rootCause, CancellationException))) {
      tmp$_0 = new JobCancellationException('Parent job is ' + this.stateString_u2sjqg$_0(state), rootCause, this);
    }
     else {
      tmp$_0 = rootCause;
    }
    return tmp$_0;
  };
  JobSupport.prototype.createCauseException_kfrsk8$_0 = function (cause) {
    var tmp$;
    if (cause == null || Kotlin.isType(cause, Throwable))
      return cause != null ? cause : this.createJobCancellationException_sy2yj3$_0();
    else
      return (Kotlin.isType(tmp$ = cause, ParentJob) ? tmp$ : throwCCE()).getChildJobCancellationCause();
  };
  JobSupport.prototype.makeCancelling_xjon1g$_0 = function (cause) {
    var causeExceptionCache = {v: null};
    loop_label: while (true) {
      var state = this.state_8be2vx$;
      block$break: do {
        var tmp$;
        if (Kotlin.isType(state, JobSupport$Finishing)) {
          var tmp$_0;
          if (state.isSealed)
            return false;
          var wasCancelling = state.isCancelling;
          if (cause != null || !wasCancelling) {
            var tmp$_1;
            if ((tmp$_0 = causeExceptionCache.v) != null)
              tmp$_1 = tmp$_0;
            else {
              var $receiver = this.createCauseException_kfrsk8$_0(cause);
              causeExceptionCache.v = $receiver;
              tmp$_1 = $receiver;
            }
            var causeException = tmp$_1;
            state.addExceptionLocked_tcv7n7$(causeException);
          }
          var $receiver_0 = state.rootCause;
          var notifyRootCause = !wasCancelling ? $receiver_0 : null;
          if (notifyRootCause != null) {
            this.notifyCancelling_xkpzb8$_0(state.list, notifyRootCause);
          }
          return true;
        }
         else if (Kotlin.isType(state, Incomplete)) {
          var tmp$_2;
          if ((tmp$ = causeExceptionCache.v) != null)
            tmp$_2 = tmp$;
          else {
            var $receiver_1 = this.createCauseException_kfrsk8$_0(cause);
            causeExceptionCache.v = $receiver_1;
            tmp$_2 = $receiver_1;
          }
          var causeException_0 = tmp$_2;
          if (state.isActive) {
            if (this.tryMakeCancelling_v0qvyy$_0(state, causeException_0))
              return true;
          }
           else {
            switch (this.tryMakeCompleting_ev8xlh$_0(state, new CompletedExceptionally(causeException_0), 0)) {
              case 0:
                throw IllegalStateException_init(('Cannot happen in ' + toString(state)).toString());
              case 1:
              case 2:
                return true;
              case 3:
                break block$break;
              default:throw IllegalStateException_init('unexpected result'.toString());
            }
          }
        }
         else
          return false;
      }
       while (false);
    }
  };
  JobSupport.prototype.getOrPromoteCancellingList_dmij2j$_0 = function (state) {
    var tmp$, tmp$_0;
    tmp$_0 = state.list;
    if (tmp$_0 == null) {
      if (Kotlin.isType(state, Empty))
        tmp$ = new NodeList();
      else if (Kotlin.isType(state, JobNode)) {
        this.promoteSingleToNodeList_ft43ca$_0(state);
        tmp$ = null;
      }
       else {
        throw IllegalStateException_init(('State should have list: ' + state).toString());
      }
      tmp$_0 = tmp$;
    }
    return tmp$_0;
  };
  JobSupport.prototype.tryMakeCancelling_v0qvyy$_0 = function (state, rootCause) {
    var tmp$;
    if (!!Kotlin.isType(state, JobSupport$Finishing)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    if (!state.isActive) {
      var message_0 = 'Check failed.';
      throw IllegalStateException_init(message_0.toString());
    }
    tmp$ = this.getOrPromoteCancellingList_dmij2j$_0(state);
    if (tmp$ == null) {
      return false;
    }
    var list = tmp$;
    var cancelling = new JobSupport$Finishing(list, false, rootCause);
    if (!function (scope) {
      return scope._state_v70vig$_0 === state ? function () {
        scope._state_v70vig$_0 = cancelling;
        return true;
      }() : false;
    }(this))
      return false;
    this.notifyCancelling_xkpzb8$_0(list, rootCause);
    return true;
  };
  JobSupport.prototype.makeCompleting_8ea4ql$ = function (proposedUpdate) {
    var loopOnState_46ivxf$_0$result;
    loop_label: while (true) {
      var state = this.state_8be2vx$;
      block$break: do {
        switch (this.tryMakeCompleting_ev8xlh$_0(state, proposedUpdate, 0)) {
          case 0:
            return false;
          case 1:
          case 2:
            return true;
          case 3:
            break block$break;
          default:throw IllegalStateException_init('unexpected result'.toString());
        }
      }
       while (false);
    }
    return loopOnState_46ivxf$_0$result;
  };
  JobSupport.prototype.makeCompletingOnce_42w2xh$ = function (proposedUpdate, mode) {
    var loopOnState_46ivxf$_0$result;
    loop_label: while (true) {
      var state = this.state_8be2vx$;
      block$break: do {
        switch (this.tryMakeCompleting_ev8xlh$_0(state, proposedUpdate, mode)) {
          case 0:
            throw IllegalStateException_0('Job ' + this + ' is already complete or completing, ' + ('but is being completed with ' + toString(proposedUpdate)), this.get_exceptionOrNull_ejijbb$_0(proposedUpdate));
          case 1:
            return true;
          case 2:
            return false;
          case 3:
            break block$break;
          default:throw IllegalStateException_init('unexpected result'.toString());
        }
      }
       while (false);
    }
    return loopOnState_46ivxf$_0$result;
  };
  JobSupport.prototype.tryMakeCompleting_ev8xlh$_0 = function (state, proposedUpdate, mode) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (!Kotlin.isType(state, Incomplete))
      return 0;
    if ((Kotlin.isType(state, Empty) || Kotlin.isType(state, JobNode)) && !Kotlin.isType(state, ChildHandleNode) && !Kotlin.isType(proposedUpdate, CompletedExceptionally)) {
      if (!this.tryFinalizeSimpleState_8el5e4$_0(state, proposedUpdate, mode))
        return 3;
      return 1;
    }
    tmp$ = this.getOrPromoteCancellingList_dmij2j$_0(state);
    if (tmp$ == null) {
      return 3;
    }
    var list = tmp$;
    var finishing = (tmp$_1 = Kotlin.isType(tmp$_0 = state, JobSupport$Finishing) ? tmp$_0 : null) != null ? tmp$_1 : new JobSupport$Finishing(list, false, null);
    var notifyRootCause = {v: null};
    var tmp$_3, tmp$_4;
    if (finishing.isCompleting)
      return 0;
    finishing.isCompleting = true;
    if (finishing !== state) {
      if (!function (scope) {
        return scope._state_v70vig$_0 === state ? function () {
          scope._state_v70vig$_0 = finishing;
          return true;
        }() : false;
      }(this))
        return 3;
    }
    if (!!finishing.isSealed) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    var wasCancelling = finishing.isCancelling;
    if ((tmp$_4 = Kotlin.isType(tmp$_3 = proposedUpdate, CompletedExceptionally) ? tmp$_3 : null) != null) {
      finishing.addExceptionLocked_tcv7n7$(tmp$_4.cause);
    }
    var $receiver = finishing.rootCause;
    notifyRootCause.v = !wasCancelling ? $receiver : null;
    if ((tmp$_2 = notifyRootCause.v) != null) {
      this.notifyCancelling_xkpzb8$_0(list, tmp$_2);
    }
    var child = this.firstChild_15hr5g$_0(state);
    if (child != null && this.tryWaitForChild_dzo3im$_0(finishing, child, proposedUpdate))
      return 2;
    if (this.tryFinalizeFinishingState_ke4xjq$_0(finishing, proposedUpdate, mode))
      return 1;
    return 3;
  };
  JobSupport.prototype.get_exceptionOrNull_ejijbb$_0 = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, CompletedExceptionally) ? tmp$ : null) != null ? tmp$_0.cause : null;
  };
  JobSupport.prototype.firstChild_15hr5g$_0 = function (state) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = Kotlin.isType(tmp$ = state, ChildHandleNode) ? tmp$ : null) != null ? tmp$_1 : (tmp$_0 = state.list) != null ? this.nextChild_n2no7k$_0(tmp$_0) : null;
  };
  JobSupport.prototype.tryWaitForChild_dzo3im$_0 = function (state, child, proposedUpdate) {
    var tmp$;
    var handle = child.childJob.invokeOnCompletion_ct2b2z$(void 0, false, new JobSupport$ChildCompletion(this, state, child, proposedUpdate));
    if (handle !== NonDisposableHandle_getInstance())
      return true;
    tmp$ = this.nextChild_n2no7k$_0(child);
    if (tmp$ == null) {
      return false;
    }
    var nextChild = tmp$;
    return this.tryWaitForChild_dzo3im$_0(state, nextChild, proposedUpdate);
  };
  JobSupport.prototype.continueCompleting_vth2d4$_0 = function (state, lastChild, proposedUpdate) {
    if (!(this.state_8be2vx$ === state)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init(message.toString());
    }
    var waitChild = this.nextChild_n2no7k$_0(lastChild);
    if (waitChild != null && this.tryWaitForChild_dzo3im$_0(state, waitChild, proposedUpdate))
      return;
    if (this.tryFinalizeFinishingState_ke4xjq$_0(state, proposedUpdate, 0))
      return;
  };
  JobSupport.prototype.nextChild_n2no7k$_0 = function ($receiver) {
    var cur = $receiver;
    while (cur._removed) {
      cur = cur._prev;
    }
    while (true) {
      cur = cur._next;
      if (cur._removed)
        continue;
      if (Kotlin.isType(cur, ChildHandleNode))
        return cur;
      if (Kotlin.isType(cur, NodeList))
        return null;
    }
  };
  function JobSupport$get_JobSupport$children$lambda(this$JobSupport_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$JobSupport$get_JobSupport$children$lambda(this$JobSupport_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JobSupport$get_JobSupport$children$lambda(this$JobSupport_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$JobSupport = this$JobSupport_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$cur = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$JobSupport$get_JobSupport$children$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$JobSupport$get_JobSupport$children$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JobSupport$get_JobSupport$children$lambda.prototype.constructor = Coroutine$JobSupport$get_JobSupport$children$lambda;
  Coroutine$JobSupport$get_JobSupport$children$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var state = this.local$this$JobSupport.state_8be2vx$;
            if (Kotlin.isType(state, ChildHandleNode)) {
              this.state_0 = 8;
              this.result_0 = this.local$$receiver.yield_11rb$(state.childJob, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(state, Incomplete)) {
                if ((this.local$tmp$ = state.list) != null) {
                  this.local$cur = this.local$tmp$._next;
                  this.state_0 = 2;
                  continue;
                }
                 else {
                  this.local$tmp$_0 = null;
                  this.state_0 = 6;
                  continue;
                }
              }
               else {
                this.state_0 = 7;
                continue;
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (equals(this.local$cur, this.local$tmp$)) {
              this.state_0 = 5;
              continue;
            }

            if (Kotlin.isType(this.local$cur, ChildHandleNode)) {
              this.state_0 = 3;
              this.result_0 = this.local$$receiver.yield_11rb$(this.local$cur.childJob, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.local$cur = this.local$cur._next;
            this.state_0 = 2;
            continue;
          case 5:
            this.local$tmp$_0 = Unit;
            this.state_0 = 6;
            continue;
          case 6:
            return this.local$tmp$_0;
          case 7:
            this.state_0 = 9;
            continue;
          case 8:
            return this.result_0;
          case 9:
            return Unit;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Object.defineProperty(JobSupport.prototype, 'children', {get: function () {
    return sequence(JobSupport$get_JobSupport$children$lambda(this));
  }});
  JobSupport.prototype.attachChild_kx8v25$ = function (child) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.invokeOnCompletion_ct2b2z$(true, void 0, new ChildHandleNode(this, child)), ChildHandle) ? tmp$ : throwCCE();
  };
  JobSupport.prototype.handleOnCompletionException_tcv7n7$ = function (exception) {
    throw exception;
  };
  JobSupport.prototype.onCancellation_dbl4no$ = function (cause) {
  };
  Object.defineProperty(JobSupport.prototype, 'cancelsParent', {get: function () {
    return false;
  }});
  Object.defineProperty(JobSupport.prototype, 'handlesException', {get: function () {
    return true;
  }});
  JobSupport.prototype.handleJobException_tcv7n7$ = function (exception) {
  };
  JobSupport.prototype.cancelParent_7dutpz$_0 = function (cause) {
    var tmp$;
    if (Kotlin.isType(cause, CancellationException))
      return true;
    if (!this.cancelsParent)
      return false;
    return ((tmp$ = this.parentHandle_ahojoo$_0) != null ? tmp$.childCancelled_tcv7n7$(cause) : null) === true;
  };
  JobSupport.prototype.onCompletionInternal_5apgvt$ = function (state, mode, suppressed) {
  };
  JobSupport.prototype.toString = function () {
    return this.toDebugString() + '@' + get_hexAddress(this);
  };
  JobSupport.prototype.toDebugString = function () {
    return this.nameString() + '{' + this.stateString_u2sjqg$_0(this.state_8be2vx$) + '}';
  };
  JobSupport.prototype.nameString = function () {
    return get_classSimpleName(this);
  };
  JobSupport.prototype.stateString_u2sjqg$_0 = function (state) {
    if (Kotlin.isType(state, JobSupport$Finishing))
      if (state.isCancelling)
        return 'Cancelling';
      else if (state.isCompleting)
        return 'Completing';
      else
        return 'Active';
    else if (Kotlin.isType(state, Incomplete))
      return state.isActive ? 'Active' : 'New';
    else if (Kotlin.isType(state, CompletedExceptionally))
      return 'Cancelled';
    else
      return 'Completed';
  };
  function JobSupport$Finishing(list, isCompleting, rootCause) {
    this.list_m9wkmb$_0 = list;
    this.isCompleting = isCompleting;
    this.rootCause = rootCause;
    this._exceptionsHolder_0 = null;
  }
  Object.defineProperty(JobSupport$Finishing.prototype, 'list', {get: function () {
    return this.list_m9wkmb$_0;
  }});
  Object.defineProperty(JobSupport$Finishing.prototype, 'isSealed', {get: function () {
    return this._exceptionsHolder_0 === SEALED;
  }});
  Object.defineProperty(JobSupport$Finishing.prototype, 'isCancelling', {get: function () {
    return this.rootCause != null;
  }});
  Object.defineProperty(JobSupport$Finishing.prototype, 'isActive', {get: function () {
    return this.rootCause == null;
  }});
  JobSupport$Finishing.prototype.sealLocked_dbl4no$ = function (proposedException) {
    var tmp$, tmp$_0;
    var eh = this._exceptionsHolder_0;
    if (eh == null)
      tmp$_0 = this.allocateList_0();
    else if (Kotlin.isType(eh, Throwable)) {
      var $receiver = this.allocateList_0();
      $receiver.add_11rb$(eh);
      tmp$_0 = $receiver;
    }
     else if (Kotlin.isType(eh, ArrayList))
      tmp$_0 = Kotlin.isType(tmp$ = eh, ArrayList) ? tmp$ : throwCCE();
    else {
      throw IllegalStateException_init(('State is ' + toString(eh)).toString());
    }
    var list = tmp$_0;
    var rootCause = this.rootCause;
    if (rootCause != null) {
      list.add_wxm5ur$(0, rootCause);
    }
    if (proposedException != null && !equals(proposedException, rootCause))
      list.add_11rb$(proposedException);
    this._exceptionsHolder_0 = SEALED;
    return list;
  };
  JobSupport$Finishing.prototype.addExceptionLocked_tcv7n7$ = function (exception) {
    var tmp$;
    var rootCause = this.rootCause;
    if (rootCause == null) {
      this.rootCause = exception;
      return;
    }
    if (exception === rootCause)
      return;
    var eh = this._exceptionsHolder_0;
    if (eh == null)
      this._exceptionsHolder_0 = exception;
    else if (Kotlin.isType(eh, Throwable)) {
      if (exception === eh)
        return;
      var $receiver = this.allocateList_0();
      $receiver.add_11rb$(eh);
      $receiver.add_11rb$(exception);
      this._exceptionsHolder_0 = $receiver;
    }
     else if (Kotlin.isType(eh, ArrayList))
      (Kotlin.isType(tmp$ = eh, ArrayList) ? tmp$ : throwCCE()).add_11rb$(exception);
    else {
      throw IllegalStateException_init(('State is ' + toString(eh)).toString());
    }
  };
  JobSupport$Finishing.prototype.allocateList_0 = function () {
    return ArrayList_init(4);
  };
  JobSupport$Finishing.prototype.toString = function () {
    return 'Finishing[cancelling=' + this.isCancelling + ', completing=' + this.isCompleting + ', rootCause=' + toString(this.rootCause) + ', exceptions=' + toString(this._exceptionsHolder_0) + ', list=' + this.list + ']';
  };
  JobSupport$Finishing.$metadata$ = {kind: Kind_CLASS, simpleName: 'Finishing', interfaces: [Incomplete]};
  JobSupport.prototype.get_isCancelling_dpdoz8$_0 = function ($receiver) {
    return Kotlin.isType($receiver, JobSupport$Finishing) && $receiver.isCancelling;
  };
  function JobSupport$ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this, child.childJob);
    this.parent_0 = parent;
    this.state_0 = state;
    this.child_0 = child;
    this.proposedUpdate_0 = proposedUpdate;
  }
  JobSupport$ChildCompletion.prototype.invoke = function (cause) {
    this.parent_0.continueCompleting_vth2d4$_0(this.state_0, this.child_0, this.proposedUpdate_0);
  };
  JobSupport$ChildCompletion.prototype.toString = function () {
    return 'ChildCompletion[' + this.child_0 + ', ' + toString(this.proposedUpdate_0) + ']';
  };
  JobSupport$ChildCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChildCompletion', interfaces: [JobNode]};
  function JobSupport$AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.job_0 = job;
  }
  JobSupport$AwaitContinuation.prototype.getContinuationCancellationCause_dqr1mp$ = function (parent) {
    var tmp$;
    var state = this.job_0.state_8be2vx$;
    if (Kotlin.isType(state, JobSupport$Finishing)) {
      if ((tmp$ = state.rootCause) != null) {
        return tmp$;
      }
    }
    if (Kotlin.isType(state, CompletedExceptionally))
      return state.cause;
    return parent.getCancellationException();
  };
  JobSupport$AwaitContinuation.prototype.nameString = function () {
    return 'AwaitContinuation';
  };
  JobSupport$AwaitContinuation.$metadata$ = {kind: Kind_CLASS, simpleName: 'AwaitContinuation', interfaces: [CancellableContinuationImpl]};
  Object.defineProperty(JobSupport.prototype, 'isCompletedExceptionally', {get: function () {
    return Kotlin.isType(this.state_8be2vx$, CompletedExceptionally);
  }});
  JobSupport.prototype.getCompletionExceptionOrNull = function () {
    var state = this.state_8be2vx$;
    if (!!Kotlin.isType(state, Incomplete)) {
      var message = 'This job has not completed yet';
      throw IllegalStateException_init(message.toString());
    }
    return this.get_exceptionOrNull_ejijbb$_0(state);
  };
  JobSupport.prototype.getCompletedInternal_8be2vx$ = function () {
    var state = this.state_8be2vx$;
    if (!!Kotlin.isType(state, Incomplete)) {
      var message = 'This job has not completed yet';
      throw IllegalStateException_init(message.toString());
    }
    if (Kotlin.isType(state, CompletedExceptionally))
      throw state.cause;
    return unboxState(state);
  };
  JobSupport.prototype.awaitInternal_8be2vx$ = function (continuation) {
    while (true) {
      var state = this.state_8be2vx$;
      if (!Kotlin.isType(state, Incomplete)) {
        if (Kotlin.isType(state, CompletedExceptionally)) {
          throw state.cause;
        }
        return unboxState(state);
      }
      if (this.startInternal_tp1bqd$_0(state) >= 0)
        break;
    }
    return this.awaitSuspend_ixl9xw$_0(continuation);
  };
  function JobSupport$awaitSuspend$lambda(this$JobSupport) {
    return function (uCont) {
      var cont = new JobSupport$AwaitContinuation(intercepted(uCont), this$JobSupport);
      disposeOnCancellation(cont, this$JobSupport.invokeOnCompletion_f05bi3$(new ResumeAwaitOnCompletion(this$JobSupport, cont)));
      return cont.getResult();
    };
  }
  JobSupport.prototype.awaitSuspend_ixl9xw$_0 = function (continuation) {
    return JobSupport$awaitSuspend$lambda(this)(continuation);
  };
  JobSupport.prototype.registerSelectClause1Internal_u6kgbh$ = function (select, block) {
    while (true) {
      var state = this.state_8be2vx$;
      var tmp$;
      if (select.isSelected)
        return;
      if (!Kotlin.isType(state, Incomplete)) {
        if (select.trySelect_s8jyv4$(null)) {
          if (Kotlin.isType(state, CompletedExceptionally)) {
            select.resumeSelectCancellableWithException_tcv7n7$(state.cause);
          }
           else {
            startCoroutineUnintercepted_0(block, (tmp$ = unboxState(state)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), select.completion);
          }
        }
        return;
      }
      if (this.startInternal_tp1bqd$_0(state) === 0) {
        select.disposeOnSelect_rvfg84$(this.invokeOnCompletion_f05bi3$(new SelectAwaitOnCompletion(this, select, block)));
        return;
      }
    }
  };
  JobSupport.prototype.selectAwaitCompletion_u6kgbh$ = function (select, block) {
    var tmp$;
    var state = this.state_8be2vx$;
    if (Kotlin.isType(state, CompletedExceptionally))
      select.resumeSelectCancellableWithException_tcv7n7$(state.cause);
    else {
      startCoroutineCancellable_0(block, (tmp$ = unboxState(state)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), select.completion);
    }
  };
  JobSupport.$metadata$ = {kind: Kind_CLASS, simpleName: 'JobSupport', interfaces: [SelectClause0, ParentJob, ChildJob, Job]};
  function IncompleteStateBox(state) {
    this.state = state;
  }
  IncompleteStateBox.$metadata$ = {kind: Kind_CLASS, simpleName: 'IncompleteStateBox', interfaces: []};
  function boxIncomplete($receiver) {
    return Kotlin.isType($receiver, Incomplete) ? new IncompleteStateBox($receiver) : $receiver;
  }
  function unboxState($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = $receiver, IncompleteStateBox) ? tmp$ : null) != null ? tmp$_0.state : null) != null ? tmp$_1 : $receiver;
  }
  var COMPLETING_ALREADY_COMPLETING;
  var COMPLETING_COMPLETED;
  var COMPLETING_WAITING_CHILDREN;
  var COMPLETING_RETRY;
  var RETRY;
  var FALSE;
  var TRUE;
  var SEALED;
  var EMPTY_NEW;
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this.isActive_hyoax9$_0 = isActive;
  }
  Object.defineProperty(Empty.prototype, 'isActive', {get: function () {
    return this.isActive_hyoax9$_0;
  }});
  Object.defineProperty(Empty.prototype, 'list', {get: function () {
    return null;
  }});
  Empty.prototype.toString = function () {
    return 'Empty{' + (this.isActive ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = {kind: Kind_CLASS, simpleName: 'Empty', interfaces: [Incomplete]};
  function JobImpl(parent) {
    if (parent === void 0)
      parent = null;
    JobSupport.call(this, true);
    this.initParentJobInternal_8vd9i7$(parent);
  }
  Object.defineProperty(JobImpl.prototype, 'cancelsParent', {get: function () {
    return true;
  }});
  Object.defineProperty(JobImpl.prototype, 'onCancelComplete', {get: function () {
    return true;
  }});
  Object.defineProperty(JobImpl.prototype, 'handlesException', {get: function () {
    return false;
  }});
  JobImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'JobImpl', interfaces: [JobSupport]};
  function Incomplete() {
  }
  Incomplete.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Incomplete', interfaces: []};
  function JobNode(job) {
    CompletionHandlerBase.call(this);
    this.job = job;
  }
  Object.defineProperty(JobNode.prototype, 'isActive', {get: function () {
    return true;
  }});
  Object.defineProperty(JobNode.prototype, 'list', {get: function () {
    return null;
  }});
  JobNode.prototype.dispose = function () {
    var tmp$;
    (Kotlin.isType(tmp$ = this.job, JobSupport) ? tmp$ : throwCCE()).removeNode_nxb11s$(this);
  };
  JobNode.$metadata$ = {kind: Kind_CLASS, simpleName: 'JobNode', interfaces: [Incomplete, DisposableHandle, CompletionHandlerBase]};
  function NodeList() {
    LinkedListHead.call(this);
  }
  Object.defineProperty(NodeList.prototype, 'isActive', {get: function () {
    return true;
  }});
  Object.defineProperty(NodeList.prototype, 'list', {get: function () {
    return this;
  }});
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  NodeList.prototype.getString_61zpoe$ = function (state) {
    var $receiver = StringBuilder_init();
    $receiver.append_gw00v9$('List{');
    $receiver.append_gw00v9$(state);
    $receiver.append_gw00v9$('}[');
    var first = {v: true};
    var cur = this._next;
    while (!equals(cur, this)) {
      if (Kotlin.isType(cur, JobNode)) {
        var node = cur;
        if (first.v)
          first.v = false;
        else
          $receiver.append_gw00v9$(', ');
        $receiver.append_s8jyv4$(node);
      }
      cur = cur._next;
    }
    $receiver.append_gw00v9$(']');
    return $receiver.toString();
  };
  NodeList.prototype.toString = function () {
    return this.getString_61zpoe$('Active');
  };
  NodeList.$metadata$ = {kind: Kind_CLASS, simpleName: 'NodeList', interfaces: [Incomplete, LinkedListHead]};
  function InactiveNodeList(list) {
    this.list_afai45$_0 = list;
  }
  Object.defineProperty(InactiveNodeList.prototype, 'list', {get: function () {
    return this.list_afai45$_0;
  }});
  Object.defineProperty(InactiveNodeList.prototype, 'isActive', {get: function () {
    return false;
  }});
  InactiveNodeList.prototype.toString = function () {
    return this.list.getString_61zpoe$('New');
  };
  InactiveNodeList.$metadata$ = {kind: Kind_CLASS, simpleName: 'InactiveNodeList', interfaces: [Incomplete]};
  function InvokeOnCompletion(job, handler) {
    JobNode.call(this, job);
    this.handler_0 = handler;
  }
  InvokeOnCompletion.prototype.invoke = function (cause) {
    this.handler_0(cause);
  };
  InvokeOnCompletion.prototype.toString = function () {
    return 'InvokeOnCompletion[' + get_classSimpleName(this) + '@' + get_hexAddress(this) + ']';
  };
  InvokeOnCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'InvokeOnCompletion', interfaces: [JobNode]};
  function ResumeOnCompletion(job, continuation) {
    JobNode.call(this, job);
    this.continuation_0 = continuation;
  }
  ResumeOnCompletion.prototype.invoke = function (cause) {
    this.continuation_0.resumeWith_tl1gpc$(new Result(Unit));
  };
  ResumeOnCompletion.prototype.toString = function () {
    return 'ResumeOnCompletion[' + this.continuation_0 + ']';
  };
  ResumeOnCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'ResumeOnCompletion', interfaces: [JobNode]};
  function ResumeAwaitOnCompletion(job, continuation) {
    JobNode.call(this, job);
    this.continuation_0 = continuation;
  }
  ResumeAwaitOnCompletion.prototype.invoke = function (cause) {
    var tmp$, tmp$_0;
    var state = this.job.state_8be2vx$;
    if (!!Kotlin.isType(state, Incomplete)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    if (Kotlin.isType(state, CompletedExceptionally)) {
      this.continuation_0.resumeWithExceptionMode_i32via$(state.cause, 0);
    }
     else {
      tmp$_0 = this.continuation_0;
      var value = (tmp$ = unboxState(state)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
      tmp$_0.resumeWith_tl1gpc$(new Result(value));
    }
  };
  ResumeAwaitOnCompletion.prototype.toString = function () {
    return 'ResumeAwaitOnCompletion[' + this.continuation_0 + ']';
  };
  ResumeAwaitOnCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'ResumeAwaitOnCompletion', interfaces: [JobNode]};
  function SelectJoinOnCompletion(job, select, block) {
    JobNode.call(this, job);
    this.select_0 = select;
    this.block_0 = block;
  }
  SelectJoinOnCompletion.prototype.invoke = function (cause) {
    if (this.select_0.trySelect_s8jyv4$(null))
      startCoroutineCancellable(this.block_0, this.select_0.completion);
  };
  SelectJoinOnCompletion.prototype.toString = function () {
    return 'SelectJoinOnCompletion[' + this.select_0 + ']';
  };
  SelectJoinOnCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'SelectJoinOnCompletion', interfaces: [JobNode]};
  function SelectAwaitOnCompletion(job, select, block) {
    JobNode.call(this, job);
    this.select_0 = select;
    this.block_0 = block;
  }
  SelectAwaitOnCompletion.prototype.invoke = function (cause) {
    if (this.select_0.trySelect_s8jyv4$(null))
      this.job.selectAwaitCompletion_u6kgbh$(this.select_0, this.block_0);
  };
  SelectAwaitOnCompletion.prototype.toString = function () {
    return 'SelectAwaitOnCompletion[' + this.select_0 + ']';
  };
  SelectAwaitOnCompletion.$metadata$ = {kind: Kind_CLASS, simpleName: 'SelectAwaitOnCompletion', interfaces: [JobNode]};
  function JobCancellingNode(job) {
    JobNode.call(this, job);
  }
  JobCancellingNode.$metadata$ = {kind: Kind_CLASS, simpleName: 'JobCancellingNode', interfaces: [JobNode]};
  function InvokeOnCancelling(job, handler) {
    JobCancellingNode.call(this, job);
    this.handler_0 = handler;
    this._invoked_0 = 0;
  }
  InvokeOnCancelling.prototype.invoke = function (cause) {
    if (function (scope) {
      return scope._invoked_0 === 0 ? function () {
        scope._invoked_0 = 1;
        return true;
      }() : false;
    }(this))
      this.handler_0(cause);
  };
  InvokeOnCancelling.prototype.toString = function () {
    return 'InvokeOnCancelling[' + get_classSimpleName(this) + '@' + get_hexAddress(this) + ']';
  };
  InvokeOnCancelling.$metadata$ = {kind: Kind_CLASS, simpleName: 'InvokeOnCancelling', interfaces: [JobCancellingNode]};
  function ChildHandleNode(parent, childJob) {
    JobCancellingNode.call(this, parent);
    this.childJob = childJob;
  }
  ChildHandleNode.prototype.invoke = function (cause) {
    this.childJob.parentCancelled_pv1t6x$(this.job);
  };
  ChildHandleNode.prototype.childCancelled_tcv7n7$ = function (cause) {
    return this.job.childCancelled_tcv7n7$(cause);
  };
  ChildHandleNode.prototype.toString = function () {
    return 'ChildHandle[' + this.childJob + ']';
  };
  ChildHandleNode.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChildHandleNode', interfaces: [ChildHandle, JobCancellingNode]};
  function ChildContinuation(parent, child) {
    JobCancellingNode.call(this, parent);
    this.child = child;
  }
  ChildContinuation.prototype.invoke = function (cause) {
    this.child.cancel_dbl4no$(this.child.getContinuationCancellationCause_dqr1mp$(this.job));
  };
  ChildContinuation.prototype.toString = function () {
    return 'ChildContinuation[' + this.child + ']';
  };
  ChildContinuation.$metadata$ = {kind: Kind_CLASS, simpleName: 'ChildContinuation', interfaces: [JobCancellingNode]};
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  MainCoroutineDispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'MainCoroutineDispatcher', interfaces: [CoroutineDispatcher]};
  function NonCancellable() {
    NonCancellable_instance = this;
    AbstractCoroutineContextElement.call(this, Job$Key_getInstance());
  }
  var NonCancellable_instance = null;
  var MODE_ATOMIC_DEFAULT;
  var MODE_CANCELLABLE;
  var MODE_DIRECT;
  var MODE_UNDISPATCHED;
  var MODE_IGNORE;
  function get_isCancellableMode($receiver) {
    return $receiver === 1;
  }
  function get_isDispatchedMode($receiver) {
    return $receiver === 0 || $receiver === 1;
  }
  function resumeMode($receiver, value, mode) {
    var tmp$;
    switch (mode) {
      case 0:
        $receiver.resumeWith_tl1gpc$(new Result(value));
        break;
      case 1:
        resumeCancellable($receiver, value);
        break;
      case 2:
        resumeDirect($receiver, value);
        break;
      case 3:
        var $this = Kotlin.isType(tmp$ = $receiver, DispatchedContinuation) ? tmp$ : throwCCE();
        $this.context;
        $this.continuation.resumeWith_tl1gpc$(new Result(value));
        break;
      case 4:
        break;
      default:throw IllegalStateException_init(('Invalid mode ' + mode).toString());
    }
  }
  function resumeWithExceptionMode($receiver, exception, mode) {
    var tmp$;
    switch (mode) {
      case 0:
        $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
        break;
      case 1:
        resumeCancellableWithException($receiver, exception);
        break;
      case 2:
        resumeDirectWithException($receiver, exception);
        break;
      case 3:
        var $this = Kotlin.isType(tmp$ = $receiver, DispatchedContinuation) ? tmp$ : throwCCE();
        $this.context;
        var $receiver_0 = $this.continuation;
        $receiver_0.resumeWith_tl1gpc$(new Result(createFailure(recoverStackTrace(exception, $receiver_0))));
        break;
      case 4:
        break;
      default:throw IllegalStateException_init(('Invalid mode ' + mode).toString());
    }
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  Unconfined.prototype.isDispatchNeeded_1fupul$ = function (context) {
    return false;
  };
  Unconfined.prototype.dispatch_5bn72i$ = function (context, block) {
    throw UnsupportedOperationException_init_0();
  };
  Unconfined.prototype.toString = function () {
    return 'Unconfined';
  };
  Unconfined.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Unconfined', interfaces: [CoroutineDispatcher]};
  var Unconfined_instance = null;
  function Unconfined_getInstance() {
    if (Unconfined_instance === null) {
      new Unconfined();
    }
    return Unconfined_instance;
  }
  function checkCompletion($receiver) {
    var job = $receiver.get_j3r2sn$(Job$Key_getInstance());
    if (job != null && !job.isActive)
      throw job.getCancellationException();
  }
  function AbstractSendChannel() {
    this.queue_0 = new LinkedListHead();
    this.onCloseHandler_0 = null;
  }
  AbstractSendChannel.prototype.offerInternal_11rb$ = function (element) {
    var tmp$;
    while (true) {
      tmp$ = this.takeFirstReceiveOrPeekClosed();
      if (tmp$ == null) {
        return OFFER_FAILED;
      }
      var receive = tmp$;
      var token = receive.tryResumeReceive_19pj23$(element, null);
      if (token != null) {
        receive.completeResumeReceive_za3rmp$(token);
        return receive.offerResult;
      }
    }
  };
  AbstractSendChannel.prototype.offerSelectInternal_ys5ufj$ = function (element, select) {
    var offerOp = this.describeTryOffer_0(element);
    var failure = select.performAtomicTrySelect_6q0pxr$(offerOp);
    if (failure != null)
      return failure;
    var receive = offerOp.result;
    receive.completeResumeReceive_za3rmp$(ensureNotNull(offerOp.resumeToken));
    return receive.offerResult;
  };
  Object.defineProperty(AbstractSendChannel.prototype, 'closedForSend_0', {get: function () {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isType(tmp$ = this.queue_0._prev, Closed) ? tmp$ : null) != null) {
      this.helpClose_0(tmp$_0);
      tmp$_1 = tmp$_0;
    }
     else
      tmp$_1 = null;
    return tmp$_1;
  }});
  Object.defineProperty(AbstractSendChannel.prototype, 'closedForReceive_0', {get: function () {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$_0 = Kotlin.isType(tmp$ = this.queue_0._next, Closed) ? tmp$ : null) != null) {
      this.helpClose_0(tmp$_0);
      tmp$_1 = tmp$_0;
    }
     else
      tmp$_1 = null;
    return tmp$_1;
  }});
  AbstractSendChannel.prototype.takeFirstSendOrPeekClosed_0 = function () {
    var $this = this.queue_0;
    var removeFirstIfIsInstanceOfOrPeekIf_14urrv$result;
    removeFirstIfIsInstanceOfOrPeekIf_14urrv$break: do {
      var next = $this._next;
      if (next === $this) {
        removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = null;
        break removeFirstIfIsInstanceOfOrPeekIf_14urrv$break;
      }
      if (!Kotlin.isType(next, Send)) {
        removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = null;
        break removeFirstIfIsInstanceOfOrPeekIf_14urrv$break;
      }
      if (Kotlin.isType(next, Closed)) {
        removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = next;
        break removeFirstIfIsInstanceOfOrPeekIf_14urrv$break;
      }
      if (!next.remove()) {
        var message = 'Should remove';
        throw IllegalStateException_init(message.toString());
      }
      removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = next;
    }
     while (false);
    return removeFirstIfIsInstanceOfOrPeekIf_14urrv$result;
  };
  AbstractSendChannel.prototype.sendBuffered_0 = function (element) {
    var $this = this.queue_0;
    var node = new AbstractSendChannel$SendBuffered(element);
    addLastIfPrev_s8xlln$break: do {
      var prev = $this._prev;
      if (Kotlin.isType(prev, ReceiveOrClosed))
        return prev;
      if (!true) {
        false;
        break addLastIfPrev_s8xlln$break;
      }
      $this.addLast_l2j9rm$(node);
      true;
    }
     while (false);
    return null;
  };
  AbstractSendChannel.prototype.sendConflated_0 = function (element) {
    var node = new AbstractSendChannel$SendBuffered(element);
    var $this = this.queue_0;
    addLastIfPrev_s8xlln$break: do {
      var prev = $this._prev;
      if (Kotlin.isType(prev, ReceiveOrClosed))
        return prev;
      if (!true) {
        false;
        break addLastIfPrev_s8xlln$break;
      }
      $this.addLast_l2j9rm$(node);
      true;
    }
     while (false);
    this.conflatePreviousSendBuffered_0(node);
    return null;
  };
  AbstractSendChannel.prototype.conflatePreviousSendBuffered_0 = function (node) {
    var prev = node._prev;
    while (Kotlin.isType(prev, AbstractSendChannel$SendBuffered)) {
      if (!prev.remove()) {
        prev.helpRemove();
      }
      prev = prev._prev;
    }
  };
  AbstractSendChannel.prototype.describeSendBuffered_0 = function (element) {
    return new AbstractSendChannel$SendBufferedDesc(this.queue_0, element);
  };
  function AbstractSendChannel$SendBufferedDesc(queue, element) {
    AddLastDesc.call(this, queue, new AbstractSendChannel$SendBuffered(element));
  }
  AbstractSendChannel$SendBufferedDesc.prototype.failure_ru8hrx$ = function (affected, next) {
    if (Kotlin.isType(affected, ReceiveOrClosed))
      return OFFER_FAILED;
    return null;
  };
  AbstractSendChannel$SendBufferedDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'SendBufferedDesc', interfaces: [AddLastDesc]};
  AbstractSendChannel.prototype.describeSendConflated_0 = function (element) {
    return new AbstractSendChannel$SendConflatedDesc(this.queue_0, element);
  };
  function AbstractSendChannel$SendConflatedDesc(queue, element) {
    AbstractSendChannel$SendBufferedDesc.call(this, queue, element);
  }
  AbstractSendChannel$SendConflatedDesc.prototype.finishOnSuccess_bpl3tg$ = function (affected, next) {
    var tmp$, tmp$_0;
    AbstractSendChannel$SendBufferedDesc.prototype.finishOnSuccess_bpl3tg$.call(this, affected, next);
    (tmp$_0 = Kotlin.isType(tmp$ = affected, AbstractSendChannel$SendBuffered) ? tmp$ : null) != null ? tmp$_0.remove() : null;
  };
  AbstractSendChannel$SendConflatedDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'SendConflatedDesc', interfaces: [AbstractSendChannel$SendBufferedDesc]};
  Object.defineProperty(AbstractSendChannel.prototype, 'isClosedForSend', {get: function () {
    return this.closedForSend_0 != null;
  }});
  Object.defineProperty(AbstractSendChannel.prototype, 'isFull', {get: function () {
    return !Kotlin.isType(this.queue_0._next, ReceiveOrClosed) && this.isBufferFull;
  }});
  AbstractSendChannel.prototype.send_11rb$ = function (element, continuation) {
    if (this.offer_11rb$(element))
      return;
    return this.sendSuspend_0(element, continuation);
  };
  AbstractSendChannel.prototype.offer_11rb$ = function (element) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var result = this.offerInternal_11rb$(element);
    if (result === OFFER_SUCCESS)
      tmp$_2 = true;
    else if (result === OFFER_FAILED) {
      tmp$_1 = (tmp$_0 = (tmp$ = this.closedForSend_0) != null ? tmp$.sendException : null) != null ? recoverStackTrace_0(tmp$_0) : null;
      if (tmp$_1 == null) {
        return false;
      }
      throw tmp$_1;
    }
     else if (Kotlin.isType(result, Closed))
      throw recoverStackTrace_0(result.sendException);
    else {
      throw IllegalStateException_init(('offerInternal returned ' + result.toString()).toString());
    }
    return tmp$_2;
  };
  function AbstractSendChannel$sendSuspend$lambda(closure$element, this$AbstractSendChannel) {
    return function (cont) {
      var send = new SendElement(closure$element, cont);
      loop: while (true) {
        var enqueueResult = this$AbstractSendChannel.enqueueSend_0(send);
        if (enqueueResult == null) {
          removeOnCancellation(cont, send);
          return;
        }
         else if (Kotlin.isType(enqueueResult, Closed)) {
          this$AbstractSendChannel.helpClose_0(enqueueResult);
          var exception = enqueueResult.sendException;
          cont.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          return;
        }
        var offerResult = this$AbstractSendChannel.offerInternal_11rb$(closure$element);
        if (offerResult === OFFER_SUCCESS) {
          cont.resumeWith_tl1gpc$(new Result(Unit));
          return;
        }
         else if (offerResult === OFFER_FAILED)
          continue loop;
        else if (Kotlin.isType(offerResult, Closed)) {
          this$AbstractSendChannel.helpClose_0(offerResult);
          var exception_0 = offerResult.sendException;
          cont.resumeWith_tl1gpc$(new Result(createFailure(exception_0)));
          return;
        }
         else {
          throw IllegalStateException_init(('offerInternal returned ' + offerResult.toString()).toString());
        }
      }
    };
  }
  function suspendAtomicCancellableCoroutine$lambda_0(closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl(intercepted(uCont), 0);
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  AbstractSendChannel.prototype.sendSuspend_0 = function (element, continuation) {
    return suspendAtomicCancellableCoroutine$lambda_0(AbstractSendChannel$sendSuspend$lambda(element, this))(continuation);
  };
  function AbstractSendChannel$enqueueSend$lambda(this$AbstractSendChannel) {
    return function () {
      return this$AbstractSendChannel.isBufferFull;
    };
  }
  AbstractSendChannel.prototype.enqueueSend_0 = function (send) {
    if (this.isBufferAlwaysFull) {
      var $this = this.queue_0;
      addLastIfPrev_s8xlln$break: do {
        var prev = $this._prev;
        if (Kotlin.isType(prev, ReceiveOrClosed))
          return prev;
        if (!true) {
          false;
          break addLastIfPrev_s8xlln$break;
        }
        $this.addLast_l2j9rm$(send);
        true;
      }
       while (false);
    }
     else {
      var $this_0 = this.queue_0;
      var addLastIfPrevAndIf_dzcug$result;
      addLastIfPrevAndIf_dzcug$break: do {
        var prev_0 = $this_0._prev;
        if (Kotlin.isType(prev_0, ReceiveOrClosed))
          return prev_0;
        if (!true) {
          addLastIfPrevAndIf_dzcug$result = false;
          break addLastIfPrevAndIf_dzcug$break;
        }
        if (!AbstractSendChannel$enqueueSend$lambda(this)()) {
          addLastIfPrevAndIf_dzcug$result = false;
          break addLastIfPrevAndIf_dzcug$break;
        }
        $this_0.addLast_l2j9rm$(send);
        addLastIfPrevAndIf_dzcug$result = true;
      }
       while (false);
      if (!addLastIfPrevAndIf_dzcug$result)
        return ENQUEUE_FAILED;
    }
    return null;
  };
  AbstractSendChannel.prototype.close_dbl4no$$default = function (cause) {
    var tmp$;
    var closed = new Closed(cause);
    var $this = this.queue_0;
    var addLastIfPrev_s8xlln$result;
    addLastIfPrev_s8xlln$break: do {
      if (!!Kotlin.isType($this._prev, Closed)) {
        addLastIfPrev_s8xlln$result = false;
        break addLastIfPrev_s8xlln$break;
      }
      $this.addLast_l2j9rm$(closed);
      addLastIfPrev_s8xlln$result = true;
    }
     while (false);
    var closeAdded = addLastIfPrev_s8xlln$result;
    if (!closeAdded) {
      var actualClosed = Kotlin.isType(tmp$ = this.queue_0._prev, Closed) ? tmp$ : throwCCE();
      this.helpClose_0(actualClosed);
      return false;
    }
    this.helpClose_0(closed);
    this.invokeOnCloseHandler_0(cause);
    return true;
  };
  AbstractSendChannel.prototype.invokeOnCloseHandler_0 = function (cause) {
    var tmp$;
    var handler = this.onCloseHandler_0;
    if (handler !== null && handler !== HANDLER_INVOKED && function (scope) {
      return scope.onCloseHandler_0 === handler ? function () {
        scope.onCloseHandler_0 = HANDLER_INVOKED;
        return true;
      }() : false;
    }(this)) {
      (typeof (tmp$ = handler) === 'function' ? tmp$ : throwCCE())(cause);
    }
  };
  AbstractSendChannel.prototype.invokeOnClose_f05bi3$ = function (handler) {
    if (!function (scope) {
      return scope.onCloseHandler_0 == null ? function () {
        scope.onCloseHandler_0 = handler;
        return true;
      }() : false;
    }(this)) {
      var value = this.onCloseHandler_0;
      if (value === HANDLER_INVOKED) {
        throw IllegalStateException_init('Another handler was already registered and successfully invoked');
      }
      throw IllegalStateException_init('Another handler was already registered: ' + toString(value));
    }
     else {
      var closedToken = this.closedForSend_0;
      if (closedToken != null && function (scope) {
        return scope.onCloseHandler_0 === handler ? function () {
          scope.onCloseHandler_0 = HANDLER_INVOKED;
          return true;
        }() : false;
      }(this)) {
        handler(closedToken.closeCause);
      }
    }
  };
  AbstractSendChannel.prototype.helpClose_0 = function (closed) {
    var tmp$;
    while (true) {
      var previous = closed._prev;
      if (Kotlin.isType(previous, LinkedListHead) || !Kotlin.isType(previous, Receive)) {
        break;
      }
      if (!previous.remove()) {
        previous.helpRemove();
        continue;
      }
      Kotlin.isType(tmp$ = previous, Receive) ? tmp$ : throwCCE();
      previous.resumeReceiveClosed_1zqbm$(closed);
    }
    this.onClosedIdempotent_l2j9rm$(closed);
  };
  AbstractSendChannel.prototype.onClosedIdempotent_l2j9rm$ = function (closed) {
  };
  AbstractSendChannel.prototype.takeFirstReceiveOrPeekClosed = function () {
    var $this = this.queue_0;
    var removeFirstIfIsInstanceOfOrPeekIf_14urrv$result;
    removeFirstIfIsInstanceOfOrPeekIf_14urrv$break: do {
      var next = $this._next;
      if (next === $this) {
        removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = null;
        break removeFirstIfIsInstanceOfOrPeekIf_14urrv$break;
      }
      if (!Kotlin.isType(next, ReceiveOrClosed)) {
        removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = null;
        break removeFirstIfIsInstanceOfOrPeekIf_14urrv$break;
      }
      if (Kotlin.isType(next, Closed)) {
        removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = next;
        break removeFirstIfIsInstanceOfOrPeekIf_14urrv$break;
      }
      if (!next.remove()) {
        var message = 'Should remove';
        throw IllegalStateException_init(message.toString());
      }
      removeFirstIfIsInstanceOfOrPeekIf_14urrv$result = next;
    }
     while (false);
    return removeFirstIfIsInstanceOfOrPeekIf_14urrv$result;
  };
  AbstractSendChannel.prototype.describeTryOffer_0 = function (element) {
    return new AbstractSendChannel$TryOfferDesc(element, this.queue_0);
  };
  function AbstractSendChannel$TryOfferDesc(element, queue) {
    RemoveFirstDesc.call(this, queue);
    this.element = element;
    this.resumeToken = null;
  }
  AbstractSendChannel$TryOfferDesc.prototype.failure_ru8hrx$ = function (affected, next) {
    if (!Kotlin.isType(affected, ReceiveOrClosed))
      return OFFER_FAILED;
    if (Kotlin.isType(affected, Closed))
      return affected;
    return null;
  };
  AbstractSendChannel$TryOfferDesc.prototype.validatePrepared_11rb$ = function (node) {
    var tmp$;
    tmp$ = node.tryResumeReceive_19pj23$(this.element, this);
    if (tmp$ == null) {
      return false;
    }
    var token = tmp$;
    this.resumeToken = token;
    return true;
  };
  AbstractSendChannel$TryOfferDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'TryOfferDesc', interfaces: [RemoveFirstDesc]};
  function AbstractSendChannel$TryEnqueueSendDesc($outer, element, select, block) {
    this.$outer = $outer;
    AddLastDesc.call(this, this.$outer.queue_0, new AbstractSendChannel$SendSelect(element, this.$outer, select, block));
  }
  AbstractSendChannel$TryEnqueueSendDesc.prototype.failure_ru8hrx$ = function (affected, next) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(affected, ReceiveOrClosed)) {
      return (tmp$_0 = Kotlin.isType(tmp$ = affected, Closed) ? tmp$ : null) != null ? tmp$_0 : ENQUEUE_FAILED;
    }
    return null;
  };
  AbstractSendChannel$TryEnqueueSendDesc.prototype.onPrepare_bpl3tg$ = function (affected, next) {
    if (!this.$outer.isBufferFull)
      return ENQUEUE_FAILED;
    return AddLastDesc.prototype.onPrepare_bpl3tg$.call(this, affected, next);
  };
  AbstractSendChannel$TryEnqueueSendDesc.prototype.finishOnSuccess_bpl3tg$ = function (affected, next) {
    AddLastDesc.prototype.finishOnSuccess_bpl3tg$.call(this, affected, next);
    this.node.disposeOnSelect();
  };
  AbstractSendChannel$TryEnqueueSendDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'TryEnqueueSendDesc', interfaces: [AddLastDesc]};
  function AbstractSendChannel$get_AbstractSendChannel$onSend$ObjectLiteral(this$AbstractSendChannel) {
    this.this$AbstractSendChannel = this$AbstractSendChannel;
  }
  AbstractSendChannel$get_AbstractSendChannel$onSend$ObjectLiteral.prototype.registerSelectClause2_rol3se$ = function (select, param, block) {
    this.this$AbstractSendChannel.registerSelectSend_0(select, param, block);
  };
  AbstractSendChannel$get_AbstractSendChannel$onSend$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [SelectClause2]};
  Object.defineProperty(AbstractSendChannel.prototype, 'onSend', {get: function () {
    return new AbstractSendChannel$get_AbstractSendChannel$onSend$ObjectLiteral(this);
  }});
  AbstractSendChannel.prototype.registerSelectSend_0 = function (select, element, block) {
    var tmp$;
    while (true) {
      if (select.isSelected)
        return;
      if (this.isFull) {
        var enqueueOp = new AbstractSendChannel$TryEnqueueSendDesc(this, element, select, block);
        tmp$ = select.performAtomicIfNotSelected_6q0pxr$(enqueueOp);
        if (tmp$ == null) {
          return;
        }
        var enqueueResult = tmp$;
        if (enqueueResult === ALREADY_SELECTED)
          return;
        else if (enqueueResult !== ENQUEUE_FAILED)
          if (Kotlin.isType(enqueueResult, Closed))
            throw recoverStackTrace_0(enqueueResult.sendException);
          else {
            throw IllegalStateException_init(('performAtomicIfNotSelected(TryEnqueueSendDesc) returned ' + enqueueResult.toString()).toString());
          }
      }
       else {
        var offerResult = this.offerSelectInternal_ys5ufj$(element, select);
        if (offerResult === ALREADY_SELECTED)
          return;
        else if (offerResult !== OFFER_FAILED)
          if (offerResult === OFFER_SUCCESS) {
            startCoroutineUnintercepted_0(block, this, select.completion);
            return;
          }
           else if (Kotlin.isType(offerResult, Closed))
            throw recoverStackTrace_0(offerResult.sendException);
          else {
            throw IllegalStateException_init(('offerSelectInternal returned ' + offerResult.toString()).toString());
          }
      }
    }
  };
  AbstractSendChannel.prototype.toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '{' + this.queueDebugStateString_0 + '}' + this.bufferDebugString;
  };
  Object.defineProperty(AbstractSendChannel.prototype, 'queueDebugStateString_0', {get: function () {
    var tmp$;
    var head = this.queue_0._next;
    if (head === this.queue_0)
      return 'EmptyQueue';
    if (Kotlin.isType(head, Closed))
      tmp$ = head.toString();
    else if (Kotlin.isType(head, Receive))
      tmp$ = 'ReceiveQueued';
    else if (Kotlin.isType(head, Send))
      tmp$ = 'SendQueued';
    else
      tmp$ = 'UNEXPECTED:' + head;
    var result = tmp$;
    var tail = this.queue_0._prev;
    if (tail !== head) {
      result += ',queueSize=' + this.countQueueSize_0();
      if (Kotlin.isType(tail, Closed))
        result += ',closedForSend=' + tail;
    }
    return result;
  }});
  AbstractSendChannel.prototype.countQueueSize_0 = function () {
    var size = {v: 0};
    var $this = this.queue_0;
    var cur = $this._next;
    while (!equals(cur, $this)) {
      if (Kotlin.isType(cur, LinkedListNode)) {
        size.v = size.v + 1 | 0;
      }
      cur = cur._next;
    }
    return size.v;
  };
  Object.defineProperty(AbstractSendChannel.prototype, 'bufferDebugString', {get: function () {
    return '';
  }});
  function AbstractSendChannel$SendSelect(pollResult, channel, select, block) {
    LinkedListNode.call(this);
    this.pollResult_m5nr4l$_0 = pollResult;
    this.channel = channel;
    this.select = select;
    this.block = block;
  }
  Object.defineProperty(AbstractSendChannel$SendSelect.prototype, 'pollResult', {get: function () {
    return this.pollResult_m5nr4l$_0;
  }});
  AbstractSendChannel$SendSelect.prototype.tryResumeSend_s8jyv4$ = function (idempotent) {
    return this.select.trySelect_s8jyv4$(idempotent) ? SELECT_STARTED : null;
  };
  AbstractSendChannel$SendSelect.prototype.completeResumeSend_za3rmp$ = function (token) {
    if (!(token === SELECT_STARTED)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    startCoroutine_0(this.block, this.channel, this.select.completion);
  };
  AbstractSendChannel$SendSelect.prototype.disposeOnSelect = function () {
    this.select.disposeOnSelect_rvfg84$(this);
  };
  AbstractSendChannel$SendSelect.prototype.dispose = function () {
    this.remove();
  };
  AbstractSendChannel$SendSelect.prototype.resumeSendClosed_1zqbm$ = function (closed) {
    if (this.select.trySelect_s8jyv4$(null))
      this.select.resumeSelectCancellableWithException_tcv7n7$(closed.sendException);
  };
  AbstractSendChannel$SendSelect.prototype.toString = function () {
    return 'SendSelect(' + toString(this.pollResult) + ')[' + this.channel + ', ' + this.select + ']';
  };
  AbstractSendChannel$SendSelect.$metadata$ = {kind: Kind_CLASS, simpleName: 'SendSelect', interfaces: [DisposableHandle, Send, LinkedListNode]};
  function AbstractSendChannel$SendBuffered(element) {
    LinkedListNode.call(this);
    this.element = element;
  }
  Object.defineProperty(AbstractSendChannel$SendBuffered.prototype, 'pollResult', {get: function () {
    return this.element;
  }});
  AbstractSendChannel$SendBuffered.prototype.tryResumeSend_s8jyv4$ = function (idempotent) {
    return SEND_RESUMED;
  };
  AbstractSendChannel$SendBuffered.prototype.completeResumeSend_za3rmp$ = function (token) {
    if (!(token === SEND_RESUMED)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
  };
  AbstractSendChannel$SendBuffered.prototype.resumeSendClosed_1zqbm$ = function (closed) {
  };
  AbstractSendChannel$SendBuffered.$metadata$ = {kind: Kind_CLASS, simpleName: 'SendBuffered', interfaces: [Send, LinkedListNode]};
  AbstractSendChannel.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractSendChannel', interfaces: [SendChannel]};
  function AbstractChannel() {
    AbstractSendChannel.call(this);
  }
  AbstractChannel.prototype.pollInternal = function () {
    var tmp$;
    while (true) {
      tmp$ = this.takeFirstSendOrPeekClosed_0();
      if (tmp$ == null) {
        return POLL_FAILED;
      }
      var send = tmp$;
      var token = send.tryResumeSend_s8jyv4$(null);
      if (token != null) {
        send.completeResumeSend_za3rmp$(token);
        return send.pollResult;
      }
    }
  };
  AbstractChannel.prototype.pollSelectInternal_y5yyj0$ = function (select) {
    var pollOp = this.describeTryPoll_0();
    var failure = select.performAtomicTrySelect_6q0pxr$(pollOp);
    if (failure != null)
      return failure;
    var send = pollOp.result;
    send.completeResumeSend_za3rmp$(ensureNotNull(pollOp.resumeToken));
    return pollOp.pollResult;
  };
  Object.defineProperty(AbstractChannel.prototype, 'hasReceiveOrClosed_0', {get: function () {
    return Kotlin.isType(this.queue_0._next, ReceiveOrClosed);
  }});
  Object.defineProperty(AbstractChannel.prototype, 'isClosedForReceive', {get: function () {
    return this.closedForReceive_0 != null && this.isBufferEmpty;
  }});
  Object.defineProperty(AbstractChannel.prototype, 'isEmpty', {get: function () {
    return !Kotlin.isType(this.queue_0._next, Send) && this.isBufferEmpty;
  }});
  AbstractChannel.prototype.receive = function (continuation) {
    var result = this.pollInternal();
    if (result !== POLL_FAILED)
      return this.receiveResult_0(result);
    return this.receiveSuspend_0(continuation);
  };
  AbstractChannel.prototype.receiveResult_0 = function (result) {
    var tmp$;
    if (Kotlin.isType(result, Closed))
      throw recoverStackTrace_0(result.receiveException);
    return (tmp$ = result) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  function AbstractChannel$receiveSuspend$lambda(this$AbstractChannel) {
    return function (cont) {
      var tmp$, tmp$_0;
      var receive = new AbstractChannel$ReceiveElement(Kotlin.isType(tmp$ = cont, CancellableContinuation) ? tmp$ : throwCCE(), false);
      while (true) {
        if (this$AbstractChannel.enqueueReceive_0(receive)) {
          this$AbstractChannel.removeReceiveOnCancel_0(cont, receive);
          return;
        }
        var result = this$AbstractChannel.pollInternal();
        if (Kotlin.isType(result, Closed)) {
          var exception = result.receiveException;
          cont.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          return;
        }
        if (result !== POLL_FAILED) {
          var value = (tmp$_0 = result) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
          cont.resumeWith_tl1gpc$(new Result(value));
          return;
        }
      }
      return Unit;
    };
  }
  AbstractChannel.prototype.receiveSuspend_0 = function (continuation) {
    return suspendAtomicCancellableCoroutine$lambda_0(AbstractChannel$receiveSuspend$lambda(this))(continuation);
  };
  function AbstractChannel$enqueueReceive$lambda(this$AbstractChannel) {
    return function () {
      return this$AbstractChannel.isBufferEmpty;
    };
  }
  AbstractChannel.prototype.enqueueReceive_0 = function (receive) {
    var tmp$;
    if (this.isBufferAlwaysEmpty) {
      var $this = this.queue_0;
      var addLastIfPrev_s8xlln$result;
      addLastIfPrev_s8xlln$break: do {
        if (!!Kotlin.isType($this._prev, Send)) {
          addLastIfPrev_s8xlln$result = false;
          break addLastIfPrev_s8xlln$break;
        }
        $this.addLast_l2j9rm$(receive);
        addLastIfPrev_s8xlln$result = true;
      }
       while (false);
      tmp$ = addLastIfPrev_s8xlln$result;
    }
     else {
      var $this_0 = this.queue_0;
      var addLastIfPrevAndIf_dzcug$result;
      addLastIfPrevAndIf_dzcug$break: do {
        if (!!Kotlin.isType($this_0._prev, Send)) {
          addLastIfPrevAndIf_dzcug$result = false;
          break addLastIfPrevAndIf_dzcug$break;
        }
        if (!AbstractChannel$enqueueReceive$lambda(this)()) {
          addLastIfPrevAndIf_dzcug$result = false;
          break addLastIfPrevAndIf_dzcug$break;
        }
        $this_0.addLast_l2j9rm$(receive);
        addLastIfPrevAndIf_dzcug$result = true;
      }
       while (false);
      tmp$ = addLastIfPrevAndIf_dzcug$result;
    }
    var result = tmp$;
    if (result)
      this.onReceiveEnqueued();
    return result;
  };
  AbstractChannel.prototype.receiveOrNull = function (continuation) {
    var result = this.pollInternal();
    if (result !== POLL_FAILED)
      return this.receiveOrNullResult_0(result);
    return this.receiveOrNullSuspend_0(continuation);
  };
  AbstractChannel.prototype.receiveOrNullResult_0 = function (result) {
    var tmp$;
    if (Kotlin.isType(result, Closed)) {
      if (result.closeCause != null)
        throw recoverStackTrace_0(result.closeCause);
      return null;
    }
    return (tmp$ = result) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  function AbstractChannel$receiveOrNullSuspend$lambda(this$AbstractChannel) {
    return function (cont) {
      var tmp$;
      var receive = new AbstractChannel$ReceiveElement(cont, true);
      while (true) {
        if (this$AbstractChannel.enqueueReceive_0(receive)) {
          this$AbstractChannel.removeReceiveOnCancel_0(cont, receive);
          return;
        }
        var result = this$AbstractChannel.pollInternal();
        if (Kotlin.isType(result, Closed)) {
          if (result.closeCause == null) {
            cont.resumeWith_tl1gpc$(new Result(null));
          }
           else {
            var exception = result.closeCause;
            cont.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          }
          return;
        }
        if (result !== POLL_FAILED) {
          var value = (tmp$ = result) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
          cont.resumeWith_tl1gpc$(new Result(value));
          return;
        }
      }
      return Unit;
    };
  }
  AbstractChannel.prototype.receiveOrNullSuspend_0 = function (continuation) {
    return suspendAtomicCancellableCoroutine$lambda_0(AbstractChannel$receiveOrNullSuspend$lambda(this))(continuation);
  };
  AbstractChannel.prototype.poll = function () {
    var result = this.pollInternal();
    return result === POLL_FAILED ? null : this.receiveOrNullResult_0(result);
  };
  AbstractChannel.prototype.cancel = function () {
    this.cancel_dbl4no$(null);
  };
  AbstractChannel.prototype.cancel_dbl4no$$default = function (cause) {
    var $receiver = this.close_dbl4no$(cause);
    this.cleanupSendQueueOnCancel();
    return $receiver;
  };
  AbstractChannel.prototype.cleanupSendQueueOnCancel = function () {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = this.closedForSend_0) != null)
      tmp$_1 = tmp$;
    else {
      throw IllegalStateException_init('Cannot happen'.toString());
    }
    var closed = tmp$_1;
    while (true) {
      var tmp$_2;
      if ((tmp$_0 = this.takeFirstSendOrPeekClosed_0()) != null)
        tmp$_2 = tmp$_0;
      else {
        throw IllegalStateException_init('Cannot happen'.toString());
      }
      var send = tmp$_2;
      if (Kotlin.isType(send, Closed)) {
        if (!(send === closed)) {
          var message = 'Check failed.';
          throw IllegalStateException_init(message.toString());
        }
        return;
      }
      send.resumeSendClosed_1zqbm$(closed);
    }
  };
  AbstractChannel.prototype.iterator = function () {
    return new AbstractChannel$Itr(this);
  };
  AbstractChannel.prototype.describeTryPoll_0 = function () {
    return new AbstractChannel$TryPollDesc(this.queue_0);
  };
  function AbstractChannel$TryPollDesc(queue) {
    RemoveFirstDesc.call(this, queue);
    this.resumeToken = null;
    this.pollResult = null;
  }
  AbstractChannel$TryPollDesc.prototype.failure_ru8hrx$ = function (affected, next) {
    if (Kotlin.isType(affected, Closed))
      return affected;
    if (!Kotlin.isType(affected, Send))
      return POLL_FAILED;
    return null;
  };
  AbstractChannel$TryPollDesc.prototype.validatePrepared_11rb$ = function (node) {
    var tmp$, tmp$_0;
    tmp$ = node.tryResumeSend_s8jyv4$(this);
    if (tmp$ == null) {
      return false;
    }
    var token = tmp$;
    this.resumeToken = token;
    this.pollResult = (tmp$_0 = node.pollResult) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    return true;
  };
  AbstractChannel$TryPollDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'TryPollDesc', interfaces: [RemoveFirstDesc]};
  function AbstractChannel$TryEnqueueReceiveDesc($outer, select, block, nullOnClose) {
    this.$outer = $outer;
    AddLastDesc.call(this, this.$outer.queue_0, new AbstractChannel$ReceiveSelect(this.$outer, select, block, nullOnClose));
  }
  AbstractChannel$TryEnqueueReceiveDesc.prototype.failure_ru8hrx$ = function (affected, next) {
    if (Kotlin.isType(affected, Send))
      return ENQUEUE_FAILED;
    return null;
  };
  AbstractChannel$TryEnqueueReceiveDesc.prototype.onPrepare_bpl3tg$ = function (affected, next) {
    if (!this.$outer.isBufferEmpty)
      return ENQUEUE_FAILED;
    return AddLastDesc.prototype.onPrepare_bpl3tg$.call(this, affected, next);
  };
  AbstractChannel$TryEnqueueReceiveDesc.prototype.finishOnSuccess_bpl3tg$ = function (affected, next) {
    AddLastDesc.prototype.finishOnSuccess_bpl3tg$.call(this, affected, next);
    this.$outer.onReceiveEnqueued();
    this.node.removeOnSelectCompletion();
  };
  AbstractChannel$TryEnqueueReceiveDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'TryEnqueueReceiveDesc', interfaces: [AddLastDesc]};
  function AbstractChannel$get_AbstractChannel$onReceive$ObjectLiteral(this$AbstractChannel) {
    this.this$AbstractChannel = this$AbstractChannel;
  }
  AbstractChannel$get_AbstractChannel$onReceive$ObjectLiteral.prototype.registerSelectClause1_o3xas4$ = function (select, block) {
    this.this$AbstractChannel.registerSelectReceive_0(select, block);
  };
  AbstractChannel$get_AbstractChannel$onReceive$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [SelectClause1]};
  Object.defineProperty(AbstractChannel.prototype, 'onReceive', {get: function () {
    return new AbstractChannel$get_AbstractChannel$onReceive$ObjectLiteral(this);
  }});
  AbstractChannel.prototype.registerSelectReceive_0 = function (select, block) {
    var tmp$, tmp$_0, tmp$_1;
    while (true) {
      if (select.isSelected)
        return;
      if (this.isEmpty) {
        var enqueueOp = new AbstractChannel$TryEnqueueReceiveDesc(this, select, Kotlin.isType(tmp$ = block, SuspendFunction1) ? tmp$ : throwCCE(), false);
        tmp$_0 = select.performAtomicIfNotSelected_6q0pxr$(enqueueOp);
        if (tmp$_0 == null) {
          return;
        }
        var enqueueResult = tmp$_0;
        if (enqueueResult === ALREADY_SELECTED)
          return;
        else if (enqueueResult !== ENQUEUE_FAILED) {
          throw IllegalStateException_init(('performAtomicIfNotSelected(TryEnqueueReceiveDesc) returned ' + enqueueResult.toString()).toString());
        }
      }
       else {
        var pollResult = this.pollSelectInternal_y5yyj0$(select);
        if (pollResult === ALREADY_SELECTED)
          return;
        else if (pollResult !== POLL_FAILED)
          if (Kotlin.isType(pollResult, Closed))
            throw recoverStackTrace_0(pollResult.receiveException);
          else {
            startCoroutineUnintercepted_0(block, (tmp$_1 = pollResult) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE(), select.completion);
            return;
          }
      }
    }
  };
  function AbstractChannel$get_AbstractChannel$onReceiveOrNull$ObjectLiteral(this$AbstractChannel) {
    this.this$AbstractChannel = this$AbstractChannel;
  }
  AbstractChannel$get_AbstractChannel$onReceiveOrNull$ObjectLiteral.prototype.registerSelectClause1_o3xas4$ = function (select, block) {
    this.this$AbstractChannel.registerSelectReceiveOrNull_0(select, block);
  };
  AbstractChannel$get_AbstractChannel$onReceiveOrNull$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [SelectClause1]};
  Object.defineProperty(AbstractChannel.prototype, 'onReceiveOrNull', {get: function () {
    return new AbstractChannel$get_AbstractChannel$onReceiveOrNull$ObjectLiteral(this);
  }});
  AbstractChannel.prototype.registerSelectReceiveOrNull_0 = function (select, block) {
    var tmp$, tmp$_0;
    while (true) {
      if (select.isSelected)
        return;
      if (this.isEmpty) {
        var enqueueOp = new AbstractChannel$TryEnqueueReceiveDesc(this, select, block, true);
        tmp$ = select.performAtomicIfNotSelected_6q0pxr$(enqueueOp);
        if (tmp$ == null) {
          return;
        }
        var enqueueResult = tmp$;
        if (enqueueResult === ALREADY_SELECTED)
          return;
        else if (enqueueResult !== ENQUEUE_FAILED) {
          throw IllegalStateException_init(('performAtomicIfNotSelected(TryEnqueueReceiveDesc) returned ' + enqueueResult.toString()).toString());
        }
      }
       else {
        var pollResult = this.pollSelectInternal_y5yyj0$(select);
        if (pollResult === ALREADY_SELECTED)
          return;
        else if (pollResult !== POLL_FAILED)
          if (Kotlin.isType(pollResult, Closed))
            if (pollResult.closeCause == null) {
              if (select.trySelect_s8jyv4$(null))
                startCoroutineUnintercepted_0(block, null, select.completion);
              return;
            }
             else {
              throw recoverStackTrace_0(pollResult.closeCause);
            }
           else {
            startCoroutineUnintercepted_0(block, (tmp$_0 = pollResult) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE(), select.completion);
            return;
          }
      }
    }
  };
  AbstractChannel.prototype.takeFirstReceiveOrPeekClosed = function () {
    var $receiver = AbstractSendChannel.prototype.takeFirstReceiveOrPeekClosed.call(this);
    if ($receiver != null && !Kotlin.isType($receiver, Closed))
      this.onReceiveDequeued();
    return $receiver;
  };
  AbstractChannel.prototype.onReceiveEnqueued = function () {
  };
  AbstractChannel.prototype.onReceiveDequeued = function () {
  };
  AbstractChannel.prototype.removeReceiveOnCancel_0 = function (cont, receive) {
    cont.invokeOnCancellation_f05bi3$(new AbstractChannel$RemoveReceiveOnCancel(this, receive));
  };
  function AbstractChannel$RemoveReceiveOnCancel($outer, receive) {
    this.$outer = $outer;
    CancelHandler.call(this);
    this.receive_0 = receive;
  }
  AbstractChannel$RemoveReceiveOnCancel.prototype.invoke = function (cause) {
    if (this.receive_0.remove())
      this.$outer.onReceiveDequeued();
  };
  AbstractChannel$RemoveReceiveOnCancel.prototype.toString = function () {
    return 'RemoveReceiveOnCancel[' + this.receive_0 + ']';
  };
  AbstractChannel$RemoveReceiveOnCancel.$metadata$ = {kind: Kind_CLASS, simpleName: 'RemoveReceiveOnCancel', interfaces: [CancelHandler]};
  function AbstractChannel$Itr(channel) {
    this.channel = channel;
    this.result = POLL_FAILED;
  }
  AbstractChannel$Itr.prototype.hasNext = function (continuation) {
    if (this.result !== POLL_FAILED)
      return this.hasNextResult_0(this.result);
    this.result = this.channel.pollInternal();
    if (this.result !== POLL_FAILED)
      return this.hasNextResult_0(this.result);
    return this.hasNextSuspend_0(continuation);
  };
  AbstractChannel$Itr.prototype.hasNextResult_0 = function (result) {
    if (Kotlin.isType(result, Closed)) {
      if (result.closeCause != null)
        throw recoverStackTrace_0(result.receiveException);
      return false;
    }
    return true;
  };
  function AbstractChannel$Itr$hasNextSuspend$lambda(this$Itr) {
    return function (cont) {
      var receive = new AbstractChannel$ReceiveHasNext(this$Itr, cont);
      while (true) {
        if (this$Itr.channel.enqueueReceive_0(receive)) {
          this$Itr.channel.removeReceiveOnCancel_0(cont, receive);
          return;
        }
        var result = this$Itr.channel.pollInternal();
        this$Itr.result = result;
        if (Kotlin.isType(result, Closed)) {
          if (result.closeCause == null) {
            cont.resumeWith_tl1gpc$(new Result(false));
          }
           else {
            var exception = result.receiveException;
            cont.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          }
          return;
        }
        if (result !== POLL_FAILED) {
          cont.resumeWith_tl1gpc$(new Result(true));
          return;
        }
      }
      return Unit;
    };
  }
  AbstractChannel$Itr.prototype.hasNextSuspend_0 = function (continuation) {
    return suspendAtomicCancellableCoroutine$lambda_0(AbstractChannel$Itr$hasNextSuspend$lambda(this))(continuation);
  };
  AbstractChannel$Itr.prototype.next = function (continuation) {
    var tmp$;
    var result = this.result;
    if (Kotlin.isType(result, Closed))
      throw recoverStackTrace_0(result.receiveException);
    if (result !== POLL_FAILED) {
      this.result = POLL_FAILED;
      return (tmp$ = result) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    }
    return this.channel.receive(continuation);
  };
  AbstractChannel$Itr.$metadata$ = {kind: Kind_CLASS, simpleName: 'Itr', interfaces: [ChannelIterator]};
  function AbstractChannel$ReceiveElement(cont, nullOnClose) {
    Receive.call(this);
    this.cont = cont;
    this.nullOnClose = nullOnClose;
  }
  AbstractChannel$ReceiveElement.prototype.tryResumeReceive_19pj23$ = function (value, idempotent) {
    return this.cont.tryResume_19pj23$(value, idempotent);
  };
  AbstractChannel$ReceiveElement.prototype.completeResumeReceive_za3rmp$ = function (token) {
    this.cont.completeResume_za3rmp$(token);
  };
  AbstractChannel$ReceiveElement.prototype.resumeReceiveClosed_1zqbm$ = function (closed) {
    if (closed.closeCause == null && this.nullOnClose) {
      this.cont.resumeWith_tl1gpc$(new Result(null));
    }
     else {
      var $receiver = this.cont;
      var exception = closed.receiveException;
      $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
    }
  };
  AbstractChannel$ReceiveElement.prototype.toString = function () {
    return 'ReceiveElement[' + this.cont + ',nullOnClose=' + this.nullOnClose + ']';
  };
  AbstractChannel$ReceiveElement.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReceiveElement', interfaces: [Receive]};
  function AbstractChannel$ReceiveHasNext(iterator, cont) {
    Receive.call(this);
    this.iterator = iterator;
    this.cont = cont;
  }
  AbstractChannel$ReceiveHasNext.prototype.tryResumeReceive_19pj23$ = function (value, idempotent) {
    var token = this.cont.tryResume_19pj23$(true, idempotent);
    if (token != null) {
      if (idempotent != null)
        return new AbstractChannel$IdempotentTokenValue(token, value);
      this.iterator.result = value;
    }
    return token;
  };
  AbstractChannel$ReceiveHasNext.prototype.completeResumeReceive_za3rmp$ = function (token) {
    if (Kotlin.isType(token, AbstractChannel$IdempotentTokenValue)) {
      this.iterator.result = token.value;
      this.cont.completeResume_za3rmp$(token.token);
    }
     else
      this.cont.completeResume_za3rmp$(token);
  };
  AbstractChannel$ReceiveHasNext.prototype.resumeReceiveClosed_1zqbm$ = function (closed) {
    var tmp$;
    if (closed.closeCause == null) {
      tmp$ = this.cont.tryResume_19pj23$(false);
    }
     else {
      tmp$ = this.cont.tryResumeWithException_tcv7n7$(recoverStackTrace(closed.receiveException, this.cont));
    }
    var token = tmp$;
    if (token != null) {
      this.iterator.result = closed;
      this.cont.completeResume_za3rmp$(token);
    }
  };
  AbstractChannel$ReceiveHasNext.prototype.toString = function () {
    return 'ReceiveHasNext[' + this.cont + ']';
  };
  AbstractChannel$ReceiveHasNext.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReceiveHasNext', interfaces: [Receive]};
  function AbstractChannel$ReceiveSelect($outer, select, block, nullOnClose) {
    this.$outer = $outer;
    Receive.call(this);
    this.select = select;
    this.block = block;
    this.nullOnClose = nullOnClose;
  }
  AbstractChannel$ReceiveSelect.prototype.tryResumeReceive_19pj23$ = function (value, idempotent) {
    return this.select.trySelect_s8jyv4$(idempotent) ? value != null ? value : NULL_VALUE : null;
  };
  AbstractChannel$ReceiveSelect.prototype.completeResumeReceive_za3rmp$ = function (token) {
    var tmp$;
    var value = (tmp$ = token === NULL_VALUE ? null : token) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    startCoroutine_0(this.block, value, this.select.completion);
  };
  AbstractChannel$ReceiveSelect.prototype.resumeReceiveClosed_1zqbm$ = function (closed) {
    if (this.select.trySelect_s8jyv4$(null)) {
      if (closed.closeCause == null && this.nullOnClose) {
        startCoroutine_0(this.block, null, this.select.completion);
      }
       else {
        this.select.resumeSelectCancellableWithException_tcv7n7$(closed.receiveException);
      }
    }
  };
  AbstractChannel$ReceiveSelect.prototype.removeOnSelectCompletion = function () {
    this.select.disposeOnSelect_rvfg84$(this);
  };
  AbstractChannel$ReceiveSelect.prototype.dispose = function () {
    if (this.remove())
      this.$outer.onReceiveDequeued();
  };
  AbstractChannel$ReceiveSelect.prototype.toString = function () {
    return 'ReceiveSelect[' + this.select + ',nullOnClose=' + this.nullOnClose + ']';
  };
  AbstractChannel$ReceiveSelect.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReceiveSelect', interfaces: [DisposableHandle, Receive]};
  function AbstractChannel$IdempotentTokenValue(token, value) {
    this.token = token;
    this.value = value;
  }
  AbstractChannel$IdempotentTokenValue.$metadata$ = {kind: Kind_CLASS, simpleName: 'IdempotentTokenValue', interfaces: []};
  AbstractChannel.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractChannel', interfaces: [Channel, AbstractSendChannel]};
  var OFFER_SUCCESS;
  var OFFER_FAILED;
  var POLL_FAILED;
  var ENQUEUE_FAILED;
  var SELECT_STARTED;
  var NULL_VALUE;
  var CLOSE_RESUMED;
  var SEND_RESUMED;
  var HANDLER_INVOKED;
  function Send() {
  }
  Send.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Send', interfaces: []};
  function ReceiveOrClosed() {
  }
  ReceiveOrClosed.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ReceiveOrClosed', interfaces: []};
  function SendElement(pollResult, cont) {
    LinkedListNode.call(this);
    this.pollResult_vo6xxe$_0 = pollResult;
    this.cont = cont;
  }
  Object.defineProperty(SendElement.prototype, 'pollResult', {get: function () {
    return this.pollResult_vo6xxe$_0;
  }});
  SendElement.prototype.tryResumeSend_s8jyv4$ = function (idempotent) {
    return this.cont.tryResume_19pj23$(Unit, idempotent);
  };
  SendElement.prototype.completeResumeSend_za3rmp$ = function (token) {
    this.cont.completeResume_za3rmp$(token);
  };
  SendElement.prototype.resumeSendClosed_1zqbm$ = function (closed) {
    var $receiver = this.cont;
    var exception = closed.sendException;
    $receiver.resumeWith_tl1gpc$(new Result(createFailure(exception)));
  };
  SendElement.prototype.toString = function () {
    return 'SendElement(' + toString(this.pollResult) + ')[' + this.cont + ']';
  };
  SendElement.$metadata$ = {kind: Kind_CLASS, simpleName: 'SendElement', interfaces: [Send, LinkedListNode]};
  function Closed(closeCause) {
    LinkedListNode.call(this);
    this.closeCause = closeCause;
  }
  Object.defineProperty(Closed.prototype, 'sendException', {get: function () {
    var tmp$;
    return (tmp$ = this.closeCause) != null ? tmp$ : new ClosedSendChannelException(DEFAULT_CLOSE_MESSAGE);
  }});
  Object.defineProperty(Closed.prototype, 'receiveException', {get: function () {
    var tmp$;
    return (tmp$ = this.closeCause) != null ? tmp$ : new ClosedReceiveChannelException(DEFAULT_CLOSE_MESSAGE);
  }});
  Object.defineProperty(Closed.prototype, 'offerResult', {get: function () {
    return this;
  }});
  Object.defineProperty(Closed.prototype, 'pollResult', {get: function () {
    return this;
  }});
  Closed.prototype.tryResumeSend_s8jyv4$ = function (idempotent) {
    return CLOSE_RESUMED;
  };
  Closed.prototype.completeResumeSend_za3rmp$ = function (token) {
    if (!(token === CLOSE_RESUMED)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
  };
  Closed.prototype.tryResumeReceive_19pj23$ = function (value, idempotent) {
    return CLOSE_RESUMED;
  };
  Closed.prototype.completeResumeReceive_za3rmp$ = function (token) {
    if (!(token === CLOSE_RESUMED)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
  };
  Closed.prototype.resumeSendClosed_1zqbm$ = function (closed) {
    throw IllegalStateException_init('Should be never invoked'.toString());
  };
  Closed.prototype.toString = function () {
    return 'Closed[' + toString(this.closeCause) + ']';
  };
  Closed.$metadata$ = {kind: Kind_CLASS, simpleName: 'Closed', interfaces: [ReceiveOrClosed, Send, LinkedListNode]};
  function Receive() {
    LinkedListNode.call(this);
  }
  Object.defineProperty(Receive.prototype, 'offerResult', {get: function () {
    return OFFER_SUCCESS;
  }});
  Receive.$metadata$ = {kind: Kind_CLASS, simpleName: 'Receive', interfaces: [ReceiveOrClosed, LinkedListNode]};
  function ArrayChannel(capacity) {
    AbstractChannel.call(this);
    this.capacity = capacity;
    if (!(this.capacity >= 1)) {
      var message = 'ArrayChannel capacity must be at least 1, but ' + this.capacity + ' was specified';
      throw IllegalArgumentException_init(message.toString());
    }
    this.lock_0 = new NoOpLock();
    this.buffer_0 = Kotlin.newArray(this.capacity, null);
    this.head_0 = 0;
    this.size_0 = 0;
  }
  Object.defineProperty(ArrayChannel.prototype, 'isBufferAlwaysEmpty', {get: function () {
    return false;
  }});
  Object.defineProperty(ArrayChannel.prototype, 'isBufferEmpty', {get: function () {
    return this.size_0 === 0;
  }});
  Object.defineProperty(ArrayChannel.prototype, 'isBufferAlwaysFull', {get: function () {
    return false;
  }});
  Object.defineProperty(ArrayChannel.prototype, 'isBufferFull', {get: function () {
    return this.size_0 === this.capacity;
  }});
  ArrayChannel.prototype.offerInternal_11rb$ = function (element) {
    var receive = {v: null};
    var token = {v: null};
    action$break: do {
      var tmp$, tmp$_0;
      var size = this.size_0;
      if ((tmp$ = this.closedForSend_0) != null) {
        return tmp$;
      }
      if (size < this.capacity) {
        this.size_0 = size + 1 | 0;
        if (size === 0) {
          loop: while (true) {
            tmp$_0 = this.takeFirstReceiveOrPeekClosed();
            if (tmp$_0 == null) {
              break loop;
            }
            receive.v = tmp$_0;
            if (Kotlin.isType(receive.v, Closed)) {
              this.size_0 = size;
              return ensureNotNull(receive.v);
            }
            token.v = ensureNotNull(receive.v).tryResumeReceive_19pj23$(element, null);
            if (token.v != null) {
              this.size_0 = size;
              break action$break;
            }
          }
        }
        this.buffer_0[(this.head_0 + size | 0) % this.capacity] = element;
        return OFFER_SUCCESS;
      }
      return OFFER_FAILED;
    }
     while (false);
    ensureNotNull(receive.v).completeResumeReceive_za3rmp$(ensureNotNull(token.v));
    return ensureNotNull(receive.v).offerResult;
  };
  ArrayChannel.prototype.offerSelectInternal_ys5ufj$ = function (element, select) {
    var receive = {v: null};
    var token = {v: null};
    action$break: do {
      var tmp$;
      var size = this.size_0;
      if ((tmp$ = this.closedForSend_0) != null) {
        return tmp$;
      }
      if (size < this.capacity) {
        this.size_0 = size + 1 | 0;
        if (size === 0) {
          loop: while (true) {
            var offerOp = this.describeTryOffer_0(element);
            var failure = select.performAtomicTrySelect_6q0pxr$(offerOp);
            if (failure == null) {
              this.size_0 = size;
              receive.v = offerOp.result;
              token.v = offerOp.resumeToken;
              if (!(token.v != null)) {
                var message = 'Check failed.';
                throw IllegalStateException_init(message.toString());
              }
              break action$break;
            }
             else if (failure === OFFER_FAILED)
              break loop;
            else if (failure === ALREADY_SELECTED || Kotlin.isType(failure, Closed)) {
              this.size_0 = size;
              return failure;
            }
             else {
              throw IllegalStateException_init(('performAtomicTrySelect(describeTryOffer) returned ' + toString(failure)).toString());
            }
          }
        }
        if (!select.trySelect_s8jyv4$(null)) {
          this.size_0 = size;
          return ALREADY_SELECTED;
        }
        this.buffer_0[(this.head_0 + size | 0) % this.capacity] = element;
        return OFFER_SUCCESS;
      }
      return OFFER_FAILED;
    }
     while (false);
    ensureNotNull(receive.v).completeResumeReceive_za3rmp$(ensureNotNull(token.v));
    return ensureNotNull(receive.v).offerResult;
  };
  ArrayChannel.prototype.pollInternal = function () {
    var send = {v: null};
    var token = {v: null};
    var result = {v: null};
    var tmp$, tmp$_0;
    var size = this.size_0;
    if (size === 0)
      return (tmp$ = this.closedForSend_0) != null ? tmp$ : POLL_FAILED;
    result.v = this.buffer_0[this.head_0];
    this.buffer_0[this.head_0] = null;
    this.size_0 = size - 1 | 0;
    var replacement = POLL_FAILED;
    if (size === this.capacity) {
      loop: while (true) {
        tmp$_0 = this.takeFirstSendOrPeekClosed_0();
        if (tmp$_0 == null) {
          break;
        }
        send.v = tmp$_0;
        token.v = ensureNotNull(send.v).tryResumeSend_s8jyv4$(null);
        if (token.v != null) {
          replacement = ensureNotNull(send.v).pollResult;
          break loop;
        }
      }
    }
    if (replacement !== POLL_FAILED && !Kotlin.isType(replacement, Closed)) {
      this.size_0 = size;
      this.buffer_0[(this.head_0 + size | 0) % this.capacity] = replacement;
    }
    this.head_0 = (this.head_0 + 1 | 0) % this.capacity;
    if (token.v != null)
      ensureNotNull(send.v).completeResumeSend_za3rmp$(ensureNotNull(token.v));
    return result.v;
  };
  ArrayChannel.prototype.pollSelectInternal_y5yyj0$ = function (select) {
    var send = {v: null};
    var token = {v: null};
    var result = {v: null};
    var tmp$;
    var size = this.size_0;
    if (size === 0)
      return (tmp$ = this.closedForSend_0) != null ? tmp$ : POLL_FAILED;
    result.v = this.buffer_0[this.head_0];
    this.buffer_0[this.head_0] = null;
    this.size_0 = size - 1 | 0;
    var replacement = POLL_FAILED;
    if (size === this.capacity) {
      loop: while (true) {
        var pollOp = this.describeTryPoll_0();
        var failure = select.performAtomicTrySelect_6q0pxr$(pollOp);
        if (failure == null) {
          send.v = pollOp.result;
          token.v = pollOp.resumeToken;
          if (!(token.v != null)) {
            var message = 'Check failed.';
            throw IllegalStateException_init(message.toString());
          }
          replacement = ensureNotNull(send.v).pollResult;
          break loop;
        }
         else if (failure === POLL_FAILED)
          break loop;
        else if (failure === ALREADY_SELECTED) {
          this.size_0 = size;
          this.buffer_0[this.head_0] = result.v;
          return failure;
        }
         else if (Kotlin.isType(failure, Closed)) {
          send.v = failure;
          token.v = failure.tryResumeSend_s8jyv4$(null);
          replacement = failure;
          break loop;
        }
         else {
          throw IllegalStateException_init(('performAtomicTrySelect(describeTryOffer) returned ' + toString(failure)).toString());
        }
      }
    }
    if (replacement !== POLL_FAILED && !Kotlin.isType(replacement, Closed)) {
      this.size_0 = size;
      this.buffer_0[(this.head_0 + size | 0) % this.capacity] = replacement;
    }
     else {
      if (!select.trySelect_s8jyv4$(null)) {
        this.size_0 = size;
        this.buffer_0[this.head_0] = result.v;
        return ALREADY_SELECTED;
      }
    }
    this.head_0 = (this.head_0 + 1 | 0) % this.capacity;
    if (token.v != null)
      ensureNotNull(send.v).completeResumeSend_za3rmp$(ensureNotNull(token.v));
    return result.v;
  };
  ArrayChannel.prototype.cleanupSendQueueOnCancel = function () {
    var times = this.size_0;
    for (var index = 0; index < times; index++) {
      this.buffer_0[this.head_0] = 0;
      this.head_0 = (this.head_0 + 1 | 0) % this.capacity;
    }
    this.size_0 = 0;
    AbstractChannel.prototype.cleanupSendQueueOnCancel.call(this);
  };
  Object.defineProperty(ArrayChannel.prototype, 'bufferDebugString', {get: function () {
    return '(buffer:capacity=' + this.buffer_0.length + ',size=' + this.size_0 + ')';
  }});
  ArrayChannel.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayChannel', interfaces: [AbstractChannel]};
  function BroadcastCoroutine(parentContext, _channel, active) {
    AbstractCoroutine.call(this, parentContext, active);
    this._channel_0 = _channel;
  }
  function BroadcastChannel() {
  }
  function SendChannel() {
  }
  SendChannel.prototype.close_dbl4no$ = function (cause, callback$default) {
    if (cause === void 0)
      cause = null;
    return callback$default ? callback$default(cause) : this.close_dbl4no$$default(cause);
  };
  SendChannel.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SendChannel', interfaces: []};
  function ReceiveChannel() {
  }
  ReceiveChannel.prototype.cancel0 = function () {
    return this.cancel_dbl4no$(null);
  };
  ReceiveChannel.prototype.cancel_dbl4no$ = function (cause, callback$default) {
    if (cause === void 0)
      cause = null;
    return callback$default ? callback$default(cause) : this.cancel_dbl4no$$default(cause);
  };
  ReceiveChannel.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ReceiveChannel', interfaces: []};
  function ChannelIterator() {
  }
  ChannelIterator.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'ChannelIterator', interfaces: []};
  function Channel() {
    Channel$Factory_getInstance();
  }
  function Channel$Factory() {
    Channel$Factory_instance = this;
    this.UNLIMITED = 2147483647;
    this.RENDEZVOUS = 0;
    this.CONFLATED = -1;
  }
  Channel$Factory.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Factory', interfaces: []};
  var Channel$Factory_instance = null;
  function Channel$Factory_getInstance() {
    if (Channel$Factory_instance === null) {
      new Channel$Factory();
    }
    return Channel$Factory_instance;
  }
  Channel.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Channel', interfaces: [ReceiveChannel, SendChannel]};
  function Channel_0(capacity) {
    if (capacity === void 0)
      capacity = 0;
    switch (capacity) {
      case 0:
        return new RendezvousChannel();
      case 2147483647:
        return new LinkedListChannel();
      case -1:
        return new ConflatedChannel();
      default:return new ArrayChannel(capacity);
    }
  }
  function ClosedSendChannelException(message) {
    CancellationException.call(this, message);
    this.name = 'ClosedSendChannelException';
  }
  ClosedSendChannelException.$metadata$ = {kind: Kind_CLASS, simpleName: 'ClosedSendChannelException', interfaces: [CancellationException]};
  function ClosedReceiveChannelException(message) {
    NoSuchElementException.call(this, message);
    this.name = 'ClosedReceiveChannelException';
  }
  ClosedReceiveChannelException.$metadata$ = {kind: Kind_CLASS, simpleName: 'ClosedReceiveChannelException', interfaces: [NoSuchElementException]};
  function ChannelCoroutine(parentContext, _channel, active) {
    AbstractCoroutine.call(this, parentContext, active);
    this._channel_0 = _channel;
  }
  var DEFAULT_CLOSE_MESSAGE;
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.consumeEach_ur1qrk$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    return function ($receiver, action, continuation) {
      var channel = $receiver.openSubscription();
      try {
        var tmp$;
        tmp$ = channel.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var element = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          action(element);
        }
      }
      finally {
        channel.cancel();
      }
      return Unit;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.consumeEach_fsi0yh$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, action, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          action(e);
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      return Unit;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.consumeEachIndexed_pji9r4$', wrapFunction(function () {
    var IndexedValue_init = Kotlin.kotlin.collections.IndexedValue;
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, action, continuation) {
      var index = {v: 0};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var tmp$_0;
          action(new IndexedValue_init((tmp$_0 = index.v, index.v = tmp$_0 + 1 | 0, tmp$_0), e));
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.elementAtOrElse_m7muas$', wrapFunction(function () {
    var Throwable = Error;
    return function ($receiver, index, defaultValue, continuation) {
      var cause = null;
      try {
        var tmp$, tmp$_0;
        if (index < 0)
          return defaultValue(index);
        var count = 0;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var element = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (index === (tmp$_0 = count, count = tmp$_0 + 1 | 0, tmp$_0))
            return element;
        }
        return defaultValue(index);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          cause = e;
          throw e;
        }
         else
          throw e;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.find_4c38lx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      firstOrNull$break: do {
        var cause = null;
        try {
          var tmp$;
          tmp$ = $receiver.iterator();
          while (true) {
            Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
            if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
              break;
            Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
            var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
            if (predicate(e)) {
              Kotlin.setCoroutineResult(e, Kotlin.coroutineReceiver());
              break firstOrNull$break;
            }
          }
        }
         catch (e_0) {
          if (Kotlin.isType(e_0, Throwable)) {
            cause = e_0;
            throw e_0;
          }
           else
            throw e_0;
        }
        finally {
          $receiver.cancel_dbl4no$(cause);
        }
        Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
        Kotlin.setCoroutineResult(null, Kotlin.coroutineReceiver());
      }
       while (false);
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.findLast_4c38lx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      var last = {v: null};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e)) {
            last.v = e;
          }
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      Kotlin.setCoroutineResult(last.v, Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.first_4c38lx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e))
            return e;
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      throw new NoSuchElementException_init('ReceiveChannel contains no element matching the predicate.');
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.firstOrNull_4c38lx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e))
            return e;
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return null;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.indexOfFirst_4c38lx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      var index = {v: 0};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e))
            return index.v;
          index.v = index.v + 1 | 0;
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return -1;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.indexOfLast_4c38lx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      var lastIndex = {v: -1};
      var index = {v: 0};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e))
            lastIndex.v = index.v;
          index.v = index.v + 1 | 0;
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return lastIndex.v;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.last_4c38lx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      var tmp$_0;
      var last = {v: null};
      var found = {v: false};
      var cause = null;
      try {
        var tmp$_1;
        tmp$_1 = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$_1.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$_1.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e)) {
            last.v = e;
            found.v = true;
          }
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      if (!found.v)
        throw new NoSuchElementException_init('ReceiveChannel contains no element matching the predicate.');
      return (tmp$_0 = last.v) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.lastOrNull_4c38lx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      var last = {v: null};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e)) {
            last.v = e;
          }
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return last.v;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.single_4c38lx$', wrapFunction(function () {
    var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
    var Unit = Kotlin.kotlin.Unit;
    var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      var tmp$_0;
      var single = {v: null};
      var found = {v: false};
      var cause = null;
      try {
        var tmp$_1;
        tmp$_1 = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$_1.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$_1.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e)) {
            if (found.v)
              throw IllegalArgumentException_init('ReceiveChannel contains more than one matching element.');
            single.v = e;
            found.v = true;
          }
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      if (!found.v)
        throw new NoSuchElementException_init('ReceiveChannel contains no element matching the predicate.');
      return (tmp$_0 = single.v) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.singleOrNull_4c38lx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      var single = {v: null};
      var found = {v: false};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e)) {
            if (found.v)
              return null;
            single.v = e;
            found.v = true;
          }
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      if (!found.v)
        return null;
      return single.v;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.filterIndexedTo_4jknp0$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var IndexedValue_init = Kotlin.kotlin.collections.IndexedValue;
    var Throwable = Error;
    return function ($receiver, destination, predicate, continuation) {
      var index = {v: 0};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var tmp$_0;
          var f = new IndexedValue_init((tmp$_0 = index.v, index.v = tmp$_0 + 1 | 0, tmp$_0), e);
          var index_0 = f.component1(), element = f.component2();
          if (predicate(index_0, element))
            destination.add_11rb$(element);
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.filterIndexedTo_170qh7$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var IndexedValue_init = Kotlin.kotlin.collections.IndexedValue;
    var Throwable = Error;
    return function ($receiver, destination, predicate, continuation) {
      var index = {v: 0};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var tmp$_0;
          var f = new IndexedValue_init((tmp$_0 = index.v, index.v = tmp$_0 + 1 | 0, tmp$_0), e);
          var index_0 = f.component1(), element = f.component2();
          if (predicate(index_0, element)) {
            Kotlin.suspendCall(destination.send_11rb$(element, Kotlin.coroutineReceiver()));
          }
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.filterNotTo_ekipu8$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, predicate, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (!predicate(e))
            destination.add_11rb$(e);
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.filterNotTo_6rlmvt$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, predicate, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (!predicate(e)) {
            Kotlin.suspendCall(destination.send_11rb$(e, Kotlin.coroutineReceiver()));
          }
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.filterTo_ekipu8$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, predicate, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e))
            destination.add_11rb$(e);
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.filterTo_6rlmvt$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, predicate, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e)) {
            Kotlin.suspendCall(destination.send_11rb$(e, Kotlin.coroutineReceiver()));
          }
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.associate_9m65rd$', wrapFunction(function () {
    var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, transform, continuation) {
      var destination = LinkedHashMap_init();
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var pair = transform(e);
          destination.put_xwzc9p$(pair.first, pair.second);
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      Kotlin.setCoroutineResult(destination, Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.associateBy_ku6tnm$', wrapFunction(function () {
    var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, keySelector, continuation) {
      var destination = LinkedHashMap_init();
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          destination.put_xwzc9p$(keySelector(e), e);
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      Kotlin.setCoroutineResult(destination, Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.associateBy_lt7yd0$', wrapFunction(function () {
    var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, keySelector, valueTransform, continuation) {
      var destination = LinkedHashMap_init();
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          destination.put_xwzc9p$(keySelector(e), valueTransform(e));
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      Kotlin.setCoroutineResult(destination, Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.associateByTo_kkd6mf$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, keySelector, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          destination.put_xwzc9p$(keySelector(e), e);
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.associateByTo_pjfcwb$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, keySelector, valueTransform, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          destination.put_xwzc9p$(keySelector(e), valueTransform(e));
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.associateTo_lcmuai$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, transform, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var pair = transform(e);
          destination.put_xwzc9p$(pair.first, pair.second);
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.groupBy_ku6tnm$', wrapFunction(function () {
    var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, keySelector, continuation) {
      var destination = LinkedHashMap_init();
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var key = keySelector(e);
          var tmp$_0;
          var value = destination.get_11rb$(key);
          if (value == null) {
            var answer = ArrayList_init();
            destination.put_xwzc9p$(key, answer);
            tmp$_0 = answer;
          }
           else {
            tmp$_0 = value;
          }
          var list = tmp$_0;
          list.add_11rb$(e);
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      Kotlin.setCoroutineResult(destination, Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.groupBy_lt7yd0$', wrapFunction(function () {
    var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, keySelector, valueTransform, continuation) {
      var destination = LinkedHashMap_init();
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var key = keySelector(e);
          var tmp$_0;
          var value = destination.get_11rb$(key);
          if (value == null) {
            var answer = ArrayList_init();
            destination.put_xwzc9p$(key, answer);
            tmp$_0 = answer;
          }
           else {
            tmp$_0 = value;
          }
          var list = tmp$_0;
          list.add_11rb$(valueTransform(e));
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      Kotlin.setCoroutineResult(destination, Kotlin.coroutineReceiver());
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.groupByTo_l6oevu$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, keySelector, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var key = keySelector(e);
          var tmp$_0;
          var value = destination.get_11rb$(key);
          if (value == null) {
            var answer = ArrayList_init();
            destination.put_xwzc9p$(key, answer);
            tmp$_0 = answer;
          }
           else {
            tmp$_0 = value;
          }
          var list = tmp$_0;
          list.add_11rb$(e);
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.groupByTo_z9qy88$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, keySelector, valueTransform, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var key = keySelector(e);
          var tmp$_0;
          var value = destination.get_11rb$(key);
          if (value == null) {
            var answer = ArrayList_init();
            destination.put_xwzc9p$(key, answer);
            tmp$_0 = answer;
          }
           else {
            tmp$_0 = value;
          }
          var list = tmp$_0;
          list.add_11rb$(valueTransform(e));
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.mapIndexedNotNullTo_dz8aer$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var IndexedValue_init = Kotlin.kotlin.collections.IndexedValue;
    var Throwable = Error;
    return function ($receiver, destination, transform, continuation) {
      var index = {v: 0};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var tmp$_0;
          var f = new IndexedValue_init((tmp$_0 = index.v, index.v = tmp$_0 + 1 | 0, tmp$_0), e);
          var index_0 = f.component1(), element = f.component2();
          var tmp$_1;
          if ((tmp$_1 = transform(index_0, element)) != null) {
            destination.add_11rb$(tmp$_1);
          }
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.mapIndexedNotNullTo_4m0vhw$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var IndexedValue_init = Kotlin.kotlin.collections.IndexedValue;
    var Throwable = Error;
    return function ($receiver, destination, transform, continuation) {
      var index = {v: 0};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var tmp$_0;
          var f = new IndexedValue_init((tmp$_0 = index.v, index.v = tmp$_0 + 1 | 0, tmp$_0), e);
          var index_0 = f.component1(), element = f.component2();
          var tmp$_1;
          if ((tmp$_1 = transform(index_0, element)) != null) {
            Kotlin.suspendCall(destination.send_11rb$(tmp$_1, Kotlin.coroutineReceiver()));
          }
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.mapIndexedTo_a7sgbu$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, transform, continuation) {
      var index = {v: 0};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var tmp$_0;
          destination.add_11rb$(transform((tmp$_0 = index.v, index.v = tmp$_0 + 1 | 0, tmp$_0), e));
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.mapIndexedTo_whewhd$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, transform, continuation) {
      var index = {v: 0};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var tmp$_0;
          Kotlin.suspendCall(destination.send_11rb$(transform((tmp$_0 = index.v, index.v = tmp$_0 + 1 | 0, tmp$_0), e), Kotlin.coroutineReceiver()));
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.mapNotNullTo_fo1is7$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, transform, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var tmp$_0;
          if ((tmp$_0 = transform(e)) != null) {
            destination.add_11rb$(tmp$_0);
          }
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.mapNotNullTo_wo1rcg$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, transform, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var tmp$_0;
          if ((tmp$_0 = transform(e)) != null) {
            Kotlin.suspendCall(destination.send_11rb$(tmp$_0, Kotlin.coroutineReceiver()));
          }
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.mapTo_pa4xkq$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, transform, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          destination.add_11rb$(transform(e));
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.mapTo_q9ku9f$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, destination, transform, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          Kotlin.suspendCall(destination.send_11rb$(transform(e), Kotlin.coroutineReceiver()));
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return destination;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.all_4c38lx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (!predicate(e))
            return false;
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return true;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.any_4c38lx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e))
            return true;
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return false;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.count_4c38lx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      var count = {v: 0};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e)) {
            count.v = count.v + 1 | 0;
          }
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return count.v;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.fold_kq4l36$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, initial, operation, continuation) {
      var accumulator = {v: initial};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          accumulator.v = operation(accumulator.v, e);
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return accumulator.v;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.foldIndexed_wviyg6$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, initial, operation, continuation) {
      var index = {v: 0};
      var accumulator = {v: initial};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var tmp$_0;
          accumulator.v = operation((tmp$_0 = index.v, index.v = tmp$_0 + 1 | 0, tmp$_0), accumulator.v, e);
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return accumulator.v;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.maxBy_mqfd03$', wrapFunction(function () {
    var Throwable = Error;
    return function ($receiver, selector, continuation) {
      var cause = null;
      try {
        var iterator = $receiver.iterator();
        Kotlin.suspendCall(iterator.hasNext(Kotlin.coroutineReceiver()));
        if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
          return null;
        Kotlin.suspendCall(iterator.next(Kotlin.coroutineReceiver()));
        var maxElem = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        var maxValue = selector(maxElem);
        while (true) {
          Kotlin.suspendCall(iterator.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(iterator.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var v = selector(e);
          if (Kotlin.compareTo(maxValue, v) < 0) {
            maxElem = e;
            maxValue = v;
          }
        }
        return maxElem;
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.minBy_mqfd03$', wrapFunction(function () {
    var Throwable = Error;
    return function ($receiver, selector, continuation) {
      var cause = null;
      try {
        var iterator = $receiver.iterator();
        Kotlin.suspendCall(iterator.hasNext(Kotlin.coroutineReceiver()));
        if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
          return null;
        Kotlin.suspendCall(iterator.next(Kotlin.coroutineReceiver()));
        var minElem = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        var minValue = selector(minElem);
        while (true) {
          Kotlin.suspendCall(iterator.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(iterator.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          var v = selector(e);
          if (Kotlin.compareTo(minValue, v) > 0) {
            minElem = e;
            minValue = v;
          }
        }
        return minElem;
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.none_4c38lx$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e))
            return false;
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return true;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.reduce_vk3vfd$', wrapFunction(function () {
    var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
    var Throwable = Error;
    return function ($receiver, operation, continuation) {
      var cause = null;
      try {
        var iterator = $receiver.iterator();
        Kotlin.suspendCall(iterator.hasNext(Kotlin.coroutineReceiver()));
        if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
          throw UnsupportedOperationException_init("Empty channel can't be reduced.");
        Kotlin.suspendCall(iterator.next(Kotlin.coroutineReceiver()));
        var accumulator = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        while (true) {
          Kotlin.suspendCall(iterator.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(iterator.next(Kotlin.coroutineReceiver()));
          accumulator = operation(accumulator, Kotlin.coroutineResult(Kotlin.coroutineReceiver()));
        }
        return accumulator;
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          cause = e;
          throw e;
        }
         else
          throw e;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.reduceIndexed_a6mkxp$', wrapFunction(function () {
    var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
    var Throwable = Error;
    return function ($receiver, operation, continuation) {
      var cause = null;
      try {
        var tmp$, tmp$_0;
        var iterator = $receiver.iterator();
        Kotlin.suspendCall(iterator.hasNext(Kotlin.coroutineReceiver()));
        if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
          throw UnsupportedOperationException_init("Empty channel can't be reduced.");
        var index = 1;
        Kotlin.suspendCall(iterator.next(Kotlin.coroutineReceiver()));
        var accumulator = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
        while (true) {
          Kotlin.suspendCall(iterator.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          tmp$_0 = (tmp$ = index, index = tmp$ + 1 | 0, tmp$);
          Kotlin.suspendCall(iterator.next(Kotlin.coroutineReceiver()));
          accumulator = operation(tmp$_0, accumulator, Kotlin.coroutineResult(Kotlin.coroutineReceiver()));
        }
        return accumulator;
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          cause = e;
          throw e;
        }
         else
          throw e;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.sumBy_fl2dz0$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, selector, continuation) {
      var sum = {v: 0};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          sum.v = sum.v + selector(e) | 0;
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return sum.v;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.sumByDouble_jy8qhg$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Throwable = Error;
    return function ($receiver, selector, continuation) {
      var sum = {v: 0.0};
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          sum.v += selector(e);
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return sum.v;
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.channels.partition_4c38lx$', wrapFunction(function () {
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var Unit = Kotlin.kotlin.Unit;
    var Pair_init = Kotlin.kotlin.Pair;
    var Throwable = Error;
    return function ($receiver, predicate, continuation) {
      var first = ArrayList_init();
      var second = ArrayList_init();
      var cause = null;
      try {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (true) {
          Kotlin.suspendCall(tmp$.hasNext(Kotlin.coroutineReceiver()));
          if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
            break;
          Kotlin.suspendCall(tmp$.next(Kotlin.coroutineReceiver()));
          var e = Kotlin.coroutineResult(Kotlin.coroutineReceiver());
          if (predicate(e)) {
            first.add_11rb$(e);
          }
           else {
            second.add_11rb$(e);
          }
        }
      }
       catch (e_0) {
        if (Kotlin.isType(e_0, Throwable)) {
          cause = e_0;
          throw e_0;
        }
         else
          throw e_0;
      }
      finally {
        $receiver.cancel_dbl4no$(cause);
      }
      Kotlin.setCoroutineResult(Unit, Kotlin.coroutineReceiver());
      return new Pair_init(first, second);
    };
  }));
  function ConflatedBroadcastChannel() {
    ConflatedBroadcastChannel$Companion_getInstance();
    this._state_0 = ConflatedBroadcastChannel$Companion_getInstance().INITIAL_STATE_0;
    this._updating_0 = 0;
    this.onCloseHandler_0 = null;
  }
  var ConflatedBroadcastChannel$Companion_instance = null;
  function ConflatedChannel() {
    AbstractChannel.call(this);
  }
  Object.defineProperty(ConflatedChannel.prototype, 'isBufferAlwaysEmpty', {get: function () {
    return true;
  }});
  Object.defineProperty(ConflatedChannel.prototype, 'isBufferEmpty', {get: function () {
    return true;
  }});
  Object.defineProperty(ConflatedChannel.prototype, 'isBufferAlwaysFull', {get: function () {
    return false;
  }});
  Object.defineProperty(ConflatedChannel.prototype, 'isBufferFull', {get: function () {
    return false;
  }});
  ConflatedChannel.prototype.onClosedIdempotent_l2j9rm$ = function (closed) {
    this.conflatePreviousSendBuffered_0(closed);
  };
  ConflatedChannel.prototype.offerInternal_11rb$ = function (element) {
    while (true) {
      var result = AbstractChannel.prototype.offerInternal_11rb$.call(this, element);
      if (result === OFFER_SUCCESS)
        return OFFER_SUCCESS;
      else if (result === OFFER_FAILED) {
        var sendResult = this.sendConflated_0(element);
        if (sendResult == null)
          return OFFER_SUCCESS;
        else if (Kotlin.isType(sendResult, Closed)) {
          this.conflatePreviousSendBuffered_0(sendResult);
          return sendResult;
        }
      }
       else if (Kotlin.isType(result, Closed)) {
        this.conflatePreviousSendBuffered_0(result);
        return result;
      }
       else {
        throw IllegalStateException_init(('Invalid offerInternal result ' + result.toString()).toString());
      }
    }
  };
  ConflatedChannel.prototype.offerSelectInternal_ys5ufj$ = function (element, select) {
    var tmp$;
    while (true) {
      var result = this.hasReceiveOrClosed_0 ? AbstractChannel.prototype.offerSelectInternal_ys5ufj$.call(this, element, select) : (tmp$ = select.performAtomicTrySelect_6q0pxr$(this.describeSendConflated_0(element))) != null ? tmp$ : OFFER_SUCCESS;
      if (result === ALREADY_SELECTED)
        return ALREADY_SELECTED;
      else if (result === OFFER_SUCCESS)
        return OFFER_SUCCESS;
      else if (result !== OFFER_FAILED)
        if (Kotlin.isType(result, Closed)) {
          this.conflatePreviousSendBuffered_0(result);
          return result;
        }
         else {
          throw IllegalStateException_init(('Invalid result ' + result.toString()).toString());
        }
    }
  };
  ConflatedChannel.$metadata$ = {kind: Kind_CLASS, simpleName: 'ConflatedChannel', interfaces: [AbstractChannel]};
  function LinkedListChannel() {
    AbstractChannel.call(this);
  }
  Object.defineProperty(LinkedListChannel.prototype, 'isBufferAlwaysEmpty', {get: function () {
    return true;
  }});
  Object.defineProperty(LinkedListChannel.prototype, 'isBufferEmpty', {get: function () {
    return true;
  }});
  Object.defineProperty(LinkedListChannel.prototype, 'isBufferAlwaysFull', {get: function () {
    return false;
  }});
  Object.defineProperty(LinkedListChannel.prototype, 'isBufferFull', {get: function () {
    return false;
  }});
  LinkedListChannel.prototype.offerInternal_11rb$ = function (element) {
    while (true) {
      var result = AbstractChannel.prototype.offerInternal_11rb$.call(this, element);
      if (result === OFFER_SUCCESS)
        return OFFER_SUCCESS;
      else if (result === OFFER_FAILED) {
        var sendResult = this.sendBuffered_0(element);
        if (sendResult == null)
          return OFFER_SUCCESS;
        else if (Kotlin.isType(sendResult, Closed))
          return sendResult;
      }
       else if (Kotlin.isType(result, Closed))
        return result;
      else {
        throw IllegalStateException_init(('Invalid offerInternal result ' + result.toString()).toString());
      }
    }
  };
  LinkedListChannel.prototype.offerSelectInternal_ys5ufj$ = function (element, select) {
    var tmp$;
    while (true) {
      var result = this.hasReceiveOrClosed_0 ? AbstractChannel.prototype.offerSelectInternal_ys5ufj$.call(this, element, select) : (tmp$ = select.performAtomicTrySelect_6q0pxr$(this.describeSendBuffered_0(element))) != null ? tmp$ : OFFER_SUCCESS;
      if (result === ALREADY_SELECTED)
        return ALREADY_SELECTED;
      else if (result === OFFER_SUCCESS)
        return OFFER_SUCCESS;
      else if (result !== OFFER_FAILED)
        if (Kotlin.isType(result, Closed))
          return result;
        else {
          throw IllegalStateException_init(('Invalid result ' + result.toString()).toString());
        }
    }
  };
  LinkedListChannel.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinkedListChannel', interfaces: [AbstractChannel]};
  function ProducerScope() {
  }
  function RendezvousChannel() {
    AbstractChannel.call(this);
  }
  Object.defineProperty(RendezvousChannel.prototype, 'isBufferAlwaysEmpty', {get: function () {
    return true;
  }});
  Object.defineProperty(RendezvousChannel.prototype, 'isBufferEmpty', {get: function () {
    return true;
  }});
  Object.defineProperty(RendezvousChannel.prototype, 'isBufferAlwaysFull', {get: function () {
    return true;
  }});
  Object.defineProperty(RendezvousChannel.prototype, 'isBufferFull', {get: function () {
    return true;
  }});
  RendezvousChannel.$metadata$ = {kind: Kind_CLASS, simpleName: 'RendezvousChannel', interfaces: [AbstractChannel]};
  function ArrayQueue() {
    this.elements_0 = Kotlin.newArray(16, null);
    this.head_0 = 0;
    this.tail_0 = 0;
  }
  Object.defineProperty(ArrayQueue.prototype, 'isEmpty', {get: function () {
    return this.head_0 === this.tail_0;
  }});
  ArrayQueue.prototype.addLast_trkh7z$ = function (element) {
    this.elements_0[this.tail_0] = element;
    this.tail_0 = this.tail_0 + 1 & this.elements_0.length - 1;
    if (this.tail_0 === this.head_0)
      this.ensureCapacity_0();
  };
  ArrayQueue.prototype.removeFirstOrNull = function () {
    var tmp$;
    if (this.head_0 === this.tail_0)
      return null;
    var element = this.elements_0[this.head_0];
    this.elements_0[this.head_0] = null;
    this.head_0 = this.head_0 + 1 & this.elements_0.length - 1;
    return Kotlin.isType(tmp$ = element, Any) ? tmp$ : throwCCE();
  };
  ArrayQueue.prototype.clear = function () {
    this.head_0 = 0;
    this.tail_0 = 0;
    this.elements_0 = Kotlin.newArray(this.elements_0.length, null);
  };
  ArrayQueue.prototype.ensureCapacity_0 = function () {
    var currentSize = this.elements_0.length;
    var newCapacity = currentSize << 1;
    var newElements = Kotlin.newArray(newCapacity, null);
    var remaining = this.elements_0.length - this.head_0 | 0;
    arraycopy(this.elements_0, this.head_0, newElements, 0, remaining);
    arraycopy(this.elements_0, 0, newElements, remaining, this.head_0);
    this.elements_0 = newElements;
    this.head_0 = 0;
    this.tail_0 = currentSize;
  };
  ArrayQueue.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayQueue', interfaces: []};
  function OpDescriptor() {
  }
  OpDescriptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'OpDescriptor', interfaces: []};
  var NO_DECISION;
  function AtomicOp() {
    OpDescriptor.call(this);
    this._consensus_c6dvpx$_0 = NO_DECISION;
  }
  Object.defineProperty(AtomicOp.prototype, 'isDecided', {get: function () {
    return this._consensus_c6dvpx$_0 !== NO_DECISION;
  }});
  AtomicOp.prototype.tryDecide_s8jyv4$ = function (decision) {
    if (!(decision !== NO_DECISION)) {
      var message = 'Check failed.';
      throw IllegalStateException_init(message.toString());
    }
    return function (scope) {
      return scope._consensus_c6dvpx$_0 === NO_DECISION ? function () {
        scope._consensus_c6dvpx$_0 = decision;
        return true;
      }() : false;
    }(this);
  };
  AtomicOp.prototype.decide_xphakb$_0 = function (decision) {
    return this.tryDecide_s8jyv4$(decision) ? decision : this._consensus_c6dvpx$_0;
  };
  AtomicOp.prototype.perform_s8jyv4$ = function (affected) {
    var tmp$, tmp$_0;
    var decision = this._consensus_c6dvpx$_0;
    if (decision === NO_DECISION) {
      decision = this.decide_xphakb$_0(this.prepare_11rb$((tmp$ = affected) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE()));
    }
    this.complete_19pj23$((tmp$_0 = affected) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE(), decision);
    return decision;
  };
  AtomicOp.$metadata$ = {kind: Kind_CLASS, simpleName: 'AtomicOp', interfaces: [OpDescriptor]};
  function AtomicDesc() {
  }
  AtomicDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'AtomicDesc', interfaces: []};
  function Symbol(symbol) {
    this.symbol = symbol;
  }
  Symbol.prototype.toString = function () {
    return this.symbol;
  };
  Symbol.$metadata$ = {kind: Kind_CLASS, simpleName: 'Symbol', interfaces: []};
  function startCoroutineCancellable($receiver, completion) {
    try {
      resumeCancellable(intercepted(createCoroutineUnintercepted($receiver, completion)), Unit);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        completion.resumeWith_tl1gpc$(new Result(createFailure(e)));
      }
       else
        throw e;
    }
  }
  function startCoroutineCancellable_0($receiver, receiver, completion) {
    try {
      resumeCancellable(intercepted(createCoroutineUnintercepted_0($receiver, receiver, completion)), Unit);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        completion.resumeWith_tl1gpc$(new Result(createFailure(e)));
      }
       else
        throw e;
    }
  }
  function startCoroutineUnintercepted($receiver, completion) {
    startDirect$break: do {
      var tmp$, tmp$_0;
      var actualCompletion = completion;
      try {
        tmp$ = $receiver(actualCompletion, false);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          var exception = e;
          actualCompletion.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          break startDirect$break;
        }
         else
          throw e;
      }
      var value = tmp$;
      if (value !== COROUTINE_SUSPENDED) {
        var value_0 = (tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
        actualCompletion.resumeWith_tl1gpc$(new Result(value_0));
      }
    }
     while (false);
  }
  function startCoroutineUnintercepted_0($receiver, receiver, completion) {
    startDirect$break: do {
      var tmp$, tmp$_0;
      var actualCompletion = completion;
      try {
        tmp$ = $receiver(receiver, actualCompletion, false);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          var exception = e;
          actualCompletion.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          break startDirect$break;
        }
         else
          throw e;
      }
      var value = tmp$;
      if (value !== COROUTINE_SUSPENDED) {
        var value_0 = (tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
        actualCompletion.resumeWith_tl1gpc$(new Result(value_0));
      }
    }
     while (false);
  }
  function startCoroutineUndispatched($receiver, completion) {
    startDirect$break: do {
      var tmp$, tmp$_0;
      var actualCompletion = completion;
      try {
        completion.context;
        tmp$ = $receiver(actualCompletion, false);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          var exception = e;
          actualCompletion.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          break startDirect$break;
        }
         else
          throw e;
      }
      var value = tmp$;
      if (value !== COROUTINE_SUSPENDED) {
        var value_0 = (tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
        actualCompletion.resumeWith_tl1gpc$(new Result(value_0));
      }
    }
     while (false);
  }
  function startCoroutineUndispatched_0($receiver, receiver, completion) {
    startDirect$break: do {
      var tmp$, tmp$_0;
      var actualCompletion = completion;
      try {
        completion.context;
        tmp$ = $receiver(receiver, actualCompletion, false);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          var exception = e;
          actualCompletion.resumeWith_tl1gpc$(new Result(createFailure(exception)));
          break startDirect$break;
        }
         else
          throw e;
      }
      var value = tmp$;
      if (value !== COROUTINE_SUSPENDED) {
        var value_0 = (tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
        actualCompletion.resumeWith_tl1gpc$(new Result(value_0));
      }
    }
     while (false);
  }
  function SelectBuilder() {
  }
  SelectBuilder.prototype.invoke_en0wgx$ = function ($receiver, block) {
    this.invoke_ha2bmj$($receiver, null, block);
  };
  SelectBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SelectBuilder', interfaces: []};
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SelectClause0', interfaces: []};
  function SelectClause1() {
  }
  SelectClause1.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SelectClause1', interfaces: []};
  function SelectClause2() {
  }
  SelectClause2.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SelectClause2', interfaces: []};
  function SelectInstance() {
  }
  SelectInstance.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SelectInstance', interfaces: []};
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.selects.select_wd2ujs$', wrapFunction(function () {
    var SelectBuilderImpl_init = _.kotlinx.coroutines.selects.SelectBuilderImpl;
    var Throwable = Error;
    function select$lambda(closure$builder) {
      return function (uCont) {
        var scope = new SelectBuilderImpl_init(uCont);
        try {
          closure$builder(scope);
        }
         catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            scope.handleBuilderException_tcv7n7$(e);
          }
           else
            throw e;
        }
        return scope.getResult();
      };
    }
    return function (builder_0, continuation) {
      Kotlin.suspendCall(select$lambda(builder_0)(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  var ALREADY_SELECTED;
  var UNDECIDED_1;
  var RESUMED_1;
  function SelectBuilderImpl(uCont) {
    LinkedListHead.call(this);
    this.uCont_0 = uCont;
    this._state_0 = this;
    this._result_0 = UNDECIDED_1;
    this.parentHandle_0 = null;
  }
  Object.defineProperty(SelectBuilderImpl.prototype, 'context', {get: function () {
    return this.uCont_0.context;
  }});
  Object.defineProperty(SelectBuilderImpl.prototype, 'completion', {get: function () {
    return this;
  }});
  SelectBuilderImpl.prototype.doResume_0 = wrapFunction(function () {
    var IllegalStateException_init_0 = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (value, block) {
      if (!this.isSelected) {
        var message = 'Must be selected first';
        throw IllegalStateException_init_0(message.toString());
      }
      var $receiver = this._result_0;
      while (true) {
        var result = this._result_0;
        if (result === UNDECIDED_1) {
          if (function (scope) {
            return scope._result_0 === UNDECIDED_1 ? function () {
              scope._result_0 = value();
              return true;
            }() : false;
          }(this))
            return;
        }
         else if (result === COROUTINE_SUSPENDED) {
          if (function (scope) {
            return scope._result_0 === COROUTINE_SUSPENDED ? function () {
              scope._result_0 = RESUMED_1;
              return true;
            }() : false;
          }(this)) {
            block();
            return;
          }
        }
         else
          throw IllegalStateException_init('Already resumed');
      }
    };
  });
  SelectBuilderImpl.prototype.resumeWith_tl1gpc$ = function (result) {
    doResume_0$break: do {
      if (!this.isSelected) {
        var message = 'Must be selected first';
        throw IllegalStateException_init(message.toString());
      }
      var $receiver = this._result_0;
      while (true) {
        var result_0 = this._result_0;
        if (result_0 === UNDECIDED_1) {
          if (function (scope) {
            return scope._result_0 === UNDECIDED_1 ? function () {
              scope._result_0 = toState(result);
              return true;
            }() : false;
          }(this))
            break doResume_0$break;
        }
         else if (result_0 === COROUTINE_SUSPENDED) {
          if (function (scope) {
            return scope._result_0 === COROUTINE_SUSPENDED ? function () {
              scope._result_0 = RESUMED_1;
              return true;
            }() : false;
          }(this)) {
            this.uCont_0.resumeWith_tl1gpc$(result);
            break doResume_0$break;
          }
        }
         else
          throw IllegalStateException_init('Already resumed');
      }
    }
     while (false);
  };
  SelectBuilderImpl.prototype.resumeSelectCancellableWithException_tcv7n7$ = function (exception) {
    doResume_0$break: do {
      if (!this.isSelected) {
        var message = 'Must be selected first';
        throw IllegalStateException_init(message.toString());
      }
      var $receiver = this._result_0;
      while (true) {
        var result = this._result_0;
        if (result === UNDECIDED_1) {
          if (function (scope) {
            return scope._result_0 === UNDECIDED_1 ? function () {
              scope._result_0 = new CompletedExceptionally(exception);
              return true;
            }() : false;
          }(this))
            break doResume_0$break;
        }
         else if (result === COROUTINE_SUSPENDED) {
          if (function (scope) {
            return scope._result_0 === COROUTINE_SUSPENDED ? function () {
              scope._result_0 = RESUMED_1;
              return true;
            }() : false;
          }(this)) {
            resumeCancellableWithException(intercepted(this.uCont_0), exception);
            break doResume_0$break;
          }
        }
         else
          throw IllegalStateException_init('Already resumed');
      }
    }
     while (false);
  };
  SelectBuilderImpl.prototype.getResult = function () {
    if (!this.isSelected)
      this.initCancellability_0();
    var result = this._result_0;
    if (result === UNDECIDED_1) {
      if (function (scope) {
        return scope._result_0 === UNDECIDED_1 ? function () {
          scope._result_0 = COROUTINE_SUSPENDED;
          return true;
        }() : false;
      }(this))
        return COROUTINE_SUSPENDED;
      result = this._result_0;
    }
    if (result === RESUMED_1)
      throw IllegalStateException_init('Already resumed');
    else if (Kotlin.isType(result, CompletedExceptionally))
      throw result.cause;
    else
      return result;
  };
  SelectBuilderImpl.prototype.initCancellability_0 = function () {
    var tmp$;
    tmp$ = this.context.get_j3r2sn$(Job$Key_getInstance());
    if (tmp$ == null) {
      return;
    }
    var parent = tmp$;
    var newRegistration = parent.invokeOnCompletion_ct2b2z$(true, void 0, new SelectBuilderImpl$SelectOnCancelling(this, parent));
    this.parentHandle_0 = newRegistration;
    if (this.isSelected)
      newRegistration.dispose();
  };
  function SelectBuilderImpl$SelectOnCancelling($outer, job) {
    this.$outer = $outer;
    JobCancellingNode.call(this, job);
  }
  SelectBuilderImpl$SelectOnCancelling.prototype.invoke = function (cause) {
    if (this.$outer.trySelect_s8jyv4$(null))
      this.$outer.resumeSelectCancellableWithException_tcv7n7$(this.job.getCancellationException());
  };
  SelectBuilderImpl$SelectOnCancelling.prototype.toString = function () {
    return 'SelectOnCancelling[' + this.$outer + ']';
  };
  SelectBuilderImpl$SelectOnCancelling.$metadata$ = {kind: Kind_CLASS, simpleName: 'SelectOnCancelling', interfaces: [JobCancellingNode]};
  Object.defineProperty(SelectBuilderImpl.prototype, 'state_0', {get: function () {
    var $receiver = this._state_0;
    while (true) {
      var state = this._state_0;
      if (!Kotlin.isType(state, OpDescriptor))
        return state;
      state.perform_s8jyv4$(this);
    }
  }});
  SelectBuilderImpl.prototype.handleBuilderException_tcv7n7$ = function (e) {
    if (this.trySelect_s8jyv4$(null)) {
      this.resumeWith_tl1gpc$(new Result(createFailure(e)));
    }
     else
      handleCoroutineException(this.context, e);
  };
  Object.defineProperty(SelectBuilderImpl.prototype, 'isSelected', {get: function () {
    return this.state_0 !== this;
  }});
  function SelectBuilderImpl$disposeOnSelect$lambda(this$SelectBuilderImpl) {
    return function () {
      return this$SelectBuilderImpl.state_0 === this$SelectBuilderImpl;
    };
  }
  SelectBuilderImpl.prototype.disposeOnSelect_rvfg84$ = function (handle) {
    var node = new SelectBuilderImpl$DisposeNode(handle);
    loop_label: while (true) {
      var state = this.state_0;
      if (state === this) {
        var addLastIf_w327v9$result;
        addLastIf_w327v9$break: do {
          if (!SelectBuilderImpl$disposeOnSelect$lambda(this)()) {
            addLastIf_w327v9$result = false;
            break addLastIf_w327v9$break;
          }
          this.addLast_l2j9rm$(node);
          addLastIf_w327v9$result = true;
        }
         while (false);
        if (addLastIf_w327v9$result)
          return;
      }
       else {
        handle.dispose();
        return;
      }
    }
  };
  SelectBuilderImpl.prototype.doAfterSelect_0 = function () {
    var tmp$;
    (tmp$ = this.parentHandle_0) != null ? (tmp$.dispose(), Unit) : null;
    var cur = this._next;
    while (!equals(cur, this)) {
      if (Kotlin.isType(cur, SelectBuilderImpl$DisposeNode)) {
        cur.handle.dispose();
      }
      cur = cur._next;
    }
  };
  SelectBuilderImpl.prototype.trySelect_s8jyv4$ = function (idempotent) {
    if (!!Kotlin.isType(idempotent, OpDescriptor)) {
      var message = 'cannot use OpDescriptor as idempotent marker';
      throw IllegalStateException_init(message.toString());
    }
    while (true) {
      var state = this.state_0;
      if (state === this) {
        if (function (scope) {
          return scope._state_0 === scope ? function () {
            scope._state_0 = idempotent;
            return true;
          }() : false;
        }(this)) {
          this.doAfterSelect_0();
          return true;
        }
      }
       else if (idempotent == null)
        return false;
      else if (state === idempotent)
        return true;
      else
        return false;
    }
  };
  SelectBuilderImpl.prototype.performAtomicTrySelect_6q0pxr$ = function (desc) {
    return (new SelectBuilderImpl$AtomicSelectOp(this, desc, true)).perform_s8jyv4$(null);
  };
  SelectBuilderImpl.prototype.performAtomicIfNotSelected_6q0pxr$ = function (desc) {
    return (new SelectBuilderImpl$AtomicSelectOp(this, desc, false)).perform_s8jyv4$(null);
  };
  function SelectBuilderImpl$AtomicSelectOp($outer, desc, select) {
    this.$outer = $outer;
    AtomicOp.call(this);
    this.desc = desc;
    this.select = select;
  }
  SelectBuilderImpl$AtomicSelectOp.prototype.prepare_11rb$ = function (affected) {
    var tmp$;
    if (affected == null) {
      if ((tmp$ = this.prepareIfNotSelected()) != null) {
        return tmp$;
      }
    }
    return this.desc.prepare_4uxf5b$(this);
  };
  SelectBuilderImpl$AtomicSelectOp.prototype.complete_19pj23$ = function (affected, failure) {
    this.completeSelect_0(failure);
    this.desc.complete_ayrq83$(this, failure);
  };
  SelectBuilderImpl$AtomicSelectOp.prototype.prepareIfNotSelected = function () {
    var $receiver = this.$outer._state_0;
    this.$outer;
    while (true) {
      var this$SelectBuilderImpl = this.$outer;
      var state = this.$outer._state_0;
      if (state === this)
        return null;
      else if (Kotlin.isType(state, OpDescriptor))
        state.perform_s8jyv4$(this$SelectBuilderImpl);
      else if (state === this$SelectBuilderImpl) {
        if (function (scope) {
          return this$SelectBuilderImpl._state_0 === this$SelectBuilderImpl ? function () {
            this$SelectBuilderImpl._state_0 = scope;
            return true;
          }() : false;
        }(this))
          return null;
      }
       else
        return ALREADY_SELECTED;
    }
  };
  SelectBuilderImpl$AtomicSelectOp.prototype.completeSelect_0 = function (failure) {
    var selectSuccess = this.select && failure == null;
    var update = selectSuccess ? null : this.$outer;
    if (function (scope) {
      return scope.$outer._state_0 === scope ? function () {
        scope.$outer._state_0 = update;
        return true;
      }() : false;
    }(this)) {
      if (selectSuccess)
        this.$outer.doAfterSelect_0();
    }
  };
  SelectBuilderImpl$AtomicSelectOp.$metadata$ = {kind: Kind_CLASS, simpleName: 'AtomicSelectOp', interfaces: [AtomicOp]};
  SelectBuilderImpl.prototype.invoke_nd4vgy$ = function ($receiver, block) {
    $receiver.registerSelectClause0_s9h9qd$(this, block);
  };
  SelectBuilderImpl.prototype.invoke_veq140$ = function ($receiver, block) {
    $receiver.registerSelectClause1_o3xas4$(this, block);
  };
  SelectBuilderImpl.prototype.invoke_ha2bmj$ = function ($receiver, param, block) {
    $receiver.registerSelectClause2_rol3se$(this, param, block);
  };
  function SelectBuilderImpl$onTimeout$lambda(this$SelectBuilderImpl, closure$block) {
    return function () {
      if (this$SelectBuilderImpl.trySelect_s8jyv4$(null))
        startCoroutineCancellable(closure$block, this$SelectBuilderImpl.completion);
      return Unit;
    };
  }
  function Runnable$ObjectLiteral(closure$block) {
    this.closure$block = closure$block;
  }
  Runnable$ObjectLiteral.prototype.run = function () {
    this.closure$block();
  };
  Runnable$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Runnable]};
  SelectBuilderImpl.prototype.onTimeout_7xvrws$ = function (timeMillis, block) {
    if (timeMillis.compareTo_11rb$(L0) <= 0) {
      if (this.trySelect_s8jyv4$(null))
        startCoroutineUnintercepted(block, this.completion);
      return;
    }
    var action = new Runnable$ObjectLiteral(SelectBuilderImpl$onTimeout$lambda(this, block));
    this.disposeOnSelect_rvfg84$(get_delay(this.context).invokeOnTimeout_8irseu$(timeMillis, action));
  };
  function SelectBuilderImpl$DisposeNode(handle) {
    LinkedListNode.call(this);
    this.handle = handle;
  }
  SelectBuilderImpl$DisposeNode.$metadata$ = {kind: Kind_CLASS, simpleName: 'DisposeNode', interfaces: [LinkedListNode]};
  SelectBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'SelectBuilderImpl', interfaces: [Continuation, SelectInstance, SelectBuilder, LinkedListHead]};
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.selects.selectUnbiased_wd2ujs$', wrapFunction(function () {
    var UnbiasedSelectBuilderImpl_init = _.kotlinx.coroutines.selects.UnbiasedSelectBuilderImpl;
    var Throwable = Error;
    function selectUnbiased$lambda(closure$builder) {
      return function (uCont) {
        var scope = new UnbiasedSelectBuilderImpl_init(uCont);
        try {
          closure$builder(scope);
        }
         catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            scope.handleBuilderException_tcv7n7$(e);
          }
           else
            throw e;
        }
        return scope.initSelectResult();
      };
    }
    return function (builder_0, continuation) {
      Kotlin.suspendCall(selectUnbiased$lambda(builder_0)(Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function UnbiasedSelectBuilderImpl(uCont) {
    this.instance = new SelectBuilderImpl(uCont);
    this.clauses = ArrayList_init_0();
  }
  UnbiasedSelectBuilderImpl.prototype.handleBuilderException_tcv7n7$ = function (e) {
    this.instance.handleBuilderException_tcv7n7$(e);
  };
  UnbiasedSelectBuilderImpl.prototype.initSelectResult = function () {
    if (!this.instance.isSelected) {
      try {
        shuffle(this.clauses);
        var tmp$;
        tmp$ = this.clauses.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          element();
        }
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          this.instance.handleBuilderException_tcv7n7$(e);
        }
         else
          throw e;
      }
    }
    return this.instance.getResult();
  };
  function UnbiasedSelectBuilderImpl$invoke$lambda(this$UnbiasedSelectBuilderImpl, closure$block, this$invoke) {
    return function () {
      this$invoke.registerSelectClause0_s9h9qd$(this$UnbiasedSelectBuilderImpl.instance, closure$block);
      return Unit;
    };
  }
  UnbiasedSelectBuilderImpl.prototype.invoke_nd4vgy$ = function ($receiver, block) {
    this.clauses.add_11rb$(UnbiasedSelectBuilderImpl$invoke$lambda(this, block, $receiver));
  };
  function UnbiasedSelectBuilderImpl$invoke$lambda_0(this$UnbiasedSelectBuilderImpl, closure$block, this$invoke) {
    return function () {
      this$invoke.registerSelectClause1_o3xas4$(this$UnbiasedSelectBuilderImpl.instance, closure$block);
      return Unit;
    };
  }
  UnbiasedSelectBuilderImpl.prototype.invoke_veq140$ = function ($receiver, block) {
    this.clauses.add_11rb$(UnbiasedSelectBuilderImpl$invoke$lambda_0(this, block, $receiver));
  };
  function UnbiasedSelectBuilderImpl$invoke$lambda_1(this$UnbiasedSelectBuilderImpl, closure$param, closure$block, this$invoke) {
    return function () {
      this$invoke.registerSelectClause2_rol3se$(this$UnbiasedSelectBuilderImpl.instance, closure$param, closure$block);
      return Unit;
    };
  }
  UnbiasedSelectBuilderImpl.prototype.invoke_ha2bmj$ = function ($receiver, param, block) {
    this.clauses.add_11rb$(UnbiasedSelectBuilderImpl$invoke$lambda_1(this, param, block, $receiver));
  };
  function UnbiasedSelectBuilderImpl$onTimeout$lambda(this$UnbiasedSelectBuilderImpl, closure$timeMillis, closure$block) {
    return function () {
      this$UnbiasedSelectBuilderImpl.instance.onTimeout_7xvrws$(closure$timeMillis, closure$block);
      return Unit;
    };
  }
  UnbiasedSelectBuilderImpl.prototype.onTimeout_7xvrws$ = function (timeMillis, block) {
    this.clauses.add_11rb$(UnbiasedSelectBuilderImpl$onTimeout$lambda(this, timeMillis, block));
  };
  UnbiasedSelectBuilderImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'UnbiasedSelectBuilderImpl', interfaces: [SelectBuilder]};
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.selects.whileSelect_vmyjlh$', wrapFunction(function () {
    var SelectBuilderImpl_init = _.kotlinx.coroutines.selects.SelectBuilderImpl;
    var Throwable = Error;
    function select$lambda(closure$builder) {
      return function (uCont) {
        var scope = new SelectBuilderImpl_init(uCont);
        try {
          closure$builder(scope);
        }
         catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            scope.handleBuilderException_tcv7n7$(e);
          }
           else
            throw e;
        }
        return scope.getResult();
      };
    }
    return function (builder, continuation) {
      while (true) {
        Kotlin.suspendCall(select$lambda(builder)(Kotlin.coroutineReceiver()));
        if (!Kotlin.coroutineResult(Kotlin.coroutineReceiver()))
          break;
      }
    };
  }));
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.sync.withLock_8701tb$', function ($receiver, owner, action, continuation) {
    if (owner === void 0)
      owner = null;
    Kotlin.suspendCall($receiver.lock_s8jyv4$(owner, Kotlin.coroutineReceiver()));
    try {
      return action();
    }
    finally {
      $receiver.unlock_s8jyv4$(owner);
    }
  });
  var LOCK_FAIL;
  var ENQUEUE_FAIL;
  var UNLOCK_FAIL;
  var SELECT_SUCCESS;
  var LOCKED;
  var UNLOCKED;
  var EMPTY_LOCKED;
  var EMPTY_UNLOCKED;
  function Empty_0(locked) {
    this.locked = locked;
  }
  Empty_0.prototype.toString = function () {
    return 'Empty[' + this.locked.toString() + ']';
  };
  Empty_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'Empty', interfaces: []};
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'CompletionHandlerBase', interfaces: [LinkedListNode]};
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = {kind: Kind_CLASS, simpleName: 'CancelHandlerBase', interfaces: []};
  function invokeIt($receiver, cause) {
    if (equals(typeof $receiver, 'function'))
      $receiver(cause);
    else
      $receiver.invoke(cause);
  }
  var UNDEFINED_0;
  function createDefaultDispatcher() {
    if (!equals(typeof navigator, UNDEFINED_0) && navigator != null && navigator.product == 'ReactNative')
      return new NodeDispatcher();
    else if (isJsdom())
      return new NodeDispatcher();
    else {
      var tmp$ = !equals(typeof window, UNDEFINED_0) && window != null;
      if (tmp$) {
        tmp$ = !equals(typeof window.addEventListener, UNDEFINED_0);
      }
      if (tmp$)
        return asCoroutineDispatcher(window);
      else
        return new NodeDispatcher();
    }
  }
  function isJsdom() {
    var tmp$ = !equals(typeof navigator, UNDEFINED_0) && navigator != null && navigator.userAgent != null;
    if (tmp$) {
      tmp$ = !equals(typeof navigator.userAgent, UNDEFINED_0);
    }
    var tmp$_0 = tmp$;
    if (tmp$_0) {
      tmp$_0 = !equals(typeof navigator.userAgent.match, UNDEFINED_0);
    }
    return tmp$_0 && navigator.userAgent.match('\\bjsdom\\b');
  }
  function get_DefaultDelay() {
    var tmp$;
    return Kotlin.isType(tmp$ = Dispatchers_getInstance().Default, Delay) ? tmp$ : throwCCE();
  }
  function newCoroutineContext($receiver, context) {
    var combined = $receiver.coroutineContext.plus_1fupul$(context);
    return combined !== Dispatchers_getInstance().Default && combined.get_j3r2sn$(ContinuationInterceptor.Key) == null ? combined.plus_1fupul$(Dispatchers_getInstance().Default) : combined;
  }
  function toDebugString($receiver) {
    return $receiver.toString();
  }
  function get_coroutineName($receiver) {
    return null;
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  function get_hexAddress($receiver) {
    var tmp$;
    var result = $receiver.__debug_counter;
    if (typeof result !== 'number') {
      result = (counter = counter + 1 | 0, counter);
      $receiver.__debug_counter = result;
    }
    return (typeof (tmp$ = result) === 'number' ? tmp$ : throwCCE()).toString();
  }
  function get_classSimpleName($receiver) {
    var tmp$;
    return (tmp$ = Kotlin.getKClassFromExpression($receiver).simpleName) != null ? tmp$ : 'Unknown';
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.Default = createDefaultDispatcher();
    this.Main = new JsMainDispatcher(this.Default);
    this.Unconfined = Unconfined_getInstance();
  }
  Dispatchers.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Dispatchers', interfaces: []};
  var Dispatchers_instance = null;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance === null) {
      new Dispatchers();
    }
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate) {
    MainCoroutineDispatcher.call(this);
    this.delegate = delegate;
  }
  Object.defineProperty(JsMainDispatcher.prototype, 'immediate', {get: function () {
    throw UnsupportedOperationException_init('Immediate dispatching is not supported on JS');
  }});
  JsMainDispatcher.prototype.dispatch_5bn72i$ = function (context, block) {
    this.delegate.dispatch_5bn72i$(context, block);
  };
  JsMainDispatcher.prototype.isDispatchNeeded_1fupul$ = function (context) {
    return this.delegate.isDispatchNeeded_1fupul$(context);
  };
  JsMainDispatcher.prototype.dispatchYield_5bn72i$ = function (context, block) {
    this.delegate.dispatchYield_5bn72i$(context, block);
  };
  JsMainDispatcher.prototype.toString = function () {
    return this.delegate.toString();
  };
  JsMainDispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsMainDispatcher', interfaces: [MainCoroutineDispatcher]};
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.dispatch_5bn72i$ = function (context, block) {
    throw UnsupportedOperationException_init('runBlocking event loop is not supported');
  };
  UnconfinedEventLoop.$metadata$ = {kind: Kind_CLASS, simpleName: 'UnconfinedEventLoop', interfaces: [EventLoop]};
  function CompletionHandlerException(message, cause) {
    RuntimeException_init(withCause(message, cause), this);
    this.cause_vrgn1e$_0 = cause;
    this.name = 'CompletionHandlerException';
  }
  Object.defineProperty(CompletionHandlerException.prototype, 'cause', {get: function () {
    return this.cause_vrgn1e$_0;
  }});
  CompletionHandlerException.$metadata$ = {kind: Kind_CLASS, simpleName: 'CompletionHandlerException', interfaces: [RuntimeException]};
  function CancellationException(message) {
    IllegalStateException_init(message, this);
    this.name = 'CancellationException';
  }
  CancellationException.$metadata$ = {kind: Kind_CLASS, simpleName: 'CancellationException', interfaces: [IllegalStateException]};
  function JobCancellationException(message, cause, job) {
    CancellationException.call(this, withCause(message, cause));
    this.cause_vdkwcs$_0 = cause;
    this.job_8be2vx$ = job;
    this.name = 'JobCancellationException';
  }
  Object.defineProperty(JobCancellationException.prototype, 'cause', {get: function () {
    return this.cause_vdkwcs$_0;
  }});
  JobCancellationException.prototype.toString = function () {
    return CancellationException.prototype.toString.call(this) + '; job=' + this.job_8be2vx$;
  };
  JobCancellationException.prototype.equals = function (other) {
    return other === this || (Kotlin.isType(other, JobCancellationException) && equals(other.message, this.message) && equals(other.job_8be2vx$, this.job_8be2vx$) && equals(other.cause, this.cause));
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp$, tmp$_0;
    return (((hashCode(ensureNotNull(this.message)) * 31 | 0) + hashCode(this.job_8be2vx$) | 0) * 31 | 0) + ((tmp$_0 = (tmp$ = this.cause) != null ? hashCode(tmp$) : null) != null ? tmp$_0 : 0) | 0;
  };
  JobCancellationException.$metadata$ = {kind: Kind_CLASS, simpleName: 'JobCancellationException', interfaces: [CancellationException]};
  function DispatchException(message, cause) {
    RuntimeException_init(withCause(message, cause), this);
    this.name = 'DispatchException';
  }
  DispatchException.$metadata$ = {kind: Kind_CLASS, simpleName: 'DispatchException', interfaces: [RuntimeException]};
  function IllegalStateException_0(message, cause) {
    return IllegalStateException_init(withCause(message, cause));
  }
  function withCause($receiver, cause) {
    return cause == null ? $receiver : $receiver + '; caused by ' + toString(cause);
  }
  var MAX_DELAY;
  function delayToInt(timeMillis) {
    return coerceIn(timeMillis, L0, MAX_DELAY).toInt();
  }
  function NodeDispatcher() {
    CoroutineDispatcher.call(this);
  }
  function NodeDispatcher$dispatch$lambda(closure$block) {
    return function () {
      closure$block.run();
      return Unit;
    };
  }
  NodeDispatcher.prototype.dispatch_5bn72i$ = function (context, block) {
    setTimeout(NodeDispatcher$dispatch$lambda(block), 0);
  };
  function NodeDispatcher$scheduleResumeAfterDelay$lambda(closure$continuation, this$NodeDispatcher) {
    return function () {
      var receiver = closure$continuation;
      receiver.resumeUndispatched_hyuxa3$(this$NodeDispatcher, Unit);
      return Unit;
    };
  }
  NodeDispatcher.prototype.scheduleResumeAfterDelay_egqmvs$ = function (timeMillis, continuation) {
    var handle = setTimeout(NodeDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    continuation.invokeOnCancellation_f05bi3$(new NodeDispatcher$ClearTimeout(handle));
  };
  function NodeDispatcher$ClearTimeout(handle) {
    CancelHandler.call(this);
    this.handle_0 = handle;
  }
  NodeDispatcher$ClearTimeout.prototype.dispose = function () {
    clearTimeout(this.handle_0);
  };
  NodeDispatcher$ClearTimeout.prototype.invoke = function (cause) {
    this.dispose();
  };
  NodeDispatcher$ClearTimeout.prototype.toString = function () {
    return 'ClearTimeout[' + this.handle_0 + ']';
  };
  NodeDispatcher$ClearTimeout.$metadata$ = {kind: Kind_CLASS, simpleName: 'ClearTimeout', interfaces: [DisposableHandle, CancelHandler]};
  function NodeDispatcher$invokeOnTimeout$lambda(closure$block) {
    return function () {
      closure$block.run();
      return Unit;
    };
  }
  NodeDispatcher.prototype.invokeOnTimeout_8irseu$ = function (timeMillis, block) {
    var handle = setTimeout(NodeDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new NodeDispatcher$ClearTimeout(handle);
  };
  NodeDispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'NodeDispatcher', interfaces: [Delay, CoroutineDispatcher]};
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.window_0 = window_0;
    this.messageName_0 = 'dispatchCoroutine';
    this.queue_0 = new WindowDispatcher$queue$ObjectLiteral(this);
    this.window_0.addEventListener('message', WindowDispatcher_init$lambda(this), true);
  }
  WindowDispatcher.prototype.dispatch_5bn72i$ = function (context, block) {
    this.queue_0.enqueue_771g0p$(block);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda(closure$continuation, this$WindowDispatcher) {
    return function () {
      var receiver = closure$continuation;
      receiver.resumeUndispatched_hyuxa3$(this$WindowDispatcher, Unit);
      return Unit;
    };
  }
  WindowDispatcher.prototype.scheduleResumeAfterDelay_egqmvs$ = function (timeMillis, continuation) {
    this.window_0.setTimeout(WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
  };
  function WindowDispatcher$invokeOnTimeout$lambda(closure$block) {
    return function () {
      closure$block.run();
      return Unit;
    };
  }
  function WindowDispatcher$invokeOnTimeout$ObjectLiteral(this$WindowDispatcher, closure$handle) {
    this.this$WindowDispatcher = this$WindowDispatcher;
    this.closure$handle = closure$handle;
  }
  WindowDispatcher$invokeOnTimeout$ObjectLiteral.prototype.dispose = function () {
    this.this$WindowDispatcher.window_0.clearTimeout(this.closure$handle);
  };
  WindowDispatcher$invokeOnTimeout$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [DisposableHandle]};
  WindowDispatcher.prototype.invokeOnTimeout_8irseu$ = function (timeMillis, block) {
    var handle = this.window_0.setTimeout(WindowDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new WindowDispatcher$invokeOnTimeout$ObjectLiteral(this, handle);
  };
  function WindowDispatcher$queue$ObjectLiteral(this$WindowDispatcher) {
    this.this$WindowDispatcher = this$WindowDispatcher;
    MessageQueue.call(this);
  }
  WindowDispatcher$queue$ObjectLiteral.prototype.schedule = function () {
    this.this$WindowDispatcher.window_0.postMessage(this.this$WindowDispatcher.messageName_0, '*');
  };
  WindowDispatcher$queue$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [MessageQueue]};
  function WindowDispatcher_init$lambda(this$WindowDispatcher) {
    return function (event) {
      if (event.source == this$WindowDispatcher.window_0 && event.data == this$WindowDispatcher.messageName_0) {
        event.stopPropagation();
        this$WindowDispatcher.queue_0.process();
      }
      return Unit;
    };
  }
  WindowDispatcher.$metadata$ = {kind: Kind_CLASS, simpleName: 'WindowDispatcher', interfaces: [Delay, CoroutineDispatcher]};
  function MessageQueue() {
    ArrayQueue.call(this);
    this.yieldEvery = 16;
    this.scheduled_0 = false;
  }
  MessageQueue.prototype.enqueue_771g0p$ = function (element) {
    this.addLast_trkh7z$(element);
    if (!this.scheduled_0) {
      this.scheduled_0 = true;
      this.schedule();
    }
  };
  MessageQueue.prototype.process = function () {
    try {
      var times = this.yieldEvery;
      for (var index = 0; index < times; index++) {
        var tmp$;
        tmp$ = this.removeFirstOrNull();
        if (tmp$ == null) {
          return;
        }
        var element = tmp$;
        element.run();
      }
    }
    finally {
      if (this.isEmpty) {
        this.scheduled_0 = false;
      }
       else {
        this.schedule();
      }
    }
  };
  MessageQueue.$metadata$ = {kind: Kind_CLASS, simpleName: 'MessageQueue', interfaces: [ArrayQueue]};
  function Runnable() {
  }
  Runnable.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Runnable', interfaces: []};
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = {kind: Kind_CLASS, simpleName: 'SchedulerTask', interfaces: [Runnable]};
  function get_taskContext($receiver) {
  }
  function asCoroutineDispatcher($receiver) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = $receiver.coroutineDispatcher) != null)
      tmp$_0 = tmp$;
    else {
      var $receiver_0 = new WindowDispatcher($receiver);
      $receiver.coroutineDispatcher = $receiver_0;
      tmp$_0 = $receiver_0;
    }
    return tmp$_0;
  }
  function arraycopy(source, srcPos, destination, destinationStart, length) {
    var tmp$, tmp$_0;
    var destinationIndex = destinationStart;
    tmp$ = srcPos + length | 0;
    for (var sourceIndex = srcPos; sourceIndex < tmp$; sourceIndex++) {
      destination[tmp$_0 = destinationIndex, destinationIndex = tmp$_0 + 1 | 0, tmp$_0] = source[sourceIndex];
    }
  }
  function NoOpLock() {
  }
  NoOpLock.prototype.tryLock = function () {
    return true;
  };
  NoOpLock.prototype.unlock = function () {
  };
  NoOpLock.$metadata$ = {kind: Kind_CLASS, simpleName: 'NoOpLock', interfaces: []};
  function identitySet(expectedSize) {
    return HashSet_init_0(expectedSize);
  }
  function LinkedListNode() {
    this._next = this;
    this._prev = this;
    this._removed = false;
  }
  Object.defineProperty(LinkedListNode.prototype, 'nextNode', {get: defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListNode.get_nextNode', function () {
    return this._next;
  })});
  Object.defineProperty(LinkedListNode.prototype, 'prevNode', {get: defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListNode.get_prevNode', function () {
    return this._prev;
  })});
  Object.defineProperty(LinkedListNode.prototype, 'isRemoved', {get: defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListNode.get_isRemoved', function () {
    return this._removed;
  })});
  LinkedListNode.prototype.addLast_l2j9rm$ = function (node) {
    var prev = this._prev;
    node._next = this;
    node._prev = prev;
    prev._next = node;
    this._prev = node;
  };
  LinkedListNode.prototype.remove = function () {
    if (this._removed)
      return false;
    var prev = this._prev;
    var next = this._next;
    prev._next = next;
    next._prev = prev;
    this._removed = true;
    return true;
  };
  LinkedListNode.prototype.addOneIfEmpty_l2j9rm$ = function (node) {
    if (this._next !== this)
      return false;
    this.addLast_l2j9rm$(node);
    return true;
  };
  LinkedListNode.prototype.addLastIf_w327v9$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListNode.addLastIf_w327v9$', function (node, condition) {
    if (!condition())
      return false;
    this.addLast_l2j9rm$(node);
    return true;
  });
  LinkedListNode.prototype.addLastIfPrev_s8xlln$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListNode.addLastIfPrev_s8xlln$', function (node, predicate) {
    if (!predicate(this._prev))
      return false;
    this.addLast_l2j9rm$(node);
    return true;
  });
  LinkedListNode.prototype.addLastIfPrevAndIf_dzcug$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListNode.addLastIfPrevAndIf_dzcug$', function (node, predicate, condition) {
    if (!predicate(this._prev))
      return false;
    if (!condition())
      return false;
    this.addLast_l2j9rm$(node);
    return true;
  });
  LinkedListNode.prototype.helpRemove = function () {
  };
  LinkedListNode.prototype.removeFirstOrNull = function () {
    var next = this._next;
    if (next === this)
      return null;
    if (!next.remove()) {
      var message = 'Should remove';
      throw IllegalStateException_init(message.toString());
    }
    return next;
  };
  LinkedListNode.prototype.removeFirstIfIsInstanceOfOrPeekIf_14urrv$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListNode.removeFirstIfIsInstanceOfOrPeekIf_14urrv$', wrapFunction(function () {
    var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
    return function (T_0, isT, predicate) {
      var next = this._next;
      if (next === this)
        return null;
      if (!isT(next))
        return null;
      if (predicate(next))
        return next;
      if (!next.remove()) {
        var message = 'Should remove';
        throw IllegalStateException_init(message.toString());
      }
      return next;
    };
  }));
  LinkedListNode.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinkedListNode', interfaces: []};
  function AddLastDesc(queue, node) {
    AbstractAtomicDesc.call(this);
    this.queue = queue;
    this.node = node;
  }
  Object.defineProperty(AddLastDesc.prototype, 'affectedNode', {get: function () {
    return this.queue._prev;
  }});
  AddLastDesc.prototype.onPrepare_bpl3tg$ = function (affected, next) {
    return null;
  };
  AddLastDesc.prototype.onComplete = function () {
    this.queue.addLast_l2j9rm$(this.node);
  };
  AddLastDesc.prototype.finishOnSuccess_bpl3tg$ = function (affected, next) {
  };
  AddLastDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'AddLastDesc', interfaces: [AbstractAtomicDesc]};
  function RemoveFirstDesc(queue) {
    AbstractAtomicDesc.call(this);
    this.queue = queue;
    this.affectedNode_rjf1fm$_0 = this.queue._next;
  }
  Object.defineProperty(RemoveFirstDesc.prototype, 'result', {get: function () {
    var tmp$;
    return (tmp$ = this.affectedNode) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  }});
  Object.defineProperty(RemoveFirstDesc.prototype, 'affectedNode', {get: function () {
    return this.affectedNode_rjf1fm$_0;
  }});
  RemoveFirstDesc.prototype.validatePrepared_11rb$ = function (node) {
    return true;
  };
  RemoveFirstDesc.prototype.onPrepare_bpl3tg$ = function (affected, next) {
    var tmp$;
    this.validatePrepared_11rb$((tmp$ = this.affectedNode) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE());
    return null;
  };
  RemoveFirstDesc.prototype.onComplete = function () {
    this.queue.removeFirstOrNull();
  };
  RemoveFirstDesc.prototype.finishOnSuccess_bpl3tg$ = function (affected, next) {
  };
  RemoveFirstDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'RemoveFirstDesc', interfaces: [AbstractAtomicDesc]};
  function AbstractAtomicDesc() {
    AtomicDesc.call(this);
  }
  AbstractAtomicDesc.prototype.prepare_4uxf5b$ = function (op) {
    var affected = this.affectedNode;
    var next = affected._next;
    var failure = this.failure_ru8hrx$(affected, next);
    if (failure != null)
      return failure;
    return this.onPrepare_bpl3tg$(affected, next);
  };
  AbstractAtomicDesc.prototype.complete_ayrq83$ = function (op, failure) {
    this.onComplete();
  };
  AbstractAtomicDesc.prototype.failure_ru8hrx$ = function (affected, next) {
    return null;
  };
  AbstractAtomicDesc.prototype.retry_ru8hrx$ = function (affected, next) {
    return false;
  };
  AbstractAtomicDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractAtomicDesc', interfaces: [AtomicDesc]};
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  Object.defineProperty(LinkedListHead.prototype, 'isEmpty', {get: function () {
    return this._next === this;
  }});
  LinkedListHead.prototype.forEach_jgwmnf$ = defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.LinkedListHead.forEach_jgwmnf$', wrapFunction(function () {
    var equals = Kotlin.equals;
    return function (T_0, isT, block) {
      var cur = this._next;
      while (!equals(cur, this)) {
        if (isT(cur))
          block(cur);
        cur = cur._next;
      }
    };
  }));
  LinkedListHead.prototype.remove = function () {
    throw UnsupportedOperationException_init_0();
  };
  LinkedListHead.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinkedListHead', interfaces: [LinkedListNode]};
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  defineInlineFunction('kotlinx-coroutines-core.kotlinx.coroutines.internal.recoverAndThrow_8o0b5c$', function (exception_0, continuation) {
    throw exception_0;
  });
  function unwrap(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CoroutineStackFrame', interfaces: []};
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.value_0 = null;
  }
  CommonThreadLocal.prototype.get = function () {
    var tmp$;
    return (tmp$ = this.value_0) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  CommonThreadLocal.prototype.set_11rb$ = function (value) {
    this.value_0 = value;
  };
  CommonThreadLocal.$metadata$ = {kind: Kind_CLASS, simpleName: 'CommonThreadLocal', interfaces: []};
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$coroutines = package$kotlinx.coroutines || (package$kotlinx.coroutines = {});
  package$coroutines.AbstractCoroutine = AbstractCoroutine;
  package$coroutines.launch_s496o7$ = launch;
  package$coroutines.async_pda6u4$ = async;
  package$coroutines.CancellableContinuation = CancellableContinuation;
  package$coroutines.removeOnCancellation_1u31dd$ = removeOnCancellation;
  package$coroutines.disposeOnCancellation_xredcy$ = disposeOnCancellation;
  package$coroutines.CancellableContinuationImpl = CancellableContinuationImpl;
  package$coroutines.NotCompleted = NotCompleted;
  package$coroutines.CancelHandler = CancelHandler;
  package$coroutines.CompletableDeferred = CompletableDeferred;
  package$coroutines.CompletableDeferred_xptg6w$ = CompletableDeferred_0;
  package$coroutines.toState_dwruuz$ = toState;
  package$coroutines.CompletedExceptionally = CompletedExceptionally;
  package$coroutines.CancelledContinuation = CancelledContinuation;
  package$coroutines.CoroutineDispatcher = CoroutineDispatcher;
  package$coroutines.handleCoroutineException_qb3u6s$ = handleCoroutineException;
  package$coroutines.handleExceptionViaHandler_1ur55u$ = handleExceptionViaHandler;
  package$coroutines.handlerException_l3aqr5$ = handlerException;
  package$coroutines.CoroutineExceptionHandler = CoroutineExceptionHandler_0;
  Object.defineProperty(CoroutineExceptionHandler_0, 'Key', {get: CoroutineExceptionHandler$Key_getInstance});
  package$coroutines.CoroutineScope = CoroutineScope;
  Object.defineProperty(package$coroutines, 'GlobalScope', {get: GlobalScope_getInstance});
  package$coroutines.Job = Job;
  Object.defineProperty(CoroutineStart, 'DEFAULT', {get: CoroutineStart$DEFAULT_getInstance});
  Object.defineProperty(CoroutineStart, 'LAZY', {get: CoroutineStart$LAZY_getInstance});
  Object.defineProperty(CoroutineStart, 'ATOMIC', {get: CoroutineStart$ATOMIC_getInstance});
  Object.defineProperty(CoroutineStart, 'UNDISPATCHED', {get: CoroutineStart$UNDISPATCHED_getInstance});
  package$coroutines.CoroutineStart = CoroutineStart;
  package$coroutines.Deferred = Deferred;
  package$coroutines.Delay = Delay;
  package$coroutines.delay_s8cxhz$ = delay;
  package$coroutines.get_delay_tcgsej$ = get_delay;
  package$coroutines.DispatchedContinuation = DispatchedContinuation;
  package$coroutines.resumeCancellable_74ftok$ = resumeCancellable;
  package$coroutines.resumeCancellableWithException_by4i3t$ = resumeCancellableWithException;
  package$coroutines.resumeDirect_74ftok$ = resumeDirect;
  package$coroutines.resumeDirectWithException_by4i3t$ = resumeDirectWithException;
  package$coroutines.DispatchedTask = DispatchedTask;
  package$coroutines.dispatch_h66hf9$ = dispatch;
  package$coroutines.resume_yw0jex$ = resume;
  var package$internal = package$coroutines.internal || (package$coroutines.internal = {});
  package$internal.recoverStackTrace_ak2v6d$ = recoverStackTrace;
  package$coroutines.EventLoop = EventLoop;
  Object.defineProperty(package$coroutines, 'ThreadLocalEventLoop', {get: ThreadLocalEventLoop_getInstance});
  Object.defineProperty(Job, 'Key', {get: Job$Key_getInstance});
  package$coroutines.Job_5dx9e$ = Job_0;
  package$coroutines.DisposableHandle = DisposableHandle;
  package$coroutines.ChildJob = ChildJob;
  package$coroutines.ParentJob = ParentJob;
  package$coroutines.ChildHandle = ChildHandle;
  package$coroutines.cancelAndJoin_5dx9u$ = cancelAndJoin;
  Object.defineProperty(package$coroutines, 'NonDisposableHandle', {get: NonDisposableHandle_getInstance});
  package$coroutines.JobSupport = JobSupport;
  package$coroutines.unboxState_ntq51o$ = unboxState;
  package$coroutines.JobImpl = JobImpl;
  package$coroutines.Incomplete = Incomplete;
  package$coroutines.JobNode = JobNode;
  package$coroutines.NodeList = NodeList;
  package$coroutines.InactiveNodeList = InactiveNodeList;
  package$coroutines.JobCancellingNode = JobCancellingNode;
  package$coroutines.ChildHandleNode = ChildHandleNode;
  package$coroutines.ChildContinuation = ChildContinuation;
  package$coroutines.MainCoroutineDispatcher = MainCoroutineDispatcher;
  package$coroutines.get_isCancellableMode_8e50z4$ = get_isCancellableMode;
  package$coroutines.get_isDispatchedMode_8e50z4$ = get_isDispatchedMode;
  package$coroutines.resumeMode_mpdt7i$ = resumeMode;
  package$coroutines.resumeWithExceptionMode_gffq93$ = resumeWithExceptionMode;
  Object.defineProperty(package$coroutines, 'Unconfined', {get: Unconfined_getInstance});
  package$coroutines.checkCompletion_tcgsej$ = checkCompletion;
  var package$channels = package$coroutines.channels || (package$coroutines.channels = {});
  package$channels.AbstractSendChannel = AbstractSendChannel;
  package$channels.AbstractChannel = AbstractChannel;
  package$channels.Send = Send;
  package$channels.ReceiveOrClosed = ReceiveOrClosed;
  package$channels.SendElement = SendElement;
  package$channels.Closed = Closed;
  package$channels.ArrayChannel = ArrayChannel;
  package$channels.BroadcastChannel = BroadcastChannel;
  package$channels.SendChannel = SendChannel;
  package$channels.ReceiveChannel = ReceiveChannel;
  package$channels.ChannelIterator = ChannelIterator;
  Object.defineProperty(Channel, 'Factory', {get: Channel$Factory_getInstance});
  package$channels.Channel = Channel;
  package$channels.Channel_ww73n8$ = Channel_0;
  package$channels.ClosedSendChannelException = ClosedSendChannelException;
  package$channels.ClosedReceiveChannelException = ClosedReceiveChannelException;
  package$channels.ChannelCoroutine = ChannelCoroutine;
  package$channels.ConflatedBroadcastChannel = ConflatedBroadcastChannel;
  package$channels.ConflatedChannel = ConflatedChannel;
  package$channels.LinkedListChannel = LinkedListChannel;
  package$channels.ProducerScope = ProducerScope;
  package$channels.RendezvousChannel = RendezvousChannel;
  package$internal.ArrayQueue = ArrayQueue;
  package$internal.OpDescriptor = OpDescriptor;
  package$internal.AtomicOp = AtomicOp;
  package$internal.AtomicDesc = AtomicDesc;
  package$internal.Symbol = Symbol;
  var package$intrinsics = package$coroutines.intrinsics || (package$coroutines.intrinsics = {});
  package$intrinsics.startCoroutineCancellable_81hn2s$ = startCoroutineCancellable;
  package$intrinsics.startCoroutineCancellable_kew4v3$ = startCoroutineCancellable_0;
  package$intrinsics.startCoroutineUnintercepted_81hn2s$ = startCoroutineUnintercepted;
  package$intrinsics.startCoroutineUnintercepted_kew4v3$ = startCoroutineUnintercepted_0;
  package$intrinsics.startCoroutineUndispatched_81hn2s$ = startCoroutineUndispatched;
  package$intrinsics.startCoroutineUndispatched_kew4v3$ = startCoroutineUndispatched_0;
  var package$selects = package$coroutines.selects || (package$coroutines.selects = {});
  package$selects.SelectBuilder = SelectBuilder;
  package$selects.SelectClause0 = SelectClause0;
  package$selects.SelectClause1 = SelectClause1;
  package$selects.SelectClause2 = SelectClause2;
  package$selects.SelectInstance = SelectInstance;
  package$selects.SelectBuilderImpl = SelectBuilderImpl;
  package$selects.UnbiasedSelectBuilderImpl = UnbiasedSelectBuilderImpl;
  package$coroutines.CompletionHandlerBase = CompletionHandlerBase;
  package$coroutines.CancelHandlerBase = CancelHandlerBase;
  package$coroutines.invokeIt_beznmj$ = invokeIt;
  package$coroutines.createDefaultDispatcher_8be2vx$ = createDefaultDispatcher;
  Object.defineProperty(package$coroutines, 'DefaultDelay_8be2vx$', {get: get_DefaultDelay});
  package$coroutines.newCoroutineContext_7n4184$ = newCoroutineContext;
  package$coroutines.toDebugString_u0ddlz$ = toDebugString;
  package$coroutines.get_coroutineName_tcgsej$ = get_coroutineName;
  package$coroutines.handleCoroutineExceptionImpl_yfv4gr$ = handleCoroutineExceptionImpl;
  package$coroutines.get_hexAddress_8ea4r1$ = get_hexAddress;
  package$coroutines.get_classSimpleName_8ea4r1$ = get_classSimpleName;
  Object.defineProperty(package$coroutines, 'Dispatchers', {get: Dispatchers_getInstance});
  package$coroutines.createEventLoop_8be2vx$ = createEventLoop;
  package$coroutines.UnconfinedEventLoop = UnconfinedEventLoop;
  package$coroutines.CompletionHandlerException = CompletionHandlerException;
  package$coroutines.CancellationException = CancellationException;
  package$coroutines.JobCancellationException = JobCancellationException;
  package$coroutines.DispatchException = DispatchException;
  package$coroutines.IllegalStateException_ly7if3$ = IllegalStateException_0;
  package$coroutines.NodeDispatcher = NodeDispatcher;
  package$coroutines.WindowDispatcher = WindowDispatcher;
  package$coroutines.MessageQueue = MessageQueue;
  package$coroutines.Runnable = Runnable;
  package$coroutines.SchedulerTask = SchedulerTask;
  package$coroutines.get_taskContext_5sfo4y$ = get_taskContext;
  package$coroutines.asCoroutineDispatcher_nz12v2$ = asCoroutineDispatcher;
  package$internal.arraycopy_t6l26v$ = arraycopy;
  package$internal.NoOpLock = NoOpLock;
  package$internal.identitySet_46rbr$ = identitySet;
  package$internal.LinkedListNode = LinkedListNode;
  package$internal.AddLastDesc = AddLastDesc;
  package$internal.RemoveFirstDesc = RemoveFirstDesc;
  package$internal.AbstractAtomicDesc = AbstractAtomicDesc;
  package$internal.LinkedListHead = LinkedListHead;
  package$internal.recoverStackTrace_87698k$ = recoverStackTrace_0;
  package$internal.unwrap_87698k$ = unwrap;
  package$internal.CoroutineStackFrame = CoroutineStackFrame;
  package$internal.threadContextElements_v4qu62$ = threadContextElements;
  package$internal.CommonThreadLocal = CommonThreadLocal;
  Job.prototype.plus_1fupul$ = CoroutineContext$Element.prototype.plus_1fupul$;
  Job.prototype.fold_3cc69b$ = CoroutineContext$Element.prototype.fold_3cc69b$;
  Job.prototype.get_j3r2sn$ = CoroutineContext$Element.prototype.get_j3r2sn$;
  Job.prototype.minusKey_yeqjby$ = CoroutineContext$Element.prototype.minusKey_yeqjby$;
  ChildJob.prototype.cancel0 = Job.prototype.cancel0;
  ChildJob.prototype.plus_dqr1mp$ = Job.prototype.plus_dqr1mp$;
  ChildJob.prototype.plus_1fupul$ = Job.prototype.plus_1fupul$;
  ChildJob.prototype.fold_3cc69b$ = Job.prototype.fold_3cc69b$;
  ChildJob.prototype.get_j3r2sn$ = Job.prototype.get_j3r2sn$;
  ChildJob.prototype.minusKey_yeqjby$ = Job.prototype.minusKey_yeqjby$;
  ChildJob.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  ChildJob.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  ParentJob.prototype.cancel0 = Job.prototype.cancel0;
  ParentJob.prototype.plus_dqr1mp$ = Job.prototype.plus_dqr1mp$;
  ParentJob.prototype.plus_1fupul$ = Job.prototype.plus_1fupul$;
  ParentJob.prototype.fold_3cc69b$ = Job.prototype.fold_3cc69b$;
  ParentJob.prototype.get_j3r2sn$ = Job.prototype.get_j3r2sn$;
  ParentJob.prototype.minusKey_yeqjby$ = Job.prototype.minusKey_yeqjby$;
  ParentJob.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  ParentJob.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  JobSupport.prototype.cancel0 = Job.prototype.cancel0;
  JobSupport.prototype.plus_dqr1mp$ = Job.prototype.plus_dqr1mp$;
  JobSupport.prototype.plus_1fupul$ = Job.prototype.plus_1fupul$;
  JobSupport.prototype.fold_3cc69b$ = Job.prototype.fold_3cc69b$;
  JobSupport.prototype.get_j3r2sn$ = Job.prototype.get_j3r2sn$;
  JobSupport.prototype.minusKey_yeqjby$ = Job.prototype.minusKey_yeqjby$;
  JobSupport.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  JobSupport.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  Deferred.prototype.cancel0 = Job.prototype.cancel0;
  Deferred.prototype.plus_dqr1mp$ = Job.prototype.plus_dqr1mp$;
  Deferred.prototype.plus_1fupul$ = Job.prototype.plus_1fupul$;
  Deferred.prototype.fold_3cc69b$ = Job.prototype.fold_3cc69b$;
  Deferred.prototype.get_j3r2sn$ = Job.prototype.get_j3r2sn$;
  Deferred.prototype.minusKey_yeqjby$ = Job.prototype.minusKey_yeqjby$;
  Deferred.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  Deferred.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  CancellableContinuationImpl.prototype.cancel_dbl4no$ = CancellableContinuation.prototype.cancel_dbl4no$;
  CancellableContinuationImpl.prototype.tryResume_19pj23$ = CancellableContinuation.prototype.tryResume_19pj23$;
  CompletableDeferred.prototype.cancel0 = Deferred.prototype.cancel0;
  CompletableDeferred.prototype.plus_dqr1mp$ = Deferred.prototype.plus_dqr1mp$;
  CompletableDeferred.prototype.plus_1fupul$ = Deferred.prototype.plus_1fupul$;
  CompletableDeferred.prototype.fold_3cc69b$ = Deferred.prototype.fold_3cc69b$;
  CompletableDeferred.prototype.get_j3r2sn$ = Deferred.prototype.get_j3r2sn$;
  CompletableDeferred.prototype.minusKey_yeqjby$ = Deferred.prototype.minusKey_yeqjby$;
  CompletableDeferred.prototype.cancel_dbl4no$ = Deferred.prototype.cancel_dbl4no$;
  CompletableDeferred.prototype.invokeOnCompletion_ct2b2z$ = Deferred.prototype.invokeOnCompletion_ct2b2z$;
  CoroutineDispatcher.prototype.get_j3r2sn$ = ContinuationInterceptor.prototype.get_j3r2sn$;
  CoroutineDispatcher.prototype.minusKey_yeqjby$ = ContinuationInterceptor.prototype.minusKey_yeqjby$;
  CoroutineDispatcher.prototype.releaseInterceptedContinuation_k98bjh$ = ContinuationInterceptor.prototype.releaseInterceptedContinuation_k98bjh$;
  CoroutineExceptionHandler_0.prototype.fold_3cc69b$ = CoroutineContext$Element.prototype.fold_3cc69b$;
  CoroutineExceptionHandler_0.prototype.get_j3r2sn$ = CoroutineContext$Element.prototype.get_j3r2sn$;
  CoroutineExceptionHandler_0.prototype.minusKey_yeqjby$ = CoroutineContext$Element.prototype.minusKey_yeqjby$;
  CoroutineExceptionHandler_0.prototype.plus_1fupul$ = CoroutineContext$Element.prototype.plus_1fupul$;
  NonCancellable.prototype.plus_dqr1mp$ = Job.prototype.plus_dqr1mp$;
  NonCancellable.prototype.cancel0 = Job.prototype.cancel0;
  NonCancellable.prototype.invokeOnCompletion_ct2b2z$ = Job.prototype.invokeOnCompletion_ct2b2z$;
  NonCancellable.prototype.cancel_dbl4no$ = Job.prototype.cancel_dbl4no$;
  AbstractSendChannel.prototype.close_dbl4no$ = SendChannel.prototype.close_dbl4no$;
  Channel.prototype.cancel0 = ReceiveChannel.prototype.cancel0;
  Channel.prototype.close_dbl4no$ = SendChannel.prototype.close_dbl4no$;
  Channel.prototype.cancel_dbl4no$ = ReceiveChannel.prototype.cancel_dbl4no$;
  AbstractChannel.prototype.cancel0 = Channel.prototype.cancel0;
  AbstractChannel.prototype.cancel_dbl4no$ = Channel.prototype.cancel_dbl4no$;
  BroadcastChannel.prototype.close_dbl4no$ = SendChannel.prototype.close_dbl4no$;
  ProducerScope.prototype.close_dbl4no$ = SendChannel.prototype.close_dbl4no$;
  BroadcastCoroutine.prototype.close_dbl4no$ = ProducerScope.prototype.close_dbl4no$;
  ChannelCoroutine.prototype.close_dbl4no$ = Channel.prototype.close_dbl4no$;
  ConflatedBroadcastChannel.prototype.close_dbl4no$ = BroadcastChannel.prototype.close_dbl4no$;
  SelectBuilderImpl.prototype.invoke_en0wgx$ = SelectBuilder.prototype.invoke_en0wgx$;
  UnbiasedSelectBuilderImpl.prototype.invoke_en0wgx$ = SelectBuilder.prototype.invoke_en0wgx$;
  NodeDispatcher.prototype.delay_s8cxhz$ = Delay.prototype.delay_s8cxhz$;
  WindowDispatcher.prototype.delay_s8cxhz$ = Delay.prototype.delay_s8cxhz$;
  UNDECIDED = 0;
  SUSPENDED = 1;
  RESUMED = 2;
  UNDECIDED_0 = 0;
  SUSPENDED_0 = 1;
  RESUMED_0 = 2;
  UNDEFINED = new Symbol('UNDEFINED');
  COMPLETING_ALREADY_COMPLETING = 0;
  COMPLETING_COMPLETED = 1;
  COMPLETING_WAITING_CHILDREN = 2;
  COMPLETING_RETRY = 3;
  RETRY = -1;
  FALSE = 0;
  TRUE = 1;
  SEALED = new Symbol('SEALED');
  EMPTY_NEW = new Empty(false);
  EMPTY_ACTIVE = new Empty(true);
  MODE_ATOMIC_DEFAULT = 0;
  MODE_CANCELLABLE = 1;
  MODE_DIRECT = 2;
  MODE_UNDISPATCHED = 3;
  MODE_IGNORE = 4;
  OFFER_SUCCESS = new Symbol('OFFER_SUCCESS');
  OFFER_FAILED = new Symbol('OFFER_FAILED');
  POLL_FAILED = new Symbol('POLL_FAILED');
  ENQUEUE_FAILED = new Symbol('ENQUEUE_FAILED');
  SELECT_STARTED = new Symbol('SELECT_STARTED');
  NULL_VALUE = new Symbol('NULL_VALUE');
  CLOSE_RESUMED = new Symbol('CLOSE_RESUMED');
  SEND_RESUMED = new Symbol('SEND_RESUMED');
  HANDLER_INVOKED = new Symbol('ON_CLOSE_HANDLER_INVOKED');
  DEFAULT_CLOSE_MESSAGE = 'Channel was closed';
  NO_DECISION = new Symbol('NO_DECISION');
  ALREADY_SELECTED = new Symbol('ALREADY_SELECTED');
  UNDECIDED_1 = new Symbol('UNDECIDED');
  RESUMED_1 = new Symbol('RESUMED');
  LOCK_FAIL = new Symbol('LOCK_FAIL');
  ENQUEUE_FAIL = new Symbol('ENQUEUE_FAIL');
  UNLOCK_FAIL = new Symbol('UNLOCK_FAIL');
  SELECT_SUCCESS = new Symbol('SELECT_SUCCESS');
  LOCKED = new Symbol('LOCKED');
  UNLOCKED = new Symbol('UNLOCKED');
  EMPTY_LOCKED = new Empty_0(LOCKED);
  EMPTY_UNLOCKED = new Empty_0(UNLOCKED);
  UNDEFINED_0 = 'undefined';
  counter = 0;
  MAX_DELAY = L2147483647;
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
