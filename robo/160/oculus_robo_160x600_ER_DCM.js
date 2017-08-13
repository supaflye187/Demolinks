(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap33 = function() {
	this.initialize(img.Bitmap33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.game_1_unspoken = function() {
	this.initialize(img.game_1_unspoken);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_2_loneecho = function() {
	this.initialize(img.game_2_loneecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_3_startrek = function() {
	this.initialize(img.game_3_startrek);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_4_superhot = function() {
	this.initialize(img.game_4_superhot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_5_roborecall = function() {
	this.initialize(img.game_5_roborecall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_6_rickmorty = function() {
	this.initialize(img.game_6_rickmorty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_7_wilson = function() {
	this.initialize(img.game_7_wilson);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.hardware_rift = function() {
	this.initialize(img.hardware_rift);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,84);


(lib.hardware_touch_LT = function() {
	this.initialize(img.hardware_touch_LT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,47);


(lib.hardware_touch_RT = function() {
	this.initialize(img.hardware_touch_RT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,60);


(lib.RR_poster_final12 = function() {
	this.initialize(img.RR_poster_final12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,350);


(lib.SmokeEffectPNGFile = function() {
	this.initialize(img.SmokeEffectPNGFile);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,229);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RR_poster_final12();
	this.instance.parent = this;
	this.instance.setTransform(-175,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-175,350,350);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7VSGIAAz/IClAAIAAgLIAAABQAIAHAKABQAKACAHgGQALgLgGgUQARgGAcgYQATgSAagTQApgeAMgKIARgPQAJgIAIgFIAOgGQAJgEAFgEQALgJACgRQACgPgGgPQgEgNgIgGQgJgJgLACQgEACgPAKQgMALgSABQgKgOACgJQABgGAIgHIAOgLQALgLgFgPIgCgDQgFgMgNgBQgIgBgCgCQgCgCAAgEQgBgWAGgTIAGgLQAEgGAHgEIANgHIANgJQAOgMABgNIAAgGIAAgBQABgCAHgDQAMgFACgQQABgJgEgQQgCgHgDgEQgEgHgPgHIgNgKIgBgCIADgFQAHgSALgOIADgEIADAAQAFACAJAHQAYATAfgDQAKgBAFgDIAIgHQAGgGAEgGIABAEIgBAHQAAALAMAIQAFADAQAFQASAFAQAHQAUAIAXAOQAOAIAGACQAOADAJgFQAIgFACgJQACgJgFgHIgEgFIgDgEQgBgCACgFQAEgZgOgTIAJgHIAMAJQAKAHAcAOIBGAhIAiAPQAOAFALAAQAOAAAIgMQADgHgBgIIABgEQAMgeADgPIAEgJQACgFAGgDIAtgoQANgLAFgGQAHgKALgYQAEgLADgDIAOgJQAOgLAIgDQAFgCAMAAIAMgBIAEABQALADAEAEQAIAHAEAWQACAXAJAIQAEAEAJADIAOAGQANAHAGAQQAGATAEAIQAFAKAMANQAlAoAqAdIAFADIAAADIgRAAIgIABIgEgDQgFgDgIgCQgEgBgGABIAAAAIgCgCQgEgJgEgFQgFgFgNgIQgTgMgPgEIgGgCIgDgFQgCgGABgMQgBgNgMgFQgLgFgKAIQgKAIAAASQAAAKABAIQgFAHACALQABAMAKAHQAFADAJAAIAPAAQAMABAMAIQAHAGAGAHQALAQANAeIALAaQAGAPABAFQABAMgHAVQgHAWAAAMQABAHAEAGIABACQADAIgBAFQAAAGgIAJQgHALgCAFIgCAKIgBAKIgKANIgKAQIgKAPQgGAIgPANIgJAOQgOAAgIAIQgGAHgBAPIgDADIgCACQgHgBgGADQgMAEgCAMQgCANAKAHIAFAFIACAGIgBAdIABAdIACAPIAAAUQABANAGAFQAEAFAJABQAHAAAGgCIAuAAIABgBIAGAAIAAAAIABgBIADgBIADgCIABgBIABgBIABgBIAAgBIABgCIABgCIABgBIABgCIAAgBIABgBIACgIQADgQgDgSQgBgHACgDIADgHIACgIQABgEAHgCQAMgEADABIAJAFQAGAEAMAAQATAAAQgCQALgBAFgEQAIgGABgLIAAgFIAFABQAEAAAIgDIALgDQAEAAAMAEQAUAIAHAKIAEAJQAEAFADADQAGAFAOAAQARAAAIgCQAVgGAKABQALABAHAIQAEACABAEQAAAFgHAGQgNAPAAAKIABAEIAAABIgDACIgBABIgCACIgBACIAAACIgBACIAAACIAAACIAAACIAAABIAAACIAAACIABACIAAACIABACIACACIABACIADABIACACIAEACIAHABIDBAAIADAAIADAAQAKgBAFgKQADgHAAgHQAAgMgGgGIgJgFIgJgEQgEgCgFgHIgIgJIgQgLIgJgIIgIgJIgQgOQgLgIgEgGIgLgTQgGgKgHgEIgCgBIgEgCIgNgLIgIgFQgEgDgCgDIgDgHIgDgJIgCgRIAAgFIAAgBIgCgJIgEgMIgBgNQAAgFACgCIAIgJQAFgGACgJQACgIgBgKQAAgOgGgHIgBgBIgFgKIgLgQQgGgHAAgGIADgPQACgMgFgLIgEgJQgDgGABgEQAAgCAGgJQAHgMgHgMIgHgMIgGgNQgEgMgMgIIgLgGIgKgGQgLgHgIgQIgLgdQgEgMgIgFIgEgCQgEgDgGgBQgJgBgHAFIgKAHQgNAJgagDQgcgDgJAAIgJgIQgJgGgUgLQgKgHgSgTQgUgTgEgGQgEgFgEgJQAEgCACgEIAIgPQADgFAHgGQAJgGACgEQAAAbALAKIALAIIAKAJIAUANQAPAHADABQAMAEAJgEQAGgCAGgGIAFACQAMAEAKgCQAMgCAFgJQACgFAAgIIABgOIADgLQADgIAFgGQAEgFAMgIQAJgHAEgGQAHgIgBgJQAAgHgFgOIACgNQACgJAAgEIAAgBIACgCIAJgIQAKgIAWgHQAXgHAJgFIAIgEQAGgCAFABQAiADARAMQAGAFAFAHIAIALQAFAGAFADQAFACAHgBIAAABQAKADABADQAEAEgDAGIgHAJIgCAHQgBAEABAEIAAABQAAAGAEAFIAFAEIACABIABAAIACABIAKAEIAPAKIALAEIALAFIAMAMIAPAJIAKAHIALAGIAQALIAFAKIAOASIAJAMQARAeAVASQAGAGAGACIACAIIABAHIACAEIgDAGIgCAJIgBAKIgBAEIgKACQgIABgTgHIgLgEIgBgDQgDgHgFgIQglg3g/gTQgTgGgPADQgHABgFAFQgHAHAAALQACAKAJAFIAEACIABACIAIAKQAEAFACAGQAEANACAGQADAHAIAIIANAMQANAOAIAPIAJAPQAEAGAEADIAAASQgBAIgEAHIgMAhIgFAKIgGAPIgGAIIgKAFQgSALgCAMQgCAJAGAIQAHAHAJABQAIABAQgJIAIgFIAIgGIAAABQALANACAFQAFAJgBAVQgBAWAEAJIAGAPQAGAOgFAOQgBAFgFAIIgIAJQgKALgBADQgEAIACAMQABAHADAEIABABQACAHAIALIAAAAQAEARABALQAAAZADAHQADAIAJAIIAQAOIAMAMQAIAHAGABQAMADAIgJQAFgCADgDQAHgHAAgSIAAgmIgBgMIgGgQIgFgTIgEgMIAAgDIAAAAIAFgTIAAgKQAJgMADgIIAGgQIANgPIAIgLQAFgHAEgDIAOgJIADgCIAAAAIABgBQAHgIAAgJQgBgKgHgFIgCgFQgCgEgBgHIAAgGQAAgHgEgFIADgNQAEgMgBgIIgCgDQADgGABgLQABgWgFgVIgEgWQgHgcAHgfIAFgbQABgLgFgHIACgDQADgEABgHQABgJgCgJIgEgGIABgBIAEgIQACgGACgCQADgDAJgFQAKgGgCgMIgCgOIABgJIAFgXQAEgUgJgIQgCgCgGgCIgIgFQgDgCgFgIIgWgnQgEgGgCgGIgDgNQgBgHgFgFQgDgGgHgDIgKgCIgKgCQgIgBgJgFIgWgLQgHgCgBgEIgCgGIgCgFIgBgBIgDgLQgBgFABgLQgBgIgFgHIAEgGQAEgNgIgMIgKgKQgCgEgFgKQgGgRgBgKQgBgLABgVQgBgUgNgHIgIgDQgGgCgDgCIgDgDIAHgIQAKgPABgHIABgEIABAAIAMgDQAHgCAFABIAHADQADAFAFAEIANAHQAGAFAJAJIAFAGIAAAIIAAADIgBAFQgCAIADAGQAEAIABAFIABAGQgDAAgFADQgIAGgBAIQgBAGAEATIAEAPIAAABIAAACQgBAHAEAGIADAEQgBAFAAAFQABAHAFAGQAGAGAHAAQAIAAAHgEQAHgFACgHIAQgCIABAAQALABAHgIQAIgKgCgOIgEgMIAAgEQACgFACgKIADgJIAFgLQAEgFAKgGQAMgGAEgEIADgDIAIAAQAMgBAHACIANAEIADAFIADAFIABAEQADAJAJAYIADAOIABAMQACAIAEAGIABABQgKADgFAJQgDAGABAIQACAIAGAEQAFADAGACIAMAEQAJADAJAKIAQAQIASAOQAIAGAJAJIAZAXQAFAFABAEQABAHgLAIIgNAJIgTAMIgFACIgLgHQgMgGgLADIgCAAQgJACgFAHQgHAJAEANIADALIgBAHIgGAIQgFAIgCAMQgCASAHAJIAGAHQAGAHAIANIAPATIACACIAKALIAHALIAFAFQAEAEABADIABAHIACALIAAAXIADAKIAAACIABAKQAEAmAAAjQAAAPgCAIQgBAJgDAIIgIAYQgNAqgBAWQAAAQgCAFIgIAOQgCAFAAAFQgBAIACAJIACAOQAAADgBAGQgFAHgCAMQgBALAAAXQgBAKgEAOIgHAYQgHAXgCAFQgHANgBAFIAAALIgBALIgBAEQgDAEAAAFQgBAHAEAGIABACQAFAHAJABIABABIAFAAIADACIAHABIAIgBIBmgCIApAAIAHgBIADgCIADgCIACgBIACgCIABgCIABgCIAAgCIABgCIABgCIAAgCIAAgBIAAgCIAAgCIgBgCIgBgCIAAgCIgBgBQAEgIAAgQIgChNQAAgWADgIQABgEAHgMQANgVAJgWQADgLAFgHQADgEAKgFQAJgGACgEQALgNgHgWQgEgLAAgDQABgDAEgEIAAAAIAEgGIABAAIACgFQADgIgCgKQgDgKAAgDIAGgIQAFgGABgQQAAgRgFgHQgEgIgOgFIgJgDIgDgCQgZgVgKgYQgCgGgCgLIgEgSQgDgOgIgVIgMgdIgFgKIABgCQAAgegJgNIgGgIQgCgEABgIQABgQAIgPIAIgMQAGgHABgFQADgHADgPIAFgQIAGgPIAEgRQACgGAKgKQAJgKADgHQADgLgFgJQgFgIgJgCIgBgGIgCgGIAGgDIAMgJIABACQAGAHAKAAQAJABAGgGQAGgHAHgRQAHgKACgEIACgKIAFgEQAGABAGgDQAGgCAHgIQAKgKAEgCQACgCANgEIALABIAKAAQADABAIAFIATAGQAMADAFAGQAEAEADAJIACAHIgBAJIgBATIAAAKIgBAEQgCAHAEAIIACADIgDALIgJAOIgCAIIAAAIQACAKAKAFQAEACAEAAQADAEAEACQAHAFAOAAQASgBARgEIAbgKQAHgDAGAAIALADQAPAEATgEIAjgIIAZgFIABgBIAIABIAVgDQANgCAZABQAUAAAIgFQAFgDAIgJQAWgXgBgQIABgFQAAgDAHgCIAPgFIAHgCIAOABIAuAEQAbABARgHQAJgEALgHIASgNQAVgNASgCQANgBAUAEIAfAHIAaAFQAHADAOAHIAWAIIAOAEIgLAJQgNAKgZAGIgqAKIgbALQgRAGgMgEIgMgGIgNgGQgRgHgdAJQgmANgEAVIgDAMQgEAEgLAAQgiAAgNAHQgPAJgHABQgGABgIgCIgNgEQgMgEgJADIgDABIgcAIQgWACgLAEIgNAHIgOAHQgHADgMABIgTACQgSADgPALIgPAMQgHADgLAAIgSAAQgdACgWAPIgMAJQgIAFgHACIgMACIgOABQgOABgKAIQgMAKACANQABAIAHAGIAFADIADAKQAOAlAgALQALADAEADQABACAGAKQACAGAKAJQAKAIADAGQALAVgWAgIgQAXQgIAPAAAMIgBAOQgBAFgHAIQgDAGAAAHQAAAHAEAGQADAFAAADQgBACgGADQgEAEgEAIIgEAPQgCAIgJAPQgGAOAEALQACAEADADIAEANQACAHgDAGQgBAFgGAIIgBABQgCADgCAGQgDALADAQIACAHQgBAGgBALIgCALIgKAfIgHAQIgDANIgGAQQgEAKgBAGIgCAPIgDAKQgCAIAGAIIACACIACACIABACIAAAAIACACIACACIADACIADACIAIABIAHgBIBVgCIAHgBIADgCIAEgCIACgBIABgCIABgCIABgCIABgCIAAgCIABgCIAAgBIAFgFIAGgLQADgGAEgDQAFgDAMgDQALgCAEgFIADgHIAEgIQAHgLAMgBIALABIAmAHQAEAPAKALQALALAOAFQATAIAegGQAQgDAOgEQAEAEACAMQACANACAEQAEAJARAHQAaAKAPgJIFfAAIAAAFIFtAAIAATcgAHljSQgHAHgDALIgDAIIgFAIIgBAHQgBADgFAGIgLARQgDAGAAAFIAAAGIgCAHQgDAFABAGQgBAGAEAFQAEAFAFADQAGACALgBIAogBQALAAAHgEQAIgFACgJQABgHgCgGIAAgBQAAgHgDgKIgFgRIgDgLQAAgQgCgOIgCgJQgHgMgMgBIgBAAQgKAAgIAIgAB+haQALABAGgCIAHgFQAEgDADgFQACgHgBgLQAAgdgKgbQgDgNgIgGQgGgEgIAAQgIABgFAGQgDADgCAEQgDAEgCAHIgCANQgBAHgDAEQgDAFgHAHQgLAKACAPQABANAJAGQAGAEAIAAIAHgCQAJADALABgAsDheQARABAHgCQAQgFABgMQABgEgBgDQACgGgBgGQAAgIgGgVQgWg/ALhDQADgXAMgHQAOgEAEgFQAEgDACgIIABgNQADgKALgMQAXgBAOgOQAIgIACgKQACgLgFgJIgLgSIgHgPIgFgQQgGgQgIgHQgEgHgHgCQgFgBgFACIAAAAQgJABgFAHQgCADAAAFIgCAEQgDAMAAAZQgBAKgHATQgNAfgPAWQgNASgdAgQgPARgIAGQgOAMgNAGIgUAHQgMAEgHAFQgNAKgGAaQgKAjgDAGIgLAUQgFAOABAYQAAANAEAHQAJALAbAAIA3gBQAsAAAfADgAvRl1QgMACgOAVIgQAYQgHALgCAGIgBAIQgBADgEAEQgFAIAAASQAAAWADALQAHASAQAEQABAIAHAGQAGAGAIABQAIACAIgEQAIgFADgHIADgTIAEgNQADgIABgJIACgMIAIgKQAPgSABgWIgBgSIgBgKQgEgMgLgDIgIgCIgGgFQgGgHgIAAIgFABg");
	mask.setTransform(0,59.2);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.RR_poster_final12, null, new cjs.Matrix2D(1,0,0,1,-175,-174.8)).s().p("A7VbYMAAAg2vMA2rAAAMAAAA2vg");
	this.shape.setTransform(0,-0.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-56.5,350,231.5);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SmokeEffectPNGFile();
	this.instance.parent = this;
	this.instance.setTransform(-150.4,-114.5,0.86,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-114.5,301,229);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SmokeEffectPNGFile();
	this.instance.parent = this;
	this.instance.setTransform(-150.4,-114.5,0.86,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-114.5,301,229);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACAVQAFgOAGgcIARAAIgHAVIgJAWgAgdAVIAMgqIAQAAQgCAKgEALIgJAWg");
	this.shape.setTransform(75.3,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(69.5,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAqIgOgFIADgMQAGADAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgCAAgEQAAgEgCgCQgCgCgEgCIgPgFQgNgDgEgBQgEgDgCgEQgCgEAAgFQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIABAGAEIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACADIAFADIAQAEIAJADIAIADQAEADACAEQACADAAAGQAAAHgDAFQgDAGgFACQgFADgHACIgMABIgQgBg");
	this.shape_2.setTransform(63.3,-4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAA0QgEgCgCgEQgCgEgBgIIAAgQIAAgiIgRAAIAAgMIARAAIAAgaIAMAAIAAAaIAYAAIAAAMIgYAAIAAAlQABAMACAEQAAACADACIAGABQAGAAAGgCIAAAMQgIACgIAAQgHAAgEgCg");
	this.shape_3.setTransform(56.3,-5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAGQgCAFAAAHIAAAoIgOAAIAAhQIANAAIAAAPIABAAIAFgHQADgDAEgCIAJgFQADgBAGAAQAHAAAGADQAGACADAEQAEAFABAGQACAFAAAIIAAAyg");
	this.shape_4.setTransform(48.4,-4.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGA8IAAhQIANAAIAABQgAgGgqQgCgEAAgDQAAgFACgDQADgCADAAQAEAAADACQADADAAAFQAAADgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_5.setTransform(41.5,-5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJArIgJgDQgHgDgGgHQgGgFgCgIQgDgIAAgJQAAgHADgJQACgHAGgGQAGgGAHgDIAJgDIAJgBQAHAAALAEQAIADAGAGQAFAGADAHQADAJAAAHQAAAJgDAIQgDAIgFAFQgGAHgIADQgLADgHAAgAgMgbQgFADgEAEQgDAEgCAGQgCAFAAAFQAAAGACAGQACAFADAEQAEAEAFADQAGACAGAAQAHAAAGgCQAFgDAEgEQADgEACgFQABgGAAgGQAAgFgBgFQgCgGgDgEQgEgEgFgDQgGgCgHAAQgGAAgGACg");
	this.shape_6.setTransform(34.4,-4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqA/IAAh6IAOAAIAAAPIAAAAIAHgHQADgEAEgCIAJgDIAIgBQAJAAAIACQAHAEAFAFQAFAGADAIQADAIAAAKQAAAJgDAJQgDAGgFAGQgFAGgHADQgIACgJAAIgJgBQgEAAgEgDIgHgGIgGgHIgBAAIAAAPIAAAqgAgLguQgFACgEAEQgEAFgCAFQgCAFAAAHQAAAGACAGQACAGAEACQAEAFAGACQAFACAFAAQAHAAAFgCQAFgCAEgEQAEgDABgGQACgFAAgHQAAgHgCgGQgBgGgEgEQgEgDgFgDQgFgCgHAAQgFABgGACg");
	this.shape_7.setTransform(24.2,-2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_8.setTransform(9.4,-6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTA/IgPgEIAAgMIAPACIAQACQAHAAAGgCQAFgBAFgDQAEgEACgFQACgHABgIIAAgQIAAAAQgJAKgFADQgEADgFAAIgJABQgHAAgIgCQgHgDgGgGQgFgGgDgGQgDgJAAgJQAAgKADgIQADgIAFgGQAGgFAHgEQAIgCAHAAIAJABQAEABAEACIAIAFIAHAIIAAAAIAAgPIAOAAIAABQIgBALIgDAJIgEAIIgFAGQgHAFgIADQgIACgJAAIgRgBgAgLgwQgFADgDADQgEAEgCAGQgCAGAAAHQAAAHACAFQACAGAEADQADAEAFACQAGACAFAAQAGAAAGgCQAFgCAEgFQADgCADgGQACgGAAgGQAAgHgCgFQgCgFgEgFQgEgEgFgCQgFgCgHgBQgFAAgGACg");
	this.shape_9.setTransform(-0.8,-1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGA8IAAhQIANAAIAABQgAgGgqQgCgEAAgDQAAgFACgDQADgCADAAQAEAAADACQADADAAAFQAAADgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_10.setTransform(-8,-5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_11.setTransform(-14.9,-6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAA0QgDgCgDgEQgCgEgBgIIgBgQIAAgiIgQAAIAAgMIAQAAIAAgaIAOAAIAAAaIAWAAIAAAMIgWAAIAAAlQAAAMACAEQAAACADACIAGABQAGAAAGgCIAAAMQgIACgIAAQgHAAgEgCg");
	this.shape_12.setTransform(-27.3,-5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAqIgOgFIADgMQAGADAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgCAAgEQAAgEgCgCQgCgCgEgCIgPgFQgNgDgEgBQgEgDgCgEQgCgEAAgFQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIABAGAEIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACADIAFADIAQAEIAJADIAIADQAEADACAEQACADAAAGQAAAHgDAFQgDAGgFACQgFADgHACIgMABIgQgBg");
	this.shape_13.setTransform(-34.3,-4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgGgBgOQAAgGADgMQADgIAGgGQAFgEAHgDQAIgDAHAAQAJAAAHADQAGACAFAFQAFAGADAIQADAIAAAKIAAAGIg/AAQABAGADAFQACAFADADQAFADAFABQAFABAGAAIAOgBQAIgBAHgDIABANQgHACgJACIgOABQgKAAgHgCgAAZgFQAAgGgDgFQgBgEgDgEQgDgDgFgBQgDgCgGAAQgEAAgFACQgEABgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_14.setTransform(-42.8,-4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIASBAIAWhAIANAAIAVBAIAThAIAQAAIgcBRg");
	this.shape_15.setTransform(-54,-4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgGgBgOQAAgGADgMQADgIAGgGQAFgEAHgDQAIgDAIAAQAIAAAGADQAHACAGAFQAEAGADAIQADAIAAAKIAAAGIg+AAQAAAGACAFQADAFAEADQADADAGABQAFABAGAAIAPgBQAHgBAGgDIACANQgGACgJACIgPABQgJAAgJgCgAAYgFQAAgGgCgFQgBgEgDgEQgDgDgEgBQgFgCgFAAQgEAAgEACQgFABgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_16.setTransform(-65.1,-4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAGQgCAFAAAHIAAAoIgOAAIAAhQIANAAIAAAPIABAAIAFgHQADgDAEgCIAJgFQADgBAGAAQAHAAAGADQAGACADAEQAEAFABAGQACAFAAAIIAAAyg");
	this.shape_17.setTransform(-74.7,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-18.2,163.2,24.4);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RR_poster_final12();
	this.instance.parent = this;
	this.instance.setTransform(-175,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-175,350,350);


(lib.Tween7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAIADAEAFQAGAGACAHQADAHAAAJQgBAIgCAGQgCAHgDAEQgFAFgFADQgGADgJABIAjAugAgfADIAiAAQAHAAAEgBQAFgCADgDQADgDACgFQABgFABgFQgBgGgBgFQgCgFgDgDIgIgFQgEgCgHAAIgiAAg");
	this.shape.setTransform(115,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA+Igwh7IAQAAIAmBnIAnhnIAQAAIgwB7g");
	this.shape_1.setTransform(103,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMApQgIgDgGgFQgGgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAIAAQAIAAAGADQAHADAGAEQAFAGACAIQADAIAAAKIAAAFIg+AAQAAAHACAFQACAEAFAEQAEADAFABQAFACAGgBIAPgBQAHgCAGgCIABANQgGADgIABIgPABQgJAAgJgCgAAYgFQAAgGgBgEQgCgFgDgEQgDgCgEgCQgFgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_2.setTransform(88.1,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAyAqIAAgwIgBgIIgDgIQgCgCgDgCQgEgCgEAAQgGAAgFACIgIAGIgFAJIgCAKIAAArIgNAAIAAgwIgBgIQgBgFgCgDQgCgDgEgBQgDgCgFAAQgFAAgFACQgEACgDAEQgEAEgCAFQgCAHABAGIAAAoIgPAAIAAhRIAOAAIAAAQIABAAIAEgIIAHgFQAEgCAFgCIAIgBQAGAAAEABQAFACADADQACACACAEIAEAIQACgEADgEIAHgGIAJgFQAEgBAGAAQAHAAAGACQAEADAEAEQADAFABAGQACAGAAAIIAAAxg");
	this.shape_3.setTransform(75.9,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_4.setTransform(63.3,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTA+IgPgDIAAgMIAQACIAQACQAGAAAGgCQAFgBAEgEQAFgDACgGQADgFgBgJIABgQIgBAAQgHAKgGADQgEACgEACIgJAAQgIAAgIgCQgHgEgGgFQgFgGgDgHQgDgHAAgLQAAgJADgIQADgIAFgFQAGgHAHgCQAIgDAIgBIAIACQAEABAFACIAHAFIAGAHIABAAIAAgOIAOAAIAABRIgBAKIgDAJIgEAIIgGAGQgFAFgJACQgIACgJABIgRgCgAgKgwQgGACgDAFQgEAEgCAFQgCAGAAAGQAAAHACAHQACAFAEADQADAEAGACQAFACAFAAQAGAAAFgDQAGgCADgDQAFgDACgGQACgFAAgIQAAgFgCgGQgCgGgEgDQgEgFgFgCQgGgDgGABQgFAAgFABg");
	this.shape_5.setTransform(53.5,4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAHAAQAJAAAHADQAHADAEAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQABAEAEAEQAFADAFABQAFACAGgBIAOgBQAJgCAGgCIAAANQgFADgKABIgOABQgJAAgIgCgAAZgFQAAgGgCgEQgCgFgDgEQgDgCgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_6.setTransform(39.3,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_7.setTransform(29.7,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAA1QgDgCgDgFQgCgFgBgGIgBgQIAAgjIgQAAIAAgMIAQAAIAAgZIAOAAIAAAZIAWAAIAAAMIgWAAIAAAlQAAAMACAEQAAADADABIAGABQAGAAAGgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_8.setTransform(21.8,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_9.setTransform(10.4,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA9IAAhRIAOAAIAABRgAgGgrQgDgCABgFQgBgEADgCQADgEADAAQAFAAACAEQACACABAEQgBAFgCACQgCADgFAAQgDAAgDgDg");
	this.shape_10.setTransform(4.5,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAWIgBgrIANAAIgBArg");
	this.shape_11.setTransform(-4.2,-4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_12.setTransform(-8.4,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_13.setTransform(-12.5,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_14.setTransform(-19.5,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGADIgBANQgGgDgIgBIgMgCQgHAAgEACQgGABgEAEQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_15.setTransform(-28.2,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAHAAQAJAAAGADQAIADAEAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQABAEAEAEQAFADAFABQAFACAGgBIAOgBQAJgCAFgCIABANQgFADgKABIgOABQgJAAgIgCgAAZgFQAAgGgCgEQgCgFgDgEQgDgCgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_16.setTransform(-37.2,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAbA+IgfgtIgaAAIAAAtIgPAAIAAh7IAyAAQAJAAAIADQAHADAEAFQAFAGADAHQADAHgBAJQAAAIgBAGQgCAHgFAEQgDAFgHADQgFADgIABIAiAugAgeADIAiAAQAGAAAFgBQAEgCAEgDQADgDABgFQABgFAAgFQAAgGgBgFQgBgFgDgDIgIgFQgFgCgGAAIgiAAg");
	this.shape_17.setTransform(-47,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_18.setTransform(-62.6,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_19.setTransform(-72.8,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_20.setTransform(-83.4,2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAbA+IgfgtIgbAAIAAAtIgOAAIAAh7IAxAAQAKAAAIADQAGADAFAFQAFAGADAHQACAHAAAJQAAAIgCAGQgBAHgFAEQgDAFgHADQgGADgHABIAiAugAgfADIAjAAQAFAAAFgBQAFgCADgDQADgDACgFQACgFAAgFQAAgGgCgFQgCgFgDgDIgIgFQgFgCgFAAIgjAAg");
	this.shape_21.setTransform(-93.6,-0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFAWIgBgrIANAAIgBArg");
	this.shape_22.setTransform(-101.9,-4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AACAWIAGgWIAJgVIANABQgJAbgDAPgAgdAWQADgNAMgeIANABQgJAbgCAPg");
	this.shape_23.setTransform(-107.8,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.9,-12.2,236.2,24.4);


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAVQgFgCgDgCIgDgDIgCgEIgBgFIAAgEQAAgFABgEIAEgHIAHgEQAEgBAEgBQAEABAEABIAGAEIAEAHQABAEAAAEIAAAEIgcAAIABADIADADIAEACIAEAAIAHAAIAHgCIAAAKIgHABIgHAAIgJAAgAAJgDIgBgEIgCgDIgCgCIgEAAIgCAAIgDACIgCADIgBAEIARAAIAAAAg");
	this.shape.setTransform(24.2,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_1.setTransform(20.9,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAfIgHgGIAAAGIgLAAIAAg+IALAAIAAAWIAAAGQADgDAEgCQADgCAEAAQAEAAAEACIAHAFQACACABADQACAEgBAFQABAEgCAEQgBAEgCADQgEADgDACQgEABgFAAQgCAAgEgBgAgEAAIgDACIgDAEIgBAFIABAFIADADIADADIAEABIAEgBQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBIACgDIABgFIgBgFIgCgEIgEgCIgEAAIgEAAg");
	this.shape_2.setTransform(17.3,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKAVIgFgCIgDgFIgBgFIABgGQABgDADgBIAFgCIAHgBIAKABIAAgCQAAgDgCgCQgCgBgEgBIgIABIgHACIgBgIQADgCAGgBIAIgBQAFABAEABQADABACADQADACABACIABAHIAAAZIgLAAIAAgGIgDADIgEACIgHABIgFAAgAgFAEIgCABIgBAEQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQACACADgBIADAAIADgCIADgDIABgGIgIAAQgEgBgCACg");
	this.shape_3.setTransform(12.2,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAJAgIAAgXQAAgFgCgCIgCgCIgEAAIgDAAIgDADIgCAEIgBAFIAAAUIgLAAIAAg/IALAAIAAAXIAAAHIADgEIAEgCQACgCAEAAIAHABQADABACACQACACAAADIABAHIAAAZg");
	this.shape_4.setTransform(7.5,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKAVIgHgCIACgKIAHADIAHABIAFgBQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIgBgDIgCgBIgIgBQgGgCgCgCIgDgCIgBgFIACgGQABgDACgBQADgCADgBIAGgBIAIABQAEABAEACIgDAJIgGgDIgHgBIgDABQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIABACIADABIAHACIAEABIAEACIADADIABAFQAAADgCADQgBADgDACQgDABgEABIgGAAIgJAAg");
	this.shape_5.setTransform(3,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKAVIgFgCIgDgFIgBgFIABgGQABgDADgBIAFgCIAHgBIAKABIAAgCQAAgDgCgCQgCgBgEgBIgIABIgHACIgBgIQADgCAGgBIAIgBQAFABAEABQADABACADQADACABACIABAHIAAAZIgLAAIAAgGIgDADIgEACIgHABIgFAAgAgFAEIgCABIgBAEQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQACACADgBIADAAIADgCIADgDIABgGIgIAAQgEgBgCACg");
	this.shape_6.setTransform(-1.5,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWAfIAAgqIgTAiIgFAAIgTgiIAAAqIgMAAIAAg9IANAAIAUAmIAVgmIANAAIAAA9g");
	this.shape_7.setTransform(-7.7,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_8.setTransform(-18.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-7.1,52.2,14.2);


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJAVIAAgWQAAgEgCgCIgCgCIgEgBIgDABIgDACIgCAEIgBAEIAAAUIgLAAIAAgoIALAAIAAAHIADgEIAEgCQACgCAEAAIAHABQADABACACQACADAAADIABAHIAAAYg");
	this.shape.setTransform(17.9,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAVIgFgBQgEgCgDgDQgDgCgBgFIgBgIIABgIQABgEADgCIAHgFIAFgBIAEgBIAJACQAFACADADQACACACAEQABAFAAADQAAAEgBAEIgEAHQgDADgFACIgJACgAgEgKIgDACIgCAFIgBADIABAFIACADIADADIAEABIAFgBIADgDIACgDIAAgFIAAgDIgCgFIgDgCIgFgBIgEABg");
	this.shape_1.setTransform(12.9,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAfIgIgBIABgKIAHACIAIABIAFgBIAEgCIAEgDIABgGIAAgHIgBAAQgDAEgDACQgEABgDAAIgIgBQgEgCgCgDIgEgGQgBgEgBgEQABgFABgEQACgEACgCIAGgFIAIgCQADAAAEACIAHAFIAAgGIAKAAIAAApIAAAGIgBAEIgDAEIgDADIgIADIgIABIgJgBgAgEgUIgDACIgCAEIgBAFIABAFIACADQAAABABAAQAAAAABAAQAAAAABAAQAAABAAAAIAFABIAEgBIAEgCIACgDIABgFIgBgFIgCgEIgEgCIgEgBIgFABg");
	this.shape_2.setTransform(7.8,-9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAfIAJgUIgRgpIAMAAIAJAeIAKgeIAMAAIgQAoIgGAVg");
	this.shape_3.setTransform(3,-9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_4.setTransform(-0.3,-11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEAVIgFgBQgEgCgDgDQgDgCgBgFIgBgIIABgIQABgEADgCIAHgFIAFgBIAEgBIAJACQAFACADADQACACACAEQABAFAAADQAAAEgBAEIgEAHQgDADgFACIgJACgAgEgKIgDACIgCAFIgBADIABAFIACADIADADIAEABIAFgBIADgDIACgDIAAgFIAAgDIgCgFIgDgCIgFgBIgEABg");
	this.shape_5.setTransform(-3.8,-10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAfIAAg9IAZAAQAFAAADACQAEABADADIAEAGIABAIQAAAFgBAEIgEAFQgDADgEABQgDACgFAAIgOAAIAAAVgAgLAAIANAAIAEAAIADgCIACgDIAAgFIAAgEIgCgDIgDgCIgEgBIgNAAg");
	this.shape_6.setTransform(-8.8,-11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_7.setTransform(-18.3,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-18.1,46,14.2);


(lib.text2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAVQAFgOAGgcIARAAIgHAVIgJAWgAgdAVIAMgqIAQAAQgCAKgEALIgJAWg");
	this.shape.setTransform(82.5,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(76.8,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWAqIAAhRIANAAIAAAQIAAAAQAFgIAFgEIAGgFQAEgBAFAAIAHABIAAAPIgJgBQgFAAgFACQgEABgCAEQgDAFgCAFQgCAFAAAGIAAAog");
	this.shape_2.setTransform(72,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgGQgGgFgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAFQgGAGgIAEQgLADgHAAgAgMgaQgFACgEAEQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADADQAEAEAFADQAGADAGgBQAHABAGgDQAFgDAEgEQADgDACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgEgFgCQgGgDgHAAQgGAAgGADg");
	this.shape_3.setTransform(63.6,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJA/IAAhFIgRAAIAAgMIARAAIAAgPIABgNQACgGADgDQACgEAEgBQADgCAHAAIANACIAAAMIgLgBQgGAAgDAEQgCADAAAKIAAAOIATAAIAAAMIgTAAIAABFg");
	this.shape_4.setTransform(56.2,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTA+IgQgDIABgMIAPACIARACQAGAAAFgCQAHgBADgEQAFgDACgGQACgFAAgJIABgQIgBAAQgHAKgGADQgEACgFACIgIAAQgJAAgHgCQgHgEgFgFQgGgGgDgHQgDgHAAgLQAAgJADgIQADgIAGgFQAFgHAHgCQAHgDAJgBIAIACQAFABAEACIAHAFIAGAHIABAAIAAgOIAOAAIAABRIgBAKIgCAJIgFAIIgFAGQgHAFgIACQgIACgJABIgRgCgAgLgwQgEACgEAFQgEAEgCAFQgCAGAAAGQAAAHACAHQACAFAEADQAEAEAEACQAGACAFAAQAGAAAGgDQAEgCAFgDQAEgDACgGQACgFAAgIQAAgFgCgGQgCgGgEgDQgEgFgFgCQgFgDgHABQgFAAgGABg");
	this.shape_5.setTransform(43.9,4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_6.setTransform(34,1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA9IAAhRIAOAAIAABRgAgGgrQgDgCABgFQgBgEADgCQADgEADAAQAFAAACAEQACACABAEQgBAFgCACQgCADgFAAQgDAAgDgDg");
	this.shape_7.setTransform(27.3,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAA1QgDgCgCgFQgDgFgBgGIgBgQIAAgjIgQAAIAAgMIAQAAIAAgZIAOAAIAAAZIAWAAIAAAMIgWAAIAAAlQAAAMABAEQACADACABIAGABQAGAAAGgCIAAANQgIABgIAAQgHAAgEgBg");
	this.shape_8.setTransform(22.4,0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGA9IAAhRIAOAAIAABRgAgGgrQgCgCgBgFQABgEACgCQACgEAEAAQAEAAADAEQADACgBAEQABAFgDACQgDADgEAAQgEAAgCgDg");
	this.shape_9.setTransform(17.6,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_10.setTransform(10.8,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIASBAIAWhAIANAAIAVBAIAThAIAQAAIgcBRg");
	this.shape_11.setTransform(0,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAHAAAGIAAAoIgOAAIAAhRIANAAIAAAQIABAAIAFgHQADgEAEgBIAJgFQADgBAGAAQAHAAAGACQAGADADAEQAEAEABAHQACAFAAAJIAAAxg");
	this.shape_12.setTransform(-15.4,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAIAAQAIAAAGADQAHADAGAEQAFAGACAIQADAIAAAKIAAAFIg+AAQAAAHACAFQACAEAFAEQAEADAFABQAFACAGgBIAPgBQAHgCAGgCIABANQgGADgIABIgPABQgJAAgJgCgAAYgFQAAgGgCgEQgBgFgDgEQgDgCgEgCQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_13.setTransform(-24.7,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMApQgIgDgGgFQgGgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgFAIgDQAHgCAIAAQAIAAAGADQAHADAGAEQAFAGACAIQADAIAAAKIAAAFIg+AAQAAAHACAFQACAEAFAEQAEADAFABQAFACAGgBIAPgBQAHgCAGgCIABANQgGADgIABIgPABQgJAAgJgCgAAYgFQAAgGgBgEQgCgFgDgEQgDgCgEgCQgFgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_14.setTransform(-33.8,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_15.setTransform(-43.4,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgGQgNgCgEgDQgEgCgCgEQgCgDAAgGQAAgHADgEQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACACIAFAEIAQAEIAJADIAIADQAEADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgFADgHABIgMABIgQgCg");
	this.shape_16.setTransform(-56.9,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_17.setTransform(-65.5,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_18.setTransform(-74.7,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-12.2,170.5,24.4);


(lib.robo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJYBUQgYAAgMgNQgLgNAAgXIAAhFQAAgXALgNQAMgNAYAAIBwAAQAXAAAMANQAMANAAAXIAABFQAAAXgMANQgMANgXAAgAJMgzQgEAFAAAMIAABFQAAAMAEAFQADAEAJAAIBwAAQAIAAAEgEQAEgFAAgMIAAhFQAAgMgEgFQgEgFgIABIhwAAQgJgBgDAFgAB9BUQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAIAAg1IAfAAIAAAcIB4AAQALAAADgDQAFgEAAgKIAAgMQAAgKgFgFQgDgDgLAAIiXAAIAAhYQAAgBAAgBQABgBAAAAQAAgBABAAQAAAAABAAICRAAQAXAAAKALQALALAAAaQAAARgHAOQAQAKAAAVIAAAMQAAAXgMALQgNALgbAAgACZgNIB1AAQAHAAADgDQADgFAAgOQAAgOgDgDQgDgDgHAAIh1AAgAkTBUQgXAAgMgNQgMgNAAgXIAAhFQAAgXAMgNQAMgNAXAAIBwAAQAXAAAMANQALANAAAXIAABFQAAAXgLANQgMANgXAAgAkfgzQgEAFAAAMIAABFQAAAMAEAFQADAEAJAAIBwAAQAIAAAEgEQADgFAAgMIAAhFQAAgMgDgFQgEgFgIABIhwAAQgJgBgDAFgApHBUQgEAAgCgEIgZg0IhxAAIAAA0QAAAEgDAAIgYAAQgEAAAAgEIAAhQICVAAQAJAAAEgDQAEgEAAgLIAAgSQAAgMgEgEQgEgDgJAAIh2AAIAAAlIgfAAIAAg9QAAgBAAgBQABgBAAAAQABgBAAAAQABAAABAAICRAAQAYAAAMANQAMAMAAAWIAAASQAAAegWAKIAaA4QABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape.setTransform(75.9,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.robo, new cjs.Rectangle(0,0,151.8,16.8), null);


(lib.recall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C120").s().p("AGvF9QgQgDgKgHIgGgEIAAgBIgBAAIgBgBIABAAIACABIAAgCQgFgBgEgDIgCgDIAHAFIALAHIAAAAIABABIAAgBQADAAACACIABABIABAAIgEgCIADACIABAAIAEADIAEACQADAAACABIAGACIAIABQAHABADgBIAFAAIgBgBQgMACgHgDIgCAAQAJABAJgBIACABQABgCAFAAIAKgDIAIgCQAFgCABgBIAHgDIAOgHIANgIIAIgFIAAgCIgQAJIgTAKIgTAJIgQAEQgKABgHgCQgHgDgHABQgDgCgCAAQgEgBgBgBIgNgHIgCgBIAIAEQAGADADAAIABgCIgQgGQgHgEgHgGIgBAAIgIgFIABABIgCAAQADAFAFABIAAACIgOgMQgJgIgBgEIAAgBQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAgCIgBgCIgDgDIgBgBIACAAIADACIAAgBIAAAAIgBgCQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAIgBAAIABACIADABIAJAJQAFAFAEABIAAgBQgGgCgDgGIACABIgFgGQgCgCgBgEIAAgCIgDgCIgHgGIAJgXIAHgnQABgIAEgNQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgCIgBAAIAAgEIABAAIABgCIAAABIABgBIAAgGIACgFIAAABIAAADIAAAAIABAAIABgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAIACgFIAFgZIAEgPQADgKACgYIABgCQABgKADgVIAHgnIAHglQAEgSgBgGQADgOACgQQABgOAFgQQgBgHADgHQADgIgBgGIAAgBQAAgDADgGQgBgLADgKQADgKAAgLIAAAAIAEgPIACgPIAAABIACgHIAAgCIgBAAIAAgBIABAAIABgEIgBAAIgBADIACgQIAEgZIADgZIABgNIABgCIAAABIABgCIgBgIIAAgJIAFgWQACgLAEgIQADgIAIgIIAIgHQAIgCAFgGIALgEIABgCIADAAIAAgDIACgBIgBgBIACgCIgDgBIgCgDIAAgCQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIACACIAAgEIABgCIAEAFQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAADQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAHAAIAAABIADgBIAAgFIABgCIgBABIgBAAIgCgCIgBgFIACABIACgCIAFgBIADABIgCADIAEAAIAEgFIACABIABAAIABAEIADADIAAAEIAEABIAFAFIACAAIAAgCIgEgCIABgCIgDgBIACgDIgEgDIAAgDIgFABQAAgEADgBIAEgCIAFgBQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEABIAEAFIADAHIACABIABAFIACAEIAAAGIACABIACgEIgDgMQgCgHABgFIABACIAEACIAAADIAGAGQABAKACACIgBABIAAAHIABAGIgCACQAFATgGATQgGASgCAVQgCABABAEQAAAFgCABIgBgEIgBAGIAAgBIgBAGQAAAGgCAGQADAEgDAHIgEALQABAGgCAEQgBAEAAAGIAAgBIAAADIgWCBIgNBBQABgNADgNIgCAAIAAgCIgEASQgCAIABAIIgDAIIgFAlIABADIgCAIQgCABgBAEIgCAHIgDARQgDALABAGIAAABIACgIIAAACQgDAOABAGIgBABIAAAGIgBAGIgCAAIABgCIAAgBIgDAFIAAABIACgBIAAACIAAgCIAAAJIgBgBIAAALIgDARIgDASQgCAGgBAHIgKBVQAZgIAbgMIAygZIBagmIBaglQAZgKAfgFQAOgBALAAIgEAEIAPABQAJAAAEADQgcARgeAPIhKAfIhbAnIABAAIgBABIgBAAIABgBIgEACIAAABIgKAHIgLAFIgQAJIggARIgjASIgWANIgCACIAAABIAAgBIgGAEQgHABgEAEIgEACIAEgDQAAgBANgGIAdgRIAegQIARgJIABAAQADgFAGgCIAMgFIADgCIAGgDIAUgMIgGADIgIADIAAABIgBAAIgEACIgCABQABABAHgEIAHgEIAAAAIgVANIAAgBIgBABQgGABgHAEIAAABIgBAAIgCABIABgBIgDACIABAAIgDACIgTALIgGACQgFACgDADIgKAGIgHACIgBABIgHAFIgIADIgGAFQgDAAgDADQgEgBgDADQgEACgCADIgEACQgDABgBACIgCAAIABABIADgBIgGAEIgKAGQgEABgKAGQgLAFgHAAIgHADIAAgBIgBAAIgBABIgJABIgUgCgAHCF4IACAAIgCgBIgCAAgAG1F2IAJACIACgBIADgBIAAAAIgFAAIgJgCIgJgBIgCAAIALADgAHoFzIgEACIAIgDIAFgCIAFgCIAAgBIgBABIABgCIACgBIgBAAQgHAFgIADgAGnFzIACgBIgCAAIAAAAgAGZFnIgQgJIAAgBIgCAAIABAAIAAABIgCgCIAAAAIABACIgBAAIgCgBIgBgBIAAABIABAAIAFAEIABgBIAEADIAKAEIABAAgAF6FYIAAABIABAAIgBgCIgCgBgAIWFVIgBACIACAAIAIgFIgEACIAAgBgAF2FWIgDgDIACAAQAAABAAAAIABABIAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIgCgBIAAAAIgBAAIABAAIgBgBIAAgBIgDgCIABAEIAFAFgAFvFHIAAgBIgBAAgAJwEnIABAAIACgBIgCAAgAGKDfIAAABIgCADQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIACgGIAAgGIgBAFIgBAEIAAgBIAAACgAILCNIAAABIAAACIACgDIgBgBIgBABgAIPCHIAAAAIAAgCQAAABAAABQABAAAAAAQAAAAAAgBQAAgBAAgBIABgGIAAgCgAIOB7IAAACIABgDIAAABIAAgCgAGoBDIAAADIABgCIAAgCIAAgBgAGrAyIAAADIACgKQgEADACAEgAGtAlIACgFIABgFgAGwAVIACAAIgBgCIgBACgAG2gKIABgCIAAgDIgBAFgAG9gzIAAABIgBABIAAABIABAAIABgCIAAgCgAHAg/IAAgCIgBAAgAHWjTIgCAJQgBAEAAAEIABABIABgGQgBgCACgEIABgCIAAgDIAAgCgAHYjbIABACIAAgFIACgLQgEAIABAGgAJQjbQABgFAAgDIAAgBQgCACABAHgAJOjiIgBAGIAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgFIAAgDIgBAGgAIoluIADAEIABAAIADAAIABABIADgBIgEgFIgDgBIAAgDgAGjF3IgBgBIABAAIAHACQAEABACABIgNgDgAGeF0IAAgBIABAAIAAABgAGJFsIAAgBIgEgBIgDgCIgDgDIgDgCIgDgDIgBgBIAAgBIABABIgBgBIAPALQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIADADIgFgCgAGSFsIAAAAQAAgBAAABgAGQFrIABAAIABABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAGCFfQgBgBABAAIAAABgAIdFYIACgBIAAABgAFxFXIAAgBIgBgBIABAAIACACgAFvFVIABABIAAABgAIlFTIAAABIgBAAgAImFTIABAAIgBABgAEcFSIgBgCQAGgDAJAAIgJAFgAEsFKIADgCIABgBIAGgCIAHgDIACAAIAAAAIgGAFQgFADgCAAIgBAAIgCADgAEsFGIAAgDIAFgFIAAgBIAEgFQACgEADgBIAAAAIAAgCIgCgBIACAAIAAAAIAAgCIgDAAIgCAFQgDAAgCADIgEAEIgCAAIgEADIAAABQgGABgEADIgJAAIgLgJIACgDIAEADIADgDIAEgBIABgEIACACIABgBIgBgCIAEAAIACAAIAAAAQABgDAEgCIgCAAIgGACQgEABgDACIgEgBIgCAEIgGABIgCACIAAACQgFAAgBgEQgBgEgEgCIABgDIAGAAIAGgDIgEgCIgBgBIgEgBIACADIgCAAIgCgBIgFABIACACIAAAGIACAEIgEgBIgCgCQgFgBgDgEIAEgDIAEABIABABIgBgEIAEgFIgEgFIACgCIADABIACgBIgBgDIgEABIgCgBIgCAEQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAIgEAAIgEgCIgCABIgBAGQgBAEgDAAIgDAAIgCgDIAEgEIgIAAIABgCIACABIABgBIAEAAIgCgFIADAAIgDgBIAEgDIgCgBIgEAAIADgCIgEgGIADgCIAAgDIAEgCIAAABIADgBIABgDIgEgGQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIgBgFIgCADIgCAHIgBgCIgEAAIADADIgCADIAAAEIgDAAIgDACIAAgBQAAgFAEgKIAEgOIACAAIAAgFQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIACABQAAgMAEgKQADgNAAgKIgBgBIABgEIABgBIAKhGIAMhHIgjADIghAEQgHAKgLAUIgRAeQgBABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAIgEABIgBABIAAgBIgFACQgEAAgEADQgEAEgDABQgBADgEABIgEABIAAAAIgIACIgDADQgCgBgFAFQgEAEgDACIAAgEQgFAAgDAEIgBgBIgLAAIADgFIACgFIAAgDIgDAAIAAgBIADAAIABgHIACgIIgDgBIgFAJIAAgFIACgCIgBgCIAAAAIgBAAIABAAIgBABIAAABIAAACIgDADIgCgBIABgJIACgFIACgFIAAAAIADgDIAAAAIABgBIABgBIgHADIgCAEIABgCIACAAIgDACIgCACIAAAAIAAgBIABgEIgFADIAAAAIABACIADgBIgBABIgCABIAAAAIgCAFIAAABQABAAAAABQABAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIABgDIgBAAIgCACIAAgDIAAgDIgJAFIgKAEIgBAAQAKgGAKgEIAAgCIgVALIgBAAIgDABIgBACIgCACIgCgCIAAACIACAAIgGADIgJAEIAFgDIAAgBQAAABABAAQAAABAAgBQAAAAABAAQAAgBAAgBIgEAAIgEAEIgEAEIgHAEIAAgBIABgCIACAAIAAgBIgCACIgEABIABABIACAAIgHADIgNAIIgCAAQgGAGgWAMQgYANggAOIhFAhIhFAgIg4AXQgaAIgFAAQgNAAgNgHQgOgJgKgMQgLgMgHgPQgIgOgBgNIgBABIgBgCIACAAIAAgIIgDAAIgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIABgBQAAgKAEgFIABACIgCAGIADgCIADgLIAFgMIgBgGIAAABIgCAEIgCACIgEAGIgBgBIACgIIABgCIAAgBIgBADIgEAGQAAADgDACQgDACAAADIgBgBQAAgDADgFQADgFAAgFIAAgBIAIgKQAAABgBAAQAAAAAAAAQAAgBAAAAQAAgBABgBIAEgFIgBgBIADgCIAHgKIAQgTIAfghIgBgBIABAAIABABIADgEIAFgFIgBgBIACABIAAgCIAAAAIAEgDIgCgBIADAAIAFgFIAEgFIAAgCIACABIAHgGIAKgHIgBgBIACAAIgQAQIgQAPQgEAIgMAJQgNAJgCAIIgEACIgEAGIgCAAIACACIgFADIAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIgEADIAAACIgFAEIAAABIgCACIgFAIIgFAHIAAABQgGAFgBAJIAGgJIABABIAAgCQADAAABgDQACgDACgCIACgBQAAgCAFgGIAKgPIAMgOIAJgKIABACIAEgFIABAAIACgFIABAAQAHgEAEgHQAEgIAIgFIABAAIAGgGIgBgBIAEgEIABAAIAFgDIANgPIgIAGIADgEIgBAAQACgFAFAAQABgDAEgCIgDAFIgDADIAHgHIAWgUIAAABIATgTIAMgNIAJgGIgKAKIAAgBIgBAAIABABIgHAIQgJAKgKAHIgBADIADgDIABABQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBABgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBIACgBIgBABIAAACQACgDAGgFIgDACIAGgGIADgDIACgCIABAAIgBgBIABgBIABABIAAgBIADgBIABgCIAGgGQAFgFACgGIADgBIAYgZIgCADIAEgEIABgCIgFACIgXAKIABAAIgBAAIAHgEIAAABIAHgEIAAAAIgEABIgXALIgZAMIAAABIgpASIgxAWIguAXQgWANgOAKQgEAAgGAFQgFAEgDAAQgNAFgXANIAAAAIAAAFIgEAAIAAABQgEAAgEACIgBAAIABgBIAGgCIAFgFQgMAFgJAGQgEAAgBAEIgFADIABACIABgCIABABIABgBIgBABIAHAFIABADQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAIgCACIAEAGIAGAHIgCgBQABACADACIgCgDIABAAIAGAIIACAEIAAABIgBgBQAJAPAEAWIAJAQIAHAOIAAAEQAAABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIgBgBIAFACQgCACABAFQACADAAAEIgBAOIgDAEIgDAFIAAACIgEAEIgBADIgCgDIABgHIgBgBIAAgGIgBgFIACgCIAAgBIgBAAIgCABIgBAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAIAAACIgCgBIgBABIABAAIABAFIgCAFIABACQgEAMgHAKQgIAKgNAAQgFAAAAgDIAGgCIABAAIABgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIgCgCIAEgDIgCgBQADgDACgBIACgHIgDABIgGAJQgCAEgFADIACADIgGAGIgBADIACABIgGADIgEgDIgHACIgBgDIADgCQACgCABgFIADgBIgHABIgEABIADgBIABADIgGACIgCAEIAFADIAGADIgFADQgEgBgCACIgFABIgCAAIACgFQABgDADAAIABAAIgCgCIgCAAIABgFIgHgCIAAgCQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIABgEIgDAAIgCAEIgEABIACACQgBABAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIgKAGIgBADIABABIACAAIAAAEIgDAEIABABIgCACIgDgBIAAgEIgEAEIgDABIAAgBIABgBIABgDIADgCIgDgBIgBgBIADgCIgEAAIABgEIgDABIgCACIgBgBIACgCIgBgBIgDABIgEgBIAAgFIgBgBIABgEIADAAIABgDIgBgDIgDgDIgEADIgFACQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgDgCIAAAEIADAGIgDgBIgDAEIAEgBIAAAEIADADIABAAIgEADIgBADIgCgEQgBgGgDgGIgHgLIABgCQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAGgEQACgCAEgBQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAABAAIAEgBIgBgFIgFgJIgFgKIABgBQgIgJgFgJQgGgJgHgIQgFgRgMgNQgNgMgGgRIABAAQgMgRgGgLIgTgeQgEgBAAgDIgDgIIgDAAIAAgEQgGgFgBgCIgDAAIAAgBIACgCIgCgBIgDgFIgCAAIgDgCIACgBIABAAIgFgCIAEgDIgDgDIAEAAIgJgMIgJgOIgEALIABAAIAAADIgCAAQgCAFgBADIgDAHIAAADIAAAAIAAABIgIATIgHAVIgDAJIgGAOIgJAZIgIAYIgEAMIgGARIgDAKIgDAKIgOgEQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIgCAEQgFAAgBABIACABIgEADIgEAAQgCAEgEADQgFACgBAFIgCAAIAAgCIgBAAIgDADQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIgBgDQAAABAAAAQAAAAgBABQAAAAgBABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDACIgBgBQADgHAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIACAAIgBgQIgCgBIgBABQAAADgEAGIAAgEQgBAAAAABQgBAAAAAAQgBAAAAgBQAAAAgBgBIgBgEIAAgCIACgEIgBgBIAAgEQAAABgBABQAAABAAAAQgBABAAAAQgBAAAAAAIgBAAIABgCQAAgHACgFIABgNQAAgEgDgDQgCACAAAEIgCAHIAAgBIgCgFIgBAAIAAgDIAAADQgCACAAAEIgBAGQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgEIACgNIAEgNIgCgKQAAAEgDAFIgCAPIgBACIABAFIgBAFIgCAIIgBAHIABABQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAgKADgJQACgJAAgKIABgCQAAgFACgDIADgIQAIguAKgjQAJgjAPgrIA2ieQAHgWAKgTQAKgVAAgWIgBgKQgBgEABgEQAAgDADgDQACgEAHgEIAAABIgCAIIAEgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAAABIgBACIAEgDIABACIADgBIABgCIAFgCIADAEIACgEQAGAAADgDIAEADIACgEIAFABIAGgBIADgBIgBgBIAEgDIAGACQAFABgBgEQALAAAKgCIAUgCIAKABIADgDIABAAIAAAEIgBABIAUgBIAagBIAagDQALAAAGgEIALgEQAEgCAHgBIABABQAGACAHgBIAOAAIgCAFIACACIAAAKQAAABgBAAQAAABAAAAQAAAAAAAAQABABAAAAIAEABIACgCIAAABQACABAGAAIAKgBIAKACIAEgBIgCgEIAJAFIgBACIADAAIAAAAQADgEAHgGQAAgDAFAAIgBABIAAABIAEgBIABgBIAFAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIACgCIAIgBIAEACQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAMAAIgBgBIAEgCIAGACQADABAAgDQAKACAKgBIAVAAIARAHQAHACAMAAIAQABIAFgBIABAAIAJABIABgBIAAgBIABABIgBAAIAAABIAIgBQAEABAFgCIAHgBIAMgCIAMAAIAHgBQgGAAgDgCIAAABIgDAAIAAgBQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAHAAQAFAAADACIAIAAIABABIABgCIAFABQADAAADACIgBABIgBAAIgEgBIgPAAIAKACIANABIAFgBIABAAIgBAAIgBAAIgCgBIABABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIACgBQAIADALgDQANgCAHAAIABABIABgBIAHAAIALgBIALAAQAGgBAAgBIAEgCQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAAACIACgBIACAFIgDABIgBACIAAADIABABIABgCIACACIAAgBIABADIAAABIABACIgBgBIAAAIIgBACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIABAFIgFAHQgFACgDAGQgEAGgKAEQAEAAAEgCIACABIgLACIgLABIgMABQgwAFgvAAQgtAAgxADQgJABgGAFQgGAGgEAJIgHARIgEAOIAmAAIAEgBIAFgBIAEgBIAAgBIABAAIABAAIABAAIAAgBIAEAAIADgBIABABIAAgBIABAEIABgBQAGACAGgDIADgBIACABIAEAAIAAABIADgBQABACAHAAQAFAAAEgCQAEACAIAAQAIABAEgCQAFACAEAAIAJgBIACgBIABAAIACAAIAFAAIACABIADABIACgBIAHABIACgCQADABACACQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIABgBIAEADIgBACIABAAIAAAAIADABIgBACIgCAAIgBgBQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIADABIAAACQABACAEAAIACAAIACACIAAACIgBgBQgFACgGgBIAAgBIgBABIgBABIAAAAIAEAHQgCAGgDADQACADAEAAIABgBIAAABIABAAIABAAIADAAIgEADIgGABQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABIADADIAAABQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgCgCgEAAIgFABIgDABIACABIAAAAQgFABgEACIgFAAQgGAAgHADIAAgBQgDACgGgBQgGAAgCABIAAABIgGgBIgDABIAGACIABAAIAAAAIgGAAQgEgBgBACIAAgBIgBgBIAAAAQghAGgcABQgdABgVAHQgVAGgNARQgMARgDAmQgBAEACAEIAEAHIBhghIBjgfIgCAAIAAAAIAFgBIADgBIABAAIABgBIADAAIAAAAIAEgBIAAgBIAEgBIAAABIACAAIAIgDIAJgBIAHgCIABgBIABABIAAgBIABAAIAEAAQAJAAAGgGIABAAQAEgCADAAIABABIABgBIAFABIAEACIgBACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIgBAAIAFgFIAHgHIAAgBIABAAIAIgJIgEAEQACgDAEgDIAGgIIACgBIAAgBIABAAIABgBIAAgBIABAAIABgCIABAAIACgCIAAgBIABABIAAgCIACgCIABgBIAHgHIALgLIAAgBIALgLIAKgLIAHgIIASgRIARgSQAJgIAAgDIABAAIAFgIIABAAIADgEIgEAEIgBABIgDAEIgBAAIAFgGIADgFIAAAAIABgBIAAgBIABAAIgBAEQAIgKAKgKIAggfIAEgBIAAgFIADAAIAJgHQAGgEAFAAIAFACIAFgCIAFADIABAAIgBACIgHABIAAABIgHAEIAKABIAGAAIAAgBIALABIAHAEIAFALQAAADAEAGIAJAMIAJAPIAAABIAEAKIAEAKIgCgBQABAPgIAYQgIAXgNAbIgZAxQgOAXgGAOIgMAUQgHAKgEAMIAAADIgCAEQAAADgCAEQgDAEAAADIAAADIgHAQIgBABIAAACIgBABIAAACIgBAAIgBACIAAACIgBADIgBACIAAABIgCADIgDAFIAAABIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAgBIgIAMIgHAJIgCACIAAgBIgCACIgBABIgCACIABgBIAAABIgBAAIgCADIABgCIABgCIABgDIABgBIAAgCIABAAIACgGIAAgBIgBAAIADgHIABgIIgCAAIABgBIgCAAIAAAEIABAAIABABIgBABIgBgBIgBABIAAACIABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAACIgBAAIgBAEIgDAFIAAABIgBAAIABgCIAAgBIgBAAIAAADIgCAGIgBAGIgBABIAAgDIABgEIAAgCQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIgCADIABgCQACgGABgGIABgMIAAgBIgCAEIAAADIgBACIgBgEIAAAAIAAgBIAAAAIAAAAQAAgCACgDIgCAAIAAhYQgPAJgSAQQgTAPgXAWQgXAWgWAXQgXAYgUAYQgSAWgRAXQgQAXgIANQAvgJAugSQAxgUApgUIABABQAQgJARgGQAOgFAXgFIACABQACgCAHgCIAKgDIABAAIACgEIAFgKIAHgLIAEgFIAFgJQADgGACgBIAAgBIACAAIAAgCIABAAIAJgNIACgFIgBAAIAAgBIABAAIAAgBIAAgBIACABIAGgJQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAHgKIAGgJIABgCQAEAAACgDIAEgHIADgBIgBgDIAJgQIALgTIAJgSIALgPIAAgEIACAAIABAAIABgKQABgGAGAAIAAACIABACIACgDIgCABIADgEIACgEIAAgBIABAAIAGgOQAagbAVgmQATgkAWghIAAABIAEACIAAACIAFgFIAAgDIACgCIANgSIAFgGIABgCIAFgLIAAAAIgCABIgEgBIAAACIgFAHIAAAFIgDAAIAAgEIgEAJQgCADgDACIABgFQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIgCgBIAGgNIAEgBIgDAFIAAAEIACgBIACgIIAEAAIgCgFIgBAAIAIgCQAFAAAEgDIAAADIACgDIAKACIAAADIACgDIARABQAMABAEgCIAAgBIAFAAIgDABIADADIADgDIACADIAFgCIAOAFIABAAIAAACIAAgCQAFACADADQADADABAFIABARQAAAjgEArQgGAsgGAhIgQBNQgHAngFAiIAEgIIAAADIABACIgBAHIgBAKIgCAJIgCAEIgBAAIABgHIABgIIgCgGQgLBFgHBHIABgCIgDAXIAAgCIgCAOIABgBIgCAcIgDAWIAAgBIgCADIgGAjIgIAjIgCAHIgBAGIABACIAAAAIACADQgEAAgEAJIgIANIAAAAIgEACQgFgCgCAGIgDABgAFOERQgDAKgEAGIADgBIAAgFIAFgNQAEgKAAgEgAD8EXIABAAIAAgBgADmEMIAAABIABAAIADgBIgCAAIgCgBIAAAAgADuEMIABgDIgBAAgAozD9IABAAIABABIAAABIABgDIAAgBIAAAAgAotD1IABACQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIABACgAoXDzIADAAIgBgBgApGDpIACADIAJACIAAgEIgCgEIgDgBIgCACIgDAAIgBgCIAAAEgAnQDLIABABIABAAIAAAAIABAAIABgEIgCgBgAnIDHIABAAIAAgBIgBAAgAnTDDIABgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIAAACgAnKDCIADgDIgDgDIgIgUIgDAMIAAABIAAACIACAAIgBACIACABIAAACIAFgDgAtTC7IAAABIACgDIAAgBgAtOCmQgDACABADIgBAEIADAEIAAgCIABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgDIgDgFIAAAAgAtbCxIAAABIABAAIAAgCIgCAAgAtbCqIAAAEIACgBIACgDIABAAIACgCIgCgBIgCAAgAtkCsIABgCIgBAAgAtZCjIAAACIABgCIAAAAgAtoCXIgBABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAFAAAAgFIgCgFIAAgCgAmHCKIABAAIACgEIAAgBIgBAAIgCABIAAADIgBAAgABTCBIACgBIAAgCgABYBxIgBAFIAAACIACACIACgEQABgEABgBIAAgDIgBgCQgDACgBADgABMB2IABAAIABgBIgCgBIgBAAgABOBvIgBADIACAAIACgDQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBIgBgBIgDAAIgCADgAA3BhIABABIACgCIgDABgAA9A2IAAAAIAAgBgAAzA2IAIAAIAAgEIgIAEgAktAjIAAABIABABIACgBIAAgBIABgCIABAAIAAgCgABTAPIgCADIgCABIAAABIgEAGIACACIADgDIgBgDIAIgIIAJgOIAIgNQAEgGACAAIACgFIgCAAIgEAFIAAgBIgDADIgMARIAAABIgEAHIgEAGIgBAAgAkiAZIABABIAFgGIABAAIAAgCQgDABgEAGgAAQAWIAAABIACgCIAAgBgAATASIABAAIAAgBgAkXANIAAABIACAAIABgCQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAgAARALIABgBIgBgBgAkSAJIAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIAAgCgAncj6IgrAyIgtA0IgmArIgXAaQAVAkAVAeIAOATQACgGAFgHIAKgUIACAAIAAAAIAEgFIAAgCIgBACIgBgBIAFgJIAHgSIAJgWIgBADIABgBIABgCIgBAAIABgDQADgNAHgQQAFgNAFgPIABgGIADgFIACgEIAFgPIACgGIABgBIgBgBIAAAAIABgBIABgCIABgBIAAAAIABgBIACgHIABgGQABgEACAAIADgMIADgMIAAgDQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDIAAgBIABAAIABgCQAAAAgBAAIAAgBIABgEIACAAIAAgGIADgGIAAABIABAAIAAgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIACgFIAAgCIgKANgABwgJIAAACIABAAIAAgBIABgCgAF5gRQABABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIgBAEgAongXIAAACQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAAgCgAB7gsIAAAAIgEAGQgCADgCABQgBAFgDACIACACIAHgKIAIgLIABgDIgBACIgCADIAAgCgADggiIALAAIAAgHIACgDIAAAAIAAgCIABAAIAAAAIABAAIgBACIAAAAIAAAIQArgIALgOQAMgPAAgqIgBgiIgCgjgAobgkIAAAAIgBABIABABIABgBIAAgDgAohgiIABAAIAAAAIADgHIAAAAIABgCIgBACIgBAAgAoZgzIABAAIAAgCIgBACgAoShKIgBACIABABIAAgCIABgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAgAjOhJIACAAIABgBgAjChNIgBAAIgDADIABAAIAOgHIABgCIAAAAgAoMhZIAAAEIABgCIAAgCIABABIAAgCIgBAAgAoJhgIAAAAIABABIABgCgAoBhxIABAAIAAAAIgBgEgAoAh1IABAAIAAgCIgBAAgAn6iFIgBAAIAAADIgBABIABABIACgFIgBAAIABAAIgBgBIAAABgAiSiKIAAgCIgBgBgAh+iMIABAAIABABIAFgFQANgMAJgOgAiSiNIABABIABAAIgBgBIAAgBgAC7iUIgCACIgCADIAAACIAFgIIAAgBgAiBiNIASgSIgDABIgIAHIgHAHIgBABIAAAAIgBABIAAgBIAAACIABgBgAiMiPIABAAIABAAIAAgBIgCgBgAiIiQIADgBIgCAAIAAgBIgBAAgApykgQgfADgbACQgHAlgDAaIgKA+IAQAJQAmgfAfghQAhgjATguIg7AGgAC9iWIABgDIgBAAgAnvieIABABIABgDIgBgBgAnqisIAAABIABABIABgEIABAAIgBgBIAAAAgAnsisQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgBIgBAAgAhlivIAAABIAHgHIAAAAIgHAGgAnoixIABABIACgFgAnki5IgBADIABgCIAAAAIABgCIAAAAgAnni3IABAAIAAgBgAgljyIgFAGIACAAIgGAHIgKALIgeAgIABAAIAYgZIAFgGQAGgEAHgHIgGAIQAIgHAGgIIAFgGIgHAHIAdghIgLAJIgSATIgDADIAAgBIAEgFIAFgFIgBgBIgFAGgAi+i+IAAAAIABABIAAgCgAnjjFIgBAFIAAABIABAAIABgFIACgFIAAgBgAnfjLIAAABIABAAIAAgCgAnfjNIABABIAAgCgAhIjPIAAACIAAgBIACgBIABgBIgCAAgAhCjVIAAABIAEgDIgBAAgAEZkmQgDAEAAAEIgFAFQgBAHgDADQgFAFAAAGIgFAEIgBAEIgEAGIgGAJIgGALIgDAIIABACIAIgNQAEgFADgJQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIADgEIAAgCQAFgFADgIIAEgHIAMgWQADgFAAgCIgCgBIgFAIgAg9jZIAAABIAGgHIgBAAQgCAEgDACgAi/jeIAAAAIAEABIAAgBIgCgBIgBAAgAjEjdIABgBIABAAIgBgBIgBAAgAnWj5IAAACIABgBIAAgCgAASkkIgVAXIgGAIIAjglIgIAGgArNktIABABIAAgDIgBACgArck6IAKAAIgIgCgAE9k6IACgBIgDgBgAnEk9IAAADIABgEgAnJk9IABABIAAgCIgBgBgArXlFIgDAFIAHgHgAnPlKIAAgBIABAAIgBgBIgCAAgAkFlNIAAAAIAEgBIgGAAgAkAlOIABAAIADABIABgCIgDAAgAmXlPIAAACIAKgBIgHgBgAiylPIACAAIADABIABgBIgBgBIAGAAQADAAAEgBIABAAIgBgBIgEAAIgMAAQgFABgHAAIAAgBIgBACIAKgBgAjIlRIACABIAJAAIAAgBIgBgBIgBAAIgCAAIgHAAIAAAAgAjSlSIABABQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAIgBgCIgFAAIgDAAgAjzlRQAEAAAEgBIABAAIgCgBIgDAAQgIgBgFADIAFAAIAEAAgAjKlRIABgBIgDAAgAjalSIACAAIgBgBgAmSlWIgCAEIAGgEgAiklUIAFABIACgBIACAAIAAgBIABABIABgBIAAABIABgBIABAAIAFgBIgCgBIAAABQgGgBgGACQgEABgGAAIgBAAIgBgBIgBAAIgBAAIABACIADgBQADACADgCgAizlTIAEAAIABgBIgFAAgAiGlXQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIgBAAgAFKlZIACABIABgBIAAgBgAFPleIACABIgBgDgAFjljQACABADAAIAFABIAKgCIACgCIgDAAIgCgBIgRAAgAFallIgFAAIABADIAEAAIAFgCIAAACIABgBIAAgBIgBgCIgFABgAFSljIABABIACgCIAAgBIAAgBIgFgBIAAACIgBABIAAACIABgDIACgBgAGOljIAEAAIgBgEIgBAAIgFACQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBAAQACADAGAAgAFAlkIACgBIgBgBgAEpE+IABgBIABABgAFIE9IgBgEQABgDADgDQADgCAAgDIgBgCIAEAAIgCADIAAAAQAAAIgFAGgAD4E9IACgBIAAABgAD8EqIAAgBIABAAIAAABgADQEjIgDgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIADAAIgBACIAIABIADADIgFgBIgDABIgCgCIgBAAIAAADQgCgBgBgDgApOEiIAAAAIAAgBIABAAIAAACIgBgBgAo5EbIAEgCIAAACIAJgFIAEgBIgBACQgEABgCADIgDAAIgBAAIAAAAIABABIACACIgBAAIAAAAIgGAAIgDACgAn/EQIABAAIAAABIgBgBgAoMENIABAAIgBAAgAo3ENIAAgBIAAAAIAAABgAnkEHIABAAIAAAAgAnsEHIABAAIABgBIgCABgAo/EHIAAgBIABABgAnSEEIAFgHIAHgGIgFAKIgCABIgCADgAmKDzIAAgBIABABgAm5DyIABAAIAAABIgBgBgAnGDzIAEgIIAFgIQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAAAAIgDAIIgEAGIAAACIgCADgAGKDhIAAAAIAAAAgApXDgIgKgNIgDgIIgCgCIgCgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBAAIgCgDIABgEIgDgCIgEgFIgBgDIgDgCIgBgEIADAAIABgCQAFAFAEAHIAHAMIAAAAIAAAFQAEACAAABIACAGIAFADIAAAGIABAAIADADIAAABIADAFIgCAAgAFjDWIAEgKIAAAIIgDAGgAm5DTIABgCIgCgGIABgEIgDgCIAEgEIAAAFIACABIABAFIACAEIAAAEIgCACgAs6DLIABAAIAAABgAs6DFIgCABIgEgBIgFABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgFAGAAIAEgCIgCADIAJgIIACgBIAAACIgBACIgBACIAAACIAGgCIgIAJgAttDHIAAgBIABABgAswDBIABAAIgBAAgAsgC8IABAAIAAAAgAteC8IAAgBIAAAAIABABIgBAAgAs1C3IABgBIAAABgAsxCwIAAgBIAAABgAJyCrIgHgBIgKgEIAAAAIgPgGIgHgEIAAgCIACACIAAgBIAEACIAIADIABAAIgPgHIgBAAIAAAAIgBgCIACACIAAgBIgDgCIgIgKIAAgDIgIgFQAEgJADgJIAEgNIADgOQAAgFAEgLIABgBIAAgBIAAAAIAAgDIABAAIAAgBIABgBIABgDQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBIAAACIAAACIABAAIABgCQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgDIAFgaIAGgZIABAAIgBgBIABgCIAEgWIAJglIAAACIAAAEIACgJIgCACIAEgQQADgMgBgHQAEgLABgKQAAgJAFgMQgBgFADgFQADgGgBgFIAAgBIACgGQgBgIADgHQACgGABgJIAAAAIAFgWIAAABIABgFIAAgBIAAAAIAAgBIAAAAIACgDIgBAAIgBACIAKg4IAAgBIAAgBIAAgGIAAgHIAFgPQACgJADgFQAEgHAFgEIAIgHIAIgEIAAAAIAKgEIABgBIACAAIAAgBIAMgBIAFAAIASADQAKACAFAGQALAKABAWIAAAAQgFANgCAPIgBAEIgBAEIgCgDIgBAIQAAAEgCAEQACAEgCAEIgDAIQAAADgBAEIgBAIIAAgBIAAACQgKAxgLAsIgLAuIAEgSIgBAAIAAgCIgEANQgBAGAAAGIgCAGIgCALIgCAKIgBAFIABACIgCAHQAAAAAAAAQgBAAAAABQAAAAgBABQAAABAAAAIgCAFIgCAKIAAABIAAAAIgBABQgCAJAAADIAAABIACgGIABgBIgBADIgCAPIgBAAIAAADIgBAEIgBABIAAgCIAAAAIgBADIgBABIABgBIAAACIABgCIAAABIgBAFIgBAAIAAAIIgCAMIgDANIgCAJIgKA9QAWgGAUgJIApgTQAYgKASgGQAUgIAagEIAUgBQAJABAKAEQgXAMgZAMIghAOIgCABQgOADgTAKIggAQIgXALIgYAMIAAABIgZAJQgHACgEAFIgFADIgJADIgFAAIgCABIgGAAIgHgBgAJvCqIAIABIACAAIACgBIAAAAIgEAAIgHgBIgHgBIgCAAIAIACgAJPA/IAAABIAAAAIgBACIABgBIACgFIABgEIgCAGIAAgBgAK5AEIAAAAIABgCIgBAAgAK8gBIAAgBQAAAAAAABQAAAAAAAAQAAAAABgBQAAAAAAgBIAAgEIAAgCgAK5gEIAAABIABgCIAAgCgAJ3hoIAAgBIAAgCIAAADgAJ/iOIABgBIgBAAgAKUj4IgCAGQgBADAAADIAAABIABgEIABgFIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgBgCgAKVj+IAAACIABgEIABgIQgDAGABAEgAL1kAIABgFIAAgBQgBACAAAEgAL0kFIgBAEIAAABIACgHIAAgCgAtwCqIgCABIgBgFIgBgBIAAgHIAAgCIABgCIABADIAAAFIABgCIADADIABAFIgDAEgAmlCqIABAAIAAABgAmjCpIABAAIAAABgAmXCoIABAAIAAABgAt3CnIAAABIAAAAIAAgBgAt2CmIAAgBIABABgAt3CjIAAAAIAAACgAsaChIABAAIgBABgAt9CeIAAAAIAAABgAtyCXIAAAAIAAABIAAgBgAggCUIA4gdIgiAVQgQAJgFAAgABpCSIABgBIgDAAIgDgCIgFAAIgEgCIAEgCQABgDAHgDIACAAIAAgDIACABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAAADQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgGAGIAGgDIAGgDIABgBIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAADIgBABIgBAAIABAAIgBAAIADABIAEgBIgFAEIgEADgAmPCIIABAAIAAABgAByCCIAAAAIAAABIAAgBgAFsCCQACgGgBgFQgBgFABgFIACABIABALIAAACIgBAEIgBADgAB0CBIAAgBIABABgAB2B+IAAgBIABABgAB3B9IAAgBIAAAAIAAABgAFpBsIACACIgEAMQAAgGACgIgAt1B4IAAgBIABABgAA0BnIgMAIIgPAIIAbgQgAFqBlIABgLIACgLIAAAHIgBAHIAAADIABABIgCACIABAEIgCACgAMtBeIABAAIgBABIAAAAgAnsBXIAAAAIAAgBIABABIgBAAIAAABgAnxBLIABAAIABAAIgCABgAnsBJIABgBIAAABgAlYBAIAAgBIABAAIAAABgAFwAxQAAgKACgHIAEgRIABgBIABAGQAAAGgDAEIABAEIABABIgEADIADABIgDAHIgBABIAAADgAIpAIIgBAHQAAAOgGAQgAJQAnIABAAIgBABgAk3AoIACgCIACgDIAAABIgEAEgAJWANIAAAAIAAABIAAAAgAAHAKIABAAIgBABgAJYAJIABgBIAAgBIAAABIABABIgBAAIgBABgAAGgBIABAAIAAABgAkNgCIABAAIgBABgAkNgHIgDAEIADgGIAHgIIAIgIQADgEACAAIABABIgBABQgGAEgCAFIgEAFIAAABIgCABIAAABQgEAFgFADgAragEIABgBIAAABgAkSgTIAAgCQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAgAkGgWIABgBIAAABgAkOgYIgBgBIABAAIABABgAAzgdIABAAIgBABgAj5geIAAgBIABABgAkLgfIABAAIgBABgAj6ghIABgBIAAABgAB4gmIABAAIgBABgAjrgqIAAgCIABACgAA6gtIABgBIAAABgADzgvIAAAAIAAABIAAgBgAA7gvIAAgCIABACgAA8g0IAAgBIABAAIAAABgALLg/IAAgBIABgCIAGgbIAAAGQgBALgFAKIgCAMQgBgDACgGgAjig3IAAgBQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAgAjag+IAAgBIABABgACPhXIAPgXIgJARIgJAPIAAACIgCAFIgCAAIgCACIABAEIgEACQADgJAJgPgAD0hDIABAAIAAABgAjlh/IABAAIAAABIgBgBgAn6iFgAiFiUIAAAAIAAABgAjzirIABgBIAAABgAjoisIABgBIgBABgAj3isIABAAIAAAAgAjeiuIAAgBIABAAIAAABgAi4i3IABAAIgBABgAjCi3IABAAIAAAAgAi3i+QAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAi7jAIABAAIAAABIgBgBgAnmjEIAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgCgAJOjIIABgBIAAABgAjTjmIAAgBIABABgAL0jyIAAgBIAAABgArNlPIAAgBIABABIAAABIgBgBgArolPIAAAAIgBABgAnTlUIABgCIAIAEIgDAAIgDgBIgBAAIgBAEgAq+lQIABAAIAAABIgBgBgAkVlSIAAgBIAAABIAAAAgAkTlTIABAAIgBABIAAgBgAkllUIABABIgBAAgAkOlUIABAAIAAABIgBgBgAJmlWIAAgDQgBgBAAgEIABgFIACgFIABABIAAAEIAAAJIgBACIABAEgAkMlUQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAAAgAqzlXIAEgCIASAAIgKABIgBABIgDABIgDgCIgBAEgAnZlWIgDgCIADgBIAHADgAjnlZIAAgBIAAAAIAAACgAjllZIAAgBIABABIgBAAgAmMlaIABgBIABABIgBAAgAmRlcIAAAAIAAABIAAgBgAmYlcIABABIAAAAIgBgBgABlliIgBgBIACABgAA+lmIAEgCIAAgBIAFgEIAFgCIACAAIgBAEIgLAHgAIRlrIABAAIgBABIgBACgAB0lrIgIgEIACAAIALACIAAACgABbltQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIARAAIAAADgAIrluIABAAIAAAAIgBAAgAJilvIgIgLIAAgDIABgBIAFAGQACAEABADIAAACgAJTlyIgBAAIACAAgAIol4IgBgBIACABg");
	this.shape.setTransform(89.4,38.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.recall, new cjs.Rectangle(0,0,178.9,76.6), null);


(lib.msg_shopnow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape.setTransform(59.1,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAFgDIAFgBIAHABIgBAQQgDgCgFAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape_1.setTransform(53.7,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAeIgHgCQgGgCgEgEQgDgEgDgGQgCgGAAgGQAAgFACgGQADgFADgEQAEgEAGgDIAHgBIAGgBQAGgBAHADQAHADADAEQAFAEABAFQACAGAAAFQAAAGgCAGQgBAGgFAEQgDAEgHACQgHADgGAAgAgGgOIgFADIgCAGIgBAFIABAHIACAFIAFADQADACADAAQAEAAADgCIAEgDQACgCABgDIABgHIgBgFIgDgGIgEgDIgHgCIgGACg");
	this.shape_2.setTransform(47.5,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfAsIAAg8IgbAxIgHAAIgbgxIgBAAIAAA8IgQAAIAAhXIATAAIAcA2IAdg2IATAAIAABXg");
	this.shape_3.setTransform(38.1,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANAeIAAggQAAgGgCgDIgEgDIgFgBIgFABIgFAEIgDAGIgBAGIAAAcIgQAAIAAg5IAQAAIAAAKIAFgFIAFgEQAEgDAGAAQAFAAAEACQAEACADADQACADABAEIACALIAAAig");
	this.shape_4.setTransform(25.6,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAEgDIAGgBIAHABIgBAQQgDgCgFAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape_5.setTransform(20,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAeQgDgCgDgCIgEgGQgCgEAAgEQAAgFACgDQABgEAEgBIAHgDIAKgBIAPABIAAgDQAAgFgDgCQgDgDgGAAIgLABQgHACgEACIAAgOIALgCIANgBQAGAAAGABQAEACAEAEQADADABAEQACAEAAAFIAAAjIgPAAIgBgIIgEAEIgFADQgEADgGAAIgIgBgAgHAGIgDACIgBAEQAAAEADACQACACAFABIAEgBIAEgDIAEgFQACgDAAgEIgMgBQgFAAgDACg");
	this.shape_6.setTransform(13.8,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape_7.setTransform(7.2,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAsIAAhXIAQAAIAABIIAnAAIAAAPg");
	this.shape_8.setTransform(1.1,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.msg_shopnow, new cjs.Rectangle(-4.8,0,69.3,18.4), null);


(lib.logo_stadium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADrILInVAAIhjAAQghgBghgFQghgDghgIQg5gOg0gZQg0gagtgkQg+gygshAQgrhAgXhKQgWhKgBhPQABhOAWhLQAXhJArhAQAshAA+gyQAtglA0gZQA0gaA5gNQAhgIAhgEQAhgEAhgBIBjgBIHVAAIBjABQBCABBCAQQByAbBdBKQA+AyArBAQArBAAXBJQAXBKAABPQAABPgXBKQgXBKgrBAQgrBAg+AyQhcBKhzAbQhCAPhCACIhCABIghgBgAlFitQgUAAgVADQgpAGgjAYQgkAZgTAkQgUAlAAAqQAAArAUAkQATAlAjAZQAkAXApAHQAVADAUABIAqAAII4AAIApAAQAUgBAWgDQApgHAjgXQAjgZATglQAUgkAAgrQAAgqgUglQgTgkgjgZQgjgYgpgGQgWgDgUAAIgpAAIo4AAIgVAAIgVAAg");
	this.shape.setTransform(78.1,-114);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(-8.6,-166.4,173.5,104.7), null);


(lib.logo_rifttouch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABMC3IAAiUQAAgQgDgNQgDgMgHgIQgIgKgLgFQgLgFgRAAQgRAAgRAGQgQAGgNANQgOAMgGATQgJATAAAYIAAB2IgZAAIAAltIAZAAIAACCIAAAyIABAAIAOgUQAJgLALgHQAMgIAOgFQAPgFARAAQAWAAARAIQAPAGALANQAKANAFAQQAEAQABATIAACWg");
	this.shape.setTransform(188.6,161.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYB1QgXgIgQgOQgRgQgJgXQgHgPgDgpQAAgVAKgiQAJgXARgQQAQgOAXgHQAXgIAbAAQARAAATAEQAVAFARAJIgCAYQgRgJgVgEQgUgFgPAAQgWAAgRAFQgSAHgNAMQgOAMgHATQgHAUAAAYQAAAaAHATQAHASAOAOQANAMASAGQARAFAWABQAPgBAUgFQAVgEARgJIACAYQgQAJgWAFQgTAEgRAAQgbAAgXgHg");
	this.shape_1.setTransform(162.1,167.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag3BxQgPgGgLgOQgKgMgEgRQgEgQgBgUIAAiUIAZAAIAACRQABAPADANQADANAIAKQAHAKAMAGQALAFARABQASgBAQgGQAPgIANgNQAMgPAGgTQAIgWAAgYIAAhuIAaAAIAADrIgZAAIAAgzIgBAAQgQAbgQALQgLAJgOAFQgQAFgSAAQgWAAgRgIg");
	this.shape_2.setTransform(136.5,168.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgzByQgVgJgRgSQgQgQgIgXQgIgWAAgaQAAgZAIgWQAIgXAQgQQARgRAVgKQAYgKAcAAQAbAAAYAKQAWAKAQARQAQAQAIAXQAIAWAAAZQAAAagIAWQgIAXgQAQQgQASgWAJQgYAKgbAAQgcAAgYgKgAgqhbQgSAHgMAPQgMANgGATQgFARgBAUQABAUAFATQAGASAMANQAMAPASAHQATAJAYAAQAXAAAUgJQARgHAMgPQAMgNAGgSQAGgTAAgUQAAgUgGgRQgGgTgMgNQgMgPgRgHQgUgIgXAAQgYAAgTAIg");
	this.shape_3.setTransform(106.6,167.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABCWQgKgGgFgOQgFgMgCgWIgBgvIAAhuIgwAAIAAgXIAwAAIAAhHIAYAAIAABHIBFAAIgBAXIhEAAIAAB8QAAApAEAMQAEAIAGAFQAGAEALAAQAWAAAQgGIAAAXQgQAGgZAAQgTAAgKgGg");
	this.shape_4.setTransform(84.1,164.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABCWQgKgGgFgOQgFgMgCgWIgBgvIAAhuIgwAAIAAgXIAwAAIAAhHIAYAAIAABHIBFAAIgBAXIhEAAIAAB8QAAApAEAMQAEAIAGAFQAGAEALAAQAWAAAQgGIAAAXQgQAGgZAAQgTAAgKgGg");
	this.shape_5.setTransform(29.3,164.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWC1IAAjTIgwAAIABgXIAvAAIAAgzQAAgWAFgPQADgOAIgJQAGgJALgEQAKgEAOABQATgBARAFIAAAYQgRgEgTAAQgSAAgHAMQgHALAAAcIAAA0IA1AAIAAAXIg1AAIAADTg");
	this.shape_6.setTransform(13.8,161.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMCtIAAjrIAZAAIAADrgAgPiIQgEgGgBgIQAAgKAFgFQAFgHAKAAQAKAAAFAHQAGAFAAAKQAAAIgGAGQgFAGgKABQgJgBgGgGg");
	this.shape_7.setTransform(-0.7,162.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag6B5IAAjrIAYAAIAAAyIADAAQALgXAQgOQAJgIALgFQANgGANAAIASADIgBAaQgKgCgLAAQgPAAgOAIQgMAHgKAOQgJANgGARQgGATAAASIAAB2g");
	this.shape_8.setTransform(-14.6,167.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNBTIAAhNIhGAAIAAgYIBGAAIAAhAIAWAAIAABAIBLAAIAAAYIhLAAIAABNg");
	this.shape_9.setTransform(57.4,163.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(-26.6,130.5,231.7,62.9), null);


(lib.logo_oculus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlYDOQgVgBgSgHQgUgGgQgMQgRgMgLgSQgLgQgHgUQgGgSgBgVQgBgUAEgUQAEgTAKgRQATglAmgSQATgJATgDQAVgDAUACQApAEAgAaIgmAvQgTgMgWgDQgNgBgMABQgKACgJAEQgVAIgMAUQgFALgCALIgCAWQABALAEAMQADAKAGAKQAOASAWAHQALADALABQALAAALgCQAXgFAQgPIArArQgOAPgSAKQgRAJgUAFQgQADgQAAIgIAAgAJ5DIQglgLgegZIAigsQASAOAVAIQAPAFAOADQAOABAPgBIASgGQAHgEAFgFQAEgGACgGQAAgHgEgHQgEgGgIgEQgJgGgKgCQgMgEgMgCIglgKQgSgGgQgNQgOgLgFgSQgGgUAGgSQAEgQAKgNQAOgRAVgIQAQgHAQgCQAVgCAWADQAnAFAfAXIgfAqQgUgLgXgFQgOgDgPABQgIABgIACQgFADgEAEQgEACgDAEQgCADAAAEQgCAHAGAGQAGAHAIADIAPAFIASAEIAUAFIAVAGQASAHAOAMQAPANAHATQAFAQgCASQgDAUgNASQgKAMgOAJQgTALgXAEQgQACgRAAQgVgBgVgFgArDDDQgZgLgTgUQgUgTgJgZQgKgZAAgcQAAgbAKgZQALgYATgUQATgUAZgJQAZgLAcAAQAbAAAZALQAYAKAUATQAUAUAJAZQAKAZAAAbQAAAcgLAZQgIAZgUAUQgUAUgZAJQgZAKgbAAQgbAAgagKgAqdgGIgOAFIgNAFIgLAJIgJALIgHANIgEAPIgBAPIABAQIAEAPQACAHAEAGIAKALQAEAFAHAEIAMAHIAOAEIAQABIAQgBIAOgEIAMgHQAGgDAFgGIAJgKIAHgNIAEgPQABgIAAgJIgBgPIgEgOIgHgOIgJgLQgEgFgGgEIgNgFQgHgDgHgBIgQgDQgIAAgHACgAFoDMQgbgEgWgOQgWgOgOgaQgGgLgCgNQgDgNgBgNIgCgWIAAgfIAAgXIAAgdIAAgfIAAgWIA+AAIAAA+IAAAmIAAAWQAAASADASQADANAGAMQAJAOAOAGQAOAHAPgBQARAAAOgHQANgGAJgOQAIgLABgNIADgOIAAgWIAAgRIAAgcIAAgfIAAgcIAAgSIA+AAIAAEEIg3AAIgBgZQgKAJgLAHQgNAHgMADQgTAFgVAAIgMAAgAhiDMQgbgEgWgOQgWgOgMgaQgHgLgDgNIgEgaIgBgWIAAgfIAAgXIAAgdIAAgfIAAgWIA+AAIAAA+IAAAmIAAAWQAAASAEASQACANAGAMQAJAOAOAGQAOAHAQgBQAPAAAPgHQANgGAJgOQAIgLABgNIADgOIAAgWIAAgRIAAgcIAAgfIAAgcIAAgSIA9AAIAAEEIg2AAIgCgZQgIAJgMAHQgNAHgLADQgUAFgWAAIgMAAgACCDGIAAmTIA/AAIAAGTg");
	this.shape.setTransform(81.7,107.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(2.6,86.9,158.2,41.2), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCAEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(166.1,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgFQgCgEAAgGQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAFADQAEABAEAGIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAIgEAFIgEADIgGACIgEABQgFAAgEgCgAgHgFIgFAEIgEAFQgCAEAAAFQAAAEACAEIAEAGIAFAEIAHABQAEAAADgBIAGgEIAEgHQACgDAAgEQAAgFgCgDIgEgFQgDgDgDgCIgHgBIgHABg");
	this.shape_1.setTransform(161.6,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAYQgEgCgEgDQgDgDgBgFQgCgDAAgIQAAgDACgIQABgEADgDQADgEAFgBIAIgBIAIABIAIAFQACADACAEQACAFAAAGIAAACIgnAAIADAJQABADADACQACACADABIAHABIAIgBIAJgDIAAAGIgJACIgIABIgKgBgAARgCIgCgHIgDgFIgFgDIgHgBIgEAAIgFADIgEAGIgDAHIAhAAIAAAAg");
	this.shape_2.setTransform(155.9,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAkQgFgBgDgEQgDgDgCgFQgCgEAAgGQAAgGACgFQACgEADgDQADgDAFgCQAEgBAFAAIAFAAIAFADQAEABAEAGIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAIgEAFIgEADIgGACIgEABQgFAAgEgCgAgHgFIgFAEIgEAFQgCAEAAAFQAAAEACAEIAEAGIAFAEIAHABQAEAAADgBIAGgEIAEgHQACgDAAgEQAAgFgCgDIgEgFQgDgDgDgCIgHgBIgHABg");
	this.shape_3.setTransform(149.8,7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAXQgDgBgCgDIgDgGIgBgHIAAgdIAGAAIAAAcIABAFIACAFIAEADIAFABIAGgBIAGgEQACgDABgEQACgEAAgEIAAgWIAGAAIAAAvIgGAAIAAgKQgEAFgDACIgFADIgGAAQgEAAgEgBg");
	this.shape_4.setTransform(143.9,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAlIAAhJIAFAAIAABJg");
	this.shape_5.setTransform(139.9,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAYQgFgCgDgDQgEgDgCgFQgBgDgBgIQAAgDACgIQACgEAEgDQADgDAFgCIAKgBIAHABIAIACIgBAGIgHgDIgIAAIgHABQgDAAgDADIgEAGQgBAEAAAEQAAAFABAEIAEAGQADADADABIAHABIAIgBIAHgDIABAGIgIACIgHABIgKgBg");
	this.shape_6.setTransform(136.2,9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAZIAAgdIAAgGIgCgFIgFgCIgFgBIgFABIgHAEIgDAGQgCAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAGgDIAFgBIAHACQAEABACACQACADABAEIABAIIAAAdg");
	this.shape_7.setTransform(130.7,9.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgDgaIgBgEIABgDQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAAADIAAAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_8.setTransform(126.6,8.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAfQgBgCgBgCIgCgHIAAgKIAAgVIgKAAIAAgFIAKAAIAAgPIAFAAIAAAPIAOAAIAAAFIgOAAIAAAYQAAAIABACIACADIADAAIAIgBIAAAGIgJABIgGgBg");
	this.shape_9.setTransform(121,8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAXQgEgCgEgDIgEgIQgCgEAAgGQAAgEACgFIAEgIQAEgDAEgCQADgBAHgBQAEAAAGACQAFACADADIAGAIIABAJQAAAGgBAEIgGAIQgDADgFACIgKACQgHAAgDgCgAgIgRIgFAEIgEAHIgBAGIABAIIAEAGIAFAEQAFABADABQAFgBADgBIAHgEIACgGQACgEAAgEQAAgDgCgDIgCgHIgHgEQgDgBgFAAQgDAAgFABg");
	this.shape_10.setTransform(116.3,9.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAZIAAgdIAAgGIgDgFIgDgCIgGgBIgFABIgHAEIgDAGQgCAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAGgDIAFgBIAHACQAEABACACQACADABAEIABAIIAAAdg");
	this.shape_11.setTransform(110.3,9.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKAYIgIgDIADgFIAGADIAJABIAEgBIAEgBIADgDQAAAAABgBQAAgBAAAAQAAgBAAAAQABgBAAAAIgCgFIgEgCIgJgDQgGgBgEgCIgCgDQgCgDAAgDQAAgDACgCQABgDACgCIAGgCIAFgBIAJABIAHACIgCAGIgGgCIgIgBQgDAAgDABIgDADIgBADQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAIAEACIAJADIAFACIAFABIADADQABADAAAEQAAADgBAEIgEAEIgHACIgGABIgKgBg");
	this.shape_12.setTransform(102.5,9.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAYQgGgCgCgDQgEgDgCgFQgBgDAAgIQAAgDABgIQACgEAEgDQADgEAEgBIAIgBIAIABIAHAFQADADACAEQABAFABAGIAAACIgmAAIACAJQABADACACQACACAEABIAHABIAJgBIAIgDIAAAGIgIACIgJABIgJgBgAAQgCIgBgHIgDgFIgFgDIgHgBIgEAAIgGADIgDAGIgCAHIAfAAIAAAAg");
	this.shape_13.setTransform(97.6,9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAfAZIAAgdIAAgGIgDgEQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAIgFgBQgEAAgDABQgDABgCADQgDACAAADIgCAHIAAAaIgFAAIAAgdIAAgGIgCgEIgEgDIgFgBIgHABIgFAEQgCADgCADQgBAEAAADIAAAZIgGAAIAAgvIAGAAIAAAKIADgFIAEgDIAFgDIAGgBIAGABIAEADIACADIACAGIAEgFIADgEIAGgDIAGgBQAEAAADACQAEABABADIADAGIABAIIAAAdg");
	this.shape_14.setTransform(90.3,9.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJAYIgGgDIgEgEQgBgEAAgEQAAgEABgDQABgCADgBIAGgDIAHgBIARACIAAgDIgBgGIgDgDIgEgDIgGAAIgIABIgJACIAAgGIAJgCIAIgBIAIABQAEABADACQADACABAEQABADAAAFIAAAeIgGAAIAAgLIgEAGIgEADIgGACIgEABIgGgBgAgGABIgFABIgCADIgBAEIABAFIACADIAEACIAFABIAFgBIAGgEIAEgFQACgEAAgFIgQgBg");
	this.shape_15.setTransform(82.8,9.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCAlIgHgCIgHgDIgFgFIgFgFIgDgHIgCgHIgBgIIABgHIACgHIACgHIAEgFIAGgFIAHgDIAHgCIAIgBIANABIAMAEIAAAHQgHgDgGgBIgMgCIgHABIgGACIgGACIgEAEIgDAFIgDAFIgBAMIAAAHIACAGIADAFIADAFIAFAEIAFACIAGACIAGABIALgBIAKgEIAAgZIgUAAIgBgFIAcAAIAAAiIgHADIgIACIgNACIgHgBg");
	this.shape_16.setTransform(76.1,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(70.2,0,99.3,16), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCADIgCgDQAAAAAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADACQABAAAAABQAAAAAAAAQABABAAAAQAAAAAAAAIgCADIgDACQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape.setTransform(-43,140.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLAgIAJgUIgRgrIAGAAIANAlIAOglIAGAAIgSAqIgGAVg");
	this.shape_1.setTransform(-46.6,139.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAiIAAhDIAFAAIAABDg");
	this.shape_2.setTransform(-50.2,137.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AANAWIAAgaIAAgFIgCgEIgDgCIgFgBQgDAAgCABIgFADQgDADgBADQgCADAAAEIAAAVIgFAAIAAgqIAFAAIAAAJIAEgEIADgDIAFgCIAEgBQAFAAACABIAGAEQABACABADIABAHIAAAag");
	this.shape_3.setTransform(-54.1,138.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAVIgHgFQgDgDgBgEQgBgEAAgFQAAgEABgEQABgEADgDQAEgDADgCIAJgCIAJACQAFACACADQADADACAEQACAEAAAEQAAAFgCAEQgCAEgDADIgHAFIgJACIgJgCgAgHgPQgDABgCADIgDAFIgBAGIABAHIADAGQACACADABQAEACADAAQAEAAADgCQADgBADgCIADgGIABgHIgBgGIgDgFIgGgEQgDgCgEAAQgDAAgEACg");
	this.shape_4.setTransform(-59.7,138.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_5.setTransform(-67.7,138.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAcAWIAAgaIgBgEIgBgEIgEgDIgEgBQgEAAgCABQgDABgCADIgDAFIgBAFIAAAXIgFAAIAAgaIAAgEIgCgEIgDgDIgFgBQgEAAgCABIgFADIgDAGQgBADAAAEIAAAVIgFAAIAAgqIAFAAIAAAJIAAAAIADgEIADgDIAFgCIAFgBIAFABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIACAEIACAEIADgEIADgEIAFgCIAGgBQAEAAACABQADACACACQACACAAADIABAHIAAAag");
	this.shape_6.setTransform(-74.5,138.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_7.setTransform(-79.9,137.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAcIgCgEIgBgGIAAgJIAAgTIgJAAIAAgEIAJAAIAAgOIAEAAIAAAOIANAAIgBAEIgMAAIAAAWIAAAJIACACIAEABIAHgBIAAAFIgIABIgGgBg");
	this.shape_8.setTransform(-82.7,137.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIAgQgEgBgDgDQgDgDgCgEQgBgFAAgEQAAgGABgEQACgEADgCIAHgFQADgCAFAAIAEABIAFADQADABAEAFIABAAIAAgIIAAgYIAFAAIAABCIgFAAIAAgJIgBAAIgDAFIgEADIgFABIgEABQgFAAgDgCgAgGgEQgDABgCACIgEAFIgBAIIABAHIAEAFIAFAEIAGABIAHgBQADgBACgDIAEgGIABgGQAAgEgCgEQgBgDgCgCQgDgCgDgBQgDgCgDABQgDgBgDACg");
	this.shape_9.setTransform(-90,137.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGAWQgEgCgDgDQgDgCgCgFIgBgKIABgJIAFgHQADgDAEgBQADgCAEAAQAEAAAEACIAGAEIAEAHQABAEAAAFIAAADIgiAAQAAAEACADIADAEIAGADIAGABIAHgBIAIgCIAAAFIgHACIgIABIgJgBgAAPgBIgBgHIgDgFQgCgCgDgBIgFgBIgFABIgFADIgDAFQgCADAAAEIAdAAIAAAAg");
	this.shape_10.setTransform(-95.4,138.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAcIgCgEIgBgGIAAgJIAAgTIgJAAIAAgEIAJAAIAAgOIAEAAIAAAOIANAAIgBAEIgMAAIAAAWIAAAJIADACIADABIAHgBIAAAFIgIABIgGgBg");
	this.shape_11.setTransform(-99.7,137.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_12.setTransform(-102.6,137.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAcAWIAAgaIgBgEIgBgEIgEgDIgEgBQgEAAgCABQgDABgCADIgDAFIgBAFIAAAXIgFAAIAAgaIAAgEIgCgEIgDgDIgFgBQgEAAgCABIgFADIgDAGQgBADAAAEIAAAVIgFAAIAAgqIAFAAIAAAJIAAAAIADgEIADgDIAFgCIAFgBIAFABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIACAEIACAEIADgEIADgEIAFgCIAGgBQAEAAACABQADACACACQACACAAADIABAHIAAAag");
	this.shape_13.setTransform(-108,138.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgCAgIAAgqIAFAAIAAAqgAgCgYQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIABgDIACgBIADABIABADIgBADQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_14.setTransform(-113.4,137.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAhIAAhBIAGAAIAAA8IAhAAIAAAFg");
	this.shape_15.setTransform(-116.7,137.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(-121.5,130,82.2,14.8), null);


(lib.hardware_touch_RT_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hardware_touch_RT();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_touch_RT_1, new cjs.Rectangle(0,0,65,60), null);


(lib.hardware_touch_LT_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hardware_touch_LT();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_touch_LT_1, new cjs.Rectangle(0,0,46,47), null);


(lib.hardware_rift_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hardware_rift();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_rift_1, new cjs.Rectangle(0,0,138,84), null);


(lib.game_wilsons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_7_wilson();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_wilsons, new cjs.Rectangle(0,0,131,131), null);


(lib.game_unspoken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_1_unspoken();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_unspoken, new cjs.Rectangle(0,0,131,131), null);


(lib.game_superhot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_4_superhot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_superhot, new cjs.Rectangle(0,0,131,131), null);


(lib.game_startrek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_3_startrek();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_startrek, new cjs.Rectangle(0,0,131,131), null);


(lib.game_roborecall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_5_roborecall();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_roborecall, new cjs.Rectangle(0,0,131,131), null);


(lib.game_rickmorty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_6_rickmorty();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_rickmorty, new cjs.Rectangle(0,0,131,131), null);


(lib.game_loneecho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_2_loneecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_loneecho, new cjs.Rectangle(0,0,131,131), null);


(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.Bitmap33();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,160,600), null);


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.legal_limitedtime();
	this.instance.parent = this;
	this.instance.setTransform(61.9,343.5,1.274,1.274,0,0,0,-80.3,137.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMCDIAAgTQgUgBgUgDQgUgDgPgGIADgoQAKAFAVAEQAWADATABIAAg5QgmgIgOgIQgMgIgGgKQgGgMgBgQQABgOAGgNQAGgKALgIQALgHAOgFQAMgEAQgCIAAgUIAaAAIAAATQAQABARADQATAEANAEIgCAoQgLgEgSgEQgSgDgQgBIAAA1IAbAGQAOAFAKAHQALAGAHAKQAGANAAAPQABAPgHANQgFALgLAJQgKAHgOAFQgNAFgQACIAAAUgAAOBHQAOgCAIgFQAJgHAAgKQAAgKgJgHQgIgGgOgDgAgjhAQgJAHAAAJQAAAJAJAHQAHAEAQAEIAAguQgOABgJAFg");
	this.shape.setTransform(-0.3,303.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AheDWQAZgUAqguQAegkAXgoQgXAFgeAAQgcAAgagKQgYgJgTgTQgTgTgLgYQgKgZAAgeQAAgYANgpQAIgTAagfQAXgUAegLQAUgHAugEQAZAAAqAMQAeALAWAWQAVAVAMAcQALAbAAAfQAAAfgLAmQgMAmgVAnQgUAlgaAkQgbAjgcAbgAgah+QgMAGgKAJQgJAJgEAMQgFANAAANQAAAOAFAMQAFAMAIAKQAKAJANAFQANAEAOAAQAPAAANgEQAMgFAJgJQAKgKAEgMQAFgMAAgOQAAgNgFgNQgEgMgKgJQgJgJgMgGQgNgFgPAAQgPAAgNAFg");
	this.shape_1.setTransform(101.3,311.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AheDWQAZgUAqguQAegkAXgoQgXAFgeAAQgcAAgagKQgYgJgTgTQgTgTgLgYQgKgZAAgeQAAgYANgpQAIgTAagfQAXgUAegLQAUgHAugEQAZAAAqAMQAeALAWAWQAVAVAMAcQALAbAAAfQAAAfgLAmQgMAmgVAnQgUAlgaAkQgbAjgcAbgAgah+QgMAGgKAJQgJAJgEAMQgFANAAANQAAAOAFAMQAFAMAIAKQAKAJANAFQANAEAOAAQAPAAANgEQAMgFAJgJQAKgKAEgMQAFgMAAgOQAAgNgFgNQgEgMgKgJQgJgJgMgGQgNgFgPAAQgPAAgNAFg");
	this.shape_2.setTransform(64.8,311.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhcDYQgjgFgdgHIAGhcQBeATAqAAIAegDQANgDAJgGQAKgGAEgJQAFgJAAgMQAAgQgIgKQgGgKgNgFQgTgJgiAAIhXAAIgChQIBiAAQAZAAARgIQAJgFAFgIQAHgJAAgMQgBgMgGgJQgGgIgLgEQgRgIgfAAQguAAhMARIgEhaIBAgMQAngFAgAAQAfAAAbAFQAeAGAWALQAZAMAMAUQAHAKAEAMQADANAAAOQAAATgFARQgGARgKAOQgLAOgPALQgPALgSAIIAAABQATAFAQAJQAQAKAMANQANAPAGARQAIASAAAVQAAAQgEAOQgFANgHAMQgOAVgbAPQgZANgiAHQgeAHghAAQgfAAgngFg");
	this.shape_3.setTransform(29.4,311.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-13.1,274.8,136.5,78.4), null);


(lib.legal = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{ON:1,OFF:8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

	// shop now
	this.instance = new lib.msg_shopnow();
	this.instance.parent = this;
	this.instance.setTransform(128.5,-5.3,1,1,0,0,0,29.9,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape.setTransform(127.9,-4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#242424").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_1.setTransform(127.9,-4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494949").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_2.setTransform(127.9,-4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D6D6D").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_3.setTransform(127.9,-4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#929292").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_4.setTransform(127.9,-4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B6B6B6").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_5.setTransform(127.9,-4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DBDBDB").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_6.setTransform(127.9,-4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_7.setTransform(127.9,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.5,-20.7,120.7,32.1);


// stage content:
(lib.oculus_robo_160x600_ER = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgpAqQgRgSAAgYQAAgXARgRQASgSAXAAQAYAAASASQARARAAAXQAAAYgRASQgSARgYAAQgXAAgSgRg");
	var mask_graphics_2 = new cjs.Graphics().p("AhqBsQgtguAAg+QAAg+AtgsQAsgtA+AAQA/AAAtAtQAsAsAAA+QAAA+gsAuQgtAsg/AAQg+AAgsgsg");
	var mask_graphics_3 = new cjs.Graphics().p("AijCkQhEhEAAhgQAAhfBEhEQBEhEBfAAQBgAABEBEQBEBEAABfQAABghEBEQhEBEhgAAQhfAAhEhEg");
	var mask_graphics_4 = new cjs.Graphics().p("Aj+D/QhphqAAiVQAAiUBphpQBqhqCUAAQCVAABqBqQBpBpAACUQAACVhpBqQhqBpiVAAQiUAAhqhpg");
	var mask_graphics_5 = new cjs.Graphics().p("AlWFXQiPiOAAjJQAAjICPiOQCOiPDIAAQDJAACOCPQCPCOAADIQAADJiPCOQiOCPjJAAQjIAAiOiPg");
	var mask_graphics_6 = new cjs.Graphics().p("AnEHFQi8i8AAkJQAAkIC8i8QC8i8EIAAQEJAAC8C8QC8C8AAEIQAAEJi8C8Qi8C8kJAAQkIAAi8i8g");
	var mask_graphics_7 = new cjs.Graphics().p("ApcJdQj8j7ABliQgBlhD8j7QD6j8FiAAQFiAAD7D8QD8D7gBFhQABFij8D7Qj7D8liAAQliAAj6j8g");
	var mask_graphics_8 = new cjs.Graphics().p("ArnLoQk0k1AAmzQAAmyE0k1QE1k0GyAAQGzAAE1E0QE0E1AAGyQAAGzk0E1Qk1E0mzAAQmyAAk1k0g");
	var mask_graphics_9 = new cjs.Graphics().p("At/OAQl0l0ABoMQgBoLF0l0QFzl0IMAAQIMAAF0F0QFzF0AAILQAAIMlzF0Ql0F0oMAAQoMAAlzl0g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:91,y:270}).wait(2).to({graphics:mask_graphics_2,x:90.6,y:269.9}).wait(1).to({graphics:mask_graphics_3,x:91.1,y:270.9}).wait(1).to({graphics:mask_graphics_4,x:90.6,y:271.6}).wait(1).to({graphics:mask_graphics_5,x:90.5,y:272.9}).wait(1).to({graphics:mask_graphics_6,x:90.6,y:272.9}).wait(1).to({graphics:mask_graphics_7,x:89.6,y:275.4}).wait(1).to({graphics:mask_graphics_8,x:89,y:276.8}).wait(1).to({graphics:mask_graphics_9,x:89.7,y:279.3}).wait(1).to({graphics:null,x:0,y:0}).wait(204));

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(91.3,271,0.067,0.067,0,0,0,65.5,65.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:342.4,y:766.4},37,cjs.Ease.get(-1)).to({_off:true},1).wait(176));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.4,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-195.2,y:583.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(173));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90.7,269.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-188,y:-135.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(170));

	// roborecall
	this.instance_3 = new lib.game_roborecall();
	this.instance_3.parent = this;
	this.instance_3.setTransform(90.8,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:324.4,y:-51.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(167));

	// superhot
	this.instance_4 = new lib.game_superhot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(90.9,269.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:317.6,y:360},37,cjs.Ease.get(-1)).to({_off:true},1).wait(164));

	// rick morty
	this.instance_5 = new lib.game_rickmorty();
	this.instance_5.parent = this;
	this.instance_5.setTransform(90.8,269.6,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:346.4},37,cjs.Ease.get(-1)).to({_off:true},1).wait(161));

	// wilsons
	this.instance_6 = new lib.game_wilsons();
	this.instance_6.parent = this;
	this.instance_6.setTransform(90.6,271.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-136.8,y:-161.6},37,cjs.Ease.get(-1)).to({_off:true},1).wait(158));

	// MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_32 = new cjs.Graphics().p("AEpVsICNAAIAACNIiNAAg");
	var mask_1_graphics_33 = new cjs.Graphics().p("ADJUNIELAAIAAEMIkLAAg");
	var mask_1_graphics_34 = new cjs.Graphics().p("ABoSuIGKAAIAAGLImKAAg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AAHRPIIJAAIAAIKIoJAAg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AhZPwIKHAAIAAKJIqHAAg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Ai6OSIMHAAIAAMHIsHAAg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AkaMzIOFAAIAAOGIuFAAg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Al7LUIQEAAIAAQFIwEAAg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AncJ1ISDAAIAASEIyDAAg");
	var mask_1_graphics_41 = new cjs.Graphics().p("Ao9IWIUCAAIAAUDI0CAAg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AqdG3IWAAAIAAWBI2AAAg");
	var mask_1_graphics_43 = new cjs.Graphics().p("Ar+FYIYAAAIAAYAI4AAAg");
	var mask_1_graphics_44 = new cjs.Graphics().p("As/D5IZ/AAIAAZ/I5/AAg");
	var mask_1_graphics_45 = new cjs.Graphics().p("At+CaIb9AAIAAb+I79AAg");
	var mask_1_graphics_46 = new cjs.Graphics().p("Au+A7Id9AAIAAd9I99AAg");
	var mask_1_graphics_47 = new cjs.Graphics().p("Av9gjIf7AAIAAf7I/7AAg");
	var mask_1_graphics_48 = new cjs.Graphics().p("Aw9iCMAh7AAAMAAAAh6Mgh7AAAg");
	var mask_1_graphics_49 = new cjs.Graphics().p("Ax8jhMAj5AAAMAAAAj5Mgj5AAAg");
	var mask_1_graphics_50 = new cjs.Graphics().p("Ay8lAMAl5AAAMAAAAl4Mgl5AAAg");
	var mask_1_graphics_51 = new cjs.Graphics().p("Az7mfMAn3AAAMAAAAn3Mgn3AAAg");
	var mask_1_graphics_52 = new cjs.Graphics().p("A07n+MAp3AAAMAAAAp2Mgp3AAAg");
	var mask_1_graphics_53 = new cjs.Graphics().p("A16pdMAr1AAAMAAAAr1Mgr1AAAg");
	var mask_1_graphics_54 = new cjs.Graphics().p("A26q8MAt1AAAMAAAAt0Mgt1AAAg");
	var mask_1_graphics_55 = new cjs.Graphics().p("A35sGMAvzAAAMAAAAvyMgvzAAAg");
	var mask_1_graphics_56 = new cjs.Graphics().p("A4CsTMAwFAAAMAAAAwEMgwFAAAg");
	var mask_1_graphics_57 = new cjs.Graphics().p("A4KsgMAwVAAAMAAAAwVMgwVAAAg");
	var mask_1_graphics_58 = new cjs.Graphics().p("A4TstMAwnAAAMAAAAwmMgwnAAAg");
	var mask_1_graphics_59 = new cjs.Graphics().p("A4cs6MAw5AAAMAAAAw4Mgw5AAAg");
	var mask_1_graphics_60 = new cjs.Graphics().p("A4ktIMAxJAAAMAAAAxKMgxJAAAg");
	var mask_1_graphics_61 = new cjs.Graphics().p("A4ttVMAxbAAAMAAAAxbMgxbAAAg");
	var mask_1_graphics_62 = new cjs.Graphics().p("A42tiMAxtAAAMAAAAxtMgxtAAAg");
	var mask_1_graphics_63 = new cjs.Graphics().p("A4+tvMAx9AAAMAAAAx+Mgx9AAAg");
	var mask_1_graphics_64 = new cjs.Graphics().p("A5Ht8MAyPAAAMAAAAyPMgyPAAAg");
	var mask_1_graphics_65 = new cjs.Graphics().p("A5QuJMAyhAAAMAAAAyhMgyhAAAg");
	var mask_1_graphics_66 = new cjs.Graphics().p("A5YuWMAyxAAAMAAAAyyMgyxAAAg");
	var mask_1_graphics_67 = new cjs.Graphics().p("A5hujMAzDAAAMAAAAzDMgzDAAAg");
	var mask_1_graphics_68 = new cjs.Graphics().p("A5quwMAzVAAAMAAAAzVMgzVAAAg");
	var mask_1_graphics_69 = new cjs.Graphics().p("A5yu9MAzlAAAMAAAAzmMgzlAAAg");
	var mask_1_graphics_70 = new cjs.Graphics().p("A57vKMAz3AAAMAAAAz3Mgz3AAAg");
	var mask_1_graphics_71 = new cjs.Graphics().p("A6EvXMA0JAAAMAAAA0JMg0JAAAg");
	var mask_1_graphics_72 = new cjs.Graphics().p("A6MvkMA0ZAAAMAAAA0aMg0ZAAAg");
	var mask_1_graphics_73 = new cjs.Graphics().p("A6VvxMA0rAAAMAAAA0rMg0rAAAg");
	var mask_1_graphics_74 = new cjs.Graphics().p("A6ev+MA09AAAMAAAA09Mg09AAAg");
	var mask_1_graphics_75 = new cjs.Graphics().p("A6mwLMA1NAAAMAAAA1OMg1NAAAg");
	var mask_1_graphics_76 = new cjs.Graphics().p("A6vwYMA1fAAAMAAAA1fMg1fAAAg");
	var mask_1_graphics_77 = new cjs.Graphics().p("A64wlMA1xAAAMAAAA1xMg1xAAAg");
	var mask_1_graphics_78 = new cjs.Graphics().p("A7AwyMA2BAAAMAAAA2CMg2BAAAg");
	var mask_1_graphics_79 = new cjs.Graphics().p("A7Jw/MA2TAAAMAAAA2TMg2TAAAg");
	var mask_1_graphics_80 = new cjs.Graphics().p("A7SxMMA2lAAAMAAAA2lMg2lAAAg");
	var mask_1_graphics_81 = new cjs.Graphics().p("A7axZMA21AAAMAAAA22Mg21AAAg");
	var mask_1_graphics_82 = new cjs.Graphics().p("A7jxmMA3HAAAMAAAA3HMg3HAAAg");
	var mask_1_graphics_83 = new cjs.Graphics().p("A7sxzMA3ZAAAMAAAA3ZMg3ZAAAg");
	var mask_1_graphics_84 = new cjs.Graphics().p("A70yAMA3pAAAMAAAA3qMg3pAAAg");
	var mask_1_graphics_85 = new cjs.Graphics().p("A79yNMA37AAAMAAAA37Mg37AAAg");
	var mask_1_graphics_86 = new cjs.Graphics().p("A8GyaMA4NAAAMAAAA4MMg4NAAAg");
	var mask_1_graphics_87 = new cjs.Graphics().p("A8OynMA4dAAAMAAAA4eMg4dAAAg");
	var mask_1_graphics_88 = new cjs.Graphics().p("A8Xy0MA4vAAAMAAAA4vMg4vAAAg");
	var mask_1_graphics_89 = new cjs.Graphics().p("A8gzBMA5BAAAMAAAA5AMg5BAAAg");
	var mask_1_graphics_90 = new cjs.Graphics().p("A8ozOMA5RAAAMAAAA5SMg5RAAAg");
	var mask_1_graphics_91 = new cjs.Graphics().p("A8xzbMA5jAAAMAAAA5jMg5jAAAg");
	var mask_1_graphics_92 = new cjs.Graphics().p("A86zoMA51AAAMAAAA50Mg51AAAg");
	var mask_1_graphics_93 = new cjs.Graphics().p("A9Cz1MA6FAAAMAAAA6GMg6FAAAg");
	var mask_1_graphics_94 = new cjs.Graphics().p("A9L0CMA6XAAAMAAAA6XMg6XAAAg");
	var mask_1_graphics_95 = new cjs.Graphics().p("A9U0PMA6pAAAMAAAA6oMg6pAAAg");
	var mask_1_graphics_96 = new cjs.Graphics().p("A9c0cMA65AAAMAAAA66Mg65AAAg");
	var mask_1_graphics_97 = new cjs.Graphics().p("A9l0pMA7LAAAMAAAA7LMg7LAAAg");
	var mask_1_graphics_98 = new cjs.Graphics().p("A9u02MA7dAAAMAAAA7cMg7dAAAg");
	var mask_1_graphics_99 = new cjs.Graphics().p("A921DMA7tAAAMAAAA7uMg7tAAAg");
	var mask_1_graphics_100 = new cjs.Graphics().p("A9/1QMA7/AAAMAAAA7/Mg7/AAAg");
	var mask_1_graphics_101 = new cjs.Graphics().p("A+I1dMA8RAAAMAAAA8QMg8RAAAg");
	var mask_1_graphics_102 = new cjs.Graphics().p("A+Q1qMA8hAAAMAAAA8iMg8hAAAg");
	var mask_1_graphics_103 = new cjs.Graphics().p("A+Z13MA8zAAAMAAAA8zMg8zAAAg");
	var mask_1_graphics_104 = new cjs.Graphics().p("A+i2EMA9FAAAMAAAA9EMg9FAAAg");
	var mask_1_graphics_105 = new cjs.Graphics().p("A+q2RMA9VAAAMAAAA9WMg9VAAAg");
	var mask_1_graphics_106 = new cjs.Graphics().p("A+z2eMA9nAAAMAAAA9nMg9nAAAg");
	var mask_1_graphics_107 = new cjs.Graphics().p("A+82rMA95AAAMAAAA94Mg95AAAg");
	var mask_1_graphics_108 = new cjs.Graphics().p("A/E24MA+JAAAMAAAA+KMg+JAAAg");
	var mask_1_graphics_109 = new cjs.Graphics().p("A/N3FMA+bAAAMAAAA+bMg+bAAAg");
	var mask_1_graphics_110 = new cjs.Graphics().p("A/W3SMA+tAAAMAAAA+sMg+tAAAg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A/e3fMA+9AAAMAAAA++Mg+9AAAg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A/n3sMA/PAAAMAAAA/PMg/PAAAg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A/w35MA/hAAAMAAAA/gMg/hAAAg");
	var mask_1_graphics_114 = new cjs.Graphics().p("A/44GMA/xAAAMAAAA/xMg/xAAAg");
	var mask_1_graphics_115 = new cjs.Graphics().p("EggBgYTMBADAAAMAAABADMhADAAAg");
	var mask_1_graphics_116 = new cjs.Graphics().p("EggKgYgMBAVAAAMAAABAUMhAVAAAg");
	var mask_1_graphics_117 = new cjs.Graphics().p("EggSgYtMBAlAAAMAAABAlMhAlAAAg");
	var mask_1_graphics_118 = new cjs.Graphics().p("EggbgY6MBA3AAAMAAABA3MhA3AAAg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EggkgZHMBBJAAAMAAABBIMhBJAAAg");
	var mask_1_graphics_120 = new cjs.Graphics().p("EggsgZUMBBZAAAMAAABBZMhBZAAAg");
	var mask_1_graphics_121 = new cjs.Graphics().p("Egg1gZhMBBrAAAMAAABBrMhBrAAAg");
	var mask_1_graphics_122 = new cjs.Graphics().p("Egg+gZuMBB9AAAMAAABB8MhB9AAAg");
	var mask_1_graphics_123 = new cjs.Graphics().p("EghGgZ7MBCNAAAMAAABCNMhCNAAAg");
	var mask_1_graphics_124 = new cjs.Graphics().p("EghPgaIMBCfAAAMAAABCfMhCfAAAg");
	var mask_1_graphics_125 = new cjs.Graphics().p("EghYgaVMBCxAAAMAAABCwMhCxAAAg");
	var mask_1_graphics_126 = new cjs.Graphics().p("EghggaiMBDBAAAMAAABDBMhDBAAAg");
	var mask_1_graphics_127 = new cjs.Graphics().p("EghpgavMBDTAAAMAAABDTMhDTAAAg");
	var mask_1_graphics_128 = new cjs.Graphics().p("Eghyga8MBDlAAAMAAABDkMhDlAAAg");
	var mask_1_graphics_129 = new cjs.Graphics().p("Egh6gbJMBD1AAAMAAABD1MhD1AAAg");
	var mask_1_graphics_130 = new cjs.Graphics().p("EgiDgbWMBEHAAAMAAABEHMhEHAAAg");
	var mask_1_graphics_131 = new cjs.Graphics().p("EgiMgbjMBEZAAAMAAABEYMhEZAAAg");
	var mask_1_graphics_132 = new cjs.Graphics().p("EgiUgbwMBEpAAAMAAABEqMhEpAAAg");
	var mask_1_graphics_133 = new cjs.Graphics().p("EgiWgbyMBEtAAAMAAABEtMhEtAAAg");
	var mask_1_graphics_134 = new cjs.Graphics().p("Egiagb4MBE1AAAMAAABE1MhE1AAAg");
	var mask_1_graphics_135 = new cjs.Graphics().p("EgihgcDMBFDAAAMAAABFDMhFDAAAg");
	var mask_1_graphics_136 = new cjs.Graphics().p("EgirgcRMBFXAAAMAAABFWMhFXAAAg");
	var mask_1_graphics_137 = new cjs.Graphics().p("Egi3gckMBFvAAAMAAABFvMhFvAAAg");
	var mask_1_graphics_138 = new cjs.Graphics().p("EgjGgc7MBGNAAAMAAABGOMhGNAAAg");
	var mask_1_graphics_139 = new cjs.Graphics().p("EgjZgdXMBGzAAAMAAABGzMhGzAAAg");
	var mask_1_graphics_140 = new cjs.Graphics().p("Egjtgd2MBHbAAAMAAABHcMhHbAAAg");
	var mask_1_graphics_141 = new cjs.Graphics().p("EgkFgeaMBILAAAMAAABIMMhILAAAg");
	var mask_1_graphics_142 = new cjs.Graphics().p("EgkggfCMBJBAAAMAAABJBMhJBAAAg");
	var mask_1_graphics_143 = new cjs.Graphics().p("Egk9gfuMBJ7AAAMAAABJ7MhJ7AAAg");
	var mask_1_graphics_144 = new cjs.Graphics().p("EgldggeMBK7AAAMAAABK7MhK7AAAg");
	var mask_1_graphics_145 = new cjs.Graphics().p("EgmAghSMBMBAAAMAAABMAMhMBAAAg");
	var mask_1_graphics_146 = new cjs.Graphics().p("EgmlgiLMBNLAAAMAAABNMMhNLAAAg");
	var mask_1_graphics_147 = new cjs.Graphics().p("EgnOgjIMBOdAAAMAAABOdMhOdAAAg");
	var mask_1_graphics_148 = new cjs.Graphics().p("Egn5gkJMBPzAAAMAAABPzMhPzAAAg");
	var mask_1_graphics_149 = new cjs.Graphics().p("EgonglOMBRPAAAMAAABRPMhRPAAAg");
	var mask_1_graphics_150 = new cjs.Graphics().p("EgpYgmXMBSxAAAMAAABSwMhSxAAAg");
	var mask_1_graphics_151 = new cjs.Graphics().p("EgqLgnlMBUXAAAMAAABUXMhUXAAAg");
	var mask_1_graphics_152 = new cjs.Graphics().p("EgrCgo3MBWFAAAMAAABWEMhWFAAAg");
	var mask_1_graphics_153 = new cjs.Graphics().p("Egr7gqNMBX3AAAMAAABX3MhX3AAAg");
	var mask_1_graphics_154 = new cjs.Graphics().p("Egs3grnMBZvAAAMAAABZuMhZvAAAg");
	var mask_1_graphics_155 = new cjs.Graphics().p("Egt1gtFMBbrAAAMAAABbrMhbrAAAg");
	var mask_1_graphics_156 = new cjs.Graphics().p("Egu3guoMBdvAAAMAAABdvMhdvAAAg");
	var mask_1_graphics_157 = new cjs.Graphics().p("Egv7gv7MBf3AAAMAAABf3Mhf3AAAg");
	var mask_1_graphics_158 = new cjs.Graphics().p("EgymgymMBlNAAAMAAABlNMhlNAAAg");
	var mask_1_graphics_159 = new cjs.Graphics().p("Eg1Sg1SMBqlAAAMAAABqlMhqlAAAg");
	var mask_1_graphics_160 = new cjs.Graphics().p("Eg39g39MBv7AAAMAAABv7Mhv7AAAg");
	var mask_1_graphics_161 = new cjs.Graphics().p("Eg6pg6pMB1TAAAMAAAB1TMh1TAAAg");
	var mask_1_graphics_162 = new cjs.Graphics().p("Eg9Ug9UMB6pAAAMAAAB6pMh6pAAAg");
	var mask_1_graphics_163 = new cjs.Graphics().p("EhAAhAAMCABAAAMAAACABMiABAAAg");
	var mask_1_graphics_164 = new cjs.Graphics().p("EhCrhCrMCFXAAAMAAACFXMiFXAAAg");
	var mask_1_graphics_165 = new cjs.Graphics().p("EhFXhFXMCKvAAAMAAACKvMiKvAAAg");
	var mask_1_graphics_166 = new cjs.Graphics().p("EhIChICMCQFAAAMAAACQFMiQFAAAg");
	var mask_1_graphics_167 = new cjs.Graphics().p("EhKuhKuMCVdAAAMAAACVdMiVdAAAg");
	var mask_1_graphics_168 = new cjs.Graphics().p("EhNZhNZMCazAAAMAAACazMiazAAAg");
	var mask_1_graphics_169 = new cjs.Graphics().p("EhQFhQFMCgLAAAMAAACgLMigLAAAg");
	var mask_1_graphics_170 = new cjs.Graphics().p("EhSwhSwMClhAAAMAAAClhMilhAAAg");
	var mask_1_graphics_171 = new cjs.Graphics().p("EhVbhVbMCq3AAAMAAACq3Miq3AAAg");
	var mask_1_graphics_172 = new cjs.Graphics().p("EhYHhYHMCwPAAAMAAACwPMiwPAAAg");
	var mask_1_graphics_173 = new cjs.Graphics().p("EhayhayMC1lAAAMAAAC1lMi1lAAAg");
	var mask_1_graphics_174 = new cjs.Graphics().p("EhdehdeMC69AAAMAAAC69Mi69AAAg");
	var mask_1_graphics_175 = new cjs.Graphics().p("EhgJhgJMDATAAAMAAADATMjATAAAg");
	var mask_1_graphics_176 = new cjs.Graphics().p("Ehi1hi1MDFrAAAMAAADFrMjFrAAAg");
	var mask_1_graphics_177 = new cjs.Graphics().p("As+X7IAAi2QAAgSgEgPQgDgPgIgLQgJgLgNgGQgNgFgSAAQgVAAgSAHQgTAIgPAOQgNAPgHAVQgKAWAAAcIAACUIg0AAIAAkuIAzAAIAAA5IABAAIAVgaQALgNAPgHQAPgJAQgGQARgGAVAAQAbAAAXAKQAUAJANARQANAPAGAYQAHAUAAAeIAAC7g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(32).to({graphics:mask_1_graphics_32,x:43.8,y:152.9}).wait(1).to({graphics:mask_1_graphics_33,x:46.8,y:156.1}).wait(1).to({graphics:mask_1_graphics_34,x:49.8,y:159.3}).wait(1).to({graphics:mask_1_graphics_35,x:52.8,y:162.5}).wait(1).to({graphics:mask_1_graphics_36,x:55.8,y:165.7}).wait(1).to({graphics:mask_1_graphics_37,x:58.9,y:168.9}).wait(1).to({graphics:mask_1_graphics_38,x:61.9,y:172.1}).wait(1).to({graphics:mask_1_graphics_39,x:64.9,y:175.3}).wait(1).to({graphics:mask_1_graphics_40,x:67.9,y:178.5}).wait(1).to({graphics:mask_1_graphics_41,x:70.9,y:181.7}).wait(1).to({graphics:mask_1_graphics_42,x:73.9,y:184.8}).wait(1).to({graphics:mask_1_graphics_43,x:77,y:188}).wait(1).to({graphics:mask_1_graphics_44,x:76.8,y:191.2}).wait(1).to({graphics:mask_1_graphics_45,x:76.4,y:194.4}).wait(1).to({graphics:mask_1_graphics_46,x:76.1,y:197.6}).wait(1).to({graphics:mask_1_graphics_47,x:75.8,y:200.8}).wait(1).to({graphics:mask_1_graphics_48,x:75.5,y:204}).wait(1).to({graphics:mask_1_graphics_49,x:75.2,y:207.2}).wait(1).to({graphics:mask_1_graphics_50,x:74.9,y:210.4}).wait(1).to({graphics:mask_1_graphics_51,x:74.6,y:213.6}).wait(1).to({graphics:mask_1_graphics_52,x:74.2,y:216.8}).wait(1).to({graphics:mask_1_graphics_53,x:73.9,y:220}).wait(1).to({graphics:mask_1_graphics_54,x:73.6,y:223.2}).wait(1).to({graphics:mask_1_graphics_55,x:80.6,y:228.4}).wait(1).to({graphics:mask_1_graphics_56,x:80.5,y:228.9}).wait(1).to({graphics:mask_1_graphics_57,x:80.5,y:229.3}).wait(1).to({graphics:mask_1_graphics_58,x:80.5,y:229.7}).wait(1).to({graphics:mask_1_graphics_59,x:80.5,y:230.2}).wait(1).to({graphics:mask_1_graphics_60,x:80.5,y:230.6}).wait(1).to({graphics:mask_1_graphics_61,x:80.5,y:231}).wait(1).to({graphics:mask_1_graphics_62,x:80.5,y:231.5}).wait(1).to({graphics:mask_1_graphics_63,x:80.5,y:231.9}).wait(1).to({graphics:mask_1_graphics_64,x:80.5,y:232.3}).wait(1).to({graphics:mask_1_graphics_65,x:80.5,y:232.8}).wait(1).to({graphics:mask_1_graphics_66,x:80.5,y:233.2}).wait(1).to({graphics:mask_1_graphics_67,x:80.5,y:233.6}).wait(1).to({graphics:mask_1_graphics_68,x:80.5,y:234.1}).wait(1).to({graphics:mask_1_graphics_69,x:80.5,y:234.5}).wait(1).to({graphics:mask_1_graphics_70,x:80.5,y:234.9}).wait(1).to({graphics:mask_1_graphics_71,x:80.5,y:235.4}).wait(1).to({graphics:mask_1_graphics_72,x:80.5,y:235.8}).wait(1).to({graphics:mask_1_graphics_73,x:80.5,y:236.2}).wait(1).to({graphics:mask_1_graphics_74,x:80.5,y:236.7}).wait(1).to({graphics:mask_1_graphics_75,x:80.5,y:237.1}).wait(1).to({graphics:mask_1_graphics_76,x:80.5,y:237.5}).wait(1).to({graphics:mask_1_graphics_77,x:80.5,y:238}).wait(1).to({graphics:mask_1_graphics_78,x:80.5,y:238.4}).wait(1).to({graphics:mask_1_graphics_79,x:80.5,y:238.8}).wait(1).to({graphics:mask_1_graphics_80,x:80.5,y:239.3}).wait(1).to({graphics:mask_1_graphics_81,x:80.5,y:239.7}).wait(1).to({graphics:mask_1_graphics_82,x:80.5,y:240.1}).wait(1).to({graphics:mask_1_graphics_83,x:80.5,y:240.6}).wait(1).to({graphics:mask_1_graphics_84,x:80.5,y:241}).wait(1).to({graphics:mask_1_graphics_85,x:80.5,y:241.4}).wait(1).to({graphics:mask_1_graphics_86,x:80.5,y:241.8}).wait(1).to({graphics:mask_1_graphics_87,x:80.5,y:242.3}).wait(1).to({graphics:mask_1_graphics_88,x:80.5,y:242.7}).wait(1).to({graphics:mask_1_graphics_89,x:80.5,y:243.1}).wait(1).to({graphics:mask_1_graphics_90,x:80.5,y:243.6}).wait(1).to({graphics:mask_1_graphics_91,x:80.5,y:244}).wait(1).to({graphics:mask_1_graphics_92,x:80.5,y:244.4}).wait(1).to({graphics:mask_1_graphics_93,x:80.5,y:244.9}).wait(1).to({graphics:mask_1_graphics_94,x:80.5,y:245.3}).wait(1).to({graphics:mask_1_graphics_95,x:80.5,y:245.7}).wait(1).to({graphics:mask_1_graphics_96,x:80.5,y:246.2}).wait(1).to({graphics:mask_1_graphics_97,x:80.5,y:246.6}).wait(1).to({graphics:mask_1_graphics_98,x:80.5,y:247}).wait(1).to({graphics:mask_1_graphics_99,x:80.5,y:247.5}).wait(1).to({graphics:mask_1_graphics_100,x:80.5,y:247.9}).wait(1).to({graphics:mask_1_graphics_101,x:80.5,y:248.3}).wait(1).to({graphics:mask_1_graphics_102,x:80.5,y:248.8}).wait(1).to({graphics:mask_1_graphics_103,x:80.5,y:249.2}).wait(1).to({graphics:mask_1_graphics_104,x:80.5,y:249.6}).wait(1).to({graphics:mask_1_graphics_105,x:80.5,y:250.1}).wait(1).to({graphics:mask_1_graphics_106,x:80.5,y:250.5}).wait(1).to({graphics:mask_1_graphics_107,x:80.5,y:250.9}).wait(1).to({graphics:mask_1_graphics_108,x:80.5,y:251.4}).wait(1).to({graphics:mask_1_graphics_109,x:80.5,y:251.8}).wait(1).to({graphics:mask_1_graphics_110,x:80.5,y:252.2}).wait(1).to({graphics:mask_1_graphics_111,x:80.5,y:252.7}).wait(1).to({graphics:mask_1_graphics_112,x:80.5,y:253.1}).wait(1).to({graphics:mask_1_graphics_113,x:80.5,y:253.5}).wait(1).to({graphics:mask_1_graphics_114,x:80.5,y:253.9}).wait(1).to({graphics:mask_1_graphics_115,x:80.5,y:254.4}).wait(1).to({graphics:mask_1_graphics_116,x:80.5,y:254.8}).wait(1).to({graphics:mask_1_graphics_117,x:80.4,y:255.2}).wait(1).to({graphics:mask_1_graphics_118,x:80.4,y:255.7}).wait(1).to({graphics:mask_1_graphics_119,x:80.4,y:256.1}).wait(1).to({graphics:mask_1_graphics_120,x:80.4,y:256.5}).wait(1).to({graphics:mask_1_graphics_121,x:80.4,y:257}).wait(1).to({graphics:mask_1_graphics_122,x:80.4,y:257.4}).wait(1).to({graphics:mask_1_graphics_123,x:80.4,y:257.8}).wait(1).to({graphics:mask_1_graphics_124,x:80.4,y:258.3}).wait(1).to({graphics:mask_1_graphics_125,x:80.4,y:258.7}).wait(1).to({graphics:mask_1_graphics_126,x:80.4,y:259.1}).wait(1).to({graphics:mask_1_graphics_127,x:80.4,y:259.6}).wait(1).to({graphics:mask_1_graphics_128,x:80.4,y:260}).wait(1).to({graphics:mask_1_graphics_129,x:80.4,y:260.4}).wait(1).to({graphics:mask_1_graphics_130,x:80.4,y:260.9}).wait(1).to({graphics:mask_1_graphics_131,x:80.4,y:261.3}).wait(1).to({graphics:mask_1_graphics_132,x:80.6,y:261.8}).wait(1).to({graphics:mask_1_graphics_133,x:80.5,y:261.9}).wait(1).to({graphics:mask_1_graphics_134,x:80.5,y:262.1}).wait(1).to({graphics:mask_1_graphics_135,x:80.5,y:262.4}).wait(1).to({graphics:mask_1_graphics_136,x:80.5,y:262.9}).wait(1).to({graphics:mask_1_graphics_137,x:80.5,y:263.5}).wait(1).to({graphics:mask_1_graphics_138,x:80.5,y:264.3}).wait(1).to({graphics:mask_1_graphics_139,x:80.5,y:265.2}).wait(1).to({graphics:mask_1_graphics_140,x:80.5,y:266.2}).wait(1).to({graphics:mask_1_graphics_141,x:80.5,y:267.4}).wait(1).to({graphics:mask_1_graphics_142,x:80.5,y:268.7}).wait(1).to({graphics:mask_1_graphics_143,x:80.5,y:270.1}).wait(1).to({graphics:mask_1_graphics_144,x:80.5,y:271.7}).wait(1).to({graphics:mask_1_graphics_145,x:80.5,y:273.4}).wait(1).to({graphics:mask_1_graphics_146,x:80.5,y:275.3}).wait(1).to({graphics:mask_1_graphics_147,x:80.5,y:277.3}).wait(1).to({graphics:mask_1_graphics_148,x:80.5,y:279.4}).wait(1).to({graphics:mask_1_graphics_149,x:80.5,y:281.7}).wait(1).to({graphics:mask_1_graphics_150,x:80.5,y:284.1}).wait(1).to({graphics:mask_1_graphics_151,x:80.5,y:286.6}).wait(1).to({graphics:mask_1_graphics_152,x:80.5,y:289.3}).wait(1).to({graphics:mask_1_graphics_153,x:80.5,y:292.2}).wait(1).to({graphics:mask_1_graphics_154,x:80.5,y:295.1}).wait(1).to({graphics:mask_1_graphics_155,x:80.5,y:298.2}).wait(1).to({graphics:mask_1_graphics_156,x:80.5,y:301.5}).wait(1).to({graphics:mask_1_graphics_157,x:80.6,y:302.9}).wait(1).to({graphics:mask_1_graphics_158,x:80.5,y:302.7}).wait(1).to({graphics:mask_1_graphics_159,x:80.5,y:302.6}).wait(1).to({graphics:mask_1_graphics_160,x:80.5,y:302.5}).wait(1).to({graphics:mask_1_graphics_161,x:80.5,y:302.4}).wait(1).to({graphics:mask_1_graphics_162,x:80.5,y:302.3}).wait(1).to({graphics:mask_1_graphics_163,x:80.5,y:302.2}).wait(1).to({graphics:mask_1_graphics_164,x:80.5,y:302.1}).wait(1).to({graphics:mask_1_graphics_165,x:80.5,y:302}).wait(1).to({graphics:mask_1_graphics_166,x:80.5,y:301.9}).wait(1).to({graphics:mask_1_graphics_167,x:80.5,y:301.8}).wait(1).to({graphics:mask_1_graphics_168,x:80.4,y:301.7}).wait(1).to({graphics:mask_1_graphics_169,x:80.4,y:301.6}).wait(1).to({graphics:mask_1_graphics_170,x:80.4,y:301.5}).wait(1).to({graphics:mask_1_graphics_171,x:80.4,y:301.3}).wait(1).to({graphics:mask_1_graphics_172,x:80.4,y:301.2}).wait(1).to({graphics:mask_1_graphics_173,x:80.4,y:301.1}).wait(1).to({graphics:mask_1_graphics_174,x:80.4,y:301}).wait(1).to({graphics:mask_1_graphics_175,x:80.4,y:300.9}).wait(1).to({graphics:mask_1_graphics_176,x:80.4,y:300.8}).wait(1).to({graphics:mask_1_graphics_177,x:-105.4,y:153.1}).wait(1).to({graphics:null,x:0,y:0}).wait(36));

	// Layer 4
	this.instance_7 = new lib.robo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(80.9,299.4,0.04,0.04,0,0,0,86,15);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(32).to({_off:false},0).to({regX:76.5,regY:9,scaleX:0.88,scaleY:0.88,y:314.9},23).wait(77).to({regX:76.6,scaleX:1.34,scaleY:1.34,x:81.5,y:336.8},25,cjs.Ease.get(-1)).to({regX:76.4,regY:9.1,scaleX:3.38,scaleY:3.38,x:82.2,y:406.1,alpha:0},20).to({_off:true},1).wait(36));

	// Layer 27
	this.instance_8 = new lib.robo();
	this.instance_8.parent = this;
	this.instance_8.setTransform(80.9,299.4,0.04,0.04,0,0,0,86,15);
	this.instance_8._off = true;
	this.instance_8.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_8.cache(-2,-2,156,21);

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(32).to({_off:false},0).to({regX:76.6,regY:8.8,scaleX:0.88,scaleY:0.88,x:81.9,y:315.7},23).wait(77).to({regX:76.7,regY:9,scaleX:1.34,scaleY:1.34,x:83,y:338.1},25,cjs.Ease.get(-1)).to({regX:76.5,regY:9.1,scaleX:3.38,scaleY:3.38,x:84.5,y:407.4,alpha:-1},20).to({_off:true},1).wait(36));

	// Layer 3
	this.instance_9 = new lib.recall();
	this.instance_9.parent = this;
	this.instance_9.setTransform(80.8,301.6,0.04,0.04,0,0,0,97.2,38.6);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(32).to({_off:false},0).to({regX:89.9,regY:38.8,scaleX:0.88,scaleY:0.88,x:80,y:363.2},23).wait(77).to({scaleX:1.34,scaleY:1.34,x:80.2,y:410.5},25,cjs.Ease.get(-1)).to({regX:89.7,regY:39,scaleX:3.56,scaleY:3.56,x:79.9,y:598.5,alpha:0},20).to({_off:true},1).wait(36));

	// Layer 28
	this.instance_10 = new lib.recall();
	this.instance_10.parent = this;
	this.instance_10.setTransform(80.8,301.6,0.04,0.04,0,0,0,97.2,38.6);
	this.instance_10._off = true;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_10.cache(-2,-2,183,81);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(32).to({_off:false},0).to({regX:90.1,regY:38.8,scaleX:0.88,scaleY:0.88,x:80.9,y:364},23).wait(77).to({regX:89.9,scaleX:1.34,scaleY:1.34,x:81.4,y:411.8},25,cjs.Ease.get(-1)).to({regX:89.7,regY:39,scaleX:3.56,scaleY:3.56,x:82,y:599.9,alpha:-1},20).to({_off:true},1).wait(36));

	// Layer 7
	this.instance_11 = new lib.Tween12("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(80.9,305.1,0.88,0.88,0,0,0,0.4,0.1);
	this.instance_11._off = true;

	this.instance_12 = new lib.Tween13("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(60.6,287,4.377,4.377,0,0,0,0.1,0.1);
	this.instance_12.alpha = 0;

	var maskedShapeInstanceList = [this.instance_11,this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},55).to({state:[{t:this.instance_11}]},77).to({state:[{t:this.instance_11}]},25).to({state:[{t:this.instance_12}]},20).to({state:[]},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(55).to({_off:false},0).to({regX:0.3,scaleX:1.25,scaleY:1.25,y:305.3},77).to({regX:0.2,regY:0.2,scaleX:1.74,scaleY:1.74,x:80.8,y:301.7},25,cjs.Ease.get(-1)).to({_off:true,regX:0.1,regY:0.1,scaleX:4.38,scaleY:4.38,x:60.6,y:287,alpha:0},20).wait(37));

	// SMOKE_MASK (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_55 = new cjs.Graphics().p("A0kf8MAAAgiUMApJAAAMAAAAiUg");
	var mask_2_graphics_56 = new cjs.Graphics().p("A0nRNMAAAgiZMApPAAAMAAAAiZg");
	var mask_2_graphics_57 = new cjs.Graphics().p("A0pRPMAAAgidMApTAAAMAAAAidg");
	var mask_2_graphics_58 = new cjs.Graphics().p("A0sRSMAAAgijMApZAAAMAAAAijg");
	var mask_2_graphics_59 = new cjs.Graphics().p("A0vRUMAAAginMApfAAAMAAAAing");
	var mask_2_graphics_60 = new cjs.Graphics().p("A0yRWMAAAgirMAplAAAMAAAAirg");
	var mask_2_graphics_61 = new cjs.Graphics().p("A01RZMAAAgixMAprAAAMAAAAixg");
	var mask_2_graphics_62 = new cjs.Graphics().p("A03RbMAAAgi1MApvAAAMAAAAi1g");
	var mask_2_graphics_63 = new cjs.Graphics().p("A06RdMAAAgi5MAp1AAAMAAAAi5g");
	var mask_2_graphics_64 = new cjs.Graphics().p("A09RgMAAAgi/MAp7AAAMAAAAi/g");
	var mask_2_graphics_65 = new cjs.Graphics().p("A1ARiMAAAgjDMAqBAAAMAAAAjDg");
	var mask_2_graphics_66 = new cjs.Graphics().p("A1DRkMAAAgjHMAqHAAAMAAAAjHg");
	var mask_2_graphics_67 = new cjs.Graphics().p("A1FRnMAAAgjNMAqLAAAMAAAAjNg");
	var mask_2_graphics_68 = new cjs.Graphics().p("A1IRpMAAAgjRMAqRAAAMAAAAjRg");
	var mask_2_graphics_69 = new cjs.Graphics().p("A1LRrMAAAgjVMAqXAAAMAAAAjVg");
	var mask_2_graphics_70 = new cjs.Graphics().p("A1ORuMAAAgjaMAqcAAAMAAAAjag");
	var mask_2_graphics_71 = new cjs.Graphics().p("A1QRwMAAAgjfMAqhAAAMAAAAjfg");
	var mask_2_graphics_72 = new cjs.Graphics().p("A1TRyMAAAgjjMAqnAAAMAAAAjjg");
	var mask_2_graphics_73 = new cjs.Graphics().p("A1WR0MAAAgjnMAqtAAAMAAAAjng");
	var mask_2_graphics_74 = new cjs.Graphics().p("A1ZR3MAAAgjtMAqzAAAMAAAAjtg");
	var mask_2_graphics_75 = new cjs.Graphics().p("A1bR5MAAAgjxMAq4AAAMAAAAjxg");
	var mask_2_graphics_76 = new cjs.Graphics().p("A1eR7MAAAgj2MAq9AAAMAAAAj2g");
	var mask_2_graphics_77 = new cjs.Graphics().p("A1hR+MAAAgj7MArDAAAMAAAAj7g");
	var mask_2_graphics_78 = new cjs.Graphics().p("A1kSAMAAAgj/MArJAAAMAAAAj/g");
	var mask_2_graphics_79 = new cjs.Graphics().p("A1nSDMAAAgkFMArPAAAMAAAAkFg");
	var mask_2_graphics_80 = new cjs.Graphics().p("A1pSFMAAAgkJMArTAAAMAAAAkJg");
	var mask_2_graphics_81 = new cjs.Graphics().p("A1sSHMAAAgkNMArZAAAMAAAAkNg");
	var mask_2_graphics_82 = new cjs.Graphics().p("A1vSJMAAAgkRMArfAAAMAAAAkRg");
	var mask_2_graphics_83 = new cjs.Graphics().p("A1ySMMAAAgkXMArlAAAMAAAAkXg");
	var mask_2_graphics_84 = new cjs.Graphics().p("A11SOMAAAgkbMArrAAAMAAAAkbg");
	var mask_2_graphics_85 = new cjs.Graphics().p("A13SQMAAAgkfMArvAAAMAAAAkfg");
	var mask_2_graphics_86 = new cjs.Graphics().p("A16STMAAAgklMAr1AAAMAAAAklg");
	var mask_2_graphics_87 = new cjs.Graphics().p("A19SVMAAAgkpMAr7AAAMAAAAkpg");
	var mask_2_graphics_88 = new cjs.Graphics().p("A2ASXMAAAgktMAsAAAAMAAAAktg");
	var mask_2_graphics_89 = new cjs.Graphics().p("A2CSaMAAAgkzMAsFAAAMAAAAkzg");
	var mask_2_graphics_90 = new cjs.Graphics().p("A2FScMAAAgk3MAsLAAAMAAAAk3g");
	var mask_2_graphics_91 = new cjs.Graphics().p("A2ISeMAAAgk7MAsRAAAMAAAAk7g");
	var mask_2_graphics_92 = new cjs.Graphics().p("A2LShMAAAglBMAsXAAAMAAAAlBg");
	var mask_2_graphics_93 = new cjs.Graphics().p("A2NSjMAAAglFMAscAAAMAAAAlFg");
	var mask_2_graphics_94 = new cjs.Graphics().p("A2QSlMAAAglJMAshAAAMAAAAlJg");
	var mask_2_graphics_95 = new cjs.Graphics().p("A2TSnMAAAglNMAsnAAAMAAAAlNg");
	var mask_2_graphics_96 = new cjs.Graphics().p("A2WSqMAAAglTMAstAAAMAAAAlTg");
	var mask_2_graphics_97 = new cjs.Graphics().p("A2ZSsMAAAglXMAszAAAMAAAAlXg");
	var mask_2_graphics_98 = new cjs.Graphics().p("A2bSuMAAAglbMAs3AAAMAAAAlbg");
	var mask_2_graphics_99 = new cjs.Graphics().p("A2eSxMAAAglhMAs9AAAMAAAAlhg");
	var mask_2_graphics_100 = new cjs.Graphics().p("A2hSzMAAAgllMAtDAAAMAAAAllg");
	var mask_2_graphics_101 = new cjs.Graphics().p("A2kS1MAAAglpMAtJAAAMAAAAlpg");
	var mask_2_graphics_102 = new cjs.Graphics().p("A2nS4MAAAglvMAtOAAAMAAAAlvg");
	var mask_2_graphics_103 = new cjs.Graphics().p("A2pS6MAAAglzMAtTAAAMAAAAlzg");
	var mask_2_graphics_104 = new cjs.Graphics().p("A2sS8MAAAgl3MAtZAAAMAAAAl3g");
	var mask_2_graphics_105 = new cjs.Graphics().p("A2vS/MAAAgl9MAtfAAAMAAAAl9g");
	var mask_2_graphics_106 = new cjs.Graphics().p("A2yTBMAAAgmBMAtkAAAMAAAAmBg");
	var mask_2_graphics_107 = new cjs.Graphics().p("A20TDMAAAgmFMAtqAAAMAAAAmFg");
	var mask_2_graphics_108 = new cjs.Graphics().p("A23TGMAAAgmLMAtvAAAMAAAAmLg");
	var mask_2_graphics_109 = new cjs.Graphics().p("A26TIMAAAgmPMAt1AAAMAAAAmPg");
	var mask_2_graphics_110 = new cjs.Graphics().p("A29TKMAAAgmTMAt7AAAMAAAAmTg");
	var mask_2_graphics_111 = new cjs.Graphics().p("A2/TNMAAAgmYMAuAAAAMAAAAmYg");
	var mask_2_graphics_112 = new cjs.Graphics().p("A3CTPMAAAgmdMAuFAAAMAAAAmdg");
	var mask_2_graphics_113 = new cjs.Graphics().p("A3FTRMAAAgmhMAuLAAAMAAAAmhg");
	var mask_2_graphics_114 = new cjs.Graphics().p("A3ITTMAAAgmlMAuRAAAMAAAAmlg");
	var mask_2_graphics_115 = new cjs.Graphics().p("A3LTWMAAAgmrMAuXAAAMAAAAmrg");
	var mask_2_graphics_116 = new cjs.Graphics().p("A3NTYMAAAgmvMAubAAAMAAAAmvg");
	var mask_2_graphics_117 = new cjs.Graphics().p("A3QTaMAAAgm0MAuhAAAMAAAAm0g");
	var mask_2_graphics_118 = new cjs.Graphics().p("A3TTdMAAAgm5MAunAAAMAAAAm5g");
	var mask_2_graphics_119 = new cjs.Graphics().p("A3WTfMAAAgm9MAutAAAMAAAAm9g");
	var mask_2_graphics_120 = new cjs.Graphics().p("A3ZTiMAAAgnDMAuyAAAMAAAAnDg");
	var mask_2_graphics_121 = new cjs.Graphics().p("A3bTkMAAAgnHMAu3AAAMAAAAnHg");
	var mask_2_graphics_122 = new cjs.Graphics().p("A3eTmMAAAgnLMAu9AAAMAAAAnLg");
	var mask_2_graphics_123 = new cjs.Graphics().p("A3hTpMAAAgnRMAvDAAAMAAAAnRg");
	var mask_2_graphics_124 = new cjs.Graphics().p("A3kTrMAAAgnVMAvIAAAMAAAAnVg");
	var mask_2_graphics_125 = new cjs.Graphics().p("A3mTtMAAAgnZMAvOAAAMAAAAnZg");
	var mask_2_graphics_126 = new cjs.Graphics().p("A3pTvMAAAgndMAvTAAAMAAAAndg");
	var mask_2_graphics_127 = new cjs.Graphics().p("A3sTyMAAAgnjMAvZAAAMAAAAnjg");
	var mask_2_graphics_128 = new cjs.Graphics().p("A3vT0MAAAgnnMAvfAAAMAAAAnng");
	var mask_2_graphics_129 = new cjs.Graphics().p("A3xT2MAAAgnrMAvkAAAMAAAAnrg");
	var mask_2_graphics_130 = new cjs.Graphics().p("A30T5MAAAgnxMAvpAAAMAAAAnxg");
	var mask_2_graphics_131 = new cjs.Graphics().p("A33T7MAAAgn1MAvvAAAMAAAAn1g");
	var mask_2_graphics_132 = new cjs.Graphics().p("EgX6AhVMAAAgn6MAv1AAAMAAAAn6g");
	var mask_2_graphics_133 = new cjs.Graphics().p("A36UAMAAAgn/MAv1AAAMAAAAn/g");
	var mask_2_graphics_134 = new cjs.Graphics().p("A37UJMAAAgoRMAv3AAAMAAAAoRg");
	var mask_2_graphics_135 = new cjs.Graphics().p("A38UXMAAAgotMAv5AAAMAAAAotg");
	var mask_2_graphics_136 = new cjs.Graphics().p("A3/UrMAAAgpVMAv+AAAMAAAApVg");
	var mask_2_graphics_137 = new cjs.Graphics().p("A4BVFMAAAgqJMAwDAAAMAAAAqJg");
	var mask_2_graphics_138 = new cjs.Graphics().p("A4EVkMAAAgrHMAwJAAAMAAAArHg");
	var mask_2_graphics_139 = new cjs.Graphics().p("A4IWKMAAAgsTMAwRAAAMAAAAsTg");
	var mask_2_graphics_140 = new cjs.Graphics().p("A4MW1MAAAgtpMAwaAAAMAAAAtpg");
	var mask_2_graphics_141 = new cjs.Graphics().p("A4SXmMAAAgvLMAwkAAAMAAAAvLg");
	var mask_2_graphics_142 = new cjs.Graphics().p("A4YYcMAAAgw3MAwwAAAMAAAAw3g");
	var mask_2_graphics_143 = new cjs.Graphics().p("A4dZZMAAAgywMAw8AAAMAAAAywg");
	var mask_2_graphics_144 = new cjs.Graphics().p("A4kaaMAAAg0zMAxJAAAMAAAA0zg");
	var mask_2_graphics_145 = new cjs.Graphics().p("A4sbiMAAAg3DMAxZAAAMAAAA3Dg");
	var mask_2_graphics_146 = new cjs.Graphics().p("A40cwMAAAg5fMAxpAAAMAAAA5fg");
	var mask_2_graphics_147 = new cjs.Graphics().p("A48eDMAAAg8FMAx5AAAMAAAA8Fg");
	var mask_2_graphics_148 = new cjs.Graphics().p("A5FfcMAAAg+3MAyMAAAMAAAA+3g");
	var mask_2_graphics_149 = new cjs.Graphics().p("EgZPAg7MAAAhB0MAyfAAAMAAABB0g");
	var mask_2_graphics_150 = new cjs.Graphics().p("EgZaAifMAAAhE9MAy1AAAMAAABE9g");
	var mask_2_graphics_151 = new cjs.Graphics().p("EgZkAkJMAAAhIRMAzJAAAMAAABIRg");
	var mask_2_graphics_152 = new cjs.Graphics().p("EgZwAl5MAAAhLxMAzhAAAMAAABLxg");
	var mask_2_graphics_153 = new cjs.Graphics().p("EgZ8AnvMAAAhPdMAz5AAAMAAABPdg");
	var mask_2_graphics_154 = new cjs.Graphics().p("EgaJApqMAAAhTTMA0TAAAMAAABTTg");
	var mask_2_graphics_155 = new cjs.Graphics().p("EgaWArrMAAAhXVMA0tAAAMAAABXVg");
	var mask_2_graphics_156 = new cjs.Graphics().p("EgakAtyMAAAhbjMA1JAAAMAAABbjg");
	var mask_2_graphics_157 = new cjs.Graphics().p("EgazAv/MAAAhf9MA1nAAAMAAABf9g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_2_graphics_55,x:81,y:204.4}).wait(1).to({graphics:mask_2_graphics_56,x:81,y:298.9}).wait(1).to({graphics:mask_2_graphics_57,x:81,y:298.9}).wait(1).to({graphics:mask_2_graphics_58,x:81,y:298.9}).wait(1).to({graphics:mask_2_graphics_59,x:81,y:298.9}).wait(1).to({graphics:mask_2_graphics_60,x:81,y:298.9}).wait(1).to({graphics:mask_2_graphics_61,x:81,y:298.9}).wait(1).to({graphics:mask_2_graphics_62,x:81,y:298.9}).wait(1).to({graphics:mask_2_graphics_63,x:81,y:298.9}).wait(1).to({graphics:mask_2_graphics_64,x:81,y:298.9}).wait(1).to({graphics:mask_2_graphics_65,x:81,y:298.9}).wait(1).to({graphics:mask_2_graphics_66,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_67,x:81,y:298.9}).wait(1).to({graphics:mask_2_graphics_68,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_69,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_70,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_71,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_72,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_73,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_74,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_75,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_76,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_77,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_78,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_79,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_80,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_81,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_82,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_83,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_84,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_85,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_86,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_87,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_88,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_89,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_90,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_91,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_92,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_93,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_94,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_95,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_96,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_97,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_98,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_99,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_100,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_101,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_102,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_103,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_104,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_105,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_106,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_107,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_108,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_109,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_110,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_111,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_112,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_113,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_114,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_115,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_116,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_117,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_118,x:81.2,y:298.8}).wait(1).to({graphics:mask_2_graphics_119,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_120,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_121,x:81.2,y:298.8}).wait(1).to({graphics:mask_2_graphics_122,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_123,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_124,x:81.2,y:298.8}).wait(1).to({graphics:mask_2_graphics_125,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_126,x:81.2,y:298.8}).wait(1).to({graphics:mask_2_graphics_127,x:81.2,y:298.8}).wait(1).to({graphics:mask_2_graphics_128,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_129,x:81.2,y:298.8}).wait(1).to({graphics:mask_2_graphics_130,x:81.2,y:298.8}).wait(1).to({graphics:mask_2_graphics_131,x:81.2,y:298.8}).wait(1).to({graphics:mask_2_graphics_132,x:81.2,y:213.3}).wait(1).to({graphics:mask_2_graphics_133,x:81.2,y:298.8}).wait(1).to({graphics:mask_2_graphics_134,x:81.2,y:298.8}).wait(1).to({graphics:mask_2_graphics_135,x:81.2,y:298.8}).wait(1).to({graphics:mask_2_graphics_136,x:81.2,y:298.8}).wait(1).to({graphics:mask_2_graphics_137,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_138,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_139,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_140,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_141,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_142,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_143,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_144,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_145,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_146,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_147,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_148,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_149,x:81.2,y:298.9}).wait(1).to({graphics:mask_2_graphics_150,x:81.2,y:299}).wait(1).to({graphics:mask_2_graphics_151,x:81.1,y:298.9}).wait(1).to({graphics:mask_2_graphics_152,x:81.1,y:299}).wait(1).to({graphics:mask_2_graphics_153,x:81.1,y:299}).wait(1).to({graphics:mask_2_graphics_154,x:81.1,y:299}).wait(1).to({graphics:mask_2_graphics_155,x:81.1,y:299}).wait(1).to({graphics:mask_2_graphics_156,x:81.1,y:299}).wait(1).to({graphics:mask_2_graphics_157,x:81.1,y:299}).wait(1).to({graphics:null,x:0,y:0}).wait(56));

	// SMOKE
	this.instance_13 = new lib.Tween10("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(81.2,388.3,0.88,0.88,0,0,0,0.3,0.1);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween11("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(81.8,311.6,1.241,1.241,0,0,0,0.4,0);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_13,this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(55).to({_off:false},0).to({_off:true,regX:0.4,regY:0,scaleX:1.24,scaleY:1.24,x:81.8,y:311.6},77).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(55).to({_off:false},77).to({regX:0.3,scaleX:1.74,scaleY:1.74,x:82,y:207.9},25,cjs.Ease.get(-1)).to({regX:0.1,scaleX:4.38,scaleY:4.38,x:83.3,y:324.7,alpha:0},20).to({_off:true},1).wait(36));

	// GAME_BG
	this.instance_15 = new lib.Tween8("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(80.9,299,0.04,0.04,0,0,0,8.7,6.2);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween9("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(81.3,306.3,3.713,3.713,0,0,0,0.2,0.1);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},32).to({state:[{t:this.instance_15}]},23).to({state:[{t:this.instance_15}]},77).to({state:[{t:this.instance_15}]},25).to({state:[{t:this.instance_16}]},20).to({state:[]},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(32).to({_off:false},0).to({regX:0.4,regY:1.6,scaleX:0.87,scaleY:0.87,y:305.3},23).to({regX:0.3,regY:1.4,scaleX:1.26,scaleY:1.26,x:81,y:305.6},77).to({regX:0.2,scaleX:1.75,scaleY:1.75,x:80.9,y:305.3},25,cjs.Ease.get(-1)).to({_off:true,regY:0.1,scaleX:3.71,scaleY:3.71,x:81.3,y:306.3,alpha:0},20).wait(37));

	// Layer 18 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_47 = new cjs.Graphics().p("Ax7Q1IAAjNMAj3AAAIAADNg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_3_graphics_47,x:83.8,y:107.7}).wait(84).to({graphics:null,x:0,y:0}).wait(83));

	// Layer 20
	this.instance_17 = new lib.Tween7("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(80.9,223.8,0.88,0.88,0,0,0,0.4,0.1);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(52).to({_off:false},0).to({y:205.3},9).wait(71).to({startPosition:0},0).to({regY:-0.1,scaleX:1.12,scaleY:1.12,x:80.5,y:187},25,cjs.Ease.get(-1)).to({regX:0.2,scaleX:1.6,scaleY:1.6,x:86.3,y:114.2,alpha:0},18).to({_off:true},1).wait(38));

	// Layer 19 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_47 = new cjs.Graphics().p("Ax7SaIAAjMMAj3AAAIAADMg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_4_graphics_47,x:83.8,y:117.8}).wait(84).to({graphics:null,x:0,y:0}).wait(83));

	// Layer 22
	this.instance_18 = new lib.text2_mc("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(80.9,244.8,0.88,0.88,0,0,0,0.4,0);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween9("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(86.3,155.7,1.595,1.595,0,0,0,0.2,0.1);
	this.instance_19.alpha = 0;

	var maskedShapeInstanceList = [this.instance_18,this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},57).to({state:[{t:this.instance_18}]},9).to({state:[{t:this.instance_18}]},66).to({state:[{t:this.instance_18}]},25).to({state:[{t:this.instance_19}]},18).to({state:[]},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(57).to({_off:false},0).to({y:224.6},9).wait(66).to({startPosition:0},0).to({scaleX:1.12,scaleY:1.12,x:80.5,y:211.8},25,cjs.Ease.get(-1)).to({_off:true,regX:0.2,regY:0.1,scaleX:1.6,scaleY:1.6,x:86.3,y:155.7,alpha:0},18).wait(39));

	// Layer 21 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_47 = new cjs.Graphics().p("Ax7T/IAAjNMAj3AAAIAADNg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_5_graphics_47,x:83.8,y:127.9}).wait(84).to({graphics:null,x:0,y:0}).wait(83));

	// Layer 23
	this.instance_20 = new lib.text3_mc("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(147.7,262.3,0.88,0.88,0,0,0,0.1,-0.1);
	this.instance_20._off = true;

	this.instance_21 = new lib.text3("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(207.6,195.6,1.595,1.595,0,0,0,0.1,0.2);
	this.instance_21.alpha = 0;

	var maskedShapeInstanceList = [this.instance_20,this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},62).to({state:[{t:this.instance_20}]},9).to({state:[{t:this.instance_20}]},61).to({state:[{t:this.instance_20}]},25).to({state:[{t:this.instance_21}]},18).to({state:[]},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(62).to({_off:false},0).to({y:245.6},9).wait(61).to({startPosition:0},0).to({regX:0.2,regY:0.1,scaleX:1.12,scaleY:1.12,x:165.4,y:238.7},25,cjs.Ease.get(-1)).to({_off:true,regX:0.1,regY:0.2,scaleX:1.6,scaleY:1.6,x:207.6,y:195.6,alpha:0},18).wait(39));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(7.5,543.4,1,1,0,0,0,55.5,22.5);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(166).to({_off:false},0).wait(48));

	// legal
	this.instance_22 = new lib.legal_withpurchase();
	this.instance_22.parent = this;
	this.instance_22.setTransform(78.7,579.1,1.147,1.147,0,0,0,117.9,8);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(167).to({_off:false},0).wait(47));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_163 = new cjs.Graphics().p("AqwFdIAAq5IVhAAIAAK5g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(163).to({graphics:mask_6_graphics_163,x:73.9,y:419.8}).wait(51));

	// price
	this.instance_23 = new lib.newPrice();
	this.instance_23.parent = this;
	this.instance_23.setTransform(74.7,199.7,1,1,0,0,0,57.5,33.2);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(163).to({_off:false},0).to({y:131.2},10,cjs.Ease.get(1)).wait(41));

	// mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_163 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_7_graphics_164 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_7_graphics_165 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_7_graphics_166 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_7_graphics_167 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_7_graphics_168 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_7_graphics_169 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_7_graphics_170 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_7_graphics_171 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_7_graphics_172 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");
	var mask_7_graphics_173 = new cjs.Graphics().p("AozB4IAAjvIRnAAIAADvg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(163).to({graphics:mask_7_graphics_163,x:81.8,y:351.5}).wait(1).to({graphics:mask_7_graphics_164,x:81.8,y:351.5}).wait(1).to({graphics:mask_7_graphics_165,x:81.8,y:351.5}).wait(1).to({graphics:mask_7_graphics_166,x:81.8,y:351.5}).wait(1).to({graphics:mask_7_graphics_167,x:81.8,y:351.5}).wait(1).to({graphics:mask_7_graphics_168,x:81.8,y:351.5}).wait(1).to({graphics:mask_7_graphics_169,x:81.8,y:351.5}).wait(1).to({graphics:mask_7_graphics_170,x:81.8,y:351.5}).wait(1).to({graphics:mask_7_graphics_171,x:81.8,y:351.5}).wait(1).to({graphics:mask_7_graphics_172,x:81.8,y:351.5}).wait(1).to({graphics:mask_7_graphics_173,x:81.8,y:351.5}).wait(41));

	// rift
	this.instance_24 = new lib.logo_rifttouch();
	this.instance_24.parent = this;
	this.instance_24.setTransform(78.7,345,0.476,0.476,0,0,0,81.5,66);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(163).to({_off:false},0).to({y:306},10,cjs.Ease.get(1)).wait(41));

	// mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_163 = new cjs.Graphics().p("AobCkIAAlHIQ4AAIAAFHg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(163).to({graphics:mask_8_graphics_163,x:80.2,y:308.8}).wait(51));

	// oculus
	this.instance_25 = new lib.logo_oculus();
	this.instance_25.parent = this;
	this.instance_25.setTransform(80,317.8,0.63,0.63,0,0,0,81.4,66);
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(163).to({_off:false},0).to({y:281.8},10,cjs.Ease.get(1)).wait(41));

	// stadium
	this.instance_26 = new lib.logo_stadium();
	this.instance_26.parent = this;
	this.instance_26.setTransform(81.6,361.8,0.417,0.417,0,0,0,81.5,66);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(163).to({_off:false},0).to({y:336.8},10,cjs.Ease.get(1)).wait(41));

	// touch RT
	this.instance_27 = new lib.hardware_touch_RT_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(69.5,227.7,0.106,0.106,0,0,0,33,30.6);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(157).to({_off:false},0).to({regX:32.6,regY:30.2,scaleX:0.78,scaleY:0.78,x:40.5,y:168.2},13,cjs.Ease.get(-1)).wait(44));

	// touch LT
	this.instance_28 = new lib.hardware_touch_LT_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(80.4,227.5,0.106,0.106,0,0,0,23.6,24);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(157).to({_off:false},0).to({regX:23.1,regY:23.7,scaleX:0.78,scaleY:0.78,x:119.9,y:166.8},13,cjs.Ease.get(-1)).wait(44));

	// rift
	this.instance_29 = new lib.hardware_rift_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(76.5,220.4,0.106,0.106,0,0,0,69.2,42.4);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(157).to({_off:false},0).to({regX:69,regY:42.1,scaleX:0.78,scaleY:0.78,x:91.4,y:114.3},13,cjs.Ease.get(-1)).wait(44));

	// bg
	this.instance_30 = new lib.bg();
	this.instance_30.parent = this;
	this.instance_30.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(214));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,160,600);
// library properties:
lib.properties = {
	id: '297DC749B3F2451BBAA2B05A8014914C',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap33.jpg", id:"Bitmap33"},
		{src:"images/game_1_unspoken.jpg", id:"game_1_unspoken"},
		{src:"images/game_2_loneecho.jpg", id:"game_2_loneecho"},
		{src:"images/game_3_startrek.jpg", id:"game_3_startrek"},
		{src:"images/game_4_superhot.jpg", id:"game_4_superhot"},
		{src:"images/game_5_roborecall.jpg", id:"game_5_roborecall"},
		{src:"images/game_6_rickmorty.jpg", id:"game_6_rickmorty"},
		{src:"images/game_7_wilson.jpg", id:"game_7_wilson"},
		{src:"images/hardware_rift.png", id:"hardware_rift"},
		{src:"images/hardware_touch_LT.png", id:"hardware_touch_LT"},
		{src:"images/hardware_touch_RT.png", id:"hardware_touch_RT"},
		{src:"images/RR_poster_final12.jpg", id:"RR_poster_final12"},
		{src:"images/SmokeEffectPNGFile.png", id:"SmokeEffectPNGFile"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['297DC749B3F2451BBAA2B05A8014914C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;