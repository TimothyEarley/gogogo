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
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var Random = Kotlin.kotlin.random.Random;
  var wrapFunction = Kotlin.wrapFunction;
  var equals = Kotlin.equals;
  var getCallableRef = Kotlin.getCallableRef;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Unit = Kotlin.kotlin.Unit;
  var sequence = Kotlin.kotlin.sequences.sequence_o0x0bg$;
  var max = Kotlin.kotlin.sequences.max_gtzq52$;
  var throwUPAE = Kotlin.throwUPAE;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var withContext = $module$kotlinx_coroutines_core.kotlinx.coroutines.withContext_i5cbzn$;
  var CancellationException = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var get_isActive = $module$kotlinx_coroutines_core.kotlinx.coroutines.get_isActive_e9pf1l$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var cancelAndJoin = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancelAndJoin_5dx9u$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var SerialClassDescImpl = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.SerialClassDescImpl;
  var NullableSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.NullableSerializer;
  var UnknownFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.MissingFieldException;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var throwCCE = Kotlin.throwCCE;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var getKClass = Kotlin.getKClass;
  var EnumSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.EnumSerializer;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var toString = Kotlin.toString;
  var toBoxedChar = Kotlin.toBoxedChar;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var ReferenceArraySerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ReferenceArraySerializer;
  var ArrayListSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.ArrayListSerializer;
  var LinkedHashMapSerializer = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.internal.LinkedHashMapSerializer;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var JSON_0 = $module$kotlinx_serialization_runtime_js.kotlinx.serialization.json.JSON;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var unboxChar = Kotlin.unboxChar;
  ControlledGame.prototype = Object.create(Game.prototype);
  ControlledGame.prototype.constructor = ControlledGame;
  Player.prototype = Object.create(Enum.prototype);
  Player.prototype.constructor = Player;
  MoveResult$Success.prototype = Object.create(MoveResult.prototype);
  MoveResult$Success.prototype.constructor = MoveResult$Success;
  MoveResult$Error.prototype = Object.create(MoveResult.prototype);
  MoveResult$Error.prototype.constructor = MoveResult$Error;
  MoveResult$Error$NotPlayersPiece.prototype = Object.create(MoveResult$Error.prototype);
  MoveResult$Error$NotPlayersPiece.prototype.constructor = MoveResult$Error$NotPlayersPiece;
  MoveResult$Error$WasPushed.prototype = Object.create(MoveResult$Error.prototype);
  MoveResult$Error$WasPushed.prototype.constructor = MoveResult$Error$WasPushed;
  MoveResult$Error$NotAdjacent.prototype = Object.create(MoveResult$Error.prototype);
  MoveResult$Error$NotAdjacent.prototype.constructor = MoveResult$Error$NotAdjacent;
  MoveResult$Error$CannotPush.prototype = Object.create(MoveResult$Error.prototype);
  MoveResult$Error$CannotPush.prototype.constructor = MoveResult$Error$CannotPush;
  MoveResult$Error$RepeatedMove.prototype = Object.create(MoveResult$Error.prototype);
  MoveResult$Error$RepeatedMove.prototype.constructor = MoveResult$Error$RepeatedMove;
  MoveResult$Error$CannotMoveOfBoard.prototype = Object.create(MoveResult$Error.prototype);
  MoveResult$Error$CannotMoveOfBoard.prototype.constructor = MoveResult$Error$CannotMoveOfBoard;
  function map$lambda(closure$f, this$map) {
    return function (player, state) {
      return closure$f(player, state, this$map(player, state));
    };
  }
  function map_0($receiver, f) {
    return map$lambda(f, $receiver);
  }
  function MoveToState(move, state) {
    this.move = move;
    this.state = state;
  }
  MoveToState.$metadata$ = {kind: Kind_CLASS, simpleName: 'MoveToState', interfaces: []};
  MoveToState.prototype.component1 = function () {
    return this.move;
  };
  MoveToState.prototype.component2 = function () {
    return this.state;
  };
  MoveToState.prototype.copy_ax3wba$ = function (move, state) {
    return new MoveToState(move === void 0 ? this.move : move, state === void 0 ? this.state : state);
  };
  MoveToState.prototype.toString = function () {
    return 'MoveToState(move=' + Kotlin.toString(this.move) + (', state=' + Kotlin.toString(this.state)) + ')';
  };
  MoveToState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.move) | 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    return result;
  };
  MoveToState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.move, other.move) && Kotlin.equals(this.state, other.state)))));
  };
  function bestMove($receiver, player, state) {
    var tmp$;
    var tmp$_0;
    var $receiver_0 = findAllMoves(state);
    var maxBy$result;
    maxBy$break: do {
      var iterator = $receiver_0.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      var maxValue = $receiver(player, maxElem.state);
      while (iterator.hasNext()) {
        var e = iterator.next();
        var v = $receiver(player, e.state);
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
      maxBy$result = maxElem;
    }
     while (false);
    if ((tmp$ = maxBy$result) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('No valid moves for player ' + player + ' with state=' + debugString(state)).toString());
    }
    return tmp$_0;
  }
  function debugBestMove$lambda(this$debugBestMove, closure$player) {
    return function (it) {
      return to(this$debugBestMove(closure$player, it.state), it);
    };
  }
  function debugBestMove($receiver, player, state) {
    var tmp$;
    var tmp$_0;
    var $receiver_0 = map(findAllMoves(state), debugBestMove$lambda($receiver, player));
    var maxBy$result;
    maxBy$break: do {
      var iterator = $receiver_0.iterator();
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
    if ((tmp$ = maxBy$result) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('No valid moves for player ' + player + ' with state=' + debugString(state)).toString());
    }
    var best = tmp$_0;
    println('Player ' + player + ' thinks the move is worth: ' + best.first + ' points. (easy: ' + easy(player, best.second.state) + ')');
    return best.second;
  }
  function AI(strategy, debug, strategyName) {
    if (debug === void 0)
      debug = true;
    if (strategyName === void 0)
      strategyName = '';
    this.strategy_0 = strategy;
    this.debug_0 = debug;
    this.name_p9lk9c$_0 = 'AI - ' + strategyName;
  }
  Object.defineProperty(AI.prototype, 'name', {get: function () {
    return this.name_p9lk9c$_0;
  }});
  AI.prototype.getMove_jr41iw$ = function (lastMove, state, fromSelectCallback, continuation) {
    var move = (this.debug_0 ? debugBestMove(this.strategy_0, state.playersTurn, state) : bestMove(this.strategy_0, state.playersTurn, state)).component1();
    return move;
  };
  AI.$metadata$ = {kind: Kind_CLASS, simpleName: 'AI', interfaces: [PlayerController]};
  var easy;
  var medium;
  var base;
  function randomBase$lambda(f, f_0, i) {
    return i + Random.Default.nextInt_vux9f0$(-2, 2) | 0;
  }
  var randomBase;
  var hard;
  var superStrategy;
  var extreme;
  var random;
  function Evaluations() {
    Evaluations_instance = this;
    this.progressMult_0 = 1;
    this.pushedPenalty_0 = 1;
    this.tokenBonus_0 = 2;
    this.sumPosition = Evaluations$sumPosition$lambda(this);
    this.sumSquarePosition = Evaluations$sumSquarePosition$lambda(this);
    this.mostForward = Evaluations$mostForward$lambda(this);
  }
  Evaluations.prototype.progress_0 = function (p, width, player) {
    switch (player.name) {
      case 'Red':
        return width - p.x - 1 | 0;
      case 'Blue':
        return p.x;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  Evaluations.prototype.positionalMax_0 = wrapFunction(function () {
    return function (ownPlayer, state, pointsForPosition) {
      var positionalPointSystem_0$result;
      if (equals(state.victor, ownPlayer)) {
        positionalPointSystem_0$result = 2147483647;
      }
       else {
        var opponent = next(ownPlayer);
        var tmp$;
        var max = -2147483648;
        tmp$ = state.grid.getAllFor_11rb$(ownPlayer).iterator();
        while (tmp$.hasNext()) {
          var elem = tmp$.next();
          var value = pointsForPosition(elem, ownPlayer);
          if (value > max)
            max = value;
        }
        var ownPoints = max;
        var tmp$_0;
        var max_0 = -2147483648;
        tmp$_0 = state.grid.getAllFor_11rb$(opponent).iterator();
        while (tmp$_0.hasNext()) {
          var elem_0 = tmp$_0.next();
          var value_0 = pointsForPosition(elem_0, ownPlayer);
          if (value_0 > max_0)
            max_0 = value_0;
        }
        var opponentPoint = max_0;
        positionalPointSystem_0$result = ownPoints - opponentPoint | 0;
      }
      return positionalPointSystem_0$result;
    };
  });
  Evaluations.prototype.positionalSum_0 = wrapFunction(function () {
    return function (ownPlayer, state, pointsForPosition) {
      var positionalPointSystem_0$result;
      if (equals(state.victor, ownPlayer)) {
        positionalPointSystem_0$result = 2147483647;
      }
       else {
        var opponent = next(ownPlayer);
        var tmp$;
        var sum = 0;
        tmp$ = state.grid.getAllFor_11rb$(ownPlayer).iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          sum = sum + pointsForPosition(element, ownPlayer) | 0;
        }
        var ownPoints = sum;
        var tmp$_0;
        var sum_0 = 0;
        tmp$_0 = state.grid.getAllFor_11rb$(opponent).iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          sum_0 = sum_0 + pointsForPosition(element_0, ownPlayer) | 0;
        }
        var opponentPoint = sum_0;
        positionalPointSystem_0$result = ownPoints - opponentPoint | 0;
      }
      return positionalPointSystem_0$result;
    };
  });
  Evaluations.prototype.positionalPointSystem_0 = function (ownPlayer, state, positionalPoints) {
    if (equals(state.victor, ownPlayer))
      return 2147483647;
    else {
      var opponent = next(ownPlayer);
      var ownPoints = positionalPoints(state.grid.getAllFor_11rb$(ownPlayer), ownPlayer);
      var opponentPoint = positionalPoints(state.grid.getAllFor_11rb$(opponent), opponent);
      return ownPoints - opponentPoint | 0;
    }
  };
  Evaluations.prototype.mapMax_0 = function ($receiver, f) {
    var tmp$;
    var max = -2147483648;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var elem = tmp$.next();
      var value = f(elem);
      if (value > max)
        max = value;
    }
    return max;
  };
  function Evaluations$sumPosition$lambda$pointForPosition(closure$state, this$Evaluations) {
    return function (p, player) {
      var progress = 1 * this$Evaluations.progress_0(p, closure$state.grid.width, player) | 0;
      var pushed = equals(closure$state.lastPushed, p) ? 1 : 0;
      return progress + 2 - pushed | 0;
    };
  }
  function Evaluations$sumPosition$lambda(this$Evaluations) {
    return function (ownPlayer, state) {
      var pointForPosition = Evaluations$sumPosition$lambda$pointForPosition(state, this$Evaluations);
      var positionalPointSystem_0$result;
      if (equals(state.victor, ownPlayer)) {
        positionalPointSystem_0$result = 2147483647;
      }
       else {
        var opponent = next(ownPlayer);
        var tmp$;
        var sum = 0;
        tmp$ = state.grid.getAllFor_11rb$(ownPlayer).iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          sum = sum + pointForPosition(element, ownPlayer) | 0;
        }
        var ownPoints = sum;
        var tmp$_0;
        var sum_0 = 0;
        tmp$_0 = state.grid.getAllFor_11rb$(opponent).iterator();
        while (tmp$_0.hasNext()) {
          var element_0 = tmp$_0.next();
          sum_0 = sum_0 + pointForPosition(element_0, ownPlayer) | 0;
        }
        var opponentPoint = sum_0;
        positionalPointSystem_0$result = ownPoints - opponentPoint | 0;
      }
      return positionalPointSystem_0$result;
    };
  }
  function Evaluations$sumSquarePosition$lambda(this$Evaluations) {
    return function (ownPlayer, state) {
      var positionalPointSystem_0$result;
      if (equals(state.victor, ownPlayer)) {
        positionalPointSystem_0$result = 2147483647;
      }
       else {
        var opponent = next(ownPlayer);
        var tmp$;
        var sum = 0;
        tmp$ = state.grid.getAllFor_11rb$(ownPlayer).iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          var tmp$_0 = sum;
          var it = this$Evaluations.progress_0(element, state.grid.width, ownPlayer);
          sum = tmp$_0 + Kotlin.imul(it, it) | 0;
        }
        var ownPoints = sum;
        var tmp$_1;
        var sum_0 = 0;
        tmp$_1 = state.grid.getAllFor_11rb$(opponent).iterator();
        while (tmp$_1.hasNext()) {
          var element_0 = tmp$_1.next();
          var tmp$_2 = sum_0;
          var it_0 = this$Evaluations.progress_0(element_0, state.grid.width, ownPlayer);
          sum_0 = tmp$_2 + Kotlin.imul(it_0, it_0) | 0;
        }
        var opponentPoint = sum_0;
        positionalPointSystem_0$result = ownPoints - opponentPoint | 0;
      }
      return positionalPointSystem_0$result;
    };
  }
  function Evaluations$mostForward$lambda(this$Evaluations) {
    return function (ownPlayer, state) {
      var positionalPointSystem_0$result;
      if (equals(state.victor, ownPlayer)) {
        positionalPointSystem_0$result = 2147483647;
      }
       else {
        var opponent = next(ownPlayer);
        var tmp$;
        var max = -2147483648;
        tmp$ = state.grid.getAllFor_11rb$(ownPlayer).iterator();
        while (tmp$.hasNext()) {
          var elem = tmp$.next();
          var value = this$Evaluations.progress_0(elem, state.grid.width, ownPlayer);
          if (value > max)
            max = value;
        }
        var ownPoints = max;
        var tmp$_0;
        var max_0 = -2147483648;
        tmp$_0 = state.grid.getAllFor_11rb$(opponent).iterator();
        while (tmp$_0.hasNext()) {
          var elem_0 = tmp$_0.next();
          var value_0 = this$Evaluations.progress_0(elem_0, state.grid.width, ownPlayer);
          if (value_0 > max_0)
            max_0 = value_0;
        }
        var opponentPoint = max_0;
        positionalPointSystem_0$result = ownPoints - opponentPoint | 0;
      }
      return positionalPointSystem_0$result;
    };
  }
  Evaluations.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Evaluations', interfaces: []};
  var Evaluations_instance = null;
  function Evaluations_getInstance() {
    if (Evaluations_instance === null) {
      new Evaluations();
    }
    return Evaluations_instance;
  }
  function findAllMoves$lambda$tryMove(this$findAllMoves) {
    return function (from, to) {
      var next = this$findAllMoves.move_56t7qy$(from, to);
      return Kotlin.isType(next, MoveResult$Success) ? new MoveToState(new Move(from, to), next.state) : null;
    };
  }
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function Coroutine$findAllMoves$lambda(this$findAllMoves_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$findAllMoves = this$findAllMoves_0;
    this.local$tryMove = void 0;
    this.local$tmp$ = void 0;
    this.local$element = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$findAllMoves$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$findAllMoves$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$findAllMoves$lambda.prototype.constructor = Coroutine$findAllMoves$lambda;
  Coroutine$findAllMoves$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tryMove = findAllMoves$lambda$tryMove(this.local$this$findAllMoves);
            var $receiver = this.local$this$findAllMoves.grid.getAllFor_11rb$(this.local$this$findAllMoves.playersTurn);
            var destination = ArrayList_init_0();
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              if (this.local$this$findAllMoves.isEligibleToMove_bk5ui5$(element))
                destination.add_11rb$(element);
            }

            this.local$tmp$ = destination.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 11;
              continue;
            }

            this.local$element = this.local$tmp$.next();
            var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
            if ((tmp$_0 = this.local$tryMove(this.local$element, this.local$element.left())) != null) {
              this.state_0 = 3;
              this.result_0 = this.local$$receiver.yield_11rb$(tmp$_0, this);
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
            if ((tmp$_1 = this.local$tryMove(this.local$element, this.local$element.right())) != null) {
              this.state_0 = 5;
              this.result_0 = this.local$$receiver.yield_11rb$(tmp$_1, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            if ((tmp$_2 = this.local$tryMove(this.local$element, this.local$element.up())) != null) {
              this.state_0 = 7;
              this.result_0 = this.local$$receiver.yield_11rb$(tmp$_2, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 8;
              continue;
            }

          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            if ((tmp$_3 = this.local$tryMove(this.local$element, this.local$element.down())) != null) {
              this.state_0 = 9;
              this.result_0 = this.local$$receiver.yield_11rb$(tmp$_3, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 10;
              continue;
            }

          case 9:
            this.state_0 = 10;
            continue;
          case 10:
            this.state_0 = 2;
            continue;
          case 11:
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
  function findAllMoves$lambda(this$findAllMoves_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$findAllMoves$lambda(this$findAllMoves_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function findAllMoves($receiver) {
    return sequence(findAllMoves$lambda($receiver));
  }
  function recurseOnce$lambda(closure$baseStrategy) {
    return function (ownPlayer, state) {
      if (equals(state.victor, ownPlayer))
        return 2147483647;
      else {
        var opponentMove = bestMove(closure$baseStrategy, next(ownPlayer), state);
        return closure$baseStrategy(ownPlayer, opponentMove.state);
      }
    };
  }
  function recurseOnce(baseStrategy) {
    return recurseOnce$lambda(baseStrategy);
  }
  function treeSearchStrategy$lambda(closure$level, closure$baseStrategy, closure$pruning, closure$pruneLevelMax, closure$pruneLevelMin) {
    return function (player, state) {
      return treeSearch(player, state, closure$level, closure$baseStrategy, closure$pruning, closure$pruneLevelMax, closure$pruneLevelMin);
    };
  }
  function treeSearchStrategy(level, baseStrategy, pruning, pruneLevelMax, pruneLevelMin) {
    if (pruneLevelMax === void 0)
      pruneLevelMax = 0;
    if (pruneLevelMin === void 0)
      pruneLevelMin = -pruneLevelMax | 0;
    return treeSearchStrategy$lambda(level, baseStrategy, pruning, pruneLevelMax, pruneLevelMin);
  }
  function treeSearch$lambda(closure$player, closure$level, closure$baseStrategy, closure$pruning, closure$pruneLevelMax, closure$pruneLevelMin) {
    return function (it) {
      return treeSearch(next(closure$player), it.state, closure$level - 1 | 0, closure$baseStrategy, closure$pruning, closure$pruneLevelMax, closure$pruneLevelMin);
    };
  }
  function treeSearch(player, state, level, baseStrategy, pruning, pruneLevelMax, pruneLevelMin) {
    var tmp$, tmp$_0, tmp$_1;
    if (level === 0)
      return baseStrategy(player, state);
    if (state.victor != null)
      return equals(player, state.victor) ? 2147483647 : -2147483648;
    if (pruning) {
      var currentPositionEvaluation = baseStrategy(player, state);
      if (currentPositionEvaluation < pruneLevelMin)
        return currentPositionEvaluation;
      if (currentPositionEvaluation > pruneLevelMax)
        return currentPositionEvaluation;
    }
    var opponentMoveScores = map(findAllMoves(state), treeSearch$lambda(player, level, baseStrategy, pruning, pruneLevelMax, pruneLevelMin));
    if (pruning) {
      tmp$_1 = (tmp$ = maxWithPruning(opponentMoveScores, pruneLevelMax)) != null ? tmp$ : 0;
    }
     else {
      tmp$_1 = (tmp$_0 = max(opponentMoveScores)) != null ? tmp$_0 : 0;
    }
    return -tmp$_1 | 0;
  }
  function maxWithPruning($receiver, pruneLevel) {
    var iterator = $receiver.iterator();
    if (!iterator.hasNext())
      return null;
    var max = iterator.next();
    while (iterator.hasNext()) {
      var e = iterator.next();
      if (e > pruneLevel)
        return e;
      if (max < e)
        max = e;
    }
    return max;
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
  Object.defineProperty(ControlledGame.prototype, 'scope_0', {get: function () {
    if (this.scope_8u5p2v$_0 == null)
      return throwUPAE('scope');
    return this.scope_8u5p2v$_0;
  }, set: function (scope) {
    this.scope_8u5p2v$_0 = scope;
  }});
  Object.defineProperty(ControlledGame.prototype, 'activeController', {get: function () {
    switch (this.player.name) {
      case 'Blue':
        return this.blueController_0;
      case 'Red':
        return this.redController_0;
      default:return Kotlin.noWhenBranchMatched();
    }
  }});
  function Coroutine$ControlledGame$doMove$lambda(this$ControlledGame_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ControlledGame = this$ControlledGame_0;
  }
  Coroutine$ControlledGame$doMove$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
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
  function ControlledGame$doMove$lambda(this$ControlledGame_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ControlledGame$doMove$lambda(this$ControlledGame_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$doMove_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$move = void 0;
  }
  Coroutine$doMove_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
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
            this.result_0 = withContext(this.$this.scope_0.coroutineContext.plus_1fupul$(job), ControlledGame$doMove$lambda(this.$this), this);
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
  ControlledGame.prototype.doMove_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$doMove_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$ControlledGame$start$lambda(this$ControlledGame_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ControlledGame = this$ControlledGame_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ControlledGame$start$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$ControlledGame$start$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ControlledGame$start$lambda.prototype.constructor = Coroutine$ControlledGame$start$lambda;
  Coroutine$ControlledGame$start$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (get_isActive(this.local$$receiver)) {
              this.state_0 = 3;
              this.result_0 = this.local$this$ControlledGame.doMove_0(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = false;
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            if (!this.result_0) {
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 2;
            continue;
          case 6:
            return this.local$this$ControlledGame.uiHook_0.onGameEnd(), Unit;
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
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ControlledGame$start$lambda(this$ControlledGame_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ControlledGame.prototype.start_e9pf1l$ = function ($receiver) {
    this.scope_0 = $receiver;
    return launch($receiver, void 0, void 0, ControlledGame$start$lambda(this));
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
  function Coroutine$ControlledGame$resetMoveAwait$lambda(this$ControlledGame_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ControlledGame = this$ControlledGame_0;
  }
  Coroutine$ControlledGame$resetMoveAwait$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
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
  function ControlledGame$resetMoveAwait$lambda(this$ControlledGame_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ControlledGame$resetMoveAwait$lambda(this$ControlledGame_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  ControlledGame.prototype.resetMoveAwait_0 = function () {
    launch(this.scope_0, void 0, void 0, ControlledGame$resetMoveAwait$lambda(this));
  };
  ControlledGame.prototype.undo = function () {
    Game.prototype.undo.call(this);
    this.resetMoveAwait_0();
  };
  ControlledGame.$metadata$ = {kind: Kind_CLASS, simpleName: 'ControlledGame', interfaces: [Game]};
  function UIHook() {
  }
  UIHook.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'UIHook', interfaces: []};
  var GAME_WIDTH;
  var GAME_HEIGHT;
  function Point(x, y) {
    Point$Companion_getInstance();
    this.x = x;
    this.y = y;
  }
  Point.prototype.toString = function () {
    return '(' + this.x + '/' + this.y + ')';
  };
  Point.prototype.left = function () {
    return new Point(this.x - 1 | 0, this.y);
  };
  Point.prototype.right = function () {
    return new Point(this.x + 1 | 0, this.y);
  };
  Point.prototype.up = function () {
    return new Point(this.x, this.y - 1 | 0);
  };
  Point.prototype.down = function () {
    return new Point(this.x, this.y + 1 | 0);
  };
  function Point$Companion() {
    Point$Companion_instance = this;
  }
  Point$Companion.prototype.serializer = function () {
    return Point$$serializer_getInstance();
  };
  Point$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Point$Companion_instance = null;
  function Point$Companion_getInstance() {
    if (Point$Companion_instance === null) {
      new Point$Companion();
    }
    return Point$Companion_instance;
  }
  function Point$$serializer() {
    this.descriptor_xiv488$_0 = new SerialClassDescImpl('de.earley.gogogo.game.Point', this);
    this.descriptor.addElement_ivxn3r$('x', false);
    this.descriptor.addElement_ivxn3r$('y', false);
    Point$$serializer_instance = this;
  }
  Object.defineProperty(Point$$serializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_xiv488$_0;
  }});
  Point$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeIntElement_4wpqag$(this.descriptor, 0, obj.x);
    output.encodeIntElement_4wpqag$(this.descriptor, 1, obj.y);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Point$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0, local1;
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
  Point$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.IntSerializer];
  };
  Point$$serializer.$metadata$ = {kind: Kind_OBJECT, simpleName: '$serializer', interfaces: [GeneratedSerializer]};
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
  Point.$metadata$ = {kind: Kind_CLASS, simpleName: 'Point', interfaces: []};
  Point.prototype.component1 = function () {
    return this.x;
  };
  Point.prototype.component2 = function () {
    return this.y;
  };
  Point.prototype.copy_vux9f0$ = function (x, y) {
    return new Point(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
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
    this.states_r7t5l$_0 = mutableListOf([State$Companion_getInstance().inital]);
  }
  Object.defineProperty(Game.prototype, 'state', {get: function () {
    return last(this.states_r7t5l$_0);
  }});
  Object.defineProperty(Game.prototype, 'player', {get: function () {
    return this.state.playersTurn;
  }});
  Object.defineProperty(Game.prototype, 'victor', {get: function () {
    return this.state.victor;
  }});
  Object.defineProperty(Game.prototype, 'grid', {get: function () {
    return this.state.grid;
  }});
  Object.defineProperty(Game.prototype, 'turns', {get: function () {
    return this.states_r7t5l$_0.size - 1 | 0;
  }});
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
    var tmp$, tmp$_0;
    tmp$_0 = Kotlin.isType(tmp$ = this.state.move_56t7qy$(from, to), MoveResult$Success) ? tmp$ : null;
    if (tmp$_0 == null) {
      return false;
    }
    var next = tmp$_0;
    this.states_r7t5l$_0.add_11rb$(next.state);
    return true;
  };
  Game.$metadata$ = {kind: Kind_CLASS, simpleName: 'Game', interfaces: []};
  function standardStartGrid$lambda($receiver) {
    for (var y = 0; y < 5; y++) {
      $receiver.set_vq7693$(0, y, Player$Blue_getInstance());
      $receiver.set_vq7693$(5, y, Player$Red_getInstance());
    }
    return Unit;
  }
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
  Player.$metadata$ = {kind: Kind_CLASS, simpleName: 'Player', interfaces: [Enum]};
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
  Move.prototype.toString = function () {
    return '(' + this.from + ' -> ' + this.to + ')';
  };
  function Move$Companion() {
    Move$Companion_instance = this;
  }
  Move$Companion.prototype.serializer = function () {
    return Move$$serializer_getInstance();
  };
  Move$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Move$Companion_instance = null;
  function Move$Companion_getInstance() {
    if (Move$Companion_instance === null) {
      new Move$Companion();
    }
    return Move$Companion_instance;
  }
  function Move$$serializer() {
    this.descriptor_oi8hql$_0 = new SerialClassDescImpl('de.earley.gogogo.game.Move', this);
    this.descriptor.addElement_ivxn3r$('from', false);
    this.descriptor.addElement_ivxn3r$('to', false);
    Move$$serializer_instance = this;
  }
  Object.defineProperty(Move$$serializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_oi8hql$_0;
  }});
  Move$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, Point$$serializer_getInstance(), obj.from);
    output.encodeSerializableElement_blecud$(this.descriptor, 1, Point$$serializer_getInstance(), obj.to);
    output.endStructure_qatsm0$(this.descriptor);
  };
  Move$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0, local1;
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
  Move$$serializer.prototype.childSerializers = function () {
    return [Point$$serializer_getInstance(), Point$$serializer_getInstance()];
  };
  Move$$serializer.$metadata$ = {kind: Kind_OBJECT, simpleName: '$serializer', interfaces: [GeneratedSerializer]};
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
  Move.$metadata$ = {kind: Kind_CLASS, simpleName: 'Move', interfaces: []};
  Move.prototype.component1 = function () {
    return this.from;
  };
  Move.prototype.component2 = function () {
    return this.to;
  };
  Move.prototype.copy_56t7qy$ = function (from, to) {
    return new Move(from === void 0 ? this.from : from, to === void 0 ? this.to : to);
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
  PlayerController.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'PlayerController', interfaces: []};
  function MoveResult() {
  }
  function MoveResult$Success(state) {
    MoveResult.call(this);
    this.state = state;
  }
  MoveResult$Success.$metadata$ = {kind: Kind_CLASS, simpleName: 'Success', interfaces: [MoveResult]};
  MoveResult$Success.prototype.component1 = function () {
    return this.state;
  };
  MoveResult$Success.prototype.copy_biffl8$ = function (state) {
    return new MoveResult$Success(state === void 0 ? this.state : state);
  };
  MoveResult$Success.prototype.toString = function () {
    return 'Success(state=' + Kotlin.toString(this.state) + ')';
  };
  MoveResult$Success.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.state) | 0;
    return result;
  };
  MoveResult$Success.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.state, other.state))));
  };
  function MoveResult$Error(msg) {
    MoveResult.call(this);
    this.msg = msg;
  }
  function MoveResult$Error$NotPlayersPiece() {
    MoveResult$Error$NotPlayersPiece_instance = this;
    MoveResult$Error.call(this, 'You can only move your own pieces');
  }
  MoveResult$Error$NotPlayersPiece.$metadata$ = {kind: Kind_OBJECT, simpleName: 'NotPlayersPiece', interfaces: [MoveResult$Error]};
  var MoveResult$Error$NotPlayersPiece_instance = null;
  function MoveResult$Error$NotPlayersPiece_getInstance() {
    if (MoveResult$Error$NotPlayersPiece_instance === null) {
      new MoveResult$Error$NotPlayersPiece();
    }
    return MoveResult$Error$NotPlayersPiece_instance;
  }
  function MoveResult$Error$WasPushed() {
    MoveResult$Error$WasPushed_instance = this;
    MoveResult$Error.call(this, 'You cannot move a pushed piece');
  }
  MoveResult$Error$WasPushed.$metadata$ = {kind: Kind_OBJECT, simpleName: 'WasPushed', interfaces: [MoveResult$Error]};
  var MoveResult$Error$WasPushed_instance = null;
  function MoveResult$Error$WasPushed_getInstance() {
    if (MoveResult$Error$WasPushed_instance === null) {
      new MoveResult$Error$WasPushed();
    }
    return MoveResult$Error$WasPushed_instance;
  }
  function MoveResult$Error$NotAdjacent() {
    MoveResult$Error$NotAdjacent_instance = this;
    MoveResult$Error.call(this, 'You can only move to an adjacent square');
  }
  MoveResult$Error$NotAdjacent.$metadata$ = {kind: Kind_OBJECT, simpleName: 'NotAdjacent', interfaces: [MoveResult$Error]};
  var MoveResult$Error$NotAdjacent_instance = null;
  function MoveResult$Error$NotAdjacent_getInstance() {
    if (MoveResult$Error$NotAdjacent_instance === null) {
      new MoveResult$Error$NotAdjacent();
    }
    return MoveResult$Error$NotAdjacent_instance;
  }
  function MoveResult$Error$CannotPush() {
    MoveResult$Error$CannotPush_instance = this;
    MoveResult$Error.call(this, 'You cannot push more than one piece');
  }
  MoveResult$Error$CannotPush.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CannotPush', interfaces: [MoveResult$Error]};
  var MoveResult$Error$CannotPush_instance = null;
  function MoveResult$Error$CannotPush_getInstance() {
    if (MoveResult$Error$CannotPush_instance === null) {
      new MoveResult$Error$CannotPush();
    }
    return MoveResult$Error$CannotPush_instance;
  }
  function MoveResult$Error$RepeatedMove() {
    MoveResult$Error$RepeatedMove_instance = this;
    MoveResult$Error.call(this, 'You cannot repeat a move made four moves ago');
  }
  MoveResult$Error$RepeatedMove.$metadata$ = {kind: Kind_OBJECT, simpleName: 'RepeatedMove', interfaces: [MoveResult$Error]};
  var MoveResult$Error$RepeatedMove_instance = null;
  function MoveResult$Error$RepeatedMove_getInstance() {
    if (MoveResult$Error$RepeatedMove_instance === null) {
      new MoveResult$Error$RepeatedMove();
    }
    return MoveResult$Error$RepeatedMove_instance;
  }
  function MoveResult$Error$CannotMoveOfBoard() {
    MoveResult$Error$CannotMoveOfBoard_instance = this;
    MoveResult$Error.call(this, 'You cannot repeat a move made four moves ago');
  }
  MoveResult$Error$CannotMoveOfBoard.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CannotMoveOfBoard', interfaces: [MoveResult$Error]};
  var MoveResult$Error$CannotMoveOfBoard_instance = null;
  function MoveResult$Error$CannotMoveOfBoard_getInstance() {
    if (MoveResult$Error$CannotMoveOfBoard_instance === null) {
      new MoveResult$Error$CannotMoveOfBoard();
    }
    return MoveResult$Error$CannotMoveOfBoard_instance;
  }
  MoveResult$Error.$metadata$ = {kind: Kind_CLASS, simpleName: 'Error', interfaces: [MoveResult]};
  MoveResult.$metadata$ = {kind: Kind_CLASS, simpleName: 'MoveResult', interfaces: []};
  function State(playersTurn, lastPushed, grid, prev, lastMove) {
    State$Companion_getInstance();
    this.playersTurn = playersTurn;
    this.lastPushed = lastPushed;
    this.grid = grid;
    this.prev = prev;
    this.lastMove = lastMove;
    this.victor = this.isVictory_0();
  }
  function State$Companion() {
    State$Companion_instance = this;
    this.inital = new State(Player$Blue_getInstance(), null, standardStartGrid, null, null);
  }
  State$Companion.prototype.serializer = function () {
    return State$$serializer_getInstance();
  };
  State$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var State$Companion_instance = null;
  function State$Companion_getInstance() {
    if (State$Companion_instance === null) {
      new State$Companion();
    }
    return State$Companion_instance;
  }
  State.prototype.move_56t7qy$ = function (from, to) {
    var tmp$, tmp$_0;
    if ((tmp$ = this.findMoveError_0(from, to)) != null) {
      return tmp$;
    }
    var next_0 = nextOver(from, to);
    var pushing = get_0(this.grid, to) != null;
    var pushed = pushing ? next_0 : null;
    var $receiver = new Alterations(this.grid.toMutableGrid());
    if (pushing)
      $receiver.set_jprfea$(next_0, get_0(this.grid, to));
    $receiver.set_jprfea$(to, get_0(this.grid, from));
    $receiver.set_jprfea$(from, null);
    var newGrid = Kotlin.isType(tmp$_0 = $receiver.create(), GameGrid) ? tmp$_0 : throwCCE();
    return new MoveResult$Success(new State(next(this.playersTurn), pushed, newGrid, this, new Move(from, to)));
  };
  State.prototype.findMoveError_0 = function (from, to) {
    if (!equals(this.playersTurn, get_0(this.grid, from)))
      return MoveResult$Error$NotPlayersPiece_getInstance();
    else if (equals(this.lastPushed, from))
      return MoveResult$Error$WasPushed_getInstance();
    else if (!this.grid.validPosition_vux9f0$(to.x, to.y))
      return MoveResult$Error$CannotMoveOfBoard_getInstance();
    else if (!isAdjacent(from, to))
      return MoveResult$Error$NotAdjacent_getInstance();
    else if (!this.canPush_0(from, to))
      return MoveResult$Error$CannotPush_getInstance();
    else if (this.isRepeatedMove_0(from, to))
      return MoveResult$Error$RepeatedMove_getInstance();
    else
      return null;
  };
  State.prototype.isEligibleToMove_bk5ui5$ = function (p) {
    return equals(this.playersTurn, get_0(this.grid, p)) && !equals(this.lastPushed, p);
  };
  State.prototype.canPush_0 = function (from, to) {
    return get_0(this.grid, to) == null || get_0(this.grid, nextOver(from, to)) == null;
  };
  State.prototype.isRepeatedMove_0 = function (from, to) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = applyN(this, 3, getPropertyCallableRef('prev', 1, function ($receiver) {
      return $receiver.prev;
    }));
    if (tmp$ == null) {
      return false;
    }
    var threeMovesAgo = tmp$;
    if (!equals(threeMovesAgo.lastMove, new Move(from, to)))
      return false;
    tmp$_0 = applyN(this, 4, getPropertyCallableRef('prev', 1, function ($receiver) {
      return $receiver.prev;
    }));
    if (tmp$_0 == null) {
      return false;
    }
    var fourMovesAgo = tmp$_0;
    if (!equals(fourMovesAgo.lastPushed, this.lastPushed))
      return false;
    if (!((tmp$_1 = fourMovesAgo.grid) != null ? tmp$_1.equals(this.grid) : null))
      return false;
    return true;
  };
  State.prototype.isVictory_0 = function () {
    if (this.lastMove == null)
      return null;
    var lastPlayer = next(this.playersTurn);
    if (lastPlayer === Player$Red_getInstance() && this.lastMove.to.x === 0)
      return Player$Red_getInstance();
    if (lastPlayer === Player$Blue_getInstance() && this.lastMove.to.x === 5)
      return Player$Blue_getInstance();
    if (this.lastPushed != null) {
      if (this.lastPushed.x === 0 && equals(get_0(this.grid, this.lastPushed), Player$Red_getInstance()))
        return Player$Red_getInstance();
      if (this.lastPushed.x === 5 && equals(get_0(this.grid, this.lastPushed), Player$Blue_getInstance()))
        return Player$Blue_getInstance();
    }
    if (this.countActiveTokens_0() <= 0) {
      return lastPlayer;
    }
    return null;
  };
  State.prototype.countActiveTokens_0 = function () {
    var $receiver = this.grid.getAllFor_11rb$(this.playersTurn);
    var predicate = getCallableRef('isEligibleToMove', function ($receiver, p) {
      return $receiver.isEligibleToMove_bk5ui5$(p);
    }.bind(null, this));
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (predicate(element))
        destination.add_11rb$(element);
    }
    return destination.size;
  };
  State.prototype.isSimilar_biffl8$ = function (other) {
    var tmp$;
    return this.playersTurn === other.playersTurn && equals(this.lastPushed, other.lastPushed) && ((tmp$ = this.grid) != null ? tmp$.equals(other.grid) : null);
  };
  function State$$serializer() {
    this.descriptor_fsmc49$_0 = new SerialClassDescImpl('de.earley.gogogo.game.State', this);
    this.descriptor.addElement_ivxn3r$('playersTurn', false);
    this.descriptor.addElement_ivxn3r$('lastPushed', false);
    this.descriptor.addElement_ivxn3r$('grid', false);
    this.descriptor.addElement_ivxn3r$('prev', false);
    this.descriptor.addElement_ivxn3r$('lastMove', false);
    this.descriptor.addElement_ivxn3r$('victor', false);
    State$$serializer_instance = this;
  }
  Object.defineProperty(State$$serializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_fsmc49$_0;
  }});
  State$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeSerializableElement_blecud$(this.descriptor, 0, new EnumSerializer(getKClass(Player)), obj.playersTurn);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 1, Point$$serializer_getInstance(), obj.lastPushed);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, GameGrid$$serializer_getInstance(), obj.grid);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 3, State$$serializer_getInstance(), obj.prev);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 4, Move$$serializer_getInstance(), obj.lastMove);
    output.encodeNullableSerializableElement_orpvvi$(this.descriptor, 5, new EnumSerializer(getKClass(Player)), obj.victor);
    output.endStructure_qatsm0$(this.descriptor);
  };
  State$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0, local1, local2, local3, local4, local5;
    var input = input_0.beginStructure_r0sa6z$(this.descriptor, []);
    loopLabel: while (true) {
      index = input.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          readAll = true;
        case 0:
          local0 = (bitMask0 & 1) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 0, new EnumSerializer(getKClass(Player))) : input.updateSerializableElement_ehubvl$(this.descriptor, 0, new EnumSerializer(getKClass(Player)), local0);
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
          local3 = (bitMask0 & 8) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 3, State$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 3, State$$serializer_getInstance(), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case 4:
          local4 = (bitMask0 & 16) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 4, Move$$serializer_getInstance()) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 4, Move$$serializer_getInstance(), local4);
          bitMask0 |= 16;
          if (!readAll)
            break;
        case 5:
          local5 = (bitMask0 & 32) === 0 ? input.decodeNullableSerializableElement_cwlm4k$(this.descriptor, 5, new EnumSerializer(getKClass(Player))) : input.updateNullableSerializableElement_u33s02$(this.descriptor, 5, new EnumSerializer(getKClass(Player)), local5);
          bitMask0 |= 32;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return State_init(bitMask0, local0, local1, local2, local3, local4, local5, null);
  };
  State$$serializer.prototype.childSerializers = function () {
    return [new EnumSerializer(getKClass(Player)), new NullableSerializer(Point$$serializer_getInstance()), GameGrid$$serializer_getInstance(), new NullableSerializer(State$$serializer_getInstance()), new NullableSerializer(Move$$serializer_getInstance()), new NullableSerializer(new EnumSerializer(getKClass(Player)))];
  };
  State$$serializer.$metadata$ = {kind: Kind_OBJECT, simpleName: '$serializer', interfaces: [GeneratedSerializer]};
  var State$$serializer_instance = null;
  function State$$serializer_getInstance() {
    if (State$$serializer_instance === null) {
      new State$$serializer();
    }
    return State$$serializer_instance;
  }
  function State_init(seen, playersTurn, lastPushed, grid, prev, lastMove, victor, serializationConstructorMarker) {
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
      throw new MissingFieldException('prev');
    else
      $this.prev = prev;
    if ((seen & 16) === 0)
      throw new MissingFieldException('lastMove');
    else
      $this.lastMove = lastMove;
    if ((seen & 32) === 0)
      throw new MissingFieldException('victor');
    else
      $this.victor = victor;
    return $this;
  }
  State.$metadata$ = {kind: Kind_CLASS, simpleName: 'State', interfaces: []};
  State.prototype.component1 = function () {
    return this.playersTurn;
  };
  State.prototype.component2 = function () {
    return this.lastPushed;
  };
  State.prototype.component3 = function () {
    return this.grid;
  };
  State.prototype.component4 = function () {
    return this.prev;
  };
  State.prototype.component5 = function () {
    return this.lastMove;
  };
  State.prototype.copy_gcvhh1$ = function (playersTurn, lastPushed, grid, prev, lastMove) {
    return new State(playersTurn === void 0 ? this.playersTurn : playersTurn, lastPushed === void 0 ? this.lastPushed : lastPushed, grid === void 0 ? this.grid : grid, prev === void 0 ? this.prev : prev, lastMove === void 0 ? this.lastMove : lastMove);
  };
  State.prototype.toString = function () {
    return 'State(playersTurn=' + Kotlin.toString(this.playersTurn) + (', lastPushed=' + Kotlin.toString(this.lastPushed)) + (', grid=' + Kotlin.toString(this.grid)) + (', prev=' + Kotlin.toString(this.prev)) + (', lastMove=' + Kotlin.toString(this.lastMove)) + ')';
  };
  State.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.playersTurn) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastPushed) | 0;
    result = result * 31 + Kotlin.hashCode(this.grid) | 0;
    result = result * 31 + Kotlin.hashCode(this.prev) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastMove) | 0;
    return result;
  };
  State.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.playersTurn, other.playersTurn) && Kotlin.equals(this.lastPushed, other.lastPushed) && Kotlin.equals(this.grid, other.grid) && Kotlin.equals(this.prev, other.prev) && Kotlin.equals(this.lastMove, other.lastMove)))));
  };
  function nextOver(from, to) {
    return new Point(from.x + (2 * (to.x - from.x | 0) | 0) | 0, from.y + (2 * (to.y - from.y | 0) | 0) | 0);
  }
  function isAdjacent(from, to) {
    var dx = abs(from.x - to.x | 0);
    var dy = abs(from.y - to.y | 0);
    return dx === 1 && dy === 0 || (dx === 0 && dy === 1);
  }
  function applyN($receiver, n, next) {
    var tmp$;
    if (n === 0)
      return $receiver;
    else
      return (tmp$ = next($receiver)) != null ? applyN(tmp$, n - 1 | 0, next) : null;
  }
  function debugString$line(closure$sb) {
    return function () {
      closure$sb.append_gw00v9$('  |');
      for (var i = 0; i < 11; i++) {
        if (i % 2 === 0)
          closure$sb.append_s8jyv4$(i / 2 | 0);
        else
          closure$sb.append_gw00v9$('-');
      }
      appendln(closure$sb, '|');
    };
  }
  function debugString($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    var sb = StringBuilder_init();
    var line = debugString$line(sb);
    appendln(sb);
    appendln(sb, 'Player: ' + $receiver.playersTurn);
    appendln(sb, 'LastPushed: ' + toString($receiver.lastPushed));
    appendln(sb, 'Victor: ' + toString($receiver.victor));
    line();
    for (var y = 0; y < 5; y++) {
      sb.append_gw00v9$(y.toString() + ' |');
      for (var x = 0; x < 6; x++) {
        sb.append_s8jyv4$((tmp$_1 = toBoxedChar((tmp$_0 = (tmp$ = $receiver.grid.get_vux9f0$(x, y)) != null ? tmp$.name : null) != null ? tmp$_0.charCodeAt(0) : null)) != null ? tmp$_1 : ' ');
        sb.append_gw00v9$('|');
      }
      appendln(sb, ' ' + y);
    }
    line();
    return sb.toString();
  }
  function appendln($receiver, s) {
    if (s === void 0)
      s = '';
    $receiver.append_gw00v9$(s).append_gw00v9$('\n');
  }
  function GameGrid(width, height, elems, tokenIndexes) {
    GameGrid$Companion_getInstance();
    this.width_8z46m7$_0 = width;
    this.height_es4e7s$_0 = height;
    this.elems_hyvcx$_0 = elems;
    this.tokenIndexes_0 = tokenIndexes;
  }
  Object.defineProperty(GameGrid.prototype, 'width', {get: function () {
    return this.width_8z46m7$_0;
  }});
  Object.defineProperty(GameGrid.prototype, 'height', {get: function () {
    return this.height_es4e7s$_0;
  }});
  Object.defineProperty(GameGrid.prototype, 'elems', {get: function () {
    return this.elems_hyvcx$_0;
  }});
  function GameGrid$Companion() {
    GameGrid$Companion_instance = this;
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  GameGrid$Companion.prototype.create_fzygrl$ = function (width, height, init) {
    var grid = new GameGrid(width, height, Kotlin.newArray(Kotlin.imul(width, height), null), LinkedHashMap_init());
    var $receiver = new Alterations(grid);
    init($receiver);
    return $receiver.create();
  };
  GameGrid$Companion.prototype.create_vnf2z1$ = function (width, height, elems) {
    var $receiver = new GameGrid(width, height, elems, LinkedHashMap_init());
    for (var x = 0; x < width; x++) {
      for (var y = 0; y < height; y++) {
        var p = $receiver.get_vux9f0$(x, y);
        if (p != null) {
          var $receiver_0 = $receiver.tokenIndexes_0;
          var tmp$;
          var value = $receiver_0.get_11rb$(p);
          if (value == null) {
            var answer = ArrayList_init_0();
            $receiver_0.put_xwzc9p$(p, answer);
            tmp$ = answer;
          }
           else {
            tmp$ = value;
          }
          tmp$.add_11rb$(new Point(x, y));
        }
      }
    }
    return $receiver;
  };
  GameGrid$Companion.prototype.serializer = function () {
    return GameGrid$$serializer_getInstance();
  };
  GameGrid$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var GameGrid$Companion_instance = null;
  function GameGrid$Companion_getInstance() {
    if (GameGrid$Companion_instance === null) {
      new GameGrid$Companion();
    }
    return GameGrid$Companion_instance;
  }
  GameGrid.prototype.get_vux9f0$ = function (x, y) {
    return this.validPosition_vux9f0$(x, y) ? this.elems[Kotlin.imul(y, this.width) + x | 0] : null;
  };
  GameGrid.prototype.getAllFor_11rb$ = function (t) {
    var tmp$;
    return (tmp$ = this.tokenIndexes_0.get_11rb$(t)) != null ? tmp$ : emptyList();
  };
  GameGrid.prototype.set_vq7693$ = function (x, y, t) {
    var tmp$;
    if (this.validPosition_vux9f0$(x, y)) {
      var i = Kotlin.imul(y, this.width) + x | 0;
      var prev = this.elems[i];
      if (equals(prev, t))
        return;
      if (prev != null)
        (tmp$ = this.tokenIndexes_0.get_11rb$(prev)) != null ? tmp$.remove_11rb$(new Point(x, y)) : null;
      if (t != null) {
        var $receiver = this.tokenIndexes_0;
        var tmp$_0;
        var value = $receiver.get_11rb$(t);
        if (value == null) {
          var answer = ArrayList_init_0();
          $receiver.put_xwzc9p$(t, answer);
          tmp$_0 = answer;
        }
         else {
          tmp$_0 = value;
        }
        tmp$_0.add_11rb$(new Point(x, y));
      }
      this.elems[i] = t;
    }
  };
  GameGrid.prototype.validPosition_vux9f0$ = function (x, y) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.width - 1 | 0;
    if (0 <= x && x <= tmp$) {
      tmp$_0 = this.height - 1 | 0;
      tmp$_1 = (0 <= y && y <= tmp$_0);
    }
     else
      tmp$_1 = false;
    return tmp$_1;
  };
  GameGrid.prototype.toMutableGrid = function () {
    return new GameGrid(this.width, this.height, this.elems.slice(), deepClone(this.tokenIndexes_0));
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
  function GameGrid$$serializer() {
    this.descriptor_s2imx4$_0 = new SerialClassDescImpl('de.earley.gogogo.game.grid.GameGrid', this);
    this.descriptor.addElement_ivxn3r$('width', false);
    this.descriptor.addElement_ivxn3r$('height', false);
    this.descriptor.addElement_ivxn3r$('elems', false);
    this.descriptor.addElement_ivxn3r$('tokenIndexes', false);
    GameGrid$$serializer_instance = this;
  }
  Object.defineProperty(GameGrid$$serializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_s2imx4$_0;
  }});
  GameGrid$$serializer.prototype.serialize_awe97i$ = function (output_0, obj) {
    var output = output_0.beginStructure_r0sa6z$(this.descriptor, []);
    output.encodeIntElement_4wpqag$(this.descriptor, 0, obj.width);
    output.encodeIntElement_4wpqag$(this.descriptor, 1, obj.height);
    output.encodeSerializableElement_blecud$(this.descriptor, 2, new ReferenceArraySerializer(getKClass(Player), new NullableSerializer(new EnumSerializer(getKClass(Player)))), obj.elems);
    output.encodeSerializableElement_blecud$(this.descriptor, 3, new LinkedHashMapSerializer(new EnumSerializer(getKClass(Player)), new ArrayListSerializer(Point$$serializer_getInstance())), obj.tokenIndexes_0);
    output.endStructure_qatsm0$(this.descriptor);
  };
  GameGrid$$serializer.prototype.deserialize_nts5qn$ = function (input_0) {
    var index, readAll = false;
    var bitMask0 = 0;
    var local0, local1, local2, local3;
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
          local2 = (bitMask0 & 4) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 2, new ReferenceArraySerializer(getKClass(Player), new NullableSerializer(new EnumSerializer(getKClass(Player))))) : input.updateSerializableElement_ehubvl$(this.descriptor, 2, new ReferenceArraySerializer(getKClass(Player), new NullableSerializer(new EnumSerializer(getKClass(Player)))), local2);
          bitMask0 |= 4;
          if (!readAll)
            break;
        case 3:
          local3 = (bitMask0 & 8) === 0 ? input.decodeSerializableElement_s44l7r$(this.descriptor, 3, new LinkedHashMapSerializer(new EnumSerializer(getKClass(Player)), new ArrayListSerializer(Point$$serializer_getInstance()))) : input.updateSerializableElement_ehubvl$(this.descriptor, 3, new LinkedHashMapSerializer(new EnumSerializer(getKClass(Player)), new ArrayListSerializer(Point$$serializer_getInstance())), local3);
          bitMask0 |= 8;
          if (!readAll)
            break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_qatsm0$(this.descriptor);
    return GameGrid_init(bitMask0, local0, local1, local2, local3, null);
  };
  GameGrid$$serializer.prototype.childSerializers = function () {
    return [internal.IntSerializer, internal.IntSerializer, new ReferenceArraySerializer(getKClass(Player), new NullableSerializer(new EnumSerializer(getKClass(Player)))), new LinkedHashMapSerializer(new EnumSerializer(getKClass(Player)), new ArrayListSerializer(Point$$serializer_getInstance()))];
  };
  GameGrid$$serializer.$metadata$ = {kind: Kind_OBJECT, simpleName: '$serializer', interfaces: [GeneratedSerializer]};
  var GameGrid$$serializer_instance = null;
  function GameGrid$$serializer_getInstance() {
    if (GameGrid$$serializer_instance === null) {
      new GameGrid$$serializer();
    }
    return GameGrid$$serializer_instance;
  }
  function GameGrid_init(seen, width, height, elems, tokenIndexes, serializationConstructorMarker) {
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
    if ((seen & 8) === 0)
      throw new MissingFieldException('tokenIndexes');
    else
      $this.tokenIndexes_0 = tokenIndexes;
    return $this;
  }
  GameGrid.$metadata$ = {kind: Kind_CLASS, simpleName: 'GameGrid', interfaces: [IndexableGrid, MutableGrid, Grid]};
  function deepClone($receiver) {
    var clone = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.key;
      var value = ArrayList_init(element.value);
      clone.put_xwzc9p$(key, value);
    }
    return clone;
  }
  function GenericGrid(width, height, elems) {
    this.width_p6147k$_0 = width;
    this.height_7qzw7d$_0 = height;
    this.elems_xn6fgu$_0 = elems;
  }
  Object.defineProperty(GenericGrid.prototype, 'width', {get: function () {
    return this.width_p6147k$_0;
  }});
  Object.defineProperty(GenericGrid.prototype, 'height', {get: function () {
    return this.height_7qzw7d$_0;
  }});
  Object.defineProperty(GenericGrid.prototype, 'elems', {get: function () {
    return this.elems_xn6fgu$_0;
  }});
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
  GenericGrid.prototype.set_vq7693$ = function (x, y, t) {
    this.elems[Kotlin.imul(y, this.width) + x | 0] = t;
  };
  GenericGrid.prototype.toMutableGrid = function () {
    return new GenericGrid(this.width, this.height, this.elems.slice());
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
  GenericGrid.$metadata$ = {kind: Kind_CLASS, simpleName: 'GenericGrid', interfaces: [MutableGrid, Grid]};
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
  Grid$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Grid$Companion_instance = null;
  function Grid$Companion_getInstance() {
    if (Grid$Companion_instance === null) {
      new Grid$Companion();
    }
    return Grid$Companion_instance;
  }
  Grid.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Grid', interfaces: []};
  function MutableGrid() {
  }
  MutableGrid.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MutableGrid', interfaces: [Grid]};
  function IndexableGrid() {
  }
  IndexableGrid.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'IndexableGrid', interfaces: []};
  function get_0($receiver, p) {
    return $receiver.get_vux9f0$(p.x, p.y);
  }
  function Alterations(workingGrid) {
    this.workingGrid_0 = workingGrid;
  }
  Alterations.prototype.set_jprfea$ = function (p, value) {
    this.workingGrid_0.set_vq7693$(p.x, p.y, value);
  };
  Alterations.prototype.set_vq7693$ = function (x, y, value) {
    this.workingGrid_0.set_vq7693$(x, y, value);
  };
  Alterations.prototype.create = function () {
    return this.workingGrid_0;
  };
  Alterations.$metadata$ = {kind: Kind_CLASS, simpleName: 'Alterations', interfaces: []};
  function PlayerInfo(name) {
    this.name = name;
  }
  PlayerInfo.$metadata$ = {kind: Kind_CLASS, simpleName: 'PlayerInfo', interfaces: []};
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
  MatchInfo.$metadata$ = {kind: Kind_CLASS, simpleName: 'MatchInfo', interfaces: []};
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
  Messages.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Messages', interfaces: []};
  var Messages_instance = null;
  function Messages_getInstance() {
    if (Messages_instance === null) {
      new Messages();
    }
    return Messages_instance;
  }
  function toNetFormat_0($receiver) {
    return JSON_0.Companion.stringify_tf03ej$(Move$Companion_getInstance().serializer(), $receiver);
  }
  function moveFromNetFormat($receiver) {
    return JSON_0.Companion.parse_awif5v$(Move$Companion_getInstance().serializer(), $receiver);
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var package$de = _.de || (_.de = {});
  var package$earley = package$de.earley || (package$de.earley = {});
  var package$gogogo = package$earley.gogogo || (package$earley.gogogo = {});
  var package$ai = package$gogogo.ai || (package$gogogo.ai = {});
  package$ai.map_xpuobx$ = map_0;
  package$ai.MoveToState = MoveToState;
  package$ai.bestMove_7dht$ = bestMove;
  package$ai.debugBestMove_7dht$ = debugBestMove;
  package$ai.AI = AI;
  Object.defineProperty(package$ai, 'easy', {get: function () {
    return easy;
  }});
  Object.defineProperty(package$ai, 'medium', {get: function () {
    return medium;
  }});
  Object.defineProperty(package$ai, 'hard', {get: function () {
    return hard;
  }});
  Object.defineProperty(package$ai, 'superStrategy', {get: function () {
    return superStrategy;
  }});
  Object.defineProperty(package$ai, 'extreme', {get: function () {
    return extreme;
  }});
  Object.defineProperty(package$ai, 'Evaluations', {get: Evaluations_getInstance});
  package$ai.findAllMoves_1pq5d1$ = findAllMoves;
  package$ai.recurseOnce_xtbmsm$ = recurseOnce;
  package$ai.treeSearchStrategy_r1a1ux$ = treeSearchStrategy;
  var package$game = package$gogogo.game || (package$gogogo.game = {});
  package$game.ControlledGame = ControlledGame;
  package$game.UIHook = UIHook;
  Object.defineProperty(Point, 'Companion', {get: Point$Companion_getInstance});
  Object.defineProperty(Point, '$serializer', {get: Point$$serializer_getInstance});
  package$game.Point = Point;
  package$game.Game = Game;
  Object.defineProperty(Player, 'Red', {get: Player$Red_getInstance});
  Object.defineProperty(Player, 'Blue', {get: Player$Blue_getInstance});
  package$game.Player = Player;
  package$game.next_txv5hr$ = next;
  Object.defineProperty(Move, 'Companion', {get: Move$Companion_getInstance});
  Object.defineProperty(Move, '$serializer', {get: Move$$serializer_getInstance});
  package$game.Move = Move;
  package$game.PlayerController = PlayerController;
  MoveResult.Success = MoveResult$Success;
  Object.defineProperty(MoveResult$Error, 'NotPlayersPiece', {get: MoveResult$Error$NotPlayersPiece_getInstance});
  Object.defineProperty(MoveResult$Error, 'WasPushed', {get: MoveResult$Error$WasPushed_getInstance});
  Object.defineProperty(MoveResult$Error, 'NotAdjacent', {get: MoveResult$Error$NotAdjacent_getInstance});
  Object.defineProperty(MoveResult$Error, 'CannotPush', {get: MoveResult$Error$CannotPush_getInstance});
  Object.defineProperty(MoveResult$Error, 'RepeatedMove', {get: MoveResult$Error$RepeatedMove_getInstance});
  Object.defineProperty(MoveResult$Error, 'CannotMoveOfBoard', {get: MoveResult$Error$CannotMoveOfBoard_getInstance});
  MoveResult.Error = MoveResult$Error;
  package$game.MoveResult = MoveResult;
  Object.defineProperty(State, 'Companion', {get: State$Companion_getInstance});
  Object.defineProperty(State, '$serializer', {get: State$$serializer_getInstance});
  package$game.State = State;
  package$game.debugString_1pq5d1$ = debugString;
  Object.defineProperty(GameGrid, 'Companion', {get: GameGrid$Companion_getInstance});
  Object.defineProperty(GameGrid, '$serializer', {get: GameGrid$$serializer_getInstance});
  var package$grid = package$game.grid || (package$game.grid = {});
  package$grid.GameGrid = GameGrid;
  package$grid.GenericGrid = GenericGrid;
  Object.defineProperty(Grid, 'Companion', {get: Grid$Companion_getInstance});
  package$grid.Grid = Grid;
  package$grid.MutableGrid = MutableGrid;
  package$grid.IndexableGrid = IndexableGrid;
  package$grid.get_qg01xr$ = get_0;
  package$grid.Alterations = Alterations;
  var package$net = package$gogogo.net || (package$gogogo.net = {});
  package$net.PlayerInfo = PlayerInfo;
  package$net.MatchInfo = MatchInfo;
  Object.defineProperty(package$net, 'Messages', {get: Messages_getInstance});
  package$game.toNetFormat_blsywv$ = toNetFormat_0;
  package$game.moveFromNetFormat_pdl1vz$ = moveFromNetFormat;
  Point$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  Move$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  State$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  GameGrid$$serializer.prototype.patch_mynpiu$ = GeneratedSerializer.prototype.patch_mynpiu$;
  easy = Evaluations_getInstance().sumPosition;
  medium = recurseOnce(easy);
  base = treeSearchStrategy(2, medium, false);
  randomBase = map_0(treeSearchStrategy(2, medium, false), randomBase$lambda);
  hard = treeSearchStrategy(2, Evaluations_getInstance().sumPosition, false);
  superStrategy = treeSearchStrategy(3, Evaluations_getInstance().sumSquarePosition, true, 10);
  extreme = treeSearchStrategy(4, Evaluations_getInstance().sumSquarePosition, false);
  GAME_WIDTH = 6;
  GAME_HEIGHT = 5;
  standardStartGrid = GameGrid$Companion_getInstance().create_fzygrl$(6, 5, standardStartGrid$lambda);
  return _;
}(typeof this['gogogo-common'] === 'undefined' ? {} : this['gogogo-common'], kotlin, this['kotlinx-coroutines-core'], this['kotlinx-serialization-runtime-js']);

//# sourceMappingURL=gogogo-common.js.map
