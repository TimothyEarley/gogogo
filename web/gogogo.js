if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'gogogo'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'gogogo'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'gogogo'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'gogogo'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'gogogo'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'gogogo'.");
}
var gogogo = function (_, Kotlin, $module$kotlinx_coroutines_core, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var ensureNotNull = Kotlin.ensureNotNull;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var L800 = Kotlin.Long.fromInt(800);
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_s8cxhz$;
  var Unit = Kotlin.kotlin.Unit;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Triple = Kotlin.kotlin.Triple;
  var sequence = Kotlin.kotlin.sequences.sequence_o0x0bg$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var equals = Kotlin.equals;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var Random = Kotlin.kotlin.random.Random;
  var max = Kotlin.kotlin.collections.max_lvsncp$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var min = Kotlin.kotlin.collections.min_lvsncp$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toString = Kotlin.toString;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var throwCCE = Kotlin.throwCCE;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var td = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_7wec05$;
  var table = $module$kotlinx_html_js.kotlinx.html.js.table_uk5qws$;
  var removeClass = Kotlin.kotlin.dom.removeClass_hhb33f$;
  var getCallableRef = Kotlin.getCallableRef;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  MoveResult.prototype = Object.create(Enum.prototype);
  MoveResult.prototype.constructor = MoveResult;
  Player.prototype = Object.create(Enum.prototype);
  Player.prototype.constructor = Player;
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
    this.local$tmp$_2 = void 0;
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

            var element = this.local$tmp$_0.next();
            this.local$this$findAllMoves_0 = this.local$this$findAllMoves;
            this.local$$this.get_vux9f0$(element, this.local$element);
            this.local$from = new Point(element, this.local$element);
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
            this.local$tmp$_2 = until(0, this.local$$this_0.width).iterator();
            this.state_0 = 5;
            continue;
          case 5:
            if (!this.local$tmp$_2.hasNext()) {
              this.state_0 = 8;
              continue;
            }

            var element_0 = this.local$tmp$_2.next();
            this.local$$this_0.get_vux9f0$(element_0, this.local$element_0);
            var to = new Point(element_0, this.local$element_0);
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
      if (equals(player, Player$Red_getInstance()))
        tmp$ = closure$state.grid.width - x - 1 | 0;
      else if (equals(player, Player$Blue_getInstance()))
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
  var WIDTH;
  var HEIGHT;
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Point',
    interfaces: []
  };
  Point.prototype.component1 = function () {
    return this.x;
  };
  Point.prototype.component2 = function () {
    return this.y;
  };
  Point.prototype.copy_vux9f0$ = function (x, y) {
    return new Point(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Point.prototype.toString = function () {
    return 'Point(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Point.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Point.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function get_0($receiver, p) {
    return $receiver.get_vux9f0$(p.x, p.y);
  }
  function MoveResult(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MoveResult_initFields() {
    MoveResult_initFields = function () {
    };
    MoveResult$Moved_instance = new MoveResult('Moved', 0);
    MoveResult$Illegal_instance = new MoveResult('Illegal', 1);
    MoveResult$Victory_instance = new MoveResult('Victory', 2);
  }
  var MoveResult$Moved_instance;
  function MoveResult$Moved_getInstance() {
    MoveResult_initFields();
    return MoveResult$Moved_instance;
  }
  var MoveResult$Illegal_instance;
  function MoveResult$Illegal_getInstance() {
    MoveResult_initFields();
    return MoveResult$Illegal_instance;
  }
  var MoveResult$Victory_instance;
  function MoveResult$Victory_getInstance() {
    MoveResult_initFields();
    return MoveResult$Victory_instance;
  }
  MoveResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveResult',
    interfaces: [Enum]
  };
  function MoveResult$values() {
    return [MoveResult$Moved_getInstance(), MoveResult$Illegal_getInstance(), MoveResult$Victory_getInstance()];
  }
  MoveResult.values = MoveResult$values;
  function MoveResult$valueOf(name) {
    switch (name) {
      case 'Moved':
        return MoveResult$Moved_getInstance();
      case 'Illegal':
        return MoveResult$Illegal_getInstance();
      case 'Victory':
        return MoveResult$Victory_getInstance();
      default:throwISE('No enum constant de.earley.gogogo.game.MoveResult.' + name);
    }
  }
  MoveResult.valueOf_61zpoe$ = MoveResult$valueOf;
  function Game() {
    this.states_0 = mutableListOf([new State()]);
  }
  Object.defineProperty(Game.prototype, 'state', {
    get: function () {
      return last(this.states_0);
    }
  });
  Object.defineProperty(Game.prototype, 'player', {
    get: function () {
      return this.state.playersTurn;
    }
  });
  Object.defineProperty(Game.prototype, 'victor', {
    get: function () {
      return this.state.victor;
    }
  });
  Object.defineProperty(Game.prototype, 'grid', {
    get: function () {
      return this.state.grid;
    }
  });
  Game.prototype.canUndo = function () {
    return this.states_0.size > 1;
  };
  Game.prototype.undo = function () {
    if (!this.canUndo())
      return;
    this.states_0.removeAt_za3lpa$(get_lastIndex(this.states_0));
  };
  Game.prototype.isEligibleToMove_bk5ui5$ = function (from) {
    return this.state.isEligibleToMove_bk5ui5$(from);
  };
  Game.prototype.isOver = function () {
    return this.victor != null;
  };
  Game.prototype.move_56t7qy$ = function (from, to) {
    var tmp$;
    tmp$ = this.state.move_56t7qy$(from, to);
    if (tmp$ == null) {
      return false;
    }
    var next = tmp$;
    this.states_0.add_11rb$(next);
    return true;
  };
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  function standardStartGrid$lambda(x, f) {
    switch (x) {
      case 0:
        return Player$Blue_getInstance();
      case 5:
        return Player$Red_getInstance();
      default:return null;
    }
  }
  var standardStartGrid;
  function Grid(width, height, elems) {
    Grid$Companion_getInstance();
    this.width = width;
    this.height = height;
    this.elems_0 = elems;
  }
  function Grid$Companion() {
    Grid$Companion_instance = this;
  }
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  Grid$Companion.prototype.create_6qkxfg$ = function (width, height, init) {
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
        destination_0.add_11rb$(init(item, element));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return new Grid(width, height, copyToArray(destination));
  };
  Grid$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Grid$Companion_instance = null;
  function Grid$Companion_getInstance() {
    if (Grid$Companion_instance === null) {
      new Grid$Companion();
    }
    return Grid$Companion_instance;
  }
  Grid.prototype.get_vux9f0$ = function (x, y) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.width - 1 | 0;
    if (0 <= x && x <= tmp$) {
      tmp$_0 = this.height - 1 | 0;
      tmp$_1 = (0 <= y && y <= tmp$_0);
    }
     else
      tmp$_1 = false;
    return tmp$_1 ? this.elems_0[Kotlin.imul(y, this.width) + x | 0] : null;
  };
  function Grid$toString$lambda$lambda(this$Grid, closure$y) {
    return function (x) {
      return toString(this$Grid.get_vux9f0$(x, closure$y));
    };
  }
  function Grid$toString$lambda(this$Grid) {
    return function (y) {
      return joinToString(until(0, this$Grid.width), ' ', void 0, void 0, void 0, void 0, Grid$toString$lambda$lambda(this$Grid, y));
    };
  }
  Grid.prototype.toString = function () {
    return joinToString(until(0, this.height), '\n', void 0, void 0, void 0, void 0, Grid$toString$lambda(this));
  };
  Grid.prototype.forEach_lbptwu$ = defineInlineFunction('gogogo.de.earley.gogogo.game.Grid.forEach_lbptwu$', wrapFunction(function () {
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    return function (action) {
      var tmp$;
      tmp$ = until(0, this.height).iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        tmp$_0 = until(0, this.width).iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          action(element_0, element, this.get_vux9f0$(element_0, element));
        }
      }
    };
  }));
  Grid.prototype.copy_drmat7$ = function (alterations) {
    var $receiver = new Alterations();
    alterations($receiver);
    return $receiver.create_oyles0$(this);
  };
  Grid.prototype.equals = function (other) {
    var tmp$;
    if (this === other)
      return true;
    if (other == null || !equals(get_js(Kotlin.getKClassFromExpression(this)), get_js(Kotlin.getKClassFromExpression(other))))
      return false;
    Kotlin.isType(tmp$ = other, Grid) ? tmp$ : throwCCE();
    if (this.width !== other.width)
      return false;
    if (this.height !== other.height)
      return false;
    if (!contentEquals(this.elems_0, other.elems_0))
      return false;
    return true;
  };
  Grid.prototype.hashCode = function () {
    var result = this.width;
    result = (31 * result | 0) + this.height | 0;
    result = (31 * result | 0) + contentHashCode(this.elems_0) | 0;
    return result;
  };
  Grid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Grid',
    interfaces: []
  };
  Grid.prototype.component1 = function () {
    return this.width;
  };
  Grid.prototype.component2 = function () {
    return this.height;
  };
  Grid.prototype.component3_0 = function () {
    return this.elems_0;
  };
  Grid.prototype.copy_ohzztl$ = function (width, height, elems) {
    return new Grid(width === void 0 ? this.width : width, height === void 0 ? this.height : height, elems === void 0 ? this.elems_0 : elems);
  };
  function Alterations() {
    this.ops_0 = HashMap_init();
  }
  Alterations.prototype.replace_jprfea$ = function (p, value) {
    this.ops_0.put_xwzc9p$(p, value);
  };
  function Alterations$create$lambda(this$Alterations, closure$grid) {
    return function (x, y) {
      var p = new Point(x, y);
      return this$Alterations.ops_0.containsKey_11rb$(p) ? this$Alterations.ops_0.get_11rb$(p) : closure$grid.get_vux9f0$(x, y);
    };
  }
  Alterations.prototype.create_oyles0$ = function (grid) {
    return Grid$Companion_getInstance().create_6qkxfg$(grid.width, grid.height, Alterations$create$lambda(this, grid));
  };
  Alterations.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Alterations',
    interfaces: []
  };
  function sumBy($receiver, value) {
    var sum = {v: 0};
    var tmp$;
    tmp$ = until(0, $receiver.height).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = until(0, $receiver.width).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        sum.v = sum.v + value(element_0, element, $receiver.get_vux9f0$(element_0, element)) | 0;
      }
    }
    return sum.v;
  }
  function Player(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Player_initFields() {
    Player_initFields = function () {
    };
    Player$Red_instance = new Player('Red', 0);
    Player$Blue_instance = new Player('Blue', 1);
  }
  var Player$Red_instance;
  function Player$Red_getInstance() {
    Player_initFields();
    return Player$Red_instance;
  }
  var Player$Blue_instance;
  function Player$Blue_getInstance() {
    Player_initFields();
    return Player$Blue_instance;
  }
  Player.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Player',
    interfaces: [Enum]
  };
  function Player$values() {
    return [Player$Red_getInstance(), Player$Blue_getInstance()];
  }
  Player.values = Player$values;
  function Player$valueOf(name) {
    switch (name) {
      case 'Red':
        return Player$Red_getInstance();
      case 'Blue':
        return Player$Blue_getInstance();
      default:throwISE('No enum constant de.earley.gogogo.game.Player.' + name);
    }
  }
  Player.valueOf_61zpoe$ = Player$valueOf;
  function next($receiver) {
    switch ($receiver.name) {
      case 'Red':
        return Player$Blue_getInstance();
      case 'Blue':
        return Player$Red_getInstance();
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function State(playersTurn, lastPushed, grid) {
    if (playersTurn === void 0)
      playersTurn = Player$Blue_getInstance();
    if (lastPushed === void 0)
      lastPushed = null;
    if (grid === void 0)
      grid = standardStartGrid;
    this.playersTurn = playersTurn;
    this.lastPushed = lastPushed;
    this.grid = grid;
    this.victor = this.isVictory_0();
  }
  function State$move$lambda(closure$pushing, closure$next, this$State, closure$to, closure$from) {
    return function ($receiver) {
      if (closure$pushing)
        $receiver.replace_jprfea$(closure$next, get_0(this$State.grid, closure$to));
      $receiver.replace_jprfea$(closure$to, get_0(this$State.grid, closure$from));
      $receiver.replace_jprfea$(closure$from, null);
      return Unit;
    };
  }
  State.prototype.move_56t7qy$ = function (from, to) {
    if (!this.canMoveTo_0(from, to))
      return null;
    var next_0 = nextOver(from, to);
    var pushing = get_0(this.grid, to) != null;
    var pushed = pushing ? next_0 : null;
    var newGrid = this.grid.copy_drmat7$(State$move$lambda(pushing, next_0, this, to, from));
    return new State(next(this.playersTurn), pushed, newGrid);
  };
  State.prototype.canMoveTo_0 = function (from, to) {
    return this.isEligibleToMove_bk5ui5$(from) && isAdjacent(from, to) && this.canPush_0(from, to);
  };
  State.prototype.isEligibleToMove_bk5ui5$ = function (p) {
    return equals(this.playersTurn, get_0(this.grid, p)) && !equals(this.lastPushed, p);
  };
  State.prototype.canPush_0 = function (from, to) {
    return get_0(this.grid, to) == null || get_0(this.grid, nextOver(from, to)) == null;
  };
  State.prototype.isVictory_0 = function () {
    var $this = this.grid;
    var tmp$;
    tmp$ = until(0, $this.height).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = until(0, $this.width).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var player = $this.get_vux9f0$(element_0, element);
        var tmp$_1;
        if (player != null) {
          switch (player.name) {
            case 'Blue':
              tmp$_1 = element_0 === 5;
              break;
            case 'Red':
              tmp$_1 = element_0 === 0;
              break;
            default:tmp$_1 = Kotlin.noWhenBranchMatched();
              break;
          }
          var reachedEnd = tmp$_1;
          if (reachedEnd)
            return player;
        }
      }
    }
    if (this.countActiveTokens_0() <= 0) {
      return next(this.playersTurn);
    }
    return null;
  };
  function State$countActiveTokens$lambda(this$State) {
    return function (x, y, f) {
      return this$State.isEligibleToMove_bk5ui5$(new Point(x, y)) ? 1 : 0;
    };
  }
  State.prototype.countActiveTokens_0 = function () {
    return sumBy(this.grid, State$countActiveTokens$lambda(this));
  };
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  State.prototype.component1 = function () {
    return this.playersTurn;
  };
  State.prototype.component2 = function () {
    return this.lastPushed;
  };
  State.prototype.component3 = function () {
    return this.grid;
  };
  State.prototype.copy_ia8drb$ = function (playersTurn, lastPushed, grid) {
    return new State(playersTurn === void 0 ? this.playersTurn : playersTurn, lastPushed === void 0 ? this.lastPushed : lastPushed, grid === void 0 ? this.grid : grid);
  };
  State.prototype.toString = function () {
    return 'State(playersTurn=' + Kotlin.toString(this.playersTurn) + (', lastPushed=' + Kotlin.toString(this.lastPushed)) + (', grid=' + Kotlin.toString(this.grid)) + ')';
  };
  State.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.playersTurn) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastPushed) | 0;
    result = result * 31 + Kotlin.hashCode(this.grid) | 0;
    return result;
  };
  State.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.playersTurn, other.playersTurn) && Kotlin.equals(this.lastPushed, other.lastPushed) && Kotlin.equals(this.grid, other.grid)))));
  };
  function nextOver(from, to) {
    return new Point(from.x + (2 * (to.x - from.x | 0) | 0) | 0, from.y + (2 * (to.y - from.y | 0) | 0) | 0);
  }
  function isAdjacent(from, to) {
    var dx = abs(from.x - to.x | 0);
    var dy = abs(from.y - to.y | 0);
    return dx === 1 && dy === 0 || (dx === 0 && dy === 1);
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
    this.turnIndicator_0 = get_1(document, 'turn-indicator');
    this.undo_0 = get_1(document, 'undo');
    this.aiCheckboxBlue_0 = get_1(document, 'ai-blue-check');
    this.aiCheckboxRed_0 = get_1(document, 'ai-red-check');
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
    return get_1(document, 'game-cell-' + x + '-' + y);
  }
  GameUI.prototype.createCells_0 = function (width, height) {
    var ui = table(get_create(document), void 0, GameUI$createCells$lambda(height, width));
    this.rootDiv_0.append(ui);
    return Grid$Companion_getInstance().create_6qkxfg$(width, height, GameUI$createCells$lambda_0);
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
    onClick(get_1(document, 'restart'), GameUI$registerEventListeners$lambda(this));
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
    if (sel != null) {
      if (sel.x === x && sel.y === y) {
        this.unselect_0();
      }
      if (this.game_0.move_56t7qy$(sel, new Point(x, y))) {
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
  function get_1($receiver, id) {
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
  var package$de = _.de || (_.de = {});
  var package$earley = package$de.earley || (package$de.earley = {});
  var package$gogogo = package$earley.gogogo || (package$earley.gogogo = {});
  var package$ai = package$gogogo.ai || (package$gogogo.ai = {});
  package$ai.bestMove_rxsk4c$ = bestMove;
  package$ai.debugBestMove_rxsk4c$ = debugBestMove;
  package$ai.AI = AI;
  package$ai.stratPerPlayer_nmhdos$ = stratPerPlayer;
  $$importsForInline$$.gogogo = _;
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
  var package$game = package$gogogo.game || (package$gogogo.game = {});
  Object.defineProperty(package$game, 'WIDTH', {
    get: function () {
      return WIDTH;
    }
  });
  Object.defineProperty(package$game, 'HEIGHT', {
    get: function () {
      return HEIGHT;
    }
  });
  package$game.Point = Point;
  package$game.get_sddg3j$ = get_0;
  Object.defineProperty(MoveResult, 'Moved', {
    get: MoveResult$Moved_getInstance
  });
  Object.defineProperty(MoveResult, 'Illegal', {
    get: MoveResult$Illegal_getInstance
  });
  Object.defineProperty(MoveResult, 'Victory', {
    get: MoveResult$Victory_getInstance
  });
  package$game.MoveResult = MoveResult;
  package$game.Game = Game;
  Object.defineProperty(package$game, 'standardStartGrid', {
    get: function () {
      return standardStartGrid;
    }
  });
  Object.defineProperty(Grid, 'Companion', {
    get: Grid$Companion_getInstance
  });
  package$game.Grid = Grid;
  package$game.Alterations = Alterations;
  package$game.sumBy_750h6s$ = sumBy;
  Object.defineProperty(Player, 'Red', {
    get: Player$Red_getInstance
  });
  Object.defineProperty(Player, 'Blue', {
    get: Player$Blue_getInstance
  });
  package$game.Player = Player;
  package$game.next_txv5hr$ = next;
  package$game.State = State;
  package$game.nextOver_56t7qy$ = nextOver;
  package$game.isAdjacent_56t7qy$ = isAdjacent;
  package$gogogo.main_kand9s$ = main;
  var package$ui = package$gogogo.ui || (package$gogogo.ui = {});
  package$ui.asClass_txv5hr$ = asClass;
  package$ui.GameUI = GameUI;
  package$ui.Presenter = Presenter;
  package$ui.get_o90r4$ = get_1;
  package$ui.onClick_2lnv0o$ = onClick;
  progressMult = 10;
  pushedPenalty = 6;
  tokenBonus = 10;
  easy = memoize(easy$lambda);
  hard = hard$lambda;
  medium = medium$lambda;
  pruneDiff = 100;
  WIDTH = 6;
  HEIGHT = 5;
  standardStartGrid = Grid$Companion_getInstance().create_6qkxfg$(6, 5, standardStartGrid$lambda);
  main([]);
  Kotlin.defineModule('gogogo', _);
  return _;
}(typeof gogogo === 'undefined' ? {} : gogogo, kotlin, this['kotlinx-coroutines-core'], this['kotlinx-html-js']);

//# sourceMappingURL=gogogo.js.map
