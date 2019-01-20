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
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var toNetFormat = $module$gogogo_common.de.earley.gogogo.game.toNetFormat_blsywv$;
  var moveFromNetFormat = $module$gogogo_common.de.earley.gogogo.game.moveFromNetFormat_pdl1vz$;
  var net = $module$gogogo_common.de.earley.gogogo.net;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var throwUPAE = Kotlin.throwUPAE;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var Point = $module$gogogo_common.de.earley.gogogo.game.Point;
  var toString = Kotlin.toString;
  var ensureNotNull = Kotlin.ensureNotNull;
  var L100 = Kotlin.Long.fromInt(100);
  var PlayerInfo = $module$gogogo_common.de.earley.gogogo.net.PlayerInfo;
  var Player = $module$gogogo_common.de.earley.gogogo.game.Player;
  var ControlledGame = $module$gogogo_common.de.earley.gogogo.game.ControlledGame;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var AI = $module$gogogo_common.de.earley.gogogo.ai.AI;
  var UIHook = $module$gogogo_common.de.earley.gogogo.game.UIHook;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var td = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_7wec05$;
  var table = $module$kotlinx_html_js.kotlinx.html.js.table_uk5qws$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var Move = $module$gogogo_common.de.earley.gogogo.game.Move;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
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
  function main$lambda(it) {
    return new MenuUI();
  }
  function main(args) {
    println('Hello world!');
    window.onload = main$lambda;
  }
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
            return moveFromNetFormat(this.result_0);
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
  NetworkController.prototype.getMove_jr41iw$ = function (lastMove, state, fromSelectCallback, continuation) {
    return this.connection_0.getMove_blsywf$(lastMove, continuation);
  };
  NetworkController.prototype.sendVictory_47hwoe$ = function (lastMove) {
    this.connection_0.sendMove_47hwoe$(lastMove);
  };
  NetworkController.$metadata$ = {kind: Kind_CLASS, simpleName: 'NetworkController', interfaces: [PlayerController]};
  function GamePresenter(gameUI, mode) {
    this.gameUI_0 = gameUI;
    this.mode_0 = mode;
    this.selected_0 = null;
    this.game_8j9hzp$_0 = this.game_8j9hzp$_0;
    this.matchmaking_tys5gd$_0 = this.matchmaking_tys5gd$_0;
  }
  Object.defineProperty(GamePresenter.prototype, 'game_0', {get: function () {
    if (this.game_8j9hzp$_0 == null)
      return throwUPAE('game');
    return this.game_8j9hzp$_0;
  }, set: function (game) {
    this.game_8j9hzp$_0 = game;
  }});
  Object.defineProperty(GamePresenter.prototype, 'matchmaking_0', {get: function () {
    if (this.matchmaking_tys5gd$_0 == null)
      return throwUPAE('matchmaking');
    return this.matchmaking_tys5gd$_0;
  }, set: function (matchmaking) {
    this.matchmaking_tys5gd$_0 = matchmaking;
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
  GamePresenter.prototype.onGameEnd = function () {
    var tmp$, tmp$_0;
    if (this.mode_0 === GameMode$Online_getInstance()) {
      (tmp$_0 = Kotlin.isType(tmp$ = this.game_0.activeController, NetworkController) ? tmp$ : null) != null ? (tmp$_0.sendVictory_47hwoe$(ensureNotNull(this.game_0.lastMove)), Unit) : null;
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
              this.$this.matchmaking_0 = new Matchmaking(new PlayerInfo(this.$this.gameUI_0.getName()));
              this.state_0 = 2;
              this.result_0 = this.$this.matchmaking_0.findMatch(this);
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
            println('Playing against ' + info.other.name + ' as ' + info.player);
            var red = info.player === Player.Red ? new HumanController() : withUIAwareness(this.$this.matchmaking_0.opponent);
            var blue = info.player === Player.Blue ? new HumanController() : withUIAwareness(this.$this.matchmaking_0.opponent);
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
  GamePresenter.prototype.setRedAI_6taknv$ = function (active) {
    this.game_0.switchRed_wszlfq$(this.getLocalController_0(Player.Red));
  };
  GamePresenter.prototype.setBlueAI_6taknv$ = function (active) {
    this.game_0.switchBlue_wszlfq$(this.getLocalController_0(Player.Blue));
  };
  GamePresenter.prototype.getLocalController_0 = function (player) {
    return this.gameUI_0.isAI_3999j6$(player) ? withUIAwareness(new AI()) : new HumanController();
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
  function GameUI(rootDiv, menu, mode) {
    GameUI$Companion_getInstance();
    this.rootDiv_0 = rootDiv;
    this.menu_0 = menu;
    this.mode_0 = mode;
    this.aiCheckboxBlue_0 = get_0(document, 'ai-blue-check');
    this.aiCheckboxRed_0 = get_0(document, 'ai-red-check');
    this.turnIndicator_0 = get_0(document, 'turn-indicator');
    this.undo_0 = get_0(document, 'btn-undo');
    this.restart_0 = get_0(document, 'btn-restart');
    this.localControls_0 = get_0(document, 'local-controls');
    this.serverControls_0 = get_0(document, 'server-controls');
    this.onwPlayer_0 = get_0(document, 'server-own-player');
    this.eventListeners_0 = ArrayList_init();
    this.presenter_0 = new GamePresenter(this, this.mode_0);
    this.cells = this.createCells_0(6, 5);
    launch(this, void 0, void 0, GameUI_init$lambda(this));
  }
  function GameUI$Companion() {
    GameUI$Companion_instance = this;
  }
  GameUI$Companion.prototype.open_5reo23$ = function (rootDiv, menu, mode) {
    clear(rootDiv);
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
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  GameUI.prototype.createCells_0 = function (width, height) {
    var ui = table(get_create(document), void 0, GameUI$createCells$lambda(height, width));
    this.rootDiv_0.append(ui);
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
  GameUI.prototype.isAI_3999j6$ = function (player) {
    switch (player.name) {
      case 'Red':
        return this.aiCheckboxRed_0.checked;
      case 'Blue':
        return this.aiCheckboxBlue_0.checked;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  GameUI.prototype.checkGameMode_0 = function () {
    switch (this.mode_0.name) {
      case 'Local':
        this.localControls_0.hidden = false;
        this.serverControls_0.hidden = true;
        break;
      case 'Online':
        this.localControls_0.hidden = true;
        this.serverControls_0.hidden = false;
        break;
    }
  };
  function GameUI$registerEventListeners$lambda$lambda$lambda(this$GameUI, closure$x, closure$y) {
    return function (it) {
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
      this$GameUI.presenter_0.setRedAI_6taknv$(this$GameUI.aiCheckboxRed_0.checked);
      return Unit;
    };
  }
  function GameUI$registerEventListeners$lambda_2(this$GameUI) {
    return function (it) {
      this$GameUI.presenter_0.setBlueAI_6taknv$(this$GameUI.aiCheckboxRed_0.checked);
      return Unit;
    };
  }
  function GameUI$registerEventListeners$lambda_3(this$GameUI) {
    return function (it) {
      this$GameUI.exitGame_0();
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
          var element_2 = onClick(element_1, GameUI$registerEventListeners$lambda$lambda$lambda(this, element_0, element));
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
    var element_5 = onClick(this.aiCheckboxRed_0, GameUI$registerEventListeners$lambda_1(this));
    $receiver_3.add_11rb$(element_5);
    var $receiver_4 = this.eventListeners_0;
    var element_6 = onClick(this.aiCheckboxBlue_0, GameUI$registerEventListeners$lambda_2(this));
    $receiver_4.add_11rb$(element_6);
    var $receiver_5 = this.eventListeners_0;
    var element_7 = onClick(get_0(document, 'btn-exit-game'), GameUI$registerEventListeners$lambda_3(this));
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
    this.onwPlayer_0.innerText = 'Your are playing as ' + player + ' against ' + opponent;
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
            this.state_0 = 2;
            this.result_0 = this.local$this$GameUI.presenter_0.start(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$this$GameUI.checkGameMode_0();
            this.local$this$GameUI.updateUI();
            return this.local$this$GameUI.registerEventListeners_0(), Unit;
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
    var instance = new Coroutine$getMove_jr41iw$_0(this, lastMove, state_0, fromSelectCallback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMove_jr41iw$_0($this, lastMove, state_0, fromSelectCallback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$state = state_0;
    this.local$fromSelectCallback = fromSelectCallback_0;
  }
  Coroutine$getMove_jr41iw$_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$getMove_jr41iw$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMove_jr41iw$_0.prototype.constructor = Coroutine$getMove_jr41iw$_0;
  Coroutine$getMove_jr41iw$_0.prototype.doResume = function () {
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
  HumanController.prototype.supplyClick_bk5ui5$ = function (point) {
    var tmp$, tmp$_0;
    var s = this.state_0;
    if (!(s != null)) {
      var message = "Can't evaluate move since the state is unknown";
      throw IllegalArgumentException_init(message.toString());
    }
    if (this.from_0 == null) {
      if (!s.isEligibleToMove_bk5ui5$(point)) {
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
    if (s.move_56t7qy$(f, point) == null) {
      this.from_0 = null;
      (tmp$_0 = this.selectCallback_0) != null ? tmp$_0(null) : null;
      return;
    }
    this.to_0 = point;
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
    onClick(this.btnPlayLocal_0, MenuUI_init$lambda(this));
    onClick(this.btnPlayOnline_0, MenuUI_init$lambda_0(this));
    onClick(this.btnRules_0, MenuUI_init$lambda_1(this));
    onClick(this.btnBack_0, MenuUI_init$lambda_2(this));
  }
  MenuUI.prototype.closeGame = function () {
    this.game_0.hidden = true;
    this.menu_0.hidden = false;
  };
  function MenuUI_init$lambda(this$MenuUI) {
    return function (it) {
      this$MenuUI.menu_0.hidden = true;
      this$MenuUI.game_0.hidden = false;
      GameUI$Companion_getInstance().open_5reo23$(get_0(document, 'game'), this$MenuUI, GameMode$Local_getInstance());
      return Unit;
    };
  }
  function MenuUI_init$lambda_0(this$MenuUI) {
    return function (it) {
      this$MenuUI.menu_0.hidden = true;
      this$MenuUI.game_0.hidden = false;
      GameUI$Companion_getInstance().open_5reo23$(get_0(document, 'game'), this$MenuUI, GameMode$Online_getInstance());
      return Unit;
    };
  }
  function MenuUI_init$lambda_1(this$MenuUI) {
    return function (it) {
      this$MenuUI.rules_0.hidden = false;
      this$MenuUI.menu_0.hidden = true;
      return Unit;
    };
  }
  function MenuUI_init$lambda_2(this$MenuUI) {
    return function (it) {
      this$MenuUI.rules_0.hidden = true;
      this$MenuUI.menu_0.hidden = false;
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
  function removeOnClick($receiver, action) {
    $receiver.removeEventListener('click', action);
  }
  function WebsocketConnection() {
  }
  WebsocketConnection.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'WebsocketConnection', interfaces: []};
  function WebsocketConnectionImpl(ws) {
    this.ws_0 = ws;
    this.open_0 = CompletableDeferred();
    this.messages_0 = Channel();
    this.ws_0.onopen = WebsocketConnectionImpl_init$lambda(this);
    this.ws_0.onclose = WebsocketConnectionImpl_init$lambda_0(this);
    this.ws_0.onmessage = WebsocketConnectionImpl_init$lambda_1(this);
  }
  Object.defineProperty(WebsocketConnectionImpl.prototype, 'coroutineContext', {get: function () {
    return coroutines.Dispatchers.Default.plus_1fupul$(Job());
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
  function WebsocketConnectionImpl_init$lambda$lambda(this$WebsocketConnectionImpl_0, closure$evt_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$WebsocketConnectionImpl_init$lambda$lambda(this$WebsocketConnectionImpl_0, closure$evt_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$WebsocketConnectionImpl_init$lambda$lambda(this$WebsocketConnectionImpl_0, closure$evt_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$WebsocketConnectionImpl = this$WebsocketConnectionImpl_0;
    this.local$closure$evt = closure$evt_0;
  }
  Coroutine$WebsocketConnectionImpl_init$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$WebsocketConnectionImpl_init$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WebsocketConnectionImpl_init$lambda$lambda.prototype.constructor = Coroutine$WebsocketConnectionImpl_init$lambda$lambda;
  Coroutine$WebsocketConnectionImpl_init$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
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
        launch(this$WebsocketConnectionImpl, void 0, void 0, WebsocketConnectionImpl_init$lambda$lambda(this$WebsocketConnectionImpl, evt));
      return Unit;
    };
  }
  WebsocketConnectionImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebsocketConnectionImpl', interfaces: [CoroutineScope, WebsocketConnection]};
  var package$de = _.de || (_.de = {});
  var package$earley = package$de.earley || (package$de.earley = {});
  var package$gogogo = package$earley.gogogo || (package$earley.gogogo = {});
  var package$ai = package$gogogo.ai || (package$gogogo.ai = {});
  package$ai.DelayedController = DelayedController;
  package$ai.withUIAwareness_mj2ouj$ = withUIAwareness;
  package$gogogo.main_kand9s$ = main;
  Object.defineProperty(Connection, 'Companion', {get: Connection$Companion_getInstance});
  var package$net = package$gogogo.net || (package$gogogo.net = {});
  package$net.Connection = Connection;
  package$net.Matchmaking = Matchmaking;
  package$net.NetworkController = NetworkController;
  var package$ui = package$gogogo.ui || (package$gogogo.ui = {});
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
  package$ui.removeOnClick_27kyd6$ = removeOnClick;
  var package$web = package$gogogo.web || (package$gogogo.web = {});
  package$web.WebsocketConnection = WebsocketConnection;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$web.WebsocketConnectionImpl = WebsocketConnectionImpl;
  server = 'wss://gogogo-server.herokuapp.com/';
  name_0 = null;
  main([]);
  return _;
}(typeof this['gogogo-frontend'] === 'undefined' ? {} : this['gogogo-frontend'], kotlin, this['kotlinx-coroutines-core'], this['gogogo-common'], this['kotlinx-html-js']);

//# sourceMappingURL=gogogo-frontend.js.map
