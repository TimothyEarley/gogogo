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
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var windowed = Kotlin.kotlin.collections.windowed_vo9c23$;
  var net = $module$gogogo_common.de.earley.gogogo.net;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var asSequence = Kotlin.kotlin.collections.asSequence_abgq59$;
  var canMove = $module$gogogo_common.de.earley.gogogo.game.canMove_yawtop$;
  var bestMove = $module$gogogo_common.de.earley.gogogo.ai.bestMove_7dht$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var getCallableRef = Kotlin.getCallableRef;
  var ai = $module$gogogo_common.de.earley.gogogo.ai;
  var treeSearchStrategy = $module$gogogo_common.de.earley.gogogo.ai.treeSearchStrategy_r1a1ux$;
  var AI = $module$gogogo_common.de.earley.gogogo.ai.AI;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var throwUPAE = Kotlin.throwUPAE;
  var toString = Kotlin.toString;
  var Point = $module$gogogo_common.de.earley.gogogo.game.Point;
  var ensureNotNull = Kotlin.ensureNotNull;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var L100 = Kotlin.Long.fromInt(100);
  var PlayerInfo = $module$gogogo_common.de.earley.gogogo.net.PlayerInfo;
  var Player = $module$gogogo_common.de.earley.gogogo.game.Player;
  var ControlledGame = $module$gogogo_common.de.earley.gogogo.game.ControlledGame;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var UIHook = $module$gogogo_common.de.earley.gogogo.game.UIHook;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var MoveResult$Error = $module$gogogo_common.de.earley.gogogo.game.MoveResult.Error;
  var Move = $module$gogogo_common.de.earley.gogogo.game.Move;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var cancel = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancel_jnvdxk$;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var Game = $module$gogogo_common.de.earley.gogogo.game.Game;
  var debug = $module$gogogo_common.de.earley.gogogo.ai.debug;
  var clear = Kotlin.kotlin.dom.clear_asww5s$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_nemw19$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var take = Kotlin.kotlin.collections.take_ba2ldo$;
  var ol = $module$kotlinx_html_js.kotlinx.html.js.ol_qmgqht$;
  var walk = $module$gogogo_common.de.earley.gogogo.ai.debug.walk_y6tmdh$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var min = Kotlin.kotlin.collections.min_exjks8$;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_nayhkp$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var toString_0 = Kotlin.kotlin.text.toString_dqglrj$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_e6giw3$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var findAllMoves = $module$gogogo_common.de.earley.gogogo.ai.findAllMoves_1pq5d1$;
  var Tree = $module$gogogo_common.de.earley.gogogo.ai.debug.Tree;
  var State = $module$gogogo_common.de.earley.gogogo.game.State;
  var GameGrid = $module$gogogo_common.de.earley.gogogo.game.grid.GameGrid;
  var throwCCE = Kotlin.throwCCE;
  var set_style = $module$kotlinx_html_js.kotlinx.html.set_style_ueiko3$;
  var set_title = $module$kotlinx_html_js.kotlinx.html.set_title_ueiko3$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var ul_0 = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var li_0 = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparator = Kotlin.kotlin.Comparator;
  var Alterations_init = $module$gogogo_common.de.earley.gogogo.game.grid.Alterations;
  var L10 = Kotlin.Long.fromInt(10);
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var td = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_7wec05$;
  var table = $module$kotlinx_html_js.kotlinx.html.js.table_uk5qws$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var GenericGrid_init = $module$gogogo_common.de.earley.gogogo.game.grid.GenericGrid;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var option = $module$kotlinx_html_js.kotlinx.html.js.option_61vnh7$;
  ControllerTypes.prototype = Object.create(Enum.prototype);
  ControllerTypes.prototype.constructor = ControllerTypes;
  Log$Level.prototype = Object.create(Enum.prototype);
  Log$Level.prototype.constructor = Log$Level;
  ClosedException.prototype = Object.create(Exception.prototype);
  ClosedException.prototype.constructor = ClosedException;
  GameMode.prototype = Object.create(Enum.prototype);
  GameMode.prototype.constructor = GameMode;
  function DelayedController(pc) {
    this.pc_0 = pc;
    this.name_pw0jc$_0 = 'UI AI';
  }
  Object.defineProperty(DelayedController.prototype, 'name', {get: function () {
    return this.name_pw0jc$_0;
  }});
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
  DelayedController.prototype.getMove_jr41iw$ = function (lastMove_0, state_0, fromSelectCallback_0, continuation_0, suspended) {
    var instance = new Coroutine$getMove_jr41iw$(this, lastMove_0, state_0, fromSelectCallback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  DelayedController.$metadata$ = {kind: Kind_CLASS, simpleName: 'DelayedController', interfaces: [PlayerController]};
  function withUIAwareness($receiver) {
    if (Kotlin.isType($receiver, DelayedController))
      return $receiver;
    else
      return new DelayedController($receiver);
  }
  function database$lambda() {
    var $receiver = windowed(lines(save), 2, 2);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var state = item.get_za3lpa$(0);
      var move = item.get_za3lpa$(1);
      tmp$_0.call(destination, to(net.StateNetFormat.decode_61zpoe$(state), net.MoveNetFormat.decode_61zpoe$(move)));
    }
    return toMap(destination);
  }
  var database;
  function get_database() {
    return database.value;
  }
  function HumanPlusAI(fallback) {
    this.fallback_0 = fallback;
    this.name_5mm3o7$_0 = 'Human+';
  }
  Object.defineProperty(HumanPlusAI.prototype, 'name', {get: function () {
    return this.name_5mm3o7$_0;
  }});
  HumanPlusAI.prototype.getMove_jr41iw$ = function (lastMove, state, fromSelectCallback, continuation) {
    var tmp$, tmp$_0;
    var $receiver = asSequence(get_database());
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        var savedState = element.key;
        var move = element.value;
        if ((state != null ? state.equals(savedState) : null) || (state.isSimilar_biffl8$(savedState) && canMove(state, move))) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var tmp$_2;
    if ((tmp$_0 = (tmp$ = firstOrNull$result) != null ? tmp$.value : null) != null)
      tmp$_2 = tmp$_0;
    else {
      var $receiver_0 = bestMove(this.fallback_0, state.playersTurn, state).move;
      println('Had to check with AI');
      tmp$_2 = $receiver_0;
    }
    return tmp$_2;
  };
  HumanPlusAI.$metadata$ = {kind: Kind_CLASS, simpleName: 'HumanPlusAI', interfaces: [PlayerController]};
  var save;
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
    }.bind(null, new AI(treeSearchStrategy(1, ai.Evaluations.mostForward, false)))));
    ControllerTypes$Medium_instance = new ControllerTypes('Medium', 2, getCallableRef('withUIAwareness', function ($receiver) {
      return withUIAwareness($receiver);
    }.bind(null, new AI(treeSearchStrategy(3, ai.Evaluations.sumSquarePosition, false)))));
    ControllerTypes$Hard_instance = new ControllerTypes('Hard', 3, getCallableRef('withUIAwareness', function ($receiver) {
      return withUIAwareness($receiver);
    }.bind(null, new HumanPlusAI(treeSearchStrategy(4, ai.Evaluations.sumSquarePosition, false)))));
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
  function controllerTypesAsString() {
    var $receiver = ControllerTypes$values();
    var destination = ArrayList_init($receiver.length);
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
    this.game_xv1fk2$_0 = this.game_xv1fk2$_0;
    this.matchmaking_0 = null;
    this.matchinfo_0 = null;
  }
  Object.defineProperty(GamePresenter.prototype, 'game_0', {get: function () {
    if (this.game_xv1fk2$_0 == null)
      return throwUPAE('game');
    return this.game_xv1fk2$_0;
  }, set: function (game) {
    this.game_xv1fk2$_0 = game;
  }});
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
  GamePresenter.prototype.start = function (continuation_0, suspended) {
    var instance = new Coroutine$start(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  GamePresenter.prototype.turnText = function () {
    if (this.game_0.isOver()) {
      return toString(this.game_0.victor) + ' has won!';
    }
     else {
      return this.game_0.player.toString() + "'s turn";
    }
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
            this.$this.gameUI_0.updateUI_rjcut3$(this.$this.game_0, this.$this.selected_0);
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
  GamePresenter.prototype.restart = function (continuation_0, suspended) {
    var instance = new Coroutine$restart(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
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
      ensureNotNull(this.gameUI_0.uiGrid.get_bk5ui5$(point)).classList.add('game-cell-selected');
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
  function Coroutine$onMove_47hwoe$($this, move_0, continuation_0) {
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
            this.$this.gameUI_0.updateUI_rjcut3$(this.$this.game_0, this.$this.selected_0);
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
  GamePresenter.prototype.onMove_47hwoe$ = function (move_0, continuation_0, suspended) {
    var instance = new Coroutine$onMove_47hwoe$(this, move_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function GamePresenter$createGame$lambda(closure$info) {
    return function () {
      return 'Playing against ' + closure$info.other.name + ' as ' + closure$info.player;
    };
  }
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
  GamePresenter.prototype.createGame_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$createGame_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
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
            return this.local$this$.start_e9pf1l$(this.local$$receiver);
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
  function GamePresenter$startGame$lambda$lambda(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$GamePresenter$startGame$lambda$lambda(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GamePresenter.prototype.startGame_0 = function (game) {
    return launch(coroutines.GlobalScope, void 0, void 0, GamePresenter$startGame$lambda$lambda(game));
  };
  GamePresenter.prototype.unselect_0 = function () {
    var tmp$;
    if ((tmp$ = this.selected_0) != null) {
      ensureNotNull(this.gameUI_0.uiGrid.get_bk5ui5$(tmp$)).classList.remove('game-cell-selected');
    }
    this.selected_0 = null;
  };
  GamePresenter.prototype.undo = function () {
    if (!(this.mode_0 === GameMode$Local_getInstance())) {
      var message = 'Only allowed in local play!';
      throw IllegalArgumentException_init(message.toString());
    }
    this.game_0.undo();
    this.unselect_0();
    this.gameUI_0.updateUI_rjcut3$(this.game_0, this.selected_0);
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
  function Coroutine$getMove_jr41iw$_0($this, lastMove_0, state_0, fromSelectCallback_0, continuation_0) {
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
  HumanController.prototype.getMove_jr41iw$ = function (lastMove_0, state_0, fromSelectCallback_0, continuation_0, suspended) {
    var instance = new Coroutine$getMove_jr41iw$_0(this, lastMove_0, state_0, fromSelectCallback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function HumanController$supplyClick$lambda(closure$point, this$HumanController) {
    return function () {
      return 'Human clicked ' + closure$point + '. From: ' + toString(this$HumanController.from_0);
    };
  }
  function HumanController$supplyClick$lambda_0() {
    return "Can't evaluate move since the state is unknown";
  }
  function HumanController$supplyClick$lambda_1(closure$point) {
    return function () {
      return 'Illegal from: ' + closure$point;
    };
  }
  function HumanController$supplyClick$lambda_2(closure$move) {
    return function () {
      return 'Illegal move, resetting: ' + closure$move.msg;
    };
  }
  function HumanController$supplyClick$lambda_3(this$HumanController) {
    return function () {
      return 'Move ' + toString(this$HumanController.from_0) + ' to ' + toString(this$HumanController.to_0);
    };
  }
  HumanController.prototype.supplyClick_bk5ui5$ = function (point) {
    var tmp$, tmp$_0;
    Log_getInstance().debug_h4ejuu$(HumanController$supplyClick$lambda(point, this));
    var s = this.state_0;
    if (s == null) {
      Log_getInstance().error_h4ejuu$(HumanController$supplyClick$lambda_0);
      return;
    }
    if (this.from_0 == null) {
      if (!s.isEligibleToMove_bk5ui5$(point)) {
        Log_getInstance().info_h4ejuu$(HumanController$supplyClick$lambda_1(point));
        return;
      }
      this.from_0 = point;
      (tmp$ = this.selectCallback_0) != null ? tmp$(point) : null;
      return;
    }
    var f = this.from_0;
    if (!(f != null)) {
      var message = 'From is null';
      throw IllegalArgumentException_init(message.toString());
    }
    var move = s.move_56t7qy$(f, point);
    if (Kotlin.isType(move, MoveResult$Error)) {
      Log_getInstance().info_h4ejuu$(HumanController$supplyClick$lambda_2(move));
      this.from_0 = null;
      (tmp$_0 = this.selectCallback_0) != null ? tmp$_0(null) : null;
      return;
    }
    this.to_0 = point;
    Log_getInstance().debug_h4ejuu$(HumanController$supplyClick$lambda_3(this));
    if (!this.commit_0.offer_11rb$(new Move(ensureNotNull(this.from_0), ensureNotNull(this.to_0)))) {
      var message_0 = 'Could not send commit';
      throw IllegalArgumentException_init(message_0.toString());
    }
  };
  HumanController.$metadata$ = {kind: Kind_CLASS, simpleName: 'HumanController', interfaces: [PlayerController]};
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
    this.ws_0.send_61zpoe$(net.MoveNetFormat.encodeNullable_11rb$(move));
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
              return net.MoveNetFormat.decode_61zpoe$(msg);
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
  Connection.prototype.getMove_blsywf$ = function (lastMove_0, continuation_0, suspended) {
    var instance = new Coroutine$getMove_blsywf$(this, lastMove_0, continuation_0);
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
  Connection.prototype.setupMatch_56l50f$ = function (playerInfo_0, continuation_0, suspended) {
    var instance = new Coroutine$setupMatch_56l50f$(this, playerInfo_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
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
  function Coroutine$getMove_jr41iw$_1($this, lastMove_0, state_0, fromSelectCallback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$lastMove = lastMove_0;
  }
  Coroutine$getMove_jr41iw$_1.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$getMove_jr41iw$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMove_jr41iw$_1.prototype.constructor = Coroutine$getMove_jr41iw$_1;
  Coroutine$getMove_jr41iw$_1.prototype.doResume = function () {
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
  NetworkController.prototype.getMove_jr41iw$ = function (lastMove_0, state_0, fromSelectCallback_0, continuation_0, suspended) {
    var instance = new Coroutine$getMove_jr41iw$_1(this, lastMove_0, state_0, fromSelectCallback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
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
  function Coroutine$WebsocketConnectionImpl$send$lambda(this$WebsocketConnectionImpl_0, closure$s_0, $receiver_0, controller, continuation_0) {
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
  function WebsocketConnectionImpl$send$lambda(this$WebsocketConnectionImpl_0, closure$s_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$WebsocketConnectionImpl$send$lambda(this$WebsocketConnectionImpl_0, closure$s_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
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
  function WebsocketConnectionImpl_init$lambda_0(this$WebsocketConnectionImpl) {
    return function (it) {
      cancel(this$WebsocketConnectionImpl);
      return Unit;
    };
  }
  function WebsocketConnectionImpl_init$lambda$lambda$lambda(closure$evt) {
    return function () {
      return 'Received ' + toString(closure$evt.data);
    };
  }
  function Coroutine$WebsocketConnectionImpl_init$lambda$lambda(closure$evt_0, this$WebsocketConnectionImpl_0, $receiver_0, controller, continuation_0) {
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
  function WebsocketConnectionImpl_init$lambda$lambda(closure$evt_0, this$WebsocketConnectionImpl_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$WebsocketConnectionImpl_init$lambda$lambda(closure$evt_0, this$WebsocketConnectionImpl_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function WebsocketConnectionImpl_init$lambda_1(this$WebsocketConnectionImpl) {
    return function (evt) {
      if (Kotlin.isType(evt, MessageEvent))
        launch(this$WebsocketConnectionImpl, void 0, void 0, WebsocketConnectionImpl_init$lambda$lambda(evt, this$WebsocketConnectionImpl));
      return Unit;
    };
  }
  WebsocketConnectionImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'WebsocketConnectionImpl', interfaces: [CoroutineScope, WebsocketConnection]};
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  function AiTestUI(menu) {
    this.menu_0 = menu;
    this.exit_0 = get_0(document, 'btn-exit-ai-test');
    this.eventListeners_0 = new EventListenerCollection();
    this.grid_0 = new UIGrid(get_0(document, 'ai-game-grid'));
    this.list_0 = get_0(document, 'ai-list');
    this.tree_0 = get_0(document, 'ai-tree');
    this.state_0 = State.Companion.inital;
    this.selected_0 = null;
    this.eventListeners_0.plusAssign_l0bhsa$(onClick(this.exit_0, AiTestUI_init$lambda(this)));
    this.grid_0.onClick_uq7uae$(this.eventListeners_0, AiTestUI_init$lambda_0(this));
    this.updateUI_0();
  }
  AiTestUI.prototype.updateUI_0 = function () {
    this.grid_0.setClasses_rjcut3$(new Game(this.state_0), this.selected_0);
    this.showAITree_0();
  };
  AiTestUI.prototype.exit_1 = function () {
    this.eventListeners_0.close();
    this.menu_0.closeAiTest();
  };
  function AiTestUI$showAITree$lambda$lambda(closure$player) {
    return function ($receiver) {
      $receiver.text_61zpoe$('It is ' + closure$player + ' turn.');
      return Unit;
    };
  }
  function AiTestUI$showAITree$lambda$lambda_0(it) {
    return it.evaluation;
  }
  function AiTestUI$showAITree$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.text_61zpoe$(closure$it);
      return Unit;
    };
  }
  function AiTestUI$showAITree$lambda(closure$player, this$AiTestUI, closure$t) {
    return function ($receiver) {
      li($receiver, void 0, AiTestUI$showAITree$lambda$lambda(closure$player));
      set_id($receiver, this$AiTestUI.tree_0.id);
      var $receiver_0 = closure$t.children;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.v);
      }
      var $receiver_1 = take(sortedWith(destination, new Comparator$ObjectLiteral(compareByDescending$lambda(AiTestUI$showAITree$lambda$lambda_0))), 5);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_0;
      tmp$_0 = $receiver_1.iterator();
      while (tmp$_0.hasNext()) {
        var item_0 = tmp$_0.next();
        destination_0.add_11rb$(item_0.label);
      }
      var tmp$_1;
      tmp$_1 = destination_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        println('Adding li: ' + element);
        li($receiver, void 0, AiTestUI$showAITree$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  function AiTestUI$showAITree$lambda$lambda_1(it) {
    return it.evaluation.toString();
  }
  function AiTestUI$showAITree$lambda$lambda_2(closure$clamp, closure$min, closure$max) {
    return function (f) {
      var i = f.component2(), pl = f.component3();
      var sane = coerceIn(i, closure$clamp);
      var p = ((sane - closure$min | 0) * 255 | 0) / (closure$max - closure$min | 0) | 0;
      println('i=' + i + ', sane=' + sane + ', ' + p + ', min=' + closure$min + ', max=' + closure$max);
      var c = padStart(toString_0(p, 16), 2, 48);
      return pl === Player.Red ? '#ff' + c + c : '#' + c + c + 'ff';
    };
  }
  function AiTestUI$showAITree$lambda_0(closure$t, closure$clamp, closure$min, closure$max) {
    return function ($receiver) {
      html(closure$t, $receiver, getPropertyCallableRef('label', 1, function ($receiver) {
        return $receiver.label;
      }), AiTestUI$showAITree$lambda$lambda_1, AiTestUI$showAITree$lambda$lambda_2(closure$clamp, closure$min, closure$max));
      return Unit;
    };
  }
  AiTestUI.prototype.showAITree_0 = function () {
    var strategy = debug.superDebug;
    var player = this.state_0.playersTurn;
    var t = strategy(player, this.state_0, 'root');
    clear(this.list_0);
    this.list_0.appendChild(ol(get_create(document), void 0, AiTestUI$showAITree$lambda(player, this, t)));
    var values = toList(map(walk(t), getPropertyCallableRef('evaluation', 1, function ($receiver) {
      return $receiver.evaluation;
    })));
    var clamp = new IntRange(-1000, 1000);
    var min_0 = coerceIn(ensureNotNull(min(values)), clamp);
    var max_0 = coerceIn(ensureNotNull(max(values)), clamp);
    clear(this.tree_0);
    var ul_0 = ul(get_create(document), void 0, AiTestUI$showAITree$lambda_0(t, clamp, min_0, max_0));
    this.tree_0.appendChild(ul_0);
  };
  function AiTestUI$generateTree$lambda(closure$maxDepth, closure$strategy, closure$player, this$AiTestUI) {
    return function (it) {
      var $receiver = it.move;
      var desc = $receiver.from.x.toString() + '/' + $receiver.from.y + ' -> ' + $receiver.to.x + '/' + $receiver.to.y;
      return this$AiTestUI.generateTree_0(desc, it.state, closure$maxDepth - 1 | 0, closure$strategy, closure$player);
    };
  }
  AiTestUI.prototype.generateTree_0 = function (label, state, maxDepth, strategy, player) {
    return new Tree(to(label, strategy(player, state)), maxDepth === 0 ? emptyList() : toList(map(findAllMoves(state), AiTestUI$generateTree$lambda(maxDepth, strategy, player, this))));
  };
  function AiTestUI_init$lambda(this$AiTestUI) {
    return function (it) {
      this$AiTestUI.exit_1();
      return Unit;
    };
  }
  function AiTestUI_init$lambda_0(this$AiTestUI) {
    return function (x, y) {
      println('Clicked ' + x + '/' + y + ' with selected=' + toString(this$AiTestUI.selected_0));
      if (this$AiTestUI.selected_0 != null) {
        this$AiTestUI.state_0 = forceMove(this$AiTestUI.state_0, ensureNotNull(this$AiTestUI.selected_0), new Point(x, y));
        this$AiTestUI.selected_0 = null;
      }
       else {
        this$AiTestUI.selected_0 = new Point(x, y);
      }
      this$AiTestUI.updateUI_0();
      return Unit;
    };
  }
  AiTestUI.$metadata$ = {kind: Kind_CLASS, simpleName: 'AiTestUI', interfaces: []};
  function forceMove$lambda(this$forceMove, closure$from, closure$to) {
    return function ($receiver) {
      $receiver.set_jprfea$(closure$to, this$forceMove.grid.get_vux9f0$(closure$from.x, closure$from.y));
      $receiver.set_jprfea$(closure$from, null);
      return Unit;
    };
  }
  function forceMove($receiver, from, to) {
    var tmp$;
    var $receiver_0 = new Alterations_init($receiver.grid.toMutableGrid());
    forceMove$lambda($receiver, from, to)($receiver_0);
    return $receiver.copy_gcvhh1$(void 0, void 0, Kotlin.isType(tmp$ = $receiver_0.create(), GameGrid) ? tmp$ : throwCCE());
  }
  function html$lambda$lambda(closure$color, this$html, closure$title, closure$label) {
    return function ($receiver) {
      set_style($receiver, 'background-color: ' + closure$color(this$html.v));
      set_title($receiver, closure$title(this$html.v));
      $receiver.text_61zpoe$(closure$label(this$html.v));
      return Unit;
    };
  }
  function html$lambda$lambda_0(this$html, closure$label, closure$title, closure$color) {
    return function ($receiver) {
      var $receiver_0 = this$html.children;
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        html(element, $receiver, closure$label, closure$title, closure$color);
      }
      return Unit;
    };
  }
  function html$lambda(closure$color, this$html, closure$title, closure$label) {
    return function ($receiver) {
      span($receiver, 'tf-nc', html$lambda$lambda(closure$color, this$html, closure$title, closure$label));
      if (this$html.children.isEmpty())
        return;
      ul_0($receiver, void 0, html$lambda$lambda_0(this$html, closure$label, closure$title, closure$color));
      return Unit;
    };
  }
  function html($receiver, ul, label, title, color) {
    li_0(ul, void 0, html$lambda(color, $receiver, title, label));
  }
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
    this.eventListeners_0 = new EventListenerCollection();
    this.presenter_0 = new GamePresenter(this, this.mode_0);
    this.uiGrid = new UIGrid(this.table_0);
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
  GameUI.prototype.updateUI_rjcut3$ = function (game, selected) {
    this.uiGrid.setClasses_rjcut3$(game, selected);
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
  function Coroutine$GameUI$registerEventListeners$lambda$lambda(this$GameUI_0, $receiver_0, controller, continuation_0) {
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
  function GameUI$registerEventListeners$lambda$lambda(this$GameUI_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$GameUI$registerEventListeners$lambda$lambda(this$GameUI_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
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
    this.uiGrid.onClick_uq7uae$(this.eventListeners_0, getCallableRef('handleClick', function ($receiver, x, y) {
      return $receiver.handleClick_vux9f0$(x, y), Unit;
    }.bind(null, this.presenter_0)));
    this.eventListeners_0.plusAssign_l0bhsa$(onClick(this.restart_0, GameUI$registerEventListeners$lambda(this)));
    this.eventListeners_0.plusAssign_l0bhsa$(onClick(this.undo_0, GameUI$registerEventListeners$lambda_0(this)));
    this.eventListeners_0.plusAssign_l0bhsa$(onClick(get_0(document, 'btn-exit-game'), GameUI$registerEventListeners$lambda_1(this)));
    this.eventListeners_0.plusAssign_l0bhsa$(onChange(this.blueController_0, GameUI$registerEventListeners$lambda_2(this)));
    this.eventListeners_0.plusAssign_l0bhsa$(onChange(this.redController_0, GameUI$registerEventListeners$lambda_3(this)));
  };
  GameUI.prototype.exitGame_0 = function () {
    this.eventListeners_0.close();
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
  function Coroutine$GameUI_init$lambda(this$GameUI_0, $receiver_0, controller, continuation_0) {
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
  function GameUI_init$lambda(this$GameUI_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$GameUI_init$lambda(this$GameUI_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  GameUI.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameUI', interfaces: [CoroutineScope]};
  function MenuUI() {
    this.enableTestAI_0 = false;
    this.btnPlayLocal_0 = get_0(document, 'btn-play-local');
    this.btnPlayOnline_0 = get_0(document, 'btn-play-online');
    this.btnRules_0 = get_0(document, 'btn-rules');
    this.btnTestAI_0 = get_0(document, 'btn-test-ai');
    this.btnBack_0 = get_0(document, 'btn-back');
    this.menu_0 = get_0(document, 'main-menu');
    this.rules_0 = get_0(document, 'rules');
    this.game_0 = get_0(document, 'game-ui');
    this.aiTest_0 = get_0(document, 'ai-test-ui');
    this.gameGrid_0 = get_0(document, 'game-grid');
    hide(this.game_0);
    hide(this.rules_0);
    onClick(this.btnPlayLocal_0, MenuUI_init$lambda(this));
    onClick(this.btnPlayOnline_0, MenuUI_init$lambda_0(this));
    onClick(this.btnRules_0, MenuUI_init$lambda_1(this));
    if (!this.enableTestAI_0)
      hide(this.btnTestAI_0);
    onClick(this.btnTestAI_0, MenuUI_init$lambda_2(this));
    onClick(this.btnBack_0, MenuUI_init$lambda_3(this));
  }
  MenuUI.prototype.closeGame = function () {
    hide(this.game_0);
    unhide(this.menu_0);
  };
  MenuUI.prototype.closeAiTest = function () {
    hide(this.aiTest_0);
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
      hide(this$MenuUI.menu_0);
      unhide(this$MenuUI.aiTest_0);
      new AiTestUI(this$MenuUI);
      return Unit;
    };
  }
  function MenuUI_init$lambda_3(this$MenuUI) {
    return function (it) {
      hide(this$MenuUI.rules_0);
      unhide(this$MenuUI.menu_0);
      return Unit;
    };
  }
  MenuUI.$metadata$ = {kind: Kind_CLASS, simpleName: 'MenuUI', interfaces: []};
  function UIGrid(table) {
    this.cells_0 = this.createCells_0(table, 6, 5);
  }
  function UIGrid$createCells$lambda$lambda$lambda$lambda$lambda(closure$x, closure$y) {
    return function ($receiver) {
      set_id($receiver, 'game-cell-' + closure$x + '-' + closure$y);
      return Unit;
    };
  }
  function UIGrid$createCells$lambda$lambda$lambda(closure$width, closure$y) {
    return function ($receiver) {
      var $receiver_0 = until(0, closure$width);
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        td($receiver, 'game-cell', UIGrid$createCells$lambda$lambda$lambda$lambda$lambda(element, closure$y));
      }
      return Unit;
    };
  }
  function UIGrid$createCells$lambda(closure$height, closure$width) {
    return function ($receiver) {
      set_id($receiver, 'game-grid');
      var $receiver_0 = until(0, closure$height);
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        tr($receiver, void 0, UIGrid$createCells$lambda$lambda$lambda(closure$width, element));
      }
      return Unit;
    };
  }
  function UIGrid$createCells$lambda_0(x, y) {
    return get_0(document, 'game-cell-' + x + '-' + y);
  }
  UIGrid.prototype.createCells_0 = function (table_0, width, height) {
    var ui = table(get_create(document), void 0, UIGrid$createCells$lambda(height, width));
    table_0.replaceWith(ui);
    var $receiver = until(0, height);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = until(0, width);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(UIGrid$createCells$lambda_0(item, element));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return new GenericGrid_init(width, height, copyToArray(destination));
  };
  function UIGrid$onClick$lambda$lambda$lambda$lambda(closure$x, closure$y) {
    return function () {
      return 'Clicked ' + closure$x + ', ' + closure$y;
    };
  }
  function UIGrid$onClick$lambda$lambda$lambda(closure$x, closure$y, closure$handler) {
    return function (it) {
      Log_getInstance().debug_h4ejuu$(UIGrid$onClick$lambda$lambda$lambda$lambda(closure$x, closure$y));
      closure$handler(closure$x, closure$y);
      return Unit;
    };
  }
  UIGrid.prototype.onClick_uq7uae$ = function (listeners, handler) {
    var $receiver = this.cells_0;
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
          listeners.plusAssign_l0bhsa$(onClick(element_1, UIGrid$onClick$lambda$lambda$lambda(element_0, element, handler)));
        }
      }
    }
  };
  UIGrid.prototype.setClasses_rjcut3$ = function (game, selected) {
    var $receiver = this.cells_0;
    var tmp$;
    tmp$ = until(0, $receiver.height).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = until(0, $receiver.width).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var receiver = ensureNotNull($receiver.get_vux9f0$(element_0, element));
        var tmp$_1;
        removeClass(receiver, ['token-blue', 'token-red', 'clickable', 'can-move', 'selected']);
        if ((tmp$_1 = game.grid.get_vux9f0$(element_0, element)) != null) {
          receiver.classList.add('token-' + asClass(tmp$_1), 'clickable');
        }
        if (!game.isOver() && game.isEligibleToMove_bk5ui5$(new Point(element_0, element))) {
          receiver.classList.add('can-move');
        }
        if (selected != null && element_0 === selected.x && element === selected.y) {
          receiver.classList.add('selected');
        }
      }
    }
  };
  UIGrid.prototype.get_bk5ui5$ = function (p) {
    return this.cells_0.get_vux9f0$(p.x, p.y);
  };
  UIGrid.$metadata$ = {kind: Kind_CLASS, simpleName: 'UIGrid', interfaces: []};
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
  function EventListenerCollection() {
    this.listeners_0 = ArrayList_init_0();
  }
  EventListenerCollection.prototype.plusAssign_l0bhsa$ = function (listener) {
    this.listeners_0.add_11rb$(listener);
  };
  EventListenerCollection.prototype.close = function () {
    var tmp$;
    tmp$ = this.listeners_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var elem = element.component1(), action = element.component2();
      removeOnClick(elem, action);
    }
    this.listeners_0.clear();
  };
  EventListenerCollection.$metadata$ = {kind: Kind_CLASS, simpleName: 'EventListenerCollection', interfaces: []};
  var package$de = _.de || (_.de = {});
  var package$earley = package$de.earley || (package$de.earley = {});
  var package$gogogo = package$earley.gogogo || (package$earley.gogogo = {});
  var package$ai = package$gogogo.ai || (package$gogogo.ai = {});
  package$ai.withUIAwareness_mj2ouj$ = withUIAwareness;
  package$ai.HumanPlusAI = HumanPlusAI;
  Object.defineProperty(ControllerTypes, 'Human', {get: ControllerTypes$Human_getInstance});
  Object.defineProperty(ControllerTypes, 'Easy', {get: ControllerTypes$Easy_getInstance});
  Object.defineProperty(ControllerTypes, 'Medium', {get: ControllerTypes$Medium_getInstance});
  Object.defineProperty(ControllerTypes, 'Hard', {get: ControllerTypes$Hard_getInstance});
  var package$ui = package$gogogo.ui || (package$gogogo.ui = {});
  package$ui.ControllerTypes = ControllerTypes;
  package$ui.controllerTypesAsString = controllerTypesAsString;
  package$ui.toControllerType_pdl1vz$ = toControllerType;
  var package$controller = _.controller || (_.controller = {});
  package$controller.GamePresenter = GamePresenter;
  package$ui.HumanController = HumanController;
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
  package$net.WebsocketConnectionImpl = WebsocketConnectionImpl;
  package$ui.AiTestUI = AiTestUI;
  $$importsForInline$$['gogogo-common'] = $module$gogogo_common;
  package$ui.asClass_txv5hr$ = asClass;
  Object.defineProperty(GameMode, 'Local', {get: GameMode$Local_getInstance});
  Object.defineProperty(GameMode, 'Online', {get: GameMode$Online_getInstance});
  package$ui.GameMode = GameMode;
  Object.defineProperty(GameUI, 'Companion', {get: GameUI$Companion_getInstance});
  package$ui.GameUI = GameUI;
  package$ui.MenuUI = MenuUI;
  package$ui.UIGrid = UIGrid;
  package$ui.get_o90r4$ = get_0;
  package$ui.onClick_2lnv0o$ = onClick;
  package$ui.onChange_7k8njo$ = onChange;
  package$ui.removeOnClick_27kyd6$ = removeOnClick;
  package$ui.addOption_8ao98n$ = addOption;
  package$ui.hide_y4uc6z$ = hide;
  package$ui.unhide_y4uc6z$ = unhide;
  package$ui.EventListenerCollection = EventListenerCollection;
  database = lazy(database$lambda);
  save = 'Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,1 -> 1,1\nBlue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,3 -> 0,2\nBlue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,1 -> 1,1\nBlue;6,5,B__R___BB_R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,1 -> 2,1\nBlue;6,5,B_______BRR_B__B_R_____RB____R;3,2;3,0 -> 3,1;Red;6,5,B__R____BBR_B____R_____RB____R;3,1;1,1 -> 2,1;Blue;6,5,B__R___BB_R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,0 -> 1,0\nBlue;6,5,_B______B_R_B__R_R___B_RB____R;3,3;3,1 -> 3,2;Red;6,5,_B______BRR_B__B_R_____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______BRR_B__B_R_____RB____R;3,2;3,0 -> 3,1;Red;6,5,B__R____BBR_B____R_____RB____R;3,1;1,1 -> 2,1;Blue;6,5,B__R___BB_R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,1 -> 3,1\nBlue;6,5,_B_B_____RR_B____R___B_RB____R;3,0;3,2 -> 3,1;Red;6,5,_B_______BR_B__R_R___B_RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B_R_B__R_R___B_RB____R;3,3;3,1 -> 3,2;Red;6,5,_B______BRR_B__B_R_____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______BRR_B__B_R_____RB____R;3,2;3,0 -> 3,1;Red;6,5,B__R____BBR_B____R_____RB____R;3,1;1,1 -> 2,1;Blue;6,5,B__R___BB_R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,3 -> 4,3\nBlue;6,5,_B_B_____RR_B____R___BR_B____R;3,3;5,3 -> 4,3;Red;6,5,_B_B_____RR_B____R____BRB____R;_;3,3 -> 4,3;Blue;6,5,_B_B_____RR_B____R___B_RB____R;3,0;3,2 -> 3,1;Red;6,5,_B_______BR_B__R_R___B_RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B_R_B__R_R___B_RB____R;3,3;3,1 -> 3,2;Red;6,5,_B______BRR_B__B_R_____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______BRR_B__B_R_____RB____R;3,2;3,0 -> 3,1;Red;6,5,B__R____BBR_B____R_____RB____R;3,1;1,1 -> 2,1;Blue;6,5,B__R___BB_R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,0 -> 4,0\nBlue;6,5,_B__B____RR_B___R____BR_B____R;_;5,2 -> 4,2;Red;6,5,_B__B____RR_B____R___BR_B____R;_;3,0 -> 4,0;Blue;6,5,_B_B_____RR_B____R___BR_B____R;3,3;5,3 -> 4,3;Red;6,5,_B_B_____RR_B____R____BRB____R;_;3,3 -> 4,3;Blue;6,5,_B_B_____RR_B____R___B_RB____R;3,0;3,2 -> 3,1;Red;6,5,_B_______BR_B__R_R___B_RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B_R_B__R_R___B_RB____R;3,3;3,1 -> 3,2;Red;6,5,_B______BRR_B__B_R_____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______BRR_B__B_R_____RB____R;3,2;3,0 -> 3,1;Red;6,5,B__R____BBR_B____R_____RB____R;3,1;1,1 -> 2,1;Blue;6,5,B__R___BB_R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,0 -> 5,0\nRed;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,1 -> 4,1\nRed;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,1 -> 3,1\nRed;6,5,_BB__R___R__B____RB____RB____R;2,0;0,0 -> 1,0;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,3 -> 4,3\nRed;6,5,_BB__R___R___B___RB___R_B____R;_;0,2 -> 1,2;Blue;6,5,_BB__R___R__B____RB___R_B____R;_;5,3 -> 4,3;Red;6,5,_BB__R___R__B____RB____RB____R;2,0;0,0 -> 1,0;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,3 -> 4,2\nRed;6,5,_BB__R___R____B_RRB_____B____R;_;1,2 -> 2,2;Blue;6,5,_BB__R___R___B__RRB_____B____R;_;4,3 -> 4,2;Red;6,5,_BB__R___R___B___RB___R_B____R;_;0,2 -> 1,2;Blue;6,5,_BB__R___R__B____RB___R_B____R;_;5,3 -> 4,3;Red;6,5,_BB__R___R__B____RB____RB____R;2,0;0,0 -> 1,0;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,1 -> 2,1\nRed;6,5,_B_B_R__R_____B_RRB_____B____R;_;2,0 -> 3,0;Blue;6,5,_BB__R__R_____B_RRB_____B____R;_;3,1 -> 2,1;Red;6,5,_BB__R___R____B_RRB_____B____R;_;1,2 -> 2,2;Blue;6,5,_BB__R___R___B__RRB_____B____R;_;4,3 -> 4,2;Red;6,5,_BB__R___R___B___RB___R_B____R;_;0,2 -> 1,2;Blue;6,5,_BB__R___R__B____RB___R_B____R;_;5,3 -> 4,3;Red;6,5,_BB__R___R__B____RB____RB____R;2,0;0,0 -> 1,0;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,1 -> 1,1\nRed;6,5,___B_R_B_____RB_RRB_____B____R;1,2;1,0 -> 1,1;Blue;6,5,_B_B_R_R______B_RRB_____B____R;_;2,1 -> 1,1;Red;6,5,_B_B_R__R_____B_RRB_____B____R;_;2,0 -> 3,0;Blue;6,5,_BB__R__R_____B_RRB_____B____R;_;3,1 -> 2,1;Red;6,5,_BB__R___R____B_RRB_____B____R;_;1,2 -> 2,2;Blue;6,5,_BB__R___R___B__RRB_____B____R;_;4,3 -> 4,2;Red;6,5,_BB__R___R___B___RB___R_B____R;_;0,2 -> 1,2;Blue;6,5,_BB__R___R__B____RB___R_B____R;_;5,3 -> 4,3;Red;6,5,_BB__R___R__B____RB____RB____R;2,0;0,0 -> 1,0;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,0 -> 4,0\nRed;6,5,___BR________BB_RRBR____B____R;1,3;1,1 -> 1,2;Blue;6,5,___BR__B_____RB_RRB_____B____R;_;5,0 -> 4,0;Red;6,5,___B_R_B_____RB_RRB_____B____R;1,2;1,0 -> 1,1;Blue;6,5,_B_B_R_R______B_RRB_____B____R;_;2,1 -> 1,1;Red;6,5,_B_B_R__R_____B_RRB_____B____R;_;2,0 -> 3,0;Blue;6,5,_BB__R__R_____B_RRB_____B____R;_;3,1 -> 2,1;Red;6,5,_BB__R___R____B_RRB_____B____R;_;1,2 -> 2,2;Blue;6,5,_BB__R___R___B__RRB_____B____R;_;4,3 -> 4,2;Red;6,5,_BB__R___R___B___RB___R_B____R;_;0,2 -> 1,2;Blue;6,5,_BB__R___R__B____RB___R_B____R;_;5,3 -> 4,3;Red;6,5,_BB__R___R__B____RB____RB____R;2,0;0,0 -> 1,0;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,0 -> 3,0\nRed;6,5,__BR_________BB_RR_BR___B____R;2,3;0,3 -> 1,3;Blue;6,5,__BR_________BB_RRBR____B____R;2,0;4,0 -> 3,0;Red;6,5,___BR________BB_RRBR____B____R;1,3;1,1 -> 1,2;Blue;6,5,___BR__B_____RB_RRB_____B____R;_;5,0 -> 4,0;Red;6,5,___B_R_B_____RB_RRB_____B____R;1,2;1,0 -> 1,1;Blue;6,5,_B_B_R_R______B_RRB_____B____R;_;2,1 -> 1,1;Red;6,5,_B_B_R__R_____B_RRB_____B____R;_;2,0 -> 3,0;Blue;6,5,_BB__R__R_____B_RRB_____B____R;_;3,1 -> 2,1;Red;6,5,_BB__R___R____B_RRB_____B____R;_;1,2 -> 2,2;Blue;6,5,_BB__R___R___B__RRB_____B____R;_;4,3 -> 4,2;Red;6,5,_BB__R___R___B___RB___R_B____R;_;0,2 -> 1,2;Blue;6,5,_BB__R___R__B____RB___R_B____R;_;5,3 -> 4,3;Red;6,5,_BB__R___R__B____RB____RB____R;2,0;0,0 -> 1,0;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,0 -> 2,0\nRed;6,5,_BR____B_____BB_RR__R___B____R;1,1;1,3 -> 1,2;Blue;6,5,_BR__________BB_RR_BR___B____R;1,0;3,0 -> 2,0;Red;6,5,__BR_________BB_RR_BR___B____R;2,3;0,3 -> 1,3;Blue;6,5,__BR_________BB_RRBR____B____R;2,0;4,0 -> 3,0;Red;6,5,___BR________BB_RRBR____B____R;1,3;1,1 -> 1,2;Blue;6,5,___BR__B_____RB_RRB_____B____R;_;5,0 -> 4,0;Red;6,5,___B_R_B_____RB_RRB_____B____R;1,2;1,0 -> 1,1;Blue;6,5,_B_B_R_R______B_RRB_____B____R;_;2,1 -> 1,1;Red;6,5,_B_B_R__R_____B_RRB_____B____R;_;2,0 -> 3,0;Blue;6,5,_BB__R__R_____B_RRB_____B____R;_;3,1 -> 2,1;Red;6,5,_BB__R___R____B_RRB_____B____R;_;1,2 -> 2,2;Blue;6,5,_BB__R___R___B__RRB_____B____R;_;4,3 -> 4,2;Red;6,5,_BB__R___R___B___RB___R_B____R;_;0,2 -> 1,2;Blue;6,5,_BB__R___R__B____RB___R_B____R;_;5,3 -> 4,3;Red;6,5,_BB__R___R__B____RB____RB____R;2,0;0,0 -> 1,0;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,3 -> 1,3\nRed;6,5,_BR____B_____BB_RR_R_____B___R;_;0,4 -> 1,4;Blue;6,5,_BR____B_____BB_RR_R____B____R;_;2,3 -> 1,3;Red;6,5,_BR____B_____BB_RR__R___B____R;1,1;1,3 -> 1,2;Blue;6,5,_BR__________BB_RR_BR___B____R;1,0;3,0 -> 2,0;Red;6,5,__BR_________BB_RR_BR___B____R;2,3;0,3 -> 1,3;Blue;6,5,__BR_________BB_RRBR____B____R;2,0;4,0 -> 3,0;Red;6,5,___BR________BB_RRBR____B____R;1,3;1,1 -> 1,2;Blue;6,5,___BR__B_____RB_RRB_____B____R;_;5,0 -> 4,0;Red;6,5,___B_R_B_____RB_RRB_____B____R;1,2;1,0 -> 1,1;Blue;6,5,_B_B_R_R______B_RRB_____B____R;_;2,1 -> 1,1;Red;6,5,_B_B_R__R_____B_RRB_____B____R;_;2,0 -> 3,0;Blue;6,5,_BB__R__R_____B_RRB_____B____R;_;3,1 -> 2,1;Red;6,5,_BB__R___R____B_RRB_____B____R;_;1,2 -> 2,2;Blue;6,5,_BB__R___R___B__RRB_____B____R;_;4,3 -> 4,2;Red;6,5,_BB__R___R___B___RB___R_B____R;_;0,2 -> 1,2;Blue;6,5,_BB__R___R__B____RB___R_B____R;_;5,3 -> 4,3;Red;6,5,_BB__R___R__B____RB____RB____R;2,0;0,0 -> 1,0;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,3 -> 0,3\nBlue;6,5,_B_____BR_R_B__B_R_____RB____R;1,1;3,1 -> 2,1;Red;6,5,_B______BRR_B__B_R_____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______BRR_B__B_R_____RB____R;3,2;3,0 -> 3,1;Red;6,5,B__R____BBR_B____R_____RB____R;3,1;1,1 -> 2,1;Blue;6,5,B__R___BB_R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,2 -> 4,2\nBlue;6,5,_B____BR__R_B___BR_____RB____R;0,1;2,1 -> 1,1;Red;6,5,_B_____BR_R_B___BR_____RB____R;_;3,2 -> 4,2;Blue;6,5,_B_____BR_R_B__B_R_____RB____R;1,1;3,1 -> 2,1;Red;6,5,_B______BRR_B__B_R_____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______BRR_B__B_R_____RB____R;3,2;3,0 -> 3,1;Red;6,5,B__R____BBR_B____R_____RB____R;3,1;1,1 -> 2,1;Blue;6,5,B__R___BB_R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,2 -> 5,2\nRed;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,1 -> 3,1\nRed;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,2 -> 4,2\nRed;6,5,__B__R_B_R___B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,3 -> 4,3\nRed;6,5,__B__R_B_R___B__R__B__R_B____R;_;0,3 -> 1,3;Blue;6,5,__B__R_B_R___B__R_B___R_B____R;_;5,3 -> 4,3;Red;6,5,__B__R_B_R___B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,4 -> 5,3\nRed;6,5,__B__R_B_R___B__R__B__RR_B____;_;0,4 -> 1,4;Blue;6,5,__B__R_B_R___B__R__B__RRB_____;_;5,4 -> 5,3;Red;6,5,__B__R_B_R___B__R__B__R_B____R;_;0,3 -> 1,3;Blue;6,5,__B__R_B_R___B__R_B___R_B____R;_;5,3 -> 4,3;Red;6,5,__B__R_B_R___B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,1 -> 2,1\nRed;6,5,___B_R_BR____B__R__B__RR_B____;_;2,0 -> 3,0;Blue;6,5,__B__R_BR____B__R__B__RR_B____;_;3,1 -> 2,1;Red;6,5,__B__R_B_R___B__R__B__RR_B____;_;0,4 -> 1,4;Blue;6,5,__B__R_B_R___B__R__B__RRB_____;_;5,4 -> 5,3;Red;6,5,__B__R_B_R___B__R__B__R_B____R;_;0,3 -> 1,3;Blue;6,5,__B__R_B_R___B__R_B___R_B____R;_;5,3 -> 4,3;Red;6,5,__B__R_B_R___B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,2 -> 4,1\nRed;6,5,___B_RB_R_R__B_____B__RR_B____;_;1,1 -> 0,1;Blue;6,5,___B_R_BR_R__B_____B__RR_B____;_;4,2 -> 4,1;Red;6,5,___B_R_BR____B__R__B__RR_B____;_;2,0 -> 3,0;Blue;6,5,__B__R_BR____B__R__B__RR_B____;_;3,1 -> 2,1;Red;6,5,__B__R_B_R___B__R__B__RR_B____;_;0,4 -> 1,4;Blue;6,5,__B__R_B_R___B__R__B__RRB_____;_;5,4 -> 5,3;Red;6,5,__B__R_B_R___B__R__B__R_B____R;_;0,3 -> 1,3;Blue;6,5,__B__R_B_R___B__R_B___R_B____R;_;5,3 -> 4,3;Red;6,5,__B__R_B_R___B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,3 -> 4,3\nRed;6,5,___B_RB_R_R_B______B_RR__B____;_;1,2 -> 0,2;Blue;6,5,___B_RB_R_R__B_____B_RR__B____;3,3;5,3 -> 4,3;Red;6,5,___B_RB_R_R__B_____B__RR_B____;_;1,1 -> 0,1;Blue;6,5,___B_R_BR_R__B_____B__RR_B____;_;4,2 -> 4,1;Red;6,5,___B_R_BR____B__R__B__RR_B____;_;2,0 -> 3,0;Blue;6,5,__B__R_BR____B__R__B__RR_B____;_;3,1 -> 2,1;Red;6,5,__B__R_B_R___B__R__B__RR_B____;_;0,4 -> 1,4;Blue;6,5,__B__R_B_R___B__R__B__RRB_____;_;5,4 -> 5,3;Red;6,5,__B__R_B_R___B__R__B__R_B____R;_;0,3 -> 1,3;Blue;6,5,__B__R_B_R___B__R_B___R_B____R;_;5,3 -> 4,3;Red;6,5,__B__R_B_R___B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,1 -> 1,1\nRed;6,5,___B_RBR__R_B_____B__RR__B____;_;1,3 -> 0,3;Blue;6,5,___B_RBR__R_B______B_RR__B____;_;2,1 -> 1,1;Red;6,5,___B_RB_R_R_B______B_RR__B____;_;1,2 -> 0,2;Blue;6,5,___B_RB_R_R__B_____B_RR__B____;3,3;5,3 -> 4,3;Red;6,5,___B_RB_R_R__B_____B__RR_B____;_;1,1 -> 0,1;Blue;6,5,___B_R_BR_R__B_____B__RR_B____;_;4,2 -> 4,1;Red;6,5,___B_R_BR____B__R__B__RR_B____;_;2,0 -> 3,0;Blue;6,5,__B__R_BR____B__R__B__RR_B____;_;3,1 -> 2,1;Red;6,5,__B__R_B_R___B__R__B__RR_B____;_;0,4 -> 1,4;Blue;6,5,__B__R_B_R___B__R__B__RRB_____;_;5,4 -> 5,3;Red;6,5,__B__R_B_R___B__R__B__R_B____R;_;0,3 -> 1,3;Blue;6,5,__B__R_B_R___B__R_B___R_B____R;_;5,3 -> 4,3;Red;6,5,__B__R_B_R___B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,1 -> 0,1\nBlue;6,5,_B_______BR_B_R__R___B_RB____R;_;3,2 -> 2,2;Red;6,5,_B_______BR_B__R_R___B_RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B_R_B__R_R___B_RB____R;3,3;3,1 -> 3,2;Red;6,5,_B______BRR_B__B_R_____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______BRR_B__B_R_____RB____R;3,2;3,0 -> 3,1;Red;6,5,B__R____BBR_B____R_____RB____R;3,1;1,1 -> 2,1;Blue;6,5,B__R___BB_R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,3 -> 4,3\nBlue;6,5,_B_______BR_B_R__R___BR_B____R;3,3;5,3 -> 4,3;Red;6,5,_B_______BR_B_R__R____BRB____R;_;3,3 -> 4,3;Blue;6,5,_B_______BR_B_R__R___B_RB____R;_;3,2 -> 2,2;Red;6,5,_B_______BR_B__R_R___B_RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B_R_B__R_R___B_RB____R;3,3;3,1 -> 3,2;Red;6,5,_B______BRR_B__B_R_____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______BRR_B__B_R_____RB____R;3,2;3,0 -> 3,1;Red;6,5,B__R____BBR_B____R_____RB____R;3,1;1,1 -> 2,1;Blue;6,5,B__R___BB_R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,1 -> 4,1\nBlue;6,5,_B________BRB_R_R____BR_B____R;_;5,2 -> 4,2;Red;6,5,_B________BRB_R__R___BR_B____R;5,1;3,1 -> 4,1;Blue;6,5,_B_______BR_B_R__R___BR_B____R;3,3;5,3 -> 4,3;Red;6,5,_B_______BR_B_R__R____BRB____R;_;3,3 -> 4,3;Blue;6,5,_B_______BR_B_R__R___B_RB____R;_;3,2 -> 2,2;Red;6,5,_B_______BR_B__R_R___B_RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B_R_B__R_R___B_RB____R;3,3;3,1 -> 3,2;Red;6,5,_B______BRR_B__B_R_____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______BRR_B__B_R_____RB____R;3,2;3,0 -> 3,1;Red;6,5,B__R____BBR_B____R_____RB____R;3,1;1,1 -> 2,1;Blue;6,5,B__R___BB_R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,1 -> 5,1\nRed;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,2 -> 3,2\nRed;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,1 -> 3,0\nRed;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,0 -> 5,1\nRed;6,5,___RR_____B_B__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___RR____B__B__R__B____RB____R;_;5,0 -> 4,0;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,0 -> 4,1\nRed;6,5,___R______R__B_RB_B____RB____R;_;0,2 -> 1,2;Blue;6,5,___R______R_B__RB_B____RB____R;4,2;4,0 -> 4,1;Red;6,5,___RR_____B_B__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___RR____B__B__R__B____RB____R;_;5,0 -> 4,0;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,1 -> 4,2\nRed;6,5,___R_________B_RR__B__BRB____R;_;0,3 -> 1,3;Blue;6,5,___R_________B_RR_B___BRB____R;4,3;4,1 -> 4,2;Red;6,5,___R______R__B_RB_B____RB____R;_;0,2 -> 1,2;Blue;6,5,___R______R_B__RB_B____RB____R;4,2;4,0 -> 4,1;Red;6,5,___RR_____B_B__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___RR____B__B__R__B____RB____R;_;5,0 -> 4,0;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,2 -> 4,3\nRed;6,5,___R_________B_R____B_RRB___BR;_;1,3 -> 2,3;Blue;6,5,___R_________B_R___B__RRB___BR;4,4;4,2 -> 4,3;Red;6,5,___R_________B_RR__B__BRB____R;_;0,3 -> 1,3;Blue;6,5,___R_________B_RR_B___BRB____R;4,3;4,1 -> 4,2;Red;6,5,___R______R__B_RB_B____RB____R;_;0,2 -> 1,2;Blue;6,5,___R______R_B__RB_B____RB____R;4,2;4,0 -> 4,1;Red;6,5,___RR_____B_B__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___RR____B__B__R__B____RB____R;_;5,0 -> 4,0;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,3 -> 4,4\nRed;6,5,___R_________B_R_____B_RB___RR;_;2,3 -> 3,3;Blue;6,5,___R_________B_R____B__RB___RR;4,5;4,3 -> 4,4;Red;6,5,___R_________B_R____B_RRB___BR;_;1,3 -> 2,3;Blue;6,5,___R_________B_R___B__RRB___BR;4,4;4,2 -> 4,3;Red;6,5,___R_________B_RR__B__BRB____R;_;0,3 -> 1,3;Blue;6,5,___R_________B_RR_B___BRB____R;4,3;4,1 -> 4,2;Red;6,5,___R______R__B_RB_B____RB____R;_;0,2 -> 1,2;Blue;6,5,___R______R_B__RB_B____RB____R;4,2;4,0 -> 4,1;Red;6,5,___RR_____B_B__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___RR____B__B__R__B____RB____R;_;5,0 -> 4,0;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,0 -> 2,0\nRed;6,5,__R__________B_R______BRB___RR;_;3,3 -> 4,3;Blue;6,5,__R__________B_R_____B_RB___RR;_;3,0 -> 2,0;Red;6,5,___R_________B_R_____B_RB___RR;_;2,3 -> 3,3;Blue;6,5,___R_________B_R____B__RB___RR;4,5;4,3 -> 4,4;Red;6,5,___R_________B_R____B_RRB___BR;_;1,3 -> 2,3;Blue;6,5,___R_________B_R___B__RRB___BR;4,4;4,2 -> 4,3;Red;6,5,___R_________B_RR__B__BRB____R;_;0,3 -> 1,3;Blue;6,5,___R_________B_RR_B___BRB____R;4,3;4,1 -> 4,2;Red;6,5,___R______R__B_RB_B____RB____R;_;0,2 -> 1,2;Blue;6,5,___R______R_B__RB_B____RB____R;4,2;4,0 -> 4,1;Red;6,5,___RR_____B_B__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___RR____B__B__R__B____RB____R;_;5,0 -> 4,0;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,3 -> 4,3\nRed;6,5,__R___________BR_____BR_B___RR;_;1,2 -> 2,2;Blue;6,5,__R__________B_R_____BR_B___RR;3,3;5,3 -> 4,3;Red;6,5,__R__________B_R______BRB___RR;_;3,3 -> 4,3;Blue;6,5,__R__________B_R_____B_RB___RR;_;3,0 -> 2,0;Red;6,5,___R_________B_R_____B_RB___RR;_;2,3 -> 3,3;Blue;6,5,___R_________B_R____B__RB___RR;4,5;4,3 -> 4,4;Red;6,5,___R_________B_R____B_RRB___BR;_;1,3 -> 2,3;Blue;6,5,___R_________B_R___B__RRB___BR;4,4;4,2 -> 4,3;Red;6,5,___R_________B_RR__B__BRB____R;_;0,3 -> 1,3;Blue;6,5,___R_________B_RR_B___BRB____R;4,3;4,1 -> 4,2;Red;6,5,___R______R__B_RB_B____RB____R;_;0,2 -> 1,2;Blue;6,5,___R______R_B__RB_B____RB____R;4,2;4,0 -> 4,1;Red;6,5,___RR_____B_B__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___RR____B__B__R__B____RB____R;_;5,0 -> 4,0;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,0 -> 1,0\nRed;6,5,_R____________BR_____BR__B__RR;_;0,4 -> 1,4;Blue;6,5,_R____________BR_____BR_B___RR;_;2,0 -> 1,0;Red;6,5,__R___________BR_____BR_B___RR;_;1,2 -> 2,2;Blue;6,5,__R__________B_R_____BR_B___RR;3,3;5,3 -> 4,3;Red;6,5,__R__________B_R______BRB___RR;_;3,3 -> 4,3;Blue;6,5,__R__________B_R_____B_RB___RR;_;3,0 -> 2,0;Red;6,5,___R_________B_R_____B_RB___RR;_;2,3 -> 3,3;Blue;6,5,___R_________B_R____B__RB___RR;4,5;4,3 -> 4,4;Red;6,5,___R_________B_R____B_RRB___BR;_;1,3 -> 2,3;Blue;6,5,___R_________B_R___B__RRB___BR;4,4;4,2 -> 4,3;Red;6,5,___R_________B_RR__B__BRB____R;_;0,3 -> 1,3;Blue;6,5,___R_________B_RR_B___BRB____R;4,3;4,1 -> 4,2;Red;6,5,___R______R__B_RB_B____RB____R;_;0,2 -> 1,2;Blue;6,5,___R______R_B__RB_B____RB____R;4,2;4,0 -> 4,1;Red;6,5,___RR_____B_B__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___RR____B__B__R__B____RB____R;_;5,0 -> 4,0;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,0 -> 0,0\nBlue;6,5,B_R____BB__RB____R_____RB____R;_;3,0 -> 2,0;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,1 -> 2,0\nBlue;6,5,B_B____B__R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B_B____B___RB____R_____RB____R;2,-1;2,1 -> 2,0;Blue;6,5,B_R____BB__RB____R_____RB____R;_;3,0 -> 2,0;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,0 -> 2,1\nBlue;6,5,B______BBR__B____R_____RB____R;_;4,1 -> 3,1;Red;6,5,B______BB_R_B____R_____RB____R;_;2,0 -> 2,1;Blue;6,5,B_B____B__R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B_B____B___RB____R_____RB____R;2,-1;2,1 -> 2,0;Blue;6,5,B_R____BB__RB____R_____RB____R;_;3,0 -> 2,0;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,1 -> 3,1\nBlue;6,5,B______B_BR_B___R______RB____R;_;5,2 -> 4,2;Red;6,5,B______B_BR_B____R_____RB____R;4,1;2,1 -> 3,1;Blue;6,5,B______BBR__B____R_____RB____R;_;4,1 -> 3,1;Red;6,5,B______BB_R_B____R_____RB____R;_;2,0 -> 2,1;Blue;6,5,B_B____B__R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B_B____B___RB____R_____RB____R;2,-1;2,1 -> 2,0;Blue;6,5,B_R____BB__RB____R_____RB____R;_;3,0 -> 2,0;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,1 -> 2,1\nBlue;6,5,B_______BBR_B__R_______RB____R;_;4,2 -> 3,2;Red;6,5,B_______BBR_B___R______RB____R;_;1,1 -> 2,1;Blue;6,5,B______B_BR_B___R______RB____R;_;5,2 -> 4,2;Red;6,5,B______B_BR_B____R_____RB____R;4,1;2,1 -> 3,1;Blue;6,5,B______BBR__B____R_____RB____R;_;4,1 -> 3,1;Red;6,5,B______BB_R_B____R_____RB____R;_;2,0 -> 2,1;Blue;6,5,B_B____B__R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B_B____B___RB____R_____RB____R;2,-1;2,1 -> 2,0;Blue;6,5,B_R____BB__RB____R_____RB____R;_;3,0 -> 2,0;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,1 -> 4,1\nBlue;6,5,B_______B_BRB_R________RB____R;_;3,2 -> 2,2;Red;6,5,B_______B_BRB__R_______RB____R;5,1;3,1 -> 4,1;Blue;6,5,B_______BBR_B__R_______RB____R;_;4,2 -> 3,2;Red;6,5,B_______BBR_B___R______RB____R;_;1,1 -> 2,1;Blue;6,5,B______B_BR_B___R______RB____R;_;5,2 -> 4,2;Red;6,5,B______B_BR_B____R_____RB____R;4,1;2,1 -> 3,1;Blue;6,5,B______BBR__B____R_____RB____R;_;4,1 -> 3,1;Red;6,5,B______BB_R_B____R_____RB____R;_;2,0 -> 2,1;Blue;6,5,B_B____B__R_B____R_____RB____R;_;5,1 -> 4,1;Red;6,5,B_B____B___RB____R_____RB____R;2,-1;2,1 -> 2,0;Blue;6,5,B_R____BB__RB____R_____RB____R;_;3,0 -> 2,0;Red;6,5,B__R___BB__RB____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B__R__BB___RB____R_____RB____R;_;4,0 -> 3,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,1 -> 5,1\nRed;6,5,___B_RB__R__B____RB____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,1 -> 3,0\nRed;6,5,___R_R_B____B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,___R_RB_____B____RB____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_RB__R__B____RB____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,0 -> 2,0\nRed;6,5,__R__R__B___B____RB____RB____R;_;1,1 -> 2,1;Blue;6,5,__R__R_B____B____RB____RB____R;_;3,0 -> 2,0;Red;6,5,___R_R_B____B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,___R_RB_____B____RB____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_RB__R__B____RB____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,0 -> 1,0\nRed;6,5,_R___R___B__B____RB____RB____R;_;2,1 -> 3,1;Blue;6,5,_R___R__B___B____RB____RB____R;_;2,0 -> 1,0;Red;6,5,__R__R__B___B____RB____RB____R;_;1,1 -> 2,1;Blue;6,5,__R__R_B____B____RB____RB____R;_;3,0 -> 2,0;Red;6,5,___R_R_B____B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,___R_RB_____B____RB____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_RB__R__B____RB____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,0 -> 0,0\nRed;6,5,___R______BRB__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___R_____B_RB__R__B____RB____R;_;5,0 -> 5,1;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,1 -> 4,1\nRed;6,5,___R_____BR__B_R__B____RB____R;_;0,2 -> 1,2;Blue;6,5,___R_____BR_B__R__B____RB____R;3,1;5,1 -> 4,1;Red;6,5,___R______BRB__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___R_____B_RB__R__B____RB____R;_;5,0 -> 5,1;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,1 -> 3,1\nRed;6,5,___R____BR___B_R___B___RB____R;_;0,3 -> 1,3;Blue;6,5,___R____BR___B_R__B____RB____R;2,1;4,1 -> 3,1;Red;6,5,___R_____BR__B_R__B____RB____R;_;0,2 -> 1,2;Blue;6,5,___R_____BR_B__R__B____RB____R;3,1;5,1 -> 4,1;Red;6,5,___R______BRB__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___R_____B_RB__R__B____RB____R;_;5,0 -> 5,1;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,1 -> 2,1\nRed;6,5,___R___BR____B_R____B__RB____R;_;1,3 -> 2,3;Blue;6,5,___R___BR____B_R___B___RB____R;1,1;3,1 -> 2,1;Red;6,5,___R____BR___B_R___B___RB____R;_;0,3 -> 1,3;Blue;6,5,___R____BR___B_R__B____RB____R;2,1;4,1 -> 3,1;Red;6,5,___R_____BR__B_R__B____RB____R;_;0,2 -> 1,2;Blue;6,5,___R_____BR_B__R__B____RB____R;3,1;5,1 -> 4,1;Red;6,5,___R______BRB__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___R_____B_RB__R__B____RB____R;_;5,0 -> 5,1;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,2 -> 2,2\nRed;6,5,___R___BR____BR______B_RB____R;_;2,3 -> 3,3;Blue;6,5,___R___BR____BR_____B__RB____R;_;3,2 -> 2,2;Red;6,5,___R___BR____B_R____B__RB____R;_;1,3 -> 2,3;Blue;6,5,___R___BR____B_R___B___RB____R;1,1;3,1 -> 2,1;Red;6,5,___R____BR___B_R___B___RB____R;_;0,3 -> 1,3;Blue;6,5,___R____BR___B_R__B____RB____R;2,1;4,1 -> 3,1;Red;6,5,___R_____BR__B_R__B____RB____R;_;0,2 -> 1,2;Blue;6,5,___R_____BR_B__R__B____RB____R;3,1;5,1 -> 4,1;Red;6,5,___R______BRB__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___R_____B_RB__R__B____RB____R;_;5,0 -> 5,1;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,2 -> 1,2\nRed;6,5,___R____R___BB_____R_B_RB____R;1,3;1,1 -> 1,2;Blue;6,5,___R___BR___BR_______B_RB____R;0,2;2,2 -> 1,2;Red;6,5,___R___BR____BR______B_RB____R;_;2,3 -> 3,3;Blue;6,5,___R___BR____BR_____B__RB____R;_;3,2 -> 2,2;Red;6,5,___R___BR____B_R____B__RB____R;_;1,3 -> 2,3;Blue;6,5,___R___BR____B_R___B___RB____R;1,1;3,1 -> 2,1;Red;6,5,___R____BR___B_R___B___RB____R;_;0,3 -> 1,3;Blue;6,5,___R____BR___B_R__B____RB____R;2,1;4,1 -> 3,1;Red;6,5,___R_____BR__B_R__B____RB____R;_;0,2 -> 1,2;Blue;6,5,___R_____BR_B__R__B____RB____R;3,1;5,1 -> 4,1;Red;6,5,___R______BRB__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___R_____B_RB__R__B____RB____R;_;5,0 -> 5,1;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,1 -> 1,1\nRed;6,5,___R___R____BB_____R_B_R_B___R;_;0,4 -> 1,4;Blue;6,5,___R___R____BB_____R_B_RB____R;_;2,1 -> 1,1;Red;6,5,___R____R___BB_____R_B_RB____R;1,3;1,1 -> 1,2;Blue;6,5,___R___BR___BR_______B_RB____R;0,2;2,2 -> 1,2;Red;6,5,___R___BR____BR______B_RB____R;_;2,3 -> 3,3;Blue;6,5,___R___BR____BR_____B__RB____R;_;3,2 -> 2,2;Red;6,5,___R___BR____B_R____B__RB____R;_;1,3 -> 2,3;Blue;6,5,___R___BR____B_R___B___RB____R;1,1;3,1 -> 2,1;Red;6,5,___R____BR___B_R___B___RB____R;_;0,3 -> 1,3;Blue;6,5,___R____BR___B_R__B____RB____R;2,1;4,1 -> 3,1;Red;6,5,___R_____BR__B_R__B____RB____R;_;0,2 -> 1,2;Blue;6,5,___R_____BR_B__R__B____RB____R;3,1;5,1 -> 4,1;Red;6,5,___R______BRB__R__B____RB____R;_;3,1 -> 4,1;Blue;6,5,___R_____B_RB__R__B____RB____R;_;5,0 -> 5,1;Red;6,5,___R_R___B__B__R__B____RB____R;_;2,1 -> 3,1;Blue;6,5,___R_R__B___B__R__B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,___B_R__BR__B__R__B____RB____R;_;2,0 -> 3,0;Blue;6,5,__B__R__BR__B__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,__B__R__BR__B___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,__B__R_B_R__B___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,__B__R_B_R__B____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,__B__RB__R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,__B__RB___R_B____RB____RB____R;_;1,0 -> 2,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,1 -> 0,1\nBlue;6,5,B___RRBB____B____R_____RB____R;_;5,1 -> 5,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,1 -> 1,1\nBlue;6,5,B__RR__BB___B____R_____RB____R;3,0;5,0 -> 4,0;Red;6,5,B___RR_BB___B____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B___RRBB____B____R_____RB____R;_;5,1 -> 5,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,1 -> 2,1\nBlue;6,5,B_RR____BB__B____R_____RB____R;2,0;4,0 -> 3,0;Red;6,5,B__RR___BB__B____R_____RB____R;3,1;1,1 -> 2,1;Blue;6,5,B__RR__BB___B____R_____RB____R;3,0;5,0 -> 4,0;Red;6,5,B___RR_BB___B____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B___RRBB____B____R_____RB____R;_;5,1 -> 5,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,1 -> 2,0\nBlue;6,5,B_B______R__B__B_R_____RB____R;3,2;3,0 -> 3,1;Red;6,5,B_BR_____B__B____R_____RB____R;2,-1;2,1 -> 2,0;Blue;6,5,B_RR____BB__B____R_____RB____R;2,0;4,0 -> 3,0;Red;6,5,B__RR___BB__B____R_____RB____R;3,1;1,1 -> 2,1;Blue;6,5,B__RR__BB___B____R_____RB____R;3,0;5,0 -> 4,0;Red;6,5,B___RR_BB___B____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B___RRBB____B____R_____RB____R;_;5,1 -> 5,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,0 -> 1,0\nBlue;6,5,_BB_____R___B__B_R_____RB____R;_;3,1 -> 2,1;Red;6,5,_BB______R__B__B_R_____RB____R;_;0,0 -> 1,0;Blue;6,5,B_B______R__B__B_R_____RB____R;3,2;3,0 -> 3,1;Red;6,5,B_BR_____B__B____R_____RB____R;2,-1;2,1 -> 2,0;Blue;6,5,B_RR____BB__B____R_____RB____R;2,0;4,0 -> 3,0;Red;6,5,B__RR___BB__B____R_____RB____R;3,1;1,1 -> 2,1;Blue;6,5,B__RR__BB___B____R_____RB____R;3,0;5,0 -> 4,0;Red;6,5,B___RR_BB___B____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B___RRBB____B____R_____RB____R;_;5,1 -> 5,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,2 -> 4,2\nBlue;6,5,_BB____R____B___BR_____RB____R;_;2,1 -> 1,1;Red;6,5,_BB_____R___B___BR_____RB____R;_;3,2 -> 4,2;Blue;6,5,_BB_____R___B__B_R_____RB____R;_;3,1 -> 2,1;Red;6,5,_BB______R__B__B_R_____RB____R;_;0,0 -> 1,0;Blue;6,5,B_B______R__B__B_R_____RB____R;3,2;3,0 -> 3,1;Red;6,5,B_BR_____B__B____R_____RB____R;2,-1;2,1 -> 2,0;Blue;6,5,B_RR____BB__B____R_____RB____R;2,0;4,0 -> 3,0;Red;6,5,B__RR___BB__B____R_____RB____R;3,1;1,1 -> 2,1;Blue;6,5,B__RR__BB___B____R_____RB____R;3,0;5,0 -> 4,0;Red;6,5,B___RR_BB___B____R_____RB____R;2,1;0,1 -> 1,1;Blue;6,5,B___RRBB____B____R_____RB____R;_;5,1 -> 5,0;Red;6,5,B___R_BB___RB____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,2 -> 5,2\nRed;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,2 -> 4,2\nRed;6,5,B____R__B__RB___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,0 -> 5,1\nRed;6,5,_B______B__RB___RRB____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______B__RB___RRB____RB____R;5,2;5,0 -> 5,1;Red;6,5,B____R__B__RB___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,2 -> 4,2\nRed;6,5,_B_______B_RB__RR_B____RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B__RB__RR_B____RB____R;3,2;5,2 -> 4,2;Red;6,5,_B______B__RB___RRB____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______B__RB___RRB____RB____R;5,2;5,0 -> 5,1;Red;6,5,B____R__B__RB___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,2 -> 3,1\nRed;6,5,_B_B_____R_R_B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,_B_B_____R_RB___R_B____RB____R;3,0;3,2 -> 3,1;Red;6,5,_B_______B_RB__RR_B____RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B__RB__RR_B____RB____R;3,2;5,2 -> 4,2;Red;6,5,_B______B__RB___RRB____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______B__RB___RRB____RB____R;5,2;5,0 -> 5,1;Red;6,5,B____R__B__RB___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,1 -> 3,0\nRed;6,5,_B_R_______RBB__R______RB____R;_;0,3 -> 0,2;Blue;6,5,_B_R_______R_B__R_B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,_B_B_____R_R_B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,_B_B_____R_RB___R_B____RB____R;3,0;3,2 -> 3,1;Red;6,5,_B_______B_RB__RR_B____RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B__RB__RR_B____RB____R;3,2;5,2 -> 4,2;Red;6,5,_B______B__RB___RRB____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______B__RB___RRB____RB____R;5,2;5,0 -> 5,1;Red;6,5,B____R__B__RB___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,4 -> 5,3\nRed;6,5,_B_R_______R_BB_RR_____RB_____;2,2;0,2 -> 1,2;Blue;6,5,_B_R_______RBB__RR_____RB_____;5,2;5,4 -> 5,3;Red;6,5,_B_R_______RBB__R______RB____R;_;0,3 -> 0,2;Blue;6,5,_B_R_______R_B__R_B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,_B_B_____R_R_B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,_B_B_____R_RB___R_B____RB____R;3,0;3,2 -> 3,1;Red;6,5,_B_______B_RB__RR_B____RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B__RB__RR_B____RB____R;3,2;5,2 -> 4,2;Red;6,5,_B______B__RB___RRB____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______B__RB___RRB____RB____R;5,2;5,0 -> 5,1;Red;6,5,B____R__B__RB___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,2 -> 4,2\nRed;6,5,_B_R____B__R_B_RR______RB_____;_;2,2 -> 2,1;Blue;6,5,_B_R_______R_BBRR______RB_____;3,2;5,2 -> 4,2;Red;6,5,_B_R_______R_BB_RR_____RB_____;2,2;0,2 -> 1,2;Blue;6,5,_B_R_______RBB__RR_____RB_____;5,2;5,4 -> 5,3;Red;6,5,_B_R_______RBB__R______RB____R;_;0,3 -> 0,2;Blue;6,5,_B_R_______R_B__R_B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,_B_B_____R_R_B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,_B_B_____R_RB___R_B____RB____R;3,0;3,2 -> 3,1;Red;6,5,_B_______B_RB__RR_B____RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B__RB__RR_B____RB____R;3,2;5,2 -> 4,2;Red;6,5,_B______B__RB___RRB____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______B__RB___RRB____RB____R;5,2;5,0 -> 5,1;Red;6,5,B____R__B__RB___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,0 -> 2,0\nRed;6,5,__R____BB__R_B_RR______RB_____;_;1,0 -> 1,1;Blue;6,5,_BR_____B__R_B_RR______RB_____;_;3,0 -> 2,0;Red;6,5,_B_R____B__R_B_RR______RB_____;_;2,2 -> 2,1;Blue;6,5,_B_R_______R_BBRR______RB_____;3,2;5,2 -> 4,2;Red;6,5,_B_R_______R_BB_RR_____RB_____;2,2;0,2 -> 1,2;Blue;6,5,_B_R_______RBB__RR_____RB_____;5,2;5,4 -> 5,3;Red;6,5,_B_R_______RBB__R______RB____R;_;0,3 -> 0,2;Blue;6,5,_B_R_______R_B__R_B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,_B_B_____R_R_B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,_B_B_____R_RB___R_B____RB____R;3,0;3,2 -> 3,1;Red;6,5,_B_______B_RB__RR_B____RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B__RB__RR_B____RB____R;3,2;5,2 -> 4,2;Red;6,5,_B______B__RB___RRB____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______B__RB___RRB____RB____R;5,2;5,0 -> 5,1;Red;6,5,B____R__B__RB___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,0 -> 1,0\nRed;6,5,_B______B__R_B_RR______RB_____;1,-1;1,1 -> 1,0;Blue;6,5,_R_____BB__R_B_RR______RB_____;_;2,0 -> 1,0;Red;6,5,__R____BB__R_B_RR______RB_____;_;1,0 -> 1,1;Blue;6,5,_BR_____B__R_B_RR______RB_____;_;3,0 -> 2,0;Red;6,5,_B_R____B__R_B_RR______RB_____;_;2,2 -> 2,1;Blue;6,5,_B_R_______R_BBRR______RB_____;3,2;5,2 -> 4,2;Red;6,5,_B_R_______R_BB_RR_____RB_____;2,2;0,2 -> 1,2;Blue;6,5,_B_R_______RBB__RR_____RB_____;5,2;5,4 -> 5,3;Red;6,5,_B_R_______RBB__R______RB____R;_;0,3 -> 0,2;Blue;6,5,_B_R_______R_B__R_B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,_B_B_____R_R_B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,_B_B_____R_RB___R_B____RB____R;3,0;3,2 -> 3,1;Red;6,5,_B_______B_RB__RR_B____RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B__RB__RR_B____RB____R;3,2;5,2 -> 4,2;Red;6,5,_B______B__RB___RRB____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______B__RB___RRB____RB____R;5,2;5,0 -> 5,1;Red;6,5,B____R__B__RB___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,2 -> 3,2\nRed;6,5,_B_______B_R_BRR_______RB_____;_;2,1 -> 3,1;Blue;6,5,_B______B__R_BRR_______RB_____;2,2;4,2 -> 3,2;Red;6,5,_B______B__R_B_RR______RB_____;1,-1;1,1 -> 1,0;Blue;6,5,_R_____BB__R_B_RR______RB_____;_;2,0 -> 1,0;Red;6,5,__R____BB__R_B_RR______RB_____;_;1,0 -> 1,1;Blue;6,5,_BR_____B__R_B_RR______RB_____;_;3,0 -> 2,0;Red;6,5,_B_R____B__R_B_RR______RB_____;_;2,2 -> 2,1;Blue;6,5,_B_R_______R_BBRR______RB_____;3,2;5,2 -> 4,2;Red;6,5,_B_R_______R_BB_RR_____RB_____;2,2;0,2 -> 1,2;Blue;6,5,_B_R_______RBB__RR_____RB_____;5,2;5,4 -> 5,3;Red;6,5,_B_R_______RBB__R______RB____R;_;0,3 -> 0,2;Blue;6,5,_B_R_______R_B__R_B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,_B_B_____R_R_B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,_B_B_____R_RB___R_B____RB____R;3,0;3,2 -> 3,1;Red;6,5,_B_______B_RB__RR_B____RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B__RB__RR_B____RB____R;3,2;5,2 -> 4,2;Red;6,5,_B______B__RB___RRB____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______B__RB___RRB____RB____R;5,2;5,0 -> 5,1;Red;6,5,B____R__B__RB___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,2 -> 1,2\nRed;6,5,_B________BRBR_R_______RB_____;_;3,1 -> 4,1;Blue;6,5,_B_______B_RBR_R_______RB_____;0,2;2,2 -> 1,2;Red;6,5,_B_______B_R_BRR_______RB_____;_;2,1 -> 3,1;Blue;6,5,_B______B__R_BRR_______RB_____;2,2;4,2 -> 3,2;Red;6,5,_B______B__R_B_RR______RB_____;1,-1;1,1 -> 1,0;Blue;6,5,_R_____BB__R_B_RR______RB_____;_;2,0 -> 1,0;Red;6,5,__R____BB__R_B_RR______RB_____;_;1,0 -> 1,1;Blue;6,5,_BR_____B__R_B_RR______RB_____;_;3,0 -> 2,0;Red;6,5,_B_R____B__R_B_RR______RB_____;_;2,2 -> 2,1;Blue;6,5,_B_R_______R_BBRR______RB_____;3,2;5,2 -> 4,2;Red;6,5,_B_R_______R_BB_RR_____RB_____;2,2;0,2 -> 1,2;Blue;6,5,_B_R_______RBB__RR_____RB_____;5,2;5,4 -> 5,3;Red;6,5,_B_R_______RBB__R______RB____R;_;0,3 -> 0,2;Blue;6,5,_B_R_______R_B__R_B____RB____R;3,-1;3,1 -> 3,0;Red;6,5,_B_B_____R_R_B__R_B____RB____R;_;0,2 -> 1,2;Blue;6,5,_B_B_____R_RB___R_B____RB____R;3,0;3,2 -> 3,1;Red;6,5,_B_______B_RB__RR_B____RB____R;_;2,1 -> 3,1;Blue;6,5,_B______B__RB__RR_B____RB____R;3,2;5,2 -> 4,2;Red;6,5,_B______B__RB___RRB____RB____R;_;0,0 -> 1,0;Blue;6,5,B_______B__RB___RRB____RB____R;5,2;5,0 -> 5,1;Red;6,5,B____R__B__RB___R_B____RB____R;_;1,1 -> 2,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,2 -> 0,2\nBlue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,0 -> 0,1\nRed;6,5,_____RBB___RB___R_B____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,2 -> 3,2\nBlue;6,5,_____RBB___RB__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,_____RBB___RB___R_B____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,1 -> 1,1\nRed;6,5,_____R_BB__RB__R__B____RB____R;2,1;0,1 -> 1,1;Blue;6,5,_____RBB___RB__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,_____RBB___RB___R_B____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,1 -> 4,1\nBlue;6,5,_____R_BB_R_B__R__B____RB____R;_;5,1 -> 4,1;Red;6,5,_____R_BB__RB__R__B____RB____R;2,1;0,1 -> 1,1;Blue;6,5,_____RBB___RB__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,_____RBB___RB___R_B____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,2 -> 1,2\nRed;6,5,_____R_BB_R__B_R__B____RB____R;_;0,2 -> 1,2;Blue;6,5,_____R_BB_R_B__R__B____RB____R;_;5,1 -> 4,1;Red;6,5,_____R_BB__RB__R__B____RB____R;2,1;0,1 -> 1,1;Blue;6,5,_____RBB___RB__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,_____RBB___RB___R_B____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,4 -> 5,3\nBlue;6,5,_____R_BB_R__B_R_RB____RB_____;5,2;5,4 -> 5,3;Red;6,5,_____R_BB_R__B_R__B____RB____R;_;0,2 -> 1,2;Blue;6,5,_____R_BB_R_B__R__B____RB____R;_;5,1 -> 4,1;Red;6,5,_____R_BB__RB__R__B____RB____R;2,1;0,1 -> 1,1;Blue;6,5,_____RBB___RB__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,_____RBB___RB___R_B____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,4 -> 0,3\nRed;6,5,_____R_BB_R_BB_R_RB____R______;0,2;0,4 -> 0,3;Blue;6,5,_____R_BB_R__B_R_RB____RB_____;5,2;5,4 -> 5,3;Red;6,5,_____R_BB_R__B_R__B____RB____R;_;0,2 -> 1,2;Blue;6,5,_____R_BB_R_B__R__B____RB____R;_;5,1 -> 4,1;Red;6,5,_____R_BB__RB__R__B____RB____R;2,1;0,1 -> 1,1;Blue;6,5,_____RBB___RB__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,_____RBB___RB___R_B____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,2 -> 4,2\nBlue;6,5,_____R_BB_R_BB_RR_B____R______;_;5,2 -> 4,2;Red;6,5,_____R_BB_R_BB_R_RB____R______;0,2;0,4 -> 0,3;Blue;6,5,_____R_BB_R__B_R_RB____RB_____;5,2;5,4 -> 5,3;Red;6,5,_____R_BB_R__B_R__B____RB____R;_;0,2 -> 1,2;Blue;6,5,_____R_BB_R_B__R__B____RB____R;_;5,1 -> 4,1;Red;6,5,_____R_BB__RB__R__B____RB____R;2,1;0,1 -> 1,1;Blue;6,5,_____RBB___RB__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,_____RBB___RB___R_B____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,2 -> 1,2\nRed;6,5,_____R_BB_R__BBRR_B____R______;2,2;0,2 -> 1,2;Blue;6,5,_____R_BB_R_BB_RR_B____R______;_;5,2 -> 4,2;Red;6,5,_____R_BB_R_BB_R_RB____R______;0,2;0,4 -> 0,3;Blue;6,5,_____R_BB_R__B_R_RB____RB_____;5,2;5,4 -> 5,3;Red;6,5,_____R_BB_R__B_R__B____RB____R;_;0,2 -> 1,2;Blue;6,5,_____R_BB_R_B__R__B____RB____R;_;5,1 -> 4,1;Red;6,5,_____R_BB__RB__R__B____RB____R;2,1;0,1 -> 1,1;Blue;6,5,_____RBB___RB__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,_____RBB___RB___R_B____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,1 -> 3,1\nBlue;6,5,_____R_BBR___BBRR_B____R______;_;4,1 -> 3,1;Red;6,5,_____R_BB_R__BBRR_B____R______;2,2;0,2 -> 1,2;Blue;6,5,_____R_BB_R_BB_RR_B____R______;_;5,2 -> 4,2;Red;6,5,_____R_BB_R_BB_R_RB____R______;0,2;0,4 -> 0,3;Blue;6,5,_____R_BB_R__B_R_RB____RB_____;5,2;5,4 -> 5,3;Red;6,5,_____R_BB_R__B_R__B____RB____R;_;0,2 -> 1,2;Blue;6,5,_____R_BB_R_B__R__B____RB____R;_;5,1 -> 4,1;Red;6,5,_____R_BB__RB__R__B____RB____R;2,1;0,1 -> 1,1;Blue;6,5,_____RBB___RB__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,_____RBB___RB___R_B____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,3 -> 1,3\nRed;6,5,_____R_BBR___BBRR__B___R______;_;0,3 -> 1,3;Blue;6,5,_____R_BBR___BBRR_B____R______;_;4,1 -> 3,1;Red;6,5,_____R_BB_R__BBRR_B____R______;2,2;0,2 -> 1,2;Blue;6,5,_____R_BB_R_BB_RR_B____R______;_;5,2 -> 4,2;Red;6,5,_____R_BB_R_BB_R_RB____R______;0,2;0,4 -> 0,3;Blue;6,5,_____R_BB_R__B_R_RB____RB_____;5,2;5,4 -> 5,3;Red;6,5,_____R_BB_R__B_R__B____RB____R;_;0,2 -> 1,2;Blue;6,5,_____R_BB_R_B__R__B____RB____R;_;5,1 -> 4,1;Red;6,5,_____R_BB__RB__R__B____RB____R;2,1;0,1 -> 1,1;Blue;6,5,_____RBB___RB__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,_____RBB___RB___R_B____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,3 -> 4,3\nBlue;6,5,_____R_BBR___BBRR__B__R_______;_;5,3 -> 4,3;Red;6,5,_____R_BBR___BBRR__B___R______;_;0,3 -> 1,3;Blue;6,5,_____R_BBR___BBRR_B____R______;_;4,1 -> 3,1;Red;6,5,_____R_BB_R__BBRR_B____R______;2,2;0,2 -> 1,2;Blue;6,5,_____R_BB_R_BB_RR_B____R______;_;5,2 -> 4,2;Red;6,5,_____R_BB_R_BB_R_RB____R______;0,2;0,4 -> 0,3;Blue;6,5,_____R_BB_R__B_R_RB____RB_____;5,2;5,4 -> 5,3;Red;6,5,_____R_BB_R__B_R__B____RB____R;_;0,2 -> 1,2;Blue;6,5,_____R_BB_R_B__R__B____RB____R;_;5,1 -> 4,1;Red;6,5,_____R_BB__RB__R__B____RB____R;2,1;0,1 -> 1,1;Blue;6,5,_____RBB___RB__R__B____RB____R;_;4,2 -> 3,2;Red;6,5,_____RBB___RB___R_B____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B___RB___R_B____RB____R;_;5,2 -> 4,2;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,3 -> 2,3\nRed;6,5,BB___RB__R__B____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,1 -> 2,1\nRed;6,5,BB___RB_R________RB____RB____R;_;0,2 -> 0,3;Blue;6,5,BB___RB_R___B____R_____RB____R;_;3,1 -> 2,1;Red;6,5,BB___RB__R__B____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,2 -> 4,2\nRed;6,5,BB___RB_R_______R__B___RB____R;_;0,3 -> 1,3;Blue;6,5,BB___RB_R_______R_B____RB____R;_;5,2 -> 4,2;Red;6,5,BB___RB_R________RB____RB____R;_;0,2 -> 0,3;Blue;6,5,BB___RB_R___B____R_____RB____R;_;3,1 -> 2,1;Red;6,5,BB___RB__R__B____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,4 -> 5,3\nRed;6,5,B____RBBR_______RR_B___RB_____;_;1,0 -> 1,1;Blue;6,5,BB___RB_R_______RR_B___RB_____;5,2;5,4 -> 5,3;Red;6,5,BB___RB_R_______R__B___RB____R;_;0,3 -> 1,3;Blue;6,5,BB___RB_R_______R_B____RB____R;_;5,2 -> 4,2;Red;6,5,BB___RB_R________RB____RB____R;_;0,2 -> 0,3;Blue;6,5,BB___RB_R___B____R_____RB____R;_;3,1 -> 2,1;Red;6,5,BB___RB__R__B____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,2 -> 4,2\nRed;6,5,B____R_BR___B__RR__B___RB_____;_;0,1 -> 0,2;Blue;6,5,B____RBBR______RR__B___RB_____;3,2;5,2 -> 4,2;Red;6,5,B____RBBR_______RR_B___RB_____;_;1,0 -> 1,1;Blue;6,5,BB___RB_R_______RR_B___RB_____;5,2;5,4 -> 5,3;Red;6,5,BB___RB_R_______R__B___RB____R;_;0,3 -> 1,3;Blue;6,5,BB___RB_R_______R_B____RB____R;_;5,2 -> 4,2;Red;6,5,BB___RB_R________RB____RB____R;_;0,2 -> 0,3;Blue;6,5,BB___RB_R___B____R_____RB____R;_;3,1 -> 2,1;Red;6,5,BB___RB__R__B____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,2 -> 3,2\nRed;6,5,B____R_BR___B_RR____B__RB_____;_;1,3 -> 2,3;Blue;6,5,B____R_BR___B_RR___B___RB_____;2,2;4,2 -> 3,2;Red;6,5,B____R_BR___B__RR__B___RB_____;_;0,1 -> 0,2;Blue;6,5,B____RBBR______RR__B___RB_____;3,2;5,2 -> 4,2;Red;6,5,B____RBBR_______RR_B___RB_____;_;1,0 -> 1,1;Blue;6,5,BB___RB_R_______RR_B___RB_____;5,2;5,4 -> 5,3;Red;6,5,BB___RB_R_______R__B___RB____R;_;0,3 -> 1,3;Blue;6,5,BB___RB_R_______R_B____RB____R;_;5,2 -> 4,2;Red;6,5,BB___RB_R________RB____RB____R;_;0,2 -> 0,3;Blue;6,5,BB___RB_R___B____R_____RB____R;_;3,1 -> 2,1;Red;6,5,BB___RB__R__B____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,2 -> 2,2\nRed;6,5,B____R_BR___BRR____B___RB_____;_;2,3 -> 1,3;Blue;6,5,B____R_BR___BRR_____B__RB_____;1,2;3,2 -> 2,2;Red;6,5,B____R_BR___B_RR____B__RB_____;_;1,3 -> 2,3;Blue;6,5,B____R_BR___B_RR___B___RB_____;2,2;4,2 -> 3,2;Red;6,5,B____R_BR___B__RR__B___RB_____;_;0,1 -> 0,2;Blue;6,5,B____RBBR______RR__B___RB_____;3,2;5,2 -> 4,2;Red;6,5,B____RBBR_______RR_B___RB_____;_;1,0 -> 1,1;Blue;6,5,BB___RB_R_______RR_B___RB_____;5,2;5,4 -> 5,3;Red;6,5,BB___RB_R_______R__B___RB____R;_;0,3 -> 1,3;Blue;6,5,BB___RB_R_______R_B____RB____R;_;5,2 -> 4,2;Red;6,5,BB___RB_R________RB____RB____R;_;0,2 -> 0,3;Blue;6,5,BB___RB_R___B____R_____RB____R;_;3,1 -> 2,1;Red;6,5,BB___RB__R__B____R_____RB____R;0,1;0,3 -> 0,2;Blue;6,5,BB___R___R__B____RB____RB____R;_;4,1 -> 3,1;Red;6,5,BB___R____R_B____RB____RB____R;_;0,1 -> 0,0;Blue;6,5,_B___RB___R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,_B___RB____RB____RB____RB____R;_;0,0 -> 1,0;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,2 -> 0,2\nBlue;6,5,B____R_B__R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,0 -> 0,1\nBlue;6,5,_____RBB____B___RRB____RB____R;_;4,1 -> 4,2;Red;6,5,_____RBB__R_B____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B__R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,1 -> 1,1\nBlue;6,5,_____R_BB__RB___RRB_____B____R;5,1;5,3 -> 5,2;Red;6,5,_____R_BB___B___RRB____RB____R;2,1;0,1 -> 1,1;Blue;6,5,_____RBB____B___RRB____RB____R;_;4,1 -> 4,2;Red;6,5,_____RBB__R_B____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B__R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,1 -> 2,1\nBlue;6,5,_____R__BB_RB__RR_B_____B____R;3,2;5,2 -> 4,2;Red;6,5,_____R__BB_RB___RRB_____B____R;3,1;1,1 -> 2,1;Blue;6,5,_____R_BB__RB___RRB_____B____R;5,1;5,3 -> 5,2;Red;6,5,_____R_BB___B___RRB____RB____R;2,1;0,1 -> 1,1;Blue;6,5,_____RBB____B___RRB____RB____R;_;4,1 -> 4,2;Red;6,5,_____RBB__R_B____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B__R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,1 -> 3,1\nBlue;6,5,_____R___BB_B__RR_B_____B____R;5,-1;5,1 -> 5,0;Red;6,5,_____R___BBRB__RR_B_____B____R;4,1;2,1 -> 3,1;Blue;6,5,_____R__BB_RB__RR_B_____B____R;3,2;5,2 -> 4,2;Red;6,5,_____R__BB_RB___RRB_____B____R;3,1;1,1 -> 2,1;Blue;6,5,_____R_BB__RB___RRB_____B____R;5,1;5,3 -> 5,2;Red;6,5,_____R_BB___B___RRB____RB____R;2,1;0,1 -> 1,1;Blue;6,5,_____RBB____B___RRB____RB____R;_;4,1 -> 4,2;Red;6,5,_____RBB__R_B____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B____R_B__R_B____RB____RB____R;_;5,1 -> 4,1;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,1 -> 4,1\nBlue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,1 -> 2,1\nBlue;6,5,_B_R____BR__B____RB_____B____R;_;4,1 -> 3,1;Red;6,5,_B_R____B_R_B____RB_____B____R;_;1,1 -> 2,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,0 -> 2,0\nBlue;6,5,__B_____BR__B__R_RB_____B____R;3,2;3,0 -> 3,1;Red;6,5,__BR____BR__B____RB_____B____R;_;1,0 -> 2,0;Blue;6,5,_B_R____BR__B____RB_____B____R;_;4,1 -> 3,1;Red;6,5,_B_R____B_R_B____RB_____B____R;_;1,1 -> 2,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,1 -> 3,1\nBlue;6,5,__BB_____RR_B____RB_____B____R;3,0;3,2 -> 3,1;Red;6,5,__B______BR_B__R_RB_____B____R;4,1;2,1 -> 3,1;Blue;6,5,__B_____BR__B__R_RB_____B____R;3,2;3,0 -> 3,1;Red;6,5,__BR____BR__B____RB_____B____R;_;1,0 -> 2,0;Blue;6,5,_B_R____BR__B____RB_____B____R;_;4,1 -> 3,1;Red;6,5,_B_R____B_R_B____RB_____B____R;_;1,1 -> 2,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,0 -> 3,0\nBlue;6,5,___BB____RR_B___R_B_____B____R;_;5,2 -> 4,2;Red;6,5,___BB____RR_B____RB_____B____R;4,0;2,0 -> 3,0;Blue;6,5,__BB_____RR_B____RB_____B____R;3,0;3,2 -> 3,1;Red;6,5,__B______BR_B__R_RB_____B____R;4,1;2,1 -> 3,1;Blue;6,5,__B_____BR__B__R_RB_____B____R;3,2;3,0 -> 3,1;Red;6,5,__BR____BR__B____RB_____B____R;_;1,0 -> 2,0;Blue;6,5,_B_R____BR__B____RB_____B____R;_;4,1 -> 3,1;Red;6,5,_B_R____B_R_B____RB_____B____R;_;1,1 -> 2,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,0 -> 5,0\nRed;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,1 -> 4,1\nRed;6,5,_B_R__BB__R______RB_____B____R;_;0,2 -> 0,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,0 -> 2,0\nRed;6,5,_BR____BB_R______RB_____B____R;2,1;0,1 -> 1,1;Blue;6,5,_BR___BB__R______RB_____B____R;_;3,0 -> 2,0;Red;6,5,_B_R__BB__R______RB_____B____R;_;0,2 -> 0,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,0 -> 2,1\nRed;6,5,_______BR_R__BB__RB_____B____R;1,2;1,0 -> 1,1;Blue;6,5,_B_____BR_R___B__RB_____B____R;2,2;2,0 -> 2,1;Red;6,5,_BR____BB_R______RB_____B____R;2,1;0,1 -> 1,1;Blue;6,5,_BR___BB__R______RB_____B____R;_;3,0 -> 2,0;Red;6,5,_B_R__BB__R______RB_____B____R;_;0,2 -> 0,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,1 -> 4,2\nRed;6,5,__R____BB____B__RRB_____B____R;2,0;2,2 -> 2,1;Blue;6,5,_______BR____BB_RRB_____B____R;_;4,1 -> 4,2;Red;6,5,_______BR_R__BB__RB_____B____R;1,2;1,0 -> 1,1;Blue;6,5,_B_____BR_R___B__RB_____B____R;2,2;2,0 -> 2,1;Red;6,5,_BR____BB_R______RB_____B____R;2,1;0,1 -> 1,1;Blue;6,5,_BR___BB__R______RB_____B____R;_;3,0 -> 2,0;Red;6,5,_B_R__BB__R______RB_____B____R;_;0,2 -> 0,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n5,2 -> 4,2\nRed;6,5,__B____B_____B_RR_B_____B____R;2,-1;2,1 -> 2,0;Blue;6,5,__R____BB____B_RR_B_____B____R;3,2;5,2 -> 4,2;Red;6,5,__R____BB____B__RRB_____B____R;2,0;2,2 -> 2,1;Blue;6,5,_______BR____BB_RRB_____B____R;_;4,1 -> 4,2;Red;6,5,_______BR_R__BB__RB_____B____R;1,2;1,0 -> 1,1;Blue;6,5,_B_____BR_R___B__RB_____B____R;2,2;2,0 -> 2,1;Red;6,5,_BR____BB_R______RB_____B____R;2,1;0,1 -> 1,1;Blue;6,5,_BR___BB__R______RB_____B____R;_;3,0 -> 2,0;Red;6,5,_B_R__BB__R______RB_____B____R;_;0,2 -> 0,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,2 -> 3,2\nRed;6,5,___B___B_____BRR__B_____B____R;_;2,0 -> 3,0;Blue;6,5,__B____B_____BRR__B_____B____R;2,2;4,2 -> 3,2;Red;6,5,__B____B_____B_RR_B_____B____R;2,-1;2,1 -> 2,0;Blue;6,5,__R____BB____B_RR_B_____B____R;3,2;5,2 -> 4,2;Red;6,5,__R____BB____B__RRB_____B____R;2,0;2,2 -> 2,1;Blue;6,5,_______BR____BB_RRB_____B____R;_;4,1 -> 4,2;Red;6,5,_______BR_R__BB__RB_____B____R;1,2;1,0 -> 1,1;Blue;6,5,_B_____BR_R___B__RB_____B____R;2,2;2,0 -> 2,1;Red;6,5,_BR____BB_R______RB_____B____R;2,1;0,1 -> 1,1;Blue;6,5,_BR___BB__R______RB_____B____R;_;3,0 -> 2,0;Red;6,5,_B_R__BB__R______RB_____B____R;_;0,2 -> 0,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,2 -> 1,2\nRed;6,5,___B________BB_R__BR____B____R;1,3;1,1 -> 1,2;Blue;6,5,___B___B____BR_R__B_____B____R;0,2;2,2 -> 1,2;Red;6,5,___B___B_____BRR__B_____B____R;_;2,0 -> 3,0;Blue;6,5,__B____B_____BRR__B_____B____R;2,2;4,2 -> 3,2;Red;6,5,__B____B_____B_RR_B_____B____R;2,-1;2,1 -> 2,0;Blue;6,5,__R____BB____B_RR_B_____B____R;3,2;5,2 -> 4,2;Red;6,5,__R____BB____B__RRB_____B____R;2,0;2,2 -> 2,1;Blue;6,5,_______BR____BB_RRB_____B____R;_;4,1 -> 4,2;Red;6,5,_______BR_R__BB__RB_____B____R;1,2;1,0 -> 1,1;Blue;6,5,_B_____BR_R___B__RB_____B____R;2,2;2,0 -> 2,1;Red;6,5,_BR____BB_R______RB_____B____R;2,1;0,1 -> 1,1;Blue;6,5,_BR___BB__R______RB_____B____R;_;3,0 -> 2,0;Red;6,5,_B_R__BB__R______RB_____B____R;_;0,2 -> 0,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,2 -> 3,1\nRed;6,5,___B_____R__BB_____BR___B____R;2,3;0,3 -> 1,3;Blue;6,5,___B_____R__BB____BR____B____R;_;3,2 -> 3,1;Red;6,5,___B________BB_R__BR____B____R;1,3;1,1 -> 1,2;Blue;6,5,___B___B____BR_R__B_____B____R;0,2;2,2 -> 1,2;Red;6,5,___B___B_____BRR__B_____B____R;_;2,0 -> 3,0;Blue;6,5,__B____B_____BRR__B_____B____R;2,2;4,2 -> 3,2;Red;6,5,__B____B_____B_RR_B_____B____R;2,-1;2,1 -> 2,0;Blue;6,5,__R____BB____B_RR_B_____B____R;3,2;5,2 -> 4,2;Red;6,5,__R____BB____B__RRB_____B____R;2,0;2,2 -> 2,1;Blue;6,5,_______BR____BB_RRB_____B____R;_;4,1 -> 4,2;Red;6,5,_______BR_R__BB__RB_____B____R;1,2;1,0 -> 1,1;Blue;6,5,_B_____BR_R___B__RB_____B____R;2,2;2,0 -> 2,1;Red;6,5,_BR____BB_R______RB_____B____R;2,1;0,1 -> 1,1;Blue;6,5,_BR___BB__R______RB_____B____R;_;3,0 -> 2,0;Red;6,5,_B_R__BB__R______RB_____B____R;_;0,2 -> 0,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,1 -> 3,0\nRed;6,5,___R_________BB____BR___B____R;2,2;0,2 -> 1,2;Blue;6,5,___R________BB_____BR___B____R;3,-1;3,1 -> 3,0;Red;6,5,___B_____R__BB_____BR___B____R;2,3;0,3 -> 1,3;Blue;6,5,___B_____R__BB____BR____B____R;_;3,2 -> 3,1;Red;6,5,___B________BB_R__BR____B____R;1,3;1,1 -> 1,2;Blue;6,5,___B___B____BR_R__B_____B____R;0,2;2,2 -> 1,2;Red;6,5,___B___B_____BRR__B_____B____R;_;2,0 -> 3,0;Blue;6,5,__B____B_____BRR__B_____B____R;2,2;4,2 -> 3,2;Red;6,5,__B____B_____B_RR_B_____B____R;2,-1;2,1 -> 2,0;Blue;6,5,__R____BB____B_RR_B_____B____R;3,2;5,2 -> 4,2;Red;6,5,__R____BB____B__RRB_____B____R;2,0;2,2 -> 2,1;Blue;6,5,_______BR____BB_RRB_____B____R;_;4,1 -> 4,2;Red;6,5,_______BR_R__BB__RB_____B____R;1,2;1,0 -> 1,1;Blue;6,5,_B_____BR_R___B__RB_____B____R;2,2;2,0 -> 2,1;Red;6,5,_BR____BB_R______RB_____B____R;2,1;0,1 -> 1,1;Blue;6,5,_BR___BB__R______RB_____B____R;_;3,0 -> 2,0;Red;6,5,_B_R__BB__R______RB_____B____R;_;0,2 -> 0,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,0 -> 2,0\nRed;6,5,__R____B_____BB_____R___B____R;1,1;1,3 -> 1,2;Blue;6,5,__R__________BB____BR___B____R;_;3,0 -> 2,0;Red;6,5,___R_________BB____BR___B____R;2,2;0,2 -> 1,2;Blue;6,5,___R________BB_____BR___B____R;3,-1;3,1 -> 3,0;Red;6,5,___B_____R__BB_____BR___B____R;2,3;0,3 -> 1,3;Blue;6,5,___B_____R__BB____BR____B____R;_;3,2 -> 3,1;Red;6,5,___B________BB_R__BR____B____R;1,3;1,1 -> 1,2;Blue;6,5,___B___B____BR_R__B_____B____R;0,2;2,2 -> 1,2;Red;6,5,___B___B_____BRR__B_____B____R;_;2,0 -> 3,0;Blue;6,5,__B____B_____BRR__B_____B____R;2,2;4,2 -> 3,2;Red;6,5,__B____B_____B_RR_B_____B____R;2,-1;2,1 -> 2,0;Blue;6,5,__R____BB____B_RR_B_____B____R;3,2;5,2 -> 4,2;Red;6,5,__R____BB____B__RRB_____B____R;2,0;2,2 -> 2,1;Blue;6,5,_______BR____BB_RRB_____B____R;_;4,1 -> 4,2;Red;6,5,_______BR_R__BB__RB_____B____R;1,2;1,0 -> 1,1;Blue;6,5,_B_____BR_R___B__RB_____B____R;2,2;2,0 -> 2,1;Red;6,5,_BR____BB_R______RB_____B____R;2,1;0,1 -> 1,1;Blue;6,5,_BR___BB__R______RB_____B____R;_;3,0 -> 2,0;Red;6,5,_B_R__BB__R______RB_____B____R;_;0,2 -> 0,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,3 -> 1,3\nRed;6,5,__R____B_____BB____R_____B___R;_;0,4 -> 1,4;Blue;6,5,__R____B_____BB____R____B____R;_;2,3 -> 1,3;Red;6,5,__R____B_____BB_____R___B____R;1,1;1,3 -> 1,2;Blue;6,5,__R__________BB____BR___B____R;_;3,0 -> 2,0;Red;6,5,___R_________BB____BR___B____R;2,2;0,2 -> 1,2;Blue;6,5,___R________BB_____BR___B____R;3,-1;3,1 -> 3,0;Red;6,5,___B_____R__BB_____BR___B____R;2,3;0,3 -> 1,3;Blue;6,5,___B_____R__BB____BR____B____R;_;3,2 -> 3,1;Red;6,5,___B________BB_R__BR____B____R;1,3;1,1 -> 1,2;Blue;6,5,___B___B____BR_R__B_____B____R;0,2;2,2 -> 1,2;Red;6,5,___B___B_____BRR__B_____B____R;_;2,0 -> 3,0;Blue;6,5,__B____B_____BRR__B_____B____R;2,2;4,2 -> 3,2;Red;6,5,__B____B_____B_RR_B_____B____R;2,-1;2,1 -> 2,0;Blue;6,5,__R____BB____B_RR_B_____B____R;3,2;5,2 -> 4,2;Red;6,5,__R____BB____B__RRB_____B____R;2,0;2,2 -> 2,1;Blue;6,5,_______BR____BB_RRB_____B____R;_;4,1 -> 4,2;Red;6,5,_______BR_R__BB__RB_____B____R;1,2;1,0 -> 1,1;Blue;6,5,_B_____BR_R___B__RB_____B____R;2,2;2,0 -> 2,1;Red;6,5,_BR____BB_R______RB_____B____R;2,1;0,1 -> 1,1;Blue;6,5,_BR___BB__R______RB_____B____R;_;3,0 -> 2,0;Red;6,5,_B_R__BB__R______RB_____B____R;_;0,2 -> 0,1;Blue;6,5,_B_R___B__R_B____RB_____B____R;_;5,1 -> 4,1;Red;6,5,_B_R___B___RB____RB_____B____R;_;0,1 -> 1,1;Blue;6,5,_B_R__B____RB____RB_____B____R;_;4,0 -> 3,0;Red;6,5,_B__R_B____RB____RB_____B____R;_;1,1 -> 1,0;Blue;6,5,____R_BB___RB____RB_____B____R;5,5;5,3 -> 5,4;Red;6,5,____R_BB___RB____RB____RB____R;_;0,0 -> 0,1;Blue;6,5,B___R__B___RB____RB____RB____R;_;5,0 -> 4,0;Red;6,5,B____R_B___RB____RB____RB____R;_;0,1 -> 1,1;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,3 -> 0,3\nBlue;6,5,_B___RB____R_B___RB____RB__R__;_;4,4 -> 3,4;Red;6,5,_B___RB____R_B___RB____RB___R_;_;0,0 -> 1,0;Blue;6,5,B____RB____R_B___RB____RB___R_;_;5,4 -> 4,4;Red;6,5,B____RB____R_B___RB____RB____R;_;0,2 -> 1,2;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,3 -> 1,3\nBlue;6,5,_B__R_B____R_B___R_B___RB__R__;_;5,0 -> 4,0;Red;6,5,_B___RB____R_B___R_B___RB__R__;_;0,3 -> 1,3;Blue;6,5,_B___RB____R_B___RB____RB__R__;_;4,4 -> 3,4;Red;6,5,_B___RB____R_B___RB____RB___R_;_;0,0 -> 1,0;Blue;6,5,B____RB____R_B___RB____RB___R_;_;5,4 -> 4,4;Red;6,5,B____RB____R_B___RB____RB____R;_;0,2 -> 1,2;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,3 -> 2,3\nBlue;6,5,_B_R__B____R_B___R__B__RB__R__;_;4,0 -> 3,0;Red;6,5,_B__R_B____R_B___R__B__RB__R__;_;1,3 -> 2,3;Blue;6,5,_B__R_B____R_B___R_B___RB__R__;_;5,0 -> 4,0;Red;6,5,_B___RB____R_B___R_B___RB__R__;_;0,3 -> 1,3;Blue;6,5,_B___RB____R_B___RB____RB__R__;_;4,4 -> 3,4;Red;6,5,_B___RB____R_B___RB____RB___R_;_;0,0 -> 1,0;Blue;6,5,B____RB____R_B___RB____RB___R_;_;5,4 -> 4,4;Red;6,5,B____RB____R_B___RB____RB____R;_;0,2 -> 1,2;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,3 -> 3,3\nBlue;6,5,_B_R__B____R_B___R___B_RB_R___;_;3,4 -> 2,4;Red;6,5,_B_R__B____R_B___R___B_RB__R__;_;2,3 -> 3,3;Blue;6,5,_B_R__B____R_B___R__B__RB__R__;_;4,0 -> 3,0;Red;6,5,_B__R_B____R_B___R__B__RB__R__;_;1,3 -> 2,3;Blue;6,5,_B__R_B____R_B___R_B___RB__R__;_;5,0 -> 4,0;Red;6,5,_B___RB____R_B___R_B___RB__R__;_;0,3 -> 1,3;Blue;6,5,_B___RB____R_B___RB____RB__R__;_;4,4 -> 3,4;Red;6,5,_B___RB____R_B___RB____RB___R_;_;0,0 -> 1,0;Blue;6,5,B____RB____R_B___RB____RB___R_;_;5,4 -> 4,4;Red;6,5,B____RB____R_B___RB____RB____R;_;0,2 -> 1,2;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,3 -> 4,3\nBlue;6,5,_B_R__B____R_B___R___BR_B_R___;3,3;5,3 -> 4,3;Red;6,5,_B_R__B____R_B___R____BRB_R___;_;3,3 -> 4,3;Blue;6,5,_B_R__B____R_B___R___B_RB_R___;_;3,4 -> 2,4;Red;6,5,_B_R__B____R_B___R___B_RB__R__;_;2,3 -> 3,3;Blue;6,5,_B_R__B____R_B___R__B__RB__R__;_;4,0 -> 3,0;Red;6,5,_B__R_B____R_B___R__B__RB__R__;_;1,3 -> 2,3;Blue;6,5,_B__R_B____R_B___R_B___RB__R__;_;5,0 -> 4,0;Red;6,5,_B___RB____R_B___R_B___RB__R__;_;0,3 -> 1,3;Blue;6,5,_B___RB____R_B___RB____RB__R__;_;4,4 -> 3,4;Red;6,5,_B___RB____R_B___RB____RB___R_;_;0,0 -> 1,0;Blue;6,5,B____RB____R_B___RB____RB___R_;_;5,4 -> 4,4;Red;6,5,B____RB____R_B___RB____RB____R;_;0,2 -> 1,2;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,0 -> 2,0\nBlue;6,5,__BR__B____R_B___R___BR_BR____;_;2,4 -> 1,4;Red;6,5,__BR__B____R_B___R___BR_B_R___;_;1,0 -> 2,0;Blue;6,5,_B_R__B____R_B___R___BR_B_R___;3,3;5,3 -> 4,3;Red;6,5,_B_R__B____R_B___R____BRB_R___;_;3,3 -> 4,3;Blue;6,5,_B_R__B____R_B___R___B_RB_R___;_;3,4 -> 2,4;Red;6,5,_B_R__B____R_B___R___B_RB__R__;_;2,3 -> 3,3;Blue;6,5,_B_R__B____R_B___R__B__RB__R__;_;4,0 -> 3,0;Red;6,5,_B__R_B____R_B___R__B__RB__R__;_;1,3 -> 2,3;Blue;6,5,_B__R_B____R_B___R_B___RB__R__;_;5,0 -> 4,0;Red;6,5,_B___RB____R_B___R_B___RB__R__;_;0,3 -> 1,3;Blue;6,5,_B___RB____R_B___RB____RB__R__;_;4,4 -> 3,4;Red;6,5,_B___RB____R_B___RB____RB___R_;_;0,0 -> 1,0;Blue;6,5,B____RB____R_B___RB____RB___R_;_;5,4 -> 4,4;Red;6,5,B____RB____R_B___RB____RB____R;_;0,2 -> 1,2;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n0,4 -> 1,4\nBlue;6,5,__BR__B____R_B__R____BR__BR___;_;5,2 -> 4,2;Red;6,5,__BR__B____R_B___R___BR__BR___;2,4;0,4 -> 1,4;Blue;6,5,__BR__B____R_B___R___BR_BR____;_;2,4 -> 1,4;Red;6,5,__BR__B____R_B___R___BR_B_R___;_;1,0 -> 2,0;Blue;6,5,_B_R__B____R_B___R___BR_B_R___;3,3;5,3 -> 4,3;Red;6,5,_B_R__B____R_B___R____BRB_R___;_;3,3 -> 4,3;Blue;6,5,_B_R__B____R_B___R___B_RB_R___;_;3,4 -> 2,4;Red;6,5,_B_R__B____R_B___R___B_RB__R__;_;2,3 -> 3,3;Blue;6,5,_B_R__B____R_B___R__B__RB__R__;_;4,0 -> 3,0;Red;6,5,_B__R_B____R_B___R__B__RB__R__;_;1,3 -> 2,3;Blue;6,5,_B__R_B____R_B___R_B___RB__R__;_;5,0 -> 4,0;Red;6,5,_B___RB____R_B___R_B___RB__R__;_;0,3 -> 1,3;Blue;6,5,_B___RB____R_B___RB____RB__R__;_;4,4 -> 3,4;Red;6,5,_B___RB____R_B___RB____RB___R_;_;0,0 -> 1,0;Blue;6,5,B____RB____R_B___RB____RB___R_;_;5,4 -> 4,4;Red;6,5,B____RB____R_B___RB____RB____R;_;0,2 -> 1,2;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n1,4 -> 2,4\nBlue;6,5,__BR__B______B__RR___BR___BR__;_;5,1 -> 5,2;Red;6,5,__BR__B____R_B__R____BR___BR__;3,4;1,4 -> 2,4;Blue;6,5,__BR__B____R_B__R____BR__BR___;_;5,2 -> 4,2;Red;6,5,__BR__B____R_B___R___BR__BR___;2,4;0,4 -> 1,4;Blue;6,5,__BR__B____R_B___R___BR_BR____;_;2,4 -> 1,4;Red;6,5,__BR__B____R_B___R___BR_B_R___;_;1,0 -> 2,0;Blue;6,5,_B_R__B____R_B___R___BR_B_R___;3,3;5,3 -> 4,3;Red;6,5,_B_R__B____R_B___R____BRB_R___;_;3,3 -> 4,3;Blue;6,5,_B_R__B____R_B___R___B_RB_R___;_;3,4 -> 2,4;Red;6,5,_B_R__B____R_B___R___B_RB__R__;_;2,3 -> 3,3;Blue;6,5,_B_R__B____R_B___R__B__RB__R__;_;4,0 -> 3,0;Red;6,5,_B__R_B____R_B___R__B__RB__R__;_;1,3 -> 2,3;Blue;6,5,_B__R_B____R_B___R_B___RB__R__;_;5,0 -> 4,0;Red;6,5,_B___RB____R_B___R_B___RB__R__;_;0,3 -> 1,3;Blue;6,5,_B___RB____R_B___RB____RB__R__;_;4,4 -> 3,4;Red;6,5,_B___RB____R_B___RB____RB___R_;_;0,0 -> 1,0;Blue;6,5,B____RB____R_B___RB____RB___R_;_;5,4 -> 4,4;Red;6,5,B____RB____R_B___RB____RB____R;_;0,2 -> 1,2;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,0 -> 3,0\nBlue;6,5,___BR_B___R__B__RR___B____BR__;4,1;4,3 -> 4,2;Red;6,5,___BR_B______B__RR___BR___BR__;4,0;2,0 -> 3,0;Blue;6,5,__BR__B______B__RR___BR___BR__;_;5,1 -> 5,2;Red;6,5,__BR__B____R_B__R____BR___BR__;3,4;1,4 -> 2,4;Blue;6,5,__BR__B____R_B__R____BR__BR___;_;5,2 -> 4,2;Red;6,5,__BR__B____R_B___R___BR__BR___;2,4;0,4 -> 1,4;Blue;6,5,__BR__B____R_B___R___BR_BR____;_;2,4 -> 1,4;Red;6,5,__BR__B____R_B___R___BR_B_R___;_;1,0 -> 2,0;Blue;6,5,_B_R__B____R_B___R___BR_B_R___;3,3;5,3 -> 4,3;Red;6,5,_B_R__B____R_B___R____BRB_R___;_;3,3 -> 4,3;Blue;6,5,_B_R__B____R_B___R___B_RB_R___;_;3,4 -> 2,4;Red;6,5,_B_R__B____R_B___R___B_RB__R__;_;2,3 -> 3,3;Blue;6,5,_B_R__B____R_B___R__B__RB__R__;_;4,0 -> 3,0;Red;6,5,_B__R_B____R_B___R__B__RB__R__;_;1,3 -> 2,3;Blue;6,5,_B__R_B____R_B___R_B___RB__R__;_;5,0 -> 4,0;Red;6,5,_B___RB____R_B___R_B___RB__R__;_;0,3 -> 1,3;Blue;6,5,_B___RB____R_B___RB____RB__R__;_;4,4 -> 3,4;Red;6,5,_B___RB____R_B___RB____RB___R_;_;0,0 -> 1,0;Blue;6,5,B____RB____R_B___RB____RB___R_;_;5,4 -> 4,4;Red;6,5,B____RB____R_B___RB____RB____R;_;0,2 -> 1,2;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n2,4 -> 3,4\nBlue;6,5,___BR_B___R__B___R___BR____BR_;_;4,2 -> 4,3;Red;6,5,___BR_B___R__B__RR___B_____BR_;4,4;2,4 -> 3,4;Blue;6,5,___BR_B___R__B__RR___B____BR__;4,1;4,3 -> 4,2;Red;6,5,___BR_B______B__RR___BR___BR__;4,0;2,0 -> 3,0;Blue;6,5,__BR__B______B__RR___BR___BR__;_;5,1 -> 5,2;Red;6,5,__BR__B____R_B__R____BR___BR__;3,4;1,4 -> 2,4;Blue;6,5,__BR__B____R_B__R____BR__BR___;_;5,2 -> 4,2;Red;6,5,__BR__B____R_B___R___BR__BR___;2,4;0,4 -> 1,4;Blue;6,5,__BR__B____R_B___R___BR_BR____;_;2,4 -> 1,4;Red;6,5,__BR__B____R_B___R___BR_B_R___;_;1,0 -> 2,0;Blue;6,5,_B_R__B____R_B___R___BR_B_R___;3,3;5,3 -> 4,3;Red;6,5,_B_R__B____R_B___R____BRB_R___;_;3,3 -> 4,3;Blue;6,5,_B_R__B____R_B___R___B_RB_R___;_;3,4 -> 2,4;Red;6,5,_B_R__B____R_B___R___B_RB__R__;_;2,3 -> 3,3;Blue;6,5,_B_R__B____R_B___R__B__RB__R__;_;4,0 -> 3,0;Red;6,5,_B__R_B____R_B___R__B__RB__R__;_;1,3 -> 2,3;Blue;6,5,_B__R_B____R_B___R_B___RB__R__;_;5,0 -> 4,0;Red;6,5,_B___RB____R_B___R_B___RB__R__;_;0,3 -> 1,3;Blue;6,5,_B___RB____R_B___RB____RB__R__;_;4,4 -> 3,4;Red;6,5,_B___RB____R_B___RB____RB___R_;_;0,0 -> 1,0;Blue;6,5,B____RB____R_B___RB____RB___R_;_;5,4 -> 4,4;Red;6,5,B____RB____R_B___RB____RB____R;_;0,2 -> 1,2;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n3,3 -> 4,3\nBlue;6,5,___BR_B___R__B__R_____BR___BR_;_;5,2 -> 4,2;Red;6,5,___BR_B___R__B___R____BR___BR_;5,3;3,3 -> 4,3;Blue;6,5,___BR_B___R__B___R___BR____BR_;_;4,2 -> 4,3;Red;6,5,___BR_B___R__B__RR___B_____BR_;4,4;2,4 -> 3,4;Blue;6,5,___BR_B___R__B__RR___B____BR__;4,1;4,3 -> 4,2;Red;6,5,___BR_B______B__RR___BR___BR__;4,0;2,0 -> 3,0;Blue;6,5,__BR__B______B__RR___BR___BR__;_;5,1 -> 5,2;Red;6,5,__BR__B____R_B__R____BR___BR__;3,4;1,4 -> 2,4;Blue;6,5,__BR__B____R_B__R____BR__BR___;_;5,2 -> 4,2;Red;6,5,__BR__B____R_B___R___BR__BR___;2,4;0,4 -> 1,4;Blue;6,5,__BR__B____R_B___R___BR_BR____;_;2,4 -> 1,4;Red;6,5,__BR__B____R_B___R___BR_B_R___;_;1,0 -> 2,0;Blue;6,5,_B_R__B____R_B___R___BR_B_R___;3,3;5,3 -> 4,3;Red;6,5,_B_R__B____R_B___R____BRB_R___;_;3,3 -> 4,3;Blue;6,5,_B_R__B____R_B___R___B_RB_R___;_;3,4 -> 2,4;Red;6,5,_B_R__B____R_B___R___B_RB__R__;_;2,3 -> 3,3;Blue;6,5,_B_R__B____R_B___R__B__RB__R__;_;4,0 -> 3,0;Red;6,5,_B__R_B____R_B___R__B__RB__R__;_;1,3 -> 2,3;Blue;6,5,_B__R_B____R_B___R_B___RB__R__;_;5,0 -> 4,0;Red;6,5,_B___RB____R_B___R_B___RB__R__;_;0,3 -> 1,3;Blue;6,5,_B___RB____R_B___RB____RB__R__;_;4,4 -> 3,4;Red;6,5,_B___RB____R_B___RB____RB___R_;_;0,0 -> 1,0;Blue;6,5,B____RB____R_B___RB____RB___R_;_;5,4 -> 4,4;Red;6,5,B____RB____R_B___RB____RB____R;_;0,2 -> 1,2;Blue;6,5,B____RB____RB____RB____RB____R;_;_;_\n4,3 -> 5,3\n';
  server = 'wss://gogogo-server.herokuapp.com/';
  name_0 = null;
  main();
  return _;
}(typeof this['gogogo-frontend'] === 'undefined' ? {} : this['gogogo-frontend'], kotlin, this['kotlinx-coroutines-core'], this['gogogo-common'], this['kotlinx-html-js']);

//# sourceMappingURL=gogogo-frontend.js.map
