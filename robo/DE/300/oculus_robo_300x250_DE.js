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



(lib.bg_300x250_v2 = function() {
	this.initialize(img.bg_300x250_v2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,250);


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
	this.shape.graphics.f("#000000").s().p("AACAWIAGgVIAJgWIANABIgHAUIgFAWgAgdAWIAHgVIAJgWIAMABIgGAUIgFAWg");
	this.shape.setTransform(-97.3,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAA1QgDgCgCgFQgDgFgBgGIgBgQIAAgjIgQAAIAAgMIAQAAIAAgZIANAAIAAAZIAYAAIAAAMIgYAAIAAAlQAAAMACAEQABADADABIAFABQAIAAAFgCIAAANQgIACgIAAQgHAAgEgCg");
	this.shape_1.setTransform(96,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_2.setTransform(88.4,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_3.setTransform(81.7,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgaQgFABgEAFQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADAEQAEADAFADQAGACAGABQAHgBAGgCQAFgDAEgDQADgEACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgFgFgBQgGgDgHAAQgGAAgGADg");
	this.shape_4.setTransform(74.7,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgFQgNgDgEgDQgEgCgCgEQgCgDAAgGQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACACIAFAEIAQAEIAJADIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAFgFADQgFADgHABIgMABIgQgCg");
	this.shape_5.setTransform(65.8,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_6.setTransform(57,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_7.setTransform(46.8,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAA1QgDgCgDgFQgCgFgBgGIAAgQIAAgjIgRAAIAAgMIARAAIAAgZIANAAIAAAZIAWAAIAAAMIgWAAIAAAlQAAAMACAEQAAADADABIAGABQAGAAAGgCIAAANQgIACgIAAQgHAAgEgCg");
	this.shape_8.setTransform(35.3,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_9.setTransform(27.6,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAIgEQAHgCAHAAQAJAAAGADQAIADAEAEQAGAGACAIQADAIAAAKIAAAFIg+AAQAAAHADAFQABAFAFADQAEADAFABQAFABAGABIAPgCQAIgCAFgCIABANQgGADgIABIgPABQgKAAgHgCgAAYgFQAAgGgBgEQgCgGgDgCQgDgDgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_10.setTransform(18.3,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGA9IAAhRIAOAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQACgEAEAAQAEAAADAEQADACgBAEQABAFgDACQgDADgEAAQgEAAgCgDg");
	this.shape_11.setTransform(11.8,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgFQgNgDgEgDQgEgCgCgEQgCgDAAgGQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACACIAFAEIAQAEIAJADIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAFgFADQgFADgHABIgMABIgQgCg");
	this.shape_12.setTransform(5.9,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_13.setTransform(-4,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_14.setTransform(-7.9,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_15.setTransform(-14.7,2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGACIgBAOQgGgDgIgCIgMgBQgHAAgEACQgGACgEADQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHABIAMgCQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_16.setTransform(-23.3,2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMApQgIgDgGgFQgGgFgDgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAIgEQAHgCAIAAQAIAAAGADQAHADAGAEQAFAGACAIQADAIAAAKIAAAFIg+AAQAAAHACAFQACAFAFADQAEADAFABQAFABAGABIAPgCQAHgCAGgCIABANQgGADgIABIgPABQgJAAgJgCgAAYgFQAAgGgBgEQgCgGgDgCQgDgDgEgCQgFgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_17.setTransform(-32,2.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAIADAEAFQAGAGACAHQADAHAAAJQgBAIgCAGQgCAHgDAEQgFAFgFADQgGADgJABIAjAugAgfADIAiAAQAHAAAEgBQAFgCADgDQADgDACgFQABgFABgFQgBgGgBgFQgCgFgDgDIgIgFQgEgCgHAAIgiAAg");
	this.shape_18.setTransform(-41.6,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgaQgFABgEAFQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADAEQAEADAFADQAGACAGABQAHgBAGgCQAFgDAEgDQADgEACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgFgFgBQgGgDgHAAQgGAAgGADg");
	this.shape_19.setTransform(-56.9,2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_20.setTransform(-66.9,0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgaQgFABgEAFQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADAEQAEADAFADQAGACAGABQAHgBAGgCQAFgDAEgDQADgEACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgFgFgBQgGgDgHAAQgGAAgGADg");
	this.shape_21.setTransform(-77.2,2.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAbA+IgggtIgZAAIAAAtIgPAAIAAh7IAyAAQAJAAAHADQAHADAGAFQAEAGADAHQACAHABAJQAAAIgCAGQgCAHgFAEQgEAFgFADQgHADgIABIAjAugAgeADIAhAAQAGAAAGgBQAEgCAEgDQACgDACgFQACgFgBgFQABgGgCgFQgCgFgCgDIgIgFQgGgCgGAAIghAAg");
	this.shape_22.setTransform(-87.2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.2,-11.8,201.2,24.4);


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAVIgHgCIACgKIAHADIAHABIAFgBQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIgBgDIgCgBIgIgBQgGgCgCgCIgDgCIgBgFIACgGQABgDACgBQADgCADgBIAGgBIAIABQAEABAEACIgDAJIgGgDIgHgBIgDABQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIABACIADABIAHACIAEABIAEACIADADIABAFQAAADgCADQgBADgDACQgDABgEABIgGAAIgJAAg");
	this.shape.setTransform(24.1,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKAfQgEgCgDgDIgDgHIgBgIIABgJQABgDACgCIAHgFQAEgCAEAAQAEAAADACQADACADADIAAAAIAAgGIAAgWIAMAAIAAA+IgMAAIAAgGIAAAAQgDAEgDACQgDABgEAAQgEAAgEgBgAgDAAIgEACIgCAEIgBAFIABAFIACADQAAABABAAQAAABABAAQAAAAABAAQAAABABAAIADABIAFgBIAEgDIABgDIABgFIgBgFIgBgEIgEgCIgFAAIgDAAg");
	this.shape_1.setTransform(19.4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAVIAAgoIALAAIAAAHQACgEACgCIADgBIAEgBIAFABIAAAKIgHAAIgEAAIgDACIgBAFIgBADIAAAUg");
	this.shape_2.setTransform(15.5,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAVQgFgCgDgCIgDgDIgCgEIgBgFIAAgEQAAgFABgEIAEgHIAHgEQAEgBAEgBQAEABAEABIAGAEIAEAHQABAEAAAEIAAAEIgcAAIABADIADADIAEACIAEAAIAHAAIAHgCIAAAKIgHABIgHAAIgJAAgAAJgDIgBgEIgCgDIgCgCIgEAAIgCAAIgDACIgCADIgBAEIARAAIAAAAg");
	this.shape_3.setTransform(11.3,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPAfIgegrIAAArIgMAAIAAg9IANAAIAeArIAAgrIAMAAIAAA9g");
	this.shape_4.setTransform(5.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAKAfIgNgWIgJAAIAAAWIgMAAIAAg9IAcAAQAEAAADACQAEABADADQACACACAEQABAEAAAEIgBAHIgDAFIgEAEIgHACIARAXgAgMAAIANAAIAFgBIACgCIACgDIABgEIgBgEIgCgDIgCgCIgFgBIgNAAg");
	this.shape_5.setTransform(-2.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAfIgZg9IANAAIAQAuIARguIANAAIgZA9g");
	this.shape_6.setTransform(-8.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_7.setTransform(-18.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-7.1,54.1,14.2);


(lib.text2_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAVIAGgVIAFgVIARAAIgHAVIgJAWgAgdAVIAHgVIAFgVIAQAAIgGAVIgJAWg");
	this.shape.setTransform(79.9,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(74,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAqIgOgEIADgOQAGADAHACQAHACAHAAQAJAAAFgDQADgBABgDQACgDAAgDQAAgDgCgDQgCgCgEgCIgPgEQgNgDgEgDQgEgCgCgEQgCgEAAgFQAAgHADgEQACgFAEgDQAFgDAFgBQAGgCAFAAQAIAAAHACQAIABAGAEIgEANQgFgEgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACADIAFADIAQAFIAJACIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAEgFAEQgFACgHACIgMABIgQgBg");
	this.shape_2.setTransform(68,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_3.setTransform(59.5,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_4.setTransform(49.9,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSA9QgIgDgEgFQgGgGgDgIQgDgIAAgKQAAgJADgIQADgHAGgGQAEgGAIgDQAHgDAIAAQAFAAAEACQAFABAEACQAFADAJAJIAAAAIAAgOIAAgtIAOAAIAAB9IgOAAIAAgPIAAAAIgHAIIgIAFIgIADIgJABQgIAAgHgDgAgLgGQgFACgEAEQgDADgDAGQgCAGAAAGQAAAHACAGQADAGADAEQAEAEAFACQAFACAGAAQAGAAAGgDQAFgCAEgEQAEgEACgGQACgFAAgHQAAgGgDgGQgCgFgDgEQgEgDgGgDQgFgCgGAAQgGAAgFACg");
	this.shape_5.setTransform(35.9,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgCQgEgBgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAGAAAHIAAAoIgOAAIAAhQIANAAIAAAPIABAAIAFgHQADgEAEgCIAJgDQADgCAGAAQAHAAAGADQAGACADAFQAEAEABAGQACAGAAAHIAAAyg");
	this.shape_6.setTransform(26.1,3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgGgBgOQAAgGADgMQADgIAGgFQAFgGAIgCQAHgDAHAAQAJAAAGADQAIADAEAFQAFAFADAIQADAIAAAKIAAAFIg/AAQABAHADAFQABAEAEAEQAFADAFABQAFABAGABIAOgCQAJgBAFgDIABANQgFACgKACIgOABQgJAAgIgCgAAZgEQAAgHgCgEQgCgGgDgCQgDgEgFgBQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAHIAxAAIAAAAg");
	this.shape_7.setTransform(16.8,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASA/IglgqIgDAAIAAAqIgOAAIAAh9IAOAAIAABNIADAAIAiggIATAAIgnAjIAqAtg");
	this.shape_8.setTransform(8.5,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIApQgIgDgGgFQgGgGgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgFAIgDQAIgDAJAAIAOACQAHABAGACIgBAOQgGgDgIgCIgMgBQgHAAgEACQgGACgEAEQgEADgCAGQgCAFAAAHQAAAHACAHQACAFAEAEQAEADAGADQAEACAHAAIAMgCQAIgCAGgDIABAOQgGADgHABIgOABQgJAAgIgCg");
	this.shape_9.setTransform(-0.4,3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_10.setTransform(-9.4,3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAqIAAhQIANAAIAAAPIAAAAQAFgHAEgFIAHgEQAFgCAEAAIAHABIAAAOIgJgBQgFAAgFACQgEADgCADQgDAEgCAGQgCAGAAAFIAAAog");
	this.shape_11.setTransform(-16.7,3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSA9QgIgDgFgFQgFgGgDgIQgDgIAAgKQAAgJADgIQADgHAFgGQAFgGAIgDQAHgDAIAAQAFAAAEACQAFABAEACQAFADAJAJIAAAAIAAgOIAAgtIAOAAIAAB9IgOAAIAAgPIAAAAIgHAIIgIAFIgIADIgJABQgIAAgHgDgAgLgGQgEACgFAEQgDADgCAGQgCAGgBAGQABAHACAGQACAGADAEQAFAEAEACQAGACAFAAQAGAAAGgDQAFgCAEgEQAEgEACgGQACgFAAgHQAAgGgCgGQgDgFgDgEQgEgDgGgDQgFgCgGAAQgFAAgGACg");
	this.shape_12.setTransform(-25.5,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgCQgEgBgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAGAAAHIAAAoIgOAAIAAhQIANAAIAAAPIABAAIAFgHQADgEAEgCIAJgDQADgCAGAAQAHAAAGADQAGACADAFQAEAEABAGQACAGAAAHIAAAyg");
	this.shape_13.setTransform(-35.3,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA8IAAhQIANAAIAABQgAgGgqQgCgEgBgEQABgEACgDQACgDAEAAQAEAAADADQACADAAAEQAAAEgCAEQgDACgEAAQgEAAgCgCg");
	this.shape_14.setTransform(-42,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgGgBgOQAAgGADgMQADgIAGgFQAFgGAHgCQAIgDAIAAQAIAAAGADQAHADAGAFQAEAFADAIQADAIAAAKIAAAFIg+AAQAAAHACAFQADAEAEAEQADADAGABQAFABAGABIAPgCQAHgBAGgDIACANQgGACgJACIgPABQgJAAgJgCgAAYgEQAAgHgCgEQgBgGgDgCQgDgEgEgBQgFgCgFAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAHIAvAAIAAAAg");
	this.shape_15.setTransform(-48.5,3.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgGgBgOQAAgGADgMQADgIAGgFQAFgGAIgCQAHgDAIAAQAIAAAGADQAHADAGAFQAFAFACAIQADAIAAAKIAAAFIg+AAQAAAHACAFQACAEAFAEQAEADAFABQAFABAGABIAPgCQAHgBAGgDIABANQgGACgIACIgPABQgJAAgJgCgAAYgEQAAgHgCgEQgBgGgDgCQgDgEgEgBQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAHIAvAAIAAAAg");
	this.shape_16.setTransform(-57.6,3.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_17.setTransform(-67.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.7,-10.7,157.6,24.4);


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
	this.shape.graphics.f("#F4C120").s().p("AGvF9QgQgDgKgHIgGgEIAAgBIgBAAIgBgBIABAAIACABIAAgCQgFgBgEgDIgCgDIAHAFIALAHIAAAAIABABIAAgBQADAAACACIABABIABAAIAEADIAEACQADAAACABIAGACIAIABQAHABADgBIAFAAIgBgBQgMACgHgDIgCAAQAJABAJgBIACABQABgCAFAAIAKgDIAIgCQAFgCABgBIAHgDIAOgHIANgIIAIgFIAAgCIgQAJIgTAKIgTAJIgQAEQgKABgHgCQgHgDgHABQgDgCgCAAQgEgBgBgBIgNgHIgCgBIAIAEQAGADADAAIABgCIgQgGQgHgEgHgGIgBAAIgIgFIABABIgCAAQADAFAFABIAAACIgOgMQgJgIgBgEIAAgBQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAgCIgBgCIgDgDIgBgBIACAAIADACIAAgBIAAAAIgBgCQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAIgBAAIABACIADABIAJAJQAFAFAEABIAAgBQgGgCgDgGIACABIgFgGQgCgCgBgEIAAgCIgDgCIgHgGIAJgXIAHgnQABgIAEgNQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgCIgBAAIAAgEIABAAIABgCIAAABIABgBIAAgGIACgFIAAABIAAADIAAAAIABAAIABgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAIACgFIAFgZIAEgPQADgKACgYIABgCQABgKADgVIAHgnIAHglQAEgSgBgGQADgOACgQQABgOAFgQQgBgHADgHQADgIgBgGIAAgBQAAgDADgGQgBgLADgKQADgKAAgLIAAAAIAEgPIACgPIAAABIACgHIAAgCIgBAAIAAgBIABAAIABgEIgBAAIgBADIACgQIAEgZIADgZIABgNIABgCIAAABIABgCIgBgIIAAgJIAFgWQACgLAEgIQADgIAIgIIAIgHQAIgCAFgGIALgEIABgCIADAAIAAgDIACgBIgBgBIACgCIgDgBIgCgDIAAgCQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIACACIAAgEIABgCIAEAFQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAADQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAHAAIAAABIADgBIAAgFIABgCIgBABIgBAAIgCgCIgBgFIACABIACgCIAFgBIADABIgCADIAEAAIAEgFIACABIABAAIABAEIADADIAAAEIAEABIAFAFIACAAIAAgCIgEgCIABgCIgDgBIACgDIgEgDIAAgDIgFABQAAgEADgBIAEgCIAFgBQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEABIAEAFIADAHIACABIABAFIACAEIAAAGIACABIACgEIgDgMQgCgHABgFIABACIAEACIAAADIAGAGQABAKACACIgBABIAAAHIABAGIgCACQAFATgGATQgGASgCAVQgCABABAEQAAAFgCABIgBgEIgBAGIAAgBIgBAGQAAAGgCAGQADAEgDAHIgEALQABAGgCAEQgBAEAAAGIAAgBIAAADIgWCBIgNBBQABgNADgNIgCAAIAAgCIgEASQgCAIABAIIgDAIIgFAlIABADIgCAIQgCABgBAEIgCAHIgDARQgDALABAGIAAABIACgIIAAACQgDAOABAGIgBABIAAAGIgBAGIgCAAIABgCIAAgBIgDAFIAAABIACgBIAAACIAAgCIAAAJIgBgBIAAALIgDARIgDASQgCAGgBAHIgKBVQAZgIAbgMIAygZIBagmIBaglQAZgKAfgFQAOgBALAAIgEAEIAPABQAJAAAEADQgcARgeAPIhKAfIhbAnIABAAIgBABIgBAAIABgBIgEACIAAABIgKAHIgLAFIgQAJIggARIgjASIgWANIgCACIAAABIAAgBIgGAEQgHABgEAEIgEACIAEgDQAAgBANgGIAdgRIAegQIARgJIABAAQADgFAGgCIAMgFIADgCIAGgDIAUgMIgGADIgIADIAAABIgBAAIgEACIgCABQABABAHgEIAHgEIAAAAIgVANIAAgBIgBABQgGABgHAEIAAABIgBAAIgCABIABgBIgDACIABAAIgDACIgTALIgGACQgFACgDADIgKAGIgHACIgBABIgHAFIgIADIgGAFQgDAAgDADQgEgBgDADQgEACgCADIgEACQgDABgBACIgCAAIABABIADgBIgGAEIgKAGQgEABgKAGQgLAFgHAAIgHADIAAgBIgBAAIgBABIgJABIgUgCgAHCF4IACAAIgCgBIgCAAgAG1F2IAJACIACgBIADgBIAAAAIgFAAIgJgCIgJgBIgCAAIALADgAHoFzIgEACIAIgDIAFgCIAFgCIAAgBIgBABIABgCIACgBIgBAAQgHAFgIADgAGeF0IABAAIgEgCIADACgAGnFzIACgBIgCAAIAAAAgAGZFnIgQgJIAAgBIgCAAIABAAIAAABIgCgCIAAAAIABACIgBAAIgCgBIgBgBIAAABIABAAIAFAEIABgBIAEADIAKAEIABAAgAF6FYIAAABIABAAIgBgCIgCgBgAIWFVIgBACIACAAIAIgFIgEACIAAgBgAF2FWIgDgDIACAAQAAABAAAAIABABIAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIgCgBIAAAAIgBAAIABAAIgBgBIAAgBIgDgCIABAEIAFAFgAFvFHIAAgBIgBAAgAJwEnIABAAIACgBIgCAAgAGKDfIAAABIgCADQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIACgGIAAgGIgBAFIgBAEIAAgBIAAACgAILCNIAAABIAAACIACgDIgBgBIgBABgAIPCHIAAAAIAAgCQAAABAAABQABAAAAAAQAAAAAAgBQAAgBAAgBIABgGIAAgCgAIOB7IAAACIABgDIAAABIAAgCgAGoBDIAAADIABgCIAAgCIAAgBgAGrAyIAAADIACgKQgEADACAEgAGtAlIACgFIABgFgAGwAVIACAAIgBgCIgBACgAG2gKIABgCIAAgDIgBAFgAG9gzIAAABIgBABIAAABIABAAIABgCIAAgCgAHAg/IAAgCIgBAAgAHWjTIgCAJQgBAEAAAEIABABIABgGQgBgCACgEIABgCIAAgDIAAgCgAHYjbIABACIAAgFIACgLQgEAIABAGgAJQjbQABgFAAgDIAAgBQgCACABAHgAJOjiIgBAGIAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgFIAAgDIgBAGgAIoluIADAEIABAAIADAAIABABIADgBIgEgFIgDgBIAAgDgAGjF3IgBgBIABAAIAHACQAEABACABIgNgDgAGeF0IAAgBIABAAIAAABgAGJFsIAAgBIgEgBIgDgCIgDgDIgDgCIgDgDIgBgBIAAgBIABABIgBgBIAPALQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIADADIgFgCgAGSFsIAAAAQAAgBAAABgAGQFrIABAAIABABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAGCFfQgBgBABAAIAAABgAIdFYIACgBIAAABgAFxFXIAAgBIgBgBIABAAIACACgAFvFVIABABIAAABgAIlFTIAAABIgBAAgAImFTIABAAIgBABgAEcFSIgBgCQAGgDAJAAIgJAFgAEsFKIADgCIABgBIAGgCIAHgDIACAAIAAAAIgGAFQgFADgCAAIgBAAIgCADgAEsFGIAAgDIAFgFIAAgBIAEgFQACgEADgBIAAAAIAAgCIgCgBIACAAIAAAAIAAgCIgDAAIgCAFQgDAAgCADIgEAEIgCAAIgEADIAAABQgGABgEADIgJAAIgLgJIACgDIAEADIADgDIAEgBIABgEIACACIABgBIgBgCIAEAAIACAAIAAAAQABgDAEgCIgCAAIgGACQgEABgDACIgEgBIgCAEIgGABIgCACIAAACQgFAAgBgEQgBgEgEgCIABgDIAGAAIAGgDIgEgCIgBgBIgEgBIACADIgCAAIgCgBIgFABIACACIAAAGIACAEIgEgBIgCgCQgFgBgDgEIAEgDIAEABIABABIgBgEIAEgFIgEgFIACgCIADABIACgBIgBgDIgEABIgCgBIgCAEQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAIgEAAIgEgCIgCABIgBAGQgBAEgDAAIgDAAIgCgDIAEgEIgIAAIABgCIACABIABgBIAEAAIgCgFIADAAIgDgBIAEgDIgCgBIgEAAIADgCIgEgGIADgCIAAgDIAEgCIAAABIADgBIABgDIgEgGQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIgBgFIgCADIgCAHIgBgCIgEAAIADADIgCADIAAAEIgDAAIgDACIAAgBQAAgFAEgKIAEgOIACAAIAAgFQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIACABQAAgMAEgKQADgNAAgKIgBgBIABgEIABgBIAKhGIAMhHIgjADIghAEQgHAKgLAUIgRAeQgBABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAIgEABIgBABIAAgBIgFACQgEAAgEADQgEAEgDABQgBADgEABIgEABIAAAAIgIACIgDADQgCgBgFAFQgEAEgDACIAAgEQgFAAgDAEIgBgBIgLAAIADgFIACgFIAAgDIgDAAIAAgBIADAAIABgHIACgIIgDgBIgFAJIAAgFIACgCIgBgCIAAAAIgBAAIABAAIgBABIAAABIAAACIgDADIgCgBIABgJIACgFIACgFIAAAAIADgDIAAAAIABgBIABgBIgHADIgCAEIABgCIACAAIgDACIgCACIAAAAIAAgBIABgEIgFADIAAAAIABACIADgBIgBABIgCABIAAAAIgCAFIAAABQABAAAAABQABAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIABgDIgBAAIgCACIAAgDIAAgDIgJAFIgKAEIgBAAQAKgGAKgEIAAgCIgVALIgBAAIgDABIgBACIgCACIgCgCIAAACIACAAIgGADIgJAEIAFgDIAAgBQAAABABAAQAAABAAgBQAAAAABAAQAAgBAAgBIgEAAIgEAEIgEAEIgHAEIAAgBIABgCIACAAIAAgBIgCACIgEABIABABIACAAIgHADIgNAIIgCAAQgGAGgWAMQgYANggAOIhFAhIhFAgIg4AXQgaAIgFAAQgNAAgNgHQgOgJgKgMQgLgMgHgPQgIgOgBgNIgBABIgBgCIACAAIAAgIIgDAAIgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIABgBQAAgKAEgFIABACIgCAGIADgCIADgLIAFgMIgBgGIAAABIgCAEIgCACIgEAGIgBgBIACgIIABgCIAAgBIgBADIgEAGQAAADgDACQgDACAAADIgBgBQAAgDADgFQADgFAAgFIAAgBIAIgKQAAABgBAAQAAAAAAAAQAAgBAAAAQAAgBABgBIAEgFIgBgBIADgCIAHgKIAQgTIAfghIgBgBIABAAIABABIADgEIAFgFIgBgBIACABIAAgCIAAAAIAEgDIgCgBIADAAIAFgFIAEgFIAAgCIACABIAHgGIAKgHIgBgBIACAAIgQAQIgQAPQgEAIgMAJQgNAJgCAIIgEACIgEAGIgCAAIACACIgFADIAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIgEADIAAACIgFAEIAAABIgCACIgFAIIgFAHIAAABQgGAFgBAJIAGgJIABABIAAgCQADAAABgDQACgDACgCIACgBQAAgCAFgGIAKgPIAMgOIAJgKIABACIAEgFIABAAIACgFIABAAQAHgEAEgHQAEgIAIgFIABAAIAGgGIgBgBIAEgEIABAAIAFgDIANgPIgIAGIADgEIgBAAQACgFAFAAQABgDAEgCIgDAFIgDADIAHgHIAWgUIAAABIATgTIAMgNIAJgGIgKAKIAAgBIgBAAIABABIgHAIQgJAKgKAHIgBADIADgDIABABQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBABgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBIACgBIgBABIAAACQACgDAGgFIgDACIAGgGIADgDIACgCIABAAIgBgBIABgBIABABIAAgBIADgBIABgCIAGgGQAFgFACgGIADgBIAYgZIgCADIAEgEIABgCIgFACIgXAKIABAAIgBAAIAHgEIAAABIAHgEIAAAAIgEABIgXALIgZAMIAAABIgpASIgxAWIguAXQgWANgOAKQgEAAgGAFQgFAEgDAAQgNAFgXANIAAAAIAAAFIgEAAIAAABQgEAAgEACIgBAAIABgBIAGgCIAFgFQgMAFgJAGQgEAAgBAEIgFADIABACIABgCIABABIABgBIgBABIAHAFIABADQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAIgCACIAEAGIAGAHIgCgBQABACADACIgCgDIABAAIAGAIIACAEIAAABIgBgBQAJAPAEAWIAJAQIAHAOIAAAEQAAABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIgBgBIAFACQgCACABAFQACADAAAEIgBAOIgDAEIgDAFIAAACIgEAEIgBADIgCgDIABgHIgBgBIAAgGIgBgFIACgCIAAgBIgBAAIgCABIgBAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAIAAACIgCgBIgBABIABAAIABAFIgCAFIABACQgEAMgHAKQgIAKgNAAQgFAAAAgDIAGgCIABAAIABgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIgCgCIAEgDIgCgBQADgDACgBIACgHIgDABIgGAJQgCAEgFADIACADIgGAGIgBADIACABIgGADIgEgDIgHACIgBgDIADgCQACgCABgFIADgBIgHABIgEABIADgBIABADIgGACIgCAEIAFADIAGADIgFADQgEgBgCACIgFABIgCAAIACgFQABgDADAAIABAAIgCgCIgCAAIABgFIgHgCIAAgCQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIABgEIgDAAIgCAEIgEABIACACQgBABAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIgKAGIgBADIABABIACAAIAAAEIgDAEIABABIgCACIgDgBIAAgEIgEAEIgDABIAAgBIABgBIABgDIADgCIgDgBIgBgBIADgCIgEAAIABgEIgDABIgCACIgBgBIACgCIgBgBIgDABIgEgBIAAgFIgBgBIABgEIADAAIABgDIgBgDIgDgDIgEADIgFACQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgDgCIAAAEIADAGIgDgBIgDAEIAEgBIAAAEIADADIABAAIgEADIgBADIgCgEQgBgGgDgGIgHgLIABgCQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAGgEQACgCAEgBQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAABAAIAEgBIgBgFIgFgJIgFgKIABgBQgIgJgFgJQgGgJgHgIQgFgRgMgNQgNgMgGgRIABAAQgMgRgGgLIgTgeQgEgBAAgDIgDgIIgDAAIAAgEQgGgFgBgCIgDAAIAAgBIACgCIgCgBIgDgFIgCAAIgDgCIACgBIABAAIgFgCIAEgDIgDgDIAEAAIgJgMIgJgOIgEALIABAAIAAADIgCAAQgCAFgBADIgDAHIAAADIAAAAIAAABIgIATIgHAVIgDAJIgGAOIgJAZIgIAYIgEAMIgGARIgDAKIgDAKIgOgEQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIgCAEQgFAAgBABIACABIgEADIgEAAQgCAEgEADQgFACgBAFIgCAAIAAgCIgBAAIgDADQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIgBgDQAAABAAAAQAAAAgBABQAAAAgBABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDACIgBgBQADgHAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIACAAIgBgQIgCgBIgBABQAAADgEAGIAAgEQgBAAAAABQgBAAAAAAQgBAAAAgBQAAAAgBgBIgBgEIAAgCIACgEIgBgBIAAgEQAAABgBABQAAABAAAAQgBABAAAAQgBAAAAAAIgBAAIABgCQAAgHACgFIABgNQAAgEgDgDQgCACAAAEIgCAHIAAgBIgCgFIgBAAIAAgDIAAADQgCACAAAEIgBAGQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgEIACgNIAEgNIgCgKQAAAEgDAFIgCAPIgBACIABAFIgBAFIgCAIIgBAHIABABQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAgKADgJQACgJAAgKIABgCQAAgFACgDIADgIQAIguAKgjQAJgjAPgrIA2ieQAHgWAKgTQAKgVAAgWIgBgKQgBgEABgEQAAgDADgDQACgEAHgEIAAABIgCAIIAEgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAAABIgBACIAEgDIABACIADgBIABgCIAFgCIADAEIACgEQAGAAADgDIAEADIACgEIAFABIAGgBIADgBIgBgBIAEgDIAGACQAFABgBgEQALAAAKgCIAUgCIAKABIADgDIABAAIAAAEIgBABIAUgBIAagBIAagDQALAAAGgEIALgEQAEgCAHgBIABABQAGACAHgBIAOAAIgCAFIACACIAAAKQAAABgBAAQAAABAAAAQAAAAAAAAQABABAAAAIAEABIACgCIAAABQACABAGAAIAKgBIAKACIAEgBIgCgEIAJAFIgBACIADAAIAAAAQADgEAHgGQAAgDAFAAIgBABIAAABIAEgBIABgBIAFAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIACgCIAIgBIAEACQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAMAAIgBgBIAEgCIAGACQADABAAgDQAKACAKgBIAVAAIARAHQAHACAMAAIAQABIAFgBIABAAIAJABIABgBIAAgBIABABIgBAAIAAABIAIgBQAEABAFgCIAHgBIAMgCIAMAAIAHgBQgGAAgDgCIAAABIgDAAIAAgBQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAHAAQAFAAADACIAIAAIABABIABgCIAFABQADAAADACIgBABIgBAAIgEgBIgPAAIAKACIANABIAFgBIABAAIgBAAIgBAAIgCgBIABABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIACgBQAIADALgDQANgCAHAAIABABIABgBIAHAAIALgBIALAAQAGgBAAgBIAEgCQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAAACIACgBIACAFIgDABIgBACIAAADIABABIABgCIACACIAAgBIABADIAAABIABACIgBgBIAAAIIgBACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIABAFIgFAHQgFACgDAGQgEAGgKAEQAEAAAEgCIACABIgLACIgLABIgMABQgwAFgvAAQgtAAgxADQgJABgGAFQgGAGgEAJIgHARIgEAOIAmAAIAEgBIAFgBIAEgBIAAgBIABAAIABAAIABAAIAAgBIAEAAIADgBIABABIAAgBIABAEIABgBQAGACAGgDIADgBIACABIAEAAIAAABIADgBQABACAHAAQAFAAAEgCQAEACAIAAQAIABAEgCQAFACAEAAIAJgBIACgBIABAAIACAAIAFAAIACABIADABIACgBIAHABIACgCQADABACACQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIABgBIAEADIgBACIABAAIAAAAIADABIgBACIgCAAIgBgBQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIADABIAAACQABACAEAAIACAAIACACIAAACIgBgBQgFACgGgBIAAgBIgBABIgBABIAAAAIAEAHQgCAGgDADQACADAEAAIABgBIAAABIABAAIABAAIADAAIgEADIgGABQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABIADADIAAABQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgCgCgEAAIgFABIgDABIACABIAAAAQgFABgEACIgFAAQgGAAgHADIAAgBQgDACgGgBQgGAAgCABIAAABIgGgBIgDABIAGACIABAAIAAAAIgGAAQgEgBgBACIAAgBIgBgBIAAAAQghAGgcABQgdABgVAHQgVAGgNARQgMARgDAmQgBAEACAEIAEAHIBhghIBjgfIgCAAIAAAAIAFgBIADgBIABAAIABgBIADAAIAAAAIAEgBIAAgBIAEgBIAAABIACAAIAIgDIAJgBIAHgCIABgBIABABIAAgBIABAAIAEAAQAJAAAGgGIABAAQAEgCADAAIABABIABgBIAFABIAEACIgBACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIgBAAIAFgFIAHgHIAAgBIABAAIAIgJIgEAEQACgDAEgDIAGgIIACgBIAAgBIABAAIABgBIAAgBIABAAIABgCIABAAIACgCIAAgBIABABIAAgCIACgCIABgBIAHgHIALgLIAAgBIALgLIAKgLIAHgIIASgRIARgSQAJgIAAgDIABAAIAFgIIABAAIADgEIgEAEIgBABIgDAEIgBAAIAFgGIADgFIAAAAIABgBIAAgBIABAAIgBAEQAIgKAKgKIAggfIAEgBIAAgFIADAAIAJgHQAGgEAFAAIAFACIAFgCIAFADIABAAIgBACIgHABIAAABIgHAEIAKABIAGAAIAAgBIALABIAHAEIAFALQAAADAEAGIAJAMIAJAPIAAABIAEAKIAEAKIgCgBQABAPgIAYQgIAXgNAbIgZAxQgOAXgGAOIgMAUQgHAKgEAMIAAADIgCAEQAAADgCAEQgDAEAAADIAAADIgHAQIgBABIAAACIgBABIAAACIgBAAIgBACIAAACIgBADIgBACIAAABIgCADIgDAFIAAABIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAgBIgIAMIgHAJIgCACIAAgBIgCACIgBABIgCACIABgBIAAABIgBAAIgCADIABgCIABgCIABgDIABgBIAAgCIABAAIACgGIAAgBIgBAAIADgHIABgIIgCAAIABgBIgCAAIAAAEIABAAIABABIgBABIgBgBIgBABIAAACIABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAACIgBAAIgBAEIgDAFIAAABIgBAAIABgCIAAgBIgBAAIAAADIgCAGIgBAGIgBABIAAgDIABgEIAAgCQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIgCADIABgCQACgGABgGIABgMIAAgBIgCAEIAAADIgBACIgBgEIAAAAIAAgBIAAAAIAAAAQAAgCACgDIgCAAIAAhYQgPAJgSAQQgTAPgXAWQgXAWgWAXQgXAYgUAYQgSAWgRAXQgQAXgIANQAvgJAugSQAxgUApgUIABABQAQgJARgGQAOgFAXgFIACABQACgCAHgCIAKgDIABAAIACgEIAFgKIAHgLIAEgFIAFgJQADgGACgBIAAgBIACAAIAAgCIABAAIAJgNIACgFIgBAAIAAgBIABAAIAAgBIAAgBIACABIAGgJQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAHgKIAGgJIABgCQAEAAACgDIAEgHIADgBIgBgDIAJgQIALgTIAJgSIALgPIAAgEIACAAIABAAIABgKQABgGAGAAIAAACIABACIACgDIgCABIADgEIACgEIAAgBIABAAIAGgOQAagbAVgmQATgkAWghIAAABIAEACIAAACIAFgFIAAgDIACgCIANgSIAFgGIABgCIAFgLIAAAAIgCABIgEgBIAAACIgFAHIAAAFIgDAAIAAgEIgEAJQgCADgDACIABgFQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIgCgBIAGgNIAEgBIgDAFIAAAEIACgBIACgIIAEAAIgCgFIgBAAIAIgCQAFAAAEgDIAAADIACgDIAKACIAAADIACgDIARABQAMABAEgCIAAgBIAFAAIgDABIADADIADgDIACADIAFgCIAOAFIABAAIAAACIAAgCQAFACADADQADADABAFIABARQAAAjgEArQgGAsgGAhIgQBNQgHAngFAiIAEgIIAAADIABACIgBAHIgBAKIgCAJIgCAEIgBAAIABgHIABgIIgCgGQgLBFgHBHIABgCIgDAXIAAgCIgCAOIABgBIgCAcIgDAWIAAgBIgCADIgGAjIgIAjIgCAHIgBAGIABACIAAAAIACADQgEAAgEAJIgIANIAAAAIgEACQgFgCgCAGIgDABgAFOERQgDAKgEAGIADgBIAAgFIAFgNQAEgKAAgEgAD8EXIABAAIAAgBgADmEMIAAABIABAAIADgBIgCAAIgCgBIAAAAgADuEMIABgDIgBAAgAozD9IABAAIABABIAAABIABgDIAAgBIAAAAgAotD1IABACQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIABACgAoXDzIADAAIgBgBgApGDpIACADIAJACIAAgEIgCgEIgDgBIgCACIgDAAIgBgCIAAAEgAnQDLIABABIABAAIAAAAIABAAIABgEIgCgBgAnIDHIABAAIAAgBIgBAAgAnTDDIABgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIAAACgAnKDCIADgDIgDgDIgIgUIgDAMIAAABIAAACIACAAIgBACIACABIAAACIAFgDgAtTC7IAAABIACgDIAAgBgAtOCmQgDACABADIgBAEIADAEIAAgCIABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgDIgDgFIAAAAgAtbCxIAAABIABAAIAAgCIgCAAgAtbCqIAAAEIACgBIACgDIABAAIACgCIgCgBIgCAAgAtkCsIABgCIgBAAgAtZCjIAAACIABgCIAAAAgAtoCXIgBABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAFAAAAgFIgCgFIAAgCgAmHCKIABAAIACgEIAAgBIgBAAIgCABIAAADIgBAAgABTCBIACgBIAAgCgABYBxIgBAFIAAACIACACIACgEQABgEABgBIAAgDIgBgCQgDACgBADgABMB2IABAAIABgBIgCgBIgBAAgABOBvIgBADIACAAIACgDQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBIgBgBIgDAAIgCADgAA3BhIABABIACgCIgDABgAA9A2IAAAAIAAgBgAAzA2IAIAAIAAgEIgIAEgAktAjIAAABIABABIACgBIAAgBIABgCIABAAIAAgCgABTAPIgCADIgCABIAAABIgEAGIACACIADgDIgBgDIAIgIIAJgOIAIgNQAEgGACAAIACgFIgCAAIgEAFIAAgBIgDADIgMARIAAABIgEAHIgEAGIgBAAgAkiAZIABABIAFgGIABAAIAAgCQgDABgEAGgAAQAWIAAABIACgCIAAgBgAATASIABAAIAAgBgAkXANIAAABIACAAIABgCQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAgAARALIABgBIgBgBgAkSAJIAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIAAgCgAncj6IgrAyIgtA0IgmArIgXAaQAVAkAVAeIAOATQACgGAFgHIAKgUIACAAIAAAAIAEgFIAAgCIgBACIgBgBIAFgJIAHgSIAJgWIgBADIABgBIABgCIgBAAIABgDQADgNAHgQQAFgNAFgPIABgGIADgFIACgEIAFgPIACgGIABgBIgBgBIAAAAIABgBIABgCIABgBIAAAAIABgBIACgHIABgGQABgEACAAIADgMIADgMIAAgDQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDIAAgBIABAAIABgCQAAAAgBAAIAAgBIABgEIACAAIAAgGIADgGIAAABIABAAIAAgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIACgFIAAgCIgKANgABwgJIAAACIABAAIAAgBIABgCgAF5gRQABABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIgBAEgAongXIAAACQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAAgCgAB7gsIAAAAIgEAGQgCADgCABQgBAFgDACIACACIAHgKIAIgLIABgDIgBACIgCADIAAgCgADggiIALAAIAAgHIACgDIAAAAIAAgCIABAAIAAAAIABAAIgBACIAAAAIAAAIQArgIALgOQAMgPAAgqIgBgiIgCgjgAobgkIAAAAIgBABIABABIABgBIAAgDgAohgiIABAAIAAAAIADgHIAAAAIABgCIgBACIgBAAgAoZgzIABAAIAAgCIgBACgAoShKIgBACIABABIAAgCIABgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAgAjOhJIACAAIABgBgAjChNIgBAAIgDADIABAAIAOgHIABgCIAAAAgAoMhZIAAAEIABgCIAAgCIABABIAAgCIgBAAgAoJhgIAAAAIABABIABgCgAoBhxIABAAIAAAAIgBgEgAoAh1IABAAIAAgCIgBAAgAn6iFIgBAAIAAADIgBABIABABIACgFIgBAAIABAAIgBgBIAAABgAiSiKIAAgCIgBgBgAh+iMIABAAIABABIAFgFQANgMAJgOgAiSiNIABABIABAAIgBgBIAAgBgAC7iUIgCACIgCADIAAACIAFgIIAAgBgAiBiNIASgSIgDABIgIAHIgHAHIgBABIAAAAIgBABIAAgBIAAACIABgBgAiMiPIABAAIABAAIAAgBIgCgBgAiIiQIADgBIgCAAIAAgBIgBAAgApykgQgfADgbACQgHAlgDAaIgKA+IAQAJQAmgfAfghQAhgjATguIg7AGgAC9iWIABgDIgBAAgAnvieIABABIABgDIgBgBgAnqisIAAABIABABIABgEIABAAIgBgBIAAAAgAnsisQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgBIgBAAgAhlivIAAABIAHgHIAAAAIgHAGgAnoixIABABIACgFgAnki5IgBADIABgCIAAAAIABgCIAAAAgAnni3IABAAIAAgBgAgljyIgFAGIACAAIgGAHIgKALIgeAgIABAAIAYgZIAFgGQAGgEAHgHIgGAIQAIgHAGgIIAFgGIgHAHIAdghIgLAJIgSATIgDADIAAgBIAEgFIAFgFIgBgBIgFAGgAi+i+IAAAAIABABIAAgCgAnjjFIgBAFIAAABIABAAIABgFIACgFIAAgBgAnfjLIAAABIABAAIAAgCgAnfjNIABABIAAgCgAhIjPIAAACIAAgBIACgBIABgBIgCAAgAhCjVIAAABIAEgDIgBAAgAEZkmQgDAEAAAEIgFAFQgBAHgDADQgFAFAAAGIgFAEIgBAEIgEAGIgGAJIgGALIgDAIIABACIAIgNQAEgFADgJQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIADgEIAAgCQAFgFADgIIAEgHIAMgWQADgFAAgCIgCgBIgFAIgAg9jZIAAABIAGgHIgBAAQgCAEgDACgAi/jeIAAAAIAEABIAAgBIgCgBIgBAAgAjEjdIABgBIABAAIgBgBIgBAAgAnWj5IAAACIABgBIAAgCgAASkkIgVAXIgGAIIAjglIgIAGgArNktIABABIAAgDIgBACgArck6IAKAAIgIgCgAE9k6IACgBIgDgBgAnEk9IAAADIABgEgAnJk9IABABIAAgCIgBgBgArXlFIgDAFIAHgHgAnPlKIAAgBIABAAIgBgBIgCAAgAkFlNIAAAAIAEgBIgGAAgAkAlOIABAAIADABIABgCIgDAAgAmXlPIAAACIAKgBIgHgBgAiylPIACAAIADABIABgBIgBgBIAGAAQADAAAEgBIABAAIgBgBIgEAAIgMAAQgFABgHAAIAAgBIgBACIAKgBgAjIlRIACABIAJAAIAAgBIgBgBIgBAAIgCAAIgHAAIAAAAgAjSlSIABABQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAIgBgCIgFAAIgDAAgAjzlRQAEAAAEgBIABAAIgCgBIgDAAQgIgBgFADIAFAAIAEAAgAjKlRIABgBIgDAAgAjalSIACAAIgBgBgAmSlWIgCAEIAGgEgAiklUIAFABIACgBIACAAIAAgBIABABIABgBIAAABIABgBIABAAIAFgBIgCgBIAAABQgGgBgGACQgEABgGAAIgBAAIgBgBIgBAAIgBAAIABACIADgBQADACADgCgAizlTIAEAAIABgBIgFAAgAiGlXQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIgBAAgAFKlZIACABIABgBIAAgBgAFPleIACABIgBgDgAFjljQACABADAAIAFABIAKgCIACgCIgDAAIgCgBIgRAAgAFallIgFAAIABADIAEAAIAFgCIAAACIABgBIAAgBIgBgCIgFABgAFSljIABABIACgCIAAgBIAAgBIgFgBIAAACIgBABIAAACIABgDIACgBgAGOljIAEAAIgBgEIgBAAIgFACQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBAAQACADAGAAgAFAlkIACgBIgBgBgAEpE+IABgBIABABgAFIE9IgBgEQABgDADgDQADgCAAgDIgBgCIAEAAIgCADIAAAAQAAAIgFAGgAD4E9IACgBIAAABgAD8EqIAAgBIABAAIAAABgADQEjIgDgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIADAAIgBACIAIABIADADIgFgBIgDABIgCgCIgBAAIAAADQgCgBgBgDgApOEiIAAAAIAAgBIABAAIAAACIgBgBgAo5EbIAEgCIAAACIAJgFIAEgBIgBACQgEABgCADIgDAAIgBAAIAAAAIABABIACACIgBAAIAAAAIgGAAIgDACgAn/EQIABAAIAAABIgBgBgAoMENIABAAIgBAAgAo3ENIAAgBIAAAAIAAABgAnkEHIABAAIAAAAgAnsEHIABAAIABgBIgCABgAo/EHIAAgBIABABgAnSEEIAFgHIAHgGIgFAKIgCABIgCADgAmKDzIAAgBIABABgAm5DyIABAAIAAABIgBgBgAnGDzIAEgIIAFgIQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAAAAIgDAIIgEAGIAAACIgCADgAGKDhIAAAAIAAAAgApXDgIgKgNIgDgIIgCgCIgCgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBAAIgCgDIABgEIgDgCIgEgFIgBgDIgDgCIgBgEIADAAIABgCQAFAFAEAHIAHAMIAAAAIAAAFQAEACAAABIACAGIAFADIAAAGIABAAIADADIAAABIADAFIgCAAgAFjDWIAEgKIAAAIIgDAGgAm5DTIABgCIgCgGIABgEIgDgCIAEgEIAAAFIACABIABAFIACAEIAAAEIgCACgAs6DLIABAAIAAABgAs6DFIgCABIgEgBIgFABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgFAGAAIAEgCIgCADIAJgIIACgBIAAACIgBACIgBACIAAACIAGgCIgIAJgAttDHIAAgBIABABgAswDBIABAAIgBAAgAsgC8IABAAIAAAAgAteC8IAAgBIAAAAIABABIgBAAgAs1C3IABgBIAAABgAsxCwIAAgBIAAABgAJyCrIgHgBIgKgEIAAAAIgPgGIgHgEIAAgCIACACIAAgBIAEACIAIADIABAAIgPgHIgBAAIAAAAIgBgCIACACIAAgBIgDgCIgIgKIAAgDIgIgFQAEgJADgJIAEgNIADgOQAAgFAEgLIABgBIAAgBIAAAAIAAgDIABAAIAAgBIABgBIABgDQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBIAAACIAAACIABAAIABgCQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgDIAFgaIAGgZIABAAIgBgBIABgCIAEgWIAJglIAAACIAAAEIACgJIgCACIAEgQQADgMgBgHQAEgLABgKQAAgJAFgMQgBgFADgFQADgGgBgFIAAgBIACgGQgBgIADgHQACgGABgJIAAAAIAFgWIAAABIABgFIAAgBIAAAAIAAgBIAAAAIACgDIgBAAIgBACIAKg4IAAgBIAAgBIAAgGIAAgHIAFgPQACgJADgFQAEgHAFgEIAIgHIAIgEIAAAAIAKgEIABgBIACAAIAAgBIAMgBIAFAAIASADQAKACAFAGQALAKABAWIAAAAQgFANgCAPIgBAEIgBAEIgCgDIgBAIQAAAEgCAEQACAEgCAEIgDAIQAAADgBAEIgBAIIAAgBIAAACQgKAxgLAsIgLAuIAEgSIgBAAIAAgCIgEANQgBAGAAAGIgCAGIgCALIgCAKIgBAFIABACIgCAHQAAAAAAAAQgBAAAAABQAAAAgBABQAAABAAAAIgCAFIgCAKIAAABIAAAAIgBABQgCAJAAADIAAABIACgGIABgBIgBADIgCAPIgBAAIAAADIgBAEIgBABIAAgCIAAAAIgBADIgBABIABgBIAAACIABgCIAAABIgBAFIgBAAIAAAIIgCAMIgDANIgCAJIgKA9QAWgGAUgJIApgTQAYgKASgGQAUgIAagEIAUgBQAJABAKAEQgXAMgZAMIghAOIgCABQgOADgTAKIggAQIgXALIgYAMIAAABIgZAJQgHACgEAFIgFADIgJADIgFAAIgCABIgGAAIgHgBgAJvCqIAIABIACAAIACgBIAAAAIgEAAIgHgBIgHgBIgCAAIAIACgAJPA/IAAABIAAAAIgBACIABgBIACgFIABgEIgCAGIAAgBgAK5AEIAAAAIABgCIgBAAgAK8gBIAAgBQAAAAAAABQAAAAAAAAQAAAAABgBQAAAAAAgBIAAgEIAAgCgAK5gEIAAABIABgCIAAgCgAJ3hoIAAgBIAAgCIAAADgAJ/iOIABgBIgBAAgAKUj4IgCAGQgBADAAADIAAABIABgEIABgFIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgBgCgAKVj+IAAACIABgEIABgIQgDAGABAEgAL1kAIABgFIAAgBQgBACAAAEgAL0kFIgBAEIAAABIACgHIAAgCgAtwCqIgCABIgBgFIgBgBIAAgHIAAgCIABgCIABADIAAAFIABgCIADADIABAFIgDAEgAmlCqIABAAIAAABgAmjCpIABAAIAAABgAmXCoIABAAIAAABgAt3CnIAAABIAAAAIAAgBgAt2CmIAAgBIABABgAt3CjIAAAAIAAACgAsaChIABAAIgBABgAt9CeIAAAAIAAABgAtyCXIAAAAIAAABIAAgBgAggCUIA4gdIgiAVQgQAJgFAAgABpCSIABgBIgDAAIgDgCIgFAAIgEgCIAEgCQABgDAHgDIACAAIAAgDIACABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAAADQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgGAGIAGgDIAGgDIABgBIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAADIgBABIgBAAIABAAIgBAAIADABIAEgBIgFAEIgEADgAmPCIIABAAIAAABgAByCCIAAAAIAAABIAAgBgAFsCCQACgGgBgFQgBgFABgFIACABIABALIAAACIgBAEIgBADgAB0CBIAAgBIABABgAB2B+IAAgBIABABgAB3B9IAAgBIAAAAIAAABgAFpBsIACACIgEAMQAAgGACgIgAt1B4IAAgBIABABgAA0BnIgMAIIgPAIIAbgQgAFqBlIABgLIACgLIAAAHIgBAHIAAADIABABIgCACIABAEIgCACgAMtBeIABAAIgBABIAAAAgAnsBXIAAAAIAAABgAnsBXIAAgBIABABgAnxBLIABAAIABAAIgCABgAnsBJIABgBIAAABgAlYBAIAAgBIABAAIAAABgAFwAxQAAgKACgHIAEgRIABgBIABAGQAAAGgDAEIABAEIABABIgEADIADABIgDAHIgBABIAAADgAIpAIIgBAHQAAAOgGAQgAJQAnIABAAIgBABgAk3AoIACgCIACgDIAAABIgEAEgAJWANIAAAAIAAABIAAAAgAAHAKIABAAIgBABgAJYAJIABgBIAAgBIAAABIABABIgBAAIgBABgAAGgBIABAAIAAABgAkNgCIABAAIgBABgAkNgHIgDAEIADgGIAHgIIAIgIQADgEACAAIABABIgBABQgGAEgCAFIgEAFIAAABIgCABIAAABQgEAFgFADgAragEIABgBIAAABgAkSgTIAAgCQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAgAkGgWIABgBIAAABgAkOgYIgBgBIABAAIABABgAAzgdIABAAIgBABgAj5geIAAgBIABABgAkLgfIABAAIgBABgAj6ghIABgBIAAABgAB4gmIABAAIgBABgAjrgqIAAgCIABACgAA6gtIABgBIAAABgADzgvIAAAAIAAABIAAgBgAA7gvIAAgCIABACgAA8g0IAAgBIABAAIAAABgALLg/IAAgBIABgCIAGgbIAAAGQgBALgFAKIgCAMQgBgDACgGgAjig3IAAgBQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAgAjag+IAAgBIABABgACPhXIAPgXIgJARIgJAPIAAACIgCAFIgCAAIgCACIABAEIgEACQADgJAJgPgAD0hDIABAAIAAABgAjlh/IABAAIAAABIgBgBgAn6iFgAiFiUIAAAAIAAABgAjzirIABgBIAAABgAjoisIABgBIgBABgAj3isIABAAIAAAAgAjeiuIAAgBIABAAIAAABgAi4i3IABAAIgBABgAjCi3IABAAIAAAAgAi3i+QAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAi7jAIABAAIAAABIgBgBgAnmjEIAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgCgAJOjIIABgBIAAABgAjTjmIAAgBIABABgAL0jyIAAgBIAAABgArNlPIAAgBIABABIAAABIgBgBgArolPIAAAAIgBABgAnTlUIABgCIAIAEIgDAAIgDgBIgBAAIgBAEgAq+lQIABAAIAAABIgBgBgAkVlSIAAgBIAAABIAAAAgAkTlTIABAAIgBABIAAgBgAkllUIABABIgBAAgAkOlUIABAAIAAABIgBgBgAJmlWIAAgDQgBgBAAgEIABgFIACgFIABABIAAAEIAAAJIgBACIABAEgAkMlUQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAAAgAqzlXIAEgCIASAAIgKABIgBABIgDABIgDgCIgBAEgAnZlWIgDgCIADgBIAHADgAjnlZIAAgBIAAAAIAAACgAjllZIAAgBIABABIgBAAgAmMlaIABgBIABABIgBAAgAmRlcIAAAAIAAABIAAgBgAmYlcIABABIAAAAIgBgBgABlliIgBgBIACABgAA+lmIAEgCIAAgBIAFgEIAFgCIACAAIgBAEIgLAHgAIRlrIABAAIgBABIgBACgAB0lrIgIgEIACAAIALACIAAACgABbltQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIARAAIAAADgAIrluIABAAIAAAAIgBAAgAJilvIgIgLIAAgDIABgBIAFAGQACAEABADIAAACgAJTlyIgBAAIACAAgAIol4IgBgBIACABg");
	this.shape.setTransform(89.4,38.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.recall, new cjs.Rectangle(0,0,178.9,76.6), null);


(lib.msg_shopnow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAFgDIAFgBIAHABIgBAQQgEgCgEAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape.setTransform(65.3,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAtIAAghQAAgGgCgDIgEgDIgFAAIgFAAIgEAEIgEAGIgBAHIAAAcIgPAAIAAhZIAPAAIAAAgIAAAKIAFgFIAFgEQAFgDAFAAQAGAAAEACQAEACACADQADADABAEIABAKIAAAjg");
	this.shape_1.setTransform(59.2,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape_2.setTransform(52.4,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfAsIAAg8IgbAxIgHAAIgbgxIgBAAIAAA8IgQAAIAAhXIATAAIAcA2IAeg2IASAAIAABXg");
	this.shape_3.setTransform(43.3,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape_4.setTransform(31,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAEgDIAGgBIAHABIgBAQQgEgCgEAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape_5.setTransform(25.6,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAtIAAghQAAgGgDgDIgDgDIgFAAIgFAAIgFAEIgCAGIgBAHIAAAcIgQAAIAAhZIAQAAIAAAgIAAAKIAEgFIAFgEQAFgDAFAAQAGAAADACQAEACADADQACADABAEIABAKIAAAjg");
	this.shape_6.setTransform(19.4,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAeQgDgCgDgCIgEgGQgCgEAAgEQAAgFACgDQABgEAEgBQADgCAEgBIAKgBIAPABIAAgDQAAgFgDgCQgDgDgGAAIgLABQgHACgEACIAAgOIALgCIANgBQAGAAAGABQAEACAEAEQADADABAEQACAEAAAFIAAAjIgPAAIgBgIIgEAEIgFADQgEADgGAAIgIgBgAgHAGIgDACIgBAEQAAAEADACQACACAFABIAEgBIAEgDIAEgFQACgDAAgEIgMgBQgFAAgDACg");
	this.shape_7.setTransform(12.4,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAsIAAgsIgLAAIAAgMIALAAIAAgIIABgKIADgHQACgDADgCQAEgBAGAAIALABIAAANIgHgBQgEAAgCADQgCACAAAGIAAAHIANAAIAAAMIgNAAIAAAsg");
	this.shape_8.setTransform(7.1,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIAAAKQAEgGADgCIAEgDIAGgBIAHABIgBAQQgDgCgFAAQgEAAgDACIgEADIgCAFIgBAGIAAAcg");
	this.shape_9.setTransform(2.7,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAsIAAhXIA8AAIAAAPIgsAAIAAAVIAoAAIAAAOIgoAAIAAAWIAtAAIAAAPg");
	this.shape_10.setTransform(-3.7,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.msg_shopnow, new cjs.Rectangle(-9.8,0,79.3,18.4), null);


(lib.logo_stadium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACgFlIk/AAIhEAAQgXgBgWgDQgWgCgXgGQgngJgjgRQgkgSgfgZQgqgigegrQgdgsgQgyQgPgzgBg2QABg1APgzQAQgyAdgsQAegrAqgiQAfgZAkgSQAjgRAngJQAXgGAWgCQAWgDAXgBIBEAAIE/AAIBEAAQAtABAtALQBOASA/AzQAqAiAeArQAdAsAQAyQAQAzAAA1QAAA2gQAyQgQAzgdAsQgeArgqAiQg/AzhOASQgtALgtABIgtAAIgXAAgAjdh2QgOAAgOACQgdAFgXAQQgZARgNAZQgNAZAAAcQAAAdANAZQANAZAYARQAYAQAdAFIAcACIAcAAIGDAAIAcAAIAdgCQAcgFAYgQQAYgRANgZQANgZAAgdQAAgcgNgZQgNgZgYgRQgYgQgcgFQgPgCgOAAIgcAAImDAAIgOAAIgOAAg");
	this.shape.setTransform(81,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(21.9,0,118.4,71.5), null);


(lib.logo_rifttouch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABMC2IAAiTQAAgQgDgMQgEgMgGgKQgIgJgLgFQgLgFgRAAQgRAAgRAGQgRAHgMAMQgNAMgHASQgIAUAAAYIAAB1IgaAAIAAlrIAaAAIAACBIgBAyIACAAIANgVQAJgKALgHQAMgJAOgEQAPgFARABQAWAAARAGQAPAHALANQAKANAFARQAEAOABAVIAACUg");
	this.shape.setTransform(185.9,165.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXB0QgYgHgQgPQgSgPgIgXQgGgQgDgoQAAgVAJgiQAIgXASgPQAQgPAYgIQAWgGAbAAQARAAATADQAVAFARAIIgCAZQgRgJgWgEQgTgFgPAAQgWAAgRAGQgSAGgNAMQgNAMgIATQgHATAAAZQAAAZAHAUQAIASANANQANAMASAGQARAGAWAAQAPAAATgFQAWgFARgJIACAZQgQAJgWAEQgTAEgRAAQgbABgWgIg");
	this.shape_1.setTransform(159.5,172.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag2BxQgQgHgKgNQgKgNgFgQQgEgRAAgSIAAiVIAZAAIAACQQAAAQAEAMQADAOAHAKQAHAKAMAFQAMAGARAAQARAAAQgHQAQgHAMgOQAMgOAHgTQAHgWAAgZIAAhtIAZAAIAADqIgYAAIAAgyIgBAAQgQAcgPAKQgMAJgOAEQgPAFgSABQgXgBgQgHg");
	this.shape_2.setTransform(133.9,172.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyByQgXgJgQgSQgPgQgJgXQgIgXAAgZQAAgYAIgXQAJgWAPgRQAQgSAXgJQAXgKAbABQAcgBAXAKQAWAJARASQAPARAIAWQAJAXAAAYQAAAZgJAXQgIAXgPAQQgRASgWAJQgXAKgcgBQgbABgXgKgAgqhbQgSAHgMAPQgMAOgGASQgFARAAAUQAAAUAFASQAGASAMAOQAMAOASAHQATAJAXAAQAYAAATgJQASgHAMgOQALgOAGgSQAGgSAAgUQAAgUgGgRQgGgSgLgOQgMgPgSgHQgTgIgYAAQgXAAgTAIg");
	this.shape_3.setTransform(104.1,172.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABCVQgKgGgFgOQgFgMgCgVIgBgwIAAhsIgwAAIAAgYIAwAAIAAhHIAYAAIAABHIBFAAIAAAYIhFAAIAAB7QAAApAEAMQAEAIAGAEQAGAFALAAQAVAAASgGIAAAXQgRAGgaAAQgRAAgLgHg");
	this.shape_4.setTransform(81.7,168.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABCVQgKgGgFgOQgFgMgCgVIgBgwIAAhsIgwAAIAAgYIAwAAIAAhHIAYAAIAABHIBFAAIgBAYIhEAAIAAB7QAAApAEAMQADAIAHAEQAGAFALAAQAVAAARgGIAAAXQgPAGgaAAQgTAAgKgHg");
	this.shape_5.setTransform(27,168.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVC1IAAjTIgwAAIAAgXIAwAAIAAgzQAAgVAEgQQADgOAIgJQAGgJALgDQAKgEANAAQAUAAAQAEIAAAZQgPgFgUAAQgSAAgHAMQgHALAAAdIAAAzIA2AAIgBAXIg1AAIAADTg");
	this.shape_6.setTransform(11.6,165.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMCsIAAjqIAZAAIAADqgAgPiIQgEgFAAgKQgBgIAFgGQAGgGAJgBQAKABAFAGQAFAGAAAIQAAAKgFAFQgFAHgKAAQgJgBgGgGg");
	this.shape_7.setTransform(-2.8,166.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag7B4IAAjqIAaAAIAAAyIABAAQAMgXAQgOQAJgJALgEQANgGANABIASACIgBAbQgKgDgLAAQgQAAgNAHQgMAIgKAOQgJANgGARQgFASAAATIAAB1g");
	this.shape_8.setTransform(-16.8,171.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNBTIAAhNIhFAAIAAgXIBFAAIAAhBIAWAAIAABBIBKAAIAAAXIhKAAIAABNg");
	this.shape_9.setTransform(55.1,167.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(-28.8,134.9,231.2,62.8), null);


(lib.logo_oculus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKJDMQgmgLgfgaIAigtQATAPAWAIQAPAFAPADQAOACAPgCQAKgCAJgEQAIgEAFgFQAEgGABgGQAAgIgEgGQgEgIgIgDQgJgGgKgCIgZgHQgTgDgTgHQgTgGgPgNQgPgMgFgSQgGgUAFgUQAFgPAKgNQAPgSAVgIQAQgHARgDQAWgCAWADQAnAGAhAXIggAsQgUgMgYgFQgPgEgQACQgIABgHACQgGADgEADQgEADgCAEQgDAEAAADQgBAIAFAGQAGAHAIADIAQAGIASADIAVAFIAVAIQASAGAPANQAPAMAIATQAFASgCARQgDAWgOASQgKAMgOAJQgUALgXAFQgRACgRAAQgWgBgVgGgAlhDSQgVAAgTgIQgUgGgRgMQgQgMgNgSQgLgRgHgUQgGgTgBgWQgBgUAEgUQAFgVAJgRQAUgmAngSQATgJAUgDQAVgDAVACQAqAEAhAaIgnAwQgTgMgXgCQgNgCgNACQgKACgJAEQgWAIgMAVQgFALgCALQgCAMAAALQABALAEALQADALAHAKQAOATAWAHQALAEAMABQALgBALgCQAXgFASgQIAsAtQgPAPgSAKQgSAKgVAFQgQADgRAAIgIgBgArUDHQgagLgUgUQgUgUgJgaQgKgaAAgcQAAgcAKgaQAKgYAUgVQAUgTAZgKQAagKAcAAQAcAAAaAKQAZAKAUAUQAUAVAKAYQAKAaAAAcQAAAcgLAaQgJAagUAUQgUAVgaAKQgaAKgcAAQgcAAgZgLgAqugGQgHABgHADIgOAGQgGADgFAGIgJALIgHAOIgEAOIgCAQQAAAJACAIIAEAPQADAHAEAGIAJALIALAKQAGAEAHACQAHADAIACQAHABAIABIAQgCIAPgEIANgHIALgJIAJgLIAHgNIAEgQQACgHAAgJIgCgQIgEgPIgHgOIgJgLQgEgFgGgEIgNgGQgIgDgHgBIgQgCQgIAAgIACgAFxDQQgcgDgXgOQgWgPgOgaQgGgNgDgNQgDgNgBgNIgBgXIgBggIAAgWIAAgfIAAgfIAAgXIBAAAIAAA/IAAAnIABAXQAAATADARQACAOAHAMQAJAPAOAGQAOAHAQgBQARAAAOgGQAOgIAJgOQAIgLACgNIACgOIAAgXIAAgSIAAgdIAAgfIAAgdIAAgSIBAAAIAAELIg4AAIgBgaQgKAJgMAHQgNAHgMADQgTAGgUAAIgPgBgAhkDQQgcgDgWgOQgXgPgNgaQgGgNgDgNQgDgNgBgNIgCgXIAAggIAAgWIAAgfIAAgfIAAgXIBAAAIAAA/IAAAnIAAAXQAAATADARQADAOAGAMQAJAPAPAGQAOAHAQgBQAQAAAPgGQAOgIAJgOQAHgLACgNIACgOIABgXIAAgSIAAgdIAAgfIAAgdIAAgSIA/AAIAAELIg4AAIgCgaQgJAJgMAHQgMAHgNADQgTAGgTAAIgQgBgACFDLIAAmdIBAAAIAAGdg");
	this.shape.setTransform(81,110.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(0,89.3,162.1,42.2), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ap5AuIgJgCIABgFIAIACIAJABIAIgBIAGgEQACgCABgDQACgEAAgFIAAgJIAAAAIgIAIIgFACIgGAAQgEAAgEgBQgEgCgDgDQgDgDgCgFQgCgEAAgGQAAgEACgFQACgEADgDQADgDAEgBQAEgCAEAAIAGABIAFABIAEADIAEAFIAAAAIAAgJIAGAAIAAAsQAAAEgCAGIgCAFIgDADQgEADgEABQgFACgFAAIgJgBgAp2gQIgFAEQgCACgCADIgBAHIABAIIAEAGQACADADAAIAHACIAHgCQADAAADgDIAEgGQABgEAAgEQAAgCgBgDQgBgEgDgCIgGgFQgDgBgEAAIgHABgAmtAtIAAhCIAFAAIAAAJIABAAIADgFIAFgDIAFgBIAFgBQAFAAAEACQAEABADADQADADACAEQABAFAAAEQAAAGgBAEQgCAFgDADQgDADgEACQgEABgFAAIgGAAIgFgCIgEgEIgDgEIgBAAIABAfgAmdgQIgGAFQgCACgBAEQgCADAAACQAAAEACAEIAEAGQACADADAAIAHACQAEAAADgCQAEAAACgDQACgDABgDIABgIIgBgHQgBgDgCgCQgCgDgEgBIgHgBQgEAAgDABgAniAXIgLgEIABgFIALADIAJACIAHgBIAGgDIAEgEQABgCAAgEIgBgFIgFgDIgGgEIgOgEIgGgDQgDgDgCgDQgBgDAAgEQAAgFABgEQACgDADgCQAEgDAEgBIAIgBIAKABIALAGIgBAFIgKgEIgKgCIgGABIgFACIgEAEIgBAFQAAAEABADIAFADQADADAKACIAHACIAGADIAEAGQACACAAAFQAAAEgCAFQgCADgDACIgIAFIgJAAQgFAAgFgBgAM1AXQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAgALHAXQgEgBgEgEQgDgDgBgEQgCgDAAgIIACgKQABgDAEgEIAHgEQADgBAFAAQAEAAAEABQAEABADADIAEAHQABAFAAAFIAAADIgkAAQAAAEABADIAEAFIAGADIAHABIAIgBIAIgDIAAAGIgIADIgIAAIgKgBgALdgBIgBgHIgDgFQgBgCgDgBIgGgBIgGABQgDABgCACIgEAEQgBADAAAFIAeAAIAAAAgAKdAXQgDgCgBgCIgBgGIAAgdIgKAAIABgFIAJAAIAAgOIAFAAIAAAOIANAAIAAAFIgNAAIAAAWIABAKIACACIADABIAHgBIAAAFIgIABIgFgBgAJDAXIgFgCIgEgFQgBgDAAgEQAAgDABgDQABgDADgBIAFgCIAHAAIARABIAAgDIgBgGIgCgDIgFgDIgFAAIgJABIgIACIAAgFIAIgCIAJgBIAIABIAGADIAEAFQABADAAAFIAAAcIgGAAIAAgJIgDAEIgFAEIgFACIgFAAIgGgBgAJGABIgEACIgCACIgBAEIABAFQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAAAIAEACIAEABIAGgBIAGgDIAEgGQABgDAAgFIgQgBgAHfAXQgCgCgBgCIgCgGIAAgdIgJAAIAAgFIAJAAIAAgOIAGAAIAAAOIANAAIAAAFIgNAAIAAAWQAAAHABADIABACIAEABIAHgBIAAAFIgIABIgGgBgAFqAXQgEgBgEgEQgDgDgBgEQgCgDAAgIIACgKQABgDAEgEIAHgEQADgBAFAAQAEAAAEABQAEABADADIAEAHQABAFAAAFIAAADIgkAAQAAAEABADIAEAFIAGADIAHABIAIgBIAIgDIAAAGIgIADIgIAAIgKgBgAGAgBIgBgHIgDgFQgBgCgDgBIgGgBIgGABQgDABgCACIgEAEQgBADAAAFIAeAAIAAAAgAEjAXQgCgCgBgCIgCgGIAAgdIgJAAIAAgFIAJAAIAAgOIAGAAIAAAOIANAAIAAAFIgNAAIAAAWIABAKIABACIAEABIAHgBIAAAFIgIABIgGgBgAC1AXQgFgBgDgEQgDgDgCgEIgCgLIACgKQACgDADgEQADgDAFgBQAEgBAGAAIAHABIAHACIAAAGQgEgCgEgBIgGgBIgIABQgDABgDADQgCACgBADQgCAEAAADQAAAFACADQABAEACADIAGADIAIABIAGgBIAIgDIAAAGIgHADIgHAAIgKgBgAgEAXQgEgCgDgDQgDgDgCgFQgCgEAAgGQAAgEACgFQACgEADgDQADgDAEgBQAEgCADAAIAGABIAFABIAIAIIAAAAIAAgiIAGAAIAABFIgGAAIAAgJIAAAAIgEAEIgEAEIgFACIgGAAQgDAAgEgBgAgBgQQgEABgCADQgCACgBADQgCAEAAADQAAAEACAEQABADACADQACADAEAAQACACADAAQAEAAAEgCIAFgDQADgDABgEIABgHQAAgDgBgDIgEgGQgCgDgEgBIgHgBIgFABgAiYAXIgHgCIABgGIAHADIAIABIAFgBIAEgBIACgCIACgFIgCgEIgDgBIgJgEQgHgBgDgBIgDgDQgBgCAAgEIABgGIAEgEIAFgBIAGgBIAIABIAHACIgBAGIgHgDIgHgBQgFAAgCABIgDADIAAADIABAEIADACIAJACIAGACIAEABIADAEIABAFQAAAEgBACQgCADgCACIgGADIgHAAIgJgBgAjqAXQgEgBgEgEQgDgDgBgEQgCgDAAgIIACgKQABgDAEgEIAHgEQADgBAFAAQAEAAAEABQAEABADADIAEAHQABAFAAAFIAAADIgkAAQAAAEABADIAEAFIAGADIAHABIAIgBIAIgDIAAAGIgIADIgIAAIgKgBgAjUgBIgBgHIgDgFQgBgCgDgBIgGgBIgGABQgDABgCACIgEAEQgBADAAAFIAeAAIAAAAgAlCAXQgEgBgEgEQgDgDgBgEQgCgDAAgIIACgKQABgDAEgEIAHgEQADgBAFAAQAEAAAEABQAEABADADIAEAHQABAFAAAFIAAADIgkAAQAAAEABADIAEAFIAGADIAHABIAIgBIAIgDIAAAGIgIADIgIAAIgKgBgAksgBIgBgHIgDgFQgBgCgDgBIgGgBIgGABQgDABgCACIgEAEQgBADAAAFIAeAAIAAAAgAo2AXQgFgBgDgEQgDgDgCgEQgBgDgBgIIACgKQACgDADgEIAHgEQAEgBAEAAQAFAAAEABQADABADADIAEAHQACAFAAAFIAAADIglAAQAAAEACADIAEAFIAFADIAHABIAIgBIAIgDIABAGIgIADIgJAAIgJgBgAoggBIgBgHIgDgFQgCgCgDgBIgGgBIgFABQgDABgCACIgEAEQgCADAAAFIAfAAIAAAAgAMYAXIAAgbIAAgGIgCgDIgEgDIgFgBIgGABIgGAEIgEAFIgBAHIAAAXIgGAAIAAgsIAGAAIAAAJIAAAAIADgEIAEgDIAEgCIAHgBQAEAAADABIAFAEQACACABAEIABAHIAAAbgAJ3AXIAAhFIAGAAIAABFgAIgAXIAAgbIgBgGIgCgDIgDgDIgGgBIgGABIgFAEIgEAFIgBAHIAAAXIgGAAIAAhFIAGAAIgBAiIABAAIACgEIAEgDIAFgCIAGgBQAEAAAEABIAFAEQACACAAAEIABAHIAAAbgAG7AXIAAgbIAAgGIgCgDIgEgDIgFgBIgGABIgGAEIgEAFIgBAHIAAAXIgGAAIAAgsIAGAAIAAAJIAAAAIADgEIAEgDIAEgCIAHgBQAEAAADABIAFAEQACACABAEIABAHIAAAbgAECAXIAAgbIgBgGIgCgDIgDgDIgGgBIgGABIgFAEIgEAFIgBAHIAAAXIgGAAIAAhFIAGAAIgBAiIABAAIACgEIAEgDIAFgCIAGgBQAEAAAEABIAFAEQACACAAAEIABAHIAAAbgACNAXIAAgsIAGAAIAAAsgABwAXIAAgbIAAgGIgCgDIgEgDIgFgBIgGABIgGAEIgEAFIgBAHIAAAXIgGAAIAAgsIAGAAIAAAJIAAAAIADgEIAEgDIAEgCIAHgBQAEAAADABIAFAEQACACABAEIABAHIAAAbgAgqAXIAAgbIgBgGIgCgDIgDgDIgGgBIgGABIgFAEIgEAFIgBAHIAAAXIgGAAIAAgsIAFAAIAAAJIABAAIACgEIAEgDIAFgCIAGgBQAEAAAEABIAFAEQACACAAAEIABAHIAAAbgAhpAXIAAgsIAGAAIAAAsgAkSAXIAAhFIAGAAIAABFgAlqAXIAAgsIAGAAIAAAsgAqhAXIAAgsIAGAAIAAAsgAq9AXIAAgbIAAgGIgCgDIgEgDIgFgBIgGABIgGAEIgEAFIgBAHIAAAXIgGAAIAAgsIAGAAIAAAJIAAAAIADgEIAEgDIAEgCIAHgBQAEAAADABIAFAEQACACABAEIABAHIAAAbgAr7AXIAAgsIAGAAIAAAsgAs8AXIAAhDIAqAAIAAAFIgkAAIAAAaIAiAAIAAAFIgiAAIAAAZIAlAAIAAAGgACMgjIgBgDIABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAAAAAQABAAAAAAQAAABABAAIABADIgBADQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAhpgjIgBgDIABgDQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIABADIgBADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAgAlrgjIgBgDIABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAAAAAQABAAAAAAQAAABABAAIABADIgBADQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAqhgjIgBgDIABgDQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQAAAAABAAQAAABAAAAIABADIgBADQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAgAr8gjIgBgDIABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAIABADIgBADQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape.setTransform(145,-29);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(62.2,-33.7,165.8,9.4), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiAsIgIgBIABgFIAHABIAJABIAHgBIAGgDQADgCAAgDQACgEAAgFIAAgIIAAAAIgHAHIgFACIgGAAQgEAAgEgBQgDgCgDgDQgDgDgCgEQgBgEgBgFQABgFABgEQACgEADgDIAGgFQAEgBAEAAIAGABIAFABIADADIAEAFIAAAAIAAgJIAFAAIAAAqIgBAKIgCAEIgDAEQgDACgFACIgJABIgJgBgAgegPQgDABgDADIgDAFIgBAHIABAHIADAGIAGADIAGABIAHgBIAGgEIADgFQABgDAAgEIgBgGQgBgDgCgDQgCgCgEgCQgDgBgEAAQgDAAgDABgAHdAWIgCgDQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAIADABQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABIgBADIgDABQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAHDAWIgDgDIgBgHIAAgbIgJAAIAAgFIAJAAIAAgNIAFAAIAAANIANAAIgBAFIgMAAIAAAVIABAJIACADIACAAIAIgBIAAAFIgJABIgFgBgAF7AWQgEgBgDgDQgEgDgBgEIgBgKIABgKIAFgHQACgCAEgCQAEgBAEAAQAFAAADABIAHAEIADAHQACAFAAAEIAAADIgjAAQAAAEACADIADAFIAGADIAGAAIAIAAIAHgDIABAFIgIADIgIAAIgJgBgAGRgBIgBgGIgEgFQgBgCgDgBIgGgBIgFABIgFACIgDAFQgCADAAAEIAeAAIAAAAgADuAWQgEgBgDgDQgDgDgCgEIgCgKIACgKIAFgHQADgCAEgCQADgBAFAAQAEAAADABIAGAEIAFAHQABAFAAAEIAAADIgjAAQAAAEACADIADAFIAFADIAIAAIAHAAIAHgDIABAFIgHADIgIAAIgKgBgAEDgBIgBgGIgCgFQgCgCgDgBIgFgBIgGABIgFACIgDAFQgCADAAAEIAdAAIAAAAgADKAWIgDgDIgCgHIAAgbIgJAAIAAgFIAJAAIAAgNIAGAAIAAANIAMAAIAAAFIgMAAIAAAVIABAJIABADIADAAIAHgBIAAAFIgIABIgFgBgAA7AWQgFgBgDgDQgDgDgCgEIgBgKIABgKIAGgHQACgCAEgCQADgBAFAAQAEAAAEABIAGAEIAEAHQABAFABAEIAAADIgjAAQgBAEACADIADAFIAGADIAHAAIAIAAIAHgDIABAFIgIADIgIAAIgJgBgABQgBIgBgGIgDgFQgCgCgDgBIgFgBIgGABIgFACIgDAFQgCADABAEIAdAAIAAAAgAhUAWQgFgBgDgDQgDgDgCgEIgBgKIABgKIAFgHQADgCAEgCQADgBAFAAQAEAAAEABIAGAEIAEAHQABAFABAEIAAADIgjAAQgBAEACADIADAFIAGADIAHAAIAIAAIAHgDIABAFIgIADIgIAAIgJgBgAg/gBIgBgGIgDgFQgCgCgDgBIgFgBIgGABIgFACIgDAFQgCADABAEIAdAAIAAAAgAiJAXIgEgCIgEgDIgDgEIgBAAIAAAIIgFAAIAAhCIAFAAIAAAhIABAAIACgEIAEgDIAFgCIAGgBQAEAAAFABQADACADADQADADACAEQABAEAAAFQAAAFgBAEQgCAEgDADQgDADgDACQgFABgEAAIgGAAgAiKgPQgDABgDADQgDACAAADQgCAEAAADIABAGIADAGQADADADABQADABAFAAIAFgBIAGgDIADgGIABgHIgBgHIgDgFQgDgDgDgBIgFgBQgFAAgCABgAkFAWQgDgBgCgDIgDgFIgBgHIAAgaIAGAAIAAAZIABAFIABAFIAEACIAFABIAGgBIAFgDQADgDABgEIABgHIAAgUIAFAAIAAAqIgFAAIAAgJIAAAAIgGAHIgFACIgGABQgEAAgDgBgAmUAWQgDgBgBgDIgDgFIgBgHIAAgaIAFAAIAAAZIABAFIACAFIAEACIAEABIAHgBIAEgDQADgDABgEIABgHIAAgUIAGAAIAAAqIgGAAIAAgJIAAAAIgGAHIgEACIgHABQgDAAgEgBgAGkAWIAAgqIAGAAIAAAqgAEwAWIAAgEIAqg3IgpAAIAAgFIAwAAIAAAFIgpA2IAqAAIAAAFgACUAWIAAgDIAagiIgZAAIAAgFIAgAAIAAADIgZAiIAbAAIAAAFgACDAWIAAgaIAAgFIgCgEIgEgCIgEgBQgEAAgCABIgGADQgCADgCADQgBADAAAEIAAAVIgGAAIAAgqIAGAAIAAAJIADgEIAEgDIAEgCIAGgBQAEAAADABIAFAEQACACAAADIABAHIAAAagAANAWIAAgqIAFAAIAAAJIAAAAQACgEAEgDIADgCIAFgBIADAAIAAAGIgEgBIgFACIgEAEIgDAFIgBAGIAAAVgAjYAWIAAgqIAGAAIAAAJIAAAAQACgEADgDIAEgCIAEgBIAEAAIAAAGIgFgBIgEACIgFAEIgCAFIgBAGIAAAVgAknAWIAAglIgJAAIAAgFIAJAAIAAgJIAAgHIADgEIADgDIAFAAIAGABIAAAFIgGgBQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBABIgBAHIAAAJIAKAAIAAAFIgKAAIAAAlgAlnAWIAAgqIAGAAIAAAJIAAAAQACgEAEgDIAEgCIAEgBIAEAAIgBAGIgEgBIgFACIgEAEIgDAFIgBAGIAAAVgAm0AWIgqg3IgBAAIAAA3IgFAAIAAhAIAGAAIArA4IAAAAIAAg4IAFAAIAABAgAj1gfQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAIAEACIABADQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIgEACQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAkHgfIgBgDIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIABADQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAGkghQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgDIADgBIADABIABADIgBADQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape.setTransform(35.8,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(-12.7,3.3,97,9), null);


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


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AANC1IAAhDIigAAIAAhGIChjgIBRAAIAADgIA1AAIgCBGIgzAAIAABDgAg9AsIBKAAIAAhoIgBAAg");
	this.shape.setTransform(34.9,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANC1IAAhDIigAAIAAhGIChjgIBRAAIAADgIA1AAIgCBGIgzAAIAABDgAg9AsIBKAAIAAhoIgBAAg");
	this.shape_1.setTransform(66.1,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDBgQgPgEgLgJQgMgIgIgNQgFgJgHgWIgVAAIACgVIAQAAIAAgKIAAgJIgSAAIACgVIATAAQADgMAJgTQAIgMAMgJQAMgJAPgEQANgEASAAQANAAAOADQAMACAPAGIgCAhQgOgGgMgCQgOgDgMAAQgKAAgJACQgIACgGAFQgHAEgFAHQgFAHgDAJIBbAAIgFAVIhaAAIAAAJIAAAKIBWAAIgEAVIhOAAQADAJAGAHQAFAHAGAEQAGAFAIACQAJACAKAAQAMAAAOgDQAMgDAOgFIACAhQgPAGgMADQgOACgNAAQgSAAgOgEg");
	this.shape_2.setTransform(117.8,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhRC5QAVgSAlgoQAZgfAVgiQgVAFgZAAQgYAAgWgJQgWgJgQgPQgQgQgJgVQgJgWAAgaQAAgUALgkQAHgQAXgbQATgRAagKQARgFAngEQAWAAAlAKQAaALASASQATASAJAXQAKAYAAAbQAAAcgKAgQgKAfgSAiQgRAhgWAeQgXAfgZAXgAgWhsQgLAFgIAHQgIAJgEAKQgEAKAAAMQAAAMAEAKQAFALAHAIQAIAIALAFQALADAMAAQAOAAALgDQAKgFAIgIQAIgIAEgLQAEgKAAgMQAAgMgEgKQgEgKgIgJQgIgHgKgFQgLgFgOAAQgMAAgLAFg");
	this.shape_3.setTransform(92.7,30.7);

	this.instance = new lib.legal_limitedtime();
	this.instance.parent = this;
	this.instance.setTransform(66,58.3,1.112,1.112,0,0,0,37.6,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(10.1,-0.9,119.7,65.1), null);


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
(lib.oculus_robo_300x250_DE = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 19 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("A7ZCcIAAk3MA20AAAIAAE3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:154.6,y:19.7}).wait(87).to({graphics:null,x:0,y:0}).wait(62));

	// Layer 22
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(147.2,41.1,1.122,1.122,0,0,0,0.1,0.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({y:21.1},9).wait(74).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1.6,scaleY:1.6,x:144.1,y:-2.2},25,cjs.Ease.get(-1)).to({regX:0.1,regY:0.1,scaleX:2.55,scaleY:2.55,x:143.7,y:-40.6,alpha:0},15).to({_off:true},1).wait(20));

	// Layer 21 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("A7ZBwIAAjfMA20AAAIAADfg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:154.6,y:46.3}).wait(87).to({graphics:null,x:0,y:0}).wait(62));

	// Layer 23
	this.instance_1 = new lib.text2_mc("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(147.2,65.8,1.122,1.122,0,0,0,0.1,0.1);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({_off:false},0).to({y:45.8},9).wait(69).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1.6,scaleY:1.6,x:144.1,y:33.7},25,cjs.Ease.get(-1)).to({regX:0.1,regY:0.1,scaleX:2.55,scaleY:2.55,x:143.7,y:16.5,alpha:0},15).to({_off:true},1).wait(20));

	// Layer 1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("A7ZBmIAAjLMA20AAAIAADLg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:154.6,y:71.8}).wait(87).to({graphics:null,x:0,y:0}).wait(62));

	// Layer 2
	this.instance_2 = new lib.text3_mc("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(232.5,92.7,1.122,1.122,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({y:72.7},9).wait(64).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1.6,scaleY:1.6,x:265.5,y:71.9},25,cjs.Ease.get(-1)).to({regY:0.1,scaleX:2.55,scaleY:2.55,x:337,y:77.4,alpha:0},15).to({_off:true},1).wait(20));

	// Layer 24
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0)"],[0,0.686],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape.setTransform(151.6,63);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.071)"],[0,0.671],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_1.setTransform(151.6,63);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.141)"],[0,0.655],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_2.setTransform(151.6,63);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.212)"],[0,0.639],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_3.setTransform(151.6,63);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.282)"],[0,0.624],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_4.setTransform(151.6,63);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.353)"],[0,0.608],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_5.setTransform(151.6,63);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.424)"],[0,0.592],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_6.setTransform(151.6,63);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.494)"],[0,0.573],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_7.setTransform(151.6,63);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.565)"],[0,0.557],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_8.setTransform(151.6,63);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.635)"],[0,0.541],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_9.setTransform(151.6,63);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.706)"],[0,0.525],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_10.setTransform(151.6,63);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.776)"],[0,0.51],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_11.setTransform(151.6,63);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.847)"],[0,0.494],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_12.setTransform(151.6,63);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.804)"],[0,0.506],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_13.setTransform(151.6,63);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.757)"],[0,0.514],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_14.setTransform(151.6,63);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.714)"],[0,0.525],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_15.setTransform(151.6,63);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.671)"],[0,0.533],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_16.setTransform(151.6,63);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.624)"],[0,0.545],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_17.setTransform(151.6,63);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.58)"],[0,0.553],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_18.setTransform(151.6,63);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.533)"],[0,0.565],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_19.setTransform(151.6,63);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.49)"],[0,0.576],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_20.setTransform(151.6,63);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.447)"],[0,0.584],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_21.setTransform(151.6,63);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.4)"],[0,0.596],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_22.setTransform(151.6,63);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.357)"],[0,0.604],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_23.setTransform(151.6,63);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.314)"],[0,0.616],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_24.setTransform(151.6,63);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.267)"],[0,0.627],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_25.setTransform(151.6,63);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.224)"],[0,0.635],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_26.setTransform(151.6,63);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.176)"],[0,0.647],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_27.setTransform(151.6,63);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.133)"],[0,0.655],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_28.setTransform(151.6,63);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.09)"],[0,0.667],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_29.setTransform(151.6,63);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.043)"],[0,0.675],0,63,0,-63).s().p("A3lJ2IAAzrMAvLAAAIAATrg");
	this.shape_30.setTransform(151.6,63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},52).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},93).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(16));

	// star trek
	this.instance_3 = new lib.game_startrek();
	this.instance_3.parent = this;
	this.instance_3.setTransform(149.3,126.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:342.4,y:406.4},23,cjs.Ease.get(-1)).to({_off:true},1).wait(160));

	// unspoken
	this.instance_4 = new lib.game_unspoken();
	this.instance_4.parent = this;
	this.instance_4.setTransform(149.3,126.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-155.2,y:283.2},23,cjs.Ease.get(-1)).to({_off:true},1).wait(157));

	// lone echo
	this.instance_5 = new lib.game_loneecho();
	this.instance_5.parent = this;
	this.instance_5.setTransform(149.3,126.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-48,y:-155.2},23,cjs.Ease.get(-1)).to({_off:true},1).wait(154));

	// superhot
	this.instance_6 = new lib.game_superhot();
	this.instance_6.parent = this;
	this.instance_6.setTransform(149.3,126.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:367.6,y:-160},23,cjs.Ease.get(-1)).to({_off:true},1).wait(151));

	// rick morty
	this.instance_7 = new lib.game_rickmorty();
	this.instance_7.parent = this;
	this.instance_7.setTransform(149.3,126.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:462.8,y:406.4},23,cjs.Ease.get(-1)).to({_off:true},1).wait(148));

	// wilsons
	this.instance_8 = new lib.game_wilsons();
	this.instance_8.parent = this;
	this.instance_8.setTransform(149.3,126.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:233.2,y:-161.6},23,cjs.Ease.get(-1)).to({_off:true},1).wait(145));

	// MASK (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_29 = new cjs.Graphics().p("AJ2H5ICgAAIAACgIigAAg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AJyH1IClAAIAAClIilAAg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AJnHqIC0AAIAAC0Ii0AAg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AJVHYIDMAAIAADMIjMAAg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AI7G/IDvAAIAADuIjvAAg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AIaGeIEbAAIAAEbIkbAAg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AHyF2IFQAAIAAFRIlQAAg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AHCFHIGQAAIAAGQImQAAg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AGKEQIHbAAIAAHaInbAAg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AFMDSIItAAIAAIuIotAAg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AEGCNIKLAAIAAKLIqLAAg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AC5BBILyAAIAALyIryAAg");
	var mask_3_graphics_41 = new cjs.Graphics().p("ABkgSINjAAIAANiItjAAg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AAIhtIPdAAIAAPdIvdAAg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AhajPIRhAAIAARhIxhAAg");
	var mask_3_graphics_44 = new cjs.Graphics().p("AjFk4ITvAAIAATvIzvAAg");
	var mask_3_graphics_45 = new cjs.Graphics().p("Ak3mpIWHAAIAAWII2HAAg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AmxohIYqAAIAAYqI4qAAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AoyqgIbWAAIAAbVI7WAAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("Aq6snIeLAAIAAeLI+LAAg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AtJu1MAhKAAAMAAAAhLMghKAAAg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AvgxKMAkTAAAMAAAAkUMgkTAAAg");
	var mask_3_graphics_51 = new cjs.Graphics().p("Ax/zmMAnnAAAMAAAAnnMgnnAAAg");
	var mask_3_graphics_52 = new cjs.Graphics().p("A0k1hMArDAAAMAAAArDMgrDAAAg");
	var mask_3_graphics_53 = new cjs.Graphics().p("A3R3VMAuqAAAMAAAAurMguqAAAg");
	var mask_3_graphics_54 = new cjs.Graphics().p("A5N5NMAybAAAMAAAAybMgybAAAg");
	var mask_3_graphics_55 = new cjs.Graphics().p("A7K7KMA2VAAAMAAAA2VMg2VAAAg");
	var mask_3_graphics_56 = new cjs.Graphics().p("A7U7UMA2pAAAMAAAA2pMg2pAAAg");
	var mask_3_graphics_57 = new cjs.Graphics().p("A7e7eMA29AAAMAAAA29Mg29AAAg");
	var mask_3_graphics_58 = new cjs.Graphics().p("A7o7oMA3RAAAMAAAA3RMg3RAAAg");
	var mask_3_graphics_59 = new cjs.Graphics().p("A7y7yMA3lAAAMAAAA3lMg3lAAAg");
	var mask_3_graphics_60 = new cjs.Graphics().p("A7777MA33AAAMAAAA33Mg33AAAg");
	var mask_3_graphics_61 = new cjs.Graphics().p("A8F8FMA4LAAAMAAAA4LMg4LAAAg");
	var mask_3_graphics_62 = new cjs.Graphics().p("A8P8PMA4fAAAMAAAA4fMg4fAAAg");
	var mask_3_graphics_63 = new cjs.Graphics().p("A8Z8ZMA4zAAAMAAAA4zMg4zAAAg");
	var mask_3_graphics_64 = new cjs.Graphics().p("A8j8jMA5HAAAMAAAA5HMg5HAAAg");
	var mask_3_graphics_65 = new cjs.Graphics().p("A8t8tMA5bAAAMAAAA5bMg5bAAAg");
	var mask_3_graphics_66 = new cjs.Graphics().p("A8282MA5tAAAMAAAA5tMg5tAAAg");
	var mask_3_graphics_67 = new cjs.Graphics().p("A9A9AMA6BAAAMAAAA6BMg6BAAAg");
	var mask_3_graphics_68 = new cjs.Graphics().p("A9K9KMA6VAAAMAAAA6VMg6VAAAg");
	var mask_3_graphics_69 = new cjs.Graphics().p("A9U9UMA6pAAAMAAAA6pMg6pAAAg");
	var mask_3_graphics_70 = new cjs.Graphics().p("A9e9eMA69AAAMAAAA69Mg69AAAg");
	var mask_3_graphics_71 = new cjs.Graphics().p("A9o9oMA7RAAAMAAAA7RMg7RAAAg");
	var mask_3_graphics_72 = new cjs.Graphics().p("A9y9yMA7lAAAMAAAA7lMg7lAAAg");
	var mask_3_graphics_73 = new cjs.Graphics().p("A9797MA73AAAMAAAA73Mg73AAAg");
	var mask_3_graphics_74 = new cjs.Graphics().p("A+F+FMA8LAAAMAAAA8LMg8LAAAg");
	var mask_3_graphics_75 = new cjs.Graphics().p("A+P+PMA8fAAAMAAAA8fMg8fAAAg");
	var mask_3_graphics_76 = new cjs.Graphics().p("A+Z+ZMA8zAAAMAAAA8zMg8zAAAg");
	var mask_3_graphics_77 = new cjs.Graphics().p("A+j+jMA9HAAAMAAAA9HMg9HAAAg");
	var mask_3_graphics_78 = new cjs.Graphics().p("A+t+tMA9bAAAMAAAA9bMg9bAAAg");
	var mask_3_graphics_79 = new cjs.Graphics().p("A+3+3MA9vAAAMAAAA9vMg9vAAAg");
	var mask_3_graphics_80 = new cjs.Graphics().p("A/A/AMA+BAAAMAAAA+BMg+BAAAg");
	var mask_3_graphics_81 = new cjs.Graphics().p("A/K/KMA+VAAAMAAAA+VMg+VAAAg");
	var mask_3_graphics_82 = new cjs.Graphics().p("A/U/UMA+pAAAMAAAA+pMg+pAAAg");
	var mask_3_graphics_83 = new cjs.Graphics().p("A/e/eMA+9AAAMAAAA+9Mg+9AAAg");
	var mask_3_graphics_84 = new cjs.Graphics().p("A/o/oMA/RAAAMAAAA/RMg/RAAAg");
	var mask_3_graphics_85 = new cjs.Graphics().p("A/y/yMA/lAAAMAAAA/lMg/lAAAg");
	var mask_3_graphics_86 = new cjs.Graphics().p("A/7/7MA/3AAAMAAAA/3Mg/3AAAg");
	var mask_3_graphics_87 = new cjs.Graphics().p("EggFggFMBALAAAMAAABALMhALAAAg");
	var mask_3_graphics_88 = new cjs.Graphics().p("EggPggPMBAfAAAMAAABAfMhAfAAAg");
	var mask_3_graphics_89 = new cjs.Graphics().p("EggZggZMBAzAAAMAAABAzMhAzAAAg");
	var mask_3_graphics_90 = new cjs.Graphics().p("EggjggjMBBHAAAMAAABBHMhBHAAAg");
	var mask_3_graphics_91 = new cjs.Graphics().p("EggtggtMBBbAAAMAAABBbMhBbAAAg");
	var mask_3_graphics_92 = new cjs.Graphics().p("Egg3gg3MBBvAAAMAAABBvMhBvAAAg");
	var mask_3_graphics_93 = new cjs.Graphics().p("EghAghAMBCBAAAMAAABCBMhCBAAAg");
	var mask_3_graphics_94 = new cjs.Graphics().p("EghKghKMBCVAAAMAAABCVMhCVAAAg");
	var mask_3_graphics_95 = new cjs.Graphics().p("EghUghUMBCpAAAMAAABCpMhCpAAAg");
	var mask_3_graphics_96 = new cjs.Graphics().p("EghegheMBC9AAAMAAABC9MhC9AAAg");
	var mask_3_graphics_97 = new cjs.Graphics().p("EghoghoMBDRAAAMAAABDRMhDRAAAg");
	var mask_3_graphics_98 = new cjs.Graphics().p("EghyghyMBDlAAAMAAABDlMhDlAAAg");
	var mask_3_graphics_99 = new cjs.Graphics().p("Egh8gh8MBD5AAAMAAABD5MhD5AAAg");
	var mask_3_graphics_100 = new cjs.Graphics().p("EgiFgiFMBELAAAMAAABELMhELAAAg");
	var mask_3_graphics_101 = new cjs.Graphics().p("EgiPgiPMBEfAAAMAAABEfMhEfAAAg");
	var mask_3_graphics_102 = new cjs.Graphics().p("EgiZgiZMBEzAAAMAAABEzMhEzAAAg");
	var mask_3_graphics_103 = new cjs.Graphics().p("EgijgijMBFHAAAMAAABFHMhFHAAAg");
	var mask_3_graphics_104 = new cjs.Graphics().p("EgitgitMBFbAAAMAAABFbMhFbAAAg");
	var mask_3_graphics_105 = new cjs.Graphics().p("Egi3gi3MBFvAAAMAAABFvMhFvAAAg");
	var mask_3_graphics_106 = new cjs.Graphics().p("EgjAgjAMBGBAAAMAAABGBMhGBAAAg");
	var mask_3_graphics_107 = new cjs.Graphics().p("EgjKgjKMBGVAAAMAAABGVMhGVAAAg");
	var mask_3_graphics_108 = new cjs.Graphics().p("EgjUgjUMBGpAAAMAAABGpMhGpAAAg");
	var mask_3_graphics_109 = new cjs.Graphics().p("EgjegjeMBG9AAAMAAABG9MhG9AAAg");
	var mask_3_graphics_110 = new cjs.Graphics().p("EgjogjoMBHRAAAMAAABHRMhHRAAAg");
	var mask_3_graphics_111 = new cjs.Graphics().p("EgjygjyMBHlAAAMAAABHlMhHlAAAg");
	var mask_3_graphics_112 = new cjs.Graphics().p("Egj8gj8MBH5AAAMAAABH5MhH5AAAg");
	var mask_3_graphics_113 = new cjs.Graphics().p("EgkFgkFMBILAAAMAAABILMhILAAAg");
	var mask_3_graphics_114 = new cjs.Graphics().p("EgkPgkPMBIfAAAMAAABIfMhIfAAAg");
	var mask_3_graphics_115 = new cjs.Graphics().p("EgkZgkZMBIzAAAMAAABIzMhIzAAAg");
	var mask_3_graphics_116 = new cjs.Graphics().p("EgkjgkjMBJHAAAMAAABJHMhJHAAAg");
	var mask_3_graphics_117 = new cjs.Graphics().p("EgktgktMBJbAAAMAAABJbMhJbAAAg");
	var mask_3_graphics_118 = new cjs.Graphics().p("Egk3gk3MBJvAAAMAAABJvMhJvAAAg");
	var mask_3_graphics_119 = new cjs.Graphics().p("EglBglBMBKDAAAMAAABKDMhKDAAAg");
	var mask_3_graphics_120 = new cjs.Graphics().p("EglKglKMBKVAAAMAAABKVMhKVAAAg");
	var mask_3_graphics_121 = new cjs.Graphics().p("EglUglUMBKpAAAMAAABKpMhKpAAAg");
	var mask_3_graphics_122 = new cjs.Graphics().p("EglegleMBK9AAAMAAABK9MhK9AAAg");
	var mask_3_graphics_123 = new cjs.Graphics().p("EglogloMBLRAAAMAAABLRMhLRAAAg");
	var mask_3_graphics_124 = new cjs.Graphics().p("EglyglyMBLlAAAMAAABLlMhLlAAAg");
	var mask_3_graphics_125 = new cjs.Graphics().p("Egl8gl8MBL5AAAMAAABL5MhL5AAAg");
	var mask_3_graphics_126 = new cjs.Graphics().p("EgmFgmFMBMLAAAMAAABMLMhMLAAAg");
	var mask_3_graphics_127 = new cjs.Graphics().p("EgmPgmPMBMfAAAMAAABMfMhMfAAAg");
	var mask_3_graphics_128 = new cjs.Graphics().p("EgmZgmZMBMzAAAMAAABMzMhMzAAAg");
	var mask_3_graphics_129 = new cjs.Graphics().p("EgmjgmjMBNHAAAMAAABNHMhNHAAAg");
	var mask_3_graphics_130 = new cjs.Graphics().p("EgmtgmtMBNbAAAMAAABNbMhNbAAAg");
	var mask_3_graphics_131 = new cjs.Graphics().p("Egm3gm3MBNvAAAMAAABNvMhNvAAAg");
	var mask_3_graphics_132 = new cjs.Graphics().p("EgnBgnBMBODAAAMAAABODMhODAAAg");
	var mask_3_graphics_133 = new cjs.Graphics().p("EgnCgnCMBOFAAAMAAABOFMhOFAAAg");
	var mask_3_graphics_134 = new cjs.Graphics().p("EgnHgnHMBOPAAAMAAABOPMhOPAAAg");
	var mask_3_graphics_135 = new cjs.Graphics().p("EgnPgnPMBOfAAAMAAABOfMhOfAAAg");
	var mask_3_graphics_136 = new cjs.Graphics().p("EgnagnaMBO1AAAMAAABO1MhO1AAAg");
	var mask_3_graphics_137 = new cjs.Graphics().p("EgnognoMBPRAAAMAAABPRMhPRAAAg");
	var mask_3_graphics_138 = new cjs.Graphics().p("Egn6gn6MBP1AAAMAAABP1MhP1AAAg");
	var mask_3_graphics_139 = new cjs.Graphics().p("EgoOgoOMBQdAAAMAAABQdMhQdAAAg");
	var mask_3_graphics_140 = new cjs.Graphics().p("EgomgomMBRNAAAMAAABRNMhRNAAAg");
	var mask_3_graphics_141 = new cjs.Graphics().p("EgpBgpBMBSDAAAMAAABSDMhSDAAAg");
	var mask_3_graphics_142 = new cjs.Graphics().p("EgpfgpfMBS/AAAMAAABS/MhS/AAAg");
	var mask_3_graphics_143 = new cjs.Graphics().p("EgqAgqAMBUBAAAMAAABUBMhUBAAAg");
	var mask_3_graphics_144 = new cjs.Graphics().p("EgqlgqlMBVLAAAMAAABVLMhVLAAAg");
	var mask_3_graphics_145 = new cjs.Graphics().p("EgrMgrMMBWZAAAMAAABWZMhWZAAAg");
	var mask_3_graphics_146 = new cjs.Graphics().p("Egr3gr3MBXvAAAMAAABXvMhXvAAAg");
	var mask_3_graphics_147 = new cjs.Graphics().p("EgslgslMBZLAAAMAAABZLMhZLAAAg");
	var mask_3_graphics_148 = new cjs.Graphics().p("EgtWgtWMBatAAAMAAABatMhatAAAg");
	var mask_3_graphics_149 = new cjs.Graphics().p("EguKguKMBcVAAAMAAABcVMhcVAAAg");
	var mask_3_graphics_150 = new cjs.Graphics().p("EgvCgvCMBeFAAAMAAABeFMheFAAAg");
	var mask_3_graphics_151 = new cjs.Graphics().p("Egv8gv8MBf5AAAMAAABf5Mhf5AAAg");
	var mask_3_graphics_152 = new cjs.Graphics().p("Egw6gw6MBh1AAAMAAABh1Mhh1AAAg");
	var mask_3_graphics_153 = new cjs.Graphics().p("Egx7gx7MBj3AAAMAAABj3Mhj3AAAg");
	var mask_3_graphics_154 = new cjs.Graphics().p("Egy/gy/MBl/AAAMAAABl/Mhl/AAAg");
	var mask_3_graphics_155 = new cjs.Graphics().p("Eg0Gg0GMBoNAAAMAAABoNMhoNAAAg");
	var mask_3_graphics_156 = new cjs.Graphics().p("Eg1Rg1RMBqjAAAMAAABqjMhqjAAAg");
	var mask_3_graphics_157 = new cjs.Graphics().p("Eg2eg2eMBs9AAAMAAABs9Mhs9AAAg");
	var mask_3_graphics_158 = new cjs.Graphics().p("Eg5hg5hMBzDAAAMAAABzDMhzDAAAg");
	var mask_3_graphics_159 = new cjs.Graphics().p("Eg8kg8kMB5JAAAMAAAB5JMh5JAAAg");
	var mask_3_graphics_160 = new cjs.Graphics().p("Eg/ng/nMB/PAAAMAAAB/PMh/PAAAg");
	var mask_3_graphics_161 = new cjs.Graphics().p("EhCqhCqMCFVAAAMAAACFVMiFVAAAg");
	var mask_3_graphics_162 = new cjs.Graphics().p("EhFthFtMCLbAAAMAAACLbMiLbAAAg");
	var mask_3_graphics_163 = new cjs.Graphics().p("EhIvhIvMCRfAAAMAAACRfMiRfAAAg");
	var mask_3_graphics_164 = new cjs.Graphics().p("EhLyhLyMCXlAAAMAAACXlMiXlAAAg");
	var mask_3_graphics_165 = new cjs.Graphics().p("EhO1hO1MCdrAAAMAAACdrMidrAAAg");
	var mask_3_graphics_166 = new cjs.Graphics().p("EhR4hR4MCjxAAAMAAACjxMijxAAAg");
	var mask_3_graphics_167 = new cjs.Graphics().p("EhU7hU7MCp3AAAMAAACp3Mip3AAAg");
	var mask_3_graphics_168 = new cjs.Graphics().p("EhX+hX+MCv9AAAMAAACv9Miv9AAAg");
	var mask_3_graphics_169 = new cjs.Graphics().p("EhbBhbBMC2DAAAMAAAC2DMi2DAAAg");
	var mask_3_graphics_170 = new cjs.Graphics().p("EheEheEMC8JAAAMAAAC8JMi8JAAAg");
	var mask_3_graphics_171 = new cjs.Graphics().p("EhhGhhGMDCNAAAMAAADCNMjCNAAAg");
	var mask_3_graphics_172 = new cjs.Graphics().p("EhkJhkJMDITAAAMAAADITMjITAAAg");
	var mask_3_graphics_173 = new cjs.Graphics().p("EhnMhnMMDOZAAAMAAADOZMjOZAAAg");
	var mask_3_graphics_174 = new cjs.Graphics().p("EhqPhqPMDUfAAAMAAADUfMjUfAAAg");
	var mask_3_graphics_175 = new cjs.Graphics().p("EhtShtSMDalAAAMAAADalMjalAAAg");
	var mask_3_graphics_176 = new cjs.Graphics().p("EhwVhwVMDgrAAAMAAADgrMjgrAAAg");
	var mask_3_graphics_177 = new cjs.Graphics().p("AqLKbIAAjPQAAgVgEgRQgEgRgIgMQgLgNgPgGQgPgGgVAAQgXAAgVAIQgVAIgRARQgPARgIAXQgLAaAAAfIAACpIg7AAIAAlYIA5AAIAABCIACAAIAYgeQAMgPARgIQARgLATgGQATgGAXAAQAgAAAZAKQAXALAPATQAPARAGAbQAJAXAAAiIAADVg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_3_graphics_29,x:79,y:66.5}).wait(1).to({graphics:mask_3_graphics_30,x:79.1,y:66.6}).wait(1).to({graphics:mask_3_graphics_31,x:79.5,y:67}).wait(1).to({graphics:mask_3_graphics_32,x:80.1,y:67.6}).wait(1).to({graphics:mask_3_graphics_33,x:81,y:68.5}).wait(1).to({graphics:mask_3_graphics_34,x:82.1,y:69.7}).wait(1).to({graphics:mask_3_graphics_35,x:83.4,y:71.1}).wait(1).to({graphics:mask_3_graphics_36,x:85,y:72.7}).wait(1).to({graphics:mask_3_graphics_37,x:86.9,y:74.6}).wait(1).to({graphics:mask_3_graphics_38,x:88.9,y:76.8}).wait(1).to({graphics:mask_3_graphics_39,x:91.3,y:79.2}).wait(1).to({graphics:mask_3_graphics_40,x:93.9,y:81.9}).wait(1).to({graphics:mask_3_graphics_41,x:96.7,y:84.8}).wait(1).to({graphics:mask_3_graphics_42,x:99.7,y:88}).wait(1).to({graphics:mask_3_graphics_43,x:103.1,y:91.4}).wait(1).to({graphics:mask_3_graphics_44,x:106.6,y:95.1}).wait(1).to({graphics:mask_3_graphics_45,x:110.4,y:99.1}).wait(1).to({graphics:mask_3_graphics_46,x:114.5,y:103.3}).wait(1).to({graphics:mask_3_graphics_47,x:118.8,y:107.7}).wait(1).to({graphics:mask_3_graphics_48,x:123.3,y:112.4}).wait(1).to({graphics:mask_3_graphics_49,x:128.1,y:117.4}).wait(1).to({graphics:mask_3_graphics_50,x:133.1,y:122.6}).wait(1).to({graphics:mask_3_graphics_51,x:138.4,y:128.1}).wait(1).to({graphics:mask_3_graphics_52,x:143.9,y:129.7}).wait(1).to({graphics:mask_3_graphics_53,x:149.7,y:130.2}).wait(1).to({graphics:mask_3_graphics_54,x:150,y:130.6}).wait(1).to({graphics:mask_3_graphics_55,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_56,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_57,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_58,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_59,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_60,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_61,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_62,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_63,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_64,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_65,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_66,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_67,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_68,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_69,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_70,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_71,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_72,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_73,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_74,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_75,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_76,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_77,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_78,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_79,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_80,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_81,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_82,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_83,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_84,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_85,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_86,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_87,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_88,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_89,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_90,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_91,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_92,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_93,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_94,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_95,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_96,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_97,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_98,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_99,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_100,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_101,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_102,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_103,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_104,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_105,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_106,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_107,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_108,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_109,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_110,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_111,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_112,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_113,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_114,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_115,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_116,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_117,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_118,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_119,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_120,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_121,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_122,x:150,y:130.9}).wait(1).to({graphics:mask_3_graphics_123,x:150,y:130.8}).wait(1).to({graphics:mask_3_graphics_124,x:150,y:130.8}).wait(1).to({graphics:mask_3_graphics_125,x:150,y:130.8}).wait(1).to({graphics:mask_3_graphics_126,x:150,y:130.8}).wait(1).to({graphics:mask_3_graphics_127,x:150,y:130.8}).wait(1).to({graphics:mask_3_graphics_128,x:150,y:130.8}).wait(1).to({graphics:mask_3_graphics_129,x:150,y:130.8}).wait(1).to({graphics:mask_3_graphics_130,x:150,y:130.8}).wait(1).to({graphics:mask_3_graphics_131,x:150,y:130.8}).wait(1).to({graphics:mask_3_graphics_132,x:150,y:130.7}).wait(1).to({graphics:mask_3_graphics_133,x:150,y:130.7}).wait(1).to({graphics:mask_3_graphics_134,x:150,y:130.7}).wait(1).to({graphics:mask_3_graphics_135,x:150,y:130.7}).wait(1).to({graphics:mask_3_graphics_136,x:150,y:130.7}).wait(1).to({graphics:mask_3_graphics_137,x:150,y:130.7}).wait(1).to({graphics:mask_3_graphics_138,x:150,y:130.6}).wait(1).to({graphics:mask_3_graphics_139,x:150,y:130.6}).wait(1).to({graphics:mask_3_graphics_140,x:150,y:130.6}).wait(1).to({graphics:mask_3_graphics_141,x:150,y:130.6}).wait(1).to({graphics:mask_3_graphics_142,x:150,y:130.5}).wait(1).to({graphics:mask_3_graphics_143,x:150,y:130.5}).wait(1).to({graphics:mask_3_graphics_144,x:150,y:130.5}).wait(1).to({graphics:mask_3_graphics_145,x:150,y:130.4}).wait(1).to({graphics:mask_3_graphics_146,x:150,y:130.4}).wait(1).to({graphics:mask_3_graphics_147,x:150,y:130.3}).wait(1).to({graphics:mask_3_graphics_148,x:150,y:130.3}).wait(1).to({graphics:mask_3_graphics_149,x:150,y:130.2}).wait(1).to({graphics:mask_3_graphics_150,x:150.1,y:130.2}).wait(1).to({graphics:mask_3_graphics_151,x:150.1,y:130.1}).wait(1).to({graphics:mask_3_graphics_152,x:150.1,y:130.1}).wait(1).to({graphics:mask_3_graphics_153,x:150.1,y:130}).wait(1).to({graphics:mask_3_graphics_154,x:150.1,y:129.9}).wait(1).to({graphics:mask_3_graphics_155,x:150.1,y:129.9}).wait(1).to({graphics:mask_3_graphics_156,x:150.1,y:129.8}).wait(1).to({graphics:mask_3_graphics_157,x:150,y:129.6}).wait(1).to({graphics:mask_3_graphics_158,x:150,y:129.5}).wait(1).to({graphics:mask_3_graphics_159,x:150,y:129.4}).wait(1).to({graphics:mask_3_graphics_160,x:150,y:129.3}).wait(1).to({graphics:mask_3_graphics_161,x:150,y:129.1}).wait(1).to({graphics:mask_3_graphics_162,x:150,y:129}).wait(1).to({graphics:mask_3_graphics_163,x:150,y:128.9}).wait(1).to({graphics:mask_3_graphics_164,x:150,y:128.8}).wait(1).to({graphics:mask_3_graphics_165,x:150,y:128.7}).wait(1).to({graphics:mask_3_graphics_166,x:150,y:128.6}).wait(1).to({graphics:mask_3_graphics_167,x:150.1,y:128.5}).wait(1).to({graphics:mask_3_graphics_168,x:150.1,y:128.3}).wait(1).to({graphics:mask_3_graphics_169,x:150.1,y:128.2}).wait(1).to({graphics:mask_3_graphics_170,x:150.1,y:128.1}).wait(1).to({graphics:mask_3_graphics_171,x:150.1,y:128}).wait(1).to({graphics:mask_3_graphics_172,x:150.1,y:127.9}).wait(1).to({graphics:mask_3_graphics_173,x:150.1,y:127.8}).wait(1).to({graphics:mask_3_graphics_174,x:150.1,y:127.6}).wait(1).to({graphics:mask_3_graphics_175,x:150.1,y:127.5}).wait(1).to({graphics:mask_3_graphics_176,x:150.1,y:127.4}).wait(1).to({graphics:mask_3_graphics_177,x:-90.5,y:66.7}).wait(1).to({graphics:null,x:0,y:0}).wait(15));

	// Layer 4
	this.instance_9 = new lib.robo();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,125.6,0.046,0.046,0,0,0,76.6,9.8);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({_off:false},0).to({regX:76.3,regY:8.8,scaleX:1,scaleY:1,x:150.2,y:143.1},26,cjs.Ease.get(-1)).wait(77).to({regX:76.4,scaleX:1.52,scaleY:1.52,x:150.9,y:167.9},25,cjs.Ease.get(-1)).to({regY:9,scaleX:3.84,scaleY:3.84,x:151.6,y:246.6,alpha:0},20).to({_off:true},1).wait(15));

	// Layer 27
	this.instance_10 = new lib.robo();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,125.6,0.046,0.046,0,0,0,76.6,9.8);
	this.instance_10._off = true;
	this.instance_10.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_10.cache(-2,-2,156,21);

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(29).to({_off:false},0).to({regX:76.3,regY:8.8,scaleX:1,scaleY:1,x:151.2,y:144.1},26,cjs.Ease.get(-1)).wait(77).to({regX:76.4,scaleX:1.52,scaleY:1.52,x:152.4,y:169.4},25,cjs.Ease.get(-1)).to({regY:9,scaleX:3.84,scaleY:3.84,x:154,y:248.1,alpha:-1},20).to({_off:true},1).wait(15));

	// Layer 3
	this.instance_11 = new lib.recall();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,128.1,0.046,0.046,0,0,0,89.7,39.4);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({_off:false},0).to({regX:89.6,regY:38.7,scaleX:1,scaleY:1,x:149.1,y:198.1},26,cjs.Ease.get(-1)).wait(77).to({regY:38.8,scaleX:1.52,scaleY:1.52,y:251.8},25,cjs.Ease.get(-1)).to({regX:89.7,regY:38.9,scaleX:4.04,scaleY:4.04,x:148.7,y:465.3,alpha:0},20).to({_off:true},1).wait(15));

	// Layer 28
	this.instance_12 = new lib.recall();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,128.1,0.046,0.046,0,0,0,89.7,39.4);
	this.instance_12._off = true;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_12.cache(-2,-2,183,81);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({_off:false},0).to({regX:89.6,regY:38.7,scaleX:1,scaleY:1,x:150.1,y:199.1},26,cjs.Ease.get(-1)).wait(77).to({scaleX:1.52,scaleY:1.52,x:150.6,y:253.2},25,cjs.Ease.get(-1)).to({regX:89.7,regY:38.9,scaleX:4.04,scaleY:4.04,x:151.1,y:466.9,alpha:-1},20).to({_off:true},1).wait(15));

	// Layer 7
	this.instance_13 = new lib.Tween12("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,132);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween13("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(150.6,133.5,4.974,4.974,0,0,0,0.1,0.1);
	this.instance_14.alpha = 0;

	var maskedShapeInstanceList = [this.instance_13,this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},55).to({state:[{t:this.instance_13}]},77).to({state:[{t:this.instance_13}]},25).to({state:[{t:this.instance_14}]},20).to({state:[]},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(55).to({_off:false},0).to({scaleX:1.42,scaleY:1.42,y:132.3},77).to({regX:0.1,regY:0.1,scaleX:1.98,scaleY:1.98,x:150.1,y:128.1},25,cjs.Ease.get(-1)).to({_off:true,scaleX:4.97,scaleY:4.97,x:150.6,y:133.5,alpha:0},20).wait(16));

	// SMOKE_MASK (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_55 = new cjs.Graphics().p("A3YThMAAAgnBMAuxAAAMAAAAnBg");
	var mask_4_graphics_56 = new cjs.Graphics().p("A3bTkMAAAgnHMAu3AAAMAAAAnHg");
	var mask_4_graphics_57 = new cjs.Graphics().p("A3eTmMAAAgnLMAu9AAAMAAAAnLg");
	var mask_4_graphics_58 = new cjs.Graphics().p("A3iTpMAAAgnRMAvFAAAMAAAAnRg");
	var mask_4_graphics_59 = new cjs.Graphics().p("A3lTrMAAAgnVMAvLAAAMAAAAnVg");
	var mask_4_graphics_60 = new cjs.Graphics().p("A3oTuMAAAgnbMAvRAAAMAAAAnbg");
	var mask_4_graphics_61 = new cjs.Graphics().p("A3rTxMAAAgnhMAvXAAAMAAAAnhg");
	var mask_4_graphics_62 = new cjs.Graphics().p("A3uTzMAAAgnlMAvdAAAMAAAAnlg");
	var mask_4_graphics_63 = new cjs.Graphics().p("A3xT2MAAAgnrMAvjAAAMAAAAnrg");
	var mask_4_graphics_64 = new cjs.Graphics().p("A30T5MAAAgnxMAvpAAAMAAAAnxg");
	var mask_4_graphics_65 = new cjs.Graphics().p("A34T7MAAAgn1MAvxAAAMAAAAn1g");
	var mask_4_graphics_66 = new cjs.Graphics().p("A37T+MAAAgn7MAv3AAAMAAAAn7g");
	var mask_4_graphics_67 = new cjs.Graphics().p("A3+UBMAAAgoBMAv9AAAMAAAAoBg");
	var mask_4_graphics_68 = new cjs.Graphics().p("A4BUDMAAAgoFMAwDAAAMAAAAoFg");
	var mask_4_graphics_69 = new cjs.Graphics().p("A4EUGMAAAgoLMAwJAAAMAAAAoLg");
	var mask_4_graphics_70 = new cjs.Graphics().p("A4IUJMAAAgoRMAwRAAAMAAAAoRg");
	var mask_4_graphics_71 = new cjs.Graphics().p("A4LULMAAAgoVMAwXAAAMAAAAoVg");
	var mask_4_graphics_72 = new cjs.Graphics().p("A4NUOMAAAgobMAwbAAAMAAAAobg");
	var mask_4_graphics_73 = new cjs.Graphics().p("A4RUQMAAAgofMAwjAAAMAAAAofg");
	var mask_4_graphics_74 = new cjs.Graphics().p("A4UUTMAAAgolMAwpAAAMAAAAolg");
	var mask_4_graphics_75 = new cjs.Graphics().p("A4XUWMAAAgorMAwvAAAMAAAAorg");
	var mask_4_graphics_76 = new cjs.Graphics().p("A4aUYMAAAgovMAw1AAAMAAAAovg");
	var mask_4_graphics_77 = new cjs.Graphics().p("A4dUbMAAAgo1MAw7AAAMAAAAo1g");
	var mask_4_graphics_78 = new cjs.Graphics().p("A4hUdMAAAgo6MAxDAAAMAAAAo6g");
	var mask_4_graphics_79 = new cjs.Graphics().p("A4kUgMAAAgo/MAxJAAAMAAAAo/g");
	var mask_4_graphics_80 = new cjs.Graphics().p("A4nUjMAAAgpFMAxPAAAMAAAApFg");
	var mask_4_graphics_81 = new cjs.Graphics().p("A4qUlMAAAgpJMAxVAAAMAAAApJg");
	var mask_4_graphics_82 = new cjs.Graphics().p("A4tUoMAAAgpPMAxbAAAMAAAApPg");
	var mask_4_graphics_83 = new cjs.Graphics().p("A4xUrMAAAgpVMAxjAAAMAAAApVg");
	var mask_4_graphics_84 = new cjs.Graphics().p("A40UtMAAAgpZMAxoAAAMAAAApZg");
	var mask_4_graphics_85 = new cjs.Graphics().p("A42UwMAAAgpfMAxtAAAMAAAApfg");
	var mask_4_graphics_86 = new cjs.Graphics().p("A46UzMAAAgplMAx1AAAMAAAAplg");
	var mask_4_graphics_87 = new cjs.Graphics().p("A49U1MAAAgppMAx7AAAMAAAAppg");
	var mask_4_graphics_88 = new cjs.Graphics().p("A5AU4MAAAgpvMAyBAAAMAAAApvg");
	var mask_4_graphics_89 = new cjs.Graphics().p("A5DU7MAAAgp1MAyHAAAMAAAAp1g");
	var mask_4_graphics_90 = new cjs.Graphics().p("A5HU9MAAAgp5MAyOAAAMAAAAp5g");
	var mask_4_graphics_91 = new cjs.Graphics().p("A5KU/MAAAgp9MAyVAAAMAAAAp9g");
	var mask_4_graphics_92 = new cjs.Graphics().p("A5NVDMAAAgqFMAybAAAMAAAAqFg");
	var mask_4_graphics_93 = new cjs.Graphics().p("A5QVFMAAAgqJMAyhAAAMAAAAqJg");
	var mask_4_graphics_94 = new cjs.Graphics().p("A5TVHMAAAgqNMAynAAAMAAAAqNg");
	var mask_4_graphics_95 = new cjs.Graphics().p("A5WVKMAAAgqTMAytAAAMAAAAqTg");
	var mask_4_graphics_96 = new cjs.Graphics().p("A5ZVNMAAAgqZMAyzAAAMAAAAqZg");
	var mask_4_graphics_97 = new cjs.Graphics().p("A5dVQMAAAgqeMAy6AAAMAAAAqeg");
	var mask_4_graphics_98 = new cjs.Graphics().p("A5gVSMAAAgqjMAzBAAAMAAAAqjg");
	var mask_4_graphics_99 = new cjs.Graphics().p("A5jVVMAAAgqpMAzHAAAMAAAAqpg");
	var mask_4_graphics_100 = new cjs.Graphics().p("A5mVYMAAAgqvMAzNAAAMAAAAqvg");
	var mask_4_graphics_101 = new cjs.Graphics().p("A5pVaMAAAgqzMAzTAAAMAAAAqzg");
	var mask_4_graphics_102 = new cjs.Graphics().p("A5tVcMAAAgq4MAzbAAAMAAAAq4g");
	var mask_4_graphics_103 = new cjs.Graphics().p("A5wVfMAAAgq9MAzgAAAMAAAAq9g");
	var mask_4_graphics_104 = new cjs.Graphics().p("A5yViMAAAgrDMAzmAAAMAAAArDg");
	var mask_4_graphics_105 = new cjs.Graphics().p("A52VkMAAAgrHMAztAAAMAAAArHg");
	var mask_4_graphics_106 = new cjs.Graphics().p("A55VnMAAAgrNMAzzAAAMAAAArNg");
	var mask_4_graphics_107 = new cjs.Graphics().p("A58VqMAAAgrTMAz5AAAMAAAArTg");
	var mask_4_graphics_108 = new cjs.Graphics().p("A5/VsMAAAgrXMAz/AAAMAAAArXg");
	var mask_4_graphics_109 = new cjs.Graphics().p("A6CVvMAAAgrdMA0FAAAMAAAArdg");
	var mask_4_graphics_110 = new cjs.Graphics().p("A6GVyMAAAgrjMA0NAAAMAAAArjg");
	var mask_4_graphics_111 = new cjs.Graphics().p("A6JV0MAAAgrnMA0TAAAMAAAArng");
	var mask_4_graphics_112 = new cjs.Graphics().p("A6MV3MAAAgrtMA0ZAAAMAAAArtg");
	var mask_4_graphics_113 = new cjs.Graphics().p("A6PV6MAAAgrzMA0fAAAMAAAArzg");
	var mask_4_graphics_114 = new cjs.Graphics().p("A6SV8MAAAgr3MA0lAAAMAAAAr3g");
	var mask_4_graphics_115 = new cjs.Graphics().p("A6WV/MAAAgr9MA0sAAAMAAAAr9g");
	var mask_4_graphics_116 = new cjs.Graphics().p("A6ZWBMAAAgsBMA0yAAAMAAAAsBg");
	var mask_4_graphics_117 = new cjs.Graphics().p("A6bWEMAAAgsHMA04AAAMAAAAsHg");
	var mask_4_graphics_118 = new cjs.Graphics().p("A6fWHMAAAgsNMA0/AAAMAAAAsNg");
	var mask_4_graphics_119 = new cjs.Graphics().p("A6iWJMAAAgsRMA1FAAAMAAAAsRg");
	var mask_4_graphics_120 = new cjs.Graphics().p("A6lWMMAAAgsXMA1LAAAMAAAAsXg");
	var mask_4_graphics_121 = new cjs.Graphics().p("A6oWOMAAAgscMA1RAAAMAAAAscg");
	var mask_4_graphics_122 = new cjs.Graphics().p("A6rWRMAAAgshMA1YAAAMAAAAshg");
	var mask_4_graphics_123 = new cjs.Graphics().p("A6vWUMAAAgsnMA1fAAAMAAAAsng");
	var mask_4_graphics_124 = new cjs.Graphics().p("A6yWWMAAAgssMA1lAAAMAAAAssg");
	var mask_4_graphics_125 = new cjs.Graphics().p("A61WZMAAAgsxMA1rAAAMAAAAsxg");
	var mask_4_graphics_126 = new cjs.Graphics().p("A64WcMAAAgs3MA1xAAAMAAAAs3g");
	var mask_4_graphics_127 = new cjs.Graphics().p("A67WeMAAAgs7MA13AAAMAAAAs7g");
	var mask_4_graphics_128 = new cjs.Graphics().p("A6+WhMAAAgtBMA19AAAMAAAAtBg");
	var mask_4_graphics_129 = new cjs.Graphics().p("A7CWkMAAAgtHMA2FAAAMAAAAtHg");
	var mask_4_graphics_130 = new cjs.Graphics().p("A7FWmMAAAgtLMA2LAAAMAAAAtLg");
	var mask_4_graphics_131 = new cjs.Graphics().p("A7IWpMAAAgtRMA2RAAAMAAAAtRg");
	var mask_4_graphics_132 = new cjs.Graphics().p("A7LWsMAAAgtXMA2XAAAMAAAAtXg");
	var mask_4_graphics_133 = new cjs.Graphics().p("A7LWrMAAAgtVMA2XAAAMAAAAtVg");
	var mask_4_graphics_134 = new cjs.Graphics().p("A7KWqMAAAgtTMA2UAAAMAAAAtTg");
	var mask_4_graphics_135 = new cjs.Graphics().p("A7IWoMAAAgtQMA2QAAAMAAAAtQg");
	var mask_4_graphics_136 = new cjs.Graphics().p("A7FWmMAAAgtLMA2LAAAMAAAAtLg");
	var mask_4_graphics_137 = new cjs.Graphics().p("A7BWkMAAAgtHMA2DAAAMAAAAtHg");
	var mask_4_graphics_138 = new cjs.Graphics().p("A69WgMAAAgs/MA17AAAMAAAAs/g");
	var mask_4_graphics_139 = new cjs.Graphics().p("A64WcMAAAgs2MA1xAAAMAAAAs2g");
	var mask_4_graphics_140 = new cjs.Graphics().p("A6yWXMAAAgstMA1lAAAMAAAAstg");
	var mask_4_graphics_141 = new cjs.Graphics().p("A6rWRMAAAgshMA1YAAAMAAAAshg");
	var mask_4_graphics_142 = new cjs.Graphics().p("A6kWLMAAAgsVMA1JAAAMAAAAsVg");
	var mask_4_graphics_143 = new cjs.Graphics().p("A6cWEMAAAgsHMA05AAAMAAAAsHg");
	var mask_4_graphics_144 = new cjs.Graphics().p("A6TV9MAAAgr5MA0nAAAMAAAAr5g");
	var mask_4_graphics_145 = new cjs.Graphics().p("A6JV1MAAAgrpMA0TAAAMAAAArpg");
	var mask_4_graphics_146 = new cjs.Graphics().p("A5/VsMAAAgrXMAz/AAAMAAAArXg");
	var mask_4_graphics_147 = new cjs.Graphics().p("A5zViMAAAgrDMAzoAAAMAAAArDg");
	var mask_4_graphics_148 = new cjs.Graphics().p("A5nVYMAAAgqvMAzPAAAMAAAAqvg");
	var mask_4_graphics_149 = new cjs.Graphics().p("A5bVOMAAAgqbMAy3AAAMAAAAqbg");
	var mask_4_graphics_150 = new cjs.Graphics().p("A5NVDMAAAgqFMAybAAAMAAAAqFg");
	var mask_4_graphics_151 = new cjs.Graphics().p("A4+U2MAAAgprMAx9AAAMAAAAprg");
	var mask_4_graphics_152 = new cjs.Graphics().p("A4vUqMAAAgpTMAxgAAAMAAAApTg");
	var mask_4_graphics_153 = new cjs.Graphics().p("A4gUdMAAAgo5MAxBAAAMAAAAo5g");
	var mask_4_graphics_154 = new cjs.Graphics().p("A4PUPMAAAgodMAwfAAAMAAAAodg");
	var mask_4_graphics_155 = new cjs.Graphics().p("A39UAMAAAgn/MAv7AAAMAAAAn/g");
	var mask_4_graphics_156 = new cjs.Graphics().p("A3rTxMAAAgnhMAvXAAAMAAAAnhg");
	var mask_4_graphics_157 = new cjs.Graphics().p("A3YThMAAAgnBMAuxAAAMAAAAnBg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_4_graphics_55,x:150.3,y:125.1}).wait(1).to({graphics:mask_4_graphics_56,x:150.3,y:125.1}).wait(1).to({graphics:mask_4_graphics_57,x:150.3,y:125.1}).wait(1).to({graphics:mask_4_graphics_58,x:150.3,y:125.1}).wait(1).to({graphics:mask_4_graphics_59,x:150.3,y:125.1}).wait(1).to({graphics:mask_4_graphics_60,x:150.3,y:125.1}).wait(1).to({graphics:mask_4_graphics_61,x:150.3,y:125.1}).wait(1).to({graphics:mask_4_graphics_62,x:150.3,y:125.1}).wait(1).to({graphics:mask_4_graphics_63,x:150.3,y:125.1}).wait(1).to({graphics:mask_4_graphics_64,x:150.3,y:125.1}).wait(1).to({graphics:mask_4_graphics_65,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_66,x:150.3,y:125.1}).wait(1).to({graphics:mask_4_graphics_67,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_68,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_69,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_70,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_71,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_72,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_73,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_74,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_75,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_76,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_77,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_78,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_79,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_80,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_81,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_82,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_83,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_84,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_85,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_86,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_87,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_88,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_89,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_90,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_91,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_92,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_93,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_94,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_95,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_96,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_97,x:150.5,y:125.1}).wait(1).to({graphics:mask_4_graphics_98,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_99,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_100,x:150.5,y:125.1}).wait(1).to({graphics:mask_4_graphics_101,x:150.5,y:125.1}).wait(1).to({graphics:mask_4_graphics_102,x:150.5,y:125.1}).wait(1).to({graphics:mask_4_graphics_103,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_104,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_105,x:150.5,y:125.1}).wait(1).to({graphics:mask_4_graphics_106,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_107,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_108,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_109,x:150.5,y:125.1}).wait(1).to({graphics:mask_4_graphics_110,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_111,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_112,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_113,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_114,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_115,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_116,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_117,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_118,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_119,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_120,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_121,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_122,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_123,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_124,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_125,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_126,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_127,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_128,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_129,x:150.6,y:125}).wait(1).to({graphics:mask_4_graphics_130,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_131,x:150.6,y:125}).wait(1).to({graphics:mask_4_graphics_132,x:150.6,y:125}).wait(1).to({graphics:mask_4_graphics_133,x:150.6,y:125}).wait(1).to({graphics:mask_4_graphics_134,x:150.6,y:125}).wait(1).to({graphics:mask_4_graphics_135,x:150.6,y:125}).wait(1).to({graphics:mask_4_graphics_136,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_137,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_138,x:150.6,y:125}).wait(1).to({graphics:mask_4_graphics_139,x:150.6,y:125}).wait(1).to({graphics:mask_4_graphics_140,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_141,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_142,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_143,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_144,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_145,x:150.5,y:125}).wait(1).to({graphics:mask_4_graphics_146,x:150.5,y:125.1}).wait(1).to({graphics:mask_4_graphics_147,x:150.5,y:125.1}).wait(1).to({graphics:mask_4_graphics_148,x:150.5,y:125.1}).wait(1).to({graphics:mask_4_graphics_149,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_150,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_151,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_152,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_153,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_154,x:150.4,y:125.1}).wait(1).to({graphics:mask_4_graphics_155,x:150.3,y:125.1}).wait(1).to({graphics:mask_4_graphics_156,x:150.3,y:125.1}).wait(1).to({graphics:mask_4_graphics_157,x:150.3,y:125.1}).wait(1).to({graphics:null,x:0,y:0}).wait(35));

	// Layer 5
	this.instance_15 = new lib.Tween10("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.5,286.5);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween11("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(150.9,9.5,1.411,1.411);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_15,this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(55).to({_off:false},0).to({_off:true,scaleX:1.41,scaleY:1.41,x:150.9,y:9.5},77).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(55).to({_off:false},77).to({scaleX:1.98,scaleY:1.98,x:151.1,y:21.5},25,cjs.Ease.get(-1)).to({_off:true},1).wait(35));

	// SMOKE
	this.instance_17 = new lib.Tween10("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(150.5,286.5);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween11("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(150.9,9.5,1.411,1.411);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_17,this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(55).to({_off:false},0).to({_off:true,scaleX:1.41,scaleY:1.41,x:150.9,y:9.5},77).wait(61));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(55).to({_off:false},77).to({scaleX:1.98,scaleY:1.98,x:151.1,y:21.5},25,cjs.Ease.get(-1)).to({scaleX:4.97,scaleY:4.97,x:152.6,y:154.3,alpha:0},20).to({_off:true},1).wait(15));

	// GAME_BG
	this.instance_19 = new lib.Tween8("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(150,125.1,0.046,0.046,0,0,0,0,1.1);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween9("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(150.5,133.4,4.22,4.22,0,0,0,0.1,0.1);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},29).to({state:[{t:this.instance_19}]},26).to({state:[{t:this.instance_19}]},77).to({state:[{t:this.instance_19}]},25).to({state:[{t:this.instance_20}]},20).to({state:[]},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(29).to({_off:false},0).to({regX:0.1,regY:1.2,scaleX:0.99,scaleY:0.99,x:150.1,y:132.1},26,cjs.Ease.get(-1)).to({regY:1.4,scaleX:1.43,scaleY:1.43,x:150.2,y:132.7},77).to({scaleX:1.99,scaleY:1.99,y:132.4},25,cjs.Ease.get(-1)).to({_off:true,regY:0.1,scaleX:4.22,scaleY:4.22,x:150.5,y:133.4,alpha:0},20).wait(16));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(77.5,228.4,1,1,0,0,0,55.5,22.5);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(159).to({_off:false},0).wait(34));

	// legal
	this.instance_21 = new lib.legal_withpurchase();
	this.instance_21.parent = this;
	this.instance_21.setTransform(126.7,276.1,1,1,0,0,0,117.9,8);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(159).to({_off:false},0).wait(34));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_172 = new cjs.Graphics().p("AphEiIAApDITDAAIAAJDg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(172).to({graphics:mask_5_graphics_172,x:85.2,y:135.9}).wait(21));

	// price
	this.instance_22 = new lib.newPrice();
	this.instance_22.parent = this;
	this.instance_22.setTransform(74.7,167.2,1,1,0,0,0,57.5,33.2);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(172).to({_off:false},0).to({y:136.9},6,cjs.Ease.get(1)).to({y:131.2},4).wait(11));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_172 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_6_graphics_173 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_6_graphics_174 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_6_graphics_175 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_6_graphics_176 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_6_graphics_177 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_6_graphics_178 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_6_graphics_179 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_6_graphics_180 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_6_graphics_181 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_6_graphics_182 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");
	var mask_6_graphics_183 = new cjs.Graphics().p("AozDIIAAmPIRnAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(172).to({graphics:mask_6_graphics_172,x:79.3,y:141.9}).wait(1).to({graphics:mask_6_graphics_173,x:79.3,y:145.7}).wait(1).to({graphics:mask_6_graphics_174,x:79.3,y:137.7}).wait(1).to({graphics:mask_6_graphics_175,x:79.3,y:133.9}).wait(1).to({graphics:mask_6_graphics_176,x:79.3,y:129.6}).wait(1).to({graphics:mask_6_graphics_177,x:79.3,y:124.2}).wait(1).to({graphics:mask_6_graphics_178,x:79.3,y:119.2}).wait(1).to({graphics:mask_6_graphics_179,x:79.3,y:114.2}).wait(1).to({graphics:mask_6_graphics_180,x:79.3,y:109.2}).wait(1).to({graphics:mask_6_graphics_181,x:79.3,y:104.2}).wait(1).to({graphics:mask_6_graphics_182,x:79.3,y:99.2}).wait(1).to({graphics:mask_6_graphics_183,x:79.3,y:99.2}).wait(10));

	// rift
	this.instance_23 = new lib.logo_rifttouch();
	this.instance_23.parent = this;
	this.instance_23.setTransform(79.7,75.9,0.383,0.383,0,0,0,81.4,66);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(172).to({_off:false},0).to({regX:81.5,regY:66.2,x:79.8,y:72.3},1,cjs.Ease.get(1)).to({y:71},1).to({y:66.1},1).to({y:63.6},1).to({y:61.5},1).to({y:59.8},1).to({y:58.5},1).to({y:57.5},1).to({y:56.9},1).to({regX:81.4,regY:66,x:79.7,y:56.7},1).wait(11));

	// mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_172 = new cjs.Graphics().p("AlnIMIAAwXILPAAIAAQXg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(172).to({graphics:mask_7_graphics_172,x:79.2,y:63.2}).wait(21));

	// oculus
	this.instance_24 = new lib.logo_oculus();
	this.instance_24.parent = this;
	this.instance_24.setTransform(79.7,106.7,0.383,0.383,0,0,0,81.4,66);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(172).to({_off:false},0).to({y:56.7},10,cjs.Ease.get(1)).wait(11));

	// stadium
	this.instance_25 = new lib.logo_stadium();
	this.instance_25.parent = this;
	this.instance_25.setTransform(79.7,96.7,0.383,0.383,0,0,0,81.4,66);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(172).to({_off:false},0).to({y:56.7},10,cjs.Ease.get(1)).wait(11));

	// touch RT
	this.instance_26 = new lib.hardware_touch_RT_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(142.5,139.2,0.106,0.106,0,0,0,33,30.6);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(159).to({_off:false},0).to({regX:32.6,regY:30.2,scaleX:0.78,scaleY:0.78,x:175.8,y:132.9},20,cjs.Ease.get(-1)).wait(14));

	// touch LT
	this.instance_27 = new lib.hardware_touch_LT_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(153.4,139,0.106,0.106,0,0,0,23.6,24);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(159).to({_off:false},0).to({regX:23.1,regY:23.7,scaleX:0.78,scaleY:0.78,x:255.1,y:131.6},20,cjs.Ease.get(-1)).wait(14));

	// rift
	this.instance_28 = new lib.hardware_rift_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(149.5,131.9,0.106,0.106,0,0,0,69.2,42.4);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(159).to({_off:false},0).to({regX:69,regY:42.1,scaleX:0.78,scaleY:0.78,x:226.7,y:79},20,cjs.Ease.get(-1)).wait(14));

	// Layer 26
	this.instance_29 = new lib.bg_300x250_v2();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(193));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(146,125,336,250);
// library properties:
lib.properties = {
	id: 'B467BA012EB763448252DB0F60827B3C',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg_300x250_v2.jpg", id:"bg_300x250_v2"},
		{src:"images/game_1_unspoken.jpg", id:"game_1_unspoken"},
		{src:"images/game_2_loneecho.jpg", id:"game_2_loneecho"},
		{src:"images/game_3_startrek.jpg", id:"game_3_startrek"},
		{src:"images/game_4_superhot.jpg", id:"game_4_superhot"},
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
an.compositions['B467BA012EB763448252DB0F60827B3C'] = {
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