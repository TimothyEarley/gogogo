if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'gogogo-common'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'gogogo-common'.");
}
if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
  throw new Error("Error loading module 'gogogo-common'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'gogogo-common'.");
}
this['gogogo-common'] = function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Unit = Kotlin.kotlin.Unit;
  var sequence = Kotlin.kotlin.sequences.sequence_o0x0bg$;
  var equals = Kotlin.equals;
  var getCallableRef = Kotlin.getCallableRef;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var min = Kotlin.kotlin.collections.min_exjks8$;
  var Random = Kotlin.kotlin.random.Random;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var max_0 = Kotlin.kotlin.sequences.max_gtzq52$;
  var min_0 = Kotlin.kotlin.sequences.min_gtzq52$;
  var throwUPAE = Kotlin.throwUPAE;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var withContext = $module$kotlinx_coroutines_core.kotlinx.coroutines.withContext_i5cbzn$;
  var CancellationException = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var get_isActive = $module$kotlinx_coroutines_core.kotlinx.coroutines.get_isActive_e9pf1l$;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var cancelAndJoin = $module$kotlinx_coroutines_core.kotlinx.coroutines.cancelAndJoin_5dx9u$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var throwCCE = Kotlin.throwCCE;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var toString = Kotlin.toString;
  var toBoxedChar = Kotlin.toBoxedChar;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var split_0 = Kotlin.kotlin.text.split_ip8yn$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var toList_0 = Kotlin.kotlin.text.toList_gw00vp$;
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
      if (!iterator.hasNext()) {
        maxBy$result = maxElem;
        break maxBy$break;
      }
      var maxValue = $receiver(player, maxElem.state);
      do {
        var e = iterator.next();
        var v = $receiver(player, e.state);
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.hasNext());
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
      if (!iterator.hasNext()) {
        maxBy$result = maxElem;
        break maxBy$break;
      }
      var maxValue = maxElem.first;
      do {
        var e = iterator.next();
        var v = e.first;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.hasNext());
      maxBy$result = maxElem;
    }
     while (false);
    if ((tmp$ = maxBy$result) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init(('No valid moves for player ' + player + ' with state=' + debugString(state)).toString());
    }
    var best = tmp$_0;
    println('Player ' + player + ' thinks the move is worth: ' + best.first + ' points.');
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
  function MoveEvaluation(label, evaluation, byPlayer) {
    this.label = label;
    this.evaluation = evaluation;
    this.byPlayer = byPlayer;
  }
  MoveEvaluation.$metadata$ = {kind: Kind_CLASS, simpleName: 'MoveEvaluation', interfaces: []};
  MoveEvaluation.prototype.component1 = function () {
    return this.label;
  };
  MoveEvaluation.prototype.component2 = function () {
    return this.evaluation;
  };
  MoveEvaluation.prototype.component3 = function () {
    return this.byPlayer;
  };
  MoveEvaluation.prototype.copy_qsq6qi$ = function (label, evaluation, byPlayer) {
    return new MoveEvaluation(label === void 0 ? this.label : label, evaluation === void 0 ? this.evaluation : evaluation, byPlayer === void 0 ? this.byPlayer : byPlayer);
  };
  MoveEvaluation.prototype.toString = function () {
    return 'MoveEvaluation(label=' + Kotlin.toString(this.label) + (', evaluation=' + Kotlin.toString(this.evaluation)) + (', byPlayer=' + Kotlin.toString(this.byPlayer)) + ')';
  };
  MoveEvaluation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    result = result * 31 + Kotlin.hashCode(this.evaluation) | 0;
    result = result * 31 + Kotlin.hashCode(this.byPlayer) | 0;
    return result;
  };
  MoveEvaluation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.label, other.label) && Kotlin.equals(this.evaluation, other.evaluation) && Kotlin.equals(this.byPlayer, other.byPlayer)))));
  };
  function extractEvaluation($receiver) {
    return $receiver.v.evaluation;
  }
  function Tree(v, children) {
    if (children === void 0)
      children = emptyList();
    this.v = v;
    this.children = children;
  }
  Tree.$metadata$ = {kind: Kind_CLASS, simpleName: 'Tree', interfaces: []};
  Tree.prototype.component1 = function () {
    return this.v;
  };
  Tree.prototype.component2 = function () {
    return this.children;
  };
  Tree.prototype.copy_vgdgbr$ = function (v, children) {
    return new Tree(v === void 0 ? this.v : v, children === void 0 ? this.children : children);
  };
  Tree.prototype.toString = function () {
    return 'Tree(v=' + Kotlin.toString(this.v) + (', children=' + Kotlin.toString(this.children)) + ')';
  };
  Tree.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    result = result * 31 + Kotlin.hashCode(this.children) | 0;
    return result;
  };
  Tree.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.v, other.v) && Kotlin.equals(this.children, other.children)))));
  };
  function Coroutine$walk$lambda(this$walk_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$walk = this$walk_0;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$walk$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$walk$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$walk$lambda.prototype.constructor = Coroutine$walk$lambda;
  Coroutine$walk$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.yield_11rb$(this.local$this$walk.v, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.local$this$walk.children.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 5;
              continue;
            }

            var element = this.local$tmp$.next();
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.yieldAll_swo9gw$(walk(element), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 3;
            continue;
          case 5:
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
  function walk$lambda(this$walk_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$walk$lambda(this$walk_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function walk($receiver) {
    return sequence(walk$lambda($receiver));
  }
  function withDebug$lambda(this$withDebug) {
    return function (player, state, label) {
      return new Tree(new MoveEvaluation(label, this$withDebug(player, state), state.playersTurn));
    };
  }
  function withDebug($receiver) {
    return withDebug$lambda($receiver);
  }
  var easyDebug;
  var level1;
  var level2;
  var level3;
  var level4;
  var superDebug;
  var superDebugR;
  function treeSearchStrategyDebug$lambda(closure$level, closure$baseStrategy, closure$pruning, closure$pruneLevelMax, closure$pruneLevelMin) {
    return function (player, state, label) {
      return treeSearchDebug(player, state, closure$level, closure$baseStrategy, closure$pruning, closure$pruneLevelMax, closure$pruneLevelMin, label);
    };
  }
  function treeSearchStrategyDebug(level, baseStrategy, pruning, pruneLevelMax, pruneLevelMin) {
    if (pruneLevelMax === void 0)
      pruneLevelMax = 0;
    if (pruneLevelMin === void 0)
      pruneLevelMin = -pruneLevelMax | 0;
    return treeSearchStrategyDebug$lambda(level, baseStrategy, pruning, pruneLevelMax, pruneLevelMin);
  }
  function treeSearchDebug$lambda(closure$player, closure$level, closure$baseStrategy, closure$pruning, closure$pruneLevelMax, closure$pruneLevelMin) {
    return function (it) {
      return treeSearchDebug(closure$player, it.state, closure$level - 1 | 0, closure$baseStrategy, closure$pruning, closure$pruneLevelMax, closure$pruneLevelMin, it.move.toString());
    };
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function treeSearchDebug(player, state, level, baseStrategy, pruning, pruneLevelMax, pruneLevelMin, label) {
    var tmp$;
    var playerWhoMoved = next(state.playersTurn);
    if (level === 0)
      return baseStrategy(player, state, label);
    if (state.victor != null) {
      var value = equals(player, state.victor) ? 2147483647 : -2147483648;
      return new Tree(new MoveEvaluation(label, value, playerWhoMoved));
    }
    if (pruning) {
      var currentPositionEvaluation = baseStrategy(player, state, label);
      var v = currentPositionEvaluation.v.evaluation;
      if (v < pruneLevelMin)
        return currentPositionEvaluation;
      if (v > pruneLevelMax)
        return currentPositionEvaluation;
    }
    var moves = map(findAllMoves(state), treeSearchDebug$lambda(player, level, baseStrategy, pruning, pruneLevelMax, pruneLevelMin));
    if (player === state.playersTurn) {
      if (pruning) {
        var tmp$_0 = maxPruning(moves, pruneLevelMax, getCallableRef('extractEvaluation', function ($receiver) {
          return extractEvaluation($receiver);
        }));
        var best = tmp$_0.component1(), list = tmp$_0.component2();
        tmp$ = new Tree(new MoveEvaluation(label, best, playerWhoMoved), list);
      }
       else {
        var list_0 = toList(moves);
        var destination = ArrayList_init_0(collectionSizeOrDefault(list_0, 10));
        var tmp$_1;
        tmp$_1 = list_0.iterator();
        while (tmp$_1.hasNext()) {
          var item = tmp$_1.next();
          destination.add_11rb$(item.v.evaluation);
        }
        var best_0 = ensureNotNull(max(destination));
        tmp$ = new Tree(new MoveEvaluation(label, best_0, playerWhoMoved), list_0);
      }
    }
     else {
      if (pruning) {
        var tmp$_2 = minPruning(moves, pruneLevelMin, getCallableRef('extractEvaluation', function ($receiver) {
          return extractEvaluation($receiver);
        }));
        var worst = tmp$_2.component1(), list_1 = tmp$_2.component2();
        tmp$ = new Tree(new MoveEvaluation(label, worst, playerWhoMoved), list_1);
      }
       else {
        var list_2 = toList(moves);
        var destination_0 = ArrayList_init_0(collectionSizeOrDefault(list_2, 10));
        var tmp$_3;
        tmp$_3 = list_2.iterator();
        while (tmp$_3.hasNext()) {
          var item_0 = tmp$_3.next();
          destination_0.add_11rb$(item_0.v.evaluation);
        }
        var worst_0 = ensureNotNull(min(destination_0));
        tmp$ = new Tree(new MoveEvaluation(label, worst_0, playerWhoMoved), list_2);
      }
    }
    return tmp$;
  }
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function maxPruning($receiver, pruneLevel, f) {
    var result = ArrayList_init_1();
    var bestValue = {v: -2147483648};
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      result.add_11rb$(element);
      var value = f(element);
      if (value > pruneLevel) {
        return to(value, result);
      }
       else if (value > bestValue.v) {
        bestValue.v = value;
      }
    }
    return to(bestValue.v, result);
  }
  function minPruning($receiver, pruneLevel, f) {
    var result = ArrayList_init_1();
    var worstValue = {v: 2147483647};
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      result.add_11rb$(element);
      var value = f(element);
      if (value < pruneLevel) {
        return to(value, result);
      }
       else if (value < worstValue.v) {
        worstValue.v = value;
      }
    }
    return to(worstValue.v, result);
  }
  var extreme;
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
            var destination = ArrayList_init_1();
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
      return treeSearch(closure$player, it.state, closure$level - 1 | 0, closure$baseStrategy, closure$pruning, closure$pruneLevelMax, closure$pruneLevelMin);
    };
  }
  function treeSearch(player, state, level, baseStrategy, pruning, pruneLevelMax, pruneLevelMin) {
    var tmp$;
    if (level === 0)
      return baseStrategy(player, state);
    if (state.victor != null) {
      return equals(player, state.victor) ? 2147483647 : -2147483648;
    }
    if (pruning) {
      var currentPositionEvaluation = baseStrategy(player, state);
      if (currentPositionEvaluation < pruneLevelMin)
        return currentPositionEvaluation;
      if (currentPositionEvaluation > pruneLevelMax)
        return currentPositionEvaluation;
    }
    var moves = map(findAllMoves(state), treeSearch$lambda(player, level, baseStrategy, pruning, pruneLevelMax, pruneLevelMin));
    if (player === state.playersTurn) {
      if (pruning) {
        tmp$ = maxPruning_0(moves, pruneLevelMax);
      }
       else {
        tmp$ = ensureNotNull(max_0(moves));
      }
    }
     else {
      if (pruning) {
        tmp$ = minPruning_0(moves, pruneLevelMin);
      }
       else {
        tmp$ = ensureNotNull(min_0(moves));
      }
    }
    return tmp$;
  }
  function maxPruning_0($receiver, pruneLevel) {
    var bestValue = {v: -2147483648};
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element > pruneLevel) {
        return element;
      }
       else if (element > bestValue.v) {
        bestValue.v = element;
      }
    }
    return bestValue.v;
  }
  function minPruning_0($receiver, pruneLevel) {
    var worstValue = {v: 2147483647};
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element < pruneLevel) {
        return element;
      }
       else if (element < worstValue.v) {
        worstValue.v = element;
      }
    }
    return worstValue.v;
  }
  function ControlledGame(redController, blueController, uiHook, state) {
    if (state === void 0)
      state = State$Companion_getInstance().inital;
    Game.call(this, state);
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
  function Game(initialState) {
    if (initialState === void 0)
      initialState = State$Companion_getInstance().inital;
    this.states_r7t5l$_0 = mutableListOf([initialState]);
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
    this.from = from;
    this.to = to;
  }
  Move.prototype.toString = function () {
    return '(' + this.from + ' -> ' + this.to + ')';
  };
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
    else if (!isInGrid(this.grid, to.x, to.y))
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
    var destination = ArrayList_init_1();
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
  function move($receiver, move) {
    return $receiver.move_56t7qy$(move.from, move.to);
  }
  function canMove($receiver, move_0) {
    return Kotlin.isType(move($receiver, move_0), MoveResult$Success);
  }
  function appendln($receiver, s) {
    if (s === void 0)
      s = '';
    $receiver.append_gw00v9$(s).append_gw00v9$('\n');
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
            var answer = ArrayList_init_1();
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
  GameGrid$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var GameGrid$Companion_instance = null;
  function GameGrid$Companion_getInstance() {
    if (GameGrid$Companion_instance === null) {
      new GameGrid$Companion();
    }
    return GameGrid$Companion_instance;
  }
  GameGrid.prototype.get_vux9f0$ = function (x, y) {
    return isInGrid(this, x, y) ? this.elems[Kotlin.imul(y, this.width) + x | 0] : null;
  };
  GameGrid.prototype.getAllFor_11rb$ = function (t) {
    var tmp$;
    return (tmp$ = this.tokenIndexes_0.get_11rb$(t)) != null ? tmp$ : emptyList();
  };
  GameGrid.prototype.set_vq7693$ = function (x, y, t) {
    var tmp$;
    if (isInGrid(this, x, y)) {
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
          var answer = ArrayList_init_1();
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
    return isInGrid(this, x, y) ? this.elems[Kotlin.imul(y, this.width) + x | 0] : null;
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
  function isInGrid($receiver, x, y) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = $receiver.width;
    if (0 <= x && x < tmp$) {
      tmp$_0 = $receiver.height;
      tmp$_1 = (0 <= y && y < tmp$_0);
    }
     else
      tmp$_1 = false;
    return tmp$_1;
  }
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
  function NetFormat() {
  }
  NetFormat.prototype.encodeNullable_11rb$ = function (t) {
    if (t == null)
      return '_';
    else
      return this.encode_11rb$(t);
  };
  NetFormat.prototype.decodeNullable_61zpoe$ = function (s) {
    if (equals(s, '_'))
      return null;
    else
      return this.decode_61zpoe$(s);
  };
  NetFormat.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'NetFormat', interfaces: []};
  function PointNetFormat() {
    PointNetFormat_instance = this;
  }
  PointNetFormat.prototype.encode_11rb$ = function (t) {
    return t.x.toString() + ',' + t.y;
  };
  PointNetFormat.prototype.decode_61zpoe$ = function (s) {
    var f = split_0(s, [','], void 0, 2);
    var x = f.get_za3lpa$(0);
    var y = f.get_za3lpa$(1);
    return new Point(toInt(x), toInt(y));
  };
  PointNetFormat.$metadata$ = {kind: Kind_OBJECT, simpleName: 'PointNetFormat', interfaces: [NetFormat]};
  var PointNetFormat_instance = null;
  function PointNetFormat_getInstance() {
    if (PointNetFormat_instance === null) {
      new PointNetFormat();
    }
    return PointNetFormat_instance;
  }
  function MoveNetFormat() {
    MoveNetFormat_instance = this;
  }
  MoveNetFormat.prototype.encode_11rb$ = function (t) {
    var $receiver = PointNetFormat_getInstance();
    return $receiver.encode_11rb$(t.from) + ' -> ' + $receiver.encode_11rb$(t.to);
  };
  MoveNetFormat.prototype.decode_61zpoe$ = function (s) {
    var $receiver = split_0(s, [' -> '], void 0, 2);
    var transform = getCallableRef('decode', function ($receiver, s) {
      return $receiver.decode_61zpoe$(s);
    }.bind(null, PointNetFormat_getInstance()));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(transform(item));
    }
    var from = destination.get_za3lpa$(0);
    var to = destination.get_za3lpa$(1);
    return new Move(from, to);
  };
  MoveNetFormat.$metadata$ = {kind: Kind_OBJECT, simpleName: 'MoveNetFormat', interfaces: [NetFormat]};
  var MoveNetFormat_instance = null;
  function MoveNetFormat_getInstance() {
    if (MoveNetFormat_instance === null) {
      new MoveNetFormat();
    }
    return MoveNetFormat_instance;
  }
  function StateNetFormat() {
    StateNetFormat_instance = this;
  }
  StateNetFormat.prototype.encode_11rb$ = function (t) {
    var receiver = PointNetFormat_getInstance();
    var receiver_0 = MoveNetFormat_getInstance();
    var receiver_1 = GameGridNetFormat_getInstance();
    return t.playersTurn.toString() + ';' + receiver_1.encode_11rb$(t.grid) + ';' + receiver.encodeNullable_11rb$(t.lastPushed) + ';' + receiver_0.encodeNullable_11rb$(t.lastMove) + ';' + this.encodeNullable_11rb$(t.prev);
  };
  StateNetFormat.prototype.decode_61zpoe$ = function (s) {
    var f = split_0(s, [';'], void 0, 5);
    var playersTurn = f.get_za3lpa$(0);
    var grid = f.get_za3lpa$(1);
    var lastPushed = f.get_za3lpa$(2);
    var lastMove = f.get_za3lpa$(3);
    var prev = f.get_za3lpa$(4);
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = Player$valueOf(playersTurn);
    tmp$_0 = GameGridNetFormat_getInstance().decode_61zpoe$(grid);
    tmp$_1 = PointNetFormat_getInstance().decodeNullable_61zpoe$(lastPushed);
    tmp$_2 = MoveNetFormat_getInstance().decodeNullable_61zpoe$(lastMove);
    return new State(tmp$, tmp$_1, tmp$_0, this.decodeNullable_61zpoe$(prev), tmp$_2);
  };
  StateNetFormat.$metadata$ = {kind: Kind_OBJECT, simpleName: 'StateNetFormat', interfaces: [NetFormat]};
  var StateNetFormat_instance = null;
  function StateNetFormat_getInstance() {
    if (StateNetFormat_instance === null) {
      new StateNetFormat();
    }
    return StateNetFormat_instance;
  }
  function GameGridNetFormat() {
    GameGridNetFormat_instance = this;
  }
  GameGridNetFormat.prototype.encode_11rb$ = function (t) {
    return t.width.toString() + ',' + t.height + ',' + joinToString(t.elems, '', void 0, void 0, void 0, void 0, getCallableRef('encodeNullable', function ($receiver, t) {
      return $receiver.encodeNullable_11rb$(t);
    }.bind(null, PlayerNetFormat_getInstance())));
  };
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  GameGridNetFormat.prototype.decode_61zpoe$ = function (s) {
    var f = split_0(s, [','], void 0, 3);
    var width = f.get_za3lpa$(0);
    var height = f.get_za3lpa$(1);
    var elems = f.get_za3lpa$(2);
    var tmp$ = GameGrid$Companion_getInstance();
    var tmp$_0 = toInt(width);
    var tmp$_1 = toInt(height);
    var $receiver = toList_0(elems);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      destination.add_11rb$(String.fromCharCode(unboxChar(item)));
    }
    var transform = getCallableRef('decode', function ($receiver, s) {
      return $receiver.decode_61zpoe$(s);
    }.bind(null, PlayerNetFormat_getInstance()));
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_3;
    tmp$_3 = destination.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      destination_0.add_11rb$(transform(item_0));
    }
    return tmp$.create_vnf2z1$(tmp$_0, tmp$_1, copyToArray(destination_0));
  };
  GameGridNetFormat.$metadata$ = {kind: Kind_OBJECT, simpleName: 'GameGridNetFormat', interfaces: [NetFormat]};
  var GameGridNetFormat_instance = null;
  function GameGridNetFormat_getInstance() {
    if (GameGridNetFormat_instance === null) {
      new GameGridNetFormat();
    }
    return GameGridNetFormat_instance;
  }
  function PlayerNetFormat() {
    PlayerNetFormat_instance = this;
  }
  PlayerNetFormat.prototype.encode_11rb$ = function (t) {
    if (equals(t, Player$Red_getInstance()))
      return 'R';
    else if (equals(t, Player$Blue_getInstance()))
      return 'B';
    else if (t == null)
      return '_';
    else
      return Kotlin.noWhenBranchMatched();
  };
  PlayerNetFormat.prototype.decode_61zpoe$ = function (s) {
    switch (s) {
      case 'R':
        return Player$Red_getInstance();
      case 'B':
        return Player$Blue_getInstance();
      default:return null;
    }
  };
  PlayerNetFormat.$metadata$ = {kind: Kind_OBJECT, simpleName: 'PlayerNetFormat', interfaces: [NetFormat]};
  var PlayerNetFormat_instance = null;
  function PlayerNetFormat_getInstance() {
    if (PlayerNetFormat_instance === null) {
      new PlayerNetFormat();
    }
    return PlayerNetFormat_instance;
  }
  var package$de = _.de || (_.de = {});
  var package$earley = package$de.earley || (package$de.earley = {});
  var package$gogogo = package$earley.gogogo || (package$earley.gogogo = {});
  var package$ai = package$gogogo.ai || (package$gogogo.ai = {});
  package$ai.MoveToState = MoveToState;
  package$ai.bestMove_7dht$ = bestMove;
  package$ai.debugBestMove_7dht$ = debugBestMove;
  package$ai.AI = AI;
  var package$debug = package$ai.debug || (package$ai.debug = {});
  package$debug.MoveEvaluation = MoveEvaluation;
  package$debug.extractEvaluation_t333es$ = extractEvaluation;
  package$debug.Tree = Tree;
  package$debug.walk_y6tmdh$ = walk;
  package$debug.withDebug_h7o6yf$ = withDebug;
  Object.defineProperty(package$debug, 'superDebug', {get: function () {
    return superDebug;
  }});
  package$debug.treeSearchStrategyDebug_jqvrqk$ = treeSearchStrategyDebug;
  Object.defineProperty(package$ai, 'Evaluations', {get: Evaluations_getInstance});
  package$ai.findAllMoves_1pq5d1$ = findAllMoves;
  package$ai.treeSearchStrategy_r1a1ux$ = treeSearchStrategy;
  var package$game = package$gogogo.game || (package$gogogo.game = {});
  package$game.ControlledGame = ControlledGame;
  package$game.UIHook = UIHook;
  package$game.Point = Point;
  package$game.Game = Game;
  Object.defineProperty(Player, 'Red', {get: Player$Red_getInstance});
  Object.defineProperty(Player, 'Blue', {get: Player$Blue_getInstance});
  package$game.Player = Player;
  package$game.next_txv5hr$ = next;
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
  package$game.State = State;
  package$game.debugString_1pq5d1$ = debugString;
  package$game.move_yawtop$ = move;
  package$game.canMove_yawtop$ = canMove;
  var package$grid = package$game.grid || (package$game.grid = {});
  package$grid.Alterations = Alterations;
  Object.defineProperty(GameGrid, 'Companion', {get: GameGrid$Companion_getInstance});
  package$grid.GameGrid = GameGrid;
  package$grid.GenericGrid = GenericGrid;
  Object.defineProperty(Grid, 'Companion', {get: Grid$Companion_getInstance});
  package$grid.Grid = Grid;
  package$grid.MutableGrid = MutableGrid;
  package$grid.IndexableGrid = IndexableGrid;
  package$grid.get_qg01xr$ = get_0;
  package$grid.isInGrid_gdamk6$ = isInGrid;
  var package$net = package$gogogo.net || (package$gogogo.net = {});
  package$net.PlayerInfo = PlayerInfo;
  package$net.MatchInfo = MatchInfo;
  Object.defineProperty(package$net, 'Messages', {get: Messages_getInstance});
  package$net.NetFormat = NetFormat;
  Object.defineProperty(package$net, 'PointNetFormat', {get: PointNetFormat_getInstance});
  Object.defineProperty(package$net, 'MoveNetFormat', {get: MoveNetFormat_getInstance});
  Object.defineProperty(package$net, 'StateNetFormat', {get: StateNetFormat_getInstance});
  Object.defineProperty(package$net, 'GameGridNetFormat', {get: GameGridNetFormat_getInstance});
  Object.defineProperty(package$net, 'PlayerNetFormat', {get: PlayerNetFormat_getInstance});
  PointNetFormat.prototype.encodeNullable_11rb$ = NetFormat.prototype.encodeNullable_11rb$;
  PointNetFormat.prototype.decodeNullable_61zpoe$ = NetFormat.prototype.decodeNullable_61zpoe$;
  MoveNetFormat.prototype.encodeNullable_11rb$ = NetFormat.prototype.encodeNullable_11rb$;
  MoveNetFormat.prototype.decodeNullable_61zpoe$ = NetFormat.prototype.decodeNullable_61zpoe$;
  StateNetFormat.prototype.encodeNullable_11rb$ = NetFormat.prototype.encodeNullable_11rb$;
  StateNetFormat.prototype.decodeNullable_61zpoe$ = NetFormat.prototype.decodeNullable_61zpoe$;
  GameGridNetFormat.prototype.encodeNullable_11rb$ = NetFormat.prototype.encodeNullable_11rb$;
  GameGridNetFormat.prototype.decodeNullable_61zpoe$ = NetFormat.prototype.decodeNullable_61zpoe$;
  PlayerNetFormat.prototype.encodeNullable_11rb$ = NetFormat.prototype.encodeNullable_11rb$;
  PlayerNetFormat.prototype.decodeNullable_61zpoe$ = NetFormat.prototype.decodeNullable_61zpoe$;
  easyDebug = withDebug(Evaluations_getInstance().sumSquarePosition);
  level1 = treeSearchStrategyDebug(1, easyDebug, false);
  level2 = treeSearchStrategyDebug(2, easyDebug, false);
  level3 = treeSearchStrategyDebug(3, easyDebug, false);
  level4 = treeSearchStrategyDebug(4, easyDebug, false);
  superDebug = treeSearchStrategyDebug(7, level3, true, 40);
  superDebugR = treeSearchStrategyDebug(6, level3, true, 40);
  extreme = treeSearchStrategy(4, Evaluations_getInstance().sumSquarePosition, false);
  GAME_WIDTH = 6;
  GAME_HEIGHT = 5;
  standardStartGrid = GameGrid$Companion_getInstance().create_fzygrl$(6, 5, standardStartGrid$lambda);
  return _;
}(typeof this['gogogo-common'] === 'undefined' ? {} : this['gogogo-common'], kotlin, this['kotlinx-coroutines-core']);

//# sourceMappingURL=gogogo-common.js.map
