if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'gogogo-common'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'gogogo-common'.");
}
this['gogogo-common'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var toString = Kotlin.toString;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var throwCCE = Kotlin.throwCCE;
  var contentEquals = Kotlin.arrayEquals;
  var contentHashCode = Kotlin.arrayHashCode;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var equals = Kotlin.equals;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  Player.prototype = Object.create(Enum.prototype);
  Player.prototype.constructor = Player;
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
  Grid$Companion.prototype.create_6qkxfg$ = defineInlineFunction('gogogo-common.de.earley.gogogo.game.Grid.Companion.create_6qkxfg$', wrapFunction(function () {
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    var wrapFunction = Kotlin.wrapFunction;
    var Grid_init = _.de.earley.gogogo.game.Grid;
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
      return new Grid_init(width, height, copyToArray(destination));
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
  Grid.prototype.forEach_lbptwu$ = defineInlineFunction('gogogo-common.de.earley.gogogo.game.Grid.forEach_lbptwu$', wrapFunction(function () {
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
  Grid.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, Grid) ? tmp$_0 : throwCCE();
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
  var copy = defineInlineFunction('gogogo-common.de.earley.gogogo.game.copy_r2w37y$', wrapFunction(function () {
    var Alterations_init = _.de.earley.gogogo.game.Alterations;
    var Grid = _.de.earley.gogogo.game.Grid;
    var Point_init = _.de.earley.gogogo.game.Point;
    var wrapFunction = Kotlin.wrapFunction;
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
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
      return new Grid(width, height, copyToArray(destination));
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
  var create = defineInlineFunction('gogogo-common.de.earley.gogogo.game.create_syssx5$', wrapFunction(function () {
    var Grid = _.de.earley.gogogo.game.Grid;
    var Point_init = _.de.earley.gogogo.game.Point;
    var wrapFunction = Kotlin.wrapFunction;
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
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
      return new Grid(width, height, copyToArray(destination));
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
        var p = new Point(item, element);
        tmp$_1.call(destination_0, $receiver_0.ops.containsKey_11rb$(p) ? $receiver_0.ops.get_11rb$(p) : $receiver.get_vux9f0$(item, element));
      }
      var list = destination_0;
      addAll(destination, list);
    }
    var newGrid = new Grid(width, height, copyToArray(destination));
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
  var package$de = _.de || (_.de = {});
  var package$earley = package$de.earley || (package$de.earley = {});
  var package$gogogo = package$earley.gogogo || (package$earley.gogogo = {});
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
  package$game.Game = Game;
  $$importsForInline$$['gogogo-common'] = _;
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
  WIDTH = 6;
  HEIGHT = 5;
  var $receiver = until(0, 5);
  var destination = ArrayList_init();
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var element = tmp$.next();
    var $receiver_0 = until(0, 6);
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
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
  standardStartGrid = new Grid(6, 5, copyToArray(destination));
  Kotlin.defineModule('gogogo-common', _);
  return _;
}(typeof this['gogogo-common'] === 'undefined' ? {} : this['gogogo-common'], kotlin);
