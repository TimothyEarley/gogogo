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
  var throwCCE = Kotlin.throwCCE;
  var toNetFormat = $module$gogogo_common.de.earley.gogogo.game.toNetFormat_1pq5d1$;
  var moveFromNetFormat = $module$gogogo_common.de.earley.gogogo.game.moveFromNetFormat_pdl1vz$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Move = $module$gogogo_common.de.earley.gogogo.game.Move;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var Unit = Kotlin.kotlin.Unit;
  var td = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_7wec05$;
  var table = $module$kotlinx_html_js.kotlinx.html.js.table_uk5qws$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var Point = $module$gogogo_common.de.earley.gogogo.game.Point;
  var toString = Kotlin.toString;
  var L100 = Kotlin.Long.fromInt(100);
  var Player = $module$gogogo_common.de.earley.gogogo.game.Player;
  var ControlledGame = $module$gogogo_common.de.earley.gogogo.game.ControlledGame;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var UIHook = $module$gogogo_common.de.earley.gogogo.game.UIHook;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  function DelayedController(pc) {
    this.pc_0 = pc;
    this.name_pw0jc$_0 = 'UI AI';
  }
  Object.defineProperty(DelayedController.prototype, 'name', {
    get: function () {
      return this.name_pw0jc$_0;
    }
  });
  DelayedController.prototype.getMove_g7d5xp$ = function (state_0, fromSelectCallback_0, continuation_0, suspended) {
    var instance = new Coroutine$getMove_g7d5xp$(this, state_0, fromSelectCallback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMove_g7d5xp$($this, state_0, fromSelectCallback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$move = void 0;
    this.local$state = state_0;
    this.local$fromSelectCallback = fromSelectCallback_0;
  }
  Coroutine$getMove_g7d5xp$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getMove_g7d5xp$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMove_g7d5xp$.prototype.constructor = Coroutine$getMove_g7d5xp$;
  Coroutine$getMove_g7d5xp$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.pc_0.getMove_g7d5xp$(this.local$state, this.local$fromSelectCallback, this);
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
  DelayedController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DelayedController',
    interfaces: [PlayerController]
  };
  function withUIAwareness($receiver) {
    return new DelayedController($receiver);
  }
  function main$lambda(it) {
    var tmp$;
    var root = Kotlin.isType(tmp$ = document.getElementById('game'), HTMLDivElement) ? tmp$ : throwCCE();
    return new GameUI(root);
  }
  function main(args) {
    println('Hello world!');
    window.onload = main$lambda;
  }
  function Connection(ws) {
    Connection$Companion_getInstance();
    this.ws_0 = ws;
  }
  Connection.prototype.getMove_biffl8$ = function (state_0, continuation_0, suspended) {
    var instance = new Coroutine$getMove_biffl8$(this, state_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMove_biffl8$($this, state_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$state = state_0;
  }
  Coroutine$getMove_biffl8$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getMove_biffl8$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMove_biffl8$.prototype.constructor = Coroutine$getMove_biffl8$;
  Coroutine$getMove_biffl8$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.ws_0.send_61zpoe$(toNetFormat(this.local$state));
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
  Object.defineProperty(Connection.prototype, 'coroutineContext', {
    get: function () {
      return coroutines.Dispatchers.Default.plus_1fupul$(Job());
    }
  });
  function Connection$Companion() {
    Connection$Companion_instance = this;
  }
  Connection$Companion.prototype.connect_61zpoe$ = function (url) {
    var ws = new WebsocketConnectionImpl(new WebSocket(url));
    return new Connection(ws);
  };
  Connection$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Connection$Companion_instance = null;
  function Connection$Companion_getInstance() {
    if (Connection$Companion_instance === null) {
      new Connection$Companion();
    }
    return Connection$Companion_instance;
  }
  Connection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Connection',
    interfaces: [CoroutineScope]
  };
  var server;
  function NetworkController() {
    this.name_hep9nf$_0 = 'Network';
    this.con_0 = Connection$Companion_getInstance().connect_61zpoe$('ws://localhost:8080/matchmaking');
  }
  Object.defineProperty(NetworkController.prototype, 'name', {
    get: function () {
      return this.name_hep9nf$_0;
    }
  });
  NetworkController.prototype.getMove_g7d5xp$ = function (state, fromSelectCallback, continuation) {
    return this.con_0.getMove_biffl8$(state, continuation);
  };
  NetworkController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NetworkController',
    interfaces: [PlayerController]
  };
  function HumanController() {
    this.name_nf5ttb$_0 = 'Human';
    this.from_0 = null;
    this.to_0 = null;
    this.selectCallback_0 = null;
    this.state_0 = null;
    this.commit_0 = Channel(1);
  }
  Object.defineProperty(HumanController.prototype, 'name', {
    get: function () {
      return this.name_nf5ttb$_0;
    }
  });
  HumanController.prototype.getMove_g7d5xp$ = function (state_0, fromSelectCallback_0, continuation_0, suspended) {
    var instance = new Coroutine$getMove_g7d5xp$_0(this, state_0, fromSelectCallback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$getMove_g7d5xp$_0($this, state_0, fromSelectCallback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$state = state_0;
    this.local$fromSelectCallback = fromSelectCallback_0;
  }
  Coroutine$getMove_g7d5xp$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getMove_g7d5xp$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getMove_g7d5xp$_0.prototype.constructor = Coroutine$getMove_g7d5xp$_0;
  Coroutine$getMove_g7d5xp$_0.prototype.doResume = function () {
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
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
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
  HumanController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HumanController',
    interfaces: [PlayerController]
  };
  function asClass($receiver) {
    return $receiver.toString().toLowerCase();
  }
  function GameUI(rootDiv) {
    this.rootDiv_0 = rootDiv;
    this.aiCheckboxBlue_0 = get_0(document, 'ai-blue-check');
    this.aiCheckboxRed_0 = get_0(document, 'ai-red-check');
    this.turnIndicator_0 = get_0(document, 'turn-indicator');
    this.undo_0 = get_0(document, 'undo');
    this.presenter_0 = new Presenter(this);
    this.cells = this.createCells_0(this.presenter_0.gameWidth, this.presenter_0.gameHeight);
    this.updateUI();
    this.registerEventListeners_0();
  }
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
  var Grid$Companion$create$lambda = wrapFunction(function () {
    var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    return function (closure$width, closure$init) {
      return function (y) {
        var $receiver = until(0, closure$width);
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var item = tmp$.next();
          destination.add_11rb$(closure$init(item, y));
        }
        return destination;
      };
    };
  });
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
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
  function GameUI$registerEventListeners$lambda$lambda(this$GameUI, closure$x, closure$y) {
    return function (it) {
      this$GameUI.presenter_0.handleClick_vux9f0$(closure$x, closure$y);
      return Unit;
    };
  }
  function GameUI$registerEventListeners$lambda(this$GameUI) {
    return function (it) {
      this$GameUI.presenter_0.restart();
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
        element_1 != null ? (onClick(element_1, GameUI$registerEventListeners$lambda$lambda(this, element_0, element)), Unit) : null;
      }
    }
    onClick(get_0(document, 'restart'), GameUI$registerEventListeners$lambda(this));
    onClick(this.undo_0, GameUI$registerEventListeners$lambda_0(this));
    onClick(this.aiCheckboxRed_0, GameUI$registerEventListeners$lambda_1(this));
    onClick(this.aiCheckboxBlue_0, GameUI$registerEventListeners$lambda_2(this));
  };
  GameUI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameUI',
    interfaces: []
  };
  function Presenter(gameUI) {
    this.gameUI_0 = gameUI;
    this.selected_0 = null;
    this.game_0 = this.createGame_0();
  }
  Object.defineProperty(Presenter.prototype, 'gameWidth', {
    get: function () {
      return this.game_0.grid.width;
    }
  });
  Object.defineProperty(Presenter.prototype, 'gameHeight', {
    get: function () {
      return this.game_0.grid.height;
    }
  });
  Presenter.prototype.setClasses_dha1jo$ = function (element, x, y) {
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
  Presenter.prototype.turnText = function () {
    if (this.game_0.isOver()) {
      return toString(this.game_0.victor) + ' has won!';
    }
     else {
      return this.game_0.player.toString() + "'s turn";
    }
  };
  Presenter.prototype.restart = function () {
    this.game_0 = this.createGame_0();
    this.gameUI_0.updateUI();
  };
  Presenter.prototype.handleClick_vux9f0$ = function (x, y) {
    if (this.game_0.isOver())
      return;
    var c = this.game_0.activeController;
    if (Kotlin.isType(c, HumanController)) {
      c.supplyClick_bk5ui5$(new Point(x, y));
    }
  };
  Presenter.prototype.onSelect_37gzp0$ = function (point) {
    if (point == null) {
      this.unselect_0();
    }
     else {
      this.selected_0 = point;
      ensureNotNull(this.gameUI_0.cells.get_vux9f0$(point.x, point.y)).classList.add('game-cell-selected');
    }
  };
  Presenter.prototype.onGameEnd = function () {
    this.unselect_0();
  };
  Presenter.prototype.onMove_47hwoe$ = function (move, continuation_0, suspended) {
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
  Coroutine$onMove_47hwoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
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
  Presenter.prototype.createGame_0 = function () {
    var $receiver = new ControlledGame(this.getController_0(Player.Red), this.getController_0(Player.Blue), this);
    this.startGame_0($receiver);
    return $receiver;
  };
  function Presenter$startGame$lambda$lambda(this$_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Presenter$startGame$lambda$lambda(this$_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Presenter$startGame$lambda$lambda(this$_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Presenter$startGame$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Presenter$startGame$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Presenter$startGame$lambda$lambda.prototype.constructor = Coroutine$Presenter$startGame$lambda$lambda;
  Coroutine$Presenter$startGame$lambda$lambda.prototype.doResume = function () {
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
  Presenter.prototype.startGame_0 = function (game) {
    return launch(coroutines.GlobalScope, void 0, void 0, Presenter$startGame$lambda$lambda(game));
  };
  Presenter.prototype.unselect_0 = function () {
    var tmp$;
    if ((tmp$ = this.selected_0) != null) {
      ensureNotNull(this.gameUI_0.cells.get_vux9f0$(tmp$.x, tmp$.y)).classList.remove('game-cell-selected');
    }
    this.selected_0 = null;
  };
  Presenter.prototype.undo = function () {
    this.game_0.undo();
    this.unselect_0();
    this.gameUI_0.updateUI();
  };
  Presenter.prototype.canUndo = function () {
    return this.game_0.canUndo();
  };
  Presenter.prototype.setRedAI_6taknv$ = function (active) {
    this.game_0.switchRed_wszlfq$(this.getController_0(Player.Red));
  };
  Presenter.prototype.setBlueAI_6taknv$ = function (active) {
    this.game_0.switchBlue_wszlfq$(this.getController_0(Player.Blue));
  };
  Presenter.prototype.getController_0 = function (player) {
    return this.gameUI_0.isAI_3999j6$(player) ? withUIAwareness(new NetworkController()) : new HumanController();
  };
  Presenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Presenter',
    interfaces: [UIHook]
  };
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
  }
  function WebsocketConnection() {
  }
  WebsocketConnection.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WebsocketConnection',
    interfaces: []
  };
  function WebsocketConnectionImpl(ws) {
    this.ws_0 = ws;
    this.open_0 = CompletableDeferred();
    this.messages_0 = Channel();
    this.ws_0.onopen = WebsocketConnectionImpl_init$lambda(this);
    this.ws_0.onclose = WebsocketConnectionImpl_init$lambda_0(this);
    this.ws_0.onmessage = WebsocketConnectionImpl_init$lambda_1(this);
  }
  Object.defineProperty(WebsocketConnectionImpl.prototype, 'coroutineContext', {
    get: function () {
      return coroutines.Dispatchers.Default.plus_1fupul$(Job());
    }
  });
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
  Coroutine$WebsocketConnectionImpl$send$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
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
  function WebsocketConnectionImpl_init$lambda(this$WebsocketConnectionImpl) {
    return function (it) {
      return this$WebsocketConnectionImpl.open_0.complete_11rb$(null);
    };
  }
  var Job_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
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
  Coroutine$WebsocketConnectionImpl_init$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
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
  WebsocketConnectionImpl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WebsocketConnectionImpl',
    interfaces: [CoroutineScope, WebsocketConnection]
  };
  var package$de = _.de || (_.de = {});
  var package$earley = package$de.earley || (package$de.earley = {});
  var package$gogogo = package$earley.gogogo || (package$earley.gogogo = {});
  var package$ai = package$gogogo.ai || (package$gogogo.ai = {});
  package$ai.DelayedController = DelayedController;
  package$ai.withUIAwareness_mj2ouj$ = withUIAwareness;
  package$gogogo.main_kand9s$ = main;
  Object.defineProperty(Connection, 'Companion', {
    get: Connection$Companion_getInstance
  });
  var package$net = package$gogogo.net || (package$gogogo.net = {});
  package$net.Connection = Connection;
  Object.defineProperty(package$net, 'server', {
    get: function () {
      return server;
    }
  });
  package$net.NetworkController = NetworkController;
  var package$ui = package$gogogo.ui || (package$gogogo.ui = {});
  package$ui.HumanController = HumanController;
  package$ui.asClass_txv5hr$ = asClass;
  $$importsForInline$$['gogogo-common'] = $module$gogogo_common;
  package$ui.GameUI = GameUI;
  package$ui.Presenter = Presenter;
  package$ui.get_o90r4$ = get_0;
  package$ui.onClick_2lnv0o$ = onClick;
  var package$web = package$gogogo.web || (package$gogogo.web = {});
  package$web.WebsocketConnection = WebsocketConnection;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$web.WebsocketConnectionImpl = WebsocketConnectionImpl;
  server = 'ws://localhost:8080';
  main([]);
  Kotlin.defineModule('gogogo-frontend', _);
  return _;
}(typeof this['gogogo-frontend'] === 'undefined' ? {} : this['gogogo-frontend'], kotlin, this['kotlinx-coroutines-core'], this['gogogo-common'], this['kotlinx-html-js']);

//# sourceMappingURL=gogogo-frontend.js.map
