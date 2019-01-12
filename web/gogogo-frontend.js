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
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var CoroutineScope = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineScope;
  var ensureNotNull = Kotlin.ensureNotNull;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var L800 = Kotlin.Long.fromInt(800);
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var Point = $module$gogogo_common.de.earley.gogogo.game.Point;
  var Triple = Kotlin.kotlin.Triple;
  var sequence = Kotlin.kotlin.sequences.sequence_o0x0bg$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var equals = Kotlin.equals;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var Random = Kotlin.kotlin.random.Random;
  var Player = $module$gogogo_common.de.earley.gogogo.game.Player;
  var sumBy = $module$gogogo_common.de.earley.gogogo.game.sumBy_750h6s$;
  var next = $module$gogogo_common.de.earley.gogogo.game.next_txv5hr$;
  var max = Kotlin.kotlin.collections.max_lvsncp$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var min = Kotlin.kotlin.collections.min_lvsncp$;
  var throwCCE = Kotlin.throwCCE;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var td = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_7wec05$;
  var table = $module$kotlinx_html_js.kotlinx.html.js.table_uk5qws$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var toString = Kotlin.toString;
  var Game = $module$gogogo_common.de.earley.gogogo.game.Game;
  var getCallableRef = Kotlin.getCallableRef;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var Channel = $module$kotlinx_coroutines_core.kotlinx.coroutines.channels.Channel_ww73n8$;
  var server;
  var con;
  function Connection(ws) {
    Connection$Companion_getInstance();
    this.ws_0 = ws;
    launch(this, void 0, void 0, Connection_init$lambda(this));
  }
  Connection.prototype.move_56t7qy$ = function (from, to) {
    this.ws_0.send_61zpoe$('[' + from.x + ', ' + from.y + '] -> [' + to.x + ', ' + to.y + ']');
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
  function Connection_init$lambda(this$Connection_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$Connection_init$lambda(this$Connection_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Connection_init$lambda(this$Connection_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$Connection = this$Connection_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$Connection_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Connection_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Connection_init$lambda.prototype.constructor = Coroutine$Connection_init$lambda;
  Coroutine$Connection_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$this$Connection.ws_0.messages.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.hasNext(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$tmp$.next(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var message = this.result_0;
            println(message);
            this.state_0 = 2;
            continue;
          case 6:
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
  Connection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Connection',
    interfaces: [CoroutineScope]
  };
  function bestMove($receiver, player, state) {
    var $receiver_0 = findAllMoves(state);
    var maxBy$result;
    maxBy$break: do {
      var iterator = $receiver_0.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      var maxValue = $receiver(player, maxElem.third);
      while (iterator.hasNext()) {
        var e = iterator.next();
        var v = $receiver(player, e.third);
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
      maxBy$result = maxElem;
    }
     while (false);
    return ensureNotNull(maxBy$result);
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function debugBestMove($receiver, player, state) {
    var $receiver_0 = findAllMoves(state);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to($receiver(player, item.third), item));
    }
    var maxBy$result;
    maxBy$break: do {
      var iterator = destination.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      var maxValue = maxElem.first;
      while (iterator.hasNext()) {
        var e = iterator.next();
        var v = e.first;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
      maxBy$result = maxElem;
    }
     while (false);
    var best = ensureNotNull(maxBy$result);
    println('Player ' + player + ' thinks the move is worth: ' + best.first + ' points');
    return best.second;
  }
  function AI() {
    this.strat_0 = stratPerPlayer(hard, hard);
  }
  function AI$move$lambda(this$AI_0, closure$ownPlayer_0, closure$state_0, closure$click_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$AI$move$lambda(this$AI_0, closure$ownPlayer_0, closure$state_0, closure$click_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$AI$move$lambda(this$AI_0, closure$ownPlayer_0, closure$state_0, closure$click_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$AI = this$AI_0;
    this.local$closure$ownPlayer = closure$ownPlayer_0;
    this.local$closure$state = closure$state_0;
    this.local$closure$click = closure$click_0;
    this.local$closure$click_0 = void 0;
    this.local$to = void 0;
  }
  Coroutine$AI$move$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AI$move$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AI$move$lambda.prototype.constructor = Coroutine$AI$move$lambda;
  Coroutine$AI$move$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = debugBestMove(this.local$this$AI.strat_0, this.local$closure$ownPlayer, this.local$closure$state);
            this.local$closure$click_0 = this.local$closure$click;
            var from = $receiver.component1();
            this.local$from = $receiver.component1(), this.local$to = $receiver.component2();
            this.local$closure$click_0(from.x, from.y);
            this.state_0 = 2;
            this.result_0 = delay(L800, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$closure$click_0(this.local$to.x, this.local$to.y);
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
  AI.prototype.move_ihgilx$ = function (ownPlayer, state, click) {
    return launch(coroutines.GlobalScope, void 0, void 0, AI$move$lambda(this, ownPlayer, state, click));
  };
  AI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AI',
    interfaces: []
  };
  function stratPerPlayer$lambda(closure$red, closure$blue) {
    return function (p, s) {
      switch (p.name) {
        case 'Red':
          return closure$red(p, s);
        case 'Blue':
          return closure$blue(p, s);
        default:return Kotlin.noWhenBranchMatched();
      }
    };
  }
  function stratPerPlayer(blue, red) {
    return stratPerPlayer$lambda(red, blue);
  }
  function findAllMoves$lambda(this$findAllMoves_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$findAllMoves$lambda(this$findAllMoves_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$findAllMoves$lambda(this$findAllMoves_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$findAllMoves = this$findAllMoves_0;
    this.local$$this = void 0;
    this.local$tmp$ = void 0;
    this.local$element = void 0;
    this.local$tmp$_0 = void 0;
    this.local$this$findAllMoves_0 = void 0;
    this.local$from = void 0;
    this.local$$this_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$element_0 = void 0;
    this.local$tmp$_0_0 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$findAllMoves$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$findAllMoves$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$findAllMoves$lambda.prototype.constructor = Coroutine$findAllMoves$lambda;
  Coroutine$findAllMoves$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$this = this.local$this$findAllMoves.grid;
            this.local$tmp$ = until(0, this.local$$this.height).iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 12;
              continue;
            }

            this.local$element = this.local$tmp$.next();
            this.local$tmp$_0 = until(0, this.local$$this.width).iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$_0.hasNext()) {
              this.state_0 = 11;
              continue;
            }

            var element_0 = this.local$tmp$_0.next();
            this.local$this$findAllMoves_0 = this.local$this$findAllMoves;
            this.local$$this.get_vux9f0$(element_0, this.local$element);
            this.local$from = new Point(element_0, this.local$element);
            if (this.local$this$findAllMoves_0.isEligibleToMove_bk5ui5$(this.local$from)) {
              this.local$$this_0 = this.local$this$findAllMoves_0.grid;
              this.local$tmp$_1 = until(0, this.local$$this_0.height).iterator();
              this.state_0 = 4;
              continue;
            }
             else {
              this.state_0 = 10;
              continue;
            }

          case 4:
            if (!this.local$tmp$_1.hasNext()) {
              this.state_0 = 9;
              continue;
            }

            this.local$element_0 = this.local$tmp$_1.next();
            this.local$tmp$_0_0 = until(0, this.local$$this_0.width).iterator();
            this.state_0 = 5;
            continue;
          case 5:
            if (!this.local$tmp$_0_0.hasNext()) {
              this.state_0 = 8;
              continue;
            }

            var element_0_0 = this.local$tmp$_0_0.next();
            this.local$$this_0.get_vux9f0$(element_0_0, this.local$element_0);
            var to = new Point(element_0_0, this.local$element_0);
            var next = this.local$this$findAllMoves_0.move_56t7qy$(this.local$from, to);
            if (next != null) {
              this.state_0 = 6;
              this.result_0 = this.local$$receiver.yield_11rb$(new Triple(this.local$from, to, next), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 7;
              continue;
            }

          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 5;
            continue;
          case 8:
            this.state_0 = 4;
            continue;
          case 9:
            this.state_0 = 10;
            continue;
          case 10:
            this.state_0 = 3;
            continue;
          case 11:
            this.state_0 = 2;
            continue;
          case 12:
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
  function findAllMoves($receiver) {
    return toList(sequence(findAllMoves$lambda($receiver)));
  }
  var progressMult;
  var pushedPenalty;
  var tokenBonus;
  function easy$lambda$lambda(closure$state, closure$ownPlayer) {
    return function (x, y, player) {
      var tmp$;
      if (equals(player, Player.Red))
        tmp$ = closure$state.grid.width - x - 1 | 0;
      else if (equals(player, Player.Blue))
        tmp$ = x;
      else
        tmp$ = 0;
      var progress = 10 * tmp$ | 0;
      var victoryBonus = progress === (closure$state.grid.width - 1 | 0) ? 1000 : 0;
      var pushed = equals(closure$state.lastPushed, new Point(x, y)) ? 6 : 0;
      var total = progress + victoryBonus + 10 - pushed | 0;
      if (equals(player, closure$ownPlayer))
        return +total;
      else if (player != null)
        return -total | 0;
      else
        return 0;
    };
  }
  function easy$lambda(ownPlayer, state) {
    return equals(state.victor, ownPlayer) ? kotlin_js_internal_FloatCompanionObject.MAX_VALUE : Random.Default.nextFloat() + sumBy(state.grid, easy$lambda$lambda(state, ownPlayer));
  }
  var easy;
  function hard$lambda(player, state) {
    return recMed(player, state, 2);
  }
  var hard;
  function recMed(player, state, level) {
    var tmp$;
    if (level === 0)
      return medium(player, state);
    if (state.victor != null)
      return equals(player, state.victor) ? kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY : kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY;
    var $receiver = findAllMoves(state);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(recMed(next(player), item.third, level - 1 | 0));
    }
    var bestOpponentMove = (tmp$ = max(destination)) != null ? tmp$ : 0.0;
    return -bestOpponentMove;
  }
  function medium$lambda(ownPlayer, state) {
    if (equals(state.victor, ownPlayer))
      return kotlin_js_internal_FloatCompanionObject.MAX_VALUE;
    else {
      var opponentMove = bestMove(easy, next(ownPlayer), state).third;
      return easy(ownPlayer, opponentMove);
    }
  }
  var medium;
  function MemState(player, state) {
    this.player = player;
    this.state = state;
  }
  MemState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MemState',
    interfaces: []
  };
  MemState.prototype.component1 = function () {
    return this.player;
  };
  MemState.prototype.component2 = function () {
    return this.state;
  };
  MemState.prototype.copy_2n9wpm$ = function (player, state) {
    return new MemState(player === void 0 ? this.player : player, state === void 0 ? this.state : state);
  };
  MemState.prototype.toString = function () {
    return 'MemState(player=' + Kotlin.toString(this.player) + (', state=' + Kotlin.toString(this.state)) + ')';
  };
  MemState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.player) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    return result;
  };
  MemState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.player, other.player) && Kotlin.equals(this.state, other.state)))));
  };
  function memoize$lambda(closure$mem, closure$strat) {
    return function (player, state) {
      var memState = new MemState(player, state);
      var $receiver = closure$mem;
      var tmp$;
      var value = $receiver.get_11rb$(memState);
      if (value == null) {
        var answer = closure$strat(player, state);
        $receiver.put_xwzc9p$(memState, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      return tmp$;
    };
  }
  function memoize(strat) {
    var mem = HashMap_init();
    return memoize$lambda(mem, strat);
  }
  function minMax(player, state) {
    return minMaxPrune(state, player, 3);
  }
  function minMax_0($receiver, player, depth, max_0) {
    if (max_0 === void 0)
      max_0 = true;
    var tmp$;
    if (depth <= 0)
      return medium(player, $receiver);
    if ($receiver.victor != null) {
      if (equals($receiver.victor, player))
        tmp$ = kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY;
      else
        tmp$ = kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY;
      return tmp$;
    }
    var $receiver_0 = findAllMoves($receiver);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.third);
    }
    var children = destination;
    var destination_0 = ArrayList_init(collectionSizeOrDefault(children, 10));
    var tmp$_1;
    tmp$_1 = children.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(minMax_0(item_0, player, depth - 1 | 0, !max_0));
    }
    var values = destination_0;
    return max_0 ? ensureNotNull(max(values)) : ensureNotNull(min(values));
  }
  var pruneDiff;
  var Math_0 = Math;
  function minMaxPrune($receiver, player, depth, max) {
    if (max === void 0)
      max = true;
    var tmp$;
    if (depth <= 0)
      return medium(player, $receiver);
    if ($receiver.victor != null) {
      if (equals($receiver.victor, player))
        tmp$ = kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY;
      else
        tmp$ = kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY;
      return tmp$;
    }
    var $receiver_0 = findAllMoves($receiver);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.third);
    }
    var children = destination;
    var minVal = {v: kotlin_js_internal_FloatCompanionObject.POSITIVE_INFINITY};
    var maxVal = {v: kotlin_js_internal_FloatCompanionObject.NEGATIVE_INFINITY};
    var tmp$_1;
    tmp$_1 = children.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var value = minMaxPrune(element, player, depth - 1 | 0, !max);
      if (max && value > 100) {
        println('Pruned');
        return value;
      }
      if (!max && value < -100) {
        println('Pruned');
        return value;
      }
      var a = minVal.v;
      minVal.v = Math_0.min(a, value);
      var a_0 = maxVal.v;
      maxVal.v = Math_0.max(a_0, value);
    }
    return max ? maxVal.v : minVal.v;
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
  function asClass($receiver) {
    return $receiver.toString().toLowerCase();
  }
  function GameUI(rootDiv) {
    this.rootDiv_0 = rootDiv;
    this.presenter_0 = new Presenter(this);
    this.cells = this.createCells_0(this.presenter_0.gameWidth, this.presenter_0.gameHeight);
    this.turnIndicator_0 = get_0(document, 'turn-indicator');
    this.undo_0 = get_0(document, 'undo');
    this.aiCheckboxBlue_0 = get_0(document, 'ai-blue-check');
    this.aiCheckboxRed_0 = get_0(document, 'ai-red-check');
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
  var Grid_init = $module$gogogo_common.de.earley.gogogo.game.Grid;
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
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  GameUI.prototype.createCells_0 = function (width, height) {
    var ui = table(get_create(document), void 0, GameUI$createCells$lambda(height, width));
    this.rootDiv_0.append(ui);
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
        destination_0.add_11rb$(GameUI$createCells$lambda_0(item, element));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return new Grid_init(width, height, copyToArray(destination));
  };
  GameUI.prototype.updateUI = function () {
    var $this = this.cells;
    var tmp$;
    tmp$ = until(0, $this.height).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = until(0, $this.width).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        this.presenter_0.setClasses_dha1jo$(ensureNotNull($this.get_vux9f0$(element_0, element)), element_0, element);
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
      this$GameUI.presenter_0.checkAI();
      return Unit;
    };
  }
  function GameUI$registerEventListeners$lambda_2(this$GameUI) {
    return function (it) {
      this$GameUI.presenter_0.checkAI();
      return Unit;
    };
  }
  GameUI.prototype.registerEventListeners_0 = function () {
    var $this = this.cells;
    var tmp$;
    tmp$ = until(0, $this.height).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = until(0, $this.width).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var element_1 = $this.get_vux9f0$(element_0, element);
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
    this.ai_0 = new AI();
    this.selected_0 = null;
    this.game_0 = new Game();
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
    this.game_0 = new Game();
    this.gameUI_0.updateUI();
    this.checkAI();
  };
  Presenter.prototype.handleClick_vux9f0$ = function (x, y) {
    if (this.game_0.isOver())
      return;
    var sel = this.selected_0;
    var target = new Point(x, y);
    if (sel != null) {
      if (sel.x === x && sel.y === y) {
        this.unselect_0();
      }
       else if (this.game_0.move_56t7qy$(sel, target)) {
        con.move_56t7qy$(sel, target);
        this.unselect_0();
        this.gameUI_0.updateUI();
        this.checkAI();
      }
      if (this.game_0.isOver()) {
        this.unselect_0();
        this.gameUI_0.updateUI();
      }
    }
     else if (this.game_0.isEligibleToMove_bk5ui5$(new Point(x, y))) {
      this.select_0(x, y);
    }
  };
  Presenter.prototype.select_0 = function (x, y) {
    this.selected_0 = new Point(x, y);
    ensureNotNull(this.gameUI_0.cells.get_vux9f0$(x, y)).classList.add('game-cell-selected');
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
  Presenter.prototype.checkAI = function () {
    if (this.gameUI_0.isAI_3999j6$(this.game_0.player)) {
      this.ai_0.move_ihgilx$(this.game_0.player, this.game_0.state, getCallableRef('handleClick', function ($receiver, x, y) {
        return $receiver.handleClick_vux9f0$(x, y), Unit;
      }.bind(null, this)));
    }
  };
  Presenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Presenter',
    interfaces: []
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
    this.messages_9ckido$_0 = Channel();
    this.ws_0.onopen = WebsocketConnectionImpl_init$lambda(this);
    this.ws_0.onclose = WebsocketConnectionImpl_init$lambda_0(this);
    this.ws_0.onmessage = WebsocketConnectionImpl_init$lambda_1(this);
  }
  Object.defineProperty(WebsocketConnectionImpl.prototype, 'coroutineContext', {
    get: function () {
      return coroutines.Dispatchers.Default.plus_1fupul$(Job());
    }
  });
  Object.defineProperty(WebsocketConnectionImpl.prototype, 'messages', {
    get: function () {
      return this.messages_9ckido$_0;
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
            this.result_0 = this.local$this$WebsocketConnectionImpl.messages.send_11rb$(toString(this.local$closure$evt.data), this);
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
  Object.defineProperty(package$gogogo, 'server', {
    get: function () {
      return server;
    }
  });
  Object.defineProperty(package$gogogo, 'con', {
    get: function () {
      return con;
    }
  });
  Object.defineProperty(Connection, 'Companion', {
    get: Connection$Companion_getInstance
  });
  package$gogogo.Connection = Connection;
  var package$ai = package$gogogo.ai || (package$gogogo.ai = {});
  package$ai.bestMove_rxsk4c$ = bestMove;
  package$ai.debugBestMove_rxsk4c$ = debugBestMove;
  package$ai.AI = AI;
  package$ai.stratPerPlayer_nmhdos$ = stratPerPlayer;
  $$importsForInline$$['gogogo-common'] = $module$gogogo_common;
  package$ai.findAllMoves_1pq5d1$ = findAllMoves;
  Object.defineProperty(package$ai, 'progressMult', {
    get: function () {
      return progressMult;
    }
  });
  Object.defineProperty(package$ai, 'pushedPenalty', {
    get: function () {
      return pushedPenalty;
    }
  });
  Object.defineProperty(package$ai, 'tokenBonus', {
    get: function () {
      return tokenBonus;
    }
  });
  Object.defineProperty(package$ai, 'easy', {
    get: function () {
      return easy;
    }
  });
  Object.defineProperty(package$ai, 'hard', {
    get: function () {
      return hard;
    }
  });
  package$ai.recMed_a25z8o$ = recMed;
  Object.defineProperty(package$ai, 'medium', {
    get: function () {
      return medium;
    }
  });
  package$ai.MemState = MemState;
  package$ai.memoize_x6rkih$ = memoize;
  package$ai.minMax_2n9wpm$ = minMax;
  Object.defineProperty(package$ai, 'pruneDiff', {
    get: function () {
      return pruneDiff;
    }
  });
  package$gogogo.main_kand9s$ = main;
  var package$ui = package$gogogo.ui || (package$gogogo.ui = {});
  package$ui.asClass_txv5hr$ = asClass;
  package$ui.GameUI = GameUI;
  package$ui.Presenter = Presenter;
  package$ui.get_o90r4$ = get_0;
  package$ui.onClick_2lnv0o$ = onClick;
  var package$web = package$gogogo.web || (package$gogogo.web = {});
  package$web.WebsocketConnection = WebsocketConnection;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$web.WebsocketConnectionImpl = WebsocketConnectionImpl;
  server = 'ws://localhost:8080';
  con = Connection$Companion_getInstance().connect_61zpoe$('ws://localhost:8080/matchmaking');
  progressMult = 10;
  pushedPenalty = 6;
  tokenBonus = 10;
  easy = memoize(easy$lambda);
  hard = hard$lambda;
  medium = medium$lambda;
  pruneDiff = 100;
  main([]);
  Kotlin.defineModule('gogogo-frontend', _);
  return _;
}(typeof this['gogogo-frontend'] === 'undefined' ? {} : this['gogogo-frontend'], kotlin, this['kotlinx-coroutines-core'], this['gogogo-common'], this['kotlinx-html-js']);

//# sourceMappingURL=gogogo-frontend.js.map
