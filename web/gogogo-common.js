if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'gogogo-common'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'gogogo-common'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'gogogo-common'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'gogogo-common'.");
}
if (typeof this['kotlinx-serialization-runtime-js'] === 'undefined') {
  throw new Error("Error loading module 'gogogo-common'. Its dependency 'kotlinx-serialization-runtime-js' was not found. Please, check whether 'kotlinx-serialization-runtime-js' is loaded prior to 'gogogo-common'.");
}
this['gogogo-common'] = function (_, Kotlin, $module$kotlinx_coroutines_core, $module$kotlinx_serialization_runtime_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var ensureNotNull = Kotlin.ensureNotNull;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Triple = Kotlin.kotlin.Triple;
  var Unit = Kotlin.kotlin.Unit;
  var sequence = Kotlin.kotlin.sequences.sequence_o0x0bg$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var equals = Kotlin.equals;
  var kotlin_js_internal_FloatCompanionObject = Kotlin.kotlin.js.internal.FloatCompanionObject;
  var Random = Kotlin.kotlin.random.Random;
  var max = Kotlin.kotlin.collections.max_lvsncp$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var min = Kotlin.kotlin.collections.min_lvsncp$;
  var throwUPAE = Kotlin.throwUPAE;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var getCallableRef = Kotlin.getCallableRef;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_pda6u4$;
  var CancellationException = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var cancelAndJoin = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancelAndJoin_5dx9u$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var SerialClassDescImpl = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.SerialClassDescImpl;
  var NullableSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer;
  var UnknownFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException;
  var KSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.KSerializer;
  var MissingFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var EnumSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.EnumSerializer;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var throwCCE = Kotlin.throwCCE;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var ReferenceArraySerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ReferenceArraySerializer;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var JSON_0 = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.json.JSON;
  ControlledGame.prototype = Object.create(Game.prototype);
  ControlledGame.prototype.constructor = ControlledGame;
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
    this.name_p9lk9c$_0 = 'AI';
    this.strat_0 = stratPerPlayer(hard, hard);
  }
  Object.defineProperty(AI.prototype, 'name', {
    get: function () {
      return this.name_p9lk9c$_0;
    }
  });
  AI.prototype.getMove_jr41iw$ = function (lastMove, state, fromSelectCallback, continuation) {
    var f = debugBestMove(this.strat_0, state.playersTurn, state);
    var from = f.component1()
    , to = f.component2();
    return new Move(from, to);
  };
  AI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AI',
    interfaces: [PlayerController]
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
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
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
    this.local$$receiver = void 0;
    this.local$tmp$ = void 0;
    this.local$element = void 0;
    this.local$tmp$_0 = void 0;
    this.local$this$findAllMoves_0 = void 0;
    this.local$from = void 0;
    this.local$$receiver_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$element_0 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$$receiver_1 = $receiver_0;
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
            this.local$$receiver = this.local$this$findAllMoves.grid;
            this.local$tmp$ = until(0, this.local$$receiver.height).iterator();
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
            this.local$tmp$_0 = until(0, this.local$$receiver.width).iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$_0.hasNext()) {
              this.state_0 = 11;
              continue;
            }

            var element = this.local$tmp$_0.next();
            this.local$this$findAllMoves_0 = this.local$this$findAllMoves;
            this.local$$receiver.get_vux9f0$(element, this.local$element);
            this.local$from = new Point(element, this.local$element);
            if (this.local$this$findAllMoves_0.isEligibleToMove_bk5ui5$(this.local$from)) {
              this.local$$receiver_0 = this.local$this$findAllMoves_0.grid;
              this.local$tmp$_1 = until(0, this.local$$receiver_0.height).iterator();
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
            this.local$tmp$_2 = until(0, this.local$$receiver_0.width).iterator();
            this.state_0 = 5;
            continue;
          case 5:
            if (!this.local$tmp$_2.hasNext()) {
              this.state_0 = 8;
              continue;
            }

            var element_0 = this.local$tmp$_2.next();
            this.local$$receiver_0.get_vux9f0$(element_0, this.local$element_0);
            var to = new Point(element_0, this.local$element_0);
            var next = this.local$this$findAllMoves_0.move_56t7qy$(this.local$from, to);
            if (next != null) {
              this.state_0 = 6;
              this.result_0 = this.local$$receiver_1.yield_11rb$(new Triple(this.local$from, to, next), this);
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
  function ControlledGame(redController, blueController, uiHook) {
    Game.call(this);
    this.redController_0 = redController;
    this.blueController_0 = blueController;
    this.uiHook_0 = uiHook;
    this.scope_8u5p2v$_0 = this.scope_8u5p2v$_0;
    this.moveJob_0 = null;
    this.lastMove = null;
  }
  Object.defineProperty(ControlledGame.prototype, 'scope_0', {
    get: function () {
      if (this.scope_8u5p2v$_0 == null)
        return throwUPAE('scope');
      return this.scope_8u5p2v$_0;
    },
    set: function (scope) {
      this.scope_8u5p2v$_0 = scope;
    }
  });
  Object.defineProperty(ControlledGame.prototype, 'activeController', {
    get: function () {
      switch (this.player.name) {
        case 'Blue':
          return this.blueController_0;
        case 'Red':
          return this.redController_0;
        default:return Kotlin.noWhenBranchMatched();
      }
    }
  });
  function ControlledGame$doMove$lambda(this$ControlledGame_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$ControlledGame$doMove$lambda(this$ControlledGame_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ControlledGame$doMove$lambda(this$ControlledGame_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ControlledGame = this$ControlledGame_0;
  }
  Coroutine$ControlledGame$doMove$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ControlledGame$doMove$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ControlledGame$doMove$lambda.prototype.constructor = Coroutine$ControlledGame$doMove$lambda;
  Coroutine$ControlledGame$doMove$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ControlledGame.activeController.getMove_jr41iw$(this.local$this$ControlledGame.lastMove, this.local$this$ControlledGame.state, getCallableRef('onSelect', function ($receiver, point) {
              return $receiver.onSelect_37gzp0$(point), Unit;
            }.bind(null, this.local$this$ControlledGame.uiHook_0)), this);
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
  ControlledGame.prototype.doMove_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$doMove_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$doMove_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$move = void 0;
  }
  Coroutine$doMove_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$doMove_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$doMove_0.prototype.constructor = Coroutine$doMove_0;
  Coroutine$doMove_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$move = null;
            this.state_0 = 1;
            continue;
          case 1:
            if (this.local$move != null) {
              this.state_0 = 6;
              continue;
            }

            this.$this.uiHook_0.onSelect_37gzp0$(null);
            var job = Job();
            this.$this.moveJob_0 = job;
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = async(this.$this.scope_0, job, void 0, ControlledGame$doMove$lambda(this.$this)).await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$move = this.result_0;
            this.exceptionState_0 = 5;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 5;
            var _ = this.exception_0;
            if (!Kotlin.isType(_, CancellationException))
              throw _;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            throw this.exception_0;
          case 6:
            var moved = this.$this.move_56t7qy$(this.local$move.from, this.local$move.to);
            if (!moved)
              throw IllegalStateException_init('move was not valid');
            this.$this.lastMove = this.local$move;
            this.state_0 = 7;
            this.result_0 = this.$this.uiHook_0.onMove_47hwoe$(this.local$move, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            return !this.$this.isOver();
          default:this.state_0 = 5;
            throw new Error('State Machine Unreachable execution');
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
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
  ControlledGame.prototype.gameLoop_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$gameLoop_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$gameLoop_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$gameLoop_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$gameLoop_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$gameLoop_0.prototype.constructor = Coroutine$gameLoop_0;
  Coroutine$gameLoop_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.doMove_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (!this.result_0) {
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 2;
            continue;
          case 5:
            this.$this.uiHook_0.onGameEnd();
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
  function ControlledGame$start$lambda(this$ControlledGame_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$ControlledGame$start$lambda(this$ControlledGame_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ControlledGame$start$lambda(this$ControlledGame_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ControlledGame = this$ControlledGame_0;
  }
  Coroutine$ControlledGame$start$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ControlledGame$start$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ControlledGame$start$lambda.prototype.constructor = Coroutine$ControlledGame$start$lambda;
  Coroutine$ControlledGame$start$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$ControlledGame.gameLoop_0(this);
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
  ControlledGame.prototype.start_e9pf1l$ = function ($receiver) {
    this.scope_0 = $receiver;
    launch($receiver, void 0, void 0, ControlledGame$start$lambda(this));
  };
  ControlledGame.prototype.switchRed_wszlfq$ = function (controller) {
    println('Switching red to ' + controller.name);
    this.redController_0 = controller;
    this.resetMoveAwait_0();
  };
  ControlledGame.prototype.switchBlue_wszlfq$ = function (controller) {
    println('Switching blue to ' + controller.name);
    this.blueController_0 = controller;
    this.resetMoveAwait_0();
  };
  function ControlledGame$resetMoveAwait$lambda(this$ControlledGame_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$ControlledGame$resetMoveAwait$lambda(this$ControlledGame_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ControlledGame$resetMoveAwait$lambda(this$ControlledGame_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ControlledGame = this$ControlledGame_0;
  }
  Coroutine$ControlledGame$resetMoveAwait$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ControlledGame$resetMoveAwait$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ControlledGame$resetMoveAwait$lambda.prototype.constructor = Coroutine$ControlledGame$resetMoveAwait$lambda;
  Coroutine$ControlledGame$resetMoveAwait$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.local$this$ControlledGame.moveJob_0) != null) {
              this.state_0 = 2;
              this.result_0 = cancelAndJoin(tmp$, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
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
  ControlledGame.prototype.resetMoveAwait_0 = function () {
    launch(this.scope_0, void 0, void 0, ControlledGame$resetMoveAwait$lambda(this));
  };
  ControlledGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ControlledGame',
    interfaces: [Game]
  };
  function UIHook() {
  }
  UIHook.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UIHook',
    interfaces: []
  };
  var GAME_WIDTH;
  var GAME_HEIGHT;
  function Point(x, y) {
    Point$Companion_getInstance();
    this.x = x;
    this.y = y;
  }
  function Point$Companion() {
    Point$Companion_instance = this;
  }
  Point$Companion.prototype.serializer = function () {
    return Point$$serializer_getInstance();
  };
  Point$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Point$Companion_instance = null;
  function Point$Companion_getInstance() {
    if (Point$Companion_instance === null) {
      new Point$Companion();
    }
    return Point$Companion_instance;
  }
  function Point$$serializer() {
    this.descriptor_xiv488$_0 = new SerialClassDescImpl('de.earley.gogogo.game.Point');
    this.descriptor.addElement_ivxn3r$('x');
    this.descriptor.addElement_ivxn3r$('y');
    Point$$serializer_instance = this;
  }
  Object.defineProperty(Point$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_xiv488$_0;
    }
  });
  Point$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeIntElement_4wpqag$(this.descriptor, 0, obj.x);
    output.encodeIntElement_4wpqag$(this.descriptor, 1, obj.y);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Point$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = input_0.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeIntElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeIntElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Point_init(bitMask0, local0, local1, null);
  };
  Point$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var Point$$serializer_instance = null;
  function Point$$serializer_getInstance() {
    if (Point$$serializer_instance === null) {
      new Point$$serializer();
    }
    return Point$$serializer_instance;
  }
  function Point_init(seen, x, y, serializationConstructorMarker) {
    var $this = Object.create(Point.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('x');
    else
      $this.x = x;
    if ((seen & 2) === 0)
      throw new MissingFieldException('y');
    else
      $this.y = y;
    return $this;
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
  function Game() {
    this.states_r7t5l$_0 = mutableListOf([new State()]);
  }
  Object.defineProperty(Game.prototype, 'state', {
    get: function () {
      return last(this.states_r7t5l$_0);
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
    return this.states_r7t5l$_0.size > 1;
  };
  Game.prototype.undo = function () {
    if (!this.canUndo())
      return;
    this.states_r7t5l$_0.removeAt_za3lpa$(get_lastIndex(this.states_r7t5l$_0));
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
    this.states_r7t5l$_0.add_11rb$(next);
    return true;
  };
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  var standardStartGrid;
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
  function Move(from, to) {
    Move$Companion_getInstance();
    this.from = from;
    this.to = to;
  }
  function Move$Companion() {
    Move$Companion_instance = this;
  }
  Move$Companion.prototype.serializer = function () {
    return Move$$serializer_getInstance();
  };
  Move$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Move$Companion_instance = null;
  function Move$Companion_getInstance() {
    if (Move$Companion_instance === null) {
      new Move$Companion();
    }
    return Move$Companion_instance;
  }
  function Move$$serializer() {
    this.descriptor_oi8hql$_0 = new SerialClassDescImpl('de.earley.gogogo.game.Move');
    this.descriptor.addElement_ivxn3r$('from');
    this.descriptor.addElement_ivxn3r$('to');
    Move$$serializer_instance = this;
  }
  Object.defineProperty(Move$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_oi8hql$_0;
    }
  });
  Move$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, Point$$serializer_getInstance(), obj.from);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, Point$$serializer_getInstance(), obj.to);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Move$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = input_0.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, Point$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, Point$$serializer_getInstance(), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 1, Point$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 1, Point$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return Move_init(bitMask0, local0, local1, null);
  };
  Move$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var Move$$serializer_instance = null;
  function Move$$serializer_getInstance() {
    if (Move$$serializer_instance === null) {
      new Move$$serializer();
    }
    return Move$$serializer_instance;
  }
  function Move_init(seen, from, to, serializationConstructorMarker) {
    var $this = Object.create(Move.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('from');
    else
      $this.from = from;
    if ((seen & 2) === 0)
      throw new MissingFieldException('to');
    else
      $this.to = to;
    return $this;
  }
  Move.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Move',
    interfaces: []
  };
  Move.prototype.component1 = function () {
    return this.from;
  };
  Move.prototype.component2 = function () {
    return this.to;
  };
  Move.prototype.copy_56t7qy$ = function (from, to) {
    return new Move(from === void 0 ? this.from : from, to === void 0 ? this.to : to);
  };
  Move.prototype.toString = function () {
    return 'Move(from=' + Kotlin.toString(this.from) + (', to=' + Kotlin.toString(this.to)) + ')';
  };
  Move.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    return result;
  };
  Move.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to)))));
  };
  function PlayerController() {
  }
  PlayerController.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PlayerController',
    interfaces: []
  };
  function State(playersTurn, lastPushed, grid) {
    State$Companion_getInstance();
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
  State.prototype.move_56t7qy$ = function (from, to) {
    if (!this.canMoveTo_0(from, to))
      return null;
    var next_0 = nextOver(from, to);
    var pushing = get_0(this.grid, to) != null;
    var pushed = pushing ? next_0 : null;
    var $receiver = this.grid;
    var $receiver_0 = new Alterations();
    if (pushing)
      $receiver_0.replace_jprfea$(next_0, get_0(this.grid, to));
    $receiver_0.replace_jprfea$(to, get_0(this.grid, from));
    $receiver_0.replace_jprfea$(from, null);
    var width = $receiver.width;
    var height = $receiver.height;
    var $receiver_1 = until(0, height);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver_1.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_2 = until(0, width);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
      var tmp$_0;
      tmp$_0 = $receiver_2.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1 = destination_0.add_11rb$;
        var p = new Point(item, element);
        tmp$_1.call(destination_0, $receiver_0.ops.containsKey_11rb$(p) ? $receiver_0.ops.get_11rb$(p) : $receiver.get_vux9f0$(item, element));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    var newGrid = new GenericGrid(width, height, copyToArray(destination));
    return new State(next(this.playersTurn), pushed, toGameGrid(newGrid));
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
    var $receiver = this.grid;
    var tmp$;
    tmp$ = until(0, $receiver.height).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      tmp$_0 = until(0, $receiver.width).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var player = $receiver.get_vux9f0$(element_0, element);
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
  function State$Companion() {
    State$Companion_instance = this;
  }
  State$Companion.prototype.serializer = function () {
    return State$$serializer_getInstance();
  };
  State$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var State$Companion_instance = null;
  function State$Companion_getInstance() {
    if (State$Companion_instance === null) {
      new State$Companion();
    }
    return State$Companion_instance;
  }
  function State$$serializer() {
    this.descriptor_fsmc49$_0 = new SerialClassDescImpl('de.earley.gogogo.game.State');
    this.descriptor.addElement_ivxn3r$('playersTurn');
    this.descriptor.addElement_ivxn3r$('lastPushed');
    this.descriptor.addElement_ivxn3r$('grid');
    this.descriptor.addElement_ivxn3r$('victor');
    State$$serializer_instance = this;
  }
  Object.defineProperty(State$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_fsmc49$_0;
    }
  });
  State$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new EnumSerializer(Kotlin.getKClass(Player)), obj.playersTurn);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 1, Point$$serializer_getInstance(), obj.lastPushed);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, GameGrid$$serializer_getInstance(), obj.grid);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 3, new EnumSerializer(Kotlin.getKClass(Player)), obj.victor);
    output.endStructure_qatsm0$(this.descriptor);
  };
  State$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2
    , local3;
    var input = input_0.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new EnumSerializer(Kotlin.getKClass(Player))) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new EnumSerializer(Kotlin.getKClass(Player)), local0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = (bitMask0 & 2) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 1, Point$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 1, Point$$serializer_getInstance(), local1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, GameGrid$$serializer_getInstance()) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, GameGrid$$serializer_getInstance(), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 3, new EnumSerializer(Kotlin.getKClass(Player))) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 3, new EnumSerializer(Kotlin.getKClass(Player)), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return State_init(bitMask0, local0, local1, local2, local3, null);
  };
  State$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var State$$serializer_instance = null;
  function State$$serializer_getInstance() {
    if (State$$serializer_instance === null) {
      new State$$serializer();
    }
    return State$$serializer_instance;
  }
  function State_init(seen, playersTurn, lastPushed, grid, victor, serializationConstructorMarker) {
    var $this = Object.create(State.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('playersTurn');
    else
      $this.playersTurn = playersTurn;
    if ((seen & 2) === 0)
      throw new MissingFieldException('lastPushed');
    else
      $this.lastPushed = lastPushed;
    if ((seen & 4) === 0)
      throw new MissingFieldException('grid');
    else
      $this.grid = grid;
    if ((seen & 8) === 0)
      throw new MissingFieldException('victor');
    else
      $this.victor = victor;
    return $this;
  }
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
  State.prototype.copy_i0rztd$ = function (playersTurn, lastPushed, grid) {
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
  function GameGrid(width, height, elems) {
    GameGrid$Companion_getInstance();
    this.width_8z46m7$_0 = width;
    this.height_es4e7s$_0 = height;
    this.elems_hyvcx$_0 = elems;
  }
  Object.defineProperty(GameGrid.prototype, 'width', {
    get: function () {
      return this.width_8z46m7$_0;
    }
  });
  Object.defineProperty(GameGrid.prototype, 'height', {
    get: function () {
      return this.height_es4e7s$_0;
    }
  });
  Object.defineProperty(GameGrid.prototype, 'elems', {
    get: function () {
      return this.elems_hyvcx$_0;
    }
  });
  GameGrid.prototype.get_vux9f0$ = function (x, y) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.width - 1 | 0;
    if (0 <= x && x <= tmp$) {
      tmp$_0 = this.height - 1 | 0;
      tmp$_1 = (0 <= y && y <= tmp$_0);
    }
     else
      tmp$_1 = false;
    return tmp$_1 ? this.elems[Kotlin.imul(y, this.width) + x | 0] : null;
  };
  GameGrid.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, GameGrid) ? tmp$_0 : throwCCE();
    if (this.width !== other.width)
      return false;
    if (this.height !== other.height)
      return false;
    if (!contentEquals(this.elems, other.elems))
      return false;
    return true;
  };
  GameGrid.prototype.hashCode = function () {
    var result = this.width;
    result = (31 * result | 0) + this.height | 0;
    result = (31 * result | 0) + contentHashCode(this.elems) | 0;
    return result;
  };
  function GameGrid$Companion() {
    GameGrid$Companion_instance = this;
  }
  GameGrid$Companion.prototype.serializer = function () {
    return GameGrid$$serializer_getInstance();
  };
  GameGrid$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameGrid$Companion_instance = null;
  function GameGrid$Companion_getInstance() {
    if (GameGrid$Companion_instance === null) {
      new GameGrid$Companion();
    }
    return GameGrid$Companion_instance;
  }
  function GameGrid$$serializer() {
    this.descriptor_s2imx4$_0 = new SerialClassDescImpl('de.earley.gogogo.game.grid.GameGrid');
    this.descriptor.addElement_ivxn3r$('width');
    this.descriptor.addElement_ivxn3r$('height');
    this.descriptor.addElement_ivxn3r$('elems');
    GameGrid$$serializer_instance = this;
  }
  Object.defineProperty(GameGrid$$serializer.prototype, 'descriptor', {
    get: function () {
      return this.descriptor_s2imx4$_0;
    }
  });
  GameGrid$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeIntElement_4wpqag$(this.descriptor, 0, obj.width);
    output.encodeIntElement_4wpqag$(this.descriptor, 1, obj.height);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, new ReferenceArraySerializer(Kotlin.getKClass(Player), new NullableSerializer(new EnumSerializer(Kotlin.getKClass(Player)))), obj.elems);
    output.endStructure_qatsm0$(this.descriptor);
  };
  GameGrid$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0
    , local1
    , local2;
    var input = input_0.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = input.decodeIntElement_3zr2iy$(this.descriptor, 0);
          bitMask0 |= 1;
          if (!readAll)
            break;
        case 1:
          local1 = input.decodeIntElement_3zr2iy$(this.descriptor, 1);
          bitMask0 |= 2;
          if (!readAll)
            break;
        case 2:
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, new ReferenceArraySerializer(Kotlin.getKClass(Player), new NullableSerializer(new EnumSerializer(Kotlin.getKClass(Player))))) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, new ReferenceArraySerializer(Kotlin.getKClass(Player), new NullableSerializer(new EnumSerializer(Kotlin.getKClass(Player)))), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return GameGrid_init(bitMask0, local0, local1, local2, null);
  };
  GameGrid$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [KSerializer]
  };
  var GameGrid$$serializer_instance = null;
  function GameGrid$$serializer_getInstance() {
    if (GameGrid$$serializer_instance === null) {
      new GameGrid$$serializer();
    }
    return GameGrid$$serializer_instance;
  }
  function GameGrid_init(seen, width, height, elems, serializationConstructorMarker) {
    var $this = Object.create(GameGrid.prototype);
    if ((seen & 1) === 0)
      throw new MissingFieldException('width');
    else
      $this.width_8z46m7$_0 = width;
    if ((seen & 2) === 0)
      throw new MissingFieldException('height');
    else
      $this.height_es4e7s$_0 = height;
    if ((seen & 4) === 0)
      throw new MissingFieldException('elems');
    else
      $this.elems_hyvcx$_0 = elems;
    return $this;
  }
  GameGrid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameGrid',
    interfaces: [Grid]
  };
  function toGameGrid($receiver) {
    return new GameGrid($receiver.width, $receiver.height, $receiver.elems);
  }
  function GenericGrid(width, height, elems) {
    this.width_p6147k$_0 = width;
    this.height_7qzw7d$_0 = height;
    this.elems_xn6fgu$_0 = elems;
  }
  Object.defineProperty(GenericGrid.prototype, 'width', {
    get: function () {
      return this.width_p6147k$_0;
    }
  });
  Object.defineProperty(GenericGrid.prototype, 'height', {
    get: function () {
      return this.height_7qzw7d$_0;
    }
  });
  Object.defineProperty(GenericGrid.prototype, 'elems', {
    get: function () {
      return this.elems_xn6fgu$_0;
    }
  });
  GenericGrid.prototype.get_vux9f0$ = function (x, y) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.width - 1 | 0;
    if (0 <= x && x <= tmp$) {
      tmp$_0 = this.height - 1 | 0;
      tmp$_1 = (0 <= y && y <= tmp$_0);
    }
     else
      tmp$_1 = false;
    return tmp$_1 ? this.elems[Kotlin.imul(y, this.width) + x | 0] : null;
  };
  GenericGrid.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, GenericGrid) ? tmp$_0 : throwCCE();
    if (this.width !== other.width)
      return false;
    if (this.height !== other.height)
      return false;
    if (!contentEquals(this.elems, other.elems))
      return false;
    return true;
  };
  GenericGrid.prototype.hashCode = function () {
    var result = this.width;
    result = (31 * result | 0) + this.height | 0;
    result = (31 * result | 0) + contentHashCode(this.elems) | 0;
    return result;
  };
  GenericGrid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GenericGrid',
    interfaces: [Grid]
  };
  GenericGrid.prototype.component1 = function () {
    return this.width;
  };
  GenericGrid.prototype.component2 = function () {
    return this.height;
  };
  GenericGrid.prototype.component3 = function () {
    return this.elems;
  };
  GenericGrid.prototype.copy_ohzztl$ = function (width, height, elems) {
    return new GenericGrid(width === void 0 ? this.width : width, height === void 0 ? this.height : height, elems === void 0 ? this.elems : elems);
  };
  GenericGrid.prototype.toString = function () {
    return 'GenericGrid(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + (', elems=' + Kotlin.toString(this.elems)) + ')';
  };
  function Grid() {
    Grid$Companion_getInstance();
  }
  function Grid$Companion() {
    Grid$Companion_instance = this;
  }
  Grid$Companion.prototype.create_6qkxfg$ = defineInlineFunction('gogogo-common.de.earley.gogogo.game.grid.Grid.Companion.create_6qkxfg$', wrapFunction(function () {
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    var wrapFunction = Kotlin.wrapFunction;
    var GenericGrid_init = _.de.earley.gogogo.game.grid.GenericGrid;
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
    return function (T_0, isT, width, height, init) {
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
          destination_0.add_11rb$(init(item, element));
        }
        var list = destination_0;
        addAll(destination, list);
      }
      return new GenericGrid_init(width, height, copyToArray(destination));
    };
  }));
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
  Grid.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Grid',
    interfaces: []
  };
  function get_0($receiver, p) {
    return $receiver.get_vux9f0$(p.x, p.y);
  }
  var forEach = defineInlineFunction('gogogo-common.de.earley.gogogo.game.grid.forEach_mx7rez$', wrapFunction(function () {
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    return function ($receiver, action) {
      var tmp$;
      tmp$ = until(0, $receiver.height).iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        tmp$_0 = until(0, $receiver.width).iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          action(element_0, element, $receiver.get_vux9f0$(element_0, element));
        }
      }
    };
  }));
  var copy = defineInlineFunction('gogogo-common.de.earley.gogogo.game.grid.copy_xd445k$', wrapFunction(function () {
    var Alterations_init = _.de.earley.gogogo.game.grid.Alterations;
    var Point_init = _.de.earley.gogogo.game.Point;
    var wrapFunction = Kotlin.wrapFunction;
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    var GenericGrid_init = _.de.earley.gogogo.game.grid.GenericGrid;
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
    return function (T_0, isT, $receiver, alterations) {
      var $receiver_0 = new Alterations_init();
      alterations($receiver_0);
      var width = $receiver.width;
      var height = $receiver.height;
      var $receiver_1 = until(0, height);
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver_1.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver_2 = until(0, width);
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
        var tmp$_0;
        tmp$_0 = $receiver_2.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          var tmp$_1 = destination_0.add_11rb$;
          var p = new Point_init(item, element);
          tmp$_1.call(destination_0, $receiver_0.ops.containsKey_11rb$(p) ? $receiver_0.ops.get_11rb$(p) : $receiver.get_vux9f0$(item, element));
        }
        var list = destination_0;
        addAll(destination, list);
      }
      return new GenericGrid_init(width, height, copyToArray(destination));
    };
  }));
  function Alterations() {
    this.ops = HashMap_init();
  }
  Alterations.prototype.replace_jprfea$ = function (p, value) {
    this.ops.put_xwzc9p$(p, value);
  };
  Alterations.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Alterations',
    interfaces: []
  };
  var create = defineInlineFunction('gogogo-common.de.earley.gogogo.game.grid.create_7lu0h$', wrapFunction(function () {
    var Point_init = _.de.earley.gogogo.game.Point;
    var wrapFunction = Kotlin.wrapFunction;
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    var GenericGrid_init = _.de.earley.gogogo.game.grid.GenericGrid;
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
    return function (T_0, isT, $receiver, grid) {
      var width = grid.width;
      var height = grid.height;
      var $receiver_0 = until(0, height);
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var $receiver_1 = until(0, width);
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
        var tmp$_0;
        tmp$_0 = $receiver_1.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          var tmp$_1 = destination_0.add_11rb$;
          var p = new Point_init(item, element);
          tmp$_1.call(destination_0, $receiver.ops.containsKey_11rb$(p) ? $receiver.ops.get_11rb$(p) : grid.get_vux9f0$(item, element));
        }
        var list = destination_0;
        addAll(destination, list);
      }
      return new GenericGrid_init(width, height, copyToArray(destination));
    };
  }));
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
  function PlayerInfo(name) {
    this.name = name;
  }
  PlayerInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PlayerInfo',
    interfaces: []
  };
  PlayerInfo.prototype.component1 = function () {
    return this.name;
  };
  PlayerInfo.prototype.copy_61zpoe$ = function (name) {
    return new PlayerInfo(name === void 0 ? this.name : name);
  };
  PlayerInfo.prototype.toString = function () {
    return 'PlayerInfo(name=' + Kotlin.toString(this.name) + ')';
  };
  PlayerInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  PlayerInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function MatchInfo(player, other) {
    this.player = player;
    this.other = other;
  }
  MatchInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MatchInfo',
    interfaces: []
  };
  MatchInfo.prototype.component1 = function () {
    return this.player;
  };
  MatchInfo.prototype.component2 = function () {
    return this.other;
  };
  MatchInfo.prototype.copy_df41ov$ = function (player, other) {
    return new MatchInfo(player === void 0 ? this.player : player, other === void 0 ? this.other : other);
  };
  MatchInfo.prototype.toString = function () {
    return 'MatchInfo(player=' + Kotlin.toString(this.player) + (', other=' + Kotlin.toString(this.other)) + ')';
  };
  MatchInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.player) | 0;
    result = result * 31 + Kotlin.hashCode(this.other) | 0;
    return result;
  };
  MatchInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.player, other.player) && Kotlin.equals(this.other, other.other)))));
  };
  function Messages() {
    Messages_instance = this;
  }
  Messages.prototype.connect_56l50f$ = function (player) {
    return 'CONNECT:' + player.name;
  };
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  Messages.prototype.parseConnect_61zpoe$ = function (msg) {
    var tmp$ = split(msg, Kotlin.charArrayOf(58), void 0, 2);
    var connect = tmp$.get_za3lpa$(0);
    var name = tmp$.get_za3lpa$(1);
    if (!equals(connect, 'CONNECT')) {
      var message = 'Invalid message received';
      throw IllegalArgumentException_init(message.toString());
    }
    return new PlayerInfo(name);
  };
  Messages.prototype.matchStart_df41ov$ = function (player, other) {
    return 'START:' + player + ':' + other.name;
  };
  Messages.prototype.parseMatchStart_61zpoe$ = function (msg) {
    var tmp$ = split(msg, Kotlin.charArrayOf(58), void 0, 3);
    var start = tmp$.get_za3lpa$(0);
    var player = tmp$.get_za3lpa$(1);
    var name = tmp$.get_za3lpa$(2);
    if (!equals(start, 'START')) {
      var message = 'Invalid message received';
      throw IllegalArgumentException_init(message.toString());
    }
    return new MatchInfo(Player$valueOf(player), new PlayerInfo(name));
  };
  Messages.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Messages',
    interfaces: []
  };
  var Messages_instance = null;
  function Messages_getInstance() {
    if (Messages_instance === null) {
      new Messages();
    }
    return Messages_instance;
  }
  function toNetFormat($receiver) {
    return JSON_0.Companion.stringify_tf03ej$(Move$Companion_getInstance().serializer(), $receiver);
  }
  function moveFromNetFormat($receiver) {
    return JSON_0.Companion.parse_awif5v$(Move$Companion_getInstance().serializer(), $receiver);
  }
  var package$de = _.de || (_.de = {});
  var package$earley = package$de.earley || (package$de.earley = {});
  var package$gogogo = package$earley.gogogo || (package$earley.gogogo = {});
  var package$ai = package$gogogo.ai || (package$gogogo.ai = {});
  package$ai.bestMove_rxsk4c$ = bestMove;
  package$ai.debugBestMove_rxsk4c$ = debugBestMove;
  package$ai.AI = AI;
  package$ai.stratPerPlayer_nmhdos$ = stratPerPlayer;
  $$importsForInline$$['gogogo-common'] = _;
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
  package$game.ControlledGame = ControlledGame;
  package$game.UIHook = UIHook;
  Object.defineProperty(package$game, 'GAME_WIDTH', {
    get: function () {
      return GAME_WIDTH;
    }
  });
  Object.defineProperty(package$game, 'GAME_HEIGHT', {
    get: function () {
      return GAME_HEIGHT;
    }
  });
  Object.defineProperty(Point, 'Companion', {
    get: Point$Companion_getInstance
  });
  Object.defineProperty(Point, '$serializer', {
    get: Point$$serializer_getInstance
  });
  package$game.Point = Point;
  package$game.Game = Game;
  Object.defineProperty(package$game, 'standardStartGrid', {
    get: function () {
      return standardStartGrid;
    }
  });
  Object.defineProperty(Player, 'Red', {
    get: Player$Red_getInstance
  });
  Object.defineProperty(Player, 'Blue', {
    get: Player$Blue_getInstance
  });
  package$game.Player = Player;
  package$game.next_txv5hr$ = next;
  Object.defineProperty(Move, 'Companion', {
    get: Move$Companion_getInstance
  });
  Object.defineProperty(Move, '$serializer', {
    get: Move$$serializer_getInstance
  });
  package$game.Move = Move;
  package$game.PlayerController = PlayerController;
  Object.defineProperty(State, 'Companion', {
    get: State$Companion_getInstance
  });
  Object.defineProperty(State, '$serializer', {
    get: State$$serializer_getInstance
  });
  package$game.State = State;
  package$game.nextOver_56t7qy$ = nextOver;
  package$game.isAdjacent_56t7qy$ = isAdjacent;
  Object.defineProperty(GameGrid, 'Companion', {
    get: GameGrid$Companion_getInstance
  });
  Object.defineProperty(GameGrid, '$serializer', {
    get: GameGrid$$serializer_getInstance
  });
  var package$grid = package$game.grid || (package$game.grid = {});
  package$grid.GameGrid = GameGrid;
  package$grid.toGameGrid_s2f0pm$ = toGameGrid;
  package$grid.GenericGrid = GenericGrid;
  Object.defineProperty(Grid, 'Companion', {
    get: Grid$Companion_getInstance
  });
  package$grid.Grid = Grid;
  package$grid.get_qg01xr$ = get_0;
  package$grid.forEach_mx7rez$ = forEach;
  package$grid.Alterations = Alterations;
  package$grid.sumBy_1luysu$ = sumBy;
  var package$net = package$gogogo.net || (package$gogogo.net = {});
  package$net.PlayerInfo = PlayerInfo;
  package$net.MatchInfo = MatchInfo;
  Object.defineProperty(package$net, 'Messages', {
    get: Messages_getInstance
  });
  package$game.toNetFormat_blsywv$ = toNetFormat;
  package$game.moveFromNetFormat_pdl1vz$ = moveFromNetFormat;
  Point$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  Move$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  State$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  GameGrid$$serializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  progressMult = 10;
  pushedPenalty = 6;
  tokenBonus = 10;
  easy = memoize(easy$lambda);
  hard = hard$lambda;
  medium = medium$lambda;
  pruneDiff = 100;
  var Grid$Companion$create$lambda_0 = wrapFunction(function () {
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
  GAME_WIDTH = 6;
  GAME_HEIGHT = 5;
  var $receiver = until(0, 5);
  var destination = ArrayList_init_0();
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var element = tmp$.next();
    var $receiver_0 = until(0, 6);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    loop_label: while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination_0.add_11rb$;
      var init$result;
      init$break: do {
        switch (item) {
          case 0:
            init$result = Player$Blue_getInstance();
            break init$break;
          case 5:
            init$result = Player$Red_getInstance();
            break init$break;
          default:init$result = null;
            break init$break;
        }
      }
       while (false);
      tmp$_1.call(destination_0, init$result);
    }
    var list = destination_0;
    addAll(destination, list);
  }
  standardStartGrid = toGameGrid(new GenericGrid(6, 5, copyToArray(destination)));
  Kotlin.defineModule('gogogo-common', _);
  return _;
}(typeof this['gogogo-common'] === 'undefined' ? {} : this['gogogo-common'], kotlin, this['kotlinx-coroutines-core'], this['kotlinx-serialization-runtime-js']);
