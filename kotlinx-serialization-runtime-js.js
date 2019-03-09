(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-runtime-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinx-serialization-runtime-js'.");
    }
    root['kotlinx-serialization-runtime-js'] = factory(typeof this['kotlinx-serialization-runtime-js'] === 'undefined' ? {} : this['kotlinx-serialization-runtime-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var getKClass = Kotlin.getKClass;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var toBoxedChar = Kotlin.toBoxedChar;
  var throwCCE = Kotlin.throwCCE;
  var unboxChar = Kotlin.unboxChar;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var kotlin = Kotlin.kotlin;
  var Any = Object;
  var equals = Kotlin.equals;
  var toByte = Kotlin.toByte;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var kotlin_js_internal_ByteCompanionObject = Kotlin.kotlin.js.internal.ByteCompanionObject;
  var toShort = Kotlin.toShort;
  var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  var L2147483648 = new Kotlin.Long(-2147483648, 0);
  var Long$Companion$MAX_VALUE = Kotlin.Long.MAX_VALUE;
  var Long$Companion$MIN_VALUE = Kotlin.Long.MIN_VALUE;
  var toChar = Kotlin.toChar;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var hashCode = Kotlin.hashCode;
  var asList = Kotlin.kotlin.collections.asList_us0mfu$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var LinkedHashSet = Kotlin.kotlin.collections.LinkedHashSet;
  var HashSet = Kotlin.kotlin.collections.HashSet;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var LinkedHashMap = Kotlin.kotlin.collections.LinkedHashMap;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_73mtqc$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var HashMap = Kotlin.kotlin.collections.HashMap;
  var indexOf = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var Char = Kotlin.BoxedChar;
  var PrimitiveClasses$doubleClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.doubleClass;
  var PrimitiveClasses$floatClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.floatClass;
  var Long = Kotlin.Long;
  var PrimitiveClasses$intClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.intClass;
  var PrimitiveClasses$shortClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.shortClass;
  var PrimitiveClasses$byteClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.byteClass;
  var PrimitiveClasses$booleanClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.booleanClass;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var getOrNull_0 = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var copyOf = Kotlin.kotlin.collections.copyOf_1qu12l$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Map$Entry = Kotlin.kotlin.collections.Map.Entry;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var trimStart = Kotlin.kotlin.text.trimStart_wqw3xr$;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init;
  var isFinite = Kotlin.kotlin.isFinite_81szk$;
  var isFinite_0 = Kotlin.kotlin.isFinite_yrwdxr$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_pdl1vz$;
  var toByte_0 = Kotlin.kotlin.text.toByte_pdl1vz$;
  var toShort_0 = Kotlin.kotlin.text.toShort_pdl1vz$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toLong = Kotlin.kotlin.text.toLong_pdl1vz$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var single = Kotlin.kotlin.text.single_gw00vp$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toLongOrNull = Kotlin.kotlin.text.toLongOrNull_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var NoSuchElementException = Kotlin.kotlin.NoSuchElementException;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Map = Kotlin.kotlin.collections.Map;
  var List = Kotlin.kotlin.collections.List;
  var String_0 = Kotlin.kotlin.text.String_8chfmy$;
  var copyOf_0 = Kotlin.kotlin.collections.copyOf_gtcw5h$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var throwUPAE = Kotlin.throwUPAE;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var equals_0 = Kotlin.kotlin.text.equals_igcy3c$;
  var L_128 = Kotlin.Long.fromInt(-128);
  var L0 = Kotlin.Long.ZERO;
  var L127 = Kotlin.Long.fromInt(127);
  var L128 = Kotlin.Long.fromInt(128);
  var L_1 = Kotlin.Long.NEG_ONE;
  var Exception = Kotlin.kotlin.Exception;
  var toString = Kotlin.toString;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  UpdateMode.prototype = Object.create(Enum.prototype);
  UpdateMode.prototype.constructor = UpdateMode;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  PrimitiveKind$INT.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$INT.prototype.constructor = PrimitiveKind$INT;
  PrimitiveKind$UNIT.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$UNIT.prototype.constructor = PrimitiveKind$UNIT;
  PrimitiveKind$BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$BOOLEAN.prototype.constructor = PrimitiveKind$BOOLEAN;
  PrimitiveKind$BYTE.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$BYTE.prototype.constructor = PrimitiveKind$BYTE;
  PrimitiveKind$SHORT.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$SHORT.prototype.constructor = PrimitiveKind$SHORT;
  PrimitiveKind$LONG.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$LONG.prototype.constructor = PrimitiveKind$LONG;
  PrimitiveKind$FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$FLOAT.prototype.constructor = PrimitiveKind$FLOAT;
  PrimitiveKind$DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$DOUBLE.prototype.constructor = PrimitiveKind$DOUBLE;
  PrimitiveKind$CHAR.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$CHAR.prototype.constructor = PrimitiveKind$CHAR;
  PrimitiveKind$STRING.prototype = Object.create(PrimitiveKind.prototype);
  PrimitiveKind$STRING.prototype.constructor = PrimitiveKind$STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  StructureKind$CLASS.prototype = Object.create(StructureKind.prototype);
  StructureKind$CLASS.prototype.constructor = StructureKind$CLASS;
  StructureKind$LIST.prototype = Object.create(StructureKind.prototype);
  StructureKind$LIST.prototype.constructor = StructureKind$LIST;
  StructureKind$MAP.prototype = Object.create(StructureKind.prototype);
  StructureKind$MAP.prototype.constructor = StructureKind$MAP;
  UnionKind.prototype = Object.create(SerialKind.prototype);
  UnionKind.prototype.constructor = UnionKind;
  UnionKind$OBJECT.prototype = Object.create(UnionKind.prototype);
  UnionKind$OBJECT.prototype.constructor = UnionKind$OBJECT;
  UnionKind$ENUM_KIND.prototype = Object.create(UnionKind.prototype);
  UnionKind$ENUM_KIND.prototype.constructor = UnionKind$ENUM_KIND;
  UnionKind$SEALED.prototype = Object.create(UnionKind.prototype);
  UnionKind$SEALED.prototype.constructor = UnionKind$SEALED;
  UnionKind$POLYMORPHIC.prototype = Object.create(UnionKind.prototype);
  UnionKind$POLYMORPHIC.prototype.constructor = UnionKind$POLYMORPHIC;
  SerializationException.prototype = Object.create(RuntimeException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  UpdateNotSupportedException.prototype = Object.create(SerializationException.prototype);
  UpdateNotSupportedException.prototype.constructor = UpdateNotSupportedException;
  ArrayClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayClassDesc.prototype.constructor = ArrayClassDesc;
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  ListLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  ListLikeSerializer.prototype.constructor = ListLikeSerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  ReferenceArraySerializer.prototype = Object.create(ListLikeSerializer.prototype);
  ReferenceArraySerializer.prototype.constructor = ReferenceArraySerializer;
  ArrayListSerializer.prototype = Object.create(ListLikeSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  EnumDescriptor.prototype = Object.create(SerialClassDescImpl.prototype);
  EnumDescriptor.prototype.constructor = EnumDescriptor;
  EnumSerializer.prototype = Object.create(CommonEnumSerializer.prototype);
  EnumSerializer.prototype.constructor = EnumSerializer;
  IntDescriptor.prototype = Object.create(PrimitiveDescriptor.prototype);
  IntDescriptor.prototype.constructor = IntDescriptor;
  UnitDescriptor.prototype = Object.create(PrimitiveDescriptor.prototype);
  UnitDescriptor.prototype.constructor = UnitDescriptor;
  MissingDescriptorException.prototype = Object.create(SerializationException.prototype);
  MissingDescriptorException.prototype.constructor = MissingDescriptorException;
  JSON$JsonOutput.prototype = Object.create(ElementValueEncoder.prototype);
  JSON$JsonOutput.prototype.constructor = JSON$JsonOutput;
  JSON$JsonInput.prototype = Object.create(ElementValueDecoder.prototype);
  JSON$JsonInput.prototype.constructor = JSON$JsonInput;
  JSON_0.prototype = Object.create(AbstractSerialFormat.prototype);
  JSON_0.prototype.constructor = JSON_0;
  Mode.prototype = Object.create(Enum.prototype);
  Mode.prototype.constructor = Mode;
  JsonPrimitive.prototype = Object.create(JsonElement.prototype);
  JsonPrimitive.prototype.constructor = JsonPrimitive;
  JsonLiteral.prototype = Object.create(JsonPrimitive.prototype);
  JsonLiteral.prototype.constructor = JsonLiteral;
  JsonNull.prototype = Object.create(JsonPrimitive.prototype);
  JsonNull.prototype.constructor = JsonNull;
  JsonObject.prototype = Object.create(JsonElement.prototype);
  JsonObject.prototype.constructor = JsonObject;
  JsonArray.prototype = Object.create(JsonElement.prototype);
  JsonArray.prototype.constructor = JsonArray;
  JsonException.prototype = Object.create(SerializationException.prototype);
  JsonException.prototype.constructor = JsonException;
  JsonInvalidValueInStrictModeException.prototype = Object.create(JsonException.prototype);
  JsonInvalidValueInStrictModeException.prototype.constructor = JsonInvalidValueInStrictModeException;
  JsonUnknownKeyException.prototype = Object.create(JsonException.prototype);
  JsonUnknownKeyException.prototype.constructor = JsonUnknownKeyException;
  JsonParsingException.prototype = Object.create(JsonException.prototype);
  JsonParsingException.prototype.constructor = JsonParsingException;
  JsonElementTypeMismatchException.prototype = Object.create(JsonException.prototype);
  JsonElementTypeMismatchException.prototype.constructor = JsonElementTypeMismatchException;
  var ByteOrder$LITTLE_ENDIAN_instance;
  var ByteOrder$BIG_ENDIAN_instance;
  function Encoder() {
  }
  Encoder.prototype.encodeSerializableValue_tf03ej$ = function (saver, value) {
    saver.serialize_awe97i$(this, value);
  };
  Encoder.prototype.encodeNullableSerializableValue_f4686g$ = function (saver, value) {
    if (value == null) {
      this.encodeNull();
    }
     else {
      this.encodeNotNullMark();
      this.encodeSerializableValue_tf03ej$(saver, value);
    }
  };
  Encoder.prototype.beginCollection_gly1x5$ = function (desc, collectionSize, typeParams) {
    return this.beginStructure_r0sa6z$(desc, typeParams.slice());
  };
  Encoder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Encoder', interfaces: []};
  function CompositeEncoder() {
  }
  CompositeEncoder.prototype.endStructure_qatsm0$ = function (desc) {
  };
  CompositeEncoder.prototype.shouldEncodeElementDefault_3zr2iy$ = function (desc, index) {
    return true;
  };
  CompositeEncoder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CompositeEncoder', interfaces: []};
  function Decoder() {
  }
  Decoder.prototype.decodeSerializableValue_w63s0f$ = function (loader) {
    return loader.deserialize_nts5qn$(this);
  };
  Decoder.prototype.decodeNullableSerializableValue_aae3ea$ = function (loader) {
    return this.decodeNotNullMark() ? this.decodeSerializableValue_w63s0f$(loader) : this.decodeNull();
  };
  Decoder.prototype.updateSerializableValue_19c8k5$ = function (loader, old) {
    var tmp$;
    switch (this.updateMode.name) {
      case 'BANNED':
        throw new UpdateNotSupportedException(loader.descriptor.name);
      case 'OVERWRITE':
        tmp$ = this.decodeSerializableValue_w63s0f$(loader);
        break;
      case 'UPDATE':
        tmp$ = loader.patch_mynpiu$(this, old);
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  Decoder.prototype.updateNullableSerializableValue_exmlbs$ = function (loader, old) {
    var tmp$;
    if (this.updateMode === UpdateMode$BANNED_getInstance())
      throw new UpdateNotSupportedException(loader.descriptor.name);
    else if (this.updateMode === UpdateMode$OVERWRITE_getInstance() || old == null)
      tmp$ = this.decodeNullableSerializableValue_aae3ea$(loader);
    else if (this.decodeNotNullMark())
      tmp$ = loader.patch_mynpiu$(this, old);
    else {
      this.decodeNull();
      tmp$ = old;
    }
    return tmp$;
  };
  Decoder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'Decoder', interfaces: []};
  function CompositeDecoder() {
    CompositeDecoder$Companion_getInstance();
  }
  CompositeDecoder.prototype.endStructure_qatsm0$ = function (desc) {
  };
  function CompositeDecoder$Companion() {
    CompositeDecoder$Companion_instance = this;
    this.READ_DONE = -1;
    this.READ_ALL = -2;
    this.UNKNOWN_NAME = -3;
  }
  CompositeDecoder$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var CompositeDecoder$Companion_instance = null;
  function CompositeDecoder$Companion_getInstance() {
    if (CompositeDecoder$Companion_instance === null) {
      new CompositeDecoder$Companion();
    }
    return CompositeDecoder$Companion_instance;
  }
  CompositeDecoder.prototype.decodeCollectionSize_qatsm0$ = function (desc) {
    return -1;
  };
  CompositeDecoder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'CompositeDecoder', interfaces: []};
  function ContextSerializer(serializableClass) {
    this.serializableClass = serializableClass;
    this.descriptor_f98ejb$_0 = new ContextSerializer$descriptor$ObjectLiteral('CONTEXT');
  }
  function SerialDescriptor() {
  }
  SerialDescriptor.prototype.getEntityAnnotations = function () {
    return emptyList();
  };
  SerialDescriptor.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return emptyList();
  };
  Object.defineProperty(SerialDescriptor.prototype, 'elementsCount', {get: function () {
    return 0;
  }});
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  SerialDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    throw new NotImplementedError_init();
  };
  Object.defineProperty(SerialDescriptor.prototype, 'isNullable', {get: function () {
    return false;
  }});
  SerialDescriptor.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SerialDescriptor', interfaces: []};
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SerializationStrategy', interfaces: []};
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'DeserializationStrategy', interfaces: []};
  function UpdateMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function UpdateMode_initFields() {
    UpdateMode_initFields = function () {
    };
    UpdateMode$BANNED_instance = new UpdateMode('BANNED', 0);
    UpdateMode$OVERWRITE_instance = new UpdateMode('OVERWRITE', 1);
    UpdateMode$UPDATE_instance = new UpdateMode('UPDATE', 2);
  }
  var UpdateMode$BANNED_instance;
  function UpdateMode$BANNED_getInstance() {
    UpdateMode_initFields();
    return UpdateMode$BANNED_instance;
  }
  var UpdateMode$OVERWRITE_instance;
  function UpdateMode$OVERWRITE_getInstance() {
    UpdateMode_initFields();
    return UpdateMode$OVERWRITE_instance;
  }
  var UpdateMode$UPDATE_instance;
  function UpdateMode$UPDATE_getInstance() {
    UpdateMode_initFields();
    return UpdateMode$UPDATE_instance;
  }
  UpdateMode.$metadata$ = {kind: Kind_CLASS, simpleName: 'UpdateMode', interfaces: [Enum]};
  function UpdateMode$values() {
    return [UpdateMode$BANNED_getInstance(), UpdateMode$OVERWRITE_getInstance(), UpdateMode$UPDATE_getInstance()];
  }
  UpdateMode.values = UpdateMode$values;
  function UpdateMode$valueOf(name) {
    switch (name) {
      case 'BANNED':
        return UpdateMode$BANNED_getInstance();
      case 'OVERWRITE':
        return UpdateMode$OVERWRITE_getInstance();
      case 'UPDATE':
        return UpdateMode$UPDATE_getInstance();
      default:throwISE('No enum constant kotlinx.serialization.UpdateMode.' + name);
    }
  }
  UpdateMode.valueOf_61zpoe$ = UpdateMode$valueOf;
  function KSerializer() {
  }
  KSerializer.prototype.patch_mynpiu$ = function (input, old) {
    throw new UpdateNotSupportedException(this.descriptor.name);
  };
  KSerializer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'KSerializer', interfaces: [DeserializationStrategy, SerializationStrategy]};
  function encode_0($receiver, strategy, obj) {
    strategy.serialize_awe97i$($receiver, obj);
  }
  function decode_0($receiver, loader) {
    return loader.deserialize_nts5qn$($receiver);
  }
  var deprecationText;
  function SerialKind() {
  }
  SerialKind.$metadata$ = {kind: Kind_CLASS, simpleName: 'SerialKind', interfaces: []};
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function PrimitiveKind$INT() {
    PrimitiveKind$INT_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$INT.$metadata$ = {kind: Kind_OBJECT, simpleName: 'INT', interfaces: [PrimitiveKind]};
  var PrimitiveKind$INT_instance = null;
  function PrimitiveKind$INT_getInstance() {
    if (PrimitiveKind$INT_instance === null) {
      new PrimitiveKind$INT();
    }
    return PrimitiveKind$INT_instance;
  }
  function PrimitiveKind$UNIT() {
    PrimitiveKind$UNIT_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$UNIT.$metadata$ = {kind: Kind_OBJECT, simpleName: 'UNIT', interfaces: [PrimitiveKind]};
  var PrimitiveKind$UNIT_instance = null;
  function PrimitiveKind$UNIT_getInstance() {
    if (PrimitiveKind$UNIT_instance === null) {
      new PrimitiveKind$UNIT();
    }
    return PrimitiveKind$UNIT_instance;
  }
  function PrimitiveKind$BOOLEAN() {
    PrimitiveKind$BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$BOOLEAN.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BOOLEAN', interfaces: [PrimitiveKind]};
  var PrimitiveKind$BOOLEAN_instance = null;
  function PrimitiveKind$BOOLEAN_getInstance() {
    if (PrimitiveKind$BOOLEAN_instance === null) {
      new PrimitiveKind$BOOLEAN();
    }
    return PrimitiveKind$BOOLEAN_instance;
  }
  function PrimitiveKind$BYTE() {
    PrimitiveKind$BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$BYTE.$metadata$ = {kind: Kind_OBJECT, simpleName: 'BYTE', interfaces: [PrimitiveKind]};
  var PrimitiveKind$BYTE_instance = null;
  function PrimitiveKind$BYTE_getInstance() {
    if (PrimitiveKind$BYTE_instance === null) {
      new PrimitiveKind$BYTE();
    }
    return PrimitiveKind$BYTE_instance;
  }
  function PrimitiveKind$SHORT() {
    PrimitiveKind$SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$SHORT.$metadata$ = {kind: Kind_OBJECT, simpleName: 'SHORT', interfaces: [PrimitiveKind]};
  var PrimitiveKind$SHORT_instance = null;
  function PrimitiveKind$SHORT_getInstance() {
    if (PrimitiveKind$SHORT_instance === null) {
      new PrimitiveKind$SHORT();
    }
    return PrimitiveKind$SHORT_instance;
  }
  function PrimitiveKind$LONG() {
    PrimitiveKind$LONG_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$LONG.$metadata$ = {kind: Kind_OBJECT, simpleName: 'LONG', interfaces: [PrimitiveKind]};
  var PrimitiveKind$LONG_instance = null;
  function PrimitiveKind$LONG_getInstance() {
    if (PrimitiveKind$LONG_instance === null) {
      new PrimitiveKind$LONG();
    }
    return PrimitiveKind$LONG_instance;
  }
  function PrimitiveKind$FLOAT() {
    PrimitiveKind$FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$FLOAT.$metadata$ = {kind: Kind_OBJECT, simpleName: 'FLOAT', interfaces: [PrimitiveKind]};
  var PrimitiveKind$FLOAT_instance = null;
  function PrimitiveKind$FLOAT_getInstance() {
    if (PrimitiveKind$FLOAT_instance === null) {
      new PrimitiveKind$FLOAT();
    }
    return PrimitiveKind$FLOAT_instance;
  }
  function PrimitiveKind$DOUBLE() {
    PrimitiveKind$DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$DOUBLE.$metadata$ = {kind: Kind_OBJECT, simpleName: 'DOUBLE', interfaces: [PrimitiveKind]};
  var PrimitiveKind$DOUBLE_instance = null;
  function PrimitiveKind$DOUBLE_getInstance() {
    if (PrimitiveKind$DOUBLE_instance === null) {
      new PrimitiveKind$DOUBLE();
    }
    return PrimitiveKind$DOUBLE_instance;
  }
  function PrimitiveKind$CHAR() {
    PrimitiveKind$CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$CHAR.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CHAR', interfaces: [PrimitiveKind]};
  var PrimitiveKind$CHAR_instance = null;
  function PrimitiveKind$CHAR_getInstance() {
    if (PrimitiveKind$CHAR_instance === null) {
      new PrimitiveKind$CHAR();
    }
    return PrimitiveKind$CHAR_instance;
  }
  function PrimitiveKind$STRING() {
    PrimitiveKind$STRING_instance = this;
    PrimitiveKind.call(this);
  }
  PrimitiveKind$STRING.$metadata$ = {kind: Kind_OBJECT, simpleName: 'STRING', interfaces: [PrimitiveKind]};
  var PrimitiveKind$STRING_instance = null;
  function PrimitiveKind$STRING_getInstance() {
    if (PrimitiveKind$STRING_instance === null) {
      new PrimitiveKind$STRING();
    }
    return PrimitiveKind$STRING_instance;
  }
  PrimitiveKind.$metadata$ = {kind: Kind_CLASS, simpleName: 'PrimitiveKind', interfaces: [SerialKind]};
  function StructureKind() {
    SerialKind.call(this);
  }
  function StructureKind$CLASS() {
    StructureKind$CLASS_instance = this;
    StructureKind.call(this);
  }
  StructureKind$CLASS.$metadata$ = {kind: Kind_OBJECT, simpleName: 'CLASS', interfaces: [StructureKind]};
  var StructureKind$CLASS_instance = null;
  function StructureKind$CLASS_getInstance() {
    if (StructureKind$CLASS_instance === null) {
      new StructureKind$CLASS();
    }
    return StructureKind$CLASS_instance;
  }
  function StructureKind$LIST() {
    StructureKind$LIST_instance = this;
    StructureKind.call(this);
  }
  StructureKind$LIST.$metadata$ = {kind: Kind_OBJECT, simpleName: 'LIST', interfaces: [StructureKind]};
  var StructureKind$LIST_instance = null;
  function StructureKind$LIST_getInstance() {
    if (StructureKind$LIST_instance === null) {
      new StructureKind$LIST();
    }
    return StructureKind$LIST_instance;
  }
  function StructureKind$MAP() {
    StructureKind$MAP_instance = this;
    StructureKind.call(this);
  }
  StructureKind$MAP.$metadata$ = {kind: Kind_OBJECT, simpleName: 'MAP', interfaces: [StructureKind]};
  var StructureKind$MAP_instance = null;
  function StructureKind$MAP_getInstance() {
    if (StructureKind$MAP_instance === null) {
      new StructureKind$MAP();
    }
    return StructureKind$MAP_instance;
  }
  StructureKind.$metadata$ = {kind: Kind_CLASS, simpleName: 'StructureKind', interfaces: [SerialKind]};
  function UnionKind() {
    SerialKind.call(this);
  }
  function UnionKind$OBJECT() {
    UnionKind$OBJECT_instance = this;
    UnionKind.call(this);
  }
  UnionKind$OBJECT.$metadata$ = {kind: Kind_OBJECT, simpleName: 'OBJECT', interfaces: [UnionKind]};
  var UnionKind$OBJECT_instance = null;
  function UnionKind$OBJECT_getInstance() {
    if (UnionKind$OBJECT_instance === null) {
      new UnionKind$OBJECT();
    }
    return UnionKind$OBJECT_instance;
  }
  function UnionKind$ENUM_KIND() {
    UnionKind$ENUM_KIND_instance = this;
    UnionKind.call(this);
  }
  UnionKind$ENUM_KIND.$metadata$ = {kind: Kind_OBJECT, simpleName: 'ENUM_KIND', interfaces: [UnionKind]};
  var UnionKind$ENUM_KIND_instance = null;
  function UnionKind$ENUM_KIND_getInstance() {
    if (UnionKind$ENUM_KIND_instance === null) {
      new UnionKind$ENUM_KIND();
    }
    return UnionKind$ENUM_KIND_instance;
  }
  function UnionKind$SEALED() {
    UnionKind$SEALED_instance = this;
    UnionKind.call(this);
  }
  UnionKind$SEALED.$metadata$ = {kind: Kind_OBJECT, simpleName: 'SEALED', interfaces: [UnionKind]};
  var UnionKind$SEALED_instance = null;
  function UnionKind$SEALED_getInstance() {
    if (UnionKind$SEALED_instance === null) {
      new UnionKind$SEALED();
    }
    return UnionKind$SEALED_instance;
  }
  function UnionKind$POLYMORPHIC() {
    UnionKind$POLYMORPHIC_instance = this;
    UnionKind.call(this);
  }
  UnionKind$POLYMORPHIC.$metadata$ = {kind: Kind_OBJECT, simpleName: 'POLYMORPHIC', interfaces: [UnionKind]};
  var UnionKind$POLYMORPHIC_instance = null;
  function UnionKind$POLYMORPHIC_getInstance() {
    if (UnionKind$POLYMORPHIC_instance === null) {
      new UnionKind$POLYMORPHIC();
    }
    return UnionKind$POLYMORPHIC_instance;
  }
  UnionKind.$metadata$ = {kind: Kind_CLASS, simpleName: 'UnionKind', interfaces: [SerialKind]};
  function ElementValueEncoder() {
    this.context_p94q9z$_0 = EmptyContext_getInstance();
  }
  Object.defineProperty(ElementValueEncoder.prototype, 'context', {get: function () {
    return this.context_p94q9z$_0;
  }, set: function (context) {
    this.context_p94q9z$_0 = context;
  }});
  ElementValueEncoder.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    return this;
  };
  ElementValueEncoder.prototype.encodeElement_3zr2iy$ = function (desc, index) {
    return true;
  };
  ElementValueEncoder.prototype.encodeNotNullMark = function () {
  };
  ElementValueEncoder.prototype.encodeValue_za3rmp$ = function (value) {
    throw new SerializationException('Non-serializable ' + Kotlin.getKClassFromExpression(value) + ' is not supported by ' + Kotlin.getKClassFromExpression(this) + ' encoder');
  };
  ElementValueEncoder.prototype.encodeNull = function () {
    throw new SerializationException('null is not supported');
  };
  ElementValueEncoder.prototype.encodeUnit = function () {
    var output = this.beginStructure_r0sa6z$(UnitSerializer_getInstance().descriptor, []);
    output.endStructure_qatsm0$(UnitSerializer_getInstance().descriptor);
  };
  ElementValueEncoder.prototype.encodeBoolean_6taknv$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeByte_s8j3t7$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeShort_mq22fl$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeInt_za3lpa$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeLong_s8cxhz$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeFloat_mx4ult$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeDouble_14dthe$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeValue_za3rmp$(toBoxedChar(value));
  };
  ElementValueEncoder.prototype.encodeString_61zpoe$ = function (value) {
    this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeEnum_39yahq$ = function (enumDescription, ordinal) {
    this.encodeValue_za3rmp$(ordinal);
  };
  ElementValueEncoder.prototype.encodeNonSerializableElement_4wpkd1$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeValue_za3rmp$(value);
  };
  ElementValueEncoder.prototype.encodeUnitElement_3zr2iy$ = function (desc, index) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeUnit();
  };
  ElementValueEncoder.prototype.encodeBooleanElement_w1b0nl$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeBoolean_6taknv$(value);
  };
  ElementValueEncoder.prototype.encodeByteElement_a3tadb$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeByte_s8j3t7$(value);
  };
  ElementValueEncoder.prototype.encodeShortElement_tet9k5$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeShort_mq22fl$(value);
  };
  ElementValueEncoder.prototype.encodeIntElement_4wpqag$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeInt_za3lpa$(value);
  };
  ElementValueEncoder.prototype.encodeLongElement_a3zgoj$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeLong_s8cxhz$(value);
  };
  ElementValueEncoder.prototype.encodeFloatElement_t7qhdx$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeFloat_mx4ult$(value);
  };
  ElementValueEncoder.prototype.encodeDoubleElement_imzr5k$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeDouble_14dthe$(value);
  };
  ElementValueEncoder.prototype.encodeCharElement_a3tkb1$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeChar_s8itvh$(value);
  };
  ElementValueEncoder.prototype.encodeStringElement_bgm7zs$ = function (desc, index, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeString_61zpoe$(value);
  };
  ElementValueEncoder.prototype.encodeSerializableElement_blecud$ = function (desc, index, saver, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeSerializableValue_tf03ej$(saver, value);
  };
  ElementValueEncoder.prototype.encodeNullableSerializableElement_orpvvi$ = function (desc, index, saver, value) {
    if (this.encodeElement_3zr2iy$(desc, index))
      this.encodeNullableSerializableValue_f4686g$(saver, value);
  };
  ElementValueEncoder.$metadata$ = {kind: Kind_CLASS, simpleName: 'ElementValueEncoder', interfaces: [CompositeEncoder, Encoder]};
  function ElementValueDecoder() {
    this.context_meet3z$_0 = EmptyContext_getInstance();
    this.updateMode_fmb1ae$_0 = UpdateMode$UPDATE_getInstance();
  }
  Object.defineProperty(ElementValueDecoder.prototype, 'context', {get: function () {
    return this.context_meet3z$_0;
  }, set: function (context) {
    this.context_meet3z$_0 = context;
  }});
  Object.defineProperty(ElementValueDecoder.prototype, 'updateMode', {get: function () {
    return this.updateMode_fmb1ae$_0;
  }});
  ElementValueDecoder.prototype.decodeElementIndex_qatsm0$ = function (desc) {
    return -2;
  };
  ElementValueDecoder.prototype.decodeNotNullMark = function () {
    return true;
  };
  ElementValueDecoder.prototype.decodeNull = function () {
    return null;
  };
  ElementValueDecoder.prototype.decodeValue = function () {
    throw new SerializationException(Kotlin.getKClassFromExpression(this).toString() + " can't retrieve untyped values");
  };
  ElementValueDecoder.prototype.decodeUnit = function () {
    var reader = this.beginStructure_r0sa6z$(UnitSerializer_getInstance().descriptor, []);
    reader.endStructure_qatsm0$(UnitSerializer_getInstance().descriptor);
  };
  ElementValueDecoder.prototype.decodeBoolean = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'boolean' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeByte = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeShort = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeInt = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeLong = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.decodeValue(), Kotlin.Long) ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeFloat = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeDouble = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeChar = function () {
    var tmp$;
    return Kotlin.isChar(tmp$ = this.decodeValue()) ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeString = function () {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'string' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.decodeEnum_w849qs$ = function (enumDescription) {
    var tmp$;
    return typeof (tmp$ = this.decodeValue()) === 'number' ? tmp$ : throwCCE();
  };
  ElementValueDecoder.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    return this;
  };
  ElementValueDecoder.prototype.decodeUnitElement_3zr2iy$ = function (desc, index) {
    this.decodeUnit();
  };
  ElementValueDecoder.prototype.decodeBooleanElement_3zr2iy$ = function (desc, index) {
    return this.decodeBoolean();
  };
  ElementValueDecoder.prototype.decodeByteElement_3zr2iy$ = function (desc, index) {
    return this.decodeByte();
  };
  ElementValueDecoder.prototype.decodeShortElement_3zr2iy$ = function (desc, index) {
    return this.decodeShort();
  };
  ElementValueDecoder.prototype.decodeIntElement_3zr2iy$ = function (desc, index) {
    return this.decodeInt();
  };
  ElementValueDecoder.prototype.decodeLongElement_3zr2iy$ = function (desc, index) {
    return this.decodeLong();
  };
  ElementValueDecoder.prototype.decodeFloatElement_3zr2iy$ = function (desc, index) {
    return this.decodeFloat();
  };
  ElementValueDecoder.prototype.decodeDoubleElement_3zr2iy$ = function (desc, index) {
    return this.decodeDouble();
  };
  ElementValueDecoder.prototype.decodeCharElement_3zr2iy$ = function (desc, index) {
    return this.decodeChar();
  };
  ElementValueDecoder.prototype.decodeStringElement_3zr2iy$ = function (desc, index) {
    return this.decodeString();
  };
  ElementValueDecoder.prototype.decodeSerializableElement_s44l7r$ = function (desc, index, loader) {
    return this.decodeSerializableValue_w63s0f$(loader);
  };
  ElementValueDecoder.prototype.decodeNullableSerializableElement_cwlm4k$ = function (desc, index, loader) {
    return this.decodeNullableSerializableValue_aae3ea$(loader);
  };
  ElementValueDecoder.prototype.updateSerializableElement_ehubvl$ = function (desc, index, loader, old) {
    return this.updateSerializableValue_19c8k5$(loader, old);
  };
  ElementValueDecoder.prototype.updateNullableSerializableElement_u33s02$ = function (desc, index, loader, old) {
    return this.updateNullableSerializableValue_exmlbs$(loader, old);
  };
  ElementValueDecoder.$metadata$ = {kind: Kind_CLASS, simpleName: 'ElementValueDecoder', interfaces: [CompositeDecoder, Decoder]};
  function SerializationException(message, cause) {
    if (cause === void 0)
      cause = null;
    RuntimeException.call(this, message, cause);
    this.name = 'SerializationException';
  }
  SerializationException.$metadata$ = {kind: Kind_CLASS, simpleName: 'SerializationException', interfaces: [RuntimeException]};
  function MissingFieldException(fieldName) {
    SerializationException.call(this, 'Field ' + fieldName + ' is required, but it was missing');
    this.name = 'MissingFieldException';
  }
  MissingFieldException.$metadata$ = {kind: Kind_CLASS, simpleName: 'MissingFieldException', interfaces: [SerializationException]};
  function UnknownFieldException(index) {
    SerializationException.call(this, 'Unknown field for index ' + index);
    this.name = 'UnknownFieldException';
  }
  UnknownFieldException.$metadata$ = {kind: Kind_CLASS, simpleName: 'UnknownFieldException', interfaces: [SerializationException]};
  function UpdateNotSupportedException(className) {
    SerializationException.call(this, 'Update is not supported for ' + className);
    this.name = 'UpdateNotSupportedException';
  }
  UpdateNotSupportedException.$metadata$ = {kind: Kind_CLASS, simpleName: 'UpdateNotSupportedException', interfaces: [SerializationException]};
  var Mapper$Companion_instance = null;
  function SerialFormat() {
  }
  SerialFormat.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SerialFormat', interfaces: []};
  function AbstractSerialFormat() {
    this.mutableContext = new MutableSerialContextImpl();
  }
  AbstractSerialFormat.prototype.install_7fck8k$ = function (module_0) {
    module_0.registerIn_slu7av$(this.mutableContext);
  };
  Object.defineProperty(AbstractSerialFormat.prototype, 'context', {get: function () {
    return this.mutableContext;
  }});
  AbstractSerialFormat.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractSerialFormat', interfaces: [SerialFormat]};
  function StringFormat() {
  }
  StringFormat.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StringFormat', interfaces: [SerialFormat]};
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function elementDescriptors($receiver) {
    var $receiver_0 = until(0, $receiver.elementsCount);
    var destination = ArrayList_init_1(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$($receiver.getElementDescriptor_za3lpa$(item));
    }
    return destination;
  }
  function TaggedEncoder() {
    this.context_9ehmea$_0 = EmptyContext_getInstance();
    this.tagStack_s9w57d$_0 = ArrayList_init_0();
  }
  function TaggedDecoder() {
    this.context_c97jka$_0 = EmptyContext_getInstance();
    this.updateMode_mc39q5$_0 = UpdateMode$UPDATE_getInstance();
    this.tagStack_auon0h$_0 = ArrayList_init_0();
    this.flag_10a271$_0 = false;
  }
  function ValueTransformer$Output($outer) {
    this.$outer = $outer;
    this.context_8299ll$_0 = EmptyContext_getInstance();
    this.list_8be2vx$ = ArrayList_init_0();
  }
  function ValueTransformer$Input($outer, list) {
    this.$outer = $outer;
    this.list_0 = list;
    this.context_y9meyo$_0 = EmptyContext_getInstance();
    this.updateMode_8vetvr$_0 = UpdateMode$BANNED_getInstance();
    this.index_0 = 0;
    this.curDesc_0 = null;
    this.curIndex_0 = 0;
  }
  var CBOR$Companion_instance = null;
  function SerialContext() {
  }
  SerialContext.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'SerialContext', interfaces: []};
  function MutableSerialContext() {
  }
  MutableSerialContext.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'MutableSerialContext', interfaces: [SerialContext]};
  function MutableSerialContextImpl(parentContext) {
    if (parentContext === void 0)
      parentContext = null;
    this.parentContext_0 = parentContext;
    this.classMap_0 = HashMap_init();
  }
  MutableSerialContextImpl.prototype.registerSerializer_cfhkba$ = function (forClass, serializer) {
    this.classMap_0.put_xwzc9p$(forClass, serializer);
  };
  MutableSerialContextImpl.prototype.getByValue_issdgt$ = function (value) {
    var tmp$;
    var t = value;
    var klass = Kotlin.getKClassFromExpression(t);
    return Kotlin.isType(tmp$ = this.get_lmshww$(klass), KSerializer) ? tmp$ : null;
  };
  MutableSerialContextImpl.prototype.get_lmshww$ = function (kclass) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = Kotlin.isType(tmp$ = this.classMap_0.get_11rb$(kclass), KSerializer) ? tmp$ : null) != null ? tmp$_1 : (tmp$_0 = this.parentContext_0) != null ? tmp$_0.get_lmshww$(kclass) : null;
  };
  MutableSerialContextImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'MutableSerialContextImpl', interfaces: [MutableSerialContext]};
  function EmptyContext() {
    EmptyContext_instance = this;
  }
  EmptyContext.prototype.get_lmshww$ = function (kclass) {
    return null;
  };
  EmptyContext.prototype.getByValue_issdgt$ = function (value) {
    return null;
  };
  EmptyContext.$metadata$ = {kind: Kind_OBJECT, simpleName: 'EmptyContext', interfaces: [SerialContext]};
  var EmptyContext_instance = null;
  function EmptyContext_getInstance() {
    if (EmptyContext_instance === null) {
      new EmptyContext();
    }
    return EmptyContext_instance;
  }
  function ListLikeDescriptor(elementDesc) {
    this.elementDesc = elementDesc;
    this.elementsCount_axr0xc$_0 = 1;
  }
  Object.defineProperty(ListLikeDescriptor.prototype, 'kind', {get: function () {
    return StructureKind$LIST_getInstance();
  }});
  Object.defineProperty(ListLikeDescriptor.prototype, 'elementsCount', {get: function () {
    return this.elementsCount_axr0xc$_0;
  }});
  ListLikeDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = toIntOrNull(name);
    if (tmp$ == null) {
      throw IllegalArgumentException_init(name + ' is not a valid list index');
    }
    return tmp$;
  };
  ListLikeDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.elementDesc;
  };
  ListLikeDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    return false;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, ListLikeDescriptor))
      return false;
    if (equals(this.elementDesc, other.elementDesc) && equals(this.name, other.name))
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return (hashCode(this.elementDesc) * 31 | 0) + hashCode(this.name) | 0;
  };
  ListLikeDescriptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'ListLikeDescriptor', interfaces: [SerialDescriptor]};
  function MapLikeDescriptor(name, keyDesc, valueDesc) {
    this.name_eko8nt$_0 = name;
    this.keyDesc = keyDesc;
    this.valueDesc = valueDesc;
    this.elementsCount_qp2ocq$_0 = 2;
  }
  Object.defineProperty(MapLikeDescriptor.prototype, 'name', {get: function () {
    return this.name_eko8nt$_0;
  }});
  Object.defineProperty(MapLikeDescriptor.prototype, 'kind', {get: function () {
    return StructureKind$MAP_getInstance();
  }});
  Object.defineProperty(MapLikeDescriptor.prototype, 'elementsCount', {get: function () {
    return this.elementsCount_qp2ocq$_0;
  }});
  MapLikeDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = toIntOrNull(name);
    if (tmp$ == null) {
      throw IllegalArgumentException_init(name + ' is not a valid map index');
    }
    return tmp$;
  };
  MapLikeDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return index % 2 === 0 ? this.keyDesc : this.valueDesc;
  };
  MapLikeDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    return false;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, MapLikeDescriptor))
      return false;
    if (!equals(this.name, other.name))
      return false;
    if (!equals(this.keyDesc, other.keyDesc))
      return false;
    if (!equals(this.valueDesc, other.valueDesc))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = hashCode(this.name);
    result = (31 * result | 0) + hashCode(this.keyDesc) | 0;
    result = (31 * result | 0) + hashCode(this.valueDesc) | 0;
    return result;
  };
  MapLikeDescriptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'MapLikeDescriptor', interfaces: [SerialDescriptor]};
  var ARRAY_NAME;
  var ARRAYLIST_NAME;
  var LINKEDHASHSET_NAME;
  var HASHSET_NAME;
  var LINKEDHASHMAP_NAME;
  var HASHMAP_NAME;
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  Object.defineProperty(ArrayClassDesc.prototype, 'name', {get: function () {
    return ARRAY_NAME;
  }});
  Object.defineProperty(ArrayClassDesc.prototype, 'kind', {get: function () {
    return StructureKind$LIST_getInstance();
  }});
  ArrayClassDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayClassDesc', interfaces: [ListLikeDescriptor]};
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  Object.defineProperty(ArrayListClassDesc.prototype, 'name', {get: function () {
    return ARRAYLIST_NAME;
  }});
  Object.defineProperty(ArrayListClassDesc.prototype, 'kind', {get: function () {
    return StructureKind$LIST_getInstance();
  }});
  ArrayListClassDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayListClassDesc', interfaces: [ListLikeDescriptor]};
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, LINKEDHASHMAP_NAME, keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinkedHashMapClassDesc', interfaces: [MapLikeDescriptor]};
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.patch_mynpiu$ = function (input, old) {
    var builder = this.toBuilder_wikn$(old);
    var startIndex = this.builderSize_wili$(builder);
    var input_0 = input.beginStructure_r0sa6z$(this.descriptor, this.typeParams.slice());
    var size = this.readSize_mes5ce$_0(input_0, builder);
    mainLoop: while (true) {
      var index = input_0.decodeElementIndex_qatsm0$(this.descriptor);
      switch (index) {
        case -2:
          this.readAll_4xfz2a$_0(input_0, builder, startIndex, size);
          break mainLoop;
        case -1:
          break mainLoop;
        default:this.readItem_ind1ny$(input_0, startIndex + index | 0, builder);
          break;
      }
    }
    input_0.endStructure_qatsm0$(this.descriptor);
    return this.toResult_wili$(builder);
  };
  AbstractCollectionSerializer.prototype.deserialize_nts5qn$ = function (input) {
    var builder = this.builder();
    return this.patch_mynpiu$(input, this.toResult_wili$(builder));
  };
  AbstractCollectionSerializer.prototype.readSize_mes5ce$_0 = function (input, builder) {
    var size = input.decodeCollectionSize_qatsm0$(this.descriptor);
    this.checkCapacity_rk7bw8$(builder, size);
    return size;
  };
  AbstractCollectionSerializer.prototype.readItem_ind1ny$ = function (input, index, builder, checkIndex, callback$default) {
    if (checkIndex === void 0)
      checkIndex = true;
    callback$default ? callback$default(input, index, builder, checkIndex) : this.readItem_ind1ny$$default(input, index, builder, checkIndex);
  };
  AbstractCollectionSerializer.prototype.readAll_4xfz2a$_0 = function (input, builder, startIndex, size) {
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init(message.toString());
    }
    for (var index = 0; index < size; index++)
      this.readItem_ind1ny$(input, startIndex + index | 0, builder, false);
  };
  AbstractCollectionSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'AbstractCollectionSerializer', interfaces: [KSerializer]};
  function ListLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.elementSerializer = elementSerializer;
    this.typeParams_thbhbl$_0 = [this.elementSerializer];
  }
  Object.defineProperty(ListLikeSerializer.prototype, 'typeParams', {get: function () {
    return this.typeParams_thbhbl$_0;
  }});
  ListLikeSerializer.prototype.serialize_awe97i$ = function (output, obj) {
    var size = this.objSize_wikn$(obj);
    var output_0 = output.beginCollection_gly1x5$(this.descriptor, size, this.typeParams.slice());
    var iterator = this.objIterator_wikn$(obj);
    for (var index = 0; index < size; index++)
      output_0.encodeSerializableElement_blecud$(this.descriptor, index, this.elementSerializer, iterator.next());
    output_0.endStructure_qatsm0$(this.descriptor);
  };
  ListLikeSerializer.prototype.readItem_ind1ny$$default = function (input, index, builder, checkIndex) {
    this.insert_p422l$(builder, index, input.decodeSerializableElement_s44l7r$(this.descriptor, index, this.elementSerializer));
  };
  ListLikeSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'ListLikeSerializer', interfaces: [AbstractCollectionSerializer]};
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.keySerializer = keySerializer;
    this.valueSerializer = valueSerializer;
    this.typeParams_jdi5pn$_0 = [this.keySerializer, this.valueSerializer];
  }
  Object.defineProperty(MapLikeSerializer.prototype, 'typeParams', {get: function () {
    return this.typeParams_jdi5pn$_0;
  }});
  MapLikeSerializer.prototype.readItem_ind1ny$$default = function (input, index, builder, checkIndex) {
    var tmp$, tmp$_0;
    var key = input.decodeSerializableElement_s44l7r$(this.descriptor, index, this.keySerializer);
    if (checkIndex) {
      var $receiver = input.decodeElementIndex_qatsm0$(this.descriptor);
      if (!($receiver === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + $receiver;
        throw IllegalArgumentException_init(message.toString());
      }
      tmp$ = $receiver;
    }
     else {
      tmp$ = index + 1 | 0;
    }
    var vIndex = tmp$;
    if (builder.containsKey_11rb$(key) && !Kotlin.isType(this.valueSerializer.descriptor.kind, PrimitiveKind)) {
      tmp$_0 = input.updateSerializableElement_ehubvl$(this.descriptor, vIndex, this.valueSerializer, getValue(builder, key));
    }
     else {
      tmp$_0 = input.decodeSerializableElement_s44l7r$(this.descriptor, vIndex, this.valueSerializer);
    }
    var value = tmp$_0;
    builder.put_xwzc9p$(key, value);
  };
  MapLikeSerializer.prototype.serialize_awe97i$ = function (output, obj) {
    var size = this.objSize_wikn$(obj);
    var output_0 = output.beginCollection_gly1x5$(this.descriptor, size, this.typeParams.slice());
    var iterator = this.objIterator_wikn$(obj);
    var index = {v: 0};
    while (iterator.hasNext()) {
      var element = iterator.next();
      var k = element.key;
      var v = element.value;
      var tmp$, tmp$_0;
      output_0.encodeSerializableElement_blecud$(this.descriptor, (tmp$ = index.v, index.v = tmp$ + 1 | 0, tmp$), this.keySerializer, k);
      output_0.encodeSerializableElement_blecud$(this.descriptor, (tmp$_0 = index.v, index.v = tmp$_0 + 1 | 0, tmp$_0), this.valueSerializer, v);
    }
    output_0.endStructure_qatsm0$(this.descriptor);
  };
  MapLikeSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'MapLikeSerializer', interfaces: [AbstractCollectionSerializer]};
  function ReferenceArraySerializer(kClass, eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.kClass_0 = kClass;
    this.descriptor_8482jr$_0 = new ArrayClassDesc(eSerializer.descriptor);
  }
  Object.defineProperty(ReferenceArraySerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_8482jr$_0;
  }});
  ReferenceArraySerializer.prototype.objSize_wikn$ = function ($receiver) {
    return $receiver.length;
  };
  ReferenceArraySerializer.prototype.objIterator_wikn$ = function ($receiver) {
    return Kotlin.arrayIterator($receiver);
  };
  ReferenceArraySerializer.prototype.builder = function () {
    return ArrayList_init_0();
  };
  ReferenceArraySerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  ReferenceArraySerializer.prototype.toResult_wili$ = function ($receiver) {
    return toNativeArray($receiver, this.kClass_0);
  };
  ReferenceArraySerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    return ArrayList_init(asList($receiver));
  };
  ReferenceArraySerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
    $receiver.ensureCapacity_za3lpa$(size);
  };
  ReferenceArraySerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    $receiver.add_wxm5ur$(index, element);
  };
  ReferenceArraySerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'ReferenceArraySerializer', interfaces: [ListLikeSerializer]};
  function ArrayListSerializer(element) {
    ListLikeSerializer.call(this, element);
    this.descriptor_7uwoa2$_0 = new ArrayListClassDesc(element.descriptor);
  }
  Object.defineProperty(ArrayListSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_7uwoa2$_0;
  }});
  ArrayListSerializer.prototype.objSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  ArrayListSerializer.prototype.objIterator_wikn$ = function ($receiver) {
    return $receiver.iterator();
  };
  ArrayListSerializer.prototype.builder = function () {
    return ArrayList_init_0();
  };
  ArrayListSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  ArrayListSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  ArrayListSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, ArrayList) ? tmp$ : null) != null ? tmp$_0 : ArrayList_init($receiver);
  };
  ArrayListSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
    $receiver.ensureCapacity_za3lpa$(size);
  };
  ArrayListSerializer.prototype.insert_p422l$ = function ($receiver, index, element) {
    $receiver.add_wxm5ur$(index, element);
  };
  ArrayListSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'ArrayListSerializer', interfaces: [ListLikeSerializer]};
  var LinkedHashSet_init_0 = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_pixp0o$_0 = new LinkedHashMapClassDesc(kSerializer.descriptor, vSerializer.descriptor);
  }
  Object.defineProperty(LinkedHashMapSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_pixp0o$_0;
  }});
  LinkedHashMapSerializer.prototype.objSize_wikn$ = function ($receiver) {
    return $receiver.size;
  };
  LinkedHashMapSerializer.prototype.objIterator_wikn$ = function ($receiver) {
    return $receiver.entries.iterator();
  };
  LinkedHashMapSerializer.prototype.builder = function () {
    return LinkedHashMap_init();
  };
  LinkedHashMapSerializer.prototype.builderSize_wili$ = function ($receiver) {
    return $receiver.size;
  };
  LinkedHashMapSerializer.prototype.toResult_wili$ = function ($receiver) {
    return $receiver;
  };
  LinkedHashMapSerializer.prototype.toBuilder_wikn$ = function ($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = $receiver, LinkedHashMap) ? tmp$ : null) != null ? tmp$_0 : LinkedHashMap_init_0($receiver);
  };
  LinkedHashMapSerializer.prototype.checkCapacity_rk7bw8$ = function ($receiver, size) {
  };
  LinkedHashMapSerializer.prototype.insertKeyValuePair_fbr58l$ = function ($receiver, index, key, value) {
    $receiver.put_xwzc9p$(key, value);
  };
  LinkedHashMapSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinkedHashMapSerializer', interfaces: [MapLikeSerializer]};
  function EnumDescriptor(name, choices) {
    SerialClassDescImpl.call(this, name);
    this.name_895kfn$_0 = name;
    this.choices_52wm16$_0 = choices;
    this.kind_8antlo$_0 = UnionKind$ENUM_KIND_getInstance();
    var $receiver = this.choices_52wm16$_0;
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      this.addElement_ivxn3r$(element);
    }
  }
  Object.defineProperty(EnumDescriptor.prototype, 'name', {get: function () {
    return this.name_895kfn$_0;
  }});
  Object.defineProperty(EnumDescriptor.prototype, 'kind', {get: function () {
    return this.kind_8antlo$_0;
  }});
  EnumDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this;
  };
  EnumDescriptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'EnumDescriptor', interfaces: [SerialClassDescImpl]};
  function CommonEnumSerializer(serialName, choices, choicesNames) {
    this.serialName = serialName;
    this.choices = choices;
    this.descriptor_j2zgdl$_0 = new EnumDescriptor(this.serialName, choicesNames);
  }
  Object.defineProperty(CommonEnumSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_j2zgdl$_0;
  }});
  CommonEnumSerializer.prototype.serialize_awe97i$ = function (output, obj) {
    var $receiver = indexOf(this.choices, obj);
    if (!($receiver !== -1)) {
      var message = obj.toString() + ' is not a valid enum ' + this.serialName + ', choices are ' + this.choices;
      throw IllegalStateException_init(message.toString());
    }
    var index = $receiver;
    output.encodeEnum_39yahq$(this.descriptor, index);
  };
  CommonEnumSerializer.prototype.deserialize_nts5qn$ = function (input) {
    var index = input.decodeEnum_w849qs$(this.descriptor);
    if (!get_indices(this.choices).contains_mef7kx$(index)) {
      var message = index.toString() + ' is not among valid ' + this.serialName + ' choices, choices size is ' + this.choices.length;
      throw IllegalStateException_init(message.toString());
    }
    return this.choices[index];
  };
  CommonEnumSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'CommonEnumSerializer', interfaces: [KSerializer]};
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  function EnumSerializer(serializableClass) {
    var tmp$ = enumClassName(serializableClass);
    var tmp$_0 = enumMembers(serializableClass);
    var $receiver = enumMembers(serializableClass);
    var destination = ArrayList_init_1($receiver.length);
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
      var item = $receiver[tmp$_1];
      destination.add_11rb$(item.name);
    }
    CommonEnumSerializer.call(this, tmp$, tmp$_0, copyToArray(destination));
  }
  EnumSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'EnumSerializer', interfaces: [CommonEnumSerializer]};
  function GeneratedSerializer() {
  }
  GeneratedSerializer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'GeneratedSerializer', interfaces: [KSerializer]};
  function NullableSerializer(element) {
    this.element_0 = element;
    this.descriptor_kbvl2k$_0 = new NullableSerializer$SerialDescriptorForNullable(this.element_0.descriptor);
  }
  function NullableSerializer$SerialDescriptorForNullable(original) {
    this.original = original;
  }
  Object.defineProperty(NullableSerializer$SerialDescriptorForNullable.prototype, 'isNullable', {get: function () {
    return true;
  }});
  NullableSerializer$SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, NullableSerializer$SerialDescriptorForNullable))
      return false;
    if (!equals(this.original, other.original))
      return false;
    return true;
  };
  NullableSerializer$SerialDescriptorForNullable.prototype.hashCode = function () {
    return hashCode(this.original) * 31 | 0;
  };
  Object.defineProperty(NullableSerializer$SerialDescriptorForNullable.prototype, 'elementsCount', {get: function () {
    return this.original.elementsCount;
  }});
  Object.defineProperty(NullableSerializer$SerialDescriptorForNullable.prototype, 'kind', {get: function () {
    return this.original.kind;
  }});
  Object.defineProperty(NullableSerializer$SerialDescriptorForNullable.prototype, 'name', {get: function () {
    return this.original.name;
  }});
  NullableSerializer$SerialDescriptorForNullable.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.original.getElementAnnotations_za3lpa$(index);
  };
  NullableSerializer$SerialDescriptorForNullable.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.original.getElementDescriptor_za3lpa$(index);
  };
  NullableSerializer$SerialDescriptorForNullable.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.original.getElementIndex_61zpoe$(name);
  };
  NullableSerializer$SerialDescriptorForNullable.prototype.getElementName_za3lpa$ = function (index) {
    return this.original.getElementName_za3lpa$(index);
  };
  NullableSerializer$SerialDescriptorForNullable.prototype.getEntityAnnotations = function () {
    return this.original.getEntityAnnotations();
  };
  NullableSerializer$SerialDescriptorForNullable.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.original.isElementOptional_za3lpa$(index);
  };
  NullableSerializer$SerialDescriptorForNullable.$metadata$ = {kind: Kind_CLASS, simpleName: 'SerialDescriptorForNullable', interfaces: [SerialDescriptor]};
  Object.defineProperty(NullableSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_kbvl2k$_0;
  }});
  NullableSerializer.prototype.serialize_awe97i$ = function (output, obj) {
    if (obj != null) {
      output.encodeNotNullMark();
      this.element_0.serialize_awe97i$(output, obj);
    }
     else {
      output.encodeNull();
    }
  };
  NullableSerializer.prototype.deserialize_nts5qn$ = function (input) {
    return input.decodeNotNullMark() ? this.element_0.deserialize_nts5qn$(input) : input.decodeNull();
  };
  NullableSerializer.prototype.patch_mynpiu$ = function (input, old) {
    var tmp$;
    if (old == null)
      tmp$ = this.deserialize_nts5qn$(input);
    else if (input.decodeNotNullMark())
      tmp$ = this.element_0.patch_mynpiu$(input, old);
    else {
      input.decodeNull();
      tmp$ = old;
    }
    return tmp$;
  };
  NullableSerializer.$metadata$ = {kind: Kind_CLASS, simpleName: 'NullableSerializer', interfaces: [KSerializer]};
  function PrimitiveDescriptor(name, kind) {
    this.name_r9ht6j$_0 = name;
    this.kind_r7zk0i$_0 = kind;
  }
  Object.defineProperty(PrimitiveDescriptor.prototype, 'name', {get: function () {
    return this.name_r9ht6j$_0;
  }});
  Object.defineProperty(PrimitiveDescriptor.prototype, 'kind', {get: function () {
    return this.kind_r7zk0i$_0;
  }});
  PrimitiveDescriptor.prototype.error_b6z6t6$_0 = function () {
    throw IllegalStateException_init('Primitives does not have elements');
  };
  PrimitiveDescriptor.prototype.getElementName_za3lpa$ = function (index) {
    return this.error_b6z6t6$_0();
  };
  PrimitiveDescriptor.prototype.getElementIndex_61zpoe$ = function (name) {
    return this.error_b6z6t6$_0();
  };
  PrimitiveDescriptor.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.error_b6z6t6$_0();
  };
  PrimitiveDescriptor.prototype.getElementDescriptor_za3lpa$ = function (index) {
    return this.error_b6z6t6$_0();
  };
  PrimitiveDescriptor.prototype.toString = function () {
    return this.name;
  };
  PrimitiveDescriptor.$metadata$ = {kind: Kind_CLASS, simpleName: 'PrimitiveDescriptor', interfaces: [SerialDescriptor]};
  function IntDescriptor() {
    IntDescriptor_instance = this;
    PrimitiveDescriptor.call(this, 'kotlin.Int', PrimitiveKind$INT_getInstance());
  }
  IntDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'IntDescriptor', interfaces: [PrimitiveDescriptor]};
  var IntDescriptor_instance = null;
  function IntDescriptor_getInstance() {
    if (IntDescriptor_instance === null) {
      new IntDescriptor();
    }
    return IntDescriptor_instance;
  }
  function UnitDescriptor() {
    UnitDescriptor_instance = this;
    PrimitiveDescriptor.call(this, 'kotlin.Unit', PrimitiveKind$UNIT_getInstance());
  }
  UnitDescriptor.$metadata$ = {kind: Kind_OBJECT, simpleName: 'UnitDescriptor', interfaces: [PrimitiveDescriptor]};
  var UnitDescriptor_instance = null;
  function UnitDescriptor_getInstance() {
    if (UnitDescriptor_instance === null) {
      new UnitDescriptor();
    }
    return UnitDescriptor_instance;
  }
  var BooleanDescriptor_instance = null;
  var ByteDescriptor_instance = null;
  var ShortDescriptor_instance = null;
  var LongDescriptor_instance = null;
  var FloatDescriptor_instance = null;
  var DoubleDescriptor_instance = null;
  var CharDescriptor_instance = null;
  var StringDescriptor_instance = null;
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.descriptor_gvvi5t$_0 = UnitDescriptor_getInstance();
  }
  Object.defineProperty(UnitSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_gvvi5t$_0;
  }});
  UnitSerializer.prototype.serialize_awe97i$ = function (output, obj) {
    output.encodeUnit();
  };
  UnitSerializer.prototype.deserialize_nts5qn$ = function (input) {
    input.decodeUnit();
  };
  UnitSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'UnitSerializer', interfaces: [KSerializer]};
  var UnitSerializer_instance = null;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance === null) {
      new UnitSerializer();
    }
    return UnitSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.descriptor_vdtvaz$_0 = BooleanDescriptor_getInstance();
  }
  var BooleanSerializer_instance = null;
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.descriptor_f6vlf1$_0 = ByteDescriptor_getInstance();
  }
  var ByteSerializer_instance = null;
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.descriptor_yvjeup$_0 = ShortDescriptor_getInstance();
  }
  var ShortSerializer_instance = null;
  function IntSerializer() {
    IntSerializer_instance = this;
    this.descriptor_xrjflq$_0 = IntDescriptor_getInstance();
  }
  Object.defineProperty(IntSerializer.prototype, 'descriptor', {get: function () {
    return this.descriptor_xrjflq$_0;
  }});
  IntSerializer.prototype.serialize_awe97i$ = function (output, obj) {
    output.encodeInt_za3lpa$(obj);
  };
  IntSerializer.prototype.deserialize_nts5qn$ = function (input) {
    return input.decodeInt();
  };
  IntSerializer.$metadata$ = {kind: Kind_OBJECT, simpleName: 'IntSerializer', interfaces: [KSerializer]};
  var IntSerializer_instance = null;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance === null) {
      new IntSerializer();
    }
    return IntSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.descriptor_q4z687$_0 = LongDescriptor_getInstance();
  }
  var LongSerializer_instance = null;
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.descriptor_7mw1sh$_0 = FloatDescriptor_getInstance();
  }
  var FloatSerializer_instance = null;
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.descriptor_2hn2sc$_0 = DoubleDescriptor_getInstance();
  }
  var DoubleSerializer_instance = null;
  function CharSerializer() {
    CharSerializer_instance = this;
    this.descriptor_5mpy8x$_0 = CharDescriptor_getInstance();
  }
  var CharSerializer_instance = null;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.descriptor_sum718$_0 = StringDescriptor_getInstance();
  }
  var StringSerializer_instance = null;
  function MissingDescriptorException(index, origin) {
    SerializationException.call(this, 'Element descriptor at index ' + index + ' has not been found in ' + origin);
    this.name = 'MissingDescriptorException';
  }
  MissingDescriptorException.$metadata$ = {kind: Kind_CLASS, simpleName: 'MissingDescriptorException', interfaces: [SerializationException]};
  function SerialClassDescImpl(name, generatedSerializer) {
    if (generatedSerializer === void 0)
      generatedSerializer = null;
    this.name_l5inc6$_0 = name;
    this.generatedSerializer_1vyey6$_0 = generatedSerializer;
    this.names_gh1kah$_0 = ArrayList_init_0();
    this.annotations_4jiga3$_0 = ArrayList_init_0();
    this.classAnnotations_3clm9z$_0 = ArrayList_init_0();
    this.flags_k3kfa0$_0 = Kotlin.booleanArray(4);
    this.descriptors_ve6swl$_0 = ArrayList_init_0();
    this._indices_onkk0z$_0 = null;
    this.indices_jm5tq0$_7drv5o$_0 = lazy(SerialClassDescImpl$indices$lambda(this));
  }
  Object.defineProperty(SerialClassDescImpl.prototype, 'name', {get: function () {
    return this.name_l5inc6$_0;
  }});
  Object.defineProperty(SerialClassDescImpl.prototype, 'kind', {get: function () {
    return StructureKind$CLASS_getInstance();
  }});
  Object.defineProperty(SerialClassDescImpl.prototype, 'indices_jm5tq0$_0', {get: function () {
    return this.indices_jm5tq0$_7drv5o$_0.value;
  }});
  SerialClassDescImpl.prototype.addElement_ivxn3r$ = function (name, isOptional) {
    if (isOptional === void 0)
      isOptional = false;
    this.names_gh1kah$_0.add_11rb$(name);
    var idx = this.names_gh1kah$_0.size - 1 | 0;
    this.ensureFlagsCapacity_qhtrim$_0(idx);
    this.flags_k3kfa0$_0[idx] = isOptional;
    this.annotations_4jiga3$_0.add_11rb$(ArrayList_init_0());
  };
  SerialClassDescImpl.prototype.pushAnnotation_yj921w$ = function (a) {
    last(this.annotations_4jiga3$_0).add_11rb$(a);
  };
  SerialClassDescImpl.prototype.pushDescriptor_qatsm0$ = function (desc) {
    this.descriptors_ve6swl$_0.add_11rb$(desc);
  };
  SerialClassDescImpl.prototype.getElementDescriptor_za3lpa$ = function (index) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.generatedSerializer_1vyey6$_0) != null ? tmp$.childSerializers() : null) != null ? getOrNull(tmp$_0, index) : null) != null ? tmp$_1.descriptor : null) != null ? tmp$_2 : getOrNull_0(this.descriptors_ve6swl$_0, index);
    if (tmp$_3 == null) {
      throw new MissingDescriptorException(index, this);
    }
    return tmp$_3;
  };
  SerialClassDescImpl.prototype.isElementOptional_za3lpa$ = function (index) {
    return this.flags_k3kfa0$_0[index];
  };
  SerialClassDescImpl.prototype.pushClassAnnotation_yj921w$ = function (a) {
    this.classAnnotations_3clm9z$_0.add_11rb$(a);
  };
  SerialClassDescImpl.prototype.getEntityAnnotations = function () {
    return this.classAnnotations_3clm9z$_0;
  };
  SerialClassDescImpl.prototype.getElementAnnotations_za3lpa$ = function (index) {
    return this.annotations_4jiga3$_0.get_za3lpa$(index);
  };
  Object.defineProperty(SerialClassDescImpl.prototype, 'elementsCount', {get: function () {
    return this.annotations_4jiga3$_0.size;
  }});
  SerialClassDescImpl.prototype.getElementName_za3lpa$ = function (index) {
    return this.names_gh1kah$_0.get_za3lpa$(index);
  };
  SerialClassDescImpl.prototype.getElementIndex_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.indices_jm5tq0$_0.get_11rb$(name)) != null ? tmp$ : -3;
  };
  SerialClassDescImpl.prototype.ensureFlagsCapacity_qhtrim$_0 = function (i) {
    if (this.flags_k3kfa0$_0.length <= i)
      this.flags_k3kfa0$_0 = copyOf(this.flags_k3kfa0$_0, this.flags_k3kfa0$_0.length * 2 | 0);
  };
  SerialClassDescImpl.prototype.buildIndices_585r2k$_0 = function () {
    var tmp$;
    var indices = HashMap_init();
    tmp$ = this.names_gh1kah$_0.size - 1 | 0;
    for (var i = 0; i <= tmp$; i++)
      indices.put_xwzc9p$(this.names_gh1kah$_0.get_za3lpa$(i), i);
    return indices;
  };
  SerialClassDescImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!Kotlin.isType(other, SerialClassDescImpl))
      return false;
    if (!equals(this.name, other.name))
      return false;
    if (!equals(elementDescriptors(this), elementDescriptors(other)))
      return false;
    return true;
  };
  SerialClassDescImpl.prototype.hashCode = function () {
    var result = hashCode(this.name);
    result = (31 * result | 0) + hashCode(elementDescriptors(this)) | 0;
    return result;
  };
  SerialClassDescImpl.prototype.toString = function () {
    return this.name + this.names_gh1kah$_0;
  };
  function SerialClassDescImpl$indices$lambda(this$SerialClassDescImpl) {
    return function () {
      return this$SerialClassDescImpl.buildIndices_585r2k$_0();
    };
  }
  SerialClassDescImpl.$metadata$ = {kind: Kind_CLASS, simpleName: 'SerialClassDescImpl', interfaces: [SerialDescriptor]};
  var KEY_INDEX;
  var VALUE_INDEX;
  function KeyValueSerializer(kSerializer, vSerializer) {
    this.kSerializer = kSerializer;
    this.vSerializer = vSerializer;
  }
  var MapEntryClassDesc_instance = null;
  var PairClassDesc_instance = null;
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    this.aSerializer_0 = aSerializer;
    this.bSerializer_0 = bSerializer;
    this.cSerializer_0 = cSerializer;
    this.descriptor_73a6vr$_0 = TripleSerializer$TripleDesc_getInstance();
  }
  var TripleSerializer$TripleDesc_instance = null;
  var HexConverter_instance = null;
  function JSON_0(unquoted, indented, indent, strictMode, updateMode, encodeDefaults) {
    JSON$Companion_getInstance();
    if (unquoted === void 0)
      unquoted = false;
    if (indented === void 0)
      indented = false;
    if (indent === void 0)
      indent = '    ';
    if (strictMode === void 0)
      strictMode = true;
    if (updateMode === void 0)
      updateMode = UpdateMode$OVERWRITE_getInstance();
    if (encodeDefaults === void 0)
      encodeDefaults = true;
    AbstractSerialFormat.call(this);
    this.unquoted_0 = unquoted;
    this.indented_0 = indented;
    this.indent_0 = indent;
    this.strictMode_8be2vx$ = strictMode;
    this.updateMode = updateMode;
    this.encodeDefaults = encodeDefaults;
  }
  JSON_0.prototype.stringify_tf03ej$ = function (serializer, obj) {
    var sb = StringBuilder_init_0();
    var output = new JSON$JsonOutput(this, Mode$OBJ_getInstance(), new JSON$Composer(this, sb), Kotlin.newArray(Mode$values().length, null));
    encode_0(output, serializer, obj);
    return sb.toString();
  };
  JSON_0.prototype.parse_awif5v$ = function (serializer, string) {
    var parser = new Parser(string);
    var input = new JSON$JsonInput(this, Mode$OBJ_getInstance(), parser);
    var result = decode_0(input, serializer);
    if (!(parser.tc === TC_EOF)) {
      var message = 'Shall parse complete string';
      throw IllegalStateException_init(message.toString());
    }
    return result;
  };
  function JSON$Companion() {
    JSON$Companion_instance = this;
    this.plain = new JSON_0();
    this.unquoted = new JSON_0(true);
    this.indented = new JSON_0(void 0, true);
    this.nonstrict = new JSON_0(void 0, void 0, void 0, false);
  }
  JSON$Companion.prototype.install_7fck8k$ = function (module_0) {
    this.plain.install_7fck8k$(module_0);
  };
  Object.defineProperty(JSON$Companion.prototype, 'context', {get: function () {
    return this.plain.context;
  }});
  JSON$Companion.prototype.stringify_tf03ej$ = function (serializer, obj) {
    return this.plain.stringify_tf03ej$(serializer, obj);
  };
  JSON$Companion.prototype.parse_awif5v$ = function (serializer, string) {
    return this.plain.parse_awif5v$(serializer, string);
  };
  JSON$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: [StringFormat]};
  var JSON$Companion_instance = null;
  function JSON$Companion_getInstance() {
    if (JSON$Companion_instance === null) {
      new JSON$Companion();
    }
    return JSON$Companion_instance;
  }
  function JSON$JsonOutput($outer, mode, w, modeReuseCache) {
    this.$outer = $outer;
    ElementValueEncoder.call(this);
    this.mode_0 = mode;
    this.w_0 = w;
    this.modeReuseCache_0 = modeReuseCache;
    this.forceQuoting_0 = false;
    this.context = this.$outer.context;
    var i = this.mode_0.ordinal;
    if (this.modeReuseCache_0[i] !== null || this.modeReuseCache_0[i] !== this)
      this.modeReuseCache_0[i] = this;
  }
  JSON$JsonOutput.prototype.writeTree_qiw0cd$ = function (tree) {
    this.w_0.sb_8be2vx$.append_gw00v9$(tree.toString());
  };
  JSON$JsonOutput.prototype.shouldEncodeElementDefault_3zr2iy$ = function (desc, index) {
    return this.$outer.encodeDefaults;
  };
  JSON$JsonOutput.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    var newMode = switchMode(desc, typeParams);
    if (unboxChar(newMode.begin) !== INVALID) {
      this.w_0.print_s8itvh$(unboxChar(newMode.begin));
      this.w_0.indent();
    }
    if (this.mode_0 === newMode)
      return this;
    var cached = this.modeReuseCache_0[newMode.ordinal];
    if (cached != null) {
      return cached;
    }
    return new JSON$JsonOutput(this.$outer, newMode, this.w_0, this.modeReuseCache_0);
  };
  JSON$JsonOutput.prototype.endStructure_qatsm0$ = function (desc) {
    if (unboxChar(this.mode_0.end) !== INVALID) {
      this.w_0.unIndent();
      this.w_0.nextItem();
      this.w_0.print_s8itvh$(unboxChar(this.mode_0.end));
    }
  };
  JSON$JsonOutput.prototype.encodeElement_3zr2iy$ = function (desc, index) {
    switch (this.mode_0.name) {
      case 'LIST':
        if (!this.w_0.writingFirst)
          this.w_0.print_s8itvh$(COMMA);
        this.w_0.nextItem();
        break;
      case 'MAP':
        if (!this.w_0.writingFirst) {
          if (index % 2 === 0)
            this.w_0.print_s8itvh$(COMMA);
          else
            this.w_0.print_s8itvh$(COLON);
        }

        this.w_0.nextItem();
        break;
      case 'ENTRY':
        throw IllegalStateException_init('Entry is deprecated');
      case 'POLY':
        if (index === 0)
          this.forceQuoting_0 = true;
        if (index === 1) {
          this.w_0.print_s8itvh$(this.mode_0 === Mode$ENTRY_getInstance() ? COLON : COMMA);
          this.w_0.space();
          this.forceQuoting_0 = false;
        }

        break;
      default:if (!this.w_0.writingFirst)
          this.w_0.print_s8itvh$(COMMA);
        this.w_0.nextItem();
        this.encodeString_61zpoe$(desc.getElementName_za3lpa$(index));
        this.w_0.print_s8itvh$(COLON);
        this.w_0.space();
        break;
    }
    return true;
  };
  JSON$JsonOutput.prototype.encodeNull = function () {
    this.w_0.print_61zpoe$(NULL);
  };
  JSON$JsonOutput.prototype.encodeBoolean_6taknv$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.w_0.print_6taknv$(value);
  };
  JSON$JsonOutput.prototype.encodeByte_s8j3t7$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.w_0.print_s8j3t7$(value);
  };
  JSON$JsonOutput.prototype.encodeShort_mq22fl$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.w_0.print_mq22fl$(value);
  };
  JSON$JsonOutput.prototype.encodeInt_za3lpa$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.w_0.print_za3lpa$(value);
  };
  JSON$JsonOutput.prototype.encodeLong_s8cxhz$ = function (value) {
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.w_0.print_s8cxhz$(value);
  };
  JSON$JsonOutput.prototype.encodeFloat_mx4ult$ = function (value) {
    if (this.$outer.strictMode_8be2vx$ && !isFinite(value)) {
      throw JsonInvalidValueInStrictModeException_init(value);
    }
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.w_0.print_mx4ult$(value);
  };
  JSON$JsonOutput.prototype.encodeDouble_14dthe$ = function (value) {
    if (this.$outer.strictMode_8be2vx$ && !isFinite_0(value)) {
      throw JsonInvalidValueInStrictModeException_init_0(value);
    }
    if (this.forceQuoting_0)
      this.encodeString_61zpoe$(value.toString());
    else
      this.w_0.print_14dthe$(value);
  };
  JSON$JsonOutput.prototype.encodeChar_s8itvh$ = function (value) {
    this.encodeString_61zpoe$(String.fromCharCode(value));
  };
  JSON$JsonOutput.prototype.encodeString_61zpoe$ = function (value) {
    if (this.$outer.unquoted_0 && !mustBeQuoted(value)) {
      this.w_0.print_61zpoe$(value);
    }
     else {
      this.w_0.printQuoted_61zpoe$(value);
    }
  };
  JSON$JsonOutput.prototype.encodeEnum_39yahq$ = function (enumDescription, ordinal) {
    this.encodeString_61zpoe$(enumDescription.getElementName_za3lpa$(ordinal));
  };
  JSON$JsonOutput.prototype.encodeValue_za3rmp$ = function (value) {
    if (this.$outer.strictMode_8be2vx$)
      ElementValueEncoder.prototype.encodeValue_za3rmp$.call(this, value);
    else
      this.encodeString_61zpoe$(value.toString());
  };
  JSON$JsonOutput.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonOutput', interfaces: [ElementValueEncoder]};
  function JSON$Composer($outer, sb) {
    this.$outer = $outer;
    this.sb_8be2vx$ = sb;
    this.level_0 = 0;
    this.writingFirst_4f1fnx$_0 = true;
  }
  Object.defineProperty(JSON$Composer.prototype, 'writingFirst', {get: function () {
    return this.writingFirst_4f1fnx$_0;
  }, set: function (writingFirst) {
    this.writingFirst_4f1fnx$_0 = writingFirst;
  }});
  JSON$Composer.prototype.indent = function () {
    this.writingFirst = true;
    this.level_0 = this.level_0 + 1 | 0;
  };
  JSON$Composer.prototype.unIndent = function () {
    this.level_0 = this.level_0 - 1 | 0;
  };
  JSON$Composer.prototype.nextItem = function () {
    this.writingFirst = false;
    if (this.$outer.indented_0) {
      this.print_61zpoe$('\n');
      var times = this.level_0;
      this.$outer;
      for (var index = 0; index < times; index++) {
        this.print_61zpoe$(this.$outer.indent_0);
      }
    }
  };
  JSON$Composer.prototype.space = function () {
    if (this.$outer.indented_0)
      this.print_s8itvh$(32);
  };
  JSON$Composer.prototype.print_s8itvh$ = function (v) {
    return this.sb_8be2vx$.append_s8itvh$(v);
  };
  JSON$Composer.prototype.print_61zpoe$ = function (v) {
    return this.sb_8be2vx$.append_gw00v9$(v);
  };
  JSON$Composer.prototype.print_mx4ult$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  JSON$Composer.prototype.print_14dthe$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  JSON$Composer.prototype.print_s8j3t7$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  JSON$Composer.prototype.print_mq22fl$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  JSON$Composer.prototype.print_za3lpa$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  JSON$Composer.prototype.print_s8cxhz$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  JSON$Composer.prototype.print_6taknv$ = function (v) {
    return this.sb_8be2vx$.append_s8jyv4$(v);
  };
  JSON$Composer.prototype.printQuoted_61zpoe$ = function (value) {
    printQuoted(this.sb_8be2vx$, value);
  };
  JSON$Composer.$metadata$ = {kind: Kind_CLASS, simpleName: 'Composer', interfaces: []};
  function JSON$JsonInput($outer, mode, p) {
    this.$outer = $outer;
    ElementValueDecoder.call(this);
    this.mode_0 = mode;
    this.p_0 = p;
    this.curIndex_0 = -1;
    this.entryIndex_0 = 0;
    this.context = this.$outer.context;
  }
  JSON$JsonInput.prototype.readAsTree = function () {
    return (new JsonTreeParser(this.p_0)).read();
  };
  Object.defineProperty(JSON$JsonInput.prototype, 'updateMode', {get: function () {
    return this.$outer.updateMode;
  }});
  JSON$JsonInput.prototype.beginStructure_r0sa6z$ = function (desc, typeParams) {
    var tmp$;
    var newMode = switchMode(desc, typeParams);
    if (unboxChar(newMode.begin) !== INVALID) {
      var $this = this.p_0;
      if ($this.tc !== newMode.beginTc) {
        throw new JsonParsingException($this.tokenPos, "Expected '" + String.fromCharCode(unboxChar(newMode.begin)) + ', kind: ' + desc.kind + "'");
      }
      this.p_0.nextToken();
    }
    switch (newMode.name) {
      case 'LIST':
      case 'MAP':
      case 'POLY':
        tmp$ = new JSON$JsonInput(this.$outer, newMode, this.p_0);
        break;
      default:tmp$ = this.mode_0 === newMode ? this : new JSON$JsonInput(this.$outer, newMode, this.p_0);
        break;
    }
    return tmp$;
  };
  JSON$JsonInput.prototype.endStructure_qatsm0$ = function (desc) {
    if (unboxChar(this.mode_0.end) !== INVALID) {
      var $this = this.p_0;
      if ($this.tc !== this.mode_0.endTc) {
        throw new JsonParsingException($this.tokenPos, "Expected '" + String.fromCharCode(unboxChar(this.mode_0.end)) + "'");
      }
      this.p_0.nextToken();
    }
  };
  JSON$JsonInput.prototype.decodeNotNullMark = function () {
    return this.p_0.tc !== TC_NULL;
  };
  JSON$JsonInput.prototype.decodeNull = function () {
    var $this = this.p_0;
    if ($this.tc !== TC_NULL) {
      throw new JsonParsingException($this.tokenPos, "Expected 'null' literal");
    }
    this.p_0.nextToken();
    return null;
  };
  JSON$JsonInput.prototype.decodeElementIndex_qatsm0$ = function (desc) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    while (true) {
      if (this.p_0.tc === TC_COMMA)
        this.p_0.nextToken();
      switch (this.mode_0.name) {
        case 'LIST':
          return !this.p_0.canBeginValue ? -1 : (this.curIndex_0 = this.curIndex_0 + 1 | 0, this.curIndex_0);
        case 'MAP':
          if (this.curIndex_0 % 2 === 0 && this.p_0.tc === TC_COLON)
            this.p_0.nextToken();
          return !this.p_0.canBeginValue ? -1 : (this.curIndex_0 = this.curIndex_0 + 1 | 0, this.curIndex_0);
        case 'POLY':
          switch (tmp$ = this.entryIndex_0, this.entryIndex_0 = tmp$ + 1 | 0, tmp$) {
            case 0:
              tmp$_0 = 0;
              break;
            case 1:
              tmp$_0 = 1;
              break;
            default:this.entryIndex_0 = 0;
              tmp$_0 = -1;
              break;
          }

          return tmp$_0;
        case 'ENTRY':
          switch (tmp$_1 = this.entryIndex_0, this.entryIndex_0 = tmp$_1 + 1 | 0, tmp$_1) {
            case 0:
              tmp$_2 = 0;
              break;
            case 1:
              var $this = this.p_0;
              if ($this.tc !== TC_COLON) {
                throw new JsonParsingException($this.tokenPos, "Expected ':'");
              }

              this.p_0.nextToken();
              tmp$_2 = 1;
              break;
            default:this.entryIndex_0 = 0;
              tmp$_2 = -1;
              break;
          }

          return tmp$_2;
        default:if (!this.p_0.canBeginValue)
            return -1;
          var key = this.p_0.takeStr();
          var $this_0 = this.p_0;
          if ($this_0.tc !== TC_COLON) {
            throw new JsonParsingException($this_0.tokenPos, "Expected ':'");
          }

          this.p_0.nextToken();
          var ind = desc.getElementIndex_61zpoe$(key);
          if (ind !== -3)
            return ind;
          if (this.$outer.strictMode_8be2vx$)
            throw new JsonUnknownKeyException(key);
          else
            this.p_0.skipElement();
          break;
      }
    }
  };
  JSON$JsonInput.prototype.decodeBoolean = function () {
    var $receiver = this.p_0.takeStr();
    this.$outer;
    return this.$outer.strictMode_8be2vx$ ? toBooleanStrict($receiver) : toBoolean($receiver);
  };
  JSON$JsonInput.prototype.decodeByte = function () {
    return toByte_0(this.p_0.takeStr());
  };
  JSON$JsonInput.prototype.decodeShort = function () {
    return toShort_0(this.p_0.takeStr());
  };
  JSON$JsonInput.prototype.decodeInt = function () {
    return toInt(this.p_0.takeStr());
  };
  JSON$JsonInput.prototype.decodeLong = function () {
    return toLong(this.p_0.takeStr());
  };
  JSON$JsonInput.prototype.decodeFloat = function () {
    return toDouble(this.p_0.takeStr());
  };
  JSON$JsonInput.prototype.decodeDouble = function () {
    return toDouble(this.p_0.takeStr());
  };
  JSON$JsonInput.prototype.decodeChar = function () {
    return toBoxedChar(single(this.p_0.takeStr()));
  };
  JSON$JsonInput.prototype.decodeString = function () {
    return this.p_0.takeStr();
  };
  JSON$JsonInput.prototype.decodeEnum_w849qs$ = function (enumDescription) {
    return enumDescription.getElementIndex_61zpoe$(this.p_0.takeStr());
  };
  JSON$JsonInput.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonInput', interfaces: [ElementValueDecoder]};
  JSON_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'JSON', interfaces: [StringFormat, AbstractSerialFormat]};
  function Mode(name, ordinal, begin, end) {
    Enum.call(this);
    this.begin = toBoxedChar(begin);
    this.end = toBoxedChar(end);
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.beginTc = charToTokenClass(unboxChar(this.begin));
    this.endTc = charToTokenClass(unboxChar(this.end));
  }
  function Mode_initFields() {
    Mode_initFields = function () {
    };
    Mode$OBJ_instance = new Mode('OBJ', 0, BEGIN_OBJ, END_OBJ);
    Mode$LIST_instance = new Mode('LIST', 1, BEGIN_LIST, END_LIST);
    Mode$MAP_instance = new Mode('MAP', 2, BEGIN_OBJ, END_OBJ);
    Mode$POLY_instance = new Mode('POLY', 3, BEGIN_LIST, END_LIST);
    Mode$ENTRY_instance = new Mode('ENTRY', 4, INVALID, INVALID);
  }
  var Mode$OBJ_instance;
  function Mode$OBJ_getInstance() {
    Mode_initFields();
    return Mode$OBJ_instance;
  }
  var Mode$LIST_instance;
  function Mode$LIST_getInstance() {
    Mode_initFields();
    return Mode$LIST_instance;
  }
  var Mode$MAP_instance;
  function Mode$MAP_getInstance() {
    Mode_initFields();
    return Mode$MAP_instance;
  }
  var Mode$POLY_instance;
  function Mode$POLY_getInstance() {
    Mode_initFields();
    return Mode$POLY_instance;
  }
  var Mode$ENTRY_instance;
  function Mode$ENTRY_getInstance() {
    Mode_initFields();
    return Mode$ENTRY_instance;
  }
  Mode.$metadata$ = {kind: Kind_CLASS, simpleName: 'Mode', interfaces: [Enum]};
  function Mode$values() {
    return [Mode$OBJ_getInstance(), Mode$LIST_getInstance(), Mode$MAP_getInstance(), Mode$POLY_getInstance(), Mode$ENTRY_getInstance()];
  }
  Mode.values = Mode$values;
  function Mode$valueOf(name) {
    switch (name) {
      case 'OBJ':
        return Mode$OBJ_getInstance();
      case 'LIST':
        return Mode$LIST_getInstance();
      case 'MAP':
        return Mode$MAP_getInstance();
      case 'POLY':
        return Mode$POLY_getInstance();
      case 'ENTRY':
        return Mode$ENTRY_getInstance();
      default:throwISE('No enum constant kotlinx.serialization.json.Mode.' + name);
    }
  }
  Mode.valueOf_61zpoe$ = Mode$valueOf;
  function switchMode(desc, typeParams) {
    var tmp$;
    tmp$ = desc.kind;
    if (equals(tmp$, UnionKind$POLYMORPHIC_getInstance()))
      return Mode$POLY_getInstance();
    else if (equals(tmp$, StructureKind$LIST_getInstance()))
      return Mode$LIST_getInstance();
    else if (equals(tmp$, StructureKind$MAP_getInstance())) {
      var keyKind = typeParams[0].descriptor.kind;
      return Kotlin.isType(keyKind, PrimitiveKind) || equals(keyKind, UnionKind$ENUM_KIND_getInstance()) ? Mode$MAP_getInstance() : Mode$LIST_getInstance();
    }
     else
      return Mode$OBJ_getInstance();
  }
  function mustBeQuoted(str) {
    var tmp$;
    if (equals(str, NULL))
      return true;
    tmp$ = iterator(str);
    while (tmp$.hasNext()) {
      var ch = unboxChar(tmp$.next());
      if (charToTokenClass(ch) !== TC_OTHER)
        return true;
    }
    return false;
  }
  function JsonElement() {
  }
  Object.defineProperty(JsonElement.prototype, 'primitive', {get: function () {
    return this.error_azfyan$_0('JsonLiteral');
  }});
  Object.defineProperty(JsonElement.prototype, 'jsonObject', {get: function () {
    return this.error_azfyan$_0('JsonObject');
  }});
  Object.defineProperty(JsonElement.prototype, 'jsonArray', {get: function () {
    return this.error_azfyan$_0('JsonArray');
  }});
  Object.defineProperty(JsonElement.prototype, 'jsonNull', {get: function () {
    return this.error_azfyan$_0('JsonPrimitive');
  }});
  Object.defineProperty(JsonElement.prototype, 'isNull', {get: function () {
    return this === JsonNull_getInstance();
  }});
  JsonElement.prototype.error_azfyan$_0 = function (element) {
    throw new JsonElementTypeMismatchException(Kotlin.getKClassFromExpression(this).toString(), element);
  };
  JsonElement.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonElement', interfaces: []};
  function JsonPrimitive() {
    JsonElement.call(this);
    this.primitive_awfpe5$_0 = this;
  }
  Object.defineProperty(JsonPrimitive.prototype, 'primitive', {get: function () {
    return this.primitive_awfpe5$_0;
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'int', {get: function () {
    return toInt(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'intOrNull', {get: function () {
    return toIntOrNull(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'long', {get: function () {
    return toLong(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'longOrNull', {get: function () {
    return toLongOrNull(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'double', {get: function () {
    return toDouble(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'doubleOrNull', {get: function () {
    return toDoubleOrNull(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'float', {get: function () {
    return toDouble(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'floatOrNull', {get: function () {
    return toDoubleOrNull(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'boolean', {get: function () {
    return toBooleanStrict(this.content);
  }});
  Object.defineProperty(JsonPrimitive.prototype, 'booleanOrNull', {get: function () {
    return toBooleanStrictOrNull(this.content);
  }});
  JsonPrimitive.prototype.toString = function () {
    return this.content;
  };
  JsonPrimitive.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonPrimitive', interfaces: [JsonElement]};
  function JsonLiteral(body, isString) {
    JsonPrimitive.call(this);
    this.body_0 = body;
    this.isString_0 = isString;
    this.content_prrjtz$_0 = this.body_0.toString();
    this.contentOrNull_mx86gf$_0 = this.content;
  }
  Object.defineProperty(JsonLiteral.prototype, 'content', {get: function () {
    return this.content_prrjtz$_0;
  }});
  Object.defineProperty(JsonLiteral.prototype, 'contentOrNull', {get: function () {
    return this.contentOrNull_mx86gf$_0;
  }});
  JsonLiteral.prototype.toString = function () {
    var tmp$;
    if (this.isString_0) {
      var $receiver = StringBuilder_init_0();
      printQuoted($receiver, this.content);
      tmp$ = $receiver.toString();
    }
     else
      tmp$ = this.content;
    return tmp$;
  };
  JsonLiteral.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    if (this === other)
      return true;
    if (other == null || !((tmp$ = Kotlin.getKClassFromExpression(this)) != null ? tmp$.equals(Kotlin.getKClassFromExpression(other)) : null))
      return false;
    Kotlin.isType(tmp$_0 = other, JsonLiteral) ? tmp$_0 : throwCCE();
    if (this.isString_0 !== other.isString_0)
      return false;
    if (!equals(this.content, other.content))
      return false;
    return true;
  };
  JsonLiteral.prototype.hashCode = function () {
    var result = hashCode(this.isString_0);
    result = (31 * result | 0) + hashCode(this.content) | 0;
    return result;
  };
  JsonLiteral.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonLiteral', interfaces: [JsonPrimitive]};
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.jsonNull_c8yjib$_0 = this;
    this.content_w1vkof$_0 = 'null';
    this.contentOrNull_egvcud$_0 = null;
  }
  Object.defineProperty(JsonNull.prototype, 'jsonNull', {get: function () {
    return this.jsonNull_c8yjib$_0;
  }});
  Object.defineProperty(JsonNull.prototype, 'content', {get: function () {
    return this.content_w1vkof$_0;
  }});
  Object.defineProperty(JsonNull.prototype, 'contentOrNull', {get: function () {
    return this.contentOrNull_egvcud$_0;
  }});
  JsonNull.$metadata$ = {kind: Kind_OBJECT, simpleName: 'JsonNull', interfaces: [JsonPrimitive]};
  var JsonNull_instance = null;
  function JsonNull_getInstance() {
    if (JsonNull_instance === null) {
      new JsonNull();
    }
    return JsonNull_instance;
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.content = content;
    this.jsonObject_js4yrn$_0 = this;
  }
  Object.defineProperty(JsonObject.prototype, 'jsonObject', {get: function () {
    return this.jsonObject_js4yrn$_0;
  }});
  JsonObject.prototype.get_11rb$ = function (key) {
    var tmp$;
    tmp$ = this.content.get_11rb$(key);
    if (tmp$ == null) {
      throw new NoSuchElementException('Element ' + key + ' is missing');
    }
    return tmp$;
  };
  JsonObject.prototype.getOrNull_61zpoe$ = function (key) {
    return this.content.get_11rb$(key);
  };
  JsonObject.prototype.getPrimitive_61zpoe$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.get_11rb$(key), JsonPrimitive) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson(key, 'JsonPrimitive');
  };
  JsonObject.prototype.getObject_61zpoe$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.get_11rb$(key), JsonObject) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson(key, 'JsonObject');
  };
  JsonObject.prototype.getArray_61zpoe$ = function (key) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.get_11rb$(key), JsonArray) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson(key, 'JsonArray');
  };
  JsonObject.prototype.getPrimitiveOrNull_61zpoe$ = function (key) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.content.get_11rb$(key), JsonPrimitive) ? tmp$ : null;
  };
  JsonObject.prototype.getObjectOrNull_61zpoe$ = function (key) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.content.get_11rb$(key), JsonObject) ? tmp$ : null;
  };
  JsonObject.prototype.getArrayOrNull_61zpoe$ = function (key) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.content.get_11rb$(key), JsonArray) ? tmp$ : null;
  };
  JsonObject.prototype.getAs_j069p3$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.json.JsonObject.getAs_j069p3$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var unexpectedJson = _.kotlinx.serialization.json.unexpectedJson_puj7f4$;
    return function (J_0, isJ, key) {
      var tmp$, tmp$_0;
      return (tmp$_0 = isJ(tmp$ = this.get_11rb$(key)) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson(key, getKClass(J_0).toString());
    };
  }));
  JsonObject.prototype.lookup_j069p3$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.json.JsonObject.lookup_j069p3$', function (J_0, isJ, key) {
    var tmp$;
    return isJ(tmp$ = this.content.get_11rb$(key)) ? tmp$ : null;
  });
  function JsonObject$toString$lambda(f) {
    var k = f.key;
    var v = f.value;
    return '"' + k + '"' + ': ' + v;
  }
  JsonObject.prototype.toString = function () {
    return joinToString(this.content.entries, void 0, '{', '}', void 0, void 0, JsonObject$toString$lambda);
  };
  Object.defineProperty(JsonObject.prototype, 'entries', {get: function () {
    return this.content.entries;
  }});
  Object.defineProperty(JsonObject.prototype, 'keys', {get: function () {
    return this.content.keys;
  }});
  Object.defineProperty(JsonObject.prototype, 'size', {get: function () {
    return this.content.size;
  }});
  Object.defineProperty(JsonObject.prototype, 'values', {get: function () {
    return this.content.values;
  }});
  JsonObject.prototype.containsKey_11rb$ = function (key) {
    return this.content.containsKey_11rb$(key);
  };
  JsonObject.prototype.containsValue_11rc$ = function (value) {
    return this.content.containsValue_11rc$(value);
  };
  JsonObject.prototype.isEmpty = function () {
    return this.content.isEmpty();
  };
  JsonObject.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonObject', interfaces: [Map, JsonElement]};
  JsonObject.prototype.component1 = function () {
    return this.content;
  };
  JsonObject.prototype.copy_fnd918$ = function (content) {
    return new JsonObject(content === void 0 ? this.content : content);
  };
  JsonObject.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  JsonObject.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.content, other.content))));
  };
  function JsonArray(content) {
    JsonElement.call(this);
    this.content = content;
    this.jsonArray_u1gsrt$_0 = this;
  }
  Object.defineProperty(JsonArray.prototype, 'jsonArray', {get: function () {
    return this.jsonArray_u1gsrt$_0;
  }});
  JsonArray.prototype.getPrimitive_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.content.get_za3lpa$(index), JsonPrimitive) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson('at ' + index, 'JsonPrimitive');
  };
  JsonArray.prototype.getObject_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.content.get_za3lpa$(index), JsonObject) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson('at ' + index, 'JsonObject');
  };
  JsonArray.prototype.getArray_za3lpa$ = function (index) {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.content.get_za3lpa$(index), JsonArray) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson('at ' + index, 'JsonArray');
  };
  JsonArray.prototype.getPrimitiveOrNull_za3lpa$ = function (index) {
    var tmp$;
    return Kotlin.isType(tmp$ = getOrNull_0(this.content, index), JsonPrimitive) ? tmp$ : null;
  };
  JsonArray.prototype.getObjectOrNull_za3lpa$ = function (index) {
    var tmp$;
    return Kotlin.isType(tmp$ = getOrNull_0(this.content, index), JsonObject) ? tmp$ : null;
  };
  JsonArray.prototype.getArrayOrNull_za3lpa$ = function (index) {
    var tmp$;
    return Kotlin.isType(tmp$ = getOrNull_0(this.content, index), JsonArray) ? tmp$ : null;
  };
  JsonArray.prototype.getAs_n86q5$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.json.JsonArray.getAs_n86q5$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var unexpectedJson = _.kotlinx.serialization.json.unexpectedJson_puj7f4$;
    return function (J_0, isJ, index) {
      var tmp$, tmp$_0;
      return (tmp$_0 = isJ(tmp$ = this.content.get_za3lpa$(index)) ? tmp$ : null) != null ? tmp$_0 : unexpectedJson('at ' + index, getKClass(J_0).toString());
    };
  }));
  JsonArray.prototype.getAsOrNull_n86q5$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.json.JsonArray.getAsOrNull_n86q5$', wrapFunction(function () {
    var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
    return function (J_0, isJ, index) {
      var tmp$;
      return isJ(tmp$ = getOrNull(this.content, index)) ? tmp$ : null;
    };
  }));
  JsonArray.prototype.toString = function () {
    return joinToString(this.content, void 0, '[', ']');
  };
  Object.defineProperty(JsonArray.prototype, 'size', {get: function () {
    return this.content.size;
  }});
  JsonArray.prototype.contains_11rb$ = function (element) {
    return this.content.contains_11rb$(element);
  };
  JsonArray.prototype.containsAll_brywnq$ = function (elements) {
    return this.content.containsAll_brywnq$(elements);
  };
  JsonArray.prototype.get_za3lpa$ = function (index) {
    return this.content.get_za3lpa$(index);
  };
  JsonArray.prototype.indexOf_11rb$ = function (element) {
    return this.content.indexOf_11rb$(element);
  };
  JsonArray.prototype.isEmpty = function () {
    return this.content.isEmpty();
  };
  JsonArray.prototype.iterator = function () {
    return this.content.iterator();
  };
  JsonArray.prototype.lastIndexOf_11rb$ = function (element) {
    return this.content.lastIndexOf_11rb$(element);
  };
  JsonArray.prototype.listIterator = function () {
    return this.content.listIterator();
  };
  JsonArray.prototype.listIterator_za3lpa$ = function (index) {
    return this.content.listIterator_za3lpa$(index);
  };
  JsonArray.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.content.subList_vux9f0$(fromIndex, toIndex);
  };
  JsonArray.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonArray', interfaces: [List, JsonElement]};
  JsonArray.prototype.component1 = function () {
    return this.content;
  };
  JsonArray.prototype.copy_adp4jc$ = function (content) {
    return new JsonArray(content === void 0 ? this.content : content);
  };
  JsonArray.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.content) | 0;
    return result;
  };
  JsonArray.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.content, other.content))));
  };
  function unexpectedJson(key, expected) {
    throw new JsonElementTypeMismatchException(key, expected);
  }
  function JsonException(message) {
    SerializationException.call(this, message);
    this.name = 'JsonException';
  }
  JsonException.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonException', interfaces: [SerializationException]};
  function JsonInvalidValueInStrictModeException(value, valueDescription) {
    JsonException.call(this, value.toString() + ' is not a valid ' + valueDescription + ' as per JSON spec.' + '\n' + 'You can disable strict mode to serialize such values');
    this.name = 'JsonInvalidValueInStrictModeException';
  }
  JsonInvalidValueInStrictModeException.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonInvalidValueInStrictModeException', interfaces: [JsonException]};
  function JsonInvalidValueInStrictModeException_init(floatValue, $this) {
    $this = $this || Object.create(JsonInvalidValueInStrictModeException.prototype);
    JsonInvalidValueInStrictModeException.call($this, floatValue, 'float');
    return $this;
  }
  function JsonInvalidValueInStrictModeException_init_0(doubleValue, $this) {
    $this = $this || Object.create(JsonInvalidValueInStrictModeException.prototype);
    JsonInvalidValueInStrictModeException.call($this, doubleValue, 'double');
    return $this;
  }
  function JsonUnknownKeyException(key) {
    JsonException.call(this, 'Strict JSON encountered unknown key: ' + key + '\n' + 'You can disable strict mode to skip unknown keys');
    this.name = 'JsonUnknownKeyException';
  }
  JsonUnknownKeyException.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonUnknownKeyException', interfaces: [JsonException]};
  function JsonParsingException(position, message) {
    JsonException.call(this, 'Invalid JSON at ' + position + ': ' + message);
    this.name = 'JsonParsingException';
  }
  JsonParsingException.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonParsingException', interfaces: [JsonException]};
  function JsonElementTypeMismatchException(key, expected) {
    JsonException.call(this, 'Element ' + key + ' is not a ' + expected);
    this.name = 'JsonElementTypeMismatchException';
  }
  JsonElementTypeMismatchException.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonElementTypeMismatchException', interfaces: [JsonException]};
  var NULL;
  var COMMA;
  var COLON;
  var BEGIN_OBJ;
  var END_OBJ;
  var BEGIN_LIST;
  var END_LIST;
  var STRING;
  var STRING_ESC;
  var INVALID;
  var UNICODE_ESC;
  var TC_OTHER;
  var TC_STRING;
  var TC_STRING_ESC;
  var TC_WS;
  var TC_COMMA;
  var TC_COLON;
  var TC_BEGIN_OBJ;
  var TC_END_OBJ;
  var TC_BEGIN_LIST;
  var TC_END_LIST;
  var TC_NULL;
  var TC_INVALID;
  var TC_EOF;
  var CTC_MAX;
  var C2ESC_MAX;
  var ESC2C_MAX;
  var C2TC;
  function EscapeCharMappings() {
    EscapeCharMappings_instance = this;
    this.ESC2C_8be2vx$ = Kotlin.charArray(117);
    var $receiver = Kotlin.charArray(93);
    for (var i = 0; i <= 31; i++)
      this.initC2ESC_0($receiver, i, UNICODE_ESC);
    this.initC2ESC_0($receiver, 8, 98);
    this.initC2ESC_0($receiver, 9, 116);
    this.initC2ESC_0($receiver, 10, 110);
    this.initC2ESC_0($receiver, 12, 102);
    this.initC2ESC_0($receiver, 13, 114);
    this.initC2ESC_1($receiver, 47, 47);
    this.initC2ESC_1($receiver, STRING, STRING);
    this.initC2ESC_1($receiver, STRING_ESC, STRING_ESC);
    this.C2ESC_8be2vx$ = $receiver;
  }
  EscapeCharMappings.prototype.initC2ESC_0 = function ($receiver, c, esc) {
    $receiver[c] = esc;
    if (esc !== UNICODE_ESC)
      this.ESC2C_8be2vx$[esc | 0] = toChar(c);
  };
  EscapeCharMappings.prototype.initC2ESC_1 = function ($receiver, c, esc) {
    this.initC2ESC_0($receiver, c | 0, esc);
  };
  EscapeCharMappings.$metadata$ = {kind: Kind_OBJECT, simpleName: 'EscapeCharMappings', interfaces: []};
  var EscapeCharMappings_instance = null;
  function EscapeCharMappings_getInstance() {
    if (EscapeCharMappings_instance === null) {
      new EscapeCharMappings();
    }
    return EscapeCharMappings_instance;
  }
  function initC2TC($receiver, c, cl) {
    $receiver[c] = cl;
  }
  function initC2TC_0($receiver, c, cl) {
    initC2TC($receiver, c | 0, cl);
  }
  function charToTokenClass(c) {
    return (c | 0) < 126 ? C2TC[c | 0] : TC_OTHER;
  }
  function escapeToChar(c) {
    return unboxChar(c < 117 ? EscapeCharMappings_getInstance().ESC2C_8be2vx$[c] : INVALID);
  }
  function Parser(source) {
    this.source = source;
    this.curPos_vcfohk$_0 = 0;
    this.tokenPos_1jt2ip$_0 = 0;
    this.tc_hjabir$_0 = TC_EOF;
    this.offset_0 = -1;
    this.length_0 = 0;
    this.buf_0 = Kotlin.charArray(16);
    this.nextToken();
  }
  Object.defineProperty(Parser.prototype, 'curPos', {get: function () {
    return this.curPos_vcfohk$_0;
  }, set: function (curPos) {
    this.curPos_vcfohk$_0 = curPos;
  }});
  Object.defineProperty(Parser.prototype, 'tokenPos', {get: function () {
    return this.tokenPos_1jt2ip$_0;
  }, set: function (tokenPos) {
    this.tokenPos_1jt2ip$_0 = tokenPos;
  }});
  Object.defineProperty(Parser.prototype, 'tc', {get: function () {
    return this.tc_hjabir$_0;
  }, set: function (tc) {
    this.tc_hjabir$_0 = tc;
  }});
  Parser.prototype.requireTc_hrh3e6$ = defineInlineFunction('kotlinx-serialization-runtime-js.kotlinx.serialization.json.Parser.requireTc_hrh3e6$', wrapFunction(function () {
    var JsonParsingException_init = _.kotlinx.serialization.json.JsonParsingException;
    return function (expected, lazyErrorMsg) {
      if (this.tc !== expected) {
        throw new JsonParsingException_init(this.tokenPos, lazyErrorMsg());
      }
    };
  }));
  Object.defineProperty(Parser.prototype, 'canBeginValue', {get: function () {
    switch (this.tc) {
      case 8:
      case 6:
      case 0:
      case 1:
      case 10:
        return true;
      default:return false;
    }
  }});
  Parser.prototype.takeStr = function () {
    if (this.tc !== TC_OTHER && this.tc !== TC_STRING) {
      throw new JsonParsingException(this.tokenPos, 'Expected string or non-null literal');
    }
    var tmp$;
    if (this.offset_0 < 0)
      tmp$ = String_0(this.buf_0, 0, this.length_0);
    else {
      var $receiver = this.source;
      var startIndex = this.offset_0;
      var endIndex = this.offset_0 + this.length_0 | 0;
      tmp$ = $receiver.substring(startIndex, endIndex);
    }
    var prevStr = tmp$;
    this.nextToken();
    return prevStr;
  };
  Parser.prototype.append_0 = function (ch) {
    var tmp$;
    if (this.length_0 >= this.buf_0.length)
      this.buf_0 = copyOf_0(this.buf_0, 2 * this.buf_0.length | 0);
    this.buf_0[tmp$ = this.length_0, this.length_0 = tmp$ + 1 | 0, tmp$] = ch;
  };
  Parser.prototype.appendRange_0 = function (source, fromIndex, toIndex) {
    var addLen = toIndex - fromIndex | 0;
    var oldLen = this.length_0;
    var newLen = oldLen + addLen | 0;
    if (newLen > this.buf_0.length)
      this.buf_0 = copyOf_0(this.buf_0, coerceAtLeast(newLen, 2 * this.buf_0.length | 0));
    for (var i = 0; i < addLen; i++)
      this.buf_0[oldLen + i | 0] = source.charCodeAt(fromIndex + i | 0);
    this.length_0 = this.length_0 + addLen | 0;
  };
  Parser.prototype.nextToken = function () {
    var source = this.source;
    var curPos = this.curPos;
    var maxLen = source.length;
    while (true) {
      if (curPos >= maxLen) {
        this.tokenPos = curPos;
        this.tc = TC_EOF;
        return;
      }
      var ch = source.charCodeAt(curPos);
      var tc = charToTokenClass(ch);
      switch (tc) {
        case 3:
          curPos = curPos + 1 | 0;
          break;
        case 0:
          this.nextLiteral_0(source, curPos);
          return;
        case 1:
          this.nextString_0(source, curPos);
          return;
        default:this.tokenPos = curPos;
          this.tc = tc;
          this.curPos = curPos + 1 | 0;
          return;
      }
    }
  };
  Parser.prototype.nextLiteral_0 = function (source, startPos) {
    this.tokenPos = startPos;
    this.offset_0 = startPos;
    var curPos = startPos;
    var maxLen = source.length;
    while (true) {
      curPos = curPos + 1 | 0;
      if (curPos >= maxLen || charToTokenClass(source.charCodeAt(curPos)) !== TC_OTHER)
        break;
    }
    this.curPos = curPos;
    this.length_0 = curPos - this.offset_0 | 0;
    this.tc = rangeEquals(source, this.offset_0, this.length_0, NULL) ? TC_NULL : TC_OTHER;
  };
  Parser.prototype.nextString_0 = function (source, startPos) {
    this.tokenPos = startPos;
    this.length_0 = 0;
    var curPos = startPos + 1 | 0;
    var lastPos = curPos;
    var maxLen = source.length;
    parse: while (true) {
      if (curPos >= maxLen) {
        throw new JsonParsingException(curPos, 'Unexpected end in string');
      }
      if (source.charCodeAt(curPos) === STRING) {
        break parse;
      }
       else if (source.charCodeAt(curPos) === STRING_ESC) {
        this.appendRange_0(source, lastPos, curPos);
        var newPos = this.appendEsc_0(source, curPos + 1 | 0);
        curPos = newPos;
        lastPos = newPos;
      }
       else {
        curPos = curPos + 1 | 0;
      }
    }
    if (lastPos === (startPos + 1 | 0)) {
      this.offset_0 = lastPos;
      this.length_0 = curPos - lastPos | 0;
    }
     else {
      this.appendRange_0(source, lastPos, curPos);
      this.offset_0 = -1;
    }
    this.curPos = curPos + 1 | 0;
    this.tc = TC_STRING;
  };
  Parser.prototype.appendEsc_0 = function (source, startPos) {
    var tmp$;
    var curPos = startPos;
    var condition = curPos < source.length;
    var pos = curPos;
    if (!condition) {
      throw new JsonParsingException(pos, 'Unexpected end after escape char');
    }
    var curChar = source.charCodeAt((tmp$ = curPos, curPos = tmp$ + 1 | 0, tmp$));
    if (curChar === UNICODE_ESC) {
      curPos = this.appendHex_0(source, curPos);
    }
     else {
      var c = escapeToChar(curChar | 0);
      var condition_0 = c !== INVALID;
      var pos_0 = curPos;
      if (!condition_0) {
        throw new JsonParsingException(pos_0, "Invalid escaped char '" + String.fromCharCode(curChar) + "'");
      }
      this.append_0(c);
    }
    return curPos;
  };
  Parser.prototype.appendHex_0 = function (source, startPos) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var curPos = startPos;
    this.append_0(toChar((fromHexChar(source, (tmp$ = curPos, curPos = tmp$ + 1 | 0, tmp$)) << 12) + (fromHexChar(source, (tmp$_0 = curPos, curPos = tmp$_0 + 1 | 0, tmp$_0)) << 8) + (fromHexChar(source, (tmp$_1 = curPos, curPos = tmp$_1 + 1 | 0, tmp$_1)) << 4) + fromHexChar(source, (tmp$_2 = curPos, curPos = tmp$_2 + 1 | 0, tmp$_2)) | 0));
    return curPos;
  };
  Parser.prototype.skipElement = function () {
    if (this.tc !== TC_BEGIN_OBJ && this.tc !== TC_BEGIN_LIST) {
      this.nextToken();
      return;
    }
    var tokenStack = ArrayList_init_0();
    do {
      switch (this.tc) {
        case 8:
        case 6:
          tokenStack.add_11rb$(this.tc);
          break;
        case 9:
          if (last(tokenStack) !== TC_BEGIN_LIST)
            throw new JsonParsingException(this.curPos, 'found ] instead of }');
          tokenStack.removeAt_za3lpa$(tokenStack.size - 1 | 0);
          break;
        case 7:
          if (last(tokenStack) !== TC_BEGIN_OBJ)
            throw new JsonParsingException(this.curPos, 'found } instead of ]');
          tokenStack.removeAt_za3lpa$(tokenStack.size - 1 | 0);
          break;
      }
      this.nextToken();
      var isNotEmpty$result;
      isNotEmpty$result = !tokenStack.isEmpty();
    }
     while (isNotEmpty$result);
  };
  Parser.$metadata$ = {kind: Kind_CLASS, simpleName: 'Parser', interfaces: []};
  function fromHexChar(source, curPos) {
    var tmp$;
    if (!(curPos < source.length)) {
      throw new JsonParsingException(curPos, 'Unexpected end in unicode escape');
    }
    var curChar = source.charCodeAt(curPos);
    if ((new CharRange(48, 57)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 48 | 0;
    else if ((new CharRange(97, 102)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 97 + 10 | 0;
    else if ((new CharRange(65, 70)).contains_mef7kx$(curChar))
      tmp$ = (curChar | 0) - 65 + 10 | 0;
    else {
      throw new JsonParsingException(curPos, "Invalid toHexChar char '" + String.fromCharCode(curChar) + "' in unicode escape");
    }
    return tmp$;
  }
  function rangeEquals(source, start, length, str) {
    var n = str.length;
    if (length !== n)
      return false;
    for (var i = 0; i < n; i++)
      if (source.charCodeAt(start + i | 0) !== str.charCodeAt(i))
        return false;
    return true;
  }
  function JsonTreeParser(p) {
    JsonTreeParser$Companion_getInstance();
    this.p_0 = p;
  }
  function JsonTreeParser$Companion() {
    JsonTreeParser$Companion_instance = this;
  }
  JsonTreeParser$Companion.prototype.parse_61zpoe$ = function (input) {
    var tmp$;
    return Kotlin.isType(tmp$ = JsonTreeParser_init(input).readFully(), JsonObject) ? tmp$ : throwCCE();
  };
  JsonTreeParser$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var JsonTreeParser$Companion_instance = null;
  function JsonTreeParser$Companion_getInstance() {
    if (JsonTreeParser$Companion_instance === null) {
      new JsonTreeParser$Companion();
    }
    return JsonTreeParser$Companion_instance;
  }
  JsonTreeParser.prototype.readObject_0 = function () {
    var $this = this.p_0;
    if ($this.tc !== TC_BEGIN_OBJ) {
      throw new JsonParsingException($this.tokenPos, 'Expected start of object');
    }
    this.p_0.nextToken();
    var result = HashMap_init();
    while (true) {
      if (this.p_0.tc === TC_COMMA)
        this.p_0.nextToken();
      if (!this.p_0.canBeginValue)
        break;
      var key = this.p_0.takeStr();
      var $this_0 = this.p_0;
      if ($this_0.tc !== TC_COLON) {
        throw new JsonParsingException($this_0.tokenPos, "Expected ':'");
      }
      this.p_0.nextToken();
      var elem = this.read();
      result.put_xwzc9p$(key, elem);
    }
    var $this_1 = this.p_0;
    if ($this_1.tc !== TC_END_OBJ) {
      throw new JsonParsingException($this_1.tokenPos, 'Expected end of object');
    }
    this.p_0.nextToken();
    return new JsonObject(result);
  };
  JsonTreeParser.prototype.readValue_0 = function (isString) {
    var str = this.p_0.takeStr();
    return new JsonLiteral(str, isString);
  };
  JsonTreeParser.prototype.readArray_0 = function () {
    var $this = this.p_0;
    if ($this.tc !== TC_BEGIN_LIST) {
      throw new JsonParsingException($this.tokenPos, 'Expected start of array');
    }
    this.p_0.nextToken();
    var result = ArrayList_init_0();
    while (true) {
      if (this.p_0.tc === TC_COMMA)
        this.p_0.nextToken();
      if (!this.p_0.canBeginValue)
        break;
      var elem = this.read();
      result.add_11rb$(elem);
    }
    var $this_0 = this.p_0;
    if ($this_0.tc !== TC_END_LIST) {
      throw new JsonParsingException($this_0.tokenPos, 'Expected end of array');
    }
    this.p_0.nextToken();
    return new JsonArray(result);
  };
  JsonTreeParser.prototype.read = function () {
    var tmp$;
    if (!this.p_0.canBeginValue) {
      throw new JsonParsingException(this.p_0.curPos, "Can't begin reading value from here");
    }
    var tc = this.p_0.tc;
    switch (tc) {
      case 10:
        var $receiver = JsonNull_getInstance();
        this.p_0.nextToken();
        tmp$ = $receiver;
        break;
      case 1:
        tmp$ = this.readValue_0(true);
        break;
      case 0:
        tmp$ = this.readValue_0(false);
        break;
      case 6:
        tmp$ = this.readObject_0();
        break;
      case 8:
        tmp$ = this.readArray_0();
        break;
      default:throw new JsonParsingException(this.p_0.curPos, "Can't begin reading element");
    }
    return tmp$;
  };
  JsonTreeParser.prototype.readFully = function () {
    var r = this.read();
    var $this = this.p_0;
    if ($this.tc !== TC_EOF) {
      throw new JsonParsingException($this.tokenPos, "Input wasn't consumed fully");
    }
    return r;
  };
  JsonTreeParser.$metadata$ = {kind: Kind_CLASS, simpleName: 'JsonTreeParser', interfaces: []};
  function JsonTreeParser_init(input, $this) {
    $this = $this || Object.create(JsonTreeParser.prototype);
    JsonTreeParser.call($this, new Parser(input));
    return $this;
  }
  function toHexChar(i) {
    var d = i & 15;
    return d < 10 ? toChar(d + 48 | 0) : toChar(d - 10 + 97 | 0);
  }
  var ESCAPE_CHARS;
  function printQuoted($receiver, value) {
    var tmp$;
    $receiver.append_s8itvh$(STRING);
    var lastPos = 0;
    var length = value.length;
    for (var i = 0; i < length; i++) {
      var c = value.charCodeAt(i) | 0;
      if (c >= ESCAPE_CHARS.length)
        continue;
      tmp$ = ESCAPE_CHARS[c];
      if (tmp$ == null) {
        continue;
      }
      var esc = tmp$;
      $receiver.append_ezbsdh$(value, lastPos, i);
      $receiver.append_gw00v9$(esc);
      lastPos = i + 1 | 0;
    }
    $receiver.append_ezbsdh$(value, lastPos, length);
    $receiver.append_s8itvh$(STRING);
  }
  function toBooleanStrict($receiver) {
    var tmp$;
    tmp$ = toBooleanStrictOrNull($receiver);
    if (tmp$ == null) {
      throw IllegalStateException_init($receiver + ' does not represent a Boolean');
    }
    return tmp$;
  }
  function toBooleanStrictOrNull($receiver) {
    if (equals_0($receiver, 'true', true))
      return true;
    else if (equals_0($receiver, 'false', true))
      return false;
    else
      return null;
  }
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_1 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var ProtoBuf$Varint_instance = null;
  var ProtoBuf$Companion_instance = null;
  var ProtoNumberType$DEFAULT_instance;
  var ProtoNumberType$SIGNED_instance;
  var ProtoNumberType$FIXED_instance;
  var ByteBuffer$Companion_instance = null;
  var InputStream$Companion_instance = null;
  function enumClassName($receiver) {
    return get_js($receiver).name;
  }
  function enumMembers($receiver) {
    var tmp$;
    return Kotlin.isArray(tmp$ = get_js($receiver).values()) ? tmp$ : throwCCE();
  }
  function toNativeArray($receiver, eClass) {
    return copyToArray($receiver);
  }
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$serialization = package$kotlinx.serialization || (package$kotlinx.serialization = {});
  package$serialization.Encoder = Encoder;
  package$serialization.CompositeEncoder = CompositeEncoder;
  package$serialization.Decoder = Decoder;
  Object.defineProperty(CompositeDecoder, 'Companion', {get: CompositeDecoder$Companion_getInstance});
  package$serialization.CompositeDecoder = CompositeDecoder;
  package$serialization.ContextSerializer = ContextSerializer;
  package$serialization.SerialDescriptor = SerialDescriptor;
  package$serialization.SerializationStrategy = SerializationStrategy;
  package$serialization.DeserializationStrategy = DeserializationStrategy;
  Object.defineProperty(UpdateMode, 'BANNED', {get: UpdateMode$BANNED_getInstance});
  Object.defineProperty(UpdateMode, 'OVERWRITE', {get: UpdateMode$OVERWRITE_getInstance});
  Object.defineProperty(UpdateMode, 'UPDATE', {get: UpdateMode$UPDATE_getInstance});
  package$serialization.UpdateMode = UpdateMode;
  package$serialization.KSerializer = KSerializer;
  package$serialization.encode_dt3ugd$ = encode_0;
  package$serialization.decode_cmswi7$ = decode_0;
  package$serialization.SerialKind = SerialKind;
  Object.defineProperty(PrimitiveKind, 'INT', {get: PrimitiveKind$INT_getInstance});
  Object.defineProperty(PrimitiveKind, 'UNIT', {get: PrimitiveKind$UNIT_getInstance});
  Object.defineProperty(PrimitiveKind, 'BOOLEAN', {get: PrimitiveKind$BOOLEAN_getInstance});
  Object.defineProperty(PrimitiveKind, 'BYTE', {get: PrimitiveKind$BYTE_getInstance});
  Object.defineProperty(PrimitiveKind, 'SHORT', {get: PrimitiveKind$SHORT_getInstance});
  Object.defineProperty(PrimitiveKind, 'LONG', {get: PrimitiveKind$LONG_getInstance});
  Object.defineProperty(PrimitiveKind, 'FLOAT', {get: PrimitiveKind$FLOAT_getInstance});
  Object.defineProperty(PrimitiveKind, 'DOUBLE', {get: PrimitiveKind$DOUBLE_getInstance});
  Object.defineProperty(PrimitiveKind, 'CHAR', {get: PrimitiveKind$CHAR_getInstance});
  Object.defineProperty(PrimitiveKind, 'STRING', {get: PrimitiveKind$STRING_getInstance});
  package$serialization.PrimitiveKind = PrimitiveKind;
  Object.defineProperty(StructureKind, 'CLASS', {get: StructureKind$CLASS_getInstance});
  Object.defineProperty(StructureKind, 'LIST', {get: StructureKind$LIST_getInstance});
  Object.defineProperty(StructureKind, 'MAP', {get: StructureKind$MAP_getInstance});
  package$serialization.StructureKind = StructureKind;
  Object.defineProperty(UnionKind, 'OBJECT', {get: UnionKind$OBJECT_getInstance});
  Object.defineProperty(UnionKind, 'ENUM_KIND', {get: UnionKind$ENUM_KIND_getInstance});
  Object.defineProperty(UnionKind, 'SEALED', {get: UnionKind$SEALED_getInstance});
  Object.defineProperty(UnionKind, 'POLYMORPHIC', {get: UnionKind$POLYMORPHIC_getInstance});
  package$serialization.UnionKind = UnionKind;
  package$serialization.ElementValueEncoder = ElementValueEncoder;
  package$serialization.ElementValueDecoder = ElementValueDecoder;
  package$serialization.SerializationException = SerializationException;
  package$serialization.MissingFieldException = MissingFieldException;
  package$serialization.UnknownFieldException = UnknownFieldException;
  package$serialization.UpdateNotSupportedException = UpdateNotSupportedException;
  var package$context = package$serialization.context || (package$serialization.context = {});
  package$serialization.SerialFormat = SerialFormat;
  package$serialization.AbstractSerialFormat = AbstractSerialFormat;
  package$serialization.StringFormat = StringFormat;
  var package$internal = package$serialization.internal || (package$serialization.internal = {});
  package$serialization.elementDescriptors_xzf193$ = elementDescriptors;
  package$serialization.TaggedEncoder = TaggedEncoder;
  package$serialization.TaggedDecoder = TaggedDecoder;
  package$context.SerialContext = SerialContext;
  package$context.MutableSerialContext = MutableSerialContext;
  package$context.MutableSerialContextImpl = MutableSerialContextImpl;
  Object.defineProperty(package$context, 'EmptyContext', {get: EmptyContext_getInstance});
  package$internal.ListLikeDescriptor = ListLikeDescriptor;
  package$internal.MapLikeDescriptor = MapLikeDescriptor;
  package$internal.ArrayClassDesc = ArrayClassDesc;
  package$internal.ArrayListClassDesc = ArrayListClassDesc;
  package$internal.LinkedHashMapClassDesc = LinkedHashMapClassDesc;
  package$internal.AbstractCollectionSerializer = AbstractCollectionSerializer;
  package$internal.ListLikeSerializer = ListLikeSerializer;
  package$internal.MapLikeSerializer = MapLikeSerializer;
  package$internal.ReferenceArraySerializer = ReferenceArraySerializer;
  package$internal.ArrayListSerializer = ArrayListSerializer;
  package$internal.LinkedHashMapSerializer = LinkedHashMapSerializer;
  package$internal.EnumDescriptor = EnumDescriptor;
  package$internal.CommonEnumSerializer = CommonEnumSerializer;
  package$internal.EnumSerializer = EnumSerializer;
  package$internal.GeneratedSerializer = GeneratedSerializer;
  package$internal.NullableSerializer = NullableSerializer;
  package$internal.PrimitiveDescriptor = PrimitiveDescriptor;
  Object.defineProperty(package$internal, 'IntDescriptor', {get: IntDescriptor_getInstance});
  Object.defineProperty(package$internal, 'UnitDescriptor', {get: UnitDescriptor_getInstance});
  Object.defineProperty(package$internal, 'UnitSerializer', {get: UnitSerializer_getInstance});
  Object.defineProperty(package$internal, 'IntSerializer', {get: IntSerializer_getInstance});
  package$internal.MissingDescriptorException = MissingDescriptorException;
  package$internal.SerialClassDescImpl = SerialClassDescImpl;
  package$internal.KeyValueSerializer = KeyValueSerializer;
  package$internal.TripleSerializer = TripleSerializer;
  Object.defineProperty(JSON_0, 'Companion', {get: JSON$Companion_getInstance});
  JSON_0.JsonOutput = JSON$JsonOutput;
  JSON_0.Composer = JSON$Composer;
  JSON_0.JsonInput = JSON$JsonInput;
  var package$json = package$serialization.json || (package$serialization.json = {});
  package$json.JSON = JSON_0;
  Object.defineProperty(Mode, 'OBJ', {get: Mode$OBJ_getInstance});
  Object.defineProperty(Mode, 'LIST', {get: Mode$LIST_getInstance});
  Object.defineProperty(Mode, 'MAP', {get: Mode$MAP_getInstance});
  Object.defineProperty(Mode, 'POLY', {get: Mode$POLY_getInstance});
  Object.defineProperty(Mode, 'ENTRY', {get: Mode$ENTRY_getInstance});
  package$json.Mode = Mode;
  package$json.JsonElement = JsonElement;
  package$json.JsonPrimitive = JsonPrimitive;
  package$json.JsonLiteral = JsonLiteral;
  Object.defineProperty(package$json, 'JsonNull', {get: JsonNull_getInstance});
  package$json.unexpectedJson_puj7f4$ = unexpectedJson;
  package$json.JsonObject = JsonObject;
  package$json.JsonArray = JsonArray;
  package$json.JsonException = JsonException;
  package$json.JsonInvalidValueInStrictModeException_init_mx4ult$ = JsonInvalidValueInStrictModeException_init;
  package$json.JsonInvalidValueInStrictModeException_init_14dthe$ = JsonInvalidValueInStrictModeException_init_0;
  package$json.JsonInvalidValueInStrictModeException = JsonInvalidValueInStrictModeException;
  package$json.JsonUnknownKeyException = JsonUnknownKeyException;
  package$json.JsonParsingException = JsonParsingException;
  package$json.JsonElementTypeMismatchException = JsonElementTypeMismatchException;
  Object.defineProperty(package$json, 'EscapeCharMappings', {get: EscapeCharMappings_getInstance});
  package$json.charToTokenClass_8e8zqy$ = charToTokenClass;
  package$json.escapeToChar_kcn2v3$ = escapeToChar;
  package$json.Parser = Parser;
  Object.defineProperty(JsonTreeParser, 'Companion', {get: JsonTreeParser$Companion_getInstance});
  package$json.JsonTreeParser_init_61zpoe$ = JsonTreeParser_init;
  package$json.JsonTreeParser = JsonTreeParser;
  package$json.printQuoted_jigvc$ = printQuoted;
  package$json.toBooleanStrict_pdl1vz$ = toBooleanStrict;
  package$json.toBooleanStrictOrNull_pdl1vz$ = toBooleanStrictOrNull;
  package$serialization.enumClassName_49fzt8$ = enumClassName;
  package$serialization.enumMembers_49fzt8$ = enumMembers;
  package$serialization.toNativeArray_9mvb00$ = toNativeArray;
  Object.defineProperty(SerialClassDescImpl.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  ContextSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  ElementValueEncoder.prototype.encodeSerializableValue_tf03ej$ = Encoder.prototype.encodeSerializableValue_tf03ej$;
  ElementValueEncoder.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  ElementValueEncoder.prototype.beginCollection_gly1x5$ = Encoder.prototype.beginCollection_gly1x5$;
  ElementValueEncoder.prototype.endStructure_qatsm0$ = CompositeEncoder.prototype.endStructure_qatsm0$;
  ElementValueEncoder.prototype.shouldEncodeElementDefault_3zr2iy$ = CompositeEncoder.prototype.shouldEncodeElementDefault_3zr2iy$;
  ElementValueDecoder.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  ElementValueDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  ElementValueDecoder.prototype.updateSerializableValue_19c8k5$ = Decoder.prototype.updateSerializableValue_19c8k5$;
  ElementValueDecoder.prototype.updateNullableSerializableValue_exmlbs$ = Decoder.prototype.updateNullableSerializableValue_exmlbs$;
  ElementValueDecoder.prototype.endStructure_qatsm0$ = CompositeDecoder.prototype.endStructure_qatsm0$;
  ElementValueDecoder.prototype.decodeCollectionSize_qatsm0$ = CompositeDecoder.prototype.decodeCollectionSize_qatsm0$;
  TaggedEncoder.prototype.encodeSerializableValue_tf03ej$ = Encoder.prototype.encodeSerializableValue_tf03ej$;
  TaggedEncoder.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  TaggedEncoder.prototype.beginCollection_gly1x5$ = Encoder.prototype.beginCollection_gly1x5$;
  TaggedEncoder.prototype.shouldEncodeElementDefault_3zr2iy$ = CompositeEncoder.prototype.shouldEncodeElementDefault_3zr2iy$;
  TaggedDecoder.prototype.decodeSerializableValue_w63s0f$ = Decoder.prototype.decodeSerializableValue_w63s0f$;
  TaggedDecoder.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  TaggedDecoder.prototype.updateSerializableValue_19c8k5$ = Decoder.prototype.updateSerializableValue_19c8k5$;
  TaggedDecoder.prototype.updateNullableSerializableValue_exmlbs$ = Decoder.prototype.updateNullableSerializableValue_exmlbs$;
  TaggedDecoder.prototype.endStructure_qatsm0$ = CompositeDecoder.prototype.endStructure_qatsm0$;
  TaggedDecoder.prototype.decodeCollectionSize_qatsm0$ = CompositeDecoder.prototype.decodeCollectionSize_qatsm0$;
  ValueTransformer$Output.prototype.encodeNullableSerializableValue_f4686g$ = Encoder.prototype.encodeNullableSerializableValue_f4686g$;
  ValueTransformer$Output.prototype.endStructure_qatsm0$ = CompositeEncoder.prototype.endStructure_qatsm0$;
  ValueTransformer$Output.prototype.shouldEncodeElementDefault_3zr2iy$ = CompositeEncoder.prototype.shouldEncodeElementDefault_3zr2iy$;
  ValueTransformer$Input.prototype.decodeNullableSerializableValue_aae3ea$ = Decoder.prototype.decodeNullableSerializableValue_aae3ea$;
  ValueTransformer$Input.prototype.updateSerializableValue_19c8k5$ = Decoder.prototype.updateSerializableValue_19c8k5$;
  ValueTransformer$Input.prototype.updateNullableSerializableValue_exmlbs$ = Decoder.prototype.updateNullableSerializableValue_exmlbs$;
  ValueTransformer$Input.prototype.endStructure_qatsm0$ = CompositeDecoder.prototype.endStructure_qatsm0$;
  ListLikeDescriptor.prototype.getEntityAnnotations = SerialDescriptor.prototype.getEntityAnnotations;
  ListLikeDescriptor.prototype.getElementAnnotations_za3lpa$ = SerialDescriptor.prototype.getElementAnnotations_za3lpa$;
  Object.defineProperty(ListLikeDescriptor.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  MapLikeDescriptor.prototype.getEntityAnnotations = SerialDescriptor.prototype.getEntityAnnotations;
  MapLikeDescriptor.prototype.getElementAnnotations_za3lpa$ = SerialDescriptor.prototype.getElementAnnotations_za3lpa$;
  Object.defineProperty(MapLikeDescriptor.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  CommonEnumSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  GeneratedSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  PrimitiveDescriptor.prototype.getEntityAnnotations = SerialDescriptor.prototype.getEntityAnnotations;
  PrimitiveDescriptor.prototype.getElementAnnotations_za3lpa$ = SerialDescriptor.prototype.getElementAnnotations_za3lpa$;
  Object.defineProperty(PrimitiveDescriptor.prototype, 'elementsCount', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'elementsCount'));
  Object.defineProperty(PrimitiveDescriptor.prototype, 'isNullable', Object.getOwnPropertyDescriptor(SerialDescriptor.prototype, 'isNullable'));
  UnitSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  BooleanSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  ByteSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  ShortSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  IntSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  LongSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  FloatSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  DoubleSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  CharSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  StringSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  KeyValueSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  TripleSerializer.prototype.patch_mynpiu$ = KSerializer.prototype.patch_mynpiu$;
  deprecationText = 'Obsolete name from the preview version of library.';
  ARRAY_NAME = 'kotlin.Array';
  ARRAYLIST_NAME = 'kotlin.collections.ArrayList';
  LINKEDHASHSET_NAME = 'kotlin.collections.LinkedHashSet';
  HASHSET_NAME = 'kotlin.collections.HashSet';
  LINKEDHASHMAP_NAME = 'kotlin.collections.LinkedHashMap';
  HASHMAP_NAME = 'kotlin.collections.HashMap';
  KEY_INDEX = 0;
  VALUE_INDEX = 1;
  NULL = 'null';
  COMMA = 44;
  COLON = 58;
  BEGIN_OBJ = 123;
  END_OBJ = 125;
  BEGIN_LIST = 91;
  END_LIST = 93;
  STRING = 34;
  STRING_ESC = 92;
  INVALID = toChar(0);
  UNICODE_ESC = 117;
  TC_OTHER = 0;
  TC_STRING = 1;
  TC_STRING_ESC = 2;
  TC_WS = 3;
  TC_COMMA = 4;
  TC_COLON = 5;
  TC_BEGIN_OBJ = 6;
  TC_END_OBJ = 7;
  TC_BEGIN_LIST = 8;
  TC_END_LIST = 9;
  TC_NULL = 10;
  TC_INVALID = 11;
  TC_EOF = 12;
  CTC_MAX = 126;
  C2ESC_MAX = 93;
  ESC2C_MAX = 117;
  var $receiver = new Int8Array(126);
  for (var i = 0; i <= 32; i++)
    initC2TC($receiver, i, TC_INVALID);
  initC2TC($receiver, 9, TC_WS);
  initC2TC($receiver, 10, TC_WS);
  initC2TC($receiver, 13, TC_WS);
  initC2TC($receiver, 32, TC_WS);
  initC2TC_0($receiver, COMMA, TC_COMMA);
  initC2TC_0($receiver, COLON, TC_COLON);
  initC2TC_0($receiver, BEGIN_OBJ, TC_BEGIN_OBJ);
  initC2TC_0($receiver, END_OBJ, TC_END_OBJ);
  initC2TC_0($receiver, BEGIN_LIST, TC_BEGIN_LIST);
  initC2TC_0($receiver, END_LIST, TC_END_LIST);
  initC2TC_0($receiver, STRING, TC_STRING);
  initC2TC_0($receiver, STRING_ESC, TC_STRING_ESC);
  C2TC = $receiver;
  var $receiver_0 = Kotlin.newArray(128, null);
  for (var c = 0; c <= 31; c++) {
    var c1 = toHexChar(c >> 12);
    var c2 = toHexChar(c >> 8);
    var c3 = toHexChar(c >> 4);
    var c4 = toHexChar(c);
    $receiver_0[c] = '\\' + 'u' + String.fromCharCode(c1) + String.fromCharCode(c2) + String.fromCharCode(c3) + String.fromCharCode(c4);
  }
  $receiver_0[34] = '\\"';
  $receiver_0[92] = '\\\\';
  $receiver_0[9] = '\\t';
  $receiver_0[8] = '\\b';
  $receiver_0[10] = '\\n';
  $receiver_0[13] = '\\r';
  $receiver_0[12] = '\\f';
  ESCAPE_CHARS = $receiver_0;
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-runtime-js.js.map
