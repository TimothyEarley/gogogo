if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'gogogo-frontend'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'gogogo-frontend'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'gogogo-frontend'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'gogogo-frontend'.");
}
if (typeof this['gogogo-common'] === 'undefined') {
  throw new Error("Error loading module 'gogogo-frontend'. Its dependency 'gogogo-common' was not found. Please, check whether 'gogogo-common' is loaded prior to 'gogogo-frontend'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'gogogo-frontend'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'gogogo-frontend'.");
}
this['gogogo-frontend'] = function (_, Kotlin, $module$kotlinx_coroutines_core, $module$gogogo_common, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var L1000 = Kotlin.Long.fromInt(1000);
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var PlayerController = $module$gogogo_common.de.earley.gogogo.game.PlayerController;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var toNetFormat = $module$gogogo_common.de.earley.gogogo.game.toNetFormat_blsywv$;
  var equals = Kotlin.equals;
  var moveFromNetFormat = $module$gogogo_common.de.earley.gogogo.game.moveFromNetFormat_pdl1vz$;
  var net = $module$gogogo_common.de.earley.gogogo.net;
  var throwUPAE = Kotlin.throwUPAE;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var Unit = Kotlin.kotlin.Unit;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var toString = Kotlin.toString;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var getCallableRef = Kotlin.getCallableRef;
  var ai = $module$gogogo_common.de.earley.gogogo.ai;
  var AI = $module$gogogo_common.de.earley.gogogo.ai.AI;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var Point = $module$gogogo_common.de.earley.gogogo.game.Point;
  var ensureNotNull = Kotlin.ensureNotNull;
  var L100 = Kotlin.Long.fromInt(100);
  var PlayerInfo = $module$gogogo_common.de.earley.gogogo.net.PlayerInfo;
  var Player = $module$gogogo_common.de.earley.gogogo.game.Player;
  var ControlledGame = $module$gogogo_common.de.earley.gogogo.game.ControlledGame;
  var UIHook = $module$gogogo_common.de.earley.gogogo.game.UIHook;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var td = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_7wec05$;
  var table = $module$kotlinx_html_js.kotlinx.html.js.table_uk5qws$;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var L10 = Kotlin.Long.fromInt(10);
  var MoveResult$Error = $module$gogogo_common.de.earley.gogogo.game.MoveResult.Error;
  var Move = $module$gogogo_common.de.earley.gogogo.game.Move;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var option = $module$kotlinx_html_js.kotlinx.html.js.option_61vnh7$;
  Log$Level.prototype = Object.create(Enum.prototype);
  Log$Level.prototype.constructor = Log$Level;
  ClosedException.prototype = Object.create(Exception.prototype);
  ClosedException.prototype.constructor = ClosedException;
  ControllerTypes.prototype = Object.create(Enum.prototype);
  ControllerTypes.prototype.constructor = ControllerTypes;
  GameMode.prototype = Object.create(Enum.prototype);
  GameMode.prototype.constructor = GameMode;
  function DelayedController(pc) {
    this.pc_0 = pc;
    this.name_pw0jc$_0 = 'UI AI';
  }
  Object.defineProperty(DelayedController.prototype, 'name', {get: function () {
    return this.name_pw0jc$_0;
  }});
  DelayedController.prototype.getMove_jr41iw$ = function (lastMove_0, state_0, fromSelectCallback_0, continuation_0, suspended) {
    var instance = new Coroutine$getMove_jr41iw$(this, lastMove_0, state_0, fromSelectCallback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMove_jr41iw$($this, lastMove_0, state_0, fromSelectCallback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$move = void 0;
    this.local$lastMove = lastMove_0;
    this.local$state = state_0;
    this.local$fromSelectCallback = fromSelectCallback_0;
  }
  Coroutine$getMove_jr41iw$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$getMove_jr41iw$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMove_jr41iw$.prototype.constructor = Coroutine$getMove_jr41iw$;
  Coroutine$getMove_jr41iw$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.pc_0.getMove_jr41iw$(this.local$lastMove, this.local$state, this.local$fromSelectCallback, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$move = this.result_0;
            this.local$fromSelectCallback(this.local$move.from);
            this.state_0 = 3;
            this.result_0 = delay(L1000, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.local$move;
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
  DelayedController.$metadata$ = {kind: Kind_CLASS, simpleName: 'DelayedController', interfaces: [PlayerController]};
  function withUIAwareness($receiver) {
    return new DelayedController($receiver);
  }
  function Log() {
    Log_instance = this;
    this.level = Log$Level$Info_getInstance();
  }
  function Log$Level(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Log$Level_initFields() {
    Log$Level_initFields = function () {
    };
    Log$Level$Error_instance = new Log$Level('Error', 0, 10);
    Log$Level$Info_instance = new Log$Level('Info', 1, 5);
    Log$Level$Debug_instance = new Log$Level('Debug', 2, 0);
  }
  var Log$Level$Error_instance;
  function Log$Level$Error_getInstance() {
    Log$Level_initFields();
    return Log$Level$Error_instance;
  }
  var Log$Level$Info_instance;
  function Log$Level$Info_getInstance() {
    Log$Level_initFields();
    return Log$Level$Info_instance;
  }
  var Log$Level$Debug_instance;
  function Log$Level$Debug_getInstance() {
    Log$Level_initFields();
    return Log$Level$Debug_instance;
  }
  Log$Level.$metadata$ = {kind: Kind_CLASS, simpleName: 'Level', interfaces: [Enum]};
  function Log$Level$values() {
    return [Log$Level$Error_getInstance(), Log$Level$Info_getInstance(), Log$Level$Debug_getInstance()];
  }
  Log$Level.values = Log$Level$values;
  function Log$Level$valueOf(name) {
    switch (name) {
      case 'Error':
        return Log$Level$Error_getInstance();
      case 'Info':
        return Log$Level$Info_getInstance();
      case 'Debug':
        return Log$Level$Debug_getInstance();
      default:throwISE('No enum constant de.earley.gogogo.Log.Level.' + name);
    }
  }
  Log$Level.valueOf_61zpoe$ = Log$Level$valueOf;
  Log.prototype.error_h4ejuu$ = function (msg) {
    if (this.isEnabled_0(Log$Level$Error_getInstance()))
      println(msg());
  };
  Log.prototype.info_h4ejuu$ = function (msg) {
    if (this.isEnabled_0(Log$Level$Info_getInstance()))
      println(msg());
  };
  Log.prototype.debug_h4ejuu$ = function (msg) {
    if (this.isEnabled_0(Log$Level$Debug_getInstance()))
      println(msg());
  };
  Log.prototype.isEnabled_0 = function ($receiver) {
    return $receiver.value >= this.level.value;
  };
  Log.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Log', interfaces: []};
  var Log_instance = null;
  function Log_getInstance() {
    if (Log_instance === null) {
      new Log();
    }
    return Log_instance;
  }
  function main$lambda() {
    return 'Started main';
  }
  function main$lambda_0(it) {
    return new MenuUI();
  }
  function main() {
    Log_getInstance().debug_h4ejuu$(main$lambda);
    window.onload = main$lambda_0;
  }
  function ClosedException() {
    Exception_init(this);
    this.name = 'ClosedException';
  }
  ClosedException.$metadata$ = {kind: Kind_CLASS, simpleName: 'ClosedException', interfaces: [Exception]};
  function Connection(ws) {
    Connection$Companion_getInstance();
    this.ws_0 = ws;
  }
  Connection.prototype.sendMove_47hwoe$ = function (move) {
    this.ws_0.send_61zpoe$(toNetFormat(move));
  };
  Connection.prototype.getMove_blsywf$ = function (lastMove_0, continuation_0, suspended) {
    var instance = new Coroutine$getMove_blsywf$(this, lastMove_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMove_blsywf$($this, lastMove_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$lastMove = lastMove_0;
  }
  Coroutine$getMove_blsywf$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$getMove_blsywf$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMove_blsywf$.prototype.constructor = Coroutine$getMove_blsywf$;
  Coroutine$getMove_blsywf$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$lastMove != null)
              this.$this.sendMove_47hwoe$(this.local$lastMove);
            this.state_0 = 2;
            this.result_0 = this.$this.ws_0.receive(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var msg = this.result_0;
            if (equals(msg, 'CLOSE')) {
              throw new ClosedException();
            }
             else {
              return moveFromNetFormat(msg);
            }

          case 3:
            return;
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
  Connection.prototype.setupMatch_56l50f$ = function (playerInfo_0, continuation_0, suspended) {
    var instance = new Coroutine$setupMatch_56l50f$(this, playerInfo_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$setupMatch_56l50f$($this, playerInfo_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$playerInfo = playerInfo_0;
  }
  Coroutine$setupMatch_56l50f$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$setupMatch_56l50f$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$setupMatch_56l50f$.prototype.constructor = Coroutine$setupMatch_56l50f$;
  Coroutine$setupMatch_56l50f$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.ws_0.send_61zpoe$(net.Messages.connect_56l50f$(this.local$playerInfo));
            this.local$tmp$ = net.Messages;
            this.state_0 = 2;
            this.result_0 = this.$this.ws_0.receive(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$tmp$.parseMatchStart_61zpoe$(this.result_0);
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
  Connection.prototype.close = function () {
    this.ws_0.close();
  };
  function Connection$Companion() {
    Connection$Companion_instance = this;
  }
  Connection$Companion.prototype.connect_61zpoe$ = function (url) {
    var ws = new WebsocketConnectionImpl(new WebSocket(url));
    return new Connection(ws);
  };
  Connection$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Connection$Companion_instance = null;
  function Connection$Companion_getInstance() {
    if (Connection$Companion_instance === null) {
      new Connection$Companion();
    }
    return Connection$Companion_instance;
  }
  Connection.$metadata$ = {kind: Kind_CLASS, simpleName: 'Connection', interfaces: []};
  var server;
  function Matchmaking(playerInfo) {
    this.playerInfo_0 = playerInfo;
    this.running_0 = false;
    this.connection_yq8a9a$_0 = this.connection_yq8a9a$_0;
    this.opponent_cspk4x$_0 = this.opponent_cspk4x$_0;
  }
  Object.defineProperty(Matchmaking.prototype, 'connection_0', {get: function () {
    if (this.connection_yq8a9a$_0 == null)
      return throwUPAE('connection');
    return this.connection_yq8a9a$_0;
  }, set: function (connection) {
    this.connection_yq8a9a$_0 = connection;
  }});
  Object.defineProperty(Matchmaking.prototype, 'opponent', {get: function () {
    if (this.opponent_cspk4x$_0 == null)
      return throwUPAE('opponent');
    return this.opponent_cspk4x$_0;
  }, set: function (opponent) {
    this.opponent_cspk4x$_0 = opponent;
  }});
  Matchmaking.prototype.findMatch = function (continuation) {
    if (this.running_0)
      throw IllegalStateException_init('Already running matchmaking');
    this.running_0 = true;
    this.connection_0 = Connection$Companion_getInstance().connect_61zpoe$('wss://gogogo-server.herokuapp.com//matchmaking');
    this.opponent = new NetworkController(this.connection_0);
    return this.connection_0.setupMatch_56l50f$(this.playerInfo_0, continuation);
  };
  Matchmaking.prototype.disconnect = function () {
    if (!this.running_0)
      return;
    this.running_0 = false;
    this.connection_0.close();
  };
  Matchmaking.$metadata$ = {kind: Kind_CLASS, simpleName: 'Matchmaking', interfaces: []};
  function NetworkController(connection) {
    this.connection_0 = connection;
    this.name_hep9nf$_0 = 'Network';
  }
  Object.defineProperty(NetworkController.prototype, 'name', {get: function () {
    return this.name_hep9nf$_0;
  }});
  NetworkController.prototype.getMove_jr41iw$ = function (lastMove_0, state, fromSelectCallback, continuation_0, suspended) {
    var instance = new Coroutine$getMove_jr41iw$_0(this, lastMove_0, state, fromSelectCallback, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMove_jr41iw$_0($this, lastMove_0, state, fromSelectCallback, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$lastMove = lastMove_0;
  }
  Coroutine$getMove_jr41iw$_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$getMove_jr41iw$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMove_jr41iw$_0.prototype.constructor = Coroutine$getMove_jr41iw$_0;
  Coroutine$getMove_jr41iw$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.$this.connection_0.getMove_blsywf$(this.local$lastMove, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            if (Kotlin.isType(e, ClosedException)) {
              window.alert('Opponent has disconnected');
              throw e;
            }
             else
              throw e;
          case 3:
            return;
          case 4:
            throw this.exception_0;
          default:this.state_0 = 4;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
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
  function NetworkController$sendVictory$lambda() {
    return 'Victory sent';
  }
  NetworkController.prototype.sendVictory_47hwoe$ = function (lastMove) {
    this.connection_0.sendMove_47hwoe$(lastMove);
    Log_getInstance().debug_h4ejuu$(NetworkController$sendVictory$lambda);
  };
  NetworkController.$metadata$ = {kind: Kind_CLASS, simpleName: 'NetworkController', interfaces: [PlayerController]};
  function WebsocketConnection() {
  }
  WebsocketConnection.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'WebsocketConnection', interfaces: []};
  function WebsocketConnectionImpl(ws) {
    this.ws_0 = ws;
    this.open_0 = CompletableDeferred();
    this.job_0 = Job();
    this.messages_0 = Channel();
    this.ws_0.onopen = WebsocketConnectionImpl_init$lambda(this);
    this.ws_0.onclose = WebsocketConnectionImpl_init$lambda_0(this);
    this.ws_0.onmessage = WebsocketConnectionImpl_init$lambda_1(this);
  }
  Object.defineProperty(WebsocketConnectionImpl.prototype, 'coroutineContext', {get: function () {
    return coroutines.Dispatchers.Default.plus_1fupul$(this.job_0);
  }});
  function WebsocketConnectionImpl$send$lambda(this$WebsocketConnectionImpl_0, closure$s_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$WebsocketConnectionImpl$send$lambda(this$WebsocketConnectionImpl_0, closure$s_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$WebsocketConnectionImpl$send$lambda(this$WebsocketConnectionImpl_0, closure$s_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$WebsocketConnectionImpl = this$WebsocketConnectionImpl_0;
    this.local$closure$s = closure$s_0;
  }
  Coroutine$WebsocketConnectionImpl$send$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$WebsocketConnectionImpl$send$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebsocketConnectionImpl$send$lambda.prototype.constructor = Coroutine$WebsocketConnectionImpl$send$lambda;
  Coroutine$WebsocketConnectionImpl$send$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$WebsocketConnectionImpl.open_0.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$this$WebsocketConnectionImpl.ws_0.send(this.local$closure$s), Unit;
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
  WebsocketConnectionImpl.prototype.send_61zpoe$ = function (s) {
    launch(this, void 0, void 0, WebsocketConnectionImpl$send$lambda(this, s));
  };
  WebsocketConnectionImpl.prototype.receive = function (continuation) {
    return this.messages_0.receive(continuation);
  };
  WebsocketConnectionImpl.prototype.close = function () {
    this.ws_0.close();
  };
  function WebsocketConnectionImpl_init$lambda(this$WebsocketConnectionImpl) {
    return function (it) {
      return this$WebsocketConnectionImpl.open_0.complete_11rb$(null);
    };
  }
  var Job_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job;
  function WebsocketConnectionImpl_init$lambda_0(this$WebsocketConnectionImpl) {
    return function (it) {
      var $receiver = this$WebsocketConnectionImpl;
      var tmp$;
      var tmp$_0;
      if ((tmp$ = $receiver.coroutineContext.get_j3r2sn$(Job_0.Key)) != null)
        tmp$_0 = tmp$;
      else {
        throw IllegalStateException_init(('Scope cannot be cancelled because it does not have a job: ' + $receiver).toString());
      }
      var job = tmp$_0;
      job.cancel();
      return Unit;
    };
  }
  function WebsocketConnectionImpl_init$lambda$lambda$lambda(closure$evt) {
    return function () {
      return 'Received ' + toString(closure$evt.data);
    };
  }
  function WebsocketConnectionImpl_init$lambda$lambda(closure$evt_0, this$WebsocketConnectionImpl_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$WebsocketConnectionImpl_init$lambda$lambda(closure$evt_0, this$WebsocketConnectionImpl_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$WebsocketConnectionImpl_init$lambda$lambda(closure$evt_0, this$WebsocketConnectionImpl_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$evt = closure$evt_0;
    this.local$this$WebsocketConnectionImpl = this$WebsocketConnectionImpl_0;
  }
  Coroutine$WebsocketConnectionImpl_init$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$WebsocketConnectionImpl_init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebsocketConnectionImpl_init$lambda$lambda.prototype.constructor = Coroutine$WebsocketConnectionImpl_init$lambda$lambda;
  Coroutine$WebsocketConnectionImpl_init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            Log_getInstance().debug_h4ejuu$(WebsocketConnectionImpl_init$lambda$lambda$lambda(this.local$closure$evt));
            this.state_0 = 2;
            this.result_0 = this.local$this$WebsocketConnectionImpl.messages_0.send_11rb$(toString(this.local$closure$evt.data), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
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
  function WebsocketConnectionImpl_init$lambda_1(this$WebsocketConnectionImpl) {
    return function (evt) {
      if (Kotlin.isType(evt, MessageEvent))
        launch(this$WebsocketConnectionImpl, void 0, void 0, WebsocketConnectionImpl_init$lambda$lambda(evt, this$WebsocketConnectionImpl));
      return Unit;
    };
  }
  WebsocketConnectionImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebsocketConnectionImpl', interfaces: [CoroutineScope, WebsocketConnection]};
  function ControllerTypes(name, ordinal, build) {
    Enum.call(this);
    this.build = build;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ControllerTypes_initFields() {
    ControllerTypes_initFields = function () {
    };
    ControllerTypes$Human_instance = new ControllerTypes('Human', 0, getCallableRef('HumanController', function () {
      return new HumanController();
    }));
    ControllerTypes$Easy_instance = new ControllerTypes('Easy', 1, getCallableRef('withUIAwareness', function ($receiver) {
      return withUIAwareness($receiver);
    }.bind(null, new AI(ai.easy))));
    ControllerTypes$Medium_instance = new ControllerTypes('Medium', 2, getCallableRef('withUIAwareness', function ($receiver) {
      return withUIAwareness($receiver);
    }.bind(null, new AI(ai.medium))));
    ControllerTypes$Hard_instance = new ControllerTypes('Hard', 3, getCallableRef('withUIAwareness', function ($receiver) {
      return withUIAwareness($receiver);
    }.bind(null, new AI(ai.hard))));
  }
  var ControllerTypes$Human_instance;
  function ControllerTypes$Human_getInstance() {
    ControllerTypes_initFields();
    return ControllerTypes$Human_instance;
  }
  var ControllerTypes$Easy_instance;
  function ControllerTypes$Easy_getInstance() {
    ControllerTypes_initFields();
    return ControllerTypes$Easy_instance;
  }
  var ControllerTypes$Medium_instance;
  function ControllerTypes$Medium_getInstance() {
    ControllerTypes_initFields();
    return ControllerTypes$Medium_instance;
  }
  var ControllerTypes$Hard_instance;
  function ControllerTypes$Hard_getInstance() {
    ControllerTypes_initFields();
    return ControllerTypes$Hard_instance;
  }
  ControllerTypes.$metadata$ = {kind: Kind_CLASS, simpleName: 'ControllerTypes', interfaces: [Enum]};
  function ControllerTypes$values() {
    return [ControllerTypes$Human_getInstance(), ControllerTypes$Easy_getInstance(), ControllerTypes$Medium_getInstance(), ControllerTypes$Hard_getInstance()];
  }
  ControllerTypes.values = ControllerTypes$values;
  function ControllerTypes$valueOf(name) {
    switch (name) {
      case 'Human':
        return ControllerTypes$Human_getInstance();
      case 'Easy':
        return ControllerTypes$Easy_getInstance();
      case 'Medium':
        return ControllerTypes$Medium_getInstance();
      case 'Hard':
        return ControllerTypes$Hard_getInstance();
      default:throwISE('No enum constant de.earley.gogogo.ui.ControllerTypes.' + name);
    }
  }
  ControllerTypes.valueOf_61zpoe$ = ControllerTypes$valueOf;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function controllerTypesAsString() {
    var $receiver = ControllerTypes$values();
    var destination = ArrayList_init_0($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(item.toString());
    }
    return destination;
  }
  function toControllerType($receiver) {
    return ControllerTypes$valueOf($receiver);
  }
  function GamePresenter(gameUI, mode) {
    this.gameUI_0 = gameUI;
    this.mode_0 = mode;
    this.selected_0 = null;
    this.game_8j9hzp$_0 = this.game_8j9hzp$_0;
    this.matchmaking_0 = null;
    this.matchinfo_0 = null;
  }
  Object.defineProperty(GamePresenter.prototype, 'game_0', {get: function () {
    if (this.game_8j9hzp$_0 == null)
      return throwUPAE('game');
    return this.game_8j9hzp$_0;
  }, set: function (game) {
    this.game_8j9hzp$_0 = game;
  }});
  GamePresenter.prototype.start = function (continuation_0, suspended) {
    var instance = new Coroutine$start(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$start($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$start.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$start.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$start.prototype.constructor = Coroutine$start;
  Coroutine$start.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.restart(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
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
  GamePresenter.prototype.setClasses_dha1jo$ = function (element, x, y) {
    var tmp$, tmp$_0, tmp$_1;
    removeClass(element, ['token-blue', 'token-red', 'clickable', 'can-move', 'selected']);
    if ((tmp$ = this.game_0.grid.get_vux9f0$(x, y)) != null) {
      element.classList.add('token-' + asClass(tmp$), 'clickable');
    }
    if (!this.game_0.isOver() && this.game_0.isEligibleToMove_bk5ui5$(new Point(x, y))) {
      element.classList.add('can-move');
    }
    if (this.selected_0 != null && x === ((tmp$_0 = this.selected_0) != null ? tmp$_0.x : null) && y === ((tmp$_1 = this.selected_0) != null ? tmp$_1.y : null)) {
      element.classList.add('selected');
    }
  };
  GamePresenter.prototype.turnText = function () {
    if (this.game_0.isOver()) {
      return toString(this.game_0.victor) + ' has won!';
    }
     else {
      return this.game_0.player.toString() + "'s turn";
    }
  };
  GamePresenter.prototype.restart = function (continuation_0, suspended) {
    var instance = new Coroutine$restart(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$restart($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$restart.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$restart.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$restart.prototype.constructor = Coroutine$restart;
  Coroutine$restart.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.createGame_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.game_0 = this.result_0;
            this.$this.gameUI_0.updateUI();
            return;
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
  GamePresenter.prototype.handleClick_vux9f0$ = function (x, y) {
    if (this.game_0.isOver())
      return;
    var c = this.game_0.activeController;
    if (Kotlin.isType(c, HumanController)) {
      c.supplyClick_bk5ui5$(new Point(x, y));
    }
  };
  GamePresenter.prototype.onSelect_37gzp0$ = function (point) {
    if (point == null) {
      this.unselect_0();
    }
     else {
      this.selected_0 = point;
      ensureNotNull(this.gameUI_0.cells.get_vux9f0$(point.x, point.y)).classList.add('game-cell-selected');
    }
  };
  function GamePresenter$onGameEnd$lambda() {
    return 'Sending victory to opponent';
  }
  GamePresenter.prototype.onGameEnd = function () {
    var tmp$, tmp$_0, tmp$_1;
    if (this.mode_0 === GameMode$Online_getInstance() && equals(this.game_0.victor, (tmp$ = this.matchinfo_0) != null ? tmp$.player : null)) {
      Log_getInstance().debug_h4ejuu$(GamePresenter$onGameEnd$lambda);
      (tmp$_1 = (tmp$_0 = this.matchmaking_0) != null ? tmp$_0.opponent : null) != null ? (tmp$_1.sendVictory_47hwoe$(ensureNotNull(this.game_0.lastMove)), Unit) : null;
    }
    this.unselect_0();
  };
  GamePresenter.prototype.onMove_47hwoe$ = function (move, continuation_0, suspended) {
    var instance = new Coroutine$onMove_47hwoe$(this, move, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$onMove_47hwoe$($this, move, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$onMove_47hwoe$.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$onMove_47hwoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$onMove_47hwoe$.prototype.constructor = Coroutine$onMove_47hwoe$;
  Coroutine$onMove_47hwoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.unselect_0();
            this.$this.gameUI_0.updateUI();
            this.state_0 = 2;
            this.result_0 = delay(L100, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
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
  function GamePresenter$createGame$lambda(closure$info) {
    return function () {
      return 'Playing against ' + closure$info.other.name + ' as ' + closure$info.player;
    };
  }
  GamePresenter.prototype.createGame_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$createGame_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createGame_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$matchmaking = void 0;
  }
  Coroutine$createGame_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$createGame_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createGame_0.prototype.constructor = Coroutine$createGame_0;
  Coroutine$createGame_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.$this.mode_0 === GameMode$Online_getInstance()) {
              this.local$matchmaking = new Matchmaking(new PlayerInfo(this.$this.gameUI_0.getName()));
              this.$this.matchmaking_0 = this.local$matchmaking;
              this.state_0 = 2;
              this.result_0 = this.local$matchmaking.findMatch(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$tmp$ = new ControlledGame(this.$this.getLocalController_0(Player.Red), this.$this.getLocalController_0(Player.Blue), this.$this);
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            var info = this.result_0;
            this.$this.matchinfo_0 = info;
            Log_getInstance().debug_h4ejuu$(GamePresenter$createGame$lambda(info));
            var red = info.player === Player.Red ? new HumanController() : withUIAwareness(this.local$matchmaking.opponent);
            var blue = info.player === Player.Blue ? new HumanController() : withUIAwareness(this.local$matchmaking.opponent);
            this.$this.gameUI_0.showOwnPlayer_x97jf4$(info.player, info.other.name);
            this.local$tmp$ = new ControlledGame(red, blue, this.$this);
            this.state_0 = 3;
            continue;
          case 3:
            var $receiver = this.local$tmp$;
            this.$this.startGame_0($receiver);
            return $receiver;
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
  function GamePresenter$startGame$lambda$lambda(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$GamePresenter$startGame$lambda$lambda(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$GamePresenter$startGame$lambda$lambda(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$GamePresenter$startGame$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$GamePresenter$startGame$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GamePresenter$startGame$lambda$lambda.prototype.constructor = Coroutine$GamePresenter$startGame$lambda$lambda;
  Coroutine$GamePresenter$startGame$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$.start_e9pf1l$(this.local$$receiver), Unit;
          case 1:
            throw this.exception_0;
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
  GamePresenter.prototype.startGame_0 = function (game) {
    return launch(coroutines.GlobalScope, void 0, void 0, GamePresenter$startGame$lambda$lambda(game));
  };
  GamePresenter.prototype.unselect_0 = function () {
    var tmp$;
    if ((tmp$ = this.selected_0) != null) {
      ensureNotNull(this.gameUI_0.cells.get_vux9f0$(tmp$.x, tmp$.y)).classList.remove('game-cell-selected');
    }
    this.selected_0 = null;
  };
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  GamePresenter.prototype.undo = function () {
    if (!(this.mode_0 === GameMode$Local_getInstance())) {
      var message = 'Only allowed in local play!';
      throw IllegalArgumentException_init(message.toString());
    }
    this.game_0.undo();
    this.unselect_0();
    this.gameUI_0.updateUI();
  };
  GamePresenter.prototype.canUndo = function () {
    return this.game_0.canUndo();
  };
  GamePresenter.prototype.changeRedController = function () {
    if (!(this.mode_0 === GameMode$Local_getInstance())) {
      var message = 'Only allowed in local play!';
      throw IllegalArgumentException_init(message.toString());
    }
    this.game_0.switchRed_wszlfq$(this.getLocalController_0(Player.Red));
  };
  GamePresenter.prototype.changeBlueController = function () {
    if (!(this.mode_0 === GameMode$Local_getInstance())) {
      var message = 'Only allowed in local play!';
      throw IllegalArgumentException_init(message.toString());
    }
    this.game_0.switchBlue_wszlfq$(this.getLocalController_0(Player.Blue));
  };
  GamePresenter.prototype.getLocalController_0 = function (player) {
    return toControllerType(this.gameUI_0.getController_3999j6$(player)).build();
  };
  GamePresenter.prototype.exitGame = function () {
    var tmp$;
    (tmp$ = this.matchmaking_0) != null ? (tmp$.disconnect(), Unit) : null;
  };
  GamePresenter.$metadata$ = {kind: Kind_CLASS, simpleName: 'GamePresenter', interfaces: [UIHook]};
  function asClass($receiver) {
    return $receiver.toString().toLowerCase();
  }
  function GameMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameMode_initFields() {
    GameMode_initFields = function () {
    };
    GameMode$Local_instance = new GameMode('Local', 0);
    GameMode$Online_instance = new GameMode('Online', 1);
  }
  var GameMode$Local_instance;
  function GameMode$Local_getInstance() {
    GameMode_initFields();
    return GameMode$Local_instance;
  }
  var GameMode$Online_instance;
  function GameMode$Online_getInstance() {
    GameMode_initFields();
    return GameMode$Online_instance;
  }
  GameMode.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameMode', interfaces: [Enum]};
  function GameMode$values() {
    return [GameMode$Local_getInstance(), GameMode$Online_getInstance()];
  }
  GameMode.values = GameMode$values;
  function GameMode$valueOf(name) {
    switch (name) {
      case 'Local':
        return GameMode$Local_getInstance();
      case 'Online':
        return GameMode$Online_getInstance();
      default:throwISE('No enum constant de.earley.gogogo.ui.GameMode.' + name);
    }
  }
  GameMode.valueOf_61zpoe$ = GameMode$valueOf;
  var name_0;
  function GameUI(table, menu, mode) {
    GameUI$Companion_getInstance();
    this.table_0 = table;
    this.menu_0 = menu;
    this.mode_0 = mode;
    this.blueController_0 = get_0(document, 'blue-controller');
    this.redController_0 = get_0(document, 'red-controller');
    this.turnIndicator_0 = get_0(document, 'turn-indicator');
    this.undo_0 = get_0(document, 'btn-undo');
    this.restart_0 = get_0(document, 'btn-restart');
    this.localControls_0 = get_0(document, 'local-controls');
    this.serverControls_0 = get_0(document, 'server-controls');
    this.ownPlayer_0 = get_0(document, 'server-own-player');
    this.spinner_0 = get_0(document, 'connect-spinner');
    this.eventListeners_0 = ArrayList_init();
    this.presenter_0 = new GamePresenter(this, this.mode_0);
    this.cells = this.createCells_0(6, 5);
    launch(this, void 0, void 0, GameUI_init$lambda(this));
  }
  function GameUI$Companion() {
    GameUI$Companion_instance = this;
  }
  GameUI$Companion.prototype.open_ca0b88$ = function (rootDiv, menu, mode) {
    return new GameUI(rootDiv, menu, mode);
  };
  GameUI$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var GameUI$Companion_instance = null;
  function GameUI$Companion_getInstance() {
    if (GameUI$Companion_instance === null) {
      new GameUI$Companion();
    }
    return GameUI$Companion_instance;
  }
  Object.defineProperty(GameUI.prototype, 'coroutineContext', {get: function () {
    return coroutines.Dispatchers.Default.plus_1fupul$(Job());
  }});
  function GameUI$createCells$lambda$lambda$lambda$lambda$lambda(closure$x, closure$y) {
    return function ($receiver) {
      set_id($receiver, 'game-cell-' + closure$x + '-' + closure$y);
      return Unit;
    };
  }
  function GameUI$createCells$lambda$lambda$lambda(closure$width, closure$y) {
    return function ($receiver) {
      var $receiver_0 = until(0, closure$width);
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        td($receiver, 'game-cell', GameUI$createCells$lambda$lambda$lambda$lambda$lambda(element, closure$y));
      }
      return Unit;
    };
  }
  function GameUI$createCells$lambda(closure$height, closure$width) {
    return function ($receiver) {
      set_id($receiver, 'game-grid');
      var $receiver_0 = until(0, closure$height);
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        tr($receiver, void 0, GameUI$createCells$lambda$lambda$lambda(closure$width, element));
      }
      return Unit;
    };
  }
  function GameUI$createCells$lambda_0(x, y) {
    return get_0(document, 'game-cell-' + x + '-' + y);
  }
  var wrapFunction = Kotlin.wrapFunction;
  var GenericGrid_init = $module$gogogo_common.de.earley.gogogo.game.grid.GenericGrid;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  GameUI.prototype.createCells_0 = function (width, height) {
    var ui = table(get_create(document), void 0, GameUI$createCells$lambda(height, width));
    this.table_0.replaceWith(ui);
    var $receiver = until(0, height);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = until(0, width);
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(GameUI$createCells$lambda_0(item, element));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return new GenericGrid_init(width, height, copyToArray(destination));
  };
  GameUI.prototype.setupSelects_0 = function () {
    clear(this.redController_0);
    clear(this.blueController_0);
    var tmp$;
    tmp$ = controllerTypesAsString().iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      addOption(this.redController_0, element);
      addOption(this.blueController_0, element);
    }
    this.blueController_0.selectedIndex = 0;
    this.redController_0.selectedIndex = 3;
  };
  GameUI.prototype.updateUI = function () {
    var $receiver = this.cells;
    var tmp$;
    tmp$ = until(0, $receiver.height).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = until(0, $receiver.width).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        this.presenter_0.setClasses_dha1jo$(ensureNotNull($receiver.get_vux9f0$(element_0, element)), element_0, element);
      }
    }
    this.turnIndicator_0.innerText = this.presenter_0.turnText();
    this.undo_0.disabled = !this.presenter_0.canUndo();
  };
  GameUI.prototype.checkGameMode_0 = function () {
    switch (this.mode_0.name) {
      case 'Local':
        unhide(this.localControls_0);
        hide(this.serverControls_0);
        hide(this.spinner_0);
        break;
      case 'Online':
        hide(this.localControls_0);
        unhide(this.serverControls_0);
        unhide(this.spinner_0);
        break;
    }
  };
  function GameUI$registerEventListeners$lambda$lambda$lambda$lambda(closure$x, closure$y) {
    return function () {
      return 'Clicked ' + closure$x + ', ' + closure$y;
    };
  }
  function GameUI$registerEventListeners$lambda$lambda$lambda(closure$x, closure$y, this$GameUI) {
    return function (it) {
      Log_getInstance().debug_h4ejuu$(GameUI$registerEventListeners$lambda$lambda$lambda$lambda(closure$x, closure$y));
      this$GameUI.presenter_0.handleClick_vux9f0$(closure$x, closure$y);
      return Unit;
    };
  }
  function GameUI$registerEventListeners$lambda$lambda(this$GameUI_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$GameUI$registerEventListeners$lambda$lambda(this$GameUI_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$GameUI$registerEventListeners$lambda$lambda(this$GameUI_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$GameUI = this$GameUI_0;
  }
  Coroutine$GameUI$registerEventListeners$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$GameUI$registerEventListeners$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameUI$registerEventListeners$lambda$lambda.prototype.constructor = Coroutine$GameUI$registerEventListeners$lambda$lambda;
  Coroutine$GameUI$registerEventListeners$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$GameUI.presenter_0.restart(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
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
  function GameUI$registerEventListeners$lambda(this$GameUI) {
    return function (it) {
      launch(this$GameUI, void 0, void 0, GameUI$registerEventListeners$lambda$lambda(this$GameUI));
      return Unit;
    };
  }
  function GameUI$registerEventListeners$lambda_0(this$GameUI) {
    return function (it) {
      this$GameUI.presenter_0.undo();
      return Unit;
    };
  }
  function GameUI$registerEventListeners$lambda_1(this$GameUI) {
    return function (it) {
      this$GameUI.exitGame_0();
      return Unit;
    };
  }
  function GameUI$registerEventListeners$lambda_2(this$GameUI) {
    return function (it) {
      this$GameUI.presenter_0.changeBlueController();
      return Unit;
    };
  }
  function GameUI$registerEventListeners$lambda_3(this$GameUI) {
    return function (it) {
      this$GameUI.presenter_0.changeRedController();
      return Unit;
    };
  }
  GameUI.prototype.registerEventListeners_0 = function () {
    var $receiver = this.cells;
    var tmp$;
    tmp$ = until(0, $receiver.height).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = until(0, $receiver.width).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var element_1 = $receiver.get_vux9f0$(element_0, element);
        if (element_1 != null) {
          var $receiver_0 = this.eventListeners_0;
          var element_2 = onClick(element_1, GameUI$registerEventListeners$lambda$lambda$lambda(element_0, element, this));
          $receiver_0.add_11rb$(element_2);
        }
      }
    }
    var $receiver_1 = this.eventListeners_0;
    var element_3 = onClick(this.restart_0, GameUI$registerEventListeners$lambda(this));
    $receiver_1.add_11rb$(element_3);
    var $receiver_2 = this.eventListeners_0;
    var element_4 = onClick(this.undo_0, GameUI$registerEventListeners$lambda_0(this));
    $receiver_2.add_11rb$(element_4);
    var $receiver_3 = this.eventListeners_0;
    var element_5 = onClick(get_0(document, 'btn-exit-game'), GameUI$registerEventListeners$lambda_1(this));
    $receiver_3.add_11rb$(element_5);
    var $receiver_4 = this.eventListeners_0;
    var element_6 = onChange(this.blueController_0, GameUI$registerEventListeners$lambda_2(this));
    $receiver_4.add_11rb$(element_6);
    var $receiver_5 = this.eventListeners_0;
    var element_7 = onChange(this.redController_0, GameUI$registerEventListeners$lambda_3(this));
    $receiver_5.add_11rb$(element_7);
  };
  GameUI.prototype.exitGame_0 = function () {
    var tmp$;
    tmp$ = this.eventListeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var elem = element.component1(), action = element.component2();
      removeOnClick(elem, action);
    }
    this.presenter_0.exitGame();
    this.menu_0.closeGame();
  };
  GameUI.prototype.showOwnPlayer_x97jf4$ = function (player, opponent) {
    hide(this.spinner_0);
    this.ownPlayer_0.innerText = 'You are playing as ' + player + ' against ' + opponent;
  };
  GameUI.prototype.getName = function () {
    if (name_0 != null)
      return ensureNotNull(name_0);
    while (true) {
      var response = window.prompt('Please enter your name');
      if (response != null) {
        name_0 = response;
        return response;
      }
    }
  };
  function GameUI$getController$lambda$lambda(closure$player, closure$it) {
    return function () {
      return 'Queried value for ' + closure$player + ' is ' + closure$it;
    };
  }
  GameUI.prototype.getController_3999j6$ = function (player) {
    var tmp$;
    switch (player.name) {
      case 'Blue':
        tmp$ = this.blueController_0.value;
        break;
      case 'Red':
        tmp$ = this.redController_0.value;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    var $receiver = tmp$;
    Log_getInstance().debug_h4ejuu$(GameUI$getController$lambda$lambda(player, $receiver));
    return $receiver;
  };
  function GameUI_init$lambda(this$GameUI_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$GameUI_init$lambda(this$GameUI_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$GameUI_init$lambda(this$GameUI_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$GameUI = this$GameUI_0;
  }
  Coroutine$GameUI_init$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$GameUI_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$GameUI_init$lambda.prototype.constructor = Coroutine$GameUI_init$lambda;
  Coroutine$GameUI_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$GameUI.setupSelects_0();
            this.local$this$GameUI.registerEventListeners_0();
            this.local$this$GameUI.checkGameMode_0();
            this.state_0 = 2;
            this.result_0 = delay(L10, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$this$GameUI.presenter_0.start(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.local$this$GameUI.updateUI(), Unit;
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
  GameUI.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameUI', interfaces: [CoroutineScope]};
  function HumanController() {
    this.name_nf5ttb$_0 = 'Human';
    this.from_0 = null;
    this.to_0 = null;
    this.selectCallback_0 = null;
    this.state_0 = null;
    this.commit_0 = Channel(1);
  }
  Object.defineProperty(HumanController.prototype, 'name', {get: function () {
    return this.name_nf5ttb$_0;
  }});
  HumanController.prototype.getMove_jr41iw$ = function (lastMove, state_0, fromSelectCallback_0, continuation_0, suspended) {
    var instance = new Coroutine$getMove_jr41iw$_1(this, lastMove, state_0, fromSelectCallback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMove_jr41iw$_1($this, lastMove, state_0, fromSelectCallback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$state = state_0;
    this.local$fromSelectCallback = fromSelectCallback_0;
  }
  Coroutine$getMove_jr41iw$_1.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$getMove_jr41iw$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMove_jr41iw$_1.prototype.constructor = Coroutine$getMove_jr41iw$_1;
  Coroutine$getMove_jr41iw$_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.selectCallback_0 = this.local$fromSelectCallback;
            this.$this.state_0 = this.local$state;
            this.state_0 = 2;
            this.result_0 = this.$this.commit_0.receive(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var move = this.result_0;
            this.$this.from_0 = null;
            this.$this.to_0 = null;
            this.$this.selectCallback_0 = null;
            this.$this.state_0 = null;
            return move;
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
  function HumanController$supplyClick$lambda(closure$point, this$HumanController) {
    return function () {
      return 'Human clicked ' + closure$point + '. From: ' + toString(this$HumanController.from_0);
    };
  }
  function HumanController$supplyClick$lambda_0(closure$point) {
    return function () {
      return 'Illegal from: ' + closure$point;
    };
  }
  function HumanController$supplyClick$lambda_1(closure$move) {
    return function () {
      return 'Illegal move, resetting: ' + closure$move.msg;
    };
  }
  function HumanController$supplyClick$lambda_2(this$HumanController) {
    return function () {
      return 'Move ' + toString(this$HumanController.from_0) + ' to ' + toString(this$HumanController.to_0);
    };
  }
  HumanController.prototype.supplyClick_bk5ui5$ = function (point) {
    var tmp$, tmp$_0;
    Log_getInstance().debug_h4ejuu$(HumanController$supplyClick$lambda(point, this));
    var s = this.state_0;
    if (!(s != null)) {
      var message = "Can't evaluate move since the state is unknown";
      throw IllegalArgumentException_init(message.toString());
    }
    if (this.from_0 == null) {
      if (!s.isEligibleToMove_bk5ui5$(point)) {
        Log_getInstance().info_h4ejuu$(HumanController$supplyClick$lambda_0(point));
        return;
      }
      this.from_0 = point;
      (tmp$ = this.selectCallback_0) != null ? tmp$(point) : null;
      return;
    }
    var f = this.from_0;
    if (!(f != null)) {
      var message_0 = 'From is null';
      throw IllegalArgumentException_init(message_0.toString());
    }
    var move = s.move_56t7qy$(f, point);
    if (Kotlin.isType(move, MoveResult$Error)) {
      Log_getInstance().info_h4ejuu$(HumanController$supplyClick$lambda_1(move));
      this.from_0 = null;
      (tmp$_0 = this.selectCallback_0) != null ? tmp$_0(null) : null;
      return;
    }
    this.to_0 = point;
    Log_getInstance().debug_h4ejuu$(HumanController$supplyClick$lambda_2(this));
    if (!this.commit_0.offer_11rb$(new Move(ensureNotNull(this.from_0), ensureNotNull(this.to_0)))) {
      var message_1 = 'Could not send commit';
      throw IllegalArgumentException_init(message_1.toString());
    }
  };
  HumanController.$metadata$ = {kind: Kind_CLASS, simpleName: 'HumanController', interfaces: [PlayerController]};
  function MenuUI() {
    this.btnPlayLocal_0 = get_0(document, 'btn-play-local');
    this.btnPlayOnline_0 = get_0(document, 'btn-play-online');
    this.btnRules_0 = get_0(document, 'btn-rules');
    this.btnBack_0 = get_0(document, 'btn-back');
    this.menu_0 = get_0(document, 'main-menu');
    this.rules_0 = get_0(document, 'rules');
    this.game_0 = get_0(document, 'game-ui');
    this.gameGrid_0 = get_0(document, 'game-grid');
    hide(this.game_0);
    hide(this.rules_0);
    onClick(this.btnPlayLocal_0, MenuUI_init$lambda(this));
    onClick(this.btnPlayOnline_0, MenuUI_init$lambda_0(this));
    onClick(this.btnRules_0, MenuUI_init$lambda_1(this));
    onClick(this.btnBack_0, MenuUI_init$lambda_2(this));
  }
  MenuUI.prototype.closeGame = function () {
    hide(this.game_0);
    unhide(this.menu_0);
  };
  function MenuUI_init$lambda(this$MenuUI) {
    return function (it) {
      hide(this$MenuUI.menu_0);
      unhide(this$MenuUI.game_0);
      GameUI$Companion_getInstance().open_ca0b88$(this$MenuUI.gameGrid_0, this$MenuUI, GameMode$Local_getInstance());
      return Unit;
    };
  }
  function MenuUI_init$lambda_0(this$MenuUI) {
    return function (it) {
      hide(this$MenuUI.menu_0);
      unhide(this$MenuUI.game_0);
      GameUI$Companion_getInstance().open_ca0b88$(this$MenuUI.gameGrid_0, this$MenuUI, GameMode$Online_getInstance());
      return Unit;
    };
  }
  function MenuUI_init$lambda_1(this$MenuUI) {
    return function (it) {
      unhide(this$MenuUI.rules_0);
      hide(this$MenuUI.menu_0);
      return Unit;
    };
  }
  function MenuUI_init$lambda_2(this$MenuUI) {
    return function (it) {
      hide(this$MenuUI.rules_0);
      unhide(this$MenuUI.menu_0);
      return Unit;
    };
  }
  MenuUI.$metadata$ = {kind: Kind_CLASS, simpleName: 'MenuUI', interfaces: []};
  function get_0($receiver, id) {
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = $receiver.getElementById(id), Element) ? tmp$ : null;
    if (tmp$_0 == null) {
      throw new NoSuchElementException('No element with id ' + id + ' found');
    }
    return tmp$_0;
  }
  function onClick($receiver, action) {
    $receiver.addEventListener('click', action);
    return to($receiver, action);
  }
  function onChange$lambda(closure$action, this$onChange) {
    return function (f) {
      closure$action(this$onChange.value);
      return Unit;
    };
  }
  function onChange($receiver, action) {
    var callback = onChange$lambda(action, $receiver);
    $receiver.addEventListener('change', callback);
    return to($receiver, callback);
  }
  function removeOnClick($receiver, action) {
    $receiver.removeEventListener('click', action);
  }
  function addOption($receiver, option_0) {
    $receiver.options.add(option(get_create(document), void 0, option_0));
  }
  function hide($receiver) {
    $receiver.classList.add('hidden');
  }
  function unhide($receiver) {
    $receiver.classList.remove('hidden');
  }
  var package$de = _.de || (_.de = {});
  var package$earley = package$de.earley || (package$de.earley = {});
  var package$gogogo = package$earley.gogogo || (package$earley.gogogo = {});
  var package$ai = package$gogogo.ai || (package$gogogo.ai = {});
  package$ai.DelayedController = DelayedController;
  package$ai.withUIAwareness_mj2ouj$ = withUIAwareness;
  Object.defineProperty(Log$Level, 'Error', {get: Log$Level$Error_getInstance});
  Object.defineProperty(Log$Level, 'Info', {get: Log$Level$Info_getInstance});
  Object.defineProperty(Log$Level, 'Debug', {get: Log$Level$Debug_getInstance});
  Log.prototype.Level = Log$Level;
  Object.defineProperty(package$gogogo, 'Log', {get: Log_getInstance});
  package$gogogo.main = main;
  var package$net = package$gogogo.net || (package$gogogo.net = {});
  package$net.ClosedException = ClosedException;
  Object.defineProperty(Connection, 'Companion', {get: Connection$Companion_getInstance});
  package$net.Connection = Connection;
  package$net.Matchmaking = Matchmaking;
  package$net.NetworkController = NetworkController;
  package$net.WebsocketConnection = WebsocketConnection;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$net.WebsocketConnectionImpl = WebsocketConnectionImpl;
  Object.defineProperty(ControllerTypes, 'Human', {get: ControllerTypes$Human_getInstance});
  Object.defineProperty(ControllerTypes, 'Easy', {get: ControllerTypes$Easy_getInstance});
  Object.defineProperty(ControllerTypes, 'Medium', {get: ControllerTypes$Medium_getInstance});
  Object.defineProperty(ControllerTypes, 'Hard', {get: ControllerTypes$Hard_getInstance});
  var package$ui = package$gogogo.ui || (package$gogogo.ui = {});
  package$ui.ControllerTypes = ControllerTypes;
  package$ui.controllerTypesAsString = controllerTypesAsString;
  package$ui.toControllerType_pdl1vz$ = toControllerType;
  package$ui.GamePresenter = GamePresenter;
  package$ui.asClass_txv5hr$ = asClass;
  Object.defineProperty(GameMode, 'Local', {get: GameMode$Local_getInstance});
  Object.defineProperty(GameMode, 'Online', {get: GameMode$Online_getInstance});
  package$ui.GameMode = GameMode;
  Object.defineProperty(GameUI, 'Companion', {get: GameUI$Companion_getInstance});
  $$importsForInline$$['gogogo-common'] = $module$gogogo_common;
  package$ui.GameUI = GameUI;
  package$ui.HumanController = HumanController;
  package$ui.MenuUI = MenuUI;
  package$ui.get_o90r4$ = get_0;
  package$ui.onClick_2lnv0o$ = onClick;
  package$ui.onChange_7k8njo$ = onChange;
  package$ui.removeOnClick_27kyd6$ = removeOnClick;
  package$ui.addOption_8ao98n$ = addOption;
  package$ui.hide_y4uc6z$ = hide;
  package$ui.unhide_y4uc6z$ = unhide;
  server = 'wss://gogogo-server.herokuapp.com/';
  name_0 = null;
  main();
  return _;
}(typeof this['gogogo-frontend'] === 'undefined' ? {} : this['gogogo-frontend'], kotlin, this['kotlinx-coroutines-core'], this['gogogo-common'], this['kotlinx-html-js']);

//# sourceMappingURL=gogogo-frontend.js.map
